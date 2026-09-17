<!-- #INCLUDE FILE="PublicUsers_inc.asp" -->
<!-- #INCLUDE FILE="UserInfoParamsAccess_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Const kArrParamID	= 0
Const kArrTitle		= 1
Const kArrGroupID	= 2
Const kArrName		= 3
Const kArrType		= 4
Const kArrParamItemID	= 0
Const kArrParamName		= 1

Const kMultiDelim = "|"


Dim objUsersList, arrValue, nArrLength, objAttrParams, arrAttrParams, nParamsCnt, objDSCon, rsAttrParam, strSafeUserID, rsComment
Dim strTitle, bParent
Dim strMultiDelim

Sub DrawUserRoleFeatureTitle()
End Sub

Sub DrawUserRoleFeature()
End Sub

Sub DrawUserRoleFeatureFA()
	Call DrawUserRoleFeature()
End Sub

Sub DrawUserRoleFeatureAdd()
	Call DrawUserRoleFeature()
End Sub

Sub DrawUserRoleFeatureParams()
End Sub

Sub InitUserID()
End Sub

Sub ShowUserExtInfoTitle()
End Sub

Sub ShowUserExtInfo()
End Sub

Sub ShowUserExtInfoFA()
	Call ShowUserExtInfo()
End Sub

Sub ShowUserPassport()
	Dim rsUserDocs, strUserDocs
	Dim strPassDate, strPassInfo, strPassSer, strPassNum, strPassSubdiv, strDoctype

	'получить список документов удостоверяющих личность пользователя
	Set rsUserDocs = objUsersList.Fields()("rsUserDocs").Value

	While Not rsUserDocs.EOF
		' считываются поля документа
		strPassDate = rsUserDocs("PASS_DATE")
		strPassInfo = rsUserDocs("PASS_INFO")
		strPassSer = rsUserDocs("PASS_SER")
		strPassNum = rsUserDocs("PASS_NUM")
		strPassSubdiv = rsUserDocs("PASS_SUBDIV")
		strDoctype = rsUserDocs("PASS_TYPE")

		strUserDocs = strUserDocs & GetPassStr(strPassDate, strPassInfo, strPassSer, strPassNum, strPassSubdiv, strDoctype)

		rsUserDocs.MoveNext
		' если был не последний, тогда ставится перенос строки
		If Not rsUserDocs.EOF Then strUserDocs = strUserDocs & "<br><br>"
	WEnd

	%><td class="cell-text"><%=strUserDocs%></td><%
End Sub

Function GetPassStr(strPassDate, strPassInfo, strPassSer, strPassNum, strPassSubdiv, strDoctype)
	If IsDull(strPassDate) And IsDull(strPassInfo) And IsDull(strPassSer) And IsDull(strPassNum) Then
		GetPassStr = ""
	Else
		If IsDull(strPassDate) Then strPassDate = "" Else strPassDate = Date2Str(strPassDate)
		strPassInfo = DB2Value(strPassInfo) ' DB2Value is used to eliminate extra "&nbsp;"
		strPassSer = DB2Value(strPassSer)
		strPassNum = DB2Value(strPassNum)
		strDoctype = DB2Value(strDoctype)

		GetPassStr = obLanguage("SchoolInfo","kDocumentType") & ": " & strDoctype & ", " & strPassSer & "  № " & strPassNum & IIF((strPassDate <> "") Or (strPassInfo <> ""), "<br>" & obLanguage("Common","kPassportInfo") & " " & strPassDate & " " & strPassInfo, "")
	End If
End Function

Sub ShowUserExtInfoAdd()
	Call ShowUserExtInfo()
End Sub

Sub GetAccessibleParams()
	Call RetrieveUserRolesAndRights()
	Call GetUsersInfoParamsAccess()
	Call GetAccessibleParamsString()
	If IsDull(strAccessibleParamNames) Then strAccessibleParamNames="'_N_'"
	If IsDull(strAccessibleParamIDs) Then strAccessibleParamIDs="-100"
End Sub

Function GetCustomPageTitleHeader(strScName, strPageName)
	GetCustomPageTitleHeader = strScName & "<span align=""center"" class=""report-title"">" & DB2HTML_BR(strPageName) & "</span><br>"
End Function

Function DrawSchoolNameForPageTitlePrint(strScName)
	DrawSchoolNameForPageTitlePrint = "<span align=""center"" class=""smalltext"">" & DB2HTML(strScName) & "</span><br />"
End Function

Sub onDrawPage()
	Dim nIndex, bStudent, objRs, objSettings, bShowMPhone
	bStudent = GetSafeID(Request("Students"),"0")=1
	strMultiDelim = "<br>"
	If bExternal Then
		strMultiDelim = kMultiDelim
		Call DrawPageExternal()
		Exit Sub
	End If
	Call GetArrUsersFilters()
	Response.Write GetPageTitleExcel(strTitle, arrUsersFilters)
	If Not objUsersList.EOF Then %>
		<table class="table-print">
			<tr>
			<th rowspan="2"><%=obLanguage("Filter","kN_PP")%></th>
			<th rowspan="2"><%=obLanguage("Filter","kFIO")%></th><%
		If bFullAccessEditing Then%>
			<th rowspan="2"><%=obLanguage("Common","kDisplayName")%></th>
			<%If bCanShowUsersLoginNames And (CLng(strFunctionalityType)<>kFuncType_PreSchool Or (CLng(strFunctionalityType)=kFuncType_PreSchool And Not bStudent)) Then%>
				<th rowspan="2"><%=obLanguage("Common","kUserName")%></th><%
			End If
		End If%>
			<th rowspan="2"><%=obLanguage("Common","kBDate")%></th>
			<th rowspan="2"><%=obLanguage("Common","kGender")%></th><%
		If bFullAccessEditing Then%>
			<th rowspan="2"><%=obLanguage("Common","kNation")%></th><%
			If CLng(strFunctionalityType)<>kFuncType_PreSchool Or (CLng(strFunctionalityType)=kFuncType_PreSchool And Not bStudent) Then%>
				<th rowspan="2"><%=obLanguage("Common","kIdentityDocuments")%></th><%
			End If
		End If
		Call ShowUserExtInfoTitle()%>
			<th rowspan="2"><%=obLanguage("Common","kHomePhone_")%></th>
			<th rowspan="2"><%=obLanguage("Common","kMobilePhone")%></th>
			<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Or (CLng(strFunctionalityType)=kFuncType_PreSchool And Not bStudent) Then%>
				<th rowspan="2">E-mail</th><%
			End If
		If bFullAccessEditing Then%>
			<th rowspan="2"><%=obLanguage("Common","kHomeAddress")%></th>
			<th rowspan="2"><%=obLanguage("Common","kRegistrationAddress")%></th><%
		End If
		Call DrawUserRoleFeatureTitle()
		Call DrawGroupParamsTitle()%>
		</tr><%
		nIndex = 1
		If bFullAccessEditing Then
			While Not objUsersList.EOF
				Call InitUserID()
				Set objSettings = objNSNET.GetUserSettings(strSafeUserID)
				bShowMPhone = objSettings.ShowMobilePhone
				%>
				<tr><td class="cell-num"><%=nIndex%></td>
				<td class="cell-text"><%=DB2HTML_BR(objUsersList("LASTNAME")&" "&objUsersList("FIRSTNAME")&" "&objUsersList("MIDDLENAME"))%></td>
				<td class="cell-text"><%=DB2HTML_BR(objUsersList("NICKNAME"))%></td>
				<%If bCanShowUsersLoginNames And (CLng(strFunctionalityType)<>kFuncType_PreSchool Or (CLng(strFunctionalityType)=kFuncType_PreSchool And Not bStudent)) Then%>
					<td class="cell-text"><%=DB2HTML_BR(objUsersList("LOGINNAME"))%></td>
				<%End If %>
				<td class="cell-date"><%=Date2Str(objUsersList("BIRTHDATE"))%></td>
				<td class="cell-text"><%=DB2HTML_BR(objUsersList("GENDER"))%></td>
				<td class="cell-text"><%=DB2HTML_BR(objUsersList("CITIZENSHIP"))%></td><%
				Call ShowUserExtInfoFA()%>
				<td class="cell-num"><%=DB2HTML_BR(objUsersList("HOMEPHONE"))%></td>
				<td class="cell-num"><%=IIF(bShowMPhone, DB2HTML_BR(objNSNET.GetMobilePhoneForUser(strSafeUserID)), "&nbsp;")%></td>
				<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Or (CLng(strFunctionalityType)=kFuncType_PreSchool And Not bStudent) Then%>
					<td class="cell-text"><%=DB2HTML_BR(objUsersList("EMAIL"))%></td>
				<%End If
				Call DrawUserAddress(strSafeUserID)
				Call DrawUserRoleFeatureFA()
				Call DrawAttrParamsValue() %>
				</tr><%
				nIndex = nIndex + 1
				objUsersList.MoveNext
			Wend
		ElseIF CLng(strFunctionalityType)<>kFuncType_Add Then
			While Not objUsersList.EOF
				Call InitUserID()
				Set objSettings = objNSNET.GetUserSettings(strSafeUserID)
				bShowMPhone = objSettings.ShowMobilePhone
				%>
				<tr><td class="cell-num"><%=nIndex%></td>
				<TD class="cell-text"><%=DB2HTML_BR(objUsersList("LASTNAME")&" "&objUsersList("FIRSTNAME")&" "&objUsersList("MIDDLENAME"))%></TD>
				<TD class="cell-date"><%=Date2Str(objUsersList("BIRTHDATE"))%></TD>
				<TD class="cell-text"><%=DB2HTML_BR(objUsersList("GENDER"))%></TD><%
				Call ShowUserExtInfo()%>
				<TD class="cell-num"><%=DB2HTML_BR(objUsersList("HOMEPHONE"))%></TD>
				<TD class="cell-num"><%=IIF(bShowMPhone, DB2HTML_BR(objNSNET.GetMobilePhoneForUser(strSafeUserID)), "&nbsp;")%></TD>
				<% IF CLng(strFunctionalityType)<>kFuncType_PreSchool Or (CLng(strFunctionalityType)=kFuncType_PreSchool And Not bStudent) Then%>
				<TD class="cell-text"><%=DB2HTML_BR(objUsersList("EMAIL"))%></TD><%
				End If
				Call DrawUserRoleFeature()
				Call DrawAttrParamsValue() %>
				</tr><%
				nIndex = nIndex + 1
				objUsersList.MoveNext
			Wend
		Else
			While Not objUsersList.EOF
				Call InitUserID()
				Set objSettings = objNSNET.GetUserSettings(strSafeUserID)
				bShowMPhone = objSettings.ShowMobilePhone
				%>
				<tr><td class="cell-num"><%=nIndex%></td>
				<TD class="cell-text"><%=DB2HTML_BR(objUsersList("LASTNAME")&" "&objUsersList("FIRSTNAME")&" "&objUsersList("MIDDLENAME"))%></TD>
				<TD class="cell-date"><%=Date2Str(objUsersList("BIRTHDATE"))%></TD>
				<TD class="cell-text"><%=DB2HTML_BR(objUsersList("GENDER"))%></TD><%
				Call ShowUserExtInfoAdd()%>
				<TD class="cell-num"><%=DB2HTML_BR(objUsersList("HOMEPHONE"))%></TD>
				<TD class="cell-num"><%=IIF(bShowMPhone, DB2HTML_BR(objNSNET.GetMobilePhoneForUser(strSafeUserID)), "&nbsp;")%></TD>
				<% IF CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
				<TD class="cell-text"><%=DB2HTML_BR(objUsersList("EMAIL"))%></TD><%
				End If
				Call DrawUserRoleFeatureAdd()
				Call DrawAttrParamsValue() %>
				</tr><%
				nIndex = nIndex + 1
				objUsersList.MoveNext
			Wend
		End If
		%>
		</table><%
	End If
	Response.Write GetPageVerExcel()
	Call FreeResources()
	objUsersList.Close
	Set objSettings = Nothing
	Set objUsersList = Nothing
End Sub

Sub FreeResources()
End Sub

Sub DrawPageExternal()
End Sub

' Ф-ции DrawGroupParamsTitle и DrawAttrParamsValue предполагают, что нет "пустых" групп параметров (т.е. группа описана, а внутри неё нет элементов).
Sub DrawGroupParamsTitle()
	Dim rsGroup, nGroupElemCount
	Dim bMiss, strParamName
	Dim bShowMnsForms, bModuleTalentStudents

	bShowMnsForms = obContext.ServerSettings.SystemSettings.ShowMnsForms
	bModuleTalentStudents = obContext.ServerSettings.SystemSettings.ModuleTalentStudents
	While Not objAttrParams.EOF
		strParamName = objAttrParams("NAME")
		bMiss = False
		' #16280. В детсаду ИНН скрываем только для детей.
		If (CLng(strFunctionalityType) = kFuncType_PreSchool And (objAttrParams("NAME")="EGE_SUBJECTS" _
				Or strParamName="EGE_SUBJECTS_SHORT" Or strParamName="EGE_DOCTYPE" _
				Or strParamName="EDUC_PROGRAMM" Or strParamName="DEVIANT" _
				Or strParamName="EDUC_FORM" Or strParamName="QUIT_LEARNING_GROUP" _
				Or strParamName="QUIT_LEARNING" Or strParamName="TAKED_ACTIONS" Or strParamName="HEALTH_AFTER18")) _
			Or (CLng(strFunctionalityType) = kFuncType_PreSchool And nRoleFilter = RoleGroup_Students And strParamName="INN") _
			Or (CLng(strFunctionalityType) <> kFuncType_PreSchool And (strParamName="REGIME_IN_GROUP" _
				Or strParamName="PLAN_DEPART" Or strParamName="VACANT_OVZ" Or strParamName="EDUC_PROG_PRESCHOOL")) _
			Or (CLng(strFunctionalityType) = kFuncType_Add And (strParamName="QUIT_LEARNING_GROUP" _
				Or strParamName="QUIT_LEARNING" Or strParamName="TAKED_ACTIONS")) Then
			bMiss = True
		ElseIf bDisableHealthData And (strParamName="HEALTH" _
			Or strParamName="ILLNESS" Or strParamName="SCOPE_RESTRICT" Or strParamName="DISABILITY") Then 
			bMiss = True
		End If

		' #19661
		If Not bShowMNSForms And strParamName="MNS" Then
			bMiss = True
		End If

		' #20800
		If Not bModuleTalentStudents And (strParamName="TALENT" Or strParamName="TALENT_DIR" Or strParamName="TALENT_CURATORS" Or strParamName="CURATOR_OD") Then
			bMiss = True
		End If

		If strParamName = "REG_ADD_BY_PLACE_STR" Then
			bMiss = True
		End If

		If bMiss Then
			objAttrParams.MoveNext
		Else
			Select Case GetSafeStr(objAttrParams("PARAMTYPE"), 1, "")
			Case  "G"
				Set rsGroup = objAttrParams.Fields()("rsGroupParams").Value
				nGroupElemCount = rsGroup.RecordCount%>
				<th colspan="<%=nGroupElemCount%>"><%=DB2HTML(GetSafeStr(objAttrParams("TITLE"),-1,""))%></th><%
			Case  "F"
				If Not bExternal Then Call DrawGroupParamsTitle_Free(strParamName)
			Case Else
				If Not (bExternal And GetSafeStr(strParamName, -1, "") = "MOVEMENT") Then%>
					<th rowspan="2"><%=DB2HTML(GetSafeStr(objAttrParams("TITLE"),-1,""))%></th><%
				End If
			End Select	
			objAttrParams.MoveNext
		End If
	Wend
	If bFullAccessEditing Then
		If Not bExternal Then%>
			<th rowspan="2"><%=obLanguage("Common","kComment")%></th><%
		End If
	End If%>
	</tr><tr><%
	Call DrawUserRoleFeatureParams()
	If Not objAttrParams.BOF Then objAttrParams.MoveFirst
	While Not objAttrParams.EOF
		Select Case GetSafeStr(objAttrParams("PARAMTYPE"), 1, "")
		Case  "G"
			strParamName = objAttrParams("NAME")
			bMiss = False
			If (CLng(strFunctionalityType) = kFuncType_PreSchool And (objAttrParams("NAME")="QUIT_LEARNING_GROUP")) Then
				bMiss = True
			End If
			If (CLng(strFunctionalityType) = kFuncType_Add And (objAttrParams("NAME")="QUIT_LEARNING_GROUP")) Then
				bMiss = True
			End If
			If Not bMiss Then
				Set rsGroup = objAttrParams.Fields()("rsGroupParams").Value
				While Not rsGroup.EOF%>
					<th><%=DB2HTML_BR(GetSafeStr(rsGroup("TITLE"), -1, ""))%></th><%
					rsGroup.MoveNext
				Wend
			End If
		Case  "F"
			If Not bExternal Then Call DrawGroupParamsSubTitles_Free(strParamName)
		End Select
		objAttrParams.MoveNext
	Wend
	If Not objAttrParams.BOF Then objAttrParams.MoveFirst
End Sub

Sub DrawGroupParamsTitle_Free(ByVal strParamName)%>
	<th rowspan="2"><%=DB2HTML_BR(GetSafeStr(objAttrParams("TITLE"),-1,""))%></th><%
End Sub

Sub DrawGroupParamsSubTitles_Free(ByVal strParamName)
End Sub

Sub DrawAttrParamsValue()
	Dim rsUserAttrParams
	Dim strParamType_Title
	Dim strParamName, strParamValueID
	Dim strParamID_Title, strParamID_Curr
	Dim groupParameters_Title
	Dim strMChoiceValues
	Dim i, objRs, strTmp
	Dim bMiss
	Dim bShowMnsForms, bModuleTalentStudents

	bShowMnsForms = obContext.ServerSettings.SystemSettings.ShowMnsForms
	bModuleTalentStudents = obContext.ServerSettings.SystemSettings.ModuleTalentStudents

	'получить список значений параметров
	Set rsUserAttrParams = objUsersList.Fields()("rsAttrParams").Value

	Set groupParameters_Title = Nothing
	
	'если bof тогда перейти на первую запись
	If Not objAttrParams.BOF Then
		 objAttrParams.MoveFirst 
	end If

	'для каждого описания параметра
	While Not objAttrParams.EOF

		'получить тип описания параметра
		strParamType_Title = GetSafeStr(objAttrParams("PARAMTYPE"), 1, Null)

		'получить имя описания параметра
		strParamName = objAttrParams("NAME")

		'получить id описания параметра
		strParamID_Title = GetSafeID(objAttrParams("PARAMETERID"), Null)
		
		'получить значение параметроа текущего 
		If rsUserAttrParams.EOF Then
			strParamID_Curr = "0"
		Else
			strParamID_Curr = GetSafeID(rsUserAttrParams("PARAMETERID"), Null) 
		End If

		'если описание параметра - это группа
		If strParamType_Title = "G" Then 
			
			'если список заголовоков гроуппы ничто - получить список заголовков группы
			If groupParameters_Title Is Nothing Then 
				Set groupParameters_Title = objAttrParams.Fields()("rsGroupParams").Value 
			End If

			strParamType_Title = GetSafeStr(groupParameters_Title("PARAMTYPE"), 1, Null)
			strParamID_Title = GetSafeID(groupParameters_Title("PARAMETERID"), Null)
		End If

		If bExternal And (strParamID_Title=1040) Then
			' Эта ветка обеспечивает то, что для расширенного экспорта не показывается параметр "Движение".
			' # 8006. Проблема была в том, что раньше считалось, что значение параметра "Движение" всегда есть.
			' При этом здесь rsUserAttrParams "сдвигался" на следующее значение в любом случае.
			' Но если у параметра "Движение" нет значения, то в rsUserAttrParams
			' было значение для другого параметра (более позднего, чем "Движение"), в этом случае rsUserAttrParams сдвигать не надо.
			' Т.е. "сдвигать" надо только, если у параметра "Движение" есть значение.
			If strParamID_Title = strParamID_Curr Then
				If Not rsUserAttrParams.EOF Then 
					rsUserAttrParams.MoveNext 
				End If
			End If
		Else
			bMiss = False
			
			' #16280. В детсаду ИНН скрываем только для детей.
			If (CLng(strFunctionalityType) = kFuncType_PreSchool And (strParamName="EGE_SUBJECTS" _
					Or strParamName="EGE_SUBJECTS_SHORT" Or strParamName="EGE_DOCTYPE" _
					Or strParamName="EDUC_PROGRAMM" Or strParamName="DEVIANT" _
					Or strParamName="EDUC_FORM" Or strParamName="QUIT_LEARNING_GROUP" _
					Or strParamName="QUIT_LEARNING"  Or strParamName="TAKED_ACTIONS" Or strParamName="HEALTH_AFTER18")) _
				Or (CLng(strFunctionalityType) = kFuncType_PreSchool And nRoleFilter = RoleGroup_Students And strParamName="INN") _
				Or (CLng(strFunctionalityType) <> kFuncType_PreSchool And (strParamName="REGIME_IN_GROUP" _
					Or strParamName="PLAN_DEPART" Or strParamName="VACANT_OVZ" Or strParamName="EDUC_PROG_PRESCHOOL")) _
				Or (CLng(strFunctionalityType) = kFuncType_Add And (strParamName="QUIT_LEARNING_GROUP" _
					Or strParamName="QUIT_LEARNING" Or strParamName="TAKED_ACTIONS")) Then
				bMiss = True
			ElseIf bDisableHealthData And (strParamName="HEALTH" _
				Or strParamName="ILLNESS" Or strParamName="SCOPE_RESTRICT" Or strParamName="DISABILITY") Then 
				bMiss = True
			End If

			' #19661
			If Not bShowMNSForms And strParamName="MNS" Then
				bMiss = True
			End If

			' #20800
			If Not bModuleTalentStudents And (strParamName="TALENT" Or strParamName="TALENT_DIR" Or strParamName="TALENT_CURATORS" Or strParamName="CURATOR_OD") Then
				bMiss = True
			End If

			If strParamName = "REG_ADD_BY_PLACE_STR" Then
				bMiss = True
			End If

			'если стоит флаг пропустить 
			If bMiss Then
				'если заголовокПараметраId равен значениеПараметраId то идем дальше
				If strParamID_Title = strParamID_Curr Then
					rsUserAttrParams.MoveNext
				End If
			Else 'если не стоит флаг пропустить
				
				'если описаниеПараметраId == значениеПараметраId
				If strParamID_Title = strParamID_Curr Then

					'в зависимости от типа параметра выводим его значение
					select case strParamType_Title
					case "S", "A", "N"
						strTmp = rsUserAttrParams("PARAMVALUE")
						If strParamID_Title=2010 Then
							If objUsersList("SHOWMPHONE")=0 Then strTmp = String( Len(CStr(strTmp)), "*")
						End If%><td class="cell-text"><%=DB2HTML_BR(strTmp)%></td><%
						rsUserAttrParams.MoveNext
					case "L"%><td class="cell-text"><%=DB2HTML_BR(rsUserAttrParams("ITEMNAME"))%></td><%
						rsUserAttrParams.MoveNext
					case "D"%><td class="cell-date"><%=Date2Str(rsUserAttrParams("PARAMVALUE_DT"))%></td><%
						rsUserAttrParams.MoveNext
					case "F"
						If Not bExternal Then%>
							<%=DrawDb2HtmlFreeParameter(strSafeUserID, strParamName, rsUserAttrParams, strParamID_Title)%><%
						End If
						rsUserAttrParams.MoveNext
					case "M", "R"
						strMChoiceValues = DB2HTML(rsUserAttrParams("ITEMNAME"))
						rsUserAttrParams.MoveNext
						If rsUserAttrParams.EOF Then
							strParamID_Curr = "0"
						Else
							strParamID_Curr = GetSafeID(rsUserAttrParams("PARAMETERID"), Null)
						End If
						While strParamID_Title = strParamID_Curr
							strMChoiceValues = strMChoiceValues & strMultiDelim & DB2HTML(rsUserAttrParams("ITEMNAME"))
							rsUserAttrParams.MoveNext
							If rsUserAttrParams.EOF Then
								strParamID_Curr = "0"
							Else
								strParamID_Curr = GetSafeID(rsUserAttrParams("PARAMETERID"), Null)
							End If
						WEnd%><td class="cell-text"><%=(strMChoiceValues & IIf(IsDull(strMChoiceValues), "&nbsp;", ""))%></td><%
					case "P"
						strParamValueID = rsUserAttrParams("PARAMVALUE_ID")
						If Not IsNull(strParamValueID) Then
							Set objRs = objNSNET.GetUserParamItemInfo(strParamValueID)
							If objRs.EOF Then%><td class="cell-text">&nbsp;<%=strParamValueID&" "&obLanguage("Common","kInvalidParameter")%></td><%
							Else%><td class="cell-text"><%= DB2HTML(GetSafeStr(objRs("ITEMNAME"), -1, ""))%></td><%
							End IF
						Else
							%><td class="cell-text"></td><%
						End If
						rsUserAttrParams.MoveNext

					case "B"
						strTmp = rsUserAttrParams("PARAMVALUE")
						If strTmp = "1" Then
								%><td class="cell-text"><%=obLanguage("Common","kYes")%></td><%
						ElseIf strTmp = "0" Then
								%><td class="cell-text"><%=obLanguage("Common","kNo")%></td><%
						Else 
							%><td class="cell-text"></td><%
						End If
						rsUserAttrParams.MoveNext
					end select
				
				'иначе (если описаниеПараметраId != значениюПараметраId и тип параметра F)
				ElseIf strParamType_Title = "F" Then 
					If Not bExternal Then%>
						<%=DrawDb2HtmlFreeParameter(strSafeUserID, strParamName, rsUserAttrParams, strParamID_Title)%><%
					End If
				Else 'иначе (если описаниеПараметраId != значениюПараметраId ) вывести пустую строку
				%><td class="cell-text">&nbsp;</td><%
				End If
			End If
		End If

		If Not (groupParameters_Title Is Nothing) Then
			groupParameters_Title.MoveNext
			If groupParameters_Title.EOF Then
				Set groupParameters_Title = Nothing
				objAttrParams.MoveNext
			End If
		Else
			objAttrParams.MoveNext
		End If
	WEnd
	Set rsUserAttrParams = Nothing

	If bFullAccessEditing Then
		If Not bExternal Then%>
		<td class="cell-text"><%=DB2HTML_BR(objNSNET.GetUserComment(strSafeUserID, strCurrYearID))%></td><%
		End If
	End If
End Sub

Function GetAddress( rsAddr )
	Dim province
	If rsAddr.EOF Then GetAddress = "": Exit Function
	province = rsAddr("PROVINCENAME")
	If IsDull(province) Then province = ""
	GetAddress = rsAddr("ZIPCODE") & " " &rsAddr("STATEPROVINCENAME")& ", " &province & CHR(10) &_
		rsAddr("CITYNAME") & ", " & rsAddr("ADDRESS")
End Function


' #16280
' Добавил в эту ф-цию параметр strParamID_Title. Если в этой ф-ции реально используется rsUserAttrParams, то обязательно надо сравнить ID текущего
' параметра в rsUserAttrParams с strParamID_Title.
Function DrawDb2HtmlFreeParameter( ByVal strSafeUserID, ByVal strParamName, rsUserAttrParams, strParamID_Title )
	DrawDb2HtmlFreeParameter = "<td class=""cell-text"">&nbsp;</td>"
End Function


Sub DrawAddress( rsAddr )
	Dim arr, i, field
	i=0
	arr=Array(" "," "," "," "," "," "," ")
	If Not rsAddr.EOF Then
		for each field in Array("ZIPCODE","CITYNAME","DISTRICT","LOCATION","HOUSE","CORP","ROOM")
			arr(i) = rsAddr(field)
			i = i+1
		next
		field = rsAddr("PROVINCENAME")
		If Not IsDull(field) Then arr(1) = arr(1) &", " &field
	End If

	for each field in arr%>
		<td class="cell-text"><%=DB2HTML(field)%></td><%
	next
End Sub

Function GetPageTitleExcel_External( strPageName, arrPageParams )
	Dim n, i, strScName, strFilter
	Dim strTitleDelim, strPageTitle
	Dim nCol

	strTitleDelim = "&nbsp;&nbsp;&nbsp;&nbsp;"

	n = -1
	If IsArray(arrPageParams) Then
		n = UBound(arrPageParams)
	End If

	nCol = 1 + (n + 1) / 2
	strPageTitle = "<table class=""table-print""><tr><td class=""cell-text"" colspan=""" & nCol & """><b>" & DB2HTML_BR(strPageName) & "</b></td></tr>"

	strScName = ""
	If Not IsDull(strSchoolID) Then
		strScName = DB2HTML(objNSNET.GetSchoolName(strSchoolID))
	End If
	strFilter = strScName

	i = 0
	While i <= n
		If Not IsDull(strFilter) Then
			strFilter = strFilter & strTitleDelim
		End If
		strFilter = strFilter & "<b>" & DB2HTML_BR(arrPageParams(i)) & ":</b>&nbsp;" & DB2HTML_BR(arrPageParams(i+1))
		i = i + 2
	Wend

	If Not IsDull(strFilter) Then
		strPageTitle = strPageTitle & "<tr><td class=""cell-text"" colspan=""" & nCol & """>" & strFilter & "</td></tr>"
	End If
	strPageTitle = strPageTitle & "</table>"

	GetPageTitleExcel_External = strPageTitle
End Function

Function GetPageTitleExcel( strPageName, arrPageParams )
	GetPageTitleExcel = GetPageTitlePrint(strPageName, arrPageParams)
End Function

Sub DrawUserAddress(strUsrID)
	Dim rsAddr
	Dim bShowSecondAddr, bRegAddressByPlace

	Set rsAddr = objNSNET.GetUserAddress(strUsrID , 1)%>
	<TD class="cell-text"><%=DB2HTML_BR(GetAddress(rsAddr)) %></TD><%
	bShowSecondAddr = True
	If Not rsAddr.EOF Then
		If rsAddr("STATUS")="E" Then response.write "<td class=""cell-text"">"&obLanguage("UsersExport","kEqualAddress_")&"</td>" : bShowSecondAddr = False
	End If
	If bShowSecondAddr Then
		Set rsAddr = objNSNET.GetUserAddress(strUsrID , 0)%>
		<TD class="cell-text"><%=DB2HTML_BR(GetAddress(rsAddr)) %></TD><%
	End If
	'rsAddr.Close
	'Set rsAddr = Nothing
End Sub
%>

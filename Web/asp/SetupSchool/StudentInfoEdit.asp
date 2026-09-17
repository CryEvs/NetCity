<!-- #INCLUDE Virtual="/asp/header1.asp" -->
<!-- #INCLUDE file="UserInfoEdit_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE file="MoveDoc_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kCommissTypeID_Privilege = "4"

Dim objPar
Dim strForeignb
Dim strClassName, strClassID
Dim strSchoolFrom
Dim objArrive, objDepart
Dim bArriveOrderExists, bDepartOrderExists
Dim strParams, strNotInParams

Function GetRoleGroup()
	GetRoleGroup = RoleGroup_Students
End Function

Function GetUserListPage()
	GetUserListPage = "/angular/school/users/students/"
End Function

Sub GetUserRightsToEditing
	Dim rsNames, rsTmp

	If bAddSchool Then
		Set rsNames = objNSNET.GetStudentCurrClasses(strEditUserID, strCurrYearID)
		strClassName = err.description
		If Not rsNames.EOF Then
			strClassName = rsNames("CLASSNAME")
			Do
				rsNames.MoveNext
				If rsNames.EOF Then Exit Do
				strClassName = strClassName&","&rsNames("CLASSNAME")
			Loop
		End If
	Else
		strClassName = objNSNET.GetClassNameForStudent(strEditUserID, strCurrYearID)
	End If
	bFullAccessEditing = HasUserRight(arUsersEditStudents)

	If HasUserRight(arEditInfoSelf) And Not HasUserRight(arUsersEditStudents) Then
		If strClassName = "" Then
			strClassID = "0"
		Else
			strClassID = objNSNET.GetClassID(Empty, strCurrYearID, strClassName)
		End If
		If strClassName = "" Then
			bFullAccessEditing = False
		Else
			bFullAccessEditing = objNSNET.IsClassChief(strClassID, strUserID)
		End If
	End If
	If strClassName = "" Then strClassName = obLanguage("SetupSchoolUI","kClassNotAssigned",strFunctionalityType)

	strSchoolFrom = ""

	If bAddSchool Then
		Set rsTmp = objNSNET.GetStudentCurrClassAndMainSchool(strEditUserID, strCurrYearID)
		If Not rsTmp.EOF Then strSchoolFrom = GetSafeStr(rsTmp("EONAME"), -1, "") & ", " & GetSafeStr(rsTmp("CLASSNAME"), -1, "")
		If Not readonly And HasUserRight(arUsersEditStudents) Then
			bCanSave = True ' ???
			If Not strSchoolFrom = "" Then ' Больше негде редактировать и соответствующее право. А как прикреплённые???
				'bFullAccessEditing = False
				' Ученик в УДОДе, у него есть основная школа, поэтому можно редактировать лишь зависящие от уч. года поля, т.е. частичное редактирование
				bAddSchoolPartEdit = True
			End If
		End If

		If Not HasUserRight(arUsersEditStudents) Then
			readonly = True
		End If
	End If
End Sub

Function GetPageTitle()
	If bIsEMForSchool Then
		GetPageTitle = obLanguage("SetupSchoolUI","kTitleStudentInfo",strFunctionalityType) &": " & GreenText(Trim(DB2HTML(strLastName) & " " & DB2HTML(strFirstName) & " " & DB2HTML(strMiddleName)) )
	Else
		GetPageTitle = obLanguage("SetupSchoolUI","kTitleStudentInfo",strFunctionalityType) &": " & GreenText(DB2HTML(objNSNET.GetUserNickName(strEditUserID)))
	End If
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStudents
 	bTabInternalPage = True
End Function

Sub SpecialWriteState()
	Call obTokenMgr.SetData(strToken, "ROLEID", rlStudent)
	Call obTokenMgr.SetData(strToken, stSavePage, "SaveStudentInfo.asp")
	Call obTokenMgr.SetData(strToken, stStudClassID, strClassID)  ' for MChoiceParamEdit.asp
End Sub

Sub Main()
	Call MainUserInfo()

	If bNewAttrParams Then 
		Exit Sub
	End If

	Set objPar = objNSNET.GetStudentParents(strEditUserID)
	bParents = Not objPar.EOF

	bRightOnDelete = False

	strParams = ""
	strNotInParams = ""
	If CLng(strFunctionalityType) = kFuncType_PreSchool Then
		strNotInParams = "'EGE_SUBJECTS', 'EGE_SUBJECTS_SHORT', 'EGE_DOCTYPE', 'EDUC_PROGRAMM', 'EDUC_FORM', 'DEVIANT', 'INN', 'QUIT_LEARNING_GROUP', 'HEALTH_AFTER18'"
	Else
		' kFuncType_Common, kFuncType_Profession, kFuncType_Add
		strNotInParams = "'REGIME_IN_GROUP', 'PLAN_DEPART', 'VACANT_OVZ', 'EDUC_PROG_PRESCHOOL'"
		If bAddSchool Then
			strNotInParams = strNotInParams & ", 'EGE_SUBJECTS', 'EGE_SUBJECTS_SHORT', 'EGE_DOCTYPE', 'FOOD_PRIVILEGE', 'QUIT_LEARNING_GROUP'"
		End If
	End If

	If bDisableHealthData Then
		strNotInParams = strNotInParams & ", 'HEALTH', 'ILLNESS', 'SCOPE_RESTRICT', 'COMMISSIONS', 'DISABILITY'"
	End If

	If Not bShowMNSForms Then
		strNotInParams = strNotInParams & ", 'MNS'"
	End If

	If Not bModuleTalentStudents Then
		strNotInParams = strNotInParams & ", 'TALENT', 'TALENT_DIR', 'TALENT_CURATORS'"
	End If

	Set objInfo = objNSNET.GetUserInfoForRole(strSchoolID, strCurrYearID, 2, strEditUserID, strParams, strNotInParams)
	objInfo.Sort = "ORDERNO"
End Sub

Sub DrawPrintOnlyScripts( strPrintFile )
%>	var wndPrint=null;

	function openPrintUserCard(page) {
		var url = urlHelper.makeUrl("<%=strPrintFile%>", {cp: page, uid: <%=strEditUserID%>});
		var winOptions = { url: url, name: '_prnt', specs: 'status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=550', winChild: wndPrint };
		windowOpen( winOptions );
		wndPrint = winOptions.winChild;
		center(wndPrint, 750,550);
	}<%
End Sub

Sub SpecialHead()
If bNewAttrParams Then Exit Sub
%>
<SCRIPT><!--
<%If bFullAccessEditing And CLng(strFunctionalityType) <> kFuncType_PreSchool And Not bAddSchool Then DrawPrintOnlyScripts("StudentPersonalForm.asp" ) %>

function isBirthDayEmpty(form) {	
	return checkNotEmpty( form.BDT, language.Generic.SetupSchoolUI.kErrBirthdate ); ;
}
	
<%

If Not readOnly Then 
	%>
	function saveChanges() {
		userInfoEdit.save("SaveUserForm.asp");
	}
	<%
End If
	
%>
//--></SCRIPT>
<%
End Sub

Sub DrawSpecialButtons()
	If Not bFullAccessEditing Or strFunctionalityType <> kFuncType_Common Then
		Exit Sub
	End If%>

	<div class="btn-group">
		<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
			<span class="glyphicon glyphicon-print"></span>
			<%=obLanguage("SetupSchoolUI","kStudentCard")%> <span class="caret"></span>
		</button>
		<ul class="dropdown-menu" role="menu">
			<li><a href="JavaScript:openPrintUserCard(1);"><%=obLanguage("SetupSchoolUI","kPage_")%> 1</a></li>
			<li><a href="JavaScript:openPrintUserCard(2);"><%=obLanguage("SetupSchoolUI","kPage_")%> 2</a></li>
		</ul>
	</div><%
End Sub

Sub DrawSpecials()
	Dim strRemoveURL

	If bNewAttrParams Then
		%><student-parents></student-parents><%
	Else
		OpenFormGroup obLanguage("Common","kParents")
		If (Not bFullAccessEditing) Or ReadOnly Or bAddSchoolPartEdit Then
			If bParents Then
				While Not objPar.EOF
					If HasUserRight(arUsersEditStudentsMedInfo) And Not HasUserRight(arUsersEditStudents) And Not HasUserRight(arUsersEditStudentsPsyInfo) And Not HasUserRight(arShortInfoStudents) Then
						Response.Write DB2HTML(objPar("NICKNAME")) & "<br>"
					Else
						Response.Write ShowAnchor("userInfoEdit.gotoParentEdit("&objPar("PARENTID")&");",obLanguage("SetupSchoolUI","kParentInfo"), DB2HTML(objPar("NICKNAME")), "")&"<br>"
					End If
					objPar.MoveNext
				Wend
			Else
				Response.Write obLanguage("Common","kNo")
			End If
		Else%>
			<div class="row">
				<div class="col-md-12"><%
					Call ButtonWithClass( "userInfoEdit.gotoAssociate()", obLanguage("SetupSchoolUI","kAttachParent"), obLanguage("SetupSchoolUI","kAttachParent"), "glyphicon glyphicon-plus-sign", "btn-sm" )
					If bParents Then
						Call ButtonWithClass("userInfoEdit.gotoDissociate()", obLanguage("SetupSchoolUI","kDisattachParent"), obLanguage("SetupSchoolUI","kDisattachParent"), "glyphicon glyphicon-minus-sign", "btn-sm")
					End If%>
				</div>
			</div><%
			If Not objPar.EOF Then%>
				<table><%
					While Not objPar.EOF%>
						<tr>
							<td>
								<%Call DrawContextButtons(Array("userInfoEdit.dissociateParent(" & objPar("PARENTID") & ")", "", "danger", "glyphicon glyphicon-remove"), True, , "ctx-btns-icons-sm")%>
								<%=ShowAnchor("userInfoEdit.gotoParentEdit("&objPar("PARENTID")&");",obLanguage("SetupSchoolUI","kParentInfo"), DB2HTML(objPar("NICKNAME")), "")%>
							</td>
						</tr><%
						objPar.MoveNext
					Wend%>
				</table><%
			End If
		End If
		CloseFormGroup
	End If

	

	If bAddSchool Then
		Call DrawReadonlyRow( obLanguage("Common","kEOClassFrom"), strSchoolFrom )
	End If
End Sub

Function GetParamStatus(strParamName, strSYDepend)
	Dim nStatus
	nStatus = GetParamStatusCommon(strParamName, strSYDepend)

	If strParamName = "DEPARTREASON" Then
		' параметр оставлен только для поддержания соответствующего списка, он всегда Hidden
		nStatus = kParamStatus_Hidden
	ElseIf strParamName = "MOVEMENT" Then
		nStatus = kParamStatus_RO
	Else
		If bAddSchool Then
			If strParamName = "ADDEDUCATION" Then
				nStatus = kParamStatus_Hidden
			Else
				If strSYDepend <> "Y" And bAddSchoolPartEdit Then
					nStatus = kParamStatus_RO
				End If
			End If
		End If
	End If

	GetParamStatus = nStatus
End Function

Sub DrawFreeParam(objInfo, nElementStatus)
	Dim objRs, strParamName
	Dim nDocTypeID1, nDocTypeID2
	Dim strEOFullName
	Dim bEmptyAddSchools
	Dim mdClass

	Dim bActionButton, strActionBtnJs, strActionBtnTitle, strActionBtnHint, strActionBtnImg

	' #27264 Точнее определяем возможность редактирования параметра.
	bActionButton = (bFullAccessEditing Or nElementStatus = kParamStatus_Common) And Not ReadOnly
	strActionBtnTitle = obLanguage("Buttons","kChange")
	strActionBtnImg = "glyphicon glyphicon-pencil"

	strParamName = CStr(objInfo("NAME"))

	mdClass = "col-md-12"


	If strParamName = "TALENT_CURATORS" Then
		%>
		<student-curator-list studentid="<%=strEditUserID%>"></student-curator-list>
		<%
		Exit Sub
	End If

	%><div class="row"><%
	
	If strParamName = "ADDEDUCATION" Then
		' Draw ADDEDUCATION
		Set objRs = objNSNET.GetStudentCreatives(strEditUserID, strCurrYearID)
		strActionBtnJs = "userInfoEdit.editAddEducation()"
		strActionBtnHint = obLanguage("SetupSchoolUI","kBtnEditAddEducation")

		If Not objRs.EOF Then
			mdClass = "col-md-2"
			%><div class="col-md-10"><%
			While Not objRs.EOF%>
				<%=DB2HTML(objRs("EONAME"))%>&nbsp;-&nbsp;<%=DB2HTML(objRs("TYPENAME"))%><br /><%
				objRs.MoveNext
			Wend
			%></div><%
		End If

	ElseIf strParamName = "DOPEDUCATION" Then
		' Draw DOPEDUCATION
		mdClass = "col-md-2"
		Set objRs = objNSNET.GetStudentAddSchools(strEditUserID, strCurrYearID)
		strActionBtnJs = "userInfoEdit.viewDopEducation()"
		strActionBtnTitle = obLanguage("Buttons","kView")
		strActionBtnImg = "glyphicon glyphicon-eye-open"
		strActionBtnHint = obLanguage("SetupSchoolUI","kBtnViewDopEducation")

		bActionButton = Not objRs.EOF

		If Not objRs.EOF Then
			%><div class="col-md-10"><%
			While Not objRs.EOF%>
				<%=DB2HTML(objRs("EONAME"))%><br /><%
				objRs.MoveNext
			Wend
			%></div><%
		End If
	ElseIf strParamName = "COMMISSIONS" Then
		Call DrawCommissions(mdClass)
		strActionBtnJs = "userInfoEdit.editCommissions()"
		strActionBtnHint = obLanguage("SetupSchoolUI","kBtnEditCommissions")
		If bAddSchoolPartEdit Then
			bActionButton = False
		End If
	Else
		'bCanChange = False
	End If

	If bActionButton And Not IsDull(strActionBtnJs) Then
		%>
		<div class="<%=mdClass%>">
			<%Call DrawContextButtons(Array(strActionBtnJs, strActionBtnHint, "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")%>
		 </div>
		<%
	End If
	%></div><%
End Sub

Function DrawParamFeatures( strParamName )
	Select Case strParamName
	Case "PCHOME"
		DrawParamFeatures = True
	Case Else
		DrawParamFeatures = False
	End Select
End Function

Function GetRequiredStarsForBirthDate()
	GetRequiredStarsForBirthDate = "*** "
End Function

Sub DrawParameterFeatures( objGroup, strUniqueParamName )
	Dim objListItems
	Select Case CStr(objGroup("NAME"))
	Case "PCHOME"
		Set objListItems = objNSNET.GetUserInfoListItems(35)
		Call DrawSelectRs( objListItems, strUniqueParamName, "ITEMID", "ITEMNAME", GetSafeStrParam(objGroup("PARAMVALUE_ID"), "-1"), " ", "" )
	End Select
End Sub

Sub DrawCommissions(mdClass)
	Dim objRs
	Dim strEducForm, strEducProg, strViol, strSocStatus
	Dim bFirstTime
	Dim strCommissID, strPrevCommID
	Dim strComissTypeID, bPrivilege

	Set objRs = objNSNET.GetStudentCommissions(strEditUserID)
	If Not objRs.EOF Then
		mdClass = "col-md-2"
		%><div class="col-md-10"><%
		bFirstTime = True
		While Not objRs.EOF
			strCommissID = GetSafeID(objRs("COMMISSID"), Null)
			strComissTypeID = GetSafeID(objRs("COMMISSTYPEID"), Null)
			bPrivilege = (strComissTypeID = kCommissTypeID_Privilege)
			If bFirstTime Then
				bFirstTime = False
			Else%>
				<br><%
			End If%>
			<%=DB2HTML(objRs("TYPENAME"))%><%If Not bPrivilege Then%>,&nbsp;<%=DB2HTML(objRs("COMMISSNUM"))%><%End If%>,&nbsp;<%=Date2Str(objRs("STARTDATE"))%>&nbsp;-&nbsp;<%=Date2Str(objRs("ENDDATE"))%><br><%
			strEducForm = GetSafeStr(objRs("EDUC_FORM"), -1, "")
			If Not IsDull(strEducForm) Then%><%=obLanguage("SetupSchoolUI","kEducForm_2")%>:&nbsp;<%=DB2HTML(strEducForm)%><br><%End If

			If CLng(strFunctionalityType) = kFuncType_PreSchool Then
				strEducProg = GetSafeStr(objRs("EDUC_PROG_PRESCHOOL"), -1, "")
			Else
				strEducProg = GetSafeStr(objRs("EDUC_PROG"), -1, "")
			End If

			If Not IsDull(strEducProg) Then%><%=obLanguage("SetupSchoolUI","kEducProgramm_2")%>:&nbsp;<%=DB2HTML(strEducProg)%><br><%End If

			strViol = GetSafeStr(objRs("VIOL"), -1, "")
			If Not IsDull(strViol) Then%>
				<table border="0" cellpadding="0" cellspacing="0">
				<tr><td><%=IIf(bPrivilege, obLanguage("SetupSchoolUI","kPrivilegeType_2"), obLanguage("SetupSchoolUI","kViolationType_2"))%>:&nbsp;</td><td><%=DB2HTML(strViol)%></td></tr><%
			End If

			strSocStatus = GetSafeStr(objRs("SOC_STATUS"), -1, "")
			strPrevCommID = strCommissID
			Do While Not objRs.EOF
				objRs.MoveNext
				If objRs.EOF Then Exit Do
				strCommissID = GetSafeID(objRs("COMMISSID"), Null)
				If strCommissID = strPrevCommID Then 'Такое возможно только когда есть несколько видов нарушений для одной комиссии %>
					<tr><td>&nbsp;</td><td><%=DB2HTML(objRs("VIOL"))%></td></tr><%
				Else
					Exit Do
				End If
			Loop
			If Not IsDull(strViol) Then%>
				</table>
			<%End If

			If Not IsDull(strSocStatus) Then%><%=obLanguage("SetupSchoolUI","kSocialStatus_2")%>:&nbsp;<%=DB2HTML(strSocStatus)%><br><%End If
		Wend
		%></div><%
	End If
End Sub
%>

<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/filtersCommon.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects_IUP.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objAMRs, strActivityID, strTeacherID
Dim gradeComponent
Dim strSchoolActivityList
Dim objGrSysRs
Dim objParamRs, objStudParamRs
Dim strGradingID
Dim bOK

Function GetPageTitle()
	GetPageTitle = obLanguage("LearnApp","kTitleAppPolicies")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningApplications
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbApplPol
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arLASetPolicies)
End Function

Sub ReadState()
	strGradingID = "0"
	strTeacherID = strUserID

	strActivityID = GetSafeStr( Request("LAID"), 30, GetSafeStr(obTokenMgr.GetData( strToken, stAppSettingsLAID ),30,"") )
	strSchoolActivityList = obTokenMgr.GetData(strToken, "SCHOOLACTIVITYLIST" )
End Sub

Sub WriteState()
	WriteClass_IUP
	Call obTokenMgr.SetData(strToken,stCurrSubjClass, strSubjClassID)
	Call obTokenMgr.SetData( strToken,stAppSettingsLAID, strActivityID )
End Sub

Sub Main
	Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
	bOK = False

	Call InitYearClasses_IUP()
	If objClasses_IUP_rs.EOF Then Exit Sub
	Call InitSubjectGroups_IUP( )
	If strSubjClassID = "0" Then Exit Sub

	Set objAMRs = objNSNET.GetParametrizedActivityList(strSchoolActivityList)
	If objAMRs.EOF Then Exit Sub
	If strActivityID = "" Then strActivityID = GetSafeStr( objAMRs("ACTIVITYID"), 20, NULL )

	Set objGrSysRs = gradeComponent.GetGradingSystemList(strSchoolYearID )

	Call objNSNET.GetActivityParameters(strSubjClassID, strActivityID, objParamRs, objStudParamRs)
	bOK = Not objParamRs.EOF
End Sub

Sub onHead()
	If bOK Then
%>
<SCRIPT><!--
function copyClassValue( fieldType, paramID ) {
	var templ = "S" + fieldType + paramID + "S";
	var form = document.forms['LASpecInfo'];
	var i;
	var name = "C" + fieldType + paramID;
	for( i=0; i < form.elements.length; i++ ) {
		var element = form.elements[i];
		if( element.name.substring(0,templ.length) == templ ) {
			if( fieldType == "L" ){
				if( element.selectedIndex == form.elements["O" + name].value )
					element.selectedIndex = form.elements[name].selectedIndex;
			} else if( fieldType == "B" ) {
					element.checked = form.elements[name].checked;
			} else {
				if( element.value == form.elements["O" + name].value )
					element.value = form.elements[name].value;
			}
		}
	}
	if( fieldType == "L" ) {
		form.elements["O" + name].value = form.elements[name].selectedIndex;
	} else if( fieldType == "B" ) {
	// nothing to do
	} else {
		form.elements["O" + name].value = form.elements[name].value;
	}
}
function canSubmitForm() {
	var form = document.forms['LASpecInfo'];
	var i,n;
	for( i=0; i < form.elements.length; i++ ) {
		var element = form.elements[i];
		var str = element.name.substring(0,2);
		if( str == "SN" || str == "CN" )
			if( isNaN(str2lng( element.value )) ) {
				alert(language.Generic.Common.kErrMoreThanZero);
				element.focus(); return false;
			}
			else {
				n = str2lng( element.value );
				if( n<0 ) {
					alert(language.Generic.Common.kErrMoreThanZero);
					element.focus(); return false;
				}
				else element.value = n;
			}
	}
	return true;
}
function saveParams() {
	if( canSubmitForm() ) {
		var saveForm = document.forms['LASpecInfo'];
		jsSaveForm(saveForm);
	}
}
//--></SCRIPT>
<%
	End If
End Sub

Sub DrawButtons()
	If Not bOK Then Exit Sub
	If Not readonly Then
		ButtonSave "saveParams()", obLanguage("Common","kSave")
		ButtonReset "resetScreen('LASpecInfo')", obLanguage("Common","kReset")
	End if
End Sub

Sub DrawFilters( strForm )
	Call DrawYearClasses_IUP(strForm, False, obLanguage("Filter","kNoYearClasses",strFunctionalityType)) : If bExit Then Exit Sub
	Call DrawSubjectGroups( strForm, False ) : If bExit Then Exit Sub
	
	If bOK Then
		If objAMRs.EOF Then
			DrawInfo obLanguage("LearnApp","kNoLAForClassSubject"), False
			bExit = True
			Exit Sub
		End If

		OpenFormGroup obLanguage("Common","kLearnApp")%>
			<select name="LAID" onChange="ok('LASpec','')" class="form-control"><%
				PopulateSelect objAMRs, "ACTIVITYID", "ACTIVITYNAME", strActivityID%>
			</select><%
		CloseFormGroup
	End If
End Sub

Sub onDrawPage()%>
	<form name="LASpec" method="POST" action="AppPolicies.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonsFilters( True, "LASpec" )%>
	</form><%
	If bExit or Not bOK Then Exit Sub
	If objParamRs.EOF Then
		DrawInfo obLanguage("LearnApp","kNoLAParameters"), False
		bExit = True
		Exit Sub
	End If%>
	<form name="LASpecInfo" method="POST" action="SaveAppPolicies.asp" class="form-horizontal from-edit">
		<%=WriteObligatoryTags()%>
		<input type="HIDDEN" name="CLID" value="<%=strSubjClassID%>">
		<input type="HIDDEN" name="LAID" value="<%=strActivityID%>">
		<hr>
		<%Call DrawSettingCourses%>
	</form><%
End Sub

Sub DrawSettingCourses()
	Dim bGradingSystemEditable, strGradingParamID
	Dim objRs

	bGradingSystemEditable = False

	If objParamRs.RecordCount > 1 Then
		Call DrawGradingScaleTable
		Exit Sub
	End If

	strGradingParamID = objParamRs("CPARAMETERID")
	strGradingID = GetSafeID(objParamRs("DVALUE"),"0")
	If CLng( strGradingId ) = 0  Then
		Set objRs = gradeComponent.GetDefaultGradingScaleList(strCurrYearId )
		strGradingId = objRs("GRADINGSYSTEMID")
	End If
	bGradingSystemEditable = (objParamRs("EDITABLE") = "Y")

	If Not IsEmpty(objStudParamRs) Then
		If Not objStudParamRs.EOF Then
			Call DrawGradingScaleTable
			Exit Sub
		End If
	End If%>

	<div class="row">
		<div class="filters-panel <%=GetFiltersPanelWidth()%>"><%
			OpenFormGroup obLanguage("LearnApp","kGradingScale")
				If bGradingSystemEditable Then%>
					<input type="HIDDEN" name="GSPID" value="<%=strGradingParamID%>">
					<select name="GSID" onChange="dataChanged()" class="form-control">
						<%PopulateSelect objGrSysRs, "GRADINGSYSTEMID", "NAME", strGradingID%>
					</select><%
				End If
			CloseFormGroup%>
		</div>
	</div><%
End Sub

Sub DrawGradingScaleTable()
	Dim nCnt, i
	Dim strClassValues
	Dim bGradingSystem, bGradingSystemEditable, strGradingName, strGradingParamID
	Dim dictParams, arrParams
	Dim objRs%>

	<table class="table table-bordered">
		<tr>
			<th><%=obLanguage("LearnApp","kGradingScale")%></th><%
			strClassValues = ""
			bGradingSystem = False
			bGradingSystemEditable = False
			strGradingName = ""

			Set dictParams = Server.CreateObject("NetCity.Storage")

			Do While Not objParamRs.EOF
				If StrComp(CStr(objParamRs("NAME").value), "GradingSystem", 1) = 0 Then ' do textual comparition
					strGradingParamID = objParamRs("CPARAMETERID")
					strGradingID = GetSafeID(objParamRs("DVALUE"),"0")
					If CLng( strGradingId ) = 0  Then
						Set objRs = gradeComponent.GetDefaultGradingScaleList(strCurrYearId )
						strGradingId = objRs("GRADINGSYSTEMID")
					End If
					bGradingSystemEditable = (objParamRs("EDITABLE") = "Y")
					bGradingSystem = True
				Else%>
					<th><%= (objParamRs("TITLE")) %></th><%
					strClassValues = strClassValues & "<td class=""text-center"">" & _
						Field( Not IsNull( objParamRs("CLASSPARAMETERID") ), _
							objParamRs("EDITABLE") = "Y", _
							objParamRs("TYPE"), _
							"C" & objParamRs("TYPE") & objParamRs("CPARAMETERID"), _
							objParamRs("DVALUE"), _
							objParamRs("LISTITEMS") ) & "</td>"
					dictParams.Add CLng(objParamRs("CPARAMETERID")), Array( objParamRs("EDITABLE") = "Y", objParamRs("TYPE").Value, objParamRs("DVALUE").Value, objParamRs("LISTITEMS").Value )
				End If
				objParamRs.MoveNext
			Loop%>
		</tr>
		<tr>
			<td class="text-center">
				<%If bGradingSystemEditable Then%>
					<input type="HIDDEN" name="GSPID" value="<%=strGradingParamID%>">
					<select name="GSID" onChange="dataChanged()" class="form-control">
						<%PopulateSelect objGrSysRs, "GRADINGSYSTEMID", "NAME", strGradingID%>
					</select>
				<%Else%>
					<%=DB2HTML(strGradingName)%>
				<%End If%>
			</td>
			<%=strClassValues %>
		</tr><%
		If Not IsEmpty(objStudParamRs) Then
			If objStudParamRs.EOF Then%>
				</table><br><%
				DrawInfo obLanguage("Filter","kNoStudents",strFunctionalityType), False
			Else
				nCnt = objParamRs.RecordCount
				If bGradingSystem Then nCnt = nCnt - 1
				Do While Not objStudParamRs.EOF%>
					<tr>
						<td><%=DB2HTML(objStudParamRs("NICKNAME"))%></td><%
						For i = 1 To nCnt%>
							<td class="text-center"><%
								If objStudParamRs("P"&i) = 0 Then
									rw Field(False, Null, Null, Null, Null, Null)
								Else
									arrParams = dictParams( CLng(objStudParamRs("PID"&i)) )
									rw Field( True, _
										arrParams(0), _
										arrParams(1), _
										"S" & arrParams(1) & objStudParamRs("PID"&i) & "S" & objStudParamRs("ID"), _
										IIf( IsNull(objStudParamRs("V"&i)), arrParams(2), objStudParamRs("V"&i) ), _
										arrParams(3) )
								End If%>
							</td><%
						Next%>
					</tr><%
					objStudParamRs.MoveNext
				Loop%>
				</table><%
			End If
		Else%>
			</table><%
		End If
End Sub

Function Field( blnAvailable, blnEditable, strType, strName, strValue, strListItems )
	If Not bIsDebug Then On Error Resume Next
	Dim strBuf
	Dim arrListItems, lngIndex
	If Not blnAvailable Then
		Field = "---"
	Else
		If Not blnEditable Then
			If strType = "S" Then 'String
				Field = DB2HTML( strValue )
			ElseIf strType = "N" Then ' Number
				Field = DB2HTML( strValue )
			ElseIf strType = "B" Then ' Boolean
				If strValue = "Y" Then
					Field = "Да"
				Else
					Field = "Нет"
				End If
			ElseIf strType = "L" Then 'List
				arrListItems = Split( strListItems, "|" )
				lngIndex = GetSafeLngWithOutError( strValue, -1 )
				If lngIndex < 0 Or lngIndex > UBound( arrListItems ) Then
					Field = "<b>?</b>"
				Else
					Field = arrListItems(lngIndex)
					Field = Field
				End If
			Else
				Field = "<b>?</b>"
			End If
		Else
			Dim strEvent
			If Left(strName,1) = "C" Then
				If Mid(strName,2,1) = "B" Then
					strEvent = "onclick"
				Else
					strEvent = "onchange"
				End If
				strEvent = strEvent & "=""copyClassValue('"&Mid(strName, 2,1)& "','" &Mid(strName, 3)& "');dataChanged()"""
				Field = "<input type=""hidden"" name=""O" & DB2Value(strName) & """ value=""" & DB2Value(strValue) & """ >"

				Field = Field & "<input type=""hidden"" name=""CP"" value=""" & DB2Value(strName) & """ >"
			Else
				Field = "<input TYPE=""hidden"" name=""SP"" value=""" & DB2Value(strName) & """ >"
			End If
			If strType = "S" Then 'String
				Field = Field & "<input "&strEvent&" type=""text"" name=""" & DB2Value(strName) & """ value=""" & DB2Value(strValue) & """ size=""" & TextInputSize(20) & """ maxlength=""2000""  OnChange='dataChanged()'>"
			ElseIf strType = "N" Then ' Number
				Field = Field & "<input "&strEvent&" type=""text"" name=""" & DB2Value(strName) & """ value=""" & DB2Value(strValue) & """ size=""" & TextInputSize(5) & """ maxlength=20  OnChange='dataChanged()'>"
			ElseIf strType = "B" Then ' Boolean
				Field = Field & "<input "&strEvent&" type=""checkbox"" name=""" & DB2Value(strName) & """ "
				If strValue = "Y" Then Field = Field & "checked"
				Field = Field & "  OnClick='dataChanged()'>"
			ElseIf strType = "L" Then 'List
				arrListItems = Split( strListItems, "|" )
				lngIndex = GetSafeLngWithOutError( strValue, -1 )
				If lngIndex < 0 Or lngIndex > UBound( arrListItems ) Then
					Field = "<b>?</b>"
				Else
					Field = Field & "<select "&strEvent&" name=""" & strName & """ OnChange='dataChanged()' class=""form-control"">"
					Dim lngI
					For lngI = 0 To UBound( arrListItems )
						Field = Field & "<option value=""" & lngI &""""
						If lngI = lngIndex Then
							Field = Field & " selected "
						End If
						Field = Field & ">" & DB2HTML(arrListItems(lngI)) & "</option>"
					Next
					Field = Field & "</select>"
				End If
			Else
				Field = "<b>?</b>"
			End If
		End If
	End If
End Function
%>

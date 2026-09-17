<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strGroupName, strShortName, strSubjectID, strGroupID
Dim strBackPage

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTitle()
	GetPageTitle = IIF( strGroupID <> "0", obLanguage("SetupSchoolCalendar","kTitleEditSubGroup"), obLanguage("SetupSchoolCalendar","kTitleCreateSubGroup") ) & GreenText( DB2HTML(objNSNET.GetSubjectName(strSubjectID)) )
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolSubjects)
End Function

Sub ReadState()
	strBackPage = GetSafeStr(Request("BackPage"), -1, GetSafeStr( obTokenMgr.GetData(strToken,stBackPage), -1,  Request.ServerVariables("HTTP_REFERER" )) )
	strSubjectID = GetSafeID(obTokenMgr.GetData( strToken, stCurrSubject), NULL)

	strGroupID = GetSafeID(Request("GROUP"), "0")
	strGroupName = ""
	strShortName = ""
End Sub

'Sub WriteState() - из-за этого испортилось возвращение из стр. Предмет.
'	Call obTokenMgr.SetData(strToken,stBackPage,strBackPage)
'End Sub

Sub Main()
	Dim objRs
	If strGroupID <> "0" Then
		Set objRs = objNSNET.GetSubjectSubGroupInfo(strGroupID)
		If Not objRs.EOF Then
			strGroupName = CStr(objRs("GROUPNAME"))
			strShortName = GetSafeStr(objRs("GROUPABBREV"), -1, "")
		End If
		objRs.Close
		Set objRs = Nothing
	End if
End Sub

Sub onHead()
%>
<SCRIPT><!--
function Back() {
	goBack( document.main, "<%=strBackPage%>" );
}

function canSubmit() {
	var form = document.forms.main;
	if (trimStr(form.NAME.value) == '') {
		alert(language.Generic.SetupSchoolCalendar.kEnterSubGroupName);
		form.NAME.focus(); return false;
	}
	if (trimStr(form.ABBREV.value) == '') {
		alert(language.Generic.SetupSchoolCalendar.kEnterSubGroupShortName);
		form.ABBREV.focus(); return false;
	}
	return true;

}
//--></SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonCancel "Back()", obLanguage("Common","kBack")
	ButtonSave"ok_check_db('main','')", obLanguage("Common","kSave")
	ButtonReset "resetScreen('main');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()
	Dim nFactor, i%>

	<form name="main" method="post" action="SaveGroup.asp" class="form-horizontal form-edit">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="SBJID" value="<%=strSubjectID%>">
		<input type="hidden" name="GROUP" value="<%=strGroupID%>"><%
		Call DrawButtonPanel
		SetFiltersWidth "", "col-md-3", "col-md-5"
		Call DrawInputRow( obLanguage("SetupSchoolCalendar","kFullName") &":", strGroupName, "NAME", "text", 50, 50, "" )
		Call DrawInputRow( obLanguage("SetupSchoolCalendar","kAbbrName") &":", strShortName, "ABBREV", "text", 50, 10, "" )%>
	</form><%
End Sub
%>

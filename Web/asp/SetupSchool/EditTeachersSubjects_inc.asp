
<% ' © 2007-2015 IRTech. All rights reserved.
Dim strEditUserID, strBackPage, strSubjectID
Dim objRs
Dim bWizard

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleTeacherSubjects",strFunctionalityType) & GreenText( DB2HTML(objNSNET.GetUserNickName(strEditUserID)) )
End Function

Sub ReadState()
	bWizard = False
	Call SpecialReadState()
	strEditUserID = Request("UID")
	If IsDull( strEditUserID ) Then strEditUserID = obTokenMgr.GetData(strToken,stUsersStaffUserID)
	strEditUserID = GetSafeID( strEditUserID, NULL )
	strBackPage = GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER" ))
End Sub

Sub SpecialReadState()
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, "ViewType", "0")
End Sub

Sub Main()
	If Not ( HasUserRight(arUsersEditStaff) ) Then GenerateError obLanguage("Common","kErrPageAccess")
	Set objRs = objNSNET.GetAvailableSubjectListForTeacher(strEditUserID, strSchoolID)
End Sub

Sub OnSpecialHead()%>
<SCRIPT><!--
function TeacherIsBusy(strSubjectName) {
	$.show.confirmation('<%=obLanguage("Common","kTeacher",strFunctionalityType)&" "&(DB2Java(objNSNET.GetUserNickName(strEditUserID)))&" " &obLanguage("SetupSchoolCalendar","kTeaching")%> "' + strSubjectName + '". <%=obLanguage("SetupSchoolCalendar","kMsgViewTeachSubjects")%>?').then(function() {
		postTo("/angular/school/classmanagement/subjectgroups/?teacherId=" + '<%=strEditUserID%>');
	});
}

function Back(){
	goBack(document.ChangeTeachersSubjects, '<%=strBackPage%>');
}

//--></SCRIPT>
<%
End Sub

Sub DrawButtons
	ButtonSave "ok_check_db('ChangeTeachersSubjects', '');", obLanguage("Common","kSave")
	ButtonReset "resetScreen('ChangeTeachersSubjects');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()
	Dim strID, i
	Dim strCheckboxLabel, bDisabled, bChecked
%><form name="ChangeTeachersSubjects" METHOD="POST" ACTION="/asp/SetupSchool/SaveTeachersSubjects.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("UID", strEditUserID, "TID", strEditUserID, "BackPage", strBackPage) )%><%

	If objRs.EOF Then
		DrawInfo obLanguage("SetupSchoolCalendar","kNoSbjectList"), False
	Else
		DrawButtonPanel
		%><div class="row">
			<div class="col-lg-3 col-md-4"><%
		i = 0
		Do While Not objRs.EOF
			If i > 0 And i Mod 25 = 0 Then
			  %></div><div class="col-lg-3 col-md-4"><%
			End If
			strID = objRs("SUBJECTID")
			bDisabled = CLng(objRs("USED")) <> 0
			bChecked = Not IsNull(objRs("ASSIGNED"))
			strCheckboxLabel = DB2Html(objRs("SUBJECTNAME"))

			If bDisabled Then
				If CLng(objRs("PASTUSED"))=0 And Not bWizard Then
					strCheckboxLabel = ShowAnchor( "TeacherIsBusy('"&(DB2Java(objRs("SUBJECTNAME")))&"')", obLanguage("Common","kChoose"), DB2Html(objRs("SUBJECTNAME")), "" )
				End If
			End If
			rw ShowParamCheckbox("SUBJS", strID, bChecked, IIF(bDisabled," disabled='disabled'",""), strCheckboxLabel, "dataChanged();")
			objRs.MoveNext
			i = i + 1
		Loop
		%></div>
		</div><%
	End If
%></form><%
End Sub
%>

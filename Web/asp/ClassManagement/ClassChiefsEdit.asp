<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim i
Dim objTeachersRs, objClassChiefs
Dim strClassName, strClassID

Function GetPageTitle()
	GetPageTitle = obLanguage("ClassManagement","kClassChiefs",strFunctionalityType)
End Function

Sub ReadState()
	'If Not HasUserRight(arClassMgmEditSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")
	strClassID = GetSafeID(Request("PCLID"), "0")
	If strClassID = "0" Then strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), Null)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stCurrClass, strClassID)
End Sub

Sub Main
	Set objTeachersRs = objNSNET.GetTeacherListAndClassChiefs(strCurrYearID, strClassID)
	Set objClassChiefs = objNSNET.GetClassChiefs(strClassID)
End Sub

Sub onHead()
%>
<SCRIPT><!--
function Back(){
	goBack(document.ClassChiefs, "ClassProfile.asp");
}
function canSubmit()
{
	if( $(document.ClassChiefs).find('input:checked').length < 1)
	{
		alert(language.Generic.ClassManagement.kMsgMustSelectPreSchoolClassTeachers);
		return false;
	}
	return true;
}
function saveChanges(){
	if( isDBBusy() ) return false;
	var form = document.ClassChiefs;
	ok_check_db('ClassChiefs', 'ClassChiefsSave.asp');
}

function resetForm(){
	document.forms["ClassChiefs"].reset();
}

//--></SCRIPT>
<%
End Sub

Function IsClassChief( teacherID )
	IsClassChief = False
	teacherID = CLng(teacherID)
	objClassChiefs.MoveFirst
	Do While Not objClassChiefs.EOF
		If CLng(objClassChiefs("TEACHERID")) = teacherID Then IsClassChief = True: Exit Do
		objClassChiefs.MoveNext
	Loop
End Function

Sub DrawButtons
	ButtonSave "saveChanges();", obLanguage("Common","kSave")
	ButtonReset "resetForm();", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()
	Dim nTeacherId
	%>
	<div class="row">
		<div class="col-md-6">
			<form NAME="ClassChiefs" METHOD="post" ACTION="SaveClassSubject.asp">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("PCLID", strClassID))%><%
				DrawButtonPanel

				While Not objTeachersRs.EOF
					nTeacherId = objTeachersRs("TEACHERID")
					rw ShowCheckbox("teachersID", nTeacherId, IsClassChief(nTeacherId), objTeachersRs("NICKNAME"), "dataChanged()")
					objTeachersRs.MoveNext
				Wend
			%>
			</form>
		</div>
	</div>
<%
End Sub
%>

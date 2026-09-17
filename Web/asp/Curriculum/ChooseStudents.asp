<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strAssignmentID, nSubjectGroupId
Dim objRs, i
Dim objRs1
Dim yearIsClosed
Dim dtStartDate, dtDueDate

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kTitleChooseStudents",strFunctionalityType)
End Function

Function hasUserRightsOnPage()
	If HasUserRight(arJournalEditAll) Then hasUserRightsOnPage =true :Exit Function
	If HasUserRight(arJournalEditSelf) Then hasUserRightsOnPage =true :Exit Function
	hasUserRightsOnPage = HasUserRight(arLAEditSelf)
End Function

Sub ReadState()
	Dim objForm

	nSubjectGroupId = GetSafeID(obTokenMgr.GetData(strToken,stCurrSubjClass),"0")
	strAssignmentID = GetSafeID(obTokenMgr.GetData(strToken,stCrMngmAssignmentID),"-1")

	If IsObject(obTokenMgr.GetData(strToken,"QA_dct")) Then
		Set objForm = obTokenMgr.GetData(strToken,"QA_dct")
		dtStartDate = GetSafeDate( objForm("ADT"), null )
		dtDueDate = GetSafeDate( objForm("DDT"), null )
	Else
		GenerateHTMLError obLanguage("Common","kInvalidParameter"), "/asp/Curriculum/EditAssignment.asp", strToken
	End If
End Sub

Sub Main()
	On Error Resume Next
	Err.Clear
	Set objRs = objNSNET.GetStudentListForAssignment(strAssignmentID, nSubjectGroupId, dtStartDate, dtDueDate)
	If Err <> 0 Then
		GenerateHTMLError obLanguage("Curriculum","kCantGetStudentListForAssign",strFunctionalityType) & IIf (bIsDebug, vbCrLf & Err.Description, ""), "/asp/Curriculum/EditAssignment.asp", strToken
	End If

	strCurrYearID = GetSafeLng(Request("CURRYEAR"),GetSafeLng(obTokenMgr.GetData(strToken,stCurrYear),strSchoolYearId))
	yearIsClosed = CBool(objNSNET.IsYearClosed(strCurrYearID))
End Sub

Sub onHead()
%>
<SCRIPT><!--
function CanSaveSelection() {
	var i, form = document.forms['ChooseForm'];
	if (form) {
		if (typeof(form.elements['CHK_ST'].length)=='undefined') {
			if (form.elements['CHK_ST'].checked == false) {
				alert(language.Generic.Curriculum.kAtLeastOneStudentMustBeSelected + '<%= LCase(obLanguage("Common","Ученик",strFunctionalityType))%>' );
				return false;
			}
		}
		else {
			var i,hasSel;
			hasSel = false;
			for (i=0;i<form.elements['CHK_ST'].length;++i)
				if (form.elements['CHK_ST'][i].checked == true) hasSel = true;
			if (hasSel == false) {
				alert(language.Generic.Curriculum.kAtLeastOneStudentMustBeSelected + '<%= LCase(obLanguage("Common","Ученик",strFunctionalityType))%>' );
				return false;
			}

		}
	}
	return true;
}
function AllSelected() {
	var i, form = document.forms['ChooseForm'];
	if (form) {
		if (typeof(form.elements['CHK_ST'].length)=='undefined')
			return (form.elements['CHK_ST'].checked == true)
		else {
			var i,allSel;
			allSel = true;
			for (i=0;i<form.elements['CHK_ST'].length;++i)
				if (form.elements['CHK_ST'][i].checked == false) allSel = false;
			return  allSel;
		}
	}
}
function SaveSelection() {
	if( CanSaveSelection() )
		if (AllSelected())
			DoSubmit(document.ChooseAllForm,"");
		else
			DoSubmit(document.ChooseForm,"");
}
function CheckAll() {
	var form = document.forms['ChooseForm'];
	if (form) {
		if (!form.elements['CHK_ST'].length) {
			form.elements['CHK_ST'].checked = true;
		}
		else {
			var i;
			for (i=0;i<form.elements['CHK_ST'].length;++i)
				form.elements['CHK_ST'][i].checked = true;
		}
	}
}
function UncheckAll() {
	var form = document.forms['ChooseForm'];
	if (form) {
		if (!form.elements['CHK_ST'].length) {
			if (form.elements['RES_ST'].value == 0)
				form.elements['CHK_ST'].checked = false;
		}
		else {
			var i;
			for (i=0;i<form.elements['CHK_ST'].length;++i)
				if (form.elements['RES_ST'][i].value == 0)
					form.elements['CHK_ST'][i].checked = false;
		}
	}
}
function ReturnBack() {
	DoSubmit(document.BackForm,"");
}
function restoreCheck(obj) {
	alert(language.Curriculum.kStudentHaveMarkForAssignment);
	if (!obj.checked) obj.checked=true;
}
//--></SCRIPT>
<%
End Sub

Sub onDrawPage()
%>
<FORM NAME="BackForm" ACTION="/asp/Curriculum/EditAssignment.asp" METHOD="POST">
<%=WriteObligatoryTags()%>
</FORM>

<FORM NAME="ChooseAllForm" ACTION="/asp/Curriculum/SaveAssignment.asp" METHOD="POST">
<%=WriteObligatoryTags()%>
</FORM>

<FORM NAME="ChooseForm" ACTION="/asp/Curriculum/SaveAssignment.asp?All=0" METHOD="POST" OnKeyPress="dataChanged()">
<%=WriteObligatoryTags()%>
<table border=0 cellspacing=0 cellpadding=3>
<tr>
	<td valign="top"><%
	If objRs.EOF Or yearIsClosed Then
		Call ButtonCancel( "ReturnBack()", obLanguage("Common","kBack") )
	Else
		Response.Write( ShowButton("CheckAll" ,"markall", "JavaScript:CheckAll()", obLanguage("Common","kCheckAllStudents",strFunctionalityType), obLanguage("Common","kCheckAll")) & "<br>" )
		Response.Write( ShowButton("UncheckAll" ,"clearall", "JavaScript:UncheckAll()", obLanguage("Common","kUncheckAllStudents",strFunctionalityType), obLanguage("Common","kUnCheckAll")) & "<br>" )
		Call ButtonSave( "SaveSelection()", obLanguage("Curriculum","kSaveForSelectedStudents") & obLanguage("Common","kStudent_r",strFunctionalityType) )
		Call ButtonCancel( "ReturnBack()", obLanguage("Common","kBack") )
	End If%>
	</td>
	<td valign="top">
	<%If objRs.EOF Then%>
		<H3 align="center">&nbsp;<%=obLanguage("Curriculum","kNoStudentsInClass2",strFunctionalityType) & obLanguage("Common","kStudent_r",strFunctionalityType)%></H3>
	<%Else%>
		<table class="ThinTable" border="1" width="100%" cellpadding="1" cellspacing="0">
		<tr><th width="3">&nbsp;</th><th><%=obLanguage("Common","kStudents",strFunctionalityType)%></th></tr><%
			While Not objRs.EOF
			%><tr><td align="center"><input type="checkbox" name="CHK_ST" value="<%=GetSafeID(objRs("USERID"),"0")%>" <%=Iif( GetSafeID(objRs("ASSIGNMENTID"),"0")<>0, "checked", "")%> <%If IsNull(ObjRs("RESULT")) Then%> OnClick="dataChanged();"<%
					Else%> OnClick="restoreCheck(this);"<%
					End If%>>
				<input type="hidden" name="RES_ST" value="<%=GetSafeLng(objRs("RESULT"),0)%>">
			</td>
			<td><%=DB2HTML(objRs("NICKNAME"))%></td></tr><%
				objRs.MoveNext
			WEnd%>
		</table>
<%End If%>
</td></tr></table>
</form>
<%
End Sub
%>

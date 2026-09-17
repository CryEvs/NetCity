<!-- #INCLUDE VIRTUAL="/asp/headersimple.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE FILE="ExplanatoryNote_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim nAttachmentID, strAFileName, strADescription, strAct
Dim strDocID ,strDocName, strDescr,strPlanID,objDocInfo ,strFileNameOrig
Dim yearIsClosed

Function GetPageTitle()
	GetPageTitle = IIf(strDocID = "0", kTitleExplanatoryNoteCreate, kTitleExplanatoryNoteEdit)
End Function

Sub ReadState()
	strAct = GetSafeStr(Request("ACT"),20, "newdoc" )
	strDocID = GetSafeID( Request("DOCID"), "0" )
	strPlanID =GetSafeID(obTokenMgr.GetData(strToken, stPlanIDsave),"-1")
End Sub

Sub onHead()
%>
<script><!--
function canSubmit(){
	var form = document.forms["DocEdit"];
<%If strDocID = "0" Then%>
	if( trimStr(form.elements["docFile"].value) == '' ){
		alert(language.Generic.SetupSchoolPortfolio.kErrEmptyFileName);
		form.elements["docFile"].focus();
		return;
	}
<%End If%>
	if( !checkAreaLength(form.elements["DESCR"], <%=kMaxLen_Descr%>, '<%=obLanguage("SetupSchoolPortfolio","kDescr")%>') )
		return false;
	return true;
}
function backToList(){
	goBack(document.DocBack, 'Planner.asp');
}
function saveChanges(){
	ok_check_db('DocEdit', 'ExplanatoryNoteSave.asp');
}
//-->
</script>
<%
End Sub

Sub Main()
	If strDocID <> "0" Then
		Set objDocInfo = objNSNET.GetExplanatoryNoteDocInfo(strPlanID )
		TestError kErrorCannotGetSubjPlansInfo
		If objDocInfo.EOF Then
			GenerateError kErrorCannotGetSubjPlansInfo
		End If
		strFileNameOrig = GetSafeStr(objDocInfo("FILENAME_ORIG"), kMaxLen_FileName, Null)
		strDescr = GetSafeStr(objDocInfo("DESCRIPTION"), kMaxLen_Descr, "")
	Else
		strDescr = ""
	End If
End Sub

Function WriteExplanatoryNoteObligatoryTags()
	WriteExplanatoryNoteObligatoryTags = _
		WriteHiddenTags( Array("ACT",strAct))
End Function

Sub onDrawPage()
%>
<FORM NAME="DocEdit" METHOD="post" ENCTYPE="multipart/form-data" >
<%=WriteObligatoryTags()%>
<%=WriteExplanatoryNoteObligatoryTags()%>
<table cellpadding=3><tr>
	<td valign="top"><%
		Call ButtonSave( "saveChanges()", obLanguage("Common","kSave") )
		Call ButtonReset( "resetScreen('DocEdit')", obLanguage("Common","kCancel") )
		Call ButtonCancel( "backToList()", obLanguage("Common","kBack") ) %>
	</td><td>
	<table class="ThickTable" border="1" align="center" cellpadding="3" cellspacing="0"><%
		'Call DrawReadonlyRow( obLanguage("ResourceGroups","kGroupName") & ":", strGroupName )%>
		<tr><th nowrap><%=IIf(strDocID = "0", obLanguage("SetupSchoolPortfolio","kDocFile"), obLanguage("SetupSchoolPortfolio","kNewDocFile"))%>:</th>
			<td valign="top">
				<input type="file" name="docFile" SIZE="<%=IIf(isIE, "50", "25")%>"><br>
			</td>
		</tr><%
		If strDocID <> "0" Then
			Call DrawReadonlyRow( obLanguage("SetupSchoolPortfolio","kExistingDocFile") & ":", strFileNameOrig )
		End If
		'Call DrawInputRow( obLanguage("SetupSchoolPortfolio","kDocName") & ":", strDocName, "DOCNAME", "text", 50, kMaxLen_Name, "" )
		Call DrawInputRow( obLanguage("SetupSchoolPortfolio","kDescr") & ":", strDescr, "DESCR", "area", 50, 4, "" ) %>
	</table>
</td></tr></table>
</FORM>
<FORM NAME="DocBack" METHOD="post">
<%=WriteObligatoryTags()%>
<%=WriteExplanatoryNoteObligatoryTags()%>
</FORM>
<%
End Sub
%>

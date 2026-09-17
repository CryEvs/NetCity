<!-- #INCLUDE VIRTUAL="/asp/headersimple.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/attachments_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim objForm, strBackPage,strEditUserID
Dim blnShortAttach
Dim yearIsClosed

Function GetPageTitle()
	If nAttachmentID <> 0 Then GetPageTitle = obLanguage("Curriculum","kTitleChangeAttachedFile") Else GetPageTitle = obLanguage("Curriculum","kTitleAttachFile")
End Function

Sub ReadState()
	strBackPage = obTokenMgr.GetData(strToken,stBackPage)
	If strBackPage="/asp/grade/EditJournalAssignments.asp" Or strBackPage="" Then strBackPage = "/asp/Curriculum/EditAssignment.asp"
	If Not IsObject(obTokenMgr.GetData(strToken,"QA_dct")) Then
		GenerateHTMLError obLanguage("Common","kInvalidParameter"), strBackPage, strToken
	End If
	Set objForm = obTokenMgr.GetData(strToken,"QA_dct")
	nAttachmentID = GetSafeLng ( objForm("ATTACHMENTID"), 0)

	strAFileName = GetSafeStr( objForm("AFileName"),200, "" )

	blnShortAttach=(Request("ShortAttach")="1")

	If (blnShortAttach=false) Then
		strADescription = GetSafeStr( objForm("ADESC"),4000, "" )
		strEditUserID=""
	else
		strADescription = ""
		strEditUserID = GetSafeLng( objForm("EDITUSERID"), GetSafeLng( Request("EDITUSERID"), 0) )
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stDocIDs, nAttachmentID & ",")
End Sub

Sub onHead()
%>
<script><!--
<%Call DrawAttachmentsScripts()%>
function saveAttachment(){
	if( isDBBusy() ) return false;
	var form = document.forms["EditAttachment"];

	if( form.elements["adoc"].value.length == 0 ){
		alert(language.Generic.Curriculum.kEnterFileName);
		form.elements["adoc"].focus();
		return false;
	}
	if (form.elements["ADESC"]) {
		if( form.elements["ADESC"].value.length > 3600 ){
			alert(language.Generic.Curriculum.kAttachFileDescrLimit);
			form.elements["ADESC"].focus();
			return false;
		}
	}
	setDBBusy();
	DoSubmit(form, "");
}
function cancelEdit(){
	goBack(document.MenuForm, "<%=strBackPage%>");
}
//--></script>
<%
End Sub

Sub Main()
	'strCurrYearID = GetSafeLng(Request("CURRYEAR"),GetSafeLng(obTokenMgr.GetData(strToken,stCurrYear),strSchoolYearId))
	'yearIsClosed = CBool(objNSNET.IsYearClosed(strCurrYearID))
End Sub

Sub onDrawPage()
%>
<form NAME="EditAttachment" METHOD="post" ENCTYPE="multipart/form-data" ACTION="/asp/Curriculum/SaveAttachment.asp" OnSubmit="return canSubmitForm();" OnKeyPress="dataChanged()">
<%=WriteObligatoryTags()%>
<input type="hidden" name="ATTACHMENTID" VALUE="<%=nAttachmentID%>">
<input type="hidden" name="AFileName" VALUE="<%=strAFileName%>">
<%If blnShortAttach Then%>
	<input type="hidden" name="EDITUSERID" VALUE="<%=strEditUserID%>">
<%End if%>
<table border=0 cellspacing=0 cellpadding=3>
<tr>
	<td valign="top"><%
	ButtonSave   "saveAttachment()", obLanguage("Common","kSave")
	ButtonCancel "cancelEdit()", obLanguage("Common","kBack")	%>
	</td>
	<td valign="top">
	<table border="1" class="ThickTable" width="75%" ALIGN="center" CELLPADDING="5" CELLSPACING="0">
		<TR>
			<TH WIDTH="20%" valign="top"><%=obLanguage("Common","kAttachedFile")%>:</TH>
			<TD VALIGN="TOP"><%
				If CLng(nAttachmentID)<>0 Then%>
					<%=obLanguage("Curriculum","kFileName")%>:&nbsp;<%Call AttachmentLink(nAttachmentID, strAFileName)%><br>
					<%=obLanguage("Curriculum","kReplacingFile")%>:<BR><input type="file" name="adoc" SIZE="<%=TextInputSize(30)%>"><br><%
				Else%>
					<%=obLanguage("Common","kAttachedFile")%>:<BR><input type="file" name="adoc" SIZE="<%=TextInputSize(30)%>"><br><%
				End If
				If Not blnShortAttach Then%>
					<%=obLanguage("Curriculum","kDescription")%>:<br><TEXTAREA NAME="ADESC" COLS="50" ROWS="10" WRAP="soft" onChange="JavaScript:dataChanged()"><%= DB2TextArea(strADescription) %></TEXTAREA>
				<%End if%>
			</TD>
		</TR>
	</table>
	</td>
</tr>
</table>
</form>
<%
End Sub
%>

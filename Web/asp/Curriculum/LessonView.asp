<!-- #INCLUDE VIRTUAL=/asp/headersimple.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/attachments_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
Dim objLessonInfo, objPlanUnitInfo, strSubject

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kTitleLessonView2")
End Function

Sub Main()
	Dim strUnitID, strLessonID
	strLessonID = GetSafeID(Request("LID"), Null)
	Set objLessonInfo = objNSNET.GetLessonInfoWithContentElements(strLessonId)
	strUnitID = objLessonInfo("UNITID")
	Set objPlanUnitInfo = objNSNET.GetSubjectPlanUnitInfo(strUnitID)
	If objLessonInfo.EOF Then GenerateError(obLanguage("Curriculum","kLessonNotExists"))

	strSubject = objPlanUnitInfo("SUBJECTNAME") & "/" & objPlanUnitInfo("GRADE") & " " & obLanguage("Curriculum","kClassSmall",strFunctionalityType)
	strSubject = strSubject & "/" & Trim(objPlanUnitInfo("VARIANTNAME"))
	nAttachmentID = GetSafeLng( objLessonInfo("HA_ATTACHMENTID"), 0 )
	If nAttachmentID <> 0 Then
		If Not IsNull(objLessonInfo("AFILENAME")) Then
			strAFileName = GetSafeStr( objLessonInfo("AFILENAME"),200, "" )
			strADescription = GetSafeStr( objLessonInfo("ADESCRIPTION"), 4000, " " )
		End If
	End If
End Sub

Sub WriteState()
	If nAttachmentID <> 0 Then
		Call AppendStateDocs(nAttachmentID & ",")
	End If
End Sub

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Sub onHead()
%>
<SCRIPT><!--
<%Call DrawAttachmentsScripts()%>
isHaveToLogout = false;
function cancelEdit(){window.close(); }
//--></SCRIPT>
<%
End Sub

Sub onDrawPage()
%><br>
<table border=0 cellspacing=0 cellpadding=3>
<tr><td valign="top"><%ButtonCancel "cancelEdit()", obLanguage("Curriculum","kClose")%></td>
	<td valign="top">
		<table class="ThickTable" border="1" align="center" cellpadding="5" cellspacing="0">
			<tr><th nowrap><%=obLanguage("Curriculum","kLesTheme", strFunctionalityType)%>:</th><td width="200"><%=DB2HTML(objLessonInfo("LESSONNAME"))%></td></tr>
			<tr><th valign="top"><%=obLanguage("Curriculum","kUnit")%>:</th><td><%=DB2HTML(objPlanUnitInfo("UNITNAME"))%></td></tr>
			<tr><th valign="top"><%=obLanguage("Common","kSubject")%>:</th><td nowrap><%=DB2HTML(strSubject)%></td></tr>
			<tr><th valign="top"><%=obLanguage("Curriculum","kNumLessonInUnit", strFunctionalityType)%>:</th><td><%=DB2HTML(objLessonInfo("NLESSONINUNIT"))%></td></tr>
			<tr><th valign="top"><%=obLanguage("Curriculum","kDescription")%>:</th><td><%=DB2HTML(objLessonInfo("DESCRIPTION"))%></td></tr>
			<tr><th valign="top"><%=obLanguage("Curriculum","kBookRef")%>:</th><td><%=DB2HTML(objLessonInfo("BOOKREF"))%></td></tr>
			<tr><th valign="top"><%=obLanguage("Curriculum","kHomeworkAndDetailsForStudents", strFunctionalityType)%>:</th><td><%=DB2HTML(objLessonInfo("HOMEASSIGNMENT"))%></td></tr>
			<tr><th valign="top"><%=obLanguage("Curriculum","kCodeElementContent")%>:</th><td><%=DB2HTML(objLessonInfo("CODECONTENTELEMENT"))%></td></tr>
			<tr><th valign="top"><%=obLanguage("Curriculum","kElementContent")%>:</th><td><%=DB2HTML(objLessonInfo("CONTENTELEMENT"))%></td></tr>
			<tr><th valign="top"><%=obLanguage("Common","kAttachedFile")%>:</th><td><%
			If CLng(nAttachmentID)<>0 Then%>
				<%=obLanguage("Common","kAttachedFile")%>: <%Call AttachmentLink(nAttachmentID, strAFileName)%><br>
				<%=DB2HTML_BR(strADescription)%><%
			Else%>
				&nbsp;<%
			End If%></td></tr>
		</table>
</td></tr></table><%
End Sub
%>

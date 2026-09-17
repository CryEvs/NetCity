<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/html_url.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/attachments_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
'	AID=<Assignment ID>

Dim bJuniorLA, bIsResult, bIsManual, bIsDeleted
Dim strAID, strSubjClassID, strStudentID
Dim strTTSURL, strEntryURL, strResultsURL
Dim strStudentName, strLaName, strProductId
Dim objRs, objAssignmentRs, objLessonInfo, showRowsWithCE, bHomeAssignment, bTestAssignment

Function GetPageTitle()
	GetPageTitle = IIF(bHomeAssignment, obLanguage("Curriculum","kTitleHAssignmentDetails"), obLanguage("Curriculum","kTitleAssignmentDetails")) & obLanguage("Common","kStudent_r",strFunctionalityType) & ": " & GreenText(DB2HTML(objNSNET.GetUserNickName(strStudentID)) & ", " & DB2HTML(objAssignmentRs("NAME")) ) &_
		GreenText( " (" & DB2HTML(objAssignmentRs("LASTNAME")) & " " & DB2HTML(objAssignmentRs("FIRSTNAME")) & " " & DB2HTML(objAssignmentRs("MIDDLENAME")) & ")" )
End Function

Sub ReadState()
	strSubjClassID = GetSafeID(Request("CID"), NULL)
	strStudentID = GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent), NULL)
	strAID = GetSafeID(Request("AID"), NULL)
	bHomeAssignment = (GetSafeStr(Request("TP"), kLengthAssignmentType, "") = obLanguage("Assignment","kATHomeWorkS"))
	bTestAssignment = (GetSafeStr(Request("TP"), kLengthAssignmentType, "") = obLanguage("Assignment","kATTestingS"))
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stDocIDs, nAttachmentID & ",")
End Sub

Sub Main()
	If Not HasUserRight(arAssignmentsViewComplete) Then GenerateError obLanguage("Common","kErrPageAccess")
	
	Set objAssignmentRs = objNSNET.GetStudentAssignmentInfoWithLessonAndSubject(strStudentID, strAID)
	Set objLessonInfo = objNSNET.GetLessonInfoWithContentElements(GetSafeLng(objAssignmentRs("LESSONID"), -1))
	showRowsWithCE = ShowRowsWithContentElements()

	Dim objJName
	bIsDeleted = False
	If objAssignmentRs("ACTIVITYID") = "courses" Then
		Set objJName = objNSNET.GetAssignmentsCoursesInfo(strAID)
		strProductId = objJName("productid")
		Set objJName = objConLa.Execute("select productname from products where productid='" & strProductId & "'")
		strLaName = objJName("productname")
		bJuniorLA = True
	Else
		strLaName = objAssignmentRs("ACTIVITYNAME")
		bJuniorLA = False
		If GetSafeStr(objAssignmentRs("ISDELETED"), 1, "N")="Y" Then bIsDeleted = True
	End If
	
	If objAssignmentRs.EOF Then Response.Redirect "Assignments.asp?" & Ver() & "&AT=" &strToken 'GenerateError "Это задание уже было выполнено."

	nAttachmentID = GetSafeLng(objAssignmentRs("ATTACHMENTID"),0)
	If nAttachmentID<>0 Then
		If IsNull(objAssignmentRs("AFileName")) Then GenerateError obLanguage("Curriculum","kInvalidReference")
		strAFileName = objAssignmentRs("AFileName")
		strADescription = objAssignmentRs("ADescription")
	End If
	strTTSURL = GetTTSURL()
	strEntryURL = objAssignmentRs("ENTRYURL")
	strResultsURL = objAssignmentRs("RESULTSURL")
	bIsResult = Not IsDull(objAssignmentRs("RESULT"))
	bIsManual = IsNull(objAssignmentRs("PROBLEMNAME"))
	bTestAssignment = (Not bIsManual And bTestAssignment)
End Sub

Sub onHead()
%>
<SCRIPT><!--
<%Call DrawAttachmentsScripts()%>
function cancel() {
	DoSubmit( document.MenuForm, "/asp/Curriculum/Assignments.asp");
}
<%If Not HasUserRole(rlParent) And Not bIsManual Then
	If bIsResult And (Not IsDull(strResultsURL)) Then%>
function ShowResults( url, sID, aID ) {
	var url = "/asp/RemoteHostProxy.asp?PROXYURL="+ url + '&AT=<%=strToken%>&TTSURL=<%= Server.URLEncode(strTTSURL)%>&STUDENTID=' + sID+ '&AID=' + aID<%
	If bJuniorLA Then
	%>+ '&LAID=<%=strProductId%>'<%
	End If
	%>;
	var wnd=window.open( url, '_blank', 'status=yes,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=560' );
//	maximize(wnd);
}
<%ElseIf Not IsDull(strEntryURL) Then%>
function StartLA( url, classID, aID ) {
	var url = "/asp/RemoteHostProxy.asp?PROXYURL="+ url + '&AT=<%=strToken%>&TTSURL=<%= Server.URLEncode(strTTSURL)%>&CID=' + classID+ '&AID=' + aID<%
	If bJuniorLA Then
	%>+ '&LAID=<%=strProductId%>'<%
	End If
	%>;
	var wnd=window.open( url, '_blank', 'status=yes,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=560' );
//	maximize(wnd);
}
<%End If
End If%>
//--></SCRIPT>
<%
End Sub

Function ShowRowsWithContentElements()
	Dim isBindLessonAndContentElements

	isBindLessonAndContentElements = objNSNET.BindLessonsAndContentElements(GetSafeLng(objAssignmentRs("SUBJECTID"), -1), strSchoolYearId)
	ShowRowsWithContentElements = Module_QA_Available() And isBindLessonAndContentElements And Not objLessonInfo.EOF
	If ShowRowsWithContentElements Then
		ShowRowsWithContentElements = ShowRowsWithContentElements And Not IsNull(objLessonInfo("CONTENTELEMENT"))
	End If
End Function

Sub onDrawPage()%>
<br><table border=0 cellspacing=0 cellpadding=3>
<tr><td valign="top" width="10%">
	<%Call ButtonCancel( "cancel()", obLanguage("Common","kBack") )%>
	</td>
	<td align="left">
	<table class="ThickTable" border="1" cellpadding="5" cellspacing="0">
	<tr>
		<th width="15%"><%=IIF(bTestAssignment, obLanguage("Assignment","kATAssignment"), IIF(bHomeAssignment, obLanguage("Assignment","kHomeAssignment"), obLanguage("Assignment","kATAssignmentTheme")))%>:</th>
		<td><%=DB2HTML(objAssignmentRs("ASSIGNMENTNAME"))%></td>
	</tr><tr>
		<th NOWRAP><%=IIF(bTestAssignment, obLanguage("Curriculum","kDueDateStudent"), IIF(bHomeAssignment, obLanguage("Curriculum","kDueDateStudent"), obLanguage("Curriculum","kDateLesson")))%>:</th>
		<td><%=FormatDateTime(objAssignmentRs("DUEDATE"),vbLongDate)%></td>
	</tr><tr>
		<th><%=IIF(bHomeAssignment, obLanguage("Curriculum","kTeachersDetails"), obLanguage("Curriculum","kNotes"))%>:</th>
		<td><%=DB2HTML_BR_URL(objAssignmentRs("ADESCR"))%></td>
	</tr>
	<%If showRowsWithCE Then%>
		<tr>
			<th valign="top"><%=obLanguage("Curriculum","kCodeElementContent")%>:</th>
			<td><%=DB2HTML(objLessonInfo("CODECONTENTELEMENT"))%></td>
		</tr><tr>
			<th valign="top"><%=obLanguage("Curriculum","kElementContent")%>:</th>
			<td><%=DB2HTML(objLessonInfo("CONTENTELEMENT"))%></td>
		</tr>
	<%End If%>
	<%If Not bIsManual Then%>
	<tr>
		<th><%=obLanguage("Common","kLearnApp")%>:</th>
		<td><%
			If HasUserRole(rlParent) Then
				%><%=DB2HTML(strLaName)%><%
			Else
				If bIsResult Then
					If IsDull(strResultsURL) Or bIsDeleted Then
						%><%=DB2HTML(strLaName)%><%
					Else
						%><A HREF="JavaScript:ShowResults( '<%=CStr(strResultsURL)%>','<%=strStudentID%>','<%=DB2Java(objAssignmentRs("AID"))%>')" TITLE="<%=obLanguage("Curriculum","kViewResultsInActivity")%>" onMouseOver="self.status='<%=obLanguage("Curriculum","kEnterInto")%> <%=DB2Java(strLaName)%>'; return true;" onMouseOut="self.status='';"><%=DB2HTML(strLaName)%></A><%
					End If
				ElseIf Not (IsDull(strEntryURL) Or bIsDeleted) Then%><A HREF="JavaScript:StartLA( '<%=CStr(strEntryURL)%>','<%=strSubjClassID%>','<%=DB2Java(objAssignmentRs("AID"))%>')" TITLE="<%=obLanguage("Curriculum","kEnterIntoActivity")%>" onMouseOver="self.status='<%=obLanguage("Curriculum","kEnterInto")%> <%=DB2Java(strLaName)%>'; return true;" onMouseOut="self.status='';"><%=DB2HTML(strLaName)%></A><%
				Else
					%><%=DB2HTML(strLaName)%><%
				End If
			End If  %>
		</td>
	</tr><tr>
		<th NOWRAP><%=obLanguage("Assignment","kATAssignmentTheme")%>:</th>
		<td><%=DB2HTML(objAssignmentRs("PROBLEMNAME"))%></td>
	</tr>
	<%End If%>
	<tr><th NOWRAP><%=obLanguage("Common","kAttachedFile")%>:</th>
		<td><%
		If CLng(nAttachmentID)<>0 Then
			Call AttachmentLink(nAttachmentID, strAFileName)%><br>
			<%=obLanguage("Curriculum","kDescription")%>:<br><%= DB2HTML_BR(strADescription) %><%
		Else%>&nbsp;<%
		End If%>
	</td></tr></table>
</td></tr></table>
<%
End Sub
%>

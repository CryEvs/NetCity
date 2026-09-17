<!-- #INCLUDE virtual="/asp/headerprint.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim sMsgID, rsMsg, sTO, sCC, sBody, nMsgSize, cAType, sAttachment, bSendReport, strPapers

Function GetTitle()
	GetTitle = obLanguage("Messages","kTitlePrintMsg")
End Function

Sub Main
	sMsgID = GetSafeID(Request("M"), NULL)

	'' Added check for UserID!
	Set rsMsg = objNSNET.GetMessageInfo(sMsgID, strUserId)
	TestError obLanguage("Messages","kErrNotFoundMsg")
	if rsMsg.EOF then GenerateError obLanguage("Messages","kErrNotFoundMsg")

	sBody = rsMsg("TEXT")

	If Not IsNull(rsMsg("ATYPE")) Then cAType = rsMsg("ATYPE")
	If Not IsNull(rsMsg("ATTACHMENT")) Then sAttachment = rsMsg("ATTACHMENT")

	if IsNull(rsMsg("SENTTO")) then sTO = "" else sTO = CStr(rsMsg("SENTTO"))
	if IsNull(rsMsg("SENTCC")) then sCC = "" else sCC = CStr(rsMsg("SENTCC"))

	bSendReport = CBool(GetSafeStr(Request("RP"),1,"") = "R")
End Sub

Function onLoad()
	if bSendReport then onLoad="window.focus();"
End Function

Sub onDrawPage()
%>
<table border="0" class="NullTable"><col width="10%" align="right"/>
<tr>
	<td><b><%=obLanguage("Messages","kFromWhom")%></b>:</td>
	<td><%=DB2HTML(GetSafeStr(rsMsg("FROMNAME"), -1, "") & IIF(IsDull(rsMsg("FROMEONAME")),"", "("& rsMsg("FROMEONAME") &")"))%></td>
</tr><tr>
	<td><B><%=obLanguage("Messages","kWhom")%>:</B></td><td><%=DB2HTML(sTO)%></td>
</tr><%
If Not IsDull(sCC) Then%><tr>
	<td><B><%=obLanguage("Messages","kCopy")%>:</B></td><td><%=DB2HTML(sCC)%></td>
</tr><%
End If
strPapers = obTokenMgr.GetData (strToken, "strPapers")
If Not IsDull(strPapers) Then
	obTokenMgr.SetData strToken, "strPapers", Null
	rw "<tr><td nowrap><b>" & obLanguage("SetupSchoolUI","kPaperMail")
	rw ":</td></b><td><b>" & strPapers & "</td></b></tr>"
End If%>
<tr>
	<td><B><%=obLanguage("Messages","kPosted")%>:</B></td>
	<td><%=DB2HTML(Date2Str(rsMsg("SENT")))%>&nbsp;&nbsp;<%=DB2HTML(Time2Str(rsMsg("SENT")))%></td>
</tr><tr>
	<td><B><%=obLanguage("Messages","kMsgSubject")%>:</B></td>
	<td><%=DB2HTML(GetSafeStr(rsMsg("SUBJ"),kSubjectLength,""))%></td>
</tr>
</table><%
	If Len(sBody) > 0 Then Response.Write "<HR><TT>" & ConvertText(sBody) & "</TT>"
	If cAType = "H" And Len(sAttachment) > 0 Then 
		sAttachment = RewritePhotos(sAttachment)
		Response.Write "<HR>" & sAttachment
	End If
	Response.Write "<br>" & GetPageVerPrint()
End Sub
%>

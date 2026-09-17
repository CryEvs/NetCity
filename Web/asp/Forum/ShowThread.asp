<!-- #INCLUDE FILE="../headersimple.asp" -->
<!-- #INCLUDE FILE="DaysMonths_inc.asp" -->
<!-- #INCLUDE FILE="ForumConstants_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/html_url.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/Photo_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kThreadsFormName = "THREADSFORM"
Const kPageSize			= 20

Dim bPaging
Dim nThreadId, nPage, nPageSize, nTPage, nThreads, nStart, nEnd
Dim strTopicName, strTopicModers
Dim arrForumThreads, arrValidPhotoUserIDs
Dim bForumModerator, bExistsTopicModer, b2OrMoreTopicModers
Dim bNoThreads
Dim bRightEdit, bRightSend

Sub ReadState()
	nThreadId	= GetSafeId( Request("TID"), 0 )
	nPage		= GetSafeLng( Request("PAGE"), 1 )
	nPageSize	= GetSafeLng( Request("PAGESIZE"), 25 )
	nTPage		= GetSafeLng( Request("TPAGE"), 1 )

	bRightEdit = HasRightOnEditForum(nThreadID)
	bRightSend = HasUserRight(arForumSendReceive)
	If Not bRightEdit And Not bRightSend Then GenerateError obLanguage("Common","kErrPageAccess")
End Sub

Function GetPageTitle()
	If Not bNoThreads Then strTopicName = arrForumThreads(1,0)
	GetPageTitle = DB2HTML(strTopicName)
End Function

Sub Main()
	Dim objForumThreads, objForumThreadModers, objModerRoles, strRoles
	Call InitDaysMonths
	Set objForumThreads = objNSNET.GetTopicMessages(nThreadId )
	Set objForumThreadModers = objNSNET.GetModeratorsList(strSchoolID, nThreadId)
	If Not objForumThreadModers.EOF Then
		bExistsTopicModer = True
		b2OrMoreTopicModers = objForumThreadModers.RecordCount > 1
		While Not objForumThreadModers.EOF
			strRoles = ""
			Set objModerRoles = objForumThreadModers.Fields()("rsUserRoles").Value
			If Not objModerRoles.EOF Then
				strRoles = " ("
				While Not objModerRoles.EOF
					strRoles = strRoles & objModerRoles("ROLENAME") & ", "
					objModerRoles.MoveNext	
				Wend
				strRoles = Left(strRoles,Len(strRoles)-2)
				strRoles = strRoles & ")"
			End If
			strTopicModers = strTopicModers & objForumThreadModers("NICKNAME") & IIF(strRoles <> "", strRoles, "" ) & ", "
			objForumThreadModers.MoveNext
		Wend
		strTopicModers = Left(strTopicModers,Len(strTopicModers)-2)
	End If
	arrForumThreads = objForumThreads.GetRows(,,Array("MESSAGEID","NAME","NICKNAME","MESSAGETEXT","SENT","USERID"))
	nThreads = Ubound( arrForumThreads, 2 ) + 1
	bNoThreads = (nThreads = 0)
	If bNoThreads Then Exit Sub
	If nThreads > kPageSize Then
		bPaging = true
	Else
		bPaging = false
	End If

	nStart = (nTPage - 1) * kPageSize

	If nStart > nThreads - 1 Then
		nTPage = nTPage - 1
		nStart = (nTPage - 1) * kPageSize
		nEnd = nTPage * kPageSize - 1
		If nEnd > nThreads - 1 Then
			nEnd = nThreads - 1
		End If
	ElseIf nStart < 0 Then
		nTPage = 1
		nStart = 0
		nEnd = kPageSize - 1
		If nEnd > nThreads - 1 Then
			nEnd = nThreads - 1
		End If
	Else
		nEnd = nTPage * kPageSize - 1
		If nEnd > nThreads - 1 Then
			nEnd = nThreads - 1
		End If
	End If
	bForumModerator = bRightEdit And Not readonly
	ReDim arrValidPhotoUserIDs(nEnd-nStart)
End Sub

Sub onHead()
%><SCRIPT><!--
	isHaveToLogout = false;
function gotoPage( pagenum )
{ ok('<%=kThreadsFormName%>','ShowThread.asp?TID=<%=nThreadId%>&PAGE=<%=nPage%>&PAGESIZE=<%=nPageSize%>&TPAGE='+(pagenum+1)) }
function Back()
{
	var form = document.forms['<%=kThreadsFormName%>'];
	<%If Not readonly Then%>
	$.when(((form.MESSAGE.value !='') && ($.show.confirmation(language.Generic.Common.kConfirmNoSave))) || (form.MESSAGE.value =='')).then(function(){
	<%End If%>
		ok('<%=kThreadsFormName%>','Forum.asp?PAGE=<%=nPage%>&PAGESIZE=<%=nPageSize%>')
	<%If Not readonly Then%>});<%End If%>
}

<%If Not readonly And bRightSend Then%>
function reply()
{
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kThreadsFormName%>'];
	if (form.MESSAGE.value != '')
	{
		if (form.MESSAGE.value.length < 10000)
			{ setDBBusy();
			  ok('<%=kThreadsFormName%>','AddReply.asp?TPAGE=<%=nTPage%>') } else
			{ alert(language.Generic.Forum.kAlertLongText)}
	} else
	{ alert(language.Generic.Forum.kAlertNoMessage)}
}
<%End if
If bForumModerator Then
%>function deletemessage()
{	if( isDBBusy() ) return false;
	var i;
	var delarr = '';
	var elems = document.forms['<%=kThreadsFormName%>'].elements;
	for (i = 0; i < elems.length; i++)
	{
		if ((elems[i].name == 'message') && ( elems[i].checked ))
		{
			delarr += elems[i].value + '<%=kSplitter%>';
		}
	}
	if (delarr == '')
	{
		alert(language.Generic.Forum.kAlertNoCheckedMessages)
	} else
	{
		$.show.confirmation(language.Generic.Forum.kConfirmDelMessages).then(function(){
			elems['DELARR'].value = delarr;
			setDBBusy();
			ok('<%=kThreadsFormName%>','DeleteMessages.asp?TPAGE=<%=nTPage%>');
		});
	}
}
function checkall()
{	var i;
	var form = document.forms['<%=kThreadsFormName%>'];
	for (i = 0; i < form.elements.length; i++)
	{	if (form.elements[i].name == 'message')
		{ form.elements[i].checked = form.markall.checked; }
	}
}<%
End If
%>//--></SCRIPT><%
End Sub

Sub DrawButtons
	If bForumModerator Then
		Call ButtonDel("deletemessage()", obLanguage("Forum","kBtnDel"))
	End If
End Sub

Sub onDrawPage()
	%><form name="<%=kThreadsFormName%>" method="post" class="form-horizontal">
	<%=WriteObligatoryTags()%><%
	If bExistsTopicModer Then 
		Response.Write "<h3>" & IIF( b2OrMoreTopicModers,obLanguage("Forum","kModerators"),obLanguage("Forum","kModerator")) & ": " & DB2HTML(strTopicModers) & "</h3>"
	End If

	Call DrawButtonPanel()

	Response.Write obLanguage("Forum","kOverallMessages") & ": " & Ubound( arrForumThreads, 2 ) + 1 & "<br>"

	%>
	<div class="row">
		<div class="col-md-12">
			<%
				If bPaging Then
					Call ShowPageList( nThreads \ kPageSize + 1, nTPage - 1 )
				End If

				If Not bNoThreads Then
					Call DrawThreads()
				End If

				If bForumModerator Then
					rw ShowCheckbox("markall", 1, False, obLanguage("Forum","kMarkAllThreads"), "checkall();")
				End If
			%>
		</div>
	</div>
	<%If Not readonly And bRightSend Then%>
	<div class="row">
		<div class="col-md-12">
			<%
				Call DrawAddCommentBlock()
			%>
		</div>
	  </div>
	<%End If%>
	<input type="hidden" name="DELARR">
	<input type="hidden" name="TID" value="<%=nThreadId%>">
	<input type="hidden" name="PAGE" value="<%=nPage%>">
	<input type="hidden" name="PAGESIZE" value="<%=nPageSize%>">
	</form><%
End Sub

Sub DrawThreads()
	Dim i
	Dim dctMesUserRoles, dctMesUserRights
	Dim objStaffRoles, strRoles, strRole, strFotoImg

	%><table class="table table-bordered">
	<tr><%
	If bForumModerator Then
	%><th>&nbsp;</th><%
	End If
	Response.Write "<th colspan='" & IIf(PERSON_DATA, 2, 1) & "'>" & obLanguage("Forum","kAuthor") & "</th><th width=""85%"">" & obLanguage("Forum","kMessage") & "</th></tr>"
	Set dctMesUserRoles = Server.CreateObject("NetCity.Storage")
	Set dctMesUserRights = Server.CreateObject("NetCity.Storage")
	For i = nStart To nEnd
		strRoles = ""
		'ReDim dctMesUserRoles(lastRole), dctMesUserRights(lastRight)
		dctMesUserRoles.RemoveAll
		dctMesUserRights.RemoveAll

		Call objNSNET.RetrieveUserRolesAndRights(arrForumThreads(5,i), strSchoolID, Empty, bIsEducManager, dctMesUserRoles, dctMesUserRights)
		arrValidPhotoUserIDs(i-nStart) = CLng(arrForumThreads(5,i))
		If dctMesUserRoles.Exists(CLng(rlStudent)) Then
			strRoles = obLanguage("Common","kStudent",strFunctionalityType)
		Else
			Set objStaffRoles = objNSNET.GetStaffUserRoles(arrForumThreads(5,i), strSchoolID)
			While Not objStaffRoles.EOF
				strRole = objStaffRoles("ROLENAME")
				If IsArray(Application(strRole)) Then strRole = Application(strRole)(strFunctionalityType)
				strRoles = strRoles & IIF(IsDull(strRoles),"","<br>") & strRole
				objStaffRoles.MoveNext
			Wend
		End If
		If IsDull(strRoles) And dctMesUserRoles.Exists(CLng(rlParent)) Then strRoles = obLanguage("Common","kParent")
		If i mod 2 = 0 Then
			%><tr><%
		Else
			%><tr bgcolor=#EFF7E7><%
		End If
		If bForumModerator Then
			Response.Write "<td valign=""top""><input type=""checkbox"" name=""message"" value=""" & arrForumThreads(0,i) & """></td>"
		End If
		If PERSON_DATA Then
			strFotoImg = GetPhotoImgEx(arrForumThreads(5,i), 100)
			Response.Write "<td valign=""top"">" & strFotoImg & "</td>"
		End If
		Response.Write "<td valign=""top""><b>" & DB2HTML(arrForumThreads(2,i)) & "</b><br><font size=""-3"">" & strRoles & "</font></td>"
		Response.Write "<td><font size=""-3"">" & obLanguage("Forum","kAdded") & ": " & GetTimeStr(arrForumThreads(4,i)) & "</font><br><br><font size=""-1"">" & DB2HTML_BR_URL(arrForumThreads(3,i)) & "</font><br><br></td></tr>"
	Next
	Call comHelper.AspHelper.SetIntArrayDataToSession(stValidIDs, arrValidPhotoUserIDs)
	%></table><%
End Sub

Sub DrawAddCommentBlock()
	Call DrawReadonlyRow( obLanguage("Forum","kAuthor"), strUserName )
	Call DrawInputRow( obLanguage("Forum","kMessage"), "", "MESSAGE", "area", 80, 15, "")
	OpenFormGroup ""
		rw ShowButton("reply", "reply", "JavaScript:reply()", obLanguage("Forum","kBtnReply"), obLanguage("Forum","kBtnReply"))
	CloseFormGroup
End Sub
%>

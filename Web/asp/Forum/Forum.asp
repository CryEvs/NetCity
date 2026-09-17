<!-- #INCLUDE FILE="../headersimplepopup.asp" -->
<!-- #INCLUDE FILE="DaysMonths_inc.asp" -->
<!-- #INCLUDE FILE="ForumConstants_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const kForumFormName = "FORUMFORM"

Const indTopicId		= 0
Const indTopicName		= 1
Const indLastEditorName	= 2
Const indTopicsCount	= 3
Const indMaxDate		= 4
Const indAuthorName		= 5

Dim bTopics, bPaging, bForumModerator
Dim nPage, nPageSize, nTopics, nEnd
Dim arrForumTopics
Dim objForumTopics, strForumModerators, bExistsModer, b2OrMoreModers
Dim bRightEdit, bRightSend

Function GetPageTitle()
	GetPageTitle =  obLanguage("Forum","kForumTitle") &" <i>" & NETSCHOOL_PRODUCT_NAME & "</i>"
End Function

Sub ReadState
	nPage		= GetSafeLng( Request("PAGE"), GetSafeLng( obTokenMgr.GetData(strToken,"stPage"), 1 ) )
	nPageSize	= GetSafeLng( Request("PAGESIZE"), 25 )

	bRightEdit = HasRightOnEditForum(-1)
	bRightSend = HasUserRight(arForumSendReceive)
	If Not bRightEdit And Not bRightSend Then GenerateError obLanguage("Common","kErrPageAccess")
End Sub

Function FixTopics( objRs )
	Dim tmpArr, i, j, nTotal, arrForumTopics
	arrForumTopics = objRs.GetRows(,,Array("TOPICID","NAME"))
	Redim tmpArr(5,Ubound(arrForumTopics,2))
	nTotal = 0

	For i = 0 To Ubound(arrForumTopics,2)
		j = 0
		Do While j < nTotal
			If tmpArr(indTopicId,j)=arrForumTopics(0,i) Then Exit Do
			j = j+1
		Loop
		If j>=nTotal Then
			tmpArr( indTopicId, nTotal )		= arrForumTopics( 0, i )
			tmpArr( indTopicName, nTotal )		= arrForumTopics( 1, i )
			tmpArr( indLastEditorName, nTotal ) = arrForumTopics( 2, i )
			tmpArr( indTopicsCount, nTotal )	= 0
			tmpArr( indMaxDate, nTotal )		= arrForumTopics( 3, i )
			tmpArr( indAuthorName, nTotal )		= arrForumTopics( 2, i )
			nTotal = nTotal + 1
		Else
			tmpArr( indTopicsCount, j ) = tmpArr( indTopicsCount, j ) + 1
			tmpArr( indAuthorName, j ) = arrForumTopics( 2, i )
		End If
	Next
	Redim Preserve tmpArr(5, nTotal-1)
	FixTopics = tmpArr
End Function

Sub Main()
	Dim strRoles, objModerRoles, objModeratorsRs
	Call InitDaysMonths
	bForumModerator = bRightEdit And Not readonly

	Set objModeratorsRs = objNSNET.GetModeratorsList(strSchoolID, -1)
	If Not objModeratorsRs.EOF Then
		bExistsModer = True
		b2OrMoreModers = objModeratorsRs.RecordCount > 1
		While Not objModeratorsRs.EOF
			strRoles = ""
			Set objModerRoles = objModeratorsRs.Fields()("rsUserRoles").Value
			If Not objModerRoles.EOF Then
				strRoles = " ("
				While Not objModerRoles.EOF
					strRoles = strRoles & objModerRoles("ROLENAME") & ", "
					objModerRoles.MoveNext
				Wend
				strRoles = Left(strRoles,Len(strRoles)-2)
				strRoles = strRoles & ")"
			End If
			strForumModerators = strForumModerators & objModeratorsRs("NICKNAME") & IIF(strRoles <> "", strRoles, "" ) & ", "
			objModeratorsRs.MoveNext
		Wend
		strForumModerators = Left(strForumModerators,Len(strForumModerators)-2)
	End If

	Set objForumTopics = objNSNET.GetForumTopics(strSchoolid, nPage, nPageSize )
	If Not objForumTopics.EOF Then
		bTopics = true
		nTopics = objNSNET.GetForumTopicsCount( strSchoolid )
	Else
		bTopics = false
		nTopics = 0
	End If

	If nTopics > nPageSize Then
		bPaging = true
	Else
		bPaging = false
	End If

	nEnd = IIF(nTopics - (nPageSize*(nPage-1)) > nPageSize, nPageSize-1, nTopics-1-(nPageSize*(nPage-1)))
End Sub

Sub WriteState
	Call obTokenMgr.SetData(strToken,stBackPage, "/asp/Forum/Forum.asp")
	Call obTokenMgr.SetData(strToken,"stPage", nPage)
End Sub

Sub onHead()
%><SCRIPT><!--
	isHaveToLogout = false;
	var windUserSelector = null;
	function Back(){
		isHaveToLogout = false;
		window.close();
	}
<%If bRightSend Then%>
	function newthread()
	{ ok('<%=kForumFormName%>','NewThread.asp'); }
<%End If%>
<%If bForumModerator Then%>
	function setForumModers(){
		$.show.confirmation(language.Generic.Forum.kCfrmSetModers).then(function(){
			ok('<%=kForumFormName%>','SelectModerators.asp?TID=-1&AT=<%=strToken%>');
		});
	}
<%End If%>
<%If bTopics Then%>
	function showthread( topicid )
	{ ok('<%=kForumFormName%>','ShowThread.asp?TID=' + topicid); }
	function closeABook(){if(windUserSelector && !windUserSelector.closed) {windUserSelector.forceClosing = true;windUserSelector.close();}}
	function selectThreadModerators( topicid )
	{
		ok('<%=kForumFormName%>','SelectModerators.asp?TID=' + topicid + '&AT=<%=strToken%>');
	}
	function checkall()
	{	var i;
		var form = document.forms['<%=kForumFormName%>'];
		for (i = 0; i < form.elements.length; i++)
		{	if (form.elements[i].name == 'topic')
			{ form.elements[i].checked = form.markall.checked; }
		}
	}

	function gotoPage( pagenum )
	{ ok('<%=kForumFormName%>','Forum.asp?PAGE=' + (pagenum+1) + '&PAGESIZE=<%=nPageSize%>'); }

<%If bForumModerator Then%>
	function deletethread(){
		if( isDBBusy() ) return false;
		var i;
		var delarr = '';
		var form = document.forms['<%=kForumFormName%>'];

		for (i = 0; i < form.elements.length; i++)
		{
			if ((form.elements[i].name == 'topic') && ( form.elements[i].checked ))
			{
				delarr += form.elements[i].value + '<%=kSplitter%>';
			}
		}
		if (delarr == '')
		{
			alert(language.Generic.Forum.kAlertNoCheckedTopics)
		} else
		{
			$.show.confirmation(language.Generic.Forum.kConfirmDelTopics).then(function() {
				form.elements['DELARR'].value = delarr;
				setDBBusy();
				ok('<%=kForumFormName%>','DeleteThread.asp');
			});
		}
	}
<%End If
End If%>
//--></SCRIPT><%
End Sub

Sub DrawButtons
	If Not readonly Then 
		If bRightSend Then
			ButtonAdd "newthread()", obLanguage("Forum","kBtnNewTopic")
		End If
		If bForumModerator Then
			Call ButtonDel("deletethread()", obLanguage("Forum","kBtnDel"))
		End If
	End If

	If bForumModerator Then 
		SimpleButton "setForumModers()", obLanguage("Forum","kBtnForumModerators")
	End If
End Sub

Sub onDrawPage()
	Dim i
	Dim strTime
	Dim objLastMessageRs, objAuthorRs, objModeratorsRs, objCntMessagesRs
	Dim strModerators, strModeratorsIDs, strAuthor, strLastMessage, strCntMessages, nTopicID

	%><form NAME="<%=kForumFormName%>" METHOD="post">
	<%=WriteObligatoryTags()%><%

	If bExistsModer Then
		Response.Write "<h2>" & IIF( b2OrMoreModers,obLanguage("Forum","kModerators"),obLanguage("Forum","kModerator")) & ": " & DB2HTML(strForumModerators) & "</h2>"
	End If

	Call DrawButtonPanel()

	rw obLanguage("Forum","kOverall") & ": " & nTopics & "<br>"

	If bPaging Then
		Call ShowPageList( nTopics \ nPageSize + 1, nPage - 1 )
	End If

	If bTopics Then
		%><table class="table table-bordered">
		<tr><%
		If bForumModerator Then
			%><th>&nbsp;</th><%
		End If
		Response.Write "<th width=""60%"">" & obLanguage("Forum","kTopic") & "</th><th>" & obLanguage("Forum","kAuthor") & "</th><th colspan='" & IIF(bForumModerator,"2","1") & "'>" & obLanguage("Forum","kModerators") & "</th><th>" & obLanguage("Forum","kReplies") & "</th><th>" & obLanguage("Forum","kLastMessage") & "</th></tr>"
		While not objForumTopics.EOF
			Set objLastMessageRs = objForumTopics.Fields()("chapLastmessage").Value
			Set objAuthorRs = objForumTopics.Fields()("chapAuthor").Value
			Set objModeratorsRs = objForumTopics.Fields()("chapModerators").Value
			Set objCntMessagesRs = objForumTopics.Fields()("chapCntMessages").Value

			nTopicID = objForumTopics("TOPICID")
			If Not objCntMessagesRs.EOF Then
				strAuthor = DB2HTML(objAuthorRs("NICKNAME"))
				strTime = GetTimeStr(objLastMessageRs("SENT"))
				strLastMessage = "<nobr>" & strTime & "</nobr><br>" & DB2HTML(objLastMessageRs("NICKNAME"))
				strCntMessages = objCntMessagesRs("MESSAGES_CNT")
			Else
				strAuthor = "&nbsp;"
				strTime = "&nbsp;"
				strLastMessage = "&nbsp;"
				strCntMessages = 0
			End If

			strModerators = ""
			strModeratorsIDs = ""
			While Not objModeratorsRs.EOF
				strModerators = strModerators & "<nobr>" & objModeratorsRs("NICKNAME") & "</nobr><br>"
				strModeratorsIDs = objModeratorsRs("USERID") & ";"
				objModeratorsRs.MoveNext
			Wend
			If Len(strModerators) > 0 Then
				strModerators = Left(strModerators,Len(strModerators)-4)
				strModeratorsIDs = Left(strModeratorsIDs,Len(strModeratorsIDs)-1)
			Else
				strModerators = "&nbsp;"
			End IF
			If bForumModerator Then
				Response.Write "<tr><td><input type=""checkbox"" name=""topic"" value=""" & DB2HTML(objForumTopics("TOPICID")) & """></td>"
			End If
			Response.Write "<td><a href=Javascript:showthread(" & nTopicID & ")>" & DB2HTML(objForumTopics("NAME")) & "</a></td><td align=""center"">" & strAuthor & "</td>"
			Response.Write "<td align='center'>" & strModerators & "</td>"
			If bForumModerator Then
				Response.Write "<td width=""1%"">" & ShowButton("assign", "assign", "JavaScript:selectThreadModerators(" & nTopicID & ")", obLanguage("Forum","kHintSetThreadModers"), obLanguage("Calendar","kAssign")) & "</td>"
			End IF
			Response.Write "<td align=""center"">" & strCntMessages & "</td><td>" & strLastMessage & "</td></tr>"
			objForumTopics.MoveNext
		Wend
		%></table>
		<%If bForumModerator Then
			rw ShowCheckbox("markall", 1, False, obLanguage("Forum","kMarkAll"), "checkall();")
		End If
	Else
		Response.Write "<h2 align=""center"">" & obLanguage("Forum","kNoTopics") & "</h2>"
	End If%>
	<input type="hidden" name="DELARR">
	<input type="hidden" name="BACK" value="Forum.asp?PAGE=<%=nPage%>&PAGESIZE=<%=nPageSize%>">
	<input type="hidden" name="PAGE" value="<%=nPage%>">
	<input type="hidden" name="PAGESIZE" value="<%=nPageSize%>">
	</form><%
End Sub
%>

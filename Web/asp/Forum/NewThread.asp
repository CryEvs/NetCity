<!-- #INCLUDE FILE="../headersimplepopup.asp" -->
<!-- #INCLUDE FILE="ForumConstants_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const	kNewThreadsForm	=	"NEWTHREADSFORM"

Dim nTId, nPage, nPageSize, nTPage

Function GetPageTitle()
	GetPageTitle = obLanguage("Forum","kNewThread")
End Function

Sub onHead()
%><SCRIPT><!--
	isHaveToLogout = false;
	function back()
	{
		var form = document.forms['<%=kNewThreadsForm%>'];
		$.when((((form.MESSAGE.value !='') || (form.NAME.value != '')) && ($.show.confirmation(language.Generic.Common.kConfirmNoSave))) || ((form.MESSAGE.value =='') && (form.NAME.value == '')))
			.then(function()
		{
	<%If nTId = 0 Then%>
			ok('<%=kNewThreadsForm%>','Forum.asp?PAGE=<%=nPage%>&PAGESIZE=<%=nPageSize%>')
	<%Else%>
			ok('<%=kNewThreadsForm%>','ShowThread.asp?TID=<%=nTId%>&PAGE=<%=nPage%>&PAGESIZE=<%=nPageSize%>&TPAGE=<%=nTPage%>')
	<%End If%>
		});
	}

	function send()
	{
		if( isDBBusy() ) return false;
		var form = document.forms['<%=kNewThreadsForm%>'];
		if (form.MESSAGE.value != '')
		{
			if (form.NAME.value != '')
			{
				if (form.MESSAGE.value.length < 10000)
				{ setDBBusy();
				  ok('<%=kNewThreadsForm%>','SaveNewThread.asp?PAGE=<%=nPage%>&PAGESIZE=<%=nPageSize%>&TPAGE=<%=nTPage%>') } else
				{ alert(language.Generic.Forum.kAlertLongText)}
			} else
			{ alert(language.Generic.Forum.kAlertNoName)}
		} else
		{ alert(language.Generic.Forum.kAlertNoMessage)}
	 }
//--></SCRIPT><%
End Sub

Sub ReadState()
	If Not HasUserRight(arForumSendReceive) Then GenerateError obLanguage("Common","kErrPageAccess")
	nTId		= GetSafeLng( Request("TID"), 0 )
	nPage		= GetSafeLng( Request("PAGE"), Null )
	nPageSize	= GetSafeLng( Request("PAGESIZE"), Null )
	nTPage		= GetSafeLng( Request("TPAGE"), 1 )
End Sub

Sub DrawButtons
	ButtonSend "send()", obLanguage("Forum","kBtnSend")
End Sub

Sub onDrawPage()
	%><form NAME="<%=kNewThreadsForm%>" METHOD="post" class="form-horizontal"><%
		rw WriteObligatoryTags()
		
		Call DrawButtonPanel()

		Call DrawInputRowWithClass(obLanguage("Forum","kTopic"), "", "NAME", "text", 30, 200, "", "FilterWhiteSpace")
		Call DrawInputRow( obLanguage("Forum","kMessage"), "", "MESSAGE", "area", 60, 15, "")

	%></form><%
End Sub
%>

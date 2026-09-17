<!-- #INCLUDE virtual="/asp/headersimplepopup.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim rsMB, nBoxID, sMsgID, cAction
Dim nMsgUnread, nTotalMessagesCount
Dim strBackPage, blnMailConfirm, arrMessages, objMailComponent

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arMessagesSendReceive) or bIsEducManager
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Messages", "kTitleViewMsg")
End Function

Sub ReadState()
	blnMailConfirm = (GetSafeLng(obTokenMgr.GetData(strToken, stMailHasBeenSent), 0) = 1)
	If blnMailConfirm Then Call obTokenMgr.SetData(strToken, stMailHasBeenSent, 0)
	nBoxID = GetSafeLng(Request("MBID"), GetSafeLng(obTokenMgr.Getdata(strToken, "MSG_MBID"), bxInbox))
End Sub

Sub Main
	Call InitMailComponent

	strBackPage = Request("BACK")
	If Len(strBackPage) > 0 AND Not(InStr(strBackPage, "Messages") > 0) Then
		Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)
	Else
		strBackPage = obTokenMgr.GetData(strToken, stBackPage)
	End If
	
	cAction = GetSafeStr(Request("A"), 1, "")
	sMsgID = GetSafeID(Request("MID"), "")
	
	Call obTokenMgr.SetData(strToken, "MSG_MBID", nBoxID)

	Set rsMB = objNSNET.GetMailBoxList()
	If rsMB.EOF Then GenerateError obLanguage("Messages","kErrNoMailBoxes")

	Call objMailComponent.GetMessagesCount(strUserId, nBoxID, nTotalMessagesCount, nMsgUnread)
End Sub

Function onLoad()
	onLoad = ""
	If blnMailConfirm Then onLoad = onLoad & "ShowMailConfirm();"
	If cAction = "P" Then onLoad = onLoad & "printMessage();"
End Function

Sub InitMailComponent
	Set objMailComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMailComponent")
	If Not IsObject(objMailComponent) Then
		GenerateError obLanguage("Messages", "kCantCreateMailComponent")
	End If
End Sub

Sub onHead()%>
<script>
	var globalParams = {
		strATTok: '<%=strToken%>',
		nBoxID: <%=nBoxID%>,
		nReadMsgId: 0,
		nTotalCountMsgs: <%=nTotalMessagesCount%>
	};
	globalParams.titleNameSent = globalParams.nBoxID == 2 ? language.Generic.Messages.kSaved : language.Generic.Messages.kPosted;
	globalParams.titleFromName = (globalParams.nBoxID == 2 || globalParams.nBoxID == 3) ? language.Generic.Messages.kWhom : language.Generic.Messages.kFromWhom;

</script>
<SCRIPT><!--
isHaveToLogout = false;

function Back() {
	window.close();
}

<%If blnMailConfirm Then%>
	function ShowMailConfirm()
	{
		alert('<%=DB2Value(DB2Java(obLanguage("Messages","kYourMessageWasSent") & obTokenMgr.GetData(strToken, "errs")))%>');
	}
	<%obTokenMgr.SetData strToken, "errs", ""
End If%>

<%If cAction = "P" Then%>
	var wnd = null;
	function printMessage()	{
		winOptions = { url: urlHelper.makeUrl("printmessage.asp", { M: "<%=sMsgID%>" }), name: '_blank', specs: 'status=yes,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no', winChild: wnd };
		windowOpen( winOptions );
		wnd = winOptions.winChild;
		center(wnd, 850,560);
	}
<%End If%>
//--></SCRIPT>
<%
End Sub

Sub WritePostScripts()%>
	<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
	<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
	<link href="/vendor/components/jtable/lib/themes/lightcolor/blue/jtable.min.css" rel="stylesheet" type="text/css"/>

	<script src="<%=GetVersionedResLink("/vendor/components/jtable-bundle.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("mailBox.js")%>" type="text/javascript"></script><%
End Sub

Sub DrawButtons
	If Not readonly Then
		ButtonCreate "composemessage()", obLanguage("Messages", "kCreateMessage")
	End If
	If Not readonly Then
		%><div id="delButtons" style="display: inline"><%
		Call ButtonDelEx("deleteMarkMessages()", obLanguage("Messages", "kRemoveSelectedMsgs"), obLanguage("Messages", "kRemoveSelectedMsgs"))
		%></div><%
	End If
	If Not readonly And nBoxID = 1 Then
		%><div id="delButtons" style="display: inline"><%
		Call DropDownButtonEx("Отметить сообщения", "glyphicon glyphicon-ok-circle", "btn-default", Array("markMessages(false)", "", "glyphicon glyphicon-check", "как прочитанные", "markMessages(true)", "", "glyphicon glyphicon-unchecked", "как непрочитанные"))
		%></div><%
	End If
End Sub

Sub onDrawPage()
	Dim arrMB
	
	arrMB = rsMB.GetRows(,,Array("BOXTYPE", "BOXNAME"))
	%><form name="MBoxForm" METHOD="post" action="mailbox.asp"><%
		rw WriteObligatoryTags()
		rw WriteHiddenTags(Array("A", "", "MID", ""))

		Call DrawButtonPanel
		%>

		<div class="row">
			<div class="col-md-6">
				<%
				OpenFormGroup obLanguage("Messages", "kMessageFolder")
				DrawSelectArr arrMB, "MBID", nBoxID, Null, "ChangeMBox();"
				CloseFormGroup
				%>
			</div>
			<div class="col-md-6">
				<div style="float:right;">
					<span><%=obLanguage("Messages", "kMessageCnt")%>:</span>&nbsp;
					<span id="totalMessagesCount"><%=GreenText(nTotalMessagesCount)%></span>
					<span>&nbsp;<%=obLanguage("Messages", "kMessagesNew")%>:</span>&nbsp;
					<span id="unreadMessagesCount"><%=GreenText(nMsgUnread)%></span>
				</div>
			</div>
		</div>
		
		<div class="row">
			<div class="col-md-12">
				<div id="messageList" style="margin-top:15px; margin-bottom: 15px;"></div>
			</div>
		</div>

		<%If nBoxID = bxDeleted Then ' Не удалять этот код!!!!.
			'Это возможность перемещать сообщения между группами почтовых ящиков внутри ящика одного типа. Например из Отправленые в "Работа", "Друзья" и т.д.
			'Убрана возможность перемещать между группами разных типов, т.к. это нелогично. Например из Отправленных во Входящие или Черновики
			'Если необходимо сообщение из любого ящика можно открыть и затем переслать его или изменить его и сохранить

			'Вернул код для возврата из папки удалённых
			'(иначе уже посланное можно поместить в черновик и потом отредактировать так что у всех получивших сообщение оно изменится)%>
					

		<div class="row">
			<div class="col-md-6">
				<div id="moveButton">
					<%Call SimpleButton("MoveMsgs()", obLanguage("Messages","kMoveToFolder"))%>
				</div>
			</div>
			<div class="col-md-6">
				<div id="moveSelect">
					<%Redim Preserve arrMB(Ubound(arrMB,1), Ubound(arrMB,2)-3) ' убираем всё кроме входящие%>
					<%DrawSelectArr arrMB, "MVT", bxInbox, Null, ""%>
				</div>
			</div>
		</div>
		<%End If%>
	</form><%
End Sub%>

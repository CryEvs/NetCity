<!-- #INCLUDE virtual="/asp/headersimplepopup.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Photo_inc.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/html_url.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/attachments_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->






<% ' © 2007-2013 IRTech. All rights reserved.

Dim sMsgID, nBoxID, rsMB, rsMsg, rsTO, sTO, sCC, sBody, nMsgSize, bNoReply
Dim cAType, sAttachment
Dim bMessageIsReaded, bIsNotification, strSubject
Dim rsAttachments


Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arMessagesSendReceive) or bIsEducManager
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Messages","kTitleReadMsg")
End Function

Function IsNotificationMessage()
	If strSubject = obLanguage("Messages","kNotificationEMailSubject") Then IsNotificationMessage = True: Exit Function
	If strFunctionalityType = FuncType_EducMgr Then IsNotificationMessage = False: Exit Function
	IsNotificationMessage = (InStr(strSubject, obLanguage("Import","kTitleImportStudentParents", strFunctionalityType)) = 1)
End Function

Sub Main
	Dim strCmd
	Dim objMailComponent, objMsgResults
	Dim nSchoolID

	sMsgID = GetSafeID(Request("MID"), NULL)
	nBoxID = GetSafeLng(Request("MBID"), NULL)
	
	Set rsMB = objNSNET.GetMailBoxList()
	If rsMB.EOF Then GenerateError obLanguage("Messages","kErrNoMailBoxes")
	'get message
	Set rsMsg = objNSNET.GetMessageInfo(sMsgID, strUserId)
	TestError obLanguage("Messages","kErrNotFoundMsg")
	If rsMsg.EOF Then GenerateError obLanguage("Messages","kErrNotFoundMsg")

	sBody = rsMsg("TEXT")
	If Not IsNull(rsMsg("ATYPE")) Then cAType = rsMsg("ATYPE")
	If Not IsNull(rsMsg("ATTACHMENT")) Then sAttachment = rsMsg("ATTACHMENT")

	sTO = GetSafeStr(rsMsg("SENTTO"), -1, "")
	sCC = GetSafeStr(rsMsg("SENTCC"), -1, "")
	bMessageIsReaded = (rsMsg("READ") = "Y")
	bNoReply = rsMsg("NOREPLY")

	strSubject = GetSafeStr(rsMsg("SUBJ"), kSubjectLength, "")

	'TODO. переписать признак уведомляющего сообщения
	bIsNotification = IsNotificationMessage()
	sBody = Replace(Replace(DB2HTML_BR_URL(sBody), "&lt;pre&gt;","<pre>"), "&lt;/pre&gt;", "</pre>")
	
	If sMsgID <> "" Then
		Set rsAttachments = objNSNET.GetMessageAttachments(sMsgID)
	End If

	If bMessageIsReaded Then 
		Exit Sub
	End If
	
	Set objMailComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMailComponent")
	If Not IsObject(objMailComponent) Then
		GenerateError obLanguage("Messages","kCantCreateMailComponent")
	End If

	If bIsEducManager Then
		nSchoolID = Empty
	Else
		nSchoolID = CLng(strSchoolID)
	End If

	Err.Clear
	On Error Resume Next

	Call objMailComponent.MarkMessageAsReadCom(sMsgID, strUserId, strUserName, nSchoolID, nBoxID)
	If Err.number <> 0 Then Call obTokenMgr.SetData(strToken, stWasSaved, Err.Description)


	

End Sub

Sub WriteState()
End Sub

Sub onHead()%>
<script src="<%=GetVersionedResLink("/static/dist/pages/js/reports.min.js")%>" type="text/javascript"></script>
<script src="/vendor/components/chart.js/dist/chart.min.js" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/file-attachments.min.css")%>">
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/report.min.css")%>"/>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/>
<SCRIPT><!--

<%Call DrawAttachmentsScripts()%>
$(document).ready(function () {
	window.opener.reloadTableAfterRead();

	var bHasGraph = $("table.chart-table").length != 0; // признак графического отчета
	if (!bHasGraph) {
		$(".glyphicon-stats").closest("button").hide();
	}
});

isHaveToLogout = false;

function DeleteMsg() {
	var params = {
		action: '/asp/ajax/DeleteMessagesAjax.asp',
		data: {
				nBoxId: <%=nBoxID%>,
				deletedMessages: <%=sMsgID%>,
				setWasSaved: true
			},
		showProcessing: true,
		onSuccess: function() {
			window.opener.location.href = '/asp/messages/mailbox.asp?AT=<%=strToken%>&SVER=<%=getVer()%>';

			closechildren();
			self.forceClosing = true;
			self.close();
		}
	};

	jsSubmit(params);
}

function MoveMsgToBox() {
	var nBoxSelected = $('[name=BOXES]').val();

	var params = {
		action: '/asp/ajax/MoveMessagesAjax.asp',
		data: {
				nFromBoxId: <%=nBoxID%>,
				nToBoxId: nBoxSelected,
				movedMessages: <%=sMsgID%>,
				setWasSaved: true
			},
		showProcessing: true,
		onSuccess: function() {
			window.opener.location.href = '/asp/messages/mailbox.asp?AT=<%=strToken%>&SVER=<%=getVer()%>';

			closechildren();
			self.forceClosing = true;
			self.close();
		}
	};

	jsSubmit(params);
}

var wnd = null;
function openPrintWindow(sToken, sMsg) {
	var winOptions = { url: urlHelper.makeUrl("printmessage.asp", { M: sMsg }), name: '_blank', specs: 'status=yes,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no', winChild: wnd };
	windowOpen( winOptions );
	wnd = winOptions.winChild;
	center(wnd, 750, 560);
}

var wndcomposemsg = null;

function reply(reptype) {
	var form = document.ReadMsg;
	form.A.value = reptype;
	if (reptype == 'F'){
		form.FRWRD.value = "1";
		DoSubmit(form, "SendSaveMsg.asp");
	}
	else{
		form.FRWRD.value = "";
		DoSubmit(form, "composemessage.asp");
	}
}

function closechildren()
{ if (wndcomposemsg && !wndcomposemsg.closed) { wndcomposemsg.forceClosing = true; wndcomposemsg.close()} }

function Back() {
	if (window.opener && !window.opener.closed)
	{
		isHaveToLogout = false;
		closechildren();
		self.forceClosing = true;
		self.close();
	}
	else
		DoSubmit(document.ReadMsg, "");
}

function printReport() {
	$('#report').printUtils().toPrint().then(function(window) {
		 window.onload = function() {
			window.print();
			return window.close();
		};
	});
}

function exportReport() {
	var getReportTitle = function() {
		return $('#report h2').text().trim();
	};

	$('#report').printUtils().toExcel({ formTitle: getReportTitle });
}
<%Call DrawAttachmentsScripts()%>
//-->
</SCRIPT>
<%
End Sub

Function ButtonPrintHandler()
	ButtonPrintHandler = "printReport()"
End Function

Function ButtonExportHandler()
	ButtonExportHandler = "exportReport()"
End Function

Function onLoad()
	If Not bMessageIsReaded Then onLoad = "window.opener.CheckMailBox()"
End Function

Function onUnload()
	onUnload = "closechildren()"
End Function

Sub DrawButtons
	If nBoxId = bxDraft Then
		rw WriteAction("glyphicon glyphicon-pencil", "btn_edit", obLanguage("Common","kChange"), obLanguage("Messages","kEdit_SendMsg"), "E")
	End If

	If Not readonly Then
		If Not bIsNotification Then
			If Not bNoReply Then
				Button "reply('R')", obLanguage("Forum","kBtnReply"), obLanguage("Messages","kReply"), "icon-reply"

				'//показываем кнопку "ответить всем" только в случае если это не студент и не родитель
				if(	(HasUserRole(rlStudent) or HasUserRole(rlParent)) = false  ) Then
					Button "reply('A')", obLanguage("Messages","kReplyAll"), obLanguage("Messages","kReplyAll"), "icon-reply-all"
				End If

			End If

			If nBoxId <> bxDraft Then
					Button "reply('F')", obLanguage("Messages","kForward"), obLanguage("Messages","kForward"), "icon-forward"
			End If


		End If
		Call ButtonDel("DeleteMsg()", obLanguage("Common","kRemove"))
	End If
End Sub

Sub DrawLinkButtons()
	If Not bIsDebug Then On Error Resume Next
	If Not bIsNotification Then 
		ButtonPrintCommon "openPrintWindow('" & strToken & "','" & sMsgID & "');return false", obLanguage("Buttons","kPrint")
	End If
End Sub

Sub onDrawPage()
	Dim strMsgDocIDs

%><form method="post" action="mailbox.asp" name="ReadMsg" class="form-horizontal form-xs">
<%=WriteObligatoryTags()%>
<%=WriteHiddenTags(Array("MVT","", "MBID", nBoxId, "A","", "MID", sMsgID, "FRWRD", "") )%>

<%Call DrawButtonPanel%>
	<div class="row">
		<div class="col-md-12">
			<%
			Call OpenPanel("Заголовки письма", "message_headers", True)
				Call DrawReadonlyRow( obLanguage("Messages","kFromWhom"), GetSafeStr(rsMsg("FROMNAME"),-1,"") & IIF(IsDull(rsMsg("FROMEONAME")),"", "("& rsMsg("FROMEONAME") &")") )

				Call DrawReadonlyRow( obLanguage("Messages","kWhom"), sTO )
				Call DrawReadonlyRow( obLanguage("Messages","kCopy"), sCC )
				Call DrawReadonlyRow( obLanguage("Messages","kPosted"), Date2Str(rsMsg("SENT")) & "  " & Time2Str(rsMsg("SENT")) )

			Call ClosePanel()
			%>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12"><%
	SetFiltersWidth "", "", ""
	Call OpenPanel("Тело письма", "message_body", False)%>

			<div class="col-md-12"><%
		Call DrawReadonlyRow( obLanguage("Messages","kMsgSubject"), strSubject )
		If Not rsAttachments.EOF Then
			OpenFormGroup obLanguage("Common", "kAttachedFiles")%>
				<div class="file-attachment-block multiple"><%
					While Not rsAttachments.EOF
						nAttachmentID = CLng(rsAttachments("ATTACHMENTID"))
						strAFileName = rsAttachments("AFileName")
						strMsgDocIDs = strMsgDocIDs & nAttachmentID & ","%>

						<div class="file-attachment" onclick="openAttachment('<%=strAFileName%>', <%=nAttachmentID%>);">
							<div class="file-name" title="<%=strAFileName%>"><%=strAFileName%></div>
						</div><%

						rsAttachments.MoveNext
					WEnd%>
				</div><%
				Call obTokenMgr.SetData(strToken, stMsgDocIDs, strMsgDocIDs)
			CloseFormGroup
		End If

		If Len(sbody) > 0 Then
			OpenFormGroup "Текст"
				rw sBody
			CloseFormGroup
		End If%>
			</div><%

	Call ClosePanel()%>
		</div>
	</div><%

	If cAType = "H" And Len(sAttachment) > 0 Then%>
		<div class="row">
			<div class="col-md-12"><%
				sAttachment = RewritePhotos(sAttachment)
				Call OpenPanel("Вложенный отчет", "report_attachment", True)%>
				
				<%OpenBtnGroup%>
					<div class="buttons-panel-right"><%
						Call ButtonPrint(ButtonPrintHandler())
						Call ButtonExport(ButtonExportHandler())

						' кнопка рисуется безусловно, скрывается в $(document).ready
						Button "report.showGraph()", obLanguage("Buttons","kViewGraphReport"), obLanguage("Buttons","kViewGraphReport"), "glyphicon glyphicon-stats"
						%>
					</div>
				<%CloseBtnGroup%>

				<div class="row">
					<div class="col-md-12">
						<div id="report">
							<%rw sAttachment%>
						</div>
					</div>
				</div><%
				
				Call ClosePanel()%>
			</div>
		</div><%
	End If

	If nBoxID = bxDeleted Then ' Не удалять этот код!!!!.
		Dim arrMB
		arrMB = rsMB.GetRows(,,Array("BOXTYPE", "BOXNAME"))
		'Это возможность перемещать сообщения между группами почтовых ящиков внутри ящика одного типа. Например из Отправленые в "Работа", "Друзья" и т.д.
		'Убрана возможность перемещать между группами разных типов, т.к. это нелогично. Например из Отправленных во Входящие или Черновики
		'Если необходимо сообщение из любого ящика можно открыть и затем переслать его или изменить его и сохранить

		'Вернул код для возврата из папки удалённых только во входящие
		'(иначе уже посланное можно поместить в черновик и потом отредактировать так что у всех получивших сообщение оно изменится)
		%>
		<div class="row">
			<div class="col-md-2">
				<div id="moveButton">
					<%Call SimpleButton("MoveMsgToBox()", obLanguage("Messages","kMoveToMsg"))%>
				</div>
			</div>
			<div class="col-md-10">
				<div id="moveSelect">
					<%Redim Preserve arrMB(Ubound(arrMB, 1), Ubound(arrMB, 2)-3) ' убираем всё кроме входящие%>
					<%DrawSelectArr arrMB, "BOXES", bxInbox, Null, ""%>
				</div>
			</div>
		</div>
	<%End If%>
</form>
<%
End Sub

Function WriteAction(sImgName, sImgId, sAlt, sStatus, sAction)
	If Not bIsDebug Then On Error Resume Next
	Dim sActName, strJsCall, str

	Select Case sAction
		Case "P" 'print
			strJsCall = "openPrintWindow('" & strToken & "','" & sMsgID & "');return false"
		Case "D"
			sActName = "mailbox.asp"	'delete message
		Case Else
			sActName = "composemessage.asp"
	End Select

	If IsDull(strJsCall) Then strJsCall = "window.opener.jumpVer( window, '" & sActName & "','AT=" & strToken & "&MID=" & sMsgID & "&MBID=" & nBoxID & "&A=" & sAction & "');"
	WriteAction = ShowButtonBase( strJsCall, sAlt, sImgName, sAlt, "", False )
End Function
%>

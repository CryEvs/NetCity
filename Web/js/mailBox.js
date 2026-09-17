$(document).ready(function() {
	hideButtons();
	
	$.hik.jtable.prototype.options.messages.noDataAvailable = language.Generic.Messages.kNoMessages; //Переопределение языковой Константы: с "Данных нет" на "Сообщений нет"
	initializeTable();
});

function initializeTable() {
	$('#messageList').css('min-width', '700px'); //устанавливается минимальная ширина, потому что при меньшей ширине съезжает верстка jtable

	$('#messageList').jtable({
		jqueryuiTheme: false,
		actions: {
			listAction: '/asp/ajax/GetMessagesAjax.asp?AT=' + globalParams.strATTok + '&nBoxID=' + globalParams.nBoxID
		},
		columnResizable: false,
		columnSelectable: false,
		selecting: true,
		multiselect: true,
		selectingCheckboxes: true,
		selectOnRowClick: false,

		paging: true,
		pageSize: 100,
		sorting: true,
		defaultSorting: 'Sent DESC',

		fields: {
			MessageId: {
				key: true,
				create: false,
				edit: false,
				list: false
			},
			ReadMessage: {
				title: '',
				sorting: false,
				width: '1%',
				edit: false,
				display: function (messageData) {
					var strPic = messageData.record.Read == "N" ? 'ui-icon-mail-closed' : 'ui-icon-mail-open';
					var $img = $('<button type="button" title="' + language.Generic.Messages.kTitleReadMsg + '">&nbsp;</button>').button({ icons: { primary: strPic }, text: false });

					var handler = function() {
						readmessage(messageData.record.MessageId, globalParams.nBoxID);
					};
					$img.click(handler);

					return $img;
				}
			},
			FromName: {
				title: globalParams.titleFromName,
				width: 'auto',
				edit: false,
				display: function (messageData) {
					var srtT;

					if (globalParams.nBoxID == 3 || globalParams.nBoxID == 2) {
						srtT = messageData.record.SentTo;
					}
					else {
						srtT = messageData.record.FromName;
						if (messageData.record.FromEOName != null && messageData.record.FromEOName != '') {
							srtT += messageData.record.FromEOName;
						}
					}
					srtT = $('<a></a>').append(srtT);
					srtT.attr('href', 'JavaScript:readmessage(' + messageData.record.MessageId + ',' + globalParams.nBoxID + ');');

					if (messageData.record.Read != "Y") {
						srtT.css('font-weight', 'bold');
					}
					return srtT;
				}
			},
			Subj: {
				title: 'Тема',
				width: 'auto',
				edit: false,
				display: function (messageData) {
					return createCell(messageData.record.Subj, messageData.record.Read);
				}
			},
			Sent: {
				title: globalParams.titleNameSent,
				width: '5%',
				edit: false,
				display: function (messageData) {
					return createCell(messageData.record.Sent, messageData.record.Read);
				}
			}
		},
	});
	$('#messageList').jtable('load', {}, function () {
		if (globalParams.nBoxID == 1) {
			CheckMailBox();
		}
	});
}

function createCell(value, read) {
	var text = $('<font></font>').text(value);

	if (read != "Y") {
		text.css('font-weight', 'bold');
	}

	return text;
}

function deleteMarkMessages() {
	var selectedMessages = getSelectedMessages(language.Generic.Messages.kNoMessagesSelectedToDelete);
	var onSuccess = function () {
		alert(language.Generic.Messages.kSuccessDeleteMsgs);
		$('#messageList').jtable('reload', function () {
			if (globalParams.nBoxID == 1) {
				CheckMailBox();
			}
		});

		reduceMsgCount(selectedMessages.length, calculateUnreadedMsgs($('#messageList').jtable('selectedRows')));
	};

	if (selectedMessages.length != 0) ajaxQuery({
		deletedMessages: selectedMessages,
		nBoxId: globalParams.nBoxID
	}, '/asp/ajax/DeleteMessagesAjax.asp', onSuccess);
}

function markMessages(unread) {
	var selectedMessages = getSelectedMessages(language.Generic.Messages.kNoMessagesSelectedToMark);
	var unreadMessagesAmount = calculateUnreadedMsgs($('#messageList').jtable('selectedRows'));
	var readMessagesAmount = selectedMessages.length - unreadMessagesAmount;
	var totalUnreadMessagesAmount = parseInt($('#unreadMessagesCount').text(), 10);
	var onSuccess = function () {
		if (unread) {
			$('#unreadMessagesCount').text(totalUnreadMessagesAmount + readMessagesAmount);
		} else 
		{
			$('#unreadMessagesCount').text(totalUnreadMessagesAmount - unreadMessagesAmount);
		}
		clearSelectedRows();
		alert("Сообщения отмечены");
		$('#messageList').jtable('reload', function () {
			if (globalParams.nBoxID == 1) {
				CheckMailBox();
			}
		});
	};

	if (selectedMessages.length != 0) ajaxQuery({
		markMessages: selectedMessages,
		nBoxId: globalParams.nBoxID,
		unread: unread
	}, '/asp/ajax/MarkMessagesAjax.asp', onSuccess);
}

function ChangeMBox() {
	var form = document.forms['MBoxForm'];
	form.submit();
}

function MoveMsgs() {
	var selectedMessages = getSelectedMessages(language.Generic.Messages.kNoMessagesSelectedToMove);
	var onSuccess = function () {
		alert(language.Generic.Messages.kSuccessMoveMsgs);
		$('#messageList').jtable('reload');

		reduceMsgCount(selectedMessages.length, calculateUnreadedMsgs($('#messageList').jtable('selectedRows')));
	};
	var nBoxSelected = $('[name=MVT]').val();

	if (selectedMessages.length != 0) ajaxQuery({
		movedMessages: selectedMessages,
		nFromBoxId: globalParams.nBoxID,
		nToBoxId: nBoxSelected
	}, '/asp/ajax/MoveMessagesAjax.asp', onSuccess);
}

function getSelectedMessages(strAlert) {
	var $selectedRows = $('#messageList').jtable('selectedRows');

	var length = $selectedRows.length;
	var selectedMessages = new Array(length);

	if (length == 0) {
		alert(strAlert);
	}
	else {
		var ind = 0;

		$selectedRows.each(function () {
			var record = $(this).data('record');
			selectedMessages[ind] = record.MessageId;
			ind++;
		});
	}
	return selectedMessages;
}

function ajaxQuery(data, url, onSuccessFunc) {
	var params = {
		action: url,
		data: data,
		showProcessing: true,
		onSuccess: onSuccessFunc
	};

	jsSubmit(params);
}

var wndcomposemsg = null;
function composemessage() {
	var url = urlHelper.makeUrl("composemessage.asp");
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=950,height=660', winChild: wndcomposemsg };
	windowOpen(winOptions);
	wndcomposemsg = winOptions.winChild;
	center(wndcomposemsg, 950, 660);
}

var wnd = null;
function readmessage(msgid, nBoxID) {
	globalParams.nReadMsgId = msgid;
	var url = urlHelper.makeUrl("readmessage.asp", { MID: msgid, MBID: nBoxID });
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=950,height=660', winChild: wnd };
	windowOpen(winOptions);
	wnd = winOptions.winChild;
	center(wnd, 950, 660);
}

function reduceUnreadedMsgCountAfterRead() {
	var $rows = $('.jtable-data-row');
	var read = '';

	$rows.each(function () {
		var record = $(this).data('record');

		if (globalParams.nReadMsgId == record.MessageId) {
			read = record.Read;
			if (read == 'N') {
				var unreadedMsg = parseInt($('#unreadMessagesCount').text(), 10) - 1;
				$('#unreadMessagesCount').text(unreadedMsg);
			}
			return false;
		}
	});
}

function clearSelectedRows() {
	$('#messageList').jtable('selectedRows').removeClass('jtable-row-selected');
}

function calculateUnreadedMsgs($selectedRows) {
	var unreadedMsgCount = 0;

	$selectedRows.each(function () {
		var record = $(this).data('record');

		var read = record.Read;
		if (read == 'N') {
			unreadedMsgCount++;
		}
	});

	return unreadedMsgCount;
}

function reduceMsgCount(reduceTotalCount, reduceUnreadedCount) {
	reduceUnreadedMsgCount(reduceUnreadedCount);
	reduceTotalMsgCount(reduceTotalCount);
}

function reduceTotalMsgCount(reduceTotalCount) {
	if (reduceTotalCount > 0) {
		var totalCountMsg = parseInt($('#totalMessagesCount').text(), 10) - reduceTotalCount;
		$('#totalMessagesCount').text(totalCountMsg);

		globalParams.nTotalCountMsgs = globalParams.nTotalCountMsgs - reduceTotalCount;

		hideButtons();
	}
}

function reduceUnreadedMsgCount(reduceUnreadedCount) {
	if (reduceUnreadedCount > 0) {
		var unreadedMsg = parseInt($('#unreadMessagesCount').text(), 10) - reduceUnreadedCount;
		$('#unreadMessagesCount').text(unreadedMsg);
	}
}

function reloadTableAfterRead() {
	var recordReadMessage = $('#messageList').jtable('getRowByKey', globalParams.nReadMsgId).data('record');
	
	if (recordReadMessage.Read == 'N') {
		reduceUnreadedMsgCountAfterRead();

		var record = {
			MessageId: globalParams.nReadMsgId,
			FromName: recordReadMessage.FromName,
			FromEOName: recordReadMessage.FromEOName,
			SentTo: recordReadMessage.SentTo,
			Subject: recordReadMessage.Subject,
			DateSent: recordReadMessage.DateSent,
			Read: 'Y'
		};

		$('#messageList').jtable('updateRecord', { record: record, clientOnly: true });
	}
}

function hideButtons() {
	if (globalParams.nTotalCountMsgs == 0) {
		$('#delButtons').hide();
		$('#moveButton').hide();
		$('#moveSelect').hide();
	}
}

function allMsgReadedCheck() {
	if (calculateUnreadedMsgs($('.jtable-data-row')) > 0)
		return false;
	else
		return true;
}

function CheckMailBox() {
	if (!window.opener.bExistsMessages && !allMsgReadedCheck()) {
		window.opener.bExistsMessages = !allMsgReadedCheck();
		window.opener.blink();
	} else {
		window.opener.bExistsMessages = !allMsgReadedCheck();
	}
}
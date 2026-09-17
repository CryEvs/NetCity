<!-- #INCLUDE VIRTUAL="/asp/headersimplepopup.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Photo_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->


<% ' © 2007-2021 IRTech. All rights reserved.
'--------- Page Parameters -------
'	MID=MESSAGEID
'	MBID=MALIBOXID
'	A={E|R|A|F,T} (edit | reply | reply to all | forward | attachment)
'	BA=Attachment body
'	NA=Attachment name
'	TA=Attachment type
'	DMID=DRAFT MESSAGEID
'	SID=Student ID
'	Sname=Student name
Dim sMsgID, cAction, sPrevPage, nPos
Dim sSubj, sText, sTO, sCC, sBCC, sLTO, sLCC, sLBCC, sPrefix, sHeader, sNeedNotify
Dim sAttachment, sAname, cAType
Dim rsMB, rsMsg, rsTO, strBackPage, bRepReloadType, sBoxID
Dim blnMailConfirm, bSendReport, objForm
Dim strFilesJson

Function GetPageTitle()
	GetPageTitle = obLanguage("Messages", "kTitleComposeMsg")
End Function

Sub ReadState()
	Dim rsObj

	If IsObject(obTokenMgr.GetData(strToken,"QA_dct")) Then
		Set objForm = obTokenMgr.GetData(strToken,"QA_dct")
		strBackPage			= objForm("BACK")
		sMsgID				= GetSafeID(objForm("MID"), "")
		sBoxID				= objForm("MBID")
		If IsDull(sBoxID) Then
			sBoxID = bxSent
		End If
		cAction				= objForm("A")
		sAname				= objForm("NA")
		cAType				= objForm("TA")
		sPrevPage			= objForm("PP")
		bSendReport			= CBool(objForm("RP") = "R")
		bRepReloadType		= CBool(objForm("RT") = "R")
		sBCC				= objForm("BCC")
		sLBCC				= objForm("LBCC")
		sText				= objForm("TXT")

		If Not objForm("Sname") = "undefined" Then
			sLTO = objForm("SID")
			sTO = objForm("Sname")
		End If

		Set objForm = nothing
		Call obTokenMgr.SetData(strToken,"QA_dct", null)
	Else
		strBackPage		= Request("BACK")
		sBoxID			= GetSafeID(Request("MBID"), bxSent)
		sMsgID			= GetSafeID(Request("MID"), "")
		cAction			= GetSafeStr(Request("A"), 1, "")
		sAname			= GetSafeStr(Request("NA"), -1, "")
		cAType			= GetSafeStr(Request("TA"), 1, "")
		sPrevPage		= GetSafeStr(Request("PP"), 400, "")
		sText			= GetSafeStr(Request("TXT"), 4000, "")
		bSendReport		= CBool(GetSafeStr(Request("RP"),1,"") = "R")
		bRepReloadType	= CBool(GetSafeStr(Request("RT"), 1, "") = "R")

		If Not Request("Sname") = "undefined" And Not bSendReport Then
			sLTO = Request("SID")
			sTO = Request("Sname")
		End If
		If Not Request("Cname") = "undefined" And Not bSendReport Then 
			sLCC = Request("CID")
			sCC = Request("Cname")
		End If

	End If

	blnMailConfirm = (GetSafeLng(obTokenMgr.GetData(strToken, stMailHasBeenSent), 0) = 1)
	If blnMailConfirm Then
		Call obTokenMgr.SetData(strToken, stMailHasBeenSent, 0)
	End If

	If Len(sAname) > kAttachNameLength Then
		sAname = Left(sAname, kAttachNameLength - 3) & "..."
	End If
	
	strFilesJson = ""
	If Not IsDull(sMsgID) And cAction <> "R" Then
		Dim result, oAttachmentsComponent

		Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")

		Set result = oAttachmentsComponent.GetFileAttachmentInfoMessage(sMsgID)

		strFilesJson = ConvertJsonObject2Str(result)
	End If
End Sub

Sub WriteState()
	If Len(strBackPage) > 0 Then Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)

	Call obTokenMgr.SetData(strToken, stStorageMsgRecips & "_ATO", Null)
	Call obTokenMgr.SetData(strToken, stStorageMsgRecips & "_ACC", Null)
	Call obTokenMgr.SetData(strToken, stStorageMsgRecips & "_ABC", Null)
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arMessagesSendReceive) or bIsEducManager
End Function

Sub Main
	Dim nMsgSize
	Dim regEx

	nPos = InStr(1,sPrevPage, "?")
	if nPos > 0 then sPrevPage = Left(sPrevPage,nPos-1)

	sCC			= IIF(IsDull(sCC), "", sCC)
	sBCC		= IIF(IsDull(sBCC), "", sBCC)
	sLCC		= IIF(IsDull(sLCC), "", sLCC)
	sLBCC		= IIF(IsDull(sLBCC), "", sLBCC)
	sPrefix		= ""
	sAttachment = ""
	sHeader		= ""
	sText		= IIF(IsDull(sText), "", sText)

	if cAction = "T" then 'attachment
		sAttachment = obTokenMgr.GetData(strToken, stMsgReport)
		if IsNull(sAttachment) then sAttachment = ""
		sSubj = sAname

		if Len(sSubj) > kSubjectLength then
			sSubj = Left(sSubj, kSubjectLength - 3) & "..."
		end if
	elseif sMsgID <> "" and cAction <> "" then
		Set rsMB = objNSNET.GetMailBoxList()
		if rsMB.EOF then GenerateError obLanguage("Messages","kErrNoMailBoxes")
		'get message
		'' Added check for UserID!
		Set rsMsg = objNSNET.GetMessageInfo(sMsgID, strUserId)
		TestError obLanguage("Messages","kErrNotFoundMsg")
		if rsMsg.EOF then GenerateError obLanguage("Messages","kErrNotFoundMsg")

		sSubj = GetSafeStr(rsMsg("SUBJ"), kSubjectLength, "")
		sText = rsMsg("TEXT")
		If Not IsNull(rsMsg("ATTACHMENT")) Then sAttachment = rsMsg("ATTACHMENT")

		if cAction = "R" OR cAction = "A" then	'reply & reply all
			sTO = GetSafeStr(rsMsg("FROMname"), -1, "")
			sLTO = GetSafeStr(rsMsg("FROMID"), -1, "")
			Call InsertAuthorInitials(sText, sTO)

			if cAction = "A" then	'reply all; to do - remove self address
				sCC = rsMsg("SENTTO")
				dim sTmp
				if not IsEmpty(sCC) and sCC <> "" then
					sTmp = rsMsg("SENTCC")
					If not IsNull(sTmp) and not IsEmpty(sTmp) and sTmp <> "" then sCC = sCC & "; " & sTmp
				end if
				sLCC = rsMsg("LISTTO")
				if not IsEmpty(sLCC) and sLCC <> "" then
					sTmp = rsMsg("LISTCC")
					if not IsNull(sTmp) and not IsEmpty(sTmp) and sTmp <> "" then sLCC = sLCC & ";" & sTmp
				end if
				'Если ученик то не отправлять группам. Т.е. только отправителю и явно перечисленным адресатам.
				If HasUserRole(rlstudent) Then
					Set regEx = New RegExp
					regEx.Global = True
					regEx.Pattern = "(U|T|A|P|S|R|D|H|(C[0-9]+)|(E[0-9]+));"
					sLCC = regEx.Replace(sLCC, "") 
					regEx.Pattern = "((" & obLanguage("Common","kParents") & "..)|(" & obLanguage("MenuFolders","kStudentsOfTheClass",strFunctionalityType) & _
									" ((..)|(...)))|(Всем (" & _
									GetGlbName("U") & "|" & GetGlbName("T") & "|" & GetGlbName("A") & "|" & _
									GetGlbName("P") & "|" & GetGlbName("S") & "|" & GetGlbName("R") & "|" & _
									GetGlbName("R") & "|" & GetGlbName("D") & "|" & GetGlbName("H") & ")))|(; )"
					sCC = regEx.Replace(sCC, "") 
				End If
			end if

			if InStr(1, sSubj, "Re:") <> 1 then sPrefix = "Re: "
			sHeader = GetHeader(rsMsg)
		elseif cAction = "F" then
			if InStr(1, sSubj, "Fw:") <> 1 then sPrefix = "Fw: "
			sHeader = GetHeader(rsMsg)
		elseif cAction = "E" then
			sTO = rsMsg("SENTTO")
			sLTO = rsMsg("LISTTO")
			sCC = rsMsg("SENTCC")
			sLCC = rsMsg("LISTCC")
			sNeedNotify = rsMsg("NEEDNOTIFICATION")
		end if
	end if
End Sub

Function onUnLoad()
	onUnLoad="JavaScript:closeABook();"
End Function

Function onLoad()
	onLoad = "fixWindowSize();setBodyFocus();"
End Function

Sub onHead()%>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/file-attachments.min.css")%>">
<script src="<%=GetVersionedJsLink("fileAttachmentCtrl.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

<SCRIPT type="text/javascript"><!--
isHaveToLogout = false;
var windABook = null;

function Back() {
	MsgCancel();
}

var source = "<table width=100% border=0><tr align=left><th width=170>{{message}}:</th><td><p>{{saname}}</p></td></tr><tr><td name=STMSGREPORT colspan=2>{{{context}}}</td></tr></table>";
var template = Handlebars.compile(source);
var fileAttachmentCtrl;
var printTableCss;

$(document).ready(function() {
	//Содержимое отчета
	var reportWnd = window.opener;
	var report;
	var form = $('[name=COMPOSE]', document);
	var htmlReportContent;

	// стили для печати отправляемого отчета
	var getPrintTableCss = function() {
		return printTableCss = printTableCss || $.get("/static/dist/pages/common/css/print-tables.min.css");
	};
	
	if (reportWnd) {

		getPrintTableCss().done(function(data) {

			report = $('#report', reportWnd.document);
			if (report.length) {
				var reportClone = report.clone();

				var reportTable = reportClone.find("table:has(.chart-data-row)");
				if (reportTable.hasClass("hide")) {
					reportTable.removeClass("hide");
				}

				var canvas = reportClone.find("#chart") || reportClone.find("canvas");
				if (canvas.length) {
					canvas.remove();
				}

				if (data) {
					var styleHtml = '<style>' + data + '</style>';
					var reportContent = reportClone.html();
					reportClone.html(styleHtml + reportContent);
				}

				htmlReportContent = reportClone.html();
			}
			else {
				<%If sAttachment <> "" Then%>
					htmlReportContent = "<%=(DB2Java(sAttachment))%>"
				<%End If%>
			}

			if (htmlReportContent) {
				form.append(template({message: language.Generic.Messages.kAddedReportFile, saname: "<%=sAname%>", context: htmlReportContent}));
			}
		});
	}

	fileAttachmentCtrl = new FileAttachmentCtrl({
			multiple: true,
			showDescription: false,
			block: $('#attachFiles')
		}, {
			wasChanged: true,
			context: {
				MessageId: <%=GetSafeLng(sMsgID, 0)%>
			}
			<%If Not IsDull(strFilesJson) Then%>,
				files: <%=strFilesJson%>
			<%End If%>
		}
	);
});

function fixWindowSize() { 
	self.resizeTo(950,660); 
	center(self, 950, 660); 
}

function closeABook(){if(windABook && !windABook.closed) {windABook.forceClosing = true;windABook.close();}}

function canSend() {
	var form = document.COMPOSE;
	var str = trimStr(form.elements['ATO'].value);

	if(str == null || str == '') {alert(language.Generic.Messages.kEmptyTo);form.elements['ATO'].focus();return false;}
	var str = trimStr(form.elements['BO'].value);

	if(trimStr(form.elements['SU'].value )=='' && str=='')
		{alert(language.Generic.Messages.kEmptyFields);form.elements['BO'].focus();return false;}

	if (str.length > 65535)
		{alert(language.Generic.Messages.kLengthMsg);return false;}

	return true;
}

function formSubmit(form, action) {
	var stMsgReport = $('input[name="STMSGREPORT"]').val();

	if (stMsgReport) {
		var length = stMsgReport.length;
		if(length > maxContentLength) {
			form.elements['STMSGREPORT'].value = "";
			extDeferred.when( sendPartReport(stMsgReport) ).then(function() {
				DoSubmit(form, action);
			});
			return;
		}
	}
	DoSubmit(form, action);
}

function Send() {
	if(isDBBusy()) return false;

	var form = document.COMPOSE;
	form.elements['MBID'].value = <%=bxSent%>;
	form.elements['DMID'].value = "";

	<%If sMsgID = "" Then%>SetStMsgReport();<%End If%>
	<%If bRepReloadType Then%>form.elements.RT.value = "R";<%End If%>

	fileAttachmentCtrl.appendInputToForm(document.forms["COMPOSE"]);
	setDBBusy();

	formSubmit(form, "sendsavemsg.asp");
}

function Save() {
	if(isDBBusy()) return false;

	var form = document.COMPOSE;

	form.elements['DMID'].value = <%=IIF(sMsgID <> "" And (cAction = "" Or sBoxID = Cstr(bxDraft)), sMsgID, "'" & kSaveDraftFlag & "'")%>;
	form.elements['MBID'].value = <%=sBoxID%>;

	<%If sMsgID = "" Then%>SetStMsgReport();<%End If%>
	<%If bRepReloadType Then%>form.elements.RT.value = "R";<%End If%>

	fileAttachmentCtrl.appendInputToForm(document.forms["COMPOSE"]);
	setDBBusy();

	formSubmit(form, "sendsavemsg.asp?SO=Y");
}

function MsgCancel() {
	checkForChanges().then(function() {
		window.close();
	});
}

function SetStMsgReport() {
	var td = $('td[name=STMSGREPORT]');
	if(td.length) {
		$('input[name=STMSGREPORT]').val(td.clone().html());
	}
}

function openAddressBook(field, addrlist) {
	closeABook();
	var url = urlHelper.makeUrl("/asp/messages/addressbook.asp", { F: "COMPOSE", FN: field, FA: addrlist });
	var winOptions = { url: url, name: 'AddrBookWindow', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=900,height=600', winChild: windABook };
	windowOpen( winOptions );
	windABook = winOptions.winChild;
	center(windABook, 900, 600);
}

function setBodyFocus() {
	<%If blnMailConfirm Then%>
		alert(language.Generic.Messages.kYourDraftWasSaved);
	<%End If%>
	var form = document.COMPOSE;
	form.elements['BO'].focus();
}
//-->
</SCRIPT>
<%End Sub

Sub onDrawPageFooter()
End Sub

Sub DrawButtons
	Call ButtonSend("if(canSend())Send()", obLanguage("Messages","kSend"))
	Call ButtonSave("if(canSend())Save()", obLanguage("Buttons","kSave"))
End Sub

Sub onDrawPage()
	Dim strRealSubj
	strRealSubj = sPrefix & sSubj
	strRealSubj = MakeStringOfSafeLength(strRealSubj, kSubjectLength)
	%>

	<form name="COMPOSE" method="post" class="form-horizontal form-xs">
		<%=WriteObligatoryTags()%>
		<%=comHelper.AntiForgeryHelper.WriteTokenInput()%>
		<%WriteHiddenTags Array( "MID", sMsgID, "MBID", sBoxID, "LTO", Replace(sLTO, """", "&quot;"), "LCC", Replace(sLCC, """", "&quot;"), "LBC", Replace(sLBCC, """", "&quot;"), "TA", cAType, "NA", sAname, "PP", sPrevPage, "DMID", "", "RT", Request("RT"))%>
		<%WriteHiddenTags(Array("DESTINATION", "", "ShortAttach", "1", "EDITUSERID", strUserID))%>

		<%Call DrawButtonPanel%>
		<div class="row">
			<div class="col-md-12">
				<%
				Call DrawAddressRow(obLanguage("Messages", "kWhom"), "ATO", sTO, "LTO")
				Call DrawAddressRow(obLanguage("Messages", "kCopy"), "ACC", sCC, "LCC")
				Call DrawAddressRow(obLanguage("Messages", "kHCopy"), "ABC", sBCC, "LBC")

				Call DrawInputRowWithClass(obLanguage("Messages","kMsgSubject"), strRealSubj, "SU", "text", 70, kSubjectLength, "", "FilterWhiteSpace")

				Call DrawCheckBox(obLanguage("Messages", "kNotifyWhenRead"), "NEEDNOTIFY", "1", (sNeedNotify = 1), "") 
				if Not IsDull(sText) Then%>
					<script>
						$("textarea[name='BO']").val('<%=sText%>')
					</script><%
				End If
				%>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<textarea name="BO" class="form-control"  rows="15" cols="74" wrap="soft" onChange="JavaScript:dataChanged()"><%=sHeader & sText%></textarea>
			</div>
		</div>
		<br />
		<div id="attachFiles"></div>
		<%WriteHiddenTags(Array("STMSGREPORT", ""))%>
	</form>
<%End Sub

Sub DrawAddressRow(theRowName, theName, thValue, param2)
	OpenFormGroup theRowName
	%>
		<div class="input-group">
			<input OnKeyPress="return false;" class="form-control" type="text" name="<%=theName%>" size="<%=TextInputSize(65)%>" maxlength=""4000"" readonly value="<%=DB2Value(thValue)%>">
			<span class="input-group-btn">
				<%ImageButton "openAddressBook('"&theName&"','"&param2&"');", obLanguage("Messages","kAddrBookChoose"), "glyphicon glyphicon-list-alt" %>
			</span>
		</div><%
	CloseFormGroup
End Sub

Sub InsertAuthorInitials(strMessage, strFromUser)
	Dim regEx
	Dim Initials
	Dim rsUserInfo

'	Set rsUserInfo = objNSNET.GetUserInfo(strFromUserID)
'	Initials = Left(rsUserInfo("FIRSTNAME"),1) & Left(rsUserInfo("LASTNAME"),1)
'	If IsDull(Initials) Then Initials = rsUserInfo("NICKNAME")
	Initials = strFromUser
	strMessage = Trim(strMessage)
	If IsDull( strMessage ) Then Exit Sub
	Set regEx = New RegExp
	regEx.Global = True
	regEx.Pattern = "\r?\n|(\\r)?\\n"
	strMessage = regEx.Replace(strMessage, CHR(10) & Initials & "> ")
	strMessage = Initials & "> " & strMessage
End Sub%>

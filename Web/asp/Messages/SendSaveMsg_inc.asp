<!-- #INCLUDE VIRTUAL="/asp/scripts/messaging.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Const kId = "идентификатор"
Const kErrSendMessageToClients = "Не удалось отправить сообщение следующим округам:"

Dim strPapers, bPaper
Dim objMailComponent, objMessage, bForwardMsg

Function Send(sBoxID, sMsgID, sTO, sCC, sSubj, sBody, sLTO, sLCC, sBCC, sLBCC, sAName, sAttachmentTextReport, cAType, sDraftID, bNewMessageNeedNotify)
	Dim sNewMsgID, errs
	Dim nUserID, nSchoolID, nEMID
	Dim objProcessMsgResult, objLocalMsgResult
	Dim bSaveDraft
	Dim strErrorInfo
	Dim strAttachmentIds

	On Error Resume Next

	Call InitMailComponent()

	Set objMessage = Server.CreateObject("NetCity.Common.ObjectModel.Mail.Message")
	If Not IsObject(objMessage) Then
		GenerateError obLanguage("Messages","kCantCreateMessageObject")
	End If

	objMessage.Id = sMsgID
	objMessage.DateSent = NSNow
	objMessage.SetFromId(strUserID)
	objMessage.FromName = strUserName
	objMessage.SentTo = sTO
	objMessage.SentCc = sCC
	objMessage.SentBc = sBCC
	objMessage.ListTo = sLTO
	objMessage.ListCc = sLCC
	objMessage.ListBc = sLBCC
	objMessage.Subject = sSubj
	objMessage.Text = sBody
	objMessage.NeedNotification = IIf(bNewMessageNeedNotify, 1, 0)
	
	If IsEmpty(bForwardMsg) Or Not bForwardMsg Then
		strAttachmentIds		= Request.Form("attachment")
		CheckAttachments strAttachmentIds
		objMessage.SetFileAttachmentIds(strAttachmentIds)
	End If

	objMessage.AttachmentInfo.ReportAttachment.Title = sAName
	objMessage.AttachmentInfo.ReportAttachment.Type = cAType
	objMessage.AttachmentInfo.ReportAttachment.Text = sAttachmentTextReport

	If sDraftID <> "" And sDraftID <> kSaveDraftFlag Then
		sNewMsgID = sDraftID
		objMessage.Id = GetSafeLng(sNewMsgID, Null)

		Call objMailComponent.UpdateMessageCom(objMessage)

		Call TestError(obLanguage("Messages", "kErrorUpdate"))
	Else
		bSaveDraft = (sDraftID = kSaveDraftFlag)
		strPapers = ""

		nUserID = CLng(strUserID)
		If bIsEducManager Then
			objMessage.SetFromSchoolId(strEMID)
			nSchoolID = Empty
		Else
			objMessage.SetFromSchoolId(strSchoolID)
			nSchoolID = CLng(strSchoolID)
		End If

		Set objProcessMsgResult = objMailComponent.ProcessSendMessageCom(objMessage, nSchoolID, bSaveDraft)
		Call TestError(obLanguage("Messages","kErrorSaveMsg"))

		strErrorInfo = objProcessMsgResult.GetErrorText()

		Set objLocalMsgResult = objProcessMsgResult.GetLocalSendResult()
		If objLocalMsgResult.Result = ProcessMessageResult_MessageError Then
			'если не удалась локальная отправка - генерируем ошибку
			Call GenerateError(strErrorInfo)
		End If

		sNewMsgID = CLng(objLocalMsgResult.NewMessageId)
		errs = strErrorInfo & objLocalMsgResult.Errors
		strPapers = objLocalMsgResult.UsersPapers
		bPaper = (strPapers <> "")
	End If

	obTokenMgr.SetData strToken, "errs", errs
	If Not IsDull(errs) Then Call WriteToLog(kUETWarning, errs)

	Send = sNewMsgID
End Function

Sub CheckAttachments(strAttachmentIds)
	Dim strDocIDs, strMsgDocIDs, strAttachmentId, arrAttachments
	Dim i

	If IsDull(strAttachmentIds) Then
		Exit Sub
	End If

	arrAttachments = Split(strAttachmentIds, ",")
	strDocIDs = "," & CStr(obTokenMgr.GetData(strToken, stDocIDs))
	strMsgDocIDs = "," & CStr(obTokenMgr.GetData(strToken, stMsgDocIDs))

	For i = 0 To UBound(arrAttachments)
		strAttachmentId = arrAttachments(i)
		If Not IsDull(strAttachmentId) Then
			If InStr(strDocIDs, "," & Trim(strAttachmentId) & ",") = 0 Then
				If InStr(strMsgDocIDs, "," & Trim(strAttachmentId) & ",") = 0 Then
					GenerateError obLanguage("Common","kInvalidParameter")
				End If
			End If
		End If
	Next
End Sub

Sub InitMailComponent
	Set objMailComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMailComponent")

	If Not IsObject(objMailComponent) Then
		GenerateError obLanguage("Messages","kCantCreateMailComponent")
	End If
End Sub
%>
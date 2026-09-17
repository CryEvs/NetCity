<!-- #INCLUDE VIRTUAL="/asp/headerUpload.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim nAttachmentID, strAFileName, strADescription, objForm, strBackPage, nUserEditID
Dim blnShortAttach
strBackPage = obTokenMgr.GetData(strToken,stBackPage)
If strBackPage="/asp/grade/EditJournalAssignments.asp" Or strBackPage="" Then strBackPage = "/asp/Curriculum/EditAssignment.asp"
blnShortAttach = ( Not IsDull(requestData("EDITUSERID")) )

nAttachmentID = GetSafeLng( requestData("ATTACHMENTID"), 0)

If Not IsObject(obTokenMgr.GetData(strToken,"QA_dct")) Then
	GenerateError obLanguage("Common","kInvalidParameter")
End If
Set objForm = obTokenMgr.GetData(strToken,"QA_dct")

If blnShortAttach Then
	nUserEditID = GetSafeLng ( objForm("EDITUSERID"), requestData("EDITUSERID"))
	strADescription = ""
Else
	nUserEditID = -1
	strADescription = GetSafeStr( requestData("ADESC"),4000, "" )
	objForm("ADESC") = strADescription
End If

Dim strFileName
strFileName = requestData("adoc").Param.GetHeader("filename")

If Not IsDull(strFileName) Then
	Call SaveAttachment
Else
	strAFileName = GetSafeStr( requestData("AFileName"),200, "" )
End If

Call DisposeUpload()

TestError obLanguage("Curriculum","kCantAttachFile")
objForm("ATTACHMENTID") = nAttachmentID
objForm("AFileName") = strAFileName

Call obTokenMgr.SetData(strToken,"QA_dct", objForm )
Response.Redirect strBackPage & "?" & Ver() & "&AT=" & strToken &"&FAtt=1"

Sub SaveAttachment()
	If Not Response.IsClientConnected() Then Response.End
	Dim bCreateLessonHAAttach, bEditLessonHAAttach, nLessonID

	Dim oAttachmentsComponent
	Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")

	Dim blobData, nMaxSize

	strAFileName = GetFileName(strFileName)
	blobData = requestData("adoc").Param.Bytes
	nMaxSize = CLng(IIF(Instr(strBackPage,"essage")>0,kMailFile_MaxSize_KB,kAnnounceAndOtheAttachFile_MaxSize_KB) * 1024)

	If nAttachmentID = 0 Then
		Dim resultCreate
		Set resultCreate = oAttachmentsComponent.CreateFileAttachment(blobData, strAFileName, strADescription, nUserEditID, nMaxSize)
		If Not resultCreate.IsSuccess Then GenerateError resultCreate.Message
		nAttachmentID = resultCreate.Data
		If (GetSafeLng ( objForm("RELWITHKTP"), 0) = 2) Then 
			nLessonID = GetSafeLng ( objForm("HALESSON"), Null )
			Call objNSNET.AttachHAFileToLesson(Empty, nLessonID, nAttachmentID)
		End If
		Call SetHAFormParams()
		Set resultCreate = NOTHING
		TestError obLanguage("Curriculum","kCantAttachFile")
	Else
		Dim resultEdit
		Set resultEdit = oAttachmentsComponent.EditFileAttachment(nAttachmentID, blobData, strAFileName, strADescription, nUserEditID, nMaxSize)
		If Not resultEdit.IsSuccess Then GenerateError resultEdit.Message
		Call SetHAFormParams()
		Set resultEdit = NOTHING
		TestError obLanguage("Curriculum","kCantEditAttachedFile")
	End If
	Set oAttachmentsComponent = NOTHING
End Sub

Sub SetHAFormParams
	If Not IsEmpty(objForm("RELWITHKTP")) Then
		If (GetSafeLng(objForm("RELWITHKTP"), 0) = 2) Then 
			objForm("KTPHAAttachmentId") = nAttachmentID
			objForm("KTPHAAttachmentDescr") = strADescription
			objForm("KTPHAAttachmentFN") = GetFileName(strAFileName)
		ElseIf (objForm("RELWITHKTP") = "0") Then
			objForm("UHAAttachmentId") = nAttachmentID
			objForm("UHAAttachmentDescr") = strADescription
			objForm("UHAAttachmentFN") = GetFileName(strAFileName)
		End If	
	End If
End Sub
%>

<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/teacher.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
' AT=<Access Token>

Dim nAssignmentID, nAttachmentID, strAFileName, strADescription, objForm
Dim strBackPage
Dim nAnnouncementID
Dim transaction
Dim bDelHAAttachFromLesson, nLessonID

strBackPage	= obTokenMgr.GetData(strToken,stBackPage)
If strBackPage = "" Then
	strBackPage = "/asp/Curriculum/EditAssignment.asp"
	nAssignmentID = GetSafeLng(obTokenMgr.GetData(strToken,stCrMngmAssignmentID),-1)
Else
	nAssignmentID = -1
End	If

If Not IsObject(obTokenMgr.GetData(strToken,"QA_dct")) Then
	GenerateHTMLError obLanguage("Common","kInvalidParameter"), strBackPage, strToken
End If
Set objForm = obTokenMgr.GetData(strToken,"QA_dct")
nAttachmentID = GetSafeLng ( objForm("ATTACHMENTID"), 0)
nAnnouncementID = GetSafeLng ( objForm("ANNOUNCEMENTID"), 0)
bDelHAAttachFromLesson = (GetSafeLng ( objForm("RELWITHKTP"), 0) = 2)
If bDelHAAttachFromLesson Then nLessonID = GetSafeLng ( objForm("HALESSON"), Null )

transaction = objNSNET.GetTransaction()
 
If bDelHAAttachFromLesson Then
	Call objNSNET.DetachAttachmentFromLesson_WT(transaction, nLessonID)
	objForm("KTPHAAttachmentId") = 0
	objForm("KTPHAAttachmentDescr") = ""
	objForm("KTPHAAttachmentFN") = ""
Else
	If nAssignmentID > 0 Then Call objNSNET.DetachAttachmentFromAssignment_WT(transaction, nAssignmentID)
	If nAnnouncementID > 0 Then	Call objNSNET.DetachAttachmentFromAnnouncement_WT(transaction, nAnnouncementID)
End If
Call objNSNET.RemoveFileAttachment_WT(transaction, nAttachmentID)

objNSNET.CommitTransaction(transaction)

objForm("ATTACHMENTID")	= 0
objForm("ADESC") = ""
objForm("AFileName") = ""
Call obTokenMgr.SetData(strToken,"QA_dct", objForm )

RedirectTo strBackPage & "?" , null
%>

<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim strTitle, nAnnouncementID, strDescription, nRoleID, dtPost, strAttachmentIds, bEdit
Dim nPortal, nPublic, isPortal

strTitle			= GetSafeStr(Request("TITLE"), 50, Null)
strDescription		= GetSafeStr(Request("AD"), 4000, "")
nRoleID				= GetSafeLng(Request("ROLEID"), Null)
dtPost				= GetSafeDate(Request("ADT"), Null)
strAttachmentIds	= Request.Form("attachment")
nAnnouncementID		= Request("ANNOUNCEMENTID")
bEdit = (Request("ACTION") = "edit")

nPortal = 0
nPublic = 0

If PORTAL Then
	nPortal = GetSafeLng(Request("PORTAL"), 0)
	If nPortal = 1 Then
		nPublic = GetSafeLng(Request("PUBLIC"), 0)
	End If
Else
	nPortal = -1
End If

On Error Resume Next

If Not bEdit Then
	isPortal = CBool(nPortal = 1)
	Call objNSNET.SaveAnnouncement(strUserID, nRoleID, strTitle, strDescription, NSNow(), dtPost, strAttachmentIds, isPortal, nPublic, strSchoolId)
Else
	Call objNSNET.EditAnnouncement(nAnnouncementID, nRoleID, strTitle, strDescription, NSNow(), dtPost, strAttachmentIds, nPortal, nPublic, strSchoolId)
End If
TestError obLanguage("Announcement", "kErrCantSaveAnnouncement")

Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Announcement", IIF(bEdit, "kAnnouncementIsSaved", "kAnnouncementIsSent"))))
RedirectTo "ViewAnnouncements.asp", Array("Save", IIF(bEdit, "2", "1"))%>
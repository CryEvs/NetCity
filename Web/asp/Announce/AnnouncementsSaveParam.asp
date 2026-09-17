<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

On Error Resume Next

Dim strTitle, strDescription, rsRoleList, nRoleID, dtPost ,strAFileName
Dim strDestination, strADescription, nAttachmentID, bEdit, nAnnouncementID
Dim objForm
Dim nPortal, nPublic

strTitle = GetSafeStr(Request.Item("TITLE"),50,"")
strDescription = GetSafeStr( Request.Item("AD"),4000, "" ) 
nRoleID = CStr(Request.Item("ROLEID"))
dtPost = CStr(Request.Item("ADT"))
bEdit = (Request("ACTION") ="edit")
nAnnouncementID = Request("ANNOUNCEMENTID") 
strADescription = GetSafeStr( Request.Item("ADESC"),4000, "" ) 
nAttachmentID = GetSafeLng ( Request.Item("ATTACHMENTID"), 0)
strAFileName = GetSafeStr( Request.Item("AFileName"),200, "" ) 
If PORTAL Then
	nPortal = GetSafeLng(Request("PORTAL"), 0)
	nPublic = GetSafeLng(Request("PUBLIC"), 0)
End If

Set objForm = Server.CreateObject( "NetCity.Storage" )
objForm.Add "TITLE", strTitle
objForm.Add "AD", strDescription
objForm.Add "ROLEID", nRoleID
objForm.Add "ADT", dtPost
objForm.Add "ATTACHMENTID", nAttachmentID
objForm.Add "ADESC", strADescription
objForm.Add "AFileName", strAFileName
objForm.Add "BEdit", bEdit
objForm.Add "ANNOUNCEMENTID", nAnnouncementID
If PORTAL Then
	objForm.Add "PORTAL", nPortal
	objForm.Add "PUBLIC", nPublic
End If
Call obTokenMgr.SetData(strToken,"QA_dct", objForm )
Call obTokenMgr.SetData(strToken,stBackPage, "/asp/announce/Announcements.asp")
strDestination = Request.Item("DESTINATION")
Response.Redirect strDestination
%>

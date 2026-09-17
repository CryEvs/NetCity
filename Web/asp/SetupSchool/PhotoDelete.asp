<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strEditUserID, result
On Error Resume Next

Set result = new JSONResult
strEditUserID = GetSafeLng(Request("userId"), Null)

Call objNSNET.SetUserPhoto(strEditUserID, Empty, Empty)

result.Message = CStr(obLanguage("Photo", "kPhotoWasDeleted"))

Response.Write result%>
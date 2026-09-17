<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

On Error Resume Next

Dim arrAnnList

arrAnnList = Split(Request("DEL"), ",")
If UBound(arrAnnList) >= 0 Then
	Call objNSNET.RemoveAnnouncements(arrAnnList)
    TestError obLanguage("Announcement","kErrCantDeleteAnnouncements")
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Announcement", "kAttention1")))
End If    
Response.Redirect "ViewAnnouncements.asp?AT=" & strToken
%>

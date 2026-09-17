<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim nTId, nPage, nPageSize, nTPage
Dim strMessage

Sub ReadState()
	If Not HasUserRight(arForumSendReceive) Then GenerateError obLanguage("Common","kErrPageAccess")
	nTId		= GetSafeLng( Request("TID"), Null )
	nPage		= GetSafeLng( Request("PAGE"), Null )
	nPageSize	= GetSafeLng( Request("PAGESIZE"), Null )
	strMessage	= GetSafeStr( Request("MESSAGE"), -1, Null )
	nTPage		= GetSafeLng( Request("TPAGE"), Null )
End Sub

Sub MakeRedirect()
	RedirectTo "ShowThread.asp?TID=" & nTId & "&PAGE=" & nPage & "&PAGESIZE=" & nPageSize & "&TPAGE=" & nTPage , Null
End Sub

Sub Main()
	Call objNSNETWork.SendReply(nTid, strUserId, Trim(strMessage), NSNow )
End Sub

Call ReadState
Call Main
Call MakeRedirect
%>

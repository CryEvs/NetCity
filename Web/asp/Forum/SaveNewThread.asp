<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim nTid, nPage, nPageSize, nTPage
Dim strName, strMessage

Sub Readstate()
	If Not HasUserRight(arForumSendReceive) Then GenerateError obLanguage("Common","kErrPageAccess")
	strName		= GetSafeStr( Request("NAME"), -1, Null )
	strMessage	= CSTR(Request("MESSAGE"))
	nPage		= GetSafeLng( Request("PAGE"), Null )
	nPageSize	= GetSafeLng( Request("PAGESIZE"), Null )
	nTPage		= GetSafeLng( Request("TPAGE"), Null )
End Sub

Sub Main()
	nTid = objNSNETWork.SaveNewThread(strSchoolId, strUserId, Trim(strName), Trim(strMessage), NSNow )
End Sub

Sub MakeRedirect()
	RedirectTo "ShowThread.asp?TID=" & nTId & "&PAGE=" & nPage & "&PAGESIZE=" & nPageSize & "&TPAGE=" & nTPage, Null
End Sub

Call ReadState
Call Main
Call MakeRedirect
%>

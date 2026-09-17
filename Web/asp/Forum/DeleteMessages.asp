<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="ForumConstants_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kDelInputName	= "DELARR"

Dim	nTId, nPage, nPageSize, nRestMessages, nTPage
Dim	strDelArr
Dim	arrDelArr
Dim	objTopicCount

Sub ReadState()
	strDelArr	= GetSafeStr( Request( kDelInputName ), -1, Null )
	nTId		= GetSafeLng( Request("TID"), Null )
	nPage		= GetSafeLng( Request("PAGE"), Null )
	nPageSize	= GetSafeLng( Request("PAGESIZE"), Null )
	nTPage		= GetSafeLng( Request("TPAGE"), Null )
	Call CheckRightOnEditForum(nTId)
End Sub

Sub Main()
	arrDelArr = Split ( strDelArr, kSplitter )
	Redim Preserve arrDelArr( Ubound( arrDelArr, 1 ) - 1 )
	nRestMessages =  objNSNETWork.DeleteMessages(nTId, arrDelArr )
End Sub

Sub MakeRedirect()
	If nRestMessages = 0 Then
		RedirectTo "Forum.asp?PAGE=" & nPage & "&PAGESIZE=" & nPageSize, Null
	Else
		RedirectTo "ShowThread.asp?TID=" & nTId & "&PAGE=" & nPage & "&PAGESIZE=" & nPageSize & "&TPAGE=" & nTPage, Null
	End If
End Sub

Call ReadState
Call Main
Call MakeRedirect
%>

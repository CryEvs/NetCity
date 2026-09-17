<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="ForumConstants_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kDelInputName	= "DELARR"

Dim	nPage, nPageSize
Dim	strDelArr
Dim	arrDelArr

Sub ReadState()
	Call CheckRightOnEditForum(-1)
	strDelArr = GetSafeStr( Request( kDelInputName ), -1, Null )
	nPage = GetSafeLng( Request("PAGE"), Null )
	nPageSize = GetSafeLng( Request("PAGESIZE"), Null )
End Sub

Sub Main()
	arrDelArr = Split ( strDelArr, kSplitter )
	Redim Preserve arrDelArr( Ubound( arrDelArr, 1 ) - 1 )
	Call objNSNETWork.DeleteThread(arrDelArr )
End Sub

Sub MakeRedirect()
	RedirectTo "Forum.asp?PAGE=" & nPage & "&PAGESIZE=" & nPageSize, Null
End Sub

Call ReadState
Call Main
Call MakeRedirect
%>

<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim nQueryId, nExpressionId
Dim strIds
Dim arrIds

Sub ReadState()
	nQueryId = GetSafeLng( obTokenMgr.GetData( strToken, stQueryId ), Null )
	strIds = GetSafeStr( Request("IDS"), -1, "" )
	nExpressionId = GetSafeLng( obTokenMgr.GetData( strToken, stExpressionId ), Null )
End Sub

Sub Main()
	Call objNSNETWork.DeleteFiltersByIds(strIds )
End Sub

Sub MakeRedirect()
	RedirectTo "ReportBuildWizardStep6.asp", null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>

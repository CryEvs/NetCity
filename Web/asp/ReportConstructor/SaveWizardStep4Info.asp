<!-- #INCLUDE FILE="SaveStepsInfo_inc.asp" -->
<!-- #INCLUDE FILE="UpdateQueryFields_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Sub ReadState()
	strStepDir = "4"
	nReportId = GetSafeLng( obTokenMgr.GetData( strToken, stReportID ), Null )
	nQueryId = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), Null )
End Sub

Sub Main()
	on error resume next
	Dim transaction, nFid
	transaction = objNSNETWork.GetTransaction()
	nFid = 0

	if Request("act") = "change" Then nFid = GetSafeLng( Request("GID"), 0 )
	Call UpdateQueryGroupings( transaction, nFid )

	Select Case Request("act")
	Case "add"
		Call objNSNETWork.InsertGrouping_WT(transaction, nQueryId, GetSafeID( obTokenMgr.GetData( strToken, "nObjectID" ), "0"))
	Case "delete"
		Call objNSNETWork.DeleteGroupingsById_WT(transaction, CStr(Request("GroupProperty")) )
		Call objNSNETWork.CleanUpQuery_WT(transaction, nQueryId )
	Case "change"
		'strStepDir = strStepDir
	Case Else
		strStepDir = GetSafeID( Request("STEPDIR"), "4" )
		Call UpdateBuildStatus(transaction)
	End Select
	TestErrorWithTransaction transaction, Err.description
	objNSNETWork.CommitTransaction(transaction)
End Sub

Sub MakeRedirect()
	RedirectTo "ReportBuildWizardStep" & strStepDir & ".asp", Null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>

<!-- #INCLUDE FILE="SaveStepsInfo_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim strRedir
Dim objRs
Dim transaction

nReportID = GetSafeLng( Request( "RPTID" ), Null )

Set objRs = objNSNETWork.GetReportQueriesList(nReportID )
If objRs.EOF Then RedirectTo "ReportConstructor.asp", Null

nQueryId = GetSafeLng( objRs( "QUERYID" ), Null )

Set objRs = objNSNETWork.GetQueryData(nQueryId )
If objRs.EOF Then RedirectTo "ReportConstructor.asp", Null

obTokenMgr.SetData strToken, stReportID, nReportID
obTokenMgr.SetData strToken, stQueryID, nQueryId

transaction = objNSNETWork.GetTransaction()
Call objNSNETWork.UpdateReportSetInEdit_WT(transaction, Clng( strUserId ), nReportID, nQueryId )
objNSNETWork.CommitTransaction(transaction)

strRedir = "ReportBuildWizardStep" & GetSafeID( objRs( "BUILDSTATUS" ), Null ) & ".asp"
If CheckQueryFields( nQueryId ) Then
	RedirectTo strRedir, Null
Else
	If objRs( "BUILDSTATUS" ) <= 5 Then
		RedirectTo strRedir, Null
	Else
		RedirectTo "ReportBuildWizardStep5.asp", Null
	End If
End If

Function CheckQueryFields( nQueryId )
	Dim nNum
	nNum = objNSNETWork.GetQueryFieldsCount(nQueryId )
	CheckQueryFields = (nNum > 0)
End Function
%>

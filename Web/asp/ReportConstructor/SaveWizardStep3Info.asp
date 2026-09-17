<!-- #INCLUDE FILE="SaveStepsInfo_inc.asp" -->
<!-- #INCLUDE FILE="SaveStep3_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
nReportId = GetSafeLng( obTokenMgr.GetData( strToken, stReportID ), Null )
nQueryId = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID), Null )
strStepDir = GetSafeID( Request("STEPDIR"), Null )
Dim transaction

'objCon.BeginTrans
transaction = objNSNETWork.GetTransaction()
Call UpdateQueryObjects_WT(transaction)
Call UpdateBuildStatus(transaction)
'objCon.CommitTrans
objNSNETWork.CommitTransaction(transaction)

RedirectTo "ReportBuildWizardStep" & strStepDir & ".asp", Null
%>

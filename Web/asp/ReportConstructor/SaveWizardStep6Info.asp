<!-- #INCLUDE FILE="SaveStepsInfo_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

strStepNo = GetSafeID( Request("STEPNO"), 0 )
nReportId = GetSafeLng( obTokenMgr.GetData(strToken, stReportID), Null )
nQueryId = GetSafeLng( obTokenMgr.GetData(strToken, stQueryID), Null )
strStepDir = GetSafeID( Request("STEPDIR"), Null )

Dim transaction
transaction = objNSNETWork.GetTransaction()

Call UpdateBuildStatus(transaction)

objNSNETWork.CommitTransaction(transaction)

RedirectTo "ReportBuildWizardStep" & strStepDir & ".asp", Null
%>

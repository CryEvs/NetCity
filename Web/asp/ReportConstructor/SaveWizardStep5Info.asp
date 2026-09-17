<!-- #INCLUDE FILE="SaveStepsInfo_inc.asp" -->
<!-- #INCLUDE FILE="UpdateQueryFields_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nPropertyID, objRs, nObjectID, objRec, nFid

strStepNo = GetSafeID( Request("STEPNO"), 0 )
nReportId = GetSafeLng( obTokenMgr.GetData( strToken, stReportID ), Null )
nQueryId  = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), Null )
strStepDir = 5
on error resume next

Dim transaction
transaction = objNSNETWork.GetTransaction()

Call objNSNETWork.UpdateSetupQuery_WT(transaction, nQueryId, GetSafeStr( Request("DIST"), -1, "N" ), GetSafeStr( Request("GRP"), -1, "N" ) )
nFid = 0
if Request("act") = "change" Then nFid = GetSafeLng( Request("FID"), 0 )
Call UpdateQueryFields( transaction, nFid )

Select Case Request("act")
Case "add"
	Call objNSNETWork.InsertField_WT(transaction, nQueryId, GetSafeID( obTokenMgr.GetData( strToken,  "nObjectID" ), "0"))
Case "delete"
	Call objNSNETWork.DeleteQueryFieldsByIds_WT( transaction, nQueryId, CStr( Request("GroupProperty") ) )
Case "change"
	'strStepDir = strStepDir
Case Else
	strStepDir = GetSafeID( Request("STEPDIR"), Null )
	Call UpdateBuildStatus(transaction)
End Select

TestErrorWithTransaction transaction, Err.description
objNSNETWork.CommitTransaction(transaction)

RedirectTo "ReportBuildWizardStep" & strStepDir & ".asp", Null

%>

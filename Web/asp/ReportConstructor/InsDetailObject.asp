<!-- #INCLUDE FILE="SaveStepsInfo_inc.asp" -->
<!-- #INCLUDE FILE="SaveStep3_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim nObjectID, nMasterID
Dim transaction

nObjectID = GetSafeLng( Request("OBJID"), Null )
nMasterID = GetSafeLng( Request("MOBJID"), Null )
nQueryID = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), Null )

transaction =  objNSNETWork.GetTransaction()
Call objNSNETWork.InsertQueryObject_WT(transaction, nQueryId, nObjectID, nMasterID )
Call SetDefaultParameters_WT(transaction)
Call UpdateQueryObjects_WT(transaction)
objNSNETWork.CommitTransaction(transaction)

RedirectTo "ReportBuildWizardStep3.asp", Null
%>

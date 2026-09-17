<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="SaveStep3_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.
Dim strDelObjects, nQueryID, transaction
nQueryID = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), Null )
strDelObjects = GetSafeStr( Request("OBJSTR"), -1, "" )
objNSNETWork.DeleteQueryObjects(strDelObjects)
transaction = objNSNETWork.GetTransaction()
Call SetDefaultParameters_WT(transaction)
objNSNETWork.CommitTransaction(transaction)

RedirectTo "ReportBuildWizardStep2.asp", Null

%>

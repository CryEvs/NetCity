<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kArrReportName = 0
Const kArrReportDesc = 1
Const kArrReportType = 2

Dim nReportID, nQueryId, strStepNo, strStepDir

Sub UpdateBuildStatus(transaction)
	Dim objRs, nStepDir
	' 1 query in 1 report
	Set objRs = objNSNETWork.GetQueryData_WT(transaction, nQueryId )
	If Not objRs.EOF Then
		nStepDir = Clng(strStepDir)
		If nStepDir > GetSafeLng(objRs("BUILDSTATUS"), 0) Then 
		   Call objNSNETWork.UpdateBuildStatus_WT(transaction, nQueryId, strUserId, nStepDir )
		End If    
	End If
	Call objNSNETWork.UpdateReportSetInEdit_WT(transaction, strUserId, nReportId, nQueryId )
End Sub
%>

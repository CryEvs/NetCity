<!-- #INCLUDE FILE="SaveStepsInfo_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kQueryObjectName_SchoolsList = "SCHOOLS_LIST"

Dim strReportName, strReportDesc, strReportType, strIds
Dim arrIds
Dim strRepEMID, strRepSchoolID ' differ from strEMID, strSchoolID
Dim strGroupID, nResult, nReportFuncType
Dim bSaveIDs
Dim transaction 

Const kSplitter = "|"

strReportName = Trim(GetSafeStr( Request("RPTNAME"), -1, Null ))
If IsDull(strReportName) Then GenerateError obLanguage("Constructor","kEnterReportName") 
nReportID = GetSafeLng( obTokenMgr.GetData( strToken, stReportID ), 0 )
nQueryId = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), 0 )

If bIsEducManager Then
	strReportType = GetSafeStr( Request("ReportType"), 1, "S" )
	nReportFuncType = GetSafeLng( Request("ReportFuncType"), -1 )
	If nReportFuncType = -1 Then nReportFuncType = Null
	strRepSchoolID = Null
	strRepEMID = strEMID
Else
	nReportFuncType = CInt(strFunctionalityType)
	strReportType = "S"
	strRepSchoolID = strSchoolID
	strRepEMID = Null
End If

transaction = objNSNETWork.GetTransaction()
If objNSNETWork.IsReportExists(transaction, nReportID, strReportName, strRepEMID, strRepSchoolID) Then
	GenerateErrorWithTransaction transaction,obLanguage("Constructor","kReportNameExists")
End If

strReportDesc = GetSafeStr( Request("RPTDESC"), -1, "" )
strGroupID = GetSafeLng( Request("GroupID"), -1 )
If strGroupID < 1 Then strGroupID = Null
If nQueryId = 0 And nReportID = 0 Then
	strIds = objNSNETWork.CreateReport_WT(transaction, strUserId, strReportType, strReportName, strReportDesc, strGroupID, strRepEMID, strRepSchoolID, nReportFuncType)
	TestErrorWithTransaction transaction,obLanguage("Constructor","kErrorReportCreating") 
	arrIds = Split( strIds, kSplitter )
	nReportId = arrIds(0)
	nQueryId = arrIds(1)

	If IsEmpty( nReportID ) Or IsEmpty( nQueryId ) Then
		GenerateErrorWithTransaction transaction,obLanguage("Constructor","kErrorReportCreating") 
	Else
		obTokenMgr.SetData strToken, stReportID, nReportID
		obTokenMgr.SetData strToken, stQueryID, nQueryId
	End If
Else
	' Теперь проверять на возможность изменения типа не надо, т.к. главный объект один, т.е. типы можно менять свободно.
	Call objNSNETWork.UpdateReportInfo_WT(transaction, nReportID, strReportType, strReportName, strReportDesc, strGroupID, nReportFuncType )
	TestErrorWithTransaction transaction,obLanguage("Constructor","kErrorReportCreating") 
End If

Call UpdateBuildStatus(transaction)
objNSNETWork.CommitTransaction(transaction)

strStepDir = GetSafeID( Request("STEPDIR"), Null )
RedirectTo "ReportBuildWizardStep" & strStepDir & ".asp", Null
%>

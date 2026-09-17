<!-- #INCLUDE FILE="PMPKRecommendCmn_inc.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
'<!-- #INCLUDE FILE="ReportService_inc.asp" -->

Dim objPMPKInfo, bEmpty
'Dim strReport
Dim dtEndDate, strEndDate
Dim strCurrSchoolName, nSchoolCityID
Dim strGlobalYearID
Dim strViolationID, strViolationName, objViolationInfo
Dim strEOTypeID 

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNPMPKRecommendation")
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("Reports","kTitleStateOn2") & " " & strEndDate
End Function

Function GetPageParams()
	Dim filters
' 	obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName")
'		obLanguage("Common","kSchoolYear"), objNSNET.GetGlobalYearName(strGlobalYearID), _
	filters = Array(_
		obLanguage("Common","kDate"), strEndDate, _
		obLanguage("Reports","kViolationKind"), strViolationName _
		)
	If strFunctionalityType <> kFuncType_EM Then filters(0) = Empty ' не выводим
	GetPageParams = filters
End Function

Sub specialRead()
	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	strViolationID = GetSafeID(Request("Viol_ID"), "-1")
	Call obTokenMgr.SetData(strToken, stViolationID, strViolationID)
End Sub

Sub specialMain()
	Dim objSchoolInfo, objSYInfo

	If strViolationID = "-1" Then
		strViolationName = obLanguage("Common","kAll")
	Else
		strViolationName = ""
		Set objViolationInfo = objNSNET.GetUserParamItemInfo(strViolationID)
		If Not objViolationInfo.EOF Then strViolationName = GetsafeStr(objViolationInfo("ITEMNAME"), -1, "")
	End If

	Set objPMPKInfo = objNSNET.GetPMPKRecommend(strCurrYearID, dtEndDate, strViolationID, strFunctionalityType)

	bEmpty = objPMPKInfo.EOF
	If bEmpty Then
		strErrMsg = obLanguage("Reports","kNoStudentsWithPMPK")
	Else
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
		If objSchoolInfo.EOF Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
		strCurrSchoolName = GetSafeStr(objSchoolInfo("SCHOOLNAME"), -1, "")
		nSchoolCityID = GetSafeLng(objSchoolInfo("CITYID"), Null)
	End If 
End Sub

Function GetReportTable()
	Dim strReportHeader
	Dim strReport_1_School
	Dim nInd

	strReportHeader = GetReportHeader()
	nInd = 0
	strReport_1_School = GetReport_1_School(objPMPKInfo, nInd, strCurrSchoolName)
	GetReportTable = strReportHeader & strReport_1_School & "</table>"
End Function
%>

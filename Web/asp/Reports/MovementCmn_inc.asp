<!-- #INCLUDE FILE="ReportService_inc.asp" -->
<% ' © 2007-2014 IRTech. All rights reserved.

Const kStep1_Min = 1
Const kStep1_Max = 4
Const kStep2_Min = 5
Const kStep2_Max = 9
Const kStep3_Min = 10
'Const kStep3_Max = 11

Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim nStep3_Max

Sub ReadStateCmn()
	Call InitEmFilters()
	SetScriptTimeOut 900
	dtStartDate = GetSafeDate(Request("ADT"), Null)
	dtEndDate = GetSafeDate(Request("DDT"), Null)
	strStartDate = Date2Str(dtStartDate)
	strEndDate = Date2Str(dtEndDate)

	'WriteState - not called from Export to Excel
	Call obTokenMgr.SetData(strToken, stRepDoubling_Start, dtStartDate)
	Call obTokenMgr.SetData(strToken, stRepDoubling_End, dtEndDate)
End Sub

Function GetStepTitle(minStep,maxStep)
	GetStepTitle = minStep & "&mdash;" & maxStep & "<br />" & obLanguage("ReportMovement","kClassShort")
End Function

Sub Main()
	Call MainSpecial()
End Sub

Function GetReportTableHeader()
	Dim strReport, i, strSteps, strSteps23
	
	strReport = "<table class=""table-print-num""><tr>"
	'strReport="<table><tr>"
	strReport = strReport & _
		"<th rowspan=""3"">" & obLanguage("ReportMovement","kSchoolNo") & _
		"</th><th rowspan=""3"">" & obLanguage("Common","kDistrict") & _
		"</th><th rowspan=""2"" colspan=""3"">" & obLanguage("ReportMovement","kStudentsOnStart") & _
		"</th><th rowspan=""2"" colspan=""3"">" & obLanguage("ReportMovement","kStudentsArrive") & _
		"</th><th colspan=""24"">" & obLanguage("ReportMovement","kStudentsDepart") & _
		"</th><th rowspan=""2"" colspan=""4"">" & obLanguage("ReportMovement","kStudentsOnEnd") & "</th></tr>"
	strReport = strReport & _
		"<tr><th colspan=""3"">" & obLanguage("ReportMovement","kSumTotal") & _
		"</th><th colspan=""3"" >" & obLanguage("ReportMovement","kToCityEO") & _
		"</th><th colspan=""2"" >" & obLanguage("ReportMovement","kToNPO_SPO") & _
		"</th><th colspan=""2"" >" & obLanguage("ReportMovement","kToEveningEO") & _
		"</th><th colspan=""2"" >" & obLanguage("ReportMovement","kReason_Work") & _
		"</th><th colspan=""3"" >" & obLanguage("ReportMovement","kReason_NotWork_NotLearn") & _
		"</th><th colspan=""3"" >" & obLanguage("ReportMovement","kOutCityInState") & _
		"</th><th colspan=""3"" >" & obLanguage("ReportMovement","kOutState") & _
		"</th><th colspan=""3"" >" & obLanguage("ReportMovement","kSpecialReason") & _
		"</th></tr>"
	strSteps23 = "<th class=""text-nowrap"">" & GetStepTitle(kStep2_Min, kStep2_Max) & "</th>" & _
		"<th class=""text-nowrap"">" & GetStepTitle(kStep3_Min, nStep3_Max) & "</th>"
	strSteps = "<th class=""text-nowrap"">" & GetStepTitle(kStep1_Min, kStep1_Max) & "</th>" & strSteps23
	strReport = strReport & "<tr>" & _
		strSteps & strSteps & strSteps & strSteps &_
		strSteps23 & strSteps23 & strSteps23 &_
		strSteps & strSteps & strSteps & strSteps & strSteps &_
		"<th>" & obLanguage("ReportMovement","kSumTotal") & _
		"</th></tr>"

	strReport = strReport & "<tr>" & _
		"<th colspan=""2"">1</th>"
	For i = 2 To 35
		strReport = strReport & "<th>" & i & "</th>"
	Next
	strReport = strReport & "</tr>"

	GetReportTableHeader = strReport
End Function

Function GetReportTableRow(strSYID, strSchName, strDistrict, arrTotal)
	Dim strReport
	Dim objStudCntByStep
	Dim arrCntByStepOnStart, arrCntByStepOnEnd
	Dim arrCntArrive, arrCntDepart, i
	Dim nOnEndSumm
	
	strReport = ""
		
	ReDim arrCntByStepOnStart(2)
	ReDim arrCntByStepOnEnd(2)
	ReDim arrCntArrive(2)
	ReDim arrCntDepart(23)

' ... OnStart ...
	Set objStudCntByStep = objNSNET.GetStudentsCountForStep(strSYID, dtStartDate, 0, kStep1_Min, kStep1_Max)
	arrCntByStepOnStart(0) = GetSafeLng(objStudCntByStep("STUDCNT"), 0)
	arrTotal(0) = arrTotal(0) + arrCntByStepOnStart(0)

	Set objStudCntByStep = objNSNET.GetStudentsCountForStep(strSYID, dtStartDate, 0, kStep2_Min, kStep2_Max)
	arrCntByStepOnStart(1) = GetSafeLng(objStudCntByStep("STUDCNT"), 1)
	arrTotal(1) = arrTotal(1) + arrCntByStepOnStart(1)

	Set objStudCntByStep = objNSNET.GetStudentsCountForStep(strSYID, dtStartDate, 0, kStep3_Min, nStep3_Max)
	arrCntByStepOnStart(2) = GetSafeLng(objStudCntByStep("STUDCNT"), 0)
	arrTotal(2) = arrTotal(2) + arrCntByStepOnStart(2)

' ... OnEnd ...
	Set objStudCntByStep = objNSNET.GetStudentsCountForStep(strSYID, dtEndDate, 1, kStep1_Min, kStep1_Max)
	arrCntByStepOnEnd(0) = GetSafeLng(objStudCntByStep("STUDCNT"), 0)
	arrTotal(30) = arrTotal(30) + arrCntByStepOnEnd(0)

	Set objStudCntByStep = objNSNET.GetStudentsCountForStep(strSYID, dtEndDate, 1, kStep2_Min, kStep2_Max)
	arrCntByStepOnEnd(1) = GetSafeLng(objStudCntByStep("STUDCNT"), 1)
	arrTotal(31) = arrTotal(31) + arrCntByStepOnEnd(1)

	Set objStudCntByStep = objNSNET.GetStudentsCountForStep(strSYID, dtEndDate, 1, kStep3_Min, nStep3_Max)
	arrCntByStepOnEnd(2) = GetSafeLng(objStudCntByStep("STUDCNT"), 0)
	arrTotal(32) = arrTotal(32) + arrCntByStepOnEnd(2)

' ... Arrive ...
	Set objStudCntByStep = objNSNET.GetArriveStudentsCountForStep(strSYID, dtStartDate, dtEndDate, kStep1_Min, kStep1_Max)
	arrCntArrive(0) = GetSafeLng(objStudCntByStep("STUDCNT"), 0)
	arrTotal(3) = arrTotal(3) + arrCntArrive(0)

	Set objStudCntByStep = objNSNET.GetArriveStudentsCountForStep(strSYID, dtStartDate, dtEndDate, kStep2_Min, kStep2_Max)
	arrCntArrive(1) = GetSafeLng(objStudCntByStep("STUDCNT"), 1)
	arrTotal(4) = arrTotal(4) + arrCntArrive(1)

	Set objStudCntByStep = objNSNET.GetArriveStudentsCountForStep(strSYID, dtStartDate, dtEndDate, kStep3_Min, nStep3_Max)
	arrCntArrive(2) = GetSafeLng(objStudCntByStep("STUDCNT"), 0)
	arrTotal(5) = arrTotal(5) + arrCntArrive(2)

' ... Depart ...
	Set objStudCntByStep = objNSNET.GetDepartStudentsCountWithReasonsForStep(strSYID, dtStartDate, dtEndDate, kStep1_Min, kStep1_Max)
	arrCntDepart(0) = GetSafeLng(objStudCntByStep("STUDCNT"), 0)
	arrCntDepart(12) = GetSafeLng(objStudCntByStep("cntNotWorkNotLearn"), 0)
	arrCntDepart(21) = GetSafeLng(objStudCntByStep("cntOther"), 0)

	Set objStudCntByStep = objNSNET.GetDepartStudentsCountInCityForStep(strSYID, dtStartDate, dtEndDate, kStep1_Min, kStep1_Max)
	arrCntDepart(3) = GetSafeLng(objStudCntByStep("cntCommonSchool"), 0)

	Set objStudCntByStep = objNSNET.GetDepartStudentsCountWithMovEOSForStep(strSYID, dtStartDate, dtEndDate, kStep1_Min, kStep1_Max)
	arrCntDepart(15) = GetSafeLng(objStudCntByStep("cntOutCityInCountry"), 0)
	arrCntDepart(18) = GetSafeLng(objStudCntByStep("cntOutCountry"), 0)


	Set objStudCntByStep = objNSNET.GetDepartStudentsCountWithReasonsForStep(strSYID, dtStartDate, dtEndDate, kStep2_Min, kStep2_Max)
	arrCntDepart(1) = GetSafeLng(objStudCntByStep("STUDCNT"), 1)
	arrCntDepart(10) = GetSafeLng(objStudCntByStep("cntWork"), 0)
	arrCntDepart(13) = GetSafeLng(objStudCntByStep("cntNotWorkNotLearn"), 0)
	arrCntDepart(22) = GetSafeLng(objStudCntByStep("cntOther"), 0)

	Set objStudCntByStep = objNSNET.GetDepartStudentsCountInCityForStep(strSYID, dtStartDate, dtEndDate, kStep2_Min, kStep2_Max)
	arrCntDepart(4) = GetSafeLng(objStudCntByStep("cntCommonSchool"), 0)
	arrCntDepart(6) = GetSafeLng(objStudCntByStep("cntNPO"), 0) + GetSafeLng(objStudCntByStep("cntSPO"), 0)
	arrCntDepart(8) = GetSafeLng(objStudCntByStep("cntEvening"), 0)

	Set objStudCntByStep = objNSNET.GetDepartStudentsCountWithMovEOSForStep(strSYID, dtStartDate, dtEndDate, kStep2_Min, kStep2_Max)
	arrCntDepart(16) = GetSafeLng(objStudCntByStep("cntOutCityInCountry"), 0)
	arrCntDepart(19) = GetSafeLng(objStudCntByStep("cntOutCountry"), 0)


	Set objStudCntByStep = objNSNET.GetDepartStudentsCountWithReasonsForStep(strSYID, dtStartDate, dtEndDate, kStep3_Min, nStep3_Max)
	arrCntDepart(2) = GetSafeLng(objStudCntByStep("STUDCNT"), 0)
	arrCntDepart(11) = GetSafeLng(objStudCntByStep("cntWork"), 0)
	arrCntDepart(14) = GetSafeLng(objStudCntByStep("cntNotWorkNotLearn"), 0)
	arrCntDepart(23) = GetSafeLng(objStudCntByStep("cntOther"), 0)

	Set objStudCntByStep = objNSNET.GetDepartStudentsCountInCityForStep(strSYID, dtStartDate, dtEndDate, kStep3_Min, nStep3_Max)
	arrCntDepart(5) = GetSafeLng(objStudCntByStep("cntCommonSchool"), 0)
	arrCntDepart(7) = GetSafeLng(objStudCntByStep("cntNPO"), 0) + GetSafeLng(objStudCntByStep("cntSPO"), 0)
	arrCntDepart(9) = GetSafeLng(objStudCntByStep("cntEvening"), 0)

	Set objStudCntByStep = objNSNET.GetDepartStudentsCountWithMovEOSForStep(strSYID, dtStartDate, dtEndDate, kStep3_Min, nStep3_Max)
	arrCntDepart(17) = GetSafeLng(objStudCntByStep("cntOutCityInCountry"), 0)
	arrCntDepart(20) = GetSafeLng(objStudCntByStep("cntOutCountry"), 0)


	strReport = strReport & "<tr class=""text-nowrap""><td class=""cell-text"">" & DB2HTML(strSchName) & "</td>" &_
	"<td class=""cell-text"">" & DB2HTML(strDistrict) & "</td>"

	strReport = strReport & "<td>" & arrCntByStepOnStart(0) & _
		"</td><td>" & arrCntByStepOnStart(1) & _
		"</td><td>" & arrCntByStepOnStart(2) & "</td>"

	strReport = strReport & "<td>" & arrCntArrive(0) & _
		"</td><td>" & arrCntArrive(1) & _
		"</td><td>" & arrCntArrive(2) & "</td>"

	For i = 0 To 23
		strReport = strReport & "<td>" & arrCntDepart(i) & "</td>"
		arrTotal(i + 6) = arrTotal(i + 6) + arrCntDepart(i)
	Next

	nOnEndSumm = arrCntByStepOnEnd(0) + arrCntByStepOnEnd(1) + arrCntByStepOnEnd(2)
	arrTotal(33) = arrTotal(33) + nOnEndSumm

	strReport = strReport & "<td>" & arrCntByStepOnEnd(0) & _
		"</td><td>" & arrCntByStepOnEnd(1) & _
		"</td><td>" & arrCntByStepOnEnd(2) & _
		"</td><td>" & nOnEndSumm & "</td>"

	strReport = strReport & "</tr>"
	GetReportTableRow = strReport
End Function
%>

<!-- #INCLUDE FILE="MovementCmn_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNMovement")
End Function
Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kStartDate"), strStartDate, _
		obLanguage("Common","kEndDate"), strEndDate)
		'obLanguage("ReportMovement","kStartPeriod"), strStartDate, obLanguage("ReportMovement","kEndPeriod"), strEndDate
End Function

Dim strSchName, strDistrict

Sub specialRead()
	Call ReadStateCmn()
End Sub

Sub MainSpecial()
	Dim objSchoolInfo
	Dim nMinGrade, nMaxGrade

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	strSchName = GetSafeStr(objSchoolInfo("SCHOOLNUMBER"), -1, "")
	strDistrict = GetSafeStr(objSchoolInfo("DISTRNAME"), -1, "")

	Call objNSNET.GetMinMaxGrades(strCurrYearID, nMinGrade, nMaxGrade)
	nStep3_Max = IIf(nMaxGrade = 12, 12, 11)

	If bSendReport Then
		strReport = GetReport()
		obTokenMgr.SetData strToken, stMsgReport, strReport
	End If
End Sub

Function GetReportTable()
	Dim strReport
	Dim i
	Dim arrTotal
	Dim strTableRow
	
	strReport = GetReportTableHeader()

	ReDim arrTotal(33)
	For i = 0 To UBound(arrTotal)
		arrTotal(i) = 0
	Next

	strTableRow = GetReportTableRow(strCurrYearID, strSchName, strDistrict, arrTotal)
	strReport = strReport & strTableRow

	GetReportTable = strReport & "</table>"
End Function
%>

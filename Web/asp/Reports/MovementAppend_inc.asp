<!-- #INCLUDE FILE="MovementAppendCmn_inc.asp" -->
<% ' © 2007-2014 IRTech. All rights reserved.
Dim strSchName

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kSchoolYear"), objNSNET.GetSchoolYearName(strCurrYearID) ,_
		obLanguage("ReportMovement","kStartPeriod"), strStartDate, _
		obLanguage("ReportMovement","kEndPeriod"), strEndDate _
		)
End Function

Sub specialRead()
	Call ReadStateCmn()
End Sub

Sub MainSpecial()
	Dim objSchoolInfo
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	strSchName = GetSafeStr(objSchoolInfo("SCHOOLNUMBER"), -1, "")
End Sub

Function GetReportTable()
	Dim strReport
	Dim strTableRow
	Dim nIndex
	
	strReport = GetReportTableHeader()

	nIndex = 0
	strTableRow = GetReportTableRow(strCurrYearID, strSchName, nIndex)
	strReport = strReport & strTableRow

	GetReportTable = strReport & "</table>"
End Function

Function GetCityName()
	Dim objSchoolInfo, strCityID

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	strCityID = GetSafeID(objSchoolInfo("CITYID"), Null)
	GetCityName = objNSNET.GetCityName(strCityID)
End Function
%>

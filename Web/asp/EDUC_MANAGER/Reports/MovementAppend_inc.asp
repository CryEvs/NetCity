<!-- #INCLUDE FILE="../../Reports/MovementAppendCmn_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
Dim nGlobalYearId
Dim strEOTypeID
Dim objSchoolsYears, bSchools
Dim bShowEOTypes, strEOTypeName

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID) ,_
		obLanguage("Common","kEOType"), IIf(strEOTypeID <> "-1", strEOTypeName, obLanguage("Common","kAll")), _
		obLanguage("Common","kSchoolYear"), objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("ReportMovement","kStartPeriod"), strStartDate, _
		obLanguage("ReportMovement","kEndPeriod"), strEndDate _
		)
End Function
Function GetTableHeader()
	GetTableHeader = "<table class=""xlTable"">"
End Function

Sub specialRead()
	Call ReadStateCmn()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strEOTypeID = GetSafe("EOTYPEID", Null)
End Sub

Sub MainSpecial()
	Dim strSYID
	Dim nMinGrade, nMaxGrade
	Dim objEOTypeInfo
	Set objSchoolsYears = objNSNET.GetEMShoolsYearsList(nGlobalYearID, strEOTypeID, kFuncType_Common, filterEMID, EXCLUDE_SOME_UDODS)
	bSchools = Not objSchoolsYears.EOF

	If strEOTypeID <> "-1" Then
		Set objEOTypeInfo = objNSNET.GetEOTypeInfo(strEOTypeID)
		If objEOTypeInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")

		strEOTypeName = GetSafeStr(objEOTypeInfo("NAME"), -1, "")
	End If
End Sub

Function GetReportTable()
	Dim strReport
	Dim strSYID, strSchName
	Dim i
	Dim strTableRow
	Dim nIndex
	
	strReport = GetReportTableHeader()

	nIndex = 0
	While Not objSchoolsYears.EOF
		strSYID = GetSafeID(objSchoolsYears("SCHOOLYEARID"), Null)
		strSchName = GetSafeStr(objSchoolsYears("SCHOOLNUMBER"), -1, "")

		strTableRow = GetReportTableRow(strSYID, strSchName, nIndex)
		strReport = strReport & strTableRow
		
		objSchoolsYears.MoveNext
	Wend

	GetReportTable = strReport & "</table>"
End Function

Function GetCityName()
	GetCityName = objNSNET.GetEducManagementName(strEMID)
End Function
%>

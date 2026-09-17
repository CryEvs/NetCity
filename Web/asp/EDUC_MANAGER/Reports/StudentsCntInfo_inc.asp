<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentsCntInfoCmn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim nGlobalYearId
Dim objSchoolsYears, bSchools

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true 
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNTotalStudentsCntInfo")
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kDate"), strEndDate _
		)
End Function

Sub specialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	SetScriptTimeOut 1800

	strEndDate = GetSafe("DDT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
End Sub

Sub specialMain()
	Dim strSYID, strSchoolNumber
	Dim nMinGrade, nMaxGrade
	Dim objEOTypeInfo
	Dim nStep3_Max
	Dim i, j
	Dim bEmpty, bClasses
	Dim nInd
	Dim founderId
	Dim strFounderName
	bOK = True
	Set objSchoolsYears = objNSNET.GetEMShoolsYearsList(nGlobalYearID, -1, kFuncType_Common, filterEMID, EXCLUDE_SOME_UDODS)
	bSchools = Not objSchoolsYears.EOF

	If Not bSchools Then
		strErrMsg = obLanguage("ReportMovement","kNoSchoolsForGlobalYear")
		bOK = False
		Exit Sub
	End If

	nSchoolsCnt = objSchoolsYears.RecordCount
	ReDim arrStudCnt(35, nSchoolsCnt - 1)
	For i = 0 To UBound(arrStudCnt, 1)
		For j = 0 To UBound(arrStudCnt, 2)
			arrStudCnt(i, j) = 0
		Next
	Next

	ReDim arrStudCntTotals(35)
	For i = 0 To UBound(arrStudCntTotals)
		arrStudCntTotals(i) = 0
	Next

	ReDim arrSchoolNums(nSchoolsCnt - 1)
	ReDim arrEmTreeLvl(nSchoolsCnt - 1)
	ReDim arrFounderName(nSchoolsCnt - 1)
	Call GetParamsInfo()

	i = 0
	founderId = -1
	strFounderName = ""

	While Not objSchoolsYears.EOF
		strSYID = GetSafeID(objSchoolsYears("SCHOOLYEARID"), Null)
		founderId = GetSafeStr(objSchoolsYears("FOUNDERID"), -1, "")
		strFounderName = GetSafeStr(objSchoolsYears("FNAME"), -1, "")
		strSchoolNumber = GetSafeStr(objSchoolsYears("SCHOOLNUMBER"), -1, "")
		arrSchoolNums(i) = strSchoolNumber
		arrEmTreeLvl(i) = founderId
		arrFounderName(i) = strFounderName
		Call GetReportData(strSYID, i)

		i = i + 1
		objSchoolsYears.MoveNext
	WEnd

	Call CalcTotals()
End Sub

Function GetBottom()
	GetBottom = ""
End Function
%>

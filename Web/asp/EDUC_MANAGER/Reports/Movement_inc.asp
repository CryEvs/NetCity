<!-- #INCLUDE FILE="../../Reports/MovementCmn_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim nGlobalYearId
Dim strEOTypeID
Dim objSchoolsYears, bSchools
Dim bShowEOTypes, strEOTypeName

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNMovement")
End Function
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

Sub ReadState()
	Call ReadStateCmn()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	strEOTypeID = GetSafe("EOTYPEID", Null)
	bShowEOTypes = (strEOTypeID = "-1")
End Sub

Sub MainSpecial()
	Dim strSYID
	Dim nMinGrade, nMaxGrade
	Dim objEOTypeInfo
	Set objSchoolsYears = objNSNET.GetEMShoolsYearsList(nGlobalYearID, strEOTypeID, kFuncType_Common, filterEMID, EXCLUDE_SOME_UDODS)
	bSchools = Not objSchoolsYears.EOF
	If strEOTypeID <> "-1" Then
		Set objEOTypeInfo = objNSNET.GetEOTypeInfo(strEOTypeID)
		If objEOTypeInfo.EOF Then
			GenerateError obLanguage("Common","kInvalidParameter")
		End If
		strEOTypeName = GetSafeStr(objEOTypeInfo("NAME"), -1, "")
	End If

	nStep3_Max = 11
	If Not bSchools Then
		bOk = False
		strErrMsg = obLanguage("ReportMovement","kNoSchoolsForGlobalYear")
	Else
		' check max grade
		Do While Not objSchoolsYears.EOF
			strSYID = GetSafeID(objSchoolsYears("SCHOOLYEARID"), Null)
			Call objNSNET.GetMinMaxGrades(strSYID, nMinGrade, nMaxGrade)
			If nMaxGrade = 12 Then
				nStep3_Max = nMaxGrade
				Exit Do
			End If
			objSchoolsYears.MoveNext
		Loop  
		objSchoolsYears.MoveFirst
	End If
End Sub

Function GetReportTable()
	Dim strReport
	Dim strSYID, strSchName, strDistrict
	Dim i
	Dim arrTotal, arrTotalAll
	Dim strTableRow
	Dim strPrevEOCode, strCurrEOCode, strCurrEOTypeName

	strReport = GetReportTableHeader()

	ReDim arrTotal(33)
	ReDim arrTotalAll(33)
	For i = 0 To UBound(arrTotal)
		arrTotal(i) = 0
		arrTotalAll(i) = 0
	Next

	strPrevEOCode = ""
	While Not objSchoolsYears.EOF
		strSYID = GetSafeID(objSchoolsYears("SCHOOLYEARID"), Null)
		strSchName = GetSafeStr(objSchoolsYears("SCHOOLNAME"), -1, "")
		strDistrict = GetSafeStr(objSchoolsYears("DISTR_NAME"), -1, "")
		strCurrEOCode = GetSafeStr(objSchoolsYears("CLASSIFIERCODE"), -1, Null)

		If bShowEOTypes Then
			If strCurrEOCode <> strPrevEOCode Then

				If strPrevEOCode <> "" Then
					strReport = strReport & "<tr>" & _
						"<th colspan=""2"">" & obLanguage("ReportMovement","kSumTotal") & "</th>"
					For i = 0 To UBound(arrTotal)
						strReport = strReport & "<th>" & arrTotal(i) & "</th>"
					Next
					strReport = strReport & "</tr>"

					For i = 0 To UBound(arrTotal)
						arrTotalAll(i) = arrTotalAll(i) + arrTotal(i)
						arrTotal(i) = 0
					Next
				End If

				strCurrEOTypeName = GetSafeStr(objSchoolsYears("EOT_NAME"), -1, "")
				strReport = strReport & "<tr>" & _
					"<th colspan=""36"" style=""text-align:left"">" & DB2HTML(strCurrEOTypeName) & "</th>"
				strReport = strReport & "</tr>"

				strPrevEOCode = strCurrEOCode
			End If            
		End If

		strTableRow = GetReportTableRow(strSYID, strSchName, strDistrict, arrTotal)
		strReport = strReport & strTableRow
		
		objSchoolsYears.MoveNext
	Wend

	strReport = strReport & "<tr>" & _
		"<th colspan=""2"">" & obLanguage("ReportMovement","kSumTotal") & "</th>"
	For i = 0 To UBound(arrTotal)
		strReport = strReport & "<th>" & arrTotal(i) & "</th>"
	Next
	strReport = strReport & "</tr>"

	If bShowEOTypes Then
		strReport = strReport & "<tr>" & _
			"<th colspan=""2"">" & obLanguage("ReportMovement","kTotal") & "</th>"
		For i = 0 To UBound(arrTotal)
			arrTotalAll(i) = arrTotalAll(i) + arrTotal(i)
			strReport = strReport & "<th>" & arrTotalAll(i) & "</th>"
		Next
		strReport = strReport & "</tr>"
	End If

	GetReportTable = strReport & "</table>"
End Function
%>

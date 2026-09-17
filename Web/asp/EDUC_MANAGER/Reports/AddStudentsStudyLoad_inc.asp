<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim nGlobalYearId
Dim bEmpty
Dim nCategoryID
Dim objStudyLoad

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNAddStudentsStudyLoad")
End Function

Function GetPageParams()
	Dim strCategory, objPoolCategory

	If nCategoryID = "-1" Then
		strCategory = obLanguage("Common","kAll")
	Else
		Set objPoolCategory = objNSNET.GetPoolCategory(nCategoryID)
		If objPoolCategory.EOF Then
			GenerateError obLanguage("Import","kCantGetPoolCategories")
		End If
		strCategory = GetSafeStr(objPoolCategory("REPORTNAME"), -1, "")
	End If
	GetPageParams = Array( _
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("EMReports","kCategoryLearning"), strCategory)
End Function

Sub specialRead()
	SetScriptTimeOut 900
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	nCategoryID = GetSafe("selectType", Null)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
	Call obTokenMgr.SetData(strToken, "selectType", nCategoryID)
End Sub

Sub specialMain()
	Set objStudyLoad = objNSNET.GetAddStudentsStudyLoad(filterEMID, nGlobalYearID, nCategoryID)
	bEmpty = objStudyLoad.EOF
	If bEmpty Then strErrMsg = obLanguage("EMReports","kNoAddSchoolYearsInDB")
End Sub

Function GetReportTable()
	Dim strReport
	Dim i, nInd
	Dim arrLoad, arrTotal
	Dim strPrevSchID, strCurrSchID, strCurrEOName, strPrevEOName
	Dim nHoursCnt, nStudCnt
	Dim strReportHeader

	ReDim arrLoad(4)
	ReDim arrTotal(4)
	For i = 0 To UBound(arrLoad)
		arrLoad(i) = 0
		arrTotal(i) = 0
	Next

	strReportHeader = "<table class=""table-print-num"">" & GetHeader_TR() & _
		"<th rowspan=""2"">" & obLanguage("EMReports","kMOUDOD") & "</th>" & _
		"<th colspan=""5"">" & obLanguage("EMReports","kWeekLoad") & "</th></tr>" & _
		GetHeader_TR() & _
		"<th>" & obLanguage("EMReports","kLoad_Less_5") & "</th>" & _
		"<th>" & obLanguage("EMReports","kLoad_5_10") & "</th>" & _
		"<th>" & obLanguage("EMReports","kLoad_11_24") & "</th>" & _
		"<th>" & obLanguage("EMReports","kLoad_25_32") & "</th>" & _
		"<th>" & obLanguage("EMReports","kLoad_Greater_32") & "</th></tr>"
	strReport = strReportHeader
	strPrevSchID = ""
	strCurrSchID = ""
	Dim increment
	increment = 0
	While Not objStudyLoad.EOF
		strCurrSchID = GetSafeStr(objStudyLoad("SCHOOLID"), -1, Null)
		strCurrEOName = GetSafeStr(objStudyLoad("EONAME"), -1, "")
		IF increment = 0 THEN 
			strPrevSchID = strCurrSchID
			strPrevEOName = strCurrEOName
		END IF
		If strCurrSchID <> strPrevSchID OR objStudyLoad.RecordCount <= increment+1 Then
				strReport = strReport & GetFounderHeader(6,objStudyLoad)
				strReport = strReport & "<tr>"
				strReport = strReport & "<td class=""cell-text"">" & DB2HTML(strPrevEOName) & "</td>"
				For i = 0 To UBound(arrLoad)
					strReport = strReport & "<td>" & arrLoad(i) & "</td>"
				Next
				strReport = strReport & "</tr>"

				For i = 0 To UBound(arrLoad)
					arrLoad(i) = 0
				Next

			strPrevSchID = strCurrSchID
			strPrevEOName = strCurrEOName
		End If
		nHoursCnt = GetSafeLng(objStudyLoad("HOURS_CNT"), 0)
		nStudCnt = GetSafeLng(objStudyLoad("STUD_CNT"), 0)
		nInd = GetIndex(nHoursCnt)

		arrLoad(nInd) = arrLoad(nInd) + nStudCnt
		arrTotal(nInd) = arrTotal(nInd) + nStudCnt
		increment = increment + 1

		objStudyLoad.MoveNext
	WEnd

	If strCurrSchID <> "" Then
		strReport = strReport & "<tr class=""totals"">"
		strReport = strReport & "<td>" & obLanguage("EMReports","kTotal") & "</td>"
		For i = 0 To UBound(arrTotal)
			strReport = strReport & "<td>" & arrTotal(i) & "</td>"
		Next
		strReport = strReport & "</tr>"
	End If

	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function GetIndex(nHours)
	Dim nIndex

	If nHours < 5 Then
		nIndex = 0
	ElseIf nHours < 11 Then
		nIndex = 1
	ElseIf nHours < 25 Then
		nIndex = 2
	ElseIf nHours < 33 Then
		nIndex = 3
	Else
		nIndex = 4
	End If

	GetIndex = nIndex
End Function
%>

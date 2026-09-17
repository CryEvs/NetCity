<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/GradingScale_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Dim objRs
Dim strStudentID, strStudentName
Dim strSubjClassID,strActivityID, strClassName, strSubjectName
'Dim strReport
Dim strSIDArray, objCSGInfo
Dim strTeacherName, strAccYear
Dim objAssignmentListRs
Dim nStStatistics, nClStatistics, dtCurrMonthBegin, dtCurrMonthEnd
Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim nSubjectsCnt
Dim bIsNumber, nMaxMark
Dim strDateString
Dim bNoMarks
Dim nSubjectID
Dim arrCategories, arrValues, arrCaptions
Dim objPercentData

Sub specialRead()
	strSubjClassID =  obTokenMgr.GetData(strToken,stCurrSubjClass) 
	strStudentID = GetSafeID( Request("SID"), NULL )
	strCurrYearID = GetSafeLng(Request("CURRYEAR"),GetSafeLng(obTokenMgr.GetData(strToken,stCurrYear),strSchoolYearId))
	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
	strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	strAccYear = obTokenMgr.GetData(strToken, "CurrYearName")
	nMaxMark = obTokenMgr.GetData(strToken, stMaxMark)

	nSubjectID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrSubject), Null)
	If nSubjectID > 0 Then
		strSubjectName = objNSNET.GetSubjectName(nSubjectID)
	Else
		strSubjectName = obLanguage("Common","kAll")
	End If

	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "0")
	Call InitIUPClassID(strClassID_IUP)
	TestError(obLanguage("Reports","kClassNotSelected"))

	If bIsIupGrade Then
		strClassName = strIupGrade & " *"
	Else
		strClassName = objNSNET.GetClassName(strClassID)
	End If
End Sub

Sub OnDrawPage()
	Response.Write strReport
End Sub

Sub Main()
	bNoMarks = False
	strDateString = obLanguage("Reports","kFrom") & " " & Date2Java(dtStartDate) & _
		" " & obLanguage("Reports","kTo") & " " & Date2Java(dtEndDate)
	If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then GenerateError obLanguage("Common","kNoAccess")
	Set objCSGInfo = objNSNET.GetClassSubjectGroupInfo(strSubjClassID)
	strTeacherName = objCSGInfo("NICKNAME")
	strSubjectName = objCSGInfo("NAME")

	strStudentName = objNSNET.GetUserNickName(strStudentID)
	
	Set objPercentData = objNSNET.GetStudentResultsCompare(strCurrYearID, strClassId, strIupGrade, nSubjectID, strSubjClassID, strStudentID, dtStartDate, dtEndDate, strFunctionalityType)
	TestError obLanguage("Reports","kCantGetReportData")

	PrepareGraph()

	strReport = GetReport()
End Sub

Function GetHeaderRow()
	Dim colspan

	colspan = UBound(arrCategories) + 2
	GetHeaderRow = "<tr><th colspan="""&colspan&""">" & obLanguage("Reports", "kStudentQuality", strFunctionalityType) & "</th></tr>"
End Function

Function GetReportTable()
	Dim rsStudentMarks, strReport, strMonthsRow, i, j, strDataRows, dataLen
	strReport = GetTableHeader()

	strMonthsRow = ""
	dataLen = UBound(arrCategories)
	For i = 0 To dataLen
		strMonthsRow = strMonthsRow & "<th>" & arrCategories(i) & "</th>"
	Next

	strMonthsRow = strMonthsRow & "</tr>"
	strDataRows = ""
	For i = 0 To UBound(arrCaptions)
		strDataRows = strDataRows & "<tr class=""chart-data-row"">" & "<td class=""cell-text chart-data-name"">" & arrCaptions(i) & "</td>"
		For j = 0 To dataLen
			strDataRows = strDataRows & "<td class=""cell-num-2"">" & Round(arrValues(i, j), 2) & "</td>"
		Next
		strDataRows = strDataRows & "</tr>"
	Next
	GetReportTable = strReport & strMonthsRow & strDataRows & "</table>"
End Function

Function GetMonthCnt(dtStartDate,dtEndDate)
	GetMonthCnt = DateDiff("m",dtStartDate,dtEndDate, 0, 0) + 1 
End Function

Function GetCurrMonthBegin(dtStartDate,i)
	Dim dtFirstMonthBegin
	dtFirstMonthBegin = DateSerial(DatePart("yyyy",dtStartDate, 0, 0 ), DatePart("m",dtStartDate, 0, 0 ), 1)
	GetCurrMonthBegin = DateAdd("m",i,dtFirstMonthBegin)
End Function

Function GetNextMonthBegin(dtStartDate,i)
	Dim dtFirstMonthBegin
	dtFirstMonthBegin = DateSerial(DatePart("yyyy",dtStartDate, 0, 0 ), DatePart("m",dtStartDate, 0, 0 ), 1)
	GetNextMonthBegin = DateAdd("m",i+1,dtFirstMonthBegin)
End Function

Function GetMonthName(dtStartDate,i)
	dim currMonth
	CurrMonth = (DatePart("m",dtStartDate, 0, 0 ) + i) Mod 12 
	If currMonth = 0 Then 
		currMonth = 12
	End If
	GetMonthName = obLanguage.GetMonthName(currMonth,true)
End Function

Sub PrepareGraph()
	Dim nMonthCnt, i, n, j, oneData

	nMonthCnt = GetMonthCnt(dtStartDate, dtEndDate)
	n = nMonthCnt - 1
	
	ReDim arrCategories(n)
	ReDim arrValues(2, n)
	ReDim arrCaptions(2)
	For j = 0 To 2
		Set oneData = objPercentData(j).Data
		For i = 0 To n
			arrValues(j, i) = oneData(i).Data
			If j = 0 Then
				arrCategories(i) = GetMonthName(dtStartDate, i)
			End If
		Next
		arrCaptions(j) = DB2HTML_BR(objPercentData(j).Description)
	Next
	For i = 0 To n
		If Not(IsEmpty(arrValues(0, i)) And IsEmpty(arrValues(1, i)) And IsEmpty(arrValues(2, i))) Then Exit Sub
	Next
	arrValues = Empty
End Sub

%>

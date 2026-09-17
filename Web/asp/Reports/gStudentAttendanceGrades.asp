<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/GradingScale_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objRs
Dim strStudentID, strStudentName
Dim strSubjClassID,strActivityID, strClassName, strSubjectName
Dim strReport
Dim strSIDArray, objCSGInfo
Dim strTeacherName, strAccYear
Dim objAssignmentListRs
Dim nStStatistics, nClStatistics, dtCurrMonthBegin, dtCurrMonthEnd
Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim nMaxMark

Sub ReadState()
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

	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "0")
	Call InitIUPClassID(strClassID_IUP)
	TestError(obLanguage("Reports","kClassNotSelected"))

	If bIsIupGrade Then
		strClassName = strIupGrade & " *"
	Else
		strClassName = objNSNET.GetClassName(strClassID)
	End If
End Sub

Sub Main()
	If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then GenerateError obLanguage("Common","kNoAccess")
	Set objCSGInfo = objNSNET.GetClassSubjectGroupInfo(strSubjClassID)
	strTeacherName = objCSGInfo("NICKNAME")
	strSubjectName = objCSGInfo("NAME")

	strStudentName = objNSNET.GetUserNickName(strStudentID)
	Call objNSNET.GetStudentResultsCompare(strSubjClassID, strCurrYearID, dtStartDate, dtEndDate, objAssignmentListRs, objRs)
	TestError obLanguage("Reports","kCantGetReportData")

	PrepareGraph

	ReDim arrCaptions(2)
	arrCaptions(0) = DB2HTML_BR(strStudentName) : arrCaptions(1) = obLanguage("Reports","kAverByClass",strFunctionalityType) : arrCaptions(2) = obLanguage("Reports","kAverByGrade",strFunctionalityType)
		
	strReport = GetReport()
End Sub    

Function GetReport()
	GetReport = GetPageTitlePrintWithUserPhoto(obLanguage("ReportNames","kRNQualityReport"), strStudentID, Array(obLanguage("Common","kSchoolYear"),strAccYear,obLanguage("Common","kPeriod"),obLanguage("Reports","kFrom") & " " & Date2Str(dtStartDate) &	" " & obLanguage("Reports","kTo") & " " & Date2Str(dtEndDate), obLanguage("Filter","kTeacherGB",strFunctionalityType), strTeacherName, filterClasses, strClassName, obLanguage("Filter","kCourseGB"), strSubjectName, obLanguage("Common","Ученик",strFunctionalityType), strStudentName))
	If Not (IsArray(arrValues) And IsArray(arrCategories)) Then
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoStudentAssignments",strFunctionalityType))
	Else
		GetReport = GetReport & "<DIV ALIGN=""CENTER""><IMG NAME=""report_graph""" & _
			" SRC='gStudentAttendanceGradesImg.asp?VER=" & getVer() & "&AT=" & strToken & "' " & _ 
			" BORDER=0 ALIGN='ABSMIDDLE'></DIV>"
	End If
	GetReport = GetReport & GetPageVerPrint()
End Function

Sub WriteState()
	WriteArrays
End Sub

Sub onDrawPage()
	Response.Write strReport
End Sub

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

Sub GetStatistics(objAssignmentListRs)
	Dim dbl1, dbl2, dbl3, dbl4, dbl, dtC
	If Not bIsDebug Then On Error Resume Next
	dbl1 = 0 : dbl2 = 0 : dbl3 = 0 : dbl4 = 0
	nClStatistics = Empty : nStStatistics = Empty
	If Not objAssignmentListRs.EOF Then 
		Do While Not objAssignmentListRs.EOF
			dtC = objAssignmentListRs("DUEDATE")
			If dtC < dtCurrMonthBegin Or dtC >= dtCurrMonthEnd Then Exit Do
			dbl2 = dbl2 + 1
			strActivityID = objAssignmentListRs("AID")
			'nMaxMark = k_5 ' почему-то только 5-балльная
			dbl = GetGradingCommon(objAssignmentListRs("RES"))

			If dbl > 3 Then dbl1 =dbl1 + 1
			If CStr(objAssignmentListRs("STUDENTID")) = strStudentID Then
				dbl4 = dbl4 + 1
				If dbl > 3 Then dbl3 = dbl3 + 1
			End If
			objAssignmentListRs.MoveNext
		Loop

		If dbl2>0 Then 
			nClStatistics = dbl1 * 100 / dbl2
			If dbl4>0 Then nStStatistics = dbl3 * 100 / dbl4
		End If
	End If
End Sub

Sub PrepareGraph()
	Dim nMonthCnt, i, n

	nMonthCnt = GetMonthCnt(dtStartDate, dtEndDate)
	n = nMonthCnt - 1
	
	ReDim arrCategories(n)
	ReDim arrValues(2, n)

	For i = 0 To n
		dtCurrMonthBegin = GetCurrMonthBegin(dtStartDate, i)
		dtCurrMonthEnd = GetNextMonthBegin(dtStartDate, i)
		GetStatistics(objAssignmentListRs)
		arrCategories(i) = GetMonthName(dtStartDate,i)
		arrValues(0, i) = nStStatistics
		arrValues(1, i) = nClStatistics
		GetStatistics(objRs)
		arrValues(2, i) = nClStatistics
	Next
	For i = 0 To n
		If Not(IsEmpty(arrValues(0, i)) And IsEmpty(arrValues(1, i)) And IsEmpty(arrValues(2, i))) Then Exit Sub
	Next
	arrValues = Empty
End Sub
%>

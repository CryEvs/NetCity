<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Const kArrTitle = 0
Const kAvgMark	= 1
Const kClassAvg	= 2

Dim nTermID, strTermName, nTeacherID, strTeacher, nSubjectID, strTeacherName, strTitleAddString
Dim objMarksRs, strReport, strSubjectName
Dim nMaxMark

Sub ReadState()
	Dim objUserInfo

	nMaxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))

	nTermID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrTerm), Null)
	nTeacherID = GetSafeLng(obTokenMgr.GetData(strToken,stCurrTeacher), -1)
	nSubjectID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrSubject), Null)
	If nTeacherID > 0 Then
		strTeacher = objNSNET.GetUserNickName(nTeacherID)
		Set objUserInfo = objNSNET.GetUserInfo(nTeacherID)
		strTeacherName = DB2HTML_BR(objUserInfo("LASTNAME"))
	End If
	If nSubjectID > 0 Then
		strSubjectName = objNSNET.GetSubjectName(nSubjectID)
	Else
		strSubjectName = obLanguage("Common","kAll")
	End If
End Sub

Sub Main()
	SetScriptTimeOut 900
	If nTermID > 0 Then
		strTitleAddString = " " & obLanguage("Reports","kForSchoolPeriod")
		strTermName = objNSNET.GetTermName(nTermID)
		Set objMarksRs = objNSNET.GetPeriodAverageMarks(-1, -1, nSubjectID, nTeacherID, strCurrYearID, nTermID)
	Else
		Set objMarksRs = objNSNET.GetYearTotalsAverageMarks(nSubjectID, nTeacherID, strCurrYearID, nTermID)
		strTermName = obLanguage("Common", IIF(nTermID = -1,"kYear","kYearTotal") )
		strTitleAddString = " " & obLanguage("Reports", IIF(nTermID = -1,"kForSchoolYear","kForTotals"))
	End If

	strReport = GetReport()
End Sub

Sub OnDrawPage()
	Response.Write strReport
End Sub

Function GetTableHeader()
End Function

Function GetReportTable()
	Dim strReport
	Dim aMark
	Dim strSubjectRow, strClassRow
	Dim teacherAvgMark, objTeacherAvgMarks

	strClassRow = "<tr class=""text-nowrap chart-data-row""><td class=""cell-text chart-data-name"">" & obLanguage("Reports","kAverMarkForAllSubjects") & "</td>"
	If nTeacherID > 0 Then strSubjectRow = "<th class=""text-nowrap"">" & obLanguage("Reports","kAverMarkForAllClasses",strFunctionalityType) & "</th>"
	strSubjectRow = strSubjectRow & "</tr>"

	If nSubjectID > 0 Then
		strTeacherName = strSubjectName
	ElseIf nTeacherID < 0 Then
		strTeacherName = obLanguage("Reports","kAverMarkForAllSubjects")
		strClassRow = ""
	End If
	strSubjectRow = strSubjectRow & "<tr class=""text-nowrap chart-data-row""><td class=""cell-text chart-data-name"">" & DB_2_HTML(strTeacherName) & "</td>"

	strReport = GetTableHeader() & "<th>&nbsp;</th>"
	While Not objMarksRs.EOF
		strReport = strReport & "<th>" & DB_2_HTML(objMarksRs("CLASSNAME")) & "</th>"
		strSubjectRow = strSubjectRow & "<td>" & Round(CDbl(objMarksRs("AVGMARK")), 2) & "</td>"
		If nTeacherID > 0 Or nSubjectID > 0 Then 
			strClassRow = strClassRow & "<td>" & Round(CDbl(objMarksRs("avgClass")), 2) & "</td>"
		End If
		objMarksRs.MoveNext
	Wend

	If nTeacherID > 0 Then
		Set objTeacherAvgMarks = objNSNET.GetTeacherAverageMark(nTeacherID, nSubjectID, nTermID, strCurrYearID)
		If objTeacherAvgMarks.EOF Then
			teacherAvgMark = 0
		Else
			teacherAvgMark = GetSafeDbl(objTeacherAvgMarks("AMARK"), 0)
		End If
		strSubjectRow = strSubjectRow & "<td class=""xn1"" >" & CStr(Round(teacherAvgMark, 2)) & "</td>"
		strClassRow = strClassRow & "<td>&nbsp;</td>"
	End If
	strReport = strReport & strSubjectRow & strClassRow

	GetReportTable = strReport & "</tr></table>"
End Function

Sub PrepareGraph()
	Dim arrVal, nCnt, i
	ReDim arrCaptions(1)
	arrCaptions(0) = IIF(nSubjectID > 0, strSubjectName, strTeacherName)
	arrCaptions(1) = obLanguage("Reports","kAverMarkForAllSubjects2")

	If objMarksRs.EOF Then Exit Sub

	arrVal = objMarksRs.GetRows(,,Array("CLASSNAME", "AVGMARK", "avgClass"))
	nCnt = UBound(arrVal, 2)

	ReDim arrCategories(nCnt)
	ReDim arrValues(1, nCnt)
	For i = 0 To nCnt
		arrCategories(i) = arrVal(kArrTitle, i)
		arrValues(0, i) = Round(CDbl(arrVal(kAvgMark, i)), 2)
		arrValues(1, i) = Round(CDbl(arrVal(kClassAvg, i)), 2)
	Next
End Sub

%>

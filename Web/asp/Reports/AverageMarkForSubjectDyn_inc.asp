<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Const kArrTermType			= 0
Const kArrTermID			= 1
Const kArrTermName			= 2

Const kArrClassName				= 0
Const kArrPeriodID				= 1
Const kArrMark					= 2
Const kArrClassMark					= 3

Dim nTeacherID, strTeacher, strTeacherName
Dim nSubjectID, strSubjectName, strClassName, strSubjectAbbr
Dim objMarksRs, objTermsRs
Dim arrTerms, nTermsCnt
Dim strReport
Dim bAll
Dim nMaxMark

Sub ReadState()
	Dim objUserInfo

	nMaxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))

	nTeacherID = GetSafeLng(obTokenMgr.GetData(strToken,stCurrTeacher), -1)
	bAll = True
	strSubjectName = obLanguage("Common","kAll")
	nSubjectID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrSubject), Null)

	If nSubjectID > 0 Then
		strSubjectName = objNSNET.GetSubjectName(nSubjectID)
		strSubjectAbbr = objNSNET.GetSubjAbbrev(nSubjectID)
		bAll = False
	End If
	If nTeacherID>0 Then
		strTeacher = objNSNET.GetUserNickName(nTeacherID)
		Set objUserInfo = objNSNET.GetUserInfo(nTeacherID)
		strTeacherName = DB2HTML_BR(objUserInfo("LASTNAME"))
		bAll = False
	End If

	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "0")
	If strClassID_IUP = "-1" Then
		strClassID = "-1"
		strIupGrade = "-1"
		bIsIupGrade = Empty
		strClassName = obLanguage("Common","kAll")
	Else
		Call InitIUPClassID(strClassID_IUP)
		TestError(obLanguage("Reports","kClassNotSelected"))

		If bIsIupGrade Then
			strClassName = strIupGrade & " *"
		Else
			strClassName = objNSNET.GetClassName(strClassID)
		End If
	End If
End Sub

Sub Main()
	Set objMarksRs = objNSNET.GetPeriodAverageMarks(strClassID, strIupGrade, nSubjectID, nTeacherID, strCurrYearID, -1)
	If Not objMarksRs.EOF Then 
		Set objTermsRs = objNSNET.GetTotalMarksTermList(strClassID, strIupGrade, nSubjectID, nTeacherID, strCurrYearID)
		If Not objTermsRs.EOF Then
			arrTerms = objTermsRs.GetRows(,,Array("TERMTYPEID", "TERMID", "TERMNAME"))
			nTermsCnt = UBound(arrTerms, 2)
		End If
	End If
	strReport = GetReport()
End Sub

Sub OnDrawPage()
	Response.Write strReport
End Sub

Function GetTableHeader()
End Function

Function GetReportRow(strCurClassName, strTitleText, arrSubjectAvgMarks)
	GetReportRow = "<tr class=""chart-data-row""><td class=""cell-text chart-data-name"">" & strCurClassName & ",&nbsp;" & strTitleText & "</td>" & GetAvgMarkString(arrSubjectAvgMarks) & "</tr>"
End Function

Function GetReportTable()
	Dim strTitleText
	Dim dctTermList
	Dim i
	Dim arrSubjectAvgMarks, arrClassAvgMarks, avgMark
	Dim strTermID
	Dim oldClassName, strCurClassName, strReport
	If objMarksRs.EOF Then Exit Function
	If Not IsArray(arrTerms) Then Exit Function

	strReport = GetTableHeader()
	Set dctTermList = CreateObject("NetCity.Storage")
	For i = 0 To nTermsCnt
		strReport = strReport & "<th>" & DB_2_HTML(arrTerms(kArrTermName, i)) & "</th>"
		dctTermList.Add CStr(arrTerms(kArrTermID, i)), i
	Next

	strReport = strReport & "</tr>"
 	If bAll Then
 		strTitleText = obLanguage("Reports","kAverMark")
 	Else
		If nSubjectID < 0 And nTeacherID>0 Then strSubjectName = strTeacherName
 		strTitleText = DB_2_HTML(strSubjectName)
 	End If

	strCurClassName = DB_2_HTML(objMarksRs("CLASSNAME"))
	oldClassName = strCurClassName
	ReDim arrSubjectAvgMarks(nTermsCnt)
	ReDim arrClassAvgMarks(nTermsCnt)

	Do
		strTermID = GetSafeID(objMarksRs("TERMID"), "-1")
		i = dctTermList.Item( strTermID )
		If Not IsEmpty(i) Then
			avgMark = CDbl(objMarksRs("AVGMARK"))
			If bAll Then
				arrClassAvgMarks(i) = avgMark
			Else
				arrSubjectAvgMarks(i) = avgMark
				arrClassAvgMarks(i) = CDbl(objMarksRs("avgClass"))
			End If
		End If
		objMarksRs.MoveNext
		If objMarksRs.EOF Then
			oldClassName = "-1"
		Else
			oldClassName = DB_2_HTML(objMarksRs("CLASSNAME"))
		End If
		If oldClassName <> strCurClassName Then
			If Not bAll Then
				strReport = strReport & GetReportRow( strCurClassName, strTitleText , arrSubjectAvgMarks)
			End If
			strReport = strReport & GetReportRow( strCurClassName, obLanguage("Reports","kAverMark") , arrClassAvgMarks)
			If oldClassName = "-1" Then Exit Do
			strCurClassName = oldClassName
			ReDim arrSubjectAvgMarks(nTermsCnt)
			ReDim arrClassAvgMarks(nTermsCnt)
		End If
	Loop
	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function GetAvgMarkString( arrAvgMarks )
	Dim i
	GetAvgMarkString = ""
	For i = 0 To UBound( arrAvgMarks )
		If IsEmpty( arrAvgMarks(i) ) Then
			GetAvgMarkString = GetAvgMarkString & "<td>&nbsp;</td>"
		Else
			GetAvgMarkString = GetAvgMarkString & "<td class=""cell-num-2"">" & CStr(Round( arrAvgMarks(i), 2)) & "</td>"
		End If
	Next
End Function

Sub PrepareGraph()
	Dim i, arrVal, nValCnt, nLength, nTermIndex, strClassName, oldClassName
	Dim stp

	If Not IsArray(arrTerms) Then Exit Sub
	If objMarksRs.EOF Then Exit Sub

	ReDim arrCaptions(nTermsCnt)

	For i = 0 To nTermsCnt
		arrCaptions(i) = DB2HTML_BR(arrTerms(kArrTermName, i))
	Next
	If nSubjectID < 0 And nTeacherID>0 Then strSubjectAbbr = strTeacherName

	if bAll Then
		arrVal = objMarksRs.GetRows(,,Array("CLASSNAME", "TERMID", "AVGMARK"))
	Else
		arrVal = objMarksRs.GetRows(,,Array("CLASSNAME", "TERMID", "AVGMARK", "avgClass"))
	End If
	nValCnt = UBound(arrVal, 2)

	nLength = 0
	oldClassName = "-1"
	i = 0
	If bAll Then
		ReDim arrCategories(nValCnt)
		ReDim arrValues(nTermsCnt, nValCnt)
		stp = 1
	Else
		stp = 2
		ReDim arrCategories(2*nValCnt + 1)
		ReDim arrValues(nTermsCnt, 2*nValCnt + 1)
	End If
	Do
		strClassName = arrVal(kArrClassName, i)
		If (strClassName <> oldClassName) Then
			if Not bAll Then
				arrCategories(nLength) = strClassName & ", " & strSubjectAbbr
				arrCategories(nLength + 1) = strClassName
			Else
				arrCategories(nLength) = strClassName
			End If
			nTermIndex = 0
			nLength = nLength + stp
			oldClassName = strClassName
		End If
		If GetSafeLng(arrVal(kArrPeriodID, i), 0) = GetSafeLng(arrTerms(kArrTermID, nTermIndex), 0) Then
			if Not bAll Then
				arrValues(nTermIndex, nLength - 2) = Round(CDbl(arrVal(kArrMark, i)), 2)
				arrValues(nTermIndex, nLength - 1) = Round(CDbl(arrVal(kArrClassMark, i)), 2)
			Else
				arrValues(nTermIndex, nLength - 1) =  Round(CDbl(arrVal(kArrMark, i)), 2)
			End If
			i = i + 1
			If i > nValCnt Then Exit Do
		End If
		nTermIndex = nTermIndex + 1
	Loop
End Sub
%>

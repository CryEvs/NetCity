<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/AverageMarkReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kArrTitle				= 0
Const kArrAverStudMarks		= 1
Const kArrAverClassMarks	= 2

Dim strStudentID, strClassID, strSIDArray, strDateString
Dim objMarksRs, objSubTotalMarksRs, objTotalMarksRs
Dim nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay
Dim strReport, strActivityID, strSubjClassID
Dim rsStudentDateMarks, rsClassDateMarks, rsStudentMarks, rsClassMarks, rsMarks, nMaxMark
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate

Sub ReadState()
	strClassID = GetSafeParam("PCLID", stCurrClass, "0")
	strStudentID = GetSafeID(Request("SID"), "0")
	strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	strMarksType = GetSafeStr(Request("MT"), 1, "T")
	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
	nMaxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))
End Sub

Sub WriteState
	WriteArrays
End Sub

Sub Main()
	If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then 
		GenerateError obLanguage("Common","kNoAccess")
	End If
	strDateString = obLanguage("Reports","kFrom") & " " & Date2Java(dtStartDate) & _
		" " & obLanguage("Reports","kTo") & " " & Date2Java(dtEndDate)

	nSYear = Year(dtStartDate) : nSMonth = Month(dtStartDate) : nSDay = Day(dtStartDate)
	nEYear = Year(dtEndDate) : nEMonth = Month(dtEndDate) : nEDay = Day(dtEndDate)

	If strMarksType = kBothMarksTypesSign Then
		Set objTotalMarksRs = objNSNET.GetAverageTotalMarksForDynamic(strClassID, strStudentID, strCurrYearID, nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay)
		Set objSubTotalMarksRs = objNSNET.GetAverageSubTotalMarksForDynamic(strClassID, strStudentID, strCurrYearID, nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay)
	ElseIf strMarksType = kSubTotalMarksSign Then
		Set objMarksRs = objNSNET.GetAverageSubTotalMarksForDynamic(strClassID, strStudentID, strCurrYearID, nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay)
	Else
		Set objMarksRs = objNSNET.GetAverageTotalMarksForDynamic(strClassID, strStudentID, strCurrYearID, nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay)
	End If

	If strMarksType = kBothMarksTypesSign Then
		If Not (objTotalMarksRs.EOF And objSubTotalMarksRs.EOF) Then Call DrawGraphForTotalAndSubTotal()
	ElseIf strMarksType = kSubTotalMarksSign Then
		If Not objMarksRs.EOF Then Call DrawGraphForSubTotal()
	Else
		If Not objMarksRs.EOF Then Call DrawGraphForTotal()
	End If

	ReDim arrCaptions(1)
	arrCaptions(0) = obLanguage("Reports","kStudentAverageMark",strFunctionalityType) : arrCaptions(1) = obLanguage("Reports","kClassAverageMark")
	
	strReport = GetReport()
		
	obTokenMgr.SetData strToken, stMarksType, strMarksType
End Sub

Sub DrawGraphForTotal()
	Dim strTmp, arrVal, nCount, i
	
	arrVal = objMarksRs.GetRows(,,Array("TITLE", "StudentAvgMark", "ClassAvgMark"))
	nCount = UBound(arrVal, 2)
	
	ReDim arrCategories(nCount)
	
	For i = 0 To nCount
		arrCategories(i) = DB2HTML_BR(arrVal(kArrTitle, i))
	Next
	
	ReDim arrValues(1, nCount)
	
	For i = 0 To nCount
		If IsNull(arrVal(kArrAverStudMarks, i)) Then
			arrValues(0, i) = 0
		Else
			arrValues(0, i) = arrVal(kArrAverStudMarks, i)
		End If
		If IsNull(arrVal(kArrAverClassMarks, i)) Then
			arrValues(1, i) = 0
		Else
			arrValues(1, i) = arrVal(kArrAverClassMarks, i)
		End If
	Next
End Sub

Sub DrawGraphForSubTotal()
	Dim i
	Dim strAvgMark
	
	ReDim arrCategories(objMarksRs.RecordCount - 1)
	ReDim arrValues(1, objMarksRs.RecordCount - 1)
	i = 0
	While Not objMarksRs.EOF
		arrCategories(i) = Date2Str(objMarksRs("TITLE"))

		strAvgMark = objMarksRs("StudentAvgMark")
		If IsDull(strAvgMark) Then
			arrValues(0, i) = 0
		Else
			arrValues(0, i) = strAvgMark
		End If

		strAvgMark = objMarksRs("ClassAvgMark")
		If IsDull(strAvgMark) Then
			arrValues(1, i) = 0
		Else
			arrValues(1, i) = strAvgMark
		End If

		i = i + 1
		objMarksRs.MoveNext
	Wend
End Sub

Sub DrawGraphForTotalAndSubTotal()
	Dim nTotalCnt, nSubTotalCnt, nIndex
	Dim strTermID, strTTermID
	Dim strAvgMark

	nTotalCnt = -1
	nSubTotalCnt = -1
	If Not objTotalMarksRs.EOF Then
		nTotalCnt = objTotalMarksRs.RecordCount - 1
	End If
	
	If Not objSubTotalMarksRs.EOF Then
		nSubTotalCnt = objSubTotalMarksRs.RecordCount - 1
	End If
	
	ReDim arrCategories(nTotalCnt + nSubTotalCnt + 1)
	ReDim arrValues(1, nTotalCnt + nSubTotalCnt + 1)
	
	nIndex = 0
	While Not objSubTotalMarksRs.EOF
		strTermID = GetSafeID(objSubTotalMarksRs("TERMID"), "0")
		If Not objTotalMarksRs.EOF Then
			strTTermID = GetSafeID(objTotalMarksRs("TERMID"), "0")
		Else
			strTTermID = "0"
		End If
		If strTermID > strTTermID And strTTermID > "0" Then
			Do While Not objTotalMarksRs.EOF
				If strTermID <= GetSafeID(objTotalMarksRs("TERMID"), "0") Then Exit Do
				arrCategories(nIndex) = DB2HTML_BR(objTotalMarksRs("TITLE"))
				If IsNull(objTotalMarksRs("StudentAvgMark")) Then
					arrValues(0, nIndex) = 0
				Else
					arrValues(0, nIndex) = objTotalMarksRs("StudentAvgMark")
				End If

				If IsNull(objTotalMarksRs("ClassAvgMark")) Then
					arrValues(1, nIndex) = 0
				Else
					arrValues(1, nIndex) = objTotalMarksRs("ClassAvgMark")
				End If
				objTotalMarksRs.MoveNext
				nIndex = nIndex + 1
			Loop
		Else
			arrCategories(nIndex) = Date2Str(objSubTotalMarksRs("TITLE"))

			strAvgMark = objSubTotalMarksRs("StudentAvgMark")
			If IsDull(strAvgMark) Then
				arrValues(0, nIndex) = 0
			Else
				arrValues(0, nIndex) = strAvgMark
			End If

			strAvgMark = objSubTotalMarksRs("ClassAvgMark")
			If IsDull(strAvgMark) Then
				arrValues(1, nIndex) = 0
			Else
				arrValues(1, nIndex) = strAvgMark
			End If

			objSubTotalMarksRs.MoveNext
			nIndex = nIndex + 1
		End If
	Wend
	While Not objTotalMarksRs.EOF
		arrCategories(nIndex) = DB2HTML_BR(objTotalMarksRs("TITLE"))
		If IsNull(objTotalMarksRs("StudentAvgMark")) Then
			arrValues(0, nIndex) = 0
		Else
			arrValues(0, nIndex) = objTotalMarksRs("StudentAvgMark")
		End If
		If IsNull(objTotalMarksRs("ClassAvgMark")) Then
			arrValues(1, nIndex) = 0
		Else
			arrValues(1, nIndex) = objTotalMarksRs("ClassAvgMark")
		End If
		objTotalMarksRs.MoveNext
		nIndex = nIndex + 1
	Wend
End Sub

Function GetReport()
	GetReport = GetPageTitlePrintWithUserPhoto(obLanguage("ReportNames","kRNStudentAverageMarkDyn",strFunctionalityType), strStudentID, Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),objNSNET.GetClassName(strClassID),obLanguage("Reports","kMarksType"),GetMarksTypeText(strMarksType),obLanguage("Common","kPeriod"),strDateString,obLanguage("Common","kStudent",strFunctionalityType),objNSNET.GetUserNickName(strStudentID)))
	If IsArray(arrValues) And IsArray(arrCategories) Then
		GetReport = GetReport & "<div align=""center""><img name=""report_graph""" & _
			" src='gStudentAverageMarkDynImg.asp?VER=" & getVer() & "&AT=" & strToken & "' " & _ 
			" border=0 align='absmiddle'></div>"
	Else
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoStudentMarks"))
	End If
	GetReport = GetReport & GetPageVerPrint()
End Function

Sub OnDrawPage()
	Response.Write strReport
End Sub
%>

<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/AverageMarkReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/GradingScale_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strStudentID, strClassID, strSIDArray, strDateString
Dim objMarksRs, rsStudentMarks, objDSCon
Dim nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay
Dim strReport
Dim strActivityID, strSubjClassID, nMaxMark
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate

Sub ReadState()
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	strStudentID = GetSafeID(Request("SID"), "0")
	strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	strMarksType = GetSafeStr(Request("MT"), 1, "T")
	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
	nMaxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))
End Sub

Sub WriteState()
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

	Set objMarksRs = objNSNET.GetAverageMarksForDate(strClassID, strStudentID, strCurrYearID, nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay, strMarksType)

	If Not objMarksRs.EOF Then
		Set rsStudentMarks = objMarksRs.Fields("rsStudentMarks").Value
		If strMarksType <> kBothMarksTypesSign Then
			Call DrawGraphForTotalOrSubTotal( rsStudentMarks )
		Else
			Call DrawGraphForTotalAndSubTotal( rsStudentMarks )
		End If
	End If
	
	ReDim arrCaptions(1)
	arrCaptions(0) = obLanguage("Reports","kStudentAverageMark",strFunctionalityType) : arrCaptions(1) = obLanguage("Reports","kClassAverageMark")
	
	strReport = GetReport()
	obTokenMgr.SetData strToken, stMarksType, strMarksType
End Sub

Function GetReport()
	GetReport = GetPageTitlePrintWithUserPhoto(obLanguage("ReportNames","kRNStudentAverageMark",strFunctionalityType), strStudentID, Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kClassGB",strFunctionalityType),objNSNET.GetClassName(strClassID),obLanguage("Reports","kMarksType"),GetMarksTypeText(strMarksType),obLanguage("Common","kPeriod"),strDateString,obLanguage("Common","Ученик",strFunctionalityType),objNSNET.GetUserNickName(strStudentID)))

	If IsArray(arrValues) And IsArray(arrCategories)	Then
		GetReport = GetReport & "<div align=""center""><img name=""report_graph""" & _
			" src='gStudentAverageMarkImg.asp?VER=" & getVer() & "&AT=" & strToken & "' " & _ 
			" border=0 align='absmiddle'></div>"
	Else
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoStudentMarks"))
	End If
	GetReport = GetReport & GetPageVerPrint()
End Function

Sub OnDrawPage()
	Response.Write strReport
End Sub

Sub DrawGraphForTotalOrSubTotal( objRs )
	Dim rsMarks, rsClassMarks, nIndex, i
	Dim dblSum, nCnt, n

	If objRs.EOF Then Exit Sub
	
	n = objRs.RecordCount - 1
	ReDim arrCategories(n)
	ReDim arrValues(1, n)

	nIndex = 0	
	While Not objRs.EOF
		arrCategories(nIndex) = DB2HTML_BR(objRs("SUBJECTABBREV"))
		Set rsMarks = objRs.Fields("rsMarks").Value
		If rsMarks.EOF Then 
			arrValues(0, nIndex) = 0
		Else
			If CStr(rsMarks("AID")) = "0" Then
				arrValues(0, nIndex) = Round(CDbl(rsMarks("SM")) / CDbl(rsMarks("CM")), 2)
			Else
				Call GetAssMarksSum(rsMarks, dblSum, nCnt)
				If nCnt > 0 Then arrValues(0, nIndex) = Round(dblSum / nCnt, 2)
			End If
		End If
		Set	rsClassMarks = objRs.Fields("rsClassMarks").Value
		If rsClassMarks.EOF Then 
			arrValues(1, nIndex) = 0
		Else
			If CStr(rsClassMarks("AID")) = "0" Then
				arrValues(1, nIndex) = Round(CDbl(rsClassMarks("SM")) / CDbl(rsClassMarks("CM")), 2)
			Else
				Call GetAssMarksSum(rsClassMarks, dblSum, nCnt)
				If nCnt > 0 Then arrValues(1, nIndex) = Round(dblSum / nCnt, 2)
			End If
		End If
		nIndex = nIndex + 1
		objRs.MoveNext
	Wend
	For i = 0 to nIndex-1
		If arrValues(0, i) <> 0 And Not IsEmpty(arrValues(0, i)) Then Exit Sub
	Next
	arrValues = Empty
End Sub

Sub GetAssMarksSum( ByVal objRs, ByRef dblSub, nCnt )
	Dim dbl
	Dim nResultDB
	nCnt = 0 : dblSub = 0
	While Not objRs.EOF
		nResultDB = objRs("RESULT")
		If Not IsNull(nResultDB) Then
			strActivityID = objRs("AID")
			strSubjClassID = objRs("ID")
			dbl = GetGradingCommon(nResultDB)

			dblSub = dblSub + dbl
			nCnt = nCnt + 1
		End If
		objRs.MoveNext
	Wend
End Sub

Sub DrawGraphForTotalAndSubTotal( objRs )
	Dim rsTotalMarks, rsClassTotalMarks, rsSubTotalMarks, rsClassSubTotalMarks, nIndex
	Dim nTotalMark, nTotalMarkCnt, nSubTotalMark, nSubTotalMarkCnt, i, n
	
	If objRs.EOF Then Exit Sub

	n = objRs.RecordCount - 1
	ReDim arrCategories(n)
	ReDim arrValues(1, n)
	
	nIndex = 0
	While Not objRs.EOF
		arrCategories(nIndex) = DB2HTML_BR(objRs("SUBJECTABBREV"))
		Set rsTotalMarks = objRs.Fields("rsTotalMarks").Value
		If rsTotalMarks.EOF Then
			nTotalMark = 0
			nTotalMarkCnt = 0
		Else
			nTotalMark = rsTotalMarks("SM")
			nTotalMarkCnt = rsTotalMarks("CM")
		End If
		Set rsSubTotalMarks = objRs.Fields("rsSubTotalMarks").Value
		If rsSubTotalMarks.EOF Then
			nSubTotalMark = 0
			nSubTotalMarkCnt = 0
		Else
			Call GetAssMarksSum(rsSubTotalMarks, nSubTotalMark, nSubTotalMarkCnt)
		End If
		If (nTotalMarkCnt + nSubTotalMarkCnt) = 0 Then
			arrValues(0, nIndex) = 0
		Else
			arrValues(0, nIndex) = Round(CDbl(nTotalMark + nSubTotalMark) / (nTotalMarkCnt + nSubTotalMarkCnt), 2)
		End If
		Set rsClassTotalMarks = objRs.Fields("rsClassTotalMarks").Value
		If rsClassTotalMarks.EOF Then
			nTotalMark = 0
			nTotalMarkCnt = 0
		Else
			nTotalMark = rsClassTotalMarks("SM")
			nTotalMarkCnt = rsClassTotalMarks("CM")
		End If
		Set rsClassSubTotalMarks = objRs.Fields("rsClassSubTotalMarks").Value
		If rsClassSubTotalMarks.EOF Then
			nSubTotalMark = 0
			nSubTotalMarkCnt = 0
		Else
			Call GetAssMarksSum(rsClassSubTotalMarks, nSubTotalMark, nSubTotalMarkCnt)
		End If
		If nTotalMarkCnt + nSubTotalMarkCnt = 0 Then
			arrValues(1, nIndex) = 0
		Else
			arrValues(1, nIndex) = Round(CDbl(nTotalMark + nSubTotalMark) / (nTotalMarkCnt + nSubTotalMarkCnt), 2)
		End If
		nIndex = nIndex + 1
		objRs.MoveNext
	Wend
	For i = 0 to nIndex-1
		If arrValues(0, i) <> 0 And Not IsEmpty(arrValues(0, i)) Then Exit Sub
	Next
	arrValues = Empty
End Sub
%>





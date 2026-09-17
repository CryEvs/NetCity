<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/AverageMarkReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strClassID, strStudentID, strDateString
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate
Dim objMarksRs, objTotalMarksRs, objSubTotalMarksRs
Dim strSIDArray, bNoMarks'FedorovSY, objDSCon
Dim nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay
Dim strActivityID, strSubjClassID
Dim rsDateMarks, rsStudentMarks, rsClassMarks, rsMarks, nMaxMark

Sub ReadState()
	Call InitSchoolSettings( objNSNET )

	strClassID = GetSafeParam("PCLID", stCurrClass, "0")
	strStudentID = GetSafeID(Request("SID"), "0")
	strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	strMarksType = GetSafeStr(Request("MT"), 1, "T")
	ReadDateRange
	nMaxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))
End Sub

Sub Main()
	If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then 
		GenerateError obLanguage("Common","kNoAccess")
	End If
	strDateString = obLanguage("Reports","kFrom") & " " & Date2Java(dtStartDate) & _
		" " & obLanguage("Reports","kTo") & " " & Date2Java(dtEndDate)
	bNoMarks = False
	
	
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
		If objTotalMarksRs.EOF And objSubTotalMarksRs.EOF Then
			bNoMarks = True
		End If
	Else
		If objMarksRs.EOF Then
			bNoMarks = True
		End If
	End If

	strReport = GetReport()
		
	obTokenMgr.SetData strToken, stMarksType, strMarksType
End Sub

Sub OnDrawPage()
	Response.Write strReport
End Sub

Function GetTableHeader()
End Function

Function GetStudentTitle
End Function

Function GetClassTitle
End Function

Function GetReportTable()
	GetReportTable = GetTableHeader()
	If strMarksType = kBothMarksTypesSign Then
		GetReportTable = GetReportTable & GetTableForTotalAndSubTotal()
	Else
		GetReportTable = GetReportTable & GetTableForTotalOrSubTotal()
	End If
End Function

Function GetTableForTotalOrSubTotal()
	Dim strTmp
	Dim nCnt, nSum, strAvgMark

	strReport = ""
	While Not objMarksRs.EOF
		strTmp = "<th>" & DB_2_HTML(objMarksRs("TITLE"))
		strReport = strReport & strTmp & "</th>"
		objMarksRs.MoveNext
	Wend

	If strMarksType = kSubTotalMarksSign Then
		If Not objMarksRs.BOF Then objMarksRs.MoveFirst
		strReport = strReport & GetStudentTitle
		While Not objMarksRs.EOF
			strReport = strReport & "<td>" & objMarksRs("StudentAssignsCnt") & "</td>"
			objMarksRs.MoveNext
		Wend
	End If

	If Not objMarksRs.BOF Then objMarksRs.MoveFirst
	strReport = strReport & "</tr><tr class=""text-nowrap " & kGraphTableDataRow & """>" &_
		"<td class=""cell-text " & kGraphTableDataNameCell & """>" & obLanguage("Reports","kStudentAverageMark",strFunctionalityType) & "</td>"
	
	While Not objMarksRs.EOF
		strAvgMark = objMarksRs("StudentAvgMark")
		DrawMark strAvgMark
		objMarksRs.MoveNext
	Wend

	If strMarksType = kSubTotalMarksSign Then
		If Not objMarksRs.BOF Then objMarksRs.MoveFirst
		strReport = strReport & GetClassTitle
		While Not objMarksRs.EOF
			strReport = strReport & "<td>" & objMarksRs("AssignsCnt") & "</td>"
			objMarksRs.MoveNext
		Wend
	End If

	If Not objMarksRs.BOF Then objMarksRs.MoveFirst
	strReport = strReport & "</tr><tr class=""text-nowrap " & kGraphTableDataRow & """>" &_
		"<td class=""cell-text " & kGraphTableDataNameCell & """>" & obLanguage("Reports","kClassAverageMark") & "</td>"
	
	While Not objMarksRs.EOF
		strAvgMark = objMarksRs("ClassAvgMark")
		DrawMark strAvgMark
		objMarksRs.MoveNext
	Wend

	GetTableForTotalOrSubTotal = strReport & "</tr></table>"
End Function

Sub DrawMark(strMark)
	If IsDull(strMark) Then
		strReport = strReport & "<td>&nbsp;</td>"
	Else
		strReport = strReport & "<td class=""cell-num-2"" >" & strMark & "</td>"
	End If
End Sub

Function GetTableForTotalAndSubTotal()
	Dim strTermID, strTTermID
	Dim nCnt, nSum
	Dim strArray, arrTitles, i, bSubTotalsExist, nSumWorks
	Dim strAvgMark
	
	strArray = ""
	strReport = ""

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
				strReport = strReport & "<th>" & DB_2_HTML(objTotalMarksRs("TITLE")) & "</th>"
				strArray = strArray & "0|"
				objTotalMarksRs.MoveNext
			Loop
		Else
			strReport = strReport & "<th>" & DB_2_HTML(objSubTotalMarksRs("TITLE")) & "</th>"
			objSubTotalMarksRs.MoveNext
			strArray = strArray & "1|"
		End If
	Wend

	While Not objTotalMarksRs.EOF
		strReport = strReport & "<th>" & DB_2_HTML(objTotalMarksRs("TITLE")) & "</th>"
		strArray = strArray & "0|"
		objTotalMarksRs.MoveNext
	Wend

'проверяю есть ли Срезовае работы или только Итоговые оценки	
	arrTitles = Split(strArray,"|")
	ReDim Preserve arrTitles(UBound(arrTitles)-1)
	bSubTotalsExist = False
	For i=0 To UBound(arrTitles)
		If arrTitles(i)=1 Then bSubTotalsExist = True : Exit For
	Next
	If bSubTotalsExist Then
		If Not objSubTotalMarksRs.BOF Then objSubTotalMarksRs.MoveFirst
		strReport = strReport & GetStudentTitle
		i = 0 : nSumWorks = 0
		While Not objSubTotalMarksRs.EOF
			If arrTitles(i)=1 Then
				strReport = strReport & "<td>" & objSubTotalMarksRs("StudentAssignsCnt") & "</td>"
				nSumWorks = nSumWorks + GetSafeLng(objSubTotalMarksRs("StudentAssignsCnt"), 0)
				objSubTotalMarksRs.MoveNext
			ElseIf arrTitles(i)=0 Then
				strReport = strReport & "<td>" & nSumWorks & "</td>"
				nSumWorks = 0
			End If
			i = i + 1
		Wend
		' здесь забыли дописать "хвост" для периодов, допишем его...
		While i <= UBound(arrTitles)
			' Здесь везде arrTitles(i)=0
			strReport = strReport & "<td>" & nSumWorks & "</td>"
			nSumWorks = 0
			i = i + 1
		Wend
	End If

	strReport = strReport & "</tr><tr class=""text-nowrap " & kGraphTableDataRow & """><td class=""cell-text " & kGraphTableDataNameCell & """>" & obLanguage("Reports","kStudentAverageMark",strFunctionalityType) & "</td>"
	If Not objSubTotalMarksRs.BOF Then objSubTotalMarksRs.MoveFirst
	If Not objTotalMarksRs.BOF Then objTotalMarksRs.MoveFirst
	
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
				
				strAvgMark = objTotalMarksRs("StudentAvgMark")
				DrawMark strAvgMark

				objTotalMarksRs.MoveNext
			Loop
		Else
			strAvgMark = objSubTotalMarksRs("StudentAvgMark")
			DrawMark strAvgMark
	
			objSubTotalMarksRs.MoveNext
		End If
	Wend	
	
	While Not objTotalMarksRs.EOF
		strAvgMark = objTotalMarksRs("StudentAvgMark")
		DrawMark strAvgMark
		objTotalMarksRs.MoveNext
	Wend
	
	If bSubTotalsExist Then
		If Not objSubTotalMarksRs.BOF Then objSubTotalMarksRs.MoveFirst
		strReport = strReport & GetClassTitle
		i = 0 : nSumWorks = 0
		While Not objSubTotalMarksRs.EOF
			If arrTitles(i)=1 Then
				strReport = strReport & "<td>" & objSubTotalMarksRs("AssignsCnt") & "</td>"
				nSumWorks = nSumWorks + GetSafeLng(objSubTotalMarksRs("AssignsCnt"), 0)
				objSubTotalMarksRs.MoveNext
			ElseIf arrTitles(i)=0 Then
				strReport = strReport & "<td>" & nSumWorks & "</td>"
				nSumWorks = 0
			End If
			i = i + 1
		Wend
		' здесь также "хвост" для периодов...
		While i <= UBound(arrTitles)
			' Здесь везде arrTitles(i)=0
			strReport = strReport & "<td>" & nSumWorks & "</td>"
			nSumWorks = 0
			i = i + 1
		Wend
	End If

	strReport = strReport & "</tr><tr class=""text-nowrap " & kGraphTableDataRow & """><td class=""cell-text " & kGraphTableDataNameCell & """>" & obLanguage("Reports","kClassAverageMark") & "</td>"
	If Not objSubTotalMarksRs.BOF Then objSubTotalMarksRs.MoveFirst
	If Not objTotalMarksRs.BOF Then objTotalMarksRs.MoveFirst
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
				
				strAvgMark = objTotalMarksRs("ClassAvgMark")
				DrawMark strAvgMark

				objTotalMarksRs.MoveNext
			Loop
		Else
			strAvgMark = objSubTotalMarksRs("ClassAvgMark")
			DrawMark strAvgMark
	
			objSubTotalMarksRs.MoveNext
		End If
	Wend

	While Not objTotalMarksRs.EOF
		strAvgMark = objTotalMarksRs("ClassAvgMark")
		DrawMark strAvgMark
		objTotalMarksRs.MoveNext
	Wend

	GetTableForTotalAndSubTotal = strReport & "</tr></table>"
End Function
%>

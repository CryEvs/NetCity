<!-- #INCLUDE FILE="GradingScale_inc.asp" -->
<!-- #INCLUDE FILE="AverageMark_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/assignment.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const kDateDay			= 0
Const kDateMonth		= 1
Const kMandatory		= "&#183;"

Dim strAccYear, strAccClass, strStudentID, strAccDateString
Dim strClassID, arrSubjClassName
Dim bNoSeparate, objStudentAttendance, objSubjects, nDaysCnt
Dim dtMinD, dtMaxD
Dim nMaxMark, strActivityID, strSubjClassID
Dim NumberMsgToParents, NumberMsgToStudents
Dim arrStudents, bIsInfoPeriod
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate

Sub specialRead()
	Dim strSIDArray
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	bNoSeparate = CBool(GetSafeStr(Request("SPRT"), 1, "0") = "1")

	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
	If Not bNoSeparate Then
		strStudentID = GetSafeID(Request("SID"), "0")
		strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
		If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then GenerateError obLanguage("Common","kNoAccess")
	End If
	nMaxMark = GetSafeLng(obTokenMgr.GetData(strToken, stMaxMark), 5)
End sub

Sub specialMain()
	Dim nSYear, nSMonth, nSDay, nEYear, nEMonth, nEDay

	strAccClass = objNSNET.GetClassName(strClassID)
	strAccYear = obTokenMgr.GetData(strToken, "CurrYearName")
	strAccDateString = obLanguage("Reports","kFrom") & " " & Date2Java(dtStartDate) & _
				" " & obLanguage("Reports","kTo") & " " & Date2Java(dtEndDate)
	Set objSubjects = objNSNET.GetSubjectsList(strClassID, 1)
	If Not objSubjects.EOF Then
		arrSubjClassName = objSubjects.GetRows(,,Array("SUBJECTNAME"))
	End If
	Call InitSchoolSettingsManager()
	nSYear = Year(dtStartDate) : nSMonth = Month(dtStartDate) : nSDay = Day(dtStartDate)
	nEYear = Year(dtEndDate) : nEMonth = Month(dtEndDate) : nEDay = Day(dtEndDate)

	Set objStudentAttendance = objNSNET.GetStudentAttendance(strClassID,  strStudentID, dtStartDate, dtEndDate, bNoSeparate)
	nDaysCnt = objStudentAttendance.RecordCount

	dtMinD = dtStartDate
	dtMaxD = dtEndDate
'	dtMinD = IIF(IsDull(objStudentAttendance("MinDate")), dtStartDate, objStudentAttendance("MinDate"))
'	dtMaxD = IIF(IsDull(objStudentAttendance("MaxDate")), dtEndDate, objStudentAttendance("MaxDate"))

	arrStudents = GetReport()
	obTokenMgr.SetData strToken, stSeparate, IIf(bNoSeparate, "1", "0")
End Sub

Function GetReportTable( objRs, nSubjects, n, nDays, dMonthDate, arrSubjClassName )
	Dim strReport, i, j, strAttGradeTable, strRes, nMarksCnt, nMark, nWeight, dtMarkDueDate
	Dim avgCalc
	Dim nResultDB

	ReDim strAttGradeTable(nDays,nSubjects)
	ReDim arrAverMarks(nSubjects)
	Dim currentMark
	For i = 0 To nSubjects
		For j = n  To nDays : strAttGradeTable(j,i)="&nbsp;" : Next
		Set avgCalc = new AverageMarkCalc
		If Not objRs.EOF Then
			Do While arrSubjClassName(0,i) = objRs("SUBJECTNAME")
				j = DateDiff("d", dtMinD, objRs("D"))
				nWeight = GetSafeLng(objRs("Weight"),0)

				' Здесь происходит объединение objRs("REASON") и objRs("RESULT") в одно значение strRes
				strRes = GetSafeStr(objRs("REASON"), -1, "")
				If strRes = "" Then
					nResultDB = objRs("RESULT")
					If IsDull(nResultDB) Then
						strRes = "<b>" & kMandatory & "</b>"
						Call avgCalc.AddMandatoryMark(nWeight)
					Else
						strRes = DB_2_HTML(nResultDB)
						dtMarkDueDate = objRs("D")
						set currentMark = new Mark.Init(strRes,nWeight,dtMarkDueDate)
						strActivityID = objRs("AID") ' используется затем и в GetGrScale
						If strActivityID <> kActivityID_Manual Then strSubjClassID = objRs("SUBJCLASSID")
						strRes = GetGradingCommon(nResultDB)
					End If
				End If

				If strAttGradeTable(j,i)="&nbsp;" Then
					strAttGradeTable(j,i) = strRes
				Else
					strAttGradeTable(j,i) = strAttGradeTable(j,i) & "&nbsp;" & strRes
				End If
				If IsNumeric(strRes) Then
					If currentMark.IsActual Then Call avgCalc.AddMark(CDbl(strRes),nWeight)
				End If
				objRs.MoveNext
				If objRs.EOF Then Exit Do
			Loop
		End If
		arrAverMarks(i) = avgCalc.AverageMark
	Next

	Dim strBuilder
	Set strBuilder = new StringBuilder

	For j = 0 To nSubjects
		Call strBuilder.AppendFormat("<tr><td class=""cell-text"">{0}</td>", Array(DB_2_HTML(arrSubjClassName(0,j))))
		For i = n To nDays
			If Not IsEmpty(dMonthDate(kDateDay, i)) Then
				Call strBuilder.AppendFormat("<td>{0}</td>", Array( strAttGradeTable(i,j) ) )
			End If
		Next
		If IsEmpty(arrAverMarks(j)) Then
			Call strBuilder.Append("<td>&nbsp;</td>")
		Else
			Call strBuilder.AppendFormat("<td class=""сell-num-2"" >{0}</td>", Array( arrAverMarks(j) ) )
		End If
		Call strBuilder.Append("</tr>")
	Next

	GetReportTable = strBuilder.ToString
End Function

Function DrawTableSTR(bIsExcel)
	Dim nSubjectsCnt, i, j, k, nCurrMonth, nLastMonth, n
	Dim strReport, dMonthDate, dDate, objRs
	Dim nDays, dtMinDate, dtMaxDate, nMonthIndex, arrMonthsTeachDays, nCnt, nMonthsCnt, nDateDays
	Dim arrUsers
	Dim reportStringBuilder
	Set reportStringBuilder = new StringBuilder
	Dim strStudentFullName
	
	nSubjectsCnt = UBound(arrSubjClassName, 2)
	strReport = ""
	nDateDays = DateDiff("d", dtMinD, dtMaxD)

	ReDim dMonthDate(1, nDateDays)
	
	ReDim arrUsers(objStudentAttendance.RecordCount - 1)
	ReDim arrStudents(objStudentAttendance.RecordCount - 1, 1)
	k = 0
	Do While Not objStudentAttendance.EOF
		Set objRs = objStudentAttendance.Fields()("rsTotalResults").Value
		arrUsers(k) = objStudentAttendance("STUDENTID")
		strStudentID = objStudentAttendance("STUDENTID")
		k = k + 1
		dtMinDate = dtMaxD
		dtMaxDate = dtMinD
		If bNoSeparate Then
			Call reportStringBuilder.Append(GetHeader())
		Else
			strStudentFullName = MakeShortNickName(objStudentAttendance)
			If bIsExcel Then
				Call reportStringBuilder.Append(GetPageTitleExcel(obLanguage("ReportNames","kRNStudentGAReport",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), strAccYear, obLanguage("Common","kClass",strFunctionalityType), strAccClass, obLanguage("Common","kPeriod"), strAccDateString, obLanguage("Common","kStudent",strFunctionalityType), strStudentFullName)))
			Else 
				Call reportStringBuilder.Append(GetPageTitlePrintWithUserPhoto(obLanguage("ReportNames","kRNStudentGAReport",strFunctionalityType), strStudentID, Array(obLanguage("Common","kSchoolYear"), strAccYear, obLanguage("Common","kClass",strFunctionalityType), strAccClass, obLanguage("Common","kPeriod"), strAccDateString, obLanguage("Common","kStudent",strFunctionalityType), strStudentFullName)))
			End If
		End If
		If Not objRs.EOF Then
			For i = 0 To nSubjectsCnt
				Do While arrSubjClassName(0,i) = objRs("SUBJECTNAME")
					dDate = objRs("D")
					j = DateDiff("d", dtMinD, dDate)
					dMonthDate(kDateDay, j) = Day(dDate)
					dMonthDate(kDateMonth, j) = Month(dDate)
					If dtMinDate > dDate Then dtMinDate = dDate
					If dtMaxDate <= dDate Then dtMaxDate = dDate
					objRs.MoveNext
					If objRs.EOF Then Exit For
				Loop
			Next
			n = DateDiff("d", dtMinD, dtMinDate)'
			nDays = DateDiff("d", dtMinD, dtMaxDate)
			nMonthsCnt = DateDiff("m", dtMinDate, dtMaxDate)
	
			ReDim arrMonthsTeachDays(1, nMonthsCnt) 
			nCnt = 0
			nMonthIndex = 0
			nCurrMonth = 0
			nLastMonth = 0
			For j = n To nDays
				If Not IsEmpty(dMonthDate(kDateDay, j)) Then
					nCurrMonth = dMonthDate(kDateMonth, j)
					If nLastMonth = nCurrMonth Or nLastMonth = 0 Then
						nCnt = nCnt + 1
					ElseIf nCnt <> 0 Then
						arrMonthsTeachDays(kDateDay, nMonthIndex) = nCnt
						arrMonthsTeachDays(kDateMonth, nMonthIndex) = nLastMonth
						nMonthIndex = nMonthIndex + 1
						nCnt = 1
					End If
					nLastMonth = nCurrMonth
				End If
			Next
			arrMonthsTeachDays(kDateDay, nMonthIndex) = nCnt
			arrMonthsTeachDays(kDateMonth, nMonthIndex) = nCurrMonth
			Call reportStringBuilder.Append(GetTableHeader())
			For i = 0 To nMonthsCnt
				If Not IsEmpty(arrMonthsTeachDays(kDateMonth, i)) Then
					Call reportStringBuilder.Append("<th colspan=""" & arrMonthsTeachDays(kDateDay, i)& """>" & DB_2_HTML(obLanguage.GetMonthName(arrMonthsTeachDays(kDateMonth, i), False)) & "</th>")
				End If
			Next
			Call reportStringBuilder.Append("<th rowspan=""2"">" & obLanguage("Common","kAverageMarkBR") & "</th>")
			Call reportStringBuilder.Append(GetTableHeaderExt)
			For j = n To nDays
				If Not IsEmpty(dMonthDate(kDateDay, j)) Then
					Call reportStringBuilder.Append("<th>"& dMonthDate(kDateDay, j) &"</th>")
				End If
			Next
			objRs.MoveFirst
			Call reportStringBuilder.Append("</tr>" & GetReportTable(objRs, nSubjectsCnt, n, nDays, dMonthDate, arrSubjClassName) & "</table>")
		Else
			Call reportStringBuilder.Append(GetNoMarksString())
		End If
		Call reportStringBuilder.Append(GetAttendanceLegend() & "<br/>")
		Call reportStringBuilder.Append(GetSignString() & "<br/>")

		arrStudents(k-1, 0) = objStudentAttendance("STUDENTID")
		arrStudents(k-1, 1) = reportStringBuilder.ToString
		reportStringBuilder.Clear()
		objStudentAttendance.MoveNext
	Loop
	Call obTokenMgr.SetData(strToken, stValidIDs, arrUsers)
	DrawTableSTR = arrStudents
End Function
%>

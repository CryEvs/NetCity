<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const kArrTitle 		= 0
Const kArrSubjectMark	= 1
Const kArrClassMark		= 1
Const kArrClassID		= 2
Const kArrGrade			= 3

Dim strTermID, strSubjectID, strTermName, strReport
Dim objMarksRs, rsMarksAll, bAll, strSubjectName

Sub PrepareGraph()
	Dim arrVal, arrValAll,nCnt, i, arrCVal
	Dim indSubj, strClassID_ForSubj, strClassID_ForAll
	Dim nSubjCnt ' точнее это UBound, т.е. Cnt - 1
	Dim bIsIUP, bIsIUPAll

	arrValAll = rsMarksAll.GetRows(,,Array("CLASSNAME", "AMARK", "CLASSID", "GRADE"))
	nCnt = UBound(arrValAll, 2)

	If objMarksRs.EOF Then
		nSubjCnt = -1
	Else
		arrVal = objMarksRs.GetRows(,,Array("CLASSNAME", "AMARK", "CLASSID", "GRADE"))
		nSubjCnt = UBound(arrVal, 2)
	End If

	ReDim arrCategories(nCnt)

	For i = 0 To nCnt
		arrCategories(i) = arrValAll(kArrTitle, i)
	Next

	ReDim arrValues(1, nCnt)

	bIsIUP = False
	bIsIUPAll = False
	indSubj = 0
	For i = 0 To nCnt
		arrValues(1, i) = Round(CDbl(arrValAll(kArrClassMark, i)), 2)

		'strClassID_ForAll = GetSafeID(arrValAll(kArrClassID, i), Null)
		If Not IsDull(arrValAll(kArrClassID, i)) Then
			strClassID_ForAll = GetSafeID(arrValAll(kArrClassID, i), Null)
		Else
			bIsIUPAll = True
			strClassID_ForAll = GetSafeID(arrValAll(kArrGrade, i), Null)
		End If

		If indSubj <= nSubjCnt Then
			'strClassID_ForSubj = GetSafeID(arrVal(kArrClassID, indSubj), Null)
			If Not IsDull(arrVal(kArrClassID, indSubj)) Then
				strClassID_ForSubj = GetSafeID(arrVal(kArrClassID, indSubj), Null)
			Else
				bIsIUP = True
				strClassID_ForSubj = GetSafeID(arrVal(kArrGrade, indSubj), Null)
			End If
		Else
			strClassID_ForSubj = "0"
		End If

		If (bIsIUPAll = bIsIUP) And (strClassID_ForAll = strClassID_ForSubj) Then
			arrValues(0, i) = Round(CDbl(arrVal(kArrSubjectMark, indSubj)), 2)
			indSubj = indSubj + 1
		Else
			arrValues(0, i) = 0
		End If
	Next
End Sub

Sub ReadState()
	Server.ScriptTimeOut = Server.ScriptTimeOut * 10
	strTermID = GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), Null)
	strSubjectID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject), Null)
	strSubjectName = DB2HTML_BR(objNSNET.GetSubjectName(strSubjectID))
	bAll = CBool(obTokenMgr.GetData(strToken, stReportsViewAll) = 1)
End Sub

Sub Main()
	Select Case strTermID
		Case kReportYearTermType
			strTermName = obLanguage("Common","kYear")
		Case kReportTotalTermType
			strTermName = obLanguage("Reports","kYearTotals")
		Case Else
			strTermName = objNSNET.GetTermName(strTermID)
	End Select

	Set objMarksRs = objNSNET.GetAverageMarkForSubject(strSubjectID, strTermID, 0, strCurrYearID ) 'игнорируется право видеть только свои классы
	Set rsMarksAll = objNSNET.GetAverageMarkForSubject(-1, strTermID, strSubjectID, strCurrYearID )

	If Not rsMarksAll.EOF Then Call PrepareGraph()

	ReDim arrCaptions(1)
	arrCaptions(0) = strSubjectName : arrCaptions(1) = obLanguage("Reports","kAverMarkForAllSubjects2")
	strReport = GetReport()
End Sub

Function GetReport
	GetReport = GetPageTitlePrint(obLanguage("ReportNames","kRNAverageMarkForSubj"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Filter","kMarkFor"), strTermName, obLanguage("Filter","kCourseGB"), objNSNET.GetSubjectName(strSubjectID)))
	If Not (IsArray(arrValues) And IsArray(arrCategories)) Then
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoTotalsForSubject"))
	Else
		GetReport = GetReport & "<div align=""center"">" & _
			"<img name=""report_graph""" & _
			" src='gAverageMarkForSubjectImg.asp?VER=" & getVer() & "&AT=" & strToken & "'" & _
			" border=0 align='absmiddle'></div>"
	End If
	GetReport = GetReport & GetPageVerPrint()
End Function

Sub WriteState()
	WriteArrays
End Sub

Sub OnDrawPage()
	Response.Write strReport
End Sub
%>

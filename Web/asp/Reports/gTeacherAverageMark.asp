<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const kArrMark	= 0
Const kArrTitle	= 1

'--------- Page Parameters -------
'	AT=<Access Token>
'	TID=<Teacher ID>

Dim strTermID, strTeacherID, strTermName, strSubjectID
Dim objTeacherMarksRs, objMarksRs, strSubjectName
Dim strReport

Sub ReadState()
	Server.ScriptTimeOut = Server.ScriptTimeOut * 10
	strTermID = GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), Null)
	strTeacherID = GetSafeID(Request("TID"), Null)
	strSubjectID = GetSafeID(Request("SJID"), Null)
	If strSubjectID <> "-1" Then
		strSubjectName = objNSNET.GetSubjectName(strSubjectID)
	Else	
		strSubjectName = obLanguage("Common","kAll")
	End If
End Sub

Sub Main()
	Dim strClassIDs, strIupGrades

	Select Case strTermID
	Case "-1"
		strTermName = obLanguage("Common","kYear")
	Case "-2"
		strTermName = obLanguage("Common","kYearTotal")
	Case Else
		strTermName = objNSNET.GetTermName(strTermID)
	End Select
	Set objTeacherMarksRs = objNSNET.GetTeacherAverageMarksByClass(strTeacherID, strSubjectID, strTermID, strCurrYearID)

	strClassIDs = ""
	strIupGrades = ""
	If Not objTeacherMarksRs.EOF Then
		While Not objTeacherMarksRs.EOF
			If Not IsDull(objTeacherMarksRs("CLASSID")) Then
				strClassIDs = strClassIDs & GetSafeID(objTeacherMarksRs("CLASSID"), Null) & ","
			Else
				strIupGrades = strIupGrades & GetSafeID(objTeacherMarksRs("GRADE"), Null) & ","
			End If
			objTeacherMarksRs.MoveNext
		Wend
		If strClassIDs <> "" Then
			strClassIDs = Left(strClassIDs, Len(strClassIDs) - 1)
		End If
		If strIupGrades <> "" Then
			strIupGrades = Left(strIupGrades, Len(strIupGrades) - 1)
		End If
		objTeacherMarksRs.MoveFirst
	End If
	Set objMarksRs = objNSNET.GetAverageMarksForTeacherClasses(strTeacherID, -1, strTermID, strCurrYearID, strClassIDs, strIupGrades)

	Call PrepareGraph()

	ReDim arrCaptions(1)
	arrCaptions(0) = DB2HTML_BR(objNSNET.GetUserNickName(strTeacherID)) : arrCaptions(1) = obLanguage("Reports","kAverMarkForAllSubjects2")
	strReport = GetReport()
End Sub

Function GetReport()
	GetReport = GetPageTitlePrint(obLanguage("ReportNames","kRNTeacherAverageMark",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Filter","kMarkFor"), strTermName, obLanguage("Filter","kTeacherGB",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID), obLanguage("Common","kSubject"), strSubjectName))
	If IsArray(arrValues) And IsArray(arrCategories) Then
		GetReport = GetReport & "<div align=""center""><img name=""report_graph""" & _
			" src='gTeacherAverageMarkImg.asp?VER=" & getVer() & "&AT=" & strToken & "'" & _ 
			" border=0 align='absmiddle'></div>"
	Else
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoTotalsForTeacher",strFunctionalityType))
	End If
	GetReport = GetReport & GetPageVerPrint()
End Function

Sub OnDrawPage()
	Response.Write strReport
End Sub

Sub WriteState()
	WriteArrays
End Sub

Sub PrepareGraph()
	Dim arrVal, nCnt, i, arrCVal
	
	If objTeacherMarksRs.EOF Then Exit Sub

	arrVal = objTeacherMarksRs.GetRows(,,Array("AMARK", "CLASSNAME"))
	nCnt = UBound(arrVal, 2)
	
	ReDim arrCategories(nCnt)
	
	For i = 0 To nCnt
		arrCategories(i) = arrVal(kArrTitle, i)
	Next
	
	arrCVal = objMarksRs.GetRows(,,Array("AMARK"))
	ReDim Preserve arrCVal(0, nCnt)
	
	ReDim arrValues(1, nCnt)
	
	For i = 0 To nCnt
		arrValues(0, i) = Round(CDbl(arrVal(kArrMark, i)), 2)
		arrValues(1, i) = Round(CDbl(arrCVal(kArrMark, i)), 2)
	Next
End Sub
%>

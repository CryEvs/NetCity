<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const kArrTermTypeID			= 0
Const kArrTermTypeName			= 1
Const kArrTermID				= 2
Const kArrTermName				= 3

Const kArrClassID				= 0
Const kArrGrade					= 1
Const kArrClassName				= 2
Const kArrPeriodID				= 3
Const kArrSubjectMark			= 4
Const kArrClassMark				= 5

'--------- Page Parameters -------
'	AT=<Access Token>
'	PCLID=<Class ID>

Dim strSubjectID, strSubjectName, strClassName, strSubjectNameG
Dim bSubjAll, arrTerms, nTermsCnt
Dim objMarksRs, objTermsRs, bAll
Dim strReport

Sub ReadState()
	Server.ScriptTimeOut = Server.ScriptTimeOut * 10
	
	bAll = CBool(obTokenMgr.GetData(strToken, stReportsViewAll) = 1)
	strSubjectID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject), Null)
	If strSubjectID = "-1" Then
		strSubjectName = obLanguage("Common","kAll")
		strSubjectNameG = ""
		bSubjAll = True
	Else
		strSubjectName = objNSNET.GetSubjectName(strSubjectID)
		strSubjectNameG = DB2HTML_BR(strSubjectName)
		bSubjAll = False
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
	Set objMarksRs = objNSNET.GetAverageMarkForPeriod(strClassID, strIupGrade, strSubjectID, IIF(bAll, -1, strUserID), strCurrYearID)
	If Not objMarksRs.EOF Then 
		Set objTermsRs = objNSNET.GetTotalMarksTermList(strClassID, strIupGrade, strSubjectID, IIF(bAll, -1, strUserID), strCurrYearID)
		If Not objTermsRs.EOF Then
			arrTerms = objTermsRs.GetRows(,,Array("TERMTYPEID", "TERMTYPENAME", "TERMID", "TERMNAME"))
			nTermsCnt = UBound(arrTerms, 2)
		End If
		PrepareGraph
	End If
	strReport = GetReport()
End Sub

Sub PrepareGraph()
	Dim i, arrVal, nValCnt, nLength, nClassID, nOldClassID, nTermIndex
	Dim arrCVal, strClassName, nCValCnt
	Dim nGrade, nOldGrade

	If Not IsArray(arrTerms) Then Exit Sub
	ReDim arrCaptions(nTermsCnt)

	For i = 0 To nTermsCnt
		arrCaptions(i) = DB2HTML_BR(arrTerms(kArrTermName, i))
	Next

	If objMarksRs.EOF Then Exit Sub
	
	If Not bSubjAll Then
		arrVal = objMarksRs.GetRows(,,Array("CLASSID", "GRADE", "CLASSNAME", "TERMID", "AVGSUBJMARK", "AVGCLASSMARK"))
	Else
		arrVal = objMarksRs.GetRows(,,Array("CLASSID", "GRADE", "CLASSNAME", "TERMID", "AVGCLASSMARK"))
	End If
	nValCnt = UBound(arrVal, 2)
	
	If bSubjAll Then
		ReDim arrCategories(nValCnt)
		ReDim arrValues(nTermsCnt, nValCnt)
		
		nLength = 0
		nOldClassID = -1
		nOldGrade = -1
		nTermIndex = nTermsCnt + 1
		i = 0
		
		While i <= nValCnt
			nClassID = GetSafeLng(arrVal(kArrClassID, i), 0)
			nGrade = GetSafeLng(arrVal(kArrGrade, i), 0)
			If nClassID <> nOldClassID Or nGrade <> nOldGrade Then
				arrCategories(nLength) = DB2HTML_BR(arrVal(kArrClassName, i))
				While nTermIndex <= nTermsCnt
					arrValues(nTermIndex, nLength - 1) = 0
					nTermIndex = nTermIndex + 1
				Wend
				nTermIndex = 0
				nLength = nLength + 1
				nOldClassID = nClassID
				nOldGrade = nGrade
			End If
			If GetSafeLng(arrVal(kArrPeriodID, i), 0) = GetSafeLng(arrTerms(kArrTermID, nTermIndex), 0) Then
				arrValues(nTermIndex, nLength - 1) = Round(CDbl(arrVal(kArrSubjectMark, i)), 2)
				i = i + 1
			Else
				arrValues(nTermIndex, nLength - 1) = 0
			End If
			nTermIndex = nTermIndex + 1
		Wend
		While nTermIndex <= nTermsCnt
			arrValues(nTermIndex, nLength - 1) = 0
			nTermIndex = nTermIndex + 1
		Wend
	Else
		ReDim arrCategories(2*nValCnt + 1)
		ReDim arrValues(nTermsCnt, 2*nValCnt + 1)
		
		nLength = 0
		nOldClassID = -1
		nOldGrade = -1
		nTermIndex = nTermsCnt + 1
		i = 0
		
		While i <= nValCnt
			nClassID = GetSafeLng(arrVal(kArrClassID, i), 0)
			nGrade = GetSafeLng(arrVal(kArrGrade, i), 0)
			If nClassID <> nOldClassID Or nGrade <> nOldGrade Then
				strClassName = arrVal(kArrClassName, i)
				arrCategories(nLength) = strClassName
				arrCategories(nLength + 1) = strClassName & " ср"'& obLanguage("Reports","kAverMark")
				While nTermIndex <= nTermsCnt
					arrValues(nTermIndex, nLength - 2) = 0
					arrValues(nTermIndex, nLength - 1) = 0
					nTermIndex = nTermIndex + 1
				Wend
				nTermIndex = 0
				nLength = nLength + 2
				nOldClassID = nClassID
				nOldGrade = nGrade
			End If
			If GetSafeLng(arrVal(kArrPeriodID, i), 0) = GetSafeLng(arrTerms(kArrTermID, nTermIndex), 0) Then
				arrValues(nTermIndex, nLength - 2) = Round(CDbl(arrVal(kArrSubjectMark, i)), 2)
				arrValues(nTermIndex, nLength - 1) = Round(CDbl(arrVal(kArrClassMark, i)), 2)
				i = i + 1
			Else
				arrValues(nTermIndex, nLength - 2) = 0
				arrValues(nTermIndex, nLength - 1) = 0
			End If
			nTermIndex = nTermIndex + 1
		Wend
		While nTermIndex <= nTermsCnt
			arrValues(nTermIndex, nLength - 2) = 0
			arrValues(nTermIndex, nLength - 1) = 0
			nTermIndex = nTermIndex + 1
		Wend
	End If
End Sub

Function GetReport()
	GetReport = GetPageTitlePrint(obLanguage("ReportNames","kRNAverageMarkForSubjDyn"), Array(obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kCourseGB"),strSubjectName, _
	filterClasses,strClassName))

	If Not (IsArray(arrValues) And IsArray(arrCategories)) Then
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoTotalsForSubject"))
	Else
		GetReport = GetReport & "<div align=""center""><img name=""report_graph""" & _
			" src='gAverageMarkForSubjectDynImg.asp?VER=" & getVer() & "&AT=" & strToken & "'" & _ 
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

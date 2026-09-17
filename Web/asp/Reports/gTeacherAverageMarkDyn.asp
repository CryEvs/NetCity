<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ReportGraphs_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const kArrTermType				= 0
Const kArrTermID				= 1
Const kArrTermName				= 2

Const kArrClassID				= 0
Const kArrGrade					= 1
Const kArrClassName				= 2
Const kArrPeriodID				= 3
Const kArrMark					= 4

'--------- Page Parameters -------
'	AT=<Access Token>
'	TID=<Teacher ID>
'	PCLID=<Class ID>

Dim strTeacherID, strClassName, strSubjectID, strSubjectName
Dim strPeriodID, strTeacherName
Dim arrTerms, nTermsCnt
Dim objTeacherMarksRs, objMarksRs, objTermsRs, objUserInfo
Dim strReport

Sub ReadState()
	Server.ScriptTimeOut = Server.ScriptTimeOut * 10

	strTeacherID = GetSafeID(obTokenMgr.GetData(strToken,stCurrTeacher), Null)
	Set objUserInfo = objNSNET.GetUserInfo(strTeacherID)
	strTeacherName = DB2HTML_BR(objUserInfo("LASTNAME"))

	strSubjectID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject), Null)
	If strSubjectID <> "-1" Then
		strSubjectName = objNSNET.GetSubjectName(strSubjectID)
	Else	
		strSubjectName = obLanguage("Common","kAll")
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

Sub WriteState()
	WriteArrays
End Sub

Sub Main()
	Set objTeacherMarksRs = objNSNET.GetTeacherAverageMarkForClassByPeriod(strClassID, strIupGrade, strTeacherID, strSubjectID,  strCurrYearID)
	Set objMarksRs = objNSNET.GetAverageMarksForTeacherClassesByPeriod(strClassID, strIupGrade, strTeacherID, strSubjectID, strCurrYearID)
	If Not objTeacherMarksRs.EOF Then
		Set objTermsRs = objNSNET.GetProfileTermsForTeacherClassSubject(strClassID, strIupGrade, strSubjectID, strTeacherID, strCurrYearID)
		arrTerms = objTermsRs.GetRows(,,Array("TERMTYPEID", "TERMID", "TERMNAME"))
		nTermsCnt = UBound(arrTerms, 2)
	End If
	
	PrepareGraph
	
	strReport = GetReport()
End Sub

Function GetReport()
	GetReport = GetPageTitlePrint(obLanguage("ReportNames","kRNTeacherAverageMarkDyn",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"),obLanguage("Filter","kTeacherGB",strFunctionalityType),objNSNET.GetUserNickName(strTeacherID), obLanguage("Common","kSubject"), strSubjectName, _
	filterClasses, strClassName))
	If IsArray(arrValues) And IsArray(arrCategories) Then
		GetReport = GetReport & "<div align=""center""><img name=""report_graph""" & _
			" src='gTeacherAverageMarkDynImg.asp?VER=" & getVer() & "&AT=" & strToken & "'" & _ 
			" border=0 align='absmiddle'></div>"
	Else
		GetReport = GetReport & GetWarningPrint(obLanguage("Reports","kNoTotalsForTeacher",strFunctionalityType))
	End If
	GetReport = GetReport & GetPageVerPrint()
End Function

Sub PrepareGraph()
	Dim i, arrVal, nValCnt, nLength, nClassID, nOldClassID, nTermIndex, arrCVal, strClassName, nCValCnt
	Dim nGrade, nOldGrade

	If Not IsArray(arrTerms) Then Exit Sub

	ReDim arrCaptions(nTermsCnt)

	For i = 0 To nTermsCnt
		arrCaptions(i) = DB2HTML_BR(arrTerms(kArrTermName, i))
	Next
	
	If objTeacherMarksRs.EOF Then Exit Sub

	arrVal = objTeacherMarksRs.GetRows(,,Array("CLASSID", "GRADE", "CLASSNAME", "PERIODID", "AMARK"))
	nValCnt = UBound(arrVal, 2)
	
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
			arrCategories(nLength) = strClassName & ", " & strTeacherName
				arrCategories(nLength + 1) = strClassName & ", " & obLanguage("Reports","kAverMark")
			While nTermIndex <= nTermsCnt
				arrValues(nTermIndex, nLength - 2) = 0
				nTermIndex = nTermIndex + 1
			Wend
			nTermIndex = 0
			nLength = nLength + 2
			nOldClassID = nClassID
			nOldGrade = nGrade
		End If
		If GetSafeLng(arrVal(kArrPeriodID, i), 0) = GetSafeLng(arrTerms(kArrTermID, nTermIndex), 0) Then
			arrValues(nTermIndex, nLength - 2) = Round(CDbl(arrVal(kArrMark, i)), 2)
			i = i + 1
		Else
			arrValues(nTermIndex, nLength - 2) = 0
			End If
		nTermIndex = nTermIndex + 1
	Wend
	While nTermIndex <= nTermsCnt
		arrValues(nTermIndex, nLength - 2) = 0
		nTermIndex = nTermIndex + 1
	Wend
	
	arrCVal = objMarksRs.GetRows(,,Array("CLASSID", "GRADE", "CLASSNAME", "PERIODID", "AMARK"))
	nCValCnt = UBound(arrCVal, 2)
		
	i = 0
	nLength = 1
	nOldClassID = -1
	nOldGrade = -1
	nTermIndex = nTermsCnt + 1
	
	While i <= nCValCnt
		nClassID = GetSafeLng(arrCVal(kArrClassID, i), 0)
		nGrade = GetSafeLng(arrCVal(kArrGrade, i), 0)
		If nClassID <> nOldClassID Or nGrade <> nOldGrade Then
			While nTermIndex <= nTermsCnt
				arrValues(nTermIndex, nLength - 2) = 0
				nTermIndex = nTermIndex + 1
			Wend
			nTermIndex = 0
			nLength = nLength + 2
			nOldClassID = nClassID
			nOldGrade = nGrade
		End If
		If GetSafeLng(arrCVal(kArrPeriodID, i), 0) = GetSafeLng(arrTerms(kArrTermID, nTermIndex), 0) Then
			arrValues(nTermIndex, nLength - 2) = Round(CDbl(arrCVal(kArrMark, i)), 2)
			i = i + 1
		Else
			arrValues(nTermIndex, nLength - 2) = 0
		End If
		nTermIndex = nTermIndex + 1
	Wend
	While nTermIndex <= nTermsCnt
		arrValues(nTermIndex, nLength - 2) = 0
		nTermIndex = nTermIndex + 1
	Wend
	
	ReDim Preserve arrCategories(nLength - 2)
	ReDim Preserve arrValues(nTermsCnt, nLength - 2)
End Sub

Sub OnDrawPage()
	Response.Write strReport
End Sub
%>

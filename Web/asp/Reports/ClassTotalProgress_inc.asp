<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Const kArrSubjectID			= 0
Const kArrSubjectAbbrev		= 1
Const kArrIsGroupExist		= 2
Const kAArrStudentID		= 0
Const kAArrNickName			= 1
Const kQualityCondition		= 0
Const kAdvancementCondition = 1
Const kSOUCondition			= 2
Const kQArrSubjectID		= 0
Const kQArrMark				= 1
Const kQArrMark_Cnt			= 2
Const kQArrPeriodTypeID		= 3
Const kQArrStudents_Cnt		= 1
Const kQArrPeriodTypeID2	= 2
Const kExcellent			= 100
Const kGood					= 64
Const kSatisfaction			= 36
Const kBad					= 16
Const kNA					= 7
Const kMark_Discharge		= -2
Const kStatSOU				= 0
Const kStat4and5			= 1
Const kStatPercent			= 2

Dim bNoMarks, strNoMarksPeriodName
Dim strClassID, strTeacherID, strTermID, strTermTypeID, strPrevTermID
Dim strClassName, strTitleAddString, strTermName, strSortComment
Dim bPrevious, bSortByAvMark, dtCurrPeriodStartDate
Dim objTermsRs, objSubjectsRs, arrSubjects, objStudentsRs
Dim nSubjectsCnt, nStudentsCnt, arrStudents, objMarks, objTotalMarks
Dim objQualityRs, arrQualityStudents, objAdvanceRs, arrAdvanceStudents, objSOURs, arrSOUStudents
Dim objPrevQualityRs, arrPrevQualityStudents, objPrevAdvanceRs, arrPrevAdvanceStudents, objPrevSOURs, arrPrevSOUStudents
Dim bNoQuality, bNoQualityPrev, bNoAdvance, bNoAdvancePrev, bNoSOU, bNoSOUPrev, objAppreciatedStudents, arrAppreciatedStudents
Dim objAppreciatedStudentsForSOU, arrAppreciatedStudentsForSOU, objPrevAppreciatedStudentsForSOU, arrPrevAppreciatedStudentsForSOU
Dim objPrevAppreciatedStudents, arrPrevAppreciatedStudents, bNoPrevAppreciate, bNoAppreciate
Dim bYearTotal, bTotalType, bExam
Dim arrSubjectsExamTypes
Dim dctSubjects
Dim nAllExamsCnt
Dim dctAppreciatedStudents, dctAppreciatedStudentsForSOU

Function GetPageTitle()
	GetPageTitle = obLanguage("Reports","kClassTotals")
End Function
Function GetTitleEx()
	GetTitleEx = obLanguage("Movement","kOfClass",strFunctionalityType) & " " & strTitleAddString
End Function

Function GetPageParams()
	GetPageParams = Array( _
		obLanguage("Common","kSchoolYear"),obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kClass",strFunctionalityType),objNSNET.GetClassName(strClassID), _
		obLanguage("Common","kClassChief",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID), _
		obLanguage("Common","kSchoolPeriod"),strTermName, _
		obLanguage("Reports","kSorted"),strSortComment )
End Function


Sub specialRead()
	bSortByAvMark = CBool(GetSafe("kSort", "kSortByLastName") = "kSortByAverageMark")
	strSortComment = LCase( obLanguage("Reports",IIF(bSortByAvMark, "kSortByAverageMark","kSortByLastName")) )
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	strTeacherID = GetSafeID(Request("TID"), Null)

	strTermID = GetSafeID(obTokenMgr.GetData(strToken, stCurrTerm), "0")
	bYearTotal = (Left(strTermID, 1) = "-")
	If bYearTotal Then strTermID = CStr(-CLng(strTermID))
End Sub

Sub specialMain()
	Dim objSubjExamTypes, arrExamTypes, i
	Dim cmdSubjectsExamTypes, strCurrSubjID
	Dim dctSubjTypes, strCurrTypeID, j

	bTotalType = False
	bExam = False
	If bYearTotal Then
		If strTermID = CStr(kYearType) Then
			strTermName = obLanguage("Common","kSchoolYear")
			strTitleAddString = obLanguage("Reports","kForSchoolYear")
		ElseIf strTermID = CStr(kExamType) Then
			strTermName = obLanguage("Reports","kExams")
			strTitleAddString = obLanguage("Reports","kForExams")
			bExam = True
		ElseIf strTermID = CStr(kTotalType) Then
			strTermName = obLanguage("Reports","kYearTotals")
			bTotalType = True
		End If
		bPrevious = False
	Else
		strTermName = objNSNET.GetTermName(strTermID)
		strTitleAddString = obLanguage("Reports","kForSchoolPeriod")
		Set objTermsRs = objNSNET.GetTermInfo(strTermID)
		strTermTypeID = CStr(GetSafeID(objTermsRs("TERMTYPEID"), Null))
		dtCurrPeriodStartDate = objTermsRs("STARTDATE")
		Set objTermsRs = objNSNET.GetPreviousTermsList(strTermTypeID, strCurrYearID, dtCurrPeriodStartDate)
		bPrevious = Not objTermsRs.EOF
		If bPrevious Then
			strPrevTermID = GetSafeID(objTermsRs("TERMID"), Null)
		End If
	End If
	strClassName = objNSNET.GetClassName(strClassID)
	bNoMarks = False

	Set objMarks = GetClassPeriodTotalMarks(strClassID, strTermID, strCurrYearID, bYearTotal, bSortByAvMark)
	If objMarks.EOF Then
		strNoMarksPeriodName = strTermName
		bNoMarks = True
	End If
	' В ф-цию GetClassStudentListForTerm передаётся либо -1 (для YearTotals), либо "нормальный" strTermID.
	Set objStudentsRs = objNSNET.GetClassStudentListForTerm(strClassID, IIf(bYearTotal, -1, strTermID), True)
	arrStudents = objStudentsRs.GetRows(,,Array("STUDENTID", "NICKNAME"))
	nStudentsCnt = UBound(arrStudents, 2)

	If bYearTotal And strTermID = CStr(kExamType) Then
		Set objSubjectsRs = objNSNET.GetSubjectsWithExamsList(strClassID)
		If objSubjectsRs.EOF Then
			bNoMarks = True
		End If
	Else
		Set objSubjectsRs = objNSNET.GetSubjectsList(strClassID, 2, -1)
	End If

	nAllExamsCnt = 0
	If Not bNoMarks Then
		arrSubjects = objSubjectsRs.GetRows(,,Array("SUBJECTID", "SUBJECTABBREV", "ISGROUPEXIST"))
		nSubjectsCnt = UBound(arrSubjects, 2)

		If bExam Then
			' collect exam types for subjects
			Set cmdSubjectsExamTypes = objNSNET.GetSubjectExamTypes_Prepare(strClassID)
			ReDim arrSubjectsExamTypes(nSubjectsCnt)

			Set dctSubjects = CreateObject("NetCity.DictionaryStorage")
			For i = 0 To nSubjectsCnt
				strCurrSubjID = GetSafeID(arrSubjects(kArrSubjectID, i), Null)
				ReDim arrCurVal(1)
				arrCurVal(0) = i + 1

				Set objSubjExamTypes = objNSNET.GetSubjectExamTypes_Execute(cmdSubjectsExamTypes, strCurrSubjID)

				If objSubjExamTypes.EOF Then
					Call objNSNET.DisposeCommand(cmdSubjectsExamTypes)
					GenerateError obLanguage("Reports","kErrGetStudentsMarks",strFunctionalityType)
				End If

				arrExamTypes = objSubjExamTypes.GetRows( ,,Array("PERIODTYPEID", "ABBR") )
				arrSubjectsExamTypes(i) = arrExamTypes

				Set dctSubjTypes = CreateObject("NetCity.DictionaryStorage")
				For j = 0 To UBound(arrExamTypes, 2)
					strCurrTypeID = GetSafeID(arrExamTypes(0, j), Null)
					dctSubjTypes(CLng(strCurrTypeID)) = j + 1
				Next
				nAllExamsCnt = nAllExamsCnt + UBound(arrExamTypes, 2) + 1

				Set arrCurVal(1) = dctSubjTypes
				dctSubjects(CLng(strCurrSubjID)) = arrCurVal
			Next
			Call objNSNET.DisposeCommand(cmdSubjectsExamTypes)
		End If

		Set objQualityRs = objNSNET.GetClassQuantityByProgress(strClassID, strTermID, bYearTotal, kQualityCondition)
		bNoQuality = False
		If objQualityRs.EOF Then
			bNoQuality = True
		Else
			If bExam Then
				arrQualityStudents = objQualityRs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT", "PERIODTYPEID"))
			Else
				arrQualityStudents = objQualityRs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT"))
			End If
		End If

		bNoAdvance = False
		Set objAdvanceRs = objNSNET.GetClassQuantityByProgress(strClassID, strTermID, bYearTotal, kAdvancementCondition)
		If objAdvanceRs.EOF Then
			bNoAdvance = True
		Else
			If bExam Then
				arrAdvanceStudents = objAdvanceRs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT", "PERIODTYPEID"))
			Else
				arrAdvanceStudents = objAdvanceRs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT"))
			End If
		End If
		bNoSOU = False
		Set objSOURs = objNSNET.GetClassQuantityByProgress(strClassID, strTermID, bYearTotal, kSOUCondition)
		If objSOURs.EOF Then
			bNoSOU = True
		Else
			Set objAppreciatedStudentsForSOU = objNSNET.GetAppreciatedStudentsCount(strClassID, strTermID, bYearTotal, True)
			If bExam Then
				arrAppreciatedStudentsForSOU = objAppreciatedStudentsForSOU.GetRows(,,Array("SUBJECTID", "MARK_CNT", "PERIODTYPEID"))
				arrSOUStudents = objSOURs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT", "PERIODTYPEID"))

				Set dctAppreciatedStudentsForSOU = CreateObject("NetCity.DictionaryStorage")
				For i = 0 To UBound(arrAppreciatedStudentsForSOU, 2)
					dctAppreciatedStudentsForSOU(CStr(arrAppreciatedStudentsForSOU(kQArrSubjectID, i)) & "_" & CStr(arrAppreciatedStudentsForSOU(kQArrPeriodTypeID2, i))) = GetSafeLng(arrAppreciatedStudentsForSOU(kQArrStudents_Cnt, i), 0)
				Next
			Else
				arrAppreciatedStudentsForSOU = objAppreciatedStudentsForSOU.GetRows(,,Array("SUBJECTID", "MARK_CNT"))
				arrSOUStudents = objSOURs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT"))
			End If
		End If
		bNoAppreciate = False
		Set objAppreciatedStudents = objNSNET.GetAppreciatedStudentsCount(strClassID, strTermID, bYearTotal, False)
		If objAppreciatedStudents.EOF Then
			bNoAppreciate = True
		Else
			If bExam Then
				arrAppreciatedStudents = objAppreciatedStudents.GetRows(,,Array("SUBJECTID", "MARK_CNT", "PERIODTYPEID"))
				Set dctAppreciatedStudents = CreateObject("NetCity.DictionaryStorage")
				For i = 0 To UBound(arrAppreciatedStudents, 2)
					dctAppreciatedStudents(CStr(arrAppreciatedStudents(kQArrSubjectID, i)) & "_" & CStr(arrAppreciatedStudents(kQArrPeriodTypeID2, i))) = GetSafeLng(arrAppreciatedStudents(kQArrStudents_Cnt, i), 0)
				Next
			Else
				arrAppreciatedStudents = objAppreciatedStudents.GetRows(,,Array("SUBJECTID", "MARK_CNT"))
			End If
		End If
		If bPrevious Then
			bNoQualityPrev = False
			Set objPrevQualityRs = objNSNET.GetClassQuantityByProgress(strClassID, strPrevTermID, bYearTotal, kQualityCondition)
			If objPrevQualityRs.EOF Then
				bNoQualityPrev = True
			Else
				If bExam Then
					arrPrevQualityStudents = objPrevQualityRs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT", "PERIODTYPEID"))
				Else
					arrPrevQualityStudents = objPrevQualityRs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT"))
				End If
			End If
			bNoAdvancePrev = False
			Set objPrevAdvanceRs = objNSNET.GetClassQuantityByProgress(strClassID, strPrevTermID, bYearTotal, kAdvancementCondition)
			If objPrevAdvanceRs.EOF Then
				bNoAdvancePrev = True
			Else
				If bExam Then
					arrPrevAdvanceStudents = objPrevAdvanceRs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT", "PERIODTYPEID"))
				Else
					arrPrevAdvanceStudents = objPrevAdvanceRs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT"))
				End If
			End If
			bNoSOUPRev = False
			Set objPrevSOURs = objNSNET.GetClassQuantityByProgress(strClassID, strPrevTermID, bYearTotal, kSOUCondition)
			If objPrevSOURs.EOF Then
				bNoSOUPrev = True
			Else
				Set objPrevAppreciatedStudentsForSOU = objNSNET.GetAppreciatedStudentsCount(strClassID, strPrevTermID, bYearTotal, True)
				If bExam Then
					arrPrevAppreciatedStudentsForSOU = objPrevAppreciatedStudentsForSOU.GetRows(,,Array("SUBJECTID", "MARK_CNT", "PERIODTYPEID"))
					arrPrevSOUStudents = objPrevSOURs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT", "PERIODTYPEID"))
				Else
					arrPrevAppreciatedStudentsForSOU = objPrevAppreciatedStudentsForSOU.GetRows(,,Array("SUBJECTID", "MARK_CNT"))
					arrPrevSOUStudents = objPrevSOURs.GetRows(,,Array("SUBJECTID","MARK","MARK_CNT"))
				End If
			End If
			bNoPrevAppreciate = False
			Set objPrevAppreciatedStudents = objNSNET.GetAppreciatedStudentsCount(strClassID, strPrevTermID, bYearTotal, False)
			If objPrevAppreciatedStudents.EOF Then
				bNoPrevAppreciate = True
			Else
				If bExam Then
					arrPrevAppreciatedStudents = objPrevAppreciatedStudents.GetRows(,,Array("SUBJECTID", "MARK_CNT", "PERIODTYPEID"))
				Else
					arrPrevAppreciatedStudents = objPrevAppreciatedStudents.GetRows(,,Array("SUBJECTID", "MARK_CNT"))
				End If
			End If
		End If
	End If
	obTokenMgr.SetData strToken, stSortType, IIf (bSortByAvMark,"1", "0")
	If bNoMarks Then
		strErrMsg = obLanguage("Reports","kNoPeriodMarks") & ". " & strNoMarksPeriodName
	End If
End Sub

Function GetClassPeriodTotalMarks(ByVal strClassID, ByVal strPeriodID, ByVal strYearID, ByVal bYearTotal, ByVal bOrderByAverage)
	Dim objRs

	On Error Resume Next

	Set objRs = objNSNET.GetClassTotalMarks(strClassID, strPeriodID, strYearID, bYearTotal)
	TestError obLanguage("Reports","kErrGetStudentsMarks",strFunctionalityType)
	If bOrderByAverage Then
		objRs.Sort = "AverageMark desc, LASTNAME, FIRSTNAME"
	End If
	TestError obLanguage("Reports","kErrGetStudentsMarks",strFunctionalityType)

	Set GetClassPeriodTotalMarks = objRs
End Function

Function GetTableHeader()
End Function

Function GetReportTable()
	Dim i, nCnt, bNoAverage, bMarksPresent, nIndex
	Dim nStudentID, nSubjectID, nSubjectGroupID, nSubjIndex
	Dim strReport, arrHaveMarksStudents, nArrLength
	Dim IsGroup, IsMark
	Dim arrExamTypes, nTypesCnt, j
	Dim strCurrAbbr
	Dim nMaxSYMark, nMinSYMark

	strReport = GetTableHeader()
	If Not bNoMarks And bExam Then
		For i = 0 To nSubjectsCnt
			arrExamTypes = arrSubjectsExamTypes(i)
			nTypesCnt = UBound(arrExamTypes, 2) + 1
			strReport = strReport & "<th colspan=""" & nTypesCnt & """>" & DB_2_HTML(GetSafeStr(arrSubjects(kArrSubjectAbbrev, i), -1, Null)) & "</th>"
		Next
		strReport = strReport & "<th rowspan=""2"">" & obLanguage("Reports","kAverageBR") & "</th></tr><tr>"
		For i = 0 To nSubjectsCnt
			arrExamTypes = arrSubjectsExamTypes(i)
			For j = 0 To UBound(arrExamTypes, 2)
				strCurrAbbr = GetSafeStr(arrExamTypes(1, j), -1, "")
				strReport = strReport & "<th>&nbsp;" & DB2HTML(strCurrAbbr) & "&nbsp;</th>"
			Next
		Next
	Else
		For i = 0 To nSubjectsCnt
			strReport = strReport & "<th>" & DB_2_HTML(GetSafeStr(arrSubjects(kArrSubjectAbbrev, i), -1, Null)) & "</th>"
		Next
		strReport = strReport & "<th>" & obLanguage("Reports","kAverageBR") & "</th>"
	End If

	Call InitSchoolSettings( objNSNET )
	nMaxSYMark = arrSchoolSettings( 1, kSSIndex_MaxMark )
	nMinSYMark = arrSchoolSettings( 1, kSSIndex_MinMark )
	Call GetMarkTypesInfo(True, nMinSYMark, nMaxSYMark) ' Если не известно точно значение bIsGradeSystemPass, то передаём True и получаем полный список

	nCnt = 0
	nIndex = 0
	bMarksPresent = True
	nArrLength = 0
	ReDim arrHaveMarksStudents(nStudentsCnt)

	Do While Not objMarks.EOF
		If GetSafeLng(objMarks("AverageMark"), 0) = 0 Then Exit Do
		Set objTotalMarks = objMarks("rsMarks").Value
		nStudentID = CLng(GetSafeID(objTotalMarks("STUDENTID"), Null))
		arrHaveMarksStudents(nArrLength) = nStudentID
		nArrLength = nArrLength + 1
		strReport = strReport & DrawTableString(nCnt)
		objMarks.MoveNext
	Loop
	While Not objMarks.EOF
		If bMarksPresent Then
			Set objTotalMarks = objMarks("rsMarks").Value
			nStudentID = CLng(GetSafeID(objTotalMarks("STUDENTID"), Null))
		End If
		If nStudentID <= CLng(arrStudents(kAArrStudentID, nIndex)) Then
			strReport = strReport & DrawTableString(nCnt)
			arrHaveMarksStudents(nArrLength) = nStudentID
			nArrLength = nArrLength + 1
			bMarksPresent = True
			objMarks.MoveNext
		Else
			i = 0
			Do While i < nArrLength
				If arrHaveMarksStudents(i) = CLng(arrStudents(kAArrStudentID, nIndex)) Then Exit Do
				i = i + 1
			Loop
			If i = nArrLength Then
				nCnt = nCnt + 1
				strReport = strReport & "</tr><tr class=""text-nowrap""><td>&nbsp;" & CStr(nCnt) & "</td>" & _
					"<td class=""cell-text"">" & DB_2_HTML(GetSafeStr(arrStudents(kAArrNickName, nIndex), -1, Null)) & "</td>"
				nSubjIndex = 0
				If Not bNoMarks And bExam Then
					strReport = strReport & DrawEmptyCells(1, nAllExamsCnt, kBlank)
				Else
					strReport = strReport & DrawEmptyCells(nSubjIndex, nSubjectsCnt, kBlank)
				End If
				strReport = strReport & "<td>&nbsp;</td>"
			End If
			bMarksPresent = False
		End If
		nIndex = nIndex + 1
	Wend
	While nIndex <= nStudentsCnt
		i = 0
		Do While i < nArrLength
			If arrHaveMarksStudents(i) = CLng(arrStudents(kAArrStudentID, nIndex)) Then Exit Do
			i = i + 1
		Loop
		If i = nArrLength Then
			nCnt = nCnt + 1
			strReport = strReport & "</tr><tr class=""text-nowrap""><td>&nbsp;" & CStr(nCnt) & "</td>" & _
				"<td class=""cell-text"">" & DB_2_HTML(GetSafeStr(arrStudents(kAArrNickName, nIndex), -1, Null)) & "</td>"
			nSubjIndex = 0
			If Not bNoMarks And bExam Then
				strReport = strReport & DrawEmptyCells(1, nAllExamsCnt, kBlank)
			Else
				strReport = strReport & DrawEmptyCells(nSubjIndex, nSubjectsCnt, kBlank)
			End If
			strReport = strReport & "<td>&nbsp;</td>"
		End If
		nIndex = nIndex + 1
	Wend

	strReport = strReport & DrawStatResults()
	strReport = strReport & "</tr></table>"

	GetReportTable = strReport
End Function

Function GetMarkRange(strCurrMark, bFirstTime, bLastTime, _
					nPrevSubjIndex, nPrevExamTypeIndex, nCurrSubjIndex, nCurrExamTypeIndex)
	Dim strMarkRange
	Dim i, j
	Dim nStart, nEnd
	Dim arrCurVal, dctSubjTypes
	Dim nSubjTypesCnt
	Dim arrItems

	strMarkRange = ""

	If (Not bFirstTime And Not bLastTime) And ((nPrevSubjIndex = nCurrSubjIndex) And (nPrevExamTypeIndex = nCurrExamTypeIndex)) Then
		' Так выводятся оценки, полученные учеником за один предмет, по одному типу экзаменов, но в разных подгруппах. На практике это редко, но т.к. интерфейс это позволяет, то должно быть предусмотрено.
		strMarkRange = strMarkRange & "&nbsp;" & DB_2_HTML(strCurrMark)
	Else

		If Not bFirstTime Then
			strMarkRange = strMarkRange & "</td>"
		End If

		arrItems = dctSubjects.Items
		For i = nPrevSubjIndex To nCurrSubjIndex
			arrCurVal = arrItems(i - 1)
			Set dctSubjTypes = arrCurVal(1)
			nStart = 1
			nSubjTypesCnt = dctSubjTypes.Count
			nEnd = nSubjTypesCnt

			If (i = nPrevSubjIndex) And Not bFirstTime Then
				nStart = nPrevExamTypeIndex + 1
			End If
			If i = nCurrSubjIndex Then
				nEnd = nCurrExamTypeIndex - 1
			End If

			If nStart <= nEnd Then
				For j = nStart To nEnd
					strMarkRange = strMarkRange & "<td>&nbsp;</td>"
				Next
			End If
		Next

		If Not bLastTime Then
			strMarkRange = strMarkRange & "<td>" & DB_2_HTML(strCurrMark)
		Else ' bLastTime
			If (nPrevSubjIndex = nCurrSubjIndex) And (nPrevExamTypeIndex = nCurrExamTypeIndex) Then
				strMarkRange = strMarkRange & "</td>"
			Else
				strMarkRange = strMarkRange & "<td>" & DB_2_HTML(strCurrMark) & "</td>"
			End If
		End If
	End If
	GetMarkRange = strMarkRange
End Function


Function DrawTableString(ByRef nCnt)
	Dim strReport, bNoAverage, nSubjIndex, nSubjectID
	Dim IsGroup, IsMark
	Dim bDrawExam, bDrawVerbalExam, bDrawWrittenExam
	Dim arrCurVal, dctSubjTypes, nExamTypeID
	Dim nPrevSubjIndex, nPrevExamTypeIndex, nCurrSubjIndex, nCurrExamTypeIndex
	Dim bFirstTime, strCurrMark, strMarkRange
	Dim arrItems
	Dim bIsGradeSystemPass

	nCnt = nCnt + 1
	strReport = strReport & "</tr><tr class=""text-nowrap""><td>&nbsp;" & CStr(nCnt) & "</td>" & _
		"<td class=""cell-text"">" & DB_2_HTML(GetSafeStr(objTotalMarks("NICKNAME"), -1, Null)) & "</td>"
	nSubjIndex = 0

	If bNoMarks Or Not bExam Then
		IsGroup = False
		IsMark = False
		Do While Not objTotalMarks.EOF
			nSubjectID = CLng(GetSafeID(objTotalMarks("SUBJECTID"), Null))
			bIsGradeSystemPass = (GetSafeLng(objTotalMarks("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)
			If nSubjectID = CLng(arrSubjects(kArrSubjectID, nSubjIndex)) Then
				If Not IsGroup Then
					strReport = strReport & "<td>"
					IsGroup = CBool(arrSubjects(kArrIsGroupExist, nSubjIndex) > 0)
				Else
					strReport = strReport & "&nbsp;"
				End If
				strReport = strReport & GetMark(objTotalMarks("MARK").Value, bIsGradeSystemPass)
				IsMark = True
				objTotalMarks.MoveNext
			Else
				If IsGroup Then
					IsGroup = False
					If IsMark Then strReport = strReport & "</td>"
				Else
					strReport = strReport & "<td>&nbsp;</td>"
				End If
				IsMark = False
			End If
			If Not IsGroup Then
				nSubjIndex = nSubjIndex + 1
				If IsMark Then strReport = strReport & "</td>"
			End If
		Loop
		If IsGroup Then
			strReport = strReport & "</td>"
			nSubjIndex = nSubjIndex + 1
		End If
		strReport = strReport & DrawEmptyCells(nSubjIndex, nSubjectsCnt, kBlank)
	Else
		nPrevSubjIndex = 1
		nPrevExamTypeIndex = 1
		bFirstTime = True
		While Not objTotalMarks.EOF
			nSubjectID = CLng(GetSafeID(objTotalMarks("SUBJECTID"), Null))
			nExamTypeID = CLng(GetSafeID(objTotalMarks("PERIODTYPE"), Null))
			bIsGradeSystemPass = (GetSafeLng(objTotalMarks("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)

			If Not dctSubjects.Exists(nSubjectID) Then GenerateError obLanguage("Common","kUnexpErr")
			arrCurVal = dctSubjects(nSubjectID)
			nCurrSubjIndex = arrCurVal(0)
			Set dctSubjTypes = arrCurVal(1)
			If Not dctSubjTypes.Exists(nExamTypeID) Then GenerateError obLanguage("Common","kUnexpErr")
			nCurrExamTypeIndex = dctSubjTypes(nExamTypeID)

			strCurrMark = GetMark(objTotalMarks("MARK").Value, bIsGradeSystemPass)

			strMarkRange = GetMarkRange(strCurrMark, bFirstTime, False, nPrevSubjIndex, nPrevExamTypeIndex, nCurrSubjIndex, nCurrExamTypeIndex)
			strReport = strReport & strMarkRange
			bFirstTime = False
			nPrevSubjIndex = nCurrSubjIndex
			nPrevExamTypeIndex = nCurrExamTypeIndex

			objTotalMarks.MoveNext
		WEnd

		nCurrSubjIndex = dctSubjects.Count
		arrItems = dctSubjects.Items
		arrCurVal = arrItems(nCurrSubjIndex - 1)
		Set dctSubjTypes = arrCurVal(1)
		nCurrExamTypeIndex = dctSubjTypes.Count

		strMarkRange = GetMarkRange("", bFirstTime, True, nPrevSubjIndex, nPrevExamTypeIndex, nCurrSubjIndex, nCurrExamTypeIndex)
		strReport = strReport & strMarkRange
	End If

	bNoAverage = CBool(GetSafeStr(objMarks("AverageMark"), -1, "") = "")
	If bNoAverage Then
		strReport = strReport & "<td>&nbsp;</td>"
	Else
		strReport = strReport & "<td class=""cell-num-2"" >" & DB_2_HTML(Round(CSng(GetSafeStr(objMarks("AverageMark"), -1, Null)),2)) & "</td>"
	End If

	DrawTableString = strReport
End Function

Function DrawStatResults()
	Dim strReport, nValue

	strReport = "</tr><tr><th colspan="""
	If bNoMarks Or Not bExam Then
		strReport = strReport & nSubjectsCnt + 4
	Else
		strReport = strReport & CStr(nAllExamsCnt + 3)
	End If
	strReport = strReport & """>&nbsp;</th></tr>" & _
		"<tr><td colspan=""2"" class=""cell-text"">" & obLanguage("Reports","kQuality") & "</td>"
	If bNoQuality Or bNoAppreciate Then
		nValue = 0
		If Not bNoMarks And bExam Then
			strReport = strReport & DrawEmptyCells(1, nAllExamsCnt, kBlank)
			nValue = nAllExamsCnt
		End If
		strReport = strReport & DrawEmptyCells(nValue, nSubjectsCnt + 1, kBlank)
	Else
		strReport = strReport & DrawStatResString(arrQualityStudents, kStatPercent, arrAppreciatedStudents, dctAppreciatedStudents) &_
			"</tr><tr><td colspan=""2"" class=""cell-text"">" & obLanguage("Reports","kText4and5") & "</td>" &_
			DrawStatResString(arrQualityStudents, kStat4and5, arrAppreciatedStudents, dctAppreciatedStudents)
	End If
	If bPrevious Then
		strReport = strReport & "</tr><tr><th colspan=""2"" class=""cell-text"">" & obLanguage("Reports","kQuality") & ",<br>" & LCase(obLanguage("Reports","kPreviousPeriod")) & "</th>"
		If bNoQualityPrev Or bNoPrevAppreciate Then
			nValue = 0
			If Not bNoMarks And bExam Then
				strReport = strReport & DrawEmptyCells(1, nAllExamsCnt, kBlank)
				nValue = nAllExamsCnt
			End If
			strReport = strReport & DrawEmptyCells(nValue, nSubjectsCnt + 1, kBlank)
		Else
			strReport = strReport & DrawStatResString(arrPrevQualityStudents, kStatPercent, arrPrevAppreciatedStudents, Empty)
		End If
	End If
	strReport = strReport & "</tr><tr><td colspan=""2"" class=""cell-text"">" & obLanguage("Reports","kAdvancement") & "</td>"
	If bNoAdvance Or bNoAppreciate Then
		nValue = 0
		If Not bNoMarks And bExam Then
			strReport = strReport & DrawEmptyCells(1, nAllExamsCnt, kBlank)
			nValue = nAllExamsCnt
		End If
		strReport = strReport & DrawEmptyCells(nValue, nSubjectsCnt + 1, kBlank)
	Else
		strReport = strReport & DrawStatResString(arrAdvanceStudents, kStatPercent, arrAppreciatedStudents, dctAppreciatedStudents)
	End If
	If bPrevious Then
		strReport = strReport & "</tr><tr><th colspan=""2"">" & obLanguage("Reports","kAdvancement") & ",<br>" & LCase(obLanguage("Reports","kPreviousPeriod")) & "</th>"
		If bNoAdvancePrev Or bNoPrevAppreciate Then
			nValue = 0
			If Not bNoMarks And bExam Then
				strReport = strReport & DrawEmptyCells(1, nAllExamsCnt, kBlank)
				nValue = nAllExamsCnt
			End If
			strReport = strReport & DrawEmptyCells(nValue, nSubjectsCnt + 1, kBlank)
		Else
			strReport = strReport & DrawStatResString(arrPrevAdvanceStudents, kStatPercent, arrPrevAppreciatedStudents, Empty)
		End If
	End If
	strReport = strReport &  "</tr><tr><td colspan=""2"" class=""cell-text"">" & obLanguage("Reports","kSOU") & "</td>"
	If bNoSOU Then
		nValue = 0
		If Not bNoMarks And bExam Then
			strReport = strReport & DrawEmptyCells(1, nAllExamsCnt, kBlank)
			nValue = nAllExamsCnt
		End If
		strReport = strReport & DrawEmptyCells(nValue, nSubjectsCnt + 1, kBlank)
	Else
		strReport = strReport & DrawStatResString(arrSOUStudents, kStatSOU, arrAppreciatedStudentsForSOU, dctAppreciatedStudentsForSOU)
	End If
	If bPrevious Then
		strReport = strReport & "</tr><tr><th colspan=""2"">" & obLanguage("Reports","kSOU") & ",<br>" & LCase(obLanguage("Reports","kPreviousPeriod")) & "</th>"
		If bNoSOUPrev Then
			nValue = 0
			If Not bNoMarks And bExam Then
				strReport = strReport & DrawEmptyCells(1, nAllExamsCnt, kBlank)
				nValue = nAllExamsCnt
			End If
			strReport = strReport & DrawEmptyCells(nValue, nSubjectsCnt + 1, kBlank)
		Else
			strReport = strReport & DrawStatResString(arrPrevSOUStudents, kStatSOU, arrPrevAppreciatedStudentsForSOU, Empty)
		End If
	End If

	DrawStatResults = strReport
End Function

' arrQualityStudents (arrResArray) - может не брать "3", а arrAppreciatedStudents (arrMarksCnt) - может брать. Тогда (например, если только одни "3") по индексам (nIndex) найдётся неправильное значение nCurrStudCnt.
' Чтобы достаточно просто можно было определить это значение для некоторых случаев, где через nIndex в существующем алгоритме строго определить значение nCurrStudCnt (для экзаменов) невозможно - используется dctMarksCnt, где
' через пару "SubjectID_PeriodTypeID" определяется nCurrStudCnt.
Function DrawStatResString(ByVal arrResArray, ByVal nStatType, ByVal arrMarksCnt, ByVal dctMarksCnt)
	Dim strReport
	Dim nSubjIndex, nRecordsCnt, i, nSum, nStudCnt, nMarksCntByGroup
	Dim nSubjectID, nOldSubjectID, nIndex

	Dim bDrawExam, bDrawVerbalExam, bDrawWrittenExam
	Dim nMarksCntByGroupV, nMarksCntByGroupW

	Dim arrSubjStatResByExamTypes
	Dim arrExamTypes, nTypesCnt, j
	Dim arrItems, arrCurVal, dctSubjTypes
	Dim nCurrExamTypeID
	Dim nCurrStudCnt
	Dim nPrevSubjIndex

	nRecordsCnt = UBound(arrResArray, 2)
	nSum = 0 : nStudCnt = 0
	nMarksCntByGroup = 0
	i = 0
	nSubjectID = 0
	nOldSubjectID = 0
	nSubjIndex = 0
	strReport = ""
	nIndex = 0

	If bNoMarks Or Not bExam Then
		While i <= nRecordsCnt
			nSubjectID = CLng(arrResArray(kQArrSubjectID, i))
			If nSubjectID <> nOldSubjectID And nOldSubjectID <> 0 Then
				Do While nSubjIndex <= nSubjectsCnt
					If nOldSubjectID = CLng(arrSubjects(kArrSubjectID, nSubjIndex)) Then Exit Do
					strReport = strReport & "<td>&nbsp;</td>"
					If arrMarksCnt(kQArrSubjectID, nIndex)=arrSubjects(kArrSubjectID, nSubjIndex) Then nIndex = nIndex + 1
					nSubjIndex = nSubjIndex + 1
				Loop
				nSum = nSum + nMarksCntByGroup
				nStudCnt = nStudCnt + CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex))
				If nStatType = kStatSOU Then
					If CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex)) > 0 Then
						nMarksCntByGroup = nMarksCntByGroup / CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex))
					Else
						nMarksCntByGroup = 0
					End If
				ElseIf nStatType = kStatPercent Then
					If CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex)) > 0 Then
						nMarksCntByGroup = nMarksCntByGroup * 100 / CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex))
					Else
						nMarksCntByGroup = 0
					End If
				End If
				strReport = strReport & "<td class=""cell-num-1"" >" & IIf(nMarksCntByGroup > 0, CStr(Round(nMarksCntByGroup, 1)), "&nbsp;") & "</td>"
				nSubjIndex = nSubjIndex + 1
				nMarksCntByGroup = 0
				nIndex = nIndex + 1
			End If
			nOldSubjectID = nSubjectID
			nMarksCntByGroup = GetMarksCntByGroup(nMarksCntByGroup, arrResArray(kQArrMark, i), arrResArray(kQArrMark_Cnt, i), nStatType)
			i = i + 1
		Wend
		Do While nSubjIndex <= nSubjectsCnt
			If nOldSubjectID = CLng(arrSubjects(kArrSubjectID, nSubjIndex)) Then Exit Do
			strReport = strReport & "<td>&nbsp;</td>"
			If arrMarksCnt(kQArrSubjectID, nIndex)=arrSubjects(kArrSubjectID, nSubjIndex) Then nIndex = nIndex + 1
			nSubjIndex = nSubjIndex + 1
		Loop
		nSum = nSum + nMarksCntByGroup
		nStudCnt = nStudCnt + CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex))
		If nStatType = kStatSOU Then
			If CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex)) > 0 Then
				nMarksCntByGroup = nMarksCntByGroup / CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex))
			Else
				nMarksCntByGroup = 0
			End If
		ElseIf nStatType = kStatPercent Then
			If CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex)) > 0 Then
				nMarksCntByGroup = nMarksCntByGroup * 100 / CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex))
			Else
				nMarksCntByGroup = 0
			End If
		End If
		strReport = strReport & "<td class=""cell-num-1"" >" & IIf(nMarksCntByGroup > 0, CStr(Round(nMarksCntByGroup, 1)), "&nbsp;") & "</td>"
		nSubjIndex = nSubjIndex + 1
		nIndex = nIndex + 1
		strReport = strReport & DrawEmptyCells(nSubjIndex,nSubjectsCnt,kBlank)
	Else

		nSubjectID = CLng(arrResArray(kQArrSubjectID, i))

		Do While nSubjIndex <= nSubjectsCnt
			If nSubjectID = CLng(arrSubjects(kArrSubjectID, nSubjIndex)) Then Exit Do

			arrExamTypes = arrSubjectsExamTypes(nSubjIndex)
			nTypesCnt = UBound(arrExamTypes, 2) + 1
			strReport = strReport & DrawEmptyCells(1, nTypesCnt, kBlank)

			If IsEmpty(dctMarksCnt) Then
				If arrMarksCnt(kQArrSubjectID, nIndex)=arrSubjects(kArrSubjectID, nSubjIndex) Then nIndex = nIndex + 1
			End If
			nSubjIndex = nSubjIndex + 1
		Loop

		arrExamTypes = arrSubjectsExamTypes(nSubjIndex)
		nTypesCnt = UBound(arrExamTypes, 2) + 1
		ReDim arrSubjStatResByExamTypes(1, nTypesCnt - 1)
		For j = 0 To nTypesCnt - 1
			arrSubjStatResByExamTypes(0, j) = False ' bDrawExam
			arrSubjStatResByExamTypes(1, j) = 0 ' nMarksCntByGroup
		Next
		arrItems = dctSubjects.Items
		arrCurVal = arrItems(nSubjIndex)
		Set dctSubjTypes = arrCurVal(1)

		While i <= nRecordsCnt
			nSubjectID = CLng(arrResArray(kQArrSubjectID, i))
			If nSubjectID <> nOldSubjectID And nOldSubjectID <> 0 Then
				Do While nSubjIndex <= nSubjectsCnt
					If nOldSubjectID = CLng(arrSubjects(kArrSubjectID, nSubjIndex)) Then Exit Do

					arrExamTypes = arrSubjectsExamTypes(nSubjIndex)
					nTypesCnt = UBound(arrExamTypes, 2) + 1
					strReport = strReport & DrawEmptyCells(1, nTypesCnt, kBlank)

					If IsEmpty(dctMarksCnt) Then
						If arrMarksCnt(kQArrSubjectID, nIndex)=arrSubjects(kArrSubjectID, nSubjIndex) Then nIndex = nIndex + 1
					End If
					nSubjIndex = nSubjIndex + 1
				Loop

				arrExamTypes = arrSubjectsExamTypes(nSubjIndex)
				nTypesCnt = UBound(arrExamTypes, 2) + 1
				For j = 0 To nTypesCnt - 1
					If arrSubjStatResByExamTypes(0, j) Then
						nMarksCntByGroup = arrSubjStatResByExamTypes(1, j)
						nSum = nSum + nMarksCntByGroup

						If IsEmpty(dctMarksCnt) Then
							nCurrStudCnt = CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex))
						Else
							nCurrStudCnt = dctMarksCnt(CStr(nOldSubjectID) & "_" & CStr(arrExamTypes(0, j)))
						End If

						nStudCnt = nStudCnt + nCurrStudCnt
						If nStatType = kStatSOU Then
							nMarksCntByGroup = nMarksCntByGroup / nCurrStudCnt
						ElseIf nStatType = kStatPercent Then
							nMarksCntByGroup = nMarksCntByGroup * 100 / nCurrStudCnt
						End If
						strReport = strReport & "<td class=""cell-num-1"" >" & CStr(Round(nMarksCntByGroup, 1)) & "</td>"
						If IsEmpty(dctMarksCnt) Then
							nIndex = nIndex + 1
						End If
					Else
						strReport = strReport & "<td>&nbsp;</td>"
					End If
				Next

				' ******************************************************************************************
				' Здесь подготовка данных для текущего предмета, т.е. для nSubjectID = CLng(arrResArray(kQArrSubjectID, i))
				' индекс i определяет текущий предмет.
				' Используется arrExamTypes для начального заполнения arrSubjStatResByExamTypes, а далее используется dctSubjTypes для
				' реального заполнения arrSubjStatResByExamTypes - по nCurrExamTypeID = GetSafeLng(arrResArray(kQArrPeriodTypeID, i), 0),
				' фактически тоже для предмета, соответствующего индексу i. В массивах могут быть "дырки" по предметам, поэтому здесь
				' ищем точное соответствие по предмету, а ниже восстанавливаем значение nSubjIndex
				nSubjIndex = nSubjIndex + 1
				nPrevSubjIndex = nSubjIndex

				Do While nSubjIndex <= nSubjectsCnt
					If nSubjectID = CLng(arrSubjects(kArrSubjectID, nSubjIndex)) Then Exit Do
					nSubjIndex = nSubjIndex + 1
				Loop

				arrExamTypes = arrSubjectsExamTypes(nSubjIndex)
				nTypesCnt = UBound(arrExamTypes, 2) + 1
				ReDim arrSubjStatResByExamTypes(1, nTypesCnt - 1)
				For j = 0 To nTypesCnt - 1
					arrSubjStatResByExamTypes(0, j) = False ' bDrawExam
					arrSubjStatResByExamTypes(1, j) = 0 ' nMarksCntByGroup
				Next

				arrItems = dctSubjects.Items
				arrCurVal = arrItems(nSubjIndex)
				Set dctSubjTypes = arrCurVal(1)

				nSubjIndex = nPrevSubjIndex
				' ******************************************************************************************

			End If
			nOldSubjectID = nSubjectID
			nCurrExamTypeID = GetSafeLng(arrResArray(kQArrPeriodTypeID, i), 0)
			If (nCurrExamTypeID <> kExamEGEType) And dctSubjTypes.Exists(nCurrExamTypeID) Then
				j = dctSubjTypes(nCurrExamTypeID) - 1
				arrSubjStatResByExamTypes(0, j) = True ' bDrawExam
				nMarksCntByGroup = arrSubjStatResByExamTypes(1, j)
				nMarksCntByGroup = GetMarksCntByGroup(nMarksCntByGroup, arrResArray(kQArrMark, i), arrResArray(kQArrMark_Cnt, i), nStatType)
				arrSubjStatResByExamTypes(1, j) = nMarksCntByGroup
			End If

			i = i + 1
		Wend

		Do While nSubjIndex <= nSubjectsCnt
			If nOldSubjectID = CLng(arrSubjects(kArrSubjectID, nSubjIndex)) Then Exit Do

			arrExamTypes = arrSubjectsExamTypes(nSubjIndex)
			nTypesCnt = UBound(arrExamTypes, 2) + 1
			strReport = strReport & DrawEmptyCells(1, nTypesCnt, kBlank)

			If IsEmpty(dctMarksCnt) Then
				If arrMarksCnt(kQArrSubjectID, nIndex)=arrSubjects(kArrSubjectID, nSubjIndex) Then nIndex = nIndex + 1
			End If
			nSubjIndex = nSubjIndex + 1
		Loop

		arrExamTypes = arrSubjectsExamTypes(nSubjIndex)
		nTypesCnt = UBound(arrExamTypes, 2) + 1
		For j = 0 To nTypesCnt - 1
			If arrSubjStatResByExamTypes(0, j) Then
				nMarksCntByGroup = arrSubjStatResByExamTypes(1, j)
				nSum = nSum + nMarksCntByGroup

				If IsEmpty(dctMarksCnt) Then
					nCurrStudCnt = CLng(arrMarksCnt(kQArrStudents_Cnt, nIndex))
				Else
					nCurrStudCnt = dctMarksCnt(CStr(nOldSubjectID) & "_" & CStr(arrExamTypes(0, j)))
				End If

				nStudCnt = nStudCnt + nCurrStudCnt

				If nStatType = kStatSOU Then
					nMarksCntByGroup = nMarksCntByGroup / nCurrStudCnt
				ElseIf nStatType = kStatPercent Then
					nMarksCntByGroup = nMarksCntByGroup * 100 / nCurrStudCnt
				End If
				strReport = strReport & "<td class=""cell-num-1"" >" & CStr(Round(nMarksCntByGroup, 1)) & "</td>"
				If IsEmpty(dctMarksCnt) Then
					nIndex = nIndex + 1
				End If
			Else
				strReport = strReport & "<td>&nbsp;</td>"
			End If
		Next

		nSubjIndex = nSubjIndex + 1

		For j = nSubjIndex To nSubjectsCnt
			arrExamTypes = arrSubjectsExamTypes(j)
			nTypesCnt = UBound(arrExamTypes, 2) + 1
			strReport = strReport & DrawEmptyCells(1, nTypesCnt, kBlank)
		Next

	End If

	If nStatType = kStatSOU Or nStatType = kStatPercent Or nStatType = kStat4and5 Then
		strReport = strReport & "<td>&nbsp;</td>"
	End If

	DrawStatResString = strReport
End Function

Function GetMarksCntByGroup(ByVal nMarksCntByGroup, ByVal nMark, ByVal nMarksCnt, ByVal nStatType)
	Dim nFactor

	nMarksCnt = GetSafeLng(nMarksCnt, 0)
	If nStatType = kStatSOU Then
		Select Case nMark
			Case kMark_5
				nFactor = kExcellent
			Case kMark_4
				nFactor = kGood
			Case kMark_3
				nFactor = kSatisfaction
			Case kMark_2, kMark_1
				nFactor = kBad
			Case kMark_NA
				nFactor = kNA
		End Select
		GetMarksCntByGroup = nMarksCntByGroup + nMarksCnt * nFactor
	Else
		GetMarksCntByGroup = nMarksCntByGroup + nMarksCnt
	End If
End Function

Function DrawEmpty3Cells(ByRef nCell, ByVal nLimit)
	DrawEmpty3Cells = ""
	While nCell <= nLimit
		DrawEmpty3Cells = DrawEmpty3Cells & "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
		nCell = nCell + 1
	Wend
End Function
%>

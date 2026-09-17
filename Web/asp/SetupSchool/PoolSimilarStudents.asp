<!-- #INCLUDE VIRTUAL="/asp/Language/lngPoolSimilarsABC.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

' FIND SIMILAR STUDENTS IN POOL
' глобальные переменные, используемые в этом файле, определены в SaveStudentInfoQAdd.asp или связанных с ней страницах

Const ind_STUDENTID = 0
Const ind_LASTNAME = 1
Const ind_FIRSTNAME = 2
Const ind_MIDDLENAME = 3
'Const ind_GENDER = 4
Const ind_BIRTHDATE = 4

Const ind_PARENTID = 0
Const ind_PARENT_LASTNAME = 1
Const ind_PARENT_FIRSTNAME = 2
Const ind_PARENT_MIDDLENAME = 3
Const ind_PARENT_GENDER = 4

Const MAX_SIMILARS = 14 ' максимальное кол-во похожих из пула для одного нового студента (+1)
Const MAX_MISTAKES = 3
Const ADD_MISTAKE_FOR_FIRST_LETTER = 1 ' увеличение ошибки за счёт ошибки в первой букве
Const PARENT_DECREASE = 3 ' вес информации о родителе должен быть меньше, чем основной информации об ученике,
						  ' поэтому длина информации о родителе будет сокращена во столько раз перед занесением в общую "копилку"
Const FAILED_GENDER_POINTS = 1
Const FAILED_GENDER_LEN = 1
Const FAILED_BIRTHDAY_POINTS = 1
Const FAILED_BIRTHDAY_LEN = 6
Const MAX_DAY_DIFF = 36500 ' 100 years

Dim nNewCnt, nPoolCnt, arrSimilars
Dim arrPoolStudents, arrSimilarsWork
Dim objPoolStudentParentsRs, arrPoolStudentsParents, nPoolParentsCnt
Dim bMiddleNames, bFathers, bMothers

Function InitPoolSimilars()
	Dim objPoolStudentsRs, objPoolStudentParentsRs
	Dim bEmptyPoolStudents, i, j
	Dim nPoolParentsCnt, strEOIDTO
	Dim objYearInfo, nGYMaxID

	nGYMaxID = -1
	Set objYearInfo = objNSNET.GetYearInfo(strCurrYearID)
	If Not objYearInfo.EOF Then
		nGYMaxID = GetSafeLng(objYearInfo("GLOBALYEARID"), -1)
	End If

	If (bUseRepl Or obContext.ServerSettings.SystemSettings.ModuleEServices) Then strEOIDTO = objNSNET.GetSchoolInfo(strSchoolID)("EOID") :Else strEOIDTO="0"
	Set objPoolStudentsRs = objNSNET.GetPoolStudents(1, 0, 0, -1, "А", "Я", "", -1, -1, -1,-1, -1, strEOIDTO,0, 0, 0, -1, nGYMaxID)	'	Все "доступные из пула"
	bEmptyPoolStudents = objPoolStudentsRs.EOF
	If bEmptyPoolStudents Then
		InitPoolSimilars = False
		Exit Function
	End If

	Call InitPoolSimilarsABC()

	arrPoolStudents = objPoolStudentsRs.GetRows(,,Array("STUDENTID", "LASTNAME", "FIRSTNAME", "MIDDLENAME", "BIRTHDATE"))
	nPoolCnt = UBound(arrPoolStudents, 2) ' count - but from 0!

	bMiddleNames = UBound(arrMiddleName) >= 0
	bFathers = UBound(arrFLastName) >= 0
	bMothers = UBound(arrMLastName) >= 0
	If bFathers Or bMothers Then
		' prepare array of Parents
		Redim arrPoolStudentsParents(nPoolCnt)
	End If

	' normalize names
	For i = 0 To nPoolCnt
		Call NormalizeName(arrPoolStudents(ind_LASTNAME, i))
		Call NormalizeName(arrPoolStudents(ind_FIRSTNAME, i))
		Call NormalizeName(arrPoolStudents(ind_MIDDLENAME, i))
		If bFathers Or bMothers Then
			Set objPoolStudentParentsRs = objNSNET.GetParentsListForStudent(arrPoolStudents(ind_STUDENTID, i))
			If Not objPoolStudentParentsRs.EOF Then
				arrPoolStudentsParents(i) = objPoolStudentParentsRs.GetRows(,,Array("PARENTID", "LASTNAME", "FIRSTNAME", "MIDDLENAME", "GENDER"))
				nPoolParentsCnt = UBound(arrPoolStudentsParents(i), 2)
				' normalize names
				For j = 0 To nPoolParentsCnt
					Call NormalizeName(arrPoolStudentsParents(i)(ind_PARENT_LASTNAME, j))
					Call NormalizeName(arrPoolStudentsParents(i)(ind_PARENT_FIRSTNAME, j))
					Call NormalizeName(arrPoolStudentsParents(i)(ind_PARENT_MIDDLENAME, j))
				Next
			Else
				arrPoolStudentsParents(i) = Empty
			End If
		End If
	Next

	InitPoolSimilars = True
End Function

Function GetPoolSimilars()
	Dim nSimilCnt, i, j
	Dim arrSimilarsForCurNewStudent
	Dim nPoolStudentID, nSimilarKoeff
	Dim nSize, bPoolSimilarsExists

	bPoolSimilarsExists = False
	nNewCnt = UBound(arrLastName) ' count - but from 0!
	Redim arrSimilarsWork(nNewCnt, nPoolCnt)
	Redim arrSimilars(nNewCnt) ' 0 - index for new student; 1 - Empty if no similars or Array(PoolStudentID_1, PoolStudentID_2, ...) - PoolStudentID_1 is more similar than PoolStudentID_2 and so on.
	For i = 0 To nNewCnt
		Call GetSimilarsForCurrNewStudent(i)

		Redim arrSimilarsRange(MAX_SIMILARS, 1) ' 0 - PoolStudentID, 1 - nSimilarKoeff
		nSimilCnt = -1
		For j = 0 To nPoolCnt
			If Not IsEmpty(arrSimilarsWork(i, j)) Then
				nPoolStudentID = arrPoolStudents(ind_STUDENTID, j)
				nSimilarKoeff = arrSimilarsWork(i, j)(1) * ( 1 / CDbl(0.01 + arrSimilarsWork(i, j)(0)) + 0.5 ) ' 0.01 + ... - чтобы не делить на 0. В этой формуле учитывается также, что чем больше длина реально сравненной инфо, тем больше этот коэфф. похожести.
				nSimilCnt = nSimilCnt + 1
				Call RangeBySimilarity(arrSimilarsRange, nSimilCnt, nPoolStudentID, nSimilarKoeff)
			End If
		Next

		If nSimilCnt = -1 Then
			arrSimilars(i) = Empty ' there are no similar students from pool for a curr new student
		Else
			' далее nSimilarKoeff не нужны, поэтому делаем результирующий массив из найденных в пуле учеников (ограниченных MAX_SIMILARS), отсортированный по nSimilarKoeff
			nSize = F_Min(nSimilCnt, MAX_SIMILARS)
			Redim arrSimilarsForCurNewStudent(nSize)
			arrSimilars(i) = arrSimilarsForCurNewStudent
			For j = 0 To nSize
				arrSimilars(i)(j) = arrSimilarsRange(j, 0)
				bPoolSimilarsExists = True
			Next
		End If
	Next
	GetPoolSimilars = bPoolSimilarsExists
End Function

Sub RangeBySimilarity(arrSimilarsRange, nSimilCnt, nPoolStudentID, nSimilarKoeff)
	Dim nSize, i, j, nNewSize

	If nSimilCnt = 0 Then
		arrSimilarsRange(0, 0) = nPoolStudentID
		arrSimilarsRange(0, 1) = nSimilarKoeff
		Exit Sub
	End If

	nSize = F_Min(nSimilCnt - 1, MAX_SIMILARS)
	For i = 0 To nSize
		If arrSimilarsRange(i, 1) < nSimilarKoeff Then
			nNewSize = F_Min(nSize + 1, MAX_SIMILARS)
			For j = nNewSize To i + 1 Step -1 ' shift
				arrSimilarsRange(j, 0) = arrSimilarsRange(j - 1, 0)
				arrSimilarsRange(j, 1) = arrSimilarsRange(j - 1, 1)
			Next
			arrSimilarsRange(i, 0) = nPoolStudentID
			arrSimilarsRange(i, 1) = nSimilarKoeff
			Exit Sub
		End If
	Next
	If nSimilCnt <= MAX_SIMILARS Then
		arrSimilarsRange(nSimilCnt, 0) = nPoolStudentID
		arrSimilarsRange(nSimilCnt, 1) = nSimilarKoeff
	End If
End Sub

Sub GetSimilarsForCurrNewStudent(indNewStudent)
	strLastName = arrLastName(indNewStudent)
	Call CompareLastNames(indNewStudent, strLastName)

	strFirstName = arrFirstName(indNewStudent)
	Call CompareFirstMiddleNames(indNewStudent, strFirstName, ind_FIRSTNAME)

	If bMiddleNames Then
		strMiddleName = arrMiddleName(indNewStudent)
		If Not IsDull(strMiddleName) Then
			Call CompareFirstMiddleNames(indNewStudent, strMiddleName, ind_MIDDLENAME)
		End If
	End If

	strGender = arrGender(indNewStudent)
'	Call CompareGenders(indNewStudent, strGender)

	dtBirthday = GetSafeDate(arrBirthday(indNewStudent), Null)
	Call CompareBirthdays(indNewStudent, dtBirthday)

	Call CompareParents(indNewStudent)
End Sub

' Возможна ситуация, когда размерности массивов - arrFLastName, arrFFirstName, arrFMiddleName (arrMLastName, ...)
' не одинаковы. Возможно - это только для случая: 1 Студент + 1 Родитель.
Sub CompareParents(indNewStudent)
	If bFathers Or bMothers Then
		If bFathers Then
			strFLastName = arrFLastName(indNewStudent)
			If Not IsDull(strFLastName) Then
				strFFirstName = ""
				If UBound(arrFFirstName) >= indNewStudent Then strFFirstName = arrFFirstName(indNewStudent)
				strFMiddleName = ""
				If UBound(arrFMiddleName) >= indNewStudent Then strFMiddleName = arrFMiddleName(indNewStudent)
				Call CompareParentNames(indNewStudent, strFLastName, strFFirstName, strFMiddleName, obLanguage("Common","kMaleLet"))
			End If
		End If

		If bMothers Then
			strMLastName = arrMLastName(indNewStudent)
			If Not IsDull(strMLastName) Then
				strMFirstName = ""
				If UBound(arrMFirstName) >= indNewStudent Then strMFirstName = arrMFirstName(indNewStudent)
				strMMiddleName = ""
				If UBound(arrMMiddleName) >= indNewStudent Then strMMiddleName = arrMMiddleName(indNewStudent)
				Call CompareParentNames(indNewStudent, strMLastName, strMFirstName, strMMiddleName, obLanguage("Common","kFemaleLet"))
			End If
		End If
	End If
End Sub

Sub CompareParentNames(indNewStudent, ByVal strLName, ByVal strFName, ByVal strMName, strGender)
	Dim i, j, nPoints, strPoolParentName
	Dim nCompareLen, nLenLName, nLenFName, nLenMName
	Dim nMinPoints, nLenForMinPoints

	Call NormalizeName(strLName)
	Call NormalizeName(strFName)
	Call NormalizeName(strMName)
	nLenLName = Len(strLName)
	nLenFName = Len(strFName)
	nLenMName = Len(strMName)

	For i = 0 To nPoolCnt
		' если продолжаем сравнивать текущего нового ученика и тек. ученика из пула, и при этом у ученика из пула есть родители ...
		If Not IsEmpty(arrSimilarsWork(indNewStudent, i)) And Not IsEmpty(arrPoolStudentsParents(i)) Then
			nMinPoints = -1 ' undef
			nLenForMinPoints = 0
			nPoolParentsCnt = UBound(arrPoolStudentsParents(i), 2)
			For j = 0 To nPoolParentsCnt
				If strGender = CStr(arrPoolStudentsParents(i)(ind_PARENT_GENDER, j)) Then
					' сравнение только в пределах одного пола
					nPoints = CompareNames(strLName, arrPoolStudentsParents(i)(ind_PARENT_LASTNAME, j))
					nCompareLen = nLenLName

					strPoolParentName = arrPoolStudentsParents(i)(ind_PARENT_FIRSTNAME, j)
					If Not IsDull(strPoolParentName) Then
						nPoints = nPoints + CompareNames(strFName, strPoolParentName)
						nCompareLen = nCompareLen + nLenFName
					End If

					If Not IsDull(nLenMName) Then
						strPoolParentName = arrPoolStudentsParents(i)(ind_PARENT_MIDDLENAME, j)
						If Not IsDull(strPoolParentName) Then
							nPoints = nPoints + CompareNames(strMName, strPoolParentName)
							nCompareLen = nCompareLen + nLenMName
						End If
					End If

					If nLenForMinPoints = 0 Or nMinPoints > nPoints Then
						nMinPoints = nPoints
						nLenForMinPoints = nCompareLen
					End If
				End If
			Next

			If nLenForMinPoints > 0 Then ' было хотя бы 1 сравнение родителей
				arrSimilarsWork(indNewStudent, i)(0) = arrSimilarsWork(indNewStudent, i)(0) + nMinPoints
				arrSimilarsWork(indNewStudent, i)(1) = arrSimilarsWork(indNewStudent, i)(1) + nLenForMinPoints / CDbl(PARENT_DECREASE)
			End If

		End If
	Next
End Sub

Sub CompareBirthdays(indNewStudent, dtBirthday)
	Dim i, nPoints, dtPoolBirthday, nDateDiff
	For i = 0 To nPoolCnt
		If Not IsEmpty(arrSimilarsWork(indNewStudent, i)) Then
			dtPoolBirthday = arrPoolStudents(ind_BIRTHDATE, i)
			If Not IsDull(dtPoolBirthday) Then
				dtPoolBirthday = GetSafeDate(dtPoolBirthday, Null)
				nDateDiff = Abs(DateDiff("d", dtBirthday, dtPoolBirthday, 0, 0 ))
				If nDateDiff > 0 Then
					If nDateDiff > MAX_DAY_DIFF Then nDateDiff = MAX_DAY_DIFF
					nPoints = FAILED_BIRTHDAY_POINTS / 2.0 * (1 + nDateDiff / CDbl(MAX_DAY_DIFF))
					' в данном случае nPoints будет в пределах от 0.5 до 1 - по мере увеличения разницы между датами
					arrSimilarsWork(indNewStudent, i)(0) = arrSimilarsWork(indNewStudent, i)(0) + nPoints
				End If
				arrSimilarsWork(indNewStudent, i)(1) = arrSimilarsWork(indNewStudent, i)(1) + FAILED_BIRTHDAY_LEN
			End If
		End If
	Next
End Sub

Sub CompareGenders(indNewStudent, strGender)
	Dim i, strPoolName
	For i = 0 To nPoolCnt
		If Not IsEmpty(arrSimilarsWork(indNewStudent, i)) Then
			If strGender <> CStr(arrPoolStudents(ind_GENDER, i)) Then
				arrSimilarsWork(indNewStudent, i)(0) = arrSimilarsWork(indNewStudent, i)(0) + FAILED_GENDER_POINTS
			End If
			arrSimilarsWork(indNewStudent, i)(1) = arrSimilarsWork(indNewStudent, i)(1) + FAILED_GENDER_LEN
		End If
	Next
End Sub

Sub CompareLastNames(indNewStudent, ByVal strLastName)
	Dim i, nPoints
	Call NormalizeName(strLastName)
	For i = 0 To nPoolCnt
		nPoints = CompareNames(strLastName, arrPoolStudents(ind_LASTNAME, i))
		If nPoints <= MAX_MISTAKES Then
			' continue next comparition and so create array of info for collect nPoints and size of comparing info
			arrSimilarsWork(indNewStudent, i) = Array(nPoints, Len(strLastName))
		Else
			' the first comparition returns a too difference and so do not next comparitions
			arrSimilarsWork(indNewStudent, i) = Empty
		End If
	Next
End Sub

Sub CompareFirstMiddleNames(indNewStudent, ByVal strName, nNameIndex)
	Dim i, nPoints, strPoolName
	Call NormalizeName(strName)
	For i = 0 To nPoolCnt
		If Not IsEmpty(arrSimilarsWork(indNewStudent, i)) Then
			strPoolName = arrPoolStudents(nNameIndex, i)
			If Not IsDull(strPoolName) Then
				nPoints = CompareNames(strName, strPoolName)
				If nPoints <= MAX_MISTAKES Then
					' continue next comparition and edit array of info for collect nPoints and size of comparing info
					arrSimilarsWork(indNewStudent, i)(0) = arrSimilarsWork(indNewStudent, i)(0) + nPoints
					arrSimilarsWork(indNewStudent, i)(1) = arrSimilarsWork(indNewStudent, i)(1) + Len(strName)
				Else
					' this comparition returns a too difference and so do not next comparitions
					arrSimilarsWork(indNewStudent, i) = Empty
				End If
			End If
		End If
	Next
End Sub

Function CompareNames(strNewName, strPoolName)
	Dim strNormName, i, j, nTooDifference
	Dim nLenNew, nLenPool, nLenDiff
	Dim strCurrName, nLen, nDiff, nFind
	Dim bTestNotWanted, bTestGap
	Dim nPoints_NotWanted, nPoints_Changed, nPoints_Gapped
	Dim strCurrLetter, arrLetterArea, strReplaceLetter, strGapLetter
	Dim nPointsForMistake, strPrevLetter, strNextLetter

	strNormName = strNewName
	Call NormalizeName(strNormName)
	nTooDifference = MAX_MISTAKES + 1

	' do a real comparition here
	' do the first common comparition for exact coincidence and for length
	If strNormName = strPoolName Then
		CompareNames = 0 ' exact coincidence
		Exit Function
	End If

	nLenNew = Len(strNormName)
	nLenPool = Len(strPoolName)
	nLenDiff = nLenNew - nLenPool ' 0 - the same lenght; >0 - new more longer; <0 - pool more longer
	If Abs(nLenDiff) > MAX_MISTAKES Then
		CompareNames = nTooDifference
		Exit Function
	End If

	nPoints_NotWanted = nTooDifference
	bTestNotWanted = Abs(nLenDiff - 1) < MAX_MISTAKES ' nLenDiff - 1 = (nLenNew - 1) - nLenPool.
	' Определяем - можно ли тестировать на введённую лишнюю букву - этого делать не имеет смысла, если будет нарушение по длине (с учётом одной проверяемой потенциальной ошибки - поэтому знак <).
	If bTestNotWanted Then
		' 1 - убираем текущую букву у введённого имени, считая её ошибочно введённой, лишней
		For i = 1 To nLenNew
			strCurrLetter = Mid(strNormName, i, 1)
			arrLetterArea = dctLetterArea(strCurrLetter)
			strCurrName = Left(strNormName, i - 1) & Mid(strNormName, i + 1)
			nLen = Len(strCurrName)
			nDiff = nLen - nLenPool ' = nLenDiff - 1

			nPointsForMistake = 1
			If IsArray(arrLetterArea) Then ' если для текущего символа (буквы) действительно определена окрестность др. символов (букв). Например, не для букв окрестность не определена, но вводить их не запрещается.
				' для ошибочно введённых букв в ближайшей окрестности даётся 0.5 балла
				If (i > 1) And (nLenNew > 1) Then
					strPrevLetter = Mid(strNormName, i - 1, 1)
					If IsLetterInArea(strPrevLetter, arrLetterArea) Then
						nPointsForMistake = 0.5
					End If
				End If
				If nPointsForMistake = 1 Then
					If (i <> nLenNew) And (nLenNew > 1) Then
						strNextLetter = Mid(strNormName, i + 1, 1)
						If IsLetterInArea(strNextLetter, arrLetterArea) Then
							nPointsForMistake = 0.5
						End If
					End If
				End If
			End If

			nPoints_NotWanted = CompareModifyAndPoolNames(strCurrName, strPoolName, nDiff, nPointsForMistake)
			If nPoints_NotWanted = nPointsForMistake Then
				If i = 1 Then nPoints_NotWanted = nPoints_NotWanted + ADD_MISTAKE_FOR_FIRST_LETTER
				' найден лучший результат, дальше можно не искать
				CompareNames = nPoints_NotWanted
				Exit Function
			ElseIf nPoints_NotWanted <= MAX_MISTAKES Then
				If i = 1 Then nPoints_NotWanted = nPoints_NotWanted + ADD_MISTAKE_FOR_FIRST_LETTER
				' другие аналогичные проверки на NotWanted - в лучшем случае дадут такой же результат, поэтому больше на NotWanted не проверяем
				Exit For
			End If
		Next
	End If

	' 2 - заменяем текущую букву у введённого имени на другую, считая её ошибочно введённой вместо другой;
	' эта проверка всегда возможна;
	' сначала замена производится на буквы из "ближайшего окружения", затем - на все остальные
	nPoints_Changed = nTooDifference
	For i = 1 To nLenNew
		strCurrLetter = Mid(strNormName, i, 1)
		arrLetterArea = dctLetterArea(strCurrLetter)
		If IsArray(arrLetterArea) Then ' если для текущего символа (буквы) действительно определена окрестность др. символов (букв). Например, не для букв окрестность не определена, но вводить их не запрещается.
			For j = 0 To Ubound(arrLetterArea)
				strReplaceLetter = arrLetterArea(j)
				strCurrName = Left(strNormName, i - 1) & strReplaceLetter & Mid(strNormName, i + 1)

				nPoints_Changed = CompareModifyAndPoolNames(strCurrName, strPoolName, nLenDiff, 0.5)
				If nPoints_Changed = 0.5 Then
					If i = 1 Then nPoints_Changed = nPoints_Changed + ADD_MISTAKE_FOR_FIRST_LETTER
					' найден лучший результат, дальше можно не искать
					CompareNames = nPoints_Changed
					Exit Function
				ElseIf nPoints_Changed <= MAX_MISTAKES Then
					If i = 1 Then nPoints_Changed = nPoints_Changed + ADD_MISTAKE_FOR_FIRST_LETTER
					' другие аналогичные проверки - в лучшем случае дадут такой же результат, поэтому больше на NotWanted не проверяем
					Exit For
				End If
			Next
		End If

		If nPoints_Changed <= MAX_MISTAKES Then
			Exit For
		End If

		For j = 0 To Ubound(arrAlphabet)
			strReplaceLetter = arrAlphabet(j)
			If Not IsLetterInArea(strReplaceLetter, arrLetterArea) Then
				strCurrName = Left(strNormName, i - 1) & strReplaceLetter & Mid(strNormName, i + 1)

				nPoints_Changed = CompareModifyAndPoolNames(strCurrName, strPoolName, nLenDiff, 1)
				If nPoints_Changed = 1 Then
					If i = 1 Then nPoints_Changed = nPoints_Changed + ADD_MISTAKE_FOR_FIRST_LETTER
					' найден лучший результат, дальше можно не искать
					CompareNames = nPoints_Changed
					Exit Function
				ElseIf nPoints_Changed <= MAX_MISTAKES Then
					If i = 1 Then nPoints_Changed = nPoints_Changed + ADD_MISTAKE_FOR_FIRST_LETTER
					' другие аналогичные проверки - в лучшем случае дадут такой же результат, поэтому больше на Changed не проверяем
					Exit For
				End If
			End If
		Next

		If nPoints_Changed <= MAX_MISTAKES Then
			Exit For
		End If
	Next

	nPoints_Gapped = nTooDifference
	bTestGap = Abs(nLenDiff + 1) < MAX_MISTAKES ' nLenDiff + 1 = (nLenNew + 1) - nLenPool.
	' Определяем - можно ли тестировать на пропуск буквы - этого делать не имеет смысла, если будет нарушение по длине (с учётом одной проверяемой потенциальной ошибки - поэтому знак <).
	If bTestGap Then
		' 3 - добавляем одну букву перед текущей буквой у введённого имени, считая её пропущенной. Для последней буквы введённого имени - также добавляем одну букву после неё.
		For i = 1 To nLenNew
			For j = 0 To Ubound(arrAlphabet)
				strGapLetter = arrAlphabet(j)
				strCurrName = Left(strNormName, i - 1) & strGapLetter & Mid(strNormName, i)
				nLen = Len(strCurrName)
				nDiff = nLen - nLenPool ' = nLenDiff + 1

				nPoints_Gapped = CompareModifyAndPoolNames(strCurrName, strPoolName, nDiff, 1)
				If nPoints_Gapped = 1 Then
					If i = 1 Then nPoints_Gapped = nPoints_Gapped + ADD_MISTAKE_FOR_FIRST_LETTER
					' найден лучший результат, дальше можно не искать
					CompareNames = nPoints_Gapped
					Exit Function
				ElseIf nPoints_Gapped <= MAX_MISTAKES Then
					If i = 1 Then nPoints_Gapped = nPoints_Gapped + ADD_MISTAKE_FOR_FIRST_LETTER
					' другие аналогичные проверки - в лучшем случае дадут такой же результат, поэтому больше на Gapped не проверяем
					Exit For
				End If
			Next

			If nPoints_Gapped <= MAX_MISTAKES Then
				Exit For
			End If
		Next

		' добавляем после последней буквы
		For j = 0 To Ubound(arrAlphabet)
			strGapLetter = arrAlphabet(j)
			strCurrName = strNormName & strGapLetter
			nLen = Len(strCurrName)
			nDiff = nLen - nLenPool ' = nLenDiff + 1

			nPoints_Gapped = CompareModifyAndPoolNames(strCurrName, strPoolName, nDiff, 1)
			If nPoints_Gapped = 1 Then
				If i = 1 Then nPoints_Gapped = nPoints_Gapped + ADD_MISTAKE_FOR_FIRST_LETTER
				' найден лучший результат, дальше можно не искать
				CompareNames = nPoints_Gapped
				Exit Function
			ElseIf nPoints_Gapped <= MAX_MISTAKES Then
				If i = 1 Then nPoints_Gapped = nPoints_Gapped + ADD_MISTAKE_FOR_FIRST_LETTER
				' другие аналогичные проверки - в лучшем случае дадут такой же результат, поэтому больше на Gapped не проверяем
				Exit For
			End If
		Next

	End If

	' смотрим на наименьшую ошибку
	If (nPoints_NotWanted < nTooDifference) Or (nPoints_Changed < nTooDifference) Or (nPoints_Gapped < nTooDifference) Then
		CompareNames = F_Min(nPoints_NotWanted, F_Min(nPoints_Changed, nPoints_Gapped))
	Else
		CompareNames = nTooDifference
	End If
End Function

Function F_Min(n1, n2)
	F_Min = IIf(n1 <= n2, n1, n2)
End Function

Function CompareModifyAndPoolNames(strModifyName, strPoolName, nLenDiff, nPointsForMistake)
	Dim nFind
	If nLenDiff > 0 Then
		nFind = InStr(strModifyName, strPoolName)
	Else
		nFind = InStr(strPoolName, strModifyName)
	End If
	If nFind > 0 Then
		CompareModifyAndPoolNames = nPointsForMistake + Abs(nLenDiff) ' присваиваем баллы за ошибку + баллы за возможное несовпадение длинны (по 1 за каждую лишнюю/недостающую букву, т.е. Abs(nLenDiff))
	Else
		CompareModifyAndPoolNames = MAX_MISTAKES + 1 ' not founnd
	End If
End Function

Function IsLetterInArea(strLetter, arrArea)
	Dim i
	IsLetterInArea = False
	If Not IsArray(arrArea) Then
		Exit Function
	End If
	For i = 0 To Ubound(arrArea)
		If strLetter = arrArea(i) Then
			IsLetterInArea = True
			Exit Function
		End If
	Next
End Function

Sub NormalizeName(valName)
	Dim i, nUbound
	Dim strFind, strReplacement
	Dim str
	
	str = GetSafeStr(valName, -1, "")
	str = UCase(str)
	If IsArray(arrReplaceLetters) Then
		nUbound = UBound(arrReplaceLetters)
		For i = 0 To nUbound Step 2
			strFind = arrReplaceLetters(i)
			If (i + 1) <= nUbound Then
				strReplacement = arrReplaceLetters(i + 1)
				str = Replace(str, strFind, strReplacement)
			End If
		Next
	End If
'	str = Replace(str, "Ё", "Е")
	valName = str
End Sub
%>

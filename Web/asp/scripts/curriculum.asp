<% ' © 2007-2008 IRTech. All rights reserved.

Const kIUPLevelSize = 4

Dim minGrade, maxGrade
Dim nFilterGradeMin, nFilterGradeMax

Sub GetCurriculumColumns(nTermID, nProfileID, nDirectionID, theArrGrades, theArrProfiles, theNPCount, theArrClasses)
' form ordered sequence of pairs (ProfileID.GradeID)
	Dim nGSSize
	Dim i,k,n
	Dim objCmd_Classes, objRs_Classes, arrProfileGrade
	Dim rsProfileGrade

	Set rsProfileGrade = objNSNET.GetGradeProfileList2(-1, nProfileID, strSchoolID)

	If rsProfileGrade.EoF Then
		GenerateError obLanguage("SetupSchoolCalendar","kErrEmptyProfileList")
	Else
		arrProfileGrade = rsProfileGrade.GetRows()
	End If
	
	nGSSize = Ubound(arrProfileGrade, 2) + 1
	ReDim aGrades(nGSSize * (maxGrade + 1)) ' (nGSSize * maxGrade) - было не правильно, т.к. если включать 0 параллель, то может не хватить размерности. Например, пусть профилей 2, но включена только 0 параллель. Тогда (2 * 0) = 0 - явно недостаточно!
	ReDim aProfiles(nGSSize * (maxGrade + 1))
	ReDim aClasses(nGSSize * (maxGrade + 1), 1)
	
	nTermID = CLng(nTermID)
	Set objCmd_Classes = objNSNET.GetGradeProfileClasses_Prepare(nTermID, nDirectionID)

	n = 0
	For k = 0 To nGSSize-1
		For i = 0 To minGrade-1
			arrProfileGrade(2, k) = arrProfileGrade(2, k) \ 2
		Next
		For i = minGrade To maxGrade
			If (arrProfileGrade(2, k) Mod 2 <> 0)  Then

				If nTermID <= 0 Then
					' Это для Визарда (для шаблона) - нужны только профили и параллели
					aProfiles(n) = arrProfileGrade(0, k)
					aGrades(n) = i
					n = n + 1
				Else
					' Это для реального учебного плана - профили и параллели нужны только для существующих классов
					Set objRs_Classes = objNSNET.GetGradeProfileClasses_Execute(objCmd_Classes, i, arrProfileGrade(0, k))
					If Not objRs_Classes.EOF Then
						' Запоминаем в массивы профилей и параллелей, только если есть соответствующие реальные классы
						aProfiles(n) = arrProfileGrade(0, k)
						aGrades(n) = i

						aClasses(n, 0) = objRs_Classes.GetRows(,,Array("CLASSID", "CLASSNAME"))
						aClasses(n, 1) = UBound(aClasses(n, 0), 2) + 1 ' save cnt

						n = n + 1
					End If
				End If
			End If
			arrProfileGrade(2, k) = arrProfileGrade(2, k) \ 2
		Next
	Next

	Call objNSNET.DisposeCommand(objCmd_Classes)
	theNPCount = n
	theArrGrades = aGrades
	theArrProfiles = aProfiles
	theArrClasses = aClasses
End Sub

Function GetAvailableColumns(transaction, aGrades, nPCount, lngSchoolYearID, lngComponentID )
	Dim oRs

	Set oRs = objNSNET.GetGradesForComponent_WT(transaction, lngSchoolYearID, lngComponentID)'	Если IsEmpty(transacion) то она создаётся в методе
	GetAvailableColumns = GetAvailableColumnsBase(transaction, aGrades, nPCount, lngSchoolYearID, lngComponentID, oRs)
End Function

Function GetAvailableColumnsBase(transaction, aGrades, nPCount, lngSchoolYearID, lngComponentID, oRs)
	Dim arrIsAvailable, k, n

	If nPCount > 0 Then ReDim arrIsAvailable(nPCount - 1) Else ReDim arrIsAvailable(-1)

	For n = 0 To nPCount - 1 : arrIsAvailable(n) = False : Next
	Do While Not oRs.EOF
		k =  CLng(oRs("GRADEID"))

		For n = 0 To nPCount - 1
			If aGrades(n) = k Then arrIsAvailable(n) = True
		Next

		oRs.MoveNext
	Loop

	oRs.Close
	Set oRs = Nothing
	GetAvailableColumnsBase = arrIsAvailable
End Function


Sub GetCurriculumColumnsIUP( theArrGrades, theArrProfiles, theNPCount, theArrClasses )
' form ordered sequence of pairs (ProfileID.GradeID)
	Dim nGSSize
	Dim i,k,n,j
	Dim objIupLevelsRs
	Dim arrIUPGrades, arrLevels, arrGradeLevels
	
	arrIUPGrades = objNSNET.GetGradeIUPComponentList(strTermID).GetRows()
	If Not IsArray(arrIUPGrades) Then
		'GenerateError obLanguage("SetupSchoolCalendar","kErrEmptyIUPComponentList")
		theArrGrades = Empty
		Exit Sub
	End If

	nGSSize = Ubound(arrIUPGrades, 2) + 1
	ReDim aProfiles(nGSSize)
	ReDim aGrades(nGSSize)
	ReDim aClasses(nGSSize, 2)

	Set objIupLevelsRs = objNSNET.GetIUPLevelList()
	arrLevels = objIupLevelsRs.GetRows(,,Array("LEVELID", "SHORTNAME", "LEVELNAME"))
	If Not IsArray(arrLevels) Then GenerateError obLanguage("Common","kUnexpErr")
	n = 0
	For k = 0 To nGSSize - 1
		aProfiles(k) = 0
		i = arrIUPGrades(0, k) ' i - cur grade
		If i >= minGrade And i <= maxGrade Then
			aGrades(n) = i
			aClasses(n, 0) = arrLevels
			For j = 0 To Ubound(aClasses(n, 0), 2)
				aClasses(n, 0)(0, j) = i & "_" & aClasses(n, 0)(0, j)
			Next
			aClasses(n, 1) = kIUPLevelSize ' save cnt
			aClasses(n, 2) = i
			n = n + 1
		End If
	Next

	theNPCount = n
	theArrGrades = aGrades
	theArrProfiles = aProfiles
	theArrClasses = aClasses
End Sub

Function GetAvailableColumnsIUP(transaction, aGrades, nPCount, lngSchoolYearID, lngComponentID)
	Dim oRs
	
	Set oRs = objNSNET.GetGradesForComponentIUP_WT(transaction, lngSchoolYearID, lngComponentID, strTermID)'	Если IsEmpty(transacion) то она создаётся в методе
	GetAvailableColumnsIUP = GetAvailableColumnsBase(transaction, aGrades, nPCount, lngSchoolYearID, lngComponentID, oRs)
End Function%>
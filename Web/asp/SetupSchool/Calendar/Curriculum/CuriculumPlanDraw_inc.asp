<% ' © 2007-2015 IRTech. All rights reserved.

Dim objCuriculum, objComponentListAll, objSchoolSubjectList
Dim objRs, i, j, k, nSubj, nComp, bMoveNext
Dim strCompID, strSubjID, strOldCompID, strOldSubjID, strCuriculumGradeID, strValue
Dim arrIsAvailableColumn, arrCuriculumGrades, arrProfiles, nPCount, lngProfileID, nPrRecord
Dim bIsFieldExists, bIsSubjectExists
Dim strHeader, strComponentName, strSubjName
Dim nCuriculum_Grades, nCuriculum_Grade, nCuriculum_View, nCuriculum_SubjGroups, bCuriculum_SubjGroups
Dim arrClasses, nClassRecord
Dim nClassRowCnt, bClassesExists, nClassRecordCurr
Dim bViewByGrade ' то же самое, что nCuriculum_View=0, только короче
Dim arrGradeClassesValues
Dim arrCompClassNames
Dim bPreSchool, arrPreSchoolGrades, bAddSchool
Dim strAttr, kAttr
Dim nColsCount
Dim nRowSpan, nColWidth
Dim nScrolBarWidth
Dim bIsIUPCuriculum
Dim bShowProfilesFilter
Dim bShowDirectionsFilter


Sub InitCuriculum()
	bIsIUPCuriculum = GetSafeBool(obTokenMgr.GetData(strToken, stIsIUPCuriculum), Null)

	If IsDull(Request("Curiculum_Grades")) Then
		nCuriculum_Grades = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grades), -1)
	Else
		nCuriculum_Grades = GetSafeLng(Request("Curiculum_Grades"), Null)
	End If
	If IsDull(Request("Curiculum_Grade")) Then
		nCuriculum_Grade = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grade), -1)
	Else
		nCuriculum_Grade = GetSafeLng(Request("Curiculum_Grade"), Null)
	End If

	Call GetCuriculumView()

	bViewByGrade = (nCuriculum_View = 0)
	If IsDull(Request("Curiculum_SubjGroups")) Then
		nCuriculum_SubjGroups = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_SubjGroups), 1)
	Else
		nCuriculum_SubjGroups = GetSafeLng(Request("Curiculum_SubjGroups"), Null)
	End If
	If nCuriculum_View <> 1 Or nCuriculum_SubjGroups <> 1 Then readonly = True
	If bIsEMForSchool Or obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then readonly = True
End Sub

Sub InitMain
	Dim nProfilesCount

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If

	Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)

	nFilterGradeMin = minGrade
	nFilterGradeMax = maxGrade
	If nCuriculum_Grades <> -1 Then
		Set objGrades = objNSNET.GetStageGradeList(strCurrYearID, nCuriculum_Grades, strFunctionalityType, True)
		If nCuriculum_Grade >= 0 Then
			nCuriculum_Grade = objNSNET.GetSafeStageGradeID(nCuriculum_Grade, strCurrYearID, nCuriculum_Grades )
		End If
		'ТЕПЕРЬ КОРРЕКТНО ВЫВОДИТ ДАННЫЕ ПО 0 ПАРАЛЛЕЛИ

		If nCuriculum_Grade >= 0 Then
			nFilterGradeMin = nCuriculum_Grade
			nFilterGradeMax = nCuriculum_Grade
		Else
			Call InitSchoolSettings( objNSNET )
			If nCuriculum_Grades = 1 Then ' Младшая
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeJunior_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeJunior_Max)
			ElseIf nCuriculum_Grades = 2 Then ' Средняя
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeMiddle_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeMiddle_Max)
			ElseIf nCuriculum_Grades = 3 Then ' Старшая
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeSenior_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeSenior_Max)
			Else
				GenerateError obLanguage("Common","kInvalidParameter")
			End If
		End If
		nFilterGradeMin = CLng(nFilterGradeMin)
		nFilterGradeMax = CLng(nFilterGradeMax)
		If minGrade < nFilterGradeMin Then minGrade = nFilterGradeMin
		If maxGrade > nFilterGradeMax Then maxGrade = nFilterGradeMax
	End If

	bShowProfilesFilter = False
	bShowDirectionsFilter = False
	strProfileID = "-1"
	strDirectionID = "-1"
	If Not bIsIUPCuriculum Then
		If InitCuriculumProfiles(strTermID, minGrade, maxGrade) Then
			nProfilesCount = UBound(arrProfilesRs, 2) + 1
			If nProfilesCount > 1 Then
				bShowProfilesFilter = True
			Else
				strProfileID = "-1"
				bShowProfilesFilter = False
			End If
		End If

		If bAddSchool Then
			bShowDirectionsFilter = InitCuriculumDirections(strTermID, minGrade, maxGrade, strProfileID)
		End If
	End If
	Call obTokenMgr.SetData(strToken, stShowProfilesFilter, bShowProfilesFilter)
	Call obTokenMgr.SetData(strToken, stShowDirectionsFilter, bShowDirectionsFilter)

	Set objSchoolSubjectList = objNSNET.GetSubjectListBySchoolId(strSchoolID)

	Call SpecialMain()

	If bPreSchool Then bCuriculum_SubjGroups = False Else bCuriculum_SubjGroups = True
	Call SetupTableDrawParams()
End Sub

Sub SetupTableDrawParams()
	nScrolBarWidth = IIf( isIE,18,20)
End Sub

Sub WriteStateCmn()
	'Call WriteTerm()
	Call obTokenMgr.SetData(strToken, "nScrolBarWidth", nScrolBarWidth)
	Call obTokenMgr.SetData(strToken, stCuriculum_Grades, nCuriculum_Grades)
	Call obTokenMgr.SetData(strToken, stCuriculum_Grade, nCuriculum_Grade)
	Call WriteCuriculumView()
	Call obTokenMgr.SetData(strToken, stCuriculum_SubjGroups, nCuriculum_SubjGroups)
End Sub

' Возвращает вариант записи для readonly
' bRO не всегда = readonly
Function PrintHours(strVal, nClassRecCurr, nClassRecMax, bRO)
	Dim strRet, bEquals, strVals, strVal_0, strValCurr

	If bViewByGrade Then ' readonly = True here!
		strRet = ""
		If nClassRecCurr = 0 Then
			ReDim arrGradeClassesValues(nClassRecMax)
		End If

		arrGradeClassesValues(nClassRecCurr) = GetSafeStr(strVal, -1, "-")
		If nClassRecCurr = nClassRecMax Then
			strVal_0 = GetSafeStr(arrGradeClassesValues(0), -1, "-")
			strVals = strVal_0
			bEquals = True

			For i = 1 To nClassRecMax
				strValCurr = GetSafeStr(arrGradeClassesValues(i), -1, "-")
				If bEquals Then
					If strVal_0 <> strValCurr Then bEquals = False
				End If
				strVals = strVals & " " & strValCurr
			Next

			If bEquals Then
				strVals = strVal_0
				If strVals = "-" Then strVals = ""
			End If

			strRet = "<td nowrap" & IIf(bEquals, strAttr, " class=""xtl"" ") & ">" & DB2HTML(strVals) &"</td>"
			Response.Write strRet
		End If
	Else
		strRet = "<td " & strAttr & ">" & DB2HTML(strVal) & "</td>"
		If bRO Then
			Response.Write strRet
		Else
			%><td<%=strAttr%> class="input-cell"><span><%=DB2Html(strVal)%></span></td><%
		End If
	End If

	PrintHours = strRet
End Function

Sub PrintTableHeader(strSubjectFields, bAddTable)
	Dim strCell, nClassCnt, arrGradeClasses
	Dim strCellClass
	Dim bShowGradeRow

	bShowGradeRow = Not (bPreSchool And Not bViewByGrade)

	nRowSpan = IIf(bViewByGrade, 2, 3)
	
	If Not bShowGradeRow Then
		nRowSpan = nRowSpan - 1 
	End If
	%>

	<tr class="header-row">
		<th <%=IIF(bAddTable,"","id='secol'") %> rowspan="<%=nRowSpan%>"><%=obLanguage("Common","kSubject")%></th><%
	nColsCount = 2

	lngProfileID = arrProfiles(0)

	k = GetClassRowCnt(0)
	strCell = ""

	'отрисовка профилей
	If Not bIsIUPCuriculum Then
		For i = 1 To nPCount - 1
			If arrProfiles(i) = lngProfileID Then
				k = k + GetClassRowCnt(i)
			Else
				strCell = strCell & "<th class=""text-center"" colspan=""" & k & """ width=""1"">" & DB2HTML_BR(objNSNET.GetProfileName(lngProfileID)) & "</th>"
				lngProfileID = arrProfiles(i)
				k = GetClassRowCnt(i)
			End If
		Next
		strCell = strCell & "<th class=""text-center"" colspan=""" &k& """ width=""1"">" & DB2HTML_BR(objNSNET.GetProfileName(lngProfileID)) & "</th></tr>"
		Response.Write strCell
	End If

	'отрисовка годов обучения
	If bShowGradeRow Then
		strCell = "<tr class=""grade-row"">" 'в ИУП параллели входят в header-row
		For i = 0 To nPCount-1
			strCellClass = ""
			If bIsIUPCuriculum Then
				If dctInvalidIUPGrades.Exists(arrCuriculumGrades(i)) Then
					strCellClass = "no-iup-classes"
				End If
			End If
			strCell = strCell & "<th class=""text-center " & strCellClass & """ colspan=""" & GetClassRowCnt(i) & """>"
			If bPreSchool And arrCuriculumGrades(i) >= 0 And arrCuriculumGrades(i) <= 8 Then
				
				strCell = strCell & VText(DB2HTML(arrPreSchoolGrades(arrCuriculumGrades(i))))
			Else
				strCell = strCell & arrCuriculumGrades(i)
			End If
			If bViewByGrade And Not bAddTable Then nColsCount = nColsCount + 1
			strCell = strCell & "</th>"
		Next
		Response.Write strCell & "</tr>"
	End If

	'отрисовка классов
	If Not bViewByGrade Then
		Response.Write "<tr class=""class-row"">"
		strCell = ""
		For i = 0 To nPCount-1
			strCellClass = ""
			If bIsIUPCuriculum Then
				If dctInvalidIUPGrades.Exists(arrCuriculumGrades(i)) Then
					strCellClass = "no-iup-classes"
				End If
			End If
			arrGradeClasses = arrClasses(i, 0)
			If IsArray(arrGradeClasses) Then
				For j = 0 To Ubound(arrGradeClasses, 2)

					strCell = strCell & "<th nowrap class=""vertical " & strCellClass & """>" & VText(DB2HTML(arrGradeClasses(1, j))) & "</th>"
					If Not bAddTable Then nColsCount = nColsCount + 1
				Next
			Else
				strCell = strCell & "<th class=""" & strCellClass & """>&nbsp;</th>"
				If Not bAddTable Then nColsCount = nColsCount + 1
			End If
		Next
		Response.Write strCell & "</tr>"
	End If
End Sub

Function VText(strText)
	VText = "<small class=""text-vertical text-compact""><i>" & strText & "</small>"
End Function

Function GetClassNumInGrade(arrGradeClasses, nClassID)
	Dim i

	For i = 0 To UBound(arrGradeClasses, 2)
		If CStr(arrGradeClasses(0, i)) = CStr(nClassID) Then
			GetClassNumInGrade = i
			Exit Function
		End If
	Next

	GenerateError obLanguage("SetupSchoolCurPlan","kErrClassNotFound",strFunctionalityType)
End Function

Function GetClassRowCnt(i)
	Dim cnt

	cnt = 1
	If Not bViewByGrade Then
		If IsArray(arrClasses(i, 0)) Then cnt = arrClasses(i, 1)
	End If

	GetClassRowCnt = cnt
End Function

Function GetGradesCnt(arr)
	Dim cnt, i

	For i = 0 To UBound(arr)
		If IsEmpty(arr(i)) Then
			Exit For
		End If
	Next

	GetGradesCnt = i
End Function
%>
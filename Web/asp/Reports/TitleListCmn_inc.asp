<!-- #INCLUDE FILE="ReportService_inc.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Const kRelay = 2
'Const kClassType_Integr = 5
Const kClassType_SKO = 6

'Const kEducProgramm_SKO = "СКО"
'Const kEducProgramm_BaseCommon = "основная общеобразовательная%" ' Все др. сейчас - это "СКО"
Const kEducForm_FullTime = "очная"
'Const kEducForm_Individ = "индивидуальная"
Const kEducForm_IndividCommon = "индивидуальная%"
Const kEducForm_FullTimeDistanceCommon = "очно-заочная%"
Const kEducForm_Distance = "заочная"
Const kEducForm_Self = "самообразование"
Const kEducForm_Family = "семейное образование"
Const kEducForm_Externat = "экстернат"

Dim nGradeJuniorMin, nGradeJuniorMax, nGradeMiddleMin, nGradeMiddleMax, nGradeSeniorMin, nGradeSeniorMax
Dim arrData
Dim dtEndDate, strEndDate
Dim strTotalByAll
Dim bTotalBySchools
Dim strID_EducForm_FullTime
Dim strID_EducForm_Self, strID_EducForm_Family, strID_EducForm_Externat

Sub GetParamsInfo()
	Dim transaction

	transaction = objNSNET.GetTransaction()

	strID_EducForm_FullTime = objNSNET.GetUserInfoListItem_WT(transaction, 1041, -1, kEducForm_FullTime) & ""

	objNSNET.RollbackTransaction(transaction)

	If strID_EducForm_FullTime = "0" Then 
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
End Sub

Function GetReportData(arrRepData, strSYID)
	Dim objData
	Dim i, j
	
	GetReportData = False
	Set objData = objNSNET.GetClassesCountByGrade(strSYID, dtEndDate)
	If objData.EOF Then Exit Function

	Call Rs2Array(objData, arrRepData, 0)

	Set objData = objNSNET.GetClassesCountByGradeForRelay(strSYID, kRelay, dtEndDate)
	Call Rs2Array(objData, arrRepData, 1)
	
	Set objData = objNSNET.GetStudentsCountByGrade(strSYID, dtEndDate, kEducForm_Self, kEducForm_Family, kEducForm_Externat)
	Call Rs2Array(objData, arrRepData, 2)

	Set objData = objNSNET.GetStudentsCountByGradeForRelay(strSYID, kRelay, dtEndDate, kEducForm_Self, kEducForm_Family, kEducForm_Externat)
	Call Rs2Array(objData, arrRepData, 3)

	Set objData = objNSNET.GetStudentsOrClassesCountByGrade_Integr(strSYID, kClassType_SKO, dtEndDate, strID_EducForm_FullTime, True)
	Call Rs2Array(objData, arrRepData, 12)

	Set objData = objNSNET.GetStudentsOrClassesCountByGrade_Integr(strSYID, kClassType_SKO, dtEndDate, strID_EducForm_FullTime, False)
	Call Rs2Array(objData, arrRepData, 13)

	Set objData = objNSNET.GetStudentsCountByGradeForEducForm(strSYID, dtEndDate, kEducForm_IndividCommon)
	Call Rs2Array(objData, arrRepData, 14)

	Set objData = objNSNET.GetStudentsCountByGradeForEducProgrammAndEducForm(strSYID, dtEndDate, kEducForm_IndividCommon)
	Call Rs2Array(objData, arrRepData, 15)

	Set objData = objNSNET.GetStudentsCountByGradeForEducForm(strSYID, dtEndDate, kEducForm_FullTimeDistanceCommon)
	Call Rs2Array(objData, arrRepData, 16)

	Set objData = objNSNET.GetStudentsCountByGradeForEducForm(strSYID, dtEndDate, kEducForm_Distance)
	Call Rs2Array(objData, arrRepData, 17)

	Set objData = objNSNET.GetClassesCountByGradeAndClassType(strSYID, dtEndDate)
	Call Rs2ArrayByType(objData, arrRepData, True)

	Set objData = objNSNET.GetStudentsCountByGradeAndClassType(strSYID, dtEndDate, strID_EducForm_FullTime, kClassType_SKO)
	Call Rs2ArrayByType(objData, arrRepData, False)

	Set objData = objNSNET.GetStudentsCountByGradeForEducForm(strSYID, dtEndDate, kEducForm_Self)
	Call Rs2Array(objData, arrRepData, 24)

	Set objData = objNSNET.GetStudentsCountByGradeForEducForm(strSYID, dtEndDate, kEducForm_Family)
	Call Rs2Array(objData, arrRepData, 25)

	Set objData = objNSNET.GetStudentsCountByGradeForEducForm(strSYID, dtEndDate, kEducForm_Externat)
	Call Rs2Array(objData, arrRepData, 26)

	GetReportData = True
End Function

Sub Rs2ArrayByType(objRs, arr, bClasses)
	Dim nGrade, nCnt
	Dim ind, nType
	Dim ind2, bIsIUP

	While Not objRs.EOF
		nGrade = GetSafeLng(objRs("GRADE"), Null)
		nCnt = GetSafeLng(objRs("CNT"), 0)
		nType = GetSafeLng(objRs("TYPEID"), 0)
		ind = GetIndex(nType, bClasses)
		If ind > -1 Then
			arr(ind, nGrade) = arr(ind, nGrade) + nCnt
			If ind = 8 Or ind = 9 Then
				bIsIUP = (GetSafeLng(objRs("IUP_CLASS"), 0) <> 0)
				If ind = 8 Then
					ind2 = IIf(bIsIUP, 22, 20)
				Else
					ind2 = IIf(bIsIUP, 23, 21)
				End If
				arr(ind2, nGrade) = arr(ind2, nGrade) + nCnt
			End If
		End If
		objRs.MoveNext
	WEnd
End Sub

Function GetIndex(nType, bClasses)
	Dim ind

	ind = -1
	Select Case nType
	Case 1: ind = IIf(bClasses, 4, 5)
	Case 2: ind = IIf(bClasses, 6, 7)
	Case 3, 4, 5: ind = IIf(bClasses, 8, 9)
	Case 6: ind = IIf(bClasses, 10, 11)
	Case Else ind = -1
	End Select
	GetIndex = ind
End Function

Sub Rs2Array(objRs, arr, ind)
	Dim nGrade, nCnt

	While Not objRs.EOF
		nGrade = GetSafeLng(objRs("GRADE"), Null)
		nCnt = GetSafeLng(objRs("CNT"), 0)
		arr(ind, nGrade) = arr(ind, nGrade) + nCnt
		objRs.MoveNext
	WEnd
End Sub

Function GetStepTitle(nStep)
	Dim strStepTitle
	If nStep = 1 Then
		strStepTitle = nGradeJuniorMin & "-" & nGradeJuniorMax
	ElseIf nStep = 2 Then
		strStepTitle = nGradeMiddleMin & "-" & nGradeMiddleMax
	ElseIf nStep = 3 Then
		strStepTitle = nGradeSeniorMin & "-" & nGradeSeniorMax
	Else
		strStepTitle = ""
	End If
	GetStepTitle = "Итого" & " " & CStr(strStepTitle)
End Function

Function GetStep(nStartGrade, nEndGrade, arrStepSumm)
	Dim strStep, i, j, nCnt
	
	For i = nStartGrade To nEndGrade
		strStep = strStep & "<tr class=""text-bottom""><td>" & i & "</td>"
		For j = 0 To 26
			If j = 18 Or j = 19 Then
				strStep = strStep & "<td>&nbsp;</td>"
			Else
				nCnt = arrData(j, i)
				strStep = strStep & "<td>" & nCnt & "</td>"
				arrStepSumm(j) = arrStepSumm(j) + nCnt
			End If
		Next
		strStep = strStep & "</tr>"
	Next
	GetStep = strStep
End Function

Function ShowStepSumm(nStep, arrStepSumm, arrSchoolSumm)
	Dim strStepSumm, i, nCnt
	
	strStepSumm = strStepSumm & _
		"<tr class=""subtotals""><td class=""text-nowrap"">" & GetStepTitle(nStep) & "</td>"
	For i = 0 To 26
		If i = 18 Or i = 19 Then
			strStepSumm = strStepSumm & "<td>&nbsp;</td>"
		Else
			nCnt = arrStepSumm(i)
			strStepSumm = strStepSumm & "<td>" & nCnt & "</td>"
			arrSchoolSumm(i) = arrSchoolSumm(i) + nCnt
		End If
	Next
	strStepSumm = strStepSumm & "</tr>"
	ShowStepSumm = strStepSumm
End Function

Function ShowSchoolSumm(arrSchoolSumm)
	Dim strSchoolSumm, i, nCnt
	
	strSchoolSumm = strSchoolSumm & _
		"<tr class=""totals""><td>" & strTotalByAll & "</td>"
	For i = 0 To 26
		If i = 18 Or i = 19 Then
			strSchoolSumm = strSchoolSumm & "<td>&nbsp;</td>"
		Else
			nCnt = arrSchoolSumm(i)
			strSchoolSumm = strSchoolSumm & "<td>" & nCnt & "</td>"
		End If
	Next
	strSchoolSumm = strSchoolSumm & "</tr>"
	ShowSchoolSumm = strSchoolSumm
End Function

Function GetReportTable()
	GetReportTable = GetReportTable_Sum()
End Function

Function GetReportTable_Sum()
	Dim i
	Dim nPrevGrade, nPrevStep, nCurGrade, nCurStep
	Dim strAverage
	Dim arrStepSumm1, arrStepSumm2, arrStepSumm3, arrSchoolSumm
	
	ReDim arrStepSumm1(26), arrStepSumm2(26), arrStepSumm3(26), arrSchoolSumm(26)
	For i = 0 To 26
		arrStepSumm1(i) = 0
		arrStepSumm2(i) = 0
		arrStepSumm3(i) = 0
		arrSchoolSumm(i) = 0
	Next
	strReport = GetTableHeader()

	strReport = strReport & GetStep(nGradeJuniorMin, nGradeJuniorMax, arrStepSumm1)
	strReport = strReport & ShowStepSumm(1, arrStepSumm1, arrSchoolSumm)
	strReport = strReport & GetStep(nGradeMiddleMin, nGradeMiddleMax, arrStepSumm2)
	strReport = strReport & ShowStepSumm(2, arrStepSumm2, arrSchoolSumm)
	strReport = strReport & GetStep(nGradeSeniorMin, nGradeSeniorMax, arrStepSumm3)
	strReport = strReport & ShowStepSumm(3, arrStepSumm3, arrSchoolSumm)
	strReport = strReport & ShowSchoolSumm(arrSchoolSumm)

	strReport = strReport & "</table>"
	strReport = strReport & GetBottom()

	GetReportTable_Sum = strReport
End Function

Function th(rowspan,colspan,txt)
	rowspan = GetSafeID(rowspan, "1")
	colspan = GetSafeID(colspan, "1")
	If rowspan > "1" Then rowspan = " rowspan='"&rowspan&"'" Else rowspan=""
	If colspan > "1" Then colspan = " colspan='"&colspan&"'"  Else colspan=""
	th = "<th" & rowspan & colspan & ">" & txt & "</th>"
End Function

Function GetTableHeader()
	Dim sTotal, second, classes, pupils, pupilsTH, classespupils, cp1011, gnums, i
	sTotal = th(1,1,obLanguage("Reports","kTotalNumber"))
	second= sTotal & th(1,1,"Во 2 смену")
	pupils = obLanguage("Common","kStudents_r_b", 2)
	pupilsTH = th(1,1,pupils)
	classes = obLanguage("Common","kClasses_b", 2)
	classespupils = th(1,1,classes) & pupilsTH
	cp1011 = th(1,1,classes & " (из&nbsp;гр.10)") & th(1,1,pupils & " (из&nbsp;гр.11)")

	GetTableHeader = "<table class=""table-print-num""><tr>" 
	If bTotalBySchools Then
		GetTableHeader = GetTableHeader & GetManagementColumn(4)
		GetTableHeader = GetTableHeader & th(4,2,obLanguage("ReportMovement","kSchoolNo"))
	Else
		GetTableHeader = GetTableHeader & th(4,1,classes)
	End If
	gnums=""
	For i = 2 to 28
		gnums = gnums & th(1,1,i)
	Next
	GetTableHeader = GetTableHeader & _
		th(2,2,"Классов-<br />комплектов" ) & _
		th(2,2, pupils ) & _
		th(1,14, "Из общего количества" ) & _
		th(2,2, "ГПД" ) & _
		th(1,4, "Из общего количества<br />профильных классов" ) & _
		th(1,3, "Перешедшие на форму обучения<br />вне школы" ) & _
	"</tr><tr>" & _
		th(1,2, "Общеобразовательных классов" ) & _
		th(1,2, "Классов&nbsp;углубленного изучения предметов" ) & _
		th(1,2, "Профильных классов" ) & _
		th(1,2, "Специальных (коррекционных) классов" ) & _
		th(1,2, "Обучающихся интегрированно" ) & _
		th(1,2, "Находящиеся на индив. обуч." ) & _
		"<th>" & "Обучающихся очно-заочно" & "</th>" & _
		"<th>" & "Обучающихся заочно" & "</th>" & _
		th(1,2, "Обучающихся по профилям" ) & _
		th(1,2, "Обучающихся по индив. уч. планам" ) & _
		"<th>" & "Само-образование" & "</th>" & _
		"<th>" & "Семейное образование" & "</th>" & _
		"<th>" & "Экстернат" & "</th></tr>" & _
	"</tr><tr>"& gnums  & "</tr><tr>" & _
		second & second & _
		classespupils & classespupils & classespupils & classespupils & classespupils & _
		sTotal & _
		"<th>" & "Из&nbspних<br />с&nbspПМПК" & "</th>" & _
		pupilsTH & pupilsTH & _
		th(1,1,obLanguage("Common","kClasses_b", 1)) & _
		pupilsTH & _
		cp1011 & cp1011 & _
		pupilsTH & pupilsTH & pupilsTH & _
		"</tr>"
End Function
%>

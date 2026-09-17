<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

' Специализация
Const kSpecial_Code_01 = 101 ' Без ограничений (I группа здоровья)

Dim strRepType
Dim dtEndDate, strEndDate
Dim objDouGroups
Dim arrSteps

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNDouComplectAddInfo")
End Function

Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Reports","kTypeReport"), IIf(strRepType = "1", obLanguage("Reports","kWithDirectedToGroup"), obLanguage("Reports","kWithoutDirectedToGroup")), _
		obLanguage("Common","kDate"), strEndDate)
End Function

Sub specialRead()
	strRepType = GetSafeStrParam(Request("ReportType"), GetSafeStrParam(obTokenMgr.GetData(strToken, "stRepType_DouComplect"), "1"))
	ReadSingleDate
End Sub

Sub specialMain()
	bOK = True
	Set objDouGroups = objNSNET.GetDouComplectAddInfo(strCurrYearID, dtEndDate)
	If objDouGroups.EOF Then
		strErrMsg = obLanguage("Reports","kNoClasses",strFunctionalityType)
		bOK = False
		strReport = GetReport()
		Exit Sub
	End If

	arrSteps = Array("", obLanguage("Reports","kDOUStep_Early"), obLanguage("Reports","kDOUStep_PreSchool"))
End Sub

Function GetReportTable()
	Dim ind
	Dim strDistrict
	Dim strSchoolNumber
	Dim nStep
	Dim nCapacityCommon, nSeatsForTransfer, nSubGroupsCount
	Dim rsClassesStudents, rsEsPoolStudents
	Dim nClassesStudents, nClassesStudentsCommon, nClassesStudentsOvz
	Dim nPoolStudents, nPoolStudentsCommon, nPoolStudentsOvz
	Dim nClassTyleID ' специализация группы
	Dim nCountStudents, nCountStudentsCommon, nCountStudentsOvz
	Dim nCountVacancy, nCountVacancyCommon, nCountVacancyOvz
	Dim fArea, nSeats

	strReport = GetTableHeader()
	
	If Not objDouGroups.EOF Then
		strDistrict = GetSafeStr(objDouGroups("DISTRICT"), -1, "")
		strSchoolNumber = GetSafeStr(objDouGroups("SCHOOLNUMBER"), -1, "")
	End If

	Set rsClassesStudents = objDouGroups("rsClassesStudents").Value
	Set rsEsPoolStudents = objDouGroups("rsEsPoolStudents").Value

	ind = 0
	While Not objDouGroups.EOF
		ind = ind + 1

		nStep = GetSafeLng(objDouGroups("STEP"), 0)
		If nStep > 2 Then nStep = 2

		nCapacityCommon = GetSafeLng(objDouGroups("SEATS"), 0)
		nSeatsForTransfer = GetSafeLng(objDouGroups("SEATSFORTRANSFER"), 0)
		nSubGroupsCount = GetSafeLng(objDouGroups("SUBGROUPSCOUNT"), 1)

		nClassesStudents = 0
		nClassesStudentsCommon = 0
		nClassesStudentsOvz = 0
		If Not rsClassesStudents.EOF Then
			nClassesStudents = GetSafeLng(rsClassesStudents("CNT"), 0)
			nClassesStudentsCommon = GetSafeLng(rsClassesStudents("COMMON_CNT"), 0)
			nClassesStudentsOvz = nClassesStudents - nClassesStudentsCommon
		End If

		nClassTyleID = GetSafeLng(objDouGroups("TYPEID"), 0)
		nPoolStudents = 0
		nPoolStudentsCommon = 0
		nPoolStudentsOvz = 0
		If Not rsEsPoolStudents.EOF Then
			nPoolStudents = GetSafeLng(rsEsPoolStudents("MOV_CNT"), 0)
			If nClassTyleID = kSpecial_Code_01 Then
				nPoolStudentsCommon = nPoolStudents
			Else
				nPoolStudentsOvz = nPoolStudents
			End If
		End If

		nCountStudentsCommon = nClassesStudentsCommon + nPoolStudentsCommon
		nCountStudentsOvz = nClassesStudentsOvz + nPoolStudentsOvz
		nCountStudents = nCountStudentsCommon + nCountStudentsOvz

		nCountVacancy = nCapacityCommon - nCountStudents

		fArea = GetSafeDbl(objDouGroups("AREA"), 0)
		If nStep = 1 Then
			nSeats = Round(fArea / 2.5, 0)
		Else
			nSeats = Round(fArea / 2.0, 0)
		End If

		strReport= strReport & "<tr>" & _
			"<td class=""cell-num"">" & ind & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(strDistrict) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(strSchoolNumber) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objDouGroups("CORPUS")) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(arrSteps(nStep)) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objDouGroups("AGENAME")) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objDouGroups("CLASSNAME")) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objDouGroups("STAYNAME")) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objDouGroups("PRETYPENAME")) & "</td>" &_
			"<td class=""cell-text"">" & DB2HTML(objDouGroups("TYPENAME")) & "</td>" &_
			"<td class=""cell-num"">" & nCapacityCommon & "</td>"
	
		If strRepType = "1" Then
			strReport= strReport & _
				"<td class=""cell-num"">" & nCountStudents & "</td>" &_
				"<td class=""cell-num"">" & nCountStudentsCommon & "</td>" &_
				"<td class=""cell-num"">" & nCountStudentsOvz & "</td>"
		End If

		strReport= strReport & _
			"<td class=""cell-num"">" & nClassesStudents & "</td>" &_
			"<td class=""cell-num"">" & nClassesStudentsCommon & "</td>" &_
			"<td class=""cell-num"">" & nClassesStudentsOvz & "</td>"

		If strRepType = "1" Then
			strReport= strReport & _
				"<td class=""cell-num"">" & nPoolStudents & "</td>" &_
				"<td class=""cell-num"">" & nPoolStudentsCommon & "</td>" &_
				"<td class=""cell-num"">" & nPoolStudentsOvz & "</td>" &_
				"<td class=""cell-num"">" & IIF(nCountVacancy > 0, nCountVacancy, "нет") & "</td>"
		End If

		strReport= strReport & _
			"<td class=""cell-num"">" & fArea & "</td>" &_
			"<td class=""cell-num"">" & nSeats & "</td>" &_
		"</tr>"

		objDouGroups.MoveNext
	WEnd

	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function

Function GetTableHeader()
	Dim i

	GetTableHeader = "<table class=""table-print"">" & _
		"<tr>" & _
			"<th rowspan=""2"">" & "№ п.п." & "</th>" & _
			"<th rowspan=""2"">" & "Район" & "</th>" & _
			"<th rowspan=""2"">" & "№ ДОО" & "</th>" & _
			"<th rowspan=""2"">" & "Корпус" & "</th>" & _
			"<th rowspan=""2"">" & "Возрастная группа" & "</th>" & _
			"<th rowspan=""2"">" & "Возраст детей" & "</th>" & _
			"<th rowspan=""2"">" & "Название группы" & "</th>" & _
			"<th rowspan=""2"">" & "Группы по времени пребывания" & "</th>" & _
			"<th rowspan=""2"">" & "Направленность группы" & "</th>" & _
			"<th rowspan=""2"">" & "Специализация группы" & "</th>" & _
			"<th rowspan=""2"">" & "Предельная наполняемость (вместимость помещения)" & "</th>"
			
	If strRepType = "1" Then
		GetTableHeader = GetTableHeader & _
			"<th colspan=""3"">" & "Общее количество детей в группе" & "</th>"
	End If

		GetTableHeader = GetTableHeader & _
			"<th colspan=""3"">" & "Количество детей в группе по списочному составу" & "</th>"

	If strRepType = "1" Then
		GetTableHeader = GetTableHeader & _
			"<th colspan=""3"">" & "Количество детей, направленных в группу" & "</th>" & _
			"<th rowspan=""2"">" & "Вакантные места для приема" & "</th>"
	End If
	
		GetTableHeader = GetTableHeader & _
			"<th rowspan=""2"">" & "Площадь групповых помещений" & "</th>" & _
			"<th rowspan=""2"">" & "Расчетное количество мест" & "</th>" & _
		"</tr>"

	If strRepType = "1" Then
		GetTableHeader = GetTableHeader & _
			"<th>" & "всего (сумма гр.13, 14)" & "</th>" & _
			"<th>" & "без ограничений (сумма гр. 16, 19)" & "</th>" & _
			"<th>" & "с ОВЗ (сумма гр. 17, 22)" & "</th>" & _
			"<th>" & "всего (сумма гр.16, 17)" & "</th>"
	Else
		GetTableHeader = GetTableHeader & _
			"<th>" & "всего (сумма гр.13, 14)" & "</th>"
	End If

		GetTableHeader = GetTableHeader & _
			"<th>" & "без ограничений" & "</th>" & _
			"<th>" & "с ОВЗ" & "</th>"

	If strRepType = "1" Then
		GetTableHeader = GetTableHeader & _
			"<th>" & "всего (сумма гр.19, 20)" & "</th>" & _
			"<th>" & "без ограничений" & "</th>" & _
			"<th>" & "с ОВЗ" & "</th>"
	End If
		GetTableHeader = GetTableHeader & _
		"</tr>"

	GetTableHeader = GetTableHeader & _
		"<tr>"
	For i = 1 To IIf(strRepType = "1", 23, 16)
		GetTableHeader = GetTableHeader & _
			"<th>" & i & "</th>"
	Next
	GetTableHeader = GetTableHeader & _
		"</tr>"
End Function
%>

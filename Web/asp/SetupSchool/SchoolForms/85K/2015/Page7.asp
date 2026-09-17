<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('03.1', 4, 3, 9, 5, 15);
	SumRowByIndex('03.1', 21, [3,8,9], [22,23,24]);
	SumRowByIndex('03.1', 1, [3,8,9], [2,4,16,17,18,21]);

	ValidateIncludedRows('03.1', 2, [3], 3, 8);
	ValidateIncludedRows('03.1', 18, [19,20], 3, 9);
	ValidateIncludedRows('03.1', 10, [25], 3, 9);
	ValidateIncludedCells('03.1', 2, 3, [26], 3);
	ValidateIncludedCols('03.1', 3, [4,6], 2, 15);
	ValidateIncludedCols('03.1', 4, [5], 2, 15);
	ValidateIncludedCols('03.1', 6, [7], 2, 15);
	ValidateIncludedCols('03.1', 3, [8], 1, 25);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function

Sub AutoCalcEMInfo( )
End Sub

Sub AutoCalc()
	Dim objCountEmploees, prmsId, itemsNames, countEmploees
	
	'Заполнение гр. 3 и 8 стр. 2
	prmsId = Array("32")
	itemsNames = Array("'Штатный сотрудник'")
	Call CalcCountStaff("T03.10203", prmsId, itemsNames, true, PosStatuses_ManagPerson, false)

	'Заполнение гр. 4 стр. 2
	prmsId = Array("32","4")
	itemsNames = Array("'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Call CalcCountStaff("T03.10204", prmsId, itemsNames, false, PosStatuses_ManagPerson, false)

	'Заполнение гр. 5 стр. 2
	itemsNames(1) = "'Высшее педагогическое'"
	Call CalcCountStaff("T03.10205", prmsId, itemsNames, false, PosStatuses_ManagPerson, false)

	'Заполнение гр. 6 стр. 2
	itemsNames(1) = "'Среднее профессиональное', 'Среднее педагогическое'"
	Call CalcCountStaff("T03.10206", prmsId, itemsNames, false, PosStatuses_ManagPerson, false)

	'Заполнение гр. 7 стр. 2
	itemsNames(1) = "'Среднее педагогическое'"
	Call CalcCountStaff("T03.10207", prmsId, itemsNames, false, PosStatuses_ManagPerson, false)
	
	'Заполнение гр. 3 и 8 стр. 3
	prmsId = Array("6","32")
	itemsNames = Array("Заведующ%,Заместител% заведующ%", "'Штатный сотрудник'")
	Call CalcCountStaff("T03.10303", prmsId, itemsNames, true, PosStatuses_ManagPerson, false)

	'Заполнение гр. 4 стр. 3
	prmsId = Array("6","32", "4")
	itemsNames = Array("Заведующ%,Заместител% заведующ%", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Call CalcCountStaff("T03.10304", prmsId, itemsNames, false, PosStatuses_ManagPerson, false)

	'Заполнение гр. 5 стр. 3
	itemsNames(2) = "'Высшее педагогическое'"
	Call CalcCountStaff("T03.10305", prmsId, itemsNames, false, PosStatuses_ManagPerson, false)

	'Заполнение гр. 6 стр. 3
	itemsNames(2) = "'Среднее профессиональное', 'Среднее педагогическое'"
	Call CalcCountStaff("T03.10306", prmsId, itemsNames, false, PosStatuses_ManagPerson, false)

	'Заполнение гр. 7 стр. 3
	itemsNames(2) = "'Среднее педагогическое'"
	Call CalcCountStaff("T03.10307", prmsId, itemsNames, false, PosStatuses_ManagPerson, false)

	'Заполнение стр. 5
	Call CalcCountStaffLines5To15("Воспитател%", 5, PosStatuses_TeachStaff, false)

	'Заполнение стр. 6
	Call CalcCountStaffLines5To15("Старш% воспитател%", 6, PosStatuses_TeachStaff, false)

	'Заполнение стр. 7
	Call CalcCountStaffLines5To15("Музыкальный руководитель", 7, PosStatuses_TeachStaff, false)

	'Заполнение стр. 8
	Call CalcCountStaffLines5To15("Инструктор по физической культуре", 8, PosStatuses_TeachStaff, false)

	'Заполнение стр. 9
	Call CalcCountStaffLines5To15("Учитель-логопед", 9, PosStatuses_TeachStaff, false)

	'Заполнение стр. 10
	Call CalcCountStaffLines5To15("Учитель-дефектолог", 10, PosStatuses_TeachStaff, false)

	'Заполнение стр. 11
	Call CalcCountStaffLines5To15("Педагог-психолог", 11, PosStatuses_TeachStaff, false)

	'Заполнение стр. 12
	Call CalcCountStaffLines5To15("Социальный педагог", 12, PosStatuses_TeachStaff, false)

	'Заполнение стр. 13
	Call CalcCountStaffLines5To15("Педагог-организатор", 13, PosStatuses_TeachStaff, false)

	'Заполнение стр. 14
	Call CalcCountStaffLines5To15("Педагог дополнительного образования", 14, PosStatuses_TeachStaff, false)
	
	'Заполнение стр. 15
	Call CalcCountStaffLines5To15("Воспитатель,Старший воспитатель,Музыкальный руководитель,Инструктор по физической культуре,Учитель-логопед,Учитель-дефектолог,Педагог-психолог,Социальный педагог,Педагог-организатор,Педагог дополнительного образования", 15, PosStatuses_TeachStaff, true)

	'Заполнение гр. 3 и 8 стр. 16
	prmsId = Array("6","32")
	itemsNames = Array("Младший воспитатель", "'Штатный сотрудник'")
	Call CalcCountStaff("T03.11603", prmsId, itemsNames, true, PosStatuses_TeachSupportStaff, false)

	'Заполнение гр. 9 стр. 16
	itemsNames(1) = "'Совместитель'"
	Call CalcCountStaff("T03.11609", prmsId, itemsNames, false, PosStatuses_TeachSupportStaff, false)

	'Заполнение гр. 3 и 8 стр. 17
	itemsNames = Array("Помощник воспитателя", "'Штатный сотрудник'")
	Call CalcCountStaff("T03.11703", prmsId, itemsNames, true, PosStatuses_TeachSupportStaff, false)

	'Заполнение гр. 9 стр. 17
	itemsNames(1) = "'Совместитель'"
	Call CalcCountStaff("T03.11709", prmsId, itemsNames, false, PosStatuses_TeachSupportStaff, false)

	'Заполнение гр. 3 и 8 стр. 18
	prmsId = Array("32")
	itemsNames = Array("'Штатный сотрудник'")
	Call CalcCountStaff("T03.11803", prmsId, itemsNames, true, PosStatuses_MedicalStaff, false)

	'Заполнение гр. 9 стр. 18
	itemsNames(0) = "'Совместитель'"
	Call CalcCountStaff("T03.11809", prmsId, itemsNames, false, PosStatuses_MedicalStaff, false)

	'Заполнение гр. 3 и 8 стр. 19
	prmsId = Array("6","32")
	itemsNames = Array("Врач", "'Штатный сотрудник'")
	Call CalcCountStaff("T03.11903", prmsId, itemsNames, true, PosStatuses_MedicalStaff, false)

	'Заполнение гр. 9 стр. 19
	itemsNames(1) = "'Совместитель'"
	Call CalcCountStaff("T03.11909", prmsId, itemsNames, false, PosStatuses_MedicalStaff, false)

	'Заполнение гр. 3 и 8 стр. 20
	itemsNames = Array("Медсестра", "'Штатный сотрудник'")
	Call CalcCountStaff("T03.12003", prmsId, itemsNames, true, PosStatuses_MedicalStaff, false)

	'Заполнение гр. 9 стр. 20
	itemsNames(1) = "'Совместитель'"
	Call CalcCountStaff("T03.12009", prmsId, itemsNames, false, PosStatuses_MedicalStaff, false)

	'Заполнение гр. 3 и 8 стр. 22
	itemsNames = Array("Шеф-повар", "'Штатный сотрудник'")
	Call CalcCountStaff("T03.12203", prmsId, itemsNames, true, PosStatuses_ServiceStaff, false)

	'Заполнение гр. 9 стр. 22
	itemsNames(1) = "'Совместитель'"
	Call CalcCountStaff("T03.12209", prmsId, itemsNames, false, PosStatuses_ServiceStaff, false)

	'Заполнение гр. 3 и 8 стр. 23
	itemsNames = Array("Повар%", "'Штатный сотрудник'")
	Call CalcCountStaff("T03.12303", prmsId, itemsNames, true, PosStatuses_ServiceStaff, false)

	'Заполнение гр. 9 стр. 23
	itemsNames(1) = "'Совместитель'"
	Call CalcCountStaff("T03.12309", prmsId, itemsNames, false, PosStatuses_ServiceStaff, false)

	'Заполнение стр. 24
	Call CalcCountStaffByRow24()
End Sub

Sub CalcCountStaff(sName, prmsId, itemsNames, isWmn, posStatus, isOthers)
	Dim objCountEmploees

	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID, isOthers, posStatus)
	Call SetLoadedOSHValue(sName, objCountEmploees("countEmploees"))

	If isWmn Then Call SetLoadedOSHValue(Left(sName, Len(sName)-2) & "08", objCountEmploees("countFEmploees"))
End Sub

Sub CalcCountStaffByRow24()
	Dim objCountEmploees, countStaff, countWomenStaff

	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(Array("6", "32"), Array("Шеф-повар,Повар", "'Штатный сотрудник'"), strSchoolYearID, true, PosStatuses_ServiceStaff)
	countStaff = GetSafeLng(objCountEmploees("countEmploees"), 0)
	countWomenStaff = GetSafeLng(objCountEmploees("countFEmploees"), 0)

	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(Array("6", "32"), Array("Младший воспитатель,Помощник воспитателя", "'Штатный сотрудник'"), strSchoolYearID, true, PosStatuses_TeachSupportStaff)
	countStaff = countStaff + GetSafeLng(objCountEmploees("countEmploees"), 0)
	countWomenStaff = countWomenStaff + GetSafeLng(objCountEmploees("countFEmploees"), 0)

	Call SetLoadedOSHValue("T03.12403", countStaff)
	Call SetLoadedOSHValue("T03.12408", countWomenStaff)

	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(Array("6", "32"), Array("Шеф-повар,Повар", "'Совместитель'"), strSchoolYearID, true, PosStatuses_ServiceStaff)
	countStaff = GetSafeLng(objCountEmploees("countEmploees"), 0)

	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(Array("6", "32"), Array("Младший воспитатель,Помощник воспитателя", "'Совместитель'"), strSchoolYearID, true, PosStatuses_TeachSupportStaff)
	countStaff = countStaff + GetSafeLng(objCountEmploees("countEmploees"), 0)

	Call SetLoadedOSHValue("T03.12409", countStaff)
End Sub

Sub CalcCountStaffLines5To15(jobName, line, posStatus, isOthers)
	Dim objCountEmploees, genPrmsId, genItemsNames, rowNum
	
	genPrmsId = Array("6","32","4")
	genItemsNames = Array(jobName, "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'", "'Высшее педагогическое'", "'Среднее профессиональное', 'Среднее педагогическое'", "'Среднее педагогическое'", "'Совместитель'")
	rowNum = FormatValueIndex(line)

	'Заполнение гр. 3
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(Array(genPrmsId(0), genPrmsId(1)), Array(genItemsNames(0), genItemsNames(1)), strSchoolYearID, isOthers, posStatus)
	Call SetLoadedOSHValue("T03.1" & rowNum & "03", objCountEmploees("countEmploees"))
	
	'Заполнение гр. 8
	Call SetLoadedOSHValue("T03.1" & rowNum & "08", objCountEmploees("countFEmploees"))

	'Заполнение гр. 4
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(genPrmsId, Array(genItemsNames(0), genItemsNames(1), genItemsNames(2)), strSchoolYearID, isOthers, posStatus)
	Call SetLoadedOSHValue("T03.1" & rowNum & "04", objCountEmploees("countEmploees"))

	'Заполнение гр. 5
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(genPrmsId, Array(genItemsNames(0), genItemsNames(1), genItemsNames(3)), strSchoolYearID, isOthers, posStatus)
	Call SetLoadedOSHValue("T03.1" & rowNum & "05", objCountEmploees("countEmploees"))

	'Заполнение гр. 6
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(genPrmsId, Array(genItemsNames(0), genItemsNames(1), genItemsNames(4)), strSchoolYearID, isOthers, posStatus)
	Call SetLoadedOSHValue("T03.1" & rowNum & "06", objCountEmploees("countEmploees"))

	'Заполнение гр. 7
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(genPrmsId, Array(genItemsNames(0), genItemsNames(1), genItemsNames(5)), strSchoolYearID, isOthers, posStatus)
	Call SetLoadedOSHValue("T03.1" & rowNum & "07", objCountEmploees("countEmploees"))

	'Заполнение гр. 9
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(Array(genPrmsId(0), genPrmsId(1)), Array(genItemsNames(0), genItemsNames(6)), strSchoolYearID, isOthers, posStatus)
	Call SetLoadedOSHValue("T03.1" & rowNum & "09", objCountEmploees("countEmploees"))
End Sub%>
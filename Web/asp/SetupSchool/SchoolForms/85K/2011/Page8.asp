<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('03.1', 4, 3, 9, 5, 14);
	SumRowAllCols('03.1', 20, 3, 9, 21, 23);
	SumRowByIndex('03.1', 1, [3, 8, 9], [2,4,15,16,17,20]);

	ValidateIncludedCols('03.1', 3, [8], 2, 24);
	
	ValidateIncludedCols('03.1', 3, [4,6], 2, 14);
	ValidateIncludedCols('03.1', 4, [5], 2, 14);
	ValidateIncludedCols('03.1', 6, [7], 2, 14);
	ValidateIncludedRows('03.1', 10, [24], 3, 3);
	
	ValidateIncludedRows('03.1', 2, [3], 3, 8);
	ValidateIncludedRows('03.1', 4, [5,6,7,8,9,10,11,12,13,14], 3, 9);
	ValidateIncludedRows('03.1', 17, [18,19], 3, 3);
	ValidateIncludedRows('03.1', 17, [18,19], 8, 9);
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
	prmsId = Array("32","33")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10203", countEmploees)

	prmsId = Array("32","33","4")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10204", countEmploees)

	prmsId = Array("32","33","4")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10205", countEmploees)

	prmsId = Array("32","33","4")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10206", countEmploees)

	prmsId = Array("32","33","4")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10207", countEmploees)

	prmsId = Array("32","33")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.10208", countEmploees)

	prmsId = Array("6","32","33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10303", countEmploees)

	prmsId = Array("6","32", "4", "33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10304", countEmploees)

	prmsId = Array("6","32", "4", "33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Высшее педагогическое'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10305", countEmploees)

	prmsId = Array("6","32", "4", "33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10306", countEmploees)

	prmsId = Array("6","32", "4", "33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Среднее педагогическое'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10307", countEmploees)

	prmsId = Array("6","32","33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.10308", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10503", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10504", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10505", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10506", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10507", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.10508", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Воспитатель", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10509", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10603", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10604", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10605", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10606", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10607", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.10608", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Старший воспитатель", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10609", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10703", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10704", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10705", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10706", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10707", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.10708", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Музыкальный руководитель", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10709", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10803", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10804", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10805", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10806", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10807", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.10808", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Инструктор по физической культуре", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10809", countEmploees)


	prmsId = Array("6","32")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10903", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10904", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10905", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10906", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10907", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.10908", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-логопед", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.10909", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11003", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11004", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11005", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11006", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11007", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11008", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-дефектолог", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11009", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11103", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11104", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11105", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11106", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11107", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11108", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11109", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11203", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11204", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11205", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11206", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11207", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11208", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Социальный педагог", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11209", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11303", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11304", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11305", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11306", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11307", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11308", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11309", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11403", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11404", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11405", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11406", countEmploees)

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11407", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11408", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Педагог дополнительного образования", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11409", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Младший воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11503", countEmploees)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11508", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Младший воспитатель", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11509", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Помощник воспитателя", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11603", countEmploees)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11608", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Помощник воспитателя", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11609", countEmploees)

	prmsId = Array("33","32")
	itemsNames = Array("'Медицинский работник'", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11703", countEmploees)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11708", countEmploees)

	prmsId = Array("33","32")
	itemsNames = Array("'Медицинский работник'", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11709", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Врач", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11803", countEmploees)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11808", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Врач", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11809", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Медсестра", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11903", countEmploees)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.11908", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Медсестра", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.11909", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Шеф-повар", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.12103", countEmploees)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.12108", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Шеф-повар", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.12109", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Повар", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.12203", countEmploees)
	countEmploees = objCountEmploees("countFEmploees")
	Call SetLoadedOSHValue("T03.12208", countEmploees)

	prmsId = Array("6","32")
	itemsNames = Array("Повар", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	countEmploees = objCountEmploees("countEmploees")
	Call SetLoadedOSHValue("T03.12209", countEmploees)

	prmsId = Array("33","32")
	itemsNames = Array("'Обслуживающий персонал'", "'Штатный сотрудник'")
	Dim allEmpls, allCountEmpls
	Set allEmpls = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	prmsId = Array("6", "33","32")
	itemsNames = Array("Шеф-повар,Повар", "'Обслуживающий персонал'", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	allCountEmpls = allEmpls("countEmploees")
	countEmploees = objCountEmploees("countEmploees")
	countEmploees = allCountEmpls - countEmploees
	Call SetLoadedOSHValue("T03.12303", countEmploees)
	allCountEmpls = allEmpls("countFEmploees")
	countEmploees = objCountEmploees("countFEmploees")
	countEmploees = allCountEmpls - countEmploees
	Call SetLoadedOSHValue("T03.12308", countEmploees)

	prmsId = Array("33","32")
	itemsNames = Array("'Обслуживающий персонал'", "'Совместитель'")
	Set allEmpls = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	prmsId = Array("6", "33","32")
	itemsNames = Array("Шеф-повар,Повар", "'Обслуживающий персонал'", "'Совместитетль'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	allCountEmpls = allEmpls("countEmploees")
	countEmploees = objCountEmploees("countEmploees")
	countEmploees = allCountEmpls - countEmploees
	Call SetLoadedOSHValue("T03.12309", countEmploees)
End Sub
%>
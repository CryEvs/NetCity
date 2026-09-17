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
	SumRowAllCols('03.1', 4, 3, 9, 5, 15)
	SumRowAllCols('03.1', 21, 3, 9, 22, 24)
	SumRowAllColsByIndex('03.1', 1, 3, 3, [2,4,16,17,18,21])
	SumRowAllColsByIndex('03.1', 1, 8, 8, [2,4,16,17,18,21])
	SumRowAllColsByIndex('03.1', 1, 9, 9, [2,4,16,17,18,21])

	ValidateIncludedCols('03.1', 3, [8], 2, 25);
	
	ValidateIncludedCols('03.1', 3, [4,6], 2, 15);
	ValidateIncludedCols('03.1', 4, [5], 2, 15);
	ValidateIncludedCols('03.1', 6, [7], 2, 15);
	ValidateIncludedRows('03.1', 10, [25], 3, 3);
	
	ValidateIncludedRows('03.1', 2, [3], 3, 8);
	ValidateIncludedRows('03.1', 4, [5,6,7,8,9,10,11,12,13,14], 3, 9);
	ValidateIncludedRows('03.1', 18, [19,20], 3, 3);
	ValidateIncludedRows('03.1', 18, [19,20], 8, 9);

	ValidateCell('03.1', 2, 3, [26], 3);
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
	Call SetLoadedOSHValue("T03.10203", objCountEmploees("countEmploees"))

	prmsId = Array("32","33","4")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10204", objCountEmploees("countEmploees"))

	prmsId = Array("32","33","4")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10205", objCountEmploees("countEmploees"))

	prmsId = Array("32","33","4")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10206", objCountEmploees("countEmploees"))

	prmsId = Array("32","33","4")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10207", objCountEmploees("countEmploees"))

	prmsId = Array("32","33")
	itemsNames = Array("'Штатный сотрудник'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10208", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32","33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10303", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4", "33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10304", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4", "33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Высшее педагогическое'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10305", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4", "33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10306", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4", "33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Среднее педагогическое'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10307", objCountEmploees("countEmploees"))

	prmsId = Array("6","32","33")
	itemsNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'", "'Администрация'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10308", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10503", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10504", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10505", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10506", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10507", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10508", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Воспитатель", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10509", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10603", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10604", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10605", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10606", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10607", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Старший воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10608", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Старший воспитатель", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10609", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10703", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10704", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10705", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10706", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10707", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Музыкальный руководитель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10708", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Музыкальный руководитель", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10709", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10803", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10804", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10805", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10806", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10807", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Инструктор по физической культуре", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10808", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Инструктор по физической культуре", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10809", objCountEmploees("countEmploees"))


	prmsId = Array("6","32")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10903", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10904", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10905", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10906", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10907", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-логопед", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10908", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-логопед", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.10909", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11003", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11004", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11005", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11006", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11007", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-дефектолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11008", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Учитель-дефектолог", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11009", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11103", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11104", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11105", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11106", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11107", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11108", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-психолог", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11109", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11203", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11204", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11205", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11206", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11207", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Социальный педагог", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11208", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Социальный педагог", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11209", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-организатор", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11303", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-организатор", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11304", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-организатор", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11305", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-организатор", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11306", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог-организатор", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11307", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-организатор", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11308", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог-организатор", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11309", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11403", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'", "'Высшее профессиональное', 'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11404", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'", "'Высшее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11405", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'", "'Среднее профессиональное', 'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11406", objCountEmploees("countEmploees"))

	prmsId = Array("6","32", "4")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'", "'Среднее педагогическое'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11407", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог дополнительного образования", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11408", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Педагог дополнительного образования", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11409", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Младший воспитатель", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11603", objCountEmploees("countEmploees"))
	Call SetLoadedOSHValue("T03.11608", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Младший воспитатель", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11609", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Помощник воспитателя", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11703", objCountEmploees("countEmploees"))
	Call SetLoadedOSHValue("T03.11708", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Помощник воспитателя", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11709", objCountEmploees("countEmploees"))

	prmsId = Array("33","32")
	itemsNames = Array("'Медицинский работник'", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11803", objCountEmploees("countEmploees"))
	Call SetLoadedOSHValue("T03.11808", objCountEmploees("countFEmploees"))

	prmsId = Array("33","32")
	itemsNames = Array("'Медицинский работник'", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11809", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Врач", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11903", objCountEmploees("countEmploees"))
	Call SetLoadedOSHValue("T03.11908", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Врач", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.11909", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Медсестра", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.12003", objCountEmploees("countEmploees"))
	Call SetLoadedOSHValue("T03.12008", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Медсестра", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.12009", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Шеф-повар", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.12203", objCountEmploees("countEmploees"))
	Call SetLoadedOSHValue("T03.12208", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Шеф-повар", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.12209", objCountEmploees("countEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Повар", "'Штатный сотрудник'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.12303", objCountEmploees("countEmploees"))
	Call SetLoadedOSHValue("T03.12308", objCountEmploees("countFEmploees"))

	prmsId = Array("6","32")
	itemsNames = Array("Повар", "'Совместитель'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.12309", objCountEmploees("countEmploees"))

	prmsId = Array("33")
	itemsNames = Array("'Учебно-вспомогательный персонал'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.12403", objCountEmploees("countEmploees"))
	Call SetLoadedOSHValue("T03.12408", objCountEmploees("countFEmploees"))

	prmsId = Array("33")
	itemsNames = Array("'Учебно-вспомогательный персонал'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	Call SetLoadedOSHValue("T03.12409", objCountEmploees("countEmploees"))

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
	Call SetLoadedOSHValue("T03.12403", countEmploees)
	allCountEmpls = allEmpls("countFEmploees")
	countEmploees = objCountEmploees("countFEmploees")
	countEmploees = allCountEmpls - countEmploees
	Call SetLoadedOSHValue("T03.12408", countEmploees)

	prmsId = Array("33","32")
	itemsNames = Array("'Обслуживающий персонал'", "'Совместитель'")
	Set allEmpls = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	prmsId = Array("6", "33","32")
	itemsNames = Array("Шеф-повар,Повар", "'Обслуживающий персонал'", "'Совместитетль'")
	Set objCountEmploees = objNSNET.Get85KSection31CountEmploees(prmsId, itemsNames, strSchoolYearID)
	allCountEmpls = allEmpls("countEmploees")
	countEmploees = objCountEmploees("countEmploees")
	countEmploees = allCountEmpls - countEmploees
	Call SetLoadedOSHValue("T03.12409", countEmploees)
End Sub
%>
<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('03.1', 1, 3, 9, 2, 12);

	ValidateIncludedRows('03.1', 7, [13], 3, 9);
	ValidateIncludedCols('03.1', 3, [4,6], 1, 13);
	ValidateIncludedCols('03.1', 4, [5], 1, 12);
	ValidateIncludedCols('03.1', 6, [7], 1, 12);
	ValidateIncludedCols('03.1', 3, [8], 1, 13);

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
	'Заполнение стр. 2
	Call CalcCountStaffLines2To12("Воспитател%", 2, PosStatuses_TeachStaff, false)

	'Заполнение стр. 3
	Call CalcCountStaffLines2To12("Старш% воспитател%", 3, PosStatuses_TeachStaff, false)

	'Заполнение стр. 4
	Call CalcCountStaffLines2To12("Музыкальный руководитель", 4, PosStatuses_TeachStaff, false)

	'Заполнение стр. 5
	Call CalcCountStaffLines2To12("Инструктор по физической культуре", 5, PosStatuses_TeachStaff, false)

	'Заполнение стр. 6
	Call CalcCountStaffLines2To12("Учитель-логопед", 6, PosStatuses_TeachStaff, false)

	'Заполнение стр. 7
	Call CalcCountStaffLines2To12("Учитель-дефектолог", 7, PosStatuses_TeachStaff, false)

	'Заполнение стр. 8
	Call CalcCountStaffLines2To12("Педагог-психолог", 8, PosStatuses_TeachStaff, false)

	'Заполнение стр. 9
	Call CalcCountStaffLines2To12("Социальный педагог", 9, PosStatuses_TeachStaff, false)

	'Заполнение стр. 10
	Call CalcCountStaffLines2To12("Педагог-организатор", 10, PosStatuses_TeachStaff, false)

	'Заполнение стр. 11
	Call CalcCountStaffLines2To12("Педагог дополнительного образования", 11, PosStatuses_TeachStaff, false)
	
	'Заполнение стр. 12
	Call CalcCountStaffLines2To12("Воспитатель,Старший воспитатель,Музыкальный руководитель,Инструктор по физической культуре,Учитель-логопед,Учитель-дефектолог,Педагог-психолог,Социальный педагог,Педагог-организатор,Педагог дополнительного образования", 12, PosStatuses_TeachStaff, true)
End Sub

Sub CalcCountStaffLines2To12(jobName, line, posStatus, isOthers)
	Dim objCountEmploees, genPrmsId, genItemsNames, rowNum
	
	genPrmsId = Array("6","32","4")
	genItemsNames = Array(jobName, "'Штатный сотрудник'", "'(*) Высшее', 'Высшее профессиональное', 'Высшее педагогическое'", "'Высшее педагогическое'", "'Среднее профессиональное', 'Среднее педагогическое'", "'Среднее педагогическое'", "'Совместитель'")
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
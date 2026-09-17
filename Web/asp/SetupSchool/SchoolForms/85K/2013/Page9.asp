<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('03.2', 4, 3, 11, 5, 15);
	SumRowAllColsByIndex('03.2', 1, 3, 11, [2,4]);
	SumColAllRows('03.2', 3, 1, 15, 4, 11);
	
	ValidateIncludedCols('03.2', 3, [4,5,6,7,8,9], 2, 14);
	ValidateDividedRows('03.2', 2, [3], 3, 11);
	ValidateIncludedRows('03.2', 4, [5,6,7,8,9,10,11,12,13,14], 3, 11);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.2_inc.asp" -->
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
	On Error Resume Next
	Dim objCountEmplForAge, prms, iNames, agesIntrvls
	Call ClearAvtoCalcValue()

	prms = Array(32, 33)
	iNames = Array( "'Штатный сотрудник'", "'Администрация'")
	agesIntrvls = Array(0, 24, 25, 29, 30, 39, 40, 44, 45, 49, 50, 54, 55, 59, 60, 999)
	
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.20203", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.20204", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.20205", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.20206", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.20207", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.20208", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.20209", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.20210", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.20211", objCountEmplForAge("ages8"))

	prms = Array(6, 32, 33)
	iNames = Array("Заведующая ДОУ,Заместитель заведующей по ВМР", "'Штатный сотрудник'",  "'Администрация'")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.20303", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.20304", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.20305", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.20306", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.20307", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.20308", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.20309", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.20310", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.20311", objCountEmplForAge("ages8"))

	prms = Array(6, 32)
	iNames = Array("Воспитатель", "'Штатный сотрудник'")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.20503", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.20504", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.20505", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.20506", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.20507", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.20508", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.20509", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.20510", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.20511", objCountEmplForAge("ages8"))

	prms = Array(6)
	iNames = Array("Старший воспитатель")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.20603", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.20604", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.20605", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.20606", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.20607", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.20608", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.20609", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.20610", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.20611", objCountEmplForAge("ages8"))

	prms = Array(6, 32)
	iNames = Array("Музыкальный руководитель", "'Штатный сотрудник'")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.20703", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.20704", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.20705", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.20706", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.20707", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.20708", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.20709", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.20710", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.20711", objCountEmplForAge("ages8"))

	prms = Array(6)
	iNames = Array("Инструктор по физической культуре")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.20803", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.20804", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.20805", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.20806", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.20807", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.20808", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.20809", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.20810", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.20811", objCountEmplForAge("ages8"))

	prms = Array(6)
	iNames = Array("Учитель-логопед")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.20903", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.20904", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.20905", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.20906", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.20907", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.20908", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.20909", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.20910", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.20911", objCountEmplForAge("ages8"))

	prms = Array(6)
	iNames = Array("Учитель-дефектолог")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.21003", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.21004", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.21005", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.21006", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.21007", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.21008", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.21009", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.21010", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.21011", objCountEmplForAge("ages8"))

	prms = Array(6)
	iNames = Array("Педагог-психолог")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.21103", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.21104", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.21105", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.21106", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.21107", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.21108", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.21109", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.21110", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.21111", objCountEmplForAge("ages8"))

	prms = Array(6)
	iNames = Array("Социальный педагог")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.21203", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.21204", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.21205", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.21206", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.21207", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.21208", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.21209", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.21210", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.21211", objCountEmplForAge("ages8"))

	prms = Array(6)
	iNames = Array("Педагог-организатор")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.21303", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.21304", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.21305", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.21306", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.21307", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.21308", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.21309", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.21310", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.21311", objCountEmplForAge("ages8"))
	
	prms = Array(6)
	iNames = Array("Педагог доп. образования")
	Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(prms, iNames, strSchoolYearID, dtPresentationDate, agesIntrvls)
	Call SetLoadedOSHValue("T03.21403", objCountEmplForAge("countEmploees"))
	Call SetLoadedOSHValue("T03.21404", objCountEmplForAge("ages1"))
	Call SetLoadedOSHValue("T03.21405", objCountEmplForAge("ages2"))
	Call SetLoadedOSHValue("T03.21406", objCountEmplForAge("ages3"))
	Call SetLoadedOSHValue("T03.21407", objCountEmplForAge("ages4"))
	Call SetLoadedOSHValue("T03.21408", objCountEmplForAge("ages5"))
	Call SetLoadedOSHValue("T03.21409", objCountEmplForAge("ages6"))
	Call SetLoadedOSHValue("T03.21410", objCountEmplForAge("ages7"))
	Call SetLoadedOSHValue("T03.21411", objCountEmplForAge("ages8"))
End Sub

Sub ClearAvtoCalcValue()
	Dim ArrayClearValues, nCount, i, j, row, col

	ArrayClearValues = GenerateArrayCells("3.2", 1, 15, 3, 11, 4)

	nCount = Ubound(ArrayClearValues)
	For i=0 to nCount
		Call SetLoadedOSHValue( ArrayClearValues(i), 0)
	Next
	
	For j=3 to 11
		For i = 1 to 15 
			row = IIF(i<10, "0" & i, i)
			col = IIF(j<10, "0" & j, j)
			Call SetLoadedOSHValue("T03.2" &  row & col, 0)
		Next
	Next
End Sub
%>
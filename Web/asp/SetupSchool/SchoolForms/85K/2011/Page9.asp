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

	SumCol('03.2', 3, [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 4, 9);
	SumRowAllCols('03.2', 4, 3, 9, 5, 14);
	SumRowAllColsByIndex('03.2', 1, 3, 9, [2,4]);
	
	ValidateIncludedCols('03.2', 3, [4,5,6,7,8,9], 2, 14);
	ValidateDividedRows('03.2', 2, [3], 3, 9);
	ValidateIncludedRows('03.2', 4, [5,6,7,8,9,10,11,12,13,14], 3, 9);
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
	Dim objCountEmplForAge, count, ages1, ages2, ages3, ages4, ages5, ages6, prms, iNames, agesIntrvls, i, j, allprms, allinames, rows

	allprms = Array(33, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6)
	allinames = Array("'Администрация'", "Заведующий", "Воспитатель", "Старший воспитатель", "Музыкальный сотрудник", "Инструктор по физической культуре", "Учитель-логопед", "Учитель-дефектолог", "Педагог-психолог", "Социальный педагог", "Педагог-организатор", "Педагог доп. образования")
	rows = Array(2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	agesIntrvls = Array(0, 24, 25, 29, 30, 49, 50, 54, 55, 59, 60, 999)
	
	For j = 0 To 11
		Set objCountEmplForAge = objNSNET.Get85KSection32DistrAge(Array(allprms(j)), Array(allinames(j)), strSchoolYearID, dtPresentationDate, agesIntrvls)
		For i = 1 To 6
			Call SetLoadedOSHValue("T03.2" & FormatValueIndex(rows(j)) & FormatValueIndex(i + 3), objCountEmplForAge(i).Value)
		Next
	Next
End Sub
%>
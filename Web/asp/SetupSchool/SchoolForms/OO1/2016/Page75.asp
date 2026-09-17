<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 75
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColForRowRange('03.5', 3, 2, 5, [4,6,8,10,12,14,16,18,20,22]);
	SumColForRowRange('03.5', 3, 8, 48, [4,6,8,10,12,14,16,18,20,22]);

	SumRowAllColsByIndex('03.5', 7, 3, 23, [8,9,10,11,12,13,14,15,16,17,18,22,23,24,25,26,27]);
	SumRowAllColsByIndex('03.5', 6, 3, 23, [7,28,29,33,34,35,36,37,38,39]);
	SumRowAllColsByIndex('03.5', 1, 3, 23, [2,6,40,41]);

	ValidateIncludedRows('03.5', 2, [3, 4, 5], 3, 23);
	ValidateDividedRows('03.5', 18, [19, 20, 21], 3, 23);
	ValidateDividedRows('03.5', 29, [30, 31, 32], 3, 23);
	ValidateDividedRows('03.5', 41, [42, 43, 44], 3, 23);
	ValidateDividedRows('03.5', 6, [45, 47, 49, 52], 3, 23);
	ValidateIncludedRows('03.5', 45, [46], 3, 23);
	ValidateIncludedRows('03.5', 47, [48], 3, 23);

	ValidateIncludedCols('03.5', 4, [5], 1, 48);
	ValidateIncludedCols('03.5', 6, [7], 1, 48);
	ValidateIncludedCols('03.5', 8, [9], 1, 48);
	ValidateIncludedCols('03.5', 10, [11], 1, 48);
	ValidateIncludedCols('03.5', 12, [13], 1, 48);
	ValidateIncludedCols('03.5', 14, [15], 1, 48);
	ValidateIncludedCols('03.5', 16, [17], 1, 48);
	ValidateIncludedCols('03.5', 18, [19], 1, 48);
	ValidateIncludedCols('03.5', 20, [21], 1, 48);
	ValidateIncludedCols('03.5', 22, [23], 1, 48);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.5_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function%>
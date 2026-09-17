<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows("02.1.2.1", 3, 1, 33, 4, 47);

	SumRowAllColsByIndex("02.1.2.1", 23, 3, 52, [1,3,5,8,11,13,15,17,19,21]);
	SumRowAllColsByIndex("02.1.2.1", 24, 3, 52, [2,4,6,7,9,10,12,14,16,18,20,22]);

	ValidateDividedRows("02.1.2.1", 24, [25,26,27,30,31,32,33], 3, 52);
	ValidateDividedRows("02.1.2.1", 27, [28,29], 3, 52);
	ValidateDividedRows("02.1.2.1", 32, [33], 3, 52);

	ValidateDividedCols("02.1.2.1", 3, [48,49,50,51,52], 1, 33);
	ValidateIncludedCols("02.1.2.1", 49, [50], 1, 33);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.1.2.1_inc.asp" -->
	<%
End Sub%>
<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows("02.1.1.3", 3, 1, 23, 4, 16);

	SumRowAllColsByIndex("02.1.1.3", 9, 3, 16, [1,3,5,7]);
	SumRowAllColsByIndex("02.1.1.3", 10, 3, 16, [11,12,13]);

	ValidateEqIncludedRowsWithIncludedRows("02.1.1.3", [11,12,13], [2,4,6,8], 3, 16);
	ValidateDividedRows("02.1.1.3", 10, [14,15,16,17,18,19,22], 3, 16);
	ValidateDividedRows("02.1.1.3", 17, [18,19], 3, 16);
	ValidateIncludedRows("02.1.1.3", 22, [23], 3, 16);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.1.1.3_inc.asp" -->
	<%
End Sub%>
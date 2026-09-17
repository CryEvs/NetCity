<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 41
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows('02.8.1', 3, 2, 13, 4, 10);

	SumRowAllColsByIndex('02.8.1', 1, 3, 11, [2,5,8,9,10,11,12,13]);

	ValidateDividedRows('02.8.1', 2, [3, 4], 3, 11);
	ValidateDividedRows('02.8.1', 5, [6, 7], 3, 11);

	ValidateDividedCols('02.8.1', 3, [11], 1, 14);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.8.1_inc.asp" -->
	<%
End Sub%>
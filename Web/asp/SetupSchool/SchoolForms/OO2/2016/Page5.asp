<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllColsByIndex('01.5', 1, 4, 8, [2,4,6,7]);
	SumColAllRows('01.5', 3, 1, 11, 5, 8);

	ValidateIncludedCols('01.5', 3, [4], 1, 11);
	ValidateIncludedRows('01.5', 2, [3], 3, 8);
	ValidateIncludedRows('01.5', 4, [5], 3, 8);
	ValidateIncludedRows('01.5', 8, [9,10,11], 3, 8);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.5_inc.asp" -->
	<%
End Sub%>
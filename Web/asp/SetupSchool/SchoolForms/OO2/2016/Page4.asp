<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllCols('01.3', 4, 3, 4, 1, 3);
	SumColAllRows('01.4', 3, 1, 3, 5, 7);
	SumRowAllCols('01.4', 4, 3, 7, 1, 3);

	ValidateIncludedCols('01.3', 3, [4], 1, 4);
	ValidateIncludedCols('01.4', 3, [4], 1, 4);
	ValidateDividedRows('01.4', 5, [6], 3, 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.3_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section1.4_inc.asp" -->
	<%
End Sub%>
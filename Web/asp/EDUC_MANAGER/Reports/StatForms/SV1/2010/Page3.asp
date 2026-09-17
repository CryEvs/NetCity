<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	SumColForRowRange(3, 8, 1, 8, [4,6,7]);
	SumRowAllColsByIndex(3, 7, 3, 10, [4,5,6]);
	SumRowAllColsByIndex(3, 8, 3, 10, [1,2,3,7]);
	ValidateDividedCols(3, 8, [9,10], 1, 6);
	ValidateDividedRows(3, 9, [10], 3, 3);
	ValidateDividedRows(3, 11, [12], 3, 3);
	ValidateDividedRows(3, 17, [18], 3, 3)
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub
%>


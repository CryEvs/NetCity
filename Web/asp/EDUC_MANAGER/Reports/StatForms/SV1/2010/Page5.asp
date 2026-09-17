<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	ValidateDividedRows(6, 1, [2], 4, 7);
	SumColForRowRange(6, 3, 1, 3, [4,5,6,7]);
	ValidateDividedCols(7, 3, [4], 1, 1);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
	<%
End Sub
%>


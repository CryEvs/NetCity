<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllCols(3, 1, 3, 16, 2, 10);

	ValidateDividedRows(3, 1, [11,12,13], 3, 16);
	ValidateDividedRows(3, 1, [22], 16, 16);

	ValidateDividedRows(3, 14, [15], 3, 16);

	ValidateDividedRows(3, 16, [17,18,19], 3, 16);

	ValidateDividedRows(3, 20, [21], 3, 16);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub
%>
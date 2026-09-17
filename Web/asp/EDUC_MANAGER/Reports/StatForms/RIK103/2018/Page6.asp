<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>
<script> <!--
function CalculateOSH() {
	SumRow(5, 21, [3], 22, 27);
	SumRow(5, 52, [3], 53, 55);

	ValidateDividedRows(5, 1, [2], 3, 3);
	ValidateDividedRows(5, 3, [4], 3, 3);
	ValidateDividedRows(5, 5, [6], 3, 3);
	ValidateDividedRows(5, 7, [8,9,10,11,12,13], 3, 3);
	ValidateDividedRows(5, 14, [15,16,17], 3, 3);
	ValidateDividedRows(5, 21, [22,23,24,25,26,27], 3, 3);
	ValidateDividedRows(5, 21, [28], 3, 3);
	ValidateDividedRows(5, 29, [30,31,32,33,34,35,36], 3, 3);
	ValidateDividedRows(5, 36, [37], 3, 3);
	ValidateDividedRows(5, 38, [39], 3, 3);
	ValidateDividedRows(5, 40, [41], 3, 3);
	ValidateDividedRows(5, 42, [43], 3, 3);
	ValidateIncludedRows(5, 44, [45,46,47], 3, 3);
	ValidateIncludedRows(5, 48, [49,50,51], 3, 3);
	ValidateDividedRows(5, 52, [53,54,55,56], 3, 3);
	ValidateDividedRows(5, 58, [59], 3, 3);
	ValidateDividedRows(5, 60, [61], 3, 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<%
End Sub
%>
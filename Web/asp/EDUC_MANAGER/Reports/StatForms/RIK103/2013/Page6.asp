<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>
<script> <!--
function CalculateOSH() {
	SumRow(5, 21, [3], 22, 27);
	SumRow(5, 57, [3], 58, 60);

	ValidateDividedRows(5, 1, [2], 3, 3);
	ValidateDividedRows(5, 3, [4], 3, 3);
	ValidateDividedRows(5, 5, [6], 3, 3);
	ValidateDividedRows(5, 7, [8,9,10,11,12,13], 3, 3);
	ValidateDividedRows(5, 14, [15,16,17], 3, 3);
	ValidateDividedRows(5, 21, [22,23,24,25,26,27], 3, 3);
	ValidateDividedRows(5, 21, [28], 3, 3);
	ValidateDividedRows(5, 29, [30,31,32,33,34,35,36], 3, 3);
	ValidateDividedRows(5, 39, [40], 3, 3);
	ValidateDividedRows(5, 41, [42], 3, 3);
	ValidateDividedRows(5, 43, [44,48,49], 3, 3);
	ValidateIncludedRows(5, 44, [45,46,47], 3, 3);
	ValidateDividedRows(5, 50, [51,55,56], 3, 3);
	ValidateIncludedRows(5, 51, [52,53,54], 3, 3);
	ValidateDividedRows(5, 63, [64], 3, 3);
	ValidateDividedRows(5, 65, [66], 3, 3);
	ValidateDividedRows(5, 67, [68], 3, 3);

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
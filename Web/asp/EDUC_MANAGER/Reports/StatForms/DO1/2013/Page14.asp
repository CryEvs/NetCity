<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 14
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllColsByIndex('07.7', 1, 3, 31, [2,3,7,8]);

	ValidateIncludedRows('07.7', 3, [4,5,6], 3, 31)
	ValidateIncludedCols('07.7', 3, [6], 1, 8);
	ValidateIncludedCols('07.7', 3, [7,8], 1, 8);
	ValidateIncludedCols('07.7', 3, [9], 1, 8);
	ValidateIncludedCols('07.7', 3, [10,11,12,13], 1, 8);
	ValidateIncludedCols('07.7', 14, [15], 1, 8);
	ValidateIncludedCols('07.7', 16, [17], 1, 8);
	ValidateIncludedCols('07.7', 18, [19], 1, 8);
	ValidateIncludedCols('07.7', 3, [16,18,20,21], 1, 8);
	ValidateIncludedCols('07.7', 3, [22,23,24,25,26], 1, 8);
	ValidateIncludedCols('07.7', 3, [27,28,29], 1, 8);
	ValidateIncludedCols('07.7', 29, [30], 1, 8);
	ValidateIncludedCols('07.7', 30, [31], 1, 8);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section7.7_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	'IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
End Sub
%>
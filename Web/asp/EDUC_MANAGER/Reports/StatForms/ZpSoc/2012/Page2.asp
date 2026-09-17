<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script> <!--
function CalculateOSH() {
	SumRowAllColsByIndex(1, 1, 1, 11, [2,3,4,6,7,8,10,11,12,13]);

	ValidateDividedCols(1, 3, [4], 1, 13);
	ValidateIncludedCols(1, 3, [6,7,8], 1, 13);
	ValidateIncludedCols(1, 5, [9,10,11], 1, 13);

	ValidateDividedRows(1, 4, [5], 1, 11);
	ValidateDividedRows(1, 8, [9], 1, 11);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
	<%
End Sub
%>
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
	SumColForRowRange(1, 7, 2, 94, [4,5,6]);
	SumColForRowRange(1, 12, 2, 52, [9,10,11]);
	SumColForRowRange(1, 12, 54, 91, [9,10,11]);
	SumRowAllCols(1, 1, 4, 7, 2, 91);
	SumRowAllColsByIndex(1, 1, 9, 12, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91]);
	ValidateIncludedRows(1, 1, [92,93,94], 4, 6);
	ValidateIncludedRows(1, 1, [95], 12, 12);
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
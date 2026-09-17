<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumRowAllColsByIndex(4, 1, 4, 6, [2,8,9,10,11]);
	SumRowAllColsByIndex(4, 1, 8, 10, [2,8,9,10,11]);
	SumColForRowRange(4, 7, 1, 11, [4,5,6]);
	SumColForRowRange(4, 11, 1, 11, [8,9,10]);
	ValidateIncludedRows(4, 2, [3,4,5,6,7], 4, 11);
	ValidateDividedRows(4, 1, [2,3,4,5,6,7,8,9,10,11], 3, 3);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
	<%
End Sub
%>
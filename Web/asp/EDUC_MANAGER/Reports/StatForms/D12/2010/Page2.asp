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
	ValidateDividedRows(1, 6, [7], 3, 5);
	SumColForRowRange(1, 6, 1, 15, [3, 4, 5]);
	SumRowAllColsByIndex(1, 1, 3, 6, [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15]);
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

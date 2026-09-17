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
	SumColForRowRange(3, 5, 2, 2, [3,4]);
	SumColForRowRange(3, 8, 2, 2, [6,7]);
	SumColForRowRange(3, 5, 4, 17, [3,4]);
	SumColForRowRange(3, 8, 4, 17, [6,7]);

	SumRowAllColsByIndex(3, 3, 3, 8, [4,5,6,8,9,10]);
	SumRowAllColsByIndex(3, 1, 3, 8, [2,3,11,12,13,15,16,17]);

	ValidateDividedRows(3, 6, [7], 3, 8);
	ValidateDividedRows(3, 13, [14], 3, 8);
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
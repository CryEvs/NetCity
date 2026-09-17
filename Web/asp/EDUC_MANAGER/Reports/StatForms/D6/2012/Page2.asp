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
	SumColForRowRange(1, 6, 1, 5, [3,4,5]);
	SumColForRowRange(1, 10, 1, 5, [7,8,9]);
	SumColForRowRange(1, 11, 1, 5, [3,7]);
	SumColForRowRange(1, 12, 1, 5, [4,8]);
	SumColForRowRange(1, 13, 1, 5, [5,9]);
	SumColForRowRange(1, 14, 1, 5, [6,10]);

	SumRowAllColsByIndex(1, 6, 3, 14, [1,2,3,4,5]);

	ValidateCell(1, 6, 14, [7,8,9], null);

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
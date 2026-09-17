<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	SumColForRowRange(8, 5, 1, 3, [3,4]);
	SumColForRowRange(8, 8, 1, 3, [6,7]);
	SumColForRowRange(8, 11, 1, 3, [9,10]);
	SumColForRowRange(8, 14, 1, 3, [12,13]);
	SumColForRowRange(8, 17, 1, 3, [15,16]);

	SumRowAllCols(8, 4, 3, 17, 1, 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
	<%
End Sub
%>
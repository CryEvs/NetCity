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
	SumCol(4, 4, [2,3,4,5,6,7,8,9,10], 5, 17);
	
	SumRowAllCols(4, 1, 3, 22, 2, 9);
	
	ValidateDividedCols(4, 4, [19,20,21], 1, 10);

	ValidateDividedRows(4, 1, [10], 3, 22);
	ValidateDividedRows(4, 1, [11], 18, 18);

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
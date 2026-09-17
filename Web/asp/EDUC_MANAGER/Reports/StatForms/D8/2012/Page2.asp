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
	SumRowAllColsByIndex(1, 2, 3, 20, [4,6,8]);
	SumRowAllColsByIndex(1, 3, 3, 20, [5,7,9]);

	ValidateDividedRows(1, 1, [12], 3, 20);
	ValidateDividedRows(1, 2, [13], 3, 20);
	ValidateDividedRows(1, 3, [14], 3, 20);
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
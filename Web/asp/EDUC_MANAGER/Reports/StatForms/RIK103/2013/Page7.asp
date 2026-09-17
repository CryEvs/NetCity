<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH() {
	ValidateDividedRows(6, 2, [3,4,5], 3, 3);
	ValidateIncludedRows(6, 6, [7,8,9,10], 3, 3);
	ValidateDividedRows(6, 11, [12,13,14], 3, 3);
	ValidateDividedRows(6, 15, [16,17,18,19,20,21], 3, 3);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<%
End Sub
%>
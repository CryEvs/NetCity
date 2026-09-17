<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColForRowRange(5, 7, 1, 14, [3, 5]);
	SumColForRowRange(5, 8, 1, 14, [4, 6]);
	SumRowAllCols(5, 15, 3, 8, 1, 14);
	SumRowAllCols(5, 15, 9, 9, 9, 14);
	
	ValidateIncludedCols(5, 3, [4], 1, 14);
	ValidateIncludedCols(5, 5, [6], 1, 14);
	ValidateIncludedCols(5, 7, [9], 1, 14);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<%
End Sub
%>

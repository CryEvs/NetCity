<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH() {
	SumColForRowRange(10, 7, 1, 12, [3, 5]);
	SumColForRowRange(10, 8, 1, 12, [4, 6]);
	SumRowAllColsByIndex(10,13,3,8, [1,3,5,7,9,11]);
	SumRowAllColsByIndex(10,14,3,8, [2,4,6,8,10,12]);

	ValidateIncludedCols(10, 3, [4], 1, 12 );
	ValidateIncludedCols(10, 5, [6], 1, 12 );
	return true;	
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section10_inc.asp" -->
	<%
End Sub
%>


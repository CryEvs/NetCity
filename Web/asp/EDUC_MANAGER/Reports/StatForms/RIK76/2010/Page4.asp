<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()
%>

<script> <!--
isInfoFormValid();
function CalculateOSH()
{
	SumColAllRows('01.3', 5, 2, 12, 3, 4);
	SumColAllRows('01.3', 8, 2, 12, 6, 7);
	SumRowAllColsByIndex('01.3', 1, 3, 8, [2,3,11,12]);

	ValidateDividedRows('01.3', 3, [4, 5, 6, 8, 9, 10], 3, 8);
	ValidateDividedRows('01.3', 6, [7], 3, 8);
	ValidateIncludedCols('01.3', 5, [8], 1, 12);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.3_inc.asp" -->
	<%
End Sub
%>

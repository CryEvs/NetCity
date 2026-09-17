<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>

<script> 
<!--
isInfoFormValid();
function CalculateOSH()
{
	SumColAllRows('01.1', 5, 2, 20, 3, 4);
	SumColAllRows('01.1', 8, 2, 20, 6, 7);
	SumColAllRows('01.1', 11, 2, 20, 9, 10);
	SumRowAllColsByIndex('01.1', 1, 3, 11, [2,3,11,12,14,15,16]);

	ValidateDividedRows('01.1', 3, [4, 5, 6, 8, 9, 10], 3, 11);
	ValidateDividedRows('01.1', 6, [7], 3, 11);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.1_inc.asp" -->
	<%
End Sub

%>


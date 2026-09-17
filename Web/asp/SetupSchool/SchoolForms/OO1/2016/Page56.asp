<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 56
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows('02.13.3', 4, 1, 60, 5, 10);
	SumRowAllCols('02.13.3', 1, 4, 17, 2, 60);

	ValidateDividedCols('02.13.3', 4, [11, 12, 13], 1, 60);
	ValidateDividedCols('02.13.3', 13, [14, 15], 1, 60);
	ValidateDividedCols('02.13.3', 13, [16], 1, 60);
	ValidateDividedCols('02.13.3', 13, [17], 1, 60);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.13.3_inc.asp" -->
	<%
End Sub%>
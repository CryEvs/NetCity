<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 55
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows('02.13.2', 4, 1, 60, 5, 10);
	SumRowAllCols('02.13.2', 1, 4, 17, 2, 60);

	ValidateDividedCols('02.13.2', 4, [11, 12, 13], 1, 60);
	ValidateDividedCols('02.13.2', 13, [14, 15], 1, 60);
	ValidateDividedCols('02.13.2', 13, [16], 1, 60);
	ValidateDividedCols('02.13.2', 13, [17], 1, 60);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.13.2_inc.asp" -->
	<%
End Sub%>
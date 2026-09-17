<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 61
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllCols('02.14.2.2', 1, 3, 14, 2, 29);

	ValidateDividedCols('02.14.2.2', 3, [4, 5], 1, 29);
	ValidateDividedCols('02.14.2.2', 6, [7, 8], 1, 29);
	ValidateDividedCols('02.14.2.2', 9, [10, 11], 1, 29);
	ValidateDividedCols('02.14.2.2', 12, [13, 14], 1, 29);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.14.2.2_inc.asp" -->
	<%
End Sub%>
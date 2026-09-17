<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllCols('02.6', 1, 3, 5, 6, 9);

	ValidateIncludedRows('02.6', 1, [2,3,4,5], 3, 5);
	ValidateIncludedRows('02.7', 1, [2], 3, 3);
	ValidateIncludedRows('02.7', 2, [3], 3, 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.6_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.7_inc.asp" -->
	<%
End Sub%>
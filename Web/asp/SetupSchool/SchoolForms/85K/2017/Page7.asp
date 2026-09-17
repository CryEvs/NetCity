<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumColAllRows("04.1", 3, 1, 2, 4, 7);


	ValidateIncludedCells("04.1", 2, 3, [3,4], 3);
	ValidateIncludedCells("04.1", 1, 3, [2], 3);
	ValidateIncludedCells("04.1", 3, 3, [5], 3);

	ValidateIncludedCols("04.1", 3, [8], 1, 2);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4.1_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section4.2_inc.asp" -->
	<%
End Sub%>
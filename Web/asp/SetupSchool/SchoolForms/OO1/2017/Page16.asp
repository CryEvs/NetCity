<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 16
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows("02.2.2", 3, 1, 14, 4, 16);

	ValidateDividedRows("02.2.2", 2, [3,4,5,6,7,8,9,10,11,12,13,14], 3, 16);
	ValidateDividedCols("02.2.2", 3, [17,18], 3, 14);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.2.2_inc.asp" -->
	<%
End Sub%>
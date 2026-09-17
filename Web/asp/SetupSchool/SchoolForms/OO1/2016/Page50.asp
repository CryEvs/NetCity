<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 50
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	ValidateDividedRows('02.11.3', 1, [2, 8, 9, 10, 11, 12, 13, 14], 3, 5);
	ValidateDividedRows('02.11.3', 2, [3, 4, 5, 6, 7], 3, 5);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.11.3_inc.asp" -->
	<%
End Sub%>
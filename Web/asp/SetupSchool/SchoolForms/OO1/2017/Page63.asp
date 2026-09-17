<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 63
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllCols('02.14.3.1', 1, 3, 5, 2, 29);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.14.3.1_inc.asp" -->
	<%
End Sub%>
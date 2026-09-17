<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 40
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllCols('02.7.3', 1, 3, 9, 2, 7);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.7.3_inc.asp" -->
	<%
End Sub%>
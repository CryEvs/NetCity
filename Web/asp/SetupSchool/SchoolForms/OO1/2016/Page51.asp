<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 51
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllCols('02.12.1', 2, 3, 4, 3, 6);
	SumRowAllColsByIndex('02.12.1', 1, 3, 4, [2,7,8,9,10,11,12,13,14,15,16]);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.12.1_inc.asp" -->
	<%
End Sub%>
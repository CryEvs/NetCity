<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 45
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllColsByIndex('02.10.1', 1, 3, 8, [2,13]);

	ValidateIncludedRows('02.10.1', 13, [14], 3, 8);
	ValidateIncludedRows('02.10.1', 2, [15, 16], 3, 8);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.10.1_inc.asp" -->
	<%
End Sub%>
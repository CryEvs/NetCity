<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	ValidateIncludedCols("01.4", 3, [4], 1, 2);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.4_inc.asp" -->
	<%
End Sub%>
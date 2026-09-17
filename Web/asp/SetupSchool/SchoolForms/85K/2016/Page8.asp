<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	ValidateIncludedCells('04.2', 7, 3, [8,9], 3);
	ValidateIncludedCells('04.2', 10, 3, [11], 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4.2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<%
End Sub%>
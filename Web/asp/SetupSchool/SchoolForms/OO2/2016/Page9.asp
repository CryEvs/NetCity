<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	ValidateCell('02.4', 3, 3, [4], 3);
	ValidateCell('02.4', 3, 3, [5], 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.4_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.5_inc.asp" -->
	<%
End Sub%>
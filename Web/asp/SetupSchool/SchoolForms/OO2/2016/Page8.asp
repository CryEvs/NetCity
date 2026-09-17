<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	ValidateEqCell('02.3', 1, 3, [2,3,4], 3);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.3_inc.asp" -->
	<%
End Sub%>
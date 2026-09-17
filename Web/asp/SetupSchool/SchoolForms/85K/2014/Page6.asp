<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('02.7', 1, 3, 3, 2, 11);
	SumRowAllCols('02.8', 1, 3, 7, 2, 8);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.7_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section2.8_inc.asp" -->
	<%
End Sub%>
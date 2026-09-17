<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 25
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows("02.5.1.2", 3, 2, 8, 4, 16);
	
	SumRowAllColsByIndex("02.5.1.2", 1, 3, 16, [2,3,4]);
	SumRowAllColsByIndex("02.5.1.2", 5, 3, 16, [6,7,8]);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.5.1.2_inc.asp" -->
	<%
End Sub%>
<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 23
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows("02.4.3", 3, 2, 5, 4, 5);
	
	SumRowAllColsByIndex("02.4.3", 1, 3, 6, [2,3,4]);

	ValidateIncludedRows("02.4.3", 1, [5], 3, 6);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.4.3_inc.asp" -->
	<%
End Sub%>
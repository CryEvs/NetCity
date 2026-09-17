<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 33
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows("02.5.3.3", 3, 2, 12, 4, 17);

	SumRowAllColsByIndex("02.5.3.3", 1, 3, 17, [2,3,4,5]);
	SumRowAllColsByIndex("02.5.3.3", 6, 3, 17, [7,8,9,10]);

	ValidateDividedRows("02.5.3.3", 6, [11,12], 3, 17);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.5.3.3_inc.asp" -->
	<%
End Sub%>
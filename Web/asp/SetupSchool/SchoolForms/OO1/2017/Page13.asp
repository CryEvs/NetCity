<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 13
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows("02.1.3.2", 3, 1, 19, 4, 17);

	SumRowAllColsByIndex("02.1.3.2", 9, 3, 17, [1,3,5,7]);
	SumRowAllColsByIndex("02.1.3.2", 10, 3, 17, [2,4,6,8]);

	ValidateDividedRows("02.1.3.2", 10, [11,12,13,16,17,18], 3, 17);
	ValidateDividedRows("02.1.3.2", 13, [14,15], 3, 17);
	ValidateDividedRows("02.1.3.2", 18, [19], 3, 17);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2.1.3.2_inc.asp" -->
	<%
End Sub%>
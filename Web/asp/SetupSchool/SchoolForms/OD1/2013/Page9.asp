<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols(8,3,3,4,4,8);
	SumRowAllColsByIndex(8,2,3,4,[3,9,10]);
	SumRowAllCols(8,11,3,4,12,17);
	SumRowAllColsByIndex(8,1,3,4,[2,11,18,19]);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
	<%
End Sub

Sub AutoCalcEMInfo()

End Sub
%>
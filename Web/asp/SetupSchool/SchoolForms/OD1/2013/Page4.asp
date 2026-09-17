<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	SumRowByIndex(3,3,[3],[4,5,6,7,8,9,10,12,13,14]);
	ValidateDividedRows(3,10,[11],3,3);
	ValidateDividedRows(3,15,[16],3,3);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
	<%
End Sub

Sub AutoCalcEMInfo()

End Sub
%>
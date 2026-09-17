<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 12
End Function

Sub SpecialOnHead()%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllColsByIndex('05.2', 1, 3, 3, [2,4,5,6,7,8,9,10,11]);
	ValidateDividedRows('05.2', 2, [3], 3, 3);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section5.2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<%
End Sub

Sub AutoCalcEMInfo( )
End Sub
%>
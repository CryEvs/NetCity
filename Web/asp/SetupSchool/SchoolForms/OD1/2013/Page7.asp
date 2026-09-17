<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	ValidateDividedRows(6,5,[6],3,3);
	ValidateDividedRows(6,16,[17],3,3);
	ValidateDividedRows(6,20,[21],3,3);
	ValidateDividedRows(6,31,[32],3,3);
	ValidateDividedRows(6,34,[35],3,3);
	ValidateDividedRows(6,36,[37,38],3,3);
	ValidateIncludedRows(6,36,[39],3,3);
    ValidateIncludedRows(6,36,[41],3,3);
    ValidateIncludedRows(6,36,[51],3,3);
	ValidateIncludedRows(6,39,[40],3,3);
	ValidateDividedRows(6,41,[42],3,3);
	ValidateDividedRows(6,51,[52],3,3);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
	<%
End Sub

Sub AutoCalcEMInfo()

End Sub
%>
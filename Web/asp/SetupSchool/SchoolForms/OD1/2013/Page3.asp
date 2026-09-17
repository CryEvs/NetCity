<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols(2, 10, 3, 3, 5, 9);

	ValidateDividedRows(2, 10, [11,12,15,16], 3, 3);
	ValidateDividedRows(2, 12, [13,14], 3, 3);
	ValidateIncludedRows(2, 10, [15,16], 3, 3);
	ValidateDividedRows(2, 10, [17], 3, 3);
	ValidateDividedRows(2, 17, [18], 3, 3);
	ValidateDividedRows(2, 18, [19], 3, 3);
	ValidateDividedRows(2, 19, [20], 3, 3);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<%
End Sub

Sub AutoCalcEMInfo()

End Sub
%>
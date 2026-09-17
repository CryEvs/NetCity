<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 3
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section3_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
	function CalculateOSH() {
		ValidateDividedCols(3, 8, [9, 10], 1, 6);
		ValidateCell(3, 4, 8, [8, 10], 3);
		ValidateCell(3, 7, 8, [12, 13, 14, 16], 3);
		ValidateIncludedRows(3, 8, [9], 3, 3);
		ValidateIncludedRows(3, 10, [11], 3, 3);
		SumRow(3, 7, [3, 4, 5, 6, 7, 8, 9, 10], 1, 6);
		SumColByIndex(3, 8, [1, 2, 3, 4, 5, 6], [4, 6, 7]);
		SumColForRowRange(3, 8, 1, 8, [4,6,7]);
		return true;
	}
//--></script>
<%
	End If
End Sub
%>

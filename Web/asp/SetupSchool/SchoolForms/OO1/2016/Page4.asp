<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumRowAllCols("01.3", 2, 3, 9, 3, 10);
	SumRowAllCols("01.3", 12, 3, 9, 13, 20);
	SumRowAllCols("01.3", 22, 3, 9, 23, 30);

	ValidateIncludedRows("01.3", 1, [2], 3, 9);
	ValidateIncludedRows("01.3", 2, [3,4,5,6,7,8,9,10], 3, 9);
	ValidateIncludedRows("01.3", 11, [12], 3, 9);
	ValidateIncludedRows("01.3", 12, [13,14,15,16,17,18,19,20], 3, 9);
	ValidateIncludedRows("01.3", 21, [22], 3, 9);
	ValidateIncludedRows("01.3", 22, [23,24,25,26,27,28,29,30], 3, 9);
	ValidateIncludedRows("01.3", 1, [32], 3, 3);
	ValidateIncludedRows("01.3", 32, [33], 3, 3);
	ValidateIncludedRows("01.3", 11, [34], 3, 3);
	ValidateIncludedRows("01.3", 34, [35], 3, 3);
	ValidateIncludedRows("01.3", 21, [36], 3, 3);
	ValidateIncludedRows("01.3", 36, [37], 3, 3);
	ValidateIncludedRows("01.3", 31, [38], 3, 3);
	ValidateIncludedRows("01.3", 38, [39], 3, 3);

	ValidateIncludedCols("01.3", 3, [4], 1, 31);
	ValidateIncludedCols("01.3", 3, [6], 1, 31);
	ValidateIncludedCols("01.3", 6, [7], 1, 31);
	ValidateIncludedCols("01.3", 3, [8], 1, 31);
	ValidateIncludedCols("01.3", 8, [9], 1, 31);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.3_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function%>
<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 71
End Function

Sub SpecialOnHead()%>
<script><!--
function CalculateOSH()
{
	SumColAllRows('03.2', 3, 2, 5, 4, 9);
	SumColAllRows('03.2', 3, 8, 48, 4, 9);

	SumColAllRows('03.2', 10, 2, 5, 11, 16);
	SumColAllRows('03.2', 10, 8, 48, 11, 16);

	SumRowAllColsByIndex('03.2', 7, 3, 17, [8,9,10,11,12,13,14,15,16,17,18,22,23,24,25,26,27]);
	SumRowAllColsByIndex('03.2', 6, 3, 17, [7,28,29,33,34,35,36,37,38,39]);
	SumRowAllColsByIndex('03.2', 1, 3, 17, [2,6,40,41]);

	ValidateIncludedRows('03.2', 2, [3, 4, 5], 3, 17);
	ValidateDividedRows('03.2', 18, [19, 20, 21], 3, 17);
	ValidateDividedRows('03.2', 29, [30, 31, 32], 3, 17);
	ValidateDividedRows('03.2', 41, [42, 43, 44], 3, 17);
	ValidateDividedRows('03.2', 6, [45, 47, 49, 52], 3, 17);
	ValidateIncludedRows('03.2', 45, [46], 3, 17);
	ValidateIncludedRows('03.2', 47, [48], 3, 17);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.2_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function%>
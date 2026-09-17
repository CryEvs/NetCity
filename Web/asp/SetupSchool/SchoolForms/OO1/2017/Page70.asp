<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 70
End Function

Sub SpecialOnHead()%>
<script><!--
$(document).ready(function() {
	$('input')
		.filter(function() { return this.name.match(/T03.1[0-9]{2}16/); })
		.each(function(index, value) {
			$(value).on("keypress", function(key) {
				var reg = /^\d+([.,]\d{0,1})?$/;
				return reg.test(this.value + String.fromCharCode(key.which));
			});
		});
});

function CalculateOSH()
{
	SumRowAllColsByIndex('03.1', 7, 3, 15, [8,9,10,11,12,13,14,15,16,17,18,22,23,24,25,26,27]);
	SumRowAllColsByIndex('03.1', 6, 3, 15, [7,28,29,33,34,35,36,37,38,39]);
	SumRowAllColsByIndex('03.1', 1, 3, 15, [2,6,40,41]);

	SumRowAllColsByIndex('03.1', 58, 3, 3, [60,61]);

	ValidateIncludedRows('03.1', 2, [3, 4, 5], 3, 16);
	ValidateDividedRows('03.1', 18, [19, 20, 21], 3, 16);
	ValidateDividedRows('03.1', 29, [30, 31, 32], 3, 16);
	ValidateDividedRows('03.1', 41, [42, 43, 44], 3, 15);
	ValidateDividedRows('03.1', 6, [45, 47, 49, 52], 3, 16);
	ValidateIncludedRows('03.1', 45, [46], 3, 16);
	ValidateIncludedRows('03.1', 47, [48], 3, 16);
	ValidateIncludedRows('03.1', 49, [50], 3, 16);
	ValidateIncludedRows('03.1', 50, [51], 3, 16);
	ValidateIncludedRows('03.1', 29, [53], 3, 4);
	ValidateIncludedRows('03.1', 2, [54], 3, 3);
	ValidateIncludedRows('03.1', 3, [55], 3, 3);
	ValidateIncludedRows('03.1', 54, [55], 3, 3);
	ValidateIncludedRows('03.1', 6, [56], 3, 3);
	ValidateIncludedRows('03.1', 7, [57], 3, 3);
	ValidateIncludedRows('03.1', 56, [57], 3, 3);
	ValidateIncludedRows('03.1', 58, [59], 3, 3);
	ValidateIncludedRows('03.1', 1, [60, 61], 3, 3);
	ValidateIncludedRows('03.1', 7, [62], 3, 3);

	ValidateIncludedCols('03.1', 3, [4, 10, 12], 1, 53);
	ValidateIncludedCols('03.1', 4, [6, 7], 1, 53);
	ValidateIncludedCols('03.1', 4, [8, 9], 1, 53);
	ValidateIncludedCols('03.1', 10, [11], 1, 53);
	ValidateIncludedCols('03.1', 3, [13, 14], 1, 53);
	ValidateIncludedCols('03.1', 3, [15], 1, 53);

	ValidateIncludedCells('03.1', 6, 16, [7,28,29,33,34,35,36,37,38,39], 16)
	ValidateIncludedCells('03.1', 7, 16, [8], 16)
	ValidateIncludedCells('03.1', 29, 16, [30,31,32], 16)

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function%>
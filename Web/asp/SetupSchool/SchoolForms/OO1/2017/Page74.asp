<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 74
End Function

Sub SpecialOnHead()%>
<script><!--
$(document).ready(function() {
	$('input')
		.filter(function() { return this.name.match(/T03.4[0-9]{2}0[3-5]|13/); })
		.each(function(index, value) {
			$(value).on("keypress", function(key) {
				var reg = /^\d+([.,]\d{0,2})?$/;
				return reg.test(this.value + String.fromCharCode(key.which));
			});
		});
});

function CalculateOSH()
{
	SumRowAllColsByIndex('03.4', 7, 3, 13, [8,9,10,11,12,13,14,15,16,17,18,22,23,24,25,26,27]);
	SumRowAllColsByIndex('03.4', 6, 3, 13, [7,28,29,33,34,35,36,37,38,39]);
	SumRowAllColsByIndex('03.4', 1, 3, 13, [2,6,40,41]);

	ValidateIncludedRows('03.4', 2, [3, 4, 5], 3, 13);
	ValidateDividedRows('03.4', 18, [19, 20, 21], 3, 13);
	ValidateDividedRows('03.4', 29, [30, 31, 32], 3, 13);
	ValidateDividedRows('03.4', 41, [42, 43, 44], 3, 13);
	ValidateDividedRows('03.4', 6, [45, 47, 49, 52], 3, 13);
	ValidateIncludedRows('03.4', 45, [46], 3, 13);
	ValidateIncludedRows('03.4', 47, [48], 3, 13);

	ValidateIncludedCols('03.4', 4, [5], 1, 48);
	ValidateIncludedCols('03.4', 7, [8, 9], 1, 48);
	ValidateIncludedCols('03.4', 10, [11], 1, 48);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.4_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function%>
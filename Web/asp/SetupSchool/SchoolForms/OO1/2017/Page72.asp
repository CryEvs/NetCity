<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 72
End Function

Sub SpecialOnHead()%>
<script><!--
$(document).ready(function(){
	$('input')
		.filter(function() { return this.name.match(/T03.3.1[0-9]{2}05/); })
		.each(function(index, value) {
			$(value).on("keypress", function(key) {
				var reg = /^\d+([.,]\d?)?$/;
				return reg.test(this.value + String.fromCharCode(key.which));
			});
		});
});

function CalculateOSH()
{
	SumRowAllColsByIndex('03.3.1', 4, 3, 5, [5,6,7,8,9,10,11,12,13,14,15,19,20,21,22,23,24]);
	SumRowAllColsByIndex('03.3.1', 3, 3, 6, [4,25,26,30,31,32,33,34,35,36]);
	SumRowAllColsByIndex('03.3.1', 1, 3, 4, [2,3,37,38]);

	SumRowAllColsByIndex('03.3.1', 49, 3, 3, [51,52]);

	ValidateDividedCols('03.3.1', 3, [4], 1, 48);
	ValidateDividedRows('03.3.1', 15, [16, 17, 18], 3, 5);
	ValidateDividedRows('03.3.1', 38, [39, 40, 41], 3, 4);
	ValidateDividedRows('03.3.1', 3, [42, 44], 3, 5);
	ValidateIncludedRows('03.3.1', 42, [43], 3, 5);
	ValidateIncludedRows('03.3.1', 44, [45], 3, 5);
	ValidateIncludedRows('03.3.1', 4, [46], 3, 3);
	ValidateIncludedRows('03.3.1', 34, [47], 3, 3);
	ValidateIncludedRows('03.3.1', 26, [48], 3, 3);
	ValidateIncludedRows('03.3.1', 49, [50], 3, 3);
	ValidateIncludedRows('03.3.1', 1, [51, 52], 3, 3);
	ValidateIncludedRows('03.3.1', 4, [53], 3, 3);

	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.3.1_inc.asp" -->
	<%
End Sub%>
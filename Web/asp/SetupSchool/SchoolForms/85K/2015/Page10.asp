<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()%>

<script> 
<!--
$(document).ready(function(){
	$('input[name^="T05.1"]').each(function(index, value) {
		$(value).on("keypress", function(key) {
			var reg = /^\d+([.,]\d?)?$/;
			return reg.test(this.value + String.fromCharCode(key.which));
		});
	});
});

function CalculateOSH()
{
	SumRowAllCols('05.1', 2, 3, 3, 3, 5);
	SumRowAllColsByIndex('05.1', 6, 3, 3, [7,8,10,11,12]);
	SumRowAllColsByIndex('05.1', 1, 3, 3, [2,6]);

	ValidateIncludedCells('04.2', 7, 3, [8,9], 3);
	ValidateIncludedCells('04.2', 10, 3, [11], 3);

	ValidateIncludedRows('05.1', 8, [9], 3, 3);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4.2_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section5.1_inc.asp" -->
	<%
End Sub%>
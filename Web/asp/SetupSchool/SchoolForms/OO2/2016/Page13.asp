<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 13
End Function

Sub SpecialOnHead()%>
<script type="text/javascript">

	var keyPressHandler = function (event, reg) {
		var key, keyChar;

		event = event || window.event;

		if (event.keyCode) {
			key = event.keyCode;
		}
		else if (event.which) {
			key = event.which;
		}

		if (key == null || key == 0 || key == 8 || key == 13 || key == 37 || key == 39 || key == 46 || key == 9) {
			return true;
		}

		keyChar = String.fromCharCode(key);

		reg = reg || /^\d+([.,]\d{0,1})?$/;
		return reg.test(this.value + keyChar);
	};

	$(document).ready(function() {
		$('input')
			.filter(function() { return this.name.match(/T03.3[0-9]{2}0[3,4]/); })
			.each(function(index, value) {
				$(value).on("keypress", function (event) {
					return keyPressHandler.call(this, event, /^\d+([.,]\d{0,1})?$/);
				});
			});

		$('input')
			.filter(function() { return this.name.match(/T03.3[0-9]{2}0[5-9]/); })
			.each(function(index, value) {
				$(value).on("keypress", function (event) {
					return keyPressHandler.call(this, event, /^\d{1,6}([.,]\d{0,1})?$/);
				});
			});

		$('input')
			.filter(function() { return this.name.match(/T03.3[0-9]{2}1[0-3]/); })
			.each(function(index, value) {
				$(value).on("keypress", function (event) {
					return keyPressHandler.call(this, event, /^\d{1,6}([.,]\d{0,1})?$/);
				});
			});
	});

	function CalculateOSH()
	{
		SumColAllRows('03.3', 5, 2, 10, 8, 10);
		SumColAllRows('03.3', 7, 2, 10, 11, 13);
		SumRowAllColsByIndex('03.3', 1, 3, 13, [2,4,7,8]);

		ValidateIncludedCols('03.3', 5, [6], 1, 10);
		ValidateIncludedRows('03.3', 2, [3], 3, 13);
		ValidateIncludedRowsWithPrecision('03.3', 4, [5, 6], 3, 13, 1);
		ValidateIncludedRows('03.3', 9, [10], 3, 13);
		ValidateDividedRows('03.3', 4, [9], 3, 13);

		return true;
	}
</script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.3_inc.asp" -->
	<%
End Sub%>
<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script type="text/javascript">
	$(document).ready(function () {
		$('input')
			.filter(function () { return this.name.match(/T01[0-9]{4}/); })
			.each(function (index, value) {
				$(value).on("keypress", function (event) {
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

					var reg = /^\d{1,6}([.,]\d{0,1})?$/;
					return reg.test(this.value + keyChar);
				});
			});
	});

	function CalculateOSH() {
		SumRowAllColsByIndex(1, 1, 1, 11, [2, 3, 4, 5, 7, 8, 11, 14, 17, 18, 19, 21, 23, 24, 25, 26, 27, 28]);

		ValidateDividedCols(1, 3, [4], 1, 28);
		ValidateEqIncludedCols(1, 3, [6, 7, 8], 1, 28);
		ValidateEqIncludedCols(1, 5, [9, 10, 11], 1, 28);

		ValidateDividedRows(1, 5, [6], 1, 11);
		ValidateIncludedRows(1, 8, [9, 10], 1, 11);
		ValidateIncludedRows(1, 11, [12, 13], 1, 11);
		ValidateIncludedRows(1, 14, [15, 16], 1, 11);
		ValidateDividedRows(1, 19, [20], 1, 11);
		ValidateDividedRows(1, 21, [22], 1, 11);

		return true;
	}
</script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
	<%
End Sub

%>
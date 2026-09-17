<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 12
End Function

Sub SpecialOnHead()%>
<script type="text/javascript">
	$(document).ready(function() {
		$('input')
			.filter(function() { return this.name.match(/T03.2[0-9]{2}0[3-5]/); })
			.each(function(index, value) {
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

	function CalculateOSH()
	{
		SumRowAllCols('03.2', 2, 3, 5, 3, 5);
		SumRowAllCols('03.2', 6, 3, 5, 7, 12);
		SumRowAllColsByIndex('03.2', 1, 3, 5, [2,6,13,14]);
		SumRowAllCols('03.2', 15, 3, 5, 16, 19);

		ValidateIncludedCols('03.2', 4, [5], 1, 19);
		ValidateIncludedCols('03.2', 3, [4], 1, 19);

		return true;
	}
</script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.2_inc.asp" -->
	<%
End Sub%>
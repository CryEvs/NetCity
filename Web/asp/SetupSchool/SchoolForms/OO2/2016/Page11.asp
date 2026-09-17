<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 11
End Function

Sub SpecialOnHead()%>
<script type="text/javascript">
	$(document).ready(function () {
		$('input')
			.filter(function () { return this.name.match(/T03.1[0-9]{2}0[3-5]/); })
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

	function CalculateOSH()
	{
		SumRowAllCols('03.1', 2, 4, 5, 3, 5);
		SumRowAllColsByIndex('03.1', 1, 4, 5, [2,6,7,8,9]);
		SumColAllRows('03.1', 3, 1, 9, 4, 5);

		return true;
	}
</script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.1_inc.asp" -->
	<%
End Sub%>
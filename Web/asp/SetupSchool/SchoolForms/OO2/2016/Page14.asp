<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 14
End Function

Sub SpecialOnHead()%>
<script type="text/javascript">
	$(document).ready(function() {
		$('input')
			.filter(function() { return this.name.match(/T03.40[1-6]04/); })
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

					var reg = /^\d+([.,]\d{0,1})?$/;
					return reg.test(this.value + keyChar);
				});
			});
	});

	function CalculateOSH()
	{
		SumRowAllCols('03.4', 1, 3, 4, 2, 4);

		return true;
	}
</script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section3.4_inc.asp" -->
	<%
End Sub%>
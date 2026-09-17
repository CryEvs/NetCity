<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.6 -->
<table class="print-block">
	<tr><td>
		<div align="center">Раздел 6. Возрастной состав занимающихся по состоянию на 01.01 следующего за отчетным года</div>
		<br/>
		<div align="right">Код по ОКЕИ: человек - 792</div>
	</td></tr>
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td rowspan="2">Вид учреждения</td>
				<td rowspan="2">№<br/>строки</td>
				<td colspan="6">Всего</td>
				<td colspan="6">из них девочек</td>
			</tr>
			<tr align="center" valign="middle">
				<td>до 5 лет</td>
				<td>5-9 лет</td>
				<td>10-14 лет</td>
				<td>15-17 лет</td>
				<td>18 лет и <br/>старше</td>
				<td>Итого <br/>(сумма <br/>граф 3-7)</td>
				<td>до 5 лет</td>
				<td>5-9 лет</td>
				<td>10-14 лет</td>
				<td>15-17 лет</td>
				<td>18 лет и <br/>старше</td>
				<td>Итого <br/>(сумма <br/>граф 9-13)</td>
			</tr>

			<tr align="center" valign="middle">
				<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Всего (сумма строк 02-09)</td>
				<td align="center">01</td>
				<%=DrawInputsWithTotals(1,3,14,6,Array(3,4,5,6,7,8,9,10,11,12,13,14))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;центры</td>
				<td align="center">02</td>
				<%=DrawInputsWithTotals(2,3,14,6,Array(8,14))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дворцы</td>
				<td align="center">03</td>
				<%=DrawInputsWithTotals(3,3,14,6,Array(8,14))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left" class="auto-style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дома</td>
				<td align="center" class="auto-style1">04</td>
				<%=DrawInputsWithTotals(4,3,14,6,Array(8,14))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;станции</td>
				<td align="center">05</td>
				<%=DrawInputsWithTotals(5,3,14,6,Array(8,14))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;школы</td>
				<td align="center">06</td>
				<%=DrawInputsWithTotals(6,3,14,6,Array(8,14))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы</td>
				<td align="center">07</td>
				<%=DrawInputsWithTotals(7,3,14,6,Array(8,14))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы олимпийского резерва</td>
				<td align="center">08</td>
				<%=DrawInputsWithTotals(8,3,14,6,Array(8,14))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивно-адаптивные школы</td>
				<td align="center">09</td>
				<%=DrawInputsWithTotals(9,3,14,6,Array(8,14))%>
			</tr>
		</table>
	</td></tr>
</table>
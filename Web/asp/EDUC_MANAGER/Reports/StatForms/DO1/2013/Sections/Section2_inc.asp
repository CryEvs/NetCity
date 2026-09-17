<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.2 -->
<table class="print-block">
	<tr><td>
		<div align="center">Раздел 2. Сведения о сети объединений и научных обществ в учреждениях дополнительного образования детей</div>
		<br/>
		<div align="right">Код по ОКЕИ: единица - 642</div>
	</td></tr>
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td rowspan="2">Вид учреждения</td>
				<td rowspan="2">№<br/>строки</td>
				<td colspan="3">Число объединений</td>
				<td colspan="8">в том числе  объединения</td>
				<td rowspan="2">из общего <br/>числа объе-<br/>динений (из <br/>гр.3) платные</td>
				<td rowspan="2">Число объе-<br/>динений, орга-<br/>низованных на <br/>базе образова-<br/>тельных учреж-<br/>дений (из гр. 3)</td>
				<td colspan="2">Количество научных <br/>обществ</td>
			</tr>
			<tr align="center" valign="middle">
				<td>Всего</td>
				<td>Городские <br/>поселения</td>
				<td>Сельская <br/>местность</td>
				<td>технического <br/>творчества</td>
				<td>спортивно-<br/>технические</td>
				<td>эколого-био-<br/>логические</td>
				<td>туристско-<br/>краевед-<br/>ческие</td>
				<td>спортивные</td>
				<td>художес-<br/>твенного <br/>творчества</td>
				<td>культуро-<br/>логические</td>
				<td>другие</td>
				<td>всего</td>
				<td>из них (гр.16) <br/>в сельской <br/>местности</td>
			</tr>

			<tr align="center" valign="middle">
				<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Всего (сумма строк 02-09)</td>
				<td align="center">01</td>
				<%=DrawInputsWithTotals(1,3,17,2,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;центры</td>
				<td align="center">02</td>
				<%=DrawInputsWithTotals(2,3,17,2,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дворцы</td>
				<td align="center">03</td>
				<%=DrawInputsWithTotals(3,3,17,2,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дома</td>
				<td align="center">04</td>
				<%=DrawInputsWithTotals(4,3,17,2,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;станции</td>
				<td align="center">05</td>
				<%=DrawInputsWithTotals(5,3,17,2,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;школы</td>
				<td align="center">06</td>
				<%=DrawInputsWithTotals(6,3,17,2,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы</td>
				<td align="center">07</td>
				<%=DrawInputsWithTotals(7,3,17,2,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы олимпийского резерва</td>
				<td align="center">08</td>
				<%=DrawInputsWithTotals(8,3,17,2,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивно-адаптивные школы</td>
				<td align="center">09</td>
				<%=DrawInputsWithTotals(9,3,17,2,Array(3))%>
			</tr>
		</table>
	</td></tr>
</table>
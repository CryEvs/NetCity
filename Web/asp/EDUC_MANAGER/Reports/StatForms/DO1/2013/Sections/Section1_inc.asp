<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.1 -->
<table class="print-block">
	<tr><td>
		<div align="center">Раздел 1. Сведения о сети  учреждений дополнительного образования детей, объединений и научных обществ</div>
		<br/>
		<div align="right">Код по ОКЕИ: единица - 642</div>
	</td></tr>
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td rowspan="3">Тип учреждений</td>
				<td rowspan="3">№<br/>строки</td>
				<td rowspan="2" colspan="3">Число учреждений, всего</td>
				<td colspan="11">из общего числа учреждений (из гр. 3)</td>
				<td rowspan="3">Кроме того, <br/>число <br/>филиалов <br/>учреждений <br/>дополни-<br/>тельного <br/>образования <br/>детей</td>
			</tr>
			<tr align="center" valign="middle">
				<td rowspan="2">имеющие <br/>статус авто-<br/>номного</td>
				<td rowspan="2">имеющие <br/>собствен-<br/>ную бухг-<br/>алтерию</td>
				<td rowspan="2">переведены <br/>на норматив-<br/>ное подуше-<br/>вое финанси-<br/>рование</td>
				<td rowspan="2">переведены на <br/>новую (отра-<br/>слевую) систе-<br/>му оплаты тру-<br/>да, ориентиро-<br/>ванную на <br/>результат</td>
				<td rowspan="2">общее число <br/>имеющих <br/>лицензию</td>
				<td rowspan="2">получившие <br/>лицензию в <br/>отчетном <br/>году</td>
				<td colspan="4">аккредитованных</td>
				<td rowspan="2">имеющие <br/>филиалы</td>
			</tr>
			<tr align="center" valign="middle">
				<td>Всего</td>
				<td>Городские <br/>поселения</td>
				<td>Сельская <br/>местность</td>
				<td>высшая <br/>категория</td>
				<td>I категория</td>
				<td>II категория</td>
				<td>III категория</td>
			</tr>

			<tr align="center" valign="middle">
				<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Всего (сумма строк 02-09)</td>
				<td align="center">01</td>
				<%=DrawInputsWithTotals(1,3,17,1,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;центры</td>
				<td align="center">02</td>
				<%=DrawInputsWithTotals(2,3,17,1,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дворцы</td>
				<td align="center">03</td>
				<%=DrawInputsWithTotals(3,3,17,1,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дома</td>
				<td align="center">04</td>
				<%=DrawInputsWithTotals(4,3,17,1,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;станции</td>
				<td align="center">05</td>
				<%=DrawInputsWithTotals(5,3,17,1,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;школы</td>
				<td align="center">06</td>
				<%=DrawInputsWithTotals(6,3,17,1,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы</td>
				<td align="center">07</td>
				<%=DrawInputsWithTotals(7,3,17,1,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы олимпийского резерва</td>
				<td align="center">08</td>
				<%=DrawInputsWithTotals(8,3,17,1,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивно-адаптивные школы</td>
				<td align="center">09</td>
				<%=DrawInputsWithTotals(9,3,17,1,Array(3))%>
			</tr>
		</table>
	</td></tr>
</table>
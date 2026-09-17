<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.9 -->
<table class="print-block">
	<tr><td>
		<div align="center">Раздел 9. Сведения об источниках получения средств</div>
		<br/>
		<div align="right">Код по ОКЕИ: тысяча рублей - 384</div>
	</td></tr>
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td>Наименование</td>
				<td>№<br/>строки</td>
				<td>Всего (сумма <br/>граф 4-11)</td>
				<td>центры</td>
				<td>дворцы</td>
				<td>дома</td>
				<td>станции</td>
				<td>школы</td>
				<td>спортивные <br/>школы</td>
				<td>спортивные <br/>школы олим-<br/>пийского <br/>резерва</td>
				<td>спортивно-<br/>адаптивные <br/>школы</td>
			</tr>

			<tr align="center" valign="middle">
				<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Объем финансирования всех учреждений – всего<br/>(сумма строк 02, 03)</td>
				<td>01</td>
				<%=DrawInputsWithTotals(1,3,11,9,Array(3,4,5,6,7,8,9,10,11))%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Текущее бюджетное финансирование</td>
				<td>02</td>
				<%=DrawInputsWithTotals(2,3,11,9,Array(3))%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Внебюджетные источники финансирования – всего<br/>(сумма строк 04-08)</td>
				<td>03</td>
				<%=DrawInputsWithTotals(3,3,11,9,Array(3,4,5,6,7,8,9,10,11))%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;остаток средств на начало отчетного периода</td>
				<td>04</td>
				<%=DrawInputsWithTotals(4,3,11,9,Array(3))%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;доходы от реализации платных дополнитель-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ных образовательных услуг</td>
				<td>05</td>
				<%=DrawInputsWithTotals(5,3,11,9,Array(3))%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;доходы от производственной деятельности</td>
				<td>06</td>
				<%=DrawInputsWithTotals(6,3,11,9,Array(3))%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;благотворительные средства</td>
				<td>07</td>
				<%=DrawInputsWithTotals(7,3,11,9,Array(3))%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;другие внебюджетные источники</td>
				<td>08</td>
				<%=DrawInputsWithTotals(8,3,11,9,Array(3))%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Остаток внебюджетных средств на конец отчетного периода</td>
				<td>09</td>
				<%=DrawInputsWithTotals(9,3,11,9,Array(3))%>
			</tr>
		</table>
	</td></tr>
</table>
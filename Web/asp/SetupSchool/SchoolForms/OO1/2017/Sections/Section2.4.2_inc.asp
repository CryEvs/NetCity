<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>2.4.2. Сведения о классах, классах-комплектах</b></div>
			<div align="center"><i>(заполняется отдельно по классам очного, очно-заочного и заочного обучения без учета классов<br>
				для обучающихся с ограниченными возможностями здоровья)</i></div>

			<div align="left"><b>по классам очно-заочного обучения</b></div>

			<div align="right">Код по ОКЕИ: единица – 642</div>

			<table class="ThinTable" align="left" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование показателей</td>
					<td rowspan="2">№<br>строки</td>
					<td rowspan="2">
						Всего классов и<br>
						классов-<br>
						комплектов<br>
						(сумма гр. 4, 5)
					</td>
					<td colspan="3">в том числе</td>
				</tr>
				<tr align="middle" valign="center">
					<td>
						число классов,<br>
						не объединенных<br>
						в классы-<br>
						комплекты
					</td>
					<td>
						число классов-<br>
						комплектов
					</td>
					<td>
						в них<br>
						классов
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">Всего (сумма стр. 02 - 04)</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1, 3, 6, "02.4.2", Array(3,4,5,6))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;1 - 4 классы
					</td>
					<td>02</td>
					<%=DrawInputsWithTotals(2, 3, 6, "02.4.2", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;5 - 9 классы</td>
					<td>03</td>
					<%=DrawInputsWithTotals(3, 3, 6, "02.4.2", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;10 - 11 (12) классы</td>
					<td>04</td>
					<%=DrawInputsWithTotals(4, 3, 6, "02.4.2", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из строки 01 - число 1 - 11 (12) классов и классов-комплектов с<br>
						численностью обучающихся менее 25 человек в городской или<br>
						менее 14 человек в сельской местности
					</td>
					<td>05</td>
					<%=DrawInputsWithTotals(5, 3, 5, "02.4.2", Array(3))%>
					<td>x</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
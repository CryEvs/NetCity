<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center">
		<td>
			<b>Раздел 7. Сведения о детях-инвалидах и детях с ОВЗ, обучающихся в обычных классах</b>
		</td>
	</tr>
	<tr>
		<td align="center">
			<div align="right">Код по ОКЕИ: человек-792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2"></td>
					<td rowspan="2">
						№<br/>
						строки
					</td>
					<td rowspan="2">
						Всего обу-<br/>
						чающихся <br/>
						(сумма граф <br/>
						4-16) (чел.)
					</td>
					<td colspan="13">
						В том числе (из графы 3):
					</td>
				</tr>
				<tr align="center">
					<td>
						подготови-<br/>
						тельный <br/>
						класс
					</td>
					<td>
						1 класс
					</td>
					<td>
						2 класс
					</td>
					<td>
						3 класс
					</td>
					<td>
						4 класс
					</td>
					<td>
						5 класс
					</td>
					<td>
						6 класс
					</td>
					<td>
						7 класс
					</td>
					<td>
						8 класс
					</td>
					<td>
						9 класс
					</td>
					<td>
						10 класс
					</td>
					<td>
						11 класс
					</td>
					<td>
						12 класс
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
					<td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
					<td>14</td><td>15</td><td>16</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Дети-инвалиды в обычных классах <br/>
						общеобразовательных учреждений общего типа
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 3, 16, 7, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Дети с ОВЗ в обычных классах <br/>
						общеобразовательных учреждений общего типа <br/>
						(сумма строк 03-10)
					</td>
					<td>02</td>
					<%Call DrawInputsWithTotalsExDisabled(2, 3, 16, 7, Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16), 4, 5, True)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;неслышащие
					</td>
					<td>03</td>
					<%Call DrawInputsWithTotals(3, 3, 16, 7, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;слабослышащие и позднооглохшие
					</td>
					<td>04</td>
					<%Call DrawInputsWithTotals(4, 3, 16, 7, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;незрячие
					</td>
					<td>05</td>
					<%Call DrawInputsWithTotals(5, 3, 16, 7, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;слабовидящие и поздноослепшие
					</td>
					<td>06</td>
					<%Call DrawInputsWithTotals(6, 3, 16, 7, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;с тяжелой речевой патологией
					</td>
					<td>07</td>
					<%Call DrawInputsWithTotals(7, 3, 16, 7, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;с нарушениями опорно-двигательного<br/>
						&nbsp;&nbsp;&nbsp;аппарата
					</td>
					<td>08</td>
					<%Call DrawInputsWithTotals(8, 3, 16, 7, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;с задержкой психического развития
					</td>
					<td>09</td>
					<%Call DrawInputsWithTotals(9, 3, 16, 7, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;с умственной отсталостью
					</td>
					<td>10</td>
					<%Call DrawInputsWithTotals(10, 3, 16, 7, Array(3))%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="left"><br/>
			Для целей настоящего отчета:<br/>
			под образовательным учреждением общего типа подразумевается учреждение, не являющееся специальным (коррекционным учреждением) <br/>
			под обычным классом подразумевается любой класс, не являющийся специальным (коррекционным) классом
		</td>
	</tr>
</table>

<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 3. Сведения об обучающихся детях с ограниченными возможностями здоровья</b></td></tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: человек-792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2" width="100%">
						Наименование
					</td>
					<td rowspan="2">
						№<br>
						строки
					</td>
					<td colspan="3">
						Численность обучающихся детей с ОВЗ
					</td>
					<td colspan="3">
						Из них обучающихся в филиалах
					</td>
				</tr>
				<tr align="center">
					<td>
						городские<br/>
						поселения
					</td>
					<td>
						сельская<br/>
						местность
					</td>
					<td>
						итого<br/>
						(сумма<br/>
						граф 3, 4)
					</td>
					<td>
						городские<br/>
						поселения
					</td>
					<td>
						сельская<br/>
						местность
					</td>
					<td>
						итого<br/>
						(сумма<br/>
						граф 6, 7)
					</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Всего обучающихся (сумма строк 02, 03, 11, 12, 13, 15, 16, 17)
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 3, 8, 3, Array(3,4,5,6,7,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в образовательных учреждениях для детей дошкольного и<br/>
						&nbsp;&nbsp;&nbsp;младшего школьного возраста
					</td>
					<td>02</td>
					<%Call DrawInputsWithTotals(2, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в общеобразовательных учреждениях и школах-интернатах<br/>
						&nbsp;&nbsp;&nbsp;(сумма строк 04, 05, 06, 08, 09, 10)
					</td>
					<td>03</td>
					<%Call DrawInputsWithTotals(3, 3, 8, 3, Array(3,4,5,6,7,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в начальных
					</td>
					<td>04</td>
					<%Call DrawInputsWithTotals(4, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в основных
					</td>
					<td>05</td>
					<%Call DrawInputsWithTotals(5, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в средних
					</td>
					<td>06</td>
					<%Call DrawInputsWithTotals(6, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр. 06) в имеющих только 10 - 11 (12) классы
					</td>
					<td>07</td>
					<%Call DrawInputsWithTotals(7, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в общеобразовательных учреждениях с углубленным<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;изучением отдельных предметов
					</td>
					<td>08</td>
					<%Call DrawInputsWithTotals(8, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в гимназиях
					</td>
					<td>09</td>
					<%Call DrawInputsWithTotals(9, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в лицеях
					</td>
					<td>10</td>
					<%Call DrawInputsWithTotals(10, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в кадетских учреждениях
					</td>
					<td>11</td>
					<%Call DrawInputsWithTotals(11, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в общеобразовательных школах-интернатах с<br/>
						&nbsp;&nbsp;&nbsp;первоначальной летной подготовкой
					</td>
					<td>12</td>
					<%Call DrawInputsWithTotals(12, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в специальных (коррекционных) образовательных<br/>
						&nbsp;&nbsp;&nbsp;учреждениях и классах для обучающихся, воспитанников с<br/>
						&nbsp;&nbsp;&nbsp;ограниченными возможностями здоровья
					</td>
					<td>13</td>
					<%Call DrawInputsWithTotals(13, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр. 13) в классах
					</td>
					<td>14</td>
					<%Call DrawInputsWithTotals(14, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в специальных учебно-воспитательных учреждениях для<br/>
						&nbsp;&nbsp;&nbsp;детей и подростков с девиантным поведением
					</td>
					<td>15</td>
					<%Call DrawInputsWithTotals(15, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в оздоровительных образовательных учреждениях<br/>
						&nbsp;&nbsp;&nbsp;санаторного типа для детей, нуждающихся в длительном<br/>
						&nbsp;&nbsp;&nbsp;лечении
					</td>
					<td>16</td>
					<%Call DrawInputsWithTotals(16, 3, 8, 3, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в образовательных учреждениях для детей, нуждающихся в<br/>
						&nbsp;&nbsp;&nbsp;психолого-педагогической и медико-социальной помощи
					</td>
					<td>17</td>
					<%Call DrawInputsWithTotals(17, 3, 8, 3, Array(5,8))%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="left"><br/>
			&nbsp;&nbsp;&nbsp;* В строках 02 - 12, 15 - 17 показываются дети с ОВЗ, обучающиеся в обычных классах, не являющихся специальными (коррекционными) классами.
		</td>
	</tr>
</table>

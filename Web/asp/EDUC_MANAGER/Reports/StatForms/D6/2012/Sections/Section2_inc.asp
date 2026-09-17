<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 2. Распределение основных и средних общеобразовательных учреждений по числу классов</b></td></tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: единица - 642</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2">
						Число классов
					</td>
					<td rowspan="2">
						№<br>
						строки
					</td>
					<td colspan="3">
						Основные школы
					</td>
					<td colspan="3">
						Средние (полные) школы
					</td>
				</tr>
				<tr align="center">
					<td>
						городские <br/>
						поселения
					</td>
					<td>
						сельская <br/>
						местность
					</td>
					<td>
						итого <br/>
						(сумма<br/>
						гр. 3 и 4)
					</td><td>
						городские <br/>
						поселения
					</td>
					<td>
						сельская <br/>
						местность
					</td>
					<td>
						итого <br/>
						(сумма<br/>
						гр. 6 и 7)
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						до 5 классов
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						5-6 классов
					</td>
					<td>02</td>
					<%Call DrawInputsWithTotals(2, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						7-10 классов
					</td>
					<td>03</td>
					<%Call DrawInputsWithTotals(3, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						11-13 классов
					</td>
					<td>04</td>
					<%Call DrawInputsWithTotals(4, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						14-16 классов
					</td>
					<td>05</td>
					<%Call DrawInputsWithTotals(5, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						17-19 классов
					</td>
					<td>06</td>
					<%Call DrawInputsWithTotals(6, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						20-22 классов
					</td>
					<td>07</td>
					<%Call DrawInputsWithTotals(7, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						23-25 классов
					</td>
					<td>08</td>
					<%Call DrawInputsWithTotals(8, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						26-29 классов
					</td>
					<td>09</td>
					<%Call DrawInputsWithTotals(9, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						30-33 классов
					</td>
					<td>10</td>
					<%Call DrawInputsWithTotals(10, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						34-37 классов
					</td>
					<td>11</td>
					<%Call DrawInputsWithTotals(11, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						38 и более классов
					</td>
					<td>12</td>
					<%Call DrawInputsWithTotals(12, 3, 8, 2, Array(5,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Итого (сумма строк 01-12)
					</td>
					<td>13</td>
					<%Call DrawInputsWithTotals(13, 3, 8, 2, Array(3,4,5,6,7,8))%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<table border="0" cellpadding="2" align="left"  width="45%">
				<tr>
					<td>
						Примечание. Если классы входят в состав комплекта - считать<br/>
						комплекты <br/>
						Число 1-11 (12) классов и классов-комплектов с численностью <br/>
						обучающихся менее 25 человек (городские поселения)</td><td>14</td><td><%=IT("T0214", 5, 5 )%>
					</td>
				</tr>
				<tr>
					<td>
						Число 1-11 (12) классов и классов-комплектов с численностью <br/>
						обучающихся менее 14 человек (сельская местность)</td><td>15</td><td><%=IT("T0215", 5, 5 )%>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

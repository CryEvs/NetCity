<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 1. Распределение начальных общеобразовательных учреждений по численности учителей и числу классов</b></td></tr>
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
					<td rowspan="3">
						Школы
					</td>
					<td rowspan="3">
						№<br>
						строки
					</td>
					<td colspan="12">
						Число начальных школ
					</td>
				</tr>
				<tr align="center">
					<td colspan="4">
						Городские поселения
					</td>
					<td colspan="4">
						Сельская местность
					</td>
					<td colspan="4">
						Всего
					</td>
				</tr>
				<tr align="center">
					<td>
						с 1 учителем
					</td>
					<td>
						с 2-мя <br/>
						учителями
					</td>
					<td>
						с 3-мя и <br/>
						более <br/>
						учителями
					</td>
					<td>
						итого (сумма <br/>
						гр. 3-5)
					</td>
					<td>
						с 1 учителем
					</td>
					<td>
						с 2-мя <br/>
						учителями
					</td>
					<td>
						с 3-мя и <br/>
						более <br/>
						учителями
					</td>
					<td>
						итого (сумма <br/>
						гр. 7-9)
					</td>
					<td>
						с 1 учителем <br/>
						(сумма гр. 3, <br/>
						7)
					</td>
					<td>
						с 2-мя <br/>
						учителями <br/>
						(сумма гр. 4, <br/>
						8)
					</td>
					<td>
						с 3-мя и <br/>
						более <br/>
						учителями <br/>
						(сумма гр. 5, <br/>
						9)
					</td>
					<td>
						итого (сумма <br/>
						гр. 6,10)
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
					<td>13</td><td>14</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						с 1-им классом
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 3, 14, 1, Array(6,10,14))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						с 2-мя классами
					</td>
					<td>02</td>
					<%Call DrawInputsWithTotals(2, 3, 14, 1, Array(6,10,14))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						с 3-мя классами
					</td>
					<td>03</td>
					<%Call DrawInputsWithTotals(3, 3, 14, 1, Array(6,10,14))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						с 4-мя классами
					</td>
					<td>04</td>
					<%Call DrawInputsWithTotals(4, 3, 14, 1, Array(6,10,14))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						с 5-ю и более классами
					</td>
					<td>05</td>
					<%Call DrawInputsWithTotals(5, 3, 14, 1, Array(6,10,14))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Итого (сумма стр. 01-05)
					</td>
					<td>06</td>
					<%Call DrawInputsWithTotals(6, 3, 14, 1, Array(3,4,5,6,7,8,9,10,11,12,13,14))%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<table border="0" cellpadding="2" align="left"  width="45%">
				<tr>
					<td>
						Число учреждений имеющих (из гр.14, стр.6) 5-7 учителей</td><td>07</td><td><%=IT("T0107", 5, 5 )%>
					</td>
				</tr>
				<tr>
					<td>
						8-9 учителей</td><td>08</td><td><%=IT("T0108", 5, 5 )%>
					</td>
				</tr>
				<tr>
					<td>
						10 и более учителей</td><td>09</td><td><%=IT("T0109", 5, 5 )%>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

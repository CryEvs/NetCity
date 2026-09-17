<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td>
			<div align="center"><b>Раздел 1. Сведения о преподавании иностранных языков</b></div>
		</td>
	</tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: единица - 642; человек-792
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1">
				<tr align="center">
					<td rowspan="2">
						Наименование
					</td>
					<td rowspan="2" align="center">
						№<br>
						строки
					</td>
					<td colspan="9">
						Городские поселения и сельская местность
					</td>
					<td colspan="9">
						в том числе сельская местность
					</td>
				</tr>
				<tr align="center">
					<td>
						всего
					</td>
					<td>
						английский
					</td>
					<td>
						французский
					</td>
					<td>
						немецкий
					</td>
					<td>
						итальянский
					</td>
					<td>
						испанский
					</td>
					<td>
						китайский
					</td>
					<td>
						арабский
					</td>
					<td>
						другие
					</td>
					<td>
						всего
					</td>
					<td>
						английский
					</td>
					<td>
						французский
					</td>
					<td>
						немецкий
					</td>
					<td>
						итальянский
					</td>
					<td>
						испанский
					</td>
					<td>
						китайский
					</td>
					<td>
						арабский
					</td>
					<td>
						другие
					</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
					<td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
				</tr>
				<tr align="center">
					<td align="left">
						Число начальных, основных и средних общеобразовательных
						учреждений,	в которых преподаются иностранные языки (ед.)
					</td>
					<td align="center">
						01
					</td>
					<%=DrawInputs(1, 1, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в них:<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;число 1-12 классов (ед) <br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(сумма строк 04, 06, 08)
					</td>
					<td align="center">
						02
					</td>
					<%Call DrawInputsWithTotals(2, 3, 20, 1, Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;численность обучающихся 1-12 классов (чел) (сумма строк 05, 07, 09)
					</td>
					<td align="center">
						03
					</td>
					<%Call DrawInputsWithTotals(3, 3, 20, 1, Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1-4 кл. классов (групп) (ед.)
					</td>
					<td align="center">
						04
					</td>
					<%=DrawInputs(1, 4, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обучающихся (чел)
					</td>
					<td align="center">
						05
					</td>
					<%=DrawInputs(1, 5, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5-9 кл. классов (групп) (ед.)
					</td>
					<td align="center">
						06
					</td>
					<%=DrawInputs(1, 6, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обучающихся (чел)
					</td>
					<td align="center">
						07
					</td>
					<%=DrawInputs(1, 7, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10-11 кл. классов (групп) (ед.)
					</td>
					<td align="center">
						08
					</td>
					<%=DrawInputs(1, 8, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обучающихся (чел)
					</td>
					<td align="center">
						09
					</td>
					<%=DrawInputs(1, 9, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						Число основных и средних общеобразовательных учреждений, в которых
						иностранные языки не преподаются (ед)
					</td>
					<td align="center">
						10
					</td>
					<%=DrawInputs(1,10,3,3)%>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
					<%=DrawInputs(1,10,12,12)%>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в них обучающихся 5-11 (12) классов (чел)
					</td>
					<td align="center">
						11
					</td>
					<%=DrawInputs(1,11,3,3)%>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
					<%=DrawInputs(1,11,12,12)%>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
				</tr>
				<tr align="center">
					<td align="left">
						Число общеобразовательных учреждений, в которых обучающиеся
						изучают 2-ой, 3-ий и более иностранные языки (из строки 01)
					</td>
					<td align="center">
						12
					</td>
					<%=DrawInputs(1, 12, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;в них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;количество классов (из строки 02)
					</td>
					<td align="center">
						13
					</td>
					<%=DrawInputs(1, 13, 3, 20)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;численность обучающихся (из строки 03)
					</td>
					<td align="center">
						14
					</td>
					<%=DrawInputs(1, 14, 3, 20)%>
				</tr>
			</table>
			<!-- End Of таб.1 -->
		</td>
	</tr>
</table>

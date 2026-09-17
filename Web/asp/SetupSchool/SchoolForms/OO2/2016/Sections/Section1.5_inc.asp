<% ' © 2007-2017 IRTech. All rights reserved. %>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>1.5. Наличие и использование площадей</b></div>
			<br>
			<div align="right">Код по ОКЕИ: квадратный метр – 055 (в целых)</div>

			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование показателей</td>
					<td rowspan="2">№ <br>строки</td>
					<td rowspan="2">Всего <br>(сумма граф <br>5, 6, 7, 8)</td>
					<td rowspan="2">в том числе <br>площадь, <br>сданная в аренду и (или) субаренду</td>
					<td colspan="4">Из гр. 3 площадь,  по форме владения (пользования)</td>
				</tr>
				<tr align="middle" valign="center">
					<td>на правах <br>собственности</td>
					<td>в оперативном <br>управлении</td>
					<td>арендованная</td>
					<td>другие <br>формы <br>владения</td>
				</tr>
				<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
				
				<tr align="middle" valign="center">
					<td align="left">&nbsp;Общая площадь зданий (помещений) – всего <br>&nbsp;(сумма строк 02, 04, 06, 07)</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1,3,8,"01.5",Array(3,4,5,6,7,8))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;в том числе площадь по целям использования:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;учебная
					</td>
					<td>02</td>
					<%=DrawInputsWithTotals(2,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						из нее площадь спортивных сооружений
					</td>
					<td>03</td>
					<%=DrawInputsWithTotals(3,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;
						учебно-вспомогательная
					</td>
					<td>04</td>
					<%=DrawInputsWithTotals(4,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						из нее площадь, занимаемая библиотекой
					</td>
					<td>05</td>
					<%=DrawInputsWithTotals(5,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;подсобная</td>
					<td>06</td>
					<%=DrawInputsWithTotals(6,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;прочих зданий (помещений)</td>
					<td>07</td>
					<%=DrawInputsWithTotals(7,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;Общая площадь земельного участка –  всего</td>
					<td>08</td>
					<%=DrawInputsWithTotals(8,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;из нее  площадь:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;физкультурно-спортивной зоны
					</td>
					<td>09</td>
					<%=DrawInputsWithTotals(9,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учебно-опытного участка</td>
					<td>10</td>
					<%=DrawInputsWithTotals(10,3,8,"01.5",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;подсобного сельского хозяйства</td>
					<td>11</td>
					<%=DrawInputsWithTotals(11,3,8,"01.5",Array(3))%>
				</tr>
			</table>
		</td>
	</tr>
</table>
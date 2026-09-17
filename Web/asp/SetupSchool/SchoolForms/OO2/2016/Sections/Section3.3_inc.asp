<% ' © 2007-2017 IRTech. All rights reserved. %>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<br><br>
			<div align="center"><b>3.3. Сведения о численности и оплате труда работников организации</b></div>
			<br>
			<div align="right">Коды по ОКЕИ: человек – 792 (с одним десятичным знаком); тысяча рублей – 384 (с одним десятичным знаком)</div>

			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td rowspan="3">Наименование показателей</td>
					<td rowspan="3">№ <br>стро-<br>ки</td>
					<td colspan="2">Средняя численность <br>работников, человек</td>
					<td colspan="3">Фонд начисленной заработной платы <br>работников, тыс. руб.</td>
					<td colspan="6">Фонд начисленной заработной платы работников по источникам <br>финансирования, тыс. руб.</td>
				</tr>
				<tr align="middle" valign="center">
					<td rowspan="2">списочного <br>состава <br>(без <br>внешних <br>совмести-<br>телей)<sup>3</sup></td>
					<td rowspan="2">внешних <br>совмес-<br>тителей<sup>4</sup></td>
					<td colspan="2">списочного состава (без <br>внешних совместителей)</td>
					<td rowspan="2">внешних <br>совмести-<br>телей <br>(сумма <br>граф 11, <br>12 и 13)</td>
					<td colspan="3">из гр.5 списочного состава (без <br>внешних совместителей)</td>
					<td colspan="3">из гр.7 внешних совместителей</td>
				</tr>
				<tr align="middle" valign="center">
					<td>Всего <br>(сумма <br>граф 8, 9, <br>10)</td>
					<td>в том числе по <br>внутреннему <br>совмести-<br>тельству<sup>5</sup></td>
					<td>за счет средств <br>бюджетов всех <br>уровней <br>(субсидий)</td>
					<td>ОМС<sup>6</sup></td>
					<td>средства от <br>приносящей <br>доход <br>деятельности</td>
					<td>за счет средств <br>бюджетов всех <br>уровней <br>(субсидий)</td>
					<td>ОМС</td>
					<td>средства от <br>приносящей <br>доход <br>деятельности</td>
				</tr>
				<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>
				
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Всего работников (сумма строк  02, 04, 07, <br>
						&nbsp;08)
					<td>01</td>
					<%=DrawInputsWithTotalsEx(1,3,13,"03.3", Array(3,4,5,6,7,8,9,10,11,12,13),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						руководящие работники
					</td>
					<td>02</td>
					<%=DrawInputsWithTotalsEx(2,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						из них директор, заместители <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						директора
					</td>
					<td>03</td>
					<%=DrawInputsWithTotalsEx(3,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						педагогические работники
					</td>
					<td>04</td>
					<%=DrawInputsWithTotalsEx(4,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						учителя
					</td>
					<td>05</td>
					<%=DrawInputsWithTotalsEx(5,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						педагоги дополнительного <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						образования
					</td>
					<td>06</td>
					<%=DrawInputsWithTotalsEx(6,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						учебно-вспомогательный   персонал
					</td>
					<td>07</td>
					<%=DrawInputsWithTotalsEx(7,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						иной персонал
					</td>
					<td>08</td>
					<%=DrawInputsWithTotalsEx(8,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						Из строки 04:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						персонал, работающий в подразделениях <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						дошкольного образования
					</td>
					<td>09</td>
					<%=DrawInputsWithTotalsEx(9,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						из них  воспитатели
					</td>
					<td>10</td>
					<%=DrawInputsWithTotalsEx(10,3,13,"03.3", Array(5,7),8,8)%>
				</tr>
			</table>
		</td>
	</tr>

	<!-- Справка -->
	<tr>
		<td>
			<br>
			<table class="ThinTable" align="left" border="0" cellpadding="3" cellspacing="0">
				<tr>
					<td align="left">
						&nbsp;&nbsp;
						<b>Справка 8.</b>&nbsp;&nbsp;&nbsp;Организация переведена на  новую (отраслевую) систему оплаты труда, ориентированную на результат (код:  да – 1, нет – 0) 
					</td>
					<td>(11)</td>
					<td>&nbsp;<%=IB0("T03.31103")%></td>
				</tr>
			</table>
		</td>
	</tr>

	<tr>
		<td>
			<br>
			<table class="ThinTable" align="left" border="0" cellpadding="3" cellspacing="0">
				<tr>
					<td>____________________________________</td>
				</tr>
				<tr>
					<td>
						<sup>3</sup>&nbsp;Среднесписочная численность работников.
					</td>
				</tr>
				<tr>
					<td>
						<sup>4</sup>&nbsp;Исчисляется пропорционально фактически отработанному времени.
					</td>
				</tr>
				<tr>
					<td>
						<sup>5</sup>&nbsp;Включая вознаграждение за работу по договорам гражданско-правового характера, заключенным работником списочного состава со своей организацией.
					</td>
				</tr>
				<tr>
					<td>
						<sup>6</sup>&nbsp;Обязательное медицинское страхование.
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
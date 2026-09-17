<% ' © 2007-2017 IRTech. All rights reserved. %>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<br><br>
			<div align="center"><b>3.2. Расходы организации</b></div>
			<br>
			<div align="right">Код по ОКЕИ: тысяча рублей – 384 (с одним десятичным знаком)</div>

			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование показателей</td>
					<td rowspan="2">№ <br>строки</td>
					<td rowspan="2">Всего</td>
					<td colspan="2">в том числе осуществляемые</td>
				</tr>
				<tr align="middle" valign="center">
					<td>за счет средств <br>бюджетов  всех уровней <br>(субсидий)</td>
					<td>из них (из гр. 4) – за счет <br>средств на выполнение <br>государственного <br>(муниципального) задания</td>
				</tr>
				<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
				
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Расходы  (сумма строк  02, 06, 13, 14)
					<td>01</td>
					<%=DrawInputsWithTotalsEx(1,3,5,"03.2", Array(3,4,5),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						оплата труда и начисления на выплаты по оплате труда (сумма строк 03–05)
					</td>
					<td>02</td>
					<%=DrawInputsWithTotalsEx(2,3,5,"03.2", Array(3,4,5),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						заработная плата
					</td>
					<td>03</td>
					<%=DrawInputsEx("03.2",3,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						прочие выплаты
					</td>
					<td>04</td>
					<%=DrawInputsEx("03.2",4,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						начисления на выплаты по оплате труда 
					</td>
					<td>05</td>
					<%=DrawInputsEx("03.2",5,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						оплата работ, услуг (сумма строк 07–12)
					</td>
					<td>06</td>
					<%=DrawInputsWithTotalsEx(6,3,5,"03.2", Array(3,4,5),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						услуги связи
					</td>
					<td>07</td>
					<%=DrawInputsEx("03.2",7,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						транспортные услуги
					</td>
					<td>08</td>
					<%=DrawInputsEx("03.2",8,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						коммунальные услуги
					</td>
					<td>09</td>
					<%=DrawInputsEx("03.2",9,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						арендная плата за пользование имуществом
					</td>
					<td>10</td>
					<%=DrawInputsEx("03.2",10,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						работы, услуги по содержанию имущества
					</td>
					<td>11</td>
					<%=DrawInputsEx("03.2",11,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						прочие работы, услуги
					</td>
					<td>12</td>
					<%=DrawInputsEx("03.2",12,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						социальное обеспечение
					</td>
					<td>13</td>
					<%=DrawInputsEx("03.2",13,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						прочие расходы
					</td>
					<td>14</td>
					<%=DrawInputsEx("03.2",14,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Поступление нефинансовых активов  (сумма строк 16-19)
					</td>
					<td>15</td>
					<%=DrawInputsWithTotalsEx(15,3,5,"03.2", Array(3,4,5),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						увеличение стоимости основных средств
					</td>
					<td>16</td>
					<%=DrawInputsEx("03.2",16,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						увеличение стоимости нематериальных активов
					</td>
					<td>17</td>
					<%=DrawInputsEx("03.2",17,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						увеличение стоимости непроизведенных активов 
					</td>
					<td>18</td>
					<%=DrawInputsEx("03.2",18,3,5,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						увеличение стоимости материальных запасов
					</td>
					<td>19</td>
					<%=DrawInputsEx("03.2",19,3,5,6,8)%>
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
						<b>Справка 7.</b>&nbsp;&nbsp;Наличие программы энергосбережения в организации  (код:  да – 1, нет – 0) 
					</td>
					<td>(20)</td>
					<td>&nbsp;<%=IB0("T03.22003")%></td>
				</tr>
			</table>
		</td>
	</tr>
</table>
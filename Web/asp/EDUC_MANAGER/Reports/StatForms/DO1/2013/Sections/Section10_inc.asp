<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.10 -->
<table class="print-block">
	<tr><td>
		<div align="center">Раздел 10. Расходы и поступление нефинансовых активов</div>
		<br/>
		<div align="right">Код по ОКЕИ: тысяча рублей - 384</div>
	</td></tr>

	<tr>
		<td>
			<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
				<tr align="center" valign="middle">
					<td rowspan="2">Наименование</td>
					<td rowspan="2">№<br/>строки</td>
					<td colspan="9">Бюджетные расходы</td>
					<td colspan="9">Расходы, осуществляемые за счет внебюджетных источников финансирования</td>
				</tr>

				<tr align="center" valign="middle">
					<td>Всего <br/>(сумма граф <br/>4-11)</td>
					<td>центры</td>
					<td>дворцы</td>
					<td>дома</td>
					<td>станции</td>
					<td>школы</td>
					<td>спортивные <br/>школы</td>
					<td>спортивные <br/>школы <br/>олимпийско-<br/>го резерва</td>
					<td>спортивно-<br/>адаптивные <br/>школы</td>
					<td>Всего <br/>(сумма граф <br/>13-20)</td>
					<td>центры</td>
					<td>дворцы</td>
					<td>дома</td>
					<td>станции</td>
					<td>школы</td>
					<td>спортивные <br/>школы</td>
					<td>спортивные <br/>школы <br/>олимпийско-<br/>го резерва</td>
					<td>спортивно-<br/>адаптивные <br/>школы</td>
				</tr>

				<tr align="center" valign="middle">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">Расходы – всего (сумма строк 02, 11, 18, 19)</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1,3,20,10,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">Оплата труда и начисления на оплату труда (сумма <br/>строк 03, 09, 10)</td>
					<td>02</td>
					<%=DrawInputsWithTotals(2,3,20,10,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;заработная плата (сумма строк 04-08)</td>
					<td>03</td>
					<%=DrawInputsWithTotals(3,3,20,10,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе по группам:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;руководящие работники</td>
					<td>04</td>
					<%=DrawInputsWithTotals(4,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;педагогические работники</td>
					<td>05</td>
					<%=DrawInputsWithTotals(5,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;учебно-вспомогательный персонал</td>
					<td>06</td>
					<%=DrawInputsWithTotals(6,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;медицинские работники</td>
					<td>07</td>
					<%=DrawInputsWithTotals(7,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обслуживающий персонал</td>
					<td>08</td>
					<%=DrawInputsWithTotals(8,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;прочие выплаты</td>
					<td>09</td>
					<%=DrawInputsWithTotals(9,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;начисления на оплату труда</td>
					<td>10</td>
					<%=DrawInputsWithTotals(10,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">Приобретение услуг (сумма строк 12-17)</td>
					<td>11</td>
					<%=DrawInputsWithTotals(11,3,20,10,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;Услуги связи</td>
					<td>12</td>
					<%=DrawInputsWithTotals(12,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;Транспортные услуги</td>
					<td>13</td>
					<%=DrawInputsWithTotals(13,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;Коммунальные услуги</td>
					<td>14</td>
					<%=DrawInputsWithTotals(14,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;Арендная плата за пользование имуществом</td>
					<td>15</td>
					<%=DrawInputsWithTotals(15,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;Услуги по содержанию имущества</td>
					<td>16</td>
					<%=DrawInputsWithTotals(16,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;Прочие услуги</td>
					<td>17</td>
					<%=DrawInputsWithTotals(17,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">Социальное обеспечение</td>
					<td>18</td>
					<%=DrawInputsWithTotals(18,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">Прочие расходы</td>
					<td>19</td>
					<%=DrawInputsWithTotals(19,3,20,10,Array(3,12))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">Поступление нефинансовых активов</td>
					<td>20</td>
					<%=DrawInputsWithTotals(20,3,20,10,Array(3,12))%>
				</tr>
			</table>
		</td>
	</tr>
</table>
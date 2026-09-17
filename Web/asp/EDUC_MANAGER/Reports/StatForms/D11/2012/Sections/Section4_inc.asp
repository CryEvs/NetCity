<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td>
			<div align="center">Раздел 4. Работники, осуществляющие допрофессиональную и профессиональную подготовку<br/>обучающихся 8-11 (12) классов (из раздела 3)</div>
		</td>
	</tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: человек - 792
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1">
				<tr align="center">
					<td rowspan="3">
						Наименование
					</td>
					<td rowspan="3">
						№<br/>строки
					</td>
					<td colspan="3">
						Численность работников (физические лица)
					</td>
					<td colspan="3">
						Кроме того, внешние совместители
					</td>
				</tr>
				<tr align="center">
					<td rowspan="2">
						Городские<br/>поселения и<br/>сельская<br/>мес-<br/>тность (сумма<br>граф 4, 5)
					</td>
					<td colspan="2">
						в том числе
					</td>
					<td rowspan="2">
						Городские<br/>поселения и<br/>сельская мес-<br/>тность (сумма<br/>граф 7, 8)
					</td>
					<td colspan="2">
						в том числе
					</td>
				</tr>
				<tr align="center">
					<td>
						городские<br/>поселения
					</td>
					<td>
						сельская<br/>местность
					</td>
					<td>
						городские<br/>поселения
					</td>
					<td>
						сельская<br/>местность
					</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
				</tr>
				<tr align="center">
					<td align="left">
						Всего работников учреждения<br/>(сумма строк 02, 03, 05, 06)
					</td>
					<td align="center">
						01
					</td>
					<%Call DrawInputsWithTotals(1, 3, 8, 4, Array(3,4,5,6,7,8))%>
				</tr>
				<tr align="center">
					<td align="left">
						 &nbsp;в том числе:<br/>&nbsp;&nbsp;руководящие работники 
					</td>
					<td align="center">
						02
					</td>
					<%Call DrawInputsWithTotals(2, 3, 8, 4, Array(3, 6))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;педагогические работники  
					</td>
					<td align="center">
						03
					</td>
					<%Call DrawInputsWithTotals(3, 3, 8, 4, Array(3, 6))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них учителя 
					</td>
					<td align="center">
						04
					</td>
					<%Call DrawInputsWithTotals(4, 3, 8, 4, Array(3, 6))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;учебно-вспомогательный персонал
					</td>
					<td align="center">
						05
					</td>
					<%Call DrawInputsWithTotals(5, 3, 8, 4, Array(3, 6))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;обслуживающий персонал
					</td>
					<td align="center">
						06
					</td>
					<%Call DrawInputsWithTotals(6, 3, 8, 4, Array(3, 6))%>
				</tr>
			</table>
			<!-- End Of таб.4 -->
		</td>
	</tr>
</table>

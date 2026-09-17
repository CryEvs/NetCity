<% ' © 2007-2016 IRTech. All rights reserved. %>

	<tr>
		<td>
			<div align="center" style="margin-top:20px; margin-bottom:10px;"><b>1.2. Распределение численности учащихся по источникам финансирования</b></div>
			<div align="right">Код по ОКЕИ: человек - 792</div>
		
			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="top">
					<td rowspan="3">Наименование <br />показателей</td>
					<td rowspan="3">№<br />строки</td>
					<td rowspan="3">Всего <br />(сумма <br />гр. 4 - 7)</td>
					<td colspan="4">в том числе:</td>
				</tr>
				<tr align="middle" valign="top">
					<td colspan="3">за счет бюджетных ассигнований</td>
					<td rowspan="2">по договорам об оказании <br />платных образовательных <br />услуг</td>
				</tr>
				<tr align="middle" valign="top">
					<td>федерального бюджета</td>
					<td>бюджета субъекта <br />Российской Федерации</td>
					<td>местного <br />бюджета</td>
				</tr>

				<tr align="middle" valign="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">Всего по дополнительным общеобразовательным <br />программам (сумма строк 02 - 08)</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1, 3, 7, "01.2", Array(3,4,5,6,7))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе по направлениям:<br />&nbsp;&nbsp;&nbsp;техническое</td>
					<td align="center">02</td>
					<%=DrawInputsWithTotals(2, 3, 7, "01.2", Array(3))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;естественнонаучное</td>
					<td align="center">03</td>
					<%=DrawInputsWithTotals(3, 3, 7, "01.2", Array(3))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;физкультурно-спортивное</td>
					<td align="center">04</td>
					<%=DrawInputsWithTotals(4, 3, 7, "01.2", Array(3))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;художественное</td>
					<td align="center">05</td>
					<%=DrawInputsWithTotals(5, 3, 7, "01.2", Array(3))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;туристско-краеведческое</td>
					<td align="center">06</td>
					<%=DrawInputsWithTotals(6, 3, 7, "01.2", Array(3))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;социально-педагогическое</td>
					<td align="center">07</td>
					<%=DrawInputsWithTotals(7, 3, 7, "01.2", Array(3))%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;другое направление</td>
					<td align="center">08</td>
					<%=DrawInputsWithTotals(8, 3, 7, "01.2", Array(3))%>
				</tr>
			</table>
		</td>
	</tr>
</table>
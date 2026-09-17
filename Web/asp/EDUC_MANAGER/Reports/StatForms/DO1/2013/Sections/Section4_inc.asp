<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.4 -->
<table class="print-block">
	<tr><td>
		<div align="center">Раздел 4. Сведения о сети учреждений по видам образовательной деятельности</div>
		<br/>
		<div align="right">Коды по ОКЕИ: единица - 642, человек - 792</div>
	</td></tr>
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td rowspan="2">Учреждения по видам образовательной деятельности</td>
				<td rowspan="2">№<br/>строки</td>
				<td colspan="2">Число учреждений (ед)</td>
				<td colspan="2">Численность занимающихся <br/>(чел)</td>
			</tr>
			<tr align="center" valign="middle">
				<td>Всего</td>
				<td>из них <br/>расположено <br/>в сельской <br/>местности</td>
				<td>Всего</td>
				<td>в сельской <br/>местности</td>
			</tr>

			<tr align="center" valign="middle">
				<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Всего (сумма строк 02 - 10)</td>
				<td align="center">01</td>
				<%=DrawInputsWithTotals(1,3,6,4,Array(3,4,5,6))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Работающие по всем видам образовательной деятельности </td>
				<td align="center">02</td>
				<%=DrawInputs(4,2,3,6)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Художественная</td>
				<td align="center">03</td>
				<%=DrawInputs(4,3,3,6)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Эколого-биологическая </td>
				<td align="center">04</td>
				<%=DrawInputs(4,4,3,6)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Техническая</td>
				<td align="center">05</td>
				<%=DrawInputs(4,5,3,6)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Туристско-краеведческая</td>
				<td align="center">06</td>
				<%=DrawInputs(4,6,3,6)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Спортивная</td>
				<td align="center">07</td>
				<%=DrawInputs(4,7,3,6)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Военно-патриотическая</td>
				<td align="center">08</td>
				<%=DrawInputs(4,8,3,6)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Спортивно-техническая </td>
				<td align="center">09</td>
				<%=DrawInputs(4,9,3,6)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Другие</td>
				<td align="center">10</td>
				<%=DrawInputs(4,10,3,6)%>
			</tr>
		</table>
	</td></tr>
</table>
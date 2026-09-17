<% ' © 2007-2017 IRTech. All rights reserved.%>
<table class="print-block"><tr><td>
<div style="margin-top:20px; margin-bottom:10px; text-align:center;"><b>4.3. Техническое состояние зданий</b></div>
<div align="right">Код по ОКЕИ: единица - 642</div>
<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
	<tr align="middle" valign="center" rowspan="2">
		<td>Наименование<br />показателей</td>
		<td>№<br />строки</td>
		<td>Всего</td>
	</tr>

	<tr align="middle" valign="center">
		<td>1</td><td>2</td><td>3</td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">Требует капитального ремонта (укажите соответствующий код: да - 1, нет - 0)</td>
		<td align="center">01</td>
		<td><%=IB0("T04.30103")%></td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">Находится в аварийном состоянии (укажите соответствующий код: да - 1, нет - 0)</td>
		<td align="center">02</td>
		<td><%=IB0("T04.30203")%></td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">Имеет (укажите соответствующий код: да - 1, нет - 0):<br>&nbsp;&nbsp;&nbsp;все виды благоустройства </td>
		<td align="center">03</td>
		<td><%=IB0("T04.30303")%></td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">&nbsp;&nbsp;&nbsp;центральное отопление</td>
		<td align="center">04</td>
		<td><%=IB0("T04.30403")%></td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">&nbsp;&nbsp;&nbsp;водоснабжение</td>
		<td align="center">05</td>
		<td><%=IB0("T04.30503")%></td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">&nbsp;&nbsp;&nbsp;канализацию</td>
		<td align="center">06</td>
		<td><%=IB0("T04.30603")%></td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">Число зданий организации - всего</td>
		<td align="center">07</td>
		<%=DrawInputs("04.3", 7, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">
			&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
			&nbsp;&nbsp;&nbsp;требуют капитального ремонта
		</td>
		<td align="center">08</td>
		<%=DrawInputs("04.3", 8, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">&nbsp;&nbsp;&nbsp;находятся в аварийном состоянии</td>
		<td align="center">09</td>
		<%=DrawInputs("04.3", 9, 3, 3)%>
	</tr>
</table>
</td></tr>
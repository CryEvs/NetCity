<% ' © 2007-2011 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
	<!-- таб.2 -->
	Раздел 2. Сведения о работе объединений<br><br>
	<div align="right">Коды по ОКЕИ: единица - 642; человек - 792</div>
</td></tr>
<tr><td>
	<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="0" width="100%">
	<tr align="center" valign="middle">
		<td rowspan="3">Наименование объединений</td>
		<td rowspan="3">№<br />строки</td>
		<td colspan="2">Число объединений (круж-<br/>ков, секций, клубов) (ед)</td>
		<td colspan="6">Численность занимающихся в объединениях (чел)</td>
	</tr>
	<tr align="center" valign="middle">
		<td rowspan="2">Всего</td>
		<td rowspan="2">из них (из гр.3)<br/>число объеди-<br/>нений, органи-<br/>зованных на<br/> базе образо-<br/>вательных<br/> учреждений</td>
		<td rowspan="2">Всего</td>
		<td colspan="5">из них (из гр.5)</td>
	</tr>
	<tr align="center" valign="middle">
		<td>занимающих-<br/>ся в двух и<br/> более<br/> объединениях</td>
		<td>занимающих-<br/>ся в объедине-<br/>ниях, органи-<br/>зованных на<br/> базе образо-<br/>вательных<br/> учреждений</td>
		<td>детей с огра-<br/>ниченными<br/> возможнос-<br/>тями здоровья</td>
		<td>детей-сирот и<br/> детей,<br/> оставшихся<br/> без попечения<br/> родителей</td>
		<td>детей-<br/>инвалидов</td>
	</tr>
	<tr align="center" valign="middle">
		<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
	</tr>
	<tr align="center">
		<td align="left">Всего (сумма строк 02-09)</td>
		<td align="center">01</td>
		<%=DrawInputsWithTotals(1,3,10,2,Array(3,4,5,6,7,8,9,10))%>
	</tr>
	<tr align="center">
		<td align="left">&nbsp;в том числе:<br/>&nbsp;&nbsp;технического творчества</td>
		<td align="center">02</td>
		<%=DrawInputs(2,2,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">&nbsp;&nbsp;спортивно-технические</td>
		<td align="center">03</td>
		<%=DrawInputs(2,3,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">&nbsp;&nbsp;эколого-биологические</td>
		<td align="center">04</td>
		<%=DrawInputs(2,4,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">&nbsp;&nbsp;туристско-краеведческие</td>
		<td align="center">05</td>
		<%=DrawInputs(2,5,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">&nbsp;&nbsp;спортивные</td>
		<td align="center">06</td>
		<%=DrawInputs(2,6,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">&nbsp;&nbsp;художественного творчества</td>
		<td align="center">07</td>
		<%=DrawInputs(2,7,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">&nbsp;&nbsp;культурологические</td>
		<td align="center">08</td>
		<%=DrawInputs(2,8,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">&nbsp;&nbsp;другие виды деятельности</td>
		<td align="center">09</td>
		<%=DrawInputs(2,9,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">Из общего числа объединений (из стр.01) платные</td>
		<td align="center">10</td>
		<%=DrawInputs(2,10,3,10)%>
	</tr>
	<tr align="center">
		<td align="left">Из общего числа объединений (из стр.01), <br/>расположенные в сельской местности</td>
		<td align="center">11</td>
		<%=DrawInputs(2,11,3,10)%>
	</tr>
	</table>
</td></tr>
</table>
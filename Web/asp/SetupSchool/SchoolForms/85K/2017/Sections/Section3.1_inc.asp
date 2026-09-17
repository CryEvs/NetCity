<% ' © 2007-2017 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<br><br>
<div align="center" style="margin:10px;"><b>Раздел 3. Сведения о педагогическом персонале организации</b></div>
<div align="center" style="margin-bottom:20px;"><b>3.1. Распределение педагогического персонала по уровню образования и полу</b></div>
<div align="center">(без внешних совместителей и работавших по договорам гражданско-правового характера)</div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan="2">Наименование<br /> показателей</td>
	<td rowspan="2">№<br />строки</td>
	<td rowspan="2">Всего<br />работников</td>
	<td colspan="4">из них имеют образование:</td>
	<td rowspan="2">Из гр.3-<br />женщины</td>
	<td rowspan="2">Кроме того,<br /> численность<br />внешних<br />совместителей</td>
</tr>
<tr align="middle" valign="center">
	<td>высшее</td>
    <td>из них<br />педагогическое</td>
	<td>среднее<br>профессиональное<br>образование по<br>программам<br>подготовки<br>специалистов<br>среднего звена</td>
	<td>из них<br />педагогическое</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность педагогических<br>работников - всего<br>(сумма строк 02 - 12)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1, 3, 9, "03.1", Array(3,4,5,6,7,8,9))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>&nbsp;&nbsp;воспитатели</td>
	<td align="center">02</td>
	<%=DrawInputs("03.1", 2, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;старшие воспитатели</td>
	<td align="center">03</td>
	<%=DrawInputs("03.1", 3, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;музыкальные руководители</td>
	<td align="center">04</td>
	<%=DrawInputs("03.1", 4, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;инструкторы по физической<br>&nbsp;&nbsp;культуре</td>
	<td align="center">05</td>
	<%=DrawInputs("03.1", 5, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;учителя - логопеды</td>
	<td align="center">06</td>
	<%=DrawInputs("03.1", 6, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;учителя - дефектологи</td>
	<td align="center">07</td>
	<%=DrawInputs("03.1", 7, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;педагоги - психологи</td>
	<td align="center">08</td>
	<%=DrawInputs("03.1", 8, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;социальные педагоги</td>
	<td align="center">09</td>
	<%=DrawInputs("03.1", 9, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;педагоги - организаторы</td>
	<td align="center">10</td>
	<%=DrawInputs("03.1", 10, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;педагоги дополнительного<br />&nbsp;&nbsp;образования</td>
	<td align="center">11</td>
	<%=DrawInputs("03.1", 11, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;другие педагогические работники</td>
	<td align="center">12</td>
	<%=DrawInputs("03.1", 12, 3, 9)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Из общей численности учителей-<br />дефектологов (стр.07):<br />учителя, имеющие специальное<br />дефектологическое образование</td>
	<td align="center">13</td>
	<%=DrawInputs("03.1", 13, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 13, 8, 9)%>
</tr></table>
</td></tr>
</table> <!-- format -->
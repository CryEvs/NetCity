<% ' © 2007-2012 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<br><br>
<div style="margin-bottom:10px; text-align:center;"><b>3.2 Распределение административного и педагогического персонала по возрасту</b></div>
<div align="center">(без внешних совместителей и работающих по договорам гражданско-правового характера)</div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top" rowspan="2">
	<td rowspan="2">Наименование показателей</td>
    <td rowspan="2">№<br />строки</td>
	<td rowspan="2">Всего<br />работников<br/>(сумма гр.4-9)</td>
	<td colspan="6">в том числе в возрасте (число полных лет по состоянию на 1 января <%=strShoolYearEnd%> года)</td>
</tr>
<tr align="middle" valign="top">
	<td>моложе 25 лет</td>
    <td>25-29</td>
	<td>30-49</td>
	<td>50-54</td>
	<td>55-59</td>
	<td>60 лет и старше</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность работников -<br />всего (сумма строк 02, 04)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1, 3, 9, "03.2", Array(3, 4, 5, 6, 7, 8, 9))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе персонал:<br>&nbsp;&nbsp;&nbsp;административный - всего</td>
	<td align="center">02</td>
	<%=DrawInputs("03.2", 2, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из него заведующий,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;заместители<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;заведующего</td>
	<td align="center">03</td>
	<%=DrawInputs("03.2", 3, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;педагогический - всего</td>
	<td align="center">04</td>
	<%=DrawInputs("03.2", 4, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из него:<br />&nbsp;&nbsp;&nbsp;&nbsp;воспитатели</td>
	<td align="center">05</td>
	<%=DrawInputs("03.2", 5, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;старшие воспитатели</td>
	<td align="center">06</td>
	<%=DrawInputs("03.2", 6, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;музыкальные работники</td>
	<td align="center">07</td>
	<%=DrawInputs("03.2", 7, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;инструкторы по физической<br>&nbsp;&nbsp;&nbsp;&nbsp;культуре</td>
	<td align="center">08</td>
	<%=DrawInputs("03.2", 8, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя - логопеды</td>
	<td align="center">09</td>
	<%=DrawInputs("03.2", 9, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя - дефектологи</td>
	<td align="center">10</td>
	<%=DrawInputs("03.2", 10, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги - психологи</td>
	<td align="center">11</td>
	<%=DrawInputs("03.2", 11, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;социальные педагоги</td>
	<td align="center">12</td>
	<%=DrawInputs("03.2", 12, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги - организаторы</td>
	<td align="center">13</td>
	<%=DrawInputs("03.2", 13, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги дополнительного<br />&nbsp;&nbsp;&nbsp;&nbsp;образования</td>
	<td align="center">14</td>
	<%=DrawInputs("03.2", 14, 3, 9)%>
</tr>

</table>
</td></tr>

</table> <!-- format -->
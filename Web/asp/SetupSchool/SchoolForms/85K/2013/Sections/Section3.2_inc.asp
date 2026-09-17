<% ' © 2007-2012 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<br><br>
<div style="margin-bottom:10px; text-align:center;"><b>3.2 Распределение административного и педагогического персонала по возрасту</b></div>
<div align="center">(без внешних совместителей и работавших по договорам гражданско-правового характера)</div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top" rowspan="2">
	<td rowspan="2">Наименование показателей</td>
    <td rowspan="2">№<br />строки</td>
	<td rowspan="2">Всего<br />работников<br/>(сумма гр.4-11)</td>
	<td colspan="8">в том числе в возрасте (число полных лет по состоянию на 1 января <%=strShoolYearEnd%> года)</td>
</tr>
<tr align="middle" valign="top">
	<td>моложе 25 лет</td>
    <td>25-29</td>
	<td>30-39</td>
	<td>40-44</td>
	<td>45-49</td>
	<td>50-54</td>
	<td>55-59</td>
	<td>60 лет и старше</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность работников -<br />всего (сумма строк 02, 04)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1, 3, 11, "03.2", Array(3, 4, 5, 6, 7, 8, 9, 10, 11))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе персонал:<br>&nbsp;&nbsp;&nbsp;административный - всего</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из него заведующий,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;заместители<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;заведующего</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;педагогический - всего <br /> (сумма строк 05-15)</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4, 3, 11, "03.2", Array(3, 4, 5, 6, 7, 8, 9, 10, 11))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br />&nbsp;&nbsp;&nbsp;&nbsp;воспитатели</td>
	<td align="center">05</td>
	<%=DrawInputsWithTotals(5, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;старшие воспитатели</td>
	<td align="center">06</td>
	<%=DrawInputsWithTotals(6, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;музыкальные работники</td>
	<td align="center">07</td>
	<%=DrawInputsWithTotals(7, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;инструкторы по физической<br>&nbsp;&nbsp;&nbsp;&nbsp;культуре</td>
	<td align="center">08</td>
	<%=DrawInputsWithTotals(8, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя - логопеды</td>
	<td align="center">09</td>
	<%=DrawInputsWithTotals(9, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя - дефектологи</td>
	<td align="center">10</td>
	<%=DrawInputsWithTotals(10, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги - психологи</td>
	<td align="center">11</td>
	<%=DrawInputsWithTotals(11, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;социальные педагоги</td>
	<td align="center">12</td>
	<%=DrawInputsWithTotals(12, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги - организаторы</td>
	<td align="center">13</td>
	<%=DrawInputsWithTotals(13, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги дополнительного<br />&nbsp;&nbsp;&nbsp;&nbsp;образования</td>
	<td align="center">14</td>
	<%=DrawInputsWithTotals(14, 3, 11, "03.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;другие педагогические<br />&nbsp;&nbsp;&nbsp;&nbsp;работники</td>
	<td align="center">15</td>
	<%=DrawInputsWithTotals(15, 3, 11, "03.2", Array(3))%>
</tr>

</table>
</td></tr>

</table> <!-- format -->
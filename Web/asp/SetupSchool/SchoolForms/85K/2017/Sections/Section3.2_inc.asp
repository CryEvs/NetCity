<% ' © 2007-2017 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<br><br>
<div style="margin-bottom:10px; text-align:center;"><b>3.2. Распределение педагогического персонала по возрасту</b></div>
<div align="center">(без внешних совместителей и работавших по договорам гражданско-правового характера)</div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
<tr align="middle" valign="center">
	<td rowspan="2">Наименование<br /> показателей</td>
	<td rowspan="2">№<br />строки</td>
	<td colspan="10">Число полных лет по состоянию на 1 января <%=strShoolYearEnd%> года</td>
</tr>
<tr align="middle" valign="center">
	<td>моложе<br /> 25 лет</td>
	<td>25-29</td>
	<td>30-34</td>
	<td>35-39</td>
	<td>40-44</td>
	<td>45-49</td>
	<td>50-54</td>
	<td>55-59</td>
	<td>60-64</td>
	<td>65 лет<br /> и более</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность педагогических<br>работников - всего<br>(сумма строк 02 - 12)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1, 3, 12, "03.2", Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 12))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br />&nbsp;&nbsp;&nbsp;&nbsp;воспитатели</td>
	<td align="center">02</td>
	<%=DrawInputs("03.2", 2, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;старшие воспитатели</td>
	<td align="center">03</td>
	<%=DrawInputs("03.2", 3, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;музыкальные руководители</td>
	<td align="center">04</td>
	<%=DrawInputs("03.2", 4, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;инструкторы по физической<br>&nbsp;&nbsp;&nbsp;&nbsp;культуре</td>
	<td align="center">05</td>
	<%=DrawInputs("03.2", 5, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя - логопеды</td>
	<td align="center">06</td>
	<%=DrawInputs("03.2", 6, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя - дефектологи</td>
	<td align="center">07</td>
	<%=DrawInputs("03.2", 7, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги - психологи</td>
	<td align="center">08</td>
	<%=DrawInputs("03.2", 8, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;социальные педагоги</td>
	<td align="center">09</td>
	<%=DrawInputs("03.2", 9, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги - организаторы</td>
	<td align="center">10</td>
	<%=DrawInputs("03.2", 10, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги дополнительного<br />&nbsp;&nbsp;&nbsp;&nbsp;образования</td>
	<td align="center">11</td>
	<%=DrawInputs("03.2", 11, 3, 12)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;другие педагогические работники</td>
	<td align="center">12</td>
	<%=DrawInputs("03.2", 12, 3, 12)%>
</tr>

</table>
</td></tr> <!-- format -->
<% ' © 2007-2012 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<br><br>
<div style="margin-bottom:10px; text-align:center;"><b>3.3 Распределение административного и педагогического персонала по стажу работы</b><br/>
(без внешних совместителей и работавших по договорам гражданско-правового характера)</div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top" rowspan="2">
	<td rowspan="2">Наименование показателей</td>
    <td rowspan="2">№<br />строки</td>
	<td rowspan="2">Всего<br/>работников<br/>(сумма гр.4-9)</td>
	<td colspan="6">в том числе имеют общий стаж работы, лет:</td>
	<td rowspan="2">из общей<br/>численности<br/>работников<br/>(гр. 3) имеют<br/>педагогический<br/>стаж, всего<br/>
		(сумма<br/>гр.11-16)</td>
	<td colspan="6">в том числе имеют педагогический<br/>стаж работы, лет:</td>
</tr>
<tr align="middle" valign="top">
	<td>до 3</td>
    <td>от 3 до 5</td>
	<td>от 5 до 10</td>
	<td>от 10 до<br/>15</td>
	<td>от 15 до<br/>20</td>
	<td>20 лет и<br/>более</td>
	<td>до 3</td>
    <td>от 3 до 5</td>
	<td>от 5 до 10</td>
	<td>от 10 до<br/>15</td>
	<td>от 15 до<br/>20</td>
	<td>20 лет и<br/>более</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность административного<br/>персонала и педагогических<br/>работников, всего</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1, 3, 16, "03.3", Array(3, 10))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них<br />&nbsp;&nbsp;&nbsp;заведующие, заместители заведующих</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2, 3, 16, "03.3", Array(3, 10))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;педагогический персонал</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3, 3, 16, "03.3", Array(3, 10))%>
</tr>
</table>
</td></tr></table>
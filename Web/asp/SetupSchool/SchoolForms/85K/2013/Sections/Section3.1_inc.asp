<% ' © 2007-2008 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<br><br>
<div align="center" style="margin:10px;"><b>Раздел 3. Сведения о персонале организации</b></div>
<div align="center" style="margin-bottom:20px;"><b>3.1. Распределение персонала по уровню образования и полу</b></div>
<div align="center">(без внешних совместителей и работавших по договорам гражданско-правового характера)</div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top" rowspan="2">
	<td rowspan="2">Наименование показателей</td>
    <td rowspan="2">№<br />строки</td>
	<td rowspan="2">Всего<br />работников</td>
	<td colspan="4">из административного и педагогического персонала (стр.02-15) имеют<br/>образование:</td>
	<td rowspan="2">Из гр.3-<br />женщины</td>
	<td rowspan="2">Кроме того<br />численность<br />внешних<br />совместите-<br />лей</td>
</tr>
<tr align="middle" valign="top">
	<td>высшее<br />профессио-<br />нальное</td>
    <td>из них<br />педагогическое</td>
	<td>среднее профессиональное</td>
	<td>из них<br />педагогическое</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность работников - всего<br />(сумма строк 02, 04, 16, 17, 18, 21)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1, 3, 3, "03.1", Array(3))%>
	<td>X</td><td>X</td><td>X</td><td>X</td>
	<%=DrawInputsWithTotals(1, 8, 9, "03.1", Array(8,9))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе персонал:<br>&nbsp;&nbsp;&nbsp;административный - всего</td>
	<td align="center">02</td>
	<%=DrawInputs("03.1", 2, 3, 8)%>
	<td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из него заведующий,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;заместители заведующего</td>
	<td align="center">03</td>
	<%=DrawInputs("03.1", 3, 3, 8)%>
	<td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;педагогический - всего <br />(сумма строк 05-15)</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4, 3, 9, "03.1", Array(3, 4, 5, 6, 7, 8, 9))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br />&nbsp;&nbsp;&nbsp;&nbsp;воспитатели</td>
	<td align="center">05</td>
	<%=DrawInputs("03.1", 5, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;старшие воспитатели</td>
	<td align="center">06</td>
	<%=DrawInputs("03.1", 6, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;музыкальные работники</td>
	<td align="center">07</td>
	<%=DrawInputs("03.1", 7, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;инструкторы по физической<br>&nbsp;&nbsp;&nbsp;&nbsp;культуре</td>
	<td align="center">08</td>
	<%=DrawInputs("03.1", 8, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя - логопеды</td>
	<td align="center">09</td>
	<%=DrawInputs("03.1", 9, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя - дефектологи</td>
	<td align="center">10</td>
	<%=DrawInputs("03.1", 10, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги - психологи</td>
	<td align="center">11</td>
	<%=DrawInputs("03.1", 11, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;социальные педагоги</td>
	<td align="center">12</td>
	<%=DrawInputs("03.1", 12, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги - организаторы</td>
	<td align="center">13</td>
	<%=DrawInputs("03.1", 13, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги дополнительного<br />&nbsp;&nbsp;&nbsp;&nbsp;образования</td>
	<td align="center">14</td>
	<%=DrawInputs("03.1", 14, 3, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;другие педагогические работники</td>
	<td align="center">15</td>
	<%=DrawInputs("03.1", 15, 3, 9)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;младшие воспитатели</td>
	<td align="center">16</td>
	<%=DrawInputs("03.1", 16, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 16, 8, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;помощники воспитателей</td>
	<td align="center">17</td>
	<%=DrawInputs("03.1", 17, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 17, 8, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;медицинский персонал - всего</td>
	<td align="center">18</td>
	<%=DrawInputs("03.1", 18, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 18, 8, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из него:<br />&nbsp;&nbsp;&nbsp;&nbsp;врачи</td>
	<td align="center">19</td>
	<%=DrawInputs("03.1", 19, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 19, 8, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;медицинские сестры</td>
	<td align="center">20</td>
	<%=DrawInputs("03.1", 20, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 20, 8, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;обслуживающий персонал - всего<br />&nbsp;&nbsp;&nbsp;(сумма строк 22-24)</td>
	<td align="center">21</td>
	<%=DrawInputsWithTotals(21, 3, 3, "03.1", Array(3))%>
	<td>X</td><td>X</td><td>X</td><td>X</td>
	<%=DrawInputsWithTotals(21, 8, 9, "03.1", Array(8,9))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br />&nbsp;&nbsp;&nbsp;&nbsp;шеф-повар</td>
	<td align="center">22</td>
	<%=DrawInputs("03.1", 22, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 22, 8, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;повар</td>
	<td align="center">23</td>
	<%=DrawInputs("03.1", 23, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 23, 8, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;другие</td>
	<td align="center">24</td>
	<%=DrawInputs("03.1", 24, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 24, 8, 9)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;Из общей численности учителей-<br />&nbsp;&nbsp;&nbsp;дефектологов (стр.10 гр.3):<br />&nbsp;&nbsp;&nbsp;учителя, имеющие специальное<br />&nbsp;&nbsp;&nbsp;дефектологической образование</td>
	<td align="center">25</td>
	<%=DrawInputs("03.1", 25, 3, 3)%>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<td>X</td>
	<%=DrawInputs("03.1", 25, 8, 9)%>
</tr></table>
</td></tr><tr><td>
		Численность руководителей, прошедших в течение последних трех лет повышение квалификации и (или) профессиональную переподготовку (из стр. 02) (26)<%=IT("T03.12603", 4, 5 )%><br />
	</td></tr>
</table> <!-- format -->
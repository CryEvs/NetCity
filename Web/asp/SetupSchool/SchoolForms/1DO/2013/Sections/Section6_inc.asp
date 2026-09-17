<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<!-- таб.6 -->
	Раздел 6. Численность работников и внешних совместителей<br/><br/>
	<!--div align="right">Коды по ОКЕИ: человек-792; единица-642</div-->
</td></tr>
<tr><td>

<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="0" width="100%">
<tr align="center" valign="middle">
	<td rowspan="3">Наименование</td>
	<td rowspan="3">№<br/>строки</td>
	<td rowspan="3">Численность <br/>работников <br/>(физические <br/>лица)</td>
	<td rowspan="3">Число <br/>вакантных <br/>должностей</td>
	<td rowspan="3">Среднеспи-<br/>сочная чис-<br/>ленность <br/>работников <br/>(без внешних <br/>совмести-<br/>телей)</td>
	<td rowspan="3">из них <br/>(из гр. 3) <br/>женщины</td>
	<td colspan="7">Численность работников (из гр. 3)</td>
	<td rowspan="2" colspan="2">кроме того, внешние <br/>совместители</td>
	<td rowspan="2" colspan="6">из общей численности работников (из гр.3) имеют образование</td>
	<td rowspan="2" colspan="5">из общей численности работников (из гр.3) имеют стаж работы</td>
	<td rowspan="2" colspan="5">из общей численности работников (из гр.3) находятся в возрасте <br/>(число полных лет по состоянию на 01 января отчетного года)</td>
</tr>
<tr align="center" valign="middle">
	<td colspan="2">имеющих</td>
	<td rowspan="2">имеющих <br/>внутреннее <br/>совмести-<br/>тельство</td>
	<td colspan="4">имеющих квалификацию</td>
</tr>
<tr align="center" valign="middle">
	<td>неполную <br/>занятость</td>
	<td>полную <br/>занятость</td>
	<td>высшей <br/>категории</td>
	<td>первой <br/>категории</td>
	<td>второй <br/>категории</td>
	<td>не имеют <br/>категории</td>
	<td>всего</td>
	<td>из них <br/>(из гр.14) <br/>женщин</td>
	<td>высшее <br/>профес-<br/>сиональное</td>
	<td>из них (из <br/>гр.16) педаго-<br/>гическое</td>
	<td>среднее <br/>профес-<br/>сиональное</td>
	<td>из них (из <br/>гр.18) педаго-<br/>гическое</td>
	<td>начальное <br/>профес-<br/>сиональное</td>
	<td>среднее <br/>(полное) <br/>общее</td>
	<td>менее 2 лет</td>
	<td>от 2 до 5 лет</td>
	<td>от 5 до 10 лет</td>
	<td>от 10 до 20 <br/>лет</td>
	<td>20 лет и <br/>более </td>
	<td>моложе <br/>25 лет</td>
	<td>25-35 лет</td>
	<td>35 лет и <br/>старше</td>
	<td>из них. <br/>(из гр.29) <br/>пенсионеры</td>
	<td>из них <br/>(из гр. 30) <br/>женщины</td>
</tr>
<tr align="center" valign="middle">
	<%For i = 1 To 31%>
		<td><%=i%></td>
	<%Next%>
</tr>

<tr align="center" valign="middle">
	<td align="left">Всего работников учреждения (сумма строк 02, 07, 15, 16)</td>
	<td>01</td>
	<%=DrawInputsWithTotals(1,3,31,6,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31))%>
	<%dim i%>
</tr>
<tr align="center" valign="middle">
	<td align="left">в том числе <br/>&nbsp;руководящие работники (сумма строк 03-06)</td>
	<td>02</td>
	<%=DrawInputsWithTotals(2,3,31,6,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31))%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;в том числе <br/>&nbsp;&nbsp;&nbsp;руководитель</td>
	<td>03</td>
	<%=DrawInputs(6,3,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;заместители руководителя </td>
	<td>04</td>
	<%=DrawInputs(6,4,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;&nbsp;главный бухгалтер</td>
	<td>05</td>
	<%=DrawInputs(6,5,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;&nbsp;другие руководящие работники</td>
	<td>06</td>
	<%=DrawInputs(6,6,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;педагогические работники (сумма строк 08-14)</td>
	<td>07</td>
	<%=DrawInputsWithTotals(7,3,31,6,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31))%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;учителя</td>
	<td>08</td>
	<%=DrawInputs(6,8,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;&nbsp;педагоги дополнительного образования</td>
	<td>09</td>
	<%=DrawInputs(6,9,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;&nbsp;педагоги-организаторы</td>
	<td>10</td>
	<%=DrawInputs(6,10,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;&nbsp;социальные педагоги</td>
	<td>11</td>
	<%=DrawInputs(6,11,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;&nbsp;тренеры-преподаватели</td>
	<td>12</td>
	<%=DrawInputs(6,12,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;&nbsp;методисты</td>
	<td>13</td>
	<%=DrawInputs(6,13,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;&nbsp;&nbsp;другие педагогические работники</td>
	<td>14</td>
	<%=DrawInputs(6,14,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;учебно-вспомогательный персонал</td>
	<td>15</td>
	<%=DrawInputs(6,15,3,31)%>
</tr>
<tr align="center" valign="middle">
	<td align="left" nowrap>&nbsp;обслуживающий персонал</td>
	<td>16</td>
	<%=DrawInputs(6,16,3,31)%>
</tr>
</TABLE>

</td></tr>
<tr><td>
<table border="0" cellpadding="2" align="left"  width="45%">
<tr><td>
<br/><br/>
<b>Справка</b><br/>
Численность медицинских работников <br/>(сумма строк 19, 20) (чел)</td><td>17</td><td><%=ITS("T061703", 10, 10 )%></td></tr>
<tr><td>&nbsp;из них женщин (чел)</td><td>18</td><td><%=IT("T061803", 10, 10 )%></td></tr>
<tr>
	<td align="left">&nbsp;&nbsp;в том числе <br/>&nbsp;&nbsp;&nbsp;врачи всех специальностей (чел)</td><td>19</td><td><%=IT("T061903", 10, 10 )%></td>
</tr>
<tr>
	<td align="left">&nbsp;&nbsp;&nbsp;медицинские сестры (чел)</td><td>20</td><td><%=IT("T062003", 10, 10 )%></td>
</tr>
<tr>
	<td align="left">Численность учителей в возрасте до 30 лет (из строки 08)(чел)</td><td>21</td><td><%=IT("T062103", 10, 10 )%></td>
</tr>
<tr>
	<td align="left">Численность руководителей, прошедших в течение <br/>последних трех лет повышение квалификации и (или) <br/>профессиональную переподготовку (из строки 02) (чел)</td><td>22</td><td><%=IT("T062203", 10, 10 )%></td>
</tr>

</table></td></tr>
<tr ><td><br/>
<!-- end of таб.6 -->
</td></tr></table> <!-- format -->

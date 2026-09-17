<% ' © 2007-2012 IRTech. All rights reserved.
%>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 5. Численность работников и внешних совместителей</b><br/>
	<p font-size="8pt">(раздел заполняют только те учреждения, которые не осуществляют подготовку по программам общего образования)</p>
</div>
<div align="right"><p font-size:10pt>Код по ОКЕИ: человек-792</p></div>
<table Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
    <tr align="middle" valign="center">
	    <td rowspan="3"><br />Наименование</td><td rowspan="3">№<br />строки</td><td rowspan="3">Численность<br />работников<br />(физические<br /> лица)</td>
	<td rowspan="3">Число<br />вакантных<br />должностей</td><td rowspan="3">Средне-<br />списочная<br />численность<br />работников (без<br />внешних<br />совместителей)</td>
		<td rowspan="3">Из них (из гр.<br />3) женщин</td><td colspan="7">Численность работников (из гр. 3)</td><td rowspan="2" colspan="2">Кроме того, внешние<br />совместители</td>
    <td rowspan="2" colspan="6">из общей численности работников (из гр.3) имеют образование</td>
	<td rowspan="2" colspan="5">из общей численности работников (из гр.3) имеют стаж работы</td>
	<td rowspan="2" colspan="5">из общей численности работников (из гр.3) находятся в возрасте<br />
		(число полных лет по состояния на 01 января отчетного года)
	</td>
	</tr>
	<tr align="middle" valign="center"><td colspan="2">имеющих</td><td rowspan="2">имеющих<br />внутреннее<br />совмести-<br />тельство</td><td colspan="4">имеющих квалификацию</td></tr>
	<tr align="middle" valign="center"><td>Неполную<br />занятость</td><td>Полную<br/>занятость</td><td>высшей<br />категории</td>
		<td>первой<br />категории</td><td>второй<br />категории</td><td>не имеют<br />категории</td><td>всего</td><td>из них<br />женщин</td>
		<td>высшее<br />профес-<br />сиональное</td><td>из них (из<br />гр.16) педаго-<br />гическое</td><td>среднее<br/>профес-<br/>сиональное</td>
		<td>из них (из<br/>гр.18) педаго-<br />гическое</td><td>начальное<br/>профессио-<br />нальное</td><td>среднее<br />(полное)<br />общее</td>
		<td>менее 2 лет</td><td>от 2 до 5 лет</td><td>от 5 до 10 лет</td><td>от 10 до 20<br />лет</td><td>20 лет и<br/>более</td><td>моложе 25<br />лет</td>
		<td>25 - 35 лет</td><td>35 лет и<br />старше</td><td>из них (из<br />гр. 29) пенси-<br />онеров</td><td>из них<br />(из гр. 30)<br/>женщины</td>
	</tr>
	<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
		<td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td>
		<td>27</td><td>28</td><td>29</td><td>30</td><td>31</td>
	</tr>
	<tr align="middle" valign="center">
		<td align="left" nowrap>Всего работников учреждения (сумма строк 02, 07, 14, 15)</td>
		<td>01</td>
		<%=DrawInputsWithTotals(1,3,31,5,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31))%>
	</tr>
	<tr align="middle" valign="center"><td align="left">&emsp;в том числе<br />
		&emsp;&emsp;руководящие работники (сумма строк 03-06)</td>
		<td>02</td>
		<%=DrawInputsWithTotals(2,3,31,5,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31))%></tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;в том числе:<br />
		&emsp;&emsp;&emsp;&emsp;директор</td><td>03</td>
		<%=DrawInputs("05",3,3,31)%>
	</tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;заместители директора</td>
		<td>04</td>
		<%=DrawInputs("05",4,3,31)%>
	</tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;главный бухгалтер</td>
		<td>05</td>
		<%=DrawInputs("05",5,3,31)%>
	</tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;другие руководящие работники</td>
		<td>06</td>
		<%=DrawInputs("05",6,3,31)%>
	</tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;педагогические работники (сумма строк 08-13)</td>
		<td>07</td>
		<%=DrawInputsWithTotals(7,3,31,5,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31))%></tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;в том числе:<br />
		&emsp;&emsp;&emsp;&emsp;учителя</td><td>08</td>
		<%=DrawInputs("05",8,3,31)%>
	</tr>
		<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;&emsp;педагоги-психологи</td><td>09</td>
		<%=DrawInputs("05",9,3,31)%>
	</tr>
	<tr align="middle" valign="center"><td align="left">
		&emsp;&emsp;&emsp;&emsp;социальные педагоги</td><td>10</td>
		<%=DrawInputs("05",10,3,31)%>
	</tr>
		<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;&emsp;воспитатели</td><td>11</td>
		<%=DrawInputs("05",11,3,31)%>
	</tr>
		<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;&emsp;тьюторы</td><td>12</td>
		<%=DrawInputs("05",12,3,31)%>
	</tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;&emsp;&emsp;другие педагогические работники</td><td>13</td>
		<%=DrawInputs("05",13,3,31)%>
	</tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;учебно-вспомогательный персонал</td>
		<td>14</td>
		<%=DrawInputs("05",14,3,31)%></tr>
	<tr align="middle" valign="center"><td align="left">&emsp;&emsp;обслуживающий персонал</td>
		<td>15</td>
		<%=DrawInputs("05",15,3,31)%></tr>
    </table></td></tr>
	<tr><td>
		<br /><br />
		<b>Справка к разделу 5</b><br />
		Численность медицинских работников<br />
		(сумма строк 18, 19) (чел)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
		(16)&emsp;&emsp;<%=ITSEx("T051603", 4, 5, true )%><br />
		&emsp;из них женщины (чел)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
		(17)&emsp;&emsp;<%=IT("T051703", 4, 5 )%><br />
		&emsp;&emsp;в том числе:<br />
		&emsp;&emsp;&emsp;врачи всех специальностей (чел)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
		(18)&emsp;&nbsp;&nbsp;&nbsp;<%=IT("T051803", 4, 5 )%><br />
		&emsp;&emsp;&emsp;медицинские сестры (чел)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
		(19)&emsp;&nbsp;&nbsp;&nbsp;<%=IT("T051903", 4, 5 )%>

	    </td></tr></table> <!-- format -->
<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.7.6 -->
<table class="print-block">
	<tr><td>
		<div align="center">7.6. Школы</div>
		<br/>
		<div align="right">Код по ОКЕИ: человек - 792</div>
	</td></tr>
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td rowspan="3">Наименование</td>
				<td rowspan="3">№<br/>строки</td>
				<td rowspan="3">Численность <br/>работников <br/>(физические <br/>лица)</td>
				<td rowspan="3">Число <br/>вакантных <br/>должностей</td>
				<td rowspan="3">Среднеспи-<br/>сочная чис-<br/>ленность ра-<br/>ботников <br/>(без внеш-<br/>них совмес-<br/>тителей)</td>
				<td rowspan="3">Из них (из <br/>гр. 3) <br/>женщин</td>
				<td colspan="7">Численность работников (из гр. 3)</td>
				<td rowspan="2" colspan="2">Кроме того, внешние <br/>совместители</td>
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
				<td>из них (из гр. <br/>14) женщин</td>
				<td>высшее <br/>профес-<br/>сиональное</td>
				<td>из них (гр.16) <br/>педаго-<br/>гическое</td>
				<td>среднее <br/>профес-<br/>сиональное</td>
				<td>из них (гр.18) <br/>педаго-<br/>гическое</td>
				<td>начальное <br/>профессио-<br/>нальное</td>
				<td>среднее <br/>(полное) <br/>общее</td>
				<td>менее 2 лет</td>
				<td>от 2 до 5 лет</td>
				<td>от 5 до 10 лет</td>
				<td>от 10 до 20 <br/>лет</td>
				<td>20 лет и <br/>более</td>
				<td>моложе<br/>25 лет</td>
				<td>25-35 лет</td>
				<td>35 лет и <br/>старше</td>
				<td>из них <br/>(из гр.29) <br/>пенсионеры</td>
				<td>из них<br/>(из гр.30)<br/>женщин</td>
			</tr>
			<tr align="center" valign="middle">
				<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Всего работников учреждений (сумма строк 02, 03, 07, 08)</td>
				<td>01</td>
				<%=DrawInputsWithTotals(1,3,31,"07.6",Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;в том числе:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;руководящие работники</td>
				<td>02</td>
				<%=DrawInputs("07.6",2,3,31)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;педагогические работники</td>
				<td>03</td>
				<%=DrawInputs("07.6",3,3,31)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;педагоги дополнительного образования</td>
				<td>04</td>
				<%=DrawInputs("07.6",4,3,31)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;педагоги-организаторы</td>
				<td>05</td>
				<%=DrawInputs("07.6",5,3,31)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;тренеры-преподаватели</td>
				<td>06</td>
				<%=DrawInputs("07.6",6,3,31)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;учебно-вспомогательный персонал</td>
				<td>07</td>
				<%=DrawInputs("07.6",7,3,31)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обслуживающий персонал</td>
				<td>08</td>
				<%=DrawInputs("07.6",8,3,31)%>
			</tr>
		</table>
	</td></tr>
</table>
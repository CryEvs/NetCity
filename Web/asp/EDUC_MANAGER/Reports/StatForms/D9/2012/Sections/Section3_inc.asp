<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 3. Распределение обучающихся по классам</b></td></tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: человек-792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2">
						Наименование
					</td>
					<td rowspan="2">
						№<br>
						строки
					</td>
					<td colspan="13">
						Из общей численности обучающихся (из раздела 2 графы 3)
					</td>
					<td rowspan="2">
						Выпуск<br/>
						обучаю-<br/>
						щихся - <br/>
						всего<br/>
					</td>
				</tr>
				<tr align="center">
					<td>
						подгото-<br/>
						вительный<br/>
						класс
					</td>
					<td>
						1 класс
					</td>
					<td>
						2 класс
					</td>
					<td>
						3 класс
					</td>
					<td>
						4 класс
					</td>
					<td>
						5 класс
					</td>
					<td>
						6 класс
					</td>
					<td>
						7 класс
					</td>
					<td>
						8 класс
					</td>
					<td>
						9 класс
					</td>
					<td>
						10 класс
					</td>
					<td>
						11 класс
					</td>
					<td>
						12 класс
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
					<td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Специальные (коррекционные) образовательные учреждения для <br/>
						обучающихся, воспитанников с ограниченными возможностями <br/>
						здоровья (сумма строк 02 - 10) 
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotalsExDisabled(1, 3, 16, 3, Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16), 4, 5, False)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для неслышащих детей
					</td>
					<td>02</td>
					<%Call DrawInputs(3,2,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для слабослышащих и позднооглохших детей
					</td>
					<td>03</td>
					<%Call DrawInputs(3,3,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для незрячих детей
					</td>
					<td>04</td>
					<%Call DrawInputs(3,4,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для слабовидящих и поздноослепших детей
					</td>
					<td>05</td>
					<%Call DrawInputs(3,5,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с тяжелой речевой патологией
					</td>
					<td>06</td>
					<%Call DrawInputs(3,6,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с нарушениями опорно-двигательного аппарата
					</td>
					<td>07</td>
					<%Call DrawInputs(3,7,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с задержкой психического развития
					</td>
					<td>08</td>
					<%Call DrawInputs(3,8,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с умственной отсталостью
					</td>
					<td>09</td>
					<%Call DrawInputs(3,9,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;школы индивидуального обучения на дому для детей-инвалидов
					</td>
					<td>10</td>
					<%Call DrawInputs(3,10,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности (из стр. 01) обучающихся в сельской местности
					</td>
					<td>11</td>
					<%Call DrawInputs(3,11,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности обучающихся (из стр. 01), воспитанников школ-интернатов <br/>
						(без приходящих детей)
					</td>
					<td>12</td>
					<%Call DrawInputs(3,12,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности (из стр. 01) обучающихся в школах-интернатах для детей-<br/>
						сирот и детей, оставшихся без попечения родителей
					</td>
					<td>13</td>
					<%Call DrawInputs(3,13,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Специальные учебно-воспитательные учреждения для детей и подростков с <br/>
						девиантным поведением
					</td>
					<td>14</td>
					<%Call DrawInputs(3,14,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр.14): в сельской местности
					</td>
					<td>15</td>
					<%Call DrawInputs(3,15,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Оздоровительные образовательные учреждения санаторного типа для детей, <br/>
						нуждающихся в длительном лечении
					</td>
					<td>16</td>
					<%Call DrawInputs(3,16,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр.16):<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в сельской местности
					</td>
					<td>17</td>
					<%Call DrawInputs(3,17,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для детей и подростков с малыми и затухающими формами туберкулеза
					</td>
					<td>18</td>
					<%Call DrawInputs(3,18,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для детей, больных сколиозом
					</td>
					<td>19</td>
					<%Call DrawInputs(3,19,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Образовательные учреждения для детей, нуждающихся в психолого-<br/>
						педагогической и медико-социальной помощи
					</td>
					<td>20</td>
					<%Call DrawInputs(3,20,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр.20): в сельской местности
					</td>
					<td>21</td>
					<%Call DrawInputs(3,21,3,16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности (из стр. 01) количество выпускников, участвовавших в <br/>
						едином государственном экзамене (ЕГЭ)
					</td>
					<td>22</td>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(3,22,16,16)%>
				</tr>
			</table>
		</td>
	</tr>
</table>

<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 2. Численность обучающихся на начало учебного года</b></td></tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: единица - 642; человек-792</div>
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
					<td colspan="2">
						Численность обучающихся
					</td>
					<td colspan="3">
						Из общей численности (из графы 3)
					</td>
					<td rowspan="2">
						Обучающих-<br/>
						ся в образо-<br/>
						вательных <br/>
						учреждени-ях <br/>
						для детей-<br/>
						сирот (из <br/>
						гр.3)
					</td>
					<td rowspan="2">
						Обучаю-<br/>
						щихся в <br/>
						школах-<br/>
						интернатах <br/>
						(из гр.3)
					</td>
					<td colspan="2">
						Из них (из графы 9)
					</td>
				</tr>
				<tr align="center">
					<td>
						всего
					</td>
					<td>
						их них в <br/>
						сельской <br/>
						местности
					</td>
					<td>
						дети с <br/>
						умственной <br/>
						отсталостью
					</td>
					<td>
						инвалиды и <br/>
						дети-<br/>
						инвалиды
					</td>
					<td>
						дети-сироты
					</td>
					<td>
						приходящие <br/>
						обучающи-<br/>
						еся
					</td>
					<td>
						дети-сироты
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Специальные (коррекционные) образовательные учреждения для <br/>
						обучающихся, воспитанников с ограниченными возможностями <br/>
						здоровья (сумма строк 02 - 10) 
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotalsExDisabled(1, 3, 11, 2, Array(3,4,5,6,7,8,9,10,11), 4, 5, True)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для неслышащих детей
					</td>
					<td>02</td>
					<%Call DrawInputs(2,2,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для слабослышащих и позднооглохших детей
					</td>
					<td>03</td>
					<%Call DrawInputs(2,3,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для незрячих детей
					</td>
					<td>04</td>
					<%Call DrawInputs(2,4,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для слабовидящих и поздноослепших детей
					</td>
					<td>05</td>
					<%Call DrawInputs(2,5,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с тяжелой речевой патологией
					</td>
					<td>06</td>
					<%Call DrawInputs(2,6,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с нарушениями опорно-двигательного аппарата
					</td>
					<td>07</td>
					<%Call DrawInputs(2,7,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с задержкой психического развития
					</td>
					<td>08</td>
					<%Call DrawInputs(2,8,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с умственной отсталостью
					</td>
					<td>09</td>
					<%Call DrawInputs(2,9,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;школы индивидуального обучения на дому для детей-инвалидов
					</td>
					<td>10</td>
					<%Call DrawInputs(2,10,3,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Кроме того (стр.01), детей дошкольного возраста
					</td>
					<td>11</td>
					<%Call DrawInputs(2,11,3,4)%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности (из стр. 01) обучающихся в сельской местности
					</td>
					<td>12</td>
					<td>X</td><td>X</td>
					<%Call DrawInputs(2,12,5,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности обучающихся (из стр. 01) воспитанников школ-интернатов <br/>
						(без приходящих детей)
					</td>
					<td>13</td>
					<%Call DrawInputs(2,13,3,5)%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности (из стр. 01) обучающихся в школах-интернатах для детей-<br/>
						сирот и детей, оставшихся без попечения родителей 
					</td>
					<td>14</td>
					<%Call DrawInputs(2,14,3,4)%>
					<td>X</td>
					<%Call DrawInputs(2,14,6,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Специальные учебно-воспитательные учреждения для детей и подростков с <br/>
						девиантным поведением
					</td>
					<td>15</td>
					<%Call DrawInputs(2,15,3,4)%>
					<td>X</td>
					<%Call DrawInputs(2,15,6,8)%>
					<td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр.15): в сельской местности
					</td>
					<td>16</td>
					<td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(2,16,6,8)%>
					<td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Оздоровительные образовательные учреждения санаторного типа для детей, <br/>
						нуждающихся в длительном лечении
					</td>
					<td>17</td>
					<%Call DrawInputs(2,17,3,4)%>
					<td>X</td>
					<%Call DrawInputs(2,17,6,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр.17):<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в сельской местности
					</td>
					<td>18</td>
					<td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(2,18,6,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для детей и подростков с малыми и затухающими формами туберкулеза
					</td>
					<td>19</td>
					<%Call DrawInputs(2,19,3,4)%>
					<td>X</td>
					<%Call DrawInputs(2,19,6,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для детей, больных сколиозом
					</td>
					<td>20</td>
					<%Call DrawInputs(2,20,3,4)%>
					<td>X</td>
					<%Call DrawInputs(2,20,6,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Образовательные учреждения для детей, нуждающихся в психолого-<br/>
						педагогической и медико-социальной помощи
					</td>
					<td>21</td>
					<%Call DrawInputs(2,21,3,4)%>
					<td>X</td>
					<%Call DrawInputs(2,21,6,8)%>
					<td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр.21): в сельской местности
					</td>
					<td>22</td>
					<td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(2,22,6,8)%>
					<td>X</td><td>X</td><td>X</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<table border="0" cellpadding="2" align="left"  width="45%">
				<tr>
					<td>
						Численность слабовидящих детей, обучающихся в учреждениях для незрячих (из<br>
						раздела 2 гр.3, стр.04) (чел)</td><td>23</td><td><%=IT("T0223", 5, 5 )%>
					</td>
				</tr>
				<tr>
					<td>
						Численность незрячих детей, обучающихся в учреждениях для слабовидящих и<br>
						поздноослепших (из раздела 2 гр.3, стр.05) (чел)</td><td>24</td><td><%=IT("T0224", 5, 5 )%>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

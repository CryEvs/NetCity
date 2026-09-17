<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 1. Сведения об образовательных учреждениях</b></td></tr>
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
					<td rowspan="3">
						Наименование<br/>(согласно типовым положениям)
					</td>
					<td rowspan="3" align="center">
						№<br>
						строки
					</td>
					<td rowspan="2" colspan="2">
						Число учреждений(ед)
					</td>
					<td rowspan="2" colspan="2">
						Число 1-11 (12) и<br/>подготовительных классов<br/>(ед.)
					</td>
					<td rowspan="2" colspan="2">
						Численность<br/>учителей (включая<br/>совместителей) (чел.)
					</td>
					<td colspan="4">
						Численность медицинских работников (включая <br/>
						состоящих в штате учреждений здравоохранения и <br/>
						осуществляющих работу в образовательных <br/>
						учреждениях) (чел.)
					</td>
					<td colspan="4">
						Из общего числа учреждений (из граф 3,4)
					</td>
					<td colspan="2" rowspan="2">
						В них число групп (ед.)
					</td>
				</tr>
				<tr align="center">
					<td colspan="2">
						врачей всех <br/>
						специальностей
					</td>
					<td colspan="2">
						медицинских сестер
					</td>
					<td colspan="2">
						число школ-интернатов
					</td>
					<td colspan="2">
						число учреждений для <br/>
						детей-сирот
					</td>
				</tr>
				<tr align="center">
					<td>
						всего
					</td>
					<td>
						из них в <br/>
						сельской <br/>
						местности<br/>
					</td>
					<td>
						всего
					</td>
					<td>
						из них в <br/>
						сельской <br/>
						местности<br/>
					</td>
					<td>
						всего
					</td>
					<td>
						из них в <br/>
						сельской <br/>
						местности<br/>
					</td>
					<td>
						всего
					</td>
					<td>
						из них в <br/>
						сельской <br/>
						местности<br/>
					</td>
					<td>
						всего
					</td>
					<td>
						из них в <br/>
						сельской <br/>
						местности<br/>
					</td>
					<td>
						всего
					</td>
					<td>
						из них в <br/>
						сельской <br/>
						местности<br/>
					</td>
					<td>
						всего
					</td>
					<td>
						из них в <br/>
						сельской <br/>
						местности<br/>
					</td>
					<td>
						всего
					</td>
					<td>
						из них в <br/>
						сельской <br/>
						местности<br/>
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
					<td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Специальные (коррекционные) образовательные учреждения для <br/>
						обучающихся, воспитанников с ограниченными возможностями <br/>
						здоровья (сумма строк 02 - 10) 
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 3, 18, 1, Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для неслышащих детей
					</td>
					<td>02</td>
					<%Call DrawInputs(1,2,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для слабослышащих и позднооглохших детей
					</td>
					<td>03</td>
					<%Call DrawInputs(1,3,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для незрячих детей
					</td>
					<td>04</td>
					<%Call DrawInputs(1,4,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для слабовидящих и поздноослепших детей
					</td>
					<td>05</td>
					<%Call DrawInputs(1,5,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с тяжелой речевой патологией
					</td>
					<td>06</td>
					<%Call DrawInputs(1,6,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с нарушениями опорно-двигательного аппарата
					</td>
					<td>07</td>
					<%Call DrawInputs(1,7,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с задержкой психического развития
					</td>
					<td>08</td>
					<%Call DrawInputs(1,8,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;для детей с умственной отсталостью
					</td>
					<td>09</td>
					<%Call DrawInputs(1,9,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;школы индивидуального обучения на дому для детей-инвалидов
					</td>
					<td>10</td>
					<%Call DrawInputs(1,10,3,12)%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Кроме того (стр.01), филиалы
					</td>
					<td>11</td>
					<%Call DrawInputs(1,11,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Из них (из стр.01):<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;школы-интернаты
					</td>
					<td>12</td>
					<td>X</td><td>X</td>
					<%Call DrawInputs(1,12,5,12)%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;образовательные учреждения для детей-сирот и детей,<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;оставшихся без попечения родителей
					</td>
					<td>13</td>
					<td>X</td><td>X</td>
					<%Call DrawInputs(1,13,5,14)%>
					<td>X</td><td>X</td>
					<%Call DrawInputs(1,13,17,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Специальные учебно-воспитательные учреждения для детей и <br/>
						подростков с девиантным поведением
					</td>
					<td>14</td>
					<%Call DrawInputs(1,14,3,12)%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Оздоровительные образовательные учреждения санаторного типа для <br/>
						детей, нуждающихся в длительном лечении
					</td>
					<td>15</td>
					<%Call DrawInputs(1,15,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр.15):<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для детей и подростков с малыми и затухающими формами <br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;туберкулеза
					</td>
					<td>16</td>
					<%Call DrawInputs(1,16,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для детей, больных сколиозом
					</td>
					<td>17</td>
					<%Call DrawInputs(1,17,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Кроме того (стр.15), филиалы
					</td>
					<td>18</td>
					<%Call DrawInputs(1,18,3,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Образовательные учреждения для детей, нуждающихся в психолого-<br/>
						педагогической и медико-социальной помощи
					</td>
					<td>19</td>
					<%Call DrawInputs(1,19,3,12)%>
					<td>X</td><td>X</td>
					<%Call DrawInputs(1,19,15,18)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Кроме того (стр.19), филиалы
					</td>
					<td>20</td>
					<%Call DrawInputs(1,20,3,12)%>
					<td>X</td><td>X</td>
					<%Call DrawInputs(1,20,15,18)%>
				</tr>
			</table>
		</td>
	</tr>
</table>

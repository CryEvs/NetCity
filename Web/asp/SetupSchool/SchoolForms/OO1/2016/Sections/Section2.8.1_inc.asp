<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>2.8.1. Выбытие обучающихся.</b></div>

			<div align="center"><i>(без учета обучающихся, получивших аттестат об основном общем образовании, аттестат о среднем общем образовании или свидетельство об обучении, сведения о<br>
				которых приведены в строках 02, 10 и 22 графе 18 подраздела 2.6.)</i></div>

			<div align="left"><b>по классам очного обучения</b></div>

			<div align="right">Код по ОКЕИ: человек – 792</div>

			<table class="ThinTable" align="left" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование показателя</td>
					<td rowspan="2">№<br>строки</td>
					<td rowspan="2">
						Всего<br>
						(сумма гр.<br>
						4 - 10)
					</td>
					<td colspan="3">
						Все классы, кроме классов для обучающихся с<br>
						ограниченными возможностями здоровья
					</td>
					<td colspan="4">
						Классы для обучающихся с ограниченными возможностями<br>
						здоровья:
					</td>
					<td rowspan="2">
						Из гр. 3 -<br>
						лица в<br>
						возрасте<br>
						18 лет и<br>
						старше
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>
						программы<br>
						начального<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						основного<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						среднего<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						начального<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						основного<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						среднего<br>
						общего<br>
						образования
					</td>
					<td>
						образование<br>
						обучающихся с<br>
						умственной<br>
						отсталостью<br>
						(интеллекту-<br>
						альными<br>
						нарушениями)
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
					<td>8</td>
					<td>9</td>
					<td>10</td>
					<td>11</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">Выбыло обучающихся - всего (сумма стр. 02, 05, 08 - 13)</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1, 3, 11, "02.8.1", Array(3,4,5,6,7,8,9,10,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;в том числе:<br>
						продолжили обучение в данной организации в классах иной формы обучения<br>
						или иной направленности
					</td>
					<td>02</td>
					<%=DrawInputsWithTotals(2, 3, 11, "02.8.1", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;из них (из стр. 02):<br>
						&nbsp;&nbsp;в классах с иной формой обучения в пределах одной и той же<br>
						&nbsp;&nbsp;направленности
					</td>
					<td>03</td>
					<%=DrawInputsWithTotals(3, 3, 11, "02.8.1", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;из всех классов, кроме классов для обучающихся с ограниченными<br>
						&nbsp;&nbsp;возможностями здоровья, в классы для обучающихся с ограниченными<br>
						&nbsp;&nbsp;возможностями здоровья
					</td>
					<td>04</td>
					<%=DrawInputsWithTotals(4, 3, 6, "02.8.1", Array(3))%>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<%=DrawInputs("02.8.1", 4, 11, 11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						выбыли в другие организации для продолжения обучения по программам<br>
						начального, основного или среднего общего образования
					</td>
					<td>05</td>
					<%=DrawInputsWithTotals(5, 3, 11, "02.8.1", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;из них (из стр. 05) выбыло:<br>
						&nbsp;&nbsp;в классы иной формы обучения в пределах одной и той же направленности
					</td>
					<td>06</td>
					<%=DrawInputsWithTotals(6, 3, 11, "02.8.1", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;из всех классов, кроме классов для обучающихся с ограниченными<br>
						&nbsp;&nbsp;возможностями здоровья, в организации (классы) для обучающихся с<br>
						&nbsp;&nbsp;ограниченными возможностями здоровья
					</td>
					<td>07</td>
					<%=DrawInputsWithTotals(7, 3, 6, "02.8.1", Array(3))%>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<%=DrawInputs("02.8.1", 7, 11, 11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						на обучение по программам среднего профессионального образования -<br>
						программам подготовки квалифицированных рабочих, служащих
					</td>
					<td>08</td>
					<%=DrawInputsWithTotals(8, 3, 6, "02.8.1", Array(3))%>
					<td>x</td>
					<td>x</td>
					<%=DrawInputs("02.8.1", 8, 9, 9)%>
					<td>x</td>
					<%=DrawInputs("02.8.1", 8, 11, 11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						на обучение по программам среднего профессионального образования -<br>
						программы подготовки специалистов среднего звена
					</td>
					<td>09</td>
					<%=DrawInputsWithTotals(9, 3, 3, "02.8.1", Array(3))%>
					<td>x</td>
					<%=DrawInputs("02.8.1", 9, 5, 6)%>
					<td>x</td>
					<td>x</td>
					<%=DrawInputs("02.8.1", 9, 9, 9)%>
					<td>x</td>
					<%=DrawInputs("02.8.1", 9, 11, 11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">в связи с переходом на семейное образование и самообразование</td>
					<td>10</td>
					<%=DrawInputsWithTotals(10, 3, 11, "02.8.1", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">по болезни</td>
					<td>11</td>
					<%=DrawInputsWithTotals(11, 3, 11, "02.8.1", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						отчислено лиц, не прошедших итоговой аттестации, получивших на итоговой<br>
						аттестации неудовлетворительные результаты или освоивших часть<br>
						образовательной программы со справкой об обучении или о периоде обучения
					</td>
					<td>12</td>
					<%=DrawInputsWithTotals(12, 3, 11, "02.8.1", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">выбыло по другим причинам</td>
					<td>13</td>
					<%=DrawInputsWithTotals(13, 3, 11, "02.8.1", Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность обучающихся на начало прошлого учебного года (по состоянию<br>
						на 20 сентября)
					</td>
					<td>14</td>
					<%=DrawInputs("02.8.1", 14, 3, 3)%>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
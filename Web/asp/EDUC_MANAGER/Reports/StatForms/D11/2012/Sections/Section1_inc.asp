<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td>
			<div align="center">Раздел 1. Допрофессиональная и профессиональная подготовка обучающихся 8-11 (12) классов</div>
		</td>
	</tr>
	<tr>
		<td align="center">
			<div align="right">
				Коды по ОКЕИ: единица - 642, человек - 792
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1">
				<tr align="center">
					<td rowspan="4">
						Наименование
					</td>
					<td rowspan="4" align="center">
						Код<br/>по<br/>ОКПД<br/>ТР
					</td>
					<td rowspan="4">
						№<br/>строки
					</td>
					<td colspan="7">
						Городские поселения
					</td>
					<td colspan="7">
						Сельская местность
					</td>
				</tr>
				<tr align="center">
					<td rowspan="3">
						всего<br>(сумма<br/>граф<br/>5-10 по<br/>строкам<br/>02-148)
					</td>
					<td colspan="6">
						в том числе
					</td>
					<td rowspan="3">
						всего<br/>(сумма<br>граф<br/>12-17 по<br>строкам<br/>02-148)
					</td>
					<td colspan="6">
						в том числе
					</td>
				</tr>
				<tr align="center">
					<td rowspan="2">в учебных<br/>мастер-<br/>ских об-<br>щеобра-<br/>зователь-<br/>ных учре-<br>ждений</td>
					<td rowspan="2">в<br/>межшко-<br/>льных<br/>учебных<br/>комбина-<br/>тах</td>
					<td rowspan="2">в учебных<br/>цехах и<br/>участках<br/>предпри­я<br/>тий,<br/>организа-<br/>ций</td>
					<td rowspan="2">в школь-<br/>ных и<br />межшко-<br/>льных<br/>учебно-<br/>производ-<br/>ственных<br/>мастер-<br/>ских</td>
					<td colspan="2">на базе<br/>образовательных<br/>учреждений</td>
					<td rowspan="2">в учебных<br/>мастер-<br/>ских об-<br>щеобра-<br/>зователь-<br/>ных учре-<br>ждений</td>
					<td rowspan="2">в<br/>межшко-<br/>льных<br/>учебных<br/>комбина-<br/>тах</td>
					<td rowspan="2">в учебных<br/>цехах и<br/>участках<br/>предпри­я<br/>тий,<br/>организа-<br/>ций</td>
					<td rowspan="2">в школь-<br/>ных и<br />межшко-<br/>льных<br/>учебно-<br/>производ-<br/>ственных<br/>мастер-<br/>ских</td>
					<td colspan="2">на базе<br/>образовательных<br/>учреждений</td>
				</tr>
				<tr align="center">
					<td>начально-<br/>го профе-<br/>ссиональ-<br/>ного об-<br/>разова-<br/>ния</td>
					<td>среднего<br/>и высше-<br/>го профе-<br/>ссиональ-<br/>ного об-<br/>разова-<br/>ния</td>
					<td>начально-<br/>го профе-<br/>ссиональ-<br/>ного об-<br/>разова-<br/>ния</td>
					<td>среднего<br/>и высше-<br/>го профе-<br/>ссиональ-<br/>ного об-<br/>разова-<br/>ния</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
					<td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>
				</tr>
				<tr align="center">
					<td align="left">
						Число общеобразовательных учреждений
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						01
					</td>
					<%Call DrawInputs(1, 1, 4, 17)%>
				</tr>
				<tr align="center">
					<td align="left">
						Численность обучающихся 8-11 (12) классов,<br/>проходящих  допрофессиональную и<br/>профессиональную подготовку
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						02
					</td>
					<%Call DrawInputsWithTotals(2, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						из них:<br/>обучающихся 10-11 (12) классов  (сумма строк 04, 09, 15,<br/>18, 33, 41, 43, 45, 48, 57, 59, 62, 65, 67, 85, 88, 93, 97, 99, 103,<br/>107, 116, 137, 148)
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						03
					</td>
					<%Call DrawInputsWithTotals(3, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Профессии, общие для всех (сумма стр. 05-08)</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						04
					</td>
					<%Call DrawInputsWithTotals(4, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Лаборант химического анализа
					</td>
					<td align="center">13391</td>
					<td align="center">
						05
					</td>
					<%Call DrawInputsWithTotals(5, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Оператор электронно-вычислительных и<br/>вычислительных машин 
					</td>
					<td align="center">16199</td>
					<td align="center">
						06
					</td>
					<%Call DrawInputsWithTotals(6, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Радиомеханик по обслуживанию и ремонту<br/>радиотелевизионной аппаратуры 
					</td>
					<td center="align">17533</td>
					<td align="center">
						07
					</td>
					<%Call DrawInputsWithTotals(7, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Радиомеханик по ремонту радиоэлектронного<br/>оборудования
					</td>
					<td align="center">
						17534
					</td>
					<td align="center">
						08
					</td>
					<%Call DrawInputsWithTotals(8, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Металлообработка (сумма стр. 10-14)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						09
					</td>
					<%Call DrawInputsWithTotals(9, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Зуборезчик 
					</td>
					<td align="center">
						12273
					</td>
					<td align="center">
						10
					</td>
					<%Call DrawInputsWithTotals(10, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Оператор станков с числовым программным<br/>управлением 
					</td>
					<td align="center">
						16045
					</td>
					<td align="center">
						11
					</td>
					<%Call DrawInputsWithTotals(11, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сверловщик
					</td>
					<td align="center">
						18355
					</td>
					<td align="center">
						12
					</td>
					<%Call DrawInputsWithTotals(12, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Токарь
					</td>
					<td align="center">
						19149
					</td>
					<td align="center">
						13
					</td>
					<%Call DrawInputsWithTotals(13, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Фрезеровщик 
					</td>
					<td align="center">
						19479
					</td>
					<td align="center">
						14
					</td>
					<%Call DrawInputsWithTotals(14, 4, 17, 1, Array(4,11))%>
				</tr>


				<tr align="center">
					<td align="left">
						<b>Слесарные и слесарно-сборочные работы (сумма стр.<br/>16-17)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						15
					</td>
					<%Call DrawInputsWithTotals(15, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Жестянщик
					</td>
					<td align="center">
						11945
					</td>
					<td align="center">
						16
					</td>
					<%Call DrawInputsWithTotals(16, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Слесарь механосборочных работ
					</td>
					<td align="center">
						18466
					</td>
					<td align="center">
						17
					</td>
					<%Call DrawInputsWithTotals(17, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Строительные, монтажные и ремонтно-строительные<br/>работы (сумма стр. 19-32)</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						18
					</td>
					<%Call DrawInputsWithTotals(18, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Каменщик
					</td>
					<td align="center">12680</td>
					<td align="center">
						19
					</td>
					<%Call DrawInputsWithTotals(19, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Маляр 
					</td>
					<td align="center">13450</td>
					<td align="center">
						20
					</td>
					<%Call DrawInputsWithTotals(20, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Монтажник санитарно-технических систем и<br/>оборудования
					</td>
					<td center="align">14621</td>
					<td align="center">
						21
					</td>
					<%Call DrawInputsWithTotals(21, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Облицовщик-мозаичник
					</td>
					<td align="center">
						15214
					</td>
					<td align="center">
						22
					</td>
					<%Call DrawInputsWithTotals(22, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Облицовщик-плиточник
					</td>
					<td align="center">
						15220
					</td>
					<td align="center">
						23
					</td>
					<%Call DrawInputsWithTotals(23, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Паркетчик 
					</td>
					<td align="center">
						16445
					</td>
					<td align="center">
						24
					</td>
					<%Call DrawInputsWithTotals(24, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Печник
					</td>
					<td align="center">
						16600
					</td>
					<td align="center">
						25
					</td>
					<%Call DrawInputsWithTotals(25, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Плотник
					</td>
					<td align="center">
						16671
					</td>
					<td align="center">
						26
					</td>
					<%Call DrawInputsWithTotals(26, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Слесарь по ремонту дорожно-строительных машин и<br/>тракторов
					</td>
					<td align="center">
						18522
					</td>
					<td align="center">
						27
					</td>
					<%Call DrawInputsWithTotals(27, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Слесарь-сантехник 
					</td>
					<td align="center">
						18560
					</td>
					<td align="center">
						28
					</td>
					<%Call DrawInputsWithTotals(28, 4, 17, 1, Array(4,11))%>
				</tr>

				<tr align="center">
					<td align="left">
						Стекольщик
					</td>
					<td align="center">
						18859
					</td>
					<td align="center">
						29
					</td>
					<%Call DrawInputsWithTotals(29, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Столяр строительный
					</td>
					<td align="center">
						18880
					</td>
					<td align="center">
						30
					</td>
					<%Call DrawInputsWithTotals(30, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Штукатур
					</td>
					<td align="center">
						19727
					</td>
					<td align="center">
						31
					</td>
					<%Call DrawInputsWithTotals(31, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Электромонтажник по освещению и осветительным<br/>сетям
					</td>
					<td align="center">19806</td>
					<td align="center">
						32
					</td>
					<%Call DrawInputsWithTotals(32, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Швейное производство: (сумма стр. 34-40)</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						33
					</td>
					<%Call DrawInputsWithTotals(33, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Вышивальщица
					</td>
					<td align="center">11583</td>
					<td align="center">
						34
					</td>
					<%Call DrawInputsWithTotals(34, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Кружевница
					</td>
					<td center="align">13209</td>
					<td align="center">
						35
					</td>
					<%Call DrawInputsWithTotals(35, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Модистка головных уборов
					</td>
					<td align="center">
						14504
					</td>
					<td align="center">
						36
					</td>
					<%Call DrawInputsWithTotals(36, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Оператор швейного оборудования
					</td>
					<td align="center">
						16185
					</td>
					<td align="center">
						37
					</td>
					<%Call DrawInputsWithTotals(37, 4, 17, 1, Array(4,11))%>
				</tr>


				<tr align="center">
					<td align="left">
						Портной
					</td>
					<td align="center">
						16909
					</td>
					<td align="center">
						38
					</td>
					<%Call DrawInputsWithTotals(38, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Цветочница
					</td>
					<td align="center">
						19525
					</td>
					<td align="center">
						39
					</td>
					<%Call DrawInputsWithTotals(39, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Швея
					</td>
					<td align="center">
						19601
					</td>
					<td align="center">
						40
					</td>
					<%Call DrawInputsWithTotals(40, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Кожгалантерейное производство</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						41
					</td>
					<%Call DrawInputsWithTotals(41, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Пошивщик кожгалантерейных изделий
					</td>
					<td align="center">16927</td>
					<td align="center">
						42
					</td>
					<%Call DrawInputsWithTotals(42, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Трикотажное производство</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						43
					</td>
					<%Call DrawInputsWithTotals(43, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Вязальщица трикотажных изделий, полотна
					</td>
					<td center="align">11602</td>
					<td align="center">
						44
					</td>
					<%Call DrawInputsWithTotals(44, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Обувное производство: (сумма стр. 46-47)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						45
					</td>
					<%Call DrawInputsWithTotals(45, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сборщик обуви
					</td>
					<td align="center">
						18213
					</td>
					<td align="center">
						46
					</td>
					<%Call DrawInputsWithTotals(46, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Обувщик по ремонту обуви 
					</td>
					<td align="center">
						15398
					</td>
					<td align="center">
						47
					</td>
					<%Call DrawInputsWithTotals(47, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Деревообрабатывающее производство<br/>(сумма стр. 49-56)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						48
					</td>
					<%Call DrawInputsWithTotals(48, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Бондарь
					</td>
					<td align="center">
						11208
					</td>
					<td align="center">
						49
					</td>
					<%Call DrawInputsWithTotals(49, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Обойщик мебели
					</td>
					<td align="center">
						15252
					</td>
					<td align="center">
						50
					</td>
					<%Call DrawInputsWithTotals(50, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Отделочник изделий  из древесины 
					</td>
					<td align="center">
						16314
					</td>
					<td align="center">
						51
					</td>
					<%Call DrawInputsWithTotals(51, 4, 17, 1, Array(4,11))%>
				</tr>


				<tr align="center">
					<td align="left">
						Сборщик изделий из древесины
					</td>
					<td align="center">
						18161
					</td>
					<td align="center">
						52
					</td>
					<%Call DrawInputsWithTotals(52, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сортировщик материалов и изделий из древесины
					</td>
					<td align="center">
						18667
					</td>
					<td align="center">
						53
					</td>
					<%Call DrawInputsWithTotals(53, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сортировщик шпона и фанеры
					</td>
					<td align="center">
						18703
					</td>
					<td align="center">
						54
					</td>
					<%Call DrawInputsWithTotals(54, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Станочник деревообрабатывающих станков
					</td>
					<td align="center">18783</td>
					<td align="center">
						55
					</td>
					<%Call DrawInputsWithTotals(55, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Столяр
					</td>
					<td align="center">18874</td>
					<td align="center">
						56
					</td>
					<%Call DrawInputsWithTotals(56, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Производство часов и камней</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						57
					</td>
					<%Call DrawInputsWithTotals(57, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сборщик часов
					</td>
					<td center="align">18296</td>
					<td align="center">
						58
					</td>
					<%Call DrawInputsWithTotals(58, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Производство радиоаппаратуры и аппаратуры проводной<br/>связи (сумма стр.  60-61)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						59
					</td>
					<%Call DrawInputsWithTotals(59, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Монтажник  радиоэлектронной аппаратуры и приборов
					</td>
					<td align="center">
						14618
					</td>
					<td align="center">
						60
					</td>
					<%Call DrawInputsWithTotals(60, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Слесарь-сборщик  радиоэлектронной аппаратуры и<br/>приборов 
					</td>
					<td align="center">
						18569
					</td>
					<td align="center">
						61
					</td>
					<%Call DrawInputsWithTotals(61, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Электротехническое производство (сумма стр. 63-64)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						62
					</td>
					<%Call DrawInputsWithTotals(62, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сборщик электрических машин и аппаратов
					</td>
					<td align="center">
						18312
					</td>
					<td align="center">
						63
					</td>
					<%Call DrawInputsWithTotals(63, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сборщик электроизмерительных приборов
					</td>
					<td align="center">
						18316
					</td>
					<td align="center">
						64
					</td>
					<%Call DrawInputsWithTotals(64, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Рекламные и оформительские работы</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						65
					</td>
					<%Call DrawInputsWithTotals(65, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>

				<tr align="center">
					<td align="left">
						Исполнитель художественно-оформительских работ
					</td>
					<td align="center">
						12565
					</td>
					<td align="center">
						66
					</td>
					<%Call DrawInputsWithTotals(66, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Производство художественных изделий, наглядных<br/>пособий, игрушек и народные промыслы (сумма стр.  68-<br/>84)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						67
					</td>
					<%Call DrawInputsWithTotals(67, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Выжигальщик по дереву
					</td>
					<td align="center">
						11554
					</td>
					<td align="center">
						68
					</td>
					<%Call DrawInputsWithTotals(68, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Гончар
					</td>
					<td align="center">11693</td>
					<td align="center">
						69
					</td>
					<%Call DrawInputsWithTotals(69, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Изготовитель художественных изделий из бересты
					</td>
					<td align="center">12476</td>
					<td align="center">
						70
					</td>
					<%Call DrawInputsWithTotals(70, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Изготовитель художественных изделий из дерева 
					</td>
					<td align="center">12478</td>
					<td align="center">
						71
					</td>
					<%Call DrawInputsWithTotals(71, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Изготовитель художественных изделий из кожи
					</td>
					<td center="align">12482</td>
					<td align="center">
						72
					</td>
					<%Call DrawInputsWithTotals(72, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Изготовитель художественных изделий из лозы
					</td>
					<td align="center">
						12483
					</td>
					<td align="center">
						73
					</td>
					<%Call DrawInputsWithTotals(73, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Изготовитель художественных изделий из металла
					</td>
					<td align="center">
						12485
					</td>
					<td align="center">
						74
					</td>
					<%Call DrawInputsWithTotals(74, 4, 17, 1, Array(4,11))%>
				</tr>

				<tr align="center">
					<td align="left">
						Инкрустатор
					</td>
					<td align="center">
						12546
					</td>
					<td align="center">
						75
					</td>
					<%Call DrawInputsWithTotals(75, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Муляжист
					</td>
					<td align="center">
						14761
					</td>
					<td align="center">
						76
					</td>
					<%Call DrawInputsWithTotals(76, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Резчик по дереву и бересте
					</td>
					<td align="center">
						17938
					</td>
					<td align="center">
						77
					</td>
					<%Call DrawInputsWithTotals(77, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сборщик игрушек
					</td>
					<td align="center">18155</td>
					<td align="center">
						78
					</td>
					<%Call DrawInputsWithTotals(78, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сборщик изделий из дерева и папье-маше
					</td>
					<td align="center">18159</td>
					<td align="center">
						79
					</td>
					<%Call DrawInputsWithTotals(79, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сборщик изделий из кожи и меха
					</td>
					<td align="center">18163</td>
					<td align="center">
						80
					</td>
					<%Call DrawInputsWithTotals(80, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Сборщик изделий из пластмасс
					</td>
					<td center="align">18165</td>
					<td align="center">
						81
					</td>
					<%Call DrawInputsWithTotals(81, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Художник росписи по дереву
					</td>
					<td align="center">
						19520
					</td>
					<td align="center">
						82
					</td>
					<%Call DrawInputsWithTotals(82, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Чеканщик художественных изделий
					</td>
					<td align="center">
						19550
					</td>
					<td align="center">
						83
					</td>
					<%Call DrawInputsWithTotals(83, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Ювелир (ювелир-модельер)  
					</td>
					<td align="center">
						19959
					</td>
					<td align="center">
						84
					</td>
					<%Call DrawInputsWithTotals(84, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Автомобильный транспорт (сумма стр. 86-87)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						85
					</td>
					<%Call DrawInputsWithTotals(85, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Водитель автомобиля
					</td>
					<td align="center">
						11442
					</td>
					<td align="center">
						86
					</td>
					<%Call DrawInputsWithTotals(86, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Слесарь по ремонту автомобилей
					</td>
					<td align="center">
						18511
					</td>
					<td align="center">
						87
					</td>
					<%Call DrawInputsWithTotals(87, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Работа связи (сумма стр. 89-92)</b> 
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						88
					</td>
					<%Call DrawInputsWithTotals(88, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>


				<tr align="center">
					<td align="left">
						Оператор связи
					</td>
					<td align="center">
						16019
					</td>
					<td align="center">
						89
					</td>
					<%Call DrawInputsWithTotals(89, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Радиомонтер приемных телевизионных антенн
					</td>
					<td align="center">
						17562
					</td>
					<td align="center">
						90
					</td>
					<%Call DrawInputsWithTotals(90, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Телеграфист
					</td>
					<td align="center">
						19091
					</td>
					<td align="center">
						91
					</td>
					<%Call DrawInputsWithTotals(91, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Телефонист
					</td>
					<td align="center">19093</td>
					<td align="center">
						92
					</td>
					<%Call DrawInputsWithTotals(92, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Переплетно-брошюровочные работы<br/>(сумма стр.  94-96)</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						93
					</td>
					<%Call DrawInputsWithTotals(93, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Брошюровщик
					</td>
					<td align="center">11284</td>
					<td align="center">
						94
					</td>
					<%Call DrawInputsWithTotals(94, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Оформитель табло, виньеток и альбомов
					</td>
					<td center="align">16409</td>
					<td align="center">
						95
					</td>
					<%Call DrawInputsWithTotals(95, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Переплетчик
					</td>
					<td align="center">
						16519
					</td>
					<td align="center">
						96
					</td>
					<%Call DrawInputsWithTotals(96, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Хлебопекарное производство</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						97
					</td>
					<%Call DrawInputsWithTotals(97, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Пекарь 
					</td>
					<td align="center">
						16472
					</td>
					<td align="center">
						98
					</td>
					<%Call DrawInputsWithTotals(98, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Общественное питание (сумма стр. 100-102)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						99
					</td>
					<%Call DrawInputsWithTotals(99, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Кондитер
					</td>
					<td align="center">
						12901
					</td>
					<td align="center">
						100
					</td>
					<%Call DrawInputsWithTotals(100, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Официант
					</td>
					<td align="center">
						16399
					</td>
					<td align="center">
						101
					</td>
					<%Call DrawInputsWithTotals(101, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Повар 
					</td>
					<td align="center">
						16675
					</td>
					<td align="center">
						102
					</td>
					<%Call DrawInputsWithTotals(102, 4, 17, 1, Array(4,11))%>
				</tr>

				<tr align="center">
					<td align="left">
						<b>Торговля (сумма стр. 104-106)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						103
					</td>
					<%Call DrawInputsWithTotals(103, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Кассир торгового зала
					</td>
					<td align="center">
						12721
					</td>
					<td align="center">
						104
					</td>
					<%Call DrawInputsWithTotals(104, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Продавец непродовольственных товаров
					</td>
					<td align="center">
						17351
					</td>
					<td align="center">
						105
					</td>
					<%Call DrawInputsWithTotals(105, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Продавец продовольственных товаров
					</td>
					<td align="center">17353</td>
					<td align="center">
						106
					</td>
					<%Call DrawInputsWithTotals(106, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Сфера услуг (сумма стр. 108-115)</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						107
					</td>
					<%Call DrawInputsWithTotals(107, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Декоратор витрин
					</td>
					<td align="center">11811</td>
					<td align="center">
						108
					</td>
					<%Call DrawInputsWithTotals(108, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Киномеханик
					</td>
					<td center="align">12745</td>
					<td align="center">
						109
					</td>
					<%Call DrawInputsWithTotals(109, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Киоскер
					</td>
					<td align="center">
						12747
					</td>
					<td align="center">
						110
					</td>
					<%Call DrawInputsWithTotals(110, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Ретушер
					</td>
					<td align="center">
						18065
					</td>
					<td align="center">
						111
					</td>
					<%Call DrawInputsWithTotals(111, 4, 17, 1, Array(4,11))%>
				</tr>

				<tr align="center">
					<td align="left">
						Фотограф (служба быта) 
					</td>
					<td align="center">
						19459
					</td>
					<td align="center">
						112
					</td>
					<%Call DrawInputsWithTotals(112, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Фотолаборант
					</td>
					<td align="center">
						19467
					</td>
					<td align="center">
						113
					</td>
					<%Call DrawInputsWithTotals(113, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Часовщик по ремонту механических часов
					</td>
					<td align="center">
						19545
					</td>
					<td align="center">
						114
					</td>
					<%Call DrawInputsWithTotals(114, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Часовщик по ремонту электронных и кварцевых часов
					</td>
					<td align="center">19546</td>
					<td align="center">
						115
					</td>
					<%Call DrawInputsWithTotals(115, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Сельское хозяйство (сумма стр. 117-136)</b>
					</td>
					<td align="center">&nbsp;</td>
					<td align="center">
						116
					</td>
					<%Call DrawInputsWithTotals(116, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Виноградарь
					</td>
					<td align="center">11439</td>
					<td align="center">
						117
					</td>
					<%Call DrawInputsWithTotals(117, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Дояр
					</td>
					<td center="align">11895</td>
					<td align="center">
						118
					</td>
					<%Call DrawInputsWithTotals(118, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Кроликовод
					</td>
					<td align="center">
						13205
					</td>
					<td align="center">
						119
					</td>
					<%Call DrawInputsWithTotals(119, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Лесовод
					</td>
					<td align="center">
						13376
					</td>
					<td align="center">
						120
					</td>
					<%Call DrawInputsWithTotals(120, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Овощевод 
					</td>
					<td align="center">
						15415
					</td>
					<td align="center">
						121
					</td>
					<%Call DrawInputsWithTotals(121, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Плодоовощевод
					</td>
					<td align="center">
						16668
					</td>
					<td align="center">
						122
					</td>
					<%Call DrawInputsWithTotals(122, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Приготовитель кормов
					</td>
					<td align="center">
						17174
					</td>
					<td align="center">
						123
					</td>
					<%Call DrawInputsWithTotals(123, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Птицевод
					</td>
					<td align="center">
						17503
					</td>
					<td align="center">
						124
					</td>
					<%Call DrawInputsWithTotals(124, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Пчеловод 
					</td>
					<td align="center">
						17521
					</td>
					<td align="center">
						125
					</td>
					<%Call DrawInputsWithTotals(125, 4, 17, 1, Array(4,11))%>
				</tr>

				<tr align="center">
					<td align="left">
						Рабочий зеленого хозяйства
					</td>
					<td align="center">
						17530
					</td>
					<td align="center">
						126
					</td>
					<%Call DrawInputsWithTotals(126, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Рабочий по уходу за животными
					</td>
					<td align="center">
						17546
					</td>
					<td align="center">
						127
					</td>
					<%Call DrawInputsWithTotals(127, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Рыбовод
					</td>
					<td align="center">
						18097
					</td>
					<td align="center">
						128
					</td>
					<%Call DrawInputsWithTotals(128, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Садовник
					</td>
					<td align="center">18103</td>
					<td align="center">
						129
					</td>
					<%Call DrawInputsWithTotals(129, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Садовод
					</td>
					<td align="center">18104</td>
					<td align="center">
						130
					</td>
					<%Call DrawInputsWithTotals(130, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Свиновод
					</td>
					<td align="center">18372</td>
					<td align="center">
						131
					</td>
					<%Call DrawInputsWithTotals(131, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Слесарь по ремонту сельскохозяйственных машин и<br/>оборудования
					</td>
					<td center="align">18545</td>
					<td align="center">
						132
					</td>
					<%Call DrawInputsWithTotals(132, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Тракторист
					</td>
					<td align="center">
						19203
					</td>
					<td align="center">
						133
					</td>
					<%Call DrawInputsWithTotals(133, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Цветовод
					</td>
					<td align="center">
						19524
					</td>
					<td align="center">
						134
					</td>
					<%Call DrawInputsWithTotals(134, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Чаевод 
					</td>
					<td align="center">
						19544
					</td>
					<td align="center">
						135
					</td>
					<%Call DrawInputsWithTotals(135, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Эфиромасличник 
					</td>
					<td align="center">
						19957
					</td>
					<td align="center">
						136
					</td>
					<%Call DrawInputsWithTotals(136, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Должности служащих (сумма стр. 138-147)</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						137
					</td>
					<%Call DrawInputsWithTotals(137, 4, 17, 1, Array(4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="center">
					<td align="left">
						Агент (по видам деятельности) 
					</td>
					<td align="center">
						20001
					</td>
					<td align="center">
						138
					</td>
					<%Call DrawInputsWithTotals(138, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Бухгалтер 
					</td>
					<td align="center">
						20336
					</td>
					<td align="center">
						139
					</td>
					<%Call DrawInputsWithTotals(139, 4, 17, 1, Array(4,11))%>
				</tr>

				<tr align="center">
					<td align="left">
						Машинистка
					</td>
					<td align="center">
						24031
					</td>
					<td align="center">
						140
					</td>
					<%Call DrawInputsWithTotals(140, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Машинистка, работающая с иностранным текстом
					</td>
					<td align="center">
						24033
					</td>
					<td align="center">
						141
					</td>
					<%Call DrawInputsWithTotals(141, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Социальный работник
					</td>
					<td align="center">
						26527
					</td>
					<td align="center">
						142
					</td>
					<%Call DrawInputsWithTotals(142, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Стенографистка
					</td>
					<td align="center">26743</td>
					<td align="center">
						143
					</td>
					<%Call DrawInputsWithTotals(143, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Счетовод
					</td>
					<td align="center">26804</td>
					<td align="center">
						144
					</td>
					<%Call DrawInputsWithTotals(144, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Табельщик
					</td>
					<td align="center">26904</td>
					<td align="center">
						145
					</td>
					<%Call DrawInputsWithTotals(145, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Учетчик
					</td>
					<td center="align">27238</td>
					<td align="center">
						146
					</td>
					<%Call DrawInputsWithTotals(146, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						Чертежник
					</td>
					<td align="center">
						27530
					</td>
					<td align="center">
						147
					</td>
					<%Call DrawInputsWithTotals(147, 4, 17, 1, Array(4,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						<b>Прочие</b>
					</td>
					<td align="center">
						&nbsp;
					</td>
					<td align="center">
						148
					</td>
					<%Call DrawInputsWithTotals(148, 4, 17, 1, Array(4,11))%>
				</tr>
			</table>
			<!-- End Of таб.1 -->
		</td>
	</tr>
</table>

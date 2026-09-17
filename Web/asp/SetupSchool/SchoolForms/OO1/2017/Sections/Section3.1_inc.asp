<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>Раздел 3. Сведения о персонале организации</b></div>
			<div align="center"><b>3.1. Распределение численности персонала по уровню образования, занятости и полу </b></div>
			<div align="center"><i>(без внешних совместителей и работающих по договорам гражданско-правового характера)</i></div>

			<br>

			<div align="right">Код по ОКЕИ: человек – 792 (в целых); единица –642 (с одним десятичным знаком)</div>

			<table class="ThinTable" align="left" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="middle" valign="center">
					<td rowspan="4">Наименование показателей</td>
					<td rowspan="4">
						№<br>
						стро-<br>
						ки</td>
					<td rowspan="4">Всего, человек</td>
					<td colspan="9">Из них (из гр. 3) имеют образование:</td>
					<td colspan="3">Из гр. 3</td>
					<td rowspan="4">
						Численность<br>
						работников в<br>
						пересчете на<br>
						полную<br>
						занятость,<br>
						единиц
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td rowspan="3">Высшее</td>
					<td rowspan="3">
						из них<br>
						(гр. 4)<br>
						педаго-<br>
						гическое
					</td>
					<td colspan="4">Из гр. 4 имеют</td>
					<td rowspan="3">
						среднее<br>
						профессио-<br>
						нальное<br>
						образование<br>
						по<br>
						программам<br>
						подготовки<br>
						специалистов<br>
						среднего<br>
						звена
					</td>
					<td rowspan="3">
						из них<br>
						(гр. 10)<br>
						педаго-<br>
						гическое
					</td>
					<td rowspan="3">
						среднее<br>
						професси-<br>
						ональное<br>
						образование<br>
						по<br>
						программам<br>
						подготовки<br>
						квалифици-<br>
						рованных<br>
						рабочих<br>
						служащих
					</td>
					<td colspan="2">
						имеют<br>
						квалификационные<br>
						категории
					</td>
					<td rowspan="3">Женщины</td>
				</tr>
				<tr align="middle" valign="center">
					<td colspan="2">ученую степень</td>
					<td colspan="2">ученое звание</td>
					<td rowspan="2">высшую</td>
					<td rowspan="2">первую</td>
				</tr>
				<tr align="middle" valign="center">
					<td>доктора<br>наук</td>
					<td>кандидата<br>наук</td>
					<td>профессора</td>
					<td>доцента</td>
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
					<td>12</td>
					<td>13</td>
					<td>14</td>
					<td>15</td>
					<td>16</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность работников - всего<br>
						(сумма строк 02, 06, 40, 41)
					</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1, 3, 15, "03.1", Array(3,4,5,6,7,8,9,10,11,12,13,14,15))%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;руководящие работники - всего</td>
					<td>02</td>
					<%=DrawInputs("03.1", 2, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;директор
					</td>
					<td>03</td>
					<%=DrawInputs("03.1", 3, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;заместители директора</td>
					<td>04</td>
					<%=DrawInputs("03.1", 4, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;руководитель филиала</td>
					<td>05</td>
					<%=DrawInputs("03.1", 5, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;педагогические работники - всего<br>
						(сумма строк 07, 28, 29, 33 - 39)
					</td>
					<td>06</td>
					<%=DrawInputsWithTotals(6, 3, 16, "03.1", Array(3,4,5,6,7,8,9,10,11,12,13,14,15))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;учителя - всего (сумма строк 08 - 18,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;22 - 27)
					</td>
					<td>07</td>
					<%=DrawInputsWithTotals(7, 3, 16, "03.1", Array(3,4,5,6,7,8,9,10,11,12,13,14,15))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;учителя, осуществляющие<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;деятельность по реализации<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;программ начального общего<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;образования</td>
					<td>08</td>
					<%=DrawInputs("03.1", 8, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;русского языка и литературы</td>
					<td>09</td>
					<%=DrawInputs("03.1", 9, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;языка народов России и<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;литературы
					</td>
					<td>10</td>
					<%=DrawInputs("03.1", 10, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;истории, экономики, права,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обществознания
					</td>
					<td>11</td>
					<%=DrawInputs("03.1", 11, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;информатики и ИКТ</td>
					<td>12</td>
					<%=DrawInputs("03.1", 12, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;физики</td>
					<td>13</td>
					<%=DrawInputs("03.1", 13, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;математики</td>
					<td>14</td>
					<%=DrawInputs("03.1", 14, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;химии</td>
					<td>15</td>
					<%=DrawInputs("03.1", 15, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;географии</td>
					<td>16</td>
					<%=DrawInputs("03.1", 16, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;биологии</td>
					<td>17</td>
					<%=DrawInputs("03.1", 17, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;иностранных языков</td>
					<td>18</td>
					<%=DrawInputs("03.1", 18, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;английского языка
					</td>
					<td>19</td>
					<%=DrawInputs("03.1", 19, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;немецкого языка</td>
					<td>20</td>
					<%=DrawInputs("03.1", 20, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;французского языка</td>
					<td>21</td>
					<%=DrawInputs("03.1", 21, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;физической культуры</td>
					<td>22</td>
					<%=DrawInputs("03.1", 22, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;трудового обучения (технологии)</td>
					<td>23</td>
					<%=DrawInputs("03.1", 23, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;музыки и пения</td>
					<td>24</td>
					<%=DrawInputs("03.1", 24, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;изобразительного искусства,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;черчения
					</td>
					<td>25</td>
					<%=DrawInputs("03.1", 25, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;основ безопасности<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;жизнедеятельности
					</td>
					<td>26</td>
					<%=DrawInputs("03.1", 26, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;прочих предметов</td>
					<td>27</td>
					<%=DrawInputs("03.1", 27, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя-логопеды</td>
					<td>28</td>
					<%=DrawInputs("03.1", 28, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя-дефектологи</td>
					<td>29</td>
					<%=DrawInputs("03.1", 29, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;олигофренопедагог
					</td>
					<td>30</td>
					<%=DrawInputs("03.1", 30, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;тифлопедагог</td>
					<td>31</td>
					<%=DrawInputs("03.1", 31, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;сурдопедагог</td>
					<td>32</td>
					<%=DrawInputs("03.1", 32, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;социальные педагоги</td>
					<td>33</td>
					<%=DrawInputs("03.1", 33, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;педагоги дополнительного<br>
						&nbsp;&nbsp;&nbsp;&nbsp;образования
					</td>
					<td>34</td>
					<%=DrawInputs("03.1", 34, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги-психологи</td>
					<td>35</td>
					<%=DrawInputs("03.1", 35, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;воспитатели</td>
					<td>36</td>
					<%=DrawInputs("03.1", 36, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного<br>
						&nbsp;&nbsp;&nbsp;&nbsp;обучения
					</td>
					<td>37</td>
					<%=DrawInputs("03.1", 37, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;тьюторы</td>
					<td>38</td>
					<%=DrawInputs("03.1", 38, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;другие</td>
					<td>39</td>
					<%=DrawInputs("03.1", 39, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;учебно-вспомогательный персонал</td>
					<td>40</td>
					<%=DrawInputs("03.1", 40, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;иной персонал</td>
					<td>41</td>
					<%=DrawInputs("03.1", 41, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;ассистент (помощник)
					</td>
					<td>42</td>
					<%=DrawInputs("03.1", 42, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;сурдопереводчик</td>
					<td>43</td>
					<%=DrawInputs("03.1", 43, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;тифлосурдопереводчик</td>
					<td>44</td>
					<%=DrawInputs("03.1", 44, 3, 16)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности педагогических<br>
						работников (стр. 06):<br>
						&nbsp;&nbsp;&nbsp;&nbsp;персонал, работающий в<br>
						&nbsp;&nbsp;&nbsp;&nbsp;подразделениях (группах)<br>
						&nbsp;&nbsp;&nbsp;&nbsp;дошкольного образования
					</td>
					<td>45</td>
					<%=DrawInputs("03.1", 45, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них воспитатели</td>
					<td>46</td>
					<%=DrawInputs("03.1", 46, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;персонал, работающий в классах<br>
						&nbsp;&nbsp;&nbsp;&nbsp;очно-заочного и заочного обучения,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;учебно-консультационных пунктах
					</td>
					<td>47</td>
					<%=DrawInputs("03.1", 47, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них учителя</td>
					<td>48</td>
					<%=DrawInputs("03.1", 48, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;персонал, работающий в отдельных<br>
						&nbsp;&nbsp;&nbsp;&nbsp;классах для обучающихся с<br>
						&nbsp;&nbsp;&nbsp;&nbsp;ограниченными возможностями<br>
						&nbsp;&nbsp;&nbsp;&nbsp;здоровья
					</td>
					<td>49</td>
					<%=DrawInputs("03.1", 49, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них учителя - всего</td>
					<td>50</td>
					<%=DrawInputs("03.1", 50, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них учителя, осуществляющие<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;деятельность по реализации<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;программ начального общего<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;образования
					</td>
					<td>51</td>
					<%=DrawInputs("03.1", 51, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;персонал, получающий надбавки за<br>
						&nbsp;&nbsp;&nbsp;&nbsp;работу с лицами с ограниченными<br>
						&nbsp;&nbsp;&nbsp;&nbsp;возможностями здоровья,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;находящимися на совместном<br>
						&nbsp;&nbsp;&nbsp;&nbsp;обучении</td>
					<td>52</td>
					<%=DrawInputs("03.1", 52, 3, 15)%>
					<td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из общей численности учителей-<br>
						дефектологов (стр. 29 гр. 3) - учителя,<br>
						имеющие специальное<br>
						дефектологическое образование
					</td>
					<td>53</td>
					<%=DrawInputs("03.1", 53, 3, 4)%>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
					<td>X</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<br>
			<table>
				<tr>
					<td>
						<div align="left"><b>Справка 2.</b></div>

						<table class="ThinTable" align="left" border="0" cellpadding="3" cellspacing="0" width="100%">
							<tr align="middle" valign="center">
								<td align="left">
									Численность руководителей (из стр. 02), прошедших в течение последних трех лет повышение<br>
									квалификации и (или) профессиональную переподготовку (чел)
								</td>
								<td>(54)</td>
								<td><%=IT("T03.15403", 5, 5)%></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">&nbsp;&nbsp;из них директор (чел)</td>
								<td>(55)</td>
								<td><%=IT("T03.15503", 5, 5)%></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">
									Численность педагогических работников (из стр. 06), прошедших в течение последних трех лет<br>
									повышение квалификации и (или) профессиональную переподготовку (чел)
								</td>
								<td>(56)</td>
								<td><%=IT("T03.15603", 5, 5)%></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">&nbsp;&nbsp;из них учителя (чел)</td>
								<td>(57)</td>
								<td><%=IT("T03.15703", 5, 5)%></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">Кроме того (кроме стр. 01), численность медицинских работников (сумма строк 60, 61) (чел)</td>
								<td>(58)</td>
								<td><%=ITDisabled("T03.15803", 5, 5, True)%></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">&nbsp;&nbsp;из них женщин (чел)</td>
								<td>(59)</td>
								<td><%=IT("T03.15903", 5, 5)%></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">в том числе:</td>
								<td></td>
								<td></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">&nbsp;&nbsp;врачи всех специальностей (чел)</td>
								<td>(60)</td>
								<td><%=IT("T03.16003", 5, 5)%></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">&nbsp;&nbsp;медицинские сестры (чел)</td>
								<td>(61)</td>
								<td><%=IT("T03.16103", 5, 5)%></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">
									Из строки 07 гр. 3 численность учителей, использующих в учебном процессе персональные<br>
									компьютеры (чел)
								</td>
								<td>(62)</td>
								<td><%=IT("T03.16203", 5, 5)%></td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
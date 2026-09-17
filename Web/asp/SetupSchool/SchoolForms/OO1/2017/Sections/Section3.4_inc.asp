<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>3.4. Движение работников</b></div>
			<br>
			<div align="right">Код по ОКЕИ: единица –642 (допускается с двумя десятичными знаками); человек – 792 (в целых)</div>

			<table class="ThinTable" align="left" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="middle" valign="center">
					<td rowspan="3">Наименование показателей</td>
					<td rowspan="3">№<br>строки</td>
					<td rowspan="3">
						Число<br>
						ставок по<br>
						штату,<br>
						единиц
					</td>
					<td colspan="2">
						Фактически занято,<br>
						единиц
					</td>
					<td rowspan="3">
						Численность<br>
						работников на<br>
						начало<br>
						предыдущего<br>
						учебного года<br>
						(без внешних<br>
						совместителей и<br>
						работавших<br>
						по договорам<br>
						гражданско-<br>
						правового<br>
						характера),<br>
						человек
					</td>
					<td colspan="3">Принято работников, человек</td>
					<td colspan="2">
						Выбыло работников,<br>
						человек
					</td>
					<td rowspan="3">
						Численность<br>
						работников на начало<br>
						отчетного учебного<br>
						года<br>
						(без совместителей и<br>
						работающих<br>
						по договорам<br>
						гражданско-<br>
						правового характера),<br>
						человек
					</td>
					<td rowspan="3">
						Число<br>
						вакантных<br>
						должностей,<br>
						единиц<br>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td rowspan="2">всего</td>
					<td rowspan="2">
						работниками<br>
						списочного<br>
						состава
					</td>
					<td rowspan="2">всего</td>
					<td colspan="2">из них выпускники:</td>
					<td rowspan="2">всего</td>
					<td rowspan="2">
						из них по<br>
						собственному<br>
						желанию
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>
						со средним<br>
						профессиональным<br>
						образованием по<br>
						программам<br>
						подготовки<br>
						специалистов среднего<br>
						звена
					</td>
					<td>
						с высшим<br>
						образованием
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
					<td>12</td>
					<td>13</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность работников - всего<br>
						(сумма строк 02, 06, 40, 41)
					</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1, 3, 13, "03.4", Array(3,4,5,6,7,8,9,10,11,12,13))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;руководящие работники - всего</td>
					<td>02</td>
					<%=DrawInputs("03.4", 2, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;директор
					</td>
					<td>03</td>
					<%=DrawInputs("03.4", 3, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;заместители директора</td>
					<td>04</td>
					<%=DrawInputs("03.4", 4, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;руководитель филиала</td>
					<td>05</td>
					<%=DrawInputs("03.4", 5, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;педагогические работники - всего<br>
						(сумма строк 07, 28, 29, 33 - 39)
					</td>
					<td>06</td>
					<%=DrawInputsWithTotals(6, 3, 13, "03.4", Array(3,4,5,6,7,8,9,10,11,12,13))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;учителя - всего (сумма строк 08 - 18,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;22 - 27)
					</td>
					<td>07</td>
					<%=DrawInputsWithTotals(7, 3, 13, "03.4", Array(3,4,5,6,7,8,9,10,11,12,13))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;учителя, осуществляющие<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;деятельность по реализации<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;программ начального общего<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;образования</td>
					<td>08</td>
					<%=DrawInputs("03.4", 8, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;русского языка и литературы</td>
					<td>09</td>
					<%=DrawInputs("03.4", 9, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;языка народов России и<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;литературы
					</td>
					<td>10</td>
					<%=DrawInputs("03.4", 10, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;истории, экономики, права,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обществознания
					</td>
					<td>11</td>
					<%=DrawInputs("03.4", 11, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;информатики и ИКТ</td>
					<td>12</td>
					<%=DrawInputs("03.4", 12, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;физики</td>
					<td>13</td>
					<%=DrawInputs("03.4", 13, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;математики</td>
					<td>14</td>
					<%=DrawInputs("03.4", 14, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;химии</td>
					<td>15</td>
					<%=DrawInputs("03.4", 15, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;географии</td>
					<td>16</td>
					<%=DrawInputs("03.4", 16, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;биологии</td>
					<td>17</td>
					<%=DrawInputs("03.4", 17, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;иностранных языков</td>
					<td>18</td>
					<%=DrawInputs("03.4", 18, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;английского языка
					</td>
					<td>19</td>
					<%=DrawInputs("03.4", 19, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;немецкого языка</td>
					<td>20</td>
					<%=DrawInputs("03.4", 20, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;французского языка</td>
					<td>21</td>
					<%=DrawInputs("03.4", 21, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;физической культуры</td>
					<td>22</td>
					<%=DrawInputs("03.4", 22, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;трудового обучения (технологии)</td>
					<td>23</td>
					<%=DrawInputs("03.4", 23, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;музыки и пения</td>
					<td>24</td>
					<%=DrawInputs("03.4", 24, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;изобразительного искусства,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;черчения
					</td>
					<td>25</td>
					<%=DrawInputs("03.4", 25, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;основ безопасности<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;жизнедеятельности
					</td>
					<td>26</td>
					<%=DrawInputs("03.4", 26, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;прочих предметов</td>
					<td>27</td>
					<%=DrawInputs("03.4", 27, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя-логопеды</td>
					<td>28</td>
					<%=DrawInputs("03.4", 28, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя-дефектологи</td>
					<td>29</td>
					<%=DrawInputs("03.4", 29, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;олигофренопедагог
					</td>
					<td>30</td>
					<%=DrawInputs("03.4", 30, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;тифлопедагог</td>
					<td>31</td>
					<%=DrawInputs("03.4", 31, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;сурдопедагог</td>
					<td>32</td>
					<%=DrawInputs("03.4", 32, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;социальные педагоги</td>
					<td>33</td>
					<%=DrawInputs("03.4", 33, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;педагоги дополнительного<br>
						&nbsp;&nbsp;&nbsp;&nbsp;образования
					</td>
					<td>34</td>
					<%=DrawInputs("03.4", 34, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги-психологи</td>
					<td>35</td>
					<%=DrawInputs("03.4", 35, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;воспитатели</td>
					<td>36</td>
					<%=DrawInputs("03.4", 36, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного<br>
						&nbsp;&nbsp;&nbsp;&nbsp;обучения
					</td>
					<td>37</td>
					<%=DrawInputs("03.4", 37, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;тьюторы</td>
					<td>38</td>
					<%=DrawInputs("03.4", 38, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;другие</td>
					<td>39</td>
					<%=DrawInputs("03.4", 39, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;учебно-вспомогательный персонал</td>
					<td>40</td>
					<%=DrawInputs("03.4", 40, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;иной персонал</td>
					<td>41</td>
					<%=DrawInputs("03.4", 41, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;ассистент (помощник)
					</td>
					<td>42</td>
					<%=DrawInputs("03.4", 42, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;сурдопереводчик</td>
					<td>43</td>
					<%=DrawInputs("03.4", 43, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;тифлосурдопереводчик</td>
					<td>44</td>
					<%=DrawInputs("03.4", 44, 3, 13)%>
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
					<%=DrawInputs("03.4", 45, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них воспитатели</td>
					<td>46</td>
					<%=DrawInputs("03.4", 46, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;персонал, работающий в классах<br>
						&nbsp;&nbsp;&nbsp;&nbsp;очно-заочного и заочного обучения,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;учебно-консультационных пунктах
					</td>
					<td>47</td>
					<%=DrawInputs("03.4", 47, 3, 13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них учителя</td>
					<td>48</td>
					<%=DrawInputs("03.4", 48, 3, 13)%>
				</tr>
			</table>

			<div align="left">Данные гр. 12 по стр. 01–48 равны данным гр.3 подраздела 3.1 по соответствующим строкам 01-48.</div>
		</td>
	</tr>
</table>
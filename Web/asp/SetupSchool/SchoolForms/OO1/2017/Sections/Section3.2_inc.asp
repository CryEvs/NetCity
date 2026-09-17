<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>3.2. Распределение персонала по стажу работы</b></div>
			<div align="center"><i>(без внешних совместителей и работавших по договорам гражданско-правового характера)</i></div>

			<div align="right">Код по ОКЕИ: человек – 792</div>

			<table class="ThinTable" align="left" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование показателей</td>
					<td rowspan="2">№<br>строки</td>
					<td rowspan="2">
						Всего<br>
						(сумма граф<br>
						4 - 9)
					</td>
					<td colspan="6">Из гр. 3 - имеют общий стаж работы, лет</td>
					<td rowspan="2">
						Из гр. 3 имеют стаж<br>
						педагогической работы -<br>
						всего (сумма граф 11 - 16)
					</td>
					<td colspan="6">Из гр. 10 - имеют педагогический стаж работы, лет</td>
					<td rowspan="2">
						Не имеют стажа<br>
						педагогической работы
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>до 3</td>
					<td>от 3 до 5</td>
					<td>от 5 до 10</td>
					<td>от 10 до 15</td>
					<td>от 15 до 20</td>
					<td>20 и более</td>
					<td>до 3</td>
					<td>от 3 до 5</td>
					<td>от 5 до 10</td>
					<td>от 10 до 15</td>
					<td>от 15 до 20</td>
					<td>20 и более</td>
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
					<td>17</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность работников - всего<br>
						(сумма строк 02, 06, 40, 41)
					</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1, 3, 17, "03.2", Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;руководящие работники - всего</td>
					<td>02</td>
					<%=DrawInputsWithTotals(2, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;директор
					</td>
					<td>03</td>
					<%=DrawInputsWithTotals(3, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;заместители директора</td>
					<td>04</td>
					<%=DrawInputsWithTotals(4, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;руководитель филиала</td>
					<td>05</td>
					<%=DrawInputsWithTotals(5, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;педагогические работники - всего<br>
						(сумма строк 07, 28, 29, 33 - 39)
					</td>
					<td>06</td>
					<%=DrawInputsWithTotals(6, 3, 17, "03.2", Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;учителя - всего (сумма строк 08 - 18,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;22 - 27)
					</td>
					<td>07</td>
					<%=DrawInputsWithTotals(7, 3, 17, "03.2", Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;учителя, осуществляющие<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;деятельность по реализации<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;программ начального общего<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;образования</td>
					<td>08</td>
					<%=DrawInputsWithTotals(8, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;русского языка и литературы</td>
					<td>09</td>
					<%=DrawInputsWithTotals(9, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;языка народов России и<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;литературы
					</td>
					<td>10</td>
					<%=DrawInputsWithTotals(10, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;истории, экономики, права,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обществознания
					</td>
					<td>11</td>
					<%=DrawInputsWithTotals(11, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;информатики и ИКТ</td>
					<td>12</td>
					<%=DrawInputsWithTotals(12, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;физики</td>
					<td>13</td>
					<%=DrawInputsWithTotals(13, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;математики</td>
					<td>14</td>
					<%=DrawInputsWithTotals(14, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;химии</td>
					<td>15</td>
					<%=DrawInputsWithTotals(15, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;географии</td>
					<td>16</td>
					<%=DrawInputsWithTotals(16, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;биологии</td>
					<td>17</td>
					<%=DrawInputsWithTotals(17, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;иностранных языков</td>
					<td>18</td>
					<%=DrawInputsWithTotals(18, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;английского языка
					</td>
					<td>19</td>
					<%=DrawInputsWithTotals(19, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;немецкого языка</td>
					<td>20</td>
					<%=DrawInputsWithTotals(20, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;французского языка</td>
					<td>21</td>
					<%=DrawInputsWithTotals(21, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;физической культуры</td>
					<td>22</td>
					<%=DrawInputsWithTotals(22, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;трудового обучения (технологии)</td>
					<td>23</td>
					<%=DrawInputsWithTotals(23, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;музыки и пения</td>
					<td>24</td>
					<%=DrawInputsWithTotals(24, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;изобразительного искусства,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;черчения
					</td>
					<td>25</td>
					<%=DrawInputsWithTotals(25, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;основ безопасности<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;жизнедеятельности
					</td>
					<td>26</td>
					<%=DrawInputsWithTotals(26, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;прочих предметов</td>
					<td>27</td>
					<%=DrawInputsWithTotals(27, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя-логопеды</td>
					<td>28</td>
					<%=DrawInputsWithTotals(28, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;учителя-дефектологи</td>
					<td>29</td>
					<%=DrawInputsWithTotals(29, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;олигофренопедагог
					</td>
					<td>30</td>
					<%=DrawInputsWithTotals(30, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;тифлопедагог</td>
					<td>31</td>
					<%=DrawInputsWithTotals(31, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;сурдопедагог</td>
					<td>32</td>
					<%=DrawInputsWithTotals(32, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;социальные педагоги</td>
					<td>33</td>
					<%=DrawInputsWithTotals(33, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;педагоги дополнительного<br>
						&nbsp;&nbsp;&nbsp;&nbsp;образования
					</td>
					<td>34</td>
					<%=DrawInputsWithTotals(34, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;педагоги-психологи</td>
					<td>35</td>
					<%=DrawInputsWithTotals(35, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;воспитатели</td>
					<td>36</td>
					<%=DrawInputsWithTotals(36, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного<br>
						&nbsp;&nbsp;&nbsp;&nbsp;обучения
					</td>
					<td>37</td>
					<%=DrawInputsWithTotals(37, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;тьюторы</td>
					<td>38</td>
					<%=DrawInputsWithTotals(38, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;другие</td>
					<td>39</td>
					<%=DrawInputsWithTotals(39, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;учебно-вспомогательный персонал</td>
					<td>40</td>
					<%=DrawInputsWithTotals(40, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;иной персонал</td>
					<td>41</td>
					<%=DrawInputsWithTotals(41, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;ассистент (помощник)
					</td>
					<td>42</td>
					<%=DrawInputsWithTotals(42, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;сурдопереводчик</td>
					<td>43</td>
					<%=DrawInputsWithTotals(43, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;тифлосурдопереводчик</td>
					<td>44</td>
					<%=DrawInputsWithTotals(44, 3, 17, "03.2", Array(3,10))%>
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
					<%=DrawInputsWithTotals(45, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них воспитатели</td>
					<td>46</td>
					<%=DrawInputsWithTotals(46, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;персонал, работающий в классах<br>
						&nbsp;&nbsp;&nbsp;&nbsp;очно-заочного и заочного обучения,<br>
						&nbsp;&nbsp;&nbsp;&nbsp;учебно-консультационных пунктах
					</td>
					<td>47</td>
					<%=DrawInputsWithTotals(47, 3, 17, "03.2", Array(3,10))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них учителя</td>
					<td>48</td>
					<%=DrawInputsWithTotals(48, 3, 17, "03.2", Array(3,10))%>
				</tr>
			</table>

			<div align="left">Данные гр. 3 по стр. 01–48 равны данным гр.3 подраздела 3.1 по соответствующим строкам 01-48.</div>

		</td>
	</tr>
</table>
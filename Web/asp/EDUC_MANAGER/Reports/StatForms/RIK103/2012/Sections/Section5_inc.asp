<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center">
		<td>
			<b>Раздел 5. Защита прав детей в возрасте до 18 лет и лиц из числа детей,<br/>
					оставшихся без попечения родителей</b><br/>
		</td>
	</tr>
	<tr>
		<td align="center">
			<div align="right">Код по ОКЕИ: единица - 642, человек-792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td>
						Наименование
					</td>
					<td>
						№<br/>
						строки
					</td>
					<td>
						Всего за <br/>
						отчетный год
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, родители которых лишены родительских прав
					</td>
					<td>01</td>
					<%Call DrawInputs(5,1,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 01) численность детей, у которых лишены родительских прав<br/>
						&emsp;оба родителя или единственный родитель
					</td>
					<td>02</td>
					<%Call DrawInputs(5,2,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, родители которых ограничены в родительских правах
					</td>
					<td>03</td>
					<%Call DrawInputs(5,3,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 03) численность детей, у которых ограничены в родительских<br/>
						&emsp;правах оба родителя или единственный родитель
					</td>
					<td>04</td>
					<%Call DrawInputs(5,4,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, отобранных у родителей при непосредственной угрозе жизни или <br/>
						здоровью детей
					</td>
					<td>05</td>
					<%Call DrawInputs(5,5,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность родителей, лишенных родительских прав
					</td>
					<td>06</td>
					<%Call DrawInputs(5,6,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 06) численность родителей, лишенных родительских прав в связи<br/>
						&emsp;с жестоким обращением с детьми
					</td>
					<td>07</td>
					<%Call DrawInputs(5,7,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность родителей, ограниченных в родительских правах
					</td>
					<td>08</td>
					<%Call DrawInputs(5,8,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 08) численность родителей, ограниченных в родительских
						&emsp;правах вследствие их поведения
					</td>
					<td>09</td>
					<%Call DrawInputs(5,9,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность родителей, восстановленных в родительских правах
					</td>
					<td>10</td>
					<%Call DrawInputs(5,10,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность родителей, в отношении которых отменено ограничение родительских прав
					</td>
					<td>11</td>
					<%Call DrawInputs(5,11,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность приемных родителей, с которыми досрочно расторгнуты договоры по <br/>
						инициативе органа опеки и попечительства по причине возникновения в приемной семье <br/>
						неблагоприятных условий для содержания, воспитания и образования ребенка (детей)
					</td>
					<td>12</td>
					<%Call DrawInputs(5,12,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, в защиту которых предъявлен иск в суд или предоставлены в суд <br/>
						заключения (сумма строк 14-19)
					</td>
					<td>13</td>
					<%=DrawInputsWithTotals(13, 3, 3, 5, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;в том числе (из стр. 13):<br/>
						&emsp;&emsp;о месте жительства детей
					</td>
					<td>14</td>
					<%Call DrawInputs(5,14,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;об участии в воспитании детей отдельно проживающих родителей
					</td>
					<td>15</td>
					<%Call DrawInputs(5,15,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;об общении с детьми бабушек, дедушек и других родственников
					</td>
					<td>16</td>
					<%Call DrawInputs(5,16,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;о защите прав детей на жилое помещение
					</td>
					<td>17</td>
					<%Call DrawInputs(5,17,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;о защите детей от жестокого обращения
					</td>
					<td>18</td>
					<%Call DrawInputs(5,18,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;о защите других личных и имущественных прав детей
					</td>
					<td>19</td>
					<%Call DrawInputs(5,19,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставшихся без попечения родителей (из стр. 13)
					</td>
					<td>20</td>
					<%Call DrawInputs(5,20,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число поступивших сообщений о нарушении прав детей, ед
					</td>
					<td>21</td>
					<%Call DrawInputs(5,21,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 21):<br/>
						&emsp;&emsp;о выявлении детей, оставшихся без попечения родителей
					</td>
					<td>22</td>
					<%Call DrawInputs(5,22,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;о выявлении детей, находящихся в обстановке, представляющей угрозу их<br/>
						&emsp;&emsp;жизни, здоровью или препятствующей их воспитанию
					</td>
					<td>23</td>
					<%Call DrawInputs(5,23,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;из образовательных учреждений
					</td>
					<td>24</td>
					<%Call DrawInputs(5,24,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;из лечебно-профилактических учреждений
					</td>
					<td>25</td>
					<%Call DrawInputs(5,25,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;из учреждений социальной защиты населения
					</td>
					<td>26</td>
					<%Call DrawInputs(5,26,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;из органов внутренних дел
					</td>
					<td>27</td>
					<%Call DrawInputs(5,27,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;от граждан
					</td>
					<td>28</td>
					<%Call DrawInputs(5,28,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;из них (из стр. 28) от детей
					</td>
					<td>29</td>
					<%Call DrawInputs(5,29,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число выявленных случаев жестокого обращения с детьми, ед
					</td>
					<td>30</td>
					<%Call DrawInputs(5,30,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность усыновителей, опекунов, попечителей, приемных или патронатных <br/>
						родителей, привлеченных к уголовной ответственности за совершение преступлений в <br/>
						отношении детей, принятых ими на воспитание в семью
					</td>
					<td>31</td>
					<%Call DrawInputs(5,31,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 31) привлеченных к уголовной ответственности за совершение<br/>
						&emsp;преступлений, повлекших гибель либо причинение вреда здоровью детей
					</td>
					<td>32</td>
					<%Call DrawInputs(5,32,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, здоровью которых был причинен вред по вине усыновителей, <br/>
						опекунов, попечителей, приемных или патронатных родителей
					</td>
					<td>33</td>
					<%Call DrawInputs(5,33,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставшихся без попечения родителей, и лиц из их числа, включая лиц в <br/>
						возрасте от 23 лет и старше, состоявших на учете на получение жилого помещения (всего <br/>
						на начало отчетного года)
					</td>
					<td>34</td>
					<%Call DrawInputs(5,34,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 34) детей, оставшихся без попечения родителей
					</td>
					<td>35</td>
					<%Call DrawInputs(5,35,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;в том числе (из стр. 35) в возрасте:<br/>
						&emsp;&emsp;&emsp;15 лет
					</td>
					<td>36</td>
					<%Call DrawInputs(5,36,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;16 лет
					</td>
					<td>37</td>
					<%Call DrawInputs(5,37,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;17 лет
					</td>
					<td>38</td>
					<%Call DrawInputs(5,38,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;лиц из числа детей, оставшихся без попечения родителей, в возрасте
						&emsp;от 18 до 23 лет
					</td>
					<td>39</td>
					<%Call DrawInputs(5,39,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;лиц в возрасте от 23 лет и старше
					</td>
					<td>40</td>
					<%Call DrawInputs(5,40,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставшихся без попечения родителей, и лиц из их числа, состоящих на <br/>
						учете на получение жилого помещения, включая лиц в возрасте от 23 лет и старше (всего <br/>
						на конец отчетного года)
					</td>
					<td>41</td>
					<%Call DrawInputs(5,41,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 41) детей, оставшихся без попечения родителей
					</td>
					<td>42</td>
					<%Call DrawInputs(5,42,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;в том числе (из стр. 42) в возрасте:<br/>
						&emsp;&emsp;&emsp;15 лет
					</td>
					<td>43</td>
					<%Call DrawInputs(5,43,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;16 лет
					</td>
					<td>44</td>
					<%Call DrawInputs(5,44,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;17 лет
					</td>
					<td>45</td>
					<%Call DrawInputs(5,45,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;лиц из числа детей, оставшихся без попечения родителей, в возрасте<br/>
						&emsp;от 18 до 23 лет
					</td>
					<td>46</td>
					<%Call DrawInputs(5,46,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;лиц в возрасте от 23 лет и старше
					</td>
					<td>47</td>
					<%Call DrawInputs(5,47,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставшихся без попечения родителей, и лиц из числа детей, <br/>
						оставшихся без попечения родителей, состоявших на учете на получение жилого <br/>
						помещения, включая лиц в возрасте от 23 лет и старше, обеспеченных жилыми <br/>
						помещениями за отчетный год (сумма строк 49-51)
					</td>
					<td>48</td>
					<%=DrawInputsWithTotals(48, 3, 3, 5, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 48) детей, оставшихся без попечения родителей
					</td>
					<td>49</td>
					<%Call DrawInputs(5,49,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;лиц из числа детей, оставшихся без попечения родителей, в возрасте<br/>
						&emsp;от 18 до 23 лет
					</td>
					<td>50</td>
					<%Call DrawInputs(5,50,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;лиц в возрасте от 23 лет и старше
					</td>
					<td>51</td>
					<%Call DrawInputs(5,51,3,3)%>
				</tr>
			</table>
		</td>
	</tr>
</table>

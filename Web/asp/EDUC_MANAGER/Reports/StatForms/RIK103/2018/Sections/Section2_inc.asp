<% ' © 2007-2015 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 2. Движение численности детей в возрасте до 18 лет, находящихся на воспитании в семьях, за <%=strShoolYearStart%> год</b></td></tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: единица - 642; человек - 792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="4"></td>
					<td rowspan="4">
						№<br>
						строки
					</td>
					<td colspan="9">
						Опекаемые (подопечные), человек
					</td>
					<td colspan="3">
						Усыновленные (кроме усыновленных <br/>
						отчимами и мачехами), человек
					</td>
				</tr>
				<tr align="center">
					<td rowspan="3">
						Всего
					</td>
					<td colspan="8">
						из них (из гр. 3): 
					</td>
					<td rowspan="3">
						Всего
					</td>
					<td rowspan="3">
						из них (из <br/>
						гр.12) иностран-<br/>
						ными <br/>
						гражданами<br/>
					</td>
					<td rowspan="3">
						из них (из <br/>
						гр.12) дети, на<br/>
						которых<br/>
						выплачива-<br/>
						ются денежные<br/>
						средства
					</td>
				</tr>
				<tr align="center">
					<td rowspan="2">
						посторон-<br/>
						ними <br/>
						гражданами
					</td>
					<td rowspan="2">
						добровольно <br/>
						переданные <br/>
						родителями по <br/>
						заявлению о <br/>
						назначении их <br/>
						ребенку <br/>
						опекуна <br/>
						(попечителя)
					</td>
					<td rowspan="2">
						дети, на ко-<br/>
						торых вып-<br/>
						лачиваются <br/>
						денежные <br/>
						средства
					</td>
					<td rowspan="2">
						переданные <br/>
						под предва-<br/>
						рительную <br/>
						опеку (попе-<br/>
						чительство)
					</td>
					<td rowspan="2">
						переданные<br/>
						на безвоз-<br/>
						мездную <br/>
						форму опеки<br/>
						(попечи-<br/>
						тельства)
					</td>
					<td colspan="3">
						переданные на возмездную форму опеки<br/>
						(попечительства)
					</td>
				</tr>
				<tr align="center">
					<td>
						по договору о <br/>
						приемной <br/>
						семье
					</td>
					<td>
						по договору о <br/>
						патронат-ной <br/>
						семье (в <br/>
						случаях, пре-<br/>
						дусмотрен-<br/>
						ных законами <br/>
						субъектов <br/>
						Российской <br/>
						Федерации)
					</td>
					<td>
						на иные виды <br/>
						возмездной <br/>
						опеки (попе-<br/>
						чительства)
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Состояло детей на воспитании в семьях на начало отчетного года
					</td>
					<td>01</td>
					<%Call DrawInputs(2,1,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (стр. 01):<br/>
						&emsp;&emsp;в отношении которых прекращена та или иная<br/>
						&emsp;&emsp;форма семейного устройства за отчетный год
					</td>
					<td>02</td>
					<%Call DrawInputs(2,2,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;принято на другую форму семейного устройства<br/>
						&emsp;&emsp;за отчетный год
					</td>
					<td>03</td>
					<%Call DrawInputs(2,3,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;помещены под надзор в организации для детей-сирот и<br/>																																				
						&emsp;&emsp;детей, оставшихся без попечения родителей, за отчетный год
					</td>
					<td>04</td>
					<%Call DrawInputs(2,4,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;принято на ту или иную форму семейного устройства за <br/>
						&emsp;&emsp;отчетный год
					</td>
					<td>05</td>
					<%Call DrawInputs(2,5,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, которым дополнительно назначена выплата <br/>
						денежных средств в течение отчетного года
					</td>
					<td>06</td>
					<td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(2,6,6,6)%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(2,6,14,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Принято детей на воспитание в семьи за отчетный год
					</td>
					<td>07</td>
					<%Call DrawInputs(2,7,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (стр. 07):<br/>
						&emsp;&emsp;в отношении которых прекращена та или иная форма<br/>
						&emsp;&emsp;семейного устройства за отчетный год
					</td>
					<td>08</td>
					<%Call DrawInputs(2,8,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;принято на другую форму семейного устройства за<br/>
						&emsp;&emsp;отчетный год
					</td>
					<td>09</td>
					<%Call DrawInputs(2,9,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;помещены под надзор в организации для детей-сирот и<br/>
						&emsp;&emsp;детей, оставшихся без попечения родителей, за отчетный год
					</td>
					<td>10</td>
					<%Call DrawInputs(2,10,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;принято на ту или иную форму семейного устройства за<br/>
						&emsp;&emsp;отчетный год
					</td>
					<td>11</td>
					<%Call DrawInputs(2,11,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 07):<br/>
						&emsp;&emsp;прибывших из других регионов
					</td>
					<td>12</td>
					<%Call DrawInputs(2,12,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;прибывших из других государств
					</td>
					<td>13</td>
					<%Call DrawInputs(2,13,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;прибывших из другого муниципального образования<br/>
						&emsp;&emsp;в субъекте РФ
					</td>
					<td>14</td>
					<%Call DrawInputs(2,14,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;переданных из организаций для детей-сирот и детей,<br/> 
						&emsp;&emsp;оставшихся без попечения родителей, и других организаций
					</td>
					<td>15</td>
					<%Call DrawInputs(2,15,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Снято с учета детей, находящихся на воспитании в семьях, за отчетный <br/>
						год (сумма строк 17-21, 36, 37)
					</td>
					<td>16</td>
					<%Call DrawInputsWithTotals(16, 3, 14, 2, Array(3,4,5,6,7,8,9,10,11,12,13,14))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 16):<br/>
						&emsp;&emsp;по достижении совершеннолетия (18 лет)
					</td>
					<td>17</td>
					<%Call DrawInputs(2,17,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;помещены под надзор в организации для детей-сирот<br/>
						&emsp;&emsp;и детей, оставшихся без попечения родителей
					</td>
					<td>18</td>
					<%Call DrawInputs(2,18,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;поступили на обучение в профессиональные образовательные<br/>
						&emsp;&emsp;организации и образовательные организации высшего<br/>
						&emsp;&emsp;образования на полное государственное обеспечение
					</td>
					<td>19</td>
					<%Call DrawInputs(2,19,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;выбыли к родителям
					</td>
					<td>20</td>
					<%Call DrawInputs(2,20,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;умерли
					</td>
					<td>21</td>
					<%Call DrawInputs(2,21,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;из них (из стр. 21)<br/>
						&emsp;&emsp;&emsp;&emsp;в результате суицида
					</td>
					<td>22</td>
					<%Call DrawInputs(2,22,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;погибли по вине усыновителей, опекунов,<br/>
						&emsp;&emsp;&emsp;&emsp;попечителей, приемных или патронатных родителей
					</td>
					<td>23</td>
					<%Call DrawInputs(2,23,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;отменено решений о передаче ребенка на воспитание<br/>
						&emsp;&emsp;в семью
					</td>
					<td>24</td>
					<%Call DrawInputs(2,24,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;из них (из стр. 24):<br/>
						&emsp;&emsp;&emsp;&emsp;по инициативе органа опеки и попечительства
					</td>
					<td>25</td>
					<%Call DrawInputs(2,25,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;в связи с ненадлежащим выполнением усыновителями,<br/>
						&emsp;&emsp;&emsp;&emsp;опекунами, попечителями, приемными или патронатными<br/>
						&emsp;&emsp;&emsp;&emsp;родителями обязанностей по воспитанию детей
					</td>
					<td>26</td>
					<%Call DrawInputs(2,26,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;по причине жестокого обращения с детьми
					</td>
					<td>27</td>
					<%Call DrawInputs(2,27,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;в связи с нарушением усыновителями, опекунами,<br/>
						&emsp;&emsp;&emsp;&emsp;попечителями, приемными или патронатными родителями<br/>
						&emsp;&emsp;&emsp;&emsp;правил охраны имущества подопечного и (или)<br/>
						&emsp;&emsp;&emsp;&emsp;распоряжения его имуществом<br/>
					</td>
					<td>28</td>
					<%Call DrawInputs(2,28,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;по инициативе усыновителей, опекунов, попечителей,<br/>
						&emsp;&emsp;&emsp;&emsp;приемных или патронатных родителей
					</td>
					<td>29</td>
					<%Call DrawInputs(2,29,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;в связи с заболеванием ребенка
					</td>
					<td>30</td>
					<%Call DrawInputs(2,30,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;временно в случае возникновения противоречий<br/> 
						&emsp;&emsp;&emsp;&emsp;между интересами подопечного и интересами<br/>
						&emsp;&emsp;&emsp;&emsp;опекуна или попечителя<br/>
					</td>
					<td>31</td>
					<%Call DrawInputs(2,31,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;усыновителей, опекунов, попечителей, приемных<br/>
						&emsp;&emsp;&emsp;&emsp;родителей, прошедших подготовку
					</td>
					<td>32</td>
					<%Call DrawInputs(2,32,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;усыновителей, опекунов, попечителей, приемных<br/>
						&emsp;&emsp;&emsp;&emsp;родителей, прошедших психологическое обследование
					</td>
					<td>33</td>
					<%Call DrawInputs(2,33,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;в течение одного года с момента передачи ребенка<br/>
						&emsp;&emsp;&emsp;&emsp;на воспитание в семью 
					</td>
					<td>34</td>
					<%Call DrawInputs(2,34,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;по истечении пяти лет и более с момента передачи<br/>
						&emsp;&emsp;&emsp;&emsp;ребенка на воспитание в семью
					</td>
					<td>35</td>
					<%Call DrawInputs(2,35,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;в связи с переменой места жительства
					</td>
					<td>36</td>
					<%Call DrawInputs(2,36,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;по иным основаниям
					</td>
					<td>37</td>
					<%Call DrawInputs(2,37,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, которым отменена выплата денежных средств без <br/>
						отмены опеки в течение отчетного года
					</td>
					<td>38</td>
					<td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(2,38,6,6)%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(2,38,14,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Состоит детей на воспитании в семьях на конец отчетного года<br/>
						(стр. 01 - стр. 02 + стр. 03 - стр. 04 + стр. 05 + стр. 06 + стр. 07 –<br/>
						стр. 08 + стр. 09 – стр. 10 + стр. 11 - стр. 16 - стр. 38)
					</td>
					<td>39</td>
					<%Call DrawInputsWithTotals(39, 3, 14, 2, Array(3,4,5,6,7,8,9,10,11,12,13,14))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;из них (из стр. 39)<br />
						&emsp;&emsp;&emsp;&emsp;детей-сирот
					</td>
					<td>40</td>
					<%Call DrawInputs(2,40,3,14)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;детей, самовольно покидавших замещающие семьи <br />
						&emsp;&emsp;&emsp;&emsp;в отчетном году
					</td>
					<td>41</td>
					<%Call DrawInputs(2,41,3,14)%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<table>
				<tr>
					<td>
						<br>
						Справка
						<br><br>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" border="1" cellpadding="2" align="left"  width="45%">
				<tr align="center">
					<td>Наименование</td>
					<td>№ строки</td>
					<td>Всего</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число приемных семей на конец отчетного года, единиц</td><td>42</td><td><%=IT("T0242", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 42) воспитывающих:<br/>
						&emsp;&emsp;5 и более детей (без родных)
					</td><td>43</td><td><%=IT("T0243", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;3-4 детей (без родных)</td><td>44</td><td><%=IT("T0244", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;1-2 детей (без родных)</td><td>45</td><td><%=IT("T0245", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число детских домов семейного типа на конец отчетного года, единиц</td><td>46</td><td><%=IT("T0246", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;в них детей (без родных), человек</td><td>47</td><td><%=IT("T0247", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число патронатных семей на конец отчетного года, единиц</td><td>48</td><td><%=IT("T0248", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 48) воспитывающих: <br />
						&emsp;&emsp;5 и более детей (без родных)</td><td>49</td><td><%=IT("T0249", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;3-4 детей (без родных)</td><td>50</td><td><%=IT("T0250", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;1-2 детей (без родных)</td><td>51</td><td><%=IT("T0251", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число семей, в которых обязанности по опеке и попечительству опекуном <br/>
						(попечителем) исполняются безвозмездно, единиц</td><td>52</td><td><%=IT("T0252", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 52) воспитывающих:<br>
						&emsp;&emsp;5 и более детей (без родных)
					</td>
					<td>53</td>
					<td><%=IT("T0253", 5, 5 )%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;3-4 детей (без родных)
					</td>
					<td>54</td>
					<td><%=IT("T0254", 5, 5 )%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;1-2 детей (без родных)
					</td>
					<td>55</td>
					<td><%=IT("T0255", 5, 5 )%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число семей, в которых обязанности по опеке и попечительству опекуном <br/>
						(попечителем) исполняются на возмездных условиях (за исключением <br/>
						патронатных и приемных семей) на конец отчетного года, единиц</td><td>56</td><td><%=IT("T0256", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 56) воспитывающих:<br>
						&emsp;&emsp;5 и более детей (без родных)
					</td>
					<td>57</td>
					<td><%=IT("T0257", 5, 5 )%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;3-4 детей (без родных)
					</td>
					<td>58</td>
					<td><%=IT("T0258", 5, 5 )%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;1-2 детей (без родных)
					</td>
					<td>59</td>
					<td><%=IT("T0259", 5, 5 )%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число семей усыновителей на конец отчетного года, единиц</td><td>60</td><td><%=IT("T0260", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 60) воспитывающих: <br />
						&emsp;&emsp;5 и более детей (без родных)</td><td>61</td><td><%=IT("T0261", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;3-4 детей (без родных)</td><td>62</td><td><%=IT("T0262", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;1-2 детей (без родных)</td><td>63</td><td><%=IT("T0263", 5, 5 )%>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

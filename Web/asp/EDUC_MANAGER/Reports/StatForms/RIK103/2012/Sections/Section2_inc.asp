<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 2. Движение численности детей в возрасте до 18 лет, находящихся на воспитании в семьях, за <%=strShoolYearStart%> год</b></td></tr>
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
					<td rowspan="4"></td>
					<td rowspan="4">
						№<br>
						строки
					</td>
					<td colspan="9">
						Опекаемые (подопечные) (чел)
					</td>
					<td colspan="2">
						Усыновленные (кроме усыновленных <br/>
						отчимами и мачехами) (чел)
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
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Состояло детей на воспитании в семьях на начало отчетного года
					</td>
					<td>01</td>
					<%Call DrawInputs(2,1,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (стр. 01):<br/>
						&emsp;&emsp;в отношении которых прекращена та или иная<br/>
						&emsp;&emsp;форма семейного устройства за отчетный год
					</td>
					<td>02</td>
					<%Call DrawInputs(2,2,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;принято на другую форму семейного устройства<br/>
						&emsp;&emsp;за отчетный год
					</td>
					<td>03</td>
					<%Call DrawInputs(2,3,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, которым дополнительно назначена выплата <br/>
						денежных средств в течение отчетного года
					</td>
					<td>04</td>
					<td>X</td><td>X</td><td>X</td>
					<%Call DrawInputs(2,4,6,6)%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Принято детей на воспитание в семьи за отчетный год
					</td>
					<td>05</td>
					<%Call DrawInputs(2,5,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (стр. 05):<br/>
						&emsp;&emsp;в отношении которых прекращена та или иная форма<br/>
						&emsp;&emsp;семейного устройства за отчетный год
					</td>
					<td>06</td>
					<%Call DrawInputs(2,6,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;принято на другую форму семейного устройства за<br/>
						отчетный год
					</td>
					<td>07</td>
					<%Call DrawInputs(2,7,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 05):<br/>
						&emsp;&emsp;прибывших из других регионов
					</td>
					<td>08</td>
					<%Call DrawInputs(2,8,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;переданных из образовательных, медицинских организаций,<br/>
						&emsp;&emsp;организаций, оказывающих социальные услуги, и других<br/>
						&emsp;&emsp;организаций
					</td>
					<td>09</td>
					<%Call DrawInputs(2,9,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Снято с учета детей, находящихся на воспитании в семьях, за отчетный <br/>
						год (сумма строк 11-15, 21,22)
					</td>
					<td>10</td>
					<%Call DrawInputsWithTotals(10, 3, 13, 2, Array(3,4,5,6,7,8,9,10,11,12,13))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 10):<br/>
						&emsp;&emsp;по достижении совершеннолетия (18 лет)
					</td>
					<td>11</td>
					<%Call DrawInputs(2,11,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;помещены под надзор в образовательные, медицинские <br/>
						&emsp;&emsp;организации, организации, оказывающие социальные<br/>
						&emsp;&emsp;услуги, другие организации для детей-сирот и детей,<br/>
						&emsp;&emsp;оставшихся без попечения родителей, на полное<br/>
						&emsp;&emsp;государственное обеспечение
					</td>
					<td>12</td>
					<%Call DrawInputs(2,12,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;поступили в образовательные учреждения начального,<br/>
						&emsp;&emsp;среднего и высшего профессионального образования, другие<br/>
						&emsp;&emsp;образовательные учреждения на полное государственное<br/>
						&emsp;&emsp;обеспечение
					</td>
					<td>13</td>
					<%Call DrawInputs(2,13,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;выбыли к родителям
					</td>
					<td>14</td>
					<%Call DrawInputs(2,14,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;умерли
					</td>
					<td>15</td>
					<%Call DrawInputs(2,15,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;из них (из стр. 15)<br/>
						&emsp;&emsp;&emsp;&emsp;погибли по вине усыновителей,опекунов,<br/>
						&emsp;&emsp;&emsp;&emsp;попечителей, приемных или патронатных родителей
					</td>
					<td>16</td>
					<%Call DrawInputs(2,16,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;отменено решений о передаче ребенка на воспитание<br/>
						&emsp;&emsp;в семью
					</td>
					<td>17</td>
					<%Call DrawInputs(2,17,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;из них (из стр. 17):<br/>
						&emsp;&emsp;&emsp;&emsp;в связи с ненадлежащим выполнением усыновителями,<br/>
						&emsp;&emsp;&emsp;&emsp;опекунами, попечителями, приемными или патронатны-<br/>
						&emsp;&emsp;&emsp;&emsp;ми родителями обязанностей по воспитанию детей
					</td>
					<td>18</td>
					<%Call DrawInputs(2,18,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;по причине жестокого обращения с детьми
					</td>
					<td>19</td>
					<%Call DrawInputs(2,19,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;по инициативе усыновителей, опекунов, попечителей,<br/>
						&emsp;&emsp;&emsp;&emsp;приемных или патронатных родителей
					</td>
					<td>20</td>
					<%Call DrawInputs(2,20,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;в связи с переменой места жительства
					</td>
					<td>21</td>
					<%Call DrawInputs(2,21,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;по иным основаниям
					</td>
					<td>22</td>
					<%Call DrawInputs(2,22,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, которым отменена выплата денежных средств без <br/>
						отмены опеки в течение отчетного года
					</td>
					<td>23</td>
					<%Call DrawInputs(2,23,3,13)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Состоит детей на воспитании в семьях на конец отчетного года<br/>
						(стр. 01 - стр. 02 + стр. 03 + стр. 04 + стр. 05 – стр. 06 + стр. 07 –<br/>
						стр. 10– стр. 23)
					</td>
					<td>24</td>
					<%Call DrawInputsWithTotals(24, 3, 13, 2, Array(3,4,5,6,7,8,9,10,11,12,13))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 24) детей-сирот
					</td>
					<td>25</td>
					<%Call DrawInputs(2,25,3,13)%>
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
				<tr align="middle" valign="center">
					<td align="left">
						Число приемных семей на конец отчетного года (ед)</td><td>26</td><td><%=IT("T0226", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;в них детей (без родных) (чел)</td><td>27</td><td><%=IT("T0227", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число детских домов семейного типа на конец отчетного года (ед)</td><td>28</td><td><%=IT("T0228", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;в них детей (без родных) (чел)</td><td>29</td><td><%=IT("T0229", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число патронатных семей на конец отчетного года (ед)</td><td>30</td><td><%=IT("T0230", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;в них детей (без родных) (чел)</td><td>31</td><td><%=IT("T0231", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число семей, в которых обязанности по опеке и попечительству опекуном <br/>
						(попечителем) исполняются безвозмездно (ед)</td><td>32</td><td><%=IT("T0232", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;в них детей (без родных) (чел)</td><td>33</td><td><%=IT("T0233", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число семей, в которых обязанности по опеке и попечительству опекуном <br/>
						(попечителем) исполняются на возмездных условиях (за исключением <br/>
						патронатных и приемных семей) на конец отчетного года (ед)</td><td>34</td><td><%=IT("T0234", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;в них детей (без родных) (чел)</td><td>35</td><td><%=IT("T0235", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Число семей усыновителей на конец отчетного года (ед)</td><td>36</td><td><%=IT("T0236", 5, 5 )%>
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;в них детей (без родных) (чел)</td><td>37</td><td><%=IT("T0237", 5, 5 )%>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

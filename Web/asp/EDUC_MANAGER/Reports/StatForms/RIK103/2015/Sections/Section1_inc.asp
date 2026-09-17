<% ' © 2007-2015 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 1. Учет и устройство детей в возрасте до 18 лет, оставшихся без попечения родителей</b></td></tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: человек-792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td >
						Наименование
					</td>
					<td>
						№<br>
						строки
					</td>
					<td>
						Всего
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставшихся неустроенными к началу отчетного года
					</td>
					<td>01</td>
					<%Call DrawInputs(1,1,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, выявленных и учтенных за отчетный год
					</td>
					<td>02</td>
					<%Call DrawInputs(1,2,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр. 02):<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;детей-сирот
					</td>
					<td>03</td>
					<%Call DrawInputs(1,3,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в возрасте до 7 лет
					</td>
					<td>04</td>
					<%Call DrawInputs(1,4,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;девочек (девушек)
					</td>
					<td>05</td>
					<%Call DrawInputs(1,5,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Всего детей выявлено и учтено на конец отчетного года (стр. 01 + стр. 02)
					</td>
					<td>06</td>
					<%Call DrawInputsWithTotals(6, 3, 3, 1, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них (из стр. 06) устроены:<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;под надзор:<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в образовательные организации
					</td>
					<td>07</td>
					<%Call DrawInputs(1,7,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в медицинские организации
					</td>
					<td>08</td>
					<%Call DrawInputs(1,8,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в организации, оказывающие социальные услуги
					</td>
					<td>09</td>
					<%Call DrawInputs(1,9,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в негосударственные учреждения
					</td>
					<td>10</td>
					<%Call DrawInputs(1,10,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в детские дома семейного типа
					</td>
					<td>11</td>
					<%Call DrawInputs(1,11,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;под предварительную опеку (попечительство)
					</td>
					<td>12</td>
					<%Call DrawInputs(1,12,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.12):<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;находятся под предварительной опекой на конец отчетного года
					</td>
					<td>13</td>
					<%Call DrawInputs(1,13,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;по истечении установленного срока были помещены под надзор в организацию для детей-сирот
					</td>
					<td>14</td>
					<%Call DrawInputs(1,14,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;по истечении установленного срока переданы на безвозмездную форму опеки (попечительства)<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в семью предварительного опекуна
					</td>
					<td>15</td>
					<%Call DrawInputs(1,15,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;по истечении установленного срока переданы на возмездную форму опеки (попечительства)<br/>
						&emsp;&emsp;&emsp;&emsp;в семью предварительного опекуна
					</td>
					<td>16</td>
					<%Call DrawInputs(1,16,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;&emsp;в том числе (из стр.16):<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;в приемную семью
					</td>
					<td>17</td>
					<%Call DrawInputs(1,17,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;в патронатную семью
					</td>
					<td>18</td>
					<%Call DrawInputs(1,18,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;по истечении установленного срока усыновлены предварительным опекуном (попечителем)
					</td>
					<td>19</td>
					<%Call DrawInputs(1,19,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;под опеку (попечительство)
					</td>
					<td>20</td>
					<%Call DrawInputs(1,20,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;из них (из стр.20) <br/>
						&emsp;&emsp;&emsp;&emsp;переданные на безвозмездную форму опеки (попечительства)
					</td>
					<td>21</td>
					<%Call DrawInputs(1,21,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;переданные на возмездную форму опеки (попечительства)
					</td>
					<td>22</td>
					<%Call DrawInputs(1,22,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;&emsp;в том числе (из стр.22):<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;под опеку (попечительство) по договору о приемной семье
					</td>
					<td>23</td>
					<%Call DrawInputs(1,23,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;под опеку (попечительство) по договору о патронатной семье (патронате, патронатном<br/>
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;воспитании) в случаях, предусмотренных законами субъектов Российской Федерации
					</td>
					<td>24</td>
					<%Call DrawInputs(1,24,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;на иные виды возмездной опеки (попечительства)
					</td>
					<td>25</td>
					<%Call DrawInputs(1,25,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;на усыновление (удочерение)
					</td>
					<td>26</td>
					<%Call DrawInputs(1,26,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;обучаются в профессиональных образовательных организациях и образовательных организациях<br />
						&emsp;&emsp;высшего образования
					</td>
					<td>27</td>
					<%Call DrawInputs(1,27,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;возвращены родителям
					</td>
					<td>28</td>
					<%Call DrawInputs(1,28,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;умерли
					</td>
					<td>29</td>
					<%Call DrawInputs(1,29,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;выбыли по иным основаниям
					</td>
					<td>30</td>
					<%Call DrawInputs(1,30,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставшихся неустроенными на конец отчетного года<br/>
						(стр.06 – (стр. 07+стр.08+стр.09+стр.10+стр.11+стр.13+стр.20+стр.26+стр.27+стр.28+стр.29+стр.30))
					</td>
					<td>31</td>
					<%Call DrawInputsWithTotals(31, 3, 3, 1, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 31) <br/>
						&emsp;&emsp;помещенные в больницы, специализированные учреждения для несовершеннолетних, <br/>
						&emsp;&emsp;нуждающихся в социальной реабилитации, и другие учреждения временного пребывания
					</td>
					<td>32</td>
					<%Call DrawInputs(1,32,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, состоявших на учете в региональном банке данных о детях, оставшихся без попечения<br/>
						родителей, на начало отчетного года
					</td>
					<td>33</td>
					<%Call DrawInputs(1,33,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Поставлено детей на учет в региональный банк данных о детях, оставшихся без попечения родителей, за отчетный <br/>
						год
					</td>
					<td>34</td>
					<%Call DrawInputs(1,34,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Снято детей с учета в региональном банке данных о детях, оставшихся без попечения родителей, за отчетный год
					</td>
					<td>35</td>
					<%Call DrawInputs(1,35,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, состоящих на учете в региональном банке данных о детях, оставшихся без попечения родителей, <br/>
						на конец отчетного года (стр.33 + стр.34 – стр.35)
					</td>
					<td>36</td>
					<%Call DrawInputsWithTotals(36, 3, 3, 1, Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, в отношении которых исполнение обязанностей опекуна или попечителя возложено на<br>
						органы опеки и попечительства
					</td>
					<td>37</td>
					<%Call DrawInputs(1,37,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр.37)<br>
						&emsp;&emsp;обучаются в профессиональных образовательных организациях и образовательных организациях<br>
						&emsp;&emsp;высшего образования на полном государственном обеспечении
					</td>
					<td>38</td>
					<%Call DrawInputs(1,38,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставшихся без попечения родителей, находящихся под надзором в организациях для<br>
						детей-сирот и детей, оставшихся без попечения родителей
					</td>
					<td>39</td>
					<%Call DrawInputs(1,39,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставшихся без попечения родителей, находящихся на воспитании в семьях
					</td>
					<td>40</td>
					<%Call DrawInputs(1,40,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Численность детей, оставленных матерями (родителями) при рождении (из стр. 06)
					</td>
					<td>41</td>
					<%Call DrawInputs(1,41,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;из них (из стр. 41):<br>
						&emsp;&emsp;переданы в семью на воспитание на конец отчетного года
					</td>
					<td>42</td>
					<%Call DrawInputs(1,42,3,3)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&emsp;&emsp;помещены под надзор в организации для детей-сирот и детей, оставшихся без попечения родителей<br>
						&emsp;&emsp;на конец отчетного года
					</td>
					<td>43</td>
					<%Call DrawInputs(1,43,3,3)%>
				</tr>
			</table>
		</td>
	</tr>
</table>

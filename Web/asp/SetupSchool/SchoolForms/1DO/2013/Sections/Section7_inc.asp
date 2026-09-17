<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="middle">
<!-- таб.7 -->
	<br/><br/><br/>
	Раздел 7. Сведения о материально-технической базе<br/><br/>
	<div align="right">Коды по ОКЕИ: квадратный метр - 055; единица - 642; место - 698; человек - 792</div>

</td></tr>
<tr><td>

<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">

<tr align="middle" valign="center">
	<td>Наименование</td>
	<td>№<br/>строки</td>
	<td>Количество</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Число зданий и сооружений (ед)</td><td>01</td><td><%=IT("T070103", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Общая площадь всех помещений (м2)</td><td>02</td><td><%=IT("T070203", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Число классных комнат (включая учебные кабинеты и лаборатории) (ед)</td><td>03</td><td><%=IT("T070303", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Их площадь (м2)</td>
	<td >04</td><td><%=IT("T070403", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Число мастерских (ед)</td><td>05</td><td><%=IT("T070503", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;в них мест (место)</td><td>06</td><td><%=IT("T070603", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Число тракторов для учебных целей (ед)</td><td>07</td><td><%=IT("T070703", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение физкультурный зал (да, нет)</td><td>08</td><td><%=IB0("T070803")%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение плавательный бассейн (да, нет)</td><td>09</td><td><%=IB0("T070903")%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение актовый или лекционный зал (да, нет)</td><td>10</td><td><%=IB0("T071003")%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение музей (да, нет)</td><td>11</td><td><%=IB0("T071103")%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Размер учебно-опытного земельного участка (при отсутствии участка поставить "0") (м2)</td><td>12</td>
	<td><%=IT("T071203", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
    <td align="left">Размер подсобного сельского хозяйства (при отсутствии поставить "0") (м2)</td><td>13</td>
	<td><%=IT("T071303", 5, 10)%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Имеется ли столовая или буфет с горячим питанием (да, нет)</td><td>14</td><td><%=IB0("T071403")%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;в т. ч. в приспособленных помещениях</td><td>15</td><td><%=IB0("T071503")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число посадочных мест в столовых, буфетах – всего (мест)</td><td>16</td><td><%=IT("T071603", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;в т. ч. посадочных мест в приспособленных помещениях</td><td>17</td><td><%=IT("T071703", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся, пользующихся горячим питанием (чел)</td><td>18</td><td><%=IT("T071803", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся, имеющих льготное обеспечение горячим питанием (чел)</td><td>19</td><td><%=IT("T071903", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число книг в библиотеке (книжном фонде) (включая школьные учебники), брошюр, журналов <br/>(при отсутствии библиотеки поставить "0") (ед)</td><td>20</td><td><%=IT("T072003", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;в т. ч. школьных учебников (ед)</td><td>21</td><td><%=IT("T072103", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Техническое состояние общеобразовательного учреждения: <br/>&nbsp;требует ли капитального ремонта (да, нет)</td><td>22</td><td><%=IB0("T072203")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;в них зданий (ед)</td><td>23</td><td><%=IT("T072303", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;находится ли в аварийном состоянии (да, нет)</td><td>24</td><td><%=IB0("T072403")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;в них зданий (ед)</td><td>25</td><td><%=IT("T072503", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;имеют все виды благоустройства (да, нет)</td><td>26</td><td><%=IB0("T072603")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Наличие: <br/>&nbsp;водопровода (да, нет)</td><td>27</td><td><%=IB0("T072703")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;центрального отопления (да, нет)</td><td>28</td><td><%=IB0("T072803")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;канализации (да, нет)</td><td>29</td><td><%=IB0("T072903")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число автомобилей для учебных целей (при отсутствии автомобилей поставить "0") (ед)</td><td>30</td><td><%=IT("T073003", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число автотранспортных средств, предназначенных для перевозки обучающихся (при отсутствии <br/>автотранспортных средств поставить "0") (ед)</td><td>31</td><td><%=IT("T073103", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;в них пассажирских мест (мест)</td><td>32</td><td><%=IT("T073203", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число автотранспортных средств, предназначенных для хозяйственных нужд (при отсутствии <br/>автотранспортных средств поставить "0") (ед)</td><td>33</td><td><%=IT("T073303", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число кабинетов основ информатики и вычислительной техники (при отсутствии таких кабинетов поставить <br/>"0") (ед)</td><td>34</td><td><%=IT("T073403", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">в них рабочих мест с ЭВМ (мест)</td><td>35</td><td><%=IT("T073503", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число персональных ЭВМ (ед)</td><td>36</td><td><%=IT("T073603", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;из них: <br/>&nbsp;&nbsp;приобретенных за последний год</td><td>37</td><td><%=IT("T073703", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;используются в учебных целях</td><td>38</td><td><%=IT("T073803", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число персональных ЭВМ в составе локальных вычислительных сетей (из стр.36) (ед)</td><td>39</td><td><%=IT("T073903", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;из них (из стр.39): <br/>&nbsp;&nbsp;используются в учебных целях</td><td>40</td><td><%=IT("T074003", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число переносных компьютеров (ноутбуков, планшетов) (из стр.36) (ед)</td><td>41</td><td><%=IT("T074103", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;из них (из стр.41): <br/>&nbsp;&nbsp;используются в учебных целях</td><td>42</td><td><%=IT("T074203", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Подключено ли учреждение к сети Интернет (да, нет)</td><td>43</td><td><%=IB0("T074303")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Тип подключения к сети Интернет: <br/>&nbsp;модем</td><td>44</td><td><%=IB0("T074403")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;выделенная линия</td><td>45</td><td><%=IB0("T074503")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;спутниковое</td><td>46</td><td><%=IB0("T074603")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Скорость подключения к сети Интернет: <br/>&nbsp;от 128 кбит/с до 256 кбит/с (да, нет)</td><td>47</td><td><%=IB0("T074703")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;от 256 кбит/с до 1 мбит/с (да, нет)</td><td>48</td><td><%=IB0("T074803")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;от 1 мбит/с до 5 мбит/с (да, нет)</td><td>49</td><td><%=IB0("T074903")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;от 5 мбит/с и выше (да, нет)</td><td>50</td><td><%=IB0("T075003")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число персональных ЭВМ, подключенных к сети Интернет (из стр.36) (ед)</td><td>51</td><td><%=IT("T075103", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;из них (из стр.51): <br/>&nbsp;&nbsp;используются в учебных целях</td><td>52</td><td><%=IT("T075203", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение адрес электронной почты (да, нет)</td><td>53</td><td><%=IB0("T075303")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение собственный сайт в сети Интернет (да, нет)</td><td>54</td><td><%=IB0("T075403")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Ведется ли в учреждении электронный дневник, электронный журнал успеваемости (да, нет)</td><td>55</td><td><%=IB0("T075503")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение электронную библиотеку (да, нет)</td><td>56</td><td><%=IB0("T075603")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Реализуются ли в учреждении образовательные программы с использованием <br/>дистанционных технологий (да, нет)</td><td>57</td><td><%=IB0("T075703")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение пожарную сигнализацию (да, нет)</td><td>58</td><td><%=IB0("T075803")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение дымовые извещатели (да, нет)</td><td>59</td><td><%=IB0("T075903")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение пожарные краны и рукава (да, нет)</td><td>60</td><td><%=IB0("T076003")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число огнетушителей (ед)</td><td>61</td><td><%=IT("T076103", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность сотрудников охраны (при отсутствии охраны поставить "0") (чел)</td><td>62</td><td><%=IT("T076203", 5, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение системы видеонаблюдения (да, нет)</td><td>63</td><td><%=IB0("T076303")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение «тревожную кнопку» (да, нет)</td><td>64</td><td><%=IB0("T076403")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли учреждение условия для беспрепятственного доступа инвалидов (да, нет)</td><td>65</td><td><%=IB0("T076503")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет ли  учреждение на сайте нормативно закрепленный перечень сведений о своей деятельности (да, нет)</td><td>66</td><td><%=IB0("T076603")%></td>
</tr>
</TABLE>

<!-- end of таб.7 -->
</TD></TR></table> <!-- format -->
<% ' © 2007-2012 IRTech. All rights reserved.
%>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 6. Сведения о материально-технической базе</b><br/>
	<p font-size:"8pt">(раздел заполняют только те учреждения, которые не осуществляют подготовку по программам общего образования)</p>
</div>
<div align="right"><p font-size:10pt>Коды по ОКЕИ: квадратный метр - 055; единица - 642; место - 698; человек - 792</p></div>
<table Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
    <tr align="middle" valign="center">
	    <td><br />Наименование<br />&nbsp;</td><td>№<br />строки</td><td>Количество</td></tr>
    <tr align="middle" valign="center">
        <td>1</td><td>2</td><td>3</td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число зданий и сооружений (ед)</td><td>01</td>
	<%=DrawInputs("06",1,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Общая площадь всех помещений (м2)</td><td>02</td>
	<%=DrawInputs("06",2,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число классных комнат (включая учебные кабинеты и лаборатории) (ед)</td><td>03</td>
	<%=DrawInputs("06",3,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Их площадь (м2)</td><td>04</td>
	<%=DrawInputs("06",4,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число мастерских (ед)</td><td>05</td>
	<%=DrawInputs("06",5,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в них мест (место)</td><td>06</td>
	<%=DrawInputs("06",6,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число тракторов для учебных целей (ед)</td><td>07</td>
	<%=DrawInputs("06",7,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение физкультурный зал (да, нет)</td><td>08</td>
	<td><%=IB0("T060803")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение плавательный бассейн (да, нет)</td><td>09</td>
	<td><%=IB0("T060903")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение актовый или лекционный зал (да, нет)</td><td>10</td>
	<td><%=IB0("T061003")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение музей (да, нет)</td><td>11</td>
	<td><%=IB0("T061103")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Размер учебно-опытного земельного участка (при отсутствии участка поставить "0") (м2)</td><td>12</td>
	<%=DrawInputs("06",12,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Размер подсобного сельского хозяйства (при отсутствии поставить "0") (м2)</td><td>13</td>
	<%=DrawInputs("06",13,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеется ли столовая или буфет с горячим питанием (да, нет)</td><td>14</td>
	<td><%=IB0("T061403")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в т. ч. в приспособленных помещениях</td><td>15</td>
	<td><%=IB0("T061503")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число посадочных мест в столовых, буфетах – всего (мест)</td><td>16</td>
	<%=DrawInputs("06",16,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в т. ч. посадочных мест в приспособленных помещениях</td><td>17</td>
	<%=DrawInputs("06",17,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Численность обучающихся, пользующихся горячим питанием (чел)</td><td>18</td>
	<%=DrawInputs("06",18,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Численность обучающихся, имеющих льготное обеспечение горячим питанием (чел)</td><td>19</td>
	<%=DrawInputs("06",19,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число книг в библиотеке (книжном фонде) (включая школьные учебники), брошюр, журналов<br/>
			(при отсутствии библиотеки поставить "0") (ед)</td><td>20</td>
	<%=DrawInputs("06",20,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в т. ч. школьных учебников (ед)</td><td>21</td>
	<%=DrawInputs("06",21,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Техническое состояние общеобразовательного учреждения:<br />
			&emsp;требует ли капитального ремонта (да, нет)</td><td>22</td>
	<td><%=IB0("T062203")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;в них зданий (ед)</td><td>23</td>
	<%=DrawInputs("06",23,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;находится ли в аварийном состоянии (да, нет)</td><td>24</td>
	<td><%=IB0("T062403")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;в них зданий (ед)</td><td>25</td>
	<%=DrawInputs("06",25,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;имеют все виды благоустройства (да, нет)</td><td>26</td>
	<td><%=IB0("T062603")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Наличие:<br/>&emsp;водопровода (да, нет)</td><td>27</td>
	<td><%=IB0("T062703")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;центрального отопления (да, нет)</td><td>28</td>
	<td><%=IB0("T062803")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;канализации (да, нет)</td><td>29</td>
	<td><%=IB0("T062903")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число автомобилей для учебных целей (при отсутствии автомобилей поставить "0") (ед)</td><td>30</td>
	<%=DrawInputs("06",30,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число автотранспортных средств, предназначенных для перевозки обучающихся (при отсутствии<br/>автотранспортных средств поставить "0") (ед)</td><td>31</td>
	<%=DrawInputs("06",31,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в них пассажирских мест (мест)</td><td>32</td>
	<%=DrawInputs("06",32,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число автотранспортных средств, предназначенных для хозяйственных нужд (при отсутствии<br/>автотранспортных средств поставить "0") (ед)</td><td>33</td>
	<%=DrawInputs("06",33,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число кабинетов основ информатики и вычислительной техники (при отсутствии таких кабинетов<br />поставить "0") (ед)</td><td>34</td>
	<%=DrawInputs("06",34,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в них рабочих мест с ЭВМ (мест)</td><td>35</td>
	<%=DrawInputs("06",35,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число персональных ЭВМ (ед)</td><td>36</td>
	<%=DrawInputs("06",36,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;из них:<br />&emsp;&emsp;приобретенных за последний год</td><td>37</td>
	<%=DrawInputs("06",37,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;используются в учебных целях</td><td>38</td>
	<%=DrawInputs("06",38,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число персональных ЭВМ в составе локальных вычислительных сетей (из стр.36) (ед)</td><td>39</td>
	<%=DrawInputs("06",39,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;из них (из стр.39):<br />&emsp;&emsp;используются в учебных целях</td><td>40</td>
	<%=DrawInputs("06",40,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число переносных компьютеров (ноутбуков, планшетов) (из стр.36) (ед)</td><td>41</td>
	<%=DrawInputs("06",41,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;из них (из стр.41):<br/>&emsp;&emsp;используются в учебных целях</td><td>42</td>
	<%=DrawInputs("06",42,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Подключено ли учреждение к сети Интернет (да, нет)</td><td>43</td>
	<td><%=IB0("T064303")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Тип подключения к сети Интернет:<br/>&emsp;модем</td><td>44</td>
	<td><%=IB0("T064403")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;выделенная линия</td><td>45</td>
	<td><%=IB0("T064503")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;спутниковое</td><td>46</td>
	<td><%=IB0("T064603")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Скорость подключения к сети Интернет:<br />
			&emsp;от 128 кбит/с до 256 кбит/с (да, нет)</td><td>47</td>
	<td><%=IB0("T064703")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;от 256 кбит/с до 1 мбит/с (да, нет)</td><td>48</td>
	<td><%=IB0("T064803")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;от 1 мбит/с до 5 мбит/с (да, нет)</td><td>49</td>
	<td><%=IB0("T064903")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;от 5 мбит/с и выше (да, нет)</td><td>50</td>
	<td><%=IB0("T065003")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число персональных ЭВМ, подключенных к сети Интернет (из стр.36) (ед)</td><td>51</td>
	<%=DrawInputs("06",51,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;из них (из стр.51):<br/>&emsp;&emsp;используются в учебных целях</td><td>52</td>
	<%=DrawInputs("06",52,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение адрес электронной почты (да, нет)</td><td>53</td>
	<td><%=IB0("T065303")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение собственный сайт в сети Интернет (да, нет)</td><td>54</td>
	<td><%=IB0("T065403")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Ведется ли в учреждении электронный дневник, электронный журнал успеваемости (да, нет)</td><td>55</td>
	<td><%=IB0("T065503")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение электронную библиотеку (да, нет)</td><td>56</td>
	<td><%=IB0("T065603")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Реализуются ли в учреждении образовательные программы с использованием<br/>
			дистанционных технологий (да, нет)</td><td>57</td>
	<td><%=IB0("T065703")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение пожарную сигнализацию (да, нет)</td><td>58</td>
	<td><%=IB0("T065803")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение дымовые извещатели (да, нет)</td><td>59</td>
	<td><%=IB0("T065903")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение пожарные краны и рукава (да, нет)</td><td>60</td>
	<td><%=IB0("T066003")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Число огнетушителей (ед)</td><td>61</td>
	<%=DrawInputs("06",61,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Численность сотрудников охраны (при отсутствии охраны поставить "0") (чел)</td><td>62</td>
	<%=DrawInputs("06",62,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение системы видеонаблюдения (да, нет)</td><td>63</td>
	<td><%=IB0("T066303")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение «тревожную кнопку» (да, нет)</td><td>64</td>
	<td><%=IB0("T066403")%></td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение условия для беспрепятственного доступа инвалидов (да, нет)</td><td>65</td>
	<td><%=IB0("T066503")%></td></tr>
    </table></td></tr></table> <!-- format -->
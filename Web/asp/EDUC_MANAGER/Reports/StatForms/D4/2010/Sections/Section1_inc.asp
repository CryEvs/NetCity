<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="right">Код по ОКЕИ: единица - 642; тысяча единиц - 643; квадратный метр - 055; место-698; штука-796; гектар - 059; человек – 792; Мбайт-257</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan=3 colspan=1>Наименование</td>
    <td rowspan=3 valign="top">№<br>строки</td>
	<td colspan=4 valign="center">Городские поселения</td>
	<td colspan=4>Сельская местность</td>
   	<td colspan=4>Городские поселения и сельская местность</td>
</tr>
<tr>
	<td rowspan=2 valign="top">всего</td>
	<td colspan=3 align="middle" valign="top">в том числе</td>
	<td rowspan=2 valign="top">всего</td>
	<td colspan=3 align="middle" valign="top">в том числе</td>
	<td rowspan=2 align="middle" valign="top">всего <br>(сумма <br>гр.3 и 7)</td>
	<td colspan=3 align="middle" valign="top">в том числе</td>
</tr><tr>
	<td align="middle" valign="top">началь-<br>ные<br>школы</td>
	<td align="middle" valign="top">основные <br>школы</td>
    <td align="middle" valign="top">средние <br>(полные) <br>школы</td>
    <td align="middle" valign="top">началь-<br>ные<br>школы</td>
	<td align="middle" valign="top">основные <br>школы</td>
    <td align="middle" valign="top">средние <br>(полные) <br>школы</td>
    <td align="middle" valign="top">началь-<br>ные<br>школы <br>(сумма <br>гр.4 и 8)</td>
	<td align="middle" valign="top">основные <br>школы <br>(сумма <br>гр.5 и 9)</td>
    <td align="middle" valign="top">средние <br>(полные) <br>школы <br>(сумма <br>гр.6 и 10)</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
</tr>
<tr align="middle" valign="center">
<td align="left">Число школ (ед)</td>
<td align="center">01</td>
<%=DrawInputsWithTotals(1,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Общая площадь всех помещений (м2)</td>
<td align="center">02</td>
<%=DrawInputsWithTotals(2,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Количество классных комнат (включая<br>учебные кабинеты и лаборатории) (ед)</td>
<td align="center">03</td>
<%=DrawInputsWithTotals(3,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Их площадь (м2)</td>
<td align="center">04</td>
<%=DrawInputsWithTotals(4,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Число школ, не имеющих никаких<br>мастерских (ед)</td>
<td align="center">05</td>
<%=DrawInputsWithTotals(5,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Число школ, имеющих автомобили<br>(для учебных целей) (ед)</td>
<td align="center">06</td>
<%=DrawInputsWithTotals(6,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в них автомобилей (шт)</td>
<td align="center">07</td>
<%=DrawInputsWithTotals(7,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Число школ, имеющих тракторы<br>(для учебных целей) (ед)</td>
<td align="center">08</td>
<%=DrawInputsWithTotals(8,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в них тракторов (шт)</td>
<td align="center">09</td>
<%=DrawInputsWithTotals(9,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Число школ (ед), имеющих:<br>&nbsp;&nbsp;&nbsp;физкультурный зал</td>
<td align="center">10</td>
<%=DrawInputsWithTotals(10,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;бассейн</td>
<td align="center">11</td>
<%=DrawInputsWithTotals(11,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;музей</td>
<td align="center">12</td>
<%=DrawInputsWithTotals(12,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;учебно-опытный участок</td>
<td align="center">13</td>
<%=DrawInputsWithTotals(13,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;площадь участка (га)</td>
<td align="center">14</td>
<%=DrawInputsWithTotals(14,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;подсобное сельское хозяйство (ед)</td>
<td align="center">15</td>
<%=DrawInputsWithTotals(15,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;площадь хозяйства (га)</td>
<td align="center">16</td>
<%=DrawInputsWithTotals(16,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Число школ, имеющих столовую или<br>буфет - всего (ед)</td>
<td align="center">17</td>
<%=DrawInputsWithTotals(17,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в т. ч. школ, в которых<br>&nbsp;&nbsp;&nbsp;организовано питание в<br>&nbsp;&nbsp;&nbsp;приспособленных помещениях </td>
<td align="center">18</td>
<%=DrawInputsWithTotals(18,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Количество посадочных мест в<br>&nbsp;&nbsp;&nbsp;столовых, буфетах – всего (мест)</td>
<td align="center">19</td>
<%=DrawInputsWithTotals(19,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в т. ч. посадочных мест в<br>&nbsp;&nbsp;&nbsp;приспособленных помещениях</td>
<td align="center">20</td>
<%=DrawInputsWithTotals(20,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Численность обучающихся, пользующихся<br>горячим питанием (чел)</td>
<td align="center">21</td>
<%=DrawInputsWithTotals(21,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Численность обучающихся, имеющих<br>льготное обеспечение горячим<br>питанием (чел)</td>
<td align="center">22</td>
<%=DrawInputsWithTotals(22,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Число школ, имеющих библиотеки<br>(книжный фонд) (ед)</td>
<td align="center">23</td>
<%=DrawInputsWithTotals(23,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в них количество книг (включая<br>&nbsp;&nbsp;&nbsp;школьные учебники), брошюр,<br>&nbsp;&nbsp;&nbsp;журналов (тыс.ед.)</td>
<td align="center">24</td>
<%=DrawInputsWithTotals(24,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в т. ч. школьных учебников (тыс. ед.)</td>
<td align="center">25</td>
<%=DrawInputsWithTotals(25,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Число школ (ед):<br>&nbsp;&nbsp;&nbsp;требующих капитального ремонта</td>
<td align="center">26</td>
<%=DrawInputsWithTotals(26,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в них обучающихся (чел)</td>
<td align="center">27</td>
<%=DrawInputsWithTotals(27,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;находящихся в аварийном состоянии</td>
<td align="center">28</td>
<%=DrawInputsWithTotals(28,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в них обучающихся (чел)</td>
<td align="center">29</td>
<%=DrawInputsWithTotals(29,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;имеющих все виды благоустройства</td>
<td align="center">30</td>
<%=DrawInputsWithTotals(30,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в них обучающихся (чел)</td>
<td align="center">31</td>
<%=DrawInputsWithTotals(31,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Число школ, имеющих (ед):<br>&nbsp;&nbsp;&nbsp;водопровод</td>
<td align="center">32</td>
<%=DrawInputsWithTotals(32,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;центральное отопление</td>
<td align="center">33</td>
<%=DrawInputsWithTotals(33,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;канализацию</td>
<td align="center">34</td>
<%=DrawInputsWithTotals(34,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Число школ, имеющих автотранспортные<br>средства, предназначенные для<br>перевозки учащихся (ед)</td>
<td align="center">35</td>
<%=DrawInputsWithTotals(35,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Количество автотранспортных средств,<br>предназначенных для<br>перевозки учащихся (шт)</td>
<td align="center">36</td>
<%=DrawInputsWithTotals(36,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в них пассажирских мест (мест)</td>
<td align="center">37</td>
<%=DrawInputsWithTotals(37,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Число школ, имеющих кабинеты основ<br>информатики и вычислительной техники (ед)</td>
<td align="center">38</td>
<%=DrawInputsWithTotals(38,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Количество кабинетов основ информатики<br>и вычислительной техники (ед)</td>
<td align="center">39</td>
<%=DrawInputsWithTotals(39,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в них рабочих мест с ЭВМ (мест)</td>
<td align="center">40</td>
<%=DrawInputsWithTotals(40,3,14,1,Array(11,12,13,14))%>
</tr>
<tr align="middle" valign="center">
<td align="left">Количество персональных ЭВМ (ед)</td>
<td align="center">41</td>
<%=DrawInputsWithTotals(41,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;из них (из стр. 41):<br>&nbsp;&nbsp;&nbsp;приобретенные за два<br>&nbsp;&nbsp;&nbsp;последних отчетных периода</td>
<td align="center">42</td>
<%=DrawInputsWithTotals(42,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;используются в учебных целях</td>
<td align="center">43</td>
<%=DrawInputsWithTotals(43,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Количество персональных ЭВМ в<br>составе локальных вычислительных<br>сетей (из стр. 41) (ед)</td>
<td align="center">44</td>
<%=DrawInputsWithTotals(44,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Число учреждений, подключенных к<br>сети Интернет (ед) (сумма стр.46,47,48)<br>(сумма стр.49,50)</td>
<td align="center">45</td>
<%=DrawInputsWithTotals(45,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в том числе (из стр.45) имеют тип<br>&nbsp;&nbsp;&nbsp;подключения:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;модем</td>
<td align="center">46</td>
<%=DrawInputsWithTotals(46,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;выделенная линия</td>
<td align="center">47</td>
<%=DrawInputsWithTotals(47,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спутниковое</td>
<td align="center">48</td>
<%=DrawInputsWithTotals(48,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;в том числе (из стр.45) имеют<br>&nbsp;&nbsp;&nbsp;скорость подключения:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;128 кбит/с и более</td>
<td align="center">49</td>
<%=DrawInputsWithTotals(49,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;менее 128 кбит/с</td>
<td align="center">50</td>
<%=DrawInputsWithTotals(50,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Среднемесячный объем<br>потребляемого трафика (Мбайт)</td>
<td align="center">51</td>
<%=DrawInputsWithTotals(51,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Количество персональных ЭВМ,<br>подключенных к сети Интернет (ед)<br>(из стр. 41)</td>
<td align="center">52</td>
<%=DrawInputsWithTotals(52,3,14,1,Array(11,12,13,14))%>
</tr>

<tr align="middle" valign="center">
<td align="left">Количество учреждений, имеющих<br>адреса электронной почты (ед)</td>
<td align="center">53</td>
<%=DrawInputsWithTotals(53,3,14,1,Array(11,12,13,14))%>
</tr>
</table>
</td></tr><tr><td><br><br>
	<TABLE BORDER=0 CELLPADDING=5>
	<TR>
		<TD NOWRAP>Руководитель<BR>организации<BR></TD>
		<TD ALIGN=CENTER>_______________________<BR>(Ф.И.О.)</TD>
		<TD ALIGN=CENTER>_________________<BR>(подпись)</TD>
		<TD>&nbsp;</TD>
	</TR>
	<TR>
		<TD NOWRAP>Должностное лицо,<BR>ответственное за<BR>составление формы<BR><BR></TD>
		<TD ALIGN=CENTER>_______________________<BR>(должность)</TD>
		<TD ALIGN=CENTER>_______________________<BR>(Ф.И.О.)</TD>
		<TD ALIGN=CENTER>_________________<BR>(подпись)</TD>
	</TR>
	<TR>
		<TD>&nbsp;</TD>
		<TD ALIGN=CENTER>_______________________<BR>(номер контактного<BR>телефона)</TD>
		<TD ALIGN=CENTER COLSPAN=2>"____" __________________ <%=strShoolYearStart%> год<BR>(дата составления<br> документа)</TD>
	</TR>
	</TABLE>
</td></tr><br>
</table> 
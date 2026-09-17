<% ' © 2007-2008 IRTech. All rights reserved.%>
<table><tr><td>
<div style="margin-top:20px; margin-bottom:10px; text-align:center;"><b>5.2 Расходы организации</b></div>
<div align="right">Код по ОКЕИ: тысяча рублей - 384 (с одним десятичным знаком)</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top" rowspan="2">
	<td>Наименование<br />показателей</td>
    <td>№<br />строки</td>
	<td>Фактически</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Расходы организации - всего<br />(сумма строк 02, 04-11)</td>
	<td align="center">01</td>
	<td><%=ITS("T05.20103", 4, 100 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;оплата труда</td>
	<td align="center">02</td>
	<td><%=IT("T05.20203", 4, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из нее:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;педагогического персонала<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(без совместителей)</td>
	<td align="center">03</td>
	<td><%=IT("T05.20303", 4, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;начисления на оплату труда</td>
	<td align="center">04</td>
	<td><%=IT("T05.20403", 4, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;питание</td>
	<td align="center">05</td>
	<td><%=IT("T05.20503", 4, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;услуги связи</td>
	<td align="center">06</td>
	<td><%=IT("T05.20603", 4, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;транспортные услуги</td>
	<td align="center">07</td>
	<td><%=IT("T05.20703", 4, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;коммунальные услуги</td>
	<td align="center">08</td>
	<td><%=IT("T05.20803", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;арендная плата за пользование<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;имуществом</td>
	<td align="center">09</td>
	<td><%=IT("T05.20903", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;услуги по содержанию имущества</td>
	<td align="center">10</td>
	<td><%=IT("T05.21003", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;прочие затраты</td>
	<td align="center">11</td>
	<td><%=IT("T05.21103", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Инвестиции, направленные на<br/>приобретение основных фондов</td>
	<td align="center">12</td>
	<td><%=IT("T05.21203", 4, 10 )%></td>
</tr>
</table>
</td></tr>
</table> <!-- format -->
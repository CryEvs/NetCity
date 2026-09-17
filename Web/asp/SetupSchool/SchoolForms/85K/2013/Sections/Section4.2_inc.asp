<% ' © 2007-2012 IRTech. All rights reserved.%>
<table><tr><td>
<div style="margin-top:20px; margin-bottom:10px; text-align:center;"><b>4.2 Техническое состояние зданий дошкольной образовательной организации. Электронные ресурсы</b></div>
<div align="right">Код по ОКЕИ: единица - 642</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top" rowspan="2">
	<td>Наименование<br />показателей</td>
    <td>№<br />строки</td>
	<td>Да - 1; Нет - 0</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Требует капитального ремонта</td>
	<td align="center">01</td>
	<td><%=IB2("T04.20103")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Находится в аварийном состоянии</td>
	<td align="center">02</td>
	<td><%=IB2("T04.20203")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Имеет:<BR>&nbsp;&nbsp;&nbsp;все виды благоустройства </td>
	<td align="center">03</td>
	<td><%=IB2("T04.20303")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;отопление</td>
	<td align="center">04</td>
	<td><%=IB2("T04.20403")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;водоснабжение</td>
	<td align="center">05</td>
	<td><%=IB2("T04.20503")%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;канализацию</td>
	<td align="center">06</td>
	<td><%=IB2("T04.20603")%></td>
</tr>
</table>
</td></tr>

<tr><td>
&nbsp;&nbsp;&nbsp;Число зданий организации - всего (07)&nbsp;<%=IT("T04.20703", 4, 5 )%><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;находятся в аварийном состоянии (08)&nbsp;<%=IT("T04.20803", 4, 5 )%><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;требуют капитального ремонта (09)&nbsp;<%=IT("T04.20903", 4, 5 )%><br />

&nbsp;&nbsp;&nbsp;Число персональных компьютеров (10)&nbsp;<%=IT("T04.21003", 4, 5 )%><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них доступны для использования детьми (11)&nbsp;<%=IT("T04.21103", 4, 5 )%><br />
&nbsp;&nbsp;&nbsp;Число компьютеров, имеющих доступ к сети Интернет (12)&nbsp;<%=IT("T04.21203", 4, 5 )%><br />
&nbsp;&nbsp;&nbsp;Наличие адреса электронной почты (укажите соответсвующий код: да - "1"; нет - "0") (13)&nbsp;<%=IB2("T04.21303")%> <br />
&nbsp;&nbsp;&nbsp;Дошкольная образовательная организация (укажите соответсвующий код: да - "1"; нет - "0"):<br />
&nbsp;&nbsp;&nbsp;имеет собственный сайт в сети Интернет (14)&nbsp;<%=IB2("T04.21403")%>,<br />
&nbsp;&nbsp;&nbsp;предоставляет на своем сайте нормативно закрепленный перечень сведений о своей деятельности (15)&nbsp;<%=IT("T04.21503", 4, 5 )%>.

</td></tr>
</table> <!-- format -->
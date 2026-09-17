<% ' © 2007-2008 IRTech. All rights reserved.
%>
<tr><td>
<div align="center" style="margin-top:20px; margin-bottom:10px;"><b>2.3. Посещаемость учреждения</b></div>
<div align="right">Код по ОКЕИ: единица - 642</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
	<td rowspan="2">Наименование показателей</td>
    <td rowspan="2">№<br>строки</td>
	<td rowspan="2">Всего</td>
	<td>в том числе воспитанники в возрасте:</td>
</tr>
<tr align="middle" valign="center">
    <td>3 года и старше</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr align="middle" valign="center">
	<td align="left">Число дней, проведенных воспитанниками в группах</td>
	<td>01</td>
	<td><%=IT("T02.30103", 4, 5 )%></td>
	<td><%=IT("T02.30104", 4, 5 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число дней, пропущенных воспитанниками<br />(сумма строк 03,04)</td>
	<td>02</td>
	<td><%=ITS("T02.30203", 4, 5 )%></td>
	<td><%=ITS("T02.30204", 4, 5 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>&nbsp;&nbsp;&nbsp;по болезни воспитанников</td>
	<td>03</td>
	<td><%=IT("T02.30303", 4, 5 )%></td>
	<td><%=IT("T02.30304", 4, 5 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;по другим причинам</td>
	<td>04</td>
	<td><%=IT("T02.30403", 4, 5 )%></td>
	<td><%=IT("T02.30404", 4, 5 )%></td>
</tr>
</table>
</td></tr>
<tr><td><br>
Число дней работы учреждения за период с начала прошлого года (05)&nbsp;&nbsp;<%=IT("T02.305", 4, 5 )%> (код по ОКЕИ: сутки - 359)
</td></tr>
</table> <!-- format -->
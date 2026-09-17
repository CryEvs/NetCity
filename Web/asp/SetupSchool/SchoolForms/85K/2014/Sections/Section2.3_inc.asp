<% ' © 2007-2012 IRTech. All rights reserved.
%>
<tr><td>
<div align="center" style="margin-top:20px; margin-bottom:10px;"><b>2.3. Посещаемость организаций</b></div>
<div align="right">Код по ОКЕИ: человеко-день - 540</div>
<table Class="ThinTable" ALIGN="left" border=1 cellpadding=3 cellspacing=0 width="100%">
<tr align="middle" valign="center">
	<td>Наименование показателей</td>
    <td>№<br>строки</td>
	<td>Всего</td>
	<td>в том числе воспитанниками в возрасте<br /> 3 года и старше</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr align="middle" valign="center">
	<td align="left">Число дней, проведенных воспитанниками в группах</td>
	<td>01</td>
	<%=DrawInputsEx("02.3", 1, 3, 4, 4, 6)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число дней, пропущенных воспитанниками, - всего<br /> (сумма строк 03, 04)</td>
	<td>02</td>
	<%=DrawInputsWithTotals(2, 3, 4, "02.3", Array(3, 4))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>&nbsp;&nbsp;&nbsp;по болезни воспитанников</td>
	<td>03</td>
	<%=DrawInputsEx("02.3", 3, 3, 4, 4, 6)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;по другим причинам</td>
	<td>04</td>
	<%=DrawInputsEx("02.3", 4, 3, 4, 4, 6)%>
</tr>
</table></td></tr><tr><td>
<br/>
<div align="left">Число дней работы организации за период с начала отчетного года (05)  <%=IT(GetFieldName("02.3", 5, 3),4, 5 )%> (код по ОКЕИ: сутки – 359)</div>
</td></tr>

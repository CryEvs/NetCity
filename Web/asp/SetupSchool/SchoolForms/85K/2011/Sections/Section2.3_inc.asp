<% ' © 2007-2012 IRTech. All rights reserved.
%>
<tr><td>
<div align="center" style="margin-top:20px; margin-bottom:10px;"><b>2.3. Посещаемость учреждения</b></div>
<div align="right">Код по ОКЕИ: сутки - 359</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
	<td rowspan="2">Наименование показателей</td>
    <td rowspan="2">№<br>строки</td>
	<td rowspan="2">Всего</td>
	<td>в том числе детьми  в возрасте:</td>
</tr>
<tr align="middle" valign="center">
    <td>3 года и старше</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr align="middle" valign="center">
	<td align="left">Число дней, проведенных детьми  в группах</td>
	<td>01</td>
	<%=DrawInputs("02.3", 1, 3, 4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число дней, пропущенных детьми <br />(сумма строк 03,04)</td>
	<td>02</td>
	<%=DrawInputsWithTotals(2, 3, 4, "02.3", Array(3, 4))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>&nbsp;&nbsp;&nbsp;по болезни воспитанников</td>
	<td>03</td>
	<%=DrawInputs("02.3", 3, 3, 4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;по другим причинам</td>
	<td>04</td>
	<%=DrawInputs("02.3", 4, 3, 4)%>
</tr>
</table></td></tr><tr><td>
<br/>
<div align="left">Число дней работы учреждения за период с начала отчетного года (05)  <%=IT(GetFieldName("02.3", 5, 3),4, 5 )%> (код по ОКЕИ: сутки – 359)</div></td></tr><tr><td><br/></td></tr><!-- format -->

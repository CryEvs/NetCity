<% ' © 2007-2017 IRTech. All rights reserved.
%>
<tr><td>
<div align="center" style="margin-top:20px; margin-bottom:10px;"><b>2.4. Язык обучения и воспитания</b></div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
<tr align="middle" valign="top">
	<td>Наименование показателей</td>
	<td>№<br />строки</td>
    <td>Код языка<br>по ОКИН</td>
	<td>Численность воспитанников,<br />человек</td>
</tr>
<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность воспитанников - всего<br />(сумма строк 02-07)</td>
	<td>01</td>
	<td>X</td>
	<%=DrawInputsWithTotals(1, 4, 4, "02.4", Array(4))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;в том числе обучалось и воспитывалось на языках<br />&nbsp;&nbsp;&nbsp;&nbsp;народов Российской Федерации</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.40201", 40, 70 )%></td>
	<td>02</td>
	<%=DrawInputs("02.4", 2, 3, 4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.40301", 40, 70 )%></td>
	<td>03</td>
	<%=DrawInputs("02.4", 3, 3, 4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.40401", 40, 70 )%></td>
	<td>04</td>
	<%=DrawInputs("02.4", 4, 3, 4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.40501", 40, 70 )%></td>
	<td>05</td>
	<%=DrawInputs("02.4", 5, 3, 4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.40601", 40, 70 )%></td>
	<td>06</td>
	<%=DrawInputs("02.4", 6, 3, 4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.40701", 40, 70 )%></td>
	<td>07</td>
	<%=DrawInputs("02.4", 7, 3, 4)%>
</tr>
</table></td></tr></table>
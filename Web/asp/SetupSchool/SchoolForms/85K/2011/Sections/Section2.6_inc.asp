<% ' © 2007-2008 IRTech. All rights reserved.
%>
<tr><td>
<div style="margin-top:20px; margin-bottom:10px; text-align:center;"><b>Раздел 2.6. Язык обучения и воспитания</b></div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top">
	<td>Наименование показателей</td>
	<td>№<br />строки</td>
    <td>Код языка<br>по ОКИН</td>
	<td>Численность воспитанников,<br />человек</td>
	<td>Из них обучающихся по<br />программе первого класса</td>
</tr>
<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Всего воспитанников<br />(сумма строк 02-07)</td>
	<td>01</td>
	<td>Х</td>
	<%=DrawInputsWithTotals(1, 4, 5, "02.6", Array(4, 5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;в том числе обучалось и воспитывалось на языках<br />&nbsp;&nbsp;&nbsp;&nbsp;(народов Российской Федерации)</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.60201", 40, 70 )%></td>
	<td>02</td>
	<%=DrawInputs("02.6", 2, 3, 5)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.60301", 40, 70 )%></td>
	<td>03</td>
	<%=DrawInputs("02.6", 3, 3, 5)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.60401", 40, 70 )%></td>
	<td>04</td>
	<%=DrawInputs("02.6", 4, 3, 5)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.60501", 40, 70 )%></td>
	<td>05</td>
	<%=DrawInputs("02.6", 5, 3, 5)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.60601", 40, 70 )%></td>
	<td>06</td>
	<%=DrawInputs("02.6", 6, 3, 5)%>
</tr>
<tr align="middle" valign="center">
	<td align="left"><%=IT("T02.60701", 40, 70 )%></td>
	<td>07</td>
	<%=DrawInputs("02.6", 7, 3, 5)%>
</tr>
</table></td></tr></table>
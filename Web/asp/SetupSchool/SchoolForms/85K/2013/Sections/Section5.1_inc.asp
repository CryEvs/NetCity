<% ' © 2007-2012 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center" style="margin:10px;"><b>Раздел 5. Финансово-экономическая деятельность организации</b></div>
<div align="center" style="margin-bottom:20px;"><b>5.1. Распределение объема средств организации<br />по источникам их получения</b></div>
<div align="right">Код по ОКЕИ: тысяча рублей - 384 (с одним десятичным знаком)</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top" rowspan="2">
	<td>Наименование показателей</td>
    <td>№<br />строки</td>
	<td>Фактически</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Объем средств организации - всего<br />(сумма строк 02, 06)</td>
	<td align="center">01</td>
	<td><%=ITS("T05.10103", 4, 100 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br />&nbsp;&nbsp;&nbsp;&nbsp;бюджетные средства - всего<br />&nbsp;&nbsp;&nbsp;&nbsp;(сумма строк 03-05)</td>
	<td align="center">02</td>
	<td><%=ITS("T05.10203", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе бюджета:</td>
	<td align="center">&nbsp;</td>
	<td>&nbsp;</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;федерального</td>
	<td align="center">03</td>
	<td><%=IT("T05.10303", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;субъекта Российской Федерации</td>
	<td align="center">04</td>
	<td><%=IT("T05.10403", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;местного</td>
	<td align="center">05</td>
	<td><%=IT("T05.10503", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;внебюджетные средства<br />&nbsp;&nbsp;&nbsp;&nbsp;(сумма строк 07, 08, 10-12)</td>
	<td align="center">06</td>
	<td><%=ITS("T05.10603", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе средства:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;организаций</td>
	<td align="center">07</td>
	<td><%=IT("T05.10703", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;населения</td>
	<td align="center">08</td>
	<td><%=IT("T05.10803", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них родительская плата</td>
	<td align="center">09</td>
	<td><%=IT("T05.10903", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;внебюджетных фондов</td>
	<td align="center">10</td>
	<td><%=IT("T05.11003", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;иностранных источников</td>
	<td align="center">11</td>
	<td><%=IT("T05.11103", 4, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;другие внебюджетные средства</td>
	<td align="center">12</td>
	<td><%=IT("T05.11203", 4, 10 )%></td>
</tr>
	</table>
</td></tr></table>
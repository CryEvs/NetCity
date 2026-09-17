<% ' © 2007-2008 IRTech. All rights reserved.
%>
<tr><td align="middle">
<!-- таб.2 -->
	<br/><br/><br/>
	<b>Раздел 2. Сведения об источниках получения средств учреждением</b><br/>
			<div align="right">Коды по ОКЕИ: тысяча рублей - 384</div>	
</td></tr>
<tr><td>

<TABLE id="TAvtoCalc2" Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="998px">

<tr align="middle" valign="center">
	<td>Наименование</td><td>№<br/>строки</td><td>Фактически про-<br/>финансировано</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Объем финансирования - всего (сумма строк 02, 03)</td><td>01</td><td><%=ITS("T020103", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Текущее бюджетное финансирование</td><td>02</td><td><%=IT("T020203", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Внебюджетные источники финансирования - всего (сумма строк 04 - 08)</td><td>03</td><td><%=ITS("T020303", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;в том числе:<br/>&nbsp;&nbsp;остаток средств на начало отчетного периода</td>
	<td >04</td><td><%=IT("T020403", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;доходы отреализации платных дополнительных образовательных услуг</td><td>05</td><td><%=IT("T020503", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;доходы от производственной деятельности</td><td>06</td><td><%=IT("T020603", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;благотворительные средства</td><td>07</td><td><%=IT("T020703", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;другие внебюджетные источники</td><td>08</td><td><%=IT("T020803", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Остаток внебюджетных средств на конец отчетного периода</td><td>09</td><td><%=IT("T020903", 5, 10 )%></td>
</tr>
</TABLE>

<!-- end of таб.2 -->
</td></tr>

</table> <!-- format -->
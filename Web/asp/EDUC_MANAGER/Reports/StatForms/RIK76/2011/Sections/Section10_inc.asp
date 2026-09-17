<% ' © 2007-2008 IRTech. All rights reserved.
%>
<tr><td><br/>
<div align="center"><b>Раздел 10. Кружковая работа обучающихся за <%=strShoolPrevYearStart%>/<%=strShoolPrevYearEnd%> учебный год</b></div><br>
<div align="right">Коды по ОКЕИ: единица - 642, человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan=2>Наименование</td>
    <td rowspan=2>№<br>строки</td>
	<td colspan=2>Городские<br>поселения</td>
	<td colspan=2>Сельская<br>местность</td>
   	<td colspan=2>Итого</td>
</tr>
<tr align="middle" valign="center" rowspan="2">
	<td>Всего</td>
    <td>в т.ч. платные</td>
	<td>Всего</td>
    <td>в т.ч. платные</td>
	<td>Всего</td>
    <td>в т.ч. платные</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
<tr align="middle" valign="center">
	<td align="left">Число технических кружков</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в них обучающихся</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число эколого-биологических кружков</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в них обучающихся</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число туристско-краеведческих кружков</td>
	<td align="center">05</td>
	<%=DrawInputsWithTotals(5,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в них обучающихся</td>
	<td align="center">06</td>
	<%=DrawInputsWithTotals(6,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число спортивных кружков</td>
	<td align="center">07</td>
	<%=DrawInputsWithTotals(7,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в них обучающихся</td>
	<td align="center">08</td>
	<%=DrawInputsWithTotals(8,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число кружков художественного творчества</td>
	<td align="center">09</td>
	<%=DrawInputsWithTotals(9,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в них обучающихся</td>
	<td align="center">10</td>
	<%=DrawInputsWithTotals(10,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число других кружков</td>
	<td align="center">11</td>
	<%=DrawInputsWithTotals(11,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в них обучающихся</td>
	<td align="center">12</td>
	<%=DrawInputsWithTotals(12,3,8,10,IIF(IsMns(), Array(3,4,5,6,7,8), Array(7,8)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Всего кружков<br />(сумма строк 01, 03, 05, 07, 09, 11)</td>
	<td align="center">13</td>
	<%=DrawInputsWithTotals(13,3,8,10,Array(3,4,5,6,7,8))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в них всего обучающихся<br />&nbsp;&nbsp;&nbsp;(сумма строк 02, 04, 06, 08, 10, 12)</td>
	<td align="center">14</td>
	<%=DrawInputsWithTotals(14,3,8,10,Array(3,4,5,6,7,8))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.14) занимаются в 2 и более<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;кружках</td>
	<td align="center">15</td>
	<%=DrawInputs(10,15,3,8)%>
</tr>
</table><br/></td></tr></table>

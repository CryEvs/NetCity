<% ' © 2007-2012 IRTech. All rights reserved.
%><tr><td><br/>
<div align="center"><b>Раздел 8. Сведения об органах самоуправления</b></div>
<div align="right">Код по ОКЕИ: единица - 642</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td>Наименование</td>
    <td>№<br>строки</td>
   	<td>Итого</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td></tr>
<tr align="middle" valign="center">
	<td align="left">Число образовательных учреждений, имеющих: органы общественного самоуправления - всего</td>
	<td>01</td>
	<%=DrawInputsWithTotals(1,3,3,8,IIF(IsMns(),Array(3),Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в том числе попечительский совет</td>
	<td>02</td>
	<%=DrawInputsWithTotals(2,3,3,8,IIF(IsMns(),Array(3),Array()))%>
</tr>
</table><br/></td></tr></table>
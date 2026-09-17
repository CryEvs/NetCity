<% ' © 2007-2012 IRTech. All rights reserved.
%>
<tr><td>
<div style="margin-top:20px; margin-bottom:10px; text-align:center;"><b>2.8. Число кружков, секций и численность обучающихся в них</b></div>
<div align="right">Коды по ОКЕИ: человек - 792; единица - 642</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
	<td rowspan="2">Направления дополнительного<br /> образования детей</td>
    <td rowspan="2">№<br />строки</td>
    <td colspan="2">Число кружков, секций, единиц</td>
   	<td colspan="3">Численность обучающихся, человек</td>
</tr>
<tr align="middle" valign="center">
	<td>Всего</td>
    <td>в том числе<br />платных</td>
    <td>Всего</td>
    <td>в том числе<br /> на платной основе</td>
    <td>из гр.5<br/>девочки</td>
</tr><tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Всего (сумма строк 02-08)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1, 3, 7, "02.8", Array(3,4,5,6,7))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе<br/>&nbsp;&nbsp;&nbsp;&nbsp;художественной</td>
	<td align="center">02</td>
	<%=DrawInputs("02.8", 2, 3, 7)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;физкультурно-спортивной</td>
	<td align="center">03</td>
	<%=DrawInputs("02.8", 3, 3, 7)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;технической</td>
	<td align="center">04</td>
	<%=DrawInputs("02.8", 4, 3, 7)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;туристско-краеведческой</td>
	<td align="center">05</td>
	<%=DrawInputs("02.8", 5, 3, 7)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;социально-педагогической</td>
	<td align="center">06</td>
	<%=DrawInputs("02.8", 6, 3, 7)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;естественнонаучной</td>
	<td align="center">07</td>
	<%=DrawInputs("02.8", 7, 3, 7)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;другие направления дополни-<br />&nbsp;&nbsp;&nbsp;&nbsp;тельного образования детей</td>
	<td align="center">08</td>
	<%=DrawInputs("02.8", 8, 3, 7)%>
</tr>

</table></td></tr><tr><td><br/></td></tr></table>
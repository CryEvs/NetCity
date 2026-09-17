<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><tr><td>
<div align="center"><b>Раздел 11. Сведения о дошкольных группах, группах продленного дня и интернатах при школах</b></div>
<div align="right">Коды по ОКЕИ: единица - 642, человек - 792</div></td></tr><tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td align="center">Наименование</td>
    <td>№<br>строки</td>
	<td>Городские поселения</td>
	<td>Сельская местность</td>
   	<td>Итого</td>
</tr>
<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число общеобразовательных учреждений, имеющих дошкольные группы (ед)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,5,11, IIF(IsMns(), Array(3,4,5), Array(5)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в них:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;количество дошкольных групп (ед)</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,5,11, IIF(IsMns(), Array(3,4,5), Array(5)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;численность детей в дошкольных группах(чел)</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3,3,5,11, Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число образовательных учреждений, имеющих при учреждении интернат (ед)</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4,3,5,11, IIF(IsMns(), Array(3,4,5), Array(5)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;численность воспитанников в этих интернатах(чел)</td>
	<td align="center">05</td>
	<%=DrawInputsWithTotals(5,3,5,11, Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Количество групп продленного дня (ед)</td>
	<td align="center">06</td>
	<%=DrawInputsWithTotals(6,3,5,11, IIF(IsMns(), Array(3,4,5), Array(5)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них (из стр.06) для обучающихся 1-4 классов</td>
	<td align="center">07</td>
	<%=DrawInputsWithTotals(7,3,5,11, IIF(IsMns(), Array(3,4,5), Array(5)))%>
</tr>
</table></td></tr><tr><td>
<div align="left">Примечание: в строках 04, 05 показаны образователные учреждения, не имеющие статуса школы-интерната</div></td></tr></table>

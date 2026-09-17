<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block">
	<tr><td><div align="center"><b>Раздел 2. Сведения о классах, классах-комплектах</b><br>(по учреждениям, указанным в строках 02, 03, 11, 12 раздела 1.1)</div></td></tr>
	<tr><td><div align="right">Код по ОКЕИ: единица - 642</div></td></tr>
<tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td>Наименование</td>
    <td>№<br>строки</td>
	<td>Городские&nbsp;поселения</td>
	<td>Сельская&nbsp;местность</td>
   	<td>Итого<br>(сумма граф 3, 4)</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr align="middle" valign="center">
	<td align="left">Число 1-3 (4) и подготовительных классов и классов-комплектов</td>
	<td>01</td>
	<%=DrawInputsWithTotals(1,3,5,2,IIF(IsMns(),Array(3,4,5),Array(5)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число 5-9 классов и классов-комплектов</td>
	<td>02</td>
	<%=DrawInputsWithTotals(2,3,5,2,IIF(IsMns(),Array(3,4,5),Array(5)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число 10-11(12) классов и классов-комплектов</td>
	<td>03</td>
	<%=DrawInputsWithTotals(3,3,5,2,IIF(IsMns(),Array(3,4,5),Array(5)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Всего классов и классов-комплектов (сумма строк 01-03)</td>
	<td>04</td>
	<%=DrawInputsWithTotals(4,3,5,2,Array(3,4,5))%>
</tr>
</table>
</td></tr>
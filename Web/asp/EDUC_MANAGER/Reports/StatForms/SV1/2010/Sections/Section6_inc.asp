<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td>
<div align="center">6. Распределение обучающихся по возрасту</div>
<div align="right">Код по ОКЕИ: человек-792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
	<td rowspan="4">Наименование</td>
    <td rowspan="4">№<br>строки</td>
	<td rowspan="4">Всего<br>(сумма<br>граф 4-7)</td>
	<td colspan="4">из них в возрасте (число полных лет на 1 января <%=strShoolYearEnd%> года)</td>
</tr>
<tr align="middle" valign="center">
	<td >15 лет и<br />моложе</td>
	<td>16-17 лет</td>
	<td>18-29 лет</td>
	<td>30 лет и<br />старше</td>
</tr>
<tr align="middle" valign="center">
	<td colspan="4">годы рождения</td>
</tr>
<tr align="middle" valign="center">
	<td><%=CStr(CLng(strShoolYearEnd)-15)%> и<br>последующие<br>годы</td><td><%=CStr(CLng(strShoolYearEnd)-16)%>-<%=CStr(CLng(strShoolYearEnd)-17)%> г.г.</td><td><%=CStr(CLng(strShoolYearEnd)-18)%>-<%=CStr(CLng(strShoolYearEnd)-29)%> г.г.</td><td><%=CStr(CLng(strShoolYearEnd)-30)%> год и ранее</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
<tr align="middle" valign="center">
	<td align="left">Всего обучающихся</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,7,6,Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">из них обучающихся<br />в 10-12 (10-16) классах</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,7,6,Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся, окончивших среднюю<br />(полную) общую школу и получивших аттестат<br />о среднем (полном) общем образовании (сумма строк 03а; 03б)</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3,3,7,6,Array(3))%>
</tr>
</table>
</td></tr>
<tr><td><br>
_______<br>
Из общей численности (стр.01, гр.3) – женщины (04) <%=IT("T0604",4,5)%> (чел)
</td></tr>

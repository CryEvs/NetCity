<% ' © 2007-2008 IRTech. All rights reserved.
%>
<!-- таб.V -->
<br><br>V. Распределение обучающихся по возрасту
<br><br>
	<div align="right">Код по ОКЕИ: человек - 792</div>
</td></tr>
<tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="1" width="100%">
<tr align="center" valign="middle">
	<td rowspan="3">Наименование</td><td rowspan="3">№<br>строки</td><td rowspan="3">Всего обучаю-<br>щихся<br>(сумма<br>граф 4-7)</td><td colspan="4">Из них в возрасте (число полных лет на I января <%=strShoolYearEnd%> года)</td>
</tr>
<tr align="center" valign="middle">
	<td>15 лет и моложе</td><td>16-17 лет</td><td>18-29 лет</td><td>30 лет и старше</td>
</tr>
<tr align="center" valign="middle">
	<td><%=CStr(CLng(strShoolYearEnd)-15)%> и<br>последующие<br>годы</td><td><%=CStr(CLng(strShoolYearEnd)-16)%>-<%=CStr(CLng(strShoolYearEnd)-17)%> г.г.</td><td><%=CStr(CLng(strShoolYearEnd)-18)%>-<%=CStr(CLng(strShoolYearEnd)-29)%> г.г.</td><td><%=CStr(CLng(strShoolYearEnd)-30)%> год и ранее</td>
</tr>
<tr align="center" valign="middle"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
<tr align="center" valign="middle">
	<td align="left">Всего обучающихся</td>
	<td>01</td><%
		for i = 3 to 7
			if i=3 then
				response.write("<td>" & ITS(GetOshFieldName(5, 1, i), 4, 5 ) & " *)</td>")
			else
				response.write("<td>" & IT(GetOshFieldName(5, 1, i), 4, 5 ) & "</td>")
			end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;из них обучающихся в 10-12 (16) классах</td>
	<td>02</td><%
		for i = 3 to 7
			if i=3 then
				response.write("<td>" & ITS(GetOshFieldName(5, 2, i), 4, 5 ) & "</td>")
			else
				response.write("<td>" & IT(GetOshFieldName(5, 2, i), 4, 5 ) & "</td>")
			end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Численность обучающихся, окончивших среднюю (полную)<br>общую школу и получивших аттестат о среднем (полном)<br>общем образовании (сумма стр. 03а, 03б разд. IV)</td>
	<td>03</td><%
		for i = 3 to 7
			if i=3 then
				response.write("<td>" & ITS(GetOshFieldName(5, 3, i), 4, 5 ) & "</td>")
			else
				response.write("<td>" & IT(GetOshFieldName(5, 3, i), 4, 5 ) & "</td>")
			end if
		next%>
</tr>
</TABLE>
<!-- End Of таб.V -->
</td></tr>
<tr><td>
<br><br>*) Из общей численности  (гр. 3 стр. 01) - женщин 04  <%=IT("T0504", 4, 5 )%>
</td></tr>
</table> <!-- format -->

<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="right">Коды по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td>Наименование</td>
    <td>№<br>строки</td>
	<td>1-4<br>классы</td>
	<td>5-9<br>классы</td>
   	<td>10-11 (12)<br>классы</td>
    <td>Итого<br>(сумма гр. 3, 4, 5)</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
<tr align="middle" valign="center">
	<td align="left">Всего выбыло (сумма строк 02-06, 08-15)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,6,1,Array(3,4,5,6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>&nbsp;&nbsp;&nbsp;в другие дневные общеобразовательные учреждения</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в специальные (коррекционные) учреждения и классы для<br>&nbsp;&nbsp;&nbsp;детей с отклонениями в развитии</td>
	<td align="center">03</td>
 	<%=DrawInputsWithTotals(3,3,4,1,Array())%>
    <td align="center">X</td>
    <%=DrawInputsWithTotals(3,6,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в вечерние (сменные) общеобразовательные учреждения</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в учреждения среднего профессионального образования<br>&nbsp;&nbsp;&nbsp;(дневное обучение)</td>
	<td align="center">05</td>
    <td align="center">X</td>
	<%=DrawInputsWithTotals(5,4,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в учреждения начального профессионального образования</td>
	<td align="center">06</td>
	<%=DrawInputsWithTotals(6,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе в группах, не осуществляющих<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;общеобразовательную подготовку</td>
	<td align="center">07</td>
	<%=DrawInputsWithTotals(7,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;на различные курсы</td>
	<td align="center">08</td>
    <td align=""center"">X</td>
	<%=DrawInputsWithTotals(8,4,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;исключено за недостойное поведение</td>
	<td align="center">09</td>
	<%=DrawInputsWithTotals(9,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;длительная болезнь</td>
	<td align="center">10</td>
	<%=DrawInputsWithTotals(10,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в специальные учебно-воспитательные учреждения и<br>&nbsp;&nbsp;&nbsp;воспитательно-трудовые колонии</td>
	<td align="center">11</td>
	<%=DrawInputsWithTotals(11,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;поступили на работу и не продолжают обучение</td>
	<td align="center">12</td>
	<%=DrawInputsWithTotals(12,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;не работают и не учатся</td>
	<td align="center">13</td>
	<%=DrawInputsWithTotals(13,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;отчислено по неуспеваемости</td>
	<td align="center">14</td>
	<%=DrawInputsWithTotals(14,3,6,1,Array(6))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;другие причины</td>
	<td align="center">15</td>
	<%=DrawInputsWithTotals(15,3,6,1,Array(6))%>
</tr>
</table>
</td></tr>
<tr><td><br><br>
	<TABLE BORDER=0 CELLPADDING=5>
	<TR>
		<TD NOWRAP>Руководитель<BR>организации<BR></TD>
		<TD ALIGN=CENTER>_______________________<BR>(Ф.И.О.)</TD>
		<TD ALIGN=CENTER>_________________<BR>(подпись)</TD>
		<TD>&nbsp;</TD>
	</TR>
	<TR>
		<TD NOWRAP>Должностное лицо,<BR>ответственное за<BR>составление формы<BR><BR></TD>
		<TD ALIGN=CENTER>_______________________<BR>(должность)</TD>
		<TD ALIGN=CENTER>_______________________<BR>(Ф.И.О.)</TD>
		<TD ALIGN=CENTER>_________________<BR>(подпись)</TD>
	</TR>
	<TR>
		<TD>&nbsp;</TD>
		<TD ALIGN=CENTER>_______________________<BR>(номер контактного<BR>телефона)</TD>
		<TD ALIGN=CENTER COLSPAN=2>"____" __________________ <%=strShoolYearStart%> год<BR>(дата составления<br> документа)</TD>
	</TR>
	</TABLE>
</td></tr>
</table> <!-- format -->

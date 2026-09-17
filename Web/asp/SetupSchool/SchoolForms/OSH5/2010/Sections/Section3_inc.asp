<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<br><br>
<!-- таб.III -->
	III. Число классов и в них обучающихся<br><br>
	<div align="right">Коды по ОКЕИ: единица - 642; человек - 792</div>
</td></tr>
<tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="2" width="100%">
<tr align="center" valign="middle">
	<td rowspan="2">Наименование</td><td rowspan="2">№<br>строки</td><td colspan="2">Очная форма обучения</td><td colspan="2">Заочная форма обучения</td><td>Форма обуче-<br>ния экстернат</td>
	<td rowspan="2">Численность<br>обучающихся по<br>очной, заочной и<br>экстернатной<br>формам обучения<br>(чел)</td>
	<td colspan="2">Из общей численности<br>обучающихся (гр. 8)</td>
</tr>
<tr align="center" valign="middle"><td>число<br>классов<br>(ед)</td><td>численность<br>обучающихся<br>по спискам<br>вместе с но-<br>вым приемом<br>(чел)</td><td>число<br>групп<br>(ед)</td><td>численность<br>обучающихся<br>по спискам<br>вместе с но-<br>вым приемом<br>(чел)</td><td>Численность<br>обучающихся<br>по спискам<br>вместе с новым<br>приемом (чел)</td><td>индивидуально<br>обучающихся</td><td>второгодников</td></tr>
<tr align="center" valign="middle"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
<tr align="center" valign="middle">
	<td align="left">1-4 классы</td>
	<td>01</td><%dim i, sCol
		for i = 3 to 10
		  if i=8 then 
		    response.write("<td>" & ITS(GetOshFieldName(3, 1, i), 4, 5 ) & "</td>")
		  else 
			response.write("<td>" & IT(GetOshFieldName(3, 1, i), 4, 5 ) & "</td>")
		  end if	
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">5-8 классы</td>
	<td>02</td><%
		for i = 3 to 10
		    if i=8 then 
		    response.write("<td>" & ITS(GetOshFieldName(3, 2, i), 4, 5 ) & "</td>")
		    else 
			response.write("<td>" & IT(GetOshFieldName(3, 2, i), 4, 5 ) & "</td>")
		    end if 
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">9 класс</td>
	<td>03</td><%
		for i = 3 to 10
		if i=8 then 
		    response.write("<td>" & ITS(GetOshFieldName(3, 3, i), 4, 5 ) & "</td>")
		  else 
			response.write("<td>" & IT(GetOshFieldName(3, 3, i), 4, 5 ) & "</td>")                
		end if 
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">10 класс</td>
	<td>04</td><%
		for i = 3 to 10
			if i=8 then
				response.write("<td align=""left"">1) " & ITS(GetOshFieldName(3, 4, i), 4, 5 ) & "</td>")
			else
				response.write("<td>" & IT(GetOshFieldName(3, 4, i), 4, 5 ) & "</td>")
			end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">11-12 классы</td>
	<td>05</td><%
		for i = 3 to 10
		if i=8 then 
		    response.write("<td>" & ITS(GetOshFieldName(3, 5, i), 4, 5 ) & "</td>")
		  else 
			response.write("<td>" & IT(GetOshFieldName(3, 5, i), 4, 5 ) & "</td>")
		end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">13-16 классы</td>
	<td>06</td><%
		for i = 3 to 10
		if i=8 then 
		    response.write("<td>" & ITS(GetOshFieldName(3, 6, i), 4, 5 ) & "</td>")
		elseif i=7 then 
			response.write("<td>X</td>")
		else
			response.write("<td>" & IT(GetOshFieldName(3, 6, i), 4, 5 ) & "</td>")
		end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Всего (сумма стр. 01-06)</td>
	<td>07</td><%
		for i = 3 to 10
			if i=8 then
				response.write("<td align=""left"">2) ")
			elseif i=6 then
				response.write("<td align=""left"">3) ")
			else
				response.write("<td>")
			end if
			response.write(ITS(GetOshFieldName(3, 7 , i), 5, 6 ) & "</td>")
		next%>
</tr>
</TABLE>
<!-- End Of таб.III -->
</td></tr>
<tr><td>
	<br><br>
	<table border="0" cellpadding="0" width="80%" align="left">
	<tr><td colspan="4">1)Из общей численности обучающихся 10 класса (графа 8 строка 04) (чел):</td></tr>
	<tr><td rowspan="4">&nbsp;&nbsp;&nbsp;</td><td>а) окончили основную дневную общеобразовательную школу в прошлом<br>учебном году и ранее</td><td>08</td><td> <%=IT("T0308", 4, 5 )%></td></tr>
	<tr><td>&nbsp;&nbsp;&nbsp;из них в прошлом учебном году</td><td>09</td><td> <%=IT("T0309", 4, 5 )%></td></tr>
	<tr><td>б) окончили основную вечернюю (сменную) общеобразовательную<br>школу в прошлом учебном году и ранее</td><td>10</td><td> <%=IT("T0310", 4, 5 )%></td></tr>
	<tr><td>&nbsp;&nbsp;&nbsp;из них в прошлом учебном году</td><td>11</td><td> <%=IT("T0311", 4, 5 )%></td></tr>
	<tr><td colspan="4">2) Из общей численности обучающихся (графа 8 строка 07):</td></tr>
	<tr><td rowspan="3">&nbsp;&nbsp;&nbsp;</td><td>а) проживают в сельской местности</td><td>12</td><td> <%=IT("T0312", 4, 5 )%></td></tr>
	<tr><td>б) обучались в прошлом учебном году в дневных общеобразовательных<br>школах</td><td>13</td><td> <%=IT("T0313", 4, 5 )%></td></tr>
	<tr><td>в) обучаются в текущем году в учебных заведениях начального<br>профессионального образования в группах молодежи, не получающей<br>среднего (полного) общего образования</td><td>14</td><td> <%=IT("T0314", 4, 5 )%></td></tr>
	<tr><td colspan="2">3) Численность обучающихся-заочников, обучающихся по сессионому режиму<br>занятий</td><td>15</td><td> <%=IT("T0315", 4, 5 )%></td></tr>
	</table>
</td></tr>
</table> <!-- format -->

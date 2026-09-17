<% ' © 2007-2012 IRTech. All rights reserved.
%>
<tr><td>
<br><br>
<div align="center"><b>Раздел 3. Число классов и в них обучающихся</b></div>
<div align="right">Коды по ОКЕИ: единица-642; человек-792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan=2>Классы</td>
    <td rowspan=2 valign="top">№<br>строки</td>
	<td colspan=2>Очная форма обучения</td>
	<td colspan=2>Заочная форма обучения</td>
   	<td>Форма обуче-ния<br/>экстернат</td>
   	<td rowspan=2>Итого обучаю-<br/>щихся по оч-<br/>ной, заочной и<br/>экстернатной <br/>формам<br/>обучения (чел)</td>
   	<td colspan=2>в том числе (из гр.8)</td>
</tr>
<tr>
	<td valign="top">число классов<br/>(ед)</td>
	<td valign="top">численность<br/>обучающихся<br/>на начало учеб-<br/>ного года (чел)</td>
	<td valign="top">число групп<br/>(ед.)</td>
	<td valign="top">численность<br/>обучающихся<br/>на начало учеб-<br/>ного года (чел)</td>
	<td valign="top">численность<br/>обучающихся<br/>на начало учеб-<br/>ного года (чел)</td>
	<td valign="top">индивидуально<br/>обучающихся</td>
	<td valign="top">второгодников</td>
<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
</tr>
<tr align="center" valign="middle">
	<td align="left">1-4 классы</td>
	<td>01</td><%dim i, sCol
		for i = 3 to 10
		  if i=8 then 
		    response.write("<td>" & ITS(GetFieldName(3, 1, i), 4, 5 ) & "</td>")
		  else 
		    response.write("<td>" & IT(GetFieldName(3, 1, i), 4, 5 ) & "</td>")
		  end if  
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">5-8 классы</td>
	<td>02</td><%
		for i = 3 to 10
		  if i=8 then 
		    response.write("<td>" & ITS(GetFieldName(3, 2, i), 4, 5 ) & "</td>")
		  else 
			response.write("<td>" & IT(GetFieldName(3, 2, i), 4, 5 ) & "</td>")
		  end if  
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">9 класс</td>
	<td>03</td><%
		for i = 3 to 10
		  if i=8 then 
		    response.write("<td>" & ITS(GetFieldName(3, 3, i), 4, 5 ) & "</td>")
		  else 		
			response.write("<td>" & IT(GetFieldName(3, 3, i), 4, 5 ) & "</td>")
		  end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">10 класс</td>
	<td>04</td><%
		for i = 3 to 10
			if i=8 then
				response.write("<td align=""center"">"& ITS(GetFieldName(3, 4, i), 4, 5 ) & "</td>")
			else
				response.write("<td>" & IT(GetFieldName(3, 4, i), 4, 5 ) & "</td>")
			end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">11-12 классы</td>
	<td>05</td><%
		for i = 3 to 10
		    if i=8 then 
		        response.write("<td>" & ITS(GetFieldName(3, 5, i), 4, 5 ) & "</td>")
		    else 
			    response.write("<td>" & IT(GetFieldName(3, 5, i), 4, 5 ) & "</td>")
			end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">13-16 классы</td>
	<td>06</td><%
		for i = 3 to 10
			if i=7 then
				response.write("<td>X</td>")
			else
			 if i=8 then
				response.write("<td> "& ITS(GetFieldName(3, 6, i), 4, 5 ) & "</td>")
			  else
				response.write("<td>" & IT(GetFieldName(3, 6, i), 4, 5 ) & "</td>")
			 end if	
			end if
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Итого 10-12 (13-16) классы<br/>(сумма строк 04-06)</td>
	<td>07</td>
	<%for i = 3 to 10
			response.write("<td>" & ITS(GetFieldName(3, 7 , i), 4, 5 ) & "</td>")
	  next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Всего (сумма стр. 01-03,07)</td>
	<td>08</td><%
		for i = 3 to 10
			if i=8 then
				response.write("<td align=""center"">")
			elseif i=6 then
				response.write("<td align=""center"">")
			else
				response.write("<td>")
			end if
			response.write(ITS(GetFieldName(3, 8 , i), 5, 6 ) & "</td>")
		next%>
</tr>
</table>
</td></tr>
<tr><td><br>_______<br></td></tr>
<tr><td>
    <table border="0" cellpadding="0" cellspacing="0">
    <tr><td width="650">1) Из общей численности обучающихся 10 класса (гр.8, стр.04) (чел):<br>&nbsp;&nbsp;&nbsp;&nbsp;а) окончили основное дневное общеобразовательное учреждение в прошлом учебном году и ранее</td><td align"left"><br>(09)<%=IT("T030903",4,5)%></td></tr>
    <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них в прошлом учебном году</td><td>(10)<%=IT("T031003",4,5)%></td></tr>
    <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;б) окончили основную вечернюю (сменную) общеобразовательную школу в прошлом учебном<br>&nbsp;&nbsp;&nbsp;&nbsp;году и ранее</td><td><br>(11)<%=IT("T031103",4,5)%></td></tr>
    <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них в прошлом учебном году</td><td>(12)<%=IT("T031203",4,5)%></td></tr>
    <tr><td>2) Из общей численности обучающихся (гр.8, стр.08):<br>&nbsp;&nbsp;&nbsp;&nbsp;а) проживают в сельской местности </td><td><br>(13)<%=IT("T031303",4,5)%></td></tr>
    <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;б) обучались в прошлом учебном году в дневных общеобразовательных школах</td><td>(14)<%=IT("T031403",4,5)%></td></tr>
    <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;в) обучаются в текущем учебном году в учебных заведениях начального профессионального<br>&nbsp;&nbsp;&nbsp;&nbsp;образования в группах молодежи, не получающей среднего (полного) общего образования</td><td>(15)<%=IT("T031503",4,5)%></td></tr>
    <tr><td>3) Численность обучающихся-заочников, обучающихся по сессионному режиму занятий</td><td>(16)<%=IT("T031603",4,5)%></td></tr>
	<tr><td>4) Численность обучающихся выпускных классов (из графы 8 строки 5)</td><td>(17)<%=IT("T031703",4,5)%></td></tr>
	<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.17) в сельской местности</td><td>(18)<%=IT("T031803",4,5)%></td></tr>
</table>
</td></tr>
</table> <!-- format -->
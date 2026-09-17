<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<!-- таб.1 -->
1. Допрофессиональная и профессиональная подготовка обучающихся 8-11 (12) классов на 1 октября <%=strShoolYearStart%> г.<br>
<div align="right">Код по ОКЕИ: человек-792</div>
</td></tr>
<tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="1" width="100%">
<tr align="center" valign="middle">
	<td rowspan="2">Наименование</td><td rowspan="2">№<br>строки</td><td rowspan="2">Всего<br>(сумма граф<br>4-9)</td>
	<td colspan="6">в том числе</td>
</tr>
<tr align="center" valign="middle">
	<td>в учебных мас-<br>терских общеоб-<br>разовательных<br>учреждений</td>
	<td>в межшкольных<br>учебных<br>комбинатах</td>
	<td>в учебном цехе<br>и участке<br>предприятия,<br>организации</td>
	<td>в школьной и<br>межшкольной<br>учебно-произ-<br>водственной<br>мастерской</td>
	<td>на базе<br>образователь-<br>ных учреж-<br>дений началь-<br>ного профес-<br>сионального<br>образования</td>
   	<td>на базе<br>образователь-<br>ных учреж-<br>дений сред-<br>него профес-<br>сионального<br>образования</td>
</tr>
<tr align="center" valign="middle"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
<tr align="center" valign="middle">
	<td align="left">Численность обучающихся 8-11 (12) классов, проходящих<br>допрофессиональную и профессиональную подготовку</td>
	<td>01</td><%dim i
        response.write("<td>" & ITS(GetOshFieldName(1, 1, 3), 4, 5 ) & "</td>")
		for i = 4 to 9
			response.write("<td>" & IT(GetOshFieldName(1, 1, i), 4, 5 ) & "</td>")
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;из них:<br>&nbsp;&nbsp;&nbsp;обучающихся 10-11 (12) классов</td>
	<td>02</td><%
        response.write("<td>" & ITS(GetOshFieldName(1, 2, 3), 4, 5 ) & "</td>")
		for i = 4 to 9
			response.write("<td>" & IT(GetOshFieldName(1, 2, i), 4, 5 ) & "</td>")
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;в том числе по профессиям<br>&nbsp;&nbsp;&nbsp;допрофессиональной подготовки<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T010301", 50, 20 )%></td>
	<td>03</td><%
        response.write("<td>" & ITS(GetOshFieldName(1, 3, 3), 4, 5 ) & "</td>")
		for i = 4 to 9
			response.write("<td>" & IT(GetOshFieldName(1, 3, i), 4, 5 ) & "</td>")
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T010401", 50, 20 )%></td>
	<td>&nbsp;</td><%
        response.write("<td>" & ITS(GetOshFieldName(1, 4, 3), 4, 5 ) & "</td>")
		for i = 4 to 9
			response.write("<td>" & IT(GetOshFieldName(1, 4, i), 4, 5 ) & "</td>")
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T010501", 50, 20 )%></td>
	<td>&nbsp;</td><%
        response.write("<td>" & ITS(GetOshFieldName(1, 5, 3), 4, 5 ) & "</td>")
		for i = 4 to 9
			response.write("<td>" & IT(GetOshFieldName(1, 5, i), 4, 5 ) & "</td>")
		next%>
</tr>
</TABLE>
<!-- End Of таб.1 -->
</td></tr>
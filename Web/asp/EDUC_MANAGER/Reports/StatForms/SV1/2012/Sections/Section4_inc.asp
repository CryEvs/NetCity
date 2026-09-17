<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td colspan="2">
<div align="center"><b>Раздел 4. Сведения об обучающихся, окончивших общеобразовательное учреждение или переведенных в следующий класс в  <%=strShoolYearStart%> году</b></div>
<div align="right">Код по ОКЕИ: человек-792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
	<td>Наименование</td>
    <td>№<br>строки</td>
	<td>4-5<br>классы</td>
	<td>6<br>класс</td>
	<td>7<br>класс</td>
	<td>8<br>класс</td>
	<td>9<br>класс</td>
	<td>10<br>класс</td>
	<td>11<br>класс</td>
	<td>12<br>класс</td>
	<td>13<br>класс</td>
	<td>14<br>класс</td>
	<td>15<br>класс</td>
	<td>16<br>класс</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся, окончивших данный класс<br/>и переведенных в следующий класс весной, осенью</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,14,4,Array(0))%>
</tr>
</table>
</td></tr>
<tr><td width="55%">Численность обучающихся, получивших аттестат об основном общем образовании</td><td align"left"><br>(02)<%=IT("T040203",4,5)%></td></tr>
<tr><td>Кроме того, численность обучающихся, получивших аттестат об основном общем<br>образовании в порядке экстерната</td><td>(03)<%=IT("T040303",4,5)%></td></tr>
<tr><td>Численность обучающихся, получивших аттестат о среднем (полном) общем образовании</td><td><br>(04)<%=IT("T040403",4,5)%></td></tr>
<tr><td>Кроме того, численность обучающихся, получивших аттестат о среднем (полном <br>общем образовании в порядке экстерната</td><td><br>(05)<%=IT("T040503",4,5)%></td></tr>
<tr><td>Кроме того, численность обучающихся выпускного класса, не<br/> 
получивших аттестат о среднем (полном) общем образовании</td><td><br/>(06)<%=IT("T040603",4,5)%></td></tr>
<tr><td>Численность выпускников, допущенных к выпускным экзаменам </td><td>(07)<%=IT("T040703",4,5)%></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;из них (из стр.07) участвовавшие в едином государственном<br/>&nbsp;&nbsp;&nbsp;
экзамене (ЕГЭ)</td><td><br/>(08)<%=IT("T040803",4,5)%></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.08):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;численность выпускников, участвовавших в ЕГЭ по<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;русскому языку</td><td><br/><br/>(09)<%=IT("T040903",4,5)%></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.09) сдавшие ЕГЭ</td><td>(10)<%=IT("T041003",4,5)%></td></tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;численность выпускников, участвовавших в ЕГЭ по<br/>
математике</td><td><br/>(11)<%=IT("T041103",4,5)%></td></tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.11) сдавшие ЕГЭ</td><td>(12)<%=IT("T041203",4,5)%></td></tr>
<td>Из численности обучающихся, получивших аттестат о среднем<br/>
(полном) общем образовании (стр.04+стр.05), награждены:<br/>
&nbsp;&nbsp;&nbsp;золотой медалью «За особые успехи в учении»</td><td><br/><br/>(13)<%=IT("T041303",4,5)%></td></tr>
<td>&nbsp;&nbsp;&nbsp;серебряной медалью «За особые успехи в учении»</td><td>(14)<%=IT("T041403",4,5)%></td></tr>



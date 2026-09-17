<% ' © 2007-2012 IRTech. All rights reserved.
%>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 3. Движение воспитанников за отчетный год</b></div>
<div align="right"><p font-size:10pt>Код по ОКЕИ: человек-792</p></div>
<table Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
    <tr align="middle" valign="center">
	    <td><br />Наименование показателей<br />&nbsp;</td><td>№<br />строки</td><td>Численность</td></tr>
    <tr align="middle" valign="center">
        <td>1</td><td>2</td><td>3</td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Состояло воспитанников на 01.01 отчетного года</td><td>01</td>
	<%=DrawInputs("03",1,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Прибыло</td><td>02</td>
	<%=DrawInputs("03",2,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Выбыло (сумма строк 04 -  10, 12 - 14)</td><td>03</td>
	<%=DrawInputsWithTotals(3,3,3,3, Array(3))%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в том числе:<br />
			&emsp;&emsp;в образовательные учреждения высшего профессионального образования
	    </td><td>04</td>
	<%=DrawInputs("03",4,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;в образовательные учреждения среднего профессионального образования
	    </td><td>05</td>
	<%=DrawInputs("03",5,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;в образовательные учреждения начального профессионального образования
	    </td><td>06</td>
	<%=DrawInputs("03",6,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;в специальные образовательные учреждения начального профессионального образования
	    </td><td>07</td>
	<%=DrawInputs("03",7,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;на работу</td><td>08</td>
	<%=DrawInputs("03",8,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;в другие детские дома и школы-интернаты
	    </td><td>09</td>
	<%=DrawInputs("03",9,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;под опеку
	    </td><td>10</td>
	<%=DrawInputs("03",10,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;&emsp;в приемную семью (из строки 10)</td><td>11</td>
	<%=DrawInputs("03",11,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;на усыновление
	    </td><td>12</td>
	<%=DrawInputs("03",12,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;к родителям
	    </td><td>13</td>
	<%=DrawInputs("03",13,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;по прочим причинам
	    </td><td>14</td>
	<%=DrawInputs("03",14,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Численность воспитанников, подлежащих выпуску в следующем за отчетным году
	    </td><td>15</td>
	<%=DrawInputs("03",15,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в том числе:<br />
			&emsp;&emsp;детей-сирот и детей, оставшихся без попечения родителей
	    </td><td>16</td>
	<%=DrawInputs("03",16,3,3)%></tr>
    </table></td></tr></table> <!-- format -->
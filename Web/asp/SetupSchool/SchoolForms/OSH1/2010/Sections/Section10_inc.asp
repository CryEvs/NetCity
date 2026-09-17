<% ' © 2007-2008 IRTech. All rights reserved.
%>
<!-- п.10 -->
<br/>
    <b>Раздел 10. Сведения о логопедическом пункте, кабинете</b><br /><br />
    <div align="right">Коды по ОКЕИ: единица-642; человек-792 </div>	
<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="1" width="100%">
<tr align="center" valign="middle">
	<td>Наименование</td><td>№<br>строки</td><td>&nbsp;</td>
</tr>
<tr align="center" valign="middle">
	<td>1</td><td>2</td><td>3</td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Имеется ли в учреждении логопедический пункт (да, нет)</td><td>01</td><td><%=IB0Disabled("T1001", bIsMNS)%></td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Имеется ли в учреждении логопедический кабинет (да, нет)</td><td>02</td><td><%=IB0Disabled("T1002", bIsMNS)%></td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Численность обучающихся в учреждении, занимающихся в логопедическом пункте<br />(чел)</td><td>03</td><td><%=IT("T1003", 5, 5 )%></td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Численность обучающихся в учреждении, занимающихся в логопедическом<br />кабинете (чел)</td><td>04</td><td><%=IT("T1004", 5, 5 )%></td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Численность обучающихся в учреждении, посещающих занятия в логопедических<br />пунктах, организованных в других образовательных учреждениях (чел)</td><td>05</td><td><%=IT("T1005", 5, 5 )%></td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Численность обучающихся в учреждении, посещающих занятия в логопедических<br />кабинетах, организованных в других образовательных учреждениях (чел)</td><td>06</td><td><%=IT("T1006", 5, 5 )%></td>
</tr>
</TABLE>
<!-- end of п.10 -->
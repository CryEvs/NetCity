<% ' © 2007-2008 IRTech. All rights reserved.
%>
<!-- п.12 -->
<br/>
<b>Раздел 12. Сведения о платных дополнительных образовательных услугах за <%=strShoolPrevYearStart%>/<%=strShoolPrevYearEnd%> учебный год.</b><br/><br />
<div align="right">Коды по ОКЕИ: единица-642; человек-792 </div>	
<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="1" width="100%">
<tr align="center" valign="middle">
	<td>Наименование</td><td>№<br>строки</td><td width="100px">&nbsp;</td>
</tr>
<tr align="center" valign="middle">
	<td>1</td><td>2</td><td>3</td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Предоставляет ли учреждение, реализующее программы общего образования,<br />платные дополнительные образовательные услуги (да, нет)</td><td>01</td><td><%=IB0("T120103")%></td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Численность обучающихся данного учреждения, пользующихся платными<br />дополнительными образовательными услугами (чел)</td><td>02</td><td><%=IT("T120203", 5, 5 )%></td>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Кроме того, численность пользующихся платными дополнительными<br />образовательными услугами, не обучающихся в данном учреждении (чел)</td><td>03</td><td><%=IT("T120303", 5, 5 )%></td>
</tr>
</TABLE>
<!-- end of п.12 -->
</td></tr>
</table> <!-- format -->
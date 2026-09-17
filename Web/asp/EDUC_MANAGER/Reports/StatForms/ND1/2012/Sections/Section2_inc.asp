<% ' © 2007-2012 IRTech. All rights reserved.
%>
<!-- Table 2 -->
<table class="print-block" align="center" >
	<tr><td><div align="center"><b>Справка</b></div><br/><br/></td></tr>
	<tr><td><div align="right">Коды по ОКЕИ: человек-792; единица-642</div>
<br/></td></tr>

<tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="0" width="100%">
<tr align="center" valign="middle">
	<td rowspan="3">Наименование показателя</td><td rowspan="3">№<br/>строки</td>
	<td colspan="12">Число полных лет на 1 января <%=strShoolYearStart%> г.</td>
	<td rowspan="3">Всего нео-<br/>бучающихся<br/>в возрасте<br/>7-18 лет<br/>(сумма граф <br/>c 3 по 14)</td>
	<td rowspan="3">Из общей<br/>числен-<br/>ности в<br/>сельской<br/>местности<br/>(из.гр.15)</td>
</tr>
<tr align="center" valign="middle">
		<%For i = 7 TO 18
		response.write("<td>" & i & "лет</td>")
		Next %>
</tr>
<tr align="center" valign="middle">
		<%For i = 7 TO 18
		response.write("<td>" & strShoolYearStart - i - 1 & " г.</td>")
		Next %>
</tr>
<tr>
	<%For i = 1 To 16
		response.write("<td align=""center"">" & i & "</td>")
	Next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Из общей численности необучающихся в образовательных<br/>учреждениях детей*:<br/>&nbsp;дети с ограниченными возможностями здоровья</td>
	<td>01</td><%dim i
		Call DrawWithSumLine(2, 16, 1, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;дети-инвалиды</td>
	<td>02</td><%
		Call DrawWithSumLine(2, 16, 2, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Из общей численности необучающихся в образователь-<br/>ных учреждениях детей по состоянию здоровья**:<br/>&nbsp;дети с ограниченными возможностями здоровья</td>
	<td>03</td><%
		Call DrawWithSumLine(2, 16, 3, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;дети-инвалиды</td>
	<td>04</td><%
		Call DrawWithSumLine(2, 16, 4, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Из общей численности необучающихся в образователь-<br/>ных учреждениях никогда не учились (кроме не<br/>подлежащих обучению по состоянию здоровья)***:<br/>&nbsp;дети с ограниченными возможностями здоровья</td>
	<td>05</td><%
		Call DrawWithSumLine(2, 16, 5, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;дети-инвалиды</td>
	<td>06</td><%
		Call DrawWithSumLine(2, 16, 6, 15)%>
</tr>

</TABLE>
</td></tr>
<tr><td><br/>*&nbsp;&nbsp;&nbsp;&nbsp;строки 01, 02 заполняютсяиз строки 01 раздела 1</td></tr>
<tr><td>**&nbsp;&nbsp;&nbsp;строки 03, 04 заполняютсяиз строки 05 раздела 1</td></tr>
<tr><td>***&nbsp;строки 05, 06 заполняютсяиз строки 09 раздела 1</td></tr>
<tr><td>
<br/>
<table border="0" cellpadding="0" cellspacing="0" align="left"  width="70%">
    <TR>
		<TD>Должностное лицо, ответственное за<BR>
		предоставление статистической информации<BR>
		(лицо, уполномоченное предоставлять<BR>
		статистическую информацию от имени<BR>
		юридического лица)<BR></TD>
		<TD>&nbsp;</TD>
		<TD>&nbsp;</TD>
		<TD>&nbsp;</TD>
	</TR>
	<TR>
		<TD>&nbsp;<BR><BR></TD>
		<TD ALIGN=CENTER>_______________________<BR>(должность)</TD>
		<TD ALIGN=CENTER>_______________________<BR>(Ф.И.О.)</TD>
		<TD ALIGN=CENTER>_________________<BR>(подпись)</TD>
	</TR>
	<TR>
		<TD>&nbsp;</TD>
		<TD ALIGN=CENTER>_______________________<BR>(номер контактного<BR>телефона)</TD>
		<TD COLSPAN=2><div align="center" style="float: left;">&laquo;____&raquo; ____________ <%=strShoolYearStart%> год<BR>(дата составления<br> документа)</div></TD>
	</TR>
</table>
</td></tr>
</table>

<!--End Table 2-->
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
	<td rowspan="3">Наименование показателя</td><td rowspan="3">№<br/>строки</td><td colspan="12">Число полных лет на 1 января <%=strShoolYearEnd%> г.</td><td rowspan="3">Итого не<br/>обучающих-<br/>ся в возрасте<br/>7-18 лет<br/>(сумма граф с<br/>3 по 14)</td><td rowspan="3">Из общего<br/>числа в<br/>сельской<br/>местности<br/>(из.гр.15)</td>
</tr>
<tr align="center" valign="middle">
		<%For i = 7 TO 18
		response.write("<td>" & i & "лет</td>")
		Next %>
</tr>
<tr align="center" valign="middle">
		<%For i = 2003 To 1992 Step -1
		response.write("<td>" & i & " г.</td>")
		Next %>
</tr>
<tr>
	<%For i = 1 To 16
		response.write("<td align=""center"">" & i & "</td>")
	Next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Из общей численности необучающихся детей в<br/>образовательных учреждениях - всего:<br/>&nbsp;детей с ограниченными возможностями здоровья</td>
	<td>01</td><%dim i
		Call DrawWithSumLine(2, 16, 1, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;дети-инвалиды</td>
	<td>02</td><%
		Call DrawWithSumLine(2, 16, 2, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Из общей численности необучающихся детей в<br/>образовательных учреждениях по состоянию здоровья:<br/>&nbsp;детей с ограниченными возможностями здоровья</td>
	<td>03</td><%
		Call DrawWithSumLine(2, 16, 3, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;дети-инвалиды</td>
	<td>04</td><%
		Call DrawWithSumLine(2, 16, 4, 15)%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Из общей численности необучающихся в образовательных<br/>учреждениях никогда не учились (кроме не подлежащих<br/>обучению по состоянию здоровья):<br/>&nbsp;детей с ограниченными возможностями здоровья</td>
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
<tr><td>
<br/>
<table border="0" cellpadding="0" cellspacing="0" align="left"  width="70%">
    <tr height="53" style='height: 39.9pt'>
        <td align="right">
            Должностное лицо, ответственное за предоставление<br>
            статистической информации (лицо, уполномоченное<br>
            предоставлять статистическую информацию от имени<br>
            юридического лица)</td>
        <td align="center">
            (должность)</td>
        <td align="center">
            (Ф.И.О.)</td>
        <td align="center">
            (подпись)</td>
    </tr>
    <tr height="18" style='height: 13.2pt'>
        <td>
        </td>
        <td align="center">
            (номер контактного телефона)</td>
        <td align="center">
            (дата составления документа)</td>
        <td>
        </td>
    </tr>
</table>
</td></tr>
</table>

<!--End Table 2-->
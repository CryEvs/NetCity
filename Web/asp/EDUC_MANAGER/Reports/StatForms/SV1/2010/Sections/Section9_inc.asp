<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td colspan="2">
<div align="center">9. Сведения о помещениях самостоятельных образовательных учреждений </div>
<div align="right">Коды по ОКЕИ: единица-642; квадратный метр-055</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
<td>Наименование</td>
<td>№<br/>строки</td>
<td>Число<br/>образовательных<br/>учреждений (ед)<br/>(сумма строк 01-04)<br/>равна (стр.14, гр.3, разд.1)</td>
<td>В них классных комнат<br/>(включая учебные<br/>кабинеты и<br/>лаборатории) (ед)</td>
<td>Их площадь (м2)</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr align="middle" valign="center">
	<td align="left">1. Образовательные учреждения, использующие для занятий помещения только:<br/>а) собственные</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,5,9,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">б) других образовательных учреждений</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,5,9,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">в) предприятий и организаций</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3,3,5,9,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">2. Образовательные учреждения, использующие для занятий помещения:<br/>собственные, других образовательных учреждений, предприятий и организаций</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4,3,5,9,Array(0))%>
</tr>
</table>
</td></tr>
<tr><td><br/>Примечание: Сведения о помещениях самостоятельных образовательных учреждений представляются 1 раз в 2 года, очередной отчет – на начало <%=strShoolYearStart%>/<%=strShoolYearEnd%>  учебный год</td></tr>
<tr><td><br />
<TABLE BORDER=0 CELLPADDING=5>
	<TR>
		<TD NOWRAP>Должностное лицо, ответственное за<BR>предоставление статистической информации<BR>(лицо, уполномоченное предоставлять<BR>
		статистическую информацию от имени<BR>юридического лица)
<BR><BR></TD>
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

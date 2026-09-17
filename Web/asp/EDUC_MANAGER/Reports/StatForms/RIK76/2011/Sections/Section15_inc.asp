<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 15. Сведения об обучающихся индивидуально на дому детей-инвалидов и детей<br/>с ограниченными возможностями здоровья</b>
<br/>(из раздела 1.2 строки 24-31)</div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
	<td>Наименование</td>
    <td>№<br>строки</td>
	<td>Инвалиды, дети-<br/>инвалиды</td>
	<td>Обучающиеся с<br/>ограниченными<br/>возможностями<br/>здоровья</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr align="middle" valign="center">
	<td align="left">Всего обучающихся индивидуально на дому(сумма строк 03,05,07)</td>
	<td>01</td>
	<%=DrawInputsWithTotals(1,3,4,15, Array(3,4))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них (из стр.01) обучающихся с использованием дистанционных технологий<br/>(сумма строк 04,06,08)</td>
	<td>02</td>
	<%=DrawInputsWithTotals(2,3,4,15, Array(3,4))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся на дому индивидуально по программам специальных(коррекционных)<br/>образовательных учреждений I-VIII видов</td>
	<td>03</td>
	<%=DrawInputs(15,3,3,4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них (из стр.03) обучающихся с использованием дистанционных технологий</td>
	<td>04</td>
	<%=DrawInputs(15,4,3,4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся на дому по общеобразовательным программам</td>
	<td>05</td>
	<%=DrawInputs(15,5,3,4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них (из стр.05) обучающихся с использованием дистанционных технологий</td>
	<td>06</td>
	<%=DrawInputs(15,6,3,4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся на дому по индивидуальным учебным планам</td>
	<td>07</td>
	<%=DrawInputs(15,7,3,4)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них (из стр.07) обучающихся с использованием дистанционных технологий</td>
	<td>08</td>
	<%=DrawInputs(15,8,3,4)%>
</tr>
</table>
</td></tr>
<tr><td><br><br>
	<TABLE BORDER=0 CELLPADDING=5>
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
	</TABLE>
</td></tr>
</table> <!-- format -->
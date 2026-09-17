<% ' © 2007-2008 IRTech. All rights reserved.
%>
<tr><td align="center">
<!-- таб.2 -->
<br><br>
<br><br>2. Сведения об обучающихся 11 (12) классов, сдавших квалификационные экзамены на конец прошлого учебного года<br><br>
</td></tr>
<tr><td>
<div align="right">Код по ОКЕИ: человек-792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="1" width="100%">
<tr align="center" valign="middle">
	<td>Наименование</td><td>№<br>строки</td><td>Всего</td>
</tr>
<tr align="center" valign="middle">	<td>1</td><td>2</td><td>3</td></tr>
<tr align="center" valign="middle">
	<td align="left">Численность обучающихся 11 (12) классов, сдавших квалификационные экзамены</td><td>01</td><td><%=ITS("T020103", 4, 5 )%></td></tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;в том числе:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T020201", 100, 40 )%></td><td>02</td><td><%=IT("T020203", 4, 5 )%></td></tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T020301", 100, 40 )%></td><td><%If readonly and not IsDull(GetParamValue("T020301")) Then Response.write "03" Else Response.write "&nbsp;" End If%></td><td><%=IT("T020303", 4, 5 )%></td></tr>
<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T020401", 100, 40 )%></td><td><%If readonly and not IsDull(GetParamValue("T020401")) Then Response.write "04" Else Response.write "&nbsp;" End If%></td><td><%=IT("T020403", 4, 5 )%></td></tr>
</TABLE>
<!-- End Of таб.2 -->
</td></tr>
<tr><td>
<br>
<br>
<br>
<br><br><br>
	<TABLE BORDER=0 CELLPADDING=5>
	<TR>
		<TD NOWRAP>Руководитель<BR>организации<BR></TD>
		<TD ALIGN=CENTER>_______________________<BR>(Ф.И.О.)</TD>
		<TD ALIGN=CENTER>_________________<BR>(подпись)</TD>
		<TD>&nbsp;</TD>
	</TR>
	<TR>
		<TD NOWRAP>Должностное лицо,<BR>ответственное за<BR>составление формы<BR><BR></TD>
		<TD ALIGN=CENTER>_______________________<BR>(должность)</TD>
		<TD ALIGN=CENTER>_______________________<BR>(Ф.И.О.)</TD>
		<TD ALIGN=CENTER>_________________<BR>(подпись)</TD>
	</TR>
	<TR>
		<TD>&nbsp;</TD>
		<TD ALIGN=CENTER>_______________________<BR>(номер контактного<BR>телефона)</TD>
		<TD ALIGN=CENTER COLSPAN=2>"____" __________________ 20___ год<BR>(дата составления<br> документа)</TD>
	</TR>
	</TABLE>

</td></tr>
</table> <!-- format -->
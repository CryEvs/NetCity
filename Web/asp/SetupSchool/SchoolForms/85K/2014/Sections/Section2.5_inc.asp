<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center" style="margin-top:20px; margin-bottom:10px;"><b>2.5. Число случаев заболевания воспитанников</b></div>
<div align="right">Код по ОКЕИ: единица - 642</div>
<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
<tr align="middle" valign="top">
	<td rowspan="2">Наименование показателей</td>
    <td rowspan="2">№<br>строки</td>
    <td rowspan="2">Всего зарегистрировано<br />случаев заболевания</td>
	<td>Их них у детей в возрасте:</td>
</tr>
<tr align="middle" valign="top">
	<td>3 года и старше</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr align="middle" valign="center">
	<td align="left">Всего(сумма строк 02-09)</td>
	<td>01</td>
	<%=DrawInputsWithTotals(1, 3, 4, "02.5", Array(3,4))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>&nbsp;&nbsp;&nbsp;бактериальная дизентерия</td>
	<td>02</td>
	<%=DrawInputs("02.5", 2, 3, 4)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;энтериты, колиты и гастроэнтериты, вызванные установленными,<br /> &nbsp;&nbsp;&nbsp;не установленными и неточно обозначенными возбудителями</td>
	<td>03</td>
	<%=DrawInputs("02.5", 3, 3, 4)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;скарлатина</td>
	<td>04</td>
	<%=DrawInputs("02.5", 4, 3, 4)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;ангина (острый тонзилит)</td>
	<td>05</td>
	<%=DrawInputs("02.5", 5, 3, 4)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;грипп и острые инфекции верхних дыхательных путей</td>
	<td>06</td>
	<%=DrawInputs("02.5", 6, 3, 4)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;пневмонии</td>
	<td>07</td>
	<%=DrawInputs("02.5", 7, 3, 4)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;несчастные случаи, отравления, травмы</td>
	<td>08</td>
	<%=DrawInputs("02.5", 8, 3, 4)%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;другие заболевания</td>
	<td>09</td>
	<%=DrawInputs("02.5", 9, 3, 4)%>
</tr>
</table>
</td></tr>

<tr><td><br/>
Среднегодовая численность воспитанников за период с начала отчетного года (10)&nbsp;&nbsp; <%=IT(GetFieldName("02.5",10,3),4, 5 )%>&nbsp;&nbsp;(код по ОКЕИ: человек - 792)
</td></tr>

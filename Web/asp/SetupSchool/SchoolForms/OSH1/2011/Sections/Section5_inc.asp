<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<!-- таб.5 -->
	<b>Раздел 5. Возрастной состав обучающихся</b><br/>
(без обучающихся в специальных (коррекционных) классах для детей с ограниченными возможностями здоровья;<br/>составляется на основании документов о рождении)<br/><br/>
	<div align="right">Код по ОКЕИ: человек-792</div>
</td></tr>
<tr><td>

<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="0" width="100%">
<tr align="center" valign="middle">
	<td colspan="4" rowspan="2">Наименование</td><td rowspan="2">№<br>строки</td><td colspan="2">Численность обучающихся</td><td colspan="5">Из общей численности (из гр.3) обучающиеся</td>
</tr>

<tr align="center" valign="middle">
	<td>всего</td><td>из них<br/>девочек</td><td>подготови-<br/>тельных<br/>классов</td><td>1 классов</td><td>9 классов</td><td>10-11 (12)<br/>классов</td><td>в том числе<br/>(из графы 8)<br/>выпускных<br/>классов</td>
</tr>

<tr align="center" valign="middle">
	<td colspan="4">1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
</tr>

<tr align="center" valign="middle">
	<td rowspan="19">Число<br><br>полных<br><br>лет<br><br>на<br><br><br>1<br><br>января<br><br><%=strShoolYearEnd%><br><br>года</td>
	<td>5 лет</td>
	<td rowspan="19">&nbsp;г&nbsp;<br>о<br>д<br><br><br>р<br>о<br>ж<br>д<br>е<br>н<br>и<br>я</td>
	<td><%=strShoolYearEnd-6%> г.</td>
	<td>01</td><td><%=IT("T050103", 10, 10 )%></td>
	<td><%=IT("T050104", 10, 10 )%></td>
	<td><%=IT("T050105", 10, 10 )%></td>
	<td><%=IT("T050106", 10, 10 )%></td>
	<td><%=IT("T050107", 10, 10 )%></td>
	<td><%=IT("T050108", 10, 10 )%></td>
	<td><%=IT("T050109", 10, 10 )%></td>
</tr>

<% dim i, istr

	for i=2 to 19
	  istr = CStr( i )
	  if Len(istr)=1 Then istr = "0" & istr
%>
<tr align="center" valign="middle">
	<td><%=i+4%>&nbsp;<%=IIf((i+4)<21,"лет",IIf((i+4)=21,"год","года"))%>&nbsp;<% If i=19 Then Response.Write "и<BR>старше" %></td>
	<td><%=strShoolYearEnd-5-i%> г. <% If i=19 Then Response.Write "и<BR>ранее" %></td>
	<td><%=istr%></td><td><%=IT("T05" & istr & "03", 10, 10 )%></td><td><%=IT("T05" & istr & "04", 10, 10 )%></td><td><%=IT("T05" & istr & "05", 10, 10 )%></td>
	<td><%=IT("T05" & istr & "06", 10, 10 )%></td><td><%=IT("T05" & istr & "07", 10, 10 )%></td><td><%=IT("T05" & istr & "08", 10, 10 )%></td><td><%=IT("T05" & istr & "09", 10, 10 )%></td>
</tr>
<%
	next
%>

<tr align="center" valign="middle">
	<td colspan="4">Итого (сумма строк 01-19)</td><td>20</td><td><%=ITS("T052003", 10, 10 )%></td><td><%=ITS("T052004", 10, 10 )%></td><td><%=ITS("T052005", 10, 10 )%></td>
	<td><%=ITS("T052006", 10, 10 )%></td><td><%=ITS("T052007", 10, 10 )%></td><td><%=ITS("T052008", 10, 10 )%></td><td><%=ITS("T052009", 10, 10 )%></td>
</tr>

</TABLE>

</td></tr>
<tr><td>
	<div align="left">
		Численность обучающихся в специальных (коррекционных) классах для детей с ограниченными возможностями здоровья в возрасте 16 лет и старше (чел)<%=IT("T052103", 10, 10 )%>
	</div>
</td></tr>
<!-- end of таб.5 -->

<tr><td align="center">
<!-- таб.6 -->
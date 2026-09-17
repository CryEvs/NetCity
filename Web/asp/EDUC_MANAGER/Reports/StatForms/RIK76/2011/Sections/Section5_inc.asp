<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0"><tr><td>
<div align="center"><b>Раздел 5. Возрастной состав обучающихся</b><br />(по учреждениям, указанным в строках 02, 03, 11, 12 раздела 1.1)</div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan=2 colspan=4>Наименование</td>
    <td rowspan=2 valign="top">№<br>строки</td>
	<td colspan=2>Городские поселения</td>
	<td colspan=2>Сельская местность</td>
   	<td colspan=2>Итого</td>
	<td colspan=5>Из общего числа (из гр.7) обучающиеся</td>
</tr>
<tr>
	<td valign="top">численность обучающихся 1-12 классов</td>
	<td valign="top">в т.ч. девочек</td>
	<td valign="top">численность обучающихся 1-12 классов</td>
	<td valign="top">в т.ч. девочек</td>
	<td valign="top">численность обучающихся 1-12 классов</td>
	<td valign="top">в т.ч. девочек</td>
	<td valign="top">подготови-<br/>тельных<br/>классов</td>
	<td valign="top">1 классов</td>
	<td valign="top">9 классов</td>
	<td valign="top">10-11(12)<br/>классов</td>
	<td valign="top">в том числе<br/>выпускных<br/>классов (из<br/>графы 12)</td></tr>

<tr align="middle" valign="center">
	<td colspan=4>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
</tr>

<tr align="center" valign="middle">
<td rowspan=21>Число<br><br>полных<br><br>лет<br><br>на<br><br><br>1<br><br>января<br><br><%=strShoolYearEnd%> г</td>
</tr>

<tr align="middle" valign="center">
	<td align="center">5 лет</td>
	<td rowspan=19 align="center">Г<br>о<br>д<br> <br>р<br>о<br>ж<br>д<br>е<br>н<br>и<br>я</td>
	<td align="center"><%=strShoolYearEnd-6%> г.</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,13,5,Array(7,8))%>
</tr>

<% dim i, istr

	For I=2 To 19
	  istr = CStr( i )
	  if Len(istr)=1 Then istr = "0" & istr
%><tr align="center" valign="middle">
	<td><%=i+4%> лет <% If i=19 Then Response.Write "и<BR>старше" %></td>
	<td><%=strShoolYearEnd-5-i%> г. <% If i=19 Then Response.Write "и<BR>ранее" %></td>
	<td><%=istr%></td><%
	response.write DrawInputsWithTotals(i,3,13,5,Array(7,8))

%></tr><%
	Next
%>

<tr align="middle" valign="center">
	<td colspan=3 align="center">Итого<br />(сумма строк 01-19)</td>
	<td align="center">20</td>
	<%=DrawInputsWithTotals(20,3,13,5,Array(3,4,5,6,7,8,9,10,11,12,13))%>
</tr>

<br/>
</table></td></tr><tr><td><div align="left">Численность обучающихся в специальных (коррек
	ционных) образовательных учреждениях и классах<br/>для детей с ограниченными возможностями здоровья в возрасте 16 лет и старше (чел) (21) <%=IT("T0521",4, 5 )%></div>	</td></tr>
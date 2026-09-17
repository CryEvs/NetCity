<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block">
	<tr><td>
<div align="center"><b>Раздел 5. Возрастной состав обучающихся</b><br />(по учреждениям, указанным в строках 02, 03, 11, 12 раздела 1.1)</div></td></tr>
<tr><td><div align="right">Код по ОКЕИ: человек - 792</div></td></tr>
	<tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan=3 colspan=4>Наименование</td>
    <td rowspan=3 valign="top">№<br>строки</td>
	<td colspan=2>Городские поселения</td>
	<td colspan=2>Сельская местность</td>
   	<td colspan=3>Итого</td>
</tr>
<tr>
	<td rowspan=2 valign="top">численность обучающихся 1-12 классов</td>
	<td rowspan=2 valign="top">в т.ч. девочек</td>
	<td rowspan=2 valign="top">численность обучающихся 1-12 классов</td>
	<td rowspan=2 valign="top">в т.ч. девочек</td>
	<td colspan=2 valign="top">численность обучающихся 1-12 классов</td>
	<td rowspan=2 valign="top">из них обучающихся 10-12 классов</td>
</tr><tr>
	<td valign="top">всего</td>
	<td valign="top">в т.ч. девочек</td>
</tr>

<tr align="middle" valign="center">
	<td colspan=4>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
</tr>

<tr align="center" valign="middle">
<td rowspan=16>Число<br><br>полных<br><br>лет<br><br>на<br><br><br>1<br><br>января<br><br><%=strShoolYearEnd%> г</td>
</tr>

<tr align="middle" valign="center">
	<td align="center">5 лет</td>
	<td rowspan=14 align="center">Г<br>о<br>д<br> <br>р<br>о<br>ж<br>д<br>е<br>н<br>и<br>я</td>
	<td align="center"><%=strShoolYearEnd-6%> г.</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,8,5,Array(7,8))%>
	<td align="center">X</td>
</tr>

<% dim i, istr

	For I=2 To 14
	  istr = CStr( i )
	  if Len(istr)=1 Then istr = "0" & istr
%><tr align="center" valign="middle">
	<td><%=i+4%> лет <% If i=14 Then Response.Write "и<BR>старше" %></td>
	<td><%=strShoolYearEnd-5-i%> г. <% If i=14 Then Response.Write "и<BR>ранее" %></td>
	<td><%=istr%></td><%
	If i<9 Then
		response.write DrawInputsWithTotals(i,3,8,5,Array(7,8)) & "<td align=""center"">X</td>"
	Else
		response.write DrawInputsWithTotals(i,3,9,5,Array(7,8))
	End If
%></tr><%
	Next
%>

<tr align="middle" valign="center">
	<td colspan=3 align="center">Итого<br />(сумма строк 01-14)</td>
	<td align="center">15</td>
	<%=DrawInputsWithTotals(15,3,9,5,Array(3,4,5,6,7,8,9))%>
</tr>

</table></td></tr>
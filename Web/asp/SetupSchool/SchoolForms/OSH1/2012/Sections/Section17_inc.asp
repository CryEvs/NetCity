<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<!-- таб.17 -->
	<b>Раздел 17. Сведения об углубленном изучении отдельных предметов</b><br/><br/>
	<div align="right">Коды по ОКЕИ: человек-792; единица-642</div>
</td></tr>
<tr><td>

<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="0" width="100%">
<tr align="center" valign="middle">
	<td rowspan="2">Профили обучения</td><td rowspan="2">№<br/>строки</td><td colspan="4">Число классов (групп) с углубленным изучением<br/>предметов (ед)</td><td colspan="4">Численность обучающихся в классах (группах) с<br/>углубленным изучением предметов (чел)</td>
</tr>

<tr align="center" valign="middle">
	<td>1-4</td>
	<td>5-9</td>
	<td>10-11 (12)</td>
	<td>Итого</td>
	<td>1-4</td>
	<td>5-9</td>
	<td>10-11 (12)</td>
	<td>Итого</td>
</tr>

<tr align="center" valign="middle">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
</tr>
<%Dim arrH,j,i, istr, arrID, strID
arrH = Array(_
"Гуманитарный - всего"_
,"<nobr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них с изучением языков:</nobr><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;английского"_
,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;французского"_
,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;немецкого"_
,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;других европейских"_
,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;восточных"_
,"Естественно-научный"_
,"Технический"_
,"Сельскохозяйственный"_
,"Другие"_
)
For j = 0 To Ubound(arrH)
	istr = CStr( j+1 )
	if Len(istr)=1 Then istr = "0" & istr%>
<tr align="center" valign="middle">
	<td align="left"><%=arrH(j)%></td>
	<td><%=istr%></td>
	<%strID="T17"&istr
	for i = 3 to 5
		istr = CStr( i )
		if Len(istr)=1 Then istr = "0" & istr
		    response.write("<td>" & ITDisabled(strID & istr, 2, 3, bIsMNS) &  "</td>") 
	    next
	response.write("<td>" & ITS(strID & "06", 3, 3 ) &  "</td>")
	for i = 7 to 9
		istr = CStr( i )
		if Len(istr)=1 Then istr = "0" & istr
		    response.write("<td>" & IT(strID & istr, 5, 10 ) &  "</td>")
	next
	response.write("<td>" & ITS(strID & "10", 6, 10 ) &  "</td>")
	%>
</tr><%
Next%>
</TABLE>
<!-- end of таб.17 -->

</td></tr>
</table> <!-- format -->
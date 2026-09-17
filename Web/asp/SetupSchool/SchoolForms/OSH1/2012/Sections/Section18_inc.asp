<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<!-- таб.18 -->
	<b>Раздел 18. Сведения о профильном обучении</b><br><br>
	<div align="right">Коды по ОКЕИ: единица – 642; человек – 792</div>
</td></tr>
<tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="0" width="100%">
<tr align="center" valign="middle">
	<td>Профили обучения</td><td>№<br />строки</td><td>количество 10-11 (12) классов (групп)<br />профильного обучения (ед)</td><td>численность учащихся 10-11 (12)<br />классов, обучающихся по программам<br />профильного обучения (чел)</td></tr>
<tr align="center" valign="middle">
	<td>1</td><td>2</td><td>3</td><td>4</td></tr>
<%Dim arrH,j,i, istr, arrID, strID
arrH = Array(_
"Всего (сумма строк 02, 07-16)"_
,"Технологический – всего (сумма стр.03-06)"_
,"<nobr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:</nobr><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;информационно-технологический"_
,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;агротехнологический"_
,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;индустриально-технологический"_
,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;другие технологические"_
,"Физико-математический"_
,"Физико-химический"_
,"Химико-биологический"_
,"Биолого-географический"_
,"Социально-экономический"_
,"Социально-гуманитарный"_
,"Филологический"_
,"Художественно-эстетический"_
,"Оборонно-спортивный"_
,"Другие"_
,"Кроме того (стр.01), индивидуальные образовательные программы<br >профильного обучения"_
)
For j = 0 To Ubound(arrH)
	istr = CStr( j+1 )
	if Len(istr)=1 Then istr = "0" & istr%>
<tr align="center" valign="middle">
	<td align="left"><%=arrH(j)%></td>
	<td><%=istr%></td>
	<%strID="T18"&istr
	for i = 3 to 4
		istr = CStr( i )
		istr = "0" & istr
		response.write("<td>" & IIF(j>1,IIF(i=3, ITDisabled(strID & istr, IIF(i=3,3,5), IIF(i=4,4,5), bIsMNS), IT(strID & istr, IIF(i=3,3,5), IIF(i=4,4,5))),ITS(strID & istr, IIF(i=3,3,5), IIF(i=3,4,10))) &  "</td>")
	next
	%>
</tr><%
Next%>
</TABLE>
<!-- end of таб.18 -->

</td></tr>
</table> <!-- format -->

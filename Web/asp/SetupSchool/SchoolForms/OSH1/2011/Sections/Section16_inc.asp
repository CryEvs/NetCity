<% ' © 2007-2008 IRTech. All rights reserved.
%>
<!-- таб.16 -->
	<b>Раздел 16. Сведения о преподавании иностранных языков</b><br/><br/>
	<div align="right">Коды по ОКЕИ: человек-792; единица-642</div>

</td></tr>
<tr><td>

<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="0" width="100%">
<tr align="center" valign="middle">
	<td rowspan="2">Классы, в которых преподаются иностранные языки</td><td rowspan="2">№<br/>строки</td><td colspan="2">английский</td><td colspan="2">французский</td><td colspan="2">немецкий</td>
	<td colspan="2">итальянский</td><td colspan="2">испанский</td><td colspan="2">китайский</td><td colspan="2">арабский</td><td colspan="2">другие</td>
</tr>

<tr align="center" valign="middle">
	<td>число<br/>классов<br/>(групп)&nbsp;(ед)</td><td>обучающих<br/>ся<br/>(чел)</td>
	<td>число<br/>классов<br/>(групп)&nbsp;(ед)</td><td>обучающих<br/>ся<br/>(чел)</td>
	<td>число<br/>классов<br/>(групп)&nbsp;(ед)</td><td>обучающих<br/>ся<br/>(чел)</td>
	<td>число<br/>классов<br/>(групп)&nbsp;(ед)</td><td>обучающих<br/>ся<br/>(чел)</td>
	<td>число<br/>классов<br/>(групп)&nbsp;(ед)</td><td>обучающих<br/>ся<br/>(чел)</td>
	<td>число<br/>классов<br/>(групп)&nbsp;(ед)</td><td>обучающих<br/>ся<br/>(чел)</td>
	<td>число<br/>классов<br/>(групп)&nbsp;(ед)</td><td>обучающих<br/>ся<br/>(чел)</td>
	<td>число<br/>классов<br/>(групп)&nbsp;(ед)</td><td>обучающих<br/>ся<br/>(чел)</td>
</tr>

<tr align="center" valign="middle">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
	<td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td>
</tr>

<tr align="center" valign="middle">
	<td align="left">1-4 классы</td><td>01</td>
	<%
		dim i, istr
		for i = 3 to 18

			istr = CStr( i )
			if Len(istr)=1 Then istr = "0" & istr
			
			If i mod 2 <> 0 Then 
				response.write("<td>" & ITDisabled("T1601" & istr, 5, 5, bIsMNS ) &  "</td>")
			Else
				response.write("<td>" & IT("T1601" & istr, 5, 5 ) &  "</td>")
			End If
		next
	%>
</tr>

<tr align="center" valign="middle">
	<td align="left">5-9 классы</td><td>02</td>
	<%
		for i = 3 to 18

			istr = CStr( i )
			if Len(istr)=1 Then istr = "0" & istr
			
			If i mod 2 <> 0 Then 
				response.write("<td>" & ITDisabled("T1602" & istr, 5, 5, bIsMNS ) &  "</td>")
			Else
				response.write("<td>" & IT("T1602" & istr, 5, 5 ) &  "</td>")
			End If
		next
	%>
</tr>

<tr align="center" valign="middle">
	<td align="left">10-11 (12) классы</td><td>03</td>
	<%
		for i = 3 to 18

			istr = CStr( i )
			if Len(istr)=1 Then istr = "0" & istr
			
			If i mod 2 <> 0 Then 
				response.write("<td>" & ITDisabled("T1603" & istr, 5, 5, bIsMNS ) &  "</td>")
			Else
				response.write("<td>" & IT("T1603" & istr, 5, 5 ) &  "</td>")
			End If
		next
	%>
</tr>

<tr align="center" valign="middle">
	<td align="left">Всего (сумма строк 01-03)</td><td>04</td>
	<%
		for i = 3 to 18

			istr = CStr( i )
			if Len(istr)=1 Then istr = "0" & istr
			
			response.write("<td>" & ITS("T1604" & istr, 5, 5 ) &  "</td>")
		next
	%>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр. 04) изучающих 2-ой,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3-ий и более иностранные языки</td><td>05</td>
	<%
		for i = 3 to 18

			istr = CStr( i )
			if Len(istr)=1 Then istr = "0" & istr
			
			If i mod 2 <> 0 Then 
				response.write("<td>" & ITDisabled("T1605" & istr, 5, 5, bIsMNS ) &  "</td>")
			Else
				response.write("<td>" & IT("T1605" & istr, 5, 5 ) &  "</td>")
			End If
		next
	%>
</tr>

</TABLE>

</td></tr>
</table> <!-- format -->

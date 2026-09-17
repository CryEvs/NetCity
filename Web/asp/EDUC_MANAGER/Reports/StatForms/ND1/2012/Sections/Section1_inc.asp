<% ' © 2007-2012 IRTech. All rights reserved.
%>
<!-- Table.1 -->
<table class="print-block" border="0" cellpadding="0" cellspacing="0"><tr><td>
<div align="center">
	<b>Раздел 1. Численность детей и подростков в возрасте 7-18 лет, не обучающихся в образовательных учреждениях</b></div>
<br />
<br />
<div align="right">
	Коды по ОКЕИ: человек-792; единица-642</div>
<br /></td></tr><tr><td>
<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="0"
	width="100%">
	<tr align="center" valign="middle">
		<td rowspan="3">
			Наименование показателя
		</td>
		<td rowspan="3">
			№<br />
			строки
		</td>
		<td colspan="12">
			Число полных лет на 1 января <%=strShoolYearStart%> г.
		</td>
		<td rowspan="3">
			Всего нео-<br />
			бучающихся<br />
			в возрасте<br />
			7-18 лет<br />
			(сумма граф с<br />
			3 по 14)
		</td>
		<td rowspan="3">
			Из общей<br />
			числен-<br/>ности в
			сельской<br />
			местности<br />
			(из.гр.15)
		</td>
	</tr>
	<tr align="center" valign="middle">
		<%For i = 7 TO 18
		response.write("<td>" & i & "лет</td>")
		Next %>
	</tr>
	<tr align="center" valign="middle">
		<%For i = 7 TO 18
		response.write("<td>" & strShoolYearStart - i - 1 & " г.</td>")
		Next %>
	</tr>
	<tr align="center">
		<%For i = 1 To 16
		response.write("<td>" & i & "</td>")
	Next%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			Численность необучающихся в образовательных<br />
			учреждениях детей - всего (сумма строк 05, 09, 13, 22, 28)
		</td>
		<td>
			01
		</td>
		<%dim i
		for i = 3 to 16
			response.write("<td>" & ITS("T0101" & LPad2(i), 4, 5 ) & "</td>")
		next%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;в том числе девочек (сумма строк 06, 10, 14, 23, 29)
		</td>
		<td>
			02
		</td>
		<%
		for i = 3 to 16
			response.write("<td>" & ITS("T0102" & LPad2(i), 4, 5 ) & "</td>")
		next%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			из общей численности необучающихся детей - дети-беженцы и<br />
			вынужденные переселенцы<br />
			&nbsp;&nbsp;(из строки 01) *
		</td>
		<td>
			03
		</td>
		<%Call DrawWithSumLine(1, 16, 3, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;&nbsp;в том числе девочек *
		</td>
		<td>
			04
		</td>
		<%Call DrawWithSumLine(1, 16, 4, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			Из общей численности детей(из стр.01) не обучаются по состоянию<br />
			здоровья
		</td>
		<td>
			05
		</td>
		<%Call DrawWithSumLine(1, 16, 5, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;&nbsp;в том числе девочек
		</td>
		<td>
			06
		</td>
		<%Call DrawWithSumLine(1, 16, 6, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;&nbsp;из них (из строки 05):<br />
			&nbsp;&nbsp;&nbsp;&nbsp;не подлежат обучению (по заключению психолого-медико-<br />
			&nbsp;&nbsp;&nbsp;&nbsp;педагогических комиссий)
		</td>
		<td>
			07
		</td>
		<%Call DrawWithSumLine(1, 16, 7, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;освобождены на год
		</td>
		<td>
			08
		</td>
		<%Call DrawWithSumLine(1, 16, 8, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			Из общей численности детей(из стр.01) никогда не учились (кроме<br/>
			не подлежащих обучению по состоянию здоровья)
		</td>
		<td>
			09
		</td>
		<%Call DrawWithSumLine(1, 16, 9, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;в том числе девочек
		</td>
		<td>
			10
		</td>
		<%Call DrawWithSumLine(1, 16, 10, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;&nbsp;из них (из строки 09):<br />
			&nbsp;&nbsp;&nbsp;&nbsp;по причине материального положения родителей<br />
			&nbsp;&nbsp;&nbsp;&nbsp;(законных представителей)
		</td>
		<td>
			11
		</td>
		<%Call DrawWithSumLine(1, 16, 11, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;другие причины
		</td>
		<td>
			12
		</td>
		<%Call DrawWithSumLine(1, 16, 12, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			Выбыли из учреждений, реализующих общеобразовательные<br />
			программы, и не продолжают обучение * *
		</td>
		<td>
			13
		</td>
		<%Call DrawWithSumLine(1, 16, 13, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;в том числе девочек
		</td>
		<td>
			14
		</td>
		<%Call DrawWithSumLine(1, 16, 14, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;из них (из строки 13):<br />
			&nbsp;&nbsp;&nbsp;из 1-4 классов, не окончив 4 класс
		</td>
		<td>
			15
		</td>
		<%Call DrawWithSumLine(1, 16, 15, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;из 5-9 классов, не окончив 9 класс
		</td>
		<td>
			16
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 6 to 14
			response.write("<td>" & IT("T0116" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T011615", 4, 5)%>
		</td>
		<td>
			<%=IT("T011616", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;из 10-11 (12) классов, не окончив 11(12) класс
		</td>
		<td>
			17
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 9 to 14
			response.write("<td>" & IT("T0117" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T011715", 4, 5)%>
		</td>
		<td>
			<%=IT("T011716", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			в том числе(из строки 13) по причинам:<br />
			&nbsp;&nbsp;материального положения родителей (законных представителей)
		</td>
		<td>
			18
		</td>
		<%Call DrawWithSumLine(1, 16, 18, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;исключены
		</td>
		<td>
			19
		</td>
		<%Call DrawWithSumLine(1, 16, 19, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;поступили на работу
		</td>
		<td>
			20
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 10 to 14
			response.write("<td>" & IT("T0120" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012015", 4, 5)%>
		</td>
		<td>
			<%=IT("T012016", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;другие причины
		</td>
		<td>
			21
		</td>
		<%Call DrawWithSumLine(1, 16, 21, 15)%>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			Выбыли из образовательных учреждений начального<br />профессионального
			образования и не продолжают обучение
		</td>
		<td>
			22
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 7 to 14
			response.write("<td>" & IT("T0122" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012215", 4, 5)%>
		</td>
		<td>
			<%=IT("T012216", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;в том числе девочек
		</td>
		<td>
			23
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 7 to 14
			response.write("<td>" & IT("T0123" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012315", 4, 5)%>
		</td>
		<td>
			<%=IT("T012316", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;в том числе по причинам (из строки 22):<br />
			&nbsp;&nbsp;материального положения родителей (законных<br />
			&nbsp;&nbsp;представителей)
		</td>
		<td>
			24
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 7 to 14
			response.write("<td>" & IT("T0124" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012415", 4, 5)%>
		</td>
		<td>
			<%=IT("T012416", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;исключены
		</td>
		<td>
			25
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 7 to 14
			response.write("<td>" & IT("T0125" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012515", 4, 5)%>
		</td>
		<td>
			<%=IT("T012516", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;поступили на работу
		</td>
		<td>
			26
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 10 to 14
			response.write("<td>" & IT("T0126" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012615", 4, 5)%>
		</td>
		<td>
			<%=IT("T012616", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;другие причины
		</td>
		<td>
			27
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 7 to 14
			response.write("<td>" & IT("T0127" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012715", 4, 5)%>
		</td>
		<td>
			<%=IT("T012716", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			Выбыли из образовательных учреждений среднего<br />	профессионального
			образования и не продолжают обучение
		</td>
		<td>
			28
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 10 to 14
			response.write("<td>" & IT("T0128" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012815", 4, 5)%>
		</td>
		<td>
			<%=IT("T012816", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;в том числе девочек
		</td>
		<td>
			29
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 10 to 14
			response.write("<td>" & IT("T0129" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T012915", 4, 5)%>
		</td>
		<td>
			<%=IT("T012916", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;в том числе (из строки 28) по причинам:<br />
			&nbsp;&nbsp;материального положения родителей (законных представителей)
		</td>
		<td>
			30
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 10 to 14
			response.write("<td>" & IT("T0130" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T013015", 4, 5)%>
		</td>
		<td>
			<%=IT("T013016", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;исключены
		</td>
		<td>
			31
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 10 to 14
			response.write("<td>" & IT("T0131" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T013115", 4, 5)%>
		</td>
		<td>
			<%=IT("T013116", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;поступили на работу
		</td>
		<td>
			32
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 10 to 14
			response.write("<td>" & IT("T0132" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T013215", 4, 5)%>
		</td>
		<td>
			<%=IT("T013216", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			&nbsp;&nbsp;другие причины
		</td>
		<td>
			33
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<td>
			X
		</td>
		<%
		for i = 10 to 14
			response.write("<td>" & IT("T0133" & LPad2(i), 4, 5 ) & "</td>")
		next%>
		<td>
			<%=ITS("T013315", 4, 5)%>
		</td>
		<td>
			<%=IT("T013316", 4, 5)%>
		</td>
	</tr>
	<tr align="center" valign="middle">
		<td align="left">
			Численность обучающихся, систематически пропускающих<br />
			по неуважительным причинам занятия в образовательных<br />
			учреждениях
		</td>
		<td>
			34
		</td>
		<%Call DrawWithSumLine(1, 16, 34, 15)%>
	</tr>
</table></td></tr><tr><td>
<div align="left">
	Примечание:<br />
	*Строки 03, 04 заполняются на основании сведений, полученных от территориальных
	органов внутренних дел и органов Федеральной миграционной службы Российской Федерации<br />
	**В строке 13 учитываются обучающиеся всех видов образовательных учреждений, реализующих
	общеобразовательные программы, в том числе вечерних (сменных) общеобразовательных
	учреждений,образовательных центров и комплексов и пр.
</div></td></tr></table>
<!--End Table 1-->

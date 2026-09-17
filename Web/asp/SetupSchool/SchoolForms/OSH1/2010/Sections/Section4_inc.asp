<% ' © 2007-2008 IRTech. All rights reserved.
%>
<!-- таб.4 -->
	<b>Раздел 4. Состав обучающихся по классам</b><br/><br/>
	<div align="right">Коды по ОКЕИ: человек-792; единица-642</div>
</td></tr>
<tr><td>

<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="0" width="100%">
<tr align="center" valign="middle">
	<td rowspan="3">Классы</td><td rowspan="3">№<br/>строки</td><td rowspan="3">Число<br />классов<br />(ед)</td><td rowspan="3">Всего<br/>обучающихся<br/>по спискам<br/>вместе с новым<br />приемом<br/>(чел)</td><td colspan="3">Из гр. 4 в том числе</td><td colspan="16">кроме того, обучающихся в специальных (коррекционных) классах для детей с ограниченными возможностями здоровья</td>
</tr>
<tr align="center" valign="middle"><td rowspan="2">приходя-<br/>щих</td><td rowspan="2">второгод-<br/>ников</td><td rowspan="2">девочек</td>
	<td colspan="2">для неслышащих</td><td colspan="2">для<br/>слабослышащих и<br/>позднооглохших</td><td colspan="2">для незрячих</td>
	<td colspan="2">для слабовидящих<br/>и поздноослепших</td><td colspan="2">с тяжелой речевой<br/>патологией</td><td colspan="2">с нарушениями<br/>опорно-двигатель-<br/>ного аппарата</td>
	<td colspan="2">с задержкой<br/>психического<br/>развития</td><td colspan="2">с умственной<br/>отсталостью</td>

</tr>
<tr align="center" valign="middle">
	<%For i = 8 To 22 Step 2%>
		<td>число<br/>классов<br/>(ед)</td>
		<td>числен-<br/>ность<br/>обуча-<br/>ющихся<br/>(чел)</td>
	<%Next%>
</tr>
<tr align="center" valign="middle">
	<%For i = 1 To 23%>
		<td><%=i%></td>
	<%Next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Подготовительный класс</td>
	<td>01</td><%dim i
		response.write("<td>" & ITDisabled("T0401" & LPad2(3), 4, 5, bIsMNS ) & "</td>")
		for i = 4 to 7
			response.write("<td>" & IT("T0401" & LPad2(i), 4, 5 ) & "</td>")
		next
		for i = 8 to 23
			If (i mod 2)=0 Then
				response.write("<td>" & ITDisabled("T0401" & LPad2(i), 4, 5, bIsMNS ) & "</td>")
			Else
				response.write("<td>" & IT("T0401" & LPad2(i), 4, 5 ) & "</td>")
			End If
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left"><br/>1-й класс</td>
	<td>02</td><%
		response.write("<td>" & ITDisabled("T0402" & LPad2(3), 4, 5, bIsMNS ) & "</td>")
		for i = 4 to 7
			response.write("<td>" & IT("T0402" & LPad2(i), 4, 5 ) & "</td>")
		next
		for i = 8 to 23
			If (i mod 2)=0 Then
				response.write("<td>" & ITDisabled("T0402" & LPad2(i), 4, 5, bIsMNS ) & "</td>")
			Else
				response.write("<td>" & IT("T0402" & LPad2(i), 4, 5 ) & "</td>")
			End If
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left"><nobr>1-й класс, организованный в<br/>дошкольном учреждении</nobr></td>
	<td>03</td><%
		response.write("<td>" & ITDisabled("T0403" & LPad2(3), 4, 5, bIsMNS ) & "</td>")
		for i = 4 to 7
			response.write("<td>" & IT("T0403" & LPad2(i), 4, 5 ) & "</td>")
		next
		for i = 8 to 23
			If (i mod 2)=0 Then
				response.write("<td>" & ITDisabled("T0403" & LPad2(i), 4, 5, bIsMNS ) & "</td>")
			Else
				response.write("<td>" & IT("T0401" & LPad2(i), 4, 5 ) & "</td>")
			End If
		next%>
</tr>
<%dim j
	for j=2 to 12%>
<tr align="center" valign="middle">
	<td align="left"><%=j%>-й класс</td>
	<td><%=j+2%></td><%
		response.write("<td>" & ITDisabled("T04" & LPad2(j+2) & LPad2(3), 4, 5, bIsMNS ) & "</td>")
		for i = 4 to 7
			response.write("<td>" & IT("T04" & LPad2(j+2) & LPad2(i), 4, 5 ) & "</td>")
		next
		for i = 8 to 23
			If (i mod 2)=0 Then
				response.write("<td>" & ITDisabled("T04" & LPad2(j+2) & LPad2(i), 4, 5, bIsMNS ) & "</td>")
			Else
				response.write("<td>" & IT("T04" & LPad2(j+2) & LPad2(i), 4, 5 ) & "</td>")
			End If
		next%>
</tr><%
	next%>
<tr align="center" valign="middle">
	<td align="left">Всего сумма строк (01-14)</td>
	<td>15</td><%
		for i = 3 to 23
			response.write( "<td>" & ITS("T0415" & LPad2(i), 5, 10 ) & "</td>" )
		next%>
</tr>
<tr align="center" valign="middle">
	<td align="left">Кроме того, дошкольная группа</nobr></td>
	<td>16</td><%
		response.write("<td>" & ITDisabled("T0416" & LPad2(3), 4, 5, bIsMNS ) & "</td>")
		for i = 4 to 7
			response.write("<td>" & IT("T0416" & LPad2(i), 4, 5 ) & "</td>")
		next
		for i = 8 to 23
			If (i mod 2)=0 Then
				response.write("<td>" & ITDisabled("T0416" & LPad2(i), 4, 5, bIsMNS ) & "</td>")
			Else
				response.write("<td>" & IT("T0416" & LPad2(i), 4, 5 ) & "</td>")
			End If
		next%>
</tr>
</TABLE>
</td></tr>
<tr><td><br/>
Примечание: графу 5 по всем строкам заполняет школа-интернат и другие учреждения, где дети не только проживают, но и обучаются. В графе 6 показывают второгодников и поступивших из числа выбывших в прошлом учебном году и ранее. В строке 16 графе 3 показывают число дошкольных групп.<br/>
<!-- end of таб.4 -->
</td></tr>

<tr><td>
<div align="right">Код по ОКЕИ: человек-792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
	<td>Наименование</td><td>№<br/>строки</td><td>Численность</td>
</tr>
<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность детей-сирот и детей, оставшихся без попечения родителей (устроенные под надзор в образовательных организациях) (чел)</td><td>17</td><td><%=IT("T0417", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность детей с умственной отсталостью (заполняет специальное (коррекционное) учреждение для детей с ограниченными возможностями здоровья) (чел)</td><td>18</td><td><%=IT("T0418", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.18) численность воспитанников (без приходящих)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;с умственной отсталостью (заполняет школа-интернат) (чел)</td><td>19</td><td><%=IT("T0419", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность детей, обучающихся индивидуально на дому по программам специальных (коррекционных) образовательных учреждений I-VIII видов (чел)</td><td>20</td><td><%=IT("T0420", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.20) обучающихся с использованием<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дистанционных технологий (чел)</td><td>21</td><td><%=IT("T0421", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся на дому по общеобразовательным программам (чел)</td><td>22</td><td><%=IT("T0422", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.22) обучающихся с использованием<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дистанционных технологий (чел)</td><td>23</td><td><%=IT("T0423", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся на дому по индивидуальным учебным планам (чел)</td><td>24</td><td><%=IT("T0424", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.24) обучающихся с использованием<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дистанционных технологий (чел)</td><td>25</td><td><%=IT("T0425", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность детей, занимающихся в классах компенсирующего обучения (чел)</td><td>26</td><td><%=IT("T0426", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность обучающихся, воспитанников с ограниченными возможностями здоровья в обычных классах* (чел)</td><td>27</td><td><%=IT("T0427", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность детей-инвалидов (чел)</td><td>28</td><td><%=IT("T0428", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность детей, обучающихся в форме семейного образования</td><td>29</td><td><%=IT("T0429", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность слабовидящих детей, обучающихся в учреждениях для незрячих детей (чел)</td><td>30</td><td><%=IT("T0430", 10, 10 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность незрячих детей, обучающихся в учреждениях для слабовидящих детей (чел)</td><td>31</td><td><%=IT("T0431", 10, 10 )%></td>
</tr>
</TABLE>
</td></tr>
<tr><td><br/>
Для целей настоящего отчета: * - под обычным классом в стр.27 подразумевается любой класс, кроме специального (коррекционного) класса, организованного при общеобразовательном учреждении
<!-- end of таб.4 -->
</td></tr>
</table> <!-- format -->

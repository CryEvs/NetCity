<% ' © 2007-2017 IRTech. All rights reserved.%>
<tr>
	<td>
		<div style="margin-top:20px; margin-bottom:10px; text-align:center;"><b>4.4. Электронные ресурсы</b></div>
		<div align="right">Код по ОКЕИ: единица - 642</div>

		<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
			<tr align="middle" valign="center">
				<td>Наименование показателей</td>
				<td>№<br />строки</td>
				<td>Всего</td>
			</tr>

			<tr align="middle" valign="center">
				<td>1</td><td>2</td><td>3</td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Число персональных компьютеров - всего</td>
				<td align="center">01</td>
				<%=DrawInputs("04.4", 1, 3, 3)%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;из них доступны для использования детьми</td>
				<td align="center">02</td>
				<%=DrawInputs("04.4", 2, 3, 3)%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Число компьютеров, имеющих доступ к сети Интернет</td>
				<td align="center">03</td>
				<%=DrawInputs("04.4", 3, 3, 3)%>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Дошкольная образовательная организация имеет (укажите соответствующий код: да - 1, нет - 0):<br>
					&nbsp;&nbsp;адрес электронной почты</td>
				<td align="center">04</td>
				<td><%=IB0("T04.40403")%></td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;собственный сайт в сети Интернет</td>
				<td align="center">05</td>
				<td><%=IB0("T04.40503")%></td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;в том числе предоставляет на своем сайте нормативно закрепленный перечень сведений о своей <br>
					&nbsp;&nbsp;&nbsp;&nbsp;деятельности</td>
				<td align="center">06</td>
				<td><%=IB0("T04.40603")%></td>
			</tr>
		</table>
	</td>
</tr>

<!-- Справка -->
<tr>
	<td>
		<table class="ThinTable" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td align="left"><br/><br/>Должностное лицо, ответственное за<br/>предоставление первичных статистических<br/>данных (лицо, уполномоченное предоставлять<br/>первичные статистические данные от имени</td>
				<td></td><td></td><td></td><td></td><td></td>
			</tr>

			<tr>
				<td align="left">юридического лица)</td>
				<td><%=IT("T04.4_post", 33, 150 )%></td>
				<td></td>
				<td><%=IT("T04.4_fio", 33, 150 )%></td>
				<td></td>
				<td></td>
			</tr>
			<tr align="center" valign="bottom">
				<td></td>
				<td>____________________________</td>
				<td>&nbsp;&nbsp;</td>
				<td>____________________________</td>
				<td>&nbsp;&nbsp;</td>
				<td>____________________________</td>
			</tr>

			<tr align="center" valign="top">
				<td></td>
				<td>(должность)</td>
				<td>&nbsp;&nbsp;</td>
				<td>(Ф.И.О.)</td>
				<td>&nbsp;&nbsp;</td>
				<td>(подпись)</td>
			</tr>

			<tr><td><br/></td></tr>

			<tr>
				<td></td>
				<td><%=IT("T04.4_contact", 33, 12 )%></td>
				<td></td>
				<td><%=IT("T04.4_email", 33, 150 )%></td>
				<td></td>
				<td align="center"><%=IT("T04.4_day", 1, 2 )%>&nbsp;<%=IT("T04.4_month", 5, 10 )%>&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T04.4_year", 1, 2 )%></td>
			</tr>

			<tr align="center" valign="bottom">
				<td></td>
				<td>____________________________</td>
				<td>&nbsp;&nbsp;</td>
				<td>____________________________</td>
				<td>&nbsp;&nbsp;</td>
				<td>&nbsp;&nbsp;&nbsp;&nbsp;"__"&nbsp__________20__год</td>
			</tr>

			<tr align="center" valign="top">
				<td></td>
				<td>(номер контактного телефона)</td>
				<td></td>
				<td>(Email)</td>
				<td>&nbsp;&nbsp;</td>
				<td>(дата составления документа)</td>
			</tr>
		</table>
	</td>
</tr>
</table> <!-- format -->
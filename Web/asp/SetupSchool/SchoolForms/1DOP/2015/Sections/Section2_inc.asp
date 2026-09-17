<% ' © 2007-2016 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<table>
				<tr>
					<td>
						<div align="center" style="margin:10px;"><b>Раздел 2. Сведения о персонале организации</b></div>
						<div align="right">Код по ОКЕИ: человек - 792</div>

						<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0>
							<tr align="middle" valign="top" rowspan="2">
								<td rowspan="2">Наименование <br />показателей</td>
								<td rowspan="2">№<br />строки</td>
								<td rowspan="2">Всего <br />работников</td>
								<td colspan="4">из них (из гр. 3) имеют образование:</td>
							</tr>
							<tr align="middle" valign="top">
								<td>высшее</td>
								<td>из них <br />педагогическое</td>
								<td>среднее профессиональное <br />образование по программам <br />подготовки специалистов <br />среднего звена</td>
								<td>из них <br />педагогическое</td>
							</tr>

							<tr align="middle" valign="center">
								<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
							</tr>

							<tr align="middle" valign="center">
								<td align="left">Численность педагогических <br />работников - всего</td>
								<td align="center">01</td>
								<%=DrawInputs(2, 1, 3, 7)%>
							</tr>

							<tr align="middle" valign="center">
								<td align="left">&nbsp;&nbsp;&nbsp;из них женщины</td>
								<td align="center">02</td>
								<%=DrawInputs(2, 2, 3, 7)%>
							</tr>
						</table>
					</td>
				</tr>
			</table>

		</td>
	</tr>

	<!--Дата и подпись-->
	<tr>
		<td>
			<table class="ThinTable" cellpadding="0" cellspacing="0">
				<tr align="center" valign="middle">
					<td align="right"><br/><br/>Должностное лицо, ответственное за<br/>предоставление статистической информации<br/>(лицо, уполномоченное предоставлять<br/>статистическую информацию от имени</td>
					<td></td><td></td><td></td><td></td><td></td><td></td>
				</tr>

				<tr>
					<td align="right">юридического лица)</td>
					<td>&nbsp;&nbsp;</td>
					<td><%=IT("T02_post", 33, 12 )%></td>
					<td></td>
					<td><%=IT("T02_fio", 33, 150 )%></td>
					<td></td>
					<td></td>
				</tr>

				<tr align="center" valign="bottom">
					<td></td>
					<td></td>
					<td>____________________________</td>
					<td>&nbsp;&nbsp;</td>
					<td>____________________________</td>
					<td>&nbsp;&nbsp;</td>
					<td>____________________________</td>
				</tr>

				<tr align="center" valign="top">
					<td></td>
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
					<td>&nbsp;&nbsp;</td>
					<td><%=IT("T02_contact", 33, 12 )%></td>
					<td></td>
					<td><%=IT("T02_email", 33, 80 )%></td>
					<td></td>
					<td>&nbsp;&nbsp;<%=IT("T02_day", 2, 2 )%>&nbsp;<%=IT("T02_month", 15, 10 )%>&nbsp;&nbsp;&nbsp;<%=IT("T02_year", 1, 2 )%></td>
				</tr>

				<tr align="center" valign="bottom">
					<td></td>
					<td></td>
					<td>____________________________</td>
					<td>&nbsp;&nbsp;</td>
					<td>E-mail:&nbsp;______________________</td>
					<td>&nbsp;&nbsp;</td>
					<td>"____"______________20___год</td>
				</tr>

				<tr align="center" valign="top">
					<td></td>
					<td></td>
					<td>(номер контактного телефона)</td>
					<td></td>
					<td></td>
					<td>&nbsp;&nbsp;</td>
					<td>(дата составления документа)</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
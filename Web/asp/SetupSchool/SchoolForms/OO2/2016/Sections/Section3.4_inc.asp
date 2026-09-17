<% ' © 2007-2017 IRTech. All rights reserved. %>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>3.4. Сведения о численности обучающихся в организации</b></div>
			<br>
			<div align="right">Код по ОКЕИ: человек – 792</div>

			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td>Наименование показателей</td>
					<td>№ <br>строки</td>
					<td>Численность обучающихся <br>(на конец отчетного года)</td>
					<td>Среднегодовая численность <br>обучающихся <br>(с одним десятичным знаком)</td>
				</tr>
				<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td></tr>
				
				<tr align="middle" valign="center">
					<td align="left">&nbsp;Численность  учащихся  - всего (сумма строк 02-04)</td>
					<td>01</td>
					<td><%=ITS("T03.40103", 4, 8)%></td>
					<td><%=ITS("T03.40104", 4, 9)%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;
						из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;
						в 1-4 классах
					</td>
					<td>02</td>
					<td><%=IT("T03.40203", 4, 8)%></td>
					<td><%=IT("T03.40204", 4, 9)%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;
						в  5-9 классах
					</td>
					<td>03</td>
					<td><%=IT("T03.40303", 4, 8)%></td>
					<td><%=IT("T03.40304", 4, 9)%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;
						в 10-11 (12) классах
					</td>
					<td>04</td>
					<td><%=IT("T03.40403", 4, 8)%></td>
					<td><%=IT("T03.40404", 4, 9)%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Численность  воспитанников, занимающихся в дошкольных  образовательных группах
					</td>
					<td>05</td>
					<td><%=IT("T03.40503", 4, 8)%></td>
					<td><%=IT("T03.40504", 4, 9)%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Численность обучающихся в подготовительных классах
					</td>
					<td>06</td>
					<td><%=IT("T03.40603", 4, 8)%></td>
					<td><%=IT("T03.40604", 4, 9)%></td>
				</tr>
			</table>
		</td>
	</tr>

	<tr>
		<td>
			<table class="ThinTable" cellpadding="0" cellspacing="0">
					<tr align="center" valign="middle">
						<td align="left"><br/><br/>Должностное лицо, ответственное за<br/>предоставление статистической информации<br/>(лицо, уполномоченное предоставлять<br/>статистическую информацию от имени</td>
						<td></td><td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td align="left">юридического лица)</td>
						<td><%=IT("T03.4_post", 33, 150 )%></td>
						<td></td>
						<td><%=IT("T03.4_fio", 33, 150 )%></td>
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
						<td><%=IT("T03.4_phone", 33, 12 )%></td>
						<td></td>
						<td><%=IT("T03.4_email", 33, 150 )%></td>
						<td></td>
						<td hidden align="center"><%=IT("T03.4_day", 1, 2 )%>&nbsp;<%=IT("T03.4_month", 5, 10 )%>&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T03.4_year", 1, 2 )%></td>
						<td><%=IT("T03.4_date", 33, 150 )%></td>
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
						<td>(номер контактного телефона)</td>
						<td></td>
						<td>(Email)</td>
						<td>&nbsp;&nbsp;</td>
						<td>(дата составления документа)</td>
					</tr>
				</table>
		</td>
	</tr>
</table>
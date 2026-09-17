<% ' © 2007-2008 IRTech. All rights reserved.
%>
<!-- таб.V -->
<tr><td>
<table align="center" cellspacing="0" cellpadding="1" width="100%">
	<tr>
		<td align="center">
			<br>
			<br>
			<b>Раздел 5. Распределение обучающихся по возрасту<br>
			</b>
			<br>
			<div align="right">
				Код по ОКЕИ: человек - 792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center" valign="middle">
					<td rowspan="3">
						Наименование
					</td>
					<td rowspan="3">
						№<br>
						строки
					</td>
					<td rowspan="3">
						Всего обучаю-<br>
						щихся<br>
						(сумма<br>
						граф 4-7)
					</td>
					<td colspan="4">
						Из них в возрасте (число полных лет на 1 января
						<%=strShoolYearEnd%>
						года)
					</td>
				</tr>
				<tr align="center" valign="middle">
					<td>
						15 лет и моложе
					</td>
					<td>
						16-17 лет
					</td>
					<td>
						18-29 лет
					</td>
					<td>
						30 лет и старше
					</td>
				</tr>
				<tr align="center" valign="middle">
					<td>
						<%=CStr(CLng(strShoolYearEnd)-16)%>
						и<br>
						последующие<br>
						годы
					</td>
					<td>
						<%=CStr(CLng(strShoolYearEnd)-17)%>
						-<%=CStr(CLng(strShoolYearEnd)-18)%>
						г.г.
					</td>
					<td>
						<%=CStr(CLng(strShoolYearEnd)-19)%>
						-<%=CStr(CLng(strShoolYearEnd)-30)%>
						г.г.
					</td>
					<td>
						<%=CStr(CLng(strShoolYearEnd)-31)%>
						год и ранее
					</td>
				</tr>
				<tr align="center" valign="middle">
					<td>
						1
					</td>
					<td>
						2
					</td>
					<td>
						3
					</td>
					<td>
						4
					</td>
					<td>
						5
					</td>
					<td>
						6
					</td>
					<td>
						7
					</td>
				</tr>
				<tr align="center" valign="middle">
					<td align="left">
						Всего обучающихся
					</td>
					<td>
						01
					</td>
					<%
		for i = 3 to 7
			if i=3 then
				response.write("<td>" & ITS(GetOshFieldName(5, 1, i), 4, 5 ) & "</td>")
			else
				response.write("<td>" & IT(GetOshFieldName(5, 1, i), 4, 5 ) & "</td>")
			end if
		next%>
				</tr>
				<tr align="center" valign="middle">
					<td align="left">
						&nbsp;из них обучающихся в 10-12 (16) классах
					</td>
					<td>
						02
					</td>
					<%
		for i = 3 to 7
			if i=3 then
				response.write("<td>" & ITS(GetOshFieldName(5, 2, i), 4, 5 ) & "</td>")
			else
				response.write("<td>" & IT(GetOshFieldName(5, 2, i), 4, 5 ) & "</td>")
			end if
		next%>
				</tr>
				<tr align="center" valign="middle">
					<td align="left">
						Численность обучающихся, окончивших среднее общеобразовательное<br>
						учреждение и получивших аттестат о среднем (полном) общем образовании<br>
						(раздел 4 сумма строк 04; 05)
					</td>
					<td>
						03
					</td>
					<%
		for i = 3 to 7
			if i=3 then
				response.write("<td>" & ITS(GetOshFieldName(5, 3, i), 4, 5 ) & "</td>")
			else
				response.write("<td>" & IT(GetOshFieldName(5, 3, i), 4, 5 ) & "</td>")
			end if
		next%>
				</tr>
			</table>
			<!-- End Of таб.V -->
			<br>
			<br>
			<br>
			<br>
			<table align="left" cellspacing="0" cellpadding="2" width="60%">
					<tr valign="middle">
					<td align="right">
						Из общей численности (гр. 3 стр. 01) - женщин
					</td>
					<td align="center">
						(04)
					</td>
					<td align="center">
						<%=IT("T050403", 4, 5 )%>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table></td></tr></table>

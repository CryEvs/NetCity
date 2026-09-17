<% ' © 2007-2018 IRTech. All rights reserved. %>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center" style="margin:10px;"><b>3.2. Распределение педагогических работников по возрасту</b></div>
			<div align="center" style="margin-bottom:20px;">(без внешних совместителей и работавших по договорам гражданско-правового характера)</div>
			<div align="right">Код по ОКЕИ: человек - 792</div>
	
			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование <br>показателей</td>
					<td rowspan="2">№<br>строки</td>
					<td colspan="10">Число полных лет по состоянию на 1 января <%=strShoolYearEnd%>  года</td>
				</tr>
				<tr align="middle" valign="center">
					<td>моложе 25</td>
					<td>25-29</td>
					<td>30-34</td>
					<td>35-39</td>
					<td>40-44</td>
					<td>45-49</td>
					<td>50-54</td>
					<td>55-59</td>
					<td>60-64</td>
					<td>
						65 и <br>
						старше
					</td>
				</tr>

				<tr align="middle" valign="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
				</tr>
				
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Численность педагогических <br>
						&nbsp;работников - всего
					</td>
					<td align="center">01</td>
					<%=DrawInputs("03.2", 1, 3, 12)%>
				</tr>
	
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них педагогов <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дополнительного <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;образования детей</td>
					<td align="center">02</td>
					<%=DrawInputs("03.2", 2, 3, 12)%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Численность педагогических <br>
						&nbsp;работников – женщин <br>
						&nbsp;(из стр. 01)
					</td>
					<td align="center">03</td>
					<%=DrawInputs("03.2", 3, 3, 12)%>
				</tr>

			</table>

		</td>
	</tr>
	<!-- Справка -->
	<tr>
		<td>
			<table class="ThinTable" cellpadding="0" cellspacing="0">
				<tr align="center" valign="middle">
					<td align="left"><br/><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Должностное лицо, ответственное за<br>
						предоставление статистической информации <br>
						(лицо, уполномоченное предоставлять <br>
						статистическую информацию от имени 
					</td>
					<td></td><td></td><td></td><td></td><td></td>
				</tr>

				<tr>
					<td align="left">юридического лица)</td>
					<td><%=IT("T03.2_post", 33, 150 )%></td>
					<td></td>
					<td><%=IT("T03.2_fio", 33, 150 )%></td>
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
					<td><%=IT("T03.2_contact", 33, 12 )%></td>
					<td></td>
					<td><%=IT("T03.2_email", 33, 150 )%></td>
					<td></td>
					<td align="center"><%=IT("T03.2_day", 1, 2 )%>&nbsp;<%=IT("T03.2_month", 5, 10 )%>&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T03.2_year", 1, 2 )%></td>
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
	<tr>
		<td><br></td>
	</tr>
</table>
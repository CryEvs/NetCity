<% ' © 2007-2018 IRTech. All rights reserved. %>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center" style="margin:10px;"><b>Раздел 3. Сведения о педагогических работниках организации</b></div>
			<div align="center"><b>3.1. Распределение педагогических работников по уровню образования и полу</b></div>
			<div align="center" style="margin-bottom:20px;">(без внешних совместителей и работавших по договорам гражданско-правового характера)</div>
			<div align="right">Код по ОКЕИ: человек - 792</div>
	
			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование <br>показателей</td>
					<td rowspan="2">№<br>строки</td>
					<td rowspan="2">Всего <br>работников</td>
					<td colspan="4">из них (из гр.3) имеют образование:</td>
					<td rowspan="2">
						Кроме того, <br>
						численность <br>
						внешних <br>
						совместителей
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>высшее</td>
					<td>
						из них (из гр. 4) <br>
						педагогическое
					</td>
					<td>
						среднее <br>
						профессиональное <br>
						образование по <br>
						программам подготовки <br>
						специалистов среднего <br>
						звена
					</td>
					<td>
						из них (из гр. 6) <br>
						педагогическое
					</td>
				</tr>

				<tr align="middle" valign="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
				</tr>
				
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Численность педагогических <br>
						&nbsp;работников - всего
					</td>
					<td align="center">01</td>
					<%=DrawInputs("03.1", 1, 3, 8)%>
				</tr>
	
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них педагогов <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дополнительного <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;образования детей</td>
					<td align="center">02</td>
					<%=DrawInputs("03.1", 2, 3, 8)%>
				</tr>

				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Численность педагогических <br>
						&nbsp;работников – женщин <br>
						&nbsp;(из стр. 01)
					</td>
					<td align="center">03</td>
					<%=DrawInputs("03.1", 3, 3, 8)%>
				</tr>

			</table>

		</td>
	</tr>
	<tr>
		<td><br/></td>
	</tr>
</table>
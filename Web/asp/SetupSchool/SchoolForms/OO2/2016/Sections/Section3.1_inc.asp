<% ' © 2007-2017 IRTech. All rights reserved. %>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<br><br>
			<div align="center"><b>Раздел 3. Финансово-экономическая деятельность  организации</b></div>
			<div align="center"><b>3.1. Распределение объема средств  организации по источникам их получения и видам деятельности</b></div>
			<br>
			<div align="right">Код по ОКЕИ: тысяча рублей – 384 (с одним десятичным знаком)</div>

			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование показателей</td>
					<td rowspan="2">№ <br>строки</td>
					<td rowspan="2">Всего <br>(сумма гр. 4, 5)</td>
					<td colspan="2">в том числе по видам деятельности</td>
				</tr>
				<tr align="middle" valign="center">
					<td>образовательная</td>
					<td>прочие виды</td>
				</tr>
				<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
				
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Объем поступивших средств  (за отчетный год) – всего<br>
						&nbsp;(сумма строк  02, 06, 07, 08, 09)</td>
					<td>01</td>
					<%=DrawInputsWithTotalsEx(1,3,5,"03.1", Array(3,4,5),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						в том числе средства:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						бюджетов всех уровней (субсидий)  – всего (сумма строк 03–05)
					</td>
					<td>02</td>
					<%=DrawInputsWithTotalsEx(2,3,5,"03.1", Array(3,4,5),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						в том числе бюджета: <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						федерального
					</td>
					<td>03</td>
					<%=DrawInputsWithTotalsEx(3,3,5,"03.1", Array(3),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						субъекта Российской Федерации 
					</td>
					<td>04</td>
					<%=DrawInputsWithTotalsEx(4,3,5,"03.1", Array(3),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						местного 
					</td>
					<td>05</td>
					<%=DrawInputsWithTotalsEx(5,3,5,"03.1", Array(3),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;организаций
					</td>
					<td>06</td>
					<%=DrawInputsWithTotalsEx(6,3,5,"03.1", Array(3),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;населения
					</td>
					<td>07</td>
					<%=DrawInputsWithTotalsEx(7,3,5,"03.1", Array(3),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;внебюджетных фондов 
					</td>
					<td>08</td>
					<%=DrawInputsWithTotalsEx(8,3,5,"03.1", Array(3),6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;иностранных источников
					</td>
					<td>09</td>
					<%=DrawInputsWithTotalsEx(9,3,5,"03.1", Array(3),6,8)%>
				</tr>
			</table>
		</td>
	</tr>

	<!-- Справка -->
	<tr>
		<td>
			<br>
			<table class="ThinTable" align="left" border="0" cellpadding="3" cellspacing="0">
				<tr>
					<td align="left"><b>Справка 5.</b>&nbsp;&nbsp;Остаток средств:</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						 на начало отчетного года&nbsp;
					</td>
					<td>(10)</td>
					<td>&nbsp;<%=IT("T03.11003", 6, 8)%>;</td>
				</tr>
				<tr>
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						на конец  отчетного года&nbsp;
					</td>
					<td>(11)</td>
					<td>&nbsp;<%=IT("T03.11103", 6, 8)%>&nbsp;&nbsp;&nbsp;Код по ОКЕИ: тысяча рублей – 384 (с одним десятичным знаком)</td>
				</tr>
			</table>
		</td>
	</tr>

	<!-- Справка -->
	<tr>
		<td>
			<br>
			<table class="ThinTable" align="left" border="0" cellpadding="3" cellspacing="0">
				<tr>
					<td align="left"><b>Справка 6.</b>&nbsp;&nbsp;Организация переведена на нормативное подушевое финансирование   (код:  да – 1, нет – 0)  </td>
					<td>(12)</td>
					<td>&nbsp;<%=IB0("T03.11203")%></td>
				</tr>
			</table>
		</td>
	</tr>
</table>
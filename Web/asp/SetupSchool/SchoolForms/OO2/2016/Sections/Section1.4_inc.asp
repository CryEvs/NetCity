<% ' © 2007-2017 IRTech. All rights reserved. %>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<br><br>
			<div align="center"><b>1.4.	Охват обучающихся горячим питанием</b></div>
			<div align="center"><i>(на конец отчетного года)</i></div>
			<br>
			<div align="right">Код по ОКЕИ: человек –792</div>

			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование <br>показателей</td>
					<td rowspan="2">№ <br>строки</td>
					<td rowspan="2">Численность обучающихся, <br>обеспеченных горячим <br>питанием <br>(сумма граф 5, 6, 7)</td>
					<td rowspan="2">из гр. 3 – <br>имеющих льготы <br>по оплате <br>питания</td>
					<td colspan="3">Из гр. 3 -  численность обучающихся, получающих</td>
				</tr>
				<tr align="middle" valign="center">
					<td>только горячие <br>завтраки</td>
					<td>только горячие <br>обеды</td>
					<td>и завтраки, и обеды</td>
				</tr>
				<tr align="middle" valign="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
				</tr>
				
				<tr align="middle" valign="center">
					<td align="left">&nbsp;1-4  классы</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1,3,7,"01.4",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;5-9  классы</td>
					<td>02</td>
					<%=DrawInputsWithTotals(2,3,7,"01.4",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;10-11 (12) классы</td>
					<td>03</td>
					<%=DrawInputsWithTotals(3,3,7,"01.4",Array(3))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;Всего (сумма строк 01 – 03)</td>
					<td>04</td>
					<%=DrawInputsWithTotals(4,3,7,"01.4",Array(3,4,5,6,7))%>
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
					<td align="left"><b>Справка 4.</b></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						 Число посадочных мест в столовой (зале для приема пищи) <sup>1</sup>&nbsp;
					</td>
					<td>(05)</td>
					<td>&nbsp;<%=IT("T01.40503", 5, 5)%>;</td>
				</tr>
				<tr>
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						в том числе в приспособленных  помещениях</td>
					<td>(06)</td>
					<td>&nbsp;<%=IT("T01.40603", 5, 5)%>&nbsp;&nbsp;&nbsp;Код по ОКЕИ: место – 698</td>
				</tr>
			</table>
		</td>
	</tr>
	
	<tr>
		<td>
			<br>
			<table class="ThinTable" align="left" border="0" cellpadding="3" cellspacing="0">
				<tr>
					<td>______________________</td>
				</tr>
				<tr>
					<td>
						<sup>1</sup>&nbsp;Заполняют организации, имеющие столовую (зал для приема пищи), заполнившие в разделе 1.2. строку 04 графы 3,4.
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
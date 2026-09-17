<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td align="center">
			<div align="right">
				Коды по ОКЕИ: человек - 792; тысяча рублей - 384 (с одним десятичным знаком)</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="3">
						Категория персонала
					</td>
					<td rowspan="3" align="center">
						Код <br/>
						кате-<br/>
						гории <br/>
						персо-<br/>
						нала
					</td>
					<td rowspan="3" align="center">
						№<br/>
						стро-<br/>
						ки
					</td>
					<td colspan="2">
						Средняя численность<br/>
						работников, человек
					</td>
					<td colspan="3">
						Фонд начисленной заработной платы <br/>
						работников за отчетный период, тыс. руб. <br/>
						с одним десятичным знаком
					</td>
					<td colspan="6">
						Фонд начисленной заработной платы работников по источникам <br/>
						финансирования, тыс. руб. с одним десятичным знаком
					</td>
				</tr>
				<tr align="center">
					<td rowspan="2">
						списочного <br/>
						состава (без <br/>
						внешних <br/>
						совмес-тителей)<sup>1</sup>
					</td>
					<td rowspan="2">
						внешних <br/>
						совмес-<br/>
						тителей<sup>2</sup>
					</td>
					<td colspan="2">
						списочного состава (без <br/>
						внешних совместителей)
					</td>
					<td rowspan="2">
						внешних<br/>
						совмести-<br/>
						телей
					</td>
					<td colspan="3">
						из гр. 3 списочного состава (без <br/>
						внешних совместителей)
					</td>
					<td colspan="3">
						из гр. 5 внешних совместителей
					</td>
				</tr>
				<tr align="center">
					<td>
						всего
					</td>
					<td>
						в том числе <br/>
						по внутрен-<br/>
						нему <br/>
						совмести-<br/>
						тельству<sup>3</sup>
					</td>
					<td>
						за счет <br/>
						средств <br/>
						бюджетов <br/>
						всех <br/>
						уровней <br/>
						(субсидий)
					</td>
					<td>
						ОМС
					</td>
					<td>
						средства<br/>
						от при-<br/>
						носящей <br/>
						доход <br/>
						деятель-<br/>
						ности
					</td>
					<td>
						за счет <br/>
						средств <br/>
						бюджетов <br/>
						всех <br/>
						уровней <br/>
						(субсидий)
					</td>
					<td>
						ОМС
					</td>
					<td>
						средства<br/>
						от при-<br/>
						носящей <br/>
						доход <br/>
						деятель-<br/>
						ности
					</td>
				</tr>
				
				<tr align="center">
					<td>А</td><td>Б</td><td>В</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Всего работников<br/>
						(сумма строк 02 - 04, 06 - 08, 10 - 13)
					</td>
					<td>100</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 1, 11, 1, Array(1,2,3,4,5,6,7,8,9,10,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br/>
						&nbsp;&nbsp;&nbsp;руководитель организации 
					</td>
					<td>101</td>
					<td>02</td>
					<%Call DrawInputs(1,2,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;заместители руководителя и<br/>
						&nbsp;&nbsp;&nbsp;руководители структурных<br/>
						&nbsp;&nbsp;&nbsp;подразделений (кроме врачей - <br/>
						&nbsp;&nbsp;&nbsp;руководителей структурных <br/>
						&nbsp;&nbsp;&nbsp;подразделений), иные руководители
					</td>
					<td>102</td>
					<td>03</td>
					<%Call DrawInputs(1,3,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						педагогические работники
					</td>
					<td>281</td>
					<td>04</td>
					<%Call DrawInputs(1,4,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них преподаватели
					</td>
					<td>282</td>
					<td>05</td>
					<%Call DrawInputs(1,5,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						врачи (кроме зубных), включая <br/>
						врачей - руководителей структурных <br/>
						подразделений
					</td>
					<td>401</td>
					<td>06</td>
					<%Call DrawInputs(1,6,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						социальные работники
					</td>
					<td>501</td>
					<td>07</td>
					<%Call DrawInputs(1,7,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						научные работники
					</td>
					<td>301</td>
					<td>08</td>
					<%Call DrawInputs(1,8,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них научные сотрудники
						
					</td>
					<td>311</td>
					<td>09</td>
					<%Call DrawInputs(1,9,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						средний медицинский <br/>
						(фармацевтический) персонал <br/>
						(персонал, обеспечивающий <br/>
						предоставление медицинских услуг)
					</td>
					<td>411</td>
					<td>10</td>
					<%Call DrawInputs(1,10,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						младший медицинский <br/>
						(фармацевтический) персонал <br/>
						(персонал, обеспечивающий <br/>
						предоставление медицинских услуг)
					</td>
					<td>421</td>
					<td>11</td>
					<%Call DrawInputs(1,11,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						работники, имеющие высшее <br/>
						фармацевтическое или иное <br/>
						высшее образование, <br/>
						предоставляющие медицинские <br/>
						услуги (обеспечивающие <br/>
						предоставление медицинских услуг)
					</td>
					<td>431</td>
					<td>12</td>
					<%Call DrawInputs(1,12,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						прочий персонал
					</td>
					<td>103</td>
					<td>13</td>
					<%Call DrawInputs(1,13,1,11)%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="left">
			<br/>
			<sup>1</sup> Показывается среднесписочная численность работников (в целых единицах).<br/>
			<sup>2</sup> Средняя численность внешних совместителей исчисляется пропорционально фактически отработанному времени (допускается заполнение с десятичным знаком).<br/>
			<sup>3</sup> Включая вознаграждение за работу по договорам гражданско-правового характера, заключенным работником списочного состава со своей организацией.
		</td>
	</tr>
	<tr>
		<td>
		<br/>
			<table border=0 cellpadding=5>
				<tr>
					<td align="left">Должностное лицо, ответственное за предоставление статистической информации<br />
					(лицо, уполномоченное предоставлять статистическую информацию от имени<br />
					юридического лица) 
					</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;<br><br></td>
					<td align=center>_______________________<br>(должность)</td>
					<td align=center>_______________________<br>(Ф.И.О.)</td>
					<td align=center>_________________<br>(подпись)</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td align=center>_______________________<br>(номер контактного телефона)</td>
					<td align=left colspan=2>"____" __________________<br>(дата составления документа)</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

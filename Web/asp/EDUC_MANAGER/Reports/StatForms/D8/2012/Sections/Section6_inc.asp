<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td>
			<div align="center"><b>Раздел 6. Сведения о профильном обучении в учреждениях, реализующих программы общего образования</b><br>
				(без вечерних (сменных) общеобразовательных учреждений)
			</div>
		</td>
	</tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: единица - 642; человек-792
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2" align="center">
						Профили обучения
					</td>
					<td rowspan="2" align="center">
						№<br>
						строки
					</td>
					<td rowspan="2" align="center">
						Число общеобразова-<br>
						тельных учреждений,<br>
						имеющих классы<br>
						профильного<br>
						обучения(ед)
					</td>
					<td colspan="2" align="center">
						в них
					</td>
				</tr>
				<tr align="center">
					<td align="center">
						количество 10-11 (12)<br>
						классов (групп)<br>
						профильного<br>
						обучения (ед)
					</td>
					<td align="center">
						численность<br>
						обучающихся 10-11<br>
						(12) классов (групп),<br>
						по программам<br>
						профильного<br>
						обучения (чел)
					</td>
				</tr>
				<tr align="center">
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
				</tr>
				<tr align="center">
					<td align="left">
						Всего (сумма строк 02, 07-16 по гр.4 и гр.5)
					</td>
					<td align="center">
						01
					</td>
					<%Call DrawInputsWithTotals(1, 3, 5, 6, Array(4,5))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Технологический - всего (сумма стр.03-06)
					</td>
					<td align="center">
						02
					</td>
					<%Call DrawInputsWithTotals(2, 3, 5, 6, Array(3,4,5))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;информационно-технологический
					</td>
					<td align="center">
						03
					</td>
					<%Call DrawInputs(6,3,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;агротехнологический
					</td>
					<td align="center">
						04
					</td>
					<%Call DrawInputs(6,4,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;индустриально-технологический
					</td>
					<td align="center">
						05
					</td>
					<%Call DrawInputs(6,5,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;другие технологические
					</td>
					<td align="center">
						06
					</td>
					<%Call DrawInputs(6,6,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Физико-математический
					</td>
					<td align="center">
						07
					</td>
					<%Call DrawInputs(6,7,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Физико-химический
					</td>
					<td align="center">
						08
					</td>
					<%Call DrawInputs(6,8,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Химико-биологический
					</td>
					<td align="center">
						09
					</td>
					<%Call DrawInputs(6,9,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Биолого-географический
					</td>
					<td align="center">
						10
					</td>
					<%Call DrawInputs(6,10,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Социально-экономический
					</td>
					<td align="center">
						11
					</td>
					<%Call DrawInputs(6,11,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Социально-гуманитарный
					</td>
					<td align="center">
						12
					</td>
					<%Call DrawInputs(6,12,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Филологический
					</td>
					<td align="center">
						13
					</td>
					<%Call DrawInputs(6,13,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Художественно-эстетический
					</td>
					<td align="center">
						14
					</td>
					<%Call DrawInputs(6,14,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Оборонно-спортивный
					</td>
					<td align="center">
						15
					</td>
					<%Call DrawInputs(6,15,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Другие
					</td>
					<td align="center">
						16
					</td>
					<%Call DrawInputs(6,16,3,5)%>
				</tr>
				<tr align="center">
					<td align="left">
						Кроме того (стр.01), индивидуальные образовательные<br>
						программы профильного обучения
					</td>
					<td align="center">
						17
					</td>
					<%Call DrawInputs(6,17,3,5)%>
				</tr>
			</table>
			<!-- End Of таб.1 -->
		</td>
	</tr>
	<tr>
		<td>
			<div align="left">
				Графа 3 строка 01 - фактическое число общеобразовательных учреждений, имеющих классы профильного обучения.<br>
				Графа 3 строки 02-16 - число учреждений, в которых ведется профильное обучение, по каждому профилю (в сумме может быть больше<br>
				фактического количества за счёт одновременного обучения по нескольким профилям )
			</div>
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

<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td>
			<div align="center"><b>Раздел 5. Сведения об углубленном изучении отдельных предметов в лицеях</b></div>
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
					<td rowspan="3">
						Профили обучения
					</td>
					<td rowspan="3" align="center">
						№<br>
						строки
					</td>
					<td rowspan="3">
						Число обще-<br>
						образователь-<br>
						ных учреж-<br>
						дений (ед)
					</td>
					<td colspan="8">
						В них
					</td>
				</tr>
				<tr align="center">
					<td colspan="4">
						классов (групп) с углубленным изучением предметов<br>
						(ед)
					</td>
					<td colspan="4">
						обучающихся в классах (группах) с углубленным<br>
						изучением предметов (чел)
					</td>
				</tr>
				<tr align="center">
					<td>
						1-4 классы
					</td>
					<td>
						5-9 классы
					</td>
					<td>
						10-11(12)<br>
						классы
					</td>
					<td>
						итого
					</td>
					<td>
						1-4 классы
					</td>
					<td>
						5-9 классы
					</td>
					<td>
						10-11(12)<br>
						классы
					</td>
					<td>
						итого
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
					<td>
						6
					</td>
					<td>
						7
					</td>
					<td>
						8
					</td>
					<td>
						9
					</td>
					<td>
						10
					</td>
					<td>
						11
					</td>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Всего (сумма строк 02, 08, 09, 10, 11 по всем графам кроме 3)
					</td>
					<td align="center">
						01
					</td>
					<%Call DrawInputsWithTotals(1, 3, 11, 5, Array(4,5,6,7,8,9,10,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Гуманитарный - всего
					</td>
					<td align="center">
						02
					</td>
					<%Call DrawInputsWithTotals(2, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;из них с изучением языков:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;английского
					</td>
					<td align="center">
						03
					</td>
					<%Call DrawInputsWithTotals(3, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;французского
					</td>
					<td align="center">
						04
					</td>
					<%Call DrawInputsWithTotals(4, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;немецкого
					</td>
					<td align="center">
						05
					</td>
					<%Call DrawInputsWithTotals(5, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;других европейских
					</td>
					<td align="center">
						06
					</td>
					<%Call DrawInputsWithTotals(6, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;восточных
					</td>
					<td align="center">
						07
					</td>
					<%Call DrawInputsWithTotals(7, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Естественно-научный
					</td>
					<td align="center">
						08
					</td>
					<%Call DrawInputsWithTotals(8, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Технический
					</td>
					<td align="center">
						09
					</td>
					<%Call DrawInputsWithTotals(9, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Сельскохозяйственный
					</td>
					<td align="center">
						10
					</td>
					<%Call DrawInputsWithTotals(10, 3, 11, 5, Array(7,11))%>
				</tr>
				<tr align="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Другие
					</td>
					<td align="center">
						11
					</td>
					<%Call DrawInputsWithTotals(11, 3, 11, 5, Array(7,11))%>
				</tr>
			</table>
			<!-- End Of таб.1 -->
		</td>
	</tr>
	<tr>
		<td>
			<div align="left">
				Графа 3 строка 01 - фактическое количество лицеев с углубленным изучением отдельных предметов.<br>
				Графа 3 строки 02-11 - число лицеев, в которых ведется углубленное обучение, по каждому профилю (в сумме может быть больше фактического количества за счёт одновременного обучения по<br>
				нескольким профилям )
			</div>
		</td>
	</tr>
</table>

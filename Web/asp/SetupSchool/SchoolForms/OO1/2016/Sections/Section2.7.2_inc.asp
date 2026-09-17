<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>2.7.2. Численность обучающихся по источникам финансирования их обучения</b></div>
			<div align="center"><i>(заполняется отдельно по классам очного, очно-заочного и заочного обучения)</i></div>

			<div align="left"><b>по классам очно-заочного обучения</b></div>

			<div align="right">Код по ОКЕИ: человек – 792</div>

			<table class="ThinTable" align="left" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="middle" valign="center">
					<td rowspan="2">Наименование показателя</td>
					<td rowspan="2">№<br>строки</td>
					<td colspan="3">
						Все классы, кроме классов для обучающихся<br>
						с ограниченными возможностями здоровья
					</td>
					<td colspan="4">
						Классы для обучающихся<br>
						с ограниченными возможностями здоровья
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>
						программы<br>
						начального<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						основного<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						среднего<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						начального<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						основного<br>
						общего<br>
						образования
					</td>
					<td>
						программы<br>
						среднего<br>
						общего<br>
						образования
					</td>
					<td>
						образование<br>
						обучающихся<br>
						с умственной<br>
						отсталостью<br>
						(интеллектуальными<br>
						нарушениями)
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
					<td>8</td>
					<td>9</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">Численность обучающихся - всего (сумма стр. 02 - 07)</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1, 3, 9, "02.7.2", Array(3,4,5,6,7,8,9))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						В том числе обучаются:<br>
						&nbsp;&nbsp;за счет бюджетных ассигнований:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;федерального бюджета
					</td>
					<td>02</td>
					<%=DrawInputs("02.7.2", 2, 3, 9)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;бюджета субъекта Российской Федерации</td>
					<td>03</td>
					<%=DrawInputs("02.7.2", 3, 3, 9)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;местного бюджета</td>
					<td>04</td>
					<%=DrawInputs("02.7.2", 4, 3, 9)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;по договорам об оказании платных образовательных<br>
						&nbsp;&nbsp;услуг за счет средств:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;лиц, зачисляемых на обучение (родителей (законных<br>
						&nbsp;&nbsp;&nbsp;&nbsp;представителей) несовершеннолетних обучающихся)
					</td>
					<td>05</td>
					<%=DrawInputs("02.7.2", 5, 3, 9)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;иных физических лиц</td>
					<td>06</td>
					<%=DrawInputs("02.7.2", 6, 3, 9)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;юридических лиц</td>
					<td>07</td>
					<%=DrawInputs("02.7.2", 7, 3, 9)%>
				</tr>
			</table>
		</td>
	</tr>
</table>
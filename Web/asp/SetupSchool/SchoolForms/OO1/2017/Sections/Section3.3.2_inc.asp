<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>3.3.2. Численность работников, выполняющих работы по договорам гражданско-правового характера</b></div>
			
			<br>

			<div align="right">Код по ОКЕИ: человек – 792</div>

			<table border="1" class="ThinTable" align="left" cellpadding="3" cellspacing="0" width="100%">
				<tr align="middle" valign="center">
					<td>Наименование показателей</td>
					<td>№<br>строки</td>
					<td>Всего</td>
					<td>
						из них численность работников<br>
						организаций
					</td>
				</tr>
				<tr align="middle" valign="center">
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">Численность работников, выполняющих работы по договорам гражданско-правового характера - всего</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1, 3, 4, "03.3.2", Array(3, 4))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;из них осуществляющие образовательную деятельность по реализации образовательных программ:<br>
						&nbsp;&nbsp;начального общего образования
					</td>
					<td>02</td>
					<%=DrawInputs("03.3.2", 2, 3, 4)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;основного общего образования</td>
					<td>03</td>
					<%=DrawInputs("03.3.2", 3, 3, 4)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">&nbsp;&nbsp;среднего общего образования</td>
					<td>04</td>
					<%=DrawInputs("03.3.2", 4, 3, 4)%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<br>
			<table>
				<tr>
					<td>
						<div align="left"><b>Справка 4.</b></div>
						<table border="0" class="ThinTable" align="left" cellpadding="3" cellspacing="0" width="100%">
							<tr>
								<td>
									Численность сотрудников охраны (чел)
								</td>
								<td>(05)</td>
								<td><%=IT("T03.3.20503", 5, 5)%></td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td align="center">
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td align="center">
						<b>ФЕДЕРАЛЬНОЕ СТАТИСТИЧЕСКОЕ НАБЛЮДЕНИЕ</b>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td align="center">
						КОНФИДЕНЦИАЛЬНОСТЬ ГАРАНТИРУЕТСЯ ПОЛУЧАТЕЛЕМ ИНФОРМАЦИИ
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br>
			<br>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td align="center">
						Нарушение порядка представления статистической информации, а равно представление
						недостоверной статистической информации влечет ответственность,<br>
						установленную статьей 13.19 Кодекса Российской Федерации об административных правонарушениях
						от 30.12.2001 № 195-ФЗ, а также статьей 3 Закона<br>
						Российской Федерации от 13.05.92 № 2761-1 "Об ответственности за нарушение порядка
						представления государственной статистической отчетности"
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br>
			<br>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td align="center">
						ВОЗМОЖНО ПРЕДОСТАВЛЕНИЕ В ЭЛЕКТРОННОМ ВИДЕ
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br>
			<br>
			<br>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td align="center">
						<b>СВЕДЕНИЯ О ДОПРОФЕССИОНАЛЬНОЙ И ПРОФЕССИОНАЛЬНОЙ ПОДГОТОВКЕ ОБУЧАЮЩИХСЯ 8-11 (12)
							КЛАССОВ В<br>
							УЧРЕЖДЕНИИ, РЕАЛИЗУЮЩЕМ ПРОГРАММЫ ОБЩЕГО ОБРАЗОВАНИЯ<br>
							(кроме вечерних (сменных) общеобразовательных учреждений)</b><br>
						по состоянию на 1 октября
						<%=strShoolYearStart%>
						года<br>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br>
			<br>
			<br>
			<table border="0" cellpadding="0" width="100%">
				<tr>
					<td>
						<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
							<tr align="center">
								<td>
									Предоставляют:
								</td>
								<td>
									Сроки представления
								</td>
							</tr>
							<tr>
								<td align="left">
									юридические лица – образовательные учреждения, реализующие программы общего образования:<br />
									&nbsp;&nbsp;&nbsp;- органу местного самоуправления, органу исполнительной власти
									субъекта Российской Федерации,<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;федеральному органу исполнительной власти, на которые
									возложены функции по управлению<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;учреждениями, реализующими программы общего образования
									(по принадлежности)
								</td>
								<td align="center" valign="top">
									7 октября<br>
								</td>
							</tr>
						</table>
					</td>
					<td width="4%">&nbsp;</td>
					<td>
						<table border="0" cellpadding="0" width="100%">
							<tr>
								<td>
									<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
										<tr>
											<td align="center">
												<b>Форма № ОШ-9</b>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td align="center" valign="center" height="100%">
									Приказ Росстата:<br>
									Об утверждении формы<br>
									от 27.08.2012 № 466<br>
									О внесении изменений<br>
									(при наличии)<br>
									от __________ № ___<br>
									от __________ № ___
								</td>
							</tr>
							<tr>
								<td style="height: 47px">
									<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
										<tr><td align="center">1 раз в год</td></tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br>
			<br>
			<br>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td>
						<b>Наименование отчитывающейся организации</b><br>
					</td>
					<td colspan="5" align="left">
						<%=strFullSchoolName%>
					</td>
				</tr>
				<tr>
					<td>
						<b>Почтовый адрес</b>
					</td>
					<td colspan="5" align="left">
						<b>
							<%=GetSafeStrParam(objSchoolParams("Address"), "")%></b>
					</td>
				</tr>
				<tr align="center">
					<td rowspan="2">
						Код формы по ОКУД
					</td>
					<td colspan="5">
						Код
					</td>
				</tr>
				<tr align="center">
					<td>
						отчитывающейся организации по ОКПО
					</td>
					<td>
					</td>
					<td>
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
				</tr>
				<%Dim colCount
					colCount=4%>
				<tr align="center">
					<td width="<%=100\colCount%>%">
						0609540
					</td>
					<td>
						<%=GetSafeStrParam(objSchoolParams("Okpo"), "")%>
					</td>
					<td width="<%=100\colCount%>%">
					</td>
					<td width="<%=100\colCount%>%">
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td><br/></td>
	</tr>
</table>

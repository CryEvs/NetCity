<% ' © 2007-2016 IRTech. All rights reserved.
%>
	<table class="print-block" class='point' width='920px' border="0" cellpadding="0" cellspacing="0" align="center">
		<tr>
			<td align="center">
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr>
						<td align="center"><b>ФЕДЕРАЛЬНОЕ СТАТИСТИЧЕСКОЕ НАБЛЮДЕНИЕ</b></td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td align="center"><br/><br/>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr>
						<td align="center">
							Нарушение порядка представления статистической информации, а равно представление недостоверной статистической информации<br/>
							влечет ответственность, установленную статьей 13.19 Кодекса Российской Федерации об административных правонарушениях<br/>
							от 30.12.2001 № 195-ФЗ, а также статьей 3 Закона Российской Федерации от 13.05.92 № 2761-1 "Об ответственности за нарушение<br/>
							порядка представления государственной статистической отчетности"
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td align="center"><br/><br/>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr>
						<td align="center">ВОЗМОЖНО ПРЕДОСТАВЛЕНИЕ В ЭЛЕКТРОННОМ ВИДЕ</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td align="center"><br/><br/>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr>
						<td align="center">
							СВЕДЕНИЯ ОБ ОРГАНИЗАЦИИ, ОСУЩЕСТВЛЯЮЩЕЙ ПОДГОТОВКУ<br/>
							ПО ОБРАЗОВАТЕЛЬНЫМ ПРОГРАММАМ НАЧАЛЬНОГО ОБЩЕГО, ОСНОВНОГО ОБЩЕГО,<br/>
							СРЕДНЕГО ОБЩЕГО ОБРАЗОВАНИЯ<br/>
							<br/>
							на начало <%=strShoolYearStart%>/<%=strShoolYearEnd%> учебного года<br/>
							<br/>
							по состоянию на 20 сентября <%=strShoolYearStart%> г.
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td align="center"><br/><br/><br/>
				<table border="0" cellpadding="0" width="100%">
					<tr>
						<td>
							<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
								<tr align="center">
									<td>Предоставляют:</td>
									<td>Сроки предоставления</td>
								</tr>
								<tr>
									<td align="left">
									юридические лица, осуществляющие образовательную деятельность по образовательным<br/>
									программам начального общего, основного общего, среднего общего образования:<br/>
									&nbsp;&nbsp; – Министерству образования и науки Российской Федерации
									</td>
									<td align="center" valign="top">
										15 октября<br/>
										после отчетного периода
									</td>
								</tr>
							</table>
						</td>
						<td width="4%" >&nbsp;</td>
						<td>
							<table border="0" cellpadding="0" width="100%">
								<tr>
									<td>
										<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
											<tr><td align="center">Форма № ОО-1</td></tr>
										</table>
									</td>
								</tr>
								<tr>
									<td align="center" valign="center" height="100%">
										<br/>Приказ Росстата:
										<br/>Об утверждении формы
										<br/>от 17.08.2016 № 429
										<br/><span class="style1">О внесении изменений<br/>(при&nbsp;наличии)</span>
										<br/>от  __________ № ___
										<br/>от  __________ № ___
										<br/><br/>
									</td>
								</tr>
								<tr>
									<td>
										<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
											<tr><td align="center">Годовая</td></tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
			</table>
		</td>
	</tr>

	<%Dim colCount
	colCount = 5%>

	<tr>
		<td align="center"><br/><br/><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td align="left" colspan="<%=colCount%>"><b>Наименование отчитывающейся организации</b>&nbsp;&nbsp;&nbsp;<%=strFullSchoolName%> </td>
				</tr>
				<tr>
					<td align="left" colspan="<%=colCount%>"><b>Почтовый адрес<%=replace(lPad(0, 33),"0","&nbsp;")%><%=GetSafeStrParam(objSchoolParams("Address"), "")%></b></td>
				</tr>
				<tr align="center">
					<td rowspan="2">Код<br/>формы<br/>по ОКУД</td>
					<td colspan="<%=colCount-1%>">Код</td>
				</tr>
				<tr align="center">
					<td nowrap>отчитывающейся организации<br/>по ОКПО</td>
					<td>ИНН</td>
					<td>КПП</td>
					<td>ОГРН</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
				</tr>
				<tr align="center">
					<td width="<%=100\colCount%>%">0609562</td>
					<td><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></td>
					<td width="<%=100\colCount%>%"><%=GetSafeStrParam(objSchoolParams("Inn"), "")%></td>
					<td width="<%=100\colCount%>%"><%=GetSafeStrParam(objSchoolParams("Kpp"), "")%></td>
					<td width="<%=100\colCount%>%"><%=GetSafeStrParam(objSchoolParams("Ogrn"), "")%></td>
				</tr>
			</table>
		</td>
	</tr>
	</table>
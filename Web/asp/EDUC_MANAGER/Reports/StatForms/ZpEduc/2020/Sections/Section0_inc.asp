<% ' © 2007-2013 IRTech. All rights reserved.
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
			<br/>
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
			<br/>
			<br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td align="center">
						Нарушение порядка предоставления первичных статистических данных или несвоевременное предоставление этих данных,<br/>
						либо предоставление недостоверных первичных статистических данных влечет ответственность, установленную<br/>
						Кодексом Российской Федерации об административных правонарушениях
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br/>
			<br/>
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
			<br/>
			<br/>
			<br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td align="center">
						<b>СВЕДЕНИЯ О ЧИСЛЕННОСТИ И ОПЛАТЕ ТРУДА РАБОТНИКОВ СФЕРЫ ОБРАЗОВАНИЯ<br/>
							ПО КАТЕГОРИЯМ ПЕРСОНАЛА<br/>
							<%=IBArrValue("T0006", objSchoolFormComponent.GetQuarterList(strShoolYearStart, strShoolYearEnd).ToArray())%><br/>
								(нарастающим итогом)
						</b>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br/>
			<br/>
			<br/>
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
									юридические лица государственной и муниципальной форм собственности,<br/>																																																																																	
									осуществляющие образовательную деятельность, подведомственные: органу местного<br/>																																																																																	
									самоуправления, осуществляющему управление в сфере образования; органу<br/>																																																																																	
									исполнительной власти субъекта Российской Федерации, осуществляющему управление<br/> 																																																																																	
									в сфере образования; Министерству науки и высшего образования Российской<br/> 																																																																																	
									Федерации; Министерству просвещения Российской Федерации:<br/>																																																																																	
									&emsp;- территориальному органу Росстата в субъекте Российской Федерации<br/>																																																																													
									&emsp;по установленному им адресу;<br/>																																																																													
									&emsp;- соответствующему органу управления (по принадлежности)<br/>																																																																													
									юридические лица государственной и муниципальной форм собственности,<br/>																																																					
									осуществляющие образовательную деятельность, кроме подведомственных: органу<br/>																																																																																	
									местного самоуправления, осуществляющему управление в сфере образования; органу<br/>																																																																																	
									исполнительной власти субъекта Российской Федерации, осуществляющему управление<br/> 																																																																																	
									в сфере образования; Министерству науки и высшего образования Российской<br/> 																																																																																	
									Федерации; Министерству просвещения Российской Федерации:<br/>																																																																																
									&emsp;- территориальному органу Росстата в субъекте Российской Федерации<br/>																																																																													
									&emsp;по установленному им адресу;<br/>																																																																													
									&emsp;- учредителю
								</td>
								<td align="center" valign="top">
									на 10 день<br/>
									после отчетного периода
								</td>
							</tr>
						</table>
					</td>
					<td>
						<table border="0" cellpadding="0" width="100%">
							<tr>
								<td>
									<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
										<tr>
											<td align="center">
												<b><%=GetFormName()%></b>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td align="center" valign="center" height="100%">
									Приказ Росстата:<br/>
									Об утверждении формы<br/>
									от 24.07.2020 № 412<br/>
									О внесении изменений (при наличии)<br/>
									от __________ № ___<br/>
									от __________ № ___
								</td>
					</td>
				</tr>
				<tr>
					<td>
						<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
							<tr>
								<td align="center">
									Квартальная
								</td>
							</tr>
						</table>
						</td></tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="center">
			<br/><br/><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td><b>Наименование отчитывающейся организации</b><br/></td>
					<td colspan="5" align="left"><%=strEmFullName%></td>
				</tr>
				<tr>
					<td><b>Почтовый адрес</b></td>
					<td colspan="5" align="left"><%=IT("T00_address", 90, 250 )%></td>
				</tr>
				<tr align="center">
					<td rowspan="2">Код Формы по ОКУД</td>
					<td colspan="5">Код</td>
				</tr>
				<tr align="center">
					<td>отчитывающейся организации по ОКПО<br/> 																																														
						(для территориально обособленного<br/> 																																														
						подразделения и головного подразделения<br/> 																																														
						юридического лица - идентификационный<br/>																																														
						номер)																																														
					</td>
					<td>
						типа отчитывающейся<br/>
						организации
					</td>
					<td></td>
					<td></td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
				</tr>
				<tr align="center">
					<td width="10%">0606048</td>
					<td width="18%"><%=IT("T0002", 10, 20 )%></td>
					<td width="18%"><%=IT("T0003", 10, 20 )%></td>
					<td width="18%"><%=IT("T0004", 10, 20 )%></td>
					<td width="18%"><%=IT("T0005", 10, 20 )%></td>
				</tr>
			</table>
		</td>
	</tr>
</table>

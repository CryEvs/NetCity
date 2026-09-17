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
						<b>СВЕДЕНИЯ ОБ УЧРЕЖДЕНИЯХ, РЕАЛИЗУЮЩИХ ПРОГРАММЫ ОБЩЕГО ОБРАЗОВАНИЯ</b><BR/>
							по состоянию на 1 апреля <%=strShoolYearEnd%> года<br/>
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
									Сроки предоставления
								</td>
							</tr>
							<tr>
								<td align="left">
									юридические лица – образовательные учреждения, реализующие программы<br />
									общего образования:<br />
									&nbsp;&nbsp;&nbsp; – органу местного самоуправления, органу исполнительной власти субъекта<br />
									&nbsp;&nbsp;&nbsp;&nbsp;Российской Федерации, федеральному органу исполнительной власти, на которые<br />
									&nbsp;&nbsp;&nbsp;&nbsp;возложены функции по управлению учреждениями, реализующими программы<br />
									&nbsp;&nbsp;&nbsp;&nbsp;общего образования (по принадлежности)<br />
									орган местного самоуправления, осуществляющий управление в сфере<br />
									образования, сводный отчет по муниципальному образованию:<br />
									&nbsp;&nbsp;&nbsp;- органу исполнительной власти субъекта Российской федерации,<br />
									&nbsp;&nbsp;&nbsp;&nbsp;осуществляющему управление в сфере образования<br />
									орган исполнительной власти субъекта Российской Федерации, осуществляющий<br />
									управление в сфере образования, сводный отчет по субъекту Российской Федерации:<br />
									&nbsp;&nbsp;&nbsp;- Минобрнауки России<br />
								</td>
								<td align="center" valign="top">
									10 апреля<br><br><br><br><br>25 апреля<br><br><br><br><br>10 мая
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
									Приказ Росстата:<br>
									Об утверждении формы<br>
									от 20.07.2011 № 329<br>
									О внесении изменений<br>
									(при наличии)<br>
									от __________ № ___<br>
									от __________ № ___
								</td>
					</td>
				</tr>
				<tr>
					<td>
						<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
							<tr>
								<td align="center">
									1 раз в год
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
			<br>
			<br>
			<br>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr>
					<td>
						<b>Наименование отчитывающейся организации</b><br>
					</td>
					<td colspan="5" align="left">
						<%=strEmFullName%>
					</td>
				</tr>
				<tr>
					<td>
						<b>Почтовый адрес</b>
					</td>
					<td colspan="5" align="left">
						<%=IT("T00_address", 90, 250 )%>
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
					<td>1</td><td>2</td><td>3</td><td>4</td>
				</tr><TR align="center">
					<TD width="10%">0609554</TD>
					<TD width="18%"><%=IT("T0002", 10, 20 )%></TD>
					<TD width="18%"><%=IT("T0003", 10, 20 )%></TD>
					<TD width="18%"><%=IT("T0004", 10, 20 )%></TD>
				</tr>
			</table>
		</td>
	</tr>
	<tr><td><br/></td></tr>
</table>

<% ' © 2007-2008 IRTech. All rights reserved.
%>
		<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
		<tr><td align="center">
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			<B>ФЕДЕРАЛЬНОЕ СТАТИСТИЧЕСКОЕ НАБЛЮДЕНИЕ</B>
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br />
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			КОНФИДЕНЦИАЛЬНОСТЬ ГАРАНТИРУЕТСЯ ПОЛУЧАТЕЛЕМ ИНФОРМАЦИИ
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br /><br />
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			Нарушение порядка представления статистической информации, а равно представление недостоверной<br />
			статистической информации влечет ответственность, установленную статьей 13.19 Кодекса Российской<br />
			Федерации об административных правонарушениях от 30.12.2001 № 195-ФЗ, а также статьей 3 Закона<br />
			Российской Федерации от 13.05.92 № 2761-1 "Об ответственности за нарушение порядка представления<br /> государственной статистической отчетности"
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br />
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			ВОЗМОЖНО ПРЕДОСТАВЛЕНИЕ В ЭЛЕКТРОННОМ ВИДЕ
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br /><br /><br />
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<TR><TD align="center">
			<B>СВЕДЕНИЯ О ДЕЯТЕЛЬНОСТИ ДОШКОЛЬНОГО ОБРАЗОВАТЕЛЬНОГО УЧРЕЖДЕНИЯ</B><br />
			за <%=strShoolYearStart%>  г.
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br /><br /><br />
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="center">
					<TD>Предоставляют:</TD>
					<TD>Сроки представления</TD>
				</tr><tr>
					<TD>
					юридические лица, осуществляющие деятельность в сфере дошкольного образования:<br />
					&nbsp;&nbsp;&nbsp;- территориальному органу Росстата в субъекте Российской Федерации <br />
					&nbsp;&nbsp;&nbsp;&nbsp; по установленному им адресу<br />
					</TD>
					<TD align="center" valign="top">16 января<br />после отчетного периода</TD>
				</tr>
				</table>
			</td><td>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center"><b>Форма № 85-К</b></td></tr></table>
			</td></tr>
			<tr><td align="center" valign="center" height="100%">
					<br />Приказ Росстата:<br />Об утверждении формы<br />от 18.08.2008 № 192<br />О внесении изменений<br />(при наличии)<br />от ________ N ___<br />от ________ N ___<br /><br />
			</td></tr>
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center">Годовая</td></tr></table>
			</td></tr>
			</table>
			</td></tr>
		</table>
	</td></tr>
		<%Dim colCount
		colCount=15%>
	<tr><td align="center"><br /><br /><br />
		<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
		<TR>
			<TD COLSPAN="<%=colCount%>"><b>Наименование отчитывающейся организации</b>&nbsp;&nbsp;&nbsp;<%=strFullSchoolName%> </TD>
	    </TR><TR>
			<TD COLSPAN="<%=colCount%>"><b>Почтовый адрес<%=replace(lPad(0, 33),"0","&nbsp;")%><%=GetSafeStrParam(objSchoolParams("Address"), "")%></b></TD>
		</TR><TR align="center">
			<TD ROWSPAN=2>Код<br />формы<br />по ОКУД</TD>
			<TD COLSPAN=7>Код</TD>
		</TR><TR align="center" valign="top">
			<TD>отчитывающейся<br />организации<br />по ОКПО</TD>
			<TD>порядковый номер<br />дошкольного<br />учреждения</TD>
			<TD>режим работы:<br />пятидневный - 1;<br />шестидневный - 2</TD>
			<TD>профиля группы<br />или учреждения<br />компенсирующего<br />вида</TD>
			<TD>находится<br />на капитальном<br />ремонте - 1</TD>
			<TD>дошкольное учреждение<br />аттестовано -1;<br />аккредитовано на<br />категорию: перрвую - 2;<br />вторую - 3; третью - 4</TD>
			<TD>города и поселка<br />городского типа - 1;<br />сельской местности - 2</TD>
		</TR><TR align="center">
			<TD>1</TD><TD>2</TD><TD>3</TD><TD>4</TD><TD>5</TD><TD>6</TD><TD>7</TD><TD>8</TD>
		</TR><TR align="center">
			<TD>0609506</TD>
			<TD><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></TD>
			<TD><%=IT("T0003", 10, 20 )%></TD>
			<TD><%=IT("T0004", 10, 20 )%></TD>
			<TD><%=IT("T0005", 10, 20 )%></TD>
			<TD><%=IT("T0006", 10, 20 )%></TD>
			<TD><%=IT("T0007", 10, 20 )%></TD>
			<TD><%=IT("T0008", 10, 20 )%></TD>
		</tr>
		</table>
	</td></tr>
	</table>
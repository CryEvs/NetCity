<% ' © 2007-2012 IRTech. All rights reserved.
%>
		<table class="print-block" class='point' width='920px' border="0" cellpadding="0" cellspacing="0" align="center">
		<tr><td align="center">
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			<b>ФЕДЕРАЛЬНОЕ СТАТИСТИЧЕСКОЕ НАБЛЮДЕНИЕ</b>
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
            Нарушение порядка представления статистической информации, а равно представление недостоверной статистической информации<br/>
			влечет ответственность, установленную статьей 13.19 Кодекса Российской Федерации об административных правонарушениях<br/>
			от 30.12.2001 № 195-ФЗ, а также статьей 3 Закона Российской Федерации от 13.05.92 № 2761-1 "Об ответственности за нарушение<br/>
			порядка представления государственной статистической отчетности"
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			ВОЗМОЖНО ПРЕДОСТАВЛЕНИЕ В ЭЛЕКТРОННОМ ВИДЕ
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			СВЕДЕНИЯ О ЧИСЛЕННОСТИ И СОСТАВЕ РАБОТНИКОВ УЧРЕЖДЕНИЯ,<br />
			РЕАЛИЗУЮЩЕГО ПРОГРАММЫ ОБЩЕГО ОБРАЗОВАНИЯ<br />
			(кроме вечерних (сменных) общеобразовательных учреждений)<br />
			по состоянию на 20 сентября <%=strShoolYearStart%> года
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/><br/>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="center">
					<td>Предоставляют:</td>
					<td>Сроки представления</td>
				</tr><tr>
					<td align="left">
					юридические лица – образовательные учреждения, реализующие программы общего образования: <br/>
					&nbsp;&nbsp;&nbsp;- органу местного самоуправления, органу исполнительной власти субъекта <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Российской Федерации, федеральному органу исполнительной власти, на которые <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;возложены функции по управлению учреждениями, реализующими программы <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;общего образования (по принадлежности)
					</td>
					<td align="center" valign="top">25 сентября</td>
				</tr>
				</table>
			</td>
			<TD width="4%" >&nbsp;</TD>
			<td>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center">Форма № 83-РИК</td></tr></table>
			</td></tr>
			<tr><td align="center" valign="center" height="100%">
					<br/>Приказ Росстата:
					<br/>Об утверждении формы
					<br/>от 27.08.2012 № 466
					<br/><span class="style1">О внесении изменений<br/>(при&nbsp;наличии)</span>
					<br/>от  __________ № ___
					<br/>от  __________ № ___
					<br/><br/>
			</td></tr>
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center">1 раз в год</td></tr></table>
			</td></tr>
			</table>
			</td></tr>
		</table>
	</td></tr>
	<%Dim colCount
	colCount=4%>
	<tr><td align="center"><br/><br/><br/>
		<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
	<TR>
		<Td align="left" COLSPAN="<%=colCount%>"><b>Наименование отчитывающейся организации</b>&nbsp;&nbsp;&nbsp;<%=strFullSchoolName%> </TD>
	</TR><TR>
		<Td align="left" COLSPAN="<%=colCount%>"><b>Почтовый адрес<%=replace(lPad(0, 33),"0","&nbsp;")%><%=GetSafeStrParam(objSchoolParams("Address"), "")%></b></TD>
	</TR><TR align="center">
			<TD ROWSPAN="2">Код<br/>формы<br/>по ОКУД</TD>
			<TD COLSPAN="<%=colCount-1%>">Код</TD>
		</TR><TR align="center">
			<TD nowrap>отчитывающейся организации<br/>по ОКПО</TD>
			<TD>&nbsp;</TD>
			<TD>&nbsp;</TD>
		</TR><TR align="center">
			<TD>1</TD><TD>2</TD><TD>3</TD><TD>4</TD>
		</TR><TR align="center">
			<TD width="<%=100\colCount%>%">0609541</TD>
			<TD><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></TD>
			<TD width="<%=100\colCount%>%">&nbsp;</TD>
			<TD width="<%=100\colCount%>%">&nbsp;</TD>
		</tr>
		</table>
	</td></tr>
	</table>
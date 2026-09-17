<% ' © 2007-2012 IRTech. All rights reserved.
%>
		<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
		<tr><td align="center">
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			<B>ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ СТАТИСТИЧЕСКОЕ НАБЛЮДЕНИЕ</B>
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			КОНФИДЕНЦИАЛЬНОСТЬ ГАРАНТИРУЕТСЯ ПОЛУЧАТЕЛЕМ ИНФОРМАЦИИ
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			Нарушение порядка представления статистической информации, а равно представление недостоверной статистической информации <br/>
			влечет ответственность, установленную статьей 13.19 Кодекса Российской Федерации об административных правонарушениях<br/>
			от 30.12.2001 № 195-ФЗ, а также статьей 3 Закона Российской Федерации от 13.05.92 № 2761-1 "Об ответственности за нарушение<br/>
			порядка представления государственной статистической отчетности"
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<TR><TD align="center">
			<B>СВЕДЕНИЯ О ДОПРОФЕССИОНАЛЬНОЙ И ПРОФЕССИОНАЛЬНОЙ ПОДГОТОВКЕ<br/>ОБУЧАЮЩИХСЯ 8-11 (12) КЛАССОВ В ДНЕВНОМ ОБЩЕОБРАЗОВАТЕЛЬНОМ УЧРЕЖДЕНИИ</B><br/>
			на 1  октября <%=strShoolYearStart%> года<br/>
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/><br/>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="center">
					<TD>Предоставляют:</TD>
					<TD>Сроки представления</TD>
				</tr><tr>
					<TD>
					общеобразовательные учреждения районного (городского) управления (отдела)<br/>
                    образования:<br/>
					&nbsp;&nbsp;&nbsp;- районному (городскому) управлению (отделу) образования;<br/>
					&nbsp;&nbsp;&nbsp;- отделу государственной статистики по району (городу)<br/>
					общеобразовательные учреждения министерств и ведомств:<br/>
					&nbsp;&nbsp;&nbsp;- территориальному органу Росстата в субъекте Российской Федерации<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;по установленному им адресу;<br/>
					&nbsp;&nbsp;&nbsp;- органу, осуществляющему государственное регулирование в соответствующей<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;сфере  деятельности
					</TD>
					<TD align="center" valign="top">7 октября<br/><br/><br/><br/>7 октября</TD>
				</tr>
				</table>
			</td><td>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center">Форма № ОШ-9</td></tr></table>
			</td></tr>
			<tr><td align="center" valign="center" height="100%">Утверждена постановлением<br/>Росстата<br/>от 20.07.2006 № 37<br/><br/></td></tr>
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center">1 раз в год</td></tr></table>
			</td></tr>
			</table>
			</td></tr>
		</table>
	</td></tr>
	<%Dim colCount
	colCount=6%>
	<tr><td align="center"><br/><br/><br/>
		<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
	<TR>
		<Td align="left" COLSPAN="<%=colCount%>"><b>Наименование отчитывающейся организации</b>&nbsp;&nbsp;&nbsp;<%=strFullSchoolName%> </TD>
	</TR><TR>
		<Td align="left" COLSPAN="<%=colCount%>"><b>Почтовый адрес<%=replace(lPad(0, 33),"0","&nbsp;")%><%=GetSafeStrParam(objSchoolParams("Address"), "")%></b></TD>
	</TR><TR align="center">
			<TD ROWSPAN=2>Код<br/>формы<br/>по ОКУД</TD>
			<TD COLSPAN="<%=colCount-1%>">Код</TD>
		</TR><TR align="center">
			<TD nowrap>отчитывающейся организации<br/>по ОКПО</TD>

			<TD>территории<br/>по ОКАТО</TD>
			<TD>министерства(ведомства),<br/>органа управления<br/>по ОКОГУ</TD>
            <TD>формы собственности<br/>по ОКФС</TD>
            <TD>&nbsp;</TD>
		</TR><TR align="center">
			<TD>1</TD><TD>2</TD><TD>3</TD><TD>4</TD><TD>5</TD><TD>6</TD>
		</TR><TR align="center">
			<TD width="<%=100\colCount%>%">0609540</TD>
			<TD><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></TD>
			<TD width="<%=100\colCount%>%"><%=GetSafeStrParam(objSchoolParams("Okato"), "")%></TD>
			<TD width="<%=100\colCount%>%"><%=GetSafeStrParam(objSchoolParams("Okogu"), "")%></TD>
			<TD width="<%=100\colCount%>%"><%=GetSafeStrParam(objSchoolParams("Okfs"), "")%></TD>
            <TD width="<%=100\colCount%>%">&nbsp;</TD>
		</tr>
		</table>

	</td></tr>
	</table>

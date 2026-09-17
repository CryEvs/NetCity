<head>
	<style type="text/css">
		.style1
		{
			font-size: smaller;
		}
	</style>
</head>

<% ' © 2007-2012 IRTech. All rights reserved.
%>
		<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
		<tr><td align="center">
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			<B>ФЕДЕРАЛЬНОЕ СТАТИСТИЧЕСКОЕ НАБЛЮДЕНИЕ</B>
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
		<tr><td align="center"><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">
			ВОЗМОЖНО ПРЕДОСТАВЛЕНИЕ В ЭЛЕКТРОННОМ ВИДЕ
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/><br/>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<TR><TD align="center">
			<B>СВЕДЕНИЯ О ВЕЧЕРНЕМ (СМЕННОМ) ОБЩЕОБРАЗОВАТЕЛЬНОМ УЧРЕЖДЕНИИ</B><br/>
			на начало <%=obTokenMgr.GetData(strToken, "CurrYearName")%> учебного года
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br/><br/><br/>
			<table border="0" cellpadding="0" width="100%">
			<tr><td style="width: 739px">
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%" style="height: 100%">
				<tr align="center" >
					<TD>Предоставляют:</TD>
					<TD>Сроки представления</TD>
				</tr><tr>
					<TD align="left" nowrap>
					юридические лица – образовательные учреждения, реализующие программы общего образования:<br />
                    &nbsp;&nbsp;&nbsp;- органу местного самоуправления, органу исполнительной власти субъекта Российской Федерации,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;федеральному органу управления исполнительной власти, на которые возожены функции по управлению<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; учреждениями, реализующими программы общего образования (по принадлежности);<br/><br/><br/><br/><br/><br/>
					</TD>
					<TD align="center" valign="top">22 сентября</TD>
				</tr>
				</table>
			</td><td width="10" >&nbsp;</td><td>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center" style="height: 26px">Форма № ОШ-5</td></tr></table>
			</td></tr>
			<tr><td align="center" valign="center" height="100%">
				Приказ Росстата:
				<br/>Об утверждении формы
				<br/> от 27.08.2012 № 466
				<br/><span class="style1">О внесении изменений<br/>(при наличии)</span>
				<br/>от  __________ № ___
				<br/>от  __________ № ___
			</td></tr>
			<tr><td style="height: 47px">
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
			<TD ROWSPAN="2">Код формы по ОКУД</TD>
			<TD COLSPAN="<%=colCount-1%>">Код</TD>
		</TR><TR align="center">
			<TD nowrap>отчитывающейся организации по ОКПО</TD>
			<TD>&nbsp;</TD>
			<TD>&nbsp;</TD>
		</TR><TR align="center">
		<TD>1</TD><TD>2</TD><TD>3</TD><TD>4</TD>
		</TR><TR align="center">
			<TD width="<%=100\colCount%>%">0609549</TD>
			<TD><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></TD>
			<TD width="<%=100\colCount%>%">&nbsp;</TD>
			<TD width="<%=100\colCount%>%">&nbsp;</TD>
		</tr>
		</table>

	</td></tr>
	</table>

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
		<TR><TD align="center">
		<B>СВЕДЕНИЯ ОБ УЧРЕЖДЕНИИ, РЕАЛИЗУЮЩЕМ ПРОГРАММЫ ОБЩЕГО ОБРАЗОВАНИЯ</B><br/>
		(кроме вечерних (сменных) общеобразовательных учреждений)<br/>
		на начало <%=obTokenMgr.GetData(strToken, "CurrYearName")%> учебного года<br/>
		(по состоянию на 20 сентября)
		</td></tr>
		</table>
	</td></tr>
	<tr><td align="center"><br/><br/><br/>
		<table border="0" cellpadding="0" width="100%">
		<tr><td>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr align="center">
				<TD>Предоставляют:</TD>
				<TD>Сроки&nbsp;предоставления</TD>
			</tr><tr>
				<TD>
				юридические лица – образовательные учреждения, реализующие программы общего образования: <br/><br/>
				&nbsp;&nbsp;&nbsp;- органу местного самоуправления, органу исполнительной власти субъекта <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Российской Федерации, федеральному органу исполнительной власти, на которые <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;возложены функции по управлению учреждениями, реализующими программы <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;общего образования (по принадлежности)
				</TD>
				<TD align="center" valign="top"><br/>22 сентября</TD>
			</tr>
			</table>
		</td>
		<TD width="4%" >&nbsp;</TD>
		<td>
		<table border="0" cellpadding="0" width="100%">
		<tr><td>
			<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr><td align="center"><%=GetOSH1Name()%></td></tr></table>
		</td></tr>
		<tr><td align="center" valign="center" height="100%">
					Приказ Росстата:
				<br/>Об утверждении формы
				<br/>от  20.07.2011 № 329
				<br/>О внесении изменений (при&nbsp;наличии)
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
		<TD nowrap>учреждения – локальный<br/>(самостоятельное учреждение – 1,<br/>обособленное структурное<br/>подразделение (филиал и т.п.) – 2)</TD>
		<TD>&nbsp;</TD>
		<TD>&nbsp;</TD>
	</TR><TR align="center">
		<TD>1</TD><TD>2</TD><TD>3</TD><TD>4</TD><TD>5</TD>
	</TR><TR align="center">
		<TD width="<%=100\colCount%>%">0609535</TD>
		<TD><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></TD>
		<TD><%=GetSafeStrParam(objSchoolParams("Independ"), "")%></TD>
		<TD width="<%=100\colCount%>%">&nbsp;</TD>
		<TD width="<%=100\colCount%>%">&nbsp;</TD>
	</tr>
	</table>

</td></tr>
</table>

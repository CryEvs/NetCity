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
<tr><td align="center"><br>
	<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
	<tr><td align="center">
	КОНФИДЕНЦИАЛЬНОСТЬ ГАРАНТИРУЕТСЯ ПОЛУЧАТЕЛЕМ ИНФОРМАЦИИ
	</td></tr>
	</table>
</td></tr>
<tr><td align="center"><br><br>
	<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
	<tr><td align="center">
	Нарушение порядка представления статистической информации, а равно представление недостоверной статистической информации<br>
	влечет ответственность, установленную статьей 13.19 Кодекса Российской Федерации об административных правонарушениях<br>
	от 30.12.2001 № 195-ФЗ, а также статьей 3 Закона Российской Федерации от 13.05.1992 № 2761-1 "Об ответственности за нарушение<br>
	порядка представления государственной статистической отчетности"
	</td></tr>
	</table>
</td></tr>
<tr><td align="center"><br><br>
	<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
	<tr><td align="center">
	ВОЗМОЖНО ПРЕДОСТАВЛЕНИЕ В ЭЛЕКТРОННОМ ВИДЕ
	</td></tr>
	</table>
</td></tr>
<tr><td align="center"><br><br>
	<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
	<tr><td align="center">
	СВЕДЕНИЯ О ДЕЯТЕЛЬНОСТИ ОРГАНИЗАЦИИ, ОСУЩЕСТВЛЯЮЩЕЙ ОБРАЗОВАТЕЛЬНУЮ<br />
	ДЕЯТЕЛЬНОСТЬ ПО ОБРАЗОВАТЕЛЬНЫМ ПРОГРАММАМ ДОШКОЛЬНОГО ОБРАЗОВАНИЯ,<br />
							ПРИСМОТР И УХОД ЗА ДЕТЬМИ<br />
							за <%=strShoolYearStart%> г.
	</td></tr>
	</table>
</td></tr>
<tr><td align="center"><br><br><br>
	<table border="0" cellpadding="0" width="100%">
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
		<tr align="center">
			<td width="530px">Предоставляют:</td>
			<td>Сроки представления</td>
		</tr><tr>
			<td align="left" valign="top">
				юридические лица, осуществляющие образовательную деятельность по<br /> образовательным программам дошкольного образования, присмотр и уход за детьми:<br />
				&nbsp;&nbsp;&nbsp;-&nbsp;территориальному органу Росстата в субъекте Российской Федерации<br /> 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;по установленному им адресу
			</td>
			<td align="center" valign="top">16 января<br/>после отчетного периода<br /><br /><br /><br /><br /><br /></td>
		</tr>
		</table>
	</td>
	<td width="4%" >&nbsp;</td>
	<td>
	<table border="0" cellpadding="0" width="100%">
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
			<tr><td align="center">Форма № 85-K</td></tr></table>
	</td></tr>
	<tr><td align="center" valign="center" height="100%">
			<br>Приказ Росстата:
			<br>Об утверждении формы
			<br>от 06.11.2014 № 640
			<br><span class="style1">О внесении изменений (при&nbsp;наличии)</span>
			<br>от  __________ № ___
			<br>от  __________ № ___
			<br><br>
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
colCount=6%>
<tr><td align="center"><br><br><br>
<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
<tr>
	<td COLSPAN="<%=colCount%>"><b>Наименование отчитывающейся организации</b>&nbsp;&nbsp;&nbsp;<%=strFullSchoolName%></td>
</tr><tr>
	<td COLSPAN="<%=colCount%>"><b>Почтовый адрес</b><%=replace(lPad(0, 33),"0","&nbsp;")%><%=GetSafeStrParam(objSchoolParams("Address"), "")%></td>
</tr><tr align="center">
	<td ROWSPAN=2>Код<br>формы<br>по ОКУД</td>
	<td COLSPAN="<%=colCount-1%>">Код</td>
</tr><tr align="center">
	<td>отчитывающейся организации<br>по ОКПО</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr><tr align="center">
	<td>1</td><td>2</td><td>3</td><td>4</td>
</tr><tr align="center">
	<td width="10%">0609506</td>
	<td><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></td>
	<td width="18%">&nbsp;</td>
	<td width="18%">&nbsp;</td>
</tr>
</table>
</td></tr>
</table>
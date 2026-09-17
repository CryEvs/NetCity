<head>

</head>
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
            Нарушение порядка представления статистической информации, а равно представление недостоверной статистической информации<BR>
			влечет ответственность, установленную статьей 13.19 Кодекса Российской Федерации об административных правонарушениях<BR>
			от 30.12.2001 № 195-ФЗ, а также статьей 3 Закона Российской Федерации от 13.05.92 № 2761-1 "Об ответственности за нарушение<BR>
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
			СВЕДЕНИЯ О ДЕЯТЕЛЬНОСТИ ДОШКОЛЬНОГО ОБРАЗОВАТЕЛЬНОГО УЧРЕЖДЕНИЯ<br />
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
						юридические лица, осуществляющие деятельность в сфере дошкольного образования:<br/>
						&nbsp;&nbsp;&nbsp;- территориальному органу Росстата в субъекте Российской Федерации<br/> 
						&nbsp;&nbsp;&nbsp;по установленному им адресу
					</td>
					<td align="center" valign="top">16 января<br/>после отчетного периода<br /><br /><br /><br /><br /><br /></td>
				</tr>
				</table>
			</td>
			<TD width="4%" >&nbsp;</TD>
			<td>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center">Форма № 85-K</td></tr></table>
			</td></tr>
			<tr><td align="center" valign="center" height="100%">
					<BR>Приказ Росстата:
					<BR>Об утверждении формы
					<BR>от 29.08.2013 № 349
					<BR><span class="style1">О внесении изменений (при&nbsp;наличии)</span></span>
					<BR>от  __________ № ___
					<BR>от  __________ № ___
					<BR><BR>
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
		<TR>
			<TD COLSPAN="<%=colCount%>">Наименование отчитывающейся организации</b>&nbsp;&nbsp;&nbsp;<%=strFullSchoolName%></TD>
	    </TR><TR>
			<TD COLSPAN="<%=colCount%>">Почтовый адрес<%=replace(lPad(0, 33),"0","&nbsp;")%><%=GetSafeStrParam(objSchoolParams("Address"), "")%></b></TD>
		</TR><TR align="center">
			<TD ROWSPAN=2>Код<BR>формы<BR>по ОКУД</TD>
			<TD COLSPAN="<%=colCount-1%>">Код</TD>
		</TR><TR align="center">
			<TD>отчитывающейся организации<BR>по ОКПО</TD>
			<TD>&nbsp;</TD>
			<TD>&nbsp;</TD>
		</TR><TR align="center">
			<TD>1</TD><TD>2</TD><TD>3</TD><TD>4</TD>
		</TR><TR align="center">
			<TD width="10%">0609506</TD>
			<TD><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></TD>
			<TD width="18%">&nbsp;</TD>
			<TD width="18%">&nbsp;</TD>
		</tr>
		</table>
	</td></tr>
	</table>

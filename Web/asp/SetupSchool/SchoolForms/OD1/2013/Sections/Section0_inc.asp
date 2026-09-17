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
			СВЕДЕНИЯ ОБ УЧРЕЖДЕНИИ ДЛЯ ДЕТЕЙ-СИРОТ И ДЕТЕЙ, ОСТАВШИХСЯ БЕЗ ПОПЕЧЕНИЯ РОДИТЕЛЕЙ<br />
			за 2012 г.
			</td></tr>
			</table>
		</td></tr>
		<tr><td align="center"><br><br><br>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
				<tr align="center">
					<td width="530px">Предоставляют:</td>
					<td>Сроки предоставления</td>
				</tr><tr>
					<td align="left" valign="top">
						юридические лица - учреждения для детей-сирот и детей, оставшихся без попечения родителей (детские дома и<br/>
						школы-интернаты):<br/>
						&nbsp;&nbsp;&nbsp;- органу исполнительной власти субъекта Российской Федерации, федеральному органу<br/> 
						&nbsp;&nbsp;&nbsp;исполнительной власти, на которые возложены функции по управлению учреждениями для детей
						&nbsp;&nbsp;&nbsp;сирот и детей, оставшихся без попечения родителей (по принадлежности)
					</td>
					<td align="center" valign="top">10 января<br /><br /><br /><br /><br /><br /></td>
				</tr>
				</table>
			</td>
			<TD width="4%" >&nbsp;</TD>
			<td>
			<table border="0" cellpadding="0" width="100%">
			<tr><td>
				<table class="ThinTable" border="1" cellpadding="3" cellspacing="0" width="100%">
					<tr><td align="center">Форма № 1-ОД</td></tr></table>
			</td></tr>
			<tr><td align="center" valign="center" height="100%">
					<BR>Приказ Росстата:
					<BR>Об утверждении формы
					<BR>от 14.01.13 № 12
					<BR><span class="style1">О внесении изменений (при&nbsp;наличии)</span></span>
					<BR>от  __________ № ___
					<BR>от  __________ № ___
					<BR><BR>
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
			<TD width="10%">0609546</TD>
			<TD><%=GetSafeStrParam(objSchoolParams("Okpo"), "")%></TD>
			<TD width="18%">&nbsp;</TD>
			<TD width="18%">&nbsp;</TD>
		</tr>
		</table>
	</td></tr>
	</table>

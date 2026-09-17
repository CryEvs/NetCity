<% ' © 2007-2017 IRTech. All rights reserved. %>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<br><br>
			<div align="center"><b>2.6. Формирование и использование библиотечного фонда</b></div>
			<br>
			<div align="right">Код по ОКЕИ: единица – 642</div>

			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td>Наименование показателей</td>
					<td>№ <br>строки</td>
					<td>Поступило <br>экземпляров <br>за отчетный год</td>
					<td>Выбыло <br>экземпляров <br>за отчетный год</td>
					<td>Состоит <br>экземпляров <br>на конец отчетного года</td>
				</tr>
				<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
				
				<tr align="middle" valign="center">
					<td align="left">&nbsp;Объем фондов  библиотеки – всего (сумма строк 06-09)</td>
					<td>01</td>
					<%=DrawInputsWithTotals(1,3,5,"02.6", Array(3,4,5))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из него: <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						учебники
					</td>
					<td>02</td>
					<%=DrawInputs("02.6",2,3,5)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						учебные пособия
					</td>
					<td>03</td>
					<%=DrawInputs("02.6",3,3,5)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						художественная литература
					</td>
					<td>04</td>
					<%=DrawInputs("02.6",4,3,5)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						справочный материал
					</td>
					<td>05</td>
					<%=DrawInputs("02.6",5,3,5)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;Из строки 01: <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;печатные  издания
					</td>
					<td>06</td>
					<%=DrawInputs("02.6",6,3,5)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;аудиовизуальные документы
					</td>
					<td>07</td>
					<%=DrawInputs("02.6",7,3,5)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;документы на микроформах
					</td>
					<td>08</td>
					<%=DrawInputs("02.6",8,3,5)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;электронные документы
					</td>
					<td>09</td>
					<%=DrawInputs("02.6",9,3,5)%>
				</tr>
			</table>
		</td>
	</tr>
</table>
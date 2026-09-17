<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: единица - 642; человек-792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2">
						Наименование
					</td>
					<td rowspan="2" align="center">
						№<br>
						строки
					</td>
					<td rowspan="2">
						Число учреж-<br/>дений по язы-<br/>ку обучения<br/>(ед)
					</td>
					<td colspan="4">
						Распределение обучающихся<br/>по языку обучения (чел)
					</td>
					<td rowspan="2">
						Число учреж-<br/>дений, в кото-<br/>рых родной<br/>(нерусский)<br/>язык изучает-<br/>ся как<br/>предмет (ед)
					</td>
					<td colspan="4">
						Распределение обучающихся, изучающих родной<br/>(нерусский) как предмет (чел)
					</td>
				</tr>
				<tr align="center">
					<td>
						1-4 классы
					</td>
					<td>
						5-9 классы
					</td>
					<td>
						10 –11 (12)<br/>классы
					</td>
					<td>
						итого
					</td>
					<td>
						1-4 классы
					</td>
					<td>
						5-9 классы
					</td>
					<td>
						10 –11 (12)<br/>классы
					</td>
					<td>
						итого
					</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
				</tr>
				<tr>
					<td align="left">
						1. По всем учреждениям с языками обучения и с изучением языка<br/>
						как предмета (сумма стр. 2-91 и 92-94 по гр. 4-7 и гр. 9-12)
					</td>
					<td align="center">01</td>
					<%Call DrawLineWithEmptyAndSum(1, 12, 1, Array(3, 8), Array(4,5,6,7,9,10,11,12))%>
				</tr>
				<%Dim arrLanguages, i
				arrLanguages = Array("Абазинский", "Аварский", "Агульский",_
									"Адыгейский", "Азербайджанский", "Алтайский", "Армянский", "Балкарский", "Башкирский", "Белорусский",_
									"Бурятский", "Вепсский", "Греческий", "Грузинский", "Даргинский", "Долганский", "Еврейский (идиш)",_
									"Ингушский", "Ительменский", "Кабардинский", "Казахский", "Калмыцкий", "Карачаевский", "Карельский",_
									"Кетский", "Китайский", "Коми", "Коми-пермяцкий", "Корейский", "Корякский", "Крымско-татарский",_
									"Кумыкский", "Лакский", "Латышский", "Лезгинский", "Литовский", "Манси", "Марийский горный",_
									"Марийский луговой", "Мордовский мокша", "Мордовский эрзя", "Нанайский", "Негидальский", "Немецкий", "Ненецкий",_
									"Нивхский (на двух диалектах)", "Новогреческий", "Ногайский", "Орокский (Уйльта)", "Осетинский", "Польский", "Русский",_
									"Рутульсский", "Саамский", "Селькупский", "Табасаранский", "Татарский", "Татский", "Тофаларский",_
									"Тувинский", "Турецкий", "Туркменский", "Удмуртский", "Удэгейский", "Украинский", "Ульчский",_
									"Финский", "Хакасский", "Хантыйский (на трех диалектах)", "Цахурский", "Черкесский", "Чеченский", "Чувашский",_
									"Чукотский", "Шорский", "Эвенкийский", "Эвенский", "Энецкий", "Эскимосский", "Эстонский",_
									"Юкагирский", "Якутский", "Телеутский", "Сойотский")
				For i = 0 to UBound(arrLanguages)%>
					<tr align="middle" valign="center">
						<td align="left">
							<%=arrLanguages(i)%>
						</td>
						<td align="center">
							<%=LPad2(i+2)%>
						</td>
						<%If arrLanguages(i) = "Русский" Then%> 
							<%=DrawInputsWithTotals(i+2, 3, 7, 1, Array(7))%>
								<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
							<%
						Else%>
							<%=DrawInputsWithTotals(i+2, 3, 12, 1, Array(7, 12))%>
						<%End If%>
					</tr><%
				Next
				
				For i = 86 to 91%>
					<tr align="middle" valign="center">
						<td align="left">
							<%Response.Write(IT(GetFieldName(1, i, 1), 30, 30 ))%>
						</td>
						<td align="center">
							<%=LPad2(i)%>
						</td>
						<%=DrawInputsWithTotals(i, 3, 12, 1, Array(7, 12))%>
					</tr>
				<%Next%>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;Из общего числа (стр. 01):<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Учреждения с русским языком обучения
					</td>
					<td align="center">92</td>
					<%=DrawInputsWithTotals(92, 3, 7, 1, Array(7))%>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Учреждения с нерусским (и) языками обучения
					</td>
					<td align="center">93</td>
					<%=DrawInputsWithTotals(93, 3, 7, 1, Array(7))%>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Учреждения с русским и нерусским (и) языками обучения
					</td>
					<td align="center">94</td>
					<%=DrawInputsWithTotals(94, 3, 7, 1, Array(7))%>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Учреждения, в которых нерусские языки изучаются<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;факультативно или в кружках
					</td>
					<td align="center">95</td>
					<%=DrawInputs(1,95,3,3)%>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
					<td align="center">X</td><td align="center">X</td><td align="center">X</td><td align="center">X</td>
					<%=DrawInputs(1,95,12,12)%>
				</tr>
			</table>
			<!-- End Of таб.1 -->
		</td>
	</tr>
	<tr>
		<td>
			<br/>
			<table border=0 cellpadding=5>
				<tr>
					<td align="left">Должностное лицо, ответственное за предоставление статистической информации<br />
					(лицо, уполномоченное предоставлять статистическую информацию от имени<br />
					юридического лица) 
					</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;<br><br></td>
					<td align=center>_______________________<br>(должность)</td>
					<td align=center>_______________________<br>(Ф.И.О.)</td>
					<td align=center>_________________<br>(подпись)</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td align=center>_______________________<br>(номер контактного телефона)</td>
					<td align=left colspan=2>"____" __________________<br>(дата составления документа)</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

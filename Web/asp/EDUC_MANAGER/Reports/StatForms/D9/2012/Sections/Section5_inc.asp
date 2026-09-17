<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center">
		<td>
			<b>Раздел 5. Возрастной состав обучающихся</b><br/>
			(без обучающихся в специальных (коррекционных) классах для детей с ограниченными возможностями здоровья)
		</td>
	</tr>
	<tr>
		<td align="center">
			<div align="right">Код по ОКЕИ: человек-792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2" colspan="4">
						Наименование
					</td>
					<td rowspan="2">
						№<br/>
						строки
					</td>
					<td colspan="2">
						Городские поселения
					</td>
					<td colspan="2">
						Сельская местность
					</td>
					<td colspan="2">
						Всего
					</td>
					<td colspan="5">
						Из общего числа (из гр.7) обучающиеся
					</td>
				</tr>
				<tr align="center">
					<td>
						численность <br/>
						обучаю-<br/>
						щихся 1-12 <br/>
						классов<br/>
					</td>
					<td>
						в т.ч. девочек
					</td>
					<td>
						численность <br/>
						обучаю-<br/>
						щихся 1-12 <br/>
						классов<br/>
					</td>
					<td>
						в т.ч. девочек
					</td>
					<td>
						численность <br/>
						обучаю-<br/>
						щихся 1-12 <br/>
						классов<br/>
					</td>
					<td>
						в т.ч. девочек
					</td>
					<td>
						подготови-<br/>
						тельных <br/>
						классов
					</td>
					<td>
						1 классов
					</td>
					<td>
						9 классов
					</td>
					<td>
						10-11 (12) <br/>
						классов
					</td>
					<td>
						в том числе <br/>
						выпускных <br/>
						классов (из <br/>
						графы 12)
					</td>
				</tr>
				
				<tr align="center">
					<td colspan="4">1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
					<td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
				</tr>
				<tr align="center" valign="middle">
					<td rowspan="19">Число<br><br>полных<br><br>лет<br><br>на<br><br><br>1<br><br>января<br><br><%=strShoolYearEnd%><br><br>года</td>
					<td>5 лет</td>
					<td rowspan="19">&nbsp;г&nbsp;<br>о<br>д<br><br><br>р<br>о<br>ж<br>д<br>е<br>н<br>и<br>я</td>
					<td><%=strShoolYearEnd-6%> г.</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 3, 13, 5, Array(7,8))%>
				</tr>

				<%dim i, istr

				for i=2 to 19
					istr = CStr( i )
					if Len(istr)=1 Then istr = "0" & istr%>
					<tr align="center" valign="middle">
						<td><%=i+4%>&nbsp;<%=IIf((i+4)<21,"лет",IIf((i+4)=21,"год","года"))%>&nbsp;<% If i=19 Then Response.Write "и<BR>старше" %></td>
						<td><%=strShoolYearEnd-5-i%> г. <% If i=19 Then Response.Write "и<BR>ранее" %></td>
						<td><%=istr%></td>
						<%Call DrawInputsWithTotals(istr, 3, 13, 5, Array(7,8))%>
					</tr>
				<%next%>
				<tr align="center" valign="middle">
					<td colspan="4">Итого (сумма строк 01-19)</td>
					<td>20</td>
					<%Call DrawInputsWithTotals(20, 3, 13, 5, Array(3,4,5,6,7,8,9,10,11,12,13))%>
				</tr>
			</table>
		</td>
	</tr>
</table>

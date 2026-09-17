<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.3 -->
<table class="print-block">
	<tr><td>
		<div align="center">Раздел 3. Сведения о численности занимающихся в объединениях и научных обществах</div>
		<br/>
		<div align="right">Коды по ОКЕИ: человек - 792</div>
	</td></tr>
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td rowspan="2">Вид учреждения</td>
				<td rowspan="2">№<br/>строки</td>
				<td colspan="3">Численность занимающихся в <br/>объединениях</td>
				<td colspan="8">в том числе в объединениях</td>
				<td rowspan="2">из общей <br/>численности <br/>(из гр.3)  за-<br/>нимаются в <br/>двух и более <br/>объединениях</td>
				<td rowspan="2">из общей <br/>численности <br/>(из гр.3)  за-<br/>нимаются на <br/>платной <br/>основе</td>
				<td rowspan="2" class="auto-style1">Численность <br/>занимающихся в <br/>объединениях, <br/>организованных на базе образо-<br/>вательных <br/>учреждений<br/>(из гр. 3)</td>
				<td colspan="2">Численность <br/>занимающихся в научных <br/>обществах</td>
			</tr>
			<tr align="center" valign="middle">
				<td>Всего</td>
				<td>Городские <br/>поселения</td>
				<td>Сельская <br/>местность</td>
				<td>технического <br/>творчества</td>
				<td>спортивно-<br/>технические</td>
				<td>эколого-био-<br/>логические</td>
				<td>туристско-<br/>краевед-<br/>ческие</td>
				<td>спортивные</td>
				<td>художес-<br/>твенного <br/>творчества</td>
				<td>культуро-<br/>логические</td>
				<td>другие</td>
				<td>всего</td>
				<td>из них (гр.17) <br/>в сельской <br/>местности</td>
			</tr>

			<tr align="center" valign="middle">
				<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td class="auto-style1">16</td><td>17</td><td>18</td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Всего (сумма строк 02-09)</td>
				<td align="center">01</td>
				<%=DrawInputsWithTotals(1,3,18,3,Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;центры</td>
				<td align="center">02</td>
				<%=DrawInputsWithTotals(2,3,18,3,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дворцы</td>
				<td align="center">03</td>
				<%=DrawInputsWithTotals(3,3,18,3,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дома</td>
				<td align="center">04</td>
				<%=DrawInputsWithTotals(4,3,18,3,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;станции</td>
				<td align="center">05</td>
				<%=DrawInputsWithTotals(5,3,18,3,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;школы</td>
				<td align="center">06</td>
				<%=DrawInputsWithTotals(6,3,18,3,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы</td>
				<td align="center">07</td>
				<%=DrawInputsWithTotals(7,3,18,3,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы олимпийского резерва</td>
				<td align="center">08</td>
				<%=DrawInputsWithTotals(8,3,18,3,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивно-адаптивные школы</td>
				<td align="center">09</td>
				<%=DrawInputsWithTotals(9,3,18,3,Array(3))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Из строки 01 детей с ограниченными <br/>возможностями здоровья</td>
				<td align="center">10</td>
				<%=DrawInputsWithTotals(10,3,13,3,Array(3))%>
				<td>X</td>
				<%=DrawInputs(3,10,15,15)%>
				<td>X</td>
				<%=DrawInputs(3,10,17,18)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Из строки 01 детей-сирот и детей, оставшихся <br/>без попечения родителей</td>
				<td align="center">11</td>
				<%=DrawInputsWithTotals(11,3,13,3,Array(3))%>
				<td>X</td>
				<%=DrawInputs(3,11,15,15)%>
				<td>X</td>
				<%=DrawInputs(3,11,17,18)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">Из строки 01 детей-инвалидов</td>
				<td align="center">12</td>
				<%=DrawInputsWithTotals(12,3,13,3,Array(3))%>
				<td>X</td>
				<%=DrawInputs(3,12,15,15)%>
				<td>X</td>
				<%=DrawInputs(3,12,17,18)%>
			</tr>
		</table>
	</td></tr>
</table>
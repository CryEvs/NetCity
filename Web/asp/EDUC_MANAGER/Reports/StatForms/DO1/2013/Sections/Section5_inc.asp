
<% ' © 2007-2014 IRTech. All rights reserved.
%>
<!-- таб.5 -->
<table class="print-block">
	<tr><td>
		<div align="center">Раздел 5. Сведения о работе туристических баз и детских оздоровительных учреждений (лагерей)</div>
		<br/>
		<div align="right">Коды по ОКЕИ: единица - 642, место - 698, человек - 792</div>
	</td></tr>
	<tr><td>
		<table class="ThinTable" border="1" cellpadding="0" cellspacing="0">
			<tr align="center" valign="middle">
				<td rowspan="2">Вид учреждения</td>
				<td rowspan="2">№<br/>строки</td>
				<td rowspan="2">Число учреж-<br/>дений, имею-<br/>щих базу при <br/>данном учре-<br/>ждении или <br/>базы от дан-<br/>ного учреж-<br/>дения в дру-<br/>гих местах для <br/>размещения <br/>детей (ед)</td>
				<td rowspan="2">Число мест <br/>для детей на <br/>базах при этих <br/>учреж-<br>дениях (мест)</td>
				<td rowspan="2">Численность <br/>детей, <br/>обслуженных <br/>за год базой <br/>при данном <br/>учреждении, <br/>базами в <br/>других местах <br/>(чел)</td>
				<td colspan="2">Численность детей, <br/>принимавших участие в <br/>отчетном году (чел)</td>
				<td rowspan="2">Число <br/>учреждений <br/>(ед)</td>
				<td rowspan="2">Численность <br/>обслуженных <br/>ими детей за <br/>год (чел)</td>
			</tr>
			<tr align="center" valign="middle">
				<td>в экскурсиях</td>
				<td>в походах</td>
			</tr>

			<tr align="center" valign="middle">
				<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
			</tr>

			<tr align="middle" valign="center">
				<td align="left">Всего (сумма строк 02-09)</td>
				<td align="center">01</td>
				<%=DrawInputsWithTotals(1,3,9,5,Array(3,4,5,6,7,8,9))%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;центры</td>
				<td align="center">02</td>
				<%=DrawInputs(5,2,3,9)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дворцы</td>
				<td align="center">03</td>
				<%=DrawInputs(5,3,3,9)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дома</td>
				<td align="center">04</td>
				<%=DrawInputs(5,4,3,9)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;станции</td>
				<td align="center">05</td>
				<%=DrawInputs(5,5,3,9)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;школы</td>
				<td align="center">06</td>
				<%=DrawInputs(5,6,3,9)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы</td>
				<td align="center">07</td>
				<%=DrawInputs(5,7,3,9)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивные школы олимпийского резерва</td>
				<td align="center">08</td>
				<%=DrawInputs(5,8,3,9)%>
			</tr>
			<tr align="middle" valign="center">
				<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;спортивно-адаптивные школы</td>
				<td align="center">09</td>
				<%=DrawInputs(5,9,3,9)%>
			</tr>
		</table>
	</td></tr>
</table>
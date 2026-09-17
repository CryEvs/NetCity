<% ' © 2007-2012 IRTech. All rights reserved.
%>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 8. Расходы и поступление нефинансовых активов</b><br/>
	<p font-size:"8pt">(раздел заполняют только те учреждения, которые не осуществляют подготовку по программам<br/>общего образования)</p>
</div>
<div align="right"><p font-size:10pt>Код по ОКЕИ: тысяча рублей - 384</p></div>
<table Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
    <tr align="middle" valign="center">
	    <td><br />Наименование показателей<br />&nbsp;</td><td>№<br />строки</td><td>Бюджетные<br />расходы</td>
		<td>Расходы, осу-<br/>ществляемые за<br/>счет внебюдже-<br/>тных источников<br/>финансирования</td>
    </tr>
    <tr align="middle" valign="center">
        <td>1</td><td>2</td><td>3</td><td>4</td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Расходы – всего (сумма строк 02, 11, 18, 19)</td><td>01</td>
	<%=DrawInputsWithTotals(1,3,4,8,Array(3, 4))%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Оплата труда и начисления на оплату труда (сумма строк 03, 09, 10)</td><td>02</td>
	<%=DrawInputsWithTotals(2,3,4,8, Array(3,4))%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;заработная плата (сумма строк 04-08)</td><td>03</td>
	<%=DrawInputsWithTotals(3,3,4,8,Array(3,4))%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;в том числе по группам:<br />&emsp;&emsp;&emsp;руководящие работники</td><td>04</td>
	<%=DrawInputs("08",4,3,4)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;&emsp;педагогические работники</td><td>05</td>
	<%=DrawInputs("08",5,3,4)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;&emsp;учебно-вспомогательный персонал</td><td>06</td>
	<%=DrawInputs("08",6,3,4)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;&emsp;медицинские работники</td><td>07</td>
	<%=DrawInputs("08",7,3,4)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;&emsp;обслуживающий персонал</td><td>08</td>
	<%=DrawInputs("08",8,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;прочие выплаты</td><td>09</td>
	<%=DrawInputs("08",9,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;начисления на оплату труда</td><td>10</td>
	<%=DrawInputs("08",10,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">Приобретение услуг (сумма строк 12-17)</td><td>11</td>
	<%=DrawInputsWithTotals(11,3,4,8,Array(3,4))%></tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;Услуги связи</td><td>12</td>
	<%=DrawInputs("08",12,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;Транспортные услуги</td><td>13</td>
	<%=DrawInputs("08",13,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;Коммунальные услуги</td><td>14</td>
	<%=DrawInputs("08",14,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;Арендная плата за пользование имуществом</td><td>15</td>
	<%=DrawInputs("08",15,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;Услуги по содержанию имущества</td><td>16</td>
	<%=DrawInputs("08",16,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;Прочие услуги</td><td>17</td>
	<%=DrawInputs("08",17,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">Социальное обеспечение</td><td>18</td>
	<%=DrawInputs("08",18,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">Прочие расходы</td><td>19</td>
	<%=DrawInputs("08",19,3,4)%></tr>
	<tr align="middle" valign="center">
		<td align="left">Поступление нефинансовых активов</td><td>20</td>
	<%=DrawInputs("08",20,3,4)%></tr>
    </table></td></tr></table> <!-- format -->
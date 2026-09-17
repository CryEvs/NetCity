<% ' © 2007-2012 IRTech. All rights reserved.
%>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 7. Сведения об источниках получения средств</b><br/>
	<p font-size:"8pt">(раздел заполняют только те учреждения, которые не осуществляют подготовку по программам<br/>общего образования)</p>
</div>
<div align="right"><p font-size:10pt>Код по ОКЕИ: тысяча рублей - 384</p></div>
<table Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
    <tr align="middle" valign="center">
	    <td><br />Наименование показателей<br />&nbsp;</td><td>№<br />строки</td><td>Фактически<br />профинансировано</td></tr>
    <tr align="middle" valign="center">
        <td>1</td><td>2</td><td>3</td></tr>
	<tr align="middle" valign="center">
	    <td align="left">Объем финансирования – всего (сумма строк 02, 03)</td><td>01</td>
	<%=DrawInputsWithTotals(1,3,3,7,Array(3))%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Текущее бюджетное финансирование</td><td>02</td>
	<%=DrawInputs("07",2,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Внебюджетные источники финансирования – всего (сумма строк 04-08)</td><td>03</td>
	<%=DrawInputsWithTotals(3,3,3,7,Array(3))%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;в том числе:<br />&emsp;&emsp;остаток средств на начало отчетного периода</td><td>04</td>
	<%=DrawInputs("07",4,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;доходы от реализации платных дополнительных образовательных услуг</td><td>05</td>
	<%=DrawInputs("07",5,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;доходы от производственной деятельности</td><td>06</td>
	<%=DrawInputs("07",6,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;благотворительные средства</td><td>07</td>
	<%=DrawInputs("07",7,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">&emsp;&emsp;другие внебюджетные источники</td><td>08</td>
	<%=DrawInputs("07",8,3,3)%></tr>
	<tr align="middle" valign="center">
	    <td align="left">Остаток внебюджетных средств на конец отчетного периода</td><td>09</td>
	<%=DrawInputs("07",9,3,3)%></tr>
    </table></td></tr></table> <!-- format -->
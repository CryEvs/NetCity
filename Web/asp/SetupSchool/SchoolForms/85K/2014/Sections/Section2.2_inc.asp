<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center" style="margin-bottom:20px;"><b>2.2. Распределение воспитанников по возрасту</b></div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<table Class="ThinTable" align="left" BORDER=1 cellpadding=3 cellspacing=0 width="100%" id="T022">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan="2">Наименование показателей</td>
	<td rowspan="2">№<br>строки</td>
	<td rowspan="2">Всего,<br />гр.3 = сумме<br />гр. 4-11</td>
	<td colspan="8">в том числе в возрасте, лет<br />(число полных лет на 01.01.<%=strShoolYearEnd%>):</td>
</tr>
<tr align="middle" valign="center"><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7 и старше</td></tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>
<tr align="middle" valign="center">
	<td align="left">Численность воспитанников -<br /> всего</td>
	<td align="center">01</td><%=DrawInputsWithTotals(1, 3, 11, "02.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них - девочки</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2, 3, 11, "02.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Из общей численности<br /> воспитанников (из стр. 01) -<br /> воспитанники-инвалиды</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3, 3, 11, "02.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них - девочки</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4, 3, 11, "02.2", Array(3))%>
</tr>
</table></td></tr>
<tr><td><br/></td></tr>


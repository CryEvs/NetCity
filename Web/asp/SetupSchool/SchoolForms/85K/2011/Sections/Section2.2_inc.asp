<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center" style="margin-bottom:20px;"><b>2.2. Распределение детей  по возрасту</b></div>
<div align="right">Код по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%" id="T022">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan="2">Наименование показателей</td>
	<td rowspan="2">№<br>строки</td>
	<td rowspan="2">Всего<br />гр.3=<br />сумме<br />гр. 4-11</td>
	<td colspan="8">В том числе в возрасте, лет<br />(число полных лет на 01.01.<%=strShoolYearEnd%>):</td>
	<td colspan="3">Из гр. 3 дeти, кoтoрым<br />к 1 ceнтября cлeдующего зa<br />oтчeтным гoдa иcпoлнитcя лет:</td>
</tr>
<tr align="middle" valign="center"><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>5</td><td>6</td><td>7</td></tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr>
<tr align="middle" valign="center">
	<td align="left">Численность детей - всего</td>
	<td align="center">01</td><%=DrawInputsWithTotals(1, 3, 14, "02.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них - девочки</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2, 3, 14, "02.2", Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Из строки 01 - обучающиеся<br />по программе первого класса<br />общеобразовательного<br />учреждения</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3, 3, 3, "02.2", Array(3))%>
	<td>X</td><td>X</td><td>X</td><td>X</td>
	<%=DrawInputs("02.2", 3, 8, 14)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них - девочки</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4, 3, 3, "02.2", Array(3))%>
	<td>X</td><td>X</td><td>X</td><td>X</td>
	<%=DrawInputs("02.2", 4, 8, 14)%>
</tr>
</TABLE></td></tr><tr><td>
<br/><div align="left">Из общей численности детей (из стр. 01) – дети-инвалиды (05) <%=IT(GetFieldName("02.2",5,3),4, 5 )%> (код по ОКЕИ: человек – 792)</div></td></tr>
<tr><td><br/></td></tr>


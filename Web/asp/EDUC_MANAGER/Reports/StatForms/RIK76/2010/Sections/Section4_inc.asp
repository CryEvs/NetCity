<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 4. Распределение обучающихся по классам на начало учебного года</b><br />
(по учреждениям, указанным в строках 02, 03, 11, 12 раздела 1.1)</div>
<div align="right">Коды по ОКЕИ: единица - 642, человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan=3>Наименование</td>
    <td rowspan=3 valign="top">№<br>строки</td>
	<td colspan=4>Городские поселения</td>
	<td colspan=4>Сельская местность</td>
   	<td colspan=5>Итого</td>
</tr>
<tr>
	<td rowspan=2 valign="top">число классов (ед)</td>
	<td rowspan=2 valign="top">числен&shy;ность обучающихся по спискам на начало учебного года (чел)</td>
	<td colspan=2 valign="top">из гр. 4</td>
	<td rowspan=2 valign="top">число классов (ед)</td>
	<td rowspan=2 valign="top">численность обучающихся по спискам на начало учебного года (чел)</td>
	<td colspan=2 valign="top">из гр. 8</td>
	<td rowspan=2 valign="top">число классов (сумма граф 3, 7) (ед)</td>
	<td rowspan=2 valign="top">численность обучающихся по спискам на начало учебного года (сумма граф 4, 8) (чел)</td>
	<td colspan=3 valign="top">из гр. 12</td>
</tr><tr>
	<td valign="top">прихо&shy;дящих</td>
	<td valign="top">второ&shy;годников и поступивших из чис&shy;ла выбыв&shy;ших в прошлом учебном году и ранее</td>
	<td valign="top">прихо&shy;дящих</td>
	<td valign="top">второ&shy;годников и поступивших из чис&shy;ла выбыв&shy;ших в прошлом учебном году и ранее</td>
	<td valign="top">прихо&shy;дящих (сумма граф 5, 9)</td>
	<td valign="top">второгод&shy;ников и поступивших из числа выбывших в прошлом учебном году и ранее (сумма граф 6, 10)</td>
	<td valign="top">девочек</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Подготовительный класс</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left" rowspan=2>1 класс</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">1 класс, организованный в дошкольных учреждениях</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left" rowspan=2>2 класс</td>
	<td align="center">05</td>
	<%=DrawInputsWithTotals(5,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">06</td>
	<%=DrawInputsWithTotals(6,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center"> 
	<td align="left" rowspan=2>3 класс</td>
	<td align="center">07</td>
	<%=DrawInputsWithTotals(7,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">08</td>
	<%=DrawInputsWithTotals(8,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">4 класc</td>
	<td align="center">09</td>
	<%=DrawInputsWithTotals(9,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Итого 1-3 (4) классы (сумма стр. 01-09)</td>
	<td align="center">10</td>
	<%=DrawInputsWithTotals(10,3,15,4,Array(3,4,5,6,7,8,9,10,11,12,13,14,15))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">5 класс</td>
	<td align="center">11</td>
	<%=DrawInputsWithTotals(11,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">6 класс</td>
	<td align="center">12</td>
	<%=DrawInputsWithTotals(12,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">7 класс</td>
	<td align="center">13</td>
	<%=DrawInputsWithTotals(13,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">8 класс</td>
	<td align="center">14</td>
	<%=DrawInputsWithTotals(14,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">9 класс</td>
	<td align="center">15</td>
	<%=DrawInputsWithTotals(15,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Итого 5-9 классы (сумма стр.11-15)</td>
	<td align="center">16</td>
	<%=DrawInputsWithTotals(16,3,15,4,Array(3,4,5,6,7,8,9,10,11,12,13,14,15))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">10 класс</td>
	<td align="center">17</td>
	<%=DrawInputsWithTotals(17,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">11 класс</td>
	<td align="center">18</td>
	<%=DrawInputsWithTotals(18,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">12 класс</td>
	<td align="center">19</td>
	<%=DrawInputsWithTotals(19,3,15,4,IIF(IsMns(), Array(3,7,11,12,13,14), Array(11,12,13,14)))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Итого 10-12 классы (сумма стр. 17-19)</td>
	<td align="center">20</td>
	<%=DrawInputsWithTotals(20,3,15,4,Array(3,4,5,6,7,8,9,10,11,12,13,14,15))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Всего по учреждениям (сумма стр. 10,16, 20)</td>
	<td align="center">21</td>
	<%=DrawInputsWithTotals(21,3,15,4,Array(3,4,5,6,7,8,9,10,11,12,13,14,15))%>
</tr>

</table>
</td></tr>

<tr><td><br>
Численность детей, занимающихся в классах компенсирующего обучения (из гр.12 стр.21) (22)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=IT("T04_22",4,5)%>(чел)<br>
<br />
<br />
Примечание:<br><div style='text-indent:35pt'>в строках 02, 05, 07 раздела 4 приводится численность детей, обучающихся по программе десятилетней школы,</div><div style='text-indent:35pt'>в строках 03, 06, 08 раздела 4 - по программе одиннадцатилетней (двенадцатилетней) школы.
</div>
</td></tr>
<tr><td>
<br><br>
<div align="right">Код  по ОКЕИ: человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan=2>Наименование</td>
    <td rowspan=2 valign="top">№<br>строки</td>
	<td colspan=3>Городские поселения</td>
	<td colspan=3>Сельская местность</td>
</tr>
<tr>
	<td>в начальных<br />образовательных<br />учреждениях</td>
	<td>в основных<br />образовательных<br />учреждениях</td>
	<td>в средних<br />образовательных<br />учреждениях</td>
	<td>в начальных<br />образовательных<br />учреждениях</td>
	<td>в основных<br />образовательных<br />учреждениях</td>
	<td>в средних<br />образовательных<br />учреждениях</td>
</tr><tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность обучающихся 1-3 (4) и подготовительных классов</td>
	<td>23</td>
	<%=DrawInputsWithTotals(23,3,8,4,Array("-1"))%>
</tr>
</table>
</td></tr>
</table> <!-- format -->

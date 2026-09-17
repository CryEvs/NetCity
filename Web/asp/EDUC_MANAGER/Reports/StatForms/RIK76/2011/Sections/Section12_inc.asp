<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0"><tr><td>
<div align="center"><b>Раздел 12. Сведения об изменении структуры сети учреждений</b></div>
<div align="right">Коды по ОКЕИ: единица - 642</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
	<td align="center" rowspan="3">Наименование(согласно типовым положениям)</td>
    <td rowspan="3">№<br>строки</td>
	<td rowspan="2" colspan="2">Учреждений всего</td>
	<td colspan="4">Открытие учреждения</td>
   	<td colspan="2" rowspan="2">Возникновение в<br/>результате реорганиза-<br/>ции в форме слияния</td>
	<td colspan="6">Реорганизация в форме</td>
	<td colspan="4">Кроме того (гр. 3,4)</td>
</tr>
<tr align="middle" valign="center">
	<td align="center" colspan="2">построенные вновь</td>
	<td align="center" colspan="2">вводимые после рекон-<br/>струкции (кап. ремонта)</td>
	<td align="center" colspan="2">присоединения к ним<br/>другого учреждения</td>
	<td align="center" colspan="2">преобразования</td>
	<td align="center" colspan="2">разделения или<br/>выделения</td>
	<td align="center" colspan="2">закрыто (ликвидировано)</td>
	<td align="center" colspan="2">присоединено к другому<br/>учреждению</td>
</tr>
<tr align="middle" valign="center">
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
	<td align="center">всего</td>
	<td align="center">из них в<br/>сельской<br/>местности</td>
</tr>
<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
	<td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Всего учреждений (сумма строк 02, 03, 11-16)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,20,12, Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">образовательные учреждения для детей дошкольного и младшего<br/>школьного возраста</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">общеобразовательные учреждения и школы-интернаты<br/>(сумма строк 04-06,08-10)</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3,3,20,12, Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;начальные</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;основные</td>
	<td align="center">05</td>
	<%=DrawInputsWithTotals(5,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;средние</td>
	<td align="center">06</td>
	<%=DrawInputsWithTotals(6,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.06) имеющие только 10-11(12 классы)</td>
	<td align="center">07</td>
	<%=DrawInputsWithTotals(7,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;общеобразовательные учреждения с углубленным изучением<br/>отдельных предметов</td>
	<td align="center">08</td>
	<%=DrawInputsWithTotals(8,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;гимназии</td>
	<td align="center">09</td>
	<%=DrawInputsWithTotals(9,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;лицеи</td>
	<td align="center">10</td>
	<%=DrawInputsWithTotals(10,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;кадетские учреждения</td>
	<td align="center">11</td>
	<%=DrawInputsWithTotals(11,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">общеобразовательные школы-интернаты с первоначальной летней<br/>подготовкой</td>
	<td align="center">12</td>
	<%=DrawInputsWithTotals(12,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">специальные (коррекционные) образовательые учреждения для обуча&shy;ющихся, воспитанников с ограниченными возможностями здоровья</td>
	<td align="center">13</td>
	<%=DrawInputsWithTotals(13,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">специальные образовательные учреждения санаторного типа для<br/>детей, нуждающихся в длительном лечении</td>
	<td align="center">14</td>
	<%=DrawInputsWithTotals(14,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">оздоровительные образовательные учреждения санаторного типа для<br/>детей, нуждющихся в длительном лечении</td>
	<td align="center">15</td>
	<%=DrawInputsWithTotals(15,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">образовательные учреждения для детей, нуждающихся в психолого&shy;педагогической и медико-социальной помощи</td>
	<td align="center">16</td>
	<%=DrawInputsWithTotals(16,3,20,12, IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), Array()))%>
</tr>
</table></td></tr><tr><td><br/></td></tr></table>
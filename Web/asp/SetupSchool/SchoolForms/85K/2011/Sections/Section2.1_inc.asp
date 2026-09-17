<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center" style="margin:10px;"><b>Раздел 2. Сведения о численности детей</b></div>
<div align="center" style="margin-bottom:20px;"><b>2.1. Распределение детей по группам</b></div>
<div align="right">Коды по ОКЕИ: человек - 792; единица - 642, место - 698</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan="2">Наименование показателей</td>
	<td rowspan="2">№<br>строки</td>
	<td colspan="2">Численность детей, человек</td>
	<td colspan="2">Число групп, единиц</td>
   	<td colspan="2">Число мест, единиц</td>
</tr>
<tr align="middle" valign="center">
	<td>всего</td>
	<td>в том числе в<br>возрасте 3 года и<br>старше</td>
	<td>всего</td>
	<td>в том числе для<br>детей в возрасте<br>3 года и старше</td>
	<td>всего</td>
	<td>в том числе в<br>зданиях, построенных<br>по типовому<br>проекту</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
<tr align="middle" valign="center">
	<td align="left">Всего</td>
	<td>01</td><%=DrawInputs("02.1", 1 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br>
	&nbsp;&nbsp;&nbsp;группы компенсирующей направленности </td>
	<td>02</td>
	<%=DrawInputs("02.1", 2 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе для детей:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	с нарушением слуха</td>
	<td>03</td>
	<%=DrawInputs("02.1", 3 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;с нарушением речи</td>
	<td>04</td>
	<%=DrawInputs("02.1", 4 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;с нарушением зрения</td>
	<td>05</td>
	<%=DrawInputs("02.1", 5 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;с нарушением интеллекта </td>
	<td>06</td>
	<%=DrawInputs("02.1", 6 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;с задержкой психического развития</td>
	<td>07</td>
	<%=DrawInputs("02.1", 7 , 3, 8)%>
</tr>	
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;с нарушением опорно-двигательного<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;аппарата
	<td>08</td>
	<%=DrawInputs("02.1", 8 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;со сложным дефектом
	<td>09</td>
	<%=DrawInputs("02.1", 9 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;другого профиля
	<td>10</td>
	<%=DrawInputs("02.1", 10 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;группы общеразвивающей направленности
	<td>11</td>
	<%=DrawInputs("02.1", 11 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;группы оздоровительной направленности
	<td>12</td>
	<%=DrawInputs("02.1", 12 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для детей с туберкулезной интоксикацией
	<td>13</td>
	<%=DrawInputs("02.1", 13 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;для часто болеющих детей
	<td>14</td>
	<%=DrawInputs("02.1", 14 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;группы комбинированной направленности
	<td>15</td>
	<%=DrawInputs("02.1", 15 , 3, 8)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Из общего числа (строки 01):<br/>
   &nbsp;&nbsp;&nbsp;группы кратковременного пребывания
	<td>16</td>
	<%=DrawInputs("02.1", 16 , 3, 3)%><td>X</td><td>X</td><%=DrawInputs("02.1", 16 , 6, 6)%><td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе с режимом  работы:<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;до 3 часов
	<td>17</td>
	<%=DrawInputs("02.1", 17 , 3, 3)%><td>X</td><td>X</td><%=DrawInputs("02.1", 17 , 6, 6)%><td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;до 4 часов
	<td>18</td>
	<%=DrawInputs("02.1", 18 , 3, 3)%><td>X</td><td>X</td><%=DrawInputs("02.1", 18 , 6, 6)%><td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;до 5 часов
	<td>19</td>
	<%=DrawInputs("02.1", 19 , 3, 3)%><td>X</td><td>X</td><%=DrawInputs("02.1", 19 , 6, 6)%><td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;группы круглосуточного пребывания
	<td>20</td>
	<%=DrawInputs("02.1", 20 , 3, 3)%><td>X</td><td>X</td><%=DrawInputs("02.1", 20 , 6, 6)%><td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;разновозрастные группы
	<td>21</td>
	<%=DrawInputs("02.1", 21 , 3, 3)%><td>X</td><td>X</td><%=DrawInputs("02.1", 21 , 6, 6)%><td>X</td><td>X</td>
</tr>
</table>
</td></tr><tr><td><br/></td></tr>
</table>
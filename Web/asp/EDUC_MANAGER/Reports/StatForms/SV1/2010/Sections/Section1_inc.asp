<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td style="width:100%">
<div align="center">1. Общие сведения об образовательных учреждениях</div>
<div align="right">Коды по ОКЕИ: единица-642; человек-792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan=2 colspan=2>Наименование</td>
    <td rowspan=2 valign="top">№<br>строки</td>
	<td rowspan=2 valign="top" >Число школ<BR>(ед)</td>
	<td colspan=2>В них (чел)</td>
   	<td rowspan=2 valign="top">Число учебно-<BR>консультацион-<BR>ных пунктов (ед)</td>
   	<td rowspan=2 valign="top">Из общей числен-<BR>ности обучающихся (гр.4),<BR>обслуженных учебно-консультаци-<BR>онными пунктами (чел)</td>
</tr>
<tr>
	<td valign="top">обучающихся</td>
	<td valign="top">учителей<br>(включая совместителей)</td>
</tr>
<tr align="middle" valign="center">
	<td colspan=2>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
</tr>
<tr align="middle" valign="center">
    <td rowspan=15>С<br>а<br>м<br>о<br>с<br>т<br>о<br>я<br>т<br>е<br>л<br>ь<br>н<br>ы<br>е</td>
	<td align="center">Вечерние (сменные) общеобразовательные учреждения - всего<BR>(сумма строк 02-05 = сумме строк 06-09)</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,7,1,Array(3,4,5,6,7))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">в том числе: <BR>с очной формой обучения</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,5,1,Array(0))%>
	<td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="center">с очной и заочной формами обучения</td>
	<td align="center">03</td>
	<%=DrawInputsWithTotals(3,3,5,1,Array(0))%>
	<td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="center">с заочной формой обучения</td>
	<td align="center">04</td>
	<%=DrawInputsWithTotals(4,3,5,1,Array(0))%>
	<td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="center">с формой обучения экстернат</td>
	<td align="center">05</td>
	<td>X</td>
	<%=DrawInputsWithTotals(5,4,4,1,Array(0))%>
	<td>X</td><td>X</td><td>X</td>
</tr>
<tr align="middle" valign="center">
	<td align="center">из стр.01) в том числе:<BR>вечерние (сменные) общеобразовательные школы</td>
	<td align="center">06</td>
	<%=DrawInputsWithTotals(6,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">вечерние (сменные) общеобразовательные школы при ИУ</td>
	<td align="center">07</td>
	<%=DrawInputsWithTotals(7,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">центры образования</td>
	<td align="center">08</td>
	<%=DrawInputsWithTotals(8,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">открытые (сменные) общеобразовательные школы</td>
	<td align="center">09</td>
	<%=DrawInputsWithTotals(9,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">Учреждения, при которых организованы классы (группы) для лиц с<BR> отклонениями в развитии (из стр.01), сумма строк 11,12</td>
	<td align="center">10</td>
	<%=DrawInputsWithTotals(10,3,7,1,Array(3,4,5,6,7))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">в том числе (из стр.10):<BR>для неслышащих и слабослышащих</td>
	<td align="center">11</td>
	<%=DrawInputsWithTotals(11,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">для незрячих и слабовидящих</td>
	<td align="center">12</td>
	<%=DrawInputsWithTotals(12,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">Учреждения для лиц с отклонениями в развитии</td>
	<td align="center">13</td>
	<%=DrawInputsWithTotals(13,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">Итого (сумма строк 01, 13)</td>
	<td align="center">14</td>
	<%=DrawInputsWithTotals(14,3,7,1,Array(3,4,5,6,7))%>
</tr>
<tr align="middle" valign="center">
	<td align="center">из них находятся в сельской местности</td>
	<td align="center">15</td>
	<%=DrawInputsWithTotals(15,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center" >
    <td rowspan=2>Кро-<br>ме<br>того</td>
	<td align="center">Дневные общеобразовательные учреждения, при которых созданы<BR>классы очно-заочного обучения, учебно-консультационные пункты </td>
	<td align="center">16</td>
	<%=DrawInputsWithTotals(16,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center" >
	<td align="center">из них находятся в сельской местности</td>
	<td align="center">17</td>
	<%=DrawInputsWithTotals(17,3,7,1,Array(0))%>
</tr>
<tr align="middle" valign="center">
    <td>&nbsp;</td>
	<td align="center">ВСЕГО (сумма строк 14, 16)</td>
	<td align="center">18</td>
	<td>X</td>
	<%=DrawInputsWithTotals(18,4,7,1,Array(4,5,6,7))%>
</tr>
</table>
</td></tr>
<tr><td><br>
_______<br>
Имеют основную работу в школах (классах, группах) для работающей молодежи (из гр.5, стр.18) (19) <%=IT("T011903",4,5)%> (чел)
</td></tr>
</table> <!-- format -->

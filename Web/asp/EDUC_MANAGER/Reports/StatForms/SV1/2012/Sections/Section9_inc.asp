<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td colspan="2">
<div align="center"><b>Раздел 9. Сведения о помещениях самостоятельных образовательных учреждений</b></div>
<div align="right">Коды по ОКЕИ: единица-642; квадратный метр-055</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
<td>Наименование</td>
<td>№<br/>строки</td>
<td>Число<br/>образовательных<br/>учреждений (ед)<br/>(сумма строк 01-04)</td>
<td>В них классных комнат<br/>(включая учебные<br/>кабинеты и<br/>лаборатории) (ед)</td>
<td>Площадь классных<br/>комнат (включая<br/>учебные кабинеты и<br/>лаборатории)(м2)</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr align="middle" valign="center">
	<td align="left">1. Образовательные учреждения, использующие для занятий помещения только:<br/>&nbsp;&nbsp;&nbsp;а) собственные</td>
	<td align="center">01</td>
	<%=DrawInputs(9,1,3,4)%>
	<%=DrawInputsEx(9,1,5,5,4,10)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;б) других образовательных учреждений</td>
	<td align="center">02</td>
	<%=DrawInputs(9,2,3,4)%>
	<%=DrawInputsEx(9,2,5,5,4,10)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;в) предприятий и организаций</td>
	<td align="center">03</td>
	<%=DrawInputs(9,3,3,4)%>
	<%=DrawInputsEx(9,3,5,5,4,10)%>
</tr>
<tr align="middle" valign="center">
	<td align="left">2. Образовательные учреждения, использующие для занятий помещения:<br/>&nbsp;&nbsp;&nbsp;собственные, других образовательных учреждений, предприятий и организаций</td>
	<td align="center">04</td>
	<%=DrawInputs(9,4,3,4)%>
	<%=DrawInputsEx(9,4,5,5,4,10)%>
</tr>
</table><br/>
</td></tr>
</table> <!-- format -->

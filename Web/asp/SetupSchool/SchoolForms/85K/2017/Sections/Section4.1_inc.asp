<% ' © 2007-2017 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr><td>
	<div align="center" style="padding-top:10px;"><b>Раздел 4. Материально-техническая база дошкольной образовательной организации</b></div>
	<div align="center" style="margin-bottom:20px;"><b>4.1. Площадь помещений</b></div>
	<div align="right">Коды по ОКЕИ: квадратный метр - 055</div>
	<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
	<tr align="middle" valign="center">
		<td rowspan="2">Наименование показателей</td>
		<td rowspan="2">№<br />строки</td>
		<td rowspan="2">Общая площадь<br/>зданий <br/>(помещений)<br/>(сумма гр.4-7)</td>
		<td colspan="4">из нее площадь по форме владения, пользования:</td>
		<td rowspan="2">Из общей<br/>площади (гр.3) - <br/>площадь,  сданная<br/>в аренду<br/>(субаренду)</td>
	</tr>
	<tr align="middle" valign="center">
		<td>на правах<br />собственности</td>
		<td>в оперативном<br/>управлении</td>
		<td>арендованная</td>
		<td>другие формы<br/>владения</td>
	</tr>

	<tr align="middle" valign="center">
		<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">Общая площадь зданий (помещений)</td>
		<td align="center">01</td>
		<%=DrawInputsWithTotals(1, 3, 8, "04.1", Array(3))%>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из нее:<br/>&nbsp;&nbsp;&nbsp;площадь помещений, используемых непосредственно для<br/>
		&nbsp;&nbsp;&nbsp;нужд образовательной организации</td>
		<td align="center">02</td>
		<%=DrawInputsWithTotals(2, 3, 8, "04.1", Array(3))%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из нее:<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;групповых ячеек<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(раздевальная, групповая, спальня, буфетная, туалетная)</td>
		<td align="center">03</td>
		<%=DrawInputs("04.1", 3, 3, 3)%>
		<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;дополнительных помещений для занятий с детьми,<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;предназначенных для поочередного использования всеми<br/> 
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;или несколькими детскими группами (музыкальный зал,<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;физкультурный зал,  бассейн, кабинет логопеда и др.)</td>
		<td align="center">04</td>
		<%=DrawInputs("04.1", 4, 3, 3)%>
		<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">Из строки 03 - площадь групповых ячеек для детей<br/> 
		в возрасте 3 года и старше</td>
		<td align="center">05</td>
		<%=DrawInputs("04.1", 5, 3, 3)%>
		<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
	</tr>
	</table>
</td></tr>

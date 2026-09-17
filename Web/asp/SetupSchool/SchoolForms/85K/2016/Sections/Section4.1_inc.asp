<% ' © 2007-2016 IRTech. All rights reserved.%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr><td>
	<div align="center" style="padding-top:10px;"><b>Раздел 4. Материально-техническая база организации</b></div>
	<div align="center" style="margin-bottom:20px;"><b>4.1. Площадь помещений дошкольной образовательной организации</b></div>
	<div align="right">Коды по ОКЕИ: квадратный метр - 055; место - 698</div>
	<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
	<tr align="middle" valign="top" rowspan="2">
		<td rowspan="2">Наименование показателей</td>
		<td rowspan="2">№<br />строки</td>
		<td rowspan="2">Общая площадь<br/>зданий и<br/>помещений<br/>(сумма гр.4-7)</td>
		<td colspan="4">из нее площадь по форме владения, пользования:</td>
		<td rowspan="2">Из общей<br/>площади (гр.3) - <br/>площадь,  сданная<br/>в аренду<br/>(субаренду)</td>
	</tr>
	<tr align="middle" valign="top">
		<td>на правах<br />собственности</td>
		<td>в оперативном<br/>управлении</td>
		<td>арендованная</td>
		<td>другие формы<br/>владения</td>
	</tr>

	<tr align="middle" valign="center">
		<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
	</tr>

	<tr align="middle" valign="center">
		<td align="left">Общая площадь зданий и помещений</td>
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
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;предназначенных для поочередного использования<br/> 
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
<tr><td>
&nbsp;&nbsp;&nbsp;Число мест в изоляторе(06)&nbsp;<%=IT("T04.10603", 4, 5 )%>&nbsp;мест<br />
&nbsp;&nbsp;&nbsp;Дошкольная образовательная организация имеет (укажите соответствующий код: да - 1, нет - 0): музыкальный зал (07)&nbsp;<%=IB0("T04.10703")%>&nbsp;, физкультурный зал (08)&nbsp;<%=IB0("T04.10803")%>&nbsp;,<br />
&nbsp;&nbsp;&nbsp;закрытый плавательный бассейн (09)&nbsp;<%=IB0("T04.10903")%>&nbsp;, зимний сад (10)&nbsp;<%=IB0("T04.11003")%>&nbsp;.
</td></tr></table>

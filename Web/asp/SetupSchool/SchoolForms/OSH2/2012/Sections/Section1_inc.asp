<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">

<tr><td align="middle">
<!-- таб.1 -->
	<br/><br/><br/>
	<b>Раздел 1. Сведения об учреждении</b><br/><br/>

</td></tr>
<tr><td>

<TABLE id="TAvtoCalc2" Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">

<tr align="middle" valign="center">
	<td>Наименование показателей</td><td>№<br/>строки</td><td>Значение</td>
</tr>

<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Имеется ли у образовательного учреждения собственная бухгалтерия (да - 1, нет - 0)</td><td>01</td><td><%=IB0("T010103")%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Переведено ли общеобразовательное учреждение на нормативное подушевое финансирование (да - 1, нет - 0)</td><td>02</td><td><%=IB0("T010203")%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Переведено ли общеобразовательное учреждение на новую (отраслевую) систему оплаты труда, ориентированную на результат (да - 1, нет - 0)</td><td>03</td><td><%=IB0("T010303")%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Сведения об образовательном учреждении <br/>(1 - учредитель федеральный орган исполнительной власти; 2 - учредитель орган исполнительной власти субъекта Российской <br/> Федерации;
	3 - учредитель орган местного самоуправления; 4 - негосударственное учреждение)</td>
	<td >04</td><td><%=IT("T010403", 5, 10 )%></td>
</tr>

<tr align="middle" valign="center">
	<td align="left">Является ли учреждение автономным (да - 1, нет - 0)</td><td>05</td><td><%=IB0("T010503")%></td>
</tr>
</TABLE>

<!-- end of таб.1 -->
</TD></TR>
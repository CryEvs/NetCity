<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<!-- таб.8 -->
	<b>Раздел 8. Сведения о группах продленного дня и интернатах</b><br/><br/>
	<div align="right">Коды по ОКЕИ: человек-792; единица-642</div>			

</td></tr>
<tr><td>

<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="1" width="100%">
<tr align="center" valign="middle">
	<td>Наименование</td><td>№<br>строки</td><td>Число</td>
</tr>

<tr align="center" valign="middle">
	<td>1</td><td>2</td><td>3</td>
</tr>
<tr align="center" valign="middle">
	<td align="left">Количество групп продленного дня (ед)</td><td>01</td><td><%=ITDisabled("T0803", 5, 5, bIsMNS )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе для обучающихся 1-4 классов</td><td>02</td><td><%=ITDisabled("T0804", 5, 5, bIsMNS )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">Число обучающихся в группах продленного дня (чел)</td><td>03</td><td><%=IT("T0805", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе обучающихся 1-4 классов</td><td>04</td><td><%=IT("T0806", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">Имеется ли интернат при школе (да, нет)</td><td>05</td><td><%=IB0Disabled("T0807", bIsMNS)%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">Численность воспитанников в интернате при школе (чел)</td><td>06</td><td><%=IT("T0808", 5, 5 )%></td>
</tr>

</TABLE>

</td></tr>
<tr><td><br/>
Примечание: строки 05, 06 заполняют образовательные учреждения, не имеющие статуса детского дома-школы, школы-интерната<br/>
<!-- end of таб.4 -->
</td></tr>

<!-- end of таб.8 -->

</td></tr>
<tr><td align="center">


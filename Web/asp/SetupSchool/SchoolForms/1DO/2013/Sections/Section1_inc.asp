<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center">Раздел 1. Сведения об учреждении дополнительного образования детей</div><br />
	<div align="right">Код по ОКЕИ: единица – 642</div>
<table Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
    <tr align="middle" valign="center">
	    <td><br />Наименование  показателей<br />&nbsp;</td><td>№ строки</td><td>На 01.01<br/>следующего за<br/>отчетным года</td></tr>
    <tr align="middle" valign="center">
        <td>1</td><td>2</td><td>3</td></tr>
    <tr align="middle" valign="center">
	    <td align="left">Категория аккредитации (указать категорию)</td><td>01</td><td><%=IBArrValue("T010103", objSchoolFormComponent.GetCategoryList().ToArray())%></td></tr>
    <tr align="middle" valign="center">
	    <td align="left">Имеет ли учреждение лицензию</td><td>02</td><td><%=IBArrValue("T010203", objSchoolFormComponent.GetLcList().ToArray())%></td></tr>
    <tr align="middle" valign="center">
        <td align="left">Имеет ли учреждение статус автономного (да – 1, нет – 0)</td><td>03</td><td><%=IB0("T010303")%></td></tr>
	<tr align="middle" valign="center">
		<td align="left">Имеет ли учреждение собственную бухгалтерию (да – 1, нет – 0)</td><td>04</td><td><%=IB0("T010403")%></td></tr>
	<tr align="middle" valign="center">
		<td align="left">Переведено ли учреждение на нормативное подушевое финансирование (да – 1, нет – 0)</td><td>05</td><td><%=IB0("T010503")%></td></tr>
    <tr align="middle" valign="center">
        <td align="left">Переведено ли учреждение на новую (отраслевую) систему оплаты труда, ориентированную на<br/> результат (да – 1, нет – 0)</td><td>06</td><td><%=IB0("T010603")%></td></tr>
    <tr align="middle" valign="center">
        <td align="left">Количество филиалов у учреждения </td><td>07</td><td><%=IT("T010703", 5, 10)%></td></tr>
    </table></td></tr></table> <!-- format -->

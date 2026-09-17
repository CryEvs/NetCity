<% ' © 2007-2012 IRTech. All rights reserved.
%>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 1. Сведения об учреждении</b></div><br/><br/>
<div align="right"><p font-size:10pt>Код по ОКЕИ: единица-642</p></div>
<table Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
    <tr align="middle" valign="center">
	    <td><br />Наименование показателей<br />&nbsp;</td><td>№ строки</td><td>На 01.01<br/>следующего за<br/>отчетным года</td></tr>
    <tr align="middle" valign="center">
        <td>1</td><td>2</td><td>3</td></tr>
    <tr align="middle" valign="center">
	    <td align="left" style="padding-left:25px">Осуществляет ли учреждение обучение по программам общего образования (да - 1, нет - 0)</td><td>01</td><td><%=IB0("T010103")%></td></tr>
    <tr align="middle" valign="center">
	    <td align="left" style="padding-left:25px">Имеет ли учреждение собственную бухгалтерию (да - 1, нет - 0)</td><td>02</td><td><%=IB0("T010203")%></td></tr>
    <tr align="middle" valign="center">
        <td align="left" style="padding-left:25px">Переведено ли учреждение на нормативное подушевое финансирование (да - 1, нет - 0)</td><td>03</td><td><%=IB0("T010303")%></td></tr>
	<tr align="middle" valign="center">
		<td align="left" style="padding-left:25px">Переведено ли учреждение на новую (отраслевую) систему оплаты труда, ориентированную на результат<br/>
			(да - 1, нет - 0)
		</td><td>04</td><td><%=IB0("T010403")%></td></tr>
	<tr align="middle" valign="center">
		<td align="left" style="padding-left:25px">Имеет ли учреждение постинтернатные блоки, общежития, социальные гостиницы, центры<br />
			постинтернатной адаптации и др. (да - 1, нет - 0)
		</td><td>05</td><td><%=IB0("T010503")%></td></tr>
    <tr align="middle" valign="center">
        <td align="left" style="padding-left:25px">Количество филиалов у учреждения</td><td>06</td><%=DrawInputs("01",6,3,3)%></tr>
    </table></td></tr></table> <!-- format -->

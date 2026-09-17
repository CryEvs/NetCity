<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<!-- таб.1 -->
	<b>Раздел 1. Распределение обучающихся по  языку обучения</b><br />(указать языки народов Российской Федерации, изучаемые как предмет, факультативно или в кружках)<br />
	<br /><br />
	<div align="right">Код по ОКЕИ: человек-792</div>
</td></tr>
<tr><td>
<TABLE id="TAvtoCalc1" Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td rowspan = "2" colspan = "2">Наименование</td><td rowspan=2>№<br/>строки</td>
	<td colspan = "7">число обучающихся по классам</td>
	<td rowspan = "2">Всего <br/>(сумма граф 3-9)</td>
</tr>
<tr align="middle" valign="center" ><td>подготови-<br/>тельный</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5-9</td><td>10-11&nbsp;(12)</td></tr>
<tr align="middle" valign="center">	<td colspan = "2">1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
<tr align="middle" valign="center">
	<td rowspan="3" align="left" >Язык обучения</td>
	<%Call DrawLangRow(1,9)%>
</tr>

<tr align="middle" valign="center">
	<%Call DrawLangRow(2,9)%>
</tr>

<tr align="middle" valign="center">
	<%Call DrawLangRow(3,9)%>
</tr>

<tr align="middle" valign="center">
	<td rowspan ="5" align="left" >Язык, изучаемый<br/>как&nbsp;самостоя&shy;тельный предмет</td>
	<%Call DrawLangRow(4,9)%>
</tr>
<tr align="middle" valign="center">
	<%Call DrawLangRow(5,9)%>
</tr>

<tr align="middle" valign="center">
	<%Call DrawLangRow(6,9)%>
</tr>

<tr align="middle" valign="center">
	<%Call DrawLangRow(7,9)%>
</tr>

<tr align="middle" valign="center">
	<%Call DrawLangRow(8,9)%>
</tr>

<tr align="middle" valign="center">
	<td align="left" colspan="2">Языки, изучаемые факультативно или в кружках</td>
	<td >09</td>
	<td colspan="7" rowspan="2"><%=IT("T010903", 50, 10 )%></td>
	<td><%=ITS("T010910", 5, 6 )%></td>
</tr>
</table>

<!-- end of таб.1 -->
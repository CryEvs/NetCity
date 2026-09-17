<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td align="center">
<!-- таб.15 -->
	<b>Раздел 15. Сведения об обучающихся, выбывших из учреждения в течение <%=strShoolPrevYearStart%>/<%=strShoolPrevYearEnd%> учебного года<br />и летнего периода <%=strShoolPrevYearEnd%> г.</b><br />
    (не считая окончивших 4 класс в начальной школе, 9 класс в основной школе, 11 (12) класс в средней школе)
	<div align="right">Код по ОКЕИ: человек-792</div>			
</td></tr>
<tr><td>

<TABLE Class="ThinTable" ALIGN="left" BORDER="1" CELLSPACING="0" CELLPADDING="0" width="100%">
<tr align="center" valign="middle">
	<td>Причины выбытия</td><td>№<br/>строки</td><td>1-4&nbsp;классы</td><td>5-9&nbsp;классы</td><td>10-11&nbsp;(12)&nbsp;классы</td>
</tr>

<tr align="center" valign="middle">
	<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
</tr>

<tr align="center" valign="middle">
	<td align="left">Всего выбыло (сумма строк 02-06, 08-16)</td>
	<td>01</td>
	<td><%=ITS("T150103", 5, 5 )%></td>
	<td><%=ITS("T150104", 5, 5 )%></td>
	<td><%=ITS("T150105", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в другие дневные общеобразовательные учреждения</td>
	<td>02</td>
	<td><%=IT("T150203", 5, 5 )%></td>
	<td><%=IT("T150204", 5, 5 )%></td>
	<td><%=IT("T150205", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в специальные (коррекционные) учреждения и классы для детей с ограниченными<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;возможностями здоровья</td>
	<td>03</td>
	<td><%=IT("T150303", 5, 5 )%></td>
	<td><%=IT("T150304", 5, 5 )%></td>
	<td><%=IT("T150305", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в вечерние (сменные) общеобразовательные учреждения</td>
	<td>04</td>
	<td><%=IT("T150403", 5, 5 )%></td>
	<td><%=IT("T150404", 5, 5 )%></td>
	<td><%=IT("T150405", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в образовательные учреждения среднего профессионального образования (дневное обучение)</td>
	<td>05</td>
	<td>X</td>
	<td><%=IT("T150504", 5, 5 )%></td>
	<td><%=IT("T150505", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в образовательные учреждения начального профессионального образования </td>
	<td>06</td>
	<td><%=IT("T150603", 5, 5 )%></td>
	<td><%=IT("T150604", 5, 5 )%></td>
	<td><%=IT("T150605", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе в группы, не осуществляющие общеобразовательную подготовку</td>
	<td>07</td>
	<td><%=IT("T150703", 5, 5 )%></td>
	<td><%=IT("T150704", 5, 5 )%></td>
	<td><%=IT("T150705", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;на различные курсы</td>
	<td>08</td>
	<td>X</td>
	<td><%=IT("T150804", 5, 5 )%></td>
	<td><%=IT("T150805", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исключено за недостойное поведение</td>
	<td>09</td>
	<td><%=IT("T150903", 5, 5 )%></td>
	<td><%=IT("T150904", 5, 5 )%></td>
	<td><%=IT("T150905", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из-за длительной болезни</td>
	<td>10</td>
	<td><%=IT("T151003", 5, 5 )%></td>
	<td><%=IT("T151004", 5, 5 )%></td>
	<td><%=IT("T151005", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в специальные учебно-воспитательные учреждения и воспитательно-трудовые колонии</td>
	<td>11</td>
	<td><%=IT("T151103", 5, 5 )%></td>
	<td><%=IT("T151104", 5, 5 )%></td>
	<td><%=IT("T151105", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;поступили на работу и не продолжают обучение</td>
	<td>12</td>
	<td><%=IT("T151203", 5, 5 )%></td>
	<td><%=IT("T151204", 5, 5 )%></td>
	<td><%=IT("T151205", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;не работают и не учатся</td>
	<td>13</td>
	<td><%=IT("T151303", 5, 5 )%></td>
	<td><%=IT("T151304", 5, 5 )%></td>
	<td><%=IT("T151305", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;отчислены по неуспеваемости</td>
	<td>14</td>
	<td><%=IT("T151403", 5, 5 )%></td>
	<td><%=IT("T151404", 5, 5 )%></td>
	<td><%=IT("T151405", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;по причине смерти обучающегося</td>
	<td>15</td>
	<td><%=IT("T151603", 5, 5 )%></td>
	<td><%=IT("T151604", 5, 5 )%></td>
	<td><%=IT("T151605", 5, 5 )%></td>
</tr>

<tr align="center" valign="middle">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;по другим причинам</td>
	<td>16</td>
	<td><%=IT("T151503", 5, 5 )%></td>
	<td><%=IT("T151504", 5, 5 )%></td>
	<td><%=IT("T151505", 5, 5 )%></td>
</tr>

</TABLE>

<!-- end of таб.15 -->
</td></tr>
<tr><td align="center">

<br/><br/><br/>
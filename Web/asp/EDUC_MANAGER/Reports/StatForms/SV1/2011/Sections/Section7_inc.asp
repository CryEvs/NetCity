<% ' © 2007-2012 IRTech. All rights reserved.
%>
<br/>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td colspan="2">
<div align="center"><b>Раздел 7. Сведения об обучающихся выбывших из образовательного учреждения<br>
 в течение <%=strShoolPrevYearStart%>/<%=strShoolPrevYearEnd%> учебного года и летнего периода <%=strShoolPrevYearEnd%> г.</b><br>
(не считая окончивших 9 класс в основной школе и 11 (12) классы в средней (полной) школе<br>и 15-16 классы в образовательных учреждениях для лиц с ограниченными возможностями здоровья)</div>
<div align="right">Код по ОКЕИ: человек-792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="top">
<td rowspan="2">Наименование</td>
<td rowspan="2">№<br/>строки</td>
<td rowspan="2">Всего выбыло<br/>из образова-<br/>тельных учреждений<br/>(сумма граф 4-11)</td>
<td colspan="8">в том числе</td>
</tr>
<tr align="middle" valign="top">
	<td>в другие ве-<br/>черние (смен-<br/>ные) общеоб-<br/>разовательные<br/>учреждения</td>
	<td>в образова-<br/>тельные учре-<br/>ждения<br/>начального и<br/>среднего<br/>професси-<br/>онального<br/>образования,<br/>осуществля-<br/>ющие<br/>общеобразо-<br/>вательную<br/>подготовку</td>
	<td>на курсы повышения<br/>квалификации и в<br/>образователь-<br/>ные учрежд-<br/>ния начально-<br/>го профессио-<br/>нального об-<br/>разования в<br/>группах моло-<br/>
	дежи, не полу-<br/>чающей сред-<br/>него (полного)<br/>образования</td>
	<td>из-за систе-<br/>матических<br/>задержек на<br/>работе</td>
	<td>призыв<br/>в Воо-<br/>руженные<br/>Силы</td>
	<td>из-за<br/>неуспе-<br/>ваемости</td>
	<td>по причине<br/>смерти обу-<br/>чающегося</td>
	<td>прочие<br/>причины</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>
<tr align="middle" valign="center">
	<td align="left">Из 1-12 (16) классов</td>
	<td align="center">01</td>
	<%=DrawInputsWithTotals(1,3,11,7,Array(3))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">в том числе из классов, групп,<br/>учебно-консультационных пун-<br/>ктов (УКП), организованных при<br/>дневных общеобразовательных<br/>учреждениях</td>
	<td align="center">02</td>
	<%=DrawInputsWithTotals(2,3,11,7,Array(3))%>
</tr>
</table>
</td></tr>
</table> <!-- format -->
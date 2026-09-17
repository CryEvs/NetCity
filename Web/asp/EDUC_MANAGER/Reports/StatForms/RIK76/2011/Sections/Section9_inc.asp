<% ' © 2007-2008 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0"><tr><td>
<div align="center"><b>Раздел 9. Сведения о платных дополнительных образовательных услугах за <%=strShoolPrevYearStart%>/<%=strShoolPrevYearEnd%> учебный год</b></div>
<div align="right">Коды по ОКЕИ: единица - 642, человек - 792</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td align="center">Наименование</td>
    <td>№<br>строки</td>
   	<td>Итого</td>
</tr>
<tr align="middle" valign="center">
	<td>1</td><td>2</td><td>3</td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число общеобразовательных учреждений, предоставляющих платные дополнительные образовательные услуги - всего (ед)</td>
	<td align="center">01</td>
	<td><%=ITDisabled(GetFormFieldName(9,1,3),4,5,IsMns())%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Численность пользующихся платными дополнительными образовательными услугами учреждения, обучающихся в<br/>этом учреждении(чел)</td>
	<td align="center">02</td>
	<td><%=IT(GetFormFieldName(9,2,3),4,5)%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Кроме того, численность пользующихся платными дополнительными образовательными услугами учреждения, не <br/>обучающихся в этом учреждении(чел)</td>
	<td align="center">03</td>
	<td><%=IT(GetFormFieldName(9,3,3),4,5)%></td>
</tr>
</table></td></tr>
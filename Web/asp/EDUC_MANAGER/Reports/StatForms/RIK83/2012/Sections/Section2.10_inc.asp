<% ' © 2007-2014 IRTech. All rights reserved.
%>
<table class="print-block">
<tr><td align="center">
	<b>2.10. Оздоровительные образовательные учреждения санаторного типа для детей, нуждающихся в длительном лечении</b>
	<br /><br />
	<div align="right">Код по ОКЕИ: человек-792</div>
</td></tr>
<tr><td>
<table Class="ThinTable" BORDER="1" CELLSPACING="0" CELLPADDING="0" >
<tr align="center" valign="middle">
	<!--1 column and 1-3 rows-->
	<td rowspan="3">Наименование</td>
	<!--2 clomun and 1-3 rows-->
	<td rowspan="3">№<br/>строки</td>
	<!--3 column and 1-3 rows-->
	<td rowspan="3">Численность<br />работников<br />(физические<br/>лица)</td>
	<!--4 column and 1-3 rows-->
	<td rowspan="3">Число<br/>вакантных<br/>должностей</td>
	<!--5 clomun and 1-3 rows-->
	<td rowspan="3">Из них<br/>(из гр. 3)<br/>женщин</td>
	<!--6-12 columns-->
	<td colspan="7">Численность работников (из гр. 3),</td>
	<!-- 13-14 columns and 1-2 rows-->
	<td colspan="2" rowspan="2">кроме того, внешние<br/>совместители</td>
	<!-- 15-20 columns and 1-2 rows-->
	<td colspan="6" rowspan="2">из общей численности работников (из гр.3) имеют образование</td>
	<!-- 21-25 columns and 1-2 rows-->
	<td colspan="5" rowspan="2">из общей численности работников (из гр.3) имеют стаж работы</td>
	<!-- 26-30 columns and 1-2 rows-->
	<td colspan="5" rowspan="2">из общей численности работников (из гр.3) находятся в возрасте (число<br/>полных лет на отчетную дату)</td>
</tr>
<tr align="center" valign="middle"><td colspan="2">имеющих</td>
	<!--8 column and 2-3 rows-->
	<td rowspan="2">имеющих<br/>внутреннее<br/>совмести-<br/>тельство</td>
	<!-- 9-12 columns-->
	<td colspan="4">имеющих квалификацию</td>
	
</tr>
<tr align="center" valign="middle">
	<!--6 column-->
	<td>неполную<br/>занятость</td>
	<!--7 column-->
	<td>полную<br/>занятость</td>
	<!--9 column-->
	<td>высшей<br/>категории</td>
	<!--10 column-->
	<td>первой<br/>категории</td>
	<!--11 column-->
	<td>второй<br/>категории</td>
	<!--12 column-->
	<td>не имеют<br/>категории</td>
	<!--13 column-->
	<td>всего</td>
	<!--14 column-->
	<td>из них<br/>женщины</td>
	<!--15 column-->
	<td>высшее<br/>профес-<br/>сиональное</td>
	<!--16 column-->
	<td>из них (из<br/>гр.15) педаго-<br/>гическое</td>
	<!--17 column-->
	<td>среднее<br/>профес-<br/>сиональное</td>
	<!--18 column-->
	<td>из них (из<br/>гр.17) педаго-<br/>гическое</td>
	<!--19 column-->
	<td>начальное<br/>профес-<br/>сиональное</td>
	<!--20 column-->
	<td>среднее<br/>(полное)<br/>общее</td>
	<!--21 column-->
	<td>менее 2 лет</td>
	<!--22 column-->
	<td>от 2 до 5 лет</td>
	<!--23 column-->
	<td>от 5 до 10 лет</td>
	<!--24 column-->
	<td>от 10 до 20 лет</td>
	<!--25 column-->
	<td>от 20 лет и более</td>
	<!--26 column-->
	<td>моложе 25 лет</td>
	<!--27 column-->
	<td>25-35 лет</td>
	<!--28 column-->
	<td>35 лет и<br/>старше</td>
	<!--29 column-->
	<td>из них (из гр.<br/>28) пенси-<br/>онеров</td>
	<!--30 column-->
	<td>из них<br/>(из гр.29)<br/>женщины</td>
</tr>
<%Dim i, strSection
strSection = "02.10"
%>
<tr align="center" valign="middle"><%For i = 1 To 30%><td><%=i%></td><%Next%></tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle" style="white-space: nowrap;">
	<b>Всего работников учреждений (сумма строк 02, 03, 05, 06)</b>
  </td>
  <td>01</td><%Call DrawSLine(strSection, 30, 1)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	&nbsp;&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;руководящие работники
  </td>
  <td>02</td><%=DrawInputs(strSection, 2, 3, 30)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;педагогические работники
  </td>
  <td>03</td><%=DrawInputs(strSection, 3, 3, 30)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них учителя
  </td>
  <td>04</td><%=DrawInputs(strSection, 4, 3, 30)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;учебно-вспомогательный персонал
  </td>
  <td>05</td><%=DrawInputs(strSection, 5, 3, 30)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обслуживающий персонал
  </td>
  <td>06</td><%=DrawInputs(strSection, 6, 3, 30)%>
</tr>
</table>

<table class="filterTable">
<tr>
	<td><br/><br/><b>Справка к разделу 2.10</b><br/></td>
</tr>

<tr>
	<td style="white-space: nowrap;">Численность медицинских работников<br/>(сумма строк 08, 09)(чел)<br/></td>
	<td>(07) <%=ITS("T02.1007", 4, 5)%></td>
</tr>

<tr>
	<td>&nbsp;&nbsp;&nbsp;в том числе:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;врачи всех специальностей (чел)</td>
	<td>(08) <%=IT("T02.1008", 4, 5 )%></td>
</tr>

<tr>
	<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;медицинские сестры (чел)</td>
	<td>(09) <%=IT("T02.1009", 4, 5)%></td>
</tr>
</table>
</td>
</tr>
</table>

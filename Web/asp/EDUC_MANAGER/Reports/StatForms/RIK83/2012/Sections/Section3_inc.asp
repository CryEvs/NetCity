<% ' © 2007-2014 IRTech. All rights reserved.
%>
<table class="print-block">
<tr><td align="center">
	<b>Раздел 3. Справка о численности работников (физических лиц)</b>
	<br /><br />
	<div align="right">Код по ОКЕИ: человек-792</div>
</td></tr>
<tr><td>
<table Class="ThinTable" BORDER="1" CELLSPACING="0" CELLPADDING="0" >
<tr align="center" valign="middle">
	<td rowspan="2">Наименование</td>
	<td rowspan="2">№<br/>строки</td>
	<td colspan="4">в городских поселениях</td>
	<td colspan="4">в сельской местности</td>
</tr>
<tr align="center" valign="middle">
	<td>учителя-дефектологи</td>
	<td>учителя-логопеды</td>
	<td>педагогический персонал, работающий в специальных (коррекционных) образовательных учреждеиях и классах для детей с ограниченными возможностями здоровья</td>
	<td>педагогический персонал, получающий надбавки за работу с детьми с ограниченными возможностями здоровья, обучающимися в обычных классах</td>
	<td>учителя-дефектологи</td>
	<td>учителя-логопеды</td>
	<td>педагогический персонал, работающий в специальных (коррекционных) образовательных учреждеиях и классах для детей с ограниченными возможностями здоровья</td>
	<td>педагогический персонал, получающий надбавки за работу с детьми с ограниченными возможностями здоровья, обучающимися в обычных классах</td>
</tr>
<%Dim i, strSection
strSection = "03"
%>
<tr align="center" valign="middle"><%For i = 1 To 10%><td><%=i%></td><%Next%></tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle" style="white-space: nowrap;">
	<b>Всего (сумма строк 02-11)</b>
  </td>
  <td>01</td><%Call DrawSLine(strSection, 10, 1)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle" style="white-space: nowrap;">
	Образовательные учреждения для детей дошкольного и младшего школьного возраста
  </td>
  <td>02</td><%=DrawInputs(strSection, 2, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Общеобразовательные учреждения
  </td>
  <td>03</td><%=DrawInputs(strSection, 3, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Общеобразовательные школы-интернаты
  </td>
  <td>04</td><%=DrawInputs(strSection, 4, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Кадетские школы и кадетские школы-интернаты
  </td>
  <td>05</td><%=DrawInputs(strSection, 5, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Общеобразовательные школы-интернаты с первоначальной летной подготовкой
  </td>
  <td>06</td><%=DrawInputs(strSection, 6, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Специальные (коррекционные) образовательные учреждения для детей с ОВЗ
  </td>
  <td>07</td><%=DrawInputs(strSection, 7, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Специальные учебно-воспитательные учреждения для детей и подростков с девиантным поведением
  </td>
  <td>08</td><%=DrawInputs(strSection, 8, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Образовательные учреждения для детей-сирот и детей, оставшихся без попечения родителей
  </td>
  <td>09</td><%=DrawInputs(strSection, 9, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Оздоровительные образовательные учреждения санаторного типа для детей, нуждающихся в длительном лечении
  </td>
  <td>10</td><%=DrawInputs(strSection, 10, 3, 10)%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Образовательные учреждения для детей, нуждающихся в психолого-педагогической и медико-социальной помощи
  </td>
  <td>11</td><%=DrawInputs(strSection, 11, 3, 10)%>
</tr>
</table>
</td>
</tr>
</table>

<% ' © 2007-2010 IRTech. All rights reserved.
%>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 1. Сведения о сети учреждений, реализующих программы общего образования, и контингенте в них обучающихся</b></div>
<div align="center"><b>1.1. Сведения о сети учреждений, реализующих программы общего образования</b></div>
<div align="right">Коды по ОКЕИ: единица - 642</div>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center">
  <td rowspan="2"  align="center" valign="middle">
	Наименование (согласно типовым положениям)
  </td>
  <td rowspan="2" align="center" valign="middle">
	№ строки
  </td>
  <td colspan="3" align="center" valign="middle">
	Число учреждений
  </td>
  <td colspan="3" align="center" valign="middle">
	кроме того, филиалов
  </td>
  <td colspan="3" align="center" valign="middle">
	кроме того, учреждений, находящихся на
	капитальном ремонте
  </td>
</tr>
<tr align="middle" valign="center">
  <td align="center" valign="middle">
	Городские поселения
  </td>
  <td align="center" valign="middle">
	Сельская местность
  </td>
  <td align="center" valign="middle">
	Итого (сумма граф 3, 4)
  </td>
  <td align="center" valign="middle">
	Городские поселения
  </td>
  <td align="center" valign="middle">
	Сельская местность
  </td>
  <td align="center" valign="middle">
	Итого (сумма граф 6, 7)
  </td>
  <td align="center" valign="middle">
	Городские поселения
  </td>
  <td align="center" valign="middle">
	Сельская местность
  </td>
  <td align="center" valign="middle">
	Итого (сумма граф 9, 10)
  </td>
</tr>
<tr align="middle" valign="center">
  <td>
	1
  </td>
  <td>
	2
  </td>
  <td>
	3
  </td>
  <td>
	4
  </td>
  <td>
	5
  </td>
  <td>
	6
  </td>
  <td>
	7
  </td>
  <td>
	8
  </td>
  <td>
	9
  </td>
  <td>
	10
  </td>
  <td>
	11
  </td>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Всего учреждений (сумма строк 02, 03, 11 - 16)
  </td>
  <td>
	01
  </td>
  <%=DrawInputsWithTotals(1,3,11,"01.1",Array(3,4,5,6,7,8,9,10,11))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>образовательные учреждения для детей
	дошкольного и младшего школьного возраста<div>
  </td>
  <td>
	02
  </td>
  <%=DrawInputsWithTotals(2,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
 </tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>общеобразовательные учреждения и
	школы-интернаты</div>
  </td>
  <td>
	03
  <%=DrawInputsWithTotals(3,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%> 
 </td>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 3em'>начальные</div>
  </td>
  <td>
	04
  </td>
  <%=DrawInputsWithTotals(4,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
 </tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 3em'>основные</div>
  </td>
  <td>
	05
  </td>
  <%=DrawInputsWithTotals(5,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
 </tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 3em'>средние</div>
  </td>
  <td>
	06
  </td>
  <%=DrawInputsWithTotals(6,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 4.5em'>из них (из стр.06) имеющие только 10-11(12) классы</div>
  </td>
  <td>
	07
  </td>
  <%=DrawInputsWithTotals(7,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 3em'>общеобразовательные учреждения с углубленным
	изучением отдельных предметов</div>
  </td>
  <td>
	08
  </td>
  <%=DrawInputsWithTotals(8,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 3em'>гимназии</div>
  </td>
  <td>
	09
  </td>
  <%=DrawInputsWithTotals(9,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 3em'>лицеи</div>
  </td>
  <td>
	10
  </td>
  <%=DrawInputsWithTotals(10,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>кадетские учреждения</div>
  </td>
  <td>
	11
  </td>
  <%=DrawInputsWithTotals(11,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>общеобразовательные школы-интернаты с
	первоначальной летной подготовкой</div>
  </td>
  <td>
	12
  </td>
  <%=DrawInputsWithTotals(12,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>специальные (коррекционные) образовательные
	учреждения для обучающихся, воспитанников с
	ограниченными возможностями здоровья</div>
  </td>
  <td>
	13
  </td>
  <%=DrawInputsWithTotals(13,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>специальные учебно-воспитательные учреждения
	для детей и подростков с девиантным поведением</div>
  </td>
  <td>
	14
  </td>
  <%=DrawInputsWithTotals(14,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>оздоровительные образовательные учреждения
	санаторного типа для детей, нуждающихся в
	длительном лечении</div>
  </td>
  <td>
	15
  </td>
  <%=DrawInputsWithTotals(15,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>образовательные учреждения для детей,
	нуждающихся в психолого-педагогической и
	медико-социальной помощи</div>
  </td>
  <td>
	16
  </td>
  <%=DrawInputsWithTotals(16,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	Из них (из стр. 01): 
	<div style='padding-left: 1.5em'>образовательные учреждения
	для детей-сирот и детей, оставшихся без
	попечения родителей</div>
  </td>
  <td>
	17
  </td>
  <%=DrawInputsWithTotals(17,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>учреждения с группами продленного дня</div>
  </td>
  <td>
	18
  </td>
  <%=DrawInputsWithTotals(18,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 1.5em'>учреждения, ведущие занятия:</div>
	<div style='padding-left: 3em'>в две смены</div>
  </td>
  <td>
	19
  </td>
  <%=DrawInputsWithTotals(19,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>
<tr align="middle" valign="center">
  <td  align="left" valign="middle">
	<div style='padding-left: 3em'>в три смены</div>
  </td>
  <td>
	20
  </td>
  <%=DrawInputsWithTotals(20,3,11,"01.1",IIF(IsMns(), Array(3,4,5,6,7,8,9,10,11), Array(5,8,11)))%>
</tr>

</table>
</td>
</tr>
</table> <!-- format -->

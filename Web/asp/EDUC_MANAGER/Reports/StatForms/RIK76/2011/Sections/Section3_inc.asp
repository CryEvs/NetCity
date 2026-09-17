<% ' © 2007-2012 IRTech. All rights reserved.
%>
<tr><td>
<div align="center"><b>Раздел 3. Сведения об обучающихся, окончивших данные классы, переведенных в следующие классы и выпускных экзаменах в <%=strShoolYearStart%> г.</b><br>(по учреждениям, указанным в строках 02, 03, 11, 12 раздела 1.1)</div>
<div align="right">Код по ОКЕИ: единица - 642, человек - 792</div></td></tr><tr><td>
<TABLE Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
<tr align="middle" valign="center" rowspan="2">
	<td>Наименование</td>
    <td>№<br>строки</td>
	<td>Городские<br>поселения</td>
	<td>Сельская<br>местность</td>
   	<td>Итого<br>(сумма граф 3, 4)</td>
</tr>
<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr align="middle" valign="center">
	<td align="left">1-4 подготовительные классы</td>
	<td>01</td>
	<%=DrawInputsWithTotals(1,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">из них:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 класс</td>
	<td>02</td>
	<%=DrawInputsWithTotals(2,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 класс</td>
	<td>03</td>
	<%=DrawInputsWithTotals(3,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">5-9 классы</td>
	<td>04</td>
	<%=DrawInputsWithTotals(4,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них 9 класс</td>
	<td>05</td>
	<%=DrawInputsWithTotals(5,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">10-11 (12) классы</td>
	<td>06</td>
	<%=DrawInputsWithTotals(6,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">из них:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 класс (окончили с аттестатом о среднем (полном) общем образовании)</td>
	<td>07</td>
	<%=DrawInputsWithTotals(7,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11 класс(переведенные в 12 класс)</td>
	<td>08</td>
	<%=DrawInputsWithTotals(8,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12 класс</td>
	<td>09</td>
	<%=DrawInputsWithTotals(9,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность обучающихся выпускного класса, не получивших аттестат о среднем (полном) образовании</td>
	<td>10</td>
	<%=DrawInputsWithTotals(10,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность обучающихся, выдержавших экзамены экстерном за курс основной школы и получивших аттестат об основном общем образовании</td>
	<td>11</td>
	<%=DrawInputsWithTotals(11,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность обучающихся, выдержавших экзамены экстерном за курс средней школы и получивших аттестат о среднем (полном) общем образовании</td>
	<td>12</td>
	<%=DrawInputsWithTotals(12,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность обучающихся, получивших образование в форме экстерната по всем классам (кроме 9, 11 и 12)</td>
	<td>13</td>
	<%=DrawInputsWithTotals(13,3,5,3,Array(5))%>
</tr>

<tr align="middle" valign="center">
	<td align="left">Численность выпускников, допущенных к выпускным экзаменам в 11 (12) классах (чел)</td>
	<td>14</td>
	<%=DrawInputsWithTotals(14,3,5,3,Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;из них (из стр.14) участвовавшие в едином государственном экзамене (ЕГЭ)</td>
	<td>15</td>
	<%=DrawInputsWithTotals(15,3,5,3,Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.15):<br />
									 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;участвовавшие в ЕГЭ по русскому языку</td>
	<td>16</td>
	<%=DrawInputsWithTotals(16,3,5,3,Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.16) сдавшие ЕГЭ</td>
	<td>17</td>
	<%=DrawInputsWithTotals(17,3,5,3,Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;участвовавшие в ЕГЭ по математике</td>
	<td>18</td>
	<%=DrawInputsWithTotals(18,3,5,3,Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.18) сдавшие ЕГЭ</td>
	<td>19</td>
	<%=DrawInputsWithTotals(19,3,5,3,Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">Число общеобразовательных предметов, по которым проводился ЕГЭ (ед)</td>
	<td>20</td>
	<td>X</td>
	<td>X</td>
	<td><%=IT(GetFormFieldName(3,20,5), 4, 5 )%></td>
</tr>
<tr align="middle" valign="center">
	<td align="left">Из численности обучающихся, получивших аттестат о среднем (полном) общем образовании, награждены:<br />
									 &nbsp;&nbsp;&nbsp;золотой медалью "За особые успехи в учении"</td>
	<td>21</td>
	<%=DrawInputsWithTotals(21,3,5,3,Array(5))%>
</tr>
<tr align="middle" valign="center">
	<td align="left">&nbsp;&nbsp;&nbsp;серебряной медалью "За особые успехи в учении"</td>
	<td>22</td>
	<%=DrawInputsWithTotals(22,3,5,3,Array(5))%>
</tr>
</table></td></tr><tr><td>

<br />
<div align="left">Примечание:</div>

<div align="left">Показатель по строке 20 заполняется <b>только</b>
            органами исполнительной власти субъектов
            Российской Федерации, на которые возложены
            функции по управлению учреждениями,
            реализующими программы общего образования.</div></td></tr></table>


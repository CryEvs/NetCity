<% ' © 2007-2012 IRTech. All rights reserved.
%>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<div align="center"><b>Раздел 2. Сведения о воспитанниках, числе групп и мест</b></div>
<div align="right"><p font-size:10pt>Коды по ОКЕИ: человек-792; единица-642; место-698</p></div>
<table Class="ThinTable" ALIGN="left" BORDER=1 CELLPADDING=3 CELLSPACING=0 width="100%">
    <tr align="middle" valign="center">
	    <td colspan="2"><br />Наименование показателей<br />&nbsp;</td><td>№ строки</td><td>На 01.01<br/>следующего за<br/>отчетным года</td></tr>
    <tr align="middle" valign="center">
        <td colspan="2">1</td><td>2</td><td>3</td></tr>
	<tr align="middle" valign="center">
		<td rowspan="4">Численность по нормам<br/>САНПиНА</td>
		<td align="left">групп (ед)</td>
		<td>01</td>
		<%=DrawInputs("02", 1, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">мест (мест)</td>
		<td>02</td>
		<%=DrawInputs("02", 2, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">резерв мест (мест)</td>
		<td>03</td>
		<%=DrawInputs("02", 3, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">переполненность (мест)</td>
		<td>04</td>
		<%=DrawInputs("02", 4, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td rowspan="5">Численность<br/>воспитанников в<br/>возрасте (число<br />полных лет) (чел)</td>
		<td align="left">до 2-х лет</td>
		<td>05</td>
		<%=DrawInputs("02", 5, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">3-4 года</td>
		<td>06</td>
		<%=DrawInputs("02", 6, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">5-6 лет</td>
		<td>07</td>
		<%=DrawInputs("02", 7, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">7-15 лет</td>
		<td>08</td>
		<%=DrawInputs("02", 8, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">16 лет и старше</td>
		<td>09</td>
		<%=DrawInputs("02", 9, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td colspan="2" align="left">Всего воспитанников (чел) (сумма строк 05-09)</td>
		<td>10</td>
		<%=DrawInputsWithTotals(10,3,3,2,Array(3))%>
	</tr>
	<tr align="middle" valign="center">
		<td rowspan="6">Из общей<br />численности<br />воспитанников (чел)<br />(из строки 10)</td>
		<td align="left">девочек</td>
		<td>11</td>
		<%=DrawInputs("02", 11, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">всего учатся</td>
		<td>12</td>
		<%=DrawInputs("02", 12, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;в том числе (из стр. 12):<br />
			&emsp;&emsp;в 10-11 (12) классах средней школы
		</td>
		<td>13</td>
		<%=DrawInputs("02", 13, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;&emsp;в других учебных заведениях</td>
		<td>14</td>
		<%=DrawInputs("02", 14, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">численность воспитанников, не обучающихся в школе:<br />
			&emsp;из-за длительной болезни, подлежат выводу в специальные детские учреждения</td>
		<td>15</td>
		<%=DrawInputs("02", 15, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td align="left">&emsp;детей, которым на 1 сентября отчетного года исполнилось 7 лет, не<br />
			&emsp;показанных в строке 15
		</td>
		<td>16</td>
		<%=DrawInputs("02", 16, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td colspan="2" align="left">Численность детей-сирот и детей, оставшихся без попечения родителей (из стр. 10) (чел)</td>
		<td>17</td>
		<%=DrawInputs("02", 17, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td colspan="2" align="left">&emsp;из них (из стр. 17)<br />
			&emsp;&emsp;численность детей-сирот и детей, оставшихся без попечения родителей, не имеющих<br />
			&emsp;&emsp;закрепленного жилого помещения
		</td>
		<td>18</td>
		<%=DrawInputs("02", 18, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td colspan="2" align="left">&emsp;&emsp;&emsp;из них (из стр. 18)<br />
			&emsp;&emsp;&emsp;&emsp;численность детей-сирот и детей, оставшихся без попечения родителей, состоящих на<br />
			&emsp;&emsp;&emsp;&emsp;учете в качестве нуждающихся в жилом помещении
		</td>
		<td>19</td>
		<%=DrawInputs("02", 19, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td colspan="2" align="left">&emsp;&emsp;&emsp;&emsp;&emsp;из них (из стр. 19)<br />
			&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;поставленные на учет в качестве нуждающихся в жилом помещении за отчетный период
		</td>
		<td>20</td>
		<%=DrawInputs("02", 20, 3, 3)%>
	</tr>
	<tr align="middle" valign="center">
		<td colspan="2" align="left">Численность воспитанников, совершивших самовольный уход (чел)</td>
		<td>21</td>
		<%=DrawInputs("02", 21, 3, 3)%>
	</tr>
    </table></td></tr></table> <!-- format -->
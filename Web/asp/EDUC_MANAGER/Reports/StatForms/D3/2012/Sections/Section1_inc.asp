<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 1. Сведения о сети учреждений</b></td></tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: единица - 642
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2" width="100%"> 
						Наименование
					</td>
					<td rowspan="2" align="center">
						№<br>
						строки
					</td>
					<td colspan="3">
						Число учреждений(ед)
					</td>
					<td colspan="3">
						Кроме того, филиалов
					</td>
					<td colspan="3">
						Кроме того, учреждений,<br/>
						находящихся на капитальном ремонте
					</td>
				</tr>
				<tr align="center">
					<td>
						городские<br/>
						поселения
					</td>
					<td>
						сельская<br/>
						местность
					</td>
					<td>
						итого<br/>
						(сумма<br/>
						граф 3, 4)
					</td>
					<td>
						городские<br/>
						поселения
					</td>
					<td>
						сельская<br/>
						местность
					</td>
					<td>
						итого<br/>
						(сумма<br/>
						граф 6, 7)
					</td>
					<td>
						городские<br/>
						поселения
					</td>
					<td>
						сельская<br/>
						местность
					</td>
					<td>
						итого<br/>
						(сумма<br/>
						граф 9, 10)
					</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Всего учреждений<br/>
						(сумма строк 02, 03, 11 - 16)
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 3, 11, 1, Array(3,4,5,6,7,8,9,10,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;образовательные учреждения для<br/>
						&nbsp;&nbsp;&nbsp;детей дошкольного и младшего<br/>
						&nbsp;&nbsp;&nbsp;школьного возраста
					</td>
					<td>02</td>
					<%Call DrawInputsWithTotals(2, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;общеобразовательные учреждения<br/>
						&nbsp;&nbsp;&nbsp;и школы-интернаты
					</td>
					<td>03</td>
					<%Call DrawInputsWithTotals(3, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;начальные
					</td>
					<td>04</td>
					<%Call DrawInputsWithTotals(4, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;основные
					</td>
					<td>05</td>
					<%Call DrawInputsWithTotals(5, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;средние
					</td>
					<td>06</td>
					<%Call DrawInputsWithTotals(6, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них (из стр. 06) имеющие<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;только 10 - 11 (12) классы
					</td>
					<td>07</td>
					<%Call DrawInputsWithTotals(7, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;общеобразовательные<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;учреждения с углубленным<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;изучением отдельных предметов
					</td>
					<td>08</td>
					<%Call DrawInputsWithTotals(8, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;гимназии
					</td>
					<td>09</td>
					<%Call DrawInputsWithTotals(9, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;лицеи
					</td>
					<td>10</td>
					<%Call DrawInputsWithTotals(10, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;кадетские учреждения
					</td>
					<td>11</td>
					<%Call DrawInputsWithTotals(11, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;общеобразовательные школы-<br/>
						&nbsp;&nbsp;&nbsp;интернаты с первоначальной<br/>
						&nbsp;&nbsp;&nbsp;летной подготовкой
					</td>
					<td>12</td>
					<%Call DrawInputsWithTotals(12, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;специальные (коррекционные)<br/>
						&nbsp;&nbsp;&nbsp;образовательные учреждения для<br/>
						&nbsp;&nbsp;&nbsp;обучающихся, воспитанников с<br/>
						&nbsp;&nbsp;&nbsp;ограниченными возможностями<br/>
						&nbsp;&nbsp;&nbsp;здоровья
					</td>
					<td>13</td>
					<%Call DrawInputsWithTotals(13, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;специальные учебно-<br/>
						&nbsp;&nbsp;&nbsp;воспитательные учреждения для<br/>
						&nbsp;&nbsp;&nbsp;детей и подростков с девиантным<br/>
						&nbsp;&nbsp;&nbsp;поведением
					</td>
					<td>14</td>
					<%Call DrawInputsWithTotals(14, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;оздоровительные<br/>
						&nbsp;&nbsp;&nbsp;образовательные учреждения<br/>
						&nbsp;&nbsp;&nbsp;санаторного типа для детей,<br/>
						&nbsp;&nbsp;&nbsp;нуждающихся в длительном<br/>
						&nbsp;&nbsp;&nbsp;лечении
					</td>
					<td>15</td>
					<%Call DrawInputsWithTotals(15, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;образовательные учреждения для<br/>
						&nbsp;&nbsp;&nbsp;детей, нуждающихся в психолого-<br/>
						&nbsp;&nbsp;&nbsp;педагогической и медико-<br/>
						&nbsp;&nbsp;&nbsp;социальной помощи
					</td>
					<td>16</td>
					<%Call DrawInputsWithTotals(16, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Из них (из стр. 01):<br/>
						&nbsp;&nbsp;&nbsp;образовательные учреждения для<br/>
						&nbsp;&nbsp;&nbsp;детей-сирот и детей, оставшихся <br/>
						&nbsp;&nbsp;&nbsp;без попечения родителей
					</td>
					<td>17</td>
					<%Call DrawInputsWithTotals(17, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;учреждения с группами<br/>
						&nbsp;&nbsp;&nbsp;продленного дня<br/>
					</td>
					<td>18</td>
					<%Call DrawInputsWithTotals(18, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;учреждения, ведущие занятия:<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в две смены
					</td>
					<td>19</td>
					<%Call DrawInputsWithTotals(19, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в три смены
					</td>
					<td>20</td>
					<%Call DrawInputsWithTotals(20, 3, 11, 1, Array(5,8,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Кроме того:<br/>
						вечерние (сменные)<br/>
						общеобразовательные учреждения<br/>
						(сумма строк 22 - 26)
					</td>
					<td>21</td>
					<%Call DrawInputsWithTotals(21, 3, 5, 1, Array(3,4,5))%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;вечерние (сменные)<br/>
						&nbsp;&nbsp;&nbsp;общеобразовательные школы<br/>
					</td>
					<td>22</td>
					<%Call DrawInputsWithTotals(22, 3, 5, 1, Array(5))%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;вечерние (сменные)<br/>
						&nbsp;&nbsp;&nbsp;общеобразовательные школы<br/>
						&nbsp;&nbsp;&nbsp; ИТУ
					</td>
					<td>23</td>
					<%Call DrawInputsWithTotals(23, 3, 5, 1, Array(5))%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;центры образования
					</td>
					<td>24</td>
					<%Call DrawInputsWithTotals(24, 3, 5, 1, Array(5))%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;открытые (сменные)<br/>
						&nbsp;&nbsp;&nbsp;общеобразовательные школы
					</td>
					<td>25</td>
					<%Call DrawInputsWithTotals(25, 3, 5, 1, Array(5))%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;учреждения для лиц с<br/>
						&nbsp;&nbsp;&nbsp;ограниченными возможностями<br/>
						&nbsp;&nbsp;&nbsp;здоровья
					</td>
					<td>26</td>
					<%Call DrawInputsWithTotals(26, 3, 5, 1, Array(5))%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						дневные общеобразовательные<br/>
						учреждения, при которых созданы<br/>
						классы очно-заочного обучения,<br/>
						учебно-консультационные пункты
					</td>
					<td>27</td>
					<%Call DrawInputsWithTotals(27, 3, 5, 1, Array(5))%>
					<td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

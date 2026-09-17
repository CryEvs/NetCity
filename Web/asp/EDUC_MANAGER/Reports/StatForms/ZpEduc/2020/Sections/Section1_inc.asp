<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="3">
						Категория персонала
					</td>
					<td rowspan="3" align="center">
						Код <br/>
						кате-<br/>
						гории <br/>
						персо-<br/>
						нала
					</td>
					<td rowspan="3" align="center">
						№<br/>
						стро-<br/>
						ки
					</td>
					<td colspan="2">
						Средняя численность<br/>
						работников за
						<br/>отчетный период, чел.
					</td>
					<td colspan="3">
						Фонд начисленной заработной платы <br/>
						работников за отчетный период,<br/>
						тыс. руб.
					</td>
					<td colspan="6">
						Фонд начисленной заработной платы работников по источникам<br/>
						финансирования, тыс. руб.
					</td>
				</tr>
				<tr align="center">
					<td rowspan="2">
						списочного <br/>
						состава (без <br/>
						внешних <br/>
						совмес-<br/>
						тителей)<sup>1</sup>
					</td>
					<td rowspan="2">
						внешних <br/>
						совмес-<br/>
						тителей<sup>2</sup>
					</td>
					<td colspan="2">
						списочного состава (без<br/>
						внешних совместителей)
					</td>
					<td rowspan="2">
						внешних<br/>
						совмести-<br/>
						телей
					</td>
					<td colspan="3">
						из гр. 3 списочного состава<br/>
						(без внешних совместителей)
					</td>
					<td colspan="3">
						из графы 5 внешних<br/>
						совместителей
					</td>
				</tr>
				<tr align="center">
					<td>
						всего
					</td>
					<td>
						в том числе <br/>
						по внутрен-<br/>
						нему <br/>
						совмести-<br/>
						тельству<sup>3</sup>
					</td>
					<td>
						за счет <br/>
						средств <br/>
						бюджетов <br/>
						всех <br/>
						уровней <br/>
						(субсидий)
					</td>
					<td>
						ОМС
					</td>
					<td>
						средства<br/>
						от при-<br/>
						носящей <br/>
						доход <br/>
						деятель-<br/>
						ности
					</td>
					<td>
						за счет <br/>
						средств <br/>
						бюджетов <br/>
						всех <br/>
						уровней <br/>
						(субсидий)
					</td>
					<td>
						ОМС
					</td>
					<td>
						средства<br/>
						от при-<br/>
						носящей <br/>
						доход <br/>
						деятель-<br/>
						ности
					</td>
				</tr>
				
				<tr align="center">
					<td>А</td><td>Б</td><td>В</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Всего работников<br/>
						(сумма строк 02 - 05, 07, 08, 11, 14, 17 - 19, 21, 23 - 28)
					</td>
					<td>100</td>
					<td>01</td>
					<%Call DrawInputsWithTotalsEx(1, 1, 11, 1, Array(1,2,3,4,5,6,7,8,9,10,11), 6, 8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br/>
						&nbsp;&nbsp;&nbsp;руководитель организации 
					</td>
					<td>101</td>
					<td>02</td>
					<%Call DrawInputsEx(1,2,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;заместители руководителя, руководители структурных<br/>
						&nbsp;&nbsp;&nbsp;подразделений (кроме врачей - руководителей<br/>
						&nbsp;&nbsp;&nbsp;структурных подразделений, заведующих учебной<br/>
						&nbsp;&nbsp;&nbsp;частью образовательных организаций, реализующих<br/>
						&nbsp;&nbsp;&nbsp;программы общего образования) и их заместители
					</td>
					<td>102</td>
					<td>03</td>
					<%Call DrawInputsEx(1,3,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники образовательных<br/>
						&nbsp;&nbsp;&nbsp;организаций, реализующих программы дошкольного<br/>
						&nbsp;&nbsp;&nbsp;образования
					</td>
					<td>201</td>
					<td>04</td>
					<%Call DrawInputsEx(1,4,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники и заведующие учебной<br/>
						&nbsp;&nbsp;&nbsp;частью образовательных организаций, реализующих<br/>
						&nbsp;&nbsp;&nbsp;программы общего образования
					</td>
					<td>211</td>
					<td>05</td>
					<%Call DrawInputsEx(1,5,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них учителя
					</td>
					<td>212</td>
					<td>06</td>
					<%Call DrawInputsEx(1,6,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники образовательных<br/>
						&nbsp;&nbsp;&nbsp;организаций, реализующих программы <br/>
						&nbsp;&nbsp;&nbsp;дополнительного образования детей
					</td>
					<td>221</td>
					<td>07</td>
					<%Call DrawInputsEx(1,7,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники образовательных<br/>
						&nbsp;&nbsp;&nbsp;организаций, реализующих образовательные<br/>
						&nbsp;&nbsp;&nbsp;программы подготовки квалифицированных рабочих<br/>
						&nbsp;&nbsp;&nbsp;и служащих
					</td>
					<td>231</td>
					<td>08</td>
					<%Call DrawInputsEx(1,8,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них: преподаватели
					</td>
					<td>232</td>
					<td>09</td>
					<%Call DrawInputsEx(1,9,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного обучения
					</td>
					<td>233</td>
					<td>10</td>
					<%Call DrawInputsEx(1,10,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники образовательных<br/>
						&nbsp;&nbsp;&nbsp;организаций, реализующих образовательные<br/>
						&nbsp;&nbsp;&nbsp;программы подготовки специалистов среднего звена
					</td>
					<td>241</td>
					<td>11</td>
					<%Call DrawInputsEx(1,11,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них: преподаватели
					</td>
					<td>242</td>
					<td>12</td>
					<%Call DrawInputsEx(1,12,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного обучения
					</td>
					<td>243</td>
					<td>13</td>
					<%Call DrawInputsEx(1,13,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники образовательных<br/>
						&nbsp;&nbsp;&nbsp;организаций, реализующих программы дополнительного<br/>
						&nbsp;&nbsp;&nbsp;профессионального образования, осуществляющих<br/>
						&nbsp;&nbsp;&nbsp;подготовку (повышение квалификации) специалистов,<br/>
						&nbsp;&nbsp;&nbsp;имеющих среднее профессиональное образование
					</td>
					<td>251</td>
					<td>14</td>
					<%Call DrawInputsEx(1,14,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них: преподаватели
					</td>
					<td>252</td>
					<td>15</td>
					<%Call DrawInputsEx(1,15,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного обучения
					</td>
					<td>253</td>
					<td>16</td>
					<%Call DrawInputsEx(1,16,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;профессорско-преподавательский состав организаций,<br/>
						&nbsp;&nbsp;&nbsp;реализующих программы высшего образования
					</td>
					<td>261</td>
					<td>17</td>
					<%Call DrawInputsEx(1,17,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;профессорско-преподавательский состав<br/>
						&nbsp;&nbsp;&nbsp;образовательных организаций, реализующих<br/>
						&nbsp;&nbsp;&nbsp;программы дополнительного профессионального<br/>
						&nbsp;&nbsp;&nbsp;образования, осуществляющих подготовку (повышение<br/>
						&nbsp;&nbsp;&nbsp;квалификации) специалистов, имеющих высшее<br/>
						&nbsp;&nbsp;&nbsp;образование
					</td>
					<td>271</td>
					<td>18</td>
					<%Call DrawInputsEx(1,18,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;научные работники организаций, реализующих<br/>
						&nbsp;&nbsp;&nbsp;программы высшего образования
					</td>
					<td>301</td>
					<td>19</td>
					<%Call DrawInputsEx(1,19,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них научные сотрудники<br/>
					</td>
					<td>311</td>
					<td>20</td>
					<%Call DrawInputsEx(1,20,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;научные работники организаций дополнительного<br/>
						&nbsp;&nbsp;&nbsp;профессионального образования
					</td>
					<td>301</td>
					<td>21</td>
					<%Call DrawInputsEx(1,21,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них научные сотрудники
					</td>
					<td>311</td>
					<td>22</td>
					<%Call DrawInputsEx(1,22,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;врачи (кроме зубных), включая врачей - руководителей<br/>
						&nbsp;&nbsp;&nbsp;структурных подразделений
					</td>
					<td>401</td>
					<td>23</td>
					<%Call DrawInputsEx(1,23,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;средний медицинский (фармацевтический) персонал<br/>
						&nbsp;&nbsp;&nbsp;(персонал, обеспечивающий условия для<br/>
						&nbsp;&nbsp;&nbsp;предоставления медицинских услуг)
					</td>
					<td>411</td>
					<td>24</td>
					<%Call DrawInputsEx(1,24,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;младший медицинский персонал (персонал,<br/>
						&nbsp;&nbsp;&nbsp;обеспечивающий условия для предоставления<br/>
						&nbsp;&nbsp;&nbsp;медицинских услуг)
					</td>
					<td>421</td>
					<td>25</td>
					<%Call DrawInputsEx(1,25,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;работники культуры
					</td>
					<td>631</td>
					<td>26</td>
					<%Call DrawInputsEx(1,26,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;социальные работники
					</td>
					<td>501</td>
					<td>27</td>
					<%Call DrawInputsEx(1,27,1,11,6,8)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;прочий персонал
					</td>
					<td>103</td>
					<td>28</td>
					<%Call DrawInputsEx(1,28,1,11,6,8)%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="left">
			<br/>
			<sup>1</sup> Показывается среднесписочная численность работников (с одним десятичным знаком).<br/>
			<sup>2</sup> Средняя численность внешних совместителей исчисляется пропорционально фактически отработанному времени (с одним десятичным знаком).<br/>
			<sup>3</sup> Включая вознаграждение за работу по договорам гражданско-правового характера, заключенным работником списочного состава <i>со своей</i> организацией.
		</td>
	</tr>
	<tr>
		<td>
		<br/>
			<table border=0 cellpadding=5>
				<tr>
					<td align="left">Должностное лицо, ответственное за<br />
						предоставление первичных<br />
						статистических данных (лицо,<br />
						уполномоченное предоставлять<br />
						первичные статистические данные
					</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td align="left">от имени юридического лица)</td>
					<td>&nbsp;&nbsp;</td>
					<td><%=IT("T01_post", 33, 12 )%></td>
					<td></td>
					<td><%=IT("T01_fio", 33, 150 )%></td>
					<td></td>
					<td></td>
				</tr>

				<tr align="center" valign="bottom">
					<td></td>
					<td></td>
					<td>____________________________</td>
					<td>&nbsp;&nbsp;</td>
					<td>____________________________</td>
					<td>&nbsp;&nbsp;</td>
					<td>____________________________</td>
				</tr>

				<tr align="center" valign="top">
					<td></td>
					<td></td>
					<td>(должность)</td>
					<td>&nbsp;&nbsp;</td>
					<td>(Ф.И.О.)</td>
					<td>&nbsp;&nbsp;</td>
					<td>(подпись)</td>
				</tr>

				<tr><td><br/></td></tr>

				<tr>
					<td></td>
					<td>&nbsp;&nbsp;</td>
					<td><%=IT("T01_phone", 33, 12 )%></td>
					<td></td>
					<td><%=IT("T01_email", 33, 80 )%></td>
					<td></td>
					<td>&nbsp;&nbsp;<%=IT("T01_day", 2, 2 )%>&nbsp;<%=IT("T01_month", 15, 10 )%>&nbsp;&nbsp;&nbsp;<%=IT("T01_year", 1, 2 )%></td>
				</tr>

				<tr align="center" valign="bottom">
					<td></td>
					<td></td>
					<td>____________________________</td>
					<td>&nbsp;&nbsp;</td>
					<td>E-mail:&nbsp;______________________</td>
					<td>&nbsp;&nbsp;</td>
					<td>"____"______________20___год</td>
				</tr>

				<tr align="center" valign="top">
					<td></td>
					<td></td>
					<td>(номер контактного телефона)</td>
					<td></td>
					<td></td>
					<td>&nbsp;&nbsp;</td>
					<td>(дата составления документа)</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

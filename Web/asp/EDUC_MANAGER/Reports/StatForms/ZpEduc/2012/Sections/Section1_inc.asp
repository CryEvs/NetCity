<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td align="center">
			<div align="right">
				Коды по ОКЕИ: человек - 792; тысяча рублей - 384 (с одним десятичным знаком)</div>
		</td>
	</tr>
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
						работников, человек
					</td>
					<td colspan="3">
						Фонд начисленной заработной платы <br/>
						работников за отчетный период, тыс. руб. <br/>
						с одним десятичным знаком
					</td>
					<td colspan="6">
						Фонд начисленной заработной платы работников по источникам <br/>
						финансирования, тыс. руб. с одним десятичным знаком
					</td>
				</tr>
				<tr align="center">
					<td rowspan="2">
						списочного <br/>
						состава (без <br/>
						внешних <br/>
						совмес-тителей)<sup>1</sup>
					</td>
					<td rowspan="2">
						внешних <br/>
						совмес-<br/>
						тителей<sup>2</sup>
					</td>
					<td colspan="2">
						списочного состава (без <br/>
						внешних совместителей)
					</td>
					<td rowspan="2">
						внешних<br/>
						совмести-<br/>
						телей
					</td>
					<td colspan="3">
						из гр. 3 списочного состава (без <br/>
						внешних совместителей)
					</td>
					<td colspan="3">
						из гр. 5 внешних совместителей
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
						Всего работников (сумма строк 02 - 05, 
						07, 08, 11, 14, 17 - 19, 21, 23 - 28)
					</td>
					<td>100</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 1, 11, 1, Array(1,2,3,4,5,6,7,8,9,10,11))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в том числе:<br/>
						&nbsp;&nbsp;&nbsp;руководитель организации 
					</td>
					<td>101</td>
					<td>02</td>
					<%Call DrawInputs(1,2,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;заместители руководителя,<br/>
						&nbsp;&nbsp;&nbsp;руководители структурных<br/>
						&nbsp;&nbsp;&nbsp;подразделений и их заместители
					</td>
					<td>102</td>
					<td>03</td>
					<%Call DrawInputs(1,3,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники <br/>
						&nbsp;&nbsp;&nbsp;дошкольных образовательных <br/>
						&nbsp;&nbsp;&nbsp;учреждений
					</td>
					<td>201</td>
					<td>04</td>
					<%Call DrawInputs(1,4,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники<br/>
						&nbsp;&nbsp;&nbsp;общеобразовательных учреждений
					</td>
					<td>211</td>
					<td>05</td>
					<%Call DrawInputs(1,5,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них учителя
					</td>
					<td>212</td>
					<td>06</td>
					<%Call DrawInputs(1,6,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники<br/>
						&nbsp;&nbsp;&nbsp;образовательных учреждений<br/>
						&nbsp;&nbsp;&nbsp;дополнительного образования детей
					</td>
					<td>221</td>
					<td>07</td>
					<%Call DrawInputs(1,7,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники <br/>
						&nbsp;&nbsp;&nbsp;образовательных учреждений НПО
					</td>
					<td>231</td>
					<td>08</td>
					<%Call DrawInputs(1,8,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;преподаватели
					</td>
					<td>232</td>
					<td>09</td>
					<%Call DrawInputs(1,9,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обучения
					</td>
					<td>233</td>
					<td>10</td>
					<%Call DrawInputs(1,10,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники <br/>
						&nbsp;&nbsp;&nbsp;образовательных учреждений СПО
					</td>
					<td>241</td>
					<td>11</td>
					<%Call DrawInputs(1,11,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;преподаватели
					</td>
					<td>242</td>
					<td>12</td>
					<%Call DrawInputs(1,12,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обучения
					</td>
					<td>243</td>
					<td>13</td>
					<%Call DrawInputs(1,13,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;педагогические работники <br/>
						&nbsp;&nbsp;&nbsp;учреждений дополнительного<br/>
						&nbsp;&nbsp;&nbsp;профессионального образования,<br/>
						&nbsp;&nbsp;&nbsp;осуществляющие подготовку<br/>
						&nbsp;&nbsp;&nbsp;(повышение квалификации)<br/>
						&nbsp;&nbsp;&nbsp;специалистов, имеющих среднее<br/>
						&nbsp;&nbsp;&nbsp;профессиональное образование<br/>
					</td>
					<td>251</td>
					<td>14</td>
					<%Call DrawInputs(1,14,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них:<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;преподаватели
					</td>
					<td>252</td>
					<td>15</td>
					<%Call DrawInputs(1,15,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;мастера производственного<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;обучения
					</td>
					<td>253</td>
					<td>16</td>
					<%Call DrawInputs(1,16,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;профессорско-преподавательский<br/>
						&nbsp;&nbsp;&nbsp;состав учреждений ВПО
					</td>
					<td>261</td>
					<td>17</td>
					<%Call DrawInputs(1,17,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;профессиональное образование<br/>
						&nbsp;&nbsp;&nbsp;специалистов, имеющих высшее<br/>
						&nbsp;&nbsp;&nbsp;профессорско-преподавательский<br/>
						&nbsp;&nbsp;&nbsp;состав учреждений дополнительного<br/>
						&nbsp;&nbsp;&nbsp;профессионального образования,<br/>
						&nbsp;&nbsp;&nbsp;осуществляющий подготовку<br/>
						&nbsp;&nbsp;&nbsp;(повышение квалификации)
					</td>
					<td>271</td>
					<td>18</td>
					<%Call DrawInputs(1,18,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;научные работники учреждений ВПО
					</td>
					<td>301</td>
					<td>19</td>
					<%Call DrawInputs(1,19,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них научные сотрудники
					</td>
					<td>311</td>
					<td>20</td>
					<%Call DrawInputs(1,20,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;научные работники учреждений <br/>
						&nbsp;&nbsp;&nbsp;дополнительного<br/>
						&nbsp;&nbsp;&nbsp;профессионального образования
					</td>
					<td>301</td>
					<td>21</td>
					<%Call DrawInputs(1,21,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;из них научные сотрудники
					</td>
					<td>311</td>
					<td>22</td>
					<%Call DrawInputs(1,22,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;врачи
					</td>
					<td>401</td>
					<td>23</td>
					<%Call DrawInputs(1,23,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;средний медицинский персонал
					</td>
					<td>411</td>
					<td>24</td>
					<%Call DrawInputs(1,24,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;младший медицинский персонал
					</td>
					<td>421</td>
					<td>25</td>
					<%Call DrawInputs(1,25,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;работники культуры
					</td>
					<td>631</td>
					<td>26</td>
					<%Call DrawInputs(1,26,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;социальные работники
					</td>
					<td>501</td>
					<td>27</td>
					<%Call DrawInputs(1,27,1,11)%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;прочий персонал
					</td>
					<td>103</td>
					<td>28</td>
					<%Call DrawInputs(1,28,1,11)%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td align="left">
			<br/>
			<sup>1</sup> Показывается среднесписочная численность работников (в целых единицах).<br/>
			<sup>2</sup> Средняя численность внешних совместителей исчисляется пропорционально фактически отработанному времени (допускается заполнение с десятичным знаком).<br/>
			<sup>3</sup> Включая вознаграждение за работу по договорам гражданско-правового характера, заключенным работником списочного состава со своей организацией.
		</td>
	</tr>
	<tr>
		<td>
		<br/>
			<table border=0 cellpadding=5>
				<tr>
					<td align="left">Должностное лицо, ответственное за предоставление статистической информации<br />
					(лицо, уполномоченное предоставлять статистическую информацию от имени<br />
					юридического лица) 
					</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;<br><br></td>
					<td align=center>_______________________<br>(должность)</td>
					<td align=center>_______________________<br>(Ф.И.О.)</td>
					<td align=center>_________________<br>(подпись)</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td align=center>_______________________<br>(номер контактного телефона)</td>
					<td align=left colspan=2>"____" __________________<br>(дата составления документа)</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr align="center"><td><b>Раздел 3. Распределение начальных, основных и средних общеобразовательных учреждений по численности обучающихся</b></td></tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: человек-792</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1"
				width="100%">
				<tr align="center">
					<td rowspan="2">
					</td>
					<td rowspan="2">
						№<br>
						строки
					</td>
					<td rowspan="2">
						Число <br/>
						начальных <br/>
						школ <br/>
						(сумма <br/>
						гр.( 4 - 14)
					</td>
					<td colspan="11">
						Из них с количеством обучающихся
					</td>
					<td rowspan="2">
						Число <br/>
						основных <br/>
						школ <br/>
						(сумма <br/>
						гр. 16 - 22)
					</td>
					<td colspan="7">
						Из них с количеством обучающихся
					</td>
					<td rowspan="2">
						Число <br/>
						средних <br/>
						(полных) <br/>
						школ <br/>
						(сумма гр.<br/> 
						24 - 33 )
					</td>
					<td colspan="10">
						Из них с количеством обучающихся
					</td>
				</tr>
				<tr align="center">
					<td>
						до 10
					</td>
					<td>
						11 - 14
					</td>
					<td>
						15-20
					</td>
					<td>
						21-29
					</td>
					<td>
						30-40
					</td>
					<td>
						41-60
					</td>
					<td>
						61-100
					</td>
					<td>
						101-120
					</td>
					<td>
						121-180
					</td>
					<td>
						181-280
					</td>
					<td>
						281 и более
					</td>
					<td>
						40 и менее
					</td>
					<td>
						41-100
					</td>
					
					<td>
						101-200
					</td>
					<td>
						201-280
					</td>
					<td>
						281-400
					</td>
					<td>
						401-640
					</td>
					<td>
						641 и <br/>
						более
					</td>
					<td>
						100 и <br/>
						менее
					</td>
					<td>
						101-200
					</td>
					<td>
						201-280
					</td>
					<td>
						281-400
					</td>
					<td>
						401-640
					</td>
					<td>
						641-880
					</td>
					<td>
						881-1120
					</td>
					<td>
						1121-1360 
					</td>
					<td>
						1361-1600
					</td>
					<td>
						1601 и <br/>
						более
					</td>
				</tr>
				
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
					<td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td>
					<td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td>32</td><td>33</td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Городские поселения
					</td>
					<td>01</td>
					<%Call DrawInputsWithTotals(1, 3, 33, 3, Array(3,15,23))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Сельская местность
					</td>
					<td>02</td>
					<%Call DrawInputsWithTotals(2, 3, 33, 3, Array(3,15,23))%>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						Итого (сумма стр. 01 и 02)
					</td>
					<td>03</td>
					<%Call DrawInputsWithTotals(3, 3, 33, 3, Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33))%>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<table border="0" cellpadding="2" align="left"  width="30%">
				<tr>
					<td align="left">
						Общее число общеобразовательных учреждений</td><td>04</td><td><%=IT("T0304", 5, 5 )%>
					</td>
				</tr>
				<tr>
					<td align="left">
						Число общеобразовательных учреждений с числом учащихся в 10-11(12)<br/>
						классах менее 150 человек в городской местности</td><td>05</td><td><%=IT("T0305", 5, 5 )%>
					</td>
				</tr>
				<tr>
					<td align="left">
						Число общеобразовательных учреждений с числом учащихся в 10-11(12) <br/>
						классах менее 84 человек в сельской местности</td><td>06</td><td><%=IT("T0306", 5, 5 )%>
					</td>
				</tr>
				<tr>
					<td align="left">
						Число общеобразовательных учреждений с числом учащихся в 10-11(12) <br/>
						классах менее 150 человек в городской местности и менее 84 человек в <br/>
						сельской местности (сумма строк 05 и 06)</td><td>07</td><td><%=ITS("T0307", 5, 5 )%>
					</td>
				</tr>
			</table>
		</td>
	</tr>

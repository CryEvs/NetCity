<% ' © 2007-2013 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td>
			<div align="center">Раздел 3. База для допрофессиональной и профессиональной подготовки обучающихся 8-11 (12) классов</div>
		</td>
	</tr>
	<tr>
		<td align="center">
			<div align="right">
				Код по ОКЕИ: единица – 642
			</div>
		</td>
	</tr>
	<tr>
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="1">
				<tr align="center">
					<td rowspan="2">
						Наименование
					</td>
					<td rowspan="2">
						№<br/>строки
					</td>
					<td rowspan="2">
						Городские посе-<br/>ления и сельская<br/>местность<br/>(сумма граф 4, 5)
					</td>
					<td colspan="2">
						в том числе
					</td>
				</tr>
				<tr align="center">
					<td>
						городские<br/>поселения
					</td>
					<td>
						сельская<br/>местность
					</td>
				</tr>
				<tr align="center">
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
				</tr>
				<tr align="center">
					<td align="left">
						Число межшкольных учебно-производственных комбинатов
					</td>
					<td align="center">
						01
					</td>
					<%Call DrawInputsWithTotals(1, 3, 5, 3, Array(3))%>
				</tr>
				<tr align="center">
					<td align="left">
						Число учебных цехов и участков предприятий, организаций
					</td>
					<td align="center">
						02
					</td>
					<%Call DrawInputsWithTotals(2, 3, 5, 3, Array(3))%>
				</tr>
				<tr align="center">
					<td align="left">
						 Число школьных и межшкольных учебно- производственных мастерских
					</td>
					<td align="center">
						03
					</td>
					<%Call DrawInputsWithTotals(3, 3, 5, 3, Array(3))%>
				</tr>
				<tr align="center">
					<td align="left">
						Число ученических производственных бригад 
					</td>
					<td align="center">
						04
					</td>
					<%Call DrawInputsWithTotals(4, 3, 5, 3, Array(3))%>
				</tr>
			</table>
			<!-- End Of таб.3 -->
		</td>
	</tr>
</table>

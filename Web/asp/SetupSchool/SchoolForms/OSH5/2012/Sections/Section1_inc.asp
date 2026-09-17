<% ' © 2007-2012 IRTech. All rights reserved.
Dim dd, arrDays(30), arrMonths(23)
For dd=0 To Ubound(arrDays)
	arrDays(dd)=dd+1
Next

For dd=0 To Ubound(arrMonths)-1 Step 2
	arrMonths(dd) = (dd/2) + 1
	arrMonths(dd + 1) = obLanguage.GetMonthName((dd/2) + 1, False)
Next

%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0">
<tr><td>
<table border="0" cellpadding="0" cellspacing="0" align="left">
<tr><td align="left">
<table border="0" cellpadding="0" cellspacing="0">
	<!-- сведения об учреждении -->
	<tr>
		<td align="left">
			<b>Полное название<br>
				и № учреждения</b> &nbsp; &nbsp; &nbsp; &nbsp;
			<%=strSchoolName%>
			<br><br>
		</td>
	</tr>
	<tr>
		<td align="center">
		     c <%=IBArrValue("T0002", objSchoolFormComponent.GetEducList().ToArray())%> формой обучения
		</td>
	</tr>
	<tr>
		<td>
			<table border="0" cellpadding="0" width="100%">
				<tr align="left">
					<td rowspan="2">
						<b>Вид учреждения</b>
					</td>
					<td>
						<br>
						<%=IBArrValue("T0003", objSchoolFormComponent.GetSvList().ToArray())%>
					</td>
				</tr>
				<tr align="left">
					<td>
						<br>
						<%=IBArrValue("T0004",objSchoolFormComponent.GetDnList().ToArray())%>
						<br>
						<br>
						<br>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr align="left">
		<td>
			<b>Когда начались заня-<br>
				тия в учреждении:</b>&nbsp; &nbsp; &nbsp; &nbsp;число
			<%=IBArrValue("T0005", arrDays )%>
			месяц
			<%=ISelect("T0006", arrMonths, 1 )%>
			год
			<%=IBArrValue("T0007", Split(obTokenMgr.GetData(strToken, "CurrYearName"), "/") )%>
			<br>
			<br>
		</td>
	</tr>
	<tr align="left">
		<td>
			<b>Когда ведутся заня-<br>
				тия в учреждении:</b>&nbsp; &nbsp; &nbsp; &nbsp;
			<%=IBArrValue("T0008",objSchoolFormComponent.GetSessionList().ToArray())%>
			<br>
			<br>
		</td>
	</tr>
	</table>
	</td></tr>
	<!-- end of сведения об учреждении -->
	<!-- п.I -->
	<tr align="left">
		<td>
		<table border="0" cellpadding="0" cellspacing="0" align="left">
			<tr align="left">
				<td>
			<br>
			<pre>
			<b>Раздел 1. Языки преподавания
	На каком языке или на каких языках ведется обучение в учреждении
	(не считая языка, который преподается только как предмет )
		указать отдельно обучающихся на каждом языке:</b></pre>
		</td>
	</tr>
	<tr align="left">
		<td>
			<div align="right">Код по ОКЕИ: человек - 792</div>
		</td>
	</tr>
	<tr align="left">
		<td>
			<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="2" width="600pt">
				<tr>
					<td colspan="2" align="center">
						Наименование
					</td>
					<td align="center">
						№<br>
						строки
					</td>
					<td align="center">
						численность<br>
						обучающихся на<br>
						данном языке
					</td>
				</tr>
				<tr align="center">
					<td colspan="2">
						1
					</td>
					<td>
						2
					</td>
					<td>
						3
					</td>
				</tr>
				<tr align="center">
					<td rowspan="2" align="center">
						Язык обучения
					</td>
					<%Call DrawLangRow(1,3)%>
				</tr>
				<tr align="center">
					<%Call DrawLangRow(2,3)%>
				</tr>
			</table>
		</td></tr>
	</table>
</td></tr>
</table>
<!-- end of п.I -->

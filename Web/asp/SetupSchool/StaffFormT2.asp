<!-- #INCLUDE Virtual="/asp/headerprint.asp" -->
<!-- #INCLUDE file="Seniorities_inc.asp" -->
<!-- #INCLUDE file="StaffFormT2_3_inc.asp" -->
<!-- #INCLUDE file="StaffFormT2_4_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kSenTypeCommon = "1"
Const kSenTypeContinuous = "3"

Dim nCurrPage
Dim strEditUserID

Dim objInfo, objParamInfo, objFamilyInfo

Dim strFirstName, strLastName, strMiddleName
Dim strDate, strHomePhone, bMale
Dim strPassDate, strPassInfo, strPassSer, strPassNum
Dim strParamVal
Dim strTabNo, strINN, strEnsure, strStatus, strEducation
Dim	strDiplomVUZ, strDiplomDate, strDiplomNum, strDiplomSpec
Dim strFamilyInfo
Dim nRelatives

Dim arrTotalsCommon, arrTotalsContinuous
Dim arrMonths

Sub ReadState()
	nCurrPage = GetSafeLng(Request("cp"), 1 )
	strEditUserID = Request("UID")
	bIsAbout = true
End Sub

Sub Main()
	Dim objCmd, objRs, arrSenior, i, strSenType, strErr

	bMale = True
	strFirstName = ""
	strMiddleName = ""
	strLastName = ""
	strHomePhone = ""
	strDate = ""
	strTabNo = ""
	strINN = ""
	strEnsure = ""
	strStatus = ""
	strEducation = ""
	strDiplomVUZ = ""
	strDiplomDate = ""
	strDiplomNum = ""
	strDiplomSpec = ""
	strFamilyInfo = ""
	nRelatives = 0

'FedorovSY	If Not OpenConnection( objWorkCon ) Then GenerateError obLanguage("Common","kErrorMsg")
	If Not objNSNET.IsCanConnect(TRUE, strErr) Then GenerateError obLanguage("Common","kErrorMsg")
	Set objInfo = objNSNET.GetUserInfo(strEditUserID)
	Set objFamilyInfo = objNSNETWork.GetStaffFamilyInfo(strEditUserID)
	If Not objInfo.EoF Then
		bMale = (objInfo("GENDER") = obLanguage("Common","kMaleLet"))
		strFirstName = objInfo("FIRSTNAME")
		strMiddleName = objInfo("MIDDLENAME")
		strLastName = objInfo("LASTNAME")
		strHomePhone = objInfo("HOMEPHONE")
		strDate = objInfo("BIRTHDATE")
		If IsDull(strDate) Then strDate = "" Else strDate = Date2Str(strDate)
		strPassDate=objInfo("PASS_DATE")
		If IsDull(strPassDate) Then strPassDate = "" Else strPassDate = Date2Str(strPassDate)
		strPassInfo=objInfo("PASS_INFO")
		strPassSer=objInfo("PASS_SER")
		strPassNum=objInfo("PASS_NUM")

		Set objParamInfo = objNSNET.GetStaffPersonalFileInfo(strCurrYearID, strEditUserID)
		Do While Not objParamInfo.EoF
			strParamVal = objParamInfo("PARAMVALUE")
			Select Case CStr(objParamInfo("NAME"))
				Case "TAB_NO"
					If Not IsDull( strParamVal ) Then strTabNo = strParamVal
				Case "INN"
					If Not IsDull( strParamVal ) Then strINN = strParamVal
				Case "ENSURE"
					If Not IsDull( strParamVal ) Then strEnsure = strParamVal
				Case "EDUCATION"
					If Not IsDull( objParamInfo("ITEMNAME") ) Then
						strParamVal = Replace( objParamInfo("ITEMNAME"), "(*)", "" )
						If Not IsDull( strParamVal ) Then strEducation = strParamVal
					End If
				Case "DIPL_VUZ"
					If Not IsDull( strParamVal ) Then strDiplomVUZ = strParamVal
				Case "DIPL_DATE"
					strParamVal = objParamInfo("PARAMVALUE_DT")
					If Not IsDull( strParamVal ) Then strDiplomDate = Date2Str( strParamVal )
				Case "DIPL_NUM"
					If Not IsDull( strParamVal ) Then strDiplomNum = strParamVal
				Case "DIPL_SPEC"
					If Not IsDull( strParamVal ) Then strDiplomSpec = strParamVal
				Case "STATUS"
					strParamVal = objParamInfo("ITEMNAME")
					If Not IsDull( strParamVal ) Then strStatus = strParamVal
				Case "FAMILYINFO"
					strParamVal = objParamInfo("ITEMNAME")
					If Not IsDull( strParamVal ) Then strFamilyInfo = strParamVal
			End Select
			objParamInfo.MoveNext
		Loop
	End If

	If nCurrPage = 2 Then
		dtSeniorityOn = Empty
		Set objCmd = objNSNET.GetStaffSeniorities_Prepare()
		Set objRs = objNSNET.GetStaffSeniorities_Execute(objCmd, strEditUserID)
		Call objNSNET.DisposeCommand(objCmd)
		arrTotalsCommon = Empty
		arrTotalsContinuous = Empty
		If Not objRs.EOF Then
			arrSenior = GetSenArray(objRs)
			For i = 0 To Ubound(arrSenior, 2)
				strSenType = arrSenior(0, i)
				If strSenType = kSenTypeCommon Then
					arrTotalsCommon = arrSenior(3, i)
				ElseIf strSenType = kSenTypeContinuous Then
					arrTotalsContinuous = arrSenior(3, i)
				End If
			Next
		Else
			GenerateError obLanguage("Common","kInvalidParameter")
		End If

		ReDim arrMonths(12)
		arrMonths(1) = "января"
		arrMonths(2) = "февраля"
		arrMonths(3) = "марта"
		arrMonths(4) = "апреля"
		arrMonths(5) = "мая"
		arrMonths(6) = "июня"
		arrMonths(7) = "июля"
		arrMonths(8) = "августа"
		arrMonths(9) = "сентября"
		arrMonths(10) = "октября"
		arrMonths(11) = "ноября"
		arrMonths(12) = "декабря"
	End If
End Sub

Sub onHead()
	%>
<style type="text/css">
	td {
	  font-size: 7pt;
	  font-family: Verdana, Arial, Helvetica;
	  padding: 2px 3px 1px;
	}
	th {
	  font-weight: bold;
	  font-size: 8pt;
	  font-family: Verdana, Arial, Helvetica;
	  padding: 2px 3px 1px;
	}
	
}</style><%
End Sub

Sub onDrawPage()
Dim bSenCommon, bSenContinuous
If nCurrPage = 1 Then %>
<table align="right" border="0" cellpadding="0" cellspacing="0">
	<tr><td>
			<table align="right" border="0" cellspacing="0" cellpadding="0">
				<tr><td>Унифицированная форма № Т-2<br>Утверждена Постановлением Госкомстата России<br>от 05.01.2004 № 1</td></tr>
			</table>
	</td></tr>
	<tr>
		<td>
			<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%">
			<tr>
				<td align="center" colspan="5" valign="bottom" style="border-bottom:1px solid black"><b><%=DB2HTML(strSchoolName)%></b></td>
				<td>
					<table align="right" border="0" cellspacing="0" cellpadding="0">
						<tr><td>&nbsp;</td></tr>
						<tr align="right"><td nowrap>Форма по ОКУД&nbsp;</td></tr>
						<tr align="right"><td nowrap>по ОКПО&nbsp;</td></tr>
					</table>
				</td>
				<td>
					<table align="center" border="1" cellspacing="0" cellpadding="0">
					<tr><td align="center">Код</td></tr>
					<tr><td align="center">&nbsp;0301002&nbsp;	</td></tr>
					<tr><td>&nbsp;</td></tr>
					</table>
				</td>
			</tr>
			<tr>
				<td align="center"><div style="font-size:70%; height: 0px;">(наименование организации)</div><br></td><td colspan="2">&nbsp;</td>
			</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td><table align="left" border="1" cellspacing="0" cellpadding="2" width="100%">
			<tr align="center">
				<td>Дата составления</td>
				<td>Табельный номер</td>
				<td>Идентификационный номер налогоплательщика</td>
				<td>Номер страхового свидетельства государственного пенсионного страхования</td>
				<td>Алфавит</td>
				<td>Характер работы</td>
				<td>Вид работы<br>(основная, по совместительству)</td>
				<td><%=obLanguage("Common","kGender")%> (<%=LCase(obLanguage("Common","kMale"))%>, <%=LCase(obLanguage("Common","kFemale"))%>)</td>
			</tr>
			<tr align="center">
				<td>&nbsp;</td>
				<td>&nbsp;<%=DB2HTML(strTabNo)%>&nbsp;</td>
				<td>&nbsp;<%=DB2HTML(strINN)%>&nbsp;</td>
				<td>&nbsp;<%=DB2HTML(strEnsure)%>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;<%=strStatus%>&nbsp;</td>
				<td><%If bMale Then response.write LCase(obLanguage("Common","kMale")) Else response.write LCase(obLanguage("Common","kFemale"))%></td>
			</tr>
		</table></td>
	</tr>
	<tr>
		<td>
		<div align="center"><b style="font-size:120%">ЛИЧНАЯ КАРТОЧКА</b><br><b>работника</b><br><b>I. ОБЩИЕ СВЕДЕНИЯ</b></div>
		</td>
	</tr>
	<tr><td>
	<table align="right" border="0" cellspacing="0" cellpadding="0">
	<tr>
		<td>
			<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%">
				<tr align="right"><td>Трудовой договор&nbsp;</td></tr>
				<tr align="right"><td>&nbsp;</td></tr>
			</table>
		</td>
		<td>
			<table align="left" border="1" cellspacing="0" cellpadding="0" width="100%">
					<tr><td align="right">&nbsp;номер&nbsp;</td><td align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>
					<tr><td align="right">&nbsp;дата&nbsp;</td><td align="center">&nbsp;</td></tr>
				</table>
			</td>
		</tr>
		</table>
	</td></tr>
	<tr><td>
		<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%">
		<tr align="left"><td colspan="7">
			<table align="left" border="0" cellspacing="0" cellpadding="0" width="80%"><tr>
				<td width="40%">1. <%=obLanguage("Common","kLastName")%>&nbsp;&nbsp;<b><%=DB2HTML(strLastName)%></b></td>
				<td width="25%"><%=obLanguage("Common","kFirstName")%>&nbsp;&nbsp;<b><%=DB2HTML(strFirstName)%></b></td>
				<td width="35%"><%=obLanguage("Common","kMiddleName")%>&nbsp;&nbsp;<b><%=DB2HTML(strMiddleName)%></b></td>
			</tr></table>
		</td></tr>
		<tr align="left">
			<td colspan="6">&nbsp;</td>
			<td rowspan="13">
				<table align="left" valign="top" border="1" cellspacing="0" cellpadding="0" width="100%">
					<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Код&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>
					<tr><td>&nbsp;<br>&nbsp;</td></tr>
					<tr><td>&nbsp;<br>&nbsp;</td></tr>
					<tr><td>&nbsp;<br>&nbsp;</td></tr>
					<tr><td>&nbsp;<br>&nbsp;</td></tr>
					<tr><td>&nbsp;<br>&nbsp;</td></tr>
					<tr><td>&nbsp;<br>&nbsp;</td></tr>
				</table></td>
		</tr>
		<tr align="left">
			<td colspan="6">2. <%=obLanguage("Common","kBDate")%>&nbsp;&nbsp;<b><%=strDate%></td>
		</tr>
		<tr align="center" valign="top">
			<td colspan="6"><div style="font-size:70%; height: 0px;">(день, месяц, год)</div></td>
		</tr>
		<tr align="left">
			<td colspan="5">3. Место рождения</td>
			<td rowspan="2" align="left">по ОКАТО</td>
		</tr>
		<tr align="center" valign="top">
				<td colspan="5"><div style="font-size:70%; height: 0px;">&nbsp;</div></td>
		</tr>
		<tr align="left">
			<td colspan="5">4. Гражданство</td>
			<td rowspan="2" align="left" >по ОКИН</td>
		</tr>
		<tr align="center" valign="top">
			<td colspan="5"><div style="font-size:70%; height: 0px;">&nbsp;</div></td>
		</tr>
		<tr align="left">
			<td nowrap>5. Знание иностранного языка</td><td colspan="4">&nbsp;</td>
			<td rowspan="2" align="left">по ОКИН</td>
		</tr>
		<tr align="center" valign="top">
			<td><div style="font-size:70%; height: 0px;">&nbsp;</div></td>
			<td colspan="2"><div style="font-size:70%; height: 0px;">(наименование)</div></td>
			<td colspan="2"><div style="font-size:70%; height: 0px;">(степень знания)</div></td>
		</tr>
		<tr align="left">
			<td colspan="5">&nbsp;</td>
			<td rowspan="2" align="left">по ОКИН</td>
		</tr>
		<tr align="center" valign="top">
			<td colspan="5"><div style="font-size:70%; height: 0px;">&nbsp;</div></td>
		</tr>
		<tr align="left">
			<td colspan="5">6. Образование&nbsp;<b><%=strEducation%></b></td>
			<td rowspan="2" align="left">по ОКИН</td>
		</tr>
		<tr align="center" valign="top">
			<td colspan="5" nowrap><div style="font-size:70%; height: 0px;">(среднее (полное) общее, начальное профессиональное, среднее профессиональное, высшее профессиональное)</div></td>
		</tr>
		<tr align="left">
			<td colspan="6">
				<br>
				<table align="left" border="1" cellspacing="0" cellpadding="2" width="100%">
					<tr align="center"><td width="40%">Наименование образовательной организации</td><td colspan="3">Документ об образовании, о квалифи-<br>кации или наличии специальных знаний</td><td width="15%">Год окончания</td></tr>
					<tr align="center"><td>&nbsp;</td><td>наименование</td><td>серия</td><td>номер</td><td rowspan="2"><b><%=strDiplomDate%></b>&nbsp;</td></tr>
					<tr align="center"><td><b><%=DB2HTML(strDiplomVUZ)%></b></td><td>&nbsp;</td><td colspan="2"><b><%=DB2HTML(strDiplomNum)%></b>&nbsp;</td></tr>
					<tr align="center"><td>Квалификация по документу об образовании</td><td colspan="4">Направление или специальность по документу</td></tr>
					<tr align="right"><td>&nbsp;</td><td colspan="4" rowspan="2"><b><%=DB2HTML(strDiplomSpec)%></b>&nbsp;&nbsp;Код по ОКСО&nbsp;</td></tr>
					<tr align="center"><td>&nbsp;</td></tr>
				</table>
			</td>
			<td valign="bottom" align="center"><table border="1" cellspacing="0" cellpadding="5" width="100%">
				<tr><td>&nbsp;<br>&nbsp;</td></tr>
			</table></td>
		</tr>
		
		<tr align="left">
			<td colspan="6">
				<table align="left" border="1" cellspacing="0" cellpadding="2" width="100%">
					<tr align="center"><td width="40%">Наименование образовательной организации</td><td colspan="3">Документ об образовании, о квалифи-<br>кации или наличии специальных знаний</td><td width="15%">Год окончания</td></tr>
					<tr align="center"><td>&nbsp;</td><td>наименование</td><td>серия</td><td>номер</td><td rowspan="2">&nbsp;</td></tr>
					<tr align="center"><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
					<tr align="center"><td>Квалификация по документу об образовании</td><td colspan="4">Направление или специальность по документу</td></tr>
					<tr align="right"><td>&nbsp;</td><td colspan="4" rowspan="2">Код по ОКСО&nbsp;</td></tr>
					<tr align="center"><td>&nbsp;</td></tr>
				</table>
			</td>
			<td valign="bottom" align="center"><table border="1" cellspacing="0" cellpadding="5" width="100%">
				<tr><td>&nbsp;<br>&nbsp;</td></tr>
			</table></td>
		</tr>
		<tr align="left">
			<td colspan="5"><br>После ОО ВО профессиональное образование</td><td><br>Код по ОКИН</td>
			<td valign="top" align="center"><table  border="1" cellspacing="0" cellpadding="2" width="100%">
				<tr><td>&nbsp;<br>&nbsp;</td></tr>
			</table></td>
		</tr>
		<tr align="left">
			<td colspan="2">&nbsp;</td>
			<td colspan="3" align="center" valign="top"><div style="font-size:70%; height: 0px;">(аспирантура, адъюнктура, докторантура)</div></td>
			<td valign="bottom" align="center">&nbsp;</td>
		</tr>
		<tr align="left">
			<td colspan="6">
				<table align="left" border="1" cellspacing="0" cellpadding="2" width="100%">
					<tr align="center"><td width="40%">Наименование образовательной,<br>научной организации</td><td>Документ об образовании,<br>номер, дата выдачи</td><td width="15%">Год окончания</td></tr>
					<tr align="center"><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
					<tr align="center"><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
					<tr align="center"><td>&nbsp;</td><td colspan="2">Направление или специальность по документу</td></tr>
					<tr align="center"><td>&nbsp;</td><td colspan="2">&nbsp;</td></tr>
					<tr align="right"><td>&nbsp;</td><td colspan="2">Код по ОКСО&nbsp;</td></tr>
				</table>
			</td>
			<td valign="bottom" align="center"><table  border="1" cellspacing="0" cellpadding="2" width="100%">
				<tr><td>&nbsp;</td></tr>
			</table></td>
		</tr>
		<tr align="left">
			<td colspan="6">&nbsp;</td>
			<td rowspan="4">
				<table align="left" valign="top" border="1" cellspacing="0" cellpadding="0" width="100%">
					<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Код&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>
					<tr><td>&nbsp;<br>&nbsp;</td></tr>
					<tr><td>&nbsp;<br>&nbsp;</td></tr>
				</table></td>
		</tr>
		<tr align="left">
			<td>7. Профессия</td><td colspan="4">&nbsp;</td>
			<td rowspan="2" align="left">по ОКПДТР</td>
		</tr>
		<tr align="center" valign="top">
			<td><div style="font-size:70%; height: 0px;">&nbsp;</div></td>
			<td colspan="4"><div style="font-size:70%; height: 0px;">(основная)</div></td>
		</tr>
		<tr align="left">
			<td colspan="5">&nbsp;</td>
			<td rowspan="2" align="left">по ОКПДТР</td>
		</tr>
		<tr align="center" valign="top">
			<td><div style="font-size:70%; height: 0px;">&nbsp;</div></td>
			<td colspan="4"><div style="font-size:70%; height: 0px;">(другая)</div></td>
		</tr>
		</table>
	</td></tr>
</table> <%
ElseIf nCurrPage = 2 Then
	bSenCommon = Not IsEmpty(arrTotalsCommon)
	bSenContinuous = Not IsEmpty(arrTotalsContinuous)
%>
<table align="right" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td><div align="right" style="font-size:80%">2-я страница формы № Т-2</div></td></tr>
<tr><td>
	<br><br>
	<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0" width="100%">
		<tr><td>8. Стаж работы (по состоянию на	"<%=Day(dtSeniorityOn)%>"&nbsp;<%=arrMonths(Month(dtSeniorityOn))%>&nbsp;<%=Year(dtSeniorityOn)%>&nbsp;г.):</td></tr>
	</table>
</td></tr>
<tr><td>
	<br>

	<table align="left" valign="top" border="0" cellspacing="0" cellpadding="2" width="100%">
		<tr><td>&nbsp;&nbsp;Общий</td>
			<td align="right"><%If bSenCommon Then%><b><%=arrTotalsCommon(2)%></b><%End If%>&nbsp;</td><td>дней</td>
			<td align="right"><%If bSenCommon Then%><b><%=arrTotalsCommon(1)%></b><%End If%>&nbsp;</td><td>месяцев</td>
			<td align="right"><%If bSenCommon Then%><b><%=arrTotalsCommon(0)%></b><%End If%>&nbsp;</td><td>лет</td>
		</tr>
		<tr><td>&nbsp;&nbsp;Непрерывный</td>
			<td align="right"><%If bSenContinuous Then%><b><%=arrTotalsContinuous(2)%></b><%End If%>&nbsp;</td><td>дней</td>
			<td align="right"><%If bSenContinuous Then%><b><%=arrTotalsContinuous(1)%></b><%End If%>&nbsp;</td><td>месяцев</td>
			<td align="right"><%If bSenContinuous Then%><b><%=arrTotalsContinuous(0)%></b><%End If%>&nbsp;</td><td>лет</td>
		</tr>
		<tr><td>&nbsp;&nbsp;Дающий право на надбавку за выслугу лет</td><td>&nbsp;</td><td>дней</td><td>&nbsp;</td><td>месяцев</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>лет</td></tr>
		<tr><td>&nbsp;</td><td>&nbsp;</td><td>дней</td><td>&nbsp;</td><td>месяцев</td><td>&nbsp;</td><td>лет</td></tr>
	</table>
</td></tr>
<tr><td>
	<br>
	<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0" width="100%">
		<tr><td>9. Состояние в браке</td><td>&nbsp;&nbsp;<b><%=strFamilyInfo%></b>&nbsp;&nbsp;</td>
			<td align="right">Код по ОКИН&nbsp;</td>
			<td><table align="left" valign="top" border="1" cellspacing="0" cellpadding="0" width="100%">
					<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>
				</table>
			</td></tr>
	</table>
</td></tr>
<tr><td>
	<br>
	<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0" width="100%">
		<tr><td>10. Состав семьи:<br><br></td></tr>
		<tr><td>
			<table align="left" valign="top" border="1" cellspacing="0" cellpadding="2" width="100%">
				<tr align="center"><td>Степень родства<br>(ближайшие родственники)</td><td>Фамилия, имя, отчество</td><td>Год рождения</td></tr>
				<tr align="center"><td>1</td><td>2</td><td>3</td></tr>
				<%If Not objFamilyInfo.EOF Then
					While Not objFamilyInfo.EOF
						Response.write "<tr align='center'><td>" & DB2HTML(objFamilyInfo("NAME")) & "</td><td>" & DB2HTML(objFamilyInfo("LASTNAME")) & " " & DB2HTML(objFamilyInfo("FIRSTNAME")) & " " & DB2HTML(objFamilyInfo("MIDDLENAME")) & "</td><td>" & DB2HTML(objFamilyInfo("BIRTHDATE")) & "</td></tr>"
						nRelatives = nRelatives + 1
						objFamilyInfo.MoveNext
					Wend
				End IF
				While nRelatives < 7
					Response.write "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"
					nRelatives = nRelatives + 1
				Wend%>
			</table>
		</td></tr>
	</table>
</td></tr>
<tr><td>
	<br><br><br>
	<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0" width="100%">
		<tr>
			<td style="width:20%;">11. <%=obLanguage("Common","kPassport")%>: </td>
			<td style="border-bottom:1px solid black; width:20%;" align="center"><%=strPassSer%>№&nbsp;<%=strPassNum%></td>
			<td style="border-bottom:1px solid white; width:20%;"> <%=obLanguage("Common","kDate")%> выдачи:</td>
			<td style="border-bottom:1px solid black; width:20%;" align="center"><%=IIF(strPassDate<>"", strPassDate, "&nbsp;")%>&nbsp;г</td>
		</tr>
		<tr>
			<td>&nbsp;&nbsp;&nbsp;&nbsp;<%=obLanguage("Common","kPassportInfo")%></td>
			<td align="center" colspan="3" style="border-bottom:1px solid black;">&nbsp;<%=strPassInfo%></td>
		</tr>
		<tr>
			<td><div style="font-size:80%">&nbsp;</div></td>
			<td colspan="3"><div align="center" style="font-size:80%">(наименование органа, выдавшего паспорт)</div></td>
		</tr>
		<tr>
			<td colspan="4" style="border-bottom:1px solid black; padding-top:30px;"></td>
		</tr>
		<tr>
			<td colspan="4" style="border-bottom:1px solid black; padding-top:30px;"></td>
		</tr>
		<tr><td colspan="4" style="padding-top: 30px;">Дата регистрации по месту жительства&nbsp;&nbsp;&nbsp;&nbsp;"&nbsp;&nbsp;&nbsp;&nbsp;"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;г.</td></tr>
		<tr><td colspan="2" style="padding-top: 30px;">Номер телефона <b><%=DB2HTML(strHomePhone)%></b></td></tr>
	</table>
</td></tr>
<tr><td>
	<br><br>
	<div align="center"><b style="font-size:120%">II. СВЕДЕНИЯ О ВОИНСКОМ УЧЕТЕ</b></div><br>
	<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0" width="100%">
	<tr><td valign="top">
		<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0" width="100%">
			<tr align="left"><td>1. Категория запаса</td></tr>
			<tr align="left"><td>2. Воинское звание</td></tr>
			<tr align="left"><td>3. Состав (профиль)</td></tr>
			<tr align="left"><td>4. Полное кодовое обозначение ВУС</td></tr>
			<tr align="left"><td>5. Категория годности к военной службе</td></tr>
		</table>
	</td>
	<td>
		<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0" width="100%">
			<tr align="left"><td>6. Наименование военного</td></tr>
			<tr align="left"><td>комиссариата по месту жительства</td></tr>
			<tr align="left"><td>&nbsp;</td></tr>
			<tr align="left"><td>7. Состоит на воинском учете:</td></tr>
			<tr align="left"><td>&nbsp;&nbsp;а) общем (номер команды, партии)</td></tr>
			<tr align="left"><td>&nbsp;&nbsp;б) специальном</td></tr>
			<tr align="left"><td>8.</td></tr>
			<tr align="center"><td><div style="font-size:80%">(отметка о снятии с воинского учета)</div></td></tr>
		</table>
	</td></tr>
	</table>
</td></tr>
<tr><td>
	<br><br>
	<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0" width="100%">
		<tr><td><b>Работник кадровой службы</b></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
		<tr><td><div style="font-size:80%">&nbsp;</div></td>
			<td><div style="font-size:80%">(должность)</div></td>
			<td><div style="font-size:80%">(личная подпись)</div></td>
			<td><div style="font-size:80%">(расшифровка подписи)</div></td></tr>
	</table>
</td></tr>
<tr><td>
	<br><br>
	<table align="left" valign="top" border="0" cellspacing="0" cellpadding="0">
		<tr><td><b>Работник</b></td><td>&nbsp;</td></tr>
		<tr><td><div style="font-size:80%">&nbsp;</div></td>
			<td><div style="font-size:80%">(личная подпись)</div></td></tr>
	</table>
</td></tr>
<tr><td>
"&nbsp;&nbsp;&nbsp;&nbsp;"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;&nbsp;г.
</td></tr>
</table> <%
ElseIf nCurrPage = 3 Then
	Call DrawPage_3()
ElseIf nCurrPage = 4 Then
	Call DrawPage_4()
Else
	GenerateError obLanguage("Common","kInvalidParameter")
End If
End Sub
%>

<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE file="MoveDoc_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nCurrPage
Dim strEditUserID

Dim objInfo, objAddress, objParamInfo, objPar

Dim strFirstName, strLastName, strMiddleName
Dim strDate, strHomePhone, bMale
Dim strAddressID, strSchoolAddress
Dim strPersonalFile, strBirthCert
Dim strAriveFrom, strDepartTo
Dim objArrive, objDepart
Dim strLocation, strRoom, strCorp

Dim strParamVal
Dim arrMonths

Sub InitMonthsIn
	ReDim arrMonths(11)

	arrMonths(0)	=	"Январе"
	arrMonths(1)	=	"Феврале"
	arrMonths(2)	=	"Марте"
	arrMonths(3)	=	"Апреле"
	arrMonths(4)	=	"Мае"
	arrMonths(5)	=	"Июне"
	arrMonths(6)	=	"Июле"
	arrMonths(7)	=	"Августе"
	arrMonths(8)	=	"Сентябре"
	arrMonths(9)	=	"Октябре"
	arrMonths(10)	=	"Ноябре"
	arrMonths(11)	=	"Декабре"
End Sub

Function GetMonthIn( nMonth )
	If 0 <= nMonth And nMonth <= 11 Then
		GetMonthIn = arrMonths( nMonth )
	Else
		GetMonthIn = ""
	End If
End Function

Sub ReadState()
	nCurrPage = GetSafeLng(Request("cp"), 1 )
	strEditUserID = Request("UID")
	bIsAbout = true
End Sub

Sub Main()
Dim objSchoolInfo, objCity, strDistr
	Call InitMonthsIn()

	Set objInfo = objNSNET.GetUserInfo(strEditUserID)

	If Not objInfo.EoF Then
		bMale = (objInfo("GENDER") = obLanguage("Common","kMaleLet"))
		strFirstName = objInfo("FIRSTNAME")
		strMiddleName = objInfo("MIDDLENAME")
		strLastName = objInfo("LASTNAME")
		strHomePhone = objInfo("HOMEPHONE")
		strDate = objInfo("BIRTHDATE")
		If IsDull(strDate) Then strDate = "" Else strDate = Date2Str(strDate)

		Set objAddress = objNSNET.GetUserAddress(strEditUserID, 1)
		Set objInfo = objNSNET.GetStudentInfo(strEditUserID)
		Set objPar = objInfo("chaptParents").Value

		strSchoolAddress = ""
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
		If Not objSchoolInfo.EoF Then
			strSchoolAddress = objSchoolInfo("STATEPROVINCENAME") & " "& objSchoolInfo("CITYNAME")
			strDistr = objSchoolInfo("DISTRNAME")
			If Not IsDull(strDistr) Then 
				strSchoolAddress = strSchoolAddress & " " & strDistr & " " & obLanguage("Common","kDistrict_")
			End If
		End If
		strPersonalFile = ""
		strBirthCert = ""

		Set objParamInfo = objNSNET.GetUserPersonalFileInfo(strCurrYearID, strEditUserID)
		Do While Not objParamInfo.EoF
			strParamVal = objParamInfo("PARAMVALUE")
			Select Case CStr(objParamInfo("NAME"))
				Case "PERSONALREC"
					If Not IsDull( strParamVal ) Then strPersonalFile = strParamVal
				Case "BIRTHCERTIF"
					If Not IsDull( strParamVal ) Then strBirthCert = strParamVal
			End Select
			objParamInfo.MoveNext
		Loop
		Set objArrive = objNSNET.GetMoveDocsForStudent(strEditUserID, strSchoolID, kDocType_ENROLL, 0)
		Set objDepart = objNSNET.GetMoveDocsForStudent(strEditUserID, strSchoolID, kDocType_OUT, kDocType_GRADUATE)
	Else
		strFirstName = ""
		strMiddleName = ""
		strLastName = ""
		strHomePhone = ""
		strDate = ""
		strAddressID = ""
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
Dim bFirst
If nCurrPage = 1 Then %>
<table align="right" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td>
	<div align="center"><b style="font-size:120%">МИНИСТЕРСТВО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ</b></div>
	<br><br><br><br><br><br><br><br><br><br><br>
	<div align="center"><b style="font-size:250%"><%=UCase(obLanguage("SetupSchoolUI","kStudentCard"))%></b></div>
	<div align="center"><b style="font-size:250%">№ <%=DB2HTML(strPersonalFile)%></u></b><br><br></div>
</td></tr>
<tr><td>
	<br><br><br>
	<table Class="ThinTable" align="center" border="0" cellspacing="0" cellpadding="0" width="90%">
		<tr align="center" valign="bottom"><td colspan="2"><div align="center" style="font-size:120%"><br><b><%=DB2HTML(strLastName)%>&nbsp;<%=DB2HTML(strFirstName)%>&nbsp;<%=DB2HTML(strMiddleName)%></b><hr></td></tr>
		<tr valign="top"><td colspan="2"><div align="center" style="font-size:80%">(фамилия, имя, отчество)</div></div></td></tr>
		<tr align="center" valign="bottom"><td colspan="2"><br><div align="center" style="font-size:120%"><b><%=DB2HTML(strSchoolName)%></b></div><hr></td></tr>
		<tr valign="top"><td colspan="2"><div align="center" style="font-size:80%">(название общеобразовательной организации)</div></td></tr>
		<tr align="center" valign="bottom"><td colspan="2"><br><div align="center" style="font-size:120%"><b><%=DB2HTML(strSchoolAddress)%></b></div><hr></td></tr>
		<tr valign="top"><td colspan="2"><div align="center" style="font-size:80%">(месторасположение общеобразовательной организации)</div></td></tr>
		<tr align="center"><td colspan="2"><br>&nbsp;<br><hr></td></tr>
	</table>
</td></tr>
<tr><td>
	<br><br><br><br><br><br><br><br>
	<table Class="ThinTable" align="left" border="0" cellspacing="0" cellpadding="0">
		<tr><td><br><br>Зачислен в __________________________ класс</td></tr>
		<tr><td><br><br>"____"___________________________________г.</td></tr>
		<tr><td><br><br>_________________________________________</td></tr>
		<tr align="center" valign="top"><td><div align="center" style="font-size:80%">(подпись директора)</div></td></tr>
	</table>
</td></tr>
<tr><td>
<br><br><br><br><br><br>
М.П.
<br><br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Личная карта является документом, хранится в общеобразовательной организации и при переходе обучающегося в другую общеобразовательную организацию выдается его родителям (законным представителям)
</td></tr>
</table> <%
Else
	Dim strMale, strFemale
	strMale = LCase(obLanguage("Common","kMale"))
	strFemale =  LCase(obLanguage("Common","kFemale"))
	If bMale Then strMale="<u>"&strMale&"</u>" Else strFemale="<u>"&strFemale&"</u>"
%>
<table align="right" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td>
	<br><br>
	<div align="center"><b style="font-size:120%">ОБЩИЕ СВЕДЕНИЯ ОБ ОБУЧАЮЩЕМСЯ</b></div>
</td></tr>
<tr><td>
	<br><br>
	<table align="center" border="0" cellspacing="0" cellpadding="0" width="90%">
		<tr><td style="border-bottom:1px solid black;"><br>1. <b><%=DB2HTML(strLastName)%>&nbsp;<%=DB2HTML(strFirstName)%>&nbsp;<%=DB2HTML(strMiddleName)%></b></td></tr>
		<tr valign="top"><td><div align="center" style="font-size:80%">(фамилия, имя, отчество)</div></td></tr>
		<tr><td><br>2. <%=obLanguage("Common","kGender")%>: <%=strMale%>, <%=strFemale%> (подчеркнуть)<br>&nbsp;</td></tr>
		<tr><td><br>3. Родился в &nbsp;&nbsp;<%If Not IsDull(strDate) Then%><b><%=Year(strDate)%></b><%Else%>________<%End If%>&nbsp;&nbsp; году в &nbsp;&nbsp;<%If Not IsDull(strDate) Then%><b><%=GetMonthIn( Month(strDate)-1 )%></b><%Else%>_______________________<%End If%>&nbsp;&nbsp; месяце &nbsp;&nbsp;<%If Not IsDull(strDate) Then%><b><%=Day(strDate)%></b><%Else%>________<%End If%>&nbsp;&nbsp; числа<br>&nbsp;</td></tr>
		<tr><td><br>4. Основание: свидетельство о рождении <b><%=DB2HTML(strBirthCert)%></b><br>&nbsp;</td></tr>
		<tr><td><br>5. Фамилия, имя, отчество родителей<br>&nbsp;</td></tr>	<%
		While Not objPar.EOF %>
			<tr><td style="border-bottom:1px solid black;"><br><b><%=DB2HTML(objPar("LASTNAME"))%>&nbsp;<%=DB2HTML(objPar("FIRSTNAME"))%>&nbsp;<%=DB2HTML(objPar("MIDDLENAME"))%></b></td></tr> <%
			objPar.MoveNext
		Wend %>
		<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
		<tr><td><br>6. Где воспитывался (обучался) до поступления в 1 класс<br>&nbsp;</td></tr>
		<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
		<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
		<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
		<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
		<tr><td><br>7. Сведения о переходе обучающегося из одной общеобразовательной организации в другую, выбытии и окончании общеобразовательной организации<br>&nbsp;</td></tr> <%
		If Not objArrive.EOF Then
			bFirst = True
			While Not objArrive.EOF
				strAriveFrom = ""
				If Not IsDull(objArrive("EOID")) Then
					If CStr(objArrive("EOID")) <> "-1" Then
						strAriveFrom = objNSNET.GetEOFullName(objArrive("EOID"))
					End If
				End If%>
				<tr><td style="border-bottom:1px solid black;"><br><b><%
				If bFirst Then%>
					Прибытие:&nbsp;<%
					bFirst = False
				End If%>
				<%=Date2Str(objArrive("DOCDATE"))%>&nbsp;№ приказа: <%=DB2HTML(objArrive("DOCNUMBER"))%></b></td></tr>
				<tr><td style="border-bottom:1px solid black;"><br><b><%If Not IsDull(strAriveFrom) Then%>откуда: <%=DB2HTML(strAriveFrom)%><%Else%>&nbsp;<%End If%></b></td></tr> <%
				objArrive.MoveNext
			Wend
		Else %>
			<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
			<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr> <%
		End If
		If Not objDepart.EOF Then
			bFirst = True
			While Not objDepart.EOF
				strDepartTo = ""
				If Not IsDull(objDepart("EOID")) Then
					If CStr(objDepart("EOID")) <> "-1" Then
						strDepartTo = objNSNET.GetEOFullName(objDepart("EOID"))
					End If
				End If%>
				<tr><td style="border-bottom:1px solid black;"><br><b><%
				If bFirst Then%>
					Выбытие:&nbsp;<%
					bFirst = False
				End If%>
				<%=Date2Str(objDepart("DOCDATE"))%>&nbsp;№ приказа: <%=DB2HTML(objDepart("DOCNUMBER"))%></b></td></tr>
				<tr><td style="border-bottom:1px solid black;"><br><b><%If Not IsDull(strDepartTo) Then%>куда: <%=DB2HTML(strDepartTo)%><%Else%>&nbsp;<%End If%></b></td></tr> <%
				objDepart.MoveNext
			Wend
		Else %>
			<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
			<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr> <%
		End If %>
		<tr><td><br>8. Сведения о переходе на получение образования в семье, в порядке экстерната<br>&nbsp;</td></tr>
		<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
		<tr><td style="border-bottom:1px solid black;"><br>&nbsp;</td></tr>
		<tr><td><br>9. Домашний адрес обучающегося<br>&nbsp;</td></tr>
		<tr><td style="border-bottom:1px solid black;"><b><%
			If Not objAddress.EOF Then
				Response.Write objAddress("ADDRESS") & ",&nbsp;"
				If Not IsDull(objAddress("DISTRICT")) Then Response.Write DB2HTML(objAddress("DISTRICT")) & " " & obLanguage("Common","kDistrict_")& ",&nbsp;"
				Response.Write DB2HTML(objAddress("CITYNAME")) & ",&nbsp;" 
				Response.Write DB2HTML(objAddress("STATEPROVINCENAME")) & ",&nbsp;" & DB2HTML(objAddress("COUNTRYNAME"))
			Else %>
			&nbsp; <%
			End If %></b></td></tr>
	</table>
</td></tr>
</table> <%
End If
End Sub
%>

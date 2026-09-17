<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SaveInfoQAdd.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strUserPosition, strWorkPhone, strUserRole
Dim arrUserPosition, arrWorkPhone, arrUserRole

Sub specialReadState
	If Not HasUserRight(arEMUsersEdit) Then GenerateError obLanguage("Common","kErrPageAccess")
	bEMQadd = true
	strSave = "/asp/EDUC_MANAGER/SaveQAdd.asp"
	strUserRole = Request("submit_UR")
	strUserPosition = Request("submit_POS")
	strWorkPhone = Request("submit_WPH")
End Sub

Sub specialMain
	arrUserRole = Split(strUserRole, Chr(1))
	arrUserPosition = Split(strUserPosition, Chr(1))
	arrWorkPhone = Split(strWorkPhone, Chr(1))
End Sub

Sub specialDraw
	Dim strTmpDisplayName
	Dim rsSimilar
	Dim nRadioCnt
	Dim bMayUse
	
	strUserRole = arrUserRole(i)
	strUserPosition = arrUserPosition(i)
	If UBound(arrWorkPhone)>0 Then strWorkPhone = arrWorkPhone(i)
	nRadioCnt = 0
	arrUsers(Ubound(arrUsers)) = Array(strLoginName, strPassword, strLastName, strFirstName, strMiddleName, dtBirthday, "М", strEMail, strPCM, "", strUserRole, strPWDExpired, strUserPosition, strWorkPhone)

	strTmpDisplayName = strLastName
	If strFirstName <> "" Then 
		strTmpDisplayName = strTmpDisplayName & " " & strFirstName
		If strMiddleName <> "" Then strTmpDisplayName = strTmpDisplayName & " " & strMiddleName
	End If
	Response.Write "<hr>"%>
	<div class="alert alert-info" role="alert">
		<%=obLanguage("Common","kUser") & ": <b>" & DB2HTML(strTmpDisplayName) & "</b>"%>
	</div><%
	
	If objNSNET.DoesEMLoginNameAlreadyExist(0, strEMID, strLoginName) Then
		bSave = False

		Call DrawInfo(obLanguage("SetupSchoolUI","kErrorThisUserName") & "'" & DB2HTML(strLoginName) & "' " & obLanguage("SetupSchoolUI","kErrorIsExist"), False)%>

		<div class="radio">
			<label>
				<input type="radio" name="USE<%=i%>" value="0" checked OnClick="dataChanged();"> <%=obLanguage("SetupSchoolUI","kIgnoreRecord")%>
			</label>
		</div><%

		nRadioCnt = nRadioCnt + 2
	End If

	Redim Preserve arrUsers(1 + Ubound(arrUsers))
	i = i + 1 ' это i имеет очень большое значение (т.е. очень важно) - это порядковый номер вновь вводимого пользователя
End Sub%>
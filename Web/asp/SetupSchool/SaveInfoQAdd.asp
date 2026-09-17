
<% ' © 2007-2015 IRTech. All rights reserved.

Dim strFirstName, strLastName, strMiddleName, strLoginName, strPCM, strEMail, strPassword, strBirthday, strGender, strDisplayName, strPWDExpired
Dim arrFirstName, arrLastName, arrMiddleName, arrLoginName, arrPCM, arrEMail, arrPassword, arrBirthday, arrGender, arrPWDExpired
Dim dtBirthday, bEMQadd
Dim strSave
Dim strFIO_ForLoginExists
Dim strUsersRoles
Dim objHelper

Dim rsSimilar, arrUsers, qa_index, i, bSave, strBackPage
Dim nCurrRole

Sub ReadState
	bEMQadd				= false
	strSave				= "/asp/SetupSchool/SaveQAdd.asp"
	strLastName			= Request("submit_LN")
	strFirstName		= Request("submit_FN")
	strMiddleName		= Request("submit_MN")
	strBirthday			= Request("submit_BDT")
	strGender			= Request("submit_GN")
	strEMail			= Request("submit_EM")
	strLoginName		= Request("submit_LON")
	strPassword			= Request("submit_PW")
	strPCM				= Request("submit_PCM")
	strPWDExpired		= GetSafeStr(Request("submit_ChangePW"), -1, "0")
	strBackPage			= obTokenMgr.GetData(strToken,stBackPage)

	nCurrRole = 0
	Call specialReadState()
End Sub

Sub Main
	Set objHelper	= comHelper.AspHelper
	arrLastName		= Split(strLastName, Chr(1))
	arrFirstName	= Split(strFirstName, Chr(1))
	arrMiddleName	= Split(strMiddleName, Chr(1))
	arrLoginName	= Split(strLoginName, Chr(1))
	arrPCM			= Split(strPCM, Chr(1))
	arrEMail		= Split(strEMail, Chr(1))
	arrPassword		= Split(strPassword, Chr(1))
	arrBirthday		= Split(strBirthday, Chr(1))
	arrGender		= Split(strGender, Chr(1))
	arrPWDExpired	= Split(strPWDExpired, Chr(1))
	bSave			= True

	Call specialMain()
End Sub

Sub specialMain
End Sub

Sub onDrawPage
	Redim arrUsers(0)

	Call ButtonSave("ok_check_db('MainForm','')", obLanguage("Common","kSave"))%>

	<FORM NAME="MainForm" METHOD="POST" ACTION="<%=strSave%>"><%
		rw WriteObligatoryTags()
		rw WriteHiddenTags(Array("BackPage", strBackPage, "Role", nCurrRole))
		%>

		<div class="row">
			<div class="col-md-8"><%
				qa_index = 0 : i = 0 ' qa_index и i - не одно и то же,
			'	например, для Ученика - инфо о его Родителях, задаваемых вместе с Учеником, и инфо о самом Ученике - проходят с одним qa_index,
			'	но i - разный для Ученика и для каждого из Родителей (i - для каждого нового пользователя разный)
				For Each strLastName In arrLastName
					strLastName = arrLastName(qa_index)
					If UBound(arrFirstName) > 0 Then strFirstName = arrFirstName(qa_index)
					If UBound(arrMiddleName) > 0 Then strMiddleName = arrMiddleName(qa_index)
					If Ubound(arrLoginName) <> -1 Then strLoginName = arrLoginName(qa_index) Else strLoginName = CStr(strLastName)
					If Ubound(arrPCM) <> -1 Then strPCM = arrPCM(qa_index) Else strPCM = ""

					If UBound(arrBirthday) >= 0 Then
						' здесь, в отличие от остальных полей, знак ">=0";
						' это связано с тем, что для "=0" надо также вызывать dtBirthday=GetSafeDate(...),
						' а остальные поля (например, strFirstName) уже содержат правильные данные,
						' присвоенные в ReadState (для даты в ReadState ничего присвоить нельзя,
						' т.к. там пока не известно - содержится там одно значение или множество).
						If IsDull(arrBirthday(qa_index)) Then dtBirthday = Empty Else dtBirthday = GetSafeDate(arrBirthday(qa_index), Null)
					End If

					If UBound(arrEmail) <> -1 Then strEMail = arrEMail(qa_index) Else strEMail = ""
					If UBound(arrPassword) <> -1 Then strPassword = arrPassword(qa_index) Else strPassword = objHelper.MD5(CStr(strLastName))
					If UBound(arrGender) <> -1 Then strGender = arrGender(qa_index) Else strGender = null
					If UBound(arrPWDExpired) > 0 Then strPWDExpired = GetSafeStr(arrPWDExpired(qa_index), -1, "0")
					Call specialDraw()
					qa_index = qa_index + 1
				Next

				If Not IsEmpty(strFIO_ForLoginExists) Then
					rw "<hr>"%>
					<div class="alert alert-warning" role="alert">
						<%=Replace(obLanguage("SetupSchool","kChangeUserNames"), "s_UsersRoles", strUsersRoles) & " <b>" & DB2HTML_BR(strFIO_ForLoginExists) & "</b>"%>
					</div><%
				End If%>
			</div>
		</div><%

		Call obTokenMgr.SetData(strToken,"arrUsers", arrUsers)%>
		<input type="hidden" name="nItems" value="<%=i-1%>">
	</FORM>

	<%If bSave Then	%>
		<script>
			$(document).trigger('showProcessing');
			DoSubmit(document.MainForm,'');
		</script>
	<%Else%>
		<FORM NAME="Back" METHOD="POST" ACTION="<%=strBackPage%>" >
			<%=WriteObligatoryTags()%>
		</FORM><%
	End If
End Sub

Function DrawUser(kUser, strLoginName, strPassword, strDisplayName, strLastName, strFirstName, strMiddleName, strGender, strEMail, strPCM, dtBirthday, role, roleType, nPWDExpired, bCheckOtherSchools, bCheckLoginName )
	Dim strTmpDisplayName
	Dim rsSimilar
	Dim nRadioCnt
	Dim bMayUse
	Dim bLoginNameAlreadyExist

	nRadioCnt = 0
	arrUsers(Ubound(arrUsers)) = Array(strLoginName, strPassword, strDisplayName, strLastName, strFirstName, strMiddleName, strGender, strEMail, strPCM, dtBirthday, "", role, nPWDExpired)

	strTmpDisplayName = strLastName
	If strFirstName <> "" Then
		strTmpDisplayName = strTmpDisplayName & " " & strFirstName
		If strMiddleName <> "" Then strTmpDisplayName = strTmpDisplayName & " " & strMiddleName
	End If
	rw "<hr>"%>

	<div class="alert alert-info" role="alert">
		<%= kUser & ": <b>" & DB2HTML(strTmpDisplayName) & "</b>"%>
	</div><%

	' Здесь dtBirthday уже либо Empty, либо дата
	Set rsSimilar = objNSNET.GetSimilarUsers(strSchoolID, roleType, UCase(strLastName), UCase(strFirstName), UCase(strMiddleName), IIf(IsDull(dtBirthday), Empty, dtBirthday), strGender, -1)
	If rsSimilar.EOF Then
		If objNSNET.DoesLoginNameAlreadyExist(0, strCurrYearID, strLoginName) Then
			If strPCM <> "" Then
				bSave = False

				Call DrawInfo(obLanguage("SetupSchoolUI","kErrorThisUserName") & "'" & DB2HTML(strLoginName) & "' " & obLanguage("SetupSchoolUI","kErrorIsExist"), False)%>

				<div class="radio">
					<label>
						<input type="radio" name="USE<%=i%>" value="-1" OnClick="dataChanged();"><%=obLanguage("SetupSchoolUI","kGenRecord")%>
					</label>
				</div>
				<div class="radio">
					<label>
						<input type="radio" name="USE<%=i%>" value="0" checked OnClick="dataChanged();"><%=obLanguage("SetupSchoolUI","kIgnoreRecord")%>
					</label>
				</div><%

				nRadioCnt = nRadioCnt + 2
			Else ' student in DOU%>
				<input type="hidden" name="USE<%=i%>" value="-1"><%
			End If
		End If
	Else
		bSave = False

		Call DrawInfo(obLanguage("SetupSchoolUI","kDuplicateFIO_1") & IIF(roleType <> rlStudent And roleType <> rlParent, obLanguage("SetupSchoolUI","kAmongDismissed"), ""), False)

		While Not rsSimilar.EOF
			bMayUse = True

			If bMayUse Then%>
				<div class="radio">
					<label>
						<input type="radio" name="USE<%=i%>" value="<%=rsSimilar("USERID")%>" OnClick="dataChanged();"><%=obLanguage("SetupSchoolUI","kUseRecord")%>&nbsp;<b><%=DB2HTML(rsSimilar("NICKNAME")) & "</b> - " & LCase(obLanguage("Common","kGender")) & ": " & rsSimilar("GENDER")%>
						<%=IIF(IsDull(rsSimilar("BIRTHDATE")), "", " - "& LCase(obLanguage("Common","kBDate")) &": "&Date2Str(rsSimilar("BIRTHDATE")) )%>
					</label>
				</div><%

				nRadioCnt = nRadioCnt + 1
			End IF

			rsSimilar.MoveNext
		WEnd%>
		<div class="radio">
			<label>
				<input type="radio" name="USE<%=i%>" value="-1" checked OnClick="dataChanged();"> <%=obLanguage("SetupSchoolUI","kCreateRecord")%>
			</label>
		</div>
		<div class="radio">
			<label>
				<input type="radio" name="USE<%=i%>" value="0" OnClick="dataChanged();"> <%=obLanguage("SetupSchoolUI","kIgnoreRecord")%>
			</label>
		</div><%

		nRadioCnt = nRadioCnt + 2
	End If

	rsSimilar.Close
	Set rsSimilar = Nothing
	Redim Preserve arrUsers(1+Ubound(arrUsers))

	If bCheckOtherSchools Then
		Call CheckOtherSchools(nRadioCnt, roleType, strLastName, strFirstName, strMiddleName, strGender)
	End If

'	i=i+1 ' это i имеет очень большое значение (т.е. очень важно) - это порядковый номер вновь вводимого пользователя
'	Перенесено в CheckOtherSchools. CheckOtherSchools - сейчас всегда вызывается либо из DrawUser, либо после него,
'	i - относится к одному и тому же пользователю и в DrawUser, и в CheckOtherSchools.
'	Если что-то поменяется в этой логике, то тогда надо аккуратно отследить i!

	If bCheckLoginName Then
		bLoginNameAlreadyExist = objNSNET.DoesLoginNameAlreadyExist2(strLoginName)
		If bLoginNameAlreadyExist Then
			bSave = False
			strFIO_ForLoginExists = strFIO_ForLoginExists & strLastName & " " & strFirstName & " " & strMiddleName & vbCrLf
			Select Case roleType
			Case rlStudent
				strUsersRoles = obLanguage("SetupSchool","kStudents_b")
			Case rlParent
				strUsersRoles = obLanguage("SetupSchool","kParents_b")
			Case Else
				strUsersRoles = obLanguage("SetupSchool","kStaffs_b")
			End Select
		End If
	End If

	DrawUser = nRadioCnt
End Function

Sub CheckOtherSchools(nRadioCnt, roleType, strLastName, strFirstName, strMiddleName, strGender)
	Dim rsSimilar, strTmpDisplayName
	Dim bMaySelectExistsing

	Set rsSimilar = objNSNET.GetSimilarUsersFromOtherSchools(strSchoolID, roleType, UCase(strLastName), UCase(strFirstName), UCase(strMiddleName), strGender, 0)
	If Not rsSimilar.EOF Then
		bSave = False
		If nRadioCnt = 0 Then%>
			<div class="radio">
				<label>
					<input type="radio" name="USE<%=i%>" value="-1" checked OnClick="dataChanged();"> <%=obLanguage("SetupSchoolUI","kCreateRecord")%>
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="USE<%=i%>" value="0" OnClick="dataChanged();"> <%=obLanguage("SetupSchoolUI","kIgnoreRecord")%>
				</label>
			</div><%

			nRadioCnt = nRadioCnt + 2
		End If

		bMaySelectExistsing = (roleType = rlParent)

		rw "<br><font color=""red"">" & obLanguage("SetupSchoolUI","kDuplicateFIOInOtherSchools_1") & ":</font><br>"
		While Not rsSimilar.EOF
			strTmpDisplayName = rsSimilar("LASTNAME")
			If Not IsDull(rsSimilar("FIRSTNAME")) Then
				strTmpDisplayName = strTmpDisplayName & " " & rsSimilar("FIRSTNAME")
			End If

			If Not IsDull(rsSimilar("MIDDLENAME")) Then
				strTmpDisplayName = strTmpDisplayName & " " & rsSimilar("MIDDLENAME")
			End If

			If bMaySelectExistsing Then%>
				<div class="radio">
					<label>
						<input type="radio" name="USE<%=i%>" value="<%=rsSimilar("USERID")%>" OnClick="dataChanged();"><%=obLanguage("SetupSchoolUI","kUseRecord")%>&nbsp;<%
			End If

			rw "<b>" & DB2HTML(strTmpDisplayName) & "</b> - " & LCase(obLanguage("Common","kGender")) & ": " & DB2HTML(rsSimilar("GENDER"))
			If Not IsDull(rsSimilar("BIRTHDATE")) Then rw " - "& LCase(obLanguage("Common","kBDate")) & ": " & Date2Str(rsSimilar("BIRTHDATE"))
			rw " - " & LCase(obLanguage("Common","kSchool",strFunctionalityType)) & ": " & DB2HTML(rsSimilar("SCHOOLNAME"))
			
			If roleType = rlStudent Then
				If IsDull(rsSimilar("CLASSNAME")) Then
					rw " - " & obLanguage("SetupSchoolUI","kClassNotAssigned",strFunctionalityType)
				Else
					rw " - " & LCase(obLanguage("Common","kClass",strFunctionalityType)) & ": " & DB2HTML(rsSimilar("CLASSNAME"))
				End If
			End If

			If bMaySelectExistsing Then%>
					</label>
				</div><%
				nRadioCnt = nRadioCnt + 1
			Else
				rw "<br>"
			End If

			rsSimilar.MoveNext
		WEnd
	End If

	If nRadioCnt = 0 Then rw obLanguage("SetupSchoolUI","kAddRecord")

	i = i + 1 ' это i имеет очень большое значение (т.е. очень важно) - это порядковый номер вновь вводимого пользователя
End Sub%>
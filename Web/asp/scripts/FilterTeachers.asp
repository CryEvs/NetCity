<% ' © 2007-2015 IRTech. All rights reserved.
Dim strTeacherID, objTeachersRs, bTeachersIsEmpty

Sub InitTeachers( bAll, bCanSelectAll )
	Call InitTeachersEx(bAll, bCanSelectAll, True)
End Sub

' bAllYearTeachers:
' true - все учителя, связанные с учебным годом
' false - все учителя, связанные с учебным годом и не уволенные
Sub InitTeachersEx(bAll, bCanSelectAll, bAllYearTeachers)
	Dim objRs
	If bAll Then
		If IsDull( Request("TID") ) Then
			strTeacherID = GetSafeID(obTokenMgr.GetData(strToken,stCurrTeacher), "0")
		Else
			strTeacherID = GetSafeID( Request("TID"), "0") 
		End If
		Set objTeachersRs = objNSNET.GetTeacherListEx(strCurrYearID, bAllYearTeachers)
		bTeachersIsEmpty = objTeachersRs.EOF
		If bTeachersIsEmpty Then strTeacherID = "0": Exit Sub
		If bCanSelectAll Then
			If strTeacherID<>"-1" Then
				If not objTeachersRs.ExistsByField("TEACHERID", strTeacherID) Then strTeacherID = "-1"
			End If
		Else
			If not objTeachersRs.ExistsByField("TEACHERID", strTeacherID) Then strTeacherID = objTeachersRs("TEACHERID")
		End If
	Else
'сотрудник может не преподавать в текущем году ни один из предметов и не быть кл.руководителем
		Set objRs = objNSNET.GetClassListForTeacherAndChief_IUP(strUserID, strCurrYearID)
		If objRs.EOF Then
			strTeacherID = "0"
		Else
			strTeacherID = strUserID
		End If
	End If
End Sub

Sub InitTeachersForMainTeacherAndInterval(BDate, EDate)
	' Здесь список запрашивается именно для strUserID, а не для выбранного strTeacherID! Это исп-ся для права "только для своего класса или предмента"
	Set objTeachersRs = objNSNET.GetTeacherListForMainTeacherAndInterval(strCurrYearID, strUserID, BDate, EDate )
	If IsDull( Request("TID") ) Then
		strTeacherID = GetSafeID(obTokenMgr.GetData(strToken,stCurrTeacher), "0")
	Else
		strTeacherID = GetSafeID( Request("TID"), "0" )
	End If
	If strTeacherID <> strUserID Then
		If not objTeachersRs.ExistsByField("TEACHERID", strTeacherID) Then strTeacherID = strUserID
	End If
End Sub

Sub DrawTeachers( theStrForm, bAll, bCanSelectAll )
	If bAll Then 
		If bTeachersIsEmpty Then
			DrawInfo obLanguage("Filter","kNoTeachersGB",strFunctionalityType), False
			bExit = True
			Exit Sub
		End If
		DrawFilterRow theStrForm, obLanguage("Common","kTeacher",strFunctionalityType), "TID", objTeachersRs, "TEACHERID", "NICKNAME", strTeacherID, bCanSelectAll
	Else
		If strTeacherID = "0" Then
			DrawInfo obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType), False
			bExit = True
			Exit Sub
		End If
			
		DrawTitleRow obLanguage("Common","kTeacher",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID)
		%><input type="hidden" NAME="TID" value="<%=strTeacherID%>"><%
	End If
End Sub

Sub DrawClassChiefs( theStrForm, bAll )
	If bAll Then 
		If bTeachersIsEmpty Then
			DrawInfo obLanguage("Filter","kNoTeachersGB",strFunctionalityType), False
			bExit = True
			Exit Sub
		End If 
		DrawFilterRow theStrForm, obLanguage("Common","kClassChief",strFunctionalityType), "TID", objTeachersRs, "TEACHERID", "NICKNAME", strTeacherID, bAll 
	Else
		If strTeacherID = "0" Then
			DrawInfo obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType), False
			bExit = True
			Exit Sub
		End If
		%><input type="hidden" NAME="TID" value="<%=strTeacherID%>"><%
	End If
End Sub

Sub WriteTeacher
	Call obTokenMgr.SetData(strToken, stCurrTeacher, strTeacherID)
End Sub

%>

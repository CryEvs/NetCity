<% ' © 2007-2015 IRTech. All rights reserved.
Dim objClasses_IUP_rs

Dim strIupGrade
Dim bIsIupGrade
Dim strClassID_IUP

Sub InitYearClasses_IUP
	Call InitYearClasses_IUP_Ex(False)
End Sub

' bUseIUP - надо ли для ИУП брать сведения из Индивидуального учебного плана, а не только из реальных классов
Sub InitYearClasses_IUP_Ex(bUseIUP)
	Dim nSafeId, arrRaw
	strClassID_IUP = GetSafeIupClassId("PCLID_IUP", stCurrClass_IUP)
	If strClassID_IUP = "-1" Then strClassID_IUP = "0"
	If strClassID_IUP <> "0" Then
		Call InitIUPClassID(strClassID_IUP)
	End If

	Set objClasses_IUP_rs = objNSNET.GetYearClasses_IUP(strCurrYearID, bUseIUP)
	If objClasses_IUP_rs.EOF Then strClassID_IUP = "0" : Exit Sub

	If strClassID_IUP <> "0" Then Call GetSafeYearClassCommon_IUP(bUseIUP)

	If strClassID_IUP = "0" Then
		strClassID_IUP = objClasses_IUP_rs("ID")
		Call InitIUPClassID(strClassID_IUP)
	End If
End Sub

Function GetSafeIupClassId(strRequestKey, strTokenKey)
	Dim strRawId, strClassID
	GetSafeIupClassId = ""
	strRawId = GetSafeParam(strRequestKey, strTokenKey, "")
	If Not IsDull(strRawId) Then 
		GetSafeIupClassId = strRawId
		Exit Function
	End If
	strClassID = obTokenMgr.GetData( strToken, stCurrClass)
	If IsDull(strClassID) Then GetSafeIupClassId = "0" : Exit Function
	GetSafeIupClassId = MakeIupClassId(strClassID, Null, False)
End Function

' bUseIUP - надо ли для ИУП брать сведения из Индивидуального учебного плана, а не только из реальных классов
Sub GetSafeYearClassCommon_IUP(bUseIUP)
	If bIsIupGrade Then
		strIupGrade = objNSNET.GetSafeYearIupGrade(strCurrYearID, strIupGrade, bUseIUP)
		If strIupGrade = -1 Then strClassID_IUP = "0"
	Else
		strClassID = objNSNET.GetSafeYearClassID(strCurrYearID, strClassID)
		If strClassID = "0" Then strClassID_IUP = "0"
	End If
End Sub

Sub WriteClass_IUP()
	Dim nIUPClassID
	Call obTokenMgr.SetData(strToken,stCurrClass_IUP, strClassID_IUP)
	If Not IsDull(strClassID) And strClassID <> "0" Then
		WriteClass
	ElseIf bExistsIupClasses And bIsIupGrade And strClassID_IUP <> "0" And strClassID_IUP <> "-1" Then
		nIUPClassID = objNSNET.GetFirstIUPClassForGrade(strCurrYearID, strIupGrade)
		If nIUPClassID <> 0 Then
			Call obTokenMgr.SetData(strToken, stCurrClass, nIUPClassID)
		End If
	End If
End Sub

Sub WriteClass_IUP_Format()
	Dim strTmp, objTmpClass
	If strClassID <> "0" And strClassID <> "-1" Then
		' Для плавного перетекания между старым представлением класса - только в виде ид. - в новое совмещённое с иуповским представление.
		Set objTmpClass = objNSNET.GetClassInfo(strClassID)
		If Not objTmpClass.EOF Then
			If IsDull(objTmpClass("IUP")) Then
				strTmp = strClassID & "_0"
			Else
				strTmp = GetSafeLng(objTmpClass("GRADE"), Null) & "_1"
			End If
			Call obTokenMgr.SetData(strToken, stCurrClass_IUP, strTmp)
		End If
	End If
End Sub

Sub CheckIsClassChief_IUP()
	If bIsIupGrade Then
		bIsClassChief = objNSNET.IsClassChief_IUP(strCurrYearId, strIupGrade, strUserId)
	Else
		bIsClassChief = objNSNET.IsClassChief(strClassID, strUserId)
	End If
End Sub

Sub InitIUPClassID(rawId)
	Call ParseIupClassId(rawId, strClassID, strIupGrade, bIsIupGrade)
End Sub

Sub ParseIupClassId(rawId, ByRef strClassId, ByRef strIupGrade, ByRef bIsGrade)
	Dim arrRaw
	arrRaw = Split(rawId, "_")
	bIsGrade = CBool(arrRaw(1))
	If bIsGrade Then
		strIupGrade = arrRaw(0)
		strClassId = Empty
	Else
		strClassId = arrRaw(0)
		strIupGrade = Empty
	End If
End Sub

Function MakeIupClassId(classId, grade, bisIup)
	If bisIup Then
		MakeIupClassId = grade & "_1"
	Else
		MakeIupClassId = classId & "_0"
	End If
End Function

Function GetIupClassName(strClass, bIsIup)
	If bIsIup Then 
		GetIupClassName = strClass & " *"
	Else
		GetIupClassName = objNSNET.GetClassName(strClass)
	End If
End Function

Function BeQuoted(str)
	BeQuoted = "'" & str & "' "
end Function

Sub DrawYearClasses_IUP(theStrForm, bAll, strEmptyMsg)
	If strClassID_IUP = "0" Then
		DrawInfo strEmptyMsg, False
		bExit = True : Exit Sub
	End If

	DrawFilterRow theStrForm, filterClasses, "PCLID_IUP", objClasses_IUP_rs, "ID", "NAME", strClassID_IUP, bAll
End Sub

Sub InitTeacherClasses_IUP(ByVal bAllowAll)
	strClassID_IUP = GetSafeIupClassId("PCLID_IUP", stCurrClass_IUP)
	If Not bAllowAll And (strClassID_IUP = "-1") Then strClassID_IUP = "0"
	If strTeacherID = "-1" Then
		Set objClasses_IUP_rs = objNSNET.GetYearClasses_IUP(strCurrYearID, False)
	Else
		Set objClasses_IUP_rs = objNSNET.GetClassListForTeacherAndChief_IUP(strTeacherID, strCurrYearID)
	End If
	If objClasses_IUP_rs.EOF Then strClassID_IUP = "0" :Exit Sub
	If strClassID_IUP = "-1" Then Exit Sub

	If strClassID_IUP <> "0" Then
		If strTeacherID = "-1" Then
			Call GetSafeYearClassCommon_IUP(False)
		Else
			strClassID_IUP = GetSafeClassIDOnTeacherChange_Common( objClasses_IUP_rs, strClassID_IUP, "ID" )
			If Not bAllowAll And (strClassID_IUP = "-1") Then strClassID_IUP = "0"
			If strClassID_IUP <> "0" Then Call InitIUPClassID(strClassID_IUP)
		End If
	End If
	If strClassID_IUP = "0" Then
		strClassID_IUP = objClasses_IUP_rs("ID")
		Call InitIUPClassID(objClasses_IUP_rs("ID"))
	End If
End Sub

Sub InitYearStudentClasses_IUP(theStudentID, bExcludeLastClasses)
	Dim classId, grade
	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "0")

	Set objClasses_IUP_rs = objNSNET.GetClassesListForYearStudent_IUP(strCurrYearID, theStudentID, bExcludeLastClasses)
	If objClasses_IUP_rs.EOF Then strClassID_IUP = "0" : Exit Sub
	If strClassID_IUP = "-1" Then Exit Sub

	If strClassID_IUP = "0" Then 
		strClassID_IUP = GetSafeStr( objClasses_IUP_rs("ID"), -1, "")
	Else
		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade) 
		If bIsIupGrade Then
			If not objClasses_IUP_rs.ExistsByField("ID", BeQuoted(MakeIupClassId(strClassId, grade, bIsIupGrade))) Then 
				strClassID_IUP = GetSafeStr( objClasses_IUP_rs("ID"), -1, "")
			Else
				strClassID_IUP = MakeIupClassId(Null, grade, True)
			End If
		Else
			If not objClasses_IUP_rs.ExistsByField("ID", BeQuoted(MakeIupClassId(strClassId, grade, bIsIupGrade))) Then 
				strClassID_IUP = GetSafeStr( objClasses_IUP_rs("ID"), -1, "")
			Else
				strClassID_IUP = MakeIupClassId(strClassId, Null, False)
			End If
		End If
	End If
	Call InitIUPClassID(strClassID_IUP)
End Sub

Sub InitTeacherSubjectClasses_IUP( bAll, strTeacherID, strSubjectID, dtStart, dtEnd )
	Dim strMainTeacherID

	If bAll Then
		strMainTeacherID = "-1"
	Else
		strMainTeacherID = strUserID
	End If

	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "-1")
	Set objClasses_IUP_rs = objNSNET.GetTeacherSubjectClassList_IUP(strMainTeacherID, strTeacherID, strSubjectID, strCurrYearID, dtStart, dtEnd)
	If objClasses_IUP_rs.EOF Then
		strClassID_IUP = "0"
	Else
		strClassID_IUP = GetSafeClassIDOnTeacherChange_Common(objClasses_IUP_rs, strClassID_IUP, "ID")
	End If

	If strClassID_IUP <> "0" And strClassID_IUP <> "-1" Then
		Call InitIUPClassID(strClassID_IUP)
	End If
End Sub

Sub InitYearClassesAll_IUP( )
	'InitYearClassesAll_IUP ни разу не вызывается
	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "0")
	Set objClasses_IUP_rs = objNSNET.GetYearClasses_IUP(strCurrYearID, False)
	If objClasses_IUP_rs.EOF Then strClassID_IUP = "0" : Exit Sub
	If strClassID_IUP = "-1" Then Exit Sub
	If strClassID_IUP = "0" Then 
		strClassID_IUP = GetSafeStr(objClasses_IUP_rs("ID"), -1, Null)
	Else
		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)		
		If not objClasses_IUP_rs.ExistsByField("ID", BeQuoted(MakeIupClassId(strClassId, grade, bIsIupGrade))) Then 
			strClassID_IUP = "0"
		End if
		If strClassID_IUP = "0" Then strClassID_IUP = GetSafeStr(objClasses_IUP_rs("ID"), -1, Null)
	End If
	Call InitIUPClassID(strClassID_IUP)
End Sub
%>

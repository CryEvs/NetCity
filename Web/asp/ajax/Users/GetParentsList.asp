<!-- #INCLUDE VIRTUAL="/asp/ajax/Users/GetUsers_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bAddSchool
Dim nGRtype, lngGrade

Function hasUserRightsOnPage()
	If HasUserRight(arUsersEditStudents) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arUsersEditStudentsPsyInfo) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = HasUserRight(arShortInfoStudents)
End Function

Function UserListForRole()
	UserListForRole = RoleGroup_Parents
End Function

Sub ReadFilter()
	lngGrade = GetSafeLng(Request("GR"), GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -1 ) )
	if lngGrade >= 0 Then
		strLetter = GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," "))
	Else
		strLetter = " "
	End If
	nGRtype = GetSafeLng(Request("GRtype"),GetSafeLng( obTokenMgr.GetData( strToken, stGRtype ), -3))
	bAddSchool = CLng(strFunctionalityType)=kFuncType_Add

	If bAddSchool Then
		bAllowNotEnrolledGRType = False
		If nGRtype = -2 Then nGRtype = -1
	End If
	
	If nFindType = FilterType_Filter Then
		If nGRtype=-2 Then
			strLetter="kNotEnrolled"
		ElseIf nGRtype=-3 Then
			strLetter=Null : lngGrade = -1
		ElseIf lngGrade>=0 Then
			strLetter=GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," "))
		Else
			strLetter=" "
		End If
	ElseIf lngGrade >= 0 Then
		strLetter=GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," "))
	Else
		strLetter=" "
	End If
End Sub

Sub WriteFilter()
	Call obTokenMgr.SetData(strToken,"ROLEID",rlParent)
	Call obTokenMgr.SetData(strToken,stUsersStudentsGrades, lngGrade)
	Call obTokenMgr.SetData(strToken,stCurrClassLetter, strLetter)
	Call obTokenMgr.SetData(strToken,stGRtype, nGRtype)
End Sub

Function LoadData()
	Dim objParentList

	Select Case nFindType
		Case FilterType_Filter
			If nGRtype=-2 Then strLetter = "kNotEnrolled"
			If nGRtype=-3 Then strLetter = Null
			Set objParentList = objNSNET.GetParentList(strSchoolID, strCurrYearID, strFirstLetter, strLastLetter, strGender, lngGrade, strLetter, False, nPageSize, nCurrPage, pageCount, "")
		Case FilterType_Search
			'TODO. доработать фильтр
			nCurrPage = 0
			pageCount = 1
			Set objParentList = objNSNET.SearchUsers(3, strFio, strCurrYearID, strSchoolID, lngSortOrder)	
		Case Else
			GenerateError "Неверный тип фильтра"
	End Select
	Set LoadData = objParentList
End Function

Function GetData(objUserList)
	Dim properties, columns
	properties = Array("id", "lastname", "firstname", "middlename", "gender", "homephone", "workphone")
	columns = Array("PARENTID", "LASTNAME", "FIRSTNAME", "MIDDLENAME", "GENDER", "HOMEPHONE", "WORKPHONE")
	GetData = comHelper.DataSetAdapterHelper.ToJSON(objUserList, properties, columns, Array("ignoreNullValues"))
End Function
%>
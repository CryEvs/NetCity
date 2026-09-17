<!-- #INCLUDE VIRTUAL="/asp/ajax/Users/GetUsers_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nGRtype, lngGrade
Dim bAddSchool, bPreSchool
Dim dtPayMonth
Dim objStudentList, objInforms
Dim bInform
Dim nInformFilterType

Function hasUserRightsOnPage()
	If HasUserRight(arUsersEditStudents) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arUsersEditStudentsMedInfo) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arUsersEditStudentsPsyInfo) Then hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = HasUserRight(arShortInfoStudents)
End Function

Function UserListForRole()
	UserListForRole = RoleGroup_Students
End Function

Sub ReadFilter()
	lngGrade = GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -5 )
	lngGrade = GetSafeLng(Request("GR"), GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -1 ) )
	nGRtype = GetSafeLng(Request("GRtype"),GetSafeLng( obTokenMgr.GetData( strToken, stGRtype ), -3))

	bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool
	bAddSchool = CLng(strFunctionalityType) = kFuncType_Add
	bInform = (GetSafeStr(Request("Inform"), -1, "") <> "")

	If bAddSchool Then
		If nGRtype = -2 Then nGRtype = -1
	End If

	If nFindType = FilterType_Filter Then
		If nGRtype=-2 Then
			strLetter="kNotEnrolled"
		ElseIf nGRtype=-3 Then
			strLetter = Null
			lngGrade = -1
		ElseIf bPreSchool Then
			strLetter = " "
		ElseIf lngGrade>=0 Then
			strLetter = GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," "))
		Else
			strLetter = " "
		End If
	ElseIf lngGrade>=0 Then
		strLetter = GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," "))
	Else
		strLetter=" "
	End If
End Sub

Sub WriteFilter()
	Call obTokenMgr.SetData(strToken,stUsersStudentsGrades, lngGrade)
	Call obTokenMgr.SetData(strToken,"ROLEID", rlStudent)
	Call obTokenMgr.SetData(strToken,"FROMWHERE", "STUDENTS")
	Call obTokenMgr.SetData(strToken,stCurrClassLetter, strLetter)
	Call obTokenMgr.SetData(strToken,stGRtype, nGRtype)
End Sub

Function UseInformLoadMethod
	UseInformLoadMethod = (nInformFilterType = kInformFilterType_Common Or nInformFilterType = kInformFilterType_PreSchool)
End Function

Function LoadData()
	
	nInformFilterType = 0
	dtPayMonth = Empty
	If bInform Then
		If CLng(strFunctionalityType) = kInformFilterType_Common Then
			nInformFilterType = kInformFilterType_Common
		Else
			nInformFilterType = kInformFilterType_PreSchool
			dtPayMonth = NSNow()
			dtPayMonth = DateAdd("m", -1, dtPayMonth) ' берём прошлый месяц
			dtPayMonth = DateSerial(Year(dtPayMonth), Month(dtPayMonth), 1) ' сдвигаем на начало месяца (именно эта дата определяет месяц для родительской платы)
		End If
	End If

	Select Case nFindType
		Case FilterType_Filter
			If UseInformLoadMethod() Then
				Set objStudentList = objNSNET.GetChildrenListForInforms(strSchoolID, strCurrYearID, strFirstLetter, strLastLetter, strGender, lngGrade, lngSortOrder, strLetter _
					, nPageSize, nCurrPage, pageCount, dtPayMonth)
			Else
				Set objStudentList = objNSNET.GetStudentList(strSchoolID, strCurrYearID, strFirstLetter, strLastLetter, strGender, lngGrade, lngSortOrder, strLetter _
					, False, bAddSchool, nPageSize, nCurrPage, pageCount, 0, "")
			End If
		Case FilterType_Search
			'TODO. доработать фильтр
			nCurrPage = 0
			pageCount = 1
			Set objStudentList = objNSNET.SearchUsers(2, strFio, strCurrYearID, strSchoolID, lngSortOrder)
		Case Else
			GenerateError "Неверный тип фильтра"
	End Select

	Set LoadData = objStudentList
End Function

Function GetData(objUserList)
	Dim properties, columns
	Dim objClassesPropCols

	If bAddSchool Then
		objClassesPropCols = Array("rsClasses", Array("CLASSNAME"))
	Else
		objClassesPropCols = "classname"
	End If

	If UseInformLoadMethod() Then
		properties = Array("id", "nickname", "firstname", "lastname", "middlename", "birthdate", "gender", objClassesPropCols, "homephone", "lastInformDate")
		columns = Array("STUDENTID", "NICKNAME", "FIRSTNAME", "LASTNAME", "MIDDLENAME", "BIRTHDATE", "GENDER", objClassesPropCols, "HOMEPHONE", "LASTINFORMDATE")
	Else
		properties = Array("id", "nickname", "firstname", "lastname", "middlename", "birthdate", "gender", objClassesPropCols, "homephone")
		columns = Array("STUDENTID", "NICKNAME", "FIRSTNAME", "LASTNAME", "MIDDLENAME", "BIRTHDATE", "GENDER", objClassesPropCols, "HOMEPHONE")
	End If
	GetData = comHelper.DataSetAdapterHelper.ToJSON(objUserList, properties, columns, Array("ignoreNullValues"))
End Function

Function AdditionalData()
	If bInform And objStudentList.RecordCount > 0 Then
		Dim nCurrBlankNum, strXML
		Dim strInformFilter, strInformStudentID
		
		Call InitInformsCommonData()
		strInformFilter = MakeInformFilter()
		If CLng(strFunctionalityType) = kInformFilterType_Common Then
			Set objInforms = objNSNET.GetStudentsInform(strCurrYearID, strInformFilter)
		Else
			Set objInforms = objNSNET.GetDOUStudentsInform(strCurrYearID, strInformFilter, dtPayMonth)
		End If
		nCurrBlankNum = nLastBlankNum
		AdditionalData = "["
		While Not objInforms.EOF
			strInformStudentID = GetSafeID(objInforms("USERID"), Null)
			nCurrBlankNum = nCurrBlankNum + 1
			If nInformFilterType = kInformFilterType_PreSchool Then
				strXML = MakePreSchoolInform(objInforms, nCurrBlankNum)
			Else
				strXML = MakeCommonSchoolInform(objInforms, nCurrBlankNum)
			End If
			strXML = DB2Java(strXML)
			AdditionalData = AdditionalData & "{""xml"" : """ & strXML & """, ""studentId"" : " & strInformStudentID & " } ,"
			objInforms.MoveNext
		Wend
		AdditionalData = Left(AdditionalData,Len(AdditionalData)-2) & "]"
	End If
End Function

Function MakeInformFilter()
	Dim strFilter
	Dim strStudentID

	While Not objStudentList.EOF
		strStudentID = objStudentList("STUDENTID")
		strFilter = strFilter & "," & strStudentID
		objStudentList.MoveNext
	WEnd
	objStudentList.MoveFirst

	MakeInformFilter = Mid(strFilter, 2)
End Function
%>

<!-- #INCLUDE FILE="../scripts/FiltersUsers.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim arrUsersFilters
Dim bFullAccessEditing
Dim bExternal
Dim bCanShowUsersLoginNames

Sub ReadState()
	Call ReadCommonUsersFilter(UserListForRole())

	bFullAccessEditing = CBool(GetSafeID(obTokenMgr.GetData(strToken,stShortInfo), "0") = "1")
	bFullAccessEditing = bFullAccessEditing Or (Request("fa") = "1")
	ReadStateSpecial

	bExternal = (GetSafeStr(Request("EXTERNAL"), -1, "") = "1")
	bCanShowUsersLoginNames = CanShowUsersLoginNames()
End Sub

Sub ReadStateSpecial()
End Sub

Sub GetArrUsersFilters()
	Dim strFilter
	ReDim arrUsersFilters(3)
	arrUsersFilters(0) = obLanguage("Common","kSchoolYear")
	arrUsersFilters(1) = obTokenMgr.GetData(strToken, "CurrYearName")
	If strFirstLetter=" " Then strFilter = obLanguage("FilterUsers","kLatin_") Else strFilter = strFirstLetter
	strFilter = strFilter & "-" & strLastLetter
	If nFindType = FilterType_Search Then strFilter = strSearch
	arrUsersFilters(2) = obLanguage("FilterUsers","kFilter")
	arrUsersFilters(3) = strFilter
	If strGender <> "" Then
		ReDim Preserve arrUsersFilters(5)
		arrUsersFilters(4) = obLanguage("Common","kGender")
		arrUsersFilters(5) = strGender
	End If
	GetArrUsersOtherFilters
End Sub

Sub GetArrUsersOtherFilters()
	Dim nSize
	nSize = UBound(arrUsersFilters)
	ReDim Preserve arrUsersFilters(nSize+2)
	arrUsersFilters(nSize+1) = obLanguage("Common","kStudents",strFunctionalityType)
	Select Case lngGrade
	Case 0 : arrUsersFilters(nSize+2) = obLanguage("FilterUsers","kBefStudents")
	Case -1 : arrUsersFilters(nSize+2) = obLanguage("FilterUsers","kAllEnrolled")
	Case -2 : arrUsersFilters(nSize+2) = obLanguage("Filter","kNotEnrolled")
	Case -3 : arrUsersFilters(nSize+2) = obLanguage("Filter","kAllStudents",strFunctionalityType)
	Case 13 :arrUsersFilters(nSize+2) = obLanguage("Common","kGraduated")
	Case Else
		If strLetter = "kNotEnrolled" Then strLetter = ""
		arrUsersFilters(nSize+2) = obLanguage("Common","kClass",strFunctionalityType) & " " & lngGrade & strLetter
	End Select
End Sub

Function CanShowUsersLoginNames()
	If bIsEMForSchool Then
		CanShowUsersLoginNames = False
	Else
		CanShowUsersLoginNames = HasUserRole(rlAdmin) Or HasUserRole(rlPrincipal) Or HasUserRole(rlTeacher) Or HasUserRole(rlSecretary) Or HasUserRole(rlSpecialistStaff)
	End If
End Function
%>

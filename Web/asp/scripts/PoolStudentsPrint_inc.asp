
<% ' © 2007-2013 IRTech. All rights reserved.
Dim arrUsersFilters

Sub ReadState()
	nViewType = GetSafeLng(obTokenMgr.GetData(strToken,"ViewType"), Null)
	bPseudoPool = (GetSafeLng(obTokenMgr.GetData(strToken, stPseudoPool), 0) = 1)

	nPoolCategoryID = -1
	If bPseudoPool Then
		nPoolCategoryID = GetSafeLng(obTokenMgr.GetData(strToken, stPoolCategory), Null)
	Else
		nPoolCategoryID = 1
	End If

	If Not bPseudoPool Then
		nPoolFilter = GetSafeLng(obTokenMgr.GetData(strToken, stPoolFilter), Null)
		strFuncTypeID = GetSafeID(obTokenMgr.GetData(strToken, stFunctionType), Null)
		strPoolSchoolID = GetSafeID(obTokenMgr.GetData(strToken, stPoolSchool), Null)
		strPoolYearID = GetSafeID(obTokenMgr.GetData(strToken, stPoolYear), Null)
		strPoolGrade = GetSafeID(obTokenMgr.GetData(strToken, stPoolGrade), Null)
		strDepReasonID = GetSafeID(obTokenMgr.GetData(strToken, stDepartReason), Null)
		If bIsEducManager Then
			nPoolEMID = obTokenMgr.GetData(strToken, stfilterEmId)
		End If
	End If

	InitInaccessReasons

	strFirstLetter	= GetSafeStr(obTokenMgr.GetData(strToken,stUsersStudentsFirstLetter),1,obLanguage("Common","kFirstLetter"))
	strLastLetter = GetSafeStr(obTokenMgr.GetData(strToken,stUsersStudentsLastLetter),1,obLanguage("Common","kLastLetter"))
	If obLanguage.Compare(strFirstLetter,strLastLetter, obContext.LocalSettings.DefaultLanguage) > 0 Then strLastLetter = strFirstLetter
	strGender = GetSafeStr( obTokenMgr.GetData( strToken, stUsersStudentsGender ), 1,"" )
	If strGender= "A" Then strGender=""

	lngSortOrder = GetSafeLng( obTokenMgr.GetData( strToken, stSortOrder ), 0)
	Server.scriptTimeout=Server.scriptTimeout*10
End Sub

Sub onHead()
End Sub

Function GetSortHeader( strName, lngSortOrder, lngCurrSortOrder )
	GetSortHeader ="<nobr>" & strName & "</nobr>"
End Function
Function ShowAnchor( x, y, strName, z )
	ShowAnchor ="<nobr>" & strName & "</nobr>"
End Function
Function onUnload()
	onUnload = ""
End Function
Function onKeyPress()
	onKeyPress = ""
End Function


Sub GetArrUsersFilters()
	Dim strFilter
	Dim objRS, bAdmin
	Dim n, nGrade
	Dim arr
	Dim i, strInaccReason
	Dim nSize
	Dim strAccessCategory, objPoolCategory

	bAdmin = CLng(strFunctionalityType) = 0
	nSize = 15 '13 '11
	If bAdmin Then nSize = nSize + 2
	If strGender <> "" Then nSize = nSize + 2
	ReDim arrUsersFilters(nSize)

	n = 0
	arrUsersFilters(n) = obLanguage("PoolStudents","kAccessCategory")

	Select Case nViewType
	Case 1 strAccessCategory = IIf(bPseudoPool, obLanguage("PoolStudents","kAccessible"), obLanguage("PoolStudents","kOut"))
	Case 6 strAccessCategory = obLanguage("PoolStudents","kGraduation")
	Case -1 strAccessCategory = obLanguage("PoolStudents","kInaccessible")
	Case Else strAccessCategory = "&nbsp;"
	End Select
	arrUsersFilters(n + 1) = strAccessCategory

	If bPseudoPool Then
		n = n + 2
		arrUsersFilters(n) = obLanguage("PoolStudents","kCategory")
		Set objPoolCategory = objNSNET.GetPoolCategory(nPoolCategoryID)
		If objPoolCategory.EOF Then
			GenerateError obLanguage("Import","kCantGetPoolCategories")
		End If
		arrUsersFilters(n + 1) = GetSafeStr(objPoolCategory("CATEGORYNAME"), -1, "")
	End If

	If Not bPseudoPool Then

		If CLng(strFunctionalityType)<>kFuncType_Add Then
			If nViewType > 0 Then
				n = n + 2
				arrUsersFilters(n) = obLanguage("Common","kStudents",strFunctionalityType)
				arrUsersFilters(n + 1) = IIf(nPoolFilter = 0, obLanguage("PoolStudents","kAccessible"), obLanguage("Common","kAll"))
			End If
		End If

		If bAdmin Then
			n = n + 2
			Set objRS = objNSNET.GetFuctionalityType(strFuncTypeID)
			If objRS.EOF Then GenerateError obLanguage("Common","kInvalidParameter")

			arrUsersFilters(n) = obLanguage("Common","kEOType")
			arrUsersFilters(n + 1) = GetSafeStr(objRS("NAME"), -1, Null)
		End If

		If bIsEducManager Then
			n = n + 2
			arrUsersFilters(n) = obLanguage("Common","kEMName")
			arrUsersFilters(n + 1) = objNSNET.GetEducManagementName(nPoolEMID)
		End If

		n = n + 2
		arrUsersFilters(n) = obLanguage("PoolStudents","kPoolSchool")
		If strPoolSchoolID = "-1" Then
			arrUsersFilters(n + 1) = obLanguage("Common","kAll")
		Else	
			arrUsersFilters(n + 1) = objNSNET.GetEOSchoolName(strPoolSchoolID)
		End If
	
		n = n + 2
		arrUsersFilters(n) = obLanguage("PoolStudents","kPoolYear")
		If strPoolYearID = "-1" Then
			arrUsersFilters(n + 1) = obLanguage("Common","kAll")
		Else
			Set objRS = objNSNET.GetGlobalYears(strPoolYearID)
			If objRS.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
			arrUsersFilters(n + 1) = GetSafeStr(objRS("SCHOOLYEARNAME"), -1, Null)
		End If
	
		n = n + 2
		arrUsersFilters(n) = obLanguage("PoolStudents","kPoolGrades",strFunctionalityType)
		If strPoolGrade = "-1" Then
			arrUsersFilters(n + 1) = obLanguage("Common","kAll")
		Else
			If CLng(strFuncTypeID) = kFuncType_PreSchool Then
				nGrade = CLng(strPoolGrade)
				arr = GetArrGrades(strFuncTypeID,1,0,0)
				If nGrade >= 0 And nGrade <= 8 Then
					arrUsersFilters(n + 1) = arr(1, nGrade)
				End If
			Else
				arrUsersFilters(n + 1) = strPoolGrade
			End If
		End If
	
		If CLng(strFunctionalityType)<>kFuncType_Add Then
			n = n + 2
			arrUsersFilters(n) = obLanguage("PoolStudents","kPoolReason")
			If strDepReasonID = "-1" Then
				arrUsersFilters(n + 1) = obLanguage("Common","kAll")
			Else
				Set objRS = objNSNET.GetUserParamItemInfo(strDepReasonID)
				If objRS.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
				arrUsersFilters(n + 1) = GetSafeStr(objRS("ITEMNAME"), -1, Null)
			End If
		End If

	End If ' If Not bPseudoPool Then
	
	If nViewType = -1 Then
		strInaccReason = ""
		For i = 0 To Ubound(arrInaccReasons,2)
			If arrInaccReasons(0, i) = nInaccReason Then
				strInaccReason = arrInaccReasons(1, i)
				Exit For
			End If
		Next

		n = n + 2
		arrUsersFilters(n) = obLanguage("PoolStudents","kInaccessibilityReason")
		arrUsersFilters(n + 1) = strInaccReason
	End If
	
	n = n + 2
	If strFirstLetter=" " Then
		strFilter = obLanguage("FilterUsers","kLatin_")
	Else
		strFilter = strFirstLetter
	End If
	strFilter = strFilter & "-" & strLastLetter
	arrUsersFilters(n) = obLanguage("FilterUsers","kFilter")
	arrUsersFilters(n + 1) = strFilter

	If strGender <> "" Then
		n = n + 2
		arrUsersFilters(n) = obLanguage("Common","kGender")
		arrUsersFilters(n + 1) = strGender
	End If
End Sub

%>

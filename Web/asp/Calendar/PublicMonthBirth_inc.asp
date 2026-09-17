<% ' © 2007-2013 IRTech. All rights reserved.
Dim strClassID, dtCurrDate, nBirthRoles

Sub ReadState()
	strClassID=GetSafeID(obTokenMgr.GetData( strToken, stCurrClass), -1)
	dtCurrDate = GetSafeDate(obTokenMgr.GetData(strToken, stCurrDate), Null)
	nBirthRoles = GetSafeLng(obTokenMgr.GetData( strToken, stBirthRoles), Null)
	arrMonthBirth = obTokenMgr.GetData(strToken, stMonthBirthdays)
	bIsStaff = GetSafeBool(obTokenMgr.GetData(strToken, stIsStaff), Null)
End Sub

Function GetArrPageTitle()
	Dim strRoles
	Dim arr, n

	n = -1
	If CLng(strCurrYearID)>0 Then
		ReDim arr(1)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kSchoolYear")
		arr(n) = obTokenMgr.GetData(strToken, "CurrYearName")
	End If

	If CLng(strClassID)>0 Or bIsStaff Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kClass", strFunctionalityType)
		
		If CLng(strClassID)>0 Then
			arr(n) = objNSNET.GetClassName(strClassID)
		ElseIf CLng(strClassID)<0 Then ' -1
			arr(n) = obLanguage("Common","kAll")
		' else 0 - undefined
		End If
	End If

	ReDim Preserve arr(n+2)
	n = UBound(arr)
	arr(n-1) = obLanguage("Common","kRoles")
	If nBirthRoles And kBirthRole_Staff Then strRoles = obLanguage("Common","kStaff") & ", "
	If nBirthRoles And kBirthRole_Student Then strRoles = strRoles & obLanguage("Common","kStudent",strFunctionalityType) & ", "
	If nBirthRoles And kBirthRole_Parent Then strRoles = strRoles & obLanguage("Common","kParent") & ", "
	strRoles = Left( strRoles, Len(strRoles) - 2 )
	arr(n) = strRoles

	GetArrPageTitle = arr
End Function

Sub onDrawPage()
	Response.Write GetPageTitleFor(obLanguage("Calendar","kTitleMonthBirth") & ": " & obLanguage.GetMonthName( Month( dtCurrDate ), False ), GetArrPageTitle())
	If Not IsArray( arrMonthBirth ) Then
		Response.Write GetWarning(obLanguage("Calendar","kNoBirthdays"))
	Else
		Call DrawMonthBirth()
	End If
	Response.Write GetPageVer()
End Sub

%>

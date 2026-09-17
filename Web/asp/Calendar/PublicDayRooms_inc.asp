<!-- #INCLUDE VIRTUAL=/asp/Calendar/DayRooms_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim BDate, nRelay
Dim bManyVariants, strStVariantID

Function GetPageTitle()
	GetPageTitle = obLanguage("Calendar","kTitleDaySchedule", strFunctionalityType)
	If Not IsEmpty(BDate) Then GetPageTitle = GetPageTitle & WeekDayName(DatePart("w",BDate, 0, 0 ), False,0 ) & ", " & Date2Str(BDate)
End Function

Function GetArrPageTitle()
	Dim n
	ReDim arr(1)
	arr(0) = obLanguage("Common","kView")
	arr(1) = obLanguage("Calendar","kOnRooms",strFunctionalityType)
	n = 1
	If CLng(strCurrYearID)>0 Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kSchoolYear")
		arr(n) = obTokenMgr.GetData(strToken, "CurrYearName")
	End If
	If CLng(strFunctionalityType)<>kFuncType_PreSchool Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Calendar","kRelay")
		arr(n) = IIf( CLng(nRelay)>0,  nRelay, obLanguage("Common","kAll"))
	End If
	If bManyVariants Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Calendar","kLessonTimeVariant")
		If strStVariantID = "-1" Then
			arr(n) = obLanguage("Common","kAll")
		Else
			arr(n) = objNSNET.GetStVariantName(strStVariantID)
		End If
	End If
	GetArrPageTitle = arr
End function

Sub specialReadState()
	strStVariantID = GetSafeID(obTokenMgr.GetData(strToken, stSTVariantID), "-1")
	bManyVariants = GetSafeBool(obTokenMgr.GetData(strToken, stManySTVariants), True)
End Sub
%>

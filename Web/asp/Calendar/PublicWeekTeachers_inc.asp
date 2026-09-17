<!-- #INCLUDE FILE   ="WeekTeachers_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim nRelay
Dim EDate
Dim nWeekInYear
Dim bManyVariants, strStVariantID

Function GetArrPageTitle()
	Dim n
	ReDim arr(1)
	
	arr(0) = obLanguage("Common","kView")
	arr(1) = obLanguage("Common","kSchedule") & obLanguage("Common","kOfSchool",strFunctionalityType) & obLanguage("Calendar","kForTeachers",strFunctionalityType)
	n = 1
	If CLng(strCurrYearID)>0 Then 
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kSchoolYear")
		arr(n) = obTokenMgr.GetData(strToken, "CurrYearName")
	End If
	If CLng(strFunctionalityType)<>kFuncType_PreSchool Then
		ReDim Preserve arr(n+4)
		n = UBound(arr)
		arr(n-3) = obLanguage("Calendar","kRelay")
		arr(n-2) = IIf( CLng(nRelay)>0, nRelay, obLanguage("Common","kAll"))
	Else
		ReDim Preserve arr(n+2)
		n = UBound(arr)
	End If
	arr(n-1) = obLanguage("Calendar","kDayOfWeek")
	arr(n) = obLanguage("Calendar","kFrom")&" " & WeekDayName(nStartW, True, 0) & " "&obLanguage("Calendar","kTo")&" " & WeekDayName(nEndW, True, 0)

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
End Function

Sub ReadState()
	BDate = obTokenMgr.GetData( strToken, stCurrDate)
	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	nWeekInYear = kStartNWeek + DateDiff("ww", dtYearStart, BDate, 0, 0)

	nStartW = GetSafeLng(obTokenMgr.GetData(strToken,stBeginWeeksDays),1)
	nEndW = GetSafeLng(obTokenMgr.GetData(strToken,stEndWeeksDays),6) 
	startDay= DateAdd( "d", BDate, nStartW-1 )
	endDay = DateAdd( "d", BDate, nEndW-1 )
	nRelay = GetSafeLng(Request("Relay"), GetSafeLng(obTokenMgr.GetData(strToken,stSchoolSession), -1))
	strStVariantID = GetSafeID(obTokenMgr.GetData(strToken, stSTVariantID), "-1")
	bManyVariants = GetSafeBool(obTokenMgr.GetData(strToken, stManySTVariants), True)

	readonly = True
End Sub

Sub Main()
	Call specialMain()
End Sub
%>

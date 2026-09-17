<!-- #INCLUDE VIRTUAL=/asp/scripts/filterWeeks.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterClasses_IUP.asp -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim strTable
Dim EDate
Dim strTermName, strRelay
Dim strClassID_IUP2
Dim strShow, strShow2
Dim nWeekInYear

Function GetPageTitle()
	Dim strTitle
	If Not IsDull(BDate) Then
		strTitle = obLanguage("Calendar","kScheduleOn") & nWeekInYear & obLanguage("Calendar","kWeekFrom")&": "&obLanguage("Calendar","kFrom")&" " & Date2Str(BDate) & " "&obLanguage("Calendar","kTo")&" " & Date2Str(EDate-1)
	Else
		strTitle = obLanguage("Calendar","kScheduleOn") &" " & obLanguage("Calendar","kWeekFrom")
	End If
	GetPageTitle = strTitle
End Function

Sub ReadState()
	strTable = obTokenMgr.GetData(strToken, stTempString)
	If IsDull(strTable) Then GenerateError(obLanguage("Common","kInvalidParameter"))
	strTermName = CStr(obTokenMgr.GetData(strToken, stCalendarTermName))
	strRelay = GetSafeLng(obTokenMgr.GetData(strToken,stSchoolSession), Null)
	If strRelay = -1 Then strRelay = obLanguage("Common","kAll")

	BDate = obTokenMgr.GetData(strToken, stCurrDate)
	EDate = DateAdd("d",7,BDate)
	If Not IsDull(BDate) Then
		Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
		nWeekInYear = kStartNWeek + DateDiff("ww", dtYearStart, BDate, 0, 0)
	End If

	strClassID_IUP = GetSafeStr(obTokenMgr.GetData(strToken, stCurrClass_IUP), -1, "0")
	strClassID_IUP2 = GetSafeStr(obTokenMgr.GetData(strToken, stCalendarClass2), -1, "0") ' "0" - for Student and Parent roles
End Sub

Function GetArrPageTitle()
	Dim strClassId, strIupGrade, bIsGrade
	Dim strClassId2, strIupGrade2, bIsGrade2
	ReDim arr(1)
	Dim n
	arr(0) = obLanguage("Common","kView")
	arr(1) = obLanguage("Calendar","kSchoolSchedule",strFunctionalityType) & obLanguage("Calendar","kForWD")
	n = 1
	If strTermName <> "" Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kPeriod")
		arr(n) = strTermName
	End If
	If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
		ReDim Preserve arr(n+4)
		n = UBound(arr)
		arr(n-3) = obLanguage("Calendar","kRelay")
		arr(n-2) = strRelay
	Else
		ReDim Preserve arr(n+2)
		n = UBound(arr)
	End If
	arr(n-1) = filterClasses

	Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsGrade)
	If strClassID_IUP2 = "0" Then
		If bIsGrade Then 
			arr(n) = strIupGrade & " *"
		Else
			arr(n) = objNSNET.GetClassName(strClassId)
		End If
	Else
		Call ParseIupClassId(strClassID_IUP2, strClassId2, strIupGrade2, bIsGrade2)
		If bIsGrade Then 
			strShow = strIupGrade & " *"
		Else
			strShow = objNSNET.GetClassName(strClassID)
		End If

		If bIsGrade2 Then 
			strShow2 = strIupGrade2 & " *"
		Else
			strShow2 = objNSNET.GetClassName(strClassId2)
		End If
		
		arr(n) = obLanguage("Calendar","kFrom") & " " & strShow & " "&obLanguage("Calendar","kTo") &" " & strShow2
	End If
	GetArrPageTitle = arr
End Function
%>

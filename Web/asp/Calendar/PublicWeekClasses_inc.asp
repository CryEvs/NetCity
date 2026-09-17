<!-- #INCLUDE FILE   ="WeekClasses_inc.asp" -->
<!-- #INCLUDE FILE   ="SchedCommon_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterClasses_IUP.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim strTermName, strTeacherID, strSubjectID, strClassId
Dim EDate, bIsStaff, bAll
Dim nWeekInYear

Function GetArrPageTitle()
	ReDim arr(1)
	Dim n

	arr(0) = obLanguage("Common","kView")
	arr(1) = obLanguage("Common","kSchedule") & obLanguage("Calendar","kForClassOrSubject",strFunctionalityType)
	n = 1
	If CLng(strCurrYearID)>0 Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kSchoolYear")
		arr(n) = obTokenMgr.GetData(strToken, "CurrYearName")
	End If
	If CLng(strFunctionalityType)<>kFuncType_PreSchool Then
		ReDim Preserve arr(n+8)
		n = UBound(arr)
		arr(n-7) = obLanguage("Calendar","kRelay")
		arr(n-6) = IIf( CLng(nRelay)>0,  nRelay, obLanguage("Common","kAll"))  
	Else
		ReDim Preserve arr(n+6)
		n = UBound(arr)
	End If
	arr(n-5) = obLanguage("Common","kTeacher",strFunctionalityType)
	If CLng(strTeacherID)>0 Then
		arr(n-4) = objNSNET.GetUserNickName(strTeacherID)
	Else
		arr(n-4) = obLanguage("Common","kAll")
	End If
	arr(n-3) = obLanguage("Common","kSubject")
	If CLng(strSubjectID)>0 Then
		arr(n-2) = objNSNET.GetSubjectName(strSubjectID)
	Else
		arr(n-2) = obLanguage("Common","kAll")
	End If
	arr(n-1) = obLanguage("Common","kClass", strFunctionalityType) & "\" & obLanguage("SetupSchoolCalendar","kGrade", strFunctionalityType)
	If Not IsDull(strClassID_IUP) And strClassID_IUP <> "-1" Then
		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)
		If bIsIupGrade Then 
			arr(n) = strIupGrade & " *"
		Else
			arr(n) = objNSNET.GetClassName(strClassID)
		End If
	Else
		arr(n) = obLanguage("Common","kAll")
	End If
	GetArrPageTitle = arr
End Function

Sub ReadState()
	bAll = GetSafeBool(obTokenMgr.GetData(strToken, stRightCalendarViewAll), Null)
	arrClassArray = obTokenMgr.GetData(strToken, stCalendar_ClassArray)
	strTermName = CStr(obTokenMgr.GetData(strToken, stCalendarTermName))
	nRelay = GetSafeLng(obTokenMgr.GetData(strToken,stSchoolSession), -1)
	BDate = obTokenMgr.GetData(strToken,stCurrDate)
	EDate = DateAdd("d", 6, BDate)

	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	nWeekInYear = kStartNWeek + DateDiff("ww", dtYearStart, BDate, 0, 0)

	strTeacherID = GetSafeID(obTokenMgr.GetData(strToken,stCurrTeacher),strUserID)
	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "-1")
	strSubjectID = GetSafeID(obTokenMgr.GetData( strToken, stCurrSubject),"-1")
	strTypeOfView = GetSafeStr(obTokenMgr.GetData(strToken, stViewSubjectsType), 20, "1")
End Sub

Sub Main()
	readonly = True
	bIsStaff = True
	Call specialMain()
End Sub
%>

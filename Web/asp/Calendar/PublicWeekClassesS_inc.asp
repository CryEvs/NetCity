<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE FILE="WeekClasses_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterClasses_IUP.asp -->
<!-- #INCLUDE FILE="SchedCommon_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<% ' © 2007-2013 IRTech. All rights reserved.

Dim EDate, strStudentID
Dim strTermName, strClassID, strSubjClassID
Dim nWeekInYear

Function GetPageTitle
	If Not IsEmpty(BDate) Then
		GetPageTitle = obLanguage("Calendar","kScheduleOn") & nWeekInYear & obLanguage("Calendar","kWeekFrom")&": " & obLanguage("Calendar","kFrom")&" " &Date2Str(BDate) &" "&obLanguage("Calendar","kTo")&" "& Date2Str(EDate)
	Else
		GetPageTitle = obLanguage("Calendar","kScheduleOn") &" " & obLanguage("Calendar","kWeekFrom")
	End If
End Function

Function GetArrPageTitle()
	Dim n
	ReDim arr(1)

	arr(0) = obLanguage("Common","kView")
	arr(1) = obLanguage("Common","kSchedule") & obLanguage("Calendar","kForClassOrSubject",strFunctionalityType)
	n = 1

	If CLng(strCurrYearID)>0 Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kSchoolYear")
		arr(n) = obTokenMgr.GetData(strToken, "CurrYearName")
	End If
	If strTermName <> "" Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = obLanguage("Common","kPeriod")
		arr(n) =strTermName
	End If
	ReDim Preserve arr(n+2)
	n = UBound(arr)
	arr(n-1) = obLanguage("Calendar","kRelay")
	arr(n-0) = IIf( CLng(nRelay)>0,  nRelay, obLanguage("Common","kAll"))
	If Not IsDull(strClassID_IUP) Then
		ReDim Preserve arr(n+2)
		n = UBound(arr)
		arr(n-1) = filterClasses

		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)
		If bIsIupGrade Then 
			arr(n) = strIupGrade & " *"
		Else
			arr(n) = objNSNET.GetClassName(strClassId)
		End If
	End If

	ReDim Preserve arr(n+2)
	n = UBound(arr)
	arr(n-1) = obLanguage("Common","kSubject")
	If CLng(strSubjClassID)>0 Then
		arr(n) = objNSNET.GetSubjectClassName(strSubjClassID)
	Else
		arr(n) = obLanguage("Common","kAll")
	End If
	GetArrPageTitle = arr
End Function

Sub ReadState()
	If Not bIsDebug Then On Error Resume Next
	strTermName = CStr(obTokenMgr.GetData(strToken, stCalendarTermName))
	nRelay = GetSafeLng(obTokenMgr.GetData(strToken,stSchoolSession), -1)
	BDate = obTokenMgr.GetData(strToken,stCurrDate)
	EDate = DateAdd("d", 6, BDate)
	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	nWeekInYear = kStartNWeek + DateDiff("ww", dtYearStart, BDate, 0, 0)

	strStudentID = GetSafeID( Request("STID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
	strSubjClassID=GetSafeLng(Request("SCLID"),GetSafeLng(obTokenMgr.GetData(strToken,stCurrSubjClass),-1))
	strTypeOfView = 1
	strClassID_IUP = GetSafeStr(obTokenMgr.GetData( strToken, stCurrClass_IUP), -1, "-1")
End Sub

Sub Main()
	bIsStaff = False
	Call specialMain()
End Sub
%>

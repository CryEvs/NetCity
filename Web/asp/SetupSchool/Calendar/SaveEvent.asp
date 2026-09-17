<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/timeBoxes.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim dtDateStart, dtDateEnd, nEventID, strEventName, nClassID, strPeriodicity
Dim lngHours, lngMinutes, tmStartTime, tmEndTime, strDescription, strBackPage, nViewType
Dim strRoomID
Dim nPortal, nPublic, isPortal
Dim objVacationOverClasses

nEventID = GetSafeLng(Request("EventID"),0)
dtDateStart = Str2Date( GetSafeStr( Request("ADT"), 20, NULL ) )
If IsDull( Request("DDT") ) Then dtDateEnd = Null Else dtDateEnd = Str2Date( Request("DDT") )
strEventName = Trim(GetSafeStr( Request("EventName"), 200, null ))
strPeriodicity = Trim(GetSafeStr( Request("Periodicity"), 1, "" ))
strRoomID = GetSafeID(Request("Room"),"0")

strBackPage = Request("BackPage")
tmStartTime = GetBoxTime( "Start" )
If IsNull( tmStartTime ) Then tmStartTime = dtDateStart Else tmStartTime = GetBoxTime( "Start" ) + dtDateStart

If IsNull( dtDateEnd ) Then dtDateEnd = dtDateStart
tmEndTime = GetBoxTime( "End" )
If IsNull( tmEndTime ) Then tmEndTime = dtDateEnd Else tmEndTime = tmEndTime + dtDateEnd

strDescription = GetSafeStr( Request("Desc"), 2000, "" )

nViewType = GetSafeLng(obTokenMgr.GetData(strToken, "stEventsMonthViewType"), 0)
If nViewType = kHoliday Then
	' check class meetings for Holiday dates
	If objNSNET.IsClassMeetingsInDateRange(strCurrYearID, tmStartTime, tmEndTime) Then GenerateError obLanguage("SetupSchoolCalendar","kErrHolidayWithLessons")
End If
If nViewType = kVacation Then
	' check class meetings for Holiday dates
	If objNSNET.IsClassMeetingsInVacationRange(strCurrYearID, nEventID, tmStartTime, tmEndTime) Then GenerateError obLanguage("SetupSchoolCalendar","kErrHolidayWithLessons")
End If
nPortal = 0
nPublic = 0
If PORTAL And (nViewType=kSchoolEvent) Then
	nPortal = GetSafeLng(Request("PORTAL"), 0)
	If nPortal = 1 Then
		nPublic = GetSafeLng(Request("PUBLIC"), 0)
	End If
Else
	nPortal = -1
End If

If nEventID=0 Then
	If nViewType = kClassEvent Then
		nClassID = GetSafeID( obTokenMgr.GetData( strToken, stCurrClass), null )
	Else
		nClassID = 0
	End If
	Call TestUserRights()

	isPortal = CBool(nPortal = 1)
	Call objNSNET.CreateEvent(strEventName, tmStartTime, tmEndTime, strDescription, strPeriodicity, nViewType, strCurrYearID, nClassID, strRoomID, nPortal = 1, nPublic)
	TestError obLanguage("SetupSchoolCalendar","kErrCreateEvent")
Else
	nClassID = objNSNET.GetEventClassID(nEventID)
	Call TestUserRights()
	If nViewType = kVacation Then
		Set objVacationOverClasses = objNSNET.GetVacationOverClasses(nEventID, strCurrYearID, tmStartTime, tmEndTime)
		TestError obLanguage("SetupSchoolCalendar","kErrEditEvent")
		If objVacationOverClasses.RecordCount <> 0 Then
			Dim arrCls, strErrClsMsg, i, ln, currentLen
			arrCls = objVacationOverClasses.GetRows(,,Array("clsName"))
			strErrClsMsg = "Занятия следующих "&obLanguage("Common", "kClass_es", strFunctionalityType)&" попадают на каникулы: \n"
			ln = Ubound(arrCls, 2)
			currentLen = IIF(ln > 10, 10, ln)
			Do While i <= currentLen
				strErrClsMsg = strErrClsMsg + arrCls(0, i) + "\n"
				i = i + 1
			Loop
			strErrClsMsg = strErrClsMsg&IIF(ln > currentLen, "и еще "&(ln - currentLen)&"...", "")
			GenerateError strErrClsMsg
		End If
	End If
	Call objNSNET.EditEvent(nEventID, strEventName, tmStartTime, tmEndTime, strDescription, strPeriodicity, nViewType, strCurrYearID, nClassID, strRoomID, nPortal, nPublic)
	TestError obLanguage("SetupSchoolCalendar","kErrEditEvent")
End If

RedirectTo strBackPage, null

Sub TestUserRights()
	If nClassID <> 0 Then
		If Not HasUserRight(arClassMgmPostClassEventAll) Then 
			If Not HasUserRight(arClassMgmPostClassEventSelf) Then GenerateError obLanguage("Common","kErrPageAccess")
			If Not objNSNET.IsClassChief(nClassID, strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")
		End If
	Else
		If Not HasUserRight(arPostSchoolEvent) Then GenerateError obLanguage("Common","kErrPageAccess")
	End If
End Sub
Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function

%>

<!-- #INCLUDE FILE="../../headernoscreen.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE=../../scripts/Calendar_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

If Not HasUserRight(arPostSchoolEvent) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim dtDateStart, dtDateEnd, strDescription
Dim nResult, nInvalidSTID, objSTInfo
Dim strInvalidSGName, strError
Dim objCMComponent, objResult
Dim isViolation, strViolationMessage

Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
arrHoliDays = InitDays(kHoliday, dtYearStart, dtYearEnd)

dtDateStart = Str2Date( GetSafeStr( Request("FromD"), 20, NULL ) )
dtDateEnd = Str2Date( GetSafeStr( Request("ToD"), 20, NULL ) )
If IsHoliDay(dtDateEnd) Then GenerateError obLanguage("SetupSchoolCalendar","kErrMoveToHoliday")
strDescription = GetSafeStr( Request("Desc"), 2000, NULL )

nResult = objNSNET.MoveDay(strCurrYearID, dtDateStart, dtDateEnd, strDescription, nInvalidSTID, strInvalidSGName)
TestError obLanguage("SetupSchoolCalendar","kErrMoveDay")

If nResult < 0 Then
	Select Case nResult
		Case -1 GenerateError obLanguage("Common","kErrorMsg") & "! "& obLanguage("SetupSchoolCalendar","kNoDayLessons")& " " & Date2Str(dtDateStart)
		Case -2 GenerateError obLanguage("Common","kErrorMsg") & "! "& obLanguage("SetupSchoolCalendar","kDayHaveLessons")& " " & Date2Str(dtDateEnd)
		Case -3
			Set objSTInfo = objNSNET.GetScheduleTimeInfo(nInvalidSTID)
			If objSTInfo.EOF Then GenerateError obLanguage("SetupSchoolCalendar","kErrMoveDay")
			strError = obLanguage("Common","kErrorMsg") & "! "& obLanguage("SetupSchoolCalendar","kInDay")& " " & Date2Str(dtDateEnd) & " " & obLanguage("SetupSchoolCalendar","kScheduleTimeNotDefined") & ": " & obLanguage("SetupSchoolCalendar","kRelay") & " " & objSTInfo("RELAY") & ", " & obLanguage("SetupSchoolCalendar","kNLesson") & " " & objSTInfo("SCHEDULETIMENUMBER") & "." & "<br>"
			strError = strError & obLanguage("ClassManagement","kSubjectGroupName") & ": " & DB2HTML(strInvalidSGName) & "."
			GenerateError strError
		Case Else GenerateError obLanguage("SetupSchoolCalendar","kErrMoveDay")
	End Select
End If

Set objCMComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IClassMeetingComponent")
TestError obLanguage("ServAdmin", "kCantCreateObj")

Set objResult = objCMComponent.GetClassmeetingsViolationForDates(strCurrYearID, dtDateEnd, dtDateEnd)
TestError obLanguage("Calendar", "kErrGetClassmeetingsViolation")

If Not objResult.IsSuccess Then
	GenerateError objResult.Message
End If

isViolation = CBool(objResult.Data)
If isViolation Then
	strViolationMessage = objResult.Message
	If Not IsDull(strViolationMessage) Then
		Call obTokenMgr.SetData(strToken,stWasSaved, strViolationMessage)
	End If
End If

RedirectTo Request("BackPage"), null
%>

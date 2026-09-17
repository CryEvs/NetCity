<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/timeBoxes.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

If Not HasUserRight(arCalendarCreateCalendar) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim tmStartTime, tmEndTime, nTimeRelay, strAction, nTimeNumber
Dim i, arrData
Dim bSave, bAdd, bApplyWeek
Dim nWeekDay, nSchedTimeID, strMessage
Dim objSchedInfo
Dim strSTVariantID
Dim transaction
Dim bCheckCMViolation, strViolMessage

strAction = Request("act")
bSave = (strAction = "save")
bAdd = (strAction = "add")
bApplyWeek = (strAction = "toweek")

nWeekDay = GetSafeLng(Request("WeekDay"), Null)
strSTVariantID = GetSafeID(obTokenMgr.GetData(strToken, stSTVariantID), Null)

bCheckCMViolation = False

If strAction = "remove" Then
	If Request("DeleteID").Count > 0 Then
		ReDim arrData(Request("DeleteID").Count - 1)
		For i = 0 To UBound(arrData)
			arrData(i) = GetSafeID(Request("DeleteID")(i+1), Null)
		Next

		Call objNSNET.RemoveScheduleTimes(arrData)
		TestError obLanguage("Calendar","kErrDelLessonTime")
		strMessage = obLanguage("Calendar","kScheduleTimeRemove")
	End If
ElseIf bApplyWeek Then
	bCheckCMViolation = True
	nSchedTimeID = objNSNET.ApplyScheduleToWeek(strCurrYearID, strSTVariantID, nWeekDay)
	TestError obLanguage("Calendar","kErrApplyScheduleToWeek")

	If nSchedTimeID <> 0 Then
		strMessage = obLanguage("Calendar","kErrApplyScheduleToWeek_Use")
		Set objSchedInfo = objNSNET.GetScheduleTimeInfo(nSchedTimeID)

		If Not objSchedInfo.EOF Then
			strMessage = strMessage & vbCrLf & "(" & WeekdayName(objSchedInfo("WEEKDAYNUM"), False, vbSunday) & ", " & objSchedInfo("RELAY") & " " & obLanguage("Calendar","kRelay") & ", " & obLanguage("Calendar","kNLesson", strFunctionalityType) & " " & objSchedInfo("SCHEDULETIMENUMBER") & ")"
		End If
	Else
		strMessage = obLanguage("Calendar","kApplyScheduleToWeekSuccess")
	End If
	'Call obTokenMgr.SetData(strToken, stWasSaved, strMessage)
Else
	transaction = objNSNET.GetTransaction()
	If bSave Then
		If Request("TimeID").Count > 0 Then
			bCheckCMViolation = True

			ReDim arrData(4, Request("TimeID").Count - 1)
			For i = 0 To UBound(arrData, 2)
				arrData(0, i) = GetSafeID(Request("TimeID")(i+1), Null)
				If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
					arrData(1, i) = GetSafeID(Request("TimeRelay")(i+1), Null)
				Else
					arrData(1, i) = 1
				End If

				arrData(2, i) = GetSafeLng(Request("TimeNum")(i+1), Null)
				arrData(3, i) = GetBoxTimeIndexed("StartT", i+1) 
				arrData(4, i) = GetBoxTimeIndexed("EndT", i+1) 
			Next
			
			Call objNSNET.EditScheduleTimes_WT(transaction, arrData)
			TestErrorWithTransaction transaction, obLanguage("Calendar","kErrUpdLessonTime")
		End If
	ElseIf bAdd Then
		nTimeNumber = GetSafeLng(Request("NewTimeNum"), Null)
		nTimeRelay = GetSafeID(Request("NewTimeRelay"), 1)
		tmStartTime = GetBoxTime("NewStartT")
		tmEndTime = GetBoxTime("NewEndT")

		If Not IsNull(tmStartTime) And Not IsNull(tmEndTime) Then
			Call objNSNET.CreateScheduleTime_WT(transaction, strCurrYearID, strSTVariantID, nWeekDay, nTimeRelay, nTimeNumber, tmStartTime, tmEndTime)
			TestErrorWithTransaction transaction,obLanguage("Calendar","kErrInsLessonTime")
			strMessage = obLanguage("Calendar","kScheduleTimeAdd")
		End If
	End If
	objNSNET.CommitTransaction(transaction)	
End If

If bCheckCMViolation Then
	strViolMessage = GetCMViolationMessage()
	If Not IsEmpty(strMessage) Then
		strMessage = strMessage & vbCrLf & vbCrLf & strViolMessage
	Else
		strMessage = strViolMessage
	End If
End If

If Not IsEmpty(strMessage) Then
	If Not (bSave Or bApplyWeek) Then
		Call obTokenMgr.SetData(strToken, stWasSaved, strMessage)
	Else
		Call WriteJsonResult(strMessage, False, 0)
	End If
ElseIf bSave Or bApplyWeek Then
	Call WriteJsonResult(obLanguage("Common","kDataSaved"), False, 0)
End If

RedirectTo "ScheduleTimes.asp?", Array("WeekDay", nWeekDay)

Function GetCMViolationMessage()
	Dim objCMComponent, objResult
	Dim isViolation, strViolationMessage

	GetCMViolationMessage = ""
	Set objCMComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IClassMeetingComponent")
	TestError obLanguage("ServAdmin", "kCantCreateObj")

	Set objResult = objCMComponent.GetClassmeetingsViolationForStVariant(strCurrYearID, strSTVariantID, IIF(bApplyWeek, Empty, nWeekDay))
	TestError obLanguage("Calendar", "kErrGetClassmeetingsViolation")

	If Not objResult.IsSuccess Then
		GenerateError objResult.Message
	End If

	isViolation = CBool(objResult.Data)
	If isViolation Then
		strViolationMessage = objResult.Message
		If Not IsDull(strViolationMessage) Then
			GetCMViolationMessage = strViolationMessage
		End If
	End If
End Function%>
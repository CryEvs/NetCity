<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nRelay, objSchedTimes, arrShedTimes
Dim bOK
Dim arrClassArray
Dim objStVariants, bManyVariants, strStVariantID
Dim bNoAssignedVariants, bEmptyScheduleTimes

'bOK = True ' set default - DO NOT SET DEFAULT VALUE HERE!
' It is a very bad approach because it is not a fact that Global code
' pass through this place BEFORE other functions which set a required
' value for bOK!
' Glodal code has called Sub DrawButtons() and THEN go through this place!

Sub DrawButtons()
	Dim strNext, strPrev, nDaysPeriod

	If Not IsDull(bOK) Then ' if bOK is not initiated then assumes that bOK is True
		If Not bOK Then Exit Sub
	End If

	Call specialButtons()
End Sub

Sub DrawFilters(ByVal strForm)
	Dim objRelayRs
	
	Call DrawViewFilter()
	If InStr(strScriptName, "Day") > 0 Then ' Day
		Call DrawBDateWithBtns()
	Else ' Week
		Call DrawWeekWithArrows(strForm, dtYearStart, dtYearEnd, kStartNWeek, obLanguage("Calendar","kViewPrevWeek"), obLanguage("Calendar","kViewNextWeek"))
	End If

	Set objRelayRs = objNSNET.GetRelayList(strCurrYearID)

	If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
		Call DrawFilterRow(strForm, obLanguage("Calendar","kRelay"), "Relay", objRelayRs, "RELAY", "RELAY", nRelay, True)
	End If

	Call specialFilters(strForm)
End Sub

Sub specialFilters(ByVal strForm) 
End Sub

Sub specialButtons()
End Sub

Function GetEventName(ByVal strEventName, ByVal strClassName, ByVal dtStartTime, ByVal dtEndTime)
	Dim strStartTime, strEndTime, strEvent
	strEvent = ""
	If Not IsDull(strClassName) Then strEvent = DB2HTML(strClassName) & ": "

	strStartTime = Time2Str(dtStartTime)
	strEndTime = Time2Str(dtEndTime)

	If strStartTime <> "&nbsp;" Or strEndTime <> "&nbsp;" Then
		If strStartTime = "&nbsp;" Then strStartTime = "..."
		If strEndTime = "&nbsp;" Then strEndTime = "..."
		strEvent = strEvent & "(" & strStartTime & "-" & strEndTime & ") "
	End If

	GetEventName = strEvent & DB2HTML(strEventName)
End Function

Sub DrawEvents(dtDate)
	If GetScreenType() = stPrint Then
		If Not rsVacations.EOF Then ' Каникулы
			Do
				If DateDiff("d", dtDate , rsVacations("STARTTIME"), 0, 0) <= 0 AND DateDiff("d", dtDate , rsVacations("ENDTIME"), 0, 0) >= 0 Then
					response.write "- " & DB2HTML(rsVacations("EVENTNAME")) & "<br>"
				End If

				rsVacations.MoveNext
			Loop Until rsVacations.EOF

			rsVacations.MoveFirst
		End If

		If Not rsHoliDays.EOF Then ' Праздники
			Do
				If DateDiff("d", dtDate , rsHoliDays("STARTTIME"), 0, 0) <= 0 AND DateDiff("d", dtDate , rsHoliDays("ENDTIME"), 0, 0) >= 0 Then
					response.write "- " & DB2HTML(rsHoliDays("EVENTNAME")) & "<br>"
				End If

				rsHoliDays.MoveNext
			Loop Until rsHoliDays.EOF

			rsHoliDays.MoveFirst
		End If

		If Not rsSEvents.EOF Then ' Школьные Мероприятия
			Do
				If DateDiff("d", dtDate, rsSEvents("STARTTIME"), 0, 0) <= 0 AND DateDiff("d", dtDate , rsSEvents("ENDTIME"), 0, 0) >= 0 Then
					response.write "- " & DB2HTML(rsSEvents("EVENTNAME"))
					If Not IsDull(rsSEvents("ROOM")) Then response.write " [" & DB2HTML(rsSEvents("ROOM")) & "]"
					rw "<br>"
				End If

				rsSEvents.MoveNext
			Loop Until rsSEvents.EOF

			rsSEvents.MoveFirst
		End If

		If Not rsCEvents.EOF Then ' Классные Мероприятия
			Do
				If DateDiff("d", dtDate , rsCEvents("STARTTIME"), 0, 0 ) <= 0 AND DateDiff("d", dtDate , rsCEvents("ENDTIME"), 0, 0) >= 0 Then
					response.write "- " & DB2HTML(rsCEvents("EVENTNAME"))
					If Not IsDull(rsCEvents("ROOM")) Then response.write " [" & DB2HTML(rsCEvents("ROOM")) & "]"
					rw "<br>"
				End If

				rsCEvents.MoveNext
			Loop Until rsCEvents.EOF

			rsCEvents.MoveFirst
		End If
	Else ' GetScreenType() <> stPrint
		If Not rsVacations.EOF Then ' Каникулы
			Do
				If DateDiff("d", dtDate , rsVacations("STARTTIME"), 0, 0) <= 0 AND DateDiff("d", dtDate , rsVacations("ENDTIME"), 0, 0) >= 0 Then
					response.write "- " & ShowAnchor("EditEvent(" & kVacation & "," & rsVacations("EVENTID") & ")", obLanguage("Calendar","kViewDetails"), DB2HTML(rsVacations("EVENTNAME")), "class=""vacation-day""") & "<br>"
				End If

				rsVacations.MoveNext
			Loop Until rsVacations.EOF

			rsVacations.MoveFirst
		End If

		If Not rsHoliDays.EOF Then ' Праздники
			Do
				If DateDiff("d", dtDate, rsHoliDays("STARTTIME"), 0, 0) <= 0 AND DateDiff( "d", dtDate , rsHoliDays("ENDTIME"), 0, 0) >= 0 Then
					response.write "- " & ShowAnchor("EditEvent("& kHoliday & ","&rsHoliDays("EVENTID")&")", obLanguage("Calendar","kViewDetails"), DB2HTML(rsHoliDays("EVENTNAME")), "class=""vacation-day""") & "<br>"
				End If

				rsHoliDays.MoveNext
			Loop Until rsHoliDays.EOF

			rsHoliDays.MoveFirst
		End If

		If Not rsSEvents.EOF Then ' Школьные Мероприятия
			Do
				If DateDiff("d", dtDate , rsSEvents("STARTTIME"), 0, 0 ) <= 0 AND DateDiff("d", dtDate, rsSEvents("ENDTIME"), 0, 0) >= 0 Then
					response.write "- " & ShowAnchor("EditEvent(" & kSchoolEvent & ","&rsSEvents("EVENTID")&")", obLanguage("Calendar","kViewDetails"), DB2HTML(rsSEvents("EVENTNAME")), "class=""school-event""")
					If Not IsDull(rsSEvents("ROOM")) Then response.write " [" & DB2HTML(rsSEvents("ROOM")) & "]"
					
					rw "<br>"
				End If

				rsSEvents.MoveNext
			Loop Until rsSEvents.EOF

			rsSEvents.MoveFirst
		End If

		If Not rsCEvents.EOF Then ' Классные Мероприятия
			Do
				If DateDiff("d", dtDate, rsCEvents("STARTTIME"), 0, 0 ) <= 0 AND DateDiff("d", dtDate , rsCEvents("ENDTIME"), 0, 0) >= 0 Then
					response.write "- " & ShowAnchor("EditEvent(" & kClassEvent & "," & rsCEvents("EVENTID") & ")", obLanguage("Calendar","kViewDetails"), DB2HTML(rsCEvents("EVENTNAME")), "class=""class-event""")
					If Not IsDull(rsCEvents("ROOM")) Then response.write " [" & DB2HTML(rsCEvents("ROOM")) & "]"

					rw "<br>"
				End If

				rsCEvents.MoveNext
			Loop Until rsCEvents.EOF

			rsCEvents.MoveFirst
		End If
	End If
End Sub

Function GetClassArray(strClassID, objClassesRs) 'Данную функцию удалить, когда будет сделано расписание за месяц, а оставить только ту, что ниже
	Dim arrClassArray, size, i
	
	If strClassID = "-1" Then
		size = objClassesRs.RecordCount - 1
		ReDim arrClassArray(size)

		For i = 0 To size
			arrClassArray(i) = CLng(objClassesRs("CLASSID"))
			objClassesRs.MoveNext
		Next

		objClassesRs.MoveFirst
		GetClassArray = arrClassArray
	Else
		GetClassArray = Array(strClassID)
	End If
End Function

Function GetClassArray_IUP(strClassID_IUP, objClasses_IUP_rs)
	Dim arrClassArray, size, i
	
	If strClassID_IUP = "-1" Then
		size = objClasses_IUP_rs.RecordCount - 1
		ReDim arrClassArray(size)

		For i = 0 To size
			arrClassArray(i) = CStr(objClasses_IUP_rs("ID"))
			objClasses_IUP_rs.MoveNext
		Next

		objClasses_IUP_rs.MoveFirst
		GetClassArray_IUP = arrClassArray
	Else
		GetClassArray_IUP = Array(strClassID_IUP)
	End If
End Function

Function JoinRsField(objRs, strFieldName)
	Dim strJoin

	strJoin = ""
	While Not objRs.EOF
		strJoin = strJoin & GetSafeStr(objRs(strFieldName), -1, "") & ","
		objRs.MoveNext
	WEnd

	If strJoin <> "" Then
		strJoin = Left(strJoin, Len(strJoin) - 1)
	End If

	JoinRsField = strJoin
End Function

Sub InitStVariants()
	Set objStVariants = objNSNET.GetAssignedStVariants(strCurrYearID)

	bEmptyScheduleTimes = False
	bNoAssignedVariants = objStVariants.EOF
	If bNoAssignedVariants Then
		bEmptyScheduleTimes = True
		bManyVariants = False
		strStVariantID = "0"
	Else
		If objStVariants.RecordCount = 1 Then
			bManyVariants = False
			strStVariantID = GetSafeID(objStVariants("VARIANTID"), Null)
		Else
			bManyVariants = True
			strStVariantID = GetSafeID(Request("VARIANTID"), GetSafeID(obTokenMgr.GetData(strToken, stSTVariantID), "-1"))

			If strStVariantID <> "-1" Then
				strStVariantID = GetSafeIDForRs(strStVariantID, objStVariants, "VARIANTID")
			End If
		End If
	End If

	Call obTokenMgr.SetData(strToken, stSTVariantID, strStVariantID)
	Call obTokenMgr.SetData(strToken, stManySTVariants, bManyVariants)
End Sub
%>
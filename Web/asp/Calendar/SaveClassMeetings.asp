<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterWeeks.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.

Const kWeekLen = 7

Const kIndex_STARTDATE = 0
Const kIndex_ENDDATE = 1

If Not HasUserRight(arCalendarCreateCalendar) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim oneWeekPattern
Dim strPClassID, strSubjClassID
Dim dtStartChngPeriod, dtEndChngPeriod
Dim objCmdRoom, objCmdClSbj, objCmdTeach, objCmdSave, objCmdExistsCM, objCmdUpdateCM, objCmdRemoveCM, objCmdACMID, objCmdAssignCMID, objCmdFindLesson, objCmdClassMeetingInfo
Dim bRoom, bClSubj, bTeacher, bAnalize, bOnNonLearningDay, strTok
Dim strInvalid_Room, strInvalid_ClSubj, strInvalid_Teacher, strOnNonLearningDay, strExistsAttendancesOrAssignments, strAlreadyExistingCMs
Dim nPattern
Dim transaction, strDate, tempDate
Dim strAction

Call Main
Call TestErrorWithTransaction(transaction,obLanguage("Calendar","kUpdateError"))
Call GoOut()

Sub Main
	Dim j, cnt
	Dim tmpWD, tmpWD2, cross
	Dim firstWeekDay

	bAnalize = True
	strSubjClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubjClass), "0")
	
	strAction			= GetSafeStr(Request("ACT"), -1, "edit")
	nPattern			= Clng(Request("pattern"))
	oneWeekPattern		= nPattern * kWeekLen
	strDate				= Str2Date(Request("StartDayWeek"))
	dtStartChngPeriod	= GetSafeDate(Request("StartChngPeriod"), Null)
	dtEndChngPeriod		= GetSafeDate(Request("EndChngPeriod"), Null)

	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	
	transaction = objNSNET.GetTransaction()
	If oneWeekPattern = 14 Then
		tempDate = dtStartChngPeriod
		cross = 0

		While Weekday(tempDate, vbMonday) <> 1
			tempDate = DateAdd("d", -1, tempDate)
		Wend
		firstWeekDay = tempDate ' dtStartChngPeriod смещена на первый день недели

		While tempDate <= dtEndChngPeriod
			If tempDate = strDate Then
				cross = 1
				tempDate = dtEndChngPeriod
			Else
				tempDate = DateAdd("d", oneWeekPattern, tempDate)
			End If
		Wend

		If cross = 0 Then
			'dtStartChngPeriod = DateAdd("d", 7, dtStartChngPeriod)
			dtStartChngPeriod = DateAdd("d", 7, firstWeekDay) ' #18197. Смещаем не саму dtStartChngPeriod, а смещённую её к началу недели.
		End If
	End If

	If oneWeekPattern = 0 Then
		If DoAttendancesExist(dtStartChngPeriod, dtEndChngPeriod, strSubjClassID) Then
			objNSNET.RollbackTransaction(transaction)
			Call GoOut()
		Else
			If DoAssignmentsExist(dtStartChngPeriod, dtEndChngPeriod, strSubjClassID) Then
				objNSNET.RollbackTransaction(transaction)
				Call GoOut()
			Else
				Call objNSNET.ClearSchedule_WT(transaction, strSubjClassID, dtStartChngPeriod, dtEndChngPeriod)
				strTok = CStr(obLanguage("Calendar","kLessonSuccessWasDeleted"))
			End If
		End If
	Else
		cnt = Request("WD").Count - 1
		If cnt < 0 Then GenerateErrorWithTransaction transaction, obLanguage("Common", "kUnexpErr")

		Call Prepare_IsRoomAvailable(strSubjClassID)
		Call Prepare_IsClassSubjectGroupAvailable(strSubjClassID)
		Call Prepare_IsTeacherAvailable(strSubjClassID)

		Call Prepare_DoAttendancesExistByCMID()
		Call Prepare_DoAssignmentsExistByCMID()

		Call Prepare_ClassMeetingInfo()

		Call Prepare_InsertCM()
		Call Prepare_UpdateCM()
		Call Prepare_RemoveCM()
		Call Prepare_GetCMID()

		arrHoliDays = InitDays(kHoliday, dtStartChngPeriod, dtEndChngPeriod)
		arrVacations = InitSgVacations(strSubjClassID, dtStartChngPeriod, dtEndChngPeriod)

		strOnNonLearningDay					= ""
		strExistsAttendancesOrAssignments	= ""
		strInvalid_Room						= ""
		strInvalid_ClSubj					= ""
		strInvalid_Teacher					= ""
		
		For j = 1 To cnt + 1
			tmpWD = GetSafeLng(Request("WD")(j), -1)

			If tmpWD = -1 Then
				tmpWD = GetSafeLng(Request("WD_Old")(j), -1)

				If tmpWD <> -1 Then Call DelCM(tmpWD, Request("MTimes_Old")(j))
			Else
				tmpWD2 = GetSafeLng(Request("WD_Old")(j), -1)
				If tmpWD2 = -1 Then
					Call InsCM(tmpWD, Request("MTimesID")(j), Request("Room")(j), Request("TEACHERID")(j))
				Else
					Call UpdCM(tmpWD, Request("MTimesID")(j), Request("Room")(j), Request("TEACHERID")(j), tmpWD2, Request("MTimes_Old")(j))
				End If
			End If
		Next

		strTok = strInvalid_Room & strInvalid_ClSubj & strInvalid_Teacher
		If strOnNonLearningDay <> "" Then
			strTok = strTok & obLanguage("Calendar","kSomeLessonsInHolydays") & ": " & Left(strOnNonLearningDay, Len(strOnNonLearningDay) - 2) & ". " & obLanguage("Calendar","kTheyNotSaved") & ". <br />"
		End If

		If strExistsAttendancesOrAssignments <> "" Then
			strTok = strTok & obLanguage("Calendar","kClassmeetingWasNotChanged") & ": " & Left(strExistsAttendancesOrAssignments, Len(strExistsAttendancesOrAssignments) - 2) & ". " & "<br />"
		End If

		If strAlreadyExistingCMs <> "" Then
			strTok = strTok & obLanguage("Calendar","kSomeLessonsAlreadyExisting") & ": " & Left(strAlreadyExistingCMs, Len(strAlreadyExistingCMs) - 2) & ". " & obLanguage("Calendar","kTheyNotRemoved") & ". <br />"
		End If

		If Not IsDull(strTok) And strAction <> "save" Then strTok = CStr(obLanguage("Calendar","kConflictsFound")) & ": <br />" & strTok
		
		If strAction = "add" And IsDull(strTok) Then strTok = CStr(obLanguage("Calendar","kLessonWasSuccessfullyAdded"))
	End If

	If DB_Provider = Ora_DB_Provider Then
		If bAnalize Then objCon.Execute ("ANALYZE TABLE CLASSMEETINGS COMPUTE STATISTICS")
	End If

	objNSNET.CommitTransaction(transaction)
	
	Call DisposeCommands()
End Sub

Sub DisposeCommands()
	Call objNSNET.DisposeCommand(objCmdRemoveCM)
	Call objNSNET.DisposeCommand(objCmdUpdateCM)
	Call objNSNET.DisposeCommand(objCmdAssignCMID)
	Call objNSNET.DisposeCommand(objCmdACMID)
	Call objNSNET.DisposeCommand(objCmdClSbj)
	Call objNSNET.DisposeCommand(objCmdRoom)
	Call objNSNET.DisposeCommand(objCmdExistsCM)
	Call objNSNET.DisposeCommand(objCmdTeach)
	Call objNSNET.DisposeCommand(objCmdSave)
	Call objNSNET.DisposeCommand(objCmdClassMeetingInfo)
End Sub

Sub GoOut()
	Dim strBackPage, result
	
	If CStr(Request("changePeriod")) = "period" Then
		Call obTokenMgr.SetData(strToken, stClMeet_ArbitrDate_Start, dtStartChngPeriod)
		Call obTokenMgr.SetData(strToken, stClMeet_ArbitrDate_End, dtEndChngPeriod)
	End If
	
	strBackPage = GetSafeStr(obTokenMgr.GetData(strToken, stBackPage), -1, "ClassMeetings.asp?")
	
	If Not IsDull(strTok) Then
		Call obTokenMgr.SetData(strToken, stWasSaved, strTok)
	ElseIf strAction = "save" Then
		Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Calendar","kClassmeetingWasSaved")))
	End If
	
	RedirectTo strBackPage, Null
End Sub

Sub Prepare_DoAttendancesExistByCMID()
	Set objCmdACMID = objNSNET.GetAttendanceListForClassMeeting_Prepare_WT(transaction)
End Sub

Function DoAttendancesExistByCMID(ByVal nCMID)
	Dim objRs

	Set objRs = objNSNET.GetAttendanceListForClassMeeting_Execute(objCmdACMID, nCMID)
	If objRs.EOF Then
		DoAttendancesExistByCMID = False
	Else
		strTok = CStr(obLanguage("Calendar","kConflictAttendance")) & objRs("NAME") & " " & Date2Str(objRs("DAY"))
		DoAttendancesExistByCMID = objRs("CLASSMEETINGID")
	End If

	objRs.Close
End Function

Sub Prepare_DoAssignmentsExistByCMID()
	Set objCmdAssignCMID = objNSNET.GetAssignmentListForClassMeeting_Prepare_WT(transaction)
End Sub

Sub Prepare_ClassMeetingInfo()
	Set objCmdClassMeetingInfo = objNSNET.ClassmeetingInfo_Prepare_WT(transaction)
End Sub

Function DoAssignmentsExistByCMID(ByVal nCMID)
	Dim objRs

	Set objRs = objNSNET.GetAssignmentListForClassMeeting_Execute(objCmdAssignCMID, nCMID)
	If objRs.EOF Then
		DoAssignmentsExistByCMID = False
	Else
		strTok = CStr(obLanguage("Calendar","kConflictAssignments")) & objRs("NAME") & " " & Date2Str(objRs("DAY"))
		DoAssignmentsExistByCMID = True
	End If

	objRs.Close
End Function

Function DoAssignmentsExist(ByVal dtStartPeriod, ByVal dtEndPeriod, ByVal strSubjClassID)
	Dim objRs

	Set objRs = objNSNET.GetAssignmentListForClassSubjectGroup_WT(transaction, strSubjClassID, dtStartPeriod, dtEndPeriod)
	If objRs.EOF Then
		DoAssignmentsExist = False
	Else
		strTok = CStr(obLanguage("Calendar","kConflictAssignments")) & objRs("NAME") & " " & Date2Str(objRs("DAY"))
		DoAssignmentsExist = objRs("CLASSMEETINGID")
	End If

	objRs.Close
End Function

Function DoAttendancesExist(ByVal dtStartPeriod, ByVal dtEndPeriod, ByVal strSubjClassID)
	Dim objRs

	Set objRs = objNSNET.GetAttendanceListForClassSubjectGroup_WT(transaction, strSubjClassID, dtStartPeriod, dtEndPeriod)
	If objRs.EOF Then
		DoAttendancesExist = False
	Else
		strTok = CStr(obLanguage("Calendar","kConflictAttendance")) & objRs("NAME") & " " & Date2Str(objRs("DAY"))
		DoAttendancesExist = objRs("CLASSMEETINGID")
	End If

	objRs.Close
End Function

Sub Prepare_IsRoomAvailable(ByVal nPClassId)
	Set objCmdRoom = objNSNET.IsRoomAvailable_Prepare_WT(transaction, nPClassId)
End Sub

Function IsRoomAvailable(ByVal dtDay, ByVal nRoom, ByVal nScheduletimeId)
	Dim objRs

	If nRoom = "-1" Then IsRoomAvailable = "" : Exit Function
	Set objRs = objNSNET.IsRoomAvailable_Execute(objCmdRoom, dtDay, nRoom, nScheduletimeId)
	If objRs.EOF Then
		IsRoomAvailable = ""
	Else
		IsRoomAvailable = Date2Str(dtDay) & obLanguage("Calendar","kRelayLesson") & objRs("TIMENAME") & obLanguage("Calendar","kInRoom",strFunctionalityType) & objRs("ROOMNAME") & obLanguage("Calendar","kOtherLesson") & objRs("NAME") & obLanguage("Calendar","knear") & objRs("CLASSNAME") &obLanguage("Calendar","kForClass",strFunctionalityType)&".<br />"
	End If
End Function

Sub Prepare_IsClassSubjectGroupAvailable(ByVal nCSGID)
	Set objCmdClSbj = objNSNET.IsClassSubjectGroupAvailable_Prepare_WT(transaction, nCSGID)
End Sub

Function IsClassSubjectGroupAvailable(ByVal dtDay, ByVal nScheduletimeId, ByVal nCMID)
	Dim objRs

	Set objRs = objNSNET.IsClassSubjectGroupAvailable_Execute(objCmdClSbj, dtDay, nScheduletimeId, IIf(IsDull(nCMID), 0, nCMID))
	If objRs.EOF Then
		IsClassSubjectGroupAvailable = ""
	Else
		IsClassSubjectGroupAvailable = Date2Str(dtDay) & obLanguage("Calendar","kRelayLesson") & objRs("TIMENAME") & obLanguage("Calendar","kClassOtherLesson",strFunctionalityType) & objRs("NAME") & ".<br />"
	End If
End Function

Sub Prepare_IsTeacherAvailable(ByVal nPClassId)
	Set objCmdTeach = objNSNET.IsTeacherAvailable_Prepare_WT(transaction, nPClassId)
End Sub

Function IsTeacherAvailable(ByVal dtDay, ByVal nTeacherId, ByVal nScheduletimeId)
	Dim objRs

	Set objRs = objNSNET.IsTeacherAvailable_Execute(objCmdTeach, dtDay, nTeacherId, nScheduletimeId)
	If objRs.EOF Then
		IsTeacherAvailable = ""
	Else
		IsTeacherAvailable = Date2Str(dtDay) & obLanguage("Calendar","kRelayLesson") & objRs("TIMENAME") & obLanguage("Calendar","kTeacher_") & objRs("NICKNAME") & obLanguage("Calendar","kLeadOtherLesson") & objRs("NAME") & obLanguage("Common","kIn")& objRs("CLASSNAME") & obLanguage("Calendar","kInClass",strFunctionalityType) & ".<br />"
	End If
End Function

Sub Prepare_GetCMID()
	Set objCmdExistsCM = objNSNET.GetClassMeetingID_Prepare_WT(transaction)
End Sub

Function GetCMID(ByVal dtDate, ByVal strScheduleTimeId, ByVal csgID)
	GetCMID = CLng(objNSNET.GetClassMeetingID_Execute(objCmdExistsCM, dtDate, strScheduleTimeId, csgID))
End Function

Sub Prepare_InsertCM()
	Set objCmdSave = objNSNET.CreateClassMeeting_Prepare_WT(transaction,strSubjClassID)
End Sub

Sub InsertCM(ByVal dtDay, ByVal nScheduleTimeId, ByVal nRoom, ByVal nTeacherId)
	Call objNSNET.CreateClassMeeting_Execute(objCmdSave, dtDay, nScheduleTimeId, IIF(nRoom = "-1", Null, nRoom), nTeacherId)
End Sub

Sub Prepare_UpdateCM()
	Set objCmdUpdateCM = objNSNET.EditClassMeeting_Prepare_WT(transaction, strSubjClassID)
End Sub

Function UpdateCM(ByVal nCMID, ByVal dtDate, ByVal strScheduleTimeId, ByVal nRoom, ByVal strTeacherId)
	Call objNSNET.EditClassMeeting_Execute(objCmdUpdateCM, nCMID, dtDate, strScheduletimeId, IIF(nRoom = "-1" , Null, nRoom), strTeacherId)
End Function

Sub Prepare_RemoveCM()
	Set objCmdRemoveCM = objNSNET.RemoveClassMeeting_Prepare_WT(transaction)
End Sub

Function RemoveCM(ByVal nCMID)
	Call objNSNET.RemoveClassMeeting_Execute(objCmdRemoveCM, nCMID)
End Function

Sub DelCM(wd, st_ID)
	Dim dtDay, nCMID
	Dim nStartWeekDay

	nStartWeekDay = WeekDay(dtStartChngPeriod, vbSunday)
	dtDay = dtStartChngPeriod
	While WeekDay(dtDay, vbSunday ) <> CLng(wd)
		dtDay = DateAdd("d", 1, dtDay)
	Wend

	If nStartWeekDay > WeekDay(dtDay, vbSunday) Then
		dtDay = DateAdd("d", (nPattern - 1) * kWeekLen, dtDay)
	End If

	While DateDiff("d",dtDay, dtEndChngPeriod, 0, 0) >= 0
		If DayIsLearning(dtDay) Then
			nCMID = GetCMID(dtDay, st_ID, strSubjClassID)

			If nCMID <> 0 Then
				If DoAttendancesExistByCMID(nCMID) Then
					objNSNET.RollbackTransaction(transaction)
					Call GoOut()
				ElseIf DoAssignmentsExistByCMID(nCMID) Then
					objNSNET.RollbackTransaction(transaction)
					Call GoOut()
				Else
					RemoveCM(nCMID)
				End If
			End If
		End If

		dtDay = DateAdd("d", oneWeekPattern, dtDay)
	Wend
End Sub

Sub InsCM(wd, st_ID, theRoomID, theTeacherID)
	Dim dtDay, nCMID
	Dim strCurrInvalid_Room, strCurrInvalid_ClSubj, strCurrInvalid_Teacher
	Dim nStartWeekDay

	nStartWeekDay = WeekDay(dtStartChngPeriod, vbSunday)
	dtDay = dtStartChngPeriod
	While WeekDay( dtDay, vbSunday ) <> CLng(wd)
		dtDay = DateAdd("d", 1, dtDay)
	Wend

	If nStartWeekDay > WeekDay( dtDay, vbSunday ) Then
		dtDay = DateAdd("d", (nPattern - 1) * kWeekLen, dtDay)
	End If

	If IsDull(theRoomID) Then theRoomID ="-1"
	strCurrInvalid_Room = ""
	
	While DateDiff("d", dtDay, dtEndChngPeriod, 0, 0) >= 0
		If DayIsLearning(dtDay) Then
			nCMID = GetCMID(dtDay, st_ID, strSubjClassID)
			' достаточно обнаружить первое пересечение
			If strCurrInvalid_Room = "" Then strCurrInvalid_Room = IsRoomAvailable(dtDay, theRoomID, st_ID)
			If strCurrInvalid_ClSubj = "" Then strCurrInvalid_ClSubj = IsClassSubjectGroupAvailable(dtDay, st_ID, nCMID) '0)
			If strCurrInvalid_Teacher = "" Then strCurrInvalid_Teacher = IsTeacherAvailable(dtDay, theTeacherID, st_ID)

			If nCMID <> 0 Then
				Call UpdateCM(nCMID, dtDay, st_ID, theRoomID, theTeacherID)
			Else
				Call InsertCM(dtDay, st_ID, theRoomID, theTeacherID)
			End If
		Else
			strOnNonLearningDay = strOnNonLearningDay & Date2Str(dtDay) & ", "
		End If

		dtDay = DateAdd( "d", oneWeekPattern, dtDay)
	Wend

	strInvalid_Room			= strInvalid_Room & strCurrInvalid_Room
	strInvalid_ClSubj		= strInvalid_ClSubj & strCurrInvalid_ClSubj
	strInvalid_Teacher		= strInvalid_Teacher & strCurrInvalid_Teacher
End Sub

Function IsTimeCollision(st, st_old, exCMID, CMID)
' Вернет true, если время CM будет перемещено на уже существующее время CM
	IsTimeCollision = False

	If exCMID > 0 Then ' Целевой CM есть, коллизии могут быть
		'Раньше учитывались коллизии только в одном дне теперь учитывается и перенос на занятый уже урок в другой день
		If st <> st_old Then ' Время урока целевого CM'а отличается от изменяемого; возможно, новое время создаст коллизию
			If exCMID <> CMID Then
				' Будет коллизия, так как это попытка поставить CM на время существующего CM'а того же урока
				IsTimeCollision = True
			End If
		End If
	End If
End Function

Sub UpdCM(wd, st_ID, theRoomID, theTeacherID, wd_old, st_ID_old)
	Dim dtDay, nCMID, nExistingCMID
	Dim strCurrInvalid_Room, strCurrInvalid_ClSubj, strCurrInvalid_Teacher
	Dim nStartWeekDay
	Dim nMovingDelta

	nStartWeekDay = WeekDay(dtStartChngPeriod, vbSunday)
	dtDay = dtStartChngPeriod
	nMovingDelta = (wd_old - wd)
	While WeekDay(dtDay, vbSunday) <> CLng(wd)
		dtDay = DateAdd( "d", 1, dtDay)
	Wend

	If nStartWeekDay > WeekDay(dtDay, vbSunday) Then dtDay = DateAdd("d", (nPattern - 1) * kWeekLen, dtDay)
	If IsDull(theRoomID) Then theRoomID ="-1"
	
	strCurrInvalid_Room = ""
	While DateDiff("d", dtDay, dtEndChngPeriod, 0, 0) >= 0
		strCurrInvalid_Room			= ""
		strCurrInvalid_ClSubj		= ""
		strCurrInvalid_Teacher		= ""

		nCMID = GetCMID(DateAdd("d", nMovingDelta, dtDay), st_ID_old, strSubjClassID)

		If DayIsLearning(dtDay) Then
			nExistingCMID = GetCMID(dtDay, st_ID, strSubjClassID)

			If Not IsTimeCollision(st_ID, st_ID_old, nExistingCMID, nCMID) Then
				strCurrInvalid_Room			= IsRoomAvailable(dtDay, theRoomID, st_ID)
				strCurrInvalid_ClSubj		= IsClassSubjectGroupAvailable(dtDay, st_ID, nCMID)
				strCurrInvalid_Teacher		= IsTeacherAvailable(dtDay, theTeacherID, st_ID)
				
				If nCMID <> 0 Then
					Call UpdateCM(nCMID, dtDay, st_ID, theRoomID, theTeacherID)
				Else
					Call InsertCM(dtDay, st_ID, theRoomID, theTeacherID)
				End If
			Else
				strAlreadyExistingCMs = strAlreadyExistingCMs & Date2Str(dtDay) & ", "
			End If
		Else
			strOnNonLearningDay = strOnNonLearningDay & Date2Str(dtDay) & ", "
			If nCMID <> 0 Then
				'Если переносится урок с рабочего дня на выходной, то его необходимо удалить, если нет зависимостей(посещаемости и заданий)
				Dim bExistsAttendanceOrAssignments
				bExistsAttendanceOrAssignments = DoAttendancesExistByCMID(nCMID)
				If Not bExistsAttendanceOrAssignments Then
					bExistsAttendanceOrAssignments = DoAssignmentsExistByCMID(nCMID)
				End If

				If bExistsAttendanceOrAssignments Then 
					Dim objClassmeetingInfoRs
					Set objClassmeetingInfoRs = objNSNET.ClassmeetingInfo_Execute(objCmdClassMeetingInfo, nCMID)

					strExistsAttendancesOrAssignments = strExistsAttendancesOrAssignments & Date2Str(DateAdd("d", nMovingDelta, dtDay)) & obLanguage("Calendar","kRelayLesson") & objClassmeetingInfoRs("TIMENAME") & ", "
				Else
					RemoveCM(nCMID)
				End If
			End If
		End If

		dtDay = DateAdd("d", oneWeekPattern, dtDay)

		strInvalid_Room			= strInvalid_Room & strCurrInvalid_Room
		strInvalid_ClSubj		= strInvalid_ClSubj & strCurrInvalid_ClSubj
		strInvalid_Teacher		= strInvalid_Teacher & strCurrInvalid_Teacher
	Wend
End Sub%>
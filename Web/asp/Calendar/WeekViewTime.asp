<!-- #INCLUDE FILE=../header1.asp -->
<!-- #INCLUDE FILE=../scripts/teacher.asp -->
<!-- #INCLUDE FILE=../scripts/filterYears.asp -->
<!-- #INCLUDE FILE=../scripts/filterClasses.asp -->
<!-- #INCLUDE FILE=../scripts/filterClasses_IUP.asp -->
<!-- #INCLUDE FILE=../scripts/filterWeeks.asp -->
<!-- #INCLUDE FILE="WeekView_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="SchedCommon_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strIupGrade2, nNumClasses
Dim strRawId, strRawId2
Dim strClassID_IUP2
Dim arrClasses_IUP, nFirst, nLast, arrClassesRange
Dim objTimesRs, objScheduleGradesRs, objScheduleClassesRs
Dim objCmdScheduleTimes
Dim strClasses, strGrades

Sub specialWriteState()
	WriteClass_IUP
	Call obTokenMgr.SetData(strToken, stCalendarClass2, strClassID_IUP2)
	Call obTokenMgr.SetData(strToken, stCalendarWeekViewType, "/asp/Calendar/WeekViewTime.asp")
	Call obTokenMgr.SetData(strToken, stTempString, strTable)
End Sub

Sub specialMain()
	Dim objVariantsRs, strVariantIDs

	nViewID = 0

	If bAll Then
		Set objClasses_IUP_rs = objNSNET.GetYearClasses_IUP(CLng(strCurrYearID), False)
	Else
		' GetClassListForTeacherAndChief в отличие от GetClassListForTeachersPlusChief показывает не только классы,
		' по которым задано расписание, но и классы, где данный учитель назначен преподавать.
		Set objClasses_IUP_rs = objNSNET.GetClassListForTeacherAndChief_IUP(strUserID, strCurrYearID)
	End If

	If objClasses_IUP_rs.EOF Then strClassID_IUP ="0": Exit Sub
	arrClasses_IUP = objClasses_IUP_rs.GetRows(,,Array("ID", "NAME"))
	
	Call GetClass_IupRangeIDs()
	arrClassesRange = GetClassIDArray()

	If strClassID_IUP = strClassID_IUP2 Then
		Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, BDate, strTermID, strTermName)
		If strTermID = "" Then
			Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, EDate, strTermID, strTermName)
		End If
	End If
	If nNumClasses = 0 Then Exit Sub

	strClasses = ""
	strGrades = ""
	Call GetGradesAndClassesList(strGrades, strClasses)
	If Not IsDull(strGrades) Then Set objScheduleGradesRs = objNSNET.GetScheduleForGrades(strCurrYearID, BDate, EDate, strGrades, nRelay, false, 0)
	If Not IsDull(strClasses) Then Set objScheduleClassesRs = objNSNET.GetScheduleForClasses(BDate, EDate, strClasses, nRelay, false)

	Set objVariantsRs = objNSNET.GetStVariantsForClassesAndGrades(strCurrYearID, strClasses, strGrades)
	strVariantIDs = JoinRsField(objVariantsRs, "VARIANTID")
	bEmptyScheduleTimes = IsDull(strVariantIDs)

	If Not bEmptyScheduleTimes Then
		Set objCmdScheduleTimes = objNSNET.GetScheduleTimeListForDay_Prepare(strCurrYearID, strVariantIDs, nRelay, False)
	End If
	Call WriteTable()
End Sub

Sub onHead()
	Call CommonHeadFunctions()%>
	
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/schedule/css/schedule.min.css")%>"><%
End Sub

Sub GetGradesAndClassesList(ByRef strGrades, ByRef strClasses)
	Dim i, strClassIdTmp, strGradeTmp, bIsGradeTmp
		
	For i = 0 to Ubound(arrClassesRange, 1)
		Call ParseIupClassId(arrClassesRange(i), strClassIdTmp, strGradeTmp, bIsGradeTmp)
		If bIsGradeTmp THen
			If IsDull(strGrades) Then
				strGrades = strGradeTmp
			Else
				strGrades = strGrades & " ," & strGradeTmp
			End If
		Else
			If IsDull(strClasses) Then
				strClasses = strClassIdTmp
			Else
				strClasses = strClasses & " ," & strClassIdTmp
			End If
		End If
	Next
End Sub

Sub onDrawDoublClasses(strForm)
	If strClassID_IUP = "0" Then
		Call DrawInfo(IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)), False)
		bExit = True

		Exit Sub
	End If

	OpenFormGroup(filterClasses)%>
		<div class="input-group">
			<select name="CLID1" class="form-control" onChange="OnChangeSelect('<%=strForm%>', '<%=strScriptName%>');"><%PopulateSelectArray arrClasses_IUP, strClassID_IUP %></select> 
			<span class="input-group-addon"><%=obLanguage("Calendar","kTo")%></span>
			<select name="CLID2" class="form-control form-control-inline" onChange="OnChangeSelect('<%=strForm%>', '<%=strScriptName%>');"><%PopulateSelectArray arrClasses_IUP, strClassID_IUP2 %></select>
		</div><%
	CloseFormGroup
End Sub

Sub specialFilters(strForm)
	Call onDrawDoublClasses(strForm)
End Sub

Sub specialDraw()
	Call onDrawWeekTable()

	If bEmptyScheduleTimes Then Exit Sub
End Sub

Sub DrawLinkButtons()
	If bEmptyScheduleTimes Then Exit Sub
	Call DrawPrintButtons()
End Sub

Sub onDrawWeekTable()
	If nNumClasses = 0 Then%>
		<div class="row">
			<div class="col-md-8 col-lg-6"><%
				Call DrawInfo(obLanguage("Calendar","kNoClassRange") & filterClasses & ".", False)%>
			</div>
		</div><%
		Exit Sub
	End If

	If bEmptyScheduleTimes Then%>
		<div class="row">
			<div class="col-md-8 col-lg-6"><%
				Call DrawInfo(obLanguage("Calendar","kNoClassMeetings"), False)%>
			</div>
		</div><%
		Exit Sub
	End If%>

	<div class="row">
		<div class="col-md-12">
			<%=strTable%>
		</div>
	</div><%
End Sub

Sub GetClass_IupRangeIDs()
	Dim objClassInfo, bGradeExistInCurrYear, strCurrClass, strCurrClass_IUP, i, bSafeCurrClass
	bSafeCurrClass = False

	If IsDull(Request("CLID1")) Then
		strCurrClass = obTokenMgr.GetData( strToken, stCurrClass)
		strCurrClass_IUP = obTokenMgr.GetData( strToken, stCurrClass_IUP)

		If Not IsDull(strCurrClass) And IsDull(strCurrClass_IUP) Then
			strCurrClass_IUP = strCurrClass & "_0"
		End If

		For i = 0 to UBound(arrClasses_IUP, 2)
			If arrClasses_IUP(0, i) = strCurrClass_IUP Then
				bSafeCurrClass = True
				Exit For
			End If
		Next

		If Not bSafeCurrClass Then 
			Call ParseIupClassId(arrClasses_IUP(0, 0), strClassID, strIupGrade, bIsIupGrade)
			strCurrClass_IUP = arrClasses_IUP(0, 0)
			strCurrClass = strClassID
		End If

		If IsDull(strCurrClass_IUP) Then
			If IsDull(strCurrClass) Then
				strClassID_IUP = "0"
			Else
				strClassID_IUP = IIF(strCurrClass <> "-1", strCurrClass & "_0", strCurrClass)
			End If
		Else
			strClassID_IUP = strCurrClass_IUP
		End If
	Else
		strClassID_IUP = CStr(Request("CLID1"))
	End If

	If strClassID_IUP <> "0" And strClassID_IUP <> "-1" Then 
		Call ParseIupClassId(strClassID_IUP, strClassID, strIupGrade, bIsIupGrade)

		If Not bIsIupGrade Then 
			Set objClassInfo = objNSNET.GetClassInfo(strClassID)
	
			If objClassInfo.EOF Or CLng(objClassInfo("SCHOOLYEARID")) <> CLng(strCurrYearID)Then
				strClassID_IUP	= CStr(arrClasses_IUP(0,0))
				strClassID_IUP2 = strClassID_IUP
			Else
				strClassID_IUP2	= GetSafeRequest("CLID2", strClassID_IUP)
			End If
		Else
			bGradeExistInCurrYear = objNSNET.GetGradeInfo(CLng(strIupGrade), CLng(strCurrYearID))

			If Not bGradeExistInCurrYear Then
				strClassID_IUP	= CStr(arrClasses_IUP(0,0))
				strClassID_IUP2 = strClassID_IUP
			Else
				strClassID_IUP2	= GetSafeRequest("CLID2", strClassID_IUP)
			End If
		End If
	Else
		strClassID_IUP = CStr(arrClasses_IUP(0,0))
		strClassID_IUP2 = strClassID_IUP
	End If
End Sub

Function GetClassIDArray()
	Dim strI, i, arrIDs

	nNumClasses = 0
	ReDim arrIDs(-1)

	For i = 0 To Ubound(arrClasses_IUP, 2)
		strI = CStr(arrClasses_IUP(0,i))

		If strI = strClassID_IUP Then
			nFirst = i : nNumClasses = 1
			ReDim arrIDs(UBound(arrClasses_IUP, 2) - nFirst)
			arrIDs(0) = strI

			If strI = strClassID_IUP2 Then
				nLast = nFirst
				ReDim Preserve arrIDs(0)
				GetClassIDArray = arrIDs

				Exit Function
			End If

			For nLast = nFirst + 1 To UBound(arrClasses_IUP, 2)
				strI = CStr(arrClasses_IUP(0,nLast))
				arrIDs(nNumClasses) = strI
				nNumClasses = nNumClasses + 1

				If strI = strClassID_IUP2 Then
					ReDim Preserve arrIDs(nNumClasses-1)
					GetClassIDArray = arrIDs

					Exit Function
				End If
			Next

			nLast = UBound(arrClasses_IUP, 2)
			strClassID_IUP2 = strI

			Exit For
		End If
	Next

	GetClassIDArray = arrIDs
End Function

Sub WriteTable()
	Dim i, j, k, n, strSchedNums, dtDate, arrTimesRs, bEmpty
	Dim nWeekDayNum
	Dim strClassIdTmp, strGradeTmp, bIsGradeTmp

	If bEmptyScheduleTimes Then
		strTable = ""
		Exit Sub
	End If

	strTable = "<table class=""schedule-table table table-bordered table-thin table-xs print-block""><tr>"
	strTable = strTable & "<th class=""leftheader"">" & obLanguage("Common","kDay") & "</th><th class=""leftheader"">" & obLanguage("Calendar","kLessonNumber", strFunctionalityType) & "</th><th class=""leftheader"">" & obLanguage("Calendar","kLessonTime", strFunctionalityType) & "</th>"
	For i = nFirst To nLast
		strTable = strTable & "<th class=""schedule-table-header"">" & DB2HTML(arrClasses_IUP(1,i)) & "</th>"
	Next
	strTable = strTable & "</tr>"
	
	bEmptyScheduleTimes = True
	For i = 0 To 6
'		dtDate = BDate + i
		dtDate = DateAdd("d", i, BDate)

		nWeekDayNum = WeekDay(dtDate, vbSunday)
		Set objTimesRs = objNSNET.GetScheduleTimeListForDay_Execute(objCmdScheduleTimes, nWeekDayNum)

		If Not objTimesRs.EOF Then
			bEmptyScheduleTimes = False
			
			strSchedNums = "<td class=""leftheader text-center"">"
			arrTimesRs = objTimesRs.GetRows(,,Array("RELAY", "SCHEDULETIMENUMBER", "STARTTIME", "ENDTIME", "VARIANTID"))
			For n = 0 To UBound(arrTimesRs, 2)
				strSchedNums = strSchedNums & "<nobr>" & arrTimesRs(1,n) & "<nobr>" & "<br>"
			Next
			strSchedNums = strSchedNums & "</td>"

			strSchedNums = strSchedNums & "<td class=""leftheader text-center"">"
			For n = 0 To UBound(arrTimesRs, 2)
				strSchedNums = strSchedNums & "<nobr>" & Time2Str(arrTimesRs(2,n)) & "-" & Time2Str(arrTimesRs(3,n)) & "<nobr>" & "<br>"
			Next
			strSchedNums = strSchedNums & "</td>"

			strTable = strTable & "<tr><th class=""leftheader"">" & WeekDayName(WeekDay(dtDate, vbSunday), True, vbSunday) & "</th>" & strSchedNums
			For j = nFirst To nLast
				Call ParseIupClassId(arrClasses_IUP(0,j), strClassIdTmp, strGradeTmp, bIsGradeTmp)
				strTable = strTable & "<td class=""class-schedule-day"">"
				For k = 0 To UBound(arrTimesRs, 2)
					bEmpty = True

					If Not bIsGradeTmp Then
						Do While Not objScheduleClassesRs.EOF
							'If objScheduleClassesRs("DAY") <> dtDate Or _
							If DateDiff("d", objScheduleClassesRs("DAY"), dtDate, 0, 0) <> 0 Or _
								CLng(objScheduleClassesRs("PCLASSID")) <> CLng(strClassIdTmp) Or _
								CLng(objScheduleClassesRs("RELAY")) <> CLng(arrTimesRs(0,k)) Or CLng(objScheduleClassesRs("SCHEDULETIMENUMBER")) <> CLng(arrTimesRs(1,k)) Or _
									CLng(objScheduleClassesRs("VARIANTID")) <> CLng(arrTimesRs(4,k)) Then Exit Do
							If Not bEmpty Then strTable = strTable & ",&nbsp;"
							strTable = strTable & DB2HTML(objScheduleClassesRs("SUBJECTABBREV"))

							If Not IsDull(objScheduleClassesRs("GROUPABBREV")) Then strTable = strTable & "/" & DB2HTML(objScheduleClassesRs("GROUPABBREV"))
							If Not IsDull(objScheduleClassesRs("ROOM")) Then strTable = strTable & "&nbsp;[" & DB2HTML(objScheduleClassesRs("ROOM")) & "]"
							objScheduleClassesRs.MoveNext

							bEmpty = False
						Loop
					Else
						Do While Not objScheduleGradesRs.EOF
							'If objScheduleGradesRs("DAY") <> dtDate Or _
							If DateDiff("d", objScheduleGradesRs("DAY"), dtDate, 0, 0) <> 0 Or _
								CLng(objScheduleGradesRs("GRADE")) <> CLng(strGradeTmp) Or _
								CLng(objScheduleGradesRs("RELAY")) <> CLng(arrTimesRs(0,k)) Or CLng(objScheduleGradesRs("SCHEDULETIMENUMBER")) <> CLng(arrTimesRs(1,k)) Or _
									CLng(objScheduleGradesRs("VARIANTID")) <> CLng(arrTimesRs(4,k)) Then Exit Do
							If Not bEmpty Then strTable = strTable & ",&nbsp;"
							strTable = strTable & DB2HTML(objScheduleGradesRs("NAME")) 
							If Not IsDull(objScheduleGradesRs("IUP_LEVEL")) Then
								strTable = strTable & "/" & DB2HTML(objScheduleGradesRs("IUP_LEVEL"))
							End If
							If Not IsDull(objScheduleGradesRs("ROOM")) Then strTable = strTable & "&nbsp;[" & DB2HTML(objScheduleGradesRs("ROOM")) & "]"
							objScheduleGradesRs.MoveNext
							bEmpty = False
						Loop
					End If

					If bEmpty Then strTable = strTable & "-<br>" Else strTable = strTable & "<br>"
				Next
				strTable = strTable & "</td>"
			Next
			strTable = strTable & "</tr>"
		End If
	Next
	Call objNSNET.DisposeCommand(objCmdScheduleTimes)
	strTable = strTable & "</table>"
	
	If bEmptyScheduleTimes Then strTable = ""
End Sub%>
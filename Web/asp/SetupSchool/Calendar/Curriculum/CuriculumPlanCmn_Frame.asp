<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_Year.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/ScreenNonPrint.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterProfiles.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterDirections.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/CuriculumPlanDraw_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objSubjectFields, objRsTotal
Dim strTermID
Dim nOldCompIDCompare

Sub ReadState()
	strTermID = obTokenMgr.GetData(strToken, stCurrTerm)
	strProfileID = obTokenMgr.GetData(strToken, stCurrProfile)
	strDirectionID = obTokenMgr.GetData(strToken, stCurrDirection)
	nScrolBarWidth = GetSafeLng(obTokenMgr.GetData(strToken, "nScrolBarWidth"), -1)
	nColsCount = CInt(Request("CC"))

	readonly = objNSNET.IsYearClosed(strCurrYearID)
	
	InitCuriculum
End Sub

Sub Main
	InitMain
End Sub

Sub DrawCuriculumPlanInner()
	Dim strSubjectFieldName, nRowCount, strTDAdd
	Dim strFieldID, strFieldIDForCurSubject
	Dim nCntClsInGrade, nCntClsInComp, arrParentIDs, arrGradeClasses
	Dim strClassID, strCell, i, nCount

	Call GetCurriculumColumnsCmn()
	If nPCount <= 0 Then
		DrawInfo obLanguage("SetupSchoolCurPlan","kNoClassesForGradeAndPeriodType",strFunctionalityType), False
		Exit Sub
	End If
	nCount = 1

	%><form name="List" method="post" action="CuriculumPlanSave.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("GradeMin", nFilterGradeMin, "GradeMax", nFilterGradeMax)) %>

	<table border="1" class="curiculum-plan table-xs text-compact table-hover <%=IIF(readonly, "readonly", "")%>" id="plan-table" >
		<tr style="visibility:hidden;" id="help-row"><th colspan="2" id="scol"></th><%

			For i = 0 To nPCount-1
				arrGradeClasses = arrClasses(i, 0)
				If bViewByGrade Then
					%><th></th><%
					nCount = nCount + 1
				Else
					If IsArray(arrGradeClasses) Then
						For j = 0 To Ubound(arrGradeClasses, 2)
							%><th>
								<input type="hidden" value="<%=arrGradeClasses(0, j)%>" name="classid"/>
								<input type="hidden" value="<%=arrCuriculumGrades(i)%>" name="gradeid"/>
							  </th><%
							nCount = nCount + 1
						Next
					Else
						%><th></th><%
						nCount = nCount + 1
					End If
				End If
			Next
			%></tr><%
			
	If Not bViewByGrade And Not bIsIUPCuriculum Then Call PrintTeachingLoad()

	strOldCompID = -1
	nSubj = 0 ' counters for INPUT boxes
	nComp = 0
	strFieldID = "0"
	' Important! The rowspan for COMPONENTNAME row/column is defined by implication via objSubjectFields.
	Call PrepareTotalData()

	While Not objCuriculum.EOF
		strCompID = CLng(objCuriculum("COMPONENTID"))
		strSubjID = CLng(objCuriculum("SUBJECTID"))
		lngProfileID = CLng(objCuriculum("PROFILEID"))
		strCuriculumGradeID = CLng(objCuriculum("GRADEID"))
		strClassID = GetSafeStr(objCuriculum("CLASSID"), -1, "0") ' if field ClassID in Recordset is Null then strClassID=0
		strValue = CDbl(objCuriculum("HOURS"))

		If strCompID <> strOldCompID Then
			Call OnNewComponent()

			If strCompID <> 0 Then
				k = 0
				nCntClsInComp = 0
				For i = 0 To nPCount - 1
					bClassesExists = IsArray(arrClasses(i, 0))
					If arrIsAvailableColumn(i) And bClassesExists Then
						nCntClsInGrade = arrClasses(i, 1)
						nCntClsInComp = nCntClsInComp + nCntClsInGrade
						k = k + 1
						arrGradeClasses = arrClasses(i, 0)
					End If
				Next
				' может быть k = 0, это когда ни разу не выполнилось условие (arrIsAvailableColumn(i) And bClassesExists).
				If k > 0 Then
					If strOldCompID <> nOldCompIDCompare Then
						NSubj = 0
					End If
					nComp = nComp+1
				End If
			End If 

			%></b></td><%

			strOldCompID = strCompID
			strOldSubjID = strSubjID
			nPrRecord = 0
			nClassRecord = 0
		ElseIf strSubjID <> strOldSubjID Then
			nSubj = nSubj + 1
			
			Call fillEnd()

			If strOldSubjID = 0 Then
				Call Total(strCompID)
				strFieldID = "0" ' reset FieldID
			End If
			strOldSubjID = strSubjID

			' get FieldID from Curiculum
			If isNull(objCuriculum("FIELDID")) Then
				strFieldIDForCurSubject = ""
			Else
				strFieldIDForCurSubject = GetSafeID(objCuriculum("FIELDID"), Null)
			End If

			If strFieldID <> strFieldIDForCurSubject Then
				'handle subject field here
				'test accordance first
				If objSubjectFields.EOF Then GenerateError obLanguage("SetupSchoolCurPlan","kInvalidSubjectFieldList")
				nRowCount = CLng(objSubjectFields("SubjCnt"))

				If nRowCount <> 1 Then strTDAdd = " rowspan=""" & nRowCount & """ valign=""top""" Else strTDAdd = ""

				strSubjectFieldName = objSubjectFields("FIELDNAME")
				If IsDull(strSubjectFieldName) Then
					strSubjectFieldName = obLanguage("SetupSchoolCalendar","kEmptySubjectField")
				End If
				' get actual FieldID
				If isNull(objSubjectFields("FIELDID")) Then
					strFieldID = ""
				Else
					strFieldID = GetSafeID(objSubjectFields("FIELDID"), Null)
				End If
				'test accordance also
				If strFieldID <> strFieldIDForCurSubject Then GenerateError obLanguage("SetupSchoolCurPlan","kInvalidSubjectFieldList")

				objSubjectFields.MoveNext

				%><tr class="subject-field-row"><td colspan="<%=nCount+1%>"><b><%=DB2HTML_BR(strSubjectFieldName)%></b></td></tr><%
			End If

			%><tr class="subject-row text-center"><%

			strSubjName = DB2HTML_BR(CStr(objCuriculum("SUBJECTNAME")))
				%><td class="text-left text-break text-compact" colspan="2">
					<%=WriteHiddenTags(Array("COMPID", strCompID, "SUBJID", strSubjID))%>

					<span class="subject-name"><%=strSubjName%></span>
				</td><%
		End If
		
		Do While nPrRecord < nPCount
			bMoveNext = (strSubjID = 0) And _
				(((lngProfileID = arrProfiles(nPrRecord)) And (strCuriculumGradeID < arrCuriculumGrades(nPrRecord))) Or _
				(lngProfileID < arrProfiles(nPrRecord)))

			If bMoveNext Then Exit Do

			nClassRowCnt = GetClassRowCnt(nPrRecord)
			bClassesExists = IsArray(arrClasses(nPrRecord, 0))

			If (lngProfileID = arrProfiles(nPrRecord)) And (strCuriculumGradeID = arrCuriculumGrades(nPrRecord)) Then
				If strSubjID = 0 Then
					%><td colspan="<%=nClassRowCnt%>"><%=strValue%></td><%
					nPrRecord = nPrRecord + 1
					nClassRecord = 0
				Else
					If Not bClassesExists Then GenerateError obLanguage("Common","kUnexpErr")

					nClassRecordCurr = GetClassNumInGrade(arrClasses(nPrRecord, 0), strClassID)
					For i = nClassRecord To nClassRecordCurr - 1
						Call PrintHours("", i, arrClasses(nPrRecord, 1) - 1, readonly)
					Next

					Call PrintHours(strValue, nClassRecordCurr, arrClasses(nPrRecord, 1) - 1, readonly)
					
					If nClassRecordCurr = (arrClasses(nPrRecord, 1) - 1) Then
						nPrRecord = nPrRecord+1
						nClassRecord = 0
					Else
						nClassRecord = nClassRecordCurr + 1
					End If
				End If

				Exit Do
			ElseIf arrIsAvailableColumn(nPrRecord) Then
				If Not bClassesExists Then
					%><td class="no-input" colspan="<%=nClassRowCnt%>">&nbsp;</td><%
				Else
					For i = nClassRecord To (arrClasses(nPrRecord, 1) - 1)
						Call PrintHours("", i, arrClasses(nPrRecord, 1) - 1, readonly)
					Next
				End If

				nPrRecord = nPrRecord + 1
				nClassRecord = 0
			Else%>
				<td class="no-input" colspan="<%=nClassRowCnt-nClassRecord%>">&nbsp;</td><%
				nPrRecord = nPrRecord + 1
				nClassRecord = 0
			End If
		Loop
		objCuriculum.MoveNext
	Wend
	
	Call fillEnd()
	%></table><%

	objRsTotal.Close
	Set objRsTotal = Nothing
	DrawCuriculumJs
	objCuriculum.Close
	Set objCuriculum = Nothing
	%></form><%
End Sub

Sub fillEnd()
	Dim strCell

	Do While nPrRecord < nPCount
		nClassRowCnt = GetClassRowCnt(nPrRecord)
		bClassesExists = IsArray(arrClasses(nPrRecord, 0))

		If arrIsAvailableColumn(nPrRecord) Then
			If Not bClassesExists Then
				%><td class="no-input" colspan="<%=nClassRowCnt%>">&nbsp;</td><%
			Else
				For i = nClassRecord To (arrClasses(nPrRecord, 1) - 1)
					Call PrintHours("", i, arrClasses(nPrRecord, 1) - 1, IIf((strOldSubjID<>0), readonly, True))
				Next
			End If
		Else
			If strOldSubjID = 0 Then
				If bViewByGrade Then%>
					<td class="no-input">&nbsp;</td><%
				Else
					For i = nClassRecord To (arrClasses(nPrRecord, 1) - 1)%>
						<td class="no-input">&nbsp;</td><%
					Next
				End If
			Else
				%><td class="no-input" colspan="<%=nClassRowCnt-nClassRecord%>">&nbsp;</td><%
			End If
			
			Response.Write strCell
		End If
		nPrRecord = nPrRecord + 1
		nClassRecord = 0
	Loop
	nPrRecord = 0
	nClassRecord = 0
	%></tr><%
End Sub

Sub Total( ByVal strCompID )
	Dim fHours, totClassID, strClassName, strCell
	Dim nProfile, nGradeID, nClassID
	Dim bTheSameClass

	%><tr class="<%=IIF(strCompID <> 0, "component-fact-load-row", "total-fact-load-row")%>" id="componnent-<%=strCompID%>-fact-load-row"><td class="text-compact"><B><%=obLanguage("SetupSchoolCurPlan","kFactual")%>:</B></td><%
	nPrRecord = 0
	nClassRecord = 0
	
	If objRsTotal.RecordCount > 0 Then
		objRsTotal.MoveFirst

		If strCompID <> 0 Then
			Do While (CLng(objRsTotal("COMPONENTID")) <> CLng(strCompID))
				objRsTotal.MoveNext

				If objRsTotal.EOF Then Exit Do
			Loop
		End If
	End If

	Do While (nPrRecord < nPCount) And (Not objRsTotal.EOF)
		nClassRowCnt = GetClassRowCnt(nPrRecord)
		bClassesExists = IsArray(arrClasses(nPrRecord, 0))
		
		If (CLng(objRsTotal("PROFILEID")) = arrProfiles(nPrRecord)) And (CLng(objRsTotal("GRADEID")) = arrCuriculumGrades(nPrRecord)) Then
			totClassID = CStr(objRsTotal("CLASSID"))

			if strCompID = 0 Then
				nProfile = CLng(objRsTotal("PROFILEID"))
				nGradeID = CLng(objRsTotal("GRADEID"))
				nClassID = CStr(objRsTotal("CLASSID"))
				fHours = 0

				Do
					fHours = fHours + CDbl(objRsTotal("HOURS"))
					objRsTotal.MoveNext

					If Not objRsTotal.EOF Then
						bTheSameClass = (nProfile = CLng(objRsTotal("PROFILEID")) And nGradeID = CLng(objRsTotal("GRADEID")) And nClassID = CStr(objRsTotal("CLASSID")))
					Else
						bTheSameClass = False
					End If
				Loop While (Not objRsTotal.EOF And bTheSameClass)
			else
				fHours = CDbl(objRsTotal("HOURS"))
			end if

			If Not bClassesExists Then GenerateError obLanguage("Common","kUnexpErr")

			nClassRecordCurr = GetClassNumInGrade(arrClasses(nPrRecord, 0), totClassID)
			For i = nClassRecord To nClassRecordCurr - 1
				Call PrintHours("", i, arrClasses(nPrRecord, 1) - 1, True)
			Next
			Call PrintHours(fHours, nClassRecordCurr, arrClasses(nPrRecord, 1) - 1, True)

			If nClassRecordCurr = (arrClasses(nPrRecord, 1) - 1) Then
				nPrRecord = nPrRecord+1
				nClassRecord = 0
			Else
				nClassRecord = nClassRecordCurr + 1
			End If

			If strCompID <> 0 Then
				objRsTotal.MoveNext

				If Not objRsTotal.EOF Then
					Do While (CLng(objRsTotal("COMPONENTID")) <> CLng(strCompID))
						objRsTotal.MoveNext
						If objRsTotal.EOF Then Exit Do
					Loop
				End If
			End IF
		ElseIf arrIsAvailableColumn(nPrRecord) or bIsIUPCuriculum Then
			If Not bClassesExists Then
				%><td colspan="<%=nClassRowCnt%>">&nbsp;</td><%
			Else
				For i = nClassRecord To (arrClasses(nPrRecord, 1) - 1)
					Call PrintHours("", i, arrClasses(nPrRecord, 1) - 1, True)
				Next
			End If
			nPrRecord = nPrRecord+1
			nClassRecord = 0
		Else
			%><td colspan="<%=nClassRowCnt%>">&nbsp;</td><%
			nPrRecord = nPrRecord + 1
			nClassRecord = 0
		End If
	Loop

	Call fillEnd()
End Sub

Sub PrintTeachingLoad()
	Dim objCmd, objRs, arrGradeClasses, strClassID, strLoad
	Dim strCell

	Set objCmd = objNSNET.GetClassTeachingLoad_Prepare(strTermID)
	%><tr class="total-teacher-load-row text-center text-compact"><td colspan="2"><b><%=obLanguage("SetupSchoolCurPlan","kGeneralPedagogicalLoad")%>:</b></td><%
	For i = 0 To nPCount-1
		arrGradeClasses = arrClasses(i, 0)
		If IsArray(arrGradeClasses) Then
			For j = 0 To Ubound(arrGradeClasses, 2)
				strLoad = ""
				strClassID = GetSafeID(arrGradeClasses(0, j), Null)
				Set objRs = objNSNET.GetClassTeachingLoad_Execute(objCmd, strClassID)
				If Not objRs.EOF Then strLoad = objRs("TEACHERLOAD")
				%><td><%=DB2HTML(strLoad)%></td><%
			Next
		Else
			%><td>&nbsp;</td><%
		End If
	Next
	Call objNSNET.DisposeCommand(objCmd)
	%></tr><%
	Response.Write strCell
End Sub

Function HideAddLimitsButton()
	Dim nCuriculumGradesCnt, nInvalidGradesCnt
	
	If dctInvalidIUPGrades.Count = 0 Then
		HideAddLimitsButton = False

		Exit Function
	End If

	nCuriculumGradesCnt = GetGradesCnt(arrCuriculumGrades)
	
	If nCuriculumGradesCnt = 1 Then
		HideAddLimitsButton = (dctInvalidIUPGrades(arrCuriculumGrades(0)) = 1)

		Exit Function
	End If

	nInvalidGradesCnt = 0

	For i = 0 To nCuriculumGradesCnt
		If dctInvalidIUPGrades(arrCuriculumGrades(i)) = 1 Then
			nInvalidGradesCnt = nInvalidGradesCnt + 1
		End If
	Next

	HideAddLimitsButton = (nInvalidGradesCnt = nCuriculumGradesCnt)
End Function

Sub DrawCuriculumJs
	On Error  Resume Next
	Call objCuriculum.MoveFirst
	Call objCuriculum.ComputeBy("subjectsLoad", Array("componentId", "profileId", "classId", "gradeId"))
	Call objCuriculum.ComputeBy("classesLoad", Array("componentId"))

	%><script type="text/javascript"><%
		If bIsIUPCuriculum Then
			If HideAddLimitsButton() Then%>
				var hideAddLimitsButton = true;<%
			End If
		End If%>

		var curiculumStat = <%=comHelper.DataSetAdapterHelper.ToJSON(objCuriculum, Array("componentId", Array("classesLoad", Array("classId", "profileId", "gradeId", Array("subjectsLoad", Array("subjectId", "hours")))))) %>;</script><%
	TestError "ошибка сериализации учебного плана"
End Sub

Call ReadState()
Call Main()
Call DrawCuriculumPlanInner()%>
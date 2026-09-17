<!-- #INCLUDE VIRTUAL=/asp/headerJournal.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CuriculumPlanDraw_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim objComponentList, objSubjectList, objCuriculum
Dim objRs, objRsTotal, i, j, k, strComponentID, nSubj,nComp,bMoveNext
Dim strCompID, strSubjID, strOldCompID, strOldSubjID, strCuriculumGradeID, strValue
Dim arrIsAvailableColumn,arrCuriculumGrades,arrProfiles,nPCount,lngProfileID,nPrRecord
Dim objSubjectFields, bIsFieldExists, bIsSubjectExists
Dim strTable, strHeader, strComponentName, strSubjName
Dim nCuriculum_Grades, nCuriculum_Grade, nCuriculum_View, nCuriculum_SubjGroups, bCuriculum_SubjGroups
Dim arrClasses, nClassRecord
Dim nClassRowCnt, bClassesExists, nClassRecordCurr
Dim bViewByGrade ' то же самое, что nCuriculum_View=0, только короче
Dim arrGradeClassesValues
Dim arrCompClassNames
Dim bPreSchool, arrPreSchoolGrades
Dim strAttr
Dim nScrolBarWidth
Dim nColsCount

Sub ReadState()
	strTable = obTokenMgr.GetData(strToken, stPrintTable)
	nScrolBarWidth = GetSafeLng(obTokenMgr.GetData(strToken, "nScrolBarWidth"), -1)
	nColsCount = CInt(Request("CC"))
	If Request("COMPID").Count > 1 Then
		strComponentID = Request("COMPID")(Request("COMPID").Count)
	Else
		strComponentID = GetSafeID( Request("COMPID"), GetSafeID( obTokenMgr.GetData(strToken,"COMPID"), "0") )
	End If

	readonly = objNSNET.IsYearClosed(strCurrYearID)
	If bIsEMForSchool Or bIsRegionEMForSchool Then readonly = True

	strComponentID = objNSNET.GetSafeComponentID(strComponentID, strCurrYearID)

	If IsDull(Request("Curiculum_Grades")) Then
		nCuriculum_Grades = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grades), -1)
	Else
		nCuriculum_Grades = GetSafeLng(Request("Curiculum_Grades"), Null)
	End If
	If IsDull(Request("Curiculum_Grade")) Then
		nCuriculum_Grade = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_Grade), -1)
	Else
		nCuriculum_Grade = GetSafeLng(Request("Curiculum_Grade"), Null)
	End If
	If IsDull(Request("Curiculum_View")) Then
		nCuriculum_View = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_View), 1)
	Else
		nCuriculum_View = GetSafeLng(Request("Curiculum_View"), Null)
	End If
	bViewByGrade = (nCuriculum_View = 0)
	If IsDull(Request("Curiculum_SubjGroups")) Then
		nCuriculum_SubjGroups = GetSafeLng(obTokenMgr.GetData(strToken, stCuriculum_SubjGroups), 1)
	Else
		nCuriculum_SubjGroups = GetSafeLng(Request("Curiculum_SubjGroups"), Null)
	End If
	If nCuriculum_View <> 1 Or nCuriculum_SubjGroups <> 1 Then readonly = True
End Sub


Sub Main
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If

	Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)

	nFilterGradeMin = -1
	nFilterGradeMax = -1
	If nCuriculum_Grades <> -1 Then
		Set objGrades = objNSNET.GetStageGradeList(strCurrYearID, nCuriculum_Grades)
		If nCuriculum_Grade >= 0 Then
			nCuriculum_Grade = objNSNET.GetSafeStageGradeID(nCuriculum_Grade, strCurrYearID, nCuriculum_Grades )
		End If
		'ТЕПЕРЬ КОРРЕКТНО ВЫВОДИТ ДАННЫЕ ПО 0 ПАРАЛЛЕЛИ

		If nCuriculum_Grade >= 0 Then
			nFilterGradeMin = nCuriculum_Grade
			nFilterGradeMax = nCuriculum_Grade
		Else
			Call InitSchoolSettings( objNSNET )
			If nCuriculum_Grades = 1 Then ' Младшая
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeJunior_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeJunior_Max)
			ElseIf nCuriculum_Grades = 2 Then ' Средняя
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeMiddle_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeMiddle_Max)
			ElseIf nCuriculum_Grades = 3 Then ' Старшая
				nFilterGradeMin = arrSchoolSettings(1, kSSIndex_GradeSenior_Min)
				nFilterGradeMax = arrSchoolSettings(1, kSSIndex_GradeSenior_Max)
			Else
				GenerateError obLanguage("Common","kInvalidParameter")
			End If
		End If
		nFilterGradeMin = CLng(nFilterGradeMin)
		nFilterGradeMax = CLng(nFilterGradeMax)
		If minGrade < nFilterGradeMin Then minGrade = nFilterGradeMin
		If maxGrade > nFilterGradeMax Then maxGrade = nFilterGradeMax
	End If

	Set objComponentList = objNSNET.GetComponentList(strCurrYearID)
	If strComponentID = "0" AND Not objComponentList.EOF Then strComponentID=objComponentList("COMPONENTID")
	Set objCuriculum = objNSNET.GetCurriculumStat(strCurrYearId, strSchoolID, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExist(strCurrYearID)
	bIsSubjectExists = objNSNET.DoesSubjectExist(strCurrYearID)
	If bPreSchool Then bCuriculum_SubjGroups = False Else bCuriculum_SubjGroups = True
End Sub


Sub DrawCuriculumPlanInner()
	Dim strSubjectFieldName, nRowCount, strTDAdd
	Dim strFieldID, strFieldIDForCurSubject
	Dim nCntClsInGrade, nCntClsInComp, arrParentIDs, arrGradeClasses
	Dim strClassID, strCell, i, nCount

	Call GetCurriculumColumns( arrCuriculumGrades, arrProfiles, nPCount, arrClasses )
	If nPCount <= 0 Then%><H3 ALIGN="CENTER"><%=obLanguage("SetupSchoolCurPlan","kGradeProfileNotDefined",strFunctionalityType)%></H3><%
		Exit Sub
	End If

%>
<FORM NAME="List" METHOD="post" ACTION="CuriculumPlanSave.asp" target="_parent">
	<%=WriteObligatoryTags()%>
	<input type="hidden" name="GradeMin" value="<%=nFilterGradeMin%>">
	<input type="hidden" name="GradeMax" value="<%=nFilterGradeMax%>">
	<TABLE border="1" cellpadding="0" cellspacing="0" <%=IIF(isFF,"","")%> class="PlanTable" id="PlanTable" ><%
	strHeader = obLanguage("SetupSchoolCurPlan","kPrintPlanHeader") & ": " & obTokenMgr.GetData(strToken, "CurrYearName")

	nCount = 1
	%><tr style="visibility:hidden"><td id="sfcol" style="max-width:1px; width:1px"></td><td id="scol" style="max-width:1px; width:1px"></td><%
	For i = 0 To nPCount-1
		arrGradeClasses = arrClasses(i, 0)
		If bViewByGrade Then
			%><td id="lc<%=nCount%>"></td><%
			nCount = nCount + 1
		Else
			If IsArray(arrGradeClasses) Then
				For j = 0 To Ubound(arrGradeClasses, 2)
					%><td id="lc<%=nCount%>"></td><%
					nCount = nCount + 1
				Next
			Else
				%><td id="lc<%=nCount%>"></td><%
				nCount = nCount + 1
			End If
		End If
	Next
	%></tr><%
	If Not bViewByGrade Then Call PrintTeachingLoad()

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
		strClassID = GetSafeLng(objCuriculum("CLASSID"), 0) ' if field ClassID in Recordset is Null then strClassID=0
		strValue = CDbl(objCuriculum("HOURS"))

		If strCompID <> strOldCompID Then
			Set objSubjectFields = objNSNET.GetSubjectFields(strCurrYearID, strCompID, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))

			If strOldCompID<>-1 Then Call fillEnd()
			If (strOldCompID=0) And bIsSubjectExists Then Call Total( 0 )
			arrIsAvailableColumn = GetAvailableColumns( Empty, arrCuriculumGrades, nPCount, strCurrYearID, strCompID )

			strComponentName = DB2HTML_BR(CStr(objCuriculum("COMPONENTNAME")))
			strSubjName = DB2HTML_BR(CStr(objCuriculum("SUBJECTNAME")))%>
			<TR bgcolor="#FEEAC9" align="center">
			<TD style="FONT-SIZE: 10pt;"<%If ((strOldCompID=-1) And bIsSubjectExists) Or (Not objSubjectFields.EOF) Then%> rowspan="2"<%End If%>><B><%=strComponentName%><%If strOldCompID<>-1 Then%>&nbsp;<%=obLanguage("SetupSchoolCurPlan","kComponentSmall")%><%End If%>&nbsp;</B></TD>
			<TD style="FONT-SIZE: 10pt"><B><%=strSubjName%><%

			strTable = strTable & "<tr bgcolor=""#EAEAEA"" align=""center""><th"
			If ((strOldCompID=-1) And bIsSubjectExists) Or (Not objSubjectFields.EOF) Then strTable = strTable & " rowspan=""2"""
			strTable = strTable & ">" & strComponentName
			If strOldCompID<>-1 Then strTable = strTable & " " & obLanguage("SetupSchoolCurPlan","kComponentSmall")
			strTable = strTable & "</th><th><i>" & strSubjName & "</i></th>"

			If strCompID<>0 Then
				k = 0
				nCntClsInComp = 0
				For i=0 To nPCount-1
					bClassesExists = IsArray(arrClasses(i, 0))
					If arrIsAvailableColumn(i) And bClassesExists Then
						nCntClsInGrade = arrClasses(i, 1)
						nCntClsInComp = nCntClsInComp + nCntClsInGrade%>
						<INPUT type=hidden name="Gr" value="<%=arrCuriculumGrades(i)%>">
						<INPUT type=hidden name="NClsInGr" value="<%=nCntClsInGrade%>"><%
						k=k+1
						arrGradeClasses = arrClasses(i, 0)
						For j = 0 To Ubound(arrGradeClasses, 2)%>
							<INPUT type="hidden" name="ClassName_<%=strCompID%>" value="<%=DB2Value(arrGradeClasses(1, j))%>"><%
						Next
					End If
				Next
				' может быть k = 0, это когда ни разу не выполнилось условие (arrIsAvailableColumn(i) And bClassesExists).
				If k > 0 Then%>
					<INPUT type=hidden name="CLASS_COMPID" value="<%=strCompID%>">
					<INPUT type=hidden name="NGr" value="<%=k%>">
					<INPUT type=hidden name="NClsInComp" value="<%=nCntClsInComp%>">
					<INPUT type=hidden name="CName" value="<%=DB2Value(objCuriculum("COMPONENTNAME"))%>"><%
					If strCompID=CLng(strComponentID) Then %><INPUT type=hidden name="AddComp" value="<%=nComp%>"><%End If
					If strOldCompID<>0 Then%>
						<INPUT type=hidden name="NSubj" value="<%=NSubj%>"><%NSubj = 0
					End If
					nComp = nComp+1
				End If
			End If %></B></TD><%
			strOldCompID = strCompID
			strOldSubjID = strSubjID
			nPrRecord = 0
			nClassRecord = 0
		ElseIf strSubjID <> strOldSubjID Then
			nSubj = nSubj+1
			Call fillEnd()
			If strOldSubjID = 0 Then
				Call Total( strCompID )
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
				If isNull(objSubjectFields("FIELDNAME")) Then
					strSubjectFieldName = "&nbsp;"
				Else
					strSubjectFieldName = DB2HTML_BR(objSubjectFields("FIELDNAME"))
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
				%><tr align="center"><td<%=strTDAdd%> align="left"><%=strSubjectFieldName%></td><%
				strTable = strTable & "<tr align=""center""><td" &strTDAdd& " align=""left"">" & strSubjectFieldName & "</td>"
			Else
				'subject field for cur subject is the same as for prev one
				%><tr align="center"><%
				strTable = strTable & "<tr align=""center"">"
			End If
			strSubjName = DB2HTML_BR(CStr(objCuriculum("SUBJECTNAME")))%>
	<TD align="left"><INPUT type=hidden name="COMPID" value="<%=strCompID%>">
	<INPUT type=hidden name="PSUBJID" value="<%=GetSafeID(objCuriculum("PARENTSUBJECTID"), "")%>">
	<INPUT type=hidden name="SUBJID" value="<%=strSubjID%>"><%=strSubjName%>&nbsp;</TD><%
			strTable = strTable & "<TD align=""left"">" & strSubjName & "&nbsp;</TD>"
		End If

		Do While nPrRecord < nPCount
			bMoveNext = (strSubjID=0) And _
				( ( (lngProfileID=arrProfiles(nPrRecord)) And (strCuriculumGradeID<arrCuriculumGrades(nPrRecord)) ) Or _
				(lngProfileID<arrProfiles(nPrRecord)) )

			If bMoveNext Then Exit Do

			nClassRowCnt = GetClassRowCnt(nPrRecord)
			bClassesExists = IsArray(arrClasses(nPrRecord, 0))

			If (lngProfileID=arrProfiles(nPrRecord)) And (strCuriculumGradeID=arrCuriculumGrades(nPrRecord)) Then
				If strSubjID=0 Then
					%><TD<%=IIf(nClassRowCnt=1, strAttr, "")%> colspan="<%=nClassRowCnt%>"><%=strValue%><%
					If strCompID<>0 And bClassesExists Then%>
						<INPUT type=hidden name="Plan" value="<%=strValue%>"><%
					End If%></TD><%
					strTable = strTable & "<TD" & IIf(nClassRowCnt=1, strAttr, "") & " colspan=""" &nClassRowCnt& """>" & strValue & "</TD>"
					nPrRecord = nPrRecord+1
					nClassRecord = 0
				Else
					If Not bClassesExists Then GenerateError obLanguage("Common","kUnexpErr")
					nClassRecordCurr = GetClassNumInGrade(arrClasses(nPrRecord, 0), strClassID)
					For i = nClassRecord To nClassRecordCurr - 1
						strTable = strTable & PrintHours("", i, arrClasses(nPrRecord, 1) - 1, readonly)
					Next
					strTable = strTable & PrintHours(strValue, nClassRecordCurr, arrClasses(nPrRecord, 1) - 1, readonly)
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
					strCell = "<TD" & IIf(nClassRowCnt=1, strAttr, "") & " colspan=""" & nClassRowCnt & """>&nbsp;</TD>"
					strTable = strTable & strCell
					Response.Write strCell
				Else
					For i = nClassRecord To (arrClasses(nPrRecord, 1) - 1)
						strTable = strTable & PrintHours("", i, arrClasses(nPrRecord, 1) - 1, readonly)
					Next
				End If
				nPrRecord = nPrRecord+1
				nClassRecord = 0
			Else
				strCell = "<TD" & IIf(nClassRowCnt=1, strAttr, "") & " colspan=""" & nClassRowCnt & """>&nbsp;</TD>"
				strTable = strTable & strCell
				Response.Write strCell
				nPrRecord = nPrRecord+1
				nClassRecord = 0
			End If
		Loop
		objCuriculum.MoveNext
	Wend
	Call fillEnd()
	strTable = strTable & "</TABLE>"
	%><INPUT type=hidden name="NSubj" value="<%=NSubj%>"></TABLE><%
	Call obTokenMgr.SetData(strToken, stTempString, strHeader)
	Call obTokenMgr.SetData(strToken, stPrintTable, strTable)
	If readonly Then Response.Write "</FORM>": Exit Sub
	objRsTotal.Close
	Set objRsTotal = Nothing
	objCuriculum.Close
	Set objCuriculum = Nothing
End Sub

Sub fillEnd()
	Dim strCell
	Do While nPrRecord < nPCount
		nClassRowCnt = GetClassRowCnt(nPrRecord)
		bClassesExists = IsArray(arrClasses(nPrRecord, 0))

		If arrIsAvailableColumn(nPrRecord) Then
			If Not bClassesExists Then
				strCell = "<TD" & IIf(nClassRowCnt=1, strAttr, "") & " colspan=""" & nClassRowCnt & """>&nbsp;</TD>"
				strTable = strTable & strCell
				Response.Write strCell
			Else
				For i = nClassRecord To (arrClasses(nPrRecord, 1) - 1)
					strTable = strTable & PrintHours("", i, arrClasses(nPrRecord, 1) - 1, IIf((strOldSubjID<>0), readonly, True))
				Next
			End If
		Else
			strCell = "<TD" & IIf(nClassRowCnt=1, strAttr, "") & " colspan=""" & nClassRowCnt & """>&nbsp;</TD>"
			strTable = strTable & strCell
			Response.Write strCell
		End If
		nPrRecord = nPrRecord + 1
		nClassRecord = 0
	Loop
	nPrRecord = 0
	nClassRecord = 0
	Response.Write "</TR>"
	strTable = strTable & "</TR>"
End Sub

Sub PrepareTotalData()
	set objRsTotal = objNSNET.GetCurriculumPlan(strCurrYearId, nFilterGradeMin, nFilterGradeMax)
End Sub

Sub Total( ByVal strCompID )
	Dim fHours, lngTotClassID, strClassName, strCell
	Dim nProfile, nGradeID, nClassID
	Dim bTheSameClass
	%><tr bgcolor="#DFDFDF" align="center"><TD style="FONT-SIZE: 10pt"><B><%=obLanguage("SetupSchoolCurPlan","kFactual")%>:</B></TD><%
	strTable = strTable & "<tr bgcolor=""#DCDCDC"" align=""center""><td class=""body""><i>" & obLanguage("SetupSchoolCurPlan","kFactual") & ":</i></td>"

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

	Do While (nPrRecord<nPCount) And (Not objRsTotal.EOF)
		nClassRowCnt = GetClassRowCnt(nPrRecord)
		bClassesExists = IsArray(arrClasses(nPrRecord, 0))

		If (CLng(objRsTotal("PROFILEID"))=arrProfiles(nPrRecord)) And (CLng(objRsTotal("GRADEID"))=arrCuriculumGrades(nPrRecord)) Then
			lngTotClassID = CLng(objRsTotal("CLASSID"))
			if strCompID = 0 Then
				nProfile = CLng(objRsTotal("PROFILEID"))
				nGradeID = CLng(objRsTotal("GRADEID"))
				nClassID = CLng(objRsTotal("CLASSID"))
				fHours = 0

				Do
					fHours = fHours + CDbl(objRsTotal("HOURS"))
					objRsTotal.MoveNext
					If Not objRsTotal.EOF Then
						bTheSameClass = (nProfile = CLng(objRsTotal("PROFILEID")) And nGradeID = CLng(objRsTotal("GRADEID")) And nClassID = CLng(objRsTotal("CLASSID")))
					Else
						bTheSameClass = False
					End If
				Loop While (Not objRsTotal.EOF And bTheSameClass)
			else
				fHours = CDbl(objRsTotal("HOURS"))
			end if

			If Not bClassesExists Then GenerateError obLanguage("Common","kUnexpErr")
			nClassRecordCurr = GetClassNumInGrade(arrClasses(nPrRecord, 0), lngTotClassID)
			For i = nClassRecord To nClassRecordCurr - 1
				strTable = strTable & PrintHours("", i, arrClasses(nPrRecord, 1) - 1, True)
			Next
			strTable = strTable & PrintHours(fHours, nClassRecordCurr, arrClasses(nPrRecord, 1) - 1, True)

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
		ElseIf arrIsAvailableColumn(nPrRecord) Then
			If Not bClassesExists Then
				strCell = "<TD" & IIf(nClassRowCnt=1, strAttr, "") & " colspan=""" & nClassRowCnt & """>&nbsp;</TD>"
				strTable = strTable & strCell
				Response.Write strCell
			Else
				For i = nClassRecord To (arrClasses(nPrRecord, 1) - 1)
					strTable = strTable & PrintHours("", i, arrClasses(nPrRecord, 1) - 1, True)
				Next
			End If
			nPrRecord = nPrRecord+1
			nClassRecord = 0
		Else
			strCell = "<TD" & IIf(nClassRowCnt=1, strAttr, "") & " colspan=""" & nClassRowCnt & """>&nbsp;</TD>"
			strTable = strTable & strCell
			Response.Write strCell
			nPrRecord = nPrRecord+1
			nClassRecord = 0
		End If
	Loop
	Call fillEnd()
End Sub

Function GetClassNumInGrade(arrGradeClasses, nClassID)
	Dim i
	For i = 0 To UBound(arrGradeClasses, 2)
		If arrGradeClasses(0, i) = nClassID Then
			GetClassNumInGrade = i
			Exit Function
		End If
	Next
	GenerateError obLanguage("SetupSchoolCurPlan","kErrClassNotFound",strFunctionalityType)
End Function

Function GetClassRowCnt(i)
	Dim cnt
	cnt = 1
	If Not bViewByGrade Then
		If IsArray(arrClasses(i, 0)) Then cnt = arrClasses(i, 1)
	End If
	GetClassRowCnt = cnt
End Function

Sub PrintTeachingLoad()
	Dim objCmd, objRs, arrGradeClasses, strClassID, strLoad
	Dim strCell

	Set objCmd = objNSNET.GetClassTeachingLoad_Prepare()

	strCell = "<tr bgcolor=""#DFDFDF"" align=""center""><td colspan=""2"" style=""FONT-SIZE: 10pt""><b>" & obLanguage("SetupSchoolCurPlan","kGeneralPedagogicalLoad") & ":</b></td>"
	For i = 0 To nPCount-1
		arrGradeClasses = arrClasses(i, 0)
		If IsArray(arrGradeClasses) Then
			For j = 0 To Ubound(arrGradeClasses, 2)
				strLoad = ""
				strClassID = GetSafeID(arrGradeClasses(0, j), Null)
				Set objRs = objNSNET.GetClassTeachingLoad_Execute(objCmd, strClassID)
				If Not objRs.EOF Then strLoad = objRs("TEACHERLOAD")
				strCell = strCell & "<TD " & strAttr & ">" & DB2HTML(strLoad) & "</TD>"
			Next
		Else
			strCell = strCell & "<TD " & strAttr & ">&nbsp;</TD>"
		End If
	Next
	Call objNSNET.DisposeCommand(objCmd)
	strCell = strCell & "</TR>"
	Response.Write strCell
	strTable = strTable & strCell
End Sub

Sub onHead()
End Sub

Sub onDrawPage()
	Call Main()
	Call DrawCuriculumPlanInner()
	%><script><!--
	var framedoc = parent.frames['piframe'].document;
	var doc = parent.document;
	var etal;
	var cell;

	function dataChanged()
	{
		parent.dataChanged();
	}

	function getRequiredSizeForTable()
	{
		var nSumWidth;
		var nSummedValue;
		nSumWidth = framedoc.getElementById('sfcol').<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%> + framedoc.getElementById('scol').<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%> + 3;
		for(i=<%=nColsCount-2%>;i>0;i--)
		{
			etal = doc.getElementById('cc'+i.toString());
			cell = framedoc.getElementById('lc'+i.toString());

			if( etal.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%> >= etal.width )
			{
				nSummedValue = parseInt(etal.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>) + 2 ;
			}else{
				nSummedValue = parseInt(etal.width) + 2;
			}
			<%If bViewByGrade Then %>
			if( nSummedValue < cell.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%> )
				nSummedValue = cell.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%> + 2;
			<%End If%>

			 if( nSummedValue < 30 ){
				nSummedValue = 30;
			 }

			nSumWidth += nSummedValue;
		}
		return nSumWidth;
	}

	function setMinimumSize()
	{
		framedoc.getElementById('sfcol').width = 1;
		framedoc.getElementById('scol').width = 1;
		doc.getElementById('sfecol').width = 1;
		doc.getElementById('secol').width = 1;
		for(i=<%=nColsCount-2%>;i>0;i--)
		{
			etal = doc.getElementById('cc'+i.toString());
			cell = framedoc.getElementById('lc'+i.toString());
			cell.width = 1;
			etal.width = 1;
		}
	}

	function setEqualSizeFor2FirstCols()
	{
		doc.getElementById('sfecol').width = framedoc.getElementById('sfcol').<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>;
		doc.getElementById('secol').width = framedoc.getElementById('scol').<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>;
	}
	function setEqualSizeForFrameCells()
	{
		var etal;
		var cell;
		for(i=<%=nColsCount-2%>;i>0;i--)
		{
			etal = doc.getElementById('cc'+i.toString());
			cell = framedoc.getElementById('lc'+i.toString());
			etalsize = etal.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>;
			cellsize = cell.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>;
			if( etalsize < etal.width)
				etalsize = etal.width;
			cell.width = etalsize;
		}
	}

	function setEqualSizeForAllColsG()
	{
		var etal;
		var cell;
		var downcell;

		for(i=<%=nColsCount-2%>;i>0;i--)
		{
			etal = doc.getElementById('cc'+i.toString());
			cell = framedoc.getElementById('lc'+i.toString());
			etalsize = etal.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>;
			cellsize = cell.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>;
			if( etalsize < etal.width)
				etalsize = etal.width;

			if( etalsize < cellsize )
				etal.width = cellsize;
		}

		for(i=<%=nColsCount-2%>;i>0;i--)
		{
			etal = doc.getElementById('cc'+i.toString());
			cell = framedoc.getElementById('lc'+i.toString());
			etalsize = etal.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>;
			cellsize = cell.<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>;
			if( etalsize < etal.width){
				etalsize = etal.width;
				<%If isIE Then %>
				 if( etal.width - (etal.offsetWidth - 2) > 0 )
				 {
					doc.getElementById('PlanTableHeader').width = parseInt(doc.getElementById('FullPlanTable').width) + parseInt((etal.width - (etal.offsetWidth - 4)));
					doc.getElementById('piframe').width = doc.getElementById('FullPlanTable').offsetWidth-2+<%=nScrolBarWidth%>;
				 }
				<%End If%>
			}

			if( etalsize > cellsize )
			{
				cell.width = etalsize;
			}else{
				etal.width = cellsize;
			}
		}
	}
	setMinimumSize();
	<%'If Not isFF3 Then%>
		var nSize;
		nSize = getRequiredSizeForTable();
		if (doc.getElementById('FullPlanTable').<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%> < nSize){
				doc.getElementById('FullPlanTable').width = nSize + <%=nScrolBarWidth%> + 100;
		}
		setEqualSizeFor2FirstCols();
	<%'End If%>
	setEqualSizeForAllColsG();
	setEqualSizeFor2FirstCols();

	<%If Not isFF3 Then%>
	framedoc.getElementById('PlanTable').width = doc.getElementById('PlanTableHeader').<%If isIE Then %>offsetWidth - 2<%Else%>clientWidth<%End If%>+2;
	doc.getElementById('piframe').width = doc.getElementById('PlanTableHeader').<%If isIE Then %>offsetWidth -2<%Else%>clientWidth<%End If%>+<%=nScrolBarWidth%>+2;
	<%End If %>

	setEqualSizeForFrameCells();

	<%If isFF3 Then%>
		doc.getElementById('piframe').width = doc.getElementById('PlanTableHeader').<%If isIE Then %>offsetWidth -2<%Else%>clientWidth<%End If%>+<%=nScrolBarWidth%>;
	<%End If %>

	if( doc.getElementById('piframe').height > (framedoc.getElementById('PlanTable').clientHeight + <%=nScrolBarWidth%>))
		doc.getElementById('piframe').height = framedoc.getElementById('PlanTable').clientHeight + <%=nScrolBarWidth%>;
	doc.getElementById('ProcessMessage').style.visibility = "hidden";
	doc.getElementById('ProcessMessage').style.display = "none";
	doc.getElementById('FullPlanTable').style.visibility = "visible";
--></script>
<%End Sub%>

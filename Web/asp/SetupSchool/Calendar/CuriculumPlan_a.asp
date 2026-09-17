<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Administration/JSON_2.0.2.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/populate.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CuriculumPlanDraw_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim objComponentList, objSubjectList, objCuriculum, objComponentListAll
Dim objRs, i, j, k, strComponentID, nSubj,nComp,bMoveNext
Dim strCompID, strSubjID, strOldCompID, strOldSubjID, strCuriculumGradeID, strValue
Dim arrIsAvailableColumn,arrCuriculumGrades,arrProfiles,nPCount,lngProfileID,nPrRecord
Dim bIsFieldExists, bIsSubjectExists
Dim strTable, strHeader, strComponentName, strSubjName
Dim nCuriculum_Grades, nCuriculum_Grade, nCuriculum_View, nCuriculum_SubjGroups, bCuriculum_SubjGroups
Dim arrClasses, nClassRecord
Dim nClassRowCnt, bClassesExists, nClassRecordCurr
Dim bViewByGrade ' то же самое, что nCuriculum_View=0, только короче
Dim arrGradeClassesValues
Dim arrCompClassNames
Dim bPreSchool, arrPreSchoolGrades
Dim strAttr
Dim nColsCount
Dim nRowSpan, nColWidth
Dim nScrolBarWidth

Dim kAttr

    nColWidth = 30
    kAttr = " width=""" & nColWidth & """ "
	strAttr = kAttr

	If Request("COMPID").Count > 1 Then
		strComponentID = Request("COMPID")(Request("COMPID").Count)
	Else
		strComponentID = GetSafeID( Request("COMPID"), GetSafeID( obTokenMgr.GetData(strToken,"COMPID"), "0") )
	End If
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

Sub SetupTableDrawParams()
	If isIE Then
	    nScrolBarWidth = 18
	Else
	    nScrolBarWidth = 20
	End if
End Sub

    Call obTokenMgr.SetData(strToken, "nScrolBarWidth", nScrolBarWidth)
	Call obTokenMgr.SetData(strToken, "COMPID", strComponentID)
	Call obTokenMgr.SetData(strToken, stCuriculum_Grades, nCuriculum_Grades)
	Call obTokenMgr.SetData(strToken, stCuriculum_Grade, nCuriculum_Grade)
	Call obTokenMgr.SetData(strToken, stCuriculum_View, nCuriculum_View)
	Call obTokenMgr.SetData(strToken, stCuriculum_SubjGroups, nCuriculum_SubjGroups)

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If

	Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)

	nFilterGradeMin = -1
	nFilterGradeMax = -1
	If nCuriculum_Grades <> -1 Then
		Set objGrades = objNSNET.GetStageGradeList(strCurrYearID, nCuriculum_Grades)
	    If nCuriculum_Grade > 0 Then nCuriculum_Grade = objNSNET.GetSafeStageGradeID(nCuriculum_Grade, strCurrYearID, nCuriculum_Grades )
	    If nCuriculum_Grade = 0 Then If Not objGrades.EOF Then nCuriculum_Grade=-1
	    
	    If nCuriculum_Grade > 0 Then 
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
	
	Set objComponentList = objNSNET.GetAccessComponentList(strSchoolID, strCurrYearId, nFilterGradeMin, nFilterGradeMax)
	Set objComponentListAll = objNSNET.GetComponentList(strCurrYearId)
	strComponentID= GetSafeComponentID( strComponentID, objComponentList)

	Set objSubjectList = objNSNET.GetNotCurriculumSubjectList(strSchoolID, strCurrYearId, strComponentID, nFilterGradeMin, nFilterGradeMax)
	Set objCuriculum = objNSNET.GetCurriculumStat(strCurrYearID, strSchoolId, nFilterGradeMin, nFilterGradeMax, (nCuriculum_SubjGroups=0))
	bIsFieldExists = objNSNET.DoesSubjectFieldExist(strCurrYearID)
	bIsSubjectExists = objNSNET.DoesSubjectExist(strCurrYearID)

	If bPreSchool Then bCuriculum_SubjGroups = False Else bCuriculum_SubjGroups = True
	Call SetupTableDrawParams()

%>

<TABLE id="compAdder" width="1%" class="ThinTable" border="1" cellpadding="0" cellspacing="0"><%
	Call GetCurriculumColumns( arrCuriculumGrades, arrProfiles, nPCount, arrClasses )
	Call PrintTableHeader(obLanguage("SetupSchoolCurPlan","kComponentLarge"), True)%>
	<TR>
	<TD class="select">
		<SELECT NAME="COMPID" onchange="OnCompUpdate()">
		
		<%PopulateSelect objComponentList, "COMPONENTID", "COMPONENTNAME", strComponentID
	    arrIsAvailableColumn = GetAvailableColumns( Empty, arrCuriculumGrades, nPCount, strCurrYearID, strComponentID )
		%>
		
		</SELECT>
	</TD><%
	If NOT objSubjectList.EOF Then%>
		<TD class="select"><SELECT NAME="SUBJID"><%arrParentIDs = PopulateSelectSubject(objSubjectList, "SUBJECTID", "SUBJECTNAME", NULL)%></SELECT><%
		For i=0 To UBound(arrParentIDs)%>
			<INPUT type=hidden name="PSUBJID_ADD" value="<%=arrParentIDs(i)%>"><%
		Next%>
		</TD><%
		For nPrRecord=0 To nPCount-1
			nClassRowCnt = GetClassRowCnt(nPrRecord)
			bClassesExists = IsArray(arrClasses(nPrRecord, 0))

			If arrIsAvailableColumn(nPrRecord) And bClassesExists Then
				For i = 0 To (arrClasses(nPrRecord, 1) - 1)
					Call PrintHours("", -1, -1, readonly)
				Next
			Else
				Response.write "<TD colspan=""" &nClassRowCnt& """>&nbsp;</TD>"
			End If
		Next
	Else%>
		<TD<%=strAttr%>><INPUT TYPE="hidden" NAME="SUBJID" VALUE="0">&nbsp;</TD><%
		For nPrRecord=0 To nPCount-1
			nClassRowCnt = GetClassRowCnt(nPrRecord)%>
			<TD colspan="<%=nClassRowCnt%>"><%
			For i = 1 To nClassRowCnt%>
				<INPUT TYPE="hidden" NAME="HOURS" VALUE=""><%
			Next%>
			&nbsp;</TD><%
		Next
	End If%></TR>
</TABLE>
<%
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

Function PopulateSelectSubject( objRs, strIDField, strNameField, strCurID )
	If Not bIsDebug Then On Error Resume Next
	Dim strID, bSelected, strCCurID, nCount
	Dim arrParentIDs
	bSelected = False
	strCCurID = ""
	nCount = 0
	If Not IsNull(strCurID) Then strCCurID = CStr( strCurID )
	ReDim arrParentIDs(objRs.RecordCount - 1)
	While Not objRs.EOF
		strID = CStr(objRs(strIDField))
		Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
		If (IsNull(strCurID) Or strID = strCCurID) And Not bSelected Then
			Response.Write " SELECTED "
			bSelected = True
		End If
		Response.Write ">" & DB2HTML(objRs(strNameField))
		Response.Write "</OPTION>"
		arrParentIDs(nCount) = GetSafeID(objRs("PARENTSUBJECTID"), "")
		nCount = nCount + 1
		objRs.MoveNext
	WEnd
	PopulateSelectSubject = arrParentIDs
End Function

Function GetSafeComponentID(ID, rs)
	GetSafeComponentID = ID
	If Not rs.EOF Then
		While Not rs.EOF
			If rs("COMPONENTID") = ID Then
				rs.MoveFirst
				Exit Function
			End If
			rs.MoveNext
		Wend
		rs.MoveFirst
		GetSafeComponentID = rs("COMPONENTID")
	End If
End Function

Sub PrintTableHeader(strSubjectFields,bAddTable)
	Dim strCell, bTableAdd, nClassCnt, arrGradeClasses
	bTableAdd = Not (strSubjectFields=obLanguage("SetupSchoolCurPlan","kComponentLarge"))
	nRowSpan = IIf(bViewByGrade, 2, 3)%>
	<TR bgcolor="#E7EFF7"><TH <%=IIF(bAddTable,"","id='sfecol'") %> width="1px" rowspan="<%=nRowSpan%>"><%=strSubjectFields%></TH><TH <%=IIF(bAddTable,"","id='secol'") %> width="1px" rowspan="<%=nRowSpan%>"><%=obLanguage("Common","kSubject")%></TH><%
	If bTableAdd Then strTable = strTable & "<tr><th rowspan=""" & nRowSpan & """>" & strSubjectFields & "</th><th rowspan=""" & nRowSpan & """>" & obLanguage("Common","kSubject") & "</th>"
    nColsCount = 2
	lngProfileID = arrProfiles(0)
	k = GetClassRowCnt(0)
	strCell = ""

	For i = 1 To nPCount-1
		If arrProfiles(i)=lngProfileID Then
			k = k + GetClassRowCnt(i)
		Else
			strCell = strCell & "<TH colspan=""" &k& """>" & DB2HTML_BR(objNSNET.GetProfileName(lngProfileID)) & "</TH>"
			lngProfileID = arrProfiles(i)
			k = GetClassRowCnt(i)
		End If
	Next
	strCell = strCell & "<TH colspan=""" &k& """>" & DB2HTML_BR(objNSNET.GetProfileName(lngProfileID)) & "</TH></TR>"
	
	Response.Write strCell & "<TR bgcolor=""#E7EFF7"">"
	If bTableAdd Then strTable = strTable & strCell & "<TR>"

	strCell = ""
	For i = 0 To nPCount-1
		strCell = strCell & "<TH " & IIF(bViewByGrade And Not bAddTable, "id=""cc" & nColsCount - 1 & """","") & " colspan=""" & GetClassRowCnt(i) & """>" 
		If bPreSchool And arrCuriculumGrades(i) >= 0 And arrCuriculumGrades(i) <= 8 Then
			strCell = strCell & DB2HTML(arrPreSchoolGrades(arrCuriculumGrades(i)))
		Else
			strCell = strCell & arrCuriculumGrades(i)
		End If
		If bViewByGrade And Not bAddTable Then nColsCount = nColsCount + 1
		strCell = strCell & "</TH>"
	Next
	Response.Write strCell & "</TR>"
	If bTableAdd Then strTable = strTable & strCell & "</TR>"

	If Not bViewByGrade Then
		Response.Write "<TR bgcolor=""#E7EFF7"">"
		If bTableAdd Then strTable = strTable & "<TR>"
		strCell = ""
		For i = 0 To nPCount-1
			arrGradeClasses = arrClasses(i, 0)
			If IsArray(arrGradeClasses) Then
				For j = 0 To Ubound(arrGradeClasses, 2)
					strCell = strCell & "<TH " & IIF(bAddTable, "", "id=""cc" & nColsCount - 1 & """") & " >" & DB2HTML(arrGradeClasses(1, j)) & "</TH>"
					If Not bAddTable Then nColsCount = nColsCount + 1
				Next
			Else
				strCell = strCell & "<TH " & IIF(bAddTable, "", "id=""cc" & nColsCount - 1 & """") & " >&nbsp;</TH>"
				If Not bAddTable Then nColsCount = nColsCount + 1
			End If
		Next
		Response.Write strCell & "</TR>"
		If bTableAdd Then strTable = strTable & strCell & "</TR>"
	End If
End Sub


%>

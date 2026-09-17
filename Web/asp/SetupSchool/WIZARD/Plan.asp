<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 6

Dim bMoveNext
Dim i, k
Dim nComp, lngProfileID, nPCount, nSubj
Dim strSubjID, strOldCompID, strOldSubjID, strGradeID, strValue, strComponentID, strSubjName
Dim objComponentList, objSubjectList, objCuriculum, objRs
Dim arrIsAvailableColumn, arrGrades, arrProfiles
Dim bPreSchool, arrPreSchoolGrades

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kWizardTitlePlan")
End Function

Function CanBack()
	CanBack = False
End Function

Sub ReadState()
	InitStep
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, "COMPID", strComponentID)
End Sub

Sub Main
	Dim rsComps

	Set objComponentList = objNSNET.GetComponentList(strCurrYearID)
	If Not objComponentList.EOF Then
		strComponentID = objComponentList("COMPONENTID")
	End If
	Set rsComps = objNSNET.GetMinComponentID(strSchoolID)
	If CLng(strComponentID)<>CLng(rsComps("CMIN")) Then GenerateHTMLError obLanguage("SetupSchoolCalendar","kBasisLimitsNotDefined"), "/asp/SetupSchool/WIZARD/Limits.asp", strToken&"&PT="&GetPageTitle()

	Call objNSNET.GetMinMaxGrades(strCurrYearID, minGrade, maxGrade)
	Set objSubjectList = objNSNET.GetSubjectListForWizard(strSchoolId )
	If objSubjectList.EOF Then GenerateHTMLError obLanguage("SetupSchoolCalendar","kSubjectsNotDefined"), "/asp/SetupSchool/WIZARD/Subjects.asp", strToken&"&PT="&GetPageTitle()
	Set objCuriculum = objNSNET.GetCurriculumStatForWizard(strSchoolId )

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If
End Sub

Sub onSpecialHead()
%>
	<script>
		function canSubmit() {
			var n = $( "input:checked" ).length;
			if (n>0)
				return true;
			alert(language.Generic.SetupSchoolCalendar.kClErrNoSubj);
			return false;
		}

		function NextStep() {
			if (dataWereChanged) { alert(language.Generic.Wizard.kSaveOrResetData); return; }

			extDeferred.when(canSubmit).done(function() {
				DoSubmit( document.MainForm, '<%=strNext%>' );
			});
		}

		function PrevStep() {
			if (dataWereChanged) { alert(language.Generic.Wizard.kSaveOrResetData); return; }

			extDeferred.when($("input[name=HOURS]").length > 0).then(function() {
				extDeferred.when(canSubmit).done(function() {
					DoSubmit( document.MainForm, '<%=strPrev%>' );
				});
			},
			function() {
				lalert(language.Generic.SetupSchoolCalendar.kErrNoLimits);
				DoSubmit( document.MainForm, '<%=strPrev%>' );
			});
		}
	</script>
<%
End Sub

Sub DrawSpecialButtons() 
	ButtonSave "if (dataWereChanged) {ok_check_db('MainForm','');}", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm')", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="PlanSave.asp">
		<%=WriteObligatoryTags()%><%
		DrawButtonPanel
		DrawTable%>
	</form>
<%End Sub

Sub DrawTable()
	Dim nSubjectID, bCheck, arrIsAvailableColumn, arrClasses

	Call GetCurriculumColumns(0, -1, -1, arrGrades, arrProfiles, nPCount, arrClasses )
	arrIsAvailableColumn = GetAvailableColumns( Empty, arrGrades, nPCount, strCurrYearID, strComponentID )
	DrawWarningEx obLanguage("SetupSchoolCalendar","kOnlyFederal") & "!", False
	%>
	<table class="table table-bordered table-xs table-hover"><%
		Call PrintTableHeader()
		While NOT objSubjectList.EOF
			nSubjectID = objSubjectList("SUBJECTID")%>
			<tr class="text-center">
				<td class="text-left"><%=DB2HTML(objSubjectList("SUBJECTNAME"))%></td><%
				For i = 0 To nPCount-1
					bCheck = False
					If objCuriculum.EOF Then
						Do While i < nPCount
							Call DrawColumn(nSubjectID, bCheck, arrIsAvailableColumn, i)
							i=i+1
						Loop
					Else
						If objCuriculum("SUBJECTID") = nSubjectID Then
							If objCuriculum("PROFILEID") = arrProfiles(i) Then
								If objCuriculum("GRADEID") = arrGrades(i) Then bCheck = True : objCuriculum.MoveNext
							End If
						End If
						Call DrawColumn(nSubjectID, bCheck, arrIsAvailableColumn, i)
					End If
				Next%>
			</tr><%
			objSubjectList.MoveNext
		WEnd%>
	</table><%
	objSubjectList.Close
	Set objSubjectList = Nothing
	objCuriculum.Close
	Set objCuriculum = Nothing
End Sub

Sub DrawColumn(nSubjectID, bCheck, arrIsAvailableColumn, i)
	If arrIsAvailableColumn(i) Then Call PrintHours( nSubjectID & "," & arrProfiles(i)& "," &  arrGrades(i), bCheck ) Else Response.Write "<td>&nbsp;</td>"
End Sub

Sub PrintHeaderCell(lngProfileID, k)
	%><th colspan="<%=k%>"><%=DB2HTML_BR(objNSNET.GetProfileName(lngProfileID))%></th><%
End Sub

Sub PrintTableHeader()
	Dim nDOUGrade, strDOUGrade

	%>
	<tr>
		<th rowspan="2"><%=obLanguage("Common","kSubject")%></th><%
		lngProfileID = arrProfiles(0)
		k = 1
		For i = 1 To nPCount-1
			If arrProfiles(i)=lngProfileID Then
				k = k + 1
			Else
				Call PrintHeaderCell(lngProfileID, k)
				lngProfileID = arrProfiles(i)
				k = 1
			End If
		Next
		Call PrintHeaderCell(lngProfileID, k)%>
	</tr>
	<tr><%
		If bPreSchool Then
			For i = 0 To nPCount-1
				nDOUGrade = arrGrades(i)
				If nDOUGrade >= 0 And nDOUGrade <= 8 Then
					strDOUGrade = arrPreSchoolGrades(nDOUGrade)
				Else
					strDOUGrade = "&nbsp;"
				End If%>
				<th><%=strDOUGrade%></th><%
			Next
		Else
			For i = 0 To nPCount-1%>
				<th><%=IIF(arrGrades(i) > 9, arrGrades(i), "&nbsp;"&arrGrades(i))%></th><%
			Next
		End If%>
	</tr><%
End Sub

Sub PrintHours( strVal , theCheck)
	%><td><input type="checkbox" name="HOURS" value="<%=strVal%>" OnClick="dataChanged()"<%=IIF(theCheck, " checked", "")%>></td><%
End Sub
%>

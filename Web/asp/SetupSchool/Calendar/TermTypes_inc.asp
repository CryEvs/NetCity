<!-- #INCLUDE VIRTUAL=/asp/scripts/filtersCommon.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterGrades.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const ind_TERMTYPEID	= 0
Const ind_TERMTYPENAME	= 1
Const ind_TERMSCOUNT	= 2
Const ind_GRADESET		= 3
Const ind_BOUNDED		= 4

Const kTermTypeID_LastDefault = 20

Dim arrTermTypes, bTermTypesIsEmpty
Dim aReadonlyGrades, dctTermTypes, arrTermTypesKeys
Dim bPreSchool
Dim objTermTypesRs, i, j
Dim arrProfileGrade, aProfiles, strProfileID
Dim bIsWizard

Sub ReadState()
	strPrev = "Plan.asp"
	strNext = "Terms.asp"
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
End Sub

Sub Main()
	Dim nGradeSet, nGrade, prof_grade
	Dim nGradeSetAssigned, objGradesWithMarksRs
	Dim minGrade, maxGrade, aGrades, gradePower, n, k, gradeSet, oldProf 'nGSSize,

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	minGrade = 0
	maxGrade = 12
	bTermTypesIsEmpty = True
	arrProfileGrade = objNSNET.GetGradeProfileList(-1, strSchoolID)
	If Not IsArray(arrProfileGrade) Then GenerateError obLanguage("SetupSchoolCalendar","kErrEmptyProfileList")
	ReDim aProfiles(Ubound(arrProfileGrade, 2))
	ReDim aGrades(maxGrade)
	Set aReadonlyGrades = CreateObject("NetCity.Storage")
	j = -1
	n = -1
	gradePower = 1
	oldProf = 0
	For k = 0 To Ubound(arrProfileGrade, 2)
		gradeSet = arrProfileGrade(2, k)
		strProfileID = arrProfileGrade(0, k)
		For i = minGrade To maxGrade
			If (gradeSet And gradePower) <> 0 Then
				n = n + 1
				aGrades(n) = i
			End If
			gradePower = gradePower * 2
		Next
		If strProfileID <> oldProf Then
			Set objGradesWithMarksRs = objNSNET.GetGrades_ReadOnly(strCurrYearID, strProfileID)
			Do While Not objGradesWithMarksRs.EOF
				nGrade = CLng(objGradesWithMarksRs("GRADE"))
				prof_grade = strProfileID & "_" & nGrade
				aReadonlyGrades(prof_grade) = 1
				objGradesWithMarksRs.MoveNext
			Loop

			j = j + 1
			ReDim Preserve aGrades(n)
			aProfiles(j) = Array( strProfileID , arrProfileGrade(1, k) , aGrades)
			ReDim aGrades(maxGrade)
			n = -1
			gradePower = 1
			oldProf = strProfileID
		End If
	Next
	ReDim Preserve aProfiles(j)

	Set objTermTypesRs = objNSNET.GetYearTermTypes(strCurrYearID)
End Sub

Sub WriteState()
	WriteSpecial
End Sub

Sub WriteSpecial()
End Sub

Function DoesNonDefaultTermTypesExist()
	Dim i, arrTermTypes
	arrTermTypes = objTermTypesRs.GetRows(,,Array("TERMTYPEID", "TERMTYPENAME", "TERMSCOUNT", "PROFILEID", "GRADESET", "BOUNDED"))
	objTermTypesRs.MoveFirst
	DoesNonDefaultTermTypesExist = False
	For i = 0 To Ubound(arrTermTypes, 2)
		If GetSafeLng(arrTermTypes(ind_TERMTYPEID, i), Null) > kTermTypeID_LastDefault Then DoesNonDefaultTermTypesExist = True : Exit Function
	Next
End Function

Sub onSpecialHead()
%>
	<script><!--
		function canSubmit() {
			r = $('input:radio:checked[value=0]').first().trigger("focus");
			if (r.length == 0)
				return true;
			alert(language.Generic.Common.kDefineTermsTypes+'!');
			return false;
		}

		function saveTermTypes() {
			extDeferred.when(canSubmit).then(function() {
				var saveForm = document.forms['MainForm'];
				saveForm.action = '/asp/SetupSchool/Calendar/SaveTermTypes.asp';

				var keys = new Array();
				$('[name = Prof_Grade]').each(function() {
					keys.push(this.value);
				});
		
				jsSaveForm (saveForm, {termTypeKeys: keys});
			});
		}
	//-->
	</script>
	<%
End Sub

Sub DrawSpecialButtons()
End Sub

Sub DrawSaveResetButtons()
Dim grade, strPageName, strForm
	strForm="MainForm"
	grade = objNSNET.GetEmptyGroupGrade(strCurrYearID)
	strPageName = "/angular/school/classmanagement/subjectgroups/?classId=" & grade & "_1"
	If Clng(grade)<0 Then
		ButtonSave "saveTermTypes();", obLanguage("Common","kSave")
		ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
		Exit Sub
	End If
	rw obLanguage("ClassManagement","kNoStudentsInSubjectGroup", strFunctionalityType) & ": "&ShowAnchor("ok_check_db('" & strForm & "','" & strPageName & "');", "", grade & " год обучения", "")
	rw "<p>"
	rw obLanguage("ClassManagement","kNoStudentsInSubjectGroup2")
	rw "</p>"

End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="TermTypes.asp">
		<%=WriteObligatoryTags()%><%
		DrawButtonPanel
		DrawTable%>
	</form><%
End Sub

Sub DrawRow(i, gradeset, nTermTypeID, is_bound)
	Dim grade, prof_grade, is_selected, j
	For j = 0 To Ubound(aProfiles(i)(2))
		grade = aProfiles(i)(2)(j)
		is_selected = ((2^grade) And gradeset)<>0
		prof_grade = aProfiles(i)(0) & "_" & grade
		Call DrawRadioCell(nTermTypeID, prof_grade, is_selected, is_bound)
	Next
End Sub

Sub DrawTable()
	Dim i, j, k, nGrade, nTermTypeID, nTermsCount, strTermTypeName
	Dim strGradeName
	Dim grade, prof_grade, is_selected
	Dim gradeset, profile, oldID, newID, is_bound

	If bExit Then Exit Sub%>
	<div class="row">
		<div class="col-md-12">
			<table class="table table-bordered table-condensed table-thin">
				<tr>
					<th rowspan="2"><%=obLanguage("SetupSchoolCalendar","kTermType_")%></th><%
					For i = 0 To Ubound(aProfiles)
						strGradeName = aProfiles(i)(1)%>
						<th colspan="<%=Ubound(aProfiles(i)(2))+1%>"><%=DB2HTML(strGradeName)%><input type="hidden" name="Grades" value="<%=aProfiles(i)(0)%>"></th><%
					Next%>
				</tr>
				<tr><%
					For i = 0 To Ubound(aProfiles)
						For j = 0 To Ubound(aProfiles(i)(2))
							nGrade = aProfiles(i)(2)(j)
							If bPreSchool And nGrade >= 0 And nGrade <= 8 Then
								strGradeName = GetPreSchoolGradeName(nGrade)
							Else
								strGradeName = CStr(nGrade)
							End If%>
							<th><%=DB2HTML(strGradeName)%><input type="hidden" name="Grades" value="<%=nGrade%>">
								<input type="hidden" name="Prof_Grade" value="<%=aProfiles(i)(0) & "_" & nGrade%>">
							</th><%
						Next
					Next%>
				</tr><%
				oldID = 0
				i = 0
				Set dctTermTypes = CreateObject("NetCity.Storage")
				Do While Not objTermTypesRs.EOF
					nTermTypeID = objTermTypesRs("TERMTYPEID")
					is_bound = (nTermTypeID <= kTermTypeID_LastDefault)
					If Not is_bound Then is_bound =  GetSafeBool(objTermTypesRs("ENABLED")="Y", False)
					If Not is_bound Then is_bound =  Not IsNull(objTermTypesRs("BOUNDED"))
					profile = objTermTypesRs("PROFILEID")
					gradeset = objTermTypesRs("GRADESET")
					nTermsCount = GetSafeLng(objTermTypesRs("TERMSCOUNT"), Null)
					strTermTypeName = objTermTypesRs("TERMTYPENAME")
					strTermTypeName = UCase(Left(strTermTypeName,1)) & Right(strTermTypeName,Len(strTermTypeName)-1)
					If nTermTypeID > kTermTypeID_LastDefault Then strTermTypeName = strTermTypeName & " (кол-во: " & nTermsCount & ")"
					If oldID <> nTermTypeID Then%>
					<tr><td class="text-nowrap"><%=DB2HTML(strTermTypeName)%></td><%
					End If
					If Not IsNull(profile) Then
							Do While Clng(profile) <> CLng(aProfiles(i)(0)) And i < Ubound(aProfiles)
								Call DrawRow(i, 0, nTermTypeID, is_bound)
								i=i+1
							Loop
							If Clng(profile) = CLng(aProfiles(i)(0)) Then
								Call DrawRow(i, gradeset, nTermTypeID, is_bound)
							End If
							i=i+1
					End If
					objTermTypesRs.MoveNext

					If Not objTermTypesRs.EOF Then
						oldID = nTermTypeID
						newID = objTermTypesRs("TERMTYPEID")
					End If
					If oldID <> newID Or objTermTypesRs.EOF Then
						Do While i <= Ubound(aProfiles)
							Call DrawRow(i, 0, nTermTypeID, is_bound)
							i=i+1
						Loop
						i = 0
					%></tr><%
					End If
				Loop%>

				<tr><th><%=obLanguage("Common","kNotChoosen")%></th><%
					' Без этой секции сохранение не будет работать для не заполненных параллелей
					For i = 0 To Ubound(aProfiles)
						For j = 0 To Ubound(aProfiles(i)(2))
							grade = aProfiles(i)(2)(j)
							prof_grade = aProfiles(i)(0) & "_" & grade
							is_selected = IsDull(dctTermTypes.Item(prof_grade))
							Call DrawRadioCellEx(0, prof_grade, is_selected, true, "th", "")
						Next
					Next%>
				</tr>
			</table>
		</div>
	</div><%
End Sub

Sub DrawRadioCell(nTermTypeID, prof_grade, is_checked, is_bound)
	DrawRadioCellEx nTermTypeID, prof_grade, is_checked, is_bound, "td", "bg-warning"
End Sub

Sub DrawRadioCellEx(nTermTypeID, prof_grade, is_checked, is_bound, cellTag, cellClass)
	Dim atype, bChecked
	%><<%=cellTag%> class="text-center <%=cellClass%>"><%
	If Not readonly And is_bound And IsDull(aReadonlyGrades(prof_grade)) Then
		atype = "radio"
	Else
		if Not is_checked Then
			rw "&nbsp;"
		Else
			rw "X"
			atype = "hidden"
		End If
	End If
	If Not isDull(atype) Then
		If is_checked Then
			dctTermTypes.Item(prof_grade) = nTermTypeID
		End If
		%><input type="<%=atype%>" name="Grade_<%=prof_grade%>" value="<%=nTermTypeID%>" <%=IIF(is_checked, "checked", "")%> onclick="dataChanged()"><%
	End If
	%></<%=cellTag%>><%
End Sub
%>

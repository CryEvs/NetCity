<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filtersCommon.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterGrades.asp -->
<% ' © 2007-2015 IRTech. All rights reserved.
Dim rsVacationList, i, j, minGrade, maxGrade

Dim vacationID, gradeID, profile, VacationGradesProfiles, aProfiles

Dim bPreSchool

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kVacationsGrades")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbYear
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arPostSchoolEvent)
End Function

Sub ReadState()
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
End Sub


Sub Main()
	Dim arrProfileGrade, strProfileID
	Dim aGrades, gradePower, n, k, gradeSet, oldProf
	Dim mn, mx
	Set rsVacationList = objNSNET.GetAllSchoolEventList(kVacation, strCurrYearID, Null, Null)
	Set VacationGradesProfiles = objNSNET.GetVacationGradesProfiles(strCurrYearID)
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)

	minGrade = 0
	maxGrade = IIF(bPreSchool, 8,12)
End Sub

Sub onHead()%>
<SCRIPT>
function save() {
	var saveForm = document.forms['MainForm'];

	if(dataWereChanged) {

		var keys = new Array();
		$('input[type=checkbox]').each(function(){
			if (this.checked != $(this).data("storedState")) {
				keys.push(this.name.replace("Grade_", ""));
			}
		});

		saveForm.action = 'SaveVacationsGrades.asp';
		jsSaveForm (saveForm, {vacationGradeKeys: keys});
	}
}

function Back(){
	goBack(document.MainForm, 'Years.asp');
}
</SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonSave "save()", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")%><br /><%
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="TermTypes.asp">
		<%=WriteObligatoryTags()%><%
		Call DrawButtonPanel
		Call DrawTable%>
	</form><%
End Sub

Sub DrawTable()
	Dim j, nGrade, nEventID, strTermTypeName
	Dim strGradeName, is_selected, arrGrades
	ReDim arrGrades(maxGrade-minGrade)%>

	<div class="row">
		<div class="col-md-8">
			<table class="table table-bordered">
				<tr>
					<th>&nbsp;</th>
					<th><%=obLanguage("Common","kName")%></th><%
					j = 0
					For nGrade = minGrade To maxGrade
						arrGrades(j)=nGrade
						j=j+1
						If bPreSchool And nGrade >= 0 And nGrade <= 8 Then
							strGradeName = GetPreSchoolGradeName(nGrade)
						Else
							strGradeName = CStr(nGrade)
						End If%>
						<th><%=DB2HTML(strGradeName)%><input type="hidden" name="Grades" value="<%=nGrade%>"></th><%
					Next%>
				</tr><%
				Dim grade
				Call GetVacationProfileGrade()
				Do While Not rsVacationList.EOF
					nEventID = CLng(rsVacationList("EVENTID"))
					strTermTypeName = DB2HTML(rsVacationList("EVENTNAME"))
					%>
					<tr>
						<td><%=Date2Str(rsVacationList("STARTTIME"))&"<br>"&Date2Str( rsVacationList("ENDTIME") )%></td>
						<td class="text-nowrap"><%=strTermTypeName%></td><%
						If vacationID=nEventID Then
								For j = 0 To Ubound(arrGrades)
									grade = arrGrades(j)
									is_selected = CBool(grade = gradeID And vacationID=nEventID)
									Call DrawCell(nEventID, grade, is_selected)
									If is_selected Then Call GetVacationProfileGrade()
								Next
						Else
							is_selected = False
							For j = 0 To Ubound(arrGrades)
									grade = arrGrades(j)
									Call DrawCell(nEventID, grade, is_selected)
							Next
						End If
						rsVacationList.MoveNext%>
					</tr><%
				Loop%>
			</table>
		</div>
	</div><%
End Sub

Sub DrawCell(nEventID, grade, is_checked)
	Dim atype, prof_grade
	prof_grade = nEventID & "_" & grade
%>
	<td bgcolor="#fff7da" class="text-center"><%
	If Not readonly Then
		atype = "checkbox"
	Else
		if Not is_checked Then
			rw "&nbsp;"
		Else
			rw "X"
			atype = "hidden"
		End If
	End If
	If Not isDull(atype) Then
	%>
	<input type="<%=atype%>" name="Grade_<%=prof_grade%>" value="<%=nEventID%>"<%
		If is_checked Then
			rw" checked"
		End If
	%>
	OnClick="dataChanged()"><%
	End If
	%></td><%
End Sub

Sub GetVacationProfileGrade()
	If Not VacationGradesProfiles.EOF Then
		gradeID = VacationGradesProfiles("GRADE")
		vacationID = VacationGradesProfiles("VACATIONID")
		VacationGradesProfiles.MoveNext()
	Else
		profile = 0
		gradeID = 0
	End If
End Sub

%>

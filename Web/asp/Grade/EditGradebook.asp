<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/teacher.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="../Reports/GradingScale_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE=../scripts/filterClasses_IUP.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
'	LAID=<LA ID>
'	ADT=<Start Date>
'	DDT=<End Date>

Const strMandatory = "<b>&#183;</b>"
Const clrOverdue = "bgcolor=#FFC0C0"

'Array indices
Const indStudStudentID	= 0
Const indStudName		= 1

Const indDayDueDate			= 0
Const indDayAssignmentID	= 1
Const indDayName			= 2
Const indDayPPoints			= 3

Const indResStudentID		= 0
Const indResDueDate			= 1
Const indResAssignmentID	= 2
Const indResResult			= 3
Const indResDoneDate		= 4

Dim bJuniorLA, bClassesEmpty, bNoStudents, bNoAssignments, bIsDeleted
Dim nActiveColumn, nMaxMark, nMinMark
Dim strLAID, strLAName, strActivityId, strAName, strClassName, strSubjClassName, strAID
Dim arrStudents, arrDays
Dim dtEndDate, dtStartDate

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kEditGradebook") & " <u>" & GreenText(DB2HTML(strLAName) & IIF(bIsDeleted," "&obLanguage("LearnApp","kDeleted"),"")) & "</u>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningApplications
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbQA
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arLAEditSelf)
End Function

Sub ReadState()
	Dim arrRaw, bIsGrade

	If readonly Then GenerateError obLanguage("Filter","kErrorEditClosedYear")
	
	strLAID = obTokenMgr.GetData( strToken, stJuniorLa )
	If strLAID = "" Then
		strLAID = GetSafeActivityID( obTokenMgr.GetData( strToken, stCurrLAID ) )
		bJuniorLA = False
	Else
		bJuniorLA = True
	End If

	strLAName = GetSafeStr(obTokenMgr.GetData(strToken, stActName), -1, Null)
	bIsDeleted = False
	If GetSafeStr(obTokenMgr.GetData(strToken, stLADeleted), 1, "N")="Y" Then bIsDeleted = True
	strClassID_IUP = obTokenMgr.GetData(strToken, stCurrClass_IUP)
	arrRaw = Split(strClassID_IUP, "_")
	strClassId = arrRaw(0)

	bIsGrade = CBool(arrRaw(1))
	strClassName = GetIupClassName(strClassId, bIsGrade)
	strSubjClassID = GetSafeID(obTokenMgr.GetData( strToken, stCurrSubjClass), Null)
	strSubjClassName = objNSNET.GetSubjectClassName(strSubjClassID)

	dtStartDate = obTokenMgr.GetData( strToken, stStartDate )
	dtEndDate = obTokenMgr.GetData( strToken, stEndDate )

	strActivityId = obTokenMgr.GetData( strToken, stCurrLAID )
	If bJuniorLA Then strActivityId = Left( strActivityId, Instr( 1, strActivityId , "|" ) - 1 )
	strAID = GetSafeID( Request("AID"), "0" )
End Sub

Sub Main
	Dim rsStudents, i
	Dim rsAssignInfo, dtDueDate

	If strSubjClassID <> "0" Then
		Set rsAssignInfo = objNSNET.GetAssignmentInfo(strAID )
		If rsAssignInfo.EOF Then GenerateError obLanguage("Grade","kErrorAssignInfo")
		dtDueDate = GetSafeDate(rsAssignInfo("DUEDATE"), Null)

		' Выводим список студентов только для выбранного задания, т.е. для DUEDATE этого задания
		Set rsStudents = objNSNET.GetStudentListForSubjGroup(strSubjClassID, Empty, dtDueDate, dtDueDate, True)

		rsAssignInfo.Close()
		Set rsAssignInfo = Nothing

		If Not rsStudents.EOF Then
			arrStudents = rsStudents.GetRows(,,Array("ID", "NAME"))
			bNoStudents = False
		Else
			bNoStudents = True
		End If
	End If
	readonly = readonly Or strSubjClassID="0" Or bNoStudents

	If bJuniorLA Then
		arrDays = objNSNET.GetLACoursesAssignmentsForSG(strSubjClassID, "courses", strLAID, dtStartDate, dtEndDate)
	Else
		arrDays = objNSNET.GetLAAssignmentsForSG(strSubjClassID, strLAID, dtStartDate, dtEndDate)
	End If

	If Not IsNull(arrDays) Then
		nActiveColumn = Empty
		For i = 0 To UBound(arrDays,2)
			If CStr(arrDays(indDayAssignmentID,i)) = CStr(strAID) Then
				nActiveColumn = i
				strAName = CStr(arrDays(indDayName,i))
				Exit For
			End If
		Next
		If IsEmpty(nActiveColumn) Then readonly = True
		bNoAssignments = False
	Else
		readonly = True
		bNoAssignments = True
	End If

	If Not readonly Then
		Call InitSchoolSettings( objNSNET )
		nMaxMark = arrSchoolSettings( 1, kSSIndex_MaxMark )
		nMinMark = arrSchoolSettings( 1, kSSIndex_MinMark )
	End If
	arrGradingScales = GetGrScale(strActivityID, strSubjClassID)
End Sub

Sub onHead()%>
<script>
<!--
function Back() {
	goBack(document.Gradebook, '');
}
<%If Not readonly Then%>
function SaveGrades() {
	if( isDBBusy() ) return false;
	var form = document.forms['Gradebook'];
	if( form.G ) {
		if( form.G.length ) {
			for( var i = 0; i < form.G.length; i++ ) {
				var grade = trimStr(form.G[i].value);
				if( grade != '' ) {
					grade = str2lng(grade);
					if( isNaN(grade) || grade < <%=nMinMark%> || grade > <%=nMaxMark%> ) {
						alert(language.Generic.Grade.kInvGrade + '<%=nMinMark%><%=obLanguage("Grade","kInvGrade2")%><%=nMaxMark%>');
						form.G[i].focus();
						return false;
					}
				}
				form.G[i].value = grade;
			}
		}
		else {
			var grade = trimStr(form.G.value);
			if( grade != '' ) {
				grade = str2lng(grade);
				if( isNaN(grade) || grade < <%=nMinMark%> || grade > <%=nMaxMark%> ) {
					alert(language.Generic.Grade.kInvGrade + '<%=nMinMark%><%=obLanguage("Grade","kInvGrade2")%><%=nMaxMark%>');
					form.G.focus();
					return false;
				}
			}
			form.G.value = grade;
		}
		setDBBusy();
		DoSubmit(form, 'SaveGradebook.asp');
	}
}
<%End If%>
function restoreCheck(obj) {
	alert(language.Grade.kTickMarkIsNecessary);
	if (!obj.checked) obj.checked=true;
}
function clickCheck(obj, n) {
	var form = document.forms['Gradebook'];
	if( form.G.length ) {
		if ( trimStr(form.G[n].value)!='' ) restoreCheck(obj); else dataChanged();
	}
	else {
		if ( trimStr(form.G.value)!='' ) restoreCheck(obj); else dataChanged();
	}
}
//-->
</script><%
End Sub

Sub DrawFilters( strForm )%>
	<div><%=obLanguage("Filter","kClassGB",strFunctionalityType)%>:&nbsp;<u><%=GreenText(DB2HTML(strClassName))%></u></div>
	<div><%=obLanguage("Filter","kCourseGB")%>:&nbsp;<u><%=GreenText(DB2HTML(strSubjClassName))%></u></div>
	<div><%=obLanguage("Common","kStartDate")%>:&nbsp;<u><%=GreenText(Date2Str(dtStartDate))%></u></div>
	<div><%=obLanguage("Common","kEndDate")%>:&nbsp;<u><%=GreenText(Date2Str(dtEndDate))%></u></div><%
	If Not readonly Then%>
		<div><%=obLanguage("Grade","kAssignTheme")%>:&nbsp;<u><%=GreenText(DB2HTML(strAName))%></u></div><%
	End If
End Sub

Sub DrawButtons()
	If Not readonly Then
		ButtonSave "SaveGrades();", obLanguage("Common","kSave")
		ButtonReset "resetScreen('Gradebook');", obLanguage("Common","kReset")
	End If
End Sub

Sub onDrawPage()%>
	<form name="Gradebook" ACTION="Gradebook.asp" METHOD="post">
		<%=WriteObligatoryTags()%>
		<input type="HIDDEN" name="AID" value="<%=strAID%>">
		<%Call DrawButtonsFilters( strSubjClassID<>"0"  And Not bNoStudents, "Gradebook" )
		Call DrawGradebookTable( True )%>
	</form><%
End Sub

Sub DrawGradebookTable( bShowLegend )
	If Not bIsDebug Then On Error Resume Next

	Dim rsResults, arrResults
	Dim strColor, strValue, i, j, k, m, n
	Dim strVaildIDs
	Dim days, dayAissgnmentID, studId, dayDuedate, result, bIsNumber

	If strSubjClassID = "0" Or bNoStudents Then
		drawInfo obLanguage("Filter","kNoStudents",strFunctionalityType), False
		Exit Sub
	End If
	If bNoAssignments Then
		DrawInfo obLanguage("Grade","kNoAssignments"), False
		Exit Sub
	End If
	If bJuniorLA Then
		Set rsResults = objNSNET.GetLACoursesAssignmentResults(strSubjClassID, "courses", strLAID )
	Else
		Set rsResults = objNSNET.GetLAAssignmentResults(strSubjClassID, strLAID )
	End If
	If Not rsResults.EOF Then
		arrResults = rsResults.GetRows(,,Array("STUDENTID","DUEDATE","ASSIGNMENTID","RESULT","DONEDATE"))
		k = 0
	Else
		ReDim arrResults(0,0)
		k = 1
	End If
	rsResults.Close
	Set rsResults = Nothing

	If Not readonly Then strVaildIDs = "a" & strAID & "as"

	rw	"<div class=""row""><div class=""col-md-4""><table class=""table table-bordered table-condensed"">"
	rw	"<tr class=""info"">" & _
			"<th rowspan=""2"">" & obLanguage("Common","kStudents",strFunctionalityType) & "</th>" & _
			"<th colspan="""& UBound(arrDays,2)+1 & """>" & obLanguage("Grade","kAssignments") & "</th>" & _
		"</tr>" & _
		"<tr class=""info"">"
	For i = 0 To UBound(arrDays,2)
		rw "<th>" & Date2Str_NoYear(arrDays(indDayDueDate,i)) & "</th>"
	Next
	rw	"</tr>"
	n = 0

	For i = 0 To UBound(arrStudents,2)
		rw "<tr><td>" & DB2HTML(arrStudents(indStudName,i)) & "</td>"
		studId = CStr(arrStudents(indStudStudentID,i))

		For m = k To UBound(arrResults,2)
			If CStr(arrResults(indResStudentID,m)) = studId Then
				k = m
				Exit For
			End If
		Next
		For j = 0 To UBound(arrDays,2)
			strColor = ""
			If j = nActiveColumn Then strValue = "" Else strValue = "&nbsp;"

			dayAissgnmentID=CStr(arrDays(indDayAssignmentID,j))
			dayDuedate = arrDays(indDayDueDate,j)
			If k <= UBound(arrResults,2) Then
				If CStr(arrResults(indResStudentID,k)) = studId Then
					Do
						days = DateDiff("d", arrResults(indResDueDate,k), dayDuedate, 0, 0)
						If days < 0  Then Exit Do
						If days = 0 And CStr(arrResults(indResAssignmentID,k)) >= dayAissgnmentID Then Exit Do
						k = k + 1
						If k > UBound(arrResults,2) Then Exit Do
					Loop
					If k <= UBound(arrResults,2) Then
						days = DateDiff("d", arrResults(indResDueDate,k), dayDuedate, 0, 0)
						If days = 0 And CStr(arrResults(indResAssignmentID,k)) = dayAissgnmentID Then
							result = arrResults(indResResult,k)
							If IsNull(result) Then
								strValue = strMandatory
								If DateDiff("d", NSNow(), dayDuedate, 0, 0)<0 Then strColor = clrOverdue
							Else
								strValue = GetGrading( result )
								If DateDiff("d", arrResults(indResDoneDate,k), dayDuedate, 0, 0) < 0 Then strColor = clrOverdue
							End If
							k = k + 1
						End If
					End If
				End If
			End If
			rw "<td class=""text-center"" " & strColor & ">"
			If readonly Or j <> nActiveColumn Then
				rw strValue
			Else
				rw "<input type=""checkbox"" name=""M" & studId & """ value=""1"""
				If strValue <> "" Then
					rw " checked"
					If strValue = strMandatory Then strValue = ""
				End If
				rw " OnClick=""clickCheck(this,"& n &");"">"
				rw "<input type=""text"" name=""G"" size=""" & TextInputSize(3) & """ maxlength=""4"" value=""" & strValue & """ OnChange=""dataChanged()"">"
				rw "<input type=""hidden"" name=""S"" value=""" & studId & """>"
				strVaildIDs = strVaildIDs & studId & "s"
			End If
			rw "</td>"
		Next
		rw "</tr>"
		n = n + 1
	Next
	rw "</table></div></div>"

	If Not readonly Then Call obTokenMgr.SetData( strToken, stAvailableSID, strVaildIDs )

	If bShowLegend Then%>
		<div class="legend print-block">
			<div>
				<p>
					<span class="legend-label">&nbsp;<%=strMandatory%>&nbsp;</span>
					<span class="legend-description"><%=obLanguage("Grade","kObligatoryAssignment",strFunctionalityType)%></span>
				</p>
				<p>
					<span class="bg-danger legend-label">&nbsp;</span>
					<span class="legend-description"><%=obLanguage("Grade","kExpiredAssignment")%></span>
				</p>
			</div>
		</div>
		<div class="legend print-block">
			<div>
				<p><span class="legend-description"><%=obLanguage("Grade","kTickMarkMeans",strFunctionalityType)%></span></p>
			</div>
		</div><%
	End If
End Sub
%>

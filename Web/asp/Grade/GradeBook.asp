<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/teacher.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE FILE="../Grade/Grade_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateinput.asp" -->
<!-- #INCLUDE FILE="../Reports/GradingScale_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
'	ViewMode=<Score Mode>: S[core]|P[oints]

Const strMandatory = "<b>&#183</b>"
Const clrOverdue = " bgcolor=#FFC0C0"
Const clrOverdueP = " bgcolor=#EAEAEA" ' for printing

'Array indices
Const indStudStudentID	= 0
Const indStudName		= 1

Const indDayDueDate			= 0
Const indDayAssignmentID	= 1
Const indDayPPoints			= 3
Const indDayProblemName		= 4

Const indResStudentID		= 0
Const indResDueDate			= 1
Const indResAssignmentID	= 2
Const indResResult			= 3
Const indResDoneDate		= 4
Const indPossiblePoints		= 5

Dim bChangeLA, bJuniorLA, bIsDeleted
Dim strLAID, strLAName, strLAURL, strLAResultsURL, strLAJID, strViewMode, strActivityID
Dim objGradeComponent, pivotTable, X_Axis, Y_Axis, Crosses
Dim strBack

Function GetPageTitle()
	If Not IsDull(strLAName) Then
		GetPageTitle = obLanguage("Grade","kGradeBook") & ": <U>" & GreenText(DB2HTML(strLAName)& IIF(bIsDeleted," "&obLanguage("LearnApp","kDeleted"),"")) & "</U>"
	Else
		GetPageTitle = obLanguage("Grade","kGradeBook")
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningApplications
End Function

Function GetPageTabItem()
	If Not IsDull(strBack) Then
		If InStr(strBack, "skysmart") > 0 Then
			GetPageTabItem =  TabItem_tbSkySmart
		Else
			GetPageTabItem =  TabItem_tbQA
		End If
	Else
		GetPageTabItem =  TabItem_tbQA
	End If
 End Function

Sub ReadState_Special()
	Dim strLAID_Request
	Dim strStateLa
	strBack = GetSafeStr(Request("Back"), -1, "")
	strStateLA = GetSafeStr(Request("STATELA"), -1, "")
	If strStateLA <> "" Then Call obTokenMgr.SetData(strToken, stLaState, strStateLA)

	strLAID_Request = Request("LAID")
	bIsDeleted = False

	If IsDull(strLAID_Request) Then
		strLAID_Request = ParseLA( obTokenMgr.GetData(strToken, stCurrLAID) )
		strLAID = GetSafeActivityID( strLAID_Request )
		strLAName = GetSafeStr(obTokenMgr.GetData(strToken, stActName), -1, Null)
		strLAResultsURL = GetSafeStr(obTokenMgr.GetData(strToken, stLAResURL), -1, "")
		If GetSafeStr(obTokenMgr.GetData(strToken, stLADeleted), 1, "N")="Y" Then bIsDeleted = True
		bChangeLA = False
	Else
		strLAID_Request = ParseLA( strLAID_Request )
		strLAID = GetSafeActivityID(GetSafeStr(strLAID_Request, 20, Null))
		Call GetLAInfo()
		bChangeLA = True
	End If

	strViewMode = GetSafeStr( Request("ViewMode"), 1, GetSafeStr( obTokenMgr.GetData( strToken, stViewMode ), 1, "S" ) )
	If strViewMode <> "S" And strViewMode <> "P" Then strViewMode = "S"

	strCalendarTargetForm = "Gradebook"
	strCalendarTargetAction = "Gradebook.asp"
End Sub

Sub GetLAInfo()
	Dim oRs, oLaRs

	Set oRs = objNSNET.GetActivityInfo(strLAID )
	If oRs.EOF Then GenerateError( obLanguage("Grade","kErrActivity") )
	If bJuniorLA Then
		strLAName = objLa.GetProductName(strLAJID)
		If IsDull(strLAName) Then GenerateError( obLanguage("Grade","kErrActivity"))
	Else
		strLAName = CStr(oRs("ACTIVITYNAME"))
		If GetSafeStr(oRs("ISDELETED"), 1, "N")="Y" Then bIsDeleted = True
	End If

	strLAURL = GetSafeStr(oRs("PROBLEMLISTURL"), 200, "")
	' strLAURL -- пуст для конструктора уроков (ndconstructor) и ЭОР "Финансовая грамотность" (ndfingram)
	if strLAID <> "ndconstructor" and strLAID <> "ndfingram" and strLAURL = "" Then GenerateError(obLanguage("Grade","kErrActivity"))
	strLAResultsURL = GetSafeStr(oRs("RESULTSURL"), 200, "")
	oRs.Close
	Set oRs = Nothing
End Sub

Sub WriteState_Special()
	Call obTokenMgr.SetData(strToken,stViewMode, strViewMode)
	If bChangeLA Then
		If bJuniorLA Then
			Call obTokenMgr.SetData(strToken, stCurrLAID, strLAID & "|" & strLAJID)
		Else
			Call obTokenMgr.SetData(strToken, stCurrLAID, strLAID)
		End If
		Call obTokenMgr.SetData(strToken, stActName, strLAName)
		Call obTokenMgr.SetData(strToken, stActId, strLAID) ' вроде strLAID = strActivityID, см. objNSNET.GetActivityInfo
		Call obTokenMgr.SetData(strToken, stLAURL, strLAURL)
		Call obTokenMgr.SetData(strToken, stLAResURL, strLAResultsURL)
		Call obTokenMgr.SetData(strToken, stLADeleted, IIF(bIsDeleted,"Y","N"))
	End If
End Sub

Sub Main_Before
	Dim bGrading

	If Not bOK Then Exit Sub
	
	bGrading = CBool(strViewMode = "P")
	
	Set objGradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradeComponent")
	Set pivotTable = objGradeComponent.GetLAAssignmentsForSGPivot(strSubjClassID, strLAID, dtStartDate, dtEndDate, bGrading, strLAJID)
	Set X_Axis = pivotTable.X_Axis
	Set Y_Axis = pivotTable.Y_Axis
	Set Crosses = pivotTable.Crosses

	bNoStudents = CBool(Y_Axis.Count = 0)
	bNoAssignments = CBool(X_Axis.Count = 0)
	bMayAddLAAssignment = Not readonly And bNoAssignments

End Sub

Function OnUnload()
	If bOK Then OnUnload = "closeDate()"
End Function

Sub onHead_Special()
	Dim strTTSURL
	strTTSURL = GetTTSURL()
	%>
	function Back() {
		goBack(document.Gradebook,'<%=strBack%>');
	}
	<%	
'<script>
'<!--
If strLAResultsURL<>"" Then%>
$(document).ready(function() {
	dateInput.onChange(function() {
		ok_check_db('Gradebook', '');
	});

	$('*[name="assignment-link"]').popover({
		placement : 'bottom',
		html: 'true',
		trigger: "hover"
	});
});
var wnd = null;
function ShowResults(sID, aID, LAID) {
	var params = { PROXYURL: "<%=strLAResultsURL%>", TTSURL: "<%=strTTSURL%>", STUDENTID: sID, AID: aID };
	if ( LAID ) { params.LAID = LAID; }
	var url = urlHelper.makeUrl("/asp/RemoteHostProxy.asp", params);
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=950,height=660', winChild: wnd };
	windowOpen( winOptions );
	wnd = winOptions.winChild;
//	maximize(wnd);
}<%
End If%>
function changeViewMode() {
	DoSubmit(document.Gradebook, "Gradebook.asp");
}<%
If Not bOK Or bNoAssignments Then Exit Sub%>
function EditAssignments(aID) {
	var form = document.forms['Gradebook'];
	form.elements['AID'].value = aID;
	if(aID != '')
		form.action += '#a' + aID;
	DoSubmit(form, "LAAssignments.asp");
}<%
If Not readonly Then%>
	function EditGrades(aID) {
		var form = document.forms['Gradebook'];
		form.elements['AID'].value = aID;
		DoSubmit(form, "EditGradebook.asp");
	}<%
End If
'//-->
'</script>
End Sub

Sub DrawFilters_Before()
	OpenFormGroup "Вид"%>
		<select name="ViewMode" onChange="changeViewMode()" class="form-control">
			<option value="S"<%If strViewMode = "S" Then Response.Write " SELECTED"%>><%=obLanguage("Grade","kPercentScale")%></option>
			<option value="P"<%If strViewMode = "P" Then Response.Write " SELECTED"%>><%=obLanguage("Grade","kMarks")%></option>
		</select><%
	CloseFormGroup
End Sub

Sub DrawLinkButtons()
	If strSubjClassID <> "0" And Not bNoStudents And Not bNoAssignments Then DrawPrintButtons
End Sub
		 
Sub onDrawPage()
%>	<form name="Gradebook" action="Gradebook.asp" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("AID","", "RO", IIf(readonly, 1, 0)) )%>
		<input type="hidden" name="LABACK" value="/asp/Grade/GradeBook.asp">
		<%Call DrawButtonsFilters( True, "Gradebook" )%>
	</form><%

	If bExit Then Exit Sub
	If Not readonly And bNoAssignments Then%>
	<form name="QA" action="/asp/Curriculum/EditAssignment.asp" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("AURL",strLAURL,"AID","-1","ASL","","QA","1", "BACK", "/asp/Grade/Gradebook.asp", "LA_Mode", "1") )%><%
		End If
		Call DrawGradebookTable( True )

		If Not readonly And bNoAssignments Then%>
	</form><%
		End If
End Sub

Function GetTableHeader( nRowSpan )
	GetTableHeader = _
		"<div class=""row print-block""><div class=""col-md-12""><table class=""table table-bordered table-condensed table-thin table-xs table-print"">" & _
			"<tr class=""info"">" & _
				"<th rowspan="""& nRowSpan &""">" & obLanguage("Common","kStudents",strFunctionalityType) & "</th>" & _
				"<th colspan="""& X_Axis.Count & """>" & obLanguage("Grade","kAssignments") & "</th>" & _
				"<th rowspan="""& nRowSpan &""">" & obLanguage("Common","kAverageMarkBR") & "</th>" & _
			"</tr>" &_
			"<tr class=""info"">"
End Function

Sub DrawGradebookTable( bShowLegend )
	If Not bIsDebug Then On Error Resume Next
	
	Dim nScore, nAssignments
	Dim strHTML, strPValue, strColor, strColorP, strValue, strStatus, strTitle
	Dim dayAissgnmentID, studId, dayDuedate, doneDate, result, mark, ci
	Dim cell, x, y, value

	If strSubjClassID = "0" Or bNoStudents Then
		DrawInfo obLanguage("Filter","kNoStudents",strFunctionalityType), False
		Exit Sub
	End If
	If bNoAssignments Then Exit Sub

	rw GetTableHeader( IIF(Not readonly,3,2) )
	strStatus = IIf(readonly, DB2HTML(obLanguage("Grade","kViewAssignments")), DB2HTML(obLanguage("Grade","kEditAssignments")))
	For Each x in X_Axis
		strHTML = Date2Str_NoYear(x.DueDate)
		strTitle = "<span class='task'>"& strStatus &"</span><span>"
		If Not IsDull(x.Problemname) Then
			strTitle = strTitle & "<span>"& DB2HTML(x.Problemname) &"</span>"
		End If
		%><th><%=ShowAnchor( "EditAssignments('" & x.Id & "')", "", strHTML, "name=""assignment-link"" data-original-title=""" & strTitle & """") %></th><%
	Next
	
	If Not readonly Then
		%></tr><tr><%
		For Each x in X_Axis
			%><th><%=ShowAnchor( "EditGrades('" & x.Id & "')", obLanguage("Grade","kEditGrades"), obLanguage("Grade","kMarks2"), "class=""smalltext""")%></th><%
		Next
	End If
	%></tr><%

	For Each y in Y_Axis
		nScore = 0 : nAssignments = 0
		strHTML = "<tr class=""text-center""><td class=""text-left text-nowrap"">" & DB2HTML_BR(y.Name) & "</td>"
		rw strHTML
		studId = CStr(y.Id)

		For Each x in X_Axis
			strColor = "" : strColorP = "" : strValue = "&nbsp;"
			strPValue = ""
			dayAissgnmentID=CStr(x.Id)
			dayDuedate = x.DueDate
			Set ci = pivotTable.GetCross(x, y)
			If Not ci Is Nothing Then
				Set value = ci.Value
				result = IIF(IsDull(value.Mark), null, value.Mark)
				doneDate = IIF(IsDull(value.Donedate), null, value.Donedate)
			Else
				result = Empty
				doneDate = Empty
			End If
			
			If Not IsEmpty(result) Then
			
				If IsNull(result) Then
					strValue = strMandatory
					If DateDiff("d", NSNow(), dayDuedate, 0, 0) < 0 Then strColor = clrOverdue : strColorP = clrOverdueP
				Else
					strValue = result
					nScore = nScore + strValue
	
					If DateDiff("d", doneDate, dayDuedate, 0, 0) < 0 Then strColor = clrOverdue
					nAssignments = nAssignments + 1
					If strLAResultsURL <> "" And (Not bIsDeleted) Then
						strPValue = strValue
						strValue = "<a href=""JavaScript:ShowResults('" & studId & "','" & dayAissgnmentID & "'"
						If bJuniorLA Then strValue = strValue & ",'" & strLAJID & "'"
						strValue = strValue & ")"" title=""" & obLanguage("Grade","kViewResultsInActivity") & """>" & strPValue & "</A>"
					End If
				End If
			End If
			rw "<td" & strColor & ">" & strValue & "</td>"
			If strPValue = "" Then strPValue = strValue
		Next
		strHTML = "<td>"
		If nAssignments = 0 Then
			strHTML = strHTML & "&nbsp;"
		Else
			strHTML = strHTML & FormatNumber( nScore/nAssignments, 2 ) & "</td></tr>"
		End If
		rw strHTML
	Next
	rw "</table></div></div>"

	If bShowLegend Then
		strHTML = _
			"<div class=""legend print-block"">" &_ 
				"<div>" &_
					"<p>" &_
						"<span class=""legend-label"">&nbsp;" & strMandatory & "&nbsp;</span>" &_
						"<span class=""legend-description"">" & obLanguage("Grade","kObligatoryAssignment",strFunctionalityType) & "</span>" &_
					"</p>" &_
					"<p>" &_
						"<span class=""bg-danger legend-label"">&nbsp;</span>" &_
						"<span class=""legend-description"">" & obLanguage("Grade","kExpiredAssignment") & "</span>" &_
					"</p>" &_
				"</div>" &_
			"</div>"
		rw strHTML
	End If
End Sub
%>

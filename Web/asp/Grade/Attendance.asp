<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterMonths.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="attendance_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Dim rsStudents, rsDays, dctAttendances
Dim bAll, bEditSelfViewAll
Dim strTeacherID
Dim bRight_arJournalEditAll

Function hasUserRightsOnPage()
	bAll=True
	bRight_arJournalEditAll = HasUserRight(arJournalEditAll)
	If HasUserRight(arJournalEditAll) Then hasUserRightsOnPage =True :Exit Function
	If HasUserRight(arJournalViewAll) Then hasUserRightsOnPage =True :Exit Function
	bAll=False
	If HasUserRight(arJournalEditSelf) Then hasUserRightsOnPage =True :Exit Function
	hasUserRightsOnPage = HasUserRight(arJournalViewSelf)
End Function

Sub GetRightsOnPage()
	bEditSelfViewAll=False
	If readonly Then Exit Sub
	If HasUserRight(arJournalEditAll) Then Exit Sub
	If HasUserRight(arJournalEditSelf) Then
		If HasUserRight(arJournalViewAll) Then bEditSelfViewAll = True
	Else
		readonly = True
	End If
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kExhibitingAttendance") & " " & LCase(obLanguage("Common","kStudents_r_b",strFunctionalityType))
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miJournal
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbAttendance
 End Function

Function LocationPath()
	LocationPath = GetSystemLocationPath()
End Function

Sub ReadState()
	Dim bIsClassChief
	strTeacherID = strUserID
	Call GetRightsOnPage()

	If bAll Then Call InitYearClasses() Else Call InitTeacherClasses(False)
	If objClassesRs.EOF Then Exit Sub

	bIsClassChief = objNSNET.IsClassChief(strClassID, strUserID)
	If Not readonly And bEditSelfViewAll And Not bIsClassChief Then
		If objNSNET.GetSafeYearTeacherClassID(strCurrYearID, strUserID, GetSafeID(strClassID, "0")) <> strClassID Then readonly = true
	End If
	If Not readonly And Not bRight_arJournalEditAll Then
		readonly = Not bIsClassChief
	End If
	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )
	Call InitMonths( dtYearStart, dtYearEnd )
End Sub

Sub WriteState()
	If bExit Then Exit Sub
	WriteClass
	WriteMonth
End Sub

Sub Main()
	bExit = True
	If strClassID = "0" Then Exit Sub
	Set rsStudents = objNSNET.GetClassStudentListForDateInterval(strClassID, dtMonthStart, dtMonthEnd)
	If rsStudents.EOF Then Exit Sub
	Set rsDays = objNSNET.GetClassMeetingDayList(strClassID, dtMonthStart, dtMonthEnd)
	If rsDays.EOF Then Exit Sub
	Set dctAttendances = objNSNET.GetClassAttendances(strClassID, dtMonthStart, dtMonthEnd)
	bExit = False
End Sub

Sub onHead()
	scriptMonth "Attendance", "Attendance.asp"
	If strClassID = "0" Then Exit Sub
	%><link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/grade/css/attendance.css")%>">
	<SCRIPT>
	<!--
		function EditStudent(destinationpage,studentID)
		{
			var paramSTR, elem;
			var form = document.forms['Attendance'];
			form.action = destinationpage;

			form.elements['ClassNm'].value = '<%=objNSNET.GetClassName(strClassID)%>';

			elem = form.elements['MonthYear'];
			paramSTR = elem.options[elem.selectedIndex].text;
			form.elements['MonthNm'].value = paramSTR;

			form.elements['StudID'].value = studentID;
			DoSubmit( form, "" );
		}
	//-->
	</SCRIPT><%
End Sub

Sub onDrawPage()%>
<form name="Attendance" method="post" action="Attendance.asp">
<%=WriteObligatoryTags()%>
<%=WriteHiddenTags(Array("StudID","", "MonthNm","", "ClassNm",""))%><%
	Call DrawButtonsFiltersSingleRow( "Attendance" )
	If strClassID = "0" Then rw "</form>" : Exit Sub
	If rsStudents.EOF Then Call DrawInfo(obLanguage("Filter","kNoStudents",strFunctionalityType), False) : rw "</form>" : Exit Sub
	If rsDays.EOF Then Call DrawInfo(obLanguage("Grade","kNoClassMeetingsForMonth"), False) : rw "</form>" : Exit Sub%>
	
	<div class="row">
		<div class="col-md-12">
			<%=GetAttendanceTable(  Not readonly, False)%>
			<%DrawLegend%>
		</div>
	</div>
</form><%
End Sub

Sub DrawButtons()
End Sub

Sub DrawLinkButtons
	If bExit Then Exit Sub
	Call ButtonPrint(ButtonPrintHandler())
	Call ButtonExport(ButtonExportHandler())
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))
	DrawMonths strForm
End Sub

%>

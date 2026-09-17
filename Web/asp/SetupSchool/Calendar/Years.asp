<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/MoveDoc_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kAddSchoolReason_Statement = 2 ' заявление
Const OPEN_NEW_YEAR_ALLOWED = True

Dim objTerms, rsEvents
Dim bRight_EditSchoolTermTypes
Dim bRight_OnlySummerMoveBook
Dim bRight_CreateCloseEditYear
Dim bEmptyTerms
Dim bFutureYearPresent
Dim bFutureYearSectionAllow
Dim bIsFutureClassesExists
Dim bIsFutureYearBegins
Dim bIsProduction
Dim bAddSchool
Dim bPreSchool
Dim bOrphanage
Dim bCommonSchool
Dim bRight_CreateEditTerm
Dim strHint

Function hasUserRightsOnPage()
	bRight_CreateCloseEditYear = HasUserRight(arCreateCloseEditYear)
	hasUserRightsOnPage = bRight_CreateCloseEditYear Or HasUserRight(arMoveBookEdit)
	bRight_OnlySummerMoveBook = Not bRight_CreateCloseEditYear And HasUserRight(arMoveBookEdit)
	bRight_EditSchoolTermTypes = HasUserRight(arEditSchoolTermTypes)
	bRight_CreateEditTerm = HasUserRight(arCreateEditTerm)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbYear
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Common","kSchoolYear")
End Function

Function IsFutureSectionAllowed
	Dim dtToday, dtFutureYearSectionAllow

	bFutureYearPresent = obTokenMgr.GetData(strToken, stFutureYearExists)
	If bFutureYearPresent Then
		IsFutureSectionAllowed = True
		Exit Function
	End If
	dtToday = NSNow()
	dtFutureYearSectionAllow = DateSerial(Year(dtYearEnd), kFutureYearAllow_Month, kFutureYearAllow_Day)
	IsFutureSectionAllowed = DateDiff("d", dtToday, dtFutureYearSectionAllow, 0, 0) <= 0
End Function

Function IsOpeningFutureYearAllowed
	IsOpeningFutureYearAllowed = (OPEN_NEW_YEAR_ALLOWED And bRight_CreateCloseEditYear And bIsFutureClassesExists And ((Not bPreSchool) Or (Not bIsProduction) Or bIsFutureYearBegins))
End Function

Sub ReadState()
	bIsProduction = obConfig.Environment = Environment_Production
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	bOrphanage = (CLng(strFunctionalityType) = kFuncType_Orphanage)
	bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
	bIsFutureYearBegins = False
	If Not bFutureMode Then InitYears
	InitYearInfo
	Call obTokenMgr.SetData(strToken, "backPg", Null)
	bFutureYearSectionAllow = IsFutureSectionAllowed()

	If bFutureYearSectionAllow Then 
		bIsFutureClassesExists = objNSNET.IsFutureClassesExists(strSchoolID)
		bIsFutureYearBegins = objNSNET.IsFutureYearBegins(strSchoolID)
	End If
	If bIsFutureClassesExists Then

		'Данная ситуация возможна если другой пользователь создал будущий год.
		'TODO. в компоненте при создании года прописать всем школьным юзерам данный флаг.
		bFutureYearPresent = True
		Call obTokenMgr.SetData(strToken, stFutureYearExists, True)
	End If

	Set objTerms = objNSNET.GetTermList(strCurrYearID)
	bEmptyTerms = objTerms.EOF
	Set rsEvents = objNSNET.GetSchoolEventList(kVacation, strCurrYearID)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, "BACK", strScriptName)
	Call obTokenMgr.SetData(strToken, "stEventsMonthViewType", kVacation)
	Call obTokenMgr.SetData(strToken, "FixEventType", True)
End Sub

Sub Main()
End Sub

Sub FutureYearScript()
	Dim rsTmp, hasNoOrdered
	Dim strMessage, strStudentName, strClassName

	If bRight_CreateCloseEditYear Then
		If bAddSchool Or bOrphanage Then
			hasNoOrdered = False
		Else
			Set rsTmp = objNSNET.GetCurrClassStudentsWithoutOrder(strSchoolYearID, 0, 2)
			hasNoOrdered = Not rsTmp.EOF
		End If
		If hasNoOrdered Then
			RW "alert(language.Movement.kMsgNoOrderedStudentsInClasses);"
		ElseIf Not bFutureYearPresent Then
			RW "var confirms = new Array(); "
			If bOrphanage Then
				RW "confirms.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kConfirmOpenFutureYearOrphanage)); "
			Else
				If bCommonSchool Then
					Set rsTmp = objNSNET.GetClassWithConditionalStudents(strSchoolYearID)
					If Not rsTmp.EOF Then
						strStudentName = GetSafeStr(rsTmp("NICKNAME"), -1, "")
						strClassName = GetSafeStr(rsTmp("CLASSNAME"), -1, "")
						strMessage = (DB2Java(strStudentName & ", " & strClassName))
						RW "confirms.push($.show.getConfirmation(language.Generic.Movement.kExistsStudentsWithUnresConditionalMove + ' " & strMessage & ".\n' + language.Generic.Common.kContinue)); "
					End If
				End If
				RW "confirms.push($.show.getConfirmation(language.Generic.Movement.kAskFutureYearCreate)); "
			End If
			RW "extDeferred.when(confirms).then(function(){"
			RW "createFutureYear();"
			RW "});"
		End If
	End If
End Sub

Sub onHead()
	Dim nDebtStudCount
%>
	<script src="<%=GetVersionedResLink("/vendor/pages/common/js/queue.js")%>" type="text/javascript"></script>
	<script src="/vendor/components/signalr/jquery.signalR.min.js" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/webapi/signalr/hubs")%>" type="text/javascript"></script>

	<SCRIPT><!--
	function futureYear() {
		<%Call FutureYearScript()%>
	}

	function createFutureYear() {
		<%If bOrphanage Then%>
		ok('MainForm', 'SaveNewYear.asp');
		$(document).trigger('showProcessing');
		<%Else %>
		taskQueue.execute({
			getTaskFunc: function() { return jsSubmit({action: "/webapi/years/createfuture", method: "GET"}) },
			hint: "Данное информационное окно можно закрыть не дожидаясь выполнения. По результатам выполнения операции Вам будет отправлено письмо на внутреннюю почту."
		}).then(function(futureYearId){
			postTo("/asp/SetupSchool/ChangeYear.asp", { SCHOOLYEARID: futureYearId });
		});
		<%End If %>
	}
	<%
	If bFutureMode And IsOpeningFutureYearAllowed Then%>
	function openFutureYear() {
		var confirms = new Array();
		if( isDBBusy() ) return false;<%
		If IsNotExistsNotEnrolledClasses( -1, -1 ) Then
			If IsExistsNotEnrolledNotYearMoved() Then%>
				ok('MainForm','ShowNonEnrolledClasses.asp');
				return false;<%
			End If
		Else%>
			ok('MainForm','ShowNonEnrolledClasses.asp');
			return false;<%
		End If
	'	If bAddSchool Then
		If False Then
			Dim nNonSertifStudCount
			nNonSertifStudCount = objNSNET.GetStudentsCountForAddSchoolReason(strCurrYearID, kAddSchoolReason_Statement)' ???????????????
			If nNonSertifStudCount > 0 Then%>
				alert(language.Generic.SetupSchoolCalendar.kStudentsWithReasonStatementExists + '<%=( nNonSertifStudCount)%>');
				return false;<%
			End If
		End If

		If bPreSchool Then
			nDebtStudCount = objNSNET.GetDebtStudentsCountForPreSchool(strSchoolYearID)
			If nDebtStudCount > 0 Then%>
				confirms.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kStudentsWithDebtWillTransfer + '<%=( nDebtStudCount)%>'));<%
			End If
		End If

		%>
		confirms.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kConfirmOpenFutureYear));
		extDeferred.when(confirms).then(function(){
			setDBBusy();
			ok('MainForm','SaveNewYear.asp');
		});
	}<%
	End If%>
	function EditTerms() { ok('MainForm','Terms.asp'); }
	function EditVacations() { postTo('/angular/school/calendar/events/3') }
	<%If arPostSchoolEvent Then%>
	function VacationGrades() {
		ok('MainForm', /*'VacationGrades.asp'*/'/angular/school/calendar/vacations/classesrel/');
	}
	<%End If%>
	<%If bRight_EditSchoolTermTypes Then%>
	function TermTypes() {
		ok('MainForm', 'TermTypes.asp');
	}
	<%End If%>
	//--></SCRIPT>
	<%
End Sub

Sub DrawFilters( strForm )
	If Not bFutureMode Then Call DrawYears( strForm )%>
	<%=GreenText(FormatDateTime(dtYearStart, vbLongDate) &" - "&FormatDateTime(dtYearEnd, vbLongDate))%><%
End Sub

Sub DrawLinkButtons()
	If readonly Then Exit Sub
	Call DrawSpecialButtons
	If not bOrphanage And bEmptyTerms And bRight_EditSchoolTermTypes Then
		Call obTokenMgr.SetData(strToken, "backPg", strScriptName)
		Call Button("TermTypes()", obLanguage("SetupSchoolCalendar","kTermTypes"), obLanguage("SetupSchoolCalendar","kTermTypes"), "")
	End If
	If HasUserRight(arCreateCloseEditYear) Then
		Call Button("ok('MainForm','EditYear.asp')", obLanguage("SetupSchoolCalendar","kWeekendDays"), obLanguage("SetupSchoolCalendar","kWeekendDays"), "")
	End If
End Sub

Sub onDrawPage()%>

	<form name="MainForm" method="post" action="/asp/SetupSchool/Calendar/Years.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DOCTYPE","","FUTUREMODE","")) %>
		<%Call DrawButtonsFilters( True, "MainForm" )%>
	</form>

	<%If bOrphanage Then Exit Sub
	%><hr />

	<div class="row"><%
	If bEmptyTerms Then
		DrawWarning GetNoTermsInYearDefineTermsTypes("MainForm", False)
	Else
		DrawPeriodsPanel
		DrawVacationsPanel
	End If
	%></div><%
End Sub

Sub DrawSpecialButtons()
	If (bRight_CreateCloseEditYear Or bRight_OnlySummerMoveBook) And Not readonly Then
		If bFutureMode Then
			If IsOpeningFutureYearAllowed Then
				SimpleButton "openFutureYear()", obLanguage("SetupSchoolCalendar","kOpenFutureYear")
			End If
		ElseIf bFutureYearSectionAllow And Not bFutureYearPresent And bRight_CreateCloseEditYear Then
			SimpleButton "futureYear()", obLanguage("Buttons","kEditFutureYear")
		End If
	End If
End Sub

Sub DrawPeriodsPanel()
	strHint = obLanguage("SetupSchoolCalendar","kTermTypes")%>

	<div class="col-md-6"><%
		OpenPanelEx obLanguage("Common","kPeriods"), "periods", "", False, "panel-success"
			DrawPeriodButtons%>
			<table class="table table-bordered">
				<tr class="text-nowrap">
					<th><%=obLanguage("Common","kName")%></th>
					<th><%=obLanguage("Common","kStartDate")%></th>
					<th><%=obLanguage("Common","kEndDate")%></th>
				</tr><%
				While Not objTerms.EOF%>
					<tr class="text-nowrap">
						<td class="text-center"><%=DB2HTML(objTerms("TERMNAME"))%></td>
						<td><%=Date2Str(objTerms("STARTDATE"))%></td>
						<td><%=Date2Str(objTerms("ENDDATE"))%></td>
					</tr><%
					objTerms.MoveNext
				WEnd%>
			</table><%
		ClosePanel%>
	</div><%
End Sub

Sub DrawVacationsPanel()
	Dim strEventID%>
	<div class="col-md-6"><%
		OpenPanelEx obLanguage("SetupSchoolCalendar","kVacations"), "vacations", "", False, "panel-info"
			DrawVacationButtons%>
				<table class="table table-bordered">
					<tr>
						<th><%=obLanguage("Common","kDate")%></th>
						<th><%=obLanguage("Common","kName")%></th>
					</tr><%
					While Not rsEvents.EOF
						strEventID = rsEvents("eventID")%>
						<tr>
							<td class="text-nowrap"><%Call WriteTimeInterval( kVacation, rsEvents("STARTTIME"), rsEvents("ENDTIME") )%></td>
							<td><%=DB2HTML( rsEvents("EVENTNAME") )%></td>
						</tr><%
						rsEvents.MoveNext
					WEnd%>
				</table><%
		ClosePanel%>
	</div><%
End Sub

Sub DrawPeriodButtons()
	strHint = obLanguage("SetupSchoolCalendar","kTermTypes")
	OpenBtnGroup
	If not readonly And bRight_CreateEditTerm Then
		ButtonChange "EditTerms()", obLanguage("SetupSchoolCalendar","kEditTermTypesLimits")
	End If
	If bRight_EditSchoolTermTypes Then
		Call Button("TermTypes()", strHint, strHint, "")
	End If
	CloseBtnGroup
End Sub

Sub DrawVacationButtons()
	OpenBtnGroup
	If not readonly And HasUserRight(arPostSchoolEvent) Then
		ButtonChange "EditVacations()", obLanguage("SetupSchoolCalendar","kEditVacationsLimits")
		strHint = obLanguage("SetupSchoolCalendar","kVacationsClasses", strFunctionalityType)
		Call Button("VacationGrades()", strHint, strHint, "")
	End If
	CloseBtnGroup
End Sub
%>

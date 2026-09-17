<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterMonths.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses_IUP.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE   ="MonthBirth_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Calendar_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim rsMonthBirth
Dim strPeriodCondition
Dim dtDate, bAll, strTeacherID
Dim nBirthRoles, nBirthRole_Staff, nBirthRole_Student, nBirthRole_Parent
Dim bNoBirthdays
Dim strPageName_MonthView
Dim bStudentNotInClass, strStudentNotInClass ' actual for not Staff only!
Dim strStaffs
Dim arrClasses

Function hasUserRightsOnPage()
	If HasUserRight(arCalendarViewAll) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arCalendarViewSelf) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Calendar","kTitleMonthBirth")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClndrMonth
 End Function

Sub ReadState()
	Dim i

	strPageName_MonthView = IIf(bIsStaff, "MonthView.asp", "MonthViewS.asp") ' differ for Staff and Student/Parent

	bStudentNotInClass = False
	If bIsStaff Then
		If bAll Then
			strTeacherID = "-1"
			Call InitYearClassesAll()
		Else
			strTeacherID = strUserID
			Call InitTeacherClasses(True)
		End If

		strPageName_MonthView = "MonthView.asp" ' differ for Staff and Student/Parent
		strStaffs = obLanguage("Common","kStaffs")
	'	If strClassID = "0" Then Exit Sub - DO NOT EXIT HERE!!!
	Else
		If HasUserRole(rlParent) Then
			Set objClassesRs = objNSNET.GetClassListForYearParentStudents(strCurrYearID, strUserID)

			If objClassesRs.EOF Then
				bStudentNotInClass = True
				strStudentNotInClass = obLanguage("Calendar","kParentStudentNotIn") & obLanguage("SchoolSettings","kClasses",strFunctionalityType) & "."
			End If
		Else ' Student
			Set objClassesRs = objNSNET.GetClassListForYearStudent(strCurrYearID, strUserID, False)

			If objClassesRs.EOF Then
				bStudentNotInClass = True
				strStudentNotInClass = obLanguage("Filter","kStudentNotInClass",strFunctionalityType)
			End If
		End If

		If Not objClassesRs.EOF Then
			ReDim arrClasses(objClassesRs.RecordCount - 1)
			i = 0

			While Not objClassesRs.EOF
				arrClasses(i) = CLng(objClassesRs("CLASSID"))
				objClassesRs.MoveNext
				i = i + 1
			WEnd
		End If

		objClassesRs.Close
		Set objClassesRs = Nothing
		strPageName_MonthView = "MonthViewS.asp" ' differ for Staff and Student/Parent
		strStaffs = obLanguage("Common","kTeachers",strFunctionalityType)
	End If

	If bStudentNotInClass Then Exit Sub

	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	Call InitMonths(dtYearStart, dtYearEnd)

	nBirthRoles = 0
	If Not IsDull(Request("From_MonthBirth")) Then
		nBirthRole_Staff = GetSafeLng(Request("BIRTH_STAFF"), 0)
		nBirthRole_Student = GetSafeLng(Request("BIRTH_STUDENT"), 0)
		nBirthRole_Parent = GetSafeLng(Request("BIRTH_PARENT"), 0)
	Else
		nBirthRoles = GetSafeLng(obTokenMgr.GetData( strToken, stBirthRoles), 0)
		If nBirthRoles = 0 Then
			nBirthRole_Staff = kBirthRole_Staff
			nBirthRole_Student = kBirthRole_Student
			nBirthRole_Parent = kBirthRole_Parent
		Else
			nBirthRole_Staff = nBirthRoles And kBirthRole_Staff
			nBirthRole_Student = nBirthRoles And kBirthRole_Student
			nBirthRole_Parent = nBirthRoles And kBirthRole_Parent
		End If
	End If

	If nBirthRoles = 0 Then
		nBirthRoles = nBirthRole_Staff Or nBirthRole_Student Or nBirthRole_Parent
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCalendarMonthViewType, "/asp/Calendar/MonthBirth.asp")

	If bStudentNotInClass Then Exit Sub
	If bIsStaff Then
		WriteClass
		WriteClass_IUP_Format
	End If

	WriteMonth

	Call obTokenMgr.SetData(strToken, stBackPage, "")
	Call obTokenMgr.SetData(strToken, stBirthRoles, nBirthRoles)
	If Not bNoBirthdays Then
		Call obTokenMgr.SetData(strToken, stMonthBirthdays, arrMonthBirth)
		Call obTokenMgr.SetData(strToken, stIsStaff, bIsStaff)
	End If
End Sub

Sub Main()
	If bStudentNotInClass Then bNoBirthdays = True : Exit Sub

	If bIsStaff Then
		If nBirthRole_Staff = 0 And strClassID = "0" Then
			' продолжать при strClassID = "0" имеет смысл, только если nBirthRole_Staff <> 0; иначе очевидно, что искать нечего!
			bNoBirthdays = True
			Exit Sub
		End If
		Set rsMonthBirth = objNSNET.GetMonthBirthForStaff(strCurrYearID, lngCurrMonth, strClassID, strTeacherID, _
				nBirthRole_Staff <> 0, nBirthRole_Student <> 0, nBirthRole_Parent <> 0, bAll)
	Else
		Set rsMonthBirth = objNSNET.GetMonthBirthForStudentOrParent(lngCurrMonth, arrClasses, _
				nBirthRole_Staff <> 0, nBirthRole_Student <> 0, nBirthRole_Parent <> 0)
	End If

	If rsMonthBirth.EOF Then
		bNoBirthdays = True
	Else
		bNoBirthdays = False
		arrMonthBirth = rsMonthBirth.GetRows(,,Array("CLASSNAME", "ROLEID", "BIRTHDATE", "USERNAME"))
	End If
End Sub


Sub onHead()
	Call scriptMonth("View", "MonthBirth.asp")%>

	<SCRIPT>
		function changeView() {
			var form = document.forms['View'];
			var val = getListValue(form.ViewType);
			if(val == "0")
				DoSubmit(form, "<%=strPageName_MonthView%>");
		}

		function canSubmit() {
			var form = document.forms['View'];

			if(!form.elements["BIRTH_STAFF"].checked && !form.elements["BIRTH_STUDENT"].checked && !form.elements["BIRTH_PARENT"].checked) {
				alert(language.Generic.Calendar.kErrorRoleCannotBeEmpty);

				form.reset();
				form.elements["BIRTH_STAFF"].checked = false;
				form.elements["BIRTH_STUDENT"].checked = false;
				form.elements["BIRTH_PARENT"].checked = false;
				form.elements["BIRTH_STAFF"].focus();

				return false;
			}

			form.action = 'MonthBirth.asp';

			return true;
		}

		function setNewFilter() {
			ok('View', '');
		}
	</SCRIPT><%

	shortReportName = GetShortReportName()
	printPostFix = "Print"
	DrawCommonScripts
End Sub

Sub DrawFilters(strForm)
	Call DrawSimpleFilterRow(obLanguage("Common","kView"), "ViewType", Array(0, obLanguage("Calendar","kEvents"), 1, obLanguage("Calendar","kTitleMonthBirth")), 1, False, "changeView()")
		
	If bIsStaff Then
		Call DrawYearClasses(strForm, True, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)))
	ElseIf bStudentNotInClass Then
		Call DrawInfo(obLanguage("Filter","kStudentNotInClass",strFunctionalityType), False)
		bExit = True

		Exit Sub
	End If

	Call DrawMonths(strForm)

	OpenFormGroup obLanguage("Common", "kRoles")%>
		<div class="checkbox">
			<label>
				<input TYPE="checkbox" NAME="BIRTH_STAFF" VALUE="<%=kBirthRole_Staff%>" <%If nBirthRole_Staff <> 0 Then%> CHECKED<%End If%>><%=strStaffs%>
			</label>
		</div>
		<div class="checkbox">
			<label>
				<input TYPE="checkbox" NAME="BIRTH_STUDENT" VALUE="<%=kBirthRole_Student%>" <%If nBirthRole_Student <> 0 Then%> CHECKED<%End If%>><%=obLanguage("Common","kStudents", strFunctionalityType)%>
			</label>
		</div>
		<div class="checkbox">
			<label>
				<input TYPE="checkbox" NAME="BIRTH_PARENT" VALUE="<%=kBirthRole_Parent%>" <%If nBirthRole_Parent <> 0 Then%> CHECKED<%End If%>><%=obLanguage("Common","kParents")%>
			</label>
		</div><%
	CloseFormGroup
End Sub

Sub DrawLinkButtons
	If Not bNoBirthdays Then Call DrawPrintButtons()
End Sub

Sub DrawButtons()
	ButtonApply "setNewFilter()", obLanguage("FilterUsers","kApplyFilter")
End Sub

Sub onDrawPage()
	Dim lngNumOfDays, dtLastDayOfMonth, dtFirstDayOfMonth, lngStartDay, lngEndDay
	Dim lngCur, lngDayOfWeek
	Dim strBackColor%>

	<form name="View" ACTION="MonthBirth.asp" METHOD="POST">
		<%=WriteObligatoryTags()%>

		<input TYPE="hidden" NAME="From_MonthBirth" VALUE="1"><%
		Call DrawButtonsFilters(True, "View")%>
	</form><%
	If bStudentNotInClass And bExit Then Exit Sub

	If bNoBirthdays Then%>
		<div class="row">
			<div class="col-md-6"><%
				Call DrawInfo(obLanguage("Calendar","kNoBirthdays"), False)%>
			</div>
		</div><%
	Else%>
		<div class="row">
			<div class="col-md-8"><%
				Call DrawMonthBirth()%>
			</div>
		</div><%
	End If
End Sub%>
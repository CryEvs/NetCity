<!-- #INCLUDE FILE=../../header1.asp -->
<!-- #INCLUDE FILE   ="Year_inc.asp" -->
<!-- #INCLUDE FILE=../../scripts/dateInput.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim dtYearStart, dtYearEnd
Dim nWeekEndSet
Dim strErrDocID

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbYear
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolCalendar","kTitleEditYear")
End Function

Sub ReadState()
	strErrDocID = GetSafeID(Request("ErrDocID"), "0")
End Sub

Sub Main()
	Dim objRs
	If Not HasUserRight(arCreateCloseEditYear) Then GenerateError obLanguage("Common","kErrPageAccess")

	Set objRs = objNSNET.GetYearInfo(strCurrYearID)
	strSchoolYearName = objRs("SCHOOLYEARNAME")
	dtYearStart = objRs("STARTDATE")
	dtYearEnd = objRs("ENDDATE")
	nWeekEndSet = CLng(objRs("WEEKENDSET"))

	nFirstDOW = GetFirstDayOfWeek()
End Sub

Function onLoad()
	Dim objDocInfo, dtDocDate, strDocNumber
	Dim strErr
	onLoad = ""
	If strErrDocID <> "0" Then
		Set objDocInfo = objNSNET.GetMoveDocInfo(strErrDocID)
		strErr = obLanguage("SetupSchoolCalendar","kErrMsgMoveDocDate1") & "\n" & obLanguage("SetupSchoolCalendar","kErrMsgMoveDocDate2")
		If Not objDocInfo.EOF Then
			dtDocDate = GetSafeDate(objDocInfo("DOCDATE"), Null)
			strDocNumber = GetSafeStr(objDocInfo("DOCNUMBER"), 20, Null)
			strErr = strErr & ":\n\'" & strDocNumber & "\', " & Date2Str(dtDocDate)
		End If
		onLoad = "JavaScript:WasSaved('" & strErr & "');"
	End If
End Function

Sub onHead
%>
<SCRIPT><!--
function Back() {
	goBack( document.eYear, "/angular/school/calendar/years/" );
}

function canSubmit() {
	var defArgs = new Array();
	var form=document.eYear;
	el = form.elements.WeekEndDays;
	var chkdCnt = 0;
	if (el) {
		if (el.length) {
			for (var i=0;i<el.length;i++)
				if (el[i].checked)
					chkdCnt++;
		}
		else
			alert(language.Generic.Common.kUnexpErr);
		if (!( (chkdCnt>0) && (chkdCnt<3) ))
			defArgs.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kNonStandartHolidays + "\n" + language.Generic.Common.kContinue));
	}
	return extDeferred.when(defArgs);
}

//-->
</SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonSave "ok_check_db('eYear', '')", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()%>
	<form name="eYear" method="post" action="/asp/SetupSchool/Calendar/ChangeYear.asp" class="form-horizontal from-edit">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonPanel()
		SetFiltersWidth "", "col-md-2", "col-md-4"
		Call DrawReadonlyRow( obLanguage("Common","kSchoolYearName"), strSchoolYearName )
		Call DrawCommonYearInfo()%>
	</form><%
End Sub
%>

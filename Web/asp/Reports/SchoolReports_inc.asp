<!-- #INCLUDE FILE="Reports_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterYears.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim bAll

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miReports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbReports
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsViewForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
End Sub

Sub specialWrite()
End Sub

Sub ReadState()
	
	Call Init()
	
	strReportName = CStr(GetSafe("RPNAME", Null))
	'strThemeID = CStr(GetSafe("ThmID", Null))
	strReportID = CStr(GetSafe("RPTID", Null))
	blnMailConfirm = (GetSafeLng(obTokenMgr.GetData(strToken, stMailHasBeenSent), 0) = 1)
	
	bShowFavoriteReport = Not (HasUserRole(rlStudent) or HasUserRole(rlParent))
	If bShowFavoriteReport Then
		bFavoriteReport = IsFavoriteReport()
	End If

	specialRead
End Sub

Sub specialRead()
End Sub

Sub Init()
	bIsHeavyReport = false
	bIsCheckDates = false

	bNoCorrectScale = False
	bDrawButtonGenerate = True
	bHasGraph = False
	bDrawReportButtonPanel = True
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stMailHasBeenSent, null)
	specialWrite
End Sub

Sub specialWrite()
End Sub

Function GetbNoCorrectScale()
	GetbNoCorrectScale = CBool(CLng(obTokenMgr.GetData(strToken, stMaxMark)) <> 5)
End Function

Sub onHead( )%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/js/filters.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/pages/js/reports.min.js")%>" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/report.min.css")%>"/>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/print-tables.min.css")%>"/>

	<%If bHasGraph Then%>
	<script src="/vendor/components/chart.js/dist/chart.min.js" type="text/javascript"></script>
	<%End If %>

	<script>
		$(document).ready(function() {
			report.setOptions({title: "<%=GetReportName()%>", isHeavyReport: <%=Bool2Js(bIsHeavyReport)%>});
			$(document).on("click", ".generate-report-button", function() { report.generate(); });
			report.addPreAction(function() {
				if(!window.fp) {
					return true;
				}

				return fp.validate(); 
			});
		});

		function Back() {
			DoSubmit(document.forms.Reports, '/angular/school/reports/');
		};

		// переопределяется, чтобы в отчетах при изменении фильтров не выводилось сообщение об изменениях при переходе на другой экран
		function dataChanged() {
			dataWereChanged = false;
		};
	</script><%

	specialHead
	
	If bNoCorrectScale Or bIsCheckDates Then %>
		<script>
			$(document).ready(function() {
				<%If bIsCheckDates Then %>
					report.addPreAction(checkDates)
				<%End If %>

				<%If bNoCorrectScale Then %>
					report.setOptions({noCorrectScale: true});
				<%End If %>
			});
		</script><%
	End If
End Sub

Function OnLoad()
	If blnMailConfirm Then OnLoad = "ShowMailConfirm()"
End Function

Sub DrawViewType()
	Dim nHidePrevPeriod, nOrLessViewType, nViewType, i

	nHidePrevPeriod = GetSafeLng(Request("HidePrevPeriod"), GetSafeLng(obTokenMgr.GetData(strToken, "HidePrevPeriod"), 0))
	Call obTokenMgr.SetData(strToken, "HidePrevPeriod", nHidePrevPeriod)
	nViewType = GetSafeLng(Request("ViewType"), GetSafeLng(obTokenMgr.GetData(strToken, "ViewType"), 0))
	Call obTokenMgr.SetData(strToken, "ViewType", nViewType)
	nOrLessViewType = GetSafeLng(Request("OrLessViewType"), GetSafeLng(obTokenMgr.GetData(strToken, "OrLessViewType"), 0))
	Call obTokenMgr.SetData(strToken, "OrLessViewType", nOrLessViewType)

	If strTermID <> kReportYearTermType And strTermID <> kReportTotalTermType Then
		Call DrawSimpleFilterRow(obLanguage("Reports", "kPreviousPeriod"), "HidePrevPeriod", Array(0, obLanguage("Reports", "kShow"), 1, obLanguage("Reports", "kHide")), nHidePrevPeriod, False, ";")
	End If
	Call DrawSimpleFilterRow(obLanguage("Curriculum", "kViewReport"), "ViewType", Array(0, obLanguage("Reports", "kCommonType"), 1, obLanguage("Reports", "kExtended")), nViewType, False, "$('#OrLess').toggleClass('hidden');")
	%><div id="OrLess" <%=IIF(nViewType = 0, "class=""hidden""", "") %>><%
		Call DrawSimpleFilterRow(IIF(InStr(strScriptName, "PreClassCh"), obLanguage("Reports","OrLess"),obLanguage("Reports","kWithoutMark")), "OrLessViewType", Array(0, obLanguage("Reports", "kExtendedView"), 1, obLanguage("Reports", "kFoldedView")), nViewType, False, ";")
	%></div><%
	
End Sub

Sub DrawStudentsList()
	Dim id, strSIDArray, strStudentFullName
	If HasUserRole(rlStudent) Then
		strSIDArray = "|" & strUserID & "|"
		Call DrawStudentButtonsScript( strUserID, objNSNET.GetUserNickName(strUserID) )
	ElseIf bIsStaff Then
		Call DrawSelectInfoRow(obLanguage("Common","kStudent",strFunctionalityType), Empty, "SID", rsStudents, "STUDENTID", "NICKNAME", Null, ";")
		strSIDArray = "|"
		While Not rsStudents.EOF
			id = rsStudents("STUDENTID")
			strSIDArray = strSIDArray & id & "|"
			rsStudents.MoveNext
		Wend
	Else
		strSIDArray = "|" & strStudentID & "|"
		'Call DrawStudentButtonsScript( strStudentID, objNSNET.GetUserNickName(strStudentID) )
	End If
			
	Call obTokenMgr.SetData(strToken, stAvailableSID, strSIDArray)
End Sub

Sub DrawStudentButtonsScript( stud_ID, studName)
			
	If Not IsEmpty(rsStudents) Then
		Call DrawFilterRow("", obLanguage("Common","kStudent",strFunctionalityType), "SID", rsStudents, "STUDENTID", "NICKNAME", stud_ID, False)
	Else
		OpenFormGroup obLanguage("Common","kStudent",strFunctionalityType)
		%>
			<input type="text" class="form-control" value="<%=studName %>" disabled="">
			<input type="hidden" name="SID" value="<%=stud_ID %>">
		<%
		CloseFormGroup
	End If
End Sub

' как в Отчёте "Форма № 3"
Sub InitMoveDateRange_Form3(byref dtStartDate, byref dtEndDate, bChangeStartDate)
	Dim dtConstMinDate
	Call objNSNET.GetMovingReportDateLimits(strCurrYearID, dtStartDate, dtEndDate)
	dtStartDate = DateSerial(Year(dtStartDate),6,1)
	If bChangeStartDate Then
		dtConstMinDate = DateSerial(Year(dtStartDate), kFutureYearEnrollDocDate_Month, kFutureYearEnrollDocDate_Day)
		dtStartDate = GetMinFromDates(dtStartDate, dtConstMinDate)
	End If
End Sub
%>

<!-- #INCLUDE FILE="ReportConstructor_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/filtersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim bDrawObjects
Dim bDrawFilters
Dim kSaveScriptName

Function GetWizardStep()
	GetWizardStep = CLng(Left(Right(strScriptName,5),1))
End Function

Sub onHeadSpecialAdd()
End Sub

Function hasPageQHelp()
	hasPageQHelp = True
End Function

Sub ReadStepState()
	Dim nWizardStep
	nWizardStep = GetWizardStep()
	strTitleWizard = obLanguage("Constructor","kTitleWizard_" & nWizardStep)
	strTitleWizardStep = obLanguage("Constructor","kTitleStepWizard_" & nWizardStep)
	kSaveScriptName = "SaveWizardStep" & nWizardStep & "Info.asp"
End Sub

Sub ReadState()
	strReportID = GetSafeReportID( GetSafeID( obTokenMgr.GetData(strToken, stReportID), Null ) )
	strQueryID = GetSafeID( obTokenMgr.GetData(strToken, stQueryID), Null )

	Call ReadStepState()
	Call onSpecialReadState()
End Sub

Sub onSpecialReadState()
End Sub

Sub onHead()
	%><script><!--

	function onStepTo ( nStep ) {
		document.forms['<%=kFormName%>'].elements['STEPDIR'].value = nStep;
		ok_check_db('<%=kFormName%>','<%=kSaveScriptName%>');
	}

	function Back() {
		goBack(document.forms['<%=kFormName%>'], 'ReportConstructor.asp');
	}

	//--></script>

	<link rel="stylesheet" type="text/css" href="/static/dist/pages/reportdesigner/css/report-designer.min.css">
<%

	Call onHeadSpecial()
End Sub

Function IsShowReportInfo()
	IsShowReportInfo = True
End Function

Function GetAvailableReportInfo
	If nStatus <= 3 Then
		GetAvailableReportInfo = nStatus
	ElseIf CheckQueryFields ( strQueryId ) Then
		GetAvailableReportInfo = 9
	Else
		GetAvailableReportInfo = 5
	End If
End Function

Sub DrawNavigationButons
	Button "onStepTo(" & kBackScript & ")", obLanguage("SetupSchoolCalendar","kPrev"), obLanguage("SetupSchoolCalendar","kPrev"), "glyphicon glyphicon-circle-arrow-left"
	Button "onStepTo(" & kBackScript + 2 & ")", obLanguage("SetupSchoolCalendar","kNext"), obLanguage("SetupSchoolCalendar","kNext"), "glyphicon glyphicon-circle-arrow-right"
End Sub

Sub DrawPositioningButtons()
	Call ImageButton("BtnPressed('" & kDirectionEUp & "')", obLanguage("Constructor","kBtnEndUp"), "glyphicon glyphicon-circle-arrow-up")
	Call ImageButton("BtnPressed('" & kDirectionUp & "')", obLanguage("Constructor","kBtnUp"), "glyphicon glyphicon-arrow-up")
	Call ImageButton("BtnPressed('" & kDirectionDn & "')", obLanguage("Constructor","kBtnDown"), "glyphicon glyphicon-arrow-down")
	Call ImageButton("BtnPressed('" & kDirectionEDn & "')", obLanguage("Constructor","kBtnEndDown"), "glyphicon glyphicon-circle-arrow-down")
End Sub

Sub DrawPositioningButtons2()
	Call ImageButton("BtnEndPressed(1)", obLanguage("Constructor","kBtnEndUp"), "glyphicon glyphicon-circle-arrow-up")
	Call ImageButton("BtnUpPressed()", obLanguage("Constructor","kBtnUp"), "glyphicon glyphicon-arrow-up")
	Call ImageButton("BtnDownPressed()", obLanguage("Constructor","kBtnDown"), "glyphicon glyphicon-arrow-down")
	Call ImageButton("BtnEndPressed(-1)", obLanguage("Constructor","kBtnEndDown"), "glyphicon glyphicon-circle-arrow-down")
End Sub

Sub onDrawPage()
	Dim nWizardStep
	nWizardStep = GetWizardStep()

	%>
	<div class="row">
		<%If IsShowReportInfo() Then%>
		<div class="col-md-3 col-lg-2">
			<%Call ShowReportInfo( GetAvailableReportInfo() )%>
		</div>
		<%End If%>
		<div class="col-md-9 col-lg-10">
			<form name="<%=kFormName%>" class="form-horizontal" action="<%=kSaveScriptName%>" method="post" target="_parent" onsubmit="return false;">
				<%
					Call DrawButtonsFiltersEx(True, bDrawFilters, kFormName)
					Call onDrawStepContent()
					
					rw WriteObligatoryTags()
					rw WriteHiddenTags(Array("STEPNO", nWizardStep, "STEPDIR", nWizardStep + 1, "act", ""))
					Call WriteHiddenParams()
				%>
			</form>
		</div>
	</div>
	<%
End Sub

Sub WriteHiddenParams
End Sub

Sub onDrawStepContent()
End Sub

Sub DrawButtons()
End Sub

Sub DrawFilters(strForm)
End Sub

Sub DrawObjects(strForm)
End Sub%>
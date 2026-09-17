<!-- #INCLUDE Virtual="/asp/headersimple.asp" -->

<% ' © 2007-2018 IRTech. All rights reserved.

Dim strPrev, strNext, nMaster
Dim arrDisplaySteps, arrStepsLinks
Dim kContentCols

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRole(rlAdmin)
	strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
	readonly = False
End Function

Function GetTitle()
	GetTitle = NETSCHOOL_PRODUCT_NAME & " - " & obLanguage("Wizard","kWizard")
End Function

Function isDrawHeader()
	isDrawHeader = True
End Function

Function GetWizardTitle()
	GetWizardTitle = ""
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Wizard", "kWizard") &" -> " & GreenText( obLanguage("Wizard","kStrStep") & GetDisplayStepNumber(kStep) & ". " & GetWizardTitle())
End Function

Sub onHeadSpecial()
End Sub

Sub InitStep()
	Dim objRS

	nMaster = objNSNET.InitWizardStep(strSchoolID, kStep)
	If nMaster = 0 Then GenerateError obLanguage("Wizard","kErrMaster")
	If( nMaster >= kWizardSteps ) Then nMaster = kWizardSteps-1
	Call InitDisplaySteps()
End Sub

Sub InitDisplaySteps()
	Dim i

	If strFunctionalityType = kFuncType_Add Then
		arrDisplaySteps = Array(0, 1, 2, 3, 0, 4, 5, 0, 0, 0, 6, 0)
	ElseIf strFunctionalityType = kFuncType_PreSchool Then
		arrDisplaySteps = Array(0, 1, 2, 3, 4, 5, 6, 0, 0, 7, 8, 0)
	ElseIf strFunctionalityType = kFuncType_Orphanage Then
		arrDisplaySteps = Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0)
	Else
		arrDisplaySteps = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0)
	End If
	arrStepsLinks = Array("", "CreateNewYear", "StaffW", "Subjects", "Profiles", "Limits", "Plan", "TermTypes", "Terms", "ClassesW", "Finish")
	strNext = "" : strPrev = ""
	For i = kStep+1 To Ubound(arrDisplaySteps)
		If arrDisplaySteps(i) > 0 Then strNext =  arrStepsLinks(i)&".asp": Exit For
	Next
	For i = kStep-1 To 1 Step -1
		If arrDisplaySteps(i) > 0 Then strPrev =  arrStepsLinks(i)&".asp": Exit For
	Next
End Sub

Sub onHead()%>
	<script><!--
		isHaveToLogout=true;
		bNewWindow=true;

		function Logout() {
			if( bNewWindow ) document.MainForm.target ="_blank";
			DoSubmit( document.MainForm, "/asp/logout.asp");
		}

		<%If IsArray(arrStepsLinks) Then%>
			var kSaveOrResetData = "<%=obLanguage("Wizard","kSaveOrResetData")%>";

			function NextStep() {
				checkForChanges().then(function() {
					DoSubmit( document.MainForm, '<%=strNext%>' );
				});
			}

			function PrevStep() {
				checkForChanges().then(function() {
					DoSubmit( document.MainForm, '<%=strPrev%>' );
				});
			}

			function goStep( i ) {
				var aLink;
				var arrStepsLinks = <%=comHelper.JsonHelper.SerializeObject(arrStepsLinks) %>;

				aLink = arrStepsLinks[i]
				checkForChanges().then(function() {
					DoSubmit( document.MainForm, aLink + '.asp' );
				});
			}
		<%End If%>
	//-->
	</script>
	<%Call onSpecialHead()
End Sub

Sub onSpecialHead()
End Sub

Sub DrawSpecialButtons
End Sub

Sub DrawButtonNext()
	rw "<button title=""" & obLanguage("SetupSchoolCalendar","kNextStep") & """ type=""button"" class=""btn btn-default"" onclick=""NextStep();return false;"">" & obLanguage("SetupSchoolCalendar","kNext") & "&nbsp;<span class=""glyphicon glyphicon-circle-arrow-right""></span></button>"
End Sub

Sub DrawMasterButtons()
	OpenBtnGroup
		Call Button("bNewWindow=false; Logout()", obLanguage("Common","kExit"), obLanguage("Common","kExit"), "glyphicon glyphicon-off")
		If strSchoolYearID <> 0 Then
			If Not IsDull(strPrev) Then Call Button("PrevStep()", obLanguage("SetupSchoolCalendar","kPrev"), obLanguage("SetupSchoolCalendar","kPrevStep"), "glyphicon glyphicon-circle-arrow-left")
			If Not IsDull(strNext) Then DrawButtonNext
		End If
	CloseBtnGroup
End Sub

Sub DrawLinkButtons()
	DrawSpecialButtons
End Sub

Sub DrawMasterMenu( nAvailSteps )
	Dim i, arrSteps

	arrSteps = Array("", obLanguage("Wizard","kCreatingYear"), obLanguage("Common","kStaffs"), obLanguage("Common","kSubjects"), obLanguage("MenuFolders","kFNProfiles",strFunctionalityType), obLanguage("MenuFolders","kFNCurriculumLimits"), obLanguage("SetupSchoolCalendar","kWizardTitlePlan"), obLanguage("Wizard","kTTypes"), obLanguage("Wizard","kTLimits"), obLanguage("MenuFolders","kFNClasses",strFunctionalityType), obLanguage("SetupSchoolCalendar","kWizardTitleFinish"), "")%>
	<table class="table table-bordered table-condensed">
		<tr>
			<td style="font-family: arial narrow; font-size:10pt"><%
				For i = 1 To kStep-1
					If IsStepEnabled(i) Then
						rw GetDisplayStepNumber(i) &"."&ShowAnchor( "goStep("&i&")", obLanguage("Common","kChoose"), arrSteps(i), "" ) &"&nbsp;&nbsp;&nbsp; "
					End If
				Next
				rw GetDisplayStepNumber(kStep) &".<b class=""smalltext"">"&arrSteps(kStep) &"</b>&nbsp;&nbsp;&nbsp; "
				For i = kStep+1 To nMaster
					If IsStepEnabled(i) Then
						rw GetDisplayStepNumber(i) &"."&ShowAnchor( "goStep("&i&")", obLanguage("Common","kChoose"), arrSteps(i), "" ) &"&nbsp;&nbsp;&nbsp; "
					End If
				Next
				For i = nMaster+1 To Ubound(arrSteps)
					If IsStepEnabled(i) Then
						rw GetDisplayStepNumber(i) &"."&arrSteps(i) &"&nbsp;&nbsp;&nbsp; "
					End If
				Next%>
			</td>
		</tr>
	</table><%
End Sub

Function GetDisplayStepNumber(nStep)
	Dim nDisplayStepNum

	If IsArray(arrDisplaySteps) Then nDisplayStepNum = arrDisplaySteps(nStep) Else nDisplayStepNum = nStep
	GetDisplayStepNumber = nDisplayStepNum
End Function

Function IsStepEnabled(nStep)
	Dim bEnabled

	bEnabled = True
	If IsArray(arrDisplaySteps) Then bEnabled = arrDisplaySteps(nStep) <> 0
	IsStepEnabled = bEnabled
End Function

Function IsDrawMasterMenu()
	IsDrawMasterMenu = Not IsDull(strNext) Or Not IsDull(strPrev)
End Function

Sub onDrawPageWrap()
	If IsDrawMasterMenu() Then
		Call DrawMasterMenu(0)%>
		<div class="row">
			<div class="col-md-4 col-lg-3"><%Call DrawMasterButtons%></div>
			<div class="col-md-8 col-lg-9"><%Call DrawSubMasterMenuBlock%></div>
		</div><%
	End If
	OnDrawPage
End Sub
Sub DrawSubMasterMenuBlock()
End Sub
%>

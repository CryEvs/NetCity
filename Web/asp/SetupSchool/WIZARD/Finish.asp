<!-- #INCLUDE File="master_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 10
Dim bFinished

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kWizardTitleFinish")
End Function

Function onLoad()
	Dim strError

	strError = obTokenMgr.GetData( strToken, stWasSaved)
	If Not IsDull( strError ) Then
		If Not bFinished And (strError = obLanguage("Common","kPasswordIsSaved")) Then strError = obLanguage("Wizard","kToDoFinish")
		onLoad = "JavaScript:WasSaved('" & strError & "');"
		Call obTokenMgr.SetData( strToken, stWasSaved, null )
	End If
End Function

Function CanBack()
	CanBack = False
End Function

Sub ReadState()
	Dim rsUser

	Set rsUser = objNSNET.GetUserInfo(strUserID)
	bFinished = rsUser("PASSWORD") <> "21232f297a57a5a743894a0e4a801fc3"
End Sub

Sub Main
	InitStep
	If bFinished Then
		If strFunctionalityType <> kFuncType_Orphanage Then
			Call objNSNET.GenerateYearCuriculum(strCurrYearId)
		End If
		strPrev = ""
	End If
End Sub

Sub DrawButtons
	If bFinished Then
		Call Button("bNewWindow=false; Logout()", obLanguage("Common","kExit"), obLanguage("Common","kExit"), "glyphicon glyphicon-off")
		Exit Sub
	End If
End Sub

Sub DrawSpecialButtons()
	If bFinished Then
		If strFunctionalityType = kFuncType_Orphanage Then
			Call objNSNET.ClearSchoolWizard(strSchoolID)
		Else
			Call objNSNET.SetWizardStep(strSchoolID, kWizardSteps)
		End If
		Exit Sub
	End If
	rw ShowButton("password1", "setpasswordl", "changePasswordCtrl.changePassword()", obLanguage("Common","kChangePassword"), obLanguage("Common","kChangePassword"))
End Sub

Sub onSpecialHead()%>
	<script src="<%=GetVersionedResLink("/static/dist/pages/users/js/changePassword.js")%>" type="text/javascript"></script>

	<script><!--
		var changePasswordCtrl = new changePasswordCtrl({userEditHimself: true, minPasswordLength: <%=obContext.ServerSettings.SecuritySettings.MinPasswordLength%>, userId: <%=strUserID%>, customSuccess: function() { alert(language.Generic.Common.kPasswordIsSaved).then(function() { postTo('/asp/SetupSchool/WIZARD/Finish.asp'); })}});
	//--></script><%
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="POST" action="Tips.asp">
		<%=WriteObligatoryTags()%><%

		DrawButtonPanel
		DrawWarningEx IIf(bFinished, obLanguage("Wizard","kFinished"), obLanguage("Wizard","kToDoFinish")), False%>
	</form><%
End Sub%>
<!-- #INCLUDE FILE=../../header1.asp -->
<!-- #INCLUDE FILE="../../scripts/filterYears.asp" -->
<!-- #INCLUDE FILE="SchoolInfo_inc.asp" -->
<% ' © 2007-2013 IRTech. All rights reserved.
Const kFormPageNum = -1

Dim objSchoolInfo
Dim arrstrRevisionPath
Dim bYearClosed
Dim dctFormsRevisonPaths

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditSchoolInfo) or HasUserRight(arProfileViewSchoolInfo)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SchoolInfo","kStatForms" )
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementSchoolInfo
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSchoolInfo
 End Function

Function AdditionArchCondition()
	AdditionArchCondition = True
End Function

Function ConnectionSwitchIsNeeded( bIsYearArchived )
	ConnectionSwitchIsNeeded = False
End Function

Sub ReadState()
	Call InitYears()
	readonly = readonly Or bIsEMForSchool or Not HasUserRight(arProfileEditSchoolInfo)
	bYearClosed = CBool( objNSNET.IsYearClosed(strCurrYearID ) = -1 )
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stBackPage, Request.ServerVariables("SCRIPT_NAME").Item)
	Call obTokenMgr.SetData(strToken,stCurrYear, strCurrYearID)
End Sub

Sub Main()
	Call InitSchoolFormComponent()
	Call InitStateFormsInfo()
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	Set dctFormsRevisonPaths = objSchoolFormComponent.GetStatFormsPathsByYear(strCurrYearID)
End Sub

Function onLoad()
	Dim blnWasSaved
	blnWasSaved = GetSafeStr( Request("SV"), 1, "N" ) = "Y"
	If blnWasSaved OR Not IsEmpty(Request("Save")) Then onLoad = "JavaScript:WasSaved('" & obLanguage("Common","kSchoolInfoWasSaved",strFunctionalityType) & "');"
End Function

Sub onHead()
%>
<!-- #INCLUDE FILE="SchoolInfo_js_inc.asp" -->

<script><!--
function backToList() {
	goBack(document.forms[0], '/asp/SetupSchool/SchoolForms/SchoolInfo.asp');
}
function openForm(strFormNumber, strCurrYear) {
	DoSubmit(document.forms.SchoolEdit, '/asp/SetupSchool/SchoolForms/' + strFormNumber + '/' + strCurrYear + '/Pages/Page1_' + strFormNumber + '.asp');
}

function openFormNew(strFormName, strRevPath) {
	DoSubmit(document.forms.SchoolEdit, '/asp/SetupSchool/SchoolForms/' + strFormName + '/' + strRevPath + '/Page1.asp');
}
function reopenForm(strFormName) {
	postTo('ReopenForm.asp', {FORMID : strFormName});
}

//--></script>

<%
End Sub

Sub DrawFilters( strForm )
	Call DrawYears( strForm )
End Sub

Sub DrawButtons()
	ButtonCancel "backToList()", obLanguage("Common","kCancel")
	%><br /><br /><%
	Select Case CLng(strFunctionalityType)
	Case kFuncType_Orphanage
		Call DrawFormButton(blnIsFormOD1Available, StatForm_Od1, "OD1", "kstrFormOD1Unavailable")
		DrawClosedHint blnIsFormOD1Closed, blnIsFormOD1Available, StatForm_Od1
	Case kFuncType_PreSchool
		Call DrawFormButton(blnIsForm85KAvailable, StatForm_K85, "85K", "kstrForm85KUnavailable")
		DrawClosedHint blnIsForm85KClosed, blnIsForm85KAvailable, StatForm_K85
	Case kFuncType_Common
		If objSchoolInfo("EOTYPEID") <> NetCity_Common_Enums_EoType_Evening Then
			Call DrawFormButton(blnIsOSHAvailable, StatForm_Osh1, "OSH1", "kstrOSHUnavailable")
			DrawClosedHint blnIsOSHClosed, blnIsOSHAvailable, StatForm_Osh1
		End If
		Call DrawFormButton(blnIsOSH2Available, StatForm_Osh2, "OSH2", "kstrOSH2Unavailable")
		DrawClosedHint blnIsOSH2Closed, blnIsOSH2Available, StatForm_Osh2
		Call DrawFormButton(blnIsOSH5Available, StatForm_Osh5, "OSH5", "kstrOSH5Unavailable")
		DrawClosedHint blnIsOSH5Closed, blnIsOSH5Available, StatForm_Osh5
		If objSchoolInfo("EOTYPEID") <> NetCity_Common_Enums_EoType_Evening Then
			Call DrawFormButton(blnIsOSH9Available, StatForm_Osh9, "OSH9", "kstrOSH9Unavailable")
			DrawClosedHint blnIsOSH9Closed, blnIsOSH9Available, StatForm_Osh9
			Call DrawFormButton(blnIsForm83RIKAvailable, StatForm_Rik83, "83RIK", "kstrForm83RIKUnavailable")
			DrawClosedHint blnIsForm83RIKClosed, blnIsForm83RIKAvailable, StatForm_Rik83
		End If

		Call DrawFormButton(blnIsFormOO1Available, StatForm_Oo1, "OO1", "kstrFormOO1Unavailable")
	Case Else
	End Select
End Sub

Sub DrawClosedHint( isFormClosed,  isFormAvailable, statForm)
	If Not isFormAvailable Then Exit Sub
	If Not( isFormClosed And isFormAvailable) Then Exit Sub
	
	rw obLanguage("SchoolInfo","kStatFormClosed" )
	If Not readonly  Then InlineButton "reopenForm('"&CStr(statForm)&"')", obLanguage("SchoolInfo","kStatFormReopen" ), "arrowreturnthick-1-w"
End Sub

Sub DrawFormButton(bAvailable, formId, strFormId, strFormUnavailable )
	Dim strRevisionPath, hint
	rw "<hr>"
	If bAvailable Then
		strRevisionPath = dctFormsRevisonPaths(formId)
		hint = obLanguage("SchoolInfo","kForm" & strFormId)
		Call InlineButton("openFormNew('" & strFormId & "', " & strRevisionPath & ")", hint, "")
	Else
		rw obLanguage("SchoolInfo", strFormUnavailable )
	End If
	rw "<br>"
	rw  Replace("                                                                               ", " ", "&nbsp;")
	rw "<br>"
End Sub

Sub onDrawPage()%>
<table cellpadding="3">
	<form name="SchoolEdit" method="POST" action="" onsubmit="return canSubmit();">
	<%=WriteObligatoryTags()%>
	<%Call DrawButtonsFilters( True, "SchoolEdit" )%>
	</form>
</table>
<%
End Sub
%>

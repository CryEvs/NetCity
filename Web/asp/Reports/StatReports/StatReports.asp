<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolForms/SchoolInfo_inc.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim objSchoolInfo
Dim dctFormsRevisonPaths
Dim arrstrRevisionPath

Const kFormPageNum = -1

Function GetPageTitle()
	GetPageTitle = obLanguage("StatReports", "kStatReports")
End Function

Sub ReadState()
	Call InitYears()
	Call InitSchoolFormComponent()
	Call InitStateFormsInfo()
End Sub

Sub Main()
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	Set dctFormsRevisonPaths = objSchoolFormComponent.GetStatFormsPathsByYear(strCurrYearID)
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miReports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStatReports
 End Function

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
End Sub

Sub DrawFilters(strForm)
	Call DrawYears(strForm)
End Sub

Sub onDrawPage()%>
	<form name="StatReports" method="POST" onsubmit="return canSubmit();">
		<%=WriteObligatoryTags()%><%
		Call DrawButtonsFilters(False, "StatReports")
		Call DrawForms()
	%></form><%
End Sub

Sub onHead()%>
	<script><!--
		function openFormNew(strFormName, strRevPath) {
			checkForChanges().then(function(){

			var beginURL = '/asp/SetupSchool/SchoolForms/' + strFormName + '/' + strRevPath + '/Page1.asp';
			if (strFormName == "OSH1_MNS")
				beginURL = beginURL.replace(strFormName, 'OSH1') + '?MNS=1';

			DoSubmit(document.forms.StatReports, beginURL);
			});
		}

		function openFillStatIndicators() {
		    DoSubmit(document.forms.StatReports, '/angular/school/statreports/fill');
		}
	//--></script><%
End Sub

Sub DrawForms()
	OpenBtnGroup
	Select Case CLng(strFunctionalityType)
		Case kFuncType_Orphanage
			Call DrawFormButton(blnIsFormOD1Available, StatForm_OD1, "OD1", "kstrFormOD1Unavailable")
		Case kFuncType_PreSchool
			Call DrawFormButton(blnIsForm85KAvailable, StatForm_K85, "85K", "kstrForm85KUnavailable")
		Case kFuncType_Common
			If objSchoolInfo("EOTYPEID") <> NetCity_Common_Enums_EoType_Evening Then
				If bIsOSH5Relevance Then
					Call DrawFormButton(blnIsOSHAvailable, StatForm_Osh1, "OSH1", "kstrOSHUnavailable")
					Call DrawFormButtonForMNS(blnIsOSHAvailable, StatForm_Osh1, "OSH1_MNS", "kstrOSHMNSUnavailable", obContext.ServerSettings.SystemSettings.ShowMNSForms)
				End If
			End If

			If bIsOSH2Relevance Then Call DrawFormButton(blnIsOSH2Available, StatForm_Osh2, "OSH2", "kstrOSH2Unavailable")
			If bIsOSH5Relevance Then Call DrawFormButton(blnIsOSH5Available, StatForm_Osh5, "OSH5", "kstrOSH5Unavailable")

			If objSchoolInfo("EOTYPEID") <> NetCity_Common_Enums_EoType_Evening Then
				If bIsOSH9Relevance Then Call DrawFormButton(blnIsOSH9Available, StatForm_Osh9, "OSH9", "kstrOSH9Unavailable")
				If bIsRIK83Relevance Then Call DrawFormButton(blnIsForm83RIKAvailable, StatForm_Rik83, "83RIK", "kstrForm83RIKUnavailable")
			End If

			Call DrawFormButton(blnIsFormOO1Available, StatForm_Oo1, "OO1", "kstrFormOO1Unavailable")
			Call DrawFormButton(blnIsFormOO2Available, StatForm_Oo2, "OO2", "kstrFormOO2Unavailable")
		Case kFuncType_Add
			Call DrawFormButton(blnIsForm1DOAvailable, StatForm_Do1, "1DO", "kstrForm1DOUnavailable")
			Call DrawFormButton(blnIsForm1DOPAvailable, StatForm_Dop1, "1DOP", "kstrForm1DOPUnavailable")
		Case Else
			If objSchoolInfo("EOTYPEID") = NetCity_Common_Enums_EoType_SpecKor Or objSchoolInfo("EOTYPEID") = NetCity_Common_Enums_EoType_Kadet _
				Or objSchoolInfo("EOTYPEID") = NetCity_Common_Enums_EoType_Deviant Or objSchoolInfo("EOTYPEID") = NetCity_Common_Enums_EoType_PsyhPedMedHelp _
				Or objSchoolInfo("EOTYPEID") = NetCity_Common_Enums_EoType_San Then
				Call DrawFormButton(blnIsForm83RIKAvailable, StatForm_Rik83, "83RIK", "kstrForm83RIKUnavailable")
			End If
	End Select

	If obContext.ServerSettings.SystemSettings.ModuleStatReports And HasUserAnyRights(Array(arBrowseStatReports, arFillStatReports)) Then 
		Call SimpleButton("openFillStatIndicators()", obLanguage("StatReports", "kFillingStatIndicators"))
	End If
	CloseBtnGroup
End Sub

Sub DrawFormButton(bAvailable, formId, strFormId, strFormUnavailable)
	Dim strRevisionPath, strButtonName, hasFormRevisionYear

	hasFormRevisionYear = objSchoolFormComponent.HasFormRevisionYear(strCurrYearID, formId)
	strButtonName = obLanguage("SchoolInfo", "kForm" & strFormId)

	If bAvailable and hasFormRevisionYear Then
		strRevisionPath = dctFormsRevisonPaths(formId)
		Call InlineButton("openFormNew('" & strFormId & "', " & strRevisionPath & ")", strButtonName, "")
	Else
		Call DisabledButton("", strButtonName, obLanguage("SchoolInfo", strFormUnavailable ), "")
	End If
End Sub
		
Sub DrawFormButtonForMNS(bAvailable, formId, strFormId, strFormUnavailable, bMNSAvailable)
	If bMNSAvailable Then
		Call DrawFormButton(bAvailable, formId, strFormId, strFormUnavailable)
	End If
End Sub%>

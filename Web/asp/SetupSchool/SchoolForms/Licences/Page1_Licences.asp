<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kbtnCloseFormLicences = "Закрыть Лицензии,аккредитация"

Const kstrLicencesClose1 = "Вы не сможете больше вносить изменения в ""Лицензии,аккредитация"" за этот учебный год.\nВы желаете закрыть ""Лицензии,аккредитация"" для этого года и подготовить Форму для следующего учебного года ?\n"
Const kstrLicencesClose2 = "ВНИМАНИЕ! Последнее предупреждение!\n\nВы не сможете больше вносить изменения в ""Лицензии,аккредитация"" для этого учебного года, Вы сможете только просматривать или печатать её содержимое.\nВы действительно желаете закрыть Форму?"

Dim blnWasSaved

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditSchoolInfo) or HasUserRight(arProfileViewSchoolInfo)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SchoolInfo","kLicences")
End Function

Sub Main()
	blnWasSaved = GetSafeStr( Request("SV"), 1, "N" ) = "Y"
End Sub

Function onLoad()
	If blnWasSaved OR Not IsEmpty(Request("Save")) Then onLoad = "JavaScript:WasSaved('" & obLanguage("Common","kSchoolInfoWasSaved",strFunctionalityType) & "');"
End Function

Function AdditionArchCondition()
	AdditionArchCondition = True
End Function

Function ConnectionSwitchIsNeeded( bIsYearArchived )
	ConnectionSwitchIsNeeded = False
End Function

Sub ReadState()
	readonly = bIsEMForSchool or Not HasUserRight(arProfileEditSchoolInfo)
End Sub

Sub onHead()%>
	<style>
		.form-group input[type="text"] {
			width: 100%;
		}
	</style>

	<script src="<%=GetVersionedResLink("/js/printSchoolCard.js")%>" type="text/javascript"></script>
	<script type="text/javascript">
		function Back() {
			goBack(document.forms[0], '/asp/SetupSchool/SchoolForms/SchoolInfo.asp');
		}

		function OSHdataChanged(theObject, theType) {
			return true;
		}

		function Save() {
			jsSaveForm(document.SchoolEdit);
		}
	</script><%
End Sub%>

<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp --><%

Sub DrawLinkButtons
	Call DrawPrintButtons()
End Sub

Sub DrawButtons()
	If Not readonly Then
		ButtonSave "Save();", obLanguage("Common","kSave")
		ButtonReset "resetScreen('SchoolEdit')", obLanguage("Common","kReset")
	End If
End Sub

Function ButtonPrintHandler()
	ButtonPrintHandler = "schoolInfoPrint()"
End Function

Function ButtonExportHandler()
	ButtonExportHandler = "schoolInfoExport()"
End Function

Sub onDrawPage()%>
	<form name="SchoolEdit" method="POST" action="/asp/SetupSchool/SchoolForms/SchoolInfoSave.asp" class="form-horizontal form-xs" >
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ISLICENCE", "1")) %><%
		
		Call DrawButtonPanel()

		DrawPage()%> 
	</form><%
End Sub


Function ISelect(id, arrOpt, di)
	Dim strClass
	strClass = " class=""form-control"""
	ISelect = ISelectWithAuth(id, strClass, arrOpt, di)
End Function

Sub DrawPage()
	Call LoadShoolInfoEx( 0, kLicenceSchoolInfoPage, -1)
	Call SetFiltersWidth("", "col-md-4 col-xs-4 col-lg-4", "col-lg-5 col-md-6 col-xs-8")%>

	<div class="card_educational_institutions print-block">
		<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/Licences/SchoolInfo1b_inc.asp -->
	</div><%
End Sub%>
<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateinput.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->

<% ' © 2007-2016 IRTech. All rights reserved.

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditSchoolInfo) or HasUserRight(arProfileViewSchoolInfo)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SchoolInfo","kLicences")
End Function

Sub ReadState()
	readonly = bIsEMForSchool or Not HasUserRight(arProfileEditSchoolInfo)
End Sub

Sub onHead()
	Call scriptCalendarCommon()%>

	<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("uikit.validate.js")%>" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/file-attachments.min.css")%>">

	<script src="<%=GetVersionedJsLink("fileAttachmentCtrl.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

	<script src="<%=GetVersionedResLink("/static/dist/app/school/schoolInfo/license.js")%>" type="text/javascript"></script>

	

	<style>
		.form-group input[type="text"] {
			width: 100%;
		}

		.form-group input.date-input[disabled], .form-group input.date-input[disabled]:hover {
			border: 1px solid #ccc;
		}
	</style>




	<script type="text/javascript">
		var schoolId = <%=strSchoolID%>;
		var readonly = <%=Bool2Js(readonly)%>;

		function Back() {
			goBack(document.forms[0], '/asp/SetupSchool/SchoolForms/SchoolInfo.asp');
		}

		
		
		var licenseController = new LicenseController({
			schoolId: schoolId,
			readonly: readonly
		});

		$(function() {
			licenseController.init();
		});
	</script><%
End Sub

Sub DrawLinkButtons
	Call DrawPrintButtons()
End Sub

Function ButtonPrintHandler()
	ButtonPrintHandler = "showPrintVersion({thWidth: '1%'})"
End Function

Sub onDrawPage()%>
	<form name="SchoolEdit" method="POST" action="/asp/SetupSchool/SchoolForms/SchoolInfoSave.asp" class="form-horizontal" >
		<%=WriteObligatoryTags()%><%
		
		Call DrawButtonPanel()%> 

		<div class="row">
			<div class="license-list"></div>
		</div>
	</form><%
End Sub%>
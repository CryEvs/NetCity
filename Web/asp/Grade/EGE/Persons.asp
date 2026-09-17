<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/EGE/EGE_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objView
Dim nViewMode
Dim strJsonClassOptions

Const kViewAll = 0
Const kViewUnrelated = 1

Function hasUserRightsOnPage()
	'TODO. прикрутить права
	hasUserRightsOnPage = True
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EGE","kEgePersons")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miJournal
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbEgeResults
 End Function

Sub ReadState()
	Call InitEgeComponent()
	strJsonClassOptions = objEgeComponent.GetSchoolClassesJson(strCurrYearId)
	nViewMode = GetSafeLng(Request("VIEW_MODE"), kViewAll)
End Sub

Sub WriteState()
End Sub

Sub Main()
End Sub

Sub WritePostScripts()%>
	<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
	<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
	<link href="/vendor/components/jtable/lib/themes/lightcolor/blue/jtable.min.css" rel="stylesheet" type="text/css"/>

	<script src="<%=GetVersionedResLink("/vendor/components/jtable-bundle.min.js")%>" type="text/javascript"></script><%
End Sub

Sub onHead()%>
<script>
	$(document).ready(function() {
		var schoolYearId = <%=strCurrYearId%>;

		$('#StudentTableContainer').jtable({
			title: 'Список учащихся',
			actions: {
				listAction: '/asp/Grade/EGE/EgeAjax.asp?AT=' + strATTok + '&Action=Load',
				updateAction: '/asp/Grade/EGE/EgeAjax.asp?AT=' + strATTok + '&Action=Update&SchoolYearId=' + schoolYearId
			},
			formSubmitting: function(event, data) {
				var studentId = $('#Edit-StudentId', data.form).val();
				if(studentId == -1) {
					alert(language.Generic.EGE.kSelectStudent);
					return false;
				}
			},
			toolbar: {
				items: [{
					text: language.Generic.EGE.KAllPersons,
					click: function () {
						$('#StudentTableContainer').jtable('load', { AT: strATTok, Unknown: 0, SchoolYearId: schoolYearId });
					}
				},{
					text: language.Generic.EGE.kUnknownPersons,
					click: function () {
						$('#StudentTableContainer').jtable('load', { AT: strATTok, Unknown: 1, SchoolYearId: schoolYearId});
					}
				}]
			},
			fields: {
				PersonId: {
					key: true,
					create: false,
					edit: false,
					list: false
				},
				Ege: {
					title: 'ЕГЭ',
					width: '45%',
					edit: false
				},
				ClassId: {
					width: '10%',
					title: language.Common.kClass,
					defaultValue: -1,
					options: <%=strJsonClassOptions%>
				},
				StudentId: {
					title: language.Generic.Reports.kFIOstud,
					width: '45%',
					defaultValue: -1,
					dependsOn: 'ClassId',
					options: function(data) {
						return '/asp/Grade/EGE/EgeAjax.asp?AT=' + strATTok + '&Action=LoadStudents&CLASSID=' + data.dependedValues.ClassId;;
					}
				}
			}
		});
 
		$('#StudentTableContainer').jtable('load', { Unknown: 1, SchoolYearId: schoolYearId });
	});

	function Back(){
		goBack(document.forms.MainForm, 'Results.asp');
	}
</script>
<%End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="SaveStudents.asp">
		<%=WriteObligatoryTags()%><%

		Call DrawButtonsFilters(False, "MainForm")
		Call DrawEgePersons()%>
	</form><%
End Sub

Sub DrawEgePersons()%>
	<div class="row">
		<div class="col-md-8 col-lg-6">
			<div id="StudentTableContainer"></div>
		</div>
	</div><%
End Sub

Sub DrawButtons()
End Sub

Sub DrawFilters(strForm)
	'TODO фильтр не привязанные
	'Call DrawEnumFilterRow("Results", "Предмет", "EGE_SUBJECTID", arrEgeSubjects, nEgeSubjectId, obLanguage("Common","kAll"))
End Sub%>
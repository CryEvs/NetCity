<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Curriculum/Limits_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kStep = 5

Dim rsComps

Sub ReadState()
	Set rsComps = objNSNET.GetMinComponentID(strSchoolID)
End Sub

Function GetWizardTitle()
	GetWizardTitle = obLanguage("SetupSchoolCalendar","kTitleLimits")
End Function

Function CanBack()
	CanBack = False
End Function

Sub SpecialMain
	InitStep
End Sub

Sub onHeadOverrideWizard()%>
	<script>
		var cmin = <%=CLng(rsComps("CMIN"))%>;

		function NextStep() {
			var componentInputs = $('input[name="COMPID"][value != "0"]');

			if (componentInputs.length == 0) {
				alert(language.Generic.SetupSchoolCalendar.kCurriculumLimitsNotDefined + " " + language.Generic.SetupSchoolCalendar.kCurriculumLimitsAdd);
				return;
			}

			checkForChanges().then(function() {
				jsSubmit({
					action: '/asp/ajax/Curriculum/GetComponentLimits.asp',
					data: { CMIN: cmin },
					showProcessing: false,
					onSuccess: function(response) {
						if(!response.length) {
							alert(language.Generic.SetupSchoolCalendar.kBasisLimitsNotDefined);
							return;
						}
						DoSubmit( document.MainForm, '<%=strNext%>' );
					}
				});
			});
		}
	</script><%
End Sub
%>

<!-- #INCLUDE Virtual="/asp/headersimple.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim bFinished, strBackPage

Function GetPageTitle()
	GetPageTitle = obLanguage("Wizard","kTitleTips") & " <i>" & NETSCHOOL_PRODUCT_NAME & "</i>"
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Sub ReadState()
	Call MarkEntryPage(strScriptName)
	strBackPage = IdentifyNextPage()
End Sub

Sub onHead()%>
	<SCRIPT><!--
		isHaveToLogout = true;
		bNewWindow = true;

		function goStep(i) {
			var aLink;

			switch(i) {
				case 21: aLink = "/angular/school/calendar/subjects/"; break;
				case 22: aLink = "/angular/school/calendar/curriculum/limits/"; break;
				case 23: aLink = "/angular/school/calendar/curriculum/plan/"; break;
				case 24: aLink = "/angular/school/classmanagement/subjectgroups"; break;
			}

			DoSubmit(document.MainForm, aLink);
		}

		function DoSave() {
			if(isDBBusy()) return false;

			if(document.MainForm.elements.TIPS.checked) {
				setDBBusy();
				DoSubmit(document.MainForm, '');
			}
			else {
				DoSubmit(document.MainForm, '<%=strBackPage%>');
			}
		}
	//--></SCRIPT><%
End Sub

Sub Main
End Sub

Sub DrawButtons()
	Call ButtonContinue("DoSave()", obLanguage("Common","kContinue"))
End Sub

Sub onDrawPage()%>
	<div class="container">
		<FORM Name="MainForm" METHOD="POST" ACTION="SaveTips.asp">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("PWDExpired", Request("PWDExpired")))%>

			<div class="row">
				<div class="col-md-12">
					<div class="alert alert-warning" role="alert">
						<%=obLanguage("Wizard","kPlease")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i>.<br>
						<%=obLanguage("Wizard","kThenContinue")%>
					</div>
					<p><%=ShowCheckbox("TIPS", "", False, obLanguage("Wizard","kDisableTips"), "")%></p>

					<%=obLanguage("Wizard","kDoThis")%>

					<ol>
						<li>
							<%=obLanguage("Wizard","kDoThis1")%><br>
							<%=ShowAnchor("goStep(21)", obLanguage("Common","kChoose"), obLanguage("MenuFolders","kPlanning") & " -> " & obLanguage("Common","kSubjects"), "")%>
						</li>
						<li>
							<%=obLanguage("Wizard","kDoThis2")%><br>
							<%=ShowAnchor("goStep(22)", obLanguage("Common","kChoose"), obLanguage("MenuFolders","kPlanning") & " -> " & obLanguage("MenuFolders","kFNCurriculumLimits"), "") %><br>
							<%=ShowAnchor("goStep(23)", obLanguage("Common","kChoose"), obLanguage("MenuFolders","kPlanning") & " -> " & obLanguage("MenuFolders","kCurriculumPlan"), "")%>
						</li>
						<li>
							<%=obLanguage("Wizard","kDoThis3",strFunctionalityType)%><br>
							<%=ShowAnchor("goStep(24)", obLanguage("Common","kChoose"), obLanguage("MenuFolders","kLearning") & " -> " & obLanguage("Common","kSubjects"), "")%>
						</li>
					</ol>
				</div>
			</div>

			<%Call DrawButtonPanel()%>
		</FORM>
	</div><%
End Sub%>
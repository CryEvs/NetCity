<!-- #INCLUDE VIRTUAL=/asp/headersimple.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("Login","kTitleSecurityWarning")
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

Function isDrawHeader()
	isDrawHeader = True
End Function

Sub Main()
	Call MarkEntryPage(strScriptName)
End Sub

Sub onHead()
	%>
	<script type="text/javascript">
	function doContinue() {
		var form = document.forms[0];
		DoSubmit(form, "/asp/SetSessionRole.asp");
		$.show.processing();
	}
	</script>
	<%
End Sub

Sub onDrawPage()
	Dim strCurToken, nItem
	
	%><div class="container">
		<form NAME="Proceed" METHOD="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("PWDExpired", Request("PWDExpired")))%><%
		
			DrawWarning "<b>" & obLanguage("Common","kAttention") & "</b> " & obLanguage("Login","kComboRoleUser")
		
			OpenFormGroup obLanguage("Login","kSelectNeeded")
				%>
				<select name="SESSIONROLE" class="form-control">
					<option value="<%=RoleGroup_Staffs%>"><%=obLanguage("Common","kStaff")%></option>
					<option value="<%=RoleGroup_Parents%>"><%=obLanguage("Common","kParent")%></option>
				</select>
				<%
			CloseFormGroup%>
		</form>
		<div class="block-inline">
			<%Call ButtonContinue("doContinue();", "" ) %>
		</div>
	</div><%
End Sub%>

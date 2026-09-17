<% ' © 2007-2014 IRTech. All rights reserved.

Sub MakeTestEMailDialogForm()
%>
	<script id="testEMailDlgTmpl" type="text/html">
		<form class="form-horizontal" id="testEMailDlg" name="testEMailDlg" action="options.asp" enctype="multipart/form-data" method="post">
			<%=WriteObligatoryTags()%>
			<%OpenFormGroup obLanguage("Import","kEMail") & ":"%>
				<input type="text" class="form-control FilterWhiteSpace" name="ITEMNAME" size="50" maxlength="50" value="">
			<%CloseFormGroup%>
		</form>
	</script>
<%
End Sub

%>
<script>
function SendTestMail() {
	var s = $("input[name=ITEMNAME]").val();
	if (trimStr(s) == '') {
		alert(language.Generic.ServAdmin.kSetEMail);
		return;
	}
	reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	if (!s.match(reg)) {
		alert(language.Generic.ServAdmin.kErrEMail);
		return;
	}

	jsSubmit({
		action: '/asp/ajax/TestEMail.asp',
		data: {ITEMNAME: s},
		showProcessing: true,
		onSuccess: function(response) {
			alert(language.Generic.Messages.kYourMessageWasSent);
		}
	});
	$(this).dialog("successClose");
}
</script>
<%

%>

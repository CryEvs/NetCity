<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/SmsAccess_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Sub ReadState()
End Sub

Sub Main
End Sub

Sub onHead()%>
	<script>
		$(document).ready(function() {
			var nextButton = $("button>span:contains('<%=obLanguage("Buttons","kNext") %>')").parent();
			DisableNextButton();
			$("[name='AcceptAgreement']").on("click", function(){
				if($("[name='AcceptAgreement']").is(':checked')) {
					EnableNextButton();
				}
				else {
					DisableNextButton();
				}
			});

			function EnableNextButton() {
				var backgroundUrl = nextButton.css("background-image");
				var backgroundColor =nextButton.css("background-color");
				nextButton.css({ 'background-color': backgroundColor });
				nextButton.css('background-image', backgroundUrl);
				nextButton.prop("disabled", false)
			}

			function DisableNextButton() {
				
				nextButton.css({ 'background-color': '#ffffff' })
				nextButton.css('background-image', 'none');
				nextButton.prop("disabled", true)
			}
		});

		function GoNext() {
			var success = function() {
				postTo("SaveAgreement.asp", {});
			};
			var objButtons = {};
			objButtons[$.show.defaults.yesText] = success;
			$.show.confirmation(language.Generic.MySettings.kConfirmAgreeConfirm, language.Generic.SetupSchoolUI.kConfirm, objButtons);
		}

		function Back(){
			postTo('MarksBySms.asp', {})
		}
	</script><%
End Sub

Sub onDrawPage()%>
	<div class="row">
		<div class="col-md-12">
			<fieldset>
				<legend><%=obLanguage("MySettings","kContractOffer") %></legend>
				<iframe ID="Agreement" NAME="Agreement" style="width: 100%; height:600px; background-color: white;" SRC="/agreement.html"  seamless></iframe>
			</fieldset>
		</div>
	</div>
	<div class="row">
		<div class="col-md-10 col-lg-6">
			<%Response.Write ShowCheckbox("AcceptAgreement", 1, False, " " & obLanguage("Common","kAccept"), "")%><%

			OpenBtnGroup
				rw ShowButton("send", "send", "JavaScript:GoNext()", obLanguage("Buttons","kNext"), obLanguage("Buttons","kNext"))
			CloseBtnGroup%>

			<%Call DrawInfo(obLanguage("MySettings","kDownloadAgreement"), False)%>
			<%Call DrawWarning(obLanguage("MySettings","kAgreementOnParticipationSmsSendingWarning")) %>
		</div>
	</div>	<%
End Sub%>
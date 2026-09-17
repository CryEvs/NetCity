<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/MySettings/MySettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/SmsAccess_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim parentMobPhoneForSchoolSms, bShowMPhone, contractDate, isHaveParentPhoneForSchoolSms, objSmsComponent, mobilePhone
Dim strPrettyMobPhoneForSchoolSms, strCurrentDate, strContractDate
Dim strPrice

Sub ReadState()
	Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")

	strPrice	= objSmsComponent.GetPrice(strSchoolID)
	mobilePhone = GetSafeStrParam(objNSNET.GetMobilePhoneForUser(strUserID), "")
	bShowMPhone = DetermineShowPhone()
	
	parentMobPhoneForSchoolSms = GetSafeStrParam(objSmsComponent.GetParentMobPhoneForSchoolSms(strUserId), "")
	strPrettyMobPhoneForSchoolSms = objSmsComponent.GetPrettyNumber(parentMobPhoneForSchoolSms)
	isHaveParentPhoneForSchoolSms = Not IsDull(parentMobPhoneForSchoolSms)
	contractDate = objSmsComponent.GetAgreementDate(strUserID)
	strContractDate = Date2Str(contractDate)

	strCurrentDate = Date2Str(Now())
End Sub

Sub Main
	If Not IsDull(contractDate) And Not isHaveParentPhoneForSchoolSms Then
		RedirectTo "AgreementPersonalData.asp", Null
	End If
End Sub

Sub onHead()
	Call MobileValidScript()
	%><script src="/js/libs/jquery.inputmask.bundle.min.js" type="text/javascript"></script>

	<script type="text/javascript">
		var price = <%=strPrice%>;

		$(document).ready(function() {
			var maskedPhoneInput = $("[name=MOBILEPHONE_MASK]");
			var hiddenPhoneInput = $("[name=MOBILEPHONE]");
			maskedPhoneInput.inputmask();
			maskedPhoneInput.on("change", function(){ hiddenPhoneInput.val(maskedPhoneInput.inputmask("unmaskedvalue")); });

			var checkBox = $("[name='SHOWMOBILEPHONE']");
			checkBox.on("click", function() {
				var isChecked = checkBox.is(":checked");

				if(isChecked) {
					checkBox.val(1);
				}
				else {
					checkBox.val(0);
				}
			});
		});

		function checkDeadline() {
			var deadline = moment('01-02-2016', 'DD-MM-YYYY').toDate();
			var now = moment().toDate();

			if(now <= deadline) {
				return true;
			}

			var message = 'Сервис "SMS-дневник" закрыт компанией "СМАРТС" с 1.02.2016. Позже аналогичная услуга будет предоставлена другим оператором, о чём будет сообщено дополнительно.\n\n';
			message += 'Если вы имеете на счёте остаток денежных средств, по вопросу возврата средств отправьте запрос на e-mail: stadnik@samara-gsm.ru , указав ваши:\nФИО\nномер мобильного телефона\nнаименование банка\nБИК банка\nк/с банка\nномер карты.\n'
					
			alert(message);

			return false;
		}

		<%If isHaveParentPhoneForSchoolSms Then %> 
			var parentMobPhoneForSchoolSms = <%=parentMobPhoneForSchoolSms %>;

			function testSms() {
				if(!checkDeadline()) {
					return;
				}

				var mobPhone = $("[name='MOBILEPHONE']").val();

				if (mobPhone == "") {
					alert(language.Generic.Messages.kNotFoundMobPhoneOrPhoneForSchoolSms);
					return;
				}
				jsSubmit({
					action: "/asp/ajax/Sms/SendTestSchoolSms.asp", 
					onSuccess: function(response) {
						alert(response.message);
					}
				});
			}

			function unsubscribe() {
				if(!checkDeadline()) {
					return;
				}

				jsSubmit({
					action: '/asp/ajax/Sms/CheckBalance.asp',
					data: {PHONENUMBER: parentMobPhoneForSchoolSms},
					showProcessing: true,
					onSuccess: function(response) {
						var balance = parseInt(response.data.balance.split(' ')[0], 10);
						var unsubscribeToday = <%=Bool2JS(strContractDate = strCurrentDate)%>; //если отказ от рассылки осуществляется в день заключения договора

						var getRemainingMoney = function() {
							var today = '<%=strCurrentDate%>';

							var sendBtn = function(dialog) { 
								if(!validSmartsApplication()) {
									alert(language.Generic.SMS.kNotAllFieldsFilled);
								}
								else {
									var data = {
										PHONENUMBER: parentMobPhoneForSchoolSms,
										GetRemainingMoney: true,
										lastName :					$('#unsubscribe').find('input[name="lastName"]').val(),
										firstName :					$('#unsubscribe').find('input[name="firstName"]').val(),
										middleName :				$('#unsubscribe').find('input[name="middleName"]').val(),
										contactPhoneNumber :		$('#unsubscribe').find('input[name="contactPhoneNumber"]').val(),
										completionDate :			$('#unsubscribe').find('input[name="completionDate"]').val(),
										bankName :					$('#unsubscribe').find('input[name="bankName"]').val(),
										BIK :						$('#unsubscribe').find('input[name="BIK"]').val(),
										correspondentAccount :		$('#unsubscribe').find('input[name="correspondentAccount"]').val(),
										currentAccount :			$('#unsubscribe').find('input[name="currentAccount"]').val(),
										INN :						$('#unsubscribe').find('input[name="INN"]').val(),
										KPP :						$('#unsubscribe').find('input[name="KPP"]').val()
									};

									jsSubmit({
										action: '/asp/ajax/Sms/UnsubscribeSmarts.asp',
										data: data,
										showProcessing: true,
										onSuccess: function() {
											postTo("/asp/MySettings/MarksBySms.asp");
										}
									});
								}
							};

							$.show.dialog({
								title: language.Generic.SMS.kSmartsApplication,
								message: $('#unsubscribeTempl'),
								buttons: [{label: language.Generic.Buttons.kSend, action: sendBtn, cssClass: 'btn-primary'}],
								onshown: function(dialog) {
									$('#unsubscribe').find('span[name="phoneNumber"]').text(parentMobPhoneForSchoolSms);
									$('#unsubscribe').find('input[name=completionDate]').val(today); //устанавливается текущая дата в поле дата заключения договора
								}
							});
						};

						var yesBtn = function(){
							jsSubmit({
								action: '/asp/ajax/Sms/UnsubscribeSmarts.asp',
								data: {
									PHONENUMBER: parentMobPhoneForSchoolSms,
									GetRemainingMoney: false
								},
								showProcessing: true,
								onSuccess: function() {
									postTo("/asp/MySettings/MarksBySms.asp");
								}
							});
						};
						
						var objButtons = {};
						if(!unsubscribeToday) { //если отказ от рассылки не в один день с заключением договора
							objButtons[language.Generic.Common.kYes] = yesBtn;

							if(balance > 0) {
								objButtons[language.Generic.SMS.kGetRemainingMoney] = getRemainingMoney;
							}
						}
						else { //если отказ от рассылки в один день с заключением договора
							objButtons[language.Generic.Common.kYes] = function() {
								var incButtons = {};
								incButtons[language.Generic.Common.kYes] = yesBtn;

								if(balance > 0) {
									incButtons[language.Generic.SMS.kGetRemainingMoney] = getRemainingMoney;
								}

								$.show.confirmation(('<%=DB2HTML_BR(obLanguage("SMS", "kPayAttention"))%>').replace('{0}', price), 0, incButtons);
							};
						}

						$.show.confirmation(language.Generic.SMS.kAfterFailureYouCantReceiveSmsResults, 0, objButtons);
					}
				});
			}

			function validSmartsApplication() {
				var bValid = true; 

				$('#unsubscribe').find('input').each(function(index, value) {
					if($(value).val() == "") {
						bValid = false;
					}
				});

				return bValid;
			}

			function checkBalance() {
				if(!checkDeadline()) {
					return;
				}

				jsSubmit({
					action: '/asp/ajax/Sms/CheckBalance.asp',
					data: { PHONENUMBER: parentMobPhoneForSchoolSms },
					showProcessing: true,
					onSuccess: function(response) {
						alert(language.Generic.SMS.kYourBalance + ': ' + response.data.balance);
					}
				});
			}

			function OnSave() { 
				if (isMobileValid(document.MarksBySms, false)) 
					ok_check_db('MarksBySms', '');
			}
		<%End If%>
	</script>
<%End Sub

Function DetermineShowPhone
	Dim objSettings
	Set objSettings = objNSNET.GetUserSettings(strUserID)
	DetermineShowPhone = objSettings.ShowMobilePhone
End Function

Sub DrawFilters(strFormName)
End Sub

Sub DrawButtons()
	If Not isHaveParentPhoneForSchoolSms Then
		Call DrawAgreementButton()
	Else
		Call ButtonSave("OnSave();", obLanguage("Common","kSave"))
		Call ButtonReset("resetScreen('MarksBySms');", obLanguage("Common","kReset"))
	End If
End Sub

Sub DrawLinkButtons()
	If isHaveParentPhoneForSchoolSms Then
		Call DrawTestSms()
		Call DrawCheckBalance()
		Call DrawRefuseMailing()
	End If
End Sub

Sub onDrawPage()%>
	<form name="MarksBySms" method="post" action="SaveMarksBySms.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>

		<%Call DrawButtonsFilters(True, "MarksBySms") %>

		<div class="row">
			<div class="col-md-10 col-lg-7">
				<%If Not isHaveParentPhoneForSchoolSms Then
					Call DrawInfo(obLanguage("MySettings","kYouCanReceiveServiceGettingMarksBySms"), False)
					Call DrawInfo(Replace(obLanguage("MySettings","kPriceSms"), "{0}", strPrice), False)
				Else%>
					<table class="table table-bordered table-condensed">
						<% Call DrawMobilePhone() %>
						<% Call DrawShowMobileCheckBox() %>
						<% Call DrawSchoolNumber() %>
					</table>

				<%End If%>
			</div>
		</div>
	</form>

	<script id="unsubscribeTempl" type="text/html">
		<form class="form-horizontal" id="unsubscribe"><%
			SetFiltersWidth "", "col-md-4", "col-md-7"

			Call DrawInputTextRow(obLanguage("Common", "kLastName"), "", "lastName", "", "", "", "")
			Call DrawInputTextRow(obLanguage("Common", "kFirstName"), "", "firstName", "", "", "", "")
			Call DrawInputTextRow(obLanguage("Common", "kMiddleName"), "", "middleName", "", "", "", "")
			Call DrawInputTextRow(obLanguage("Common", "kContactNumber"), "", "contactPhoneNumber", "", "", "", "")
			Call DrawReadonlyRowEx(obLanguage("SMS", "kCompletionDate"), "", "completionDate")%>

			<div class="form-group">
				<div class="col-md-12">
					<%=obLanguage("SMS", "kSmartsApplicationTextPart1")%> <span name="phoneNumber" style="font-size: 13px; font-weight: bold;"></span> <%=obLanguage("SMS", "kSmartsApplicationTextPart2")%>:
				</div>
			</div><%

			Call DrawInputTextRow(obLanguage("SMS", "kBankName"), "", "bankName", "", "", "", "")
			Call DrawInputTextRow(obLanguage("SMS", "kBIK"), "", "BIK", "", "9", "", "")
			Call DrawInputTextRow(obLanguage("SMS", "kCorrespondentAccount"), "", "correspondentAccount", "", "20", "", "")
			Call DrawInputTextRow(obLanguage("SMS", "kCurrentAccount"), "", "currentAccount", "", "20", "", "")
			Call DrawInputTextRow(obLanguage("SMS", "kINN"), "", "INN", "", "10", "", "")
			Call DrawInputTextRow(obLanguage("SMS", "kKPP"), "", "KPP", "", "9", "", "")
			
			RestoreDefFiltersWidth%>

			<div class="form-group">
				<div class="col-md-12"><%=obLanguage("SMS", "kRemainingMoneyWillBeCreditedWithinBankDays")%></div>
			</div>
		</form>
	</script>
<%End Sub

Sub DrawAgreementButton()
	Response.Write ShowButton("agreement", "agreement", "JavaScript:postTo('Agreement.asp', {})", obLanguage("MySettings", "kAgreementOnParticipationSmsSending"), obLanguage("MySettings","kAgreementOnParticipationSmsSending"))
End Sub

Sub DrawTestSms()
	Response.Write ShowButton("testsms", "testsms", "JavaScript:testSms()", obLanguage("MySettings","kTestSms"), obLanguage("MySettings", "kTestSms"))
End Sub

Sub DrawCheckBalance()
	Response.Write ShowButton("checkBalance", "checkBalance", "JavaScript:checkBalance()", obLanguage("MySettings","kCheckBalance"), obLanguage("MySettings","kCheckBalance"))
End Sub

Sub DrawRefuseMailing()
	Response.Write ShowButton("unsubscribe", "unsubscribe", "JavaScript:unsubscribe()", obLanguage("MySettings","kRefuseMailing"), obLanguage("MySettings","kRefuseMailing"))
End Sub

Sub DrawSchoolNumber()%>
	<tr>
		<td colspan="2">
			<%=obLanguage("Common","kYouGetSubscribeNumber") & " "%> <strong style="font-size:16px;"><%=strPrettyMobPhoneForSchoolSms %>.</strong> <br />
			<%=obLanguage("MySettings","kForActivationServiceFillUpPersonalAccountNumber") & " " %><strong style="font-size:16px;"><%=strPrettyMobPhoneForSchoolSms %>.</strong> <br />
			<%=Replace(obLanguage("MySettings","kPriceSms"), "{0}", strPrice)%>
		</td>
	</tr>
<%End Sub

Sub DrawMobilePhone()
	Call DrawInputRowEx(obLanguage("Common","kYourMobilePhone"), mobilePhone, "MOBILEPHONE_MASK", "text", 30, 20, "", "data-inputmask=""'mask': '+9-999-9999999'""")
	WriteHiddenTags Array("MOBILEPHONE", mobilePhone)
End Sub

Sub DrawShowMobileCheckBox()%>
	<tr>
		<!-- TO DO...ВЫНЕСТИ В ОБЩИЙ ИНКЛУД С MYSETTINGS.ASP -->
		<td colspan="2">
			<input name='SHOWMOBILEPHONE' value='<%=IIF(bShowMPhone,1,0) %>' type='checkbox' <%If bShowMPhone Then%>checked<%End If%> />
			<%=obLanguage("MySettings","kShowMPhone")%>
		</td>
	</tr>
<%End Sub%>

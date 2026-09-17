<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/MySettings/MySettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/SmsAccess_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim objSmsComponent
Dim userInfo, contractDate, mobilePhone
Dim bUserHasMobilePhoneForSchoolSms

Sub ReadState()
End Sub

Sub Main
	bUserHasMobilePhoneForSchoolSms = ParentHasMobilePhoneForSchoolSms(strUserID)
	Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
	mobilePhone = GetSafeStrParam(objNSNET.GetMobilePhoneForUser(strUserID),"")
	contractDate = objSmsComponent.GetAgreementDate(strUserID)
	Set userInfo = objNSNET.GetSchoolUserInfo(strUserID, strSchoolID)
End Sub

Sub onHead()
	Call MobileValidScript()
	%><script src="/js/libs/jquery.inputmask.bundle.min.js" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("maskedInputs.js")%>" type="text/javascript"></script><%
	Call scriptCalendar("AgreementDetails", Null, Null)%>

	<script>
		function personalDataValidation(){
			var user = {
				firstname : $("[name=FIRSTNAME]").val(),
				lastname : $("[name=LASTNAME]").val(),
				middlename : $("[name=MIDDLENAME]").val(),
				bdate : $("[name=BIRTHDATE]").val(),
				mobPhone : $("[name=MOBILEPHONE]").val()
			}

			for(var propertyName in user) {
				var val = user[propertyName];
				if(val == undefined || val == null || val.toString().trim() == "") {
					alert(language.Generic.Common.kValidationError)
					return false;
				}
			}

			return true;
		}

		function OnSave(){ 
			if (isMobileValid(document.AgreementDetails, <%=Bool2Js( Not bUserHasMobilePhoneForSchoolSms)%>) && personalDataValidation()) {
				$.show.confirmation("Проверьте правильность вашего номера: " + $("[name=MOBILEPHONE_MASK]").val()).then(function() {
					ok_check_db('AgreementDetails', '');
				});
			}
		}
	</script><%
End Sub

Sub DrawButtons()
	Call ButtonSave("OnSave();", obLanguage("Common","kSave"))
	Call ButtonReset("resetScreen('AgreementDetails');", obLanguage("Common","kReset"))
End Sub

Sub DrawFilters(strFormName)
End Sub

Sub onDrawPage()%>
	<form name="AgreementDetails" method="post" action="SaveAgreementPersonalData.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonsFilters(True, "AgreementDetails")%>

		<div class="row">
			<div class="col-md-10 col-lg-8">
				<%Call DrawWarning(obLanguage("MySettings","kAllFieldRequired"))%>
				<%Call DrawUserInfo() %>
				<%Call DrawDateSignContract() %>

				<%
				OpenFormGroup ""%>
					<img src="<%=strCommonImgFolder%>/Ext/pdf.gif" BORDER="0" VALIGN="TOP">&nbsp;<a href="../../agreement.pdf" target="_blank"><%=obLanguage("MySettings","kContractOffer") %></a><%
				CloseFormGroup%>

				<%Call DrawInfo(obLanguage("MySettings","kAgreementPersonalDataWarning"), False)%>
			</div>
		</div>
	</form><%
End Sub

Sub DrawDateSignContract()
	Call DrawReadonlyRow( obLanguage("MySettings","kAgreementDate"), contractDate )
End Sub

Sub DrawUserInfo()
	Dim dtBithDate
	dtBithDate = IIF(IsDull(userInfo("BIRTHDATE")),"",Date2Str(userInfo("BIRTHDATE")))

	Call DrawInputRow(obLanguage("Common","kLastName"), userInfo("LASTNAME"), "LASTNAME","text",25,20,"")
	Call DrawInputRow(obLanguage("Common","kFirstName"), userInfo("FIRSTNAME"), "FIRSTNAME","text",25,20,"")
	Call DrawInputRow(obLanguage("Common","kMiddleName"), userInfo("MIDDLENAME"), "MIDDLENAME","text",25,20,"")
	Call DrawDateInfoRow(obLanguage("Common","kBDate"), dtBithDate, "BIRTHDATE", obLanguage("SetupSchoolUI","kChooseBirthDate"))
	Call DrawInputRowEx(obLanguage("Common","kYourMobilePhone"), mobilePhone ,"MOBILEPHONE_MASK","text",25,20,"", "data-inputmask=""'mask': '+9-999-9999999'""")
	WriteHiddenTags Array("MOBILEPHONE", mobilePhone)
End Sub%>
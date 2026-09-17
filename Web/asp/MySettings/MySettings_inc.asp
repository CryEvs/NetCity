<%' © 2007-2014 IRTech. All rights reserved.
Sub MobileValidScript()
	Dim isDontDelMobPhone
	Dim objLocalSettings

	isDontDelMobPhone = ParentHasMobilePhoneForSchoolSms(strUserID)
	Set objLocalSettings = obContext.LocalSettings
%>
	<script>
		function isMobileValid(form, allowEmpty){
			var i, j;
			var elMobile = form.elements['MOBILEPHONE'];
			var sMobile = elMobile.value;

			if (sMobile.length==0){
				if(!allowEmpty){
					alert("<%=obLanguage("MySettings","kOnlyChangeMobPhone") %><%=obLanguage("MySettings","kForDelMobPhoneDeclineSmsAgreement") %>")
					return false;
				}
				else {
					return true
				}
			};
			if( sMobile.indexOf('<%=objLocalSettings.PhoneStateCode%>') != 0 ){
				alert('<%=obLanguage("SetupSchoolUI","kMobileValueMustStartWith").Format(Array(obLanguage("Common", "kMobilePhone"), objLocalSettings.PhoneStateCode))%>');
				elMobile.focus();
				return false;
			}
			if( sMobile.length != <%=objLocalSettings.PhoneNumberLength%> ){
				alert('<%=obLanguage("SetupSchoolUI","kMobileLenMustBe").Format(Array(obLanguage("Common", "kMobilePhone"), objLocalSettings.PhoneNumberLength))%>');
				elMobile.focus();
				return false;
			}
			for( i = 0; i < sMobile.length; i++ ){

				if( isNaN( sMobile.charAt(i) ) ){
					alert('<%=obLanguage("SetupSchoolUI","kFieldPhoneHasOnlyNumbers").Format(Array(obLanguage("Common", "kMobilePhone")))%>');
					elMobile.focus();
					return false;
				}
			}
			return true;
		}
	</script>
<%
End Sub
%>

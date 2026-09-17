<%@ Language=VBScript %>
<% ' © 2007-2012 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
%>
<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/UI.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/populate.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<%
strPageTitle = ""

'--------- Page Parameters -------


'Login State Constants
Const lngLoginStateFirstFromCookies =	-2
Const lngLoginStateFirst =	-1
Const lngLoginCountry = -1
Const lngLoginStateState =	0
Const lngLoginStateProvince = 1
Const lngLoginStateCity = 2
Const lngLoginStateSchoolFuncType = 3
Const lngLoginStateSchool = 4 '3
Const lngLoginStateLast = 4 '3

Const kTextToSign = "TEXT_TO_SIGN"

Session("NSSession")( kTextToSign ) = "TextToSign"

Const kWinLogonAccess = "WIN_LOGON_ACCESS"
Const kWinLogonAccount = "WIN_LOGON_ACCOUNT"
Const kWinLogonUser = "WIN_LOGON_USER"
Const kWinLogonFirst = "WIN_LOGON_FIRST"

' Parse parameters
Dim strOnLoad 

Function isOneEntry(ByRef objectRs)
	If Not objectRs.EOF Then
		objRs.MoveNext
		isOneEntry = objRs.EOF 
		objRs.MoveFirst
	Else
		isOneEntry = False
	End If
End Function

Response.Charset = "utf-8"
blnCookie = FALSE

strEMID = DB2Value(Request("EMID"))

strOnLoad = ""
strStdBodyParam = strStdBodyParam & " BACKGROUND=""" & strCommonImgFolder & "/bg_desk.gif"""
%><html lang="<%=strCurrLng%>"><head>
	<title><%=NETSCHOOL_PRODUCT_NAME%></title>
	<meta http-equiv="Cache-Control" content="no-cache"/>
	<meta http-equiv="Pragma" content="no-cache"/>
	<meta http-equiv="Expires" content="0"/>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
	<%Call DrawCssLinks()
	Call DrawJSLibsLinks()
	Call DrawScripts()%>
</head>

<body OnLoad="<%=strOnLoad%>" bgcolor="<%=Application("BASECOLOR")(FuncType_School)%>" link="#3341AB" vlink="#6785CD" bgproperties="fixed">
	<table border="0" width="703" height="302" cellpadding="0" cellspacing="0">
	<tr>
		<td width="178" height="89">
			<img border="0" src="<%=strCommonImgFolder%>/logo_1n.gif" width="178" height="89">
		</td>
		<td width="483" height="89" align="right">
			<font color="white"><%=obLanguage("Login","kVersion") & " " & NETSCHOOL_VERSION%></font>
		</td>
		<td width="42" height="89"></td>
	</tr>
	<tr>
		<td width="178" height="213" valign="top" background="<%=strCommonImgFolder%>/back2.gif"><img border="0" src="<%=strCommonImgFolder%>/logo_2n.gif" width="178" height="91"></td>
		<td width="483" height="213" background="<%=strCommonImgFolder%>/back1.gif">
		<form METHOD="POST" action="postSignatureLogin.asp" NAME="MainForm" onsubmit="return false;">
			<input type="hidden" name="SIGNEDDATA" value="">
            <input type="hidden" name="LoginType" value="<%=LoginType_Signature%>">
            <input type="hidden" name="EMID" value="<%=strEMID%>">
			<table border="0" cellpadding="2" cellspacing="0">
				<tr>
				<td colspan="3"><p><%=obLanguage("Login","kSelectSertificateForDigitalSignature")%></p></td></tr>
                <tr><td aclign="left">
                <% Call ButtonContinue("ok();", "" ) %>
	            </td></tr>
			</table>
		</form>
		</td><td></td>
	</tr>
</table>
	</body>
</html><%

Sub DrawScripts()
	%>
		<script><!--

        // CAPICOM constants 
        var CAPICOM_STORE_OPEN_READ_ONLY = 0;
        var CAPICOM_CURRENT_USER_STORE = 2;
        var CAPICOM_CERTIFICATE_FIND_SHA1_HASH = 0;
        var CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY = 6;
        var CAPICOM_CERTIFICATE_FIND_TIME_VALID = 9;
        var CAPICOM_CERTIFICATE_FIND_KEY_USAGE = 12;
        var CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE = 0x00000080;
        var CAPICOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME = 0;
        var CAPICOM_INFO_SUBJECT_SIMPLE_NAME = 0;
        var CAPICOM_ENCODE_BASE64 = 0;
        var CAPICOM_E_CANCELLED = -2138568446;
        var CERT_KEY_SPEC_PROP_ID = 6;

        var bIsIE = (window.ActiveXObject) ? true : false;


        function doSign() {
	        if( !bIsIE ){
		        alert('ЭЦП временно доступна только в Windows Internet Explorer');
		        return false;
		    }
/*	        if( !IsCAPICOMInstalled() ){
		        alert('Для ЭЦП нужен объект Microsoft CAPICOM, он не инстолирован на Вашем компьютере');
		        return false;
	        }*/
	        // Filter the certificates to only those that are good for my purpose
	        var FilteredCertificates = FilterCertificates();
	        if( FilteredCertificates == null )
	        {
		        return false;
	        }
		
	        var SelectedCertificate;
	        if( FilteredCertificates.Count == 1 )
	        {
		        SelectedCertificate = FilteredCertificates.Item(1);
	        }
	        else
	        {
                //SelectedCertificate = FilteredCertificates.Item(2);
                var Certificate;
		        Certificate = FilteredCertificates.Select();
                SelectedCertificate = Certificate.Item(1);
	        }
	        
	        var SignedData = new ActiveXObject("CAPICOM.SignedData");
	        var Signer = new ActiveXObject("CAPICOM.Signer");
	        var TimeAttribute = new ActiveXObject("CAPICOM.Attribute");
            var form = document.forms["MainForm"];
            try
            {
		        Signer.Certificate = SelectedCertificate;

		        // Set the time in which we are applying the signature
		        var Today = new Date();
		        TimeAttribute.Name = CAPICOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME;
		        TimeAttribute.Value = Today.getVarDate();
		        Today = null;
		        Signer.AuthenticatedAttributes.Add(TimeAttribute);

				SignedData.Content = "<%=Session("NSSession")( kTextToSign ) %>";
				var szSignature = SignedData.Sign(Signer, false, CAPICOM_ENCODE_BASE64);
                form.elements["SIGNEDDATA"].value = szSignature;
                form.submit();
	        }
	        catch (e)
	        {
		        if (e.number != CAPICOM_E_CANCELLED) {
			        alert("Невозможно подписать документ: " + e.description);
			        return false;
		        }
		        return false;
	        }
	        return true; 
        }

        function FilterCertificates()
        {
	        // instantiate the CAPICOM objects
	        var MyStore = new ActiveXObject("CAPICOM.Store");
	        var FilteredCertificates = new ActiveXObject("CAPICOM.Certificates");

	        // open the current users personal certificate store
	        try
	        {
		        MyStore.Open(CAPICOM_CURRENT_USER_STORE, "My", CAPICOM_STORE_OPEN_READ_ONLY);
	        }
	        catch (e)
	        {
		        if (e.number != CAPICOM_E_CANCELLED)
		        {
			        //alert("An error occurred while opening your personal certificate store, aborting");
			        alert("Ошибка при открытии хранилища Ваших персональных сертификатов", ({close: _doSignErrorCallback}));
			        return null;
		        }
		        return null;
	        }

	        // find all of the certificates that:
	        //   * Are good for signing data
	        //	* Have PrivateKeys associated with then - Note how this is being done :)
	        //   * Are they time valid
	        var FilteredCertificates = MyStore.Certificates.Find(CAPICOM_CERTIFICATE_FIND_KEY_USAGE,CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE).Find(CAPICOM_CERTIFICATE_FIND_TIME_VALID).Find(CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY,CERT_KEY_SPEC_PROP_ID);
	        if (FilteredCertificates.Count == 0)
	        {
		        alert("В хранилище Ваших персональных сертификатов нет сертификатов", ({close: _doSignErrorCallback}));
		        return null;
	        }
	        return FilteredCertificates;
        }

		function setImgState( img, imgId, state )
		{
			var newImg = new Image();
			if( state == 1) newImg.src = img + '_on.gif';
			else newImg.src = img + '.gif';
			document[imgId].src = newImg.src;
		}
		var isCanEnter = true;
		function FocusOnButon() {isCanEnter = false;}
		function FocusOffButon() {isCanEnter = true;}

		function CheckEnter(evt) {
			if( isCanEnter )
				if (evt.keyCode == 13) {ok();}
		}

        function ok ()
        {
            doSign();
        }

        function _doSignErrorCallback()
        {
            var form = document.forms["MainForm"];
    		form.action = 'login1.asp';
	    	form.submit();
        }

		//--></script>
<%
End Sub
%>
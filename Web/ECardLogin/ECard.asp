<%@ Language=VBScript %>
<% ' © 2007-2014 IRTech. All rights reserved.

Option Explicit
Response.Buffer = TRUE
Response.Charset = "utf-8"

On Error Resume Next

%>
<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/PageStates.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Popup.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<%

Const kNoCertifData = "НЕТ ДАННЫХ"

%>

<html lang="<%=strCurrLng%>"><head>
	<title><%=NETSCHOOL_PRODUCT_NAME & " -  " & obLanguage("Login","kLoginByECard")%></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><%
	Call DrawCssLinks()
	Call DrawJSLibsLinks()%>

<script language="JavaScript" src="dtjava.js"></script>
<script>
    function javafxEmbed_JavaFXApp_id() {
        dtjava.embed(
            {
                id : 'JavaFXApp_id',
                url : 'JavaFXApp.jnlp',
                placeholder : 'javafx-app-placeholder',
                width : 600,
                height : 300
            },
            {
                javafx : '2.2+'
            },
            {}
        );
    }
    <!-- Embed FX application into web page once page is loaded -->
    dtjava.addOnloadCallback(javafxEmbed_JavaFXApp_id);
</script>

<script>
	function readECardID(){
		var cert = '';
		cert = JavaFXApp_id.getCert();
		if (cert.toUpperCase() == '<%=kNoCertifData%>')
			cert = '';

		if (cert == ''){
			lalert('<%=obLanguage("Login","kCantReadECardID")%>');
		}
		else{
			if (window.opener && !window.opener.closed && window.opener.SetECardID){
				window.opener.SetECardID(cert);
			}
			else{
				lalert('<%=obLanguage("Login","kCantPassECardID")%>');
			}
		}
	}
	function resetECardID(){
		if (window.opener && !window.opener.closed && window.opener.SetECardID){
			window.opener.SetECardID('');
		}
		else{
			lalert('<%=obLanguage("Login","kCantResetECardID")%>');
		}
	}
</script>

</head>
<body style="font-family: verdana, arial, helvetica; font-size:8pt">

<H2 align="center"><%=obLanguage("Login","kLoginByECard")%></H2>

<!-- Applet will be inserted here -->
<div id='javafx-app-placeholder'></div>

<br><br>
<input type="button" value="<%=obLanguage("Common","kBack")%>" onclick="window.close();">
<input type="button" value="<%=obLanguage("Login","kReadECardID_S")%>" onclick="readECardID();">
<input type="button" value="<%=obLanguage("Login","kResetECardID")%>" onclick="resetECardID();">

</body>
</html>

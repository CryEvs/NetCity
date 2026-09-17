<!-- #INCLUDE FILE=../scripts/common.asp -->
<!-- #INCLUDE FILE=../scripts/UI.asp -->
<!-- #INCLUDE FILE=../scripts/populate.asp -->
<!-- #INCLUDE FILE=../scripts/stdhead.asp -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim blnLoggedOut
blnLoggedOut = (GetSafeStr(Request("AL"), 1, "N" ) = "Y")
strFunctionalityType = FuncType_EducMgr

Response.Charset = "utf-8"

Function GetScreenColorScheme()
	GetScreenColorScheme = "servadmin"
End Function

%>
<html>
	<head>
		<title><%=NETSCHOOL_PRODUCT_NAME%></title>
		<%Call DrawCssLinks()%>
		<meta http-equiv="Cache-Control" content="no-cache"/>
		<meta http-equiv="Pragma" content="no-cache"/>
		<meta http-equiv="Expires" content="10"/>
		<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
		<%Call DrawJSLibsLinks()%>
		<%Call DrawScripts()%>
		<script type="text/javascript" src="/asp/md5r.min.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/startpage-admin/css/start-page-admin.min.css")%>"/>
		<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/extras/salogin.css")%>"/>
	</head>

	<body style="text-align: center;" onload="window_onLoad();" onkeypress="CheckEnter(event);" bgcolor="#6785CD" link="#3341AB" vlink="#6785CD" bgproperties="fixed">
		<div class="centered">
			<%DrawAdminScripts%>
			<div class="entry-form">
				
				<div class="img-logo img-logo-admin"></div>
				<span style="font-size: 38px; color:#fff;"><%=NETSCHOOL_PRODUCT_NAME%></span>
				<div class="sectiontable">
					<%DrawAdminLogin%>
				</div>
			</div>
		</div>
	</body>
</html>

<%
Sub DrawAdminScripts()%>
	<script><!--
		function window_onLoad() {
			document.MainForm.elements["PW"].value = "";
			LoginFocus();
		}

		function getCookie(name) {
			var prefix = name + "=";
			var cookieStartIndex = document.cookie.indexOf(prefix);
			if (cookieStartIndex == -1) return "";
			var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
			if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;
			return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
		}

		function CheckingCooki() {
			document.cookie = "chcooki=1";
			if( getCookie("chcooki") == "") return false;
			return true;
		}

		function CheckCookies() {
			if (!CheckingCooki())
				document.NoCookie.submit();
			else
				return true;
		}

		var isCanEnter = true;
		function FocusOnButon() {
			isCanEnter = false;
		}

		function FocusOffButon() {
			isCanEnter = true;
		}

		function CheckEnter(evt) {
			if( isCanEnter )
				if (evt.keyCode == 13) {ok();}
		}

		function submitFunc() {
			var form = document.forms["MainForm"];
			if (form.elements["PW"].value == "") {
				alert(language.Generic.Login.kEnterPassword);
				return false;
			}
			return true;
		}

		function ok() {
			if (submitFunc() && !isDBBusy()) {
				var form = document.MainForm;


				var processing = $.show.processing()
			
				jsSubmit({action: "/webapi/auth/getdata", method: "POST", auth: false, showProcessing: false})
				.then(function(authData){

					form.elements["PW2"].value = hexMD5_(authData.salt + hexMD5_(form.elements["PW"].value));
					form.elements["PW"].value = form.elements["PW2"].value.substr(0,form.elements["PW"].value.length);

					form.elements["LT"].value = authData.lt;
					form.elements["VER"].value = authData.ver;

					form.elements["PW"].blur();
					setDBBusy();

					authParams = getFormsParams(form);

					jsSubmit({
						action: "/webapi/login", 
						data: authParams,
						showProcessing: false,
						auth: false,
						defaultErrorHandling: false,
						onError: function (response) {
							processing.close()
							var message = language.Generic.Common.kUnexpErr
							if(response && response.responseJSON && response.responseJSON.message){
								message = response.responseJSON.message;
							}
							$.show.error(message).then(function(){
								form.elements["PW2"].value = "";
								form.elements["PW"].value = "";
								form.elements["PW"].focus()
							});
						}
					})
					.then(function(response) {
						if (!response.at) {
							processing.close();
							$.show.error("ошибка авторизации");
							return;
						}
						var data = response.requestData || {};
						data.at = response.at;
						postTo({
							path: response.entryPoint,
							nocache: false,
							params: data,
						});
					})
					.always(function() {
						setDBFree()
					});
				});
			}
		}

		function LoginFocus() {
			document.forms["MainForm"].elements["PW"].focus();
		}
	//-->
	</script><%
End Sub

Sub DrawAdminLogin()%>
	<form  method="post" name="MainForm" class="form-horizontal" id="signup" onsubmit="return false;">
		<div class="header">
			<h4><%=obLanguage("ServAdmin","kSAName")%></h4>
		</div>
		<input type="hidden" name="VER" value=""/>
		<input type="hidden" name="PW2" value=""/>
		<input type="hidden" name="LT" value=""/>
		<input type="hidden" name="bIsSA" value="1"/>
		<input type="hidden" name="LoginType" value="<%=LoginType_ServAdmin%>">
		<div class="inputs">
			<div class="control-group">
				<div class="controls">
					<input placeholder="<%=obLanguage("Common","kPassword")%>" type="password" name="PW" size="<%=TextInputSize(15)%>" maxlength="<%=kMaxPassword%>"/>
				</div>
			</div>
		</div>
		<div class="alert alert-info">
			<a href="<%=kLoginPage%>"><%=obLanguage("Login","kOrdinaryUserLogin")%></a>
		</div>
		<div class="control-group">
			<%Call Button("ok()", obLanguage("Common", "kbtnLogin"), obLanguage("Common", "kbtnLogin"), "")%>
		</div><%
		
		If blnLoggedOut Then%>
			<div class="start-page-tooltip">
				<p><%=obLanguage("Login","kTimeoutOccured1")%></p>
				<p><%=obLanguage("Login","kTimeoutOccured2")%></p>
			</div><%
		End If%>
	</form><%
End Sub
%>

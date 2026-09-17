<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/UI.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/populate.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<% ' © 2007-2012 IRTech. All rights reserved.
'--------- Page Parameters -------
'	N=<Login Step> - optional
'		-1- Country, 0 - State, 1 - City, 2 - District, 3 - School, Name, Password
'		-1- Country, 0 - State, [1 - Province,] 2 - City, Name, Password
'		-1- Country, 0 - State, 1 - Province, [2 - City = "All",] Name, Password
'	CID=<Country Id> - optional
'	SID=<State Id> - optional
'	PN=<Province Name> - optional
'	CN=<City Name> - optional
'	DN=<District Name> - optional ---
'	SCID=<School ID> - optional ---
'	AL=Y - user was automatically logged out
'	NOCOOKIES

'Login State Constants
Const lngLoginStateFirstFromCookies =	-2
Const lngLoginStateFirst =	-1
Const lngLoginCountry = -1
Const lngLoginStateState =	0
Const lngLoginStateHierarchyLevel = 1
Const lngLoginStateEM = 2 ' not used in fact
Const lngLoginStateLast = 3

Const kWinLogonAccess = "WIN_LOGON_ACCESS"
Const kWinLogonAccount = "WIN_LOGON_ACCOUNT"
Const kWinLogonUser = "WIN_LOGON_USER"
Const kWinLogonFirst = "WIN_LOGON_FIRST"
Const kSignatureLogonAccess = "SIGNATURE_LOGON_ACCESS"

' Parse parameters
Dim lngLoginState, nStateID, strCountryID
Dim blnLoggedOut, blnCookie, strCookiDisabled
Dim bWinLogonFirst, bIsWinAuthOn
Dim nLevel, arr, strNull, arrEM, strNullEM, arrL, strNullL
Session("NSSession")("ScreenName") = ""
Response.Charset = "utf-8"
strFunctionalityType = FuncType_EducMgr
blnCookie = FALSE
strCookiDisabled = GetSafeStr(Request("NOCOOKIES"),1,"0")
nStateID = 0
If strCookiDisabled="1" Then
	dim strErr
	strErr = "Данная программа не работает без активизированных cookies.\n" &_
			"Пожалуйста, активизируйте cookies в своем браузере."
	Response.Redirect "asp/loginerror.asp?PR=" & Server.URLEncode( Request.ServerVariables("HTTP_REFERER" )) & "&ET=" & Server.URLEncode( strErr )
End If

lngLoginState = GetSafeLng( Request("N"), lngLoginStateFirstFromCookies )
if lngLoginState = 0 Then lngLoginState = Empty
blnLoggedOut = (GetSafeStr(Request("AL"), 1, "N" ) = "Y")
bWinLogonFirst = ( GetSafeStr( Session( kWinLogonFirst ), 1, "N") = "Y" )
Session( kWinLogonFirst ) = "N"
bFailedSignatureLogon = ( GetSafeStr( Session("NSSession")( kSignatureLogonAccess ), 1, "N") = "Y" )

Const nBaseLT = 594161239
Const nBaseVer = 61
Const nBaseGV = 897695341
Dim objRs, CountryRs, nLT, nVer
strEMID = "0"
nStateID = 0 : nLevel = 0
If lngLoginState = lngLoginStateFirstFromCookies Then
	lngLoginState = lngLoginStateFirst
	If Request.Cookies(strTTSCookieName).HasKeys Then
		' Try to restore values from cookies
		strCountryID = "2"'GetSafeID( Request.Cookies(strTTSCookieName)("EM_CID"), "1" )
		nStateID = GetSafeLng( Request.Cookies(strTTSCookieName)("EM_STID"), 0 )

		If nStateID > 0 Then
			nLevel = GetSafeLng( Request.Cookies(strTTSCookieName)("EM_HL"), 0 )
			strEMID = GetSafeID( Request.Cookies(strTTSCookieName)("EM_EMID"), "0" )
		End If
		If nLevel > 0 And strEMID <> "0" Then
			lngLoginState = lngLoginStateLast
			blnCookie = True
		End If
	End If
End If
Dim CurrCountryID
CurrCountryID = kHomeCountry
' If there is no good cookie - check parameters
strCountryID = GetSafeID( Request("CID"),kHomeCountry )
If strCountryID="0" Then
	CurrCountryID = kHomeCountry
	lngLoginState = lngLoginCountry
	Set CountryRs = objNSNET.GetCountryList()
	lngLoginState = lngLoginStateState
	Set objRs = objNSNET.GetSchoolStateList(CurrCountryID)
Else
	nStateID = GetSafeLng( Request("SID"),nStateID )
	Set objRs = objNSNET.GetEMStateList(strCountryID)
	arr = objRs.GetRows(,,Array("STATE_PROVINCEID","STATEPROVINCENAME"))
	If nStateID > 0 Then
		Set objRs = objNSNET.GetEMHierarchyLevel(nStateID)
		If objRs.EOF Then nStateID = 0 : nLevel = 0
	End If
	If nStateID<=0 Then
		lngLoginState = lngLoginStateState
		If UBound( arr, 2 ) > 0 Then
			strNull = "Выбрать регион..."
		Else
			nStateID = arr(0,0) : strNull = null
			Set objRs = objNSNET.GetEMHierarchyLevel(nStateID)
		End If
		' If objRs.EOF Then
			' nStateID = "-1"
			' lngLoginState = lngLoginState + 1
		' End If
	End If
	If nStateID > 0 Then
		nLevel = GetSafeLng( Request("HLEVEL"), nLevel )
		arrL = objRs.GetRows(,,Array("HLEVEL","HLEVEL"))
		For i = 0 To UBound( arrL, 2 )
			arrL(1,i) = GetHLevelName(arrL(1,i))
		Next
		If nLevel<=0 Then
			lngLoginState = lngLoginStateHierarchyLevel
			If UBound( arrL, 2 ) > 0 Then strNullL = "Выбрать уровень иерархии..." Else nLevel = arrL(0,0) : strNullL = null
		End If
		If nLevel>0 Then
			Set objRs = objNSNET.GetFounders(nStateID, -1, kEducManagement, nLevel)
			strEMID = GetSafeID( Request("EMID"), strEMID )
			If objRs.EOF Then
				nLevel = 0
			Else
				arrEM = objRs.GetRows(,,Array("EMID","FNAME"))
			
				For i = 0 To UBound( arrEM, 2 )
					arrEM(1,i) = split(arrEM(1,i),":")(1)
				Next
				If UBound( arrEM, 2 ) > 0 Then
					strNullEM = "Выбрать управление образования..."
				Else
					strEMID = arrEM(0,0) : strNullEM = null
				End If
			End If
			If strEMID="0" Then lngLoginState = lngLoginStateEM Else lngLoginState = lngLoginStateLast
		End If
	End If
End If

bIsWinAuthOn = False

If lngLoginState = lngLoginStateLast Then
	Randomize
	nLT = Int(587654321 * Rnd) + 536427369
	nVer = getVer() Mod nBaseGV
End If

strStdBodyParam = strStdBodyParam & " background=""" & strCommonImgFolder & "/bg_desk.gif"""
%><html lang="<%=strCurrLng%>">
	<head>
		<title><%=NETSCHOOL_PRODUCT_NAME%></title>
		<%Call DrawCssLinks()%>
		<meta http-equiv="Cache-Control" content="no-cache"/>
		<meta http-equiv="Pragma" content="no-cache"/>
		<meta http-equiv="Expires" content="0"/>
		<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
		<link media="screen" href="/css/about/screen.css" type="text/css" rel="stylesheet" /><%
		Call DrawJSLibsLinks()
		Call DrawScripts()

		If lngLoginState = lngLoginStateLast Then%>
			<script type="text/javascript" src="/asp/md5r.js"></script><%
		End If%>
	</head>

	<body onload="window_onLoad();"<%If lngLoginState = lngLoginStateLast Then%> onkeypress="CheckEnter(event);"<%End If%>>
	<div align="center">
		<script type="text/javascript">
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
				if (!CheckingCooki()) {
					var form = document.forms['NoCookie'];
					form.submit();
				}
				else return true;
			}
			function window_onLoad() {
				<%If lngLoginState = lngLoginStateLast Then
			%>	var form = document.forms['MainForm'];
				form.elements["PW"].value = "";
				<%End If
			%>}
			<%If lngLoginState = lngLoginStateLast Then%>
			var isCanEnter = true;
			function FocusOnButon() {isCanEnter = false;}
			function FocusOffButon() {isCanEnter = true;}
			
			function CheckEnter(evt) {
				if( isCanEnter )
					if (evt.keyCode == 13) {ok();}
			}
			
			function submitFunc() {
				var form = document.forms["MainForm"];
				var element = form.elements["CN"];
			
				if( form.elements["UN"].value == "" || form.elements["PW"].value == "" ) {
					alert(language.Generic.Login.kEnterLoginAndPassword); return false;
				}
			
				form.elements["PW2"].value = hexMD5_('<%=(nVer Mod nBaseVer)%><%=((nLT + nVer) Mod nBaseLT)%>'+hexMD5_(form.elements["PW"].value));
				form.elements["PW"].value = form.elements["PW2"].value.substr(0,form.elements["PW"].value.length);
				return true;
			}
			function ok() {
				if( submitFunc() ) {
					var form = document.MainForm;
					form.elements["N"].value = 4; <% 'method blur is used to avoid MAC IE4.5 clears password field after pressing enter
			%>
					form.elements["UN"].blur();
					form.elements["PW"].blur();
					form.submit();
				}
			}
			<%Else
				Dim fields(3)
				fields(0) = "SID": fields(1) = "CN": fields(2) = "DN"%>
			function ok() {
				submitForm( "<%= fields(lngLoginState) %>", "<%= lngLoginState+1 %>" );
			}
			<%End If%>
			function submitForm( itemName, level ) {
				var form = document.forms["MainForm"];
				var element = form.elements[itemName];
				if( element.selectedIndex != 0 ) {
					form.elements["N"].value = level;
					if( level <= <%=lngLoginStateLast%> )
						form.action="em_login_new.asp";
					form.submit();
				}
				else alert('Сначала нужно выбрать...');
			}
			function backToLevel( level ) {
				var form = document.forms["MainForm"];
				form.action="em_login_new.asp";
				form.elements[level].value ="";
				form.submit();
			}
			function LoginFocus() { <%
			If not IsEmpty(strSchoolID) and strSchoolID<>"0" Then %>
				var form = document.forms["MainForm"];
				var element = form.elements["UN"];
				element.focus();<%
			End If %>
				return;
			}
		</script>
	<% If blnLoggedOut Then%>
		<div class="subhead"><i><%=obLanguage("Login","kTimeoutOccured1")%></i><br><%=obLanguage("Login","kTimeoutOccured2")%></div><%
	End If
	If kUseSignatureLogon And bFailedSignatureLogon Then
		%><div class="subhead"><i><%=obLanguage("Login","kFailedSignatureLogon")%></div><%
	End If
	%></div>
	
	<div id="message" class="message">
		<div class="head">
			<img src="/images/about/login_text.png">
		</div>
		<div class="text">
			<%=obLanguage("Login","kSelectDataFromListboxes")%>
		</div>
		<div class="info">
			<form METHOD="POST"
				<%If lngLoginState = lngLoginStateLast Then%> ACTION="/asp/postlogin.asp"<%
					Else%> ACTION="em_login_new.asp"<%
					End If%> NAME="MainForm" onsubmit="return false;">
				<input type="hidden" name="VER" value="<%= nVer %>"/>
				<input type="hidden" name="LoginType" value="<%=LoginType_EducManager%>"/>
				<input type="hidden" name="N" value="<%= lngLoginState %>"/>
				<input type="hidden" name="NOCOOKIES" value="0"/>
				<table>
					<tbody>
						<tr>
							<td colspan="2" class="secont"><a href="/about.asp"><b>Вернуться на главную</b></a></td>
						</tr>
						<tr>
							<td class="first"><%=obLanguage("Login","kLoginRegion")%>:</td>
							<td class="secont"><%
							If nStateID=0 Or UBound( arr, 2 )=0 Then
								DrawSelectArr arr, "SID", nStateID, strNull, "submitForm('SID',"&lngLoginState + 1&" )"
							ElseIf nStateID>0 Then%>
								<input type="hidden" name="SID" value="<%= DB2Value(nStateID) %>"/>
								<a HREF="JavaScript:backToLevel('SID' )"><%=Server.HTMLEncode(objNSNET.GetStateName(nStateID))%></a><%
							End If%></td>
						</tr>
						<tr>
							<td class="first"><%=obLanguage("ServAdmin","kHierarchyLevel")%>:</td>
							<td class="secont"><%
							If nLevel = 0 Or UBound( arrL, 2 )=0 Then
								DrawSelectArr arrL, "HLEVEL", nLevel, strNullL, "submitForm('HLEVEL',"&lngLoginStateHierarchyLevel&" )"
							Else%>
								<input type="hidden" name="HLEVEL" value="<%=DB2Value(nLevel)%>"/>
								<a HREF="JavaScript:backToLevel('HLEVEL')"><%=GetHLevelName(nLevel)%></a><%
								End If%></td>
						</tr>
						<tr>
							<td class="first"><%=obLanguage("Common","kEMName")%>:</td>
							<td class="secont"><%
							If strEMID = "0" Or UBound( arrEM, 2 )=0 Then
								DrawSelectArr arrEM, "EMID", strEMID, strNullEM, "submitForm('EMID',"&lngLoginStateEM&" )"
							Else%>
								<input type="hidden" name="EMID" value="<%=DB2Value(strEMID)%>"/>
								<a HREF="JavaScript:backToLevel('EMID')"><%=Server.HTMLEncode(objNSNET.GetEducManagementName(strEMID))%></a><%
							End If%></td>
						</tr>
						<%If kUseSignatureLogon Then %>
						<tr>
							<td class="first"><%=obLanguage("Common","kLoginWithSignature")%>:</td>
							<td class="secont"><%
								If lngLoginState = lngLoginStateLast Then%>
								<a HREF="/SignatureLogin.asp?EMID=<%=DB2Value(strEMID)%>"><%=obLanguage("Common","kLoginWithSignatureEnter")%></a></td>
								<%End If %>
						</tr>
						<%End If %>
						<tr>
							<td class="first"><%=obLanguage("Common","kUser")%>:</td>
							<td class="secont"><%
							If lngLoginState = lngLoginStateLast Then%>
								<input type="text" name="UN" size="<%=TextInputSize(15)%>" maxlength="<%=kMaxLogin%>"/>
								<input type="hidden" name="PW2" value=""/>
								<input type="hidden" name="LT" value="<%=nLT%>"/>
								<input type="hidden" name="bIsEM" value="1"/><%
							End If %></td>
						</tr>
						<tr>
							<td class="first"><%=obLanguage("Common","kPassword")%>:</td><%
						If lngLoginState = lngLoginStateLast Then%>
							<td class="secont">
								<input type="password" name="PW" size="<%=TextInputSize(15)%>" maxlength="<%=kMaxPassword%>"/>
							</td>
						</tr>
						<tr>
							<td class="first">&nbsp;</td>
							<td class="secont">
								<div style="margin-left: -10px; padding-top: 15px">
									<a id='capply' href="JavaScript:ok();"><img src="/images/about/btn_apply.png"></a>
								</div>
						<%Else%><td valign="baseline" colspan="2"><%
						End If%></td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
		<form method="GET" action="em_login_new.asp" name="NoCookie">
			<input type="hidden" name="NOCOOKIES" value="1"/>
		</form>
	</div>
	</body>
</html>

<%
Function GetHLevelName(nLevel)
	Select Case nLevel
	Case kMixedLevel
		GetHLevelName = obLanguage("ServAdmin","kMixed")
	Case kProvinceLevel
		GetHLevelName = obLanguage("ServAdmin","kOfProvince")
	Case kCityLevel
		GetHLevelName = obLanguage("ServAdmin","kOfCity")
	Case kDistrictCityLevel
		GetHLevelName = obLanguage("ServAdmin","kOfDistrictCity")
	End Select
End Function
%>

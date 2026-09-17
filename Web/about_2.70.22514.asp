<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/UI.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/populate.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/login.asp -->
<% ' © 2007-2014 IRTech. All rights reserved.
'hrefs
Const aboutSystemUrl = "http://net-school.ru/netcity.php"
Const aboutSystemText = "Сетевой Город. Образование – комплексная информационная система, объединяющая в единую сеть ОУ и органы управления образования в пределах всего муниципального образования."
Const support = "http://net-school.ru/support.php"
Const topbarStr = ""

Dim bShowGerb
bShowGerb = False

Const kSignatureLogonAccess = "SIGNATURE_LOGON_ACCESS"

' Parse parameters
Dim objRs

strFunctionalityType = FuncType_EducMgr

bLogin = (GetSafeStr(Request("AL"), 1, "N" ) = "Y")
bFailedSignatureLogon = ( GetSafeStr( Session("NSSession")( kSignatureLogonAccess ), 1, "N") = "Y" )

'сегмент инициализации логина ОУ
Response.Buffer = TRUE
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
Session.CodePage = 65001
Response.Charset = "utf-8"

Session("NSSession")("ScreenName") = ""


Randomize
nLT = Int(587654321 * Rnd) + 536427369
nVer = getVer() Mod nBaseGV

Function SmsAvailableOnServer()
	IF kSMARTSEnabledForAll THEN 
		SmsAvailableOnServer = True
		Exit Function
	End If
	SmsAvailableOnServer = InStr(kSMARTSSchoolsCondition, ",") > 0
End Function

Sub DrawSlides()%>
<li>
	<div style="background: url(/images/about/pics/1.jpg)">
		<div class="sl_btn">
			<a id="ab1" href="http://www.net-school.ru/experience2.php"><img src="/images/about/btn_1.png"></a>
		</div>
	</div>
</li>
<li>
	<div style="background: url(/images/about/pics/2.jpg)">
		<div class="sl_btn">
			<a id="ab2" href="http://www.net-school.ru/experience2.php"><img src="/images/about/btn_2.png"></a>
		</div>
	</div>
</li>
<li>
	<div style="background: url(/images/about/pics/4.jpg)">
		<div class="sl_btn4">
			<a id="ab4" href="http://www.infostrategy.ru/"><img src="/images/about/btn_4.png"></a>
		</div>
	</div>
</li>
<li>
	<div style="background: url(/images/about/pics/5.jpg)">
		<div class="sl_btn4">
			<a id="ab5" href="http://www.net-school.ru/awards.php"><img src="/images/about/btn_5.png"></a>
		</div>
	</div>
</li>
<% If SmsAvailableOnServer() Then %>
<li>
	<div style="background: url(/images/about/pics/6.jpg)">
		<div class="sl_btn4">
			<a id="ab6" href="http://www.smarts.ru/sms-dnevnik/"><img src="/images/about/btn_6.png"></a>
		</div>
	</div>
</li>
<%
End If
End Sub
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<html lang="<%=strCurrLng%>" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title><%=NETSCHOOL_PRODUCT_NAME%></title>
	<meta http-equiv="Cache-Control" content="no-cache"/>
	<meta http-equiv="Pragma" content="no-cache"/>
	<meta http-equiv="Expires" content="0"/>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
	<link media="screen" href="/css/about/screen.css" type="text/css" rel="stylesheet" />
	<link href="/css/about/skin.css" type="text/css" rel="stylesheet" />
	<%DrawCssLinks() %>
	<%DrawJSLibsLinks()%>
	<script src="/js/libs/jquery.jcarousel.min.js" type="text/javascript"></script>
	<script src="/asp/md5r.js" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("login.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("winauth.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("PasswordRecovery.js")%>" type="text/javascript"></script>
	<script type="text/javascript">
		var login_ctrl;
		var em_login_ctrl;

		function validateRecoveryInput(){
			var recoveryType = $("input[name=recoveryType]:checked").val();
			var recoveryValue = $("input[name=recoveryValue]").val();
			if(recoveryValue == "")
			{
				if(recoveryType == <%=PswRecoveryType_MobPhone%>)
				{
					alert(language.Generic.Login.kNotSetPhoneNumber);
				}
				else
				{
					alert(language.Generic.Login.kNotSetEmailAdress);
				}
				return false;
			}
			if(recoveryType == <%=PswRecoveryType_MobPhone%>){
				var i, j;
				var form = document.PasswordRecoveryForm;
				var elMobile = form.elements['recoveryValue'];
				if( recoveryValue.indexOf(7) != 0 ){
					alert('<%=obLanguage("SetupSchoolUI","kMobileValueMustStartWith").Format(Array(obLanguage("Common", "kMobilePhone"),7))%>');
					elMobile.focus();
					return false;
				}
				for( i = 0; i < recoveryValue.length; i++ ){
					if( isNaN( recoveryValue.charAt(i) ) ){
						alert('<%=obLanguage.kFieldMobileHasOnlyNumbers%>');
						elMobile.focus();
						return false;
					}
				}
				
				if( i != 11 ){
					alert('<%=obLanguage("SetupSchoolUI","kMobileLenMustBe").Format(Array(obLanguage("Common", "kMobilePhone"),"11"))%>');
					elMobile.focus();
					return false;
				}
			}
			return true;
		}

		<%If bECardAuthentication Then%>
			var eCardWnd = null;
			function OpenECardWnd(){
				var school = $('select[name=SCID]').val();
				if (school <= 0) {
					alert(lngLogin.kFirstYouShouldSelectSchool);
					return;
				}

				if (!bowser.msie && !bowser.chrome){
					alert(lngLogin.kLoginByECardPossibleViaIEorChrome);
					return;
				}

				eCardWnd = window.open('ECardLogin/ECard.asp?VER=' + getVer(), '_ecard', 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=700,height=420');
				eCardWnd.name = '_ecard';
				if (eCardWnd) center(eCardWnd, 700, 420);
			}
			
			function SetECardID(sECardID){
				eCardWnd.close();
				eCardWnd = null;

				var elUN = $('input[name=UN]', '#message')[0];
				if (sECardID == ''){
					elUN.value = '';
					elUN.disabled = false;
					$('input[name=LoginType]').val('<%=LoginType_School%>');
					alert(lngLogin.kECardIDWasReset);
				}
				else{
					elUN.value = lngLogin.kECardIDWasRead;
					elUN.disabled = true;
					$('input[name=LoginType]').val('<%=LoginType_ECardSchool%>');
					alert(lngLogin.kECardIDWasRead);
				}
				$('input[name=ECardID]').val(sECardID);
			}
		<%End If%>

		$(document).ready(function(){
			var filterCtr = function(nameP, optionalP, orderP, init) {
				return {
					name: nameP,
					optional: optionalP,
					order: orderP,
					initItemText : init
				};
			};

			var _filterObj = {
				country: filterCtr('CID', true, 1, language.Generic.Login.kSelectCountry),
				state: filterCtr('SID', false, 2, language.Generic.Login.kSelectRegion),
				province: filterCtr('PID', true, 3, language.Generic.Login.kSelectProvince),
				city: filterCtr('CN', false, 4, language.Generic.Login.kSelectCity),
				funcType: filterCtr('SFT', true, 5, language.Generic.Login.kSelectSchoolType),
				school: filterCtr('SCID', false, 6, language.Generic.Login.kSelectSchool)
			};

			var _em_filterObj = {
				country: filterCtr('EM_CID', true, 1, language.Generic.Login.kSelectCountry),
				state: filterCtr('EM_SID', false, 2, language.Generic.Login.kSelectRegion),
				hlevel: filterCtr('HLEVEL', true, 3, language.Generic.Login.kSelectHierarchyLevel),
				em: filterCtr('EMID', false, 4, language.Generic.Login.kSelectEM)
			};

			var salt = '<%=(nVer Mod nBaseVer)%><%=((nLT + nVer) Mod nBaseLT)%>';

			var submitFunc = function(user, pw, pw2) {
				var school = $('select[name=SCID]').val();
				var userName = user.val();

				if (school == 0) {
					alert(lngLogin.kFirstYouShouldSelectSchool);
					return false;
				}
				if (userName == "" || pw.val() == "") {
					alert(lngLogin.kEnterLoginAndPassword); 
					return false;
				}
				pw2.val(hexMD5_(salt + hexMD5_(pw.val())));
				pw.val(pw2.val().substr(0, pw.val().length));
				return true;
			};

			var emSubmitFunc = function(user, pw, pw2) {
				var emid = $('select[name=EMID]').val();
				var userName = user.val();

				if (emid == 0) {
					alert(lngLogin.kFirstYouShouldSelectSchool);
					return false;
				}
				if (userName == "" || pw.val() == "") {
					alert(lngLogin.kEnterLoginAndPassword); 
					return false;
				}
				pw2.val(hexMD5_(salt + hexMD5_(pw.val())));
				pw.val(pw2.val().substr(0, pw.val().length));
				return true;
			};

			login_ctrl = login_ctor();
			login_ctrl.init($('#message'), _filterObj, submitFunc);
			<%If MODULE_EM Then %>
				em_login_ctrl = login_ctor();
				em_login_ctrl.init($('#message_em'), _em_filterObj, emSubmitFunc);
				<%If GetSafeLng(Session("NSSession")("FUNCTIONALITYTYPE"),FuncType_School) = FuncType_EducMgr Or bIsRegionEMForSchool Then%>
					currLoginForm = $('#message_em');
				<%End If%>
			<%End If%>

			if(!currLoginForm)
				currLoginForm = $('#message');
			<%If bLogin Then %>
			showLoginForm();
			<%End If%>
				$("[name=recoveryType]").click(function(){
					if(this.value == 1){
						//$("input[name=recoveryValue]").attr("maxlength", "80");<input type="radio" name="recoveryType" value="<%=PswRecoveryType_Email%>" />
						$("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"<%=kMaxLengthEmail%>\" />");
					}else{
						//$("input[name=recoveryValue]").attr("maxlength", "11")
						$("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"11\" />");
					}
				});
			});
		<%If kUseSignatureLogon Then%>
		function signatureLogin()
		{
			var emid = $('select[name=EMID]').val();
			DoSubmit( document.forms['EmForm'], "/SignatureLogin.asp?EMID=" + emid);
		}
		<%End If%>
	</script>
	

	<style type="text/css">
		img {
			behavior: url(css/about/iepngfix.htc)
		}
		div {
			behavior: url(css/about/iepngfix.htc)
		}
		a {
			behavior: url(css/about/iepngfix.htc)
		}
		#ie IMG {
			behavior: url(5.htc)
		}
		#ie DIV {
			behavior: url(5.htc)
		}
	</style>
	
	<script type="text/javascript">
	function mycarousel_initCallback(carousel)
	{
		// Pause autoscrolling if the user moves with the cursor over the clip.
		carousel.clip.hover(function() {
			carousel.stopAuto();
		}, function() {
			carousel.startAuto();
		});
	};

	$(document).ready(function() {
		$('#mycarousel')
			.jcarousel({ wrap: 'circular', scroll: 1, auto: 5, animation: 1000, initCallback: mycarousel_initCallback });
	});

	var currLoginForm;

	var showLoginForm = function() {
		$('#overlay').css('height', $('#wrapper').height() + $('#footer').height() + 65);
		currLoginForm.fadeIn();
		if (-[1,]) {
			$('#overlay').fadeIn();
		}
		else {
			$('#overlay').css('display', 'block');
		}
	};

	var hideLoginForm = function() {
		currLoginForm.fadeOut();
		var bVisibleRecoveryForm = $("form[name=PasswordRecoveryForm]").is(":visible");
		var bVisibleSelectSchoolForm = $("form[name=SelectSchoolForm]").is(":visible");
		if(!bVisibleRecoveryForm && !bVisibleSelectSchoolForm){
			if (-[1, ]) {
				$('#overlay').fadeOut();
			}
			else {
				$('#overlay').css('display', 'none');
			}
		}
	};
	</script>
	<script type="text/javascript">
		$(document).ready(function() {
			function setHoverImages(elem, imgIn, imgOut)
			{
				elem.hover(function() {
					$('img', this).attr('src', imgIn);
				}, function() {
					$('img', this).attr('src', imgOut);
				});
			}
			$("#hov").hover(function() {
				$('.menu', this).fadeIn(300);
			}, function() {
				$('.menu', this).fadeOut(300);
			});

			setHoverImages($("#cabout"), '/images/about/btn_about_h.png', '/images/about/btn_about.png');
			setHoverImages($(".capply"), '/images/about/btn_apply_h.png', '/images/about/btn_apply.png');

			<%If bIsRegionEMForSchool And Not bIsRegionEMWithOUDOD Then%>
				setHoverImages($("#emlogin"), '/images/about/login_btnright_1_hov.png', '/images/about/login_btnright_1.png');
				$("#emlogin").click(function(){
					currLoginForm = $('#message_em');
					showLoginForm();
				});
			<%ElseIf MODULE_EM Then%>
				setHoverImages($("#clogin"), '/images/about/login_btnleft_hov.png', '/images/about/login_btnleft.png');
				setHoverImages($("#emlogin"), '/images/about/login_btnright_hov.png', '/images/about/login_btnright.png');
				$("#emlogin").click(function(){
					currLoginForm = $('#message_em');
					showLoginForm();
				});
				$("#clogin").click(function(){
					currLoginForm = $('#message');
					showLoginForm();
				});
			<%Else%>
				setHoverImages($("#clogin"), '/images/about/login_btn_hov.png', '/images/about/login_btn.png');
				$("#clogin").click(function(){
					currLoginForm = $('#message');
					showLoginForm();
				});
			<%End If%>

			$("#recovery").click(function(){
				currLoginForm = $('#message_passwordRecovery');
				showLoginForm();
				$(":radio[value='E']").prop("checked", true)
			});

			$(":radio[name='recoveryType']").click(function(){
				if($("input[name='recoveryValue']").val() != ""){
					$("input[name='recoveryValue']").val("");
				}
			});
			setHoverImages($("#ab1"), '/images/about/btn_1_h.png', '/images/about/btn_1.png');
			setHoverImages($("#ab2"), '/images/about/btn_2_h.png', '/images/about/btn_2.png');
			setHoverImages($("#ab4"), '/images/about/btn_4_h.png', '/images/about/btn_4.png');
			setHoverImages($("#ab5"), '/images/about/btn_5_h.png', '/images/about/btn_5.png');<%
		If SmsAvailableOnServer() Then %>
			setHoverImages($("#ab6"), '/images/about/btn_6_h.png', '/images/about/btn_6.png');<%
		End If %>

			$("#cexit").click(function(){
				currLoginForm = $('#message');
				hideLoginForm();
			});
			$("#cexit_em").click(function() {
				currLoginForm = $('#message_em');
				hideLoginForm();
			});
			$("#cexit_recovery").click(function() {
				currLoginForm = $('#message_passwordRecovery');
				hideLoginForm();
			});
			
			if (-[1, ]) {
				return;
			}
			var agt = navigator.userAgent.toLowerCase();
			if (agt.substr(agt.indexOf("msie") + 5, 1) == '8') {
				$('#message .info table tr td').css('padding-top', '6px');
				$('#message .info table tr td').css('padding-bottom', '6px');
				$('#message_em .info table tr td').css('padding-top', '6px');
				$('#message_em .info table tr td').css('padding-bottom', '6px');
			}
		});
	</script>

	<meta content="MSHTML 6.00.2900.2853" name="generator" />
</head>
<body>
	<%If Not IsDull(topbarStr) Then %>
	<div id="topbar"><div id="topbarStr"><%=topbarStr %></div></div>
	<%End If %>
	<div id="wrapper">
		<div id="wrapper_inner">
			<div id="header">
				<div id="logo">
					<img src="/images/about/bg_head<%=IIf(MODULE_EM, IIf(MODULE_REGION And bIsRegionEMForSchool,"_sro",""), "_ns")%>.png">
				</div>
				<%If bShowGerb Then %>
				<div id="logo2">
					<a href=<%=aboutSystemUrl%>><img src="/images/about/gerb.png"></a>
				</div>
				<%End If%>
				<div id="enter" <%=IIF(MODULE_EM,"","style=""width: 400px""") %>><%
					If bIsRegionEMForSchool And Not bIsRegionEMWithOUDOD Then
						%><a id="emlogin"><img src="/images/about/login_btnright_1.png"></a>&ensp;<%
					ElseIf MODULE_EM Then
						%><a id="clogin"><img src="/images/about/login_btnleft.png"></a>&ensp;
						<a id="emlogin"><img src="/images/about/login_btnright.png"></a>&ensp;<%
					Else
						%><a id="clogin"><img src="/images/about/login_btn.png"></a>&ensp;<%
					End If%>
				</div>
			</div>
			<div id="menu"></div>
			<div id="content">
				<div class="clearer"></div>
				<div id="slider">
					<ul id="mycarousel">
						<%Call DrawSlides() %>
					</ul>
				</div>
				<div id="columns">
					<div id="column1">
						<div class="head">
							<a href=<%=aboutSystemUrl%>>
								<img src="/images/about/about.png"></a>
						</div>
						<div class="news">
							<%=aboutSystemText%>
						</div>
						<div class="btn">
							<a id="cabout" href=<%=aboutSystemUrl %>><img src="/images/about/btn_about.png"></a>
						</div>
					</div>
					<div id="column2">
						<div class="news">
							Система включает в себя электронные журналы и дневники, средства для планирования и мониторинга учебного процесса, оперативного общения между всеми его участниками.
						</div>
						<div class="news">
							Параллельно, в реальном времени к обобщённой информации по школам имеют доступ и специалисты органов управления образования для получения необходимых отчётов и сведений.
						</div>
					</div>
					<div id="column3">
						<div class="news">
							<br>Система позволяет оказывать ряд государственных и муниципальных услуг в электронном виде в сфере образования.
						</div>
						<div class="news">
							Внедрение системы способствует повышению качества образования, принятия обоснованных управленческих решений на каждом уровне управления.
						</div>
						<div style="padding-top: 10px">
							<a class='capply' href="JavaScript:winlogin();">Вход с учетной записью Windows</a>
						</div>
					</div>
				</div>
				<div class="clearer"></div>
			</div>
		</div>
	</div>
	<div id="message" class="message" style="display: none">
		<div class="close">
			<a id="cexit" style="display: block"><img src="/images/about/login_close.gif"></a>
		</div>
		<div class="head">
			<img src="/images/about/login_text.png">
		</div>
		<div class="text">
			<%=obLanguage("Login","kSelectDataFromListboxes")%>
		</div>
		<div class="info">
			<form method="POST" action="/asp/postlogin.asp" name="MainForm" onsubmit="return false;">
				<input type="hidden" name="VER" value="<%=nVer%>" />
				<input type="hidden" name="PW2" value="" />
				<input type="hidden" name="LT" value="<%=nLT%>" />
				<input type="hidden" name="LoginType" value="<%= LoginType_School %>"/>
				<input type="hidden" name="ECardID" value="" />
				<table>
					<tbody>
						<%Call DrawLoginForm() %>
						<tr>
							<td class="first">&nbsp;</td>
							<td class="secont">
								<div style="margin-left: -10px; padding-top: 15px">
									<a class='capply' style="display: none" href="JavaScript:login_ctrl.login();"><img src="/images/about/btn_apply.png"></a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	</div>
	<div id="message_passwordRecovery" class="message" style="display: none">
		<div class="close">
			<a id="cexit_recovery" style="display: block"><img src="/images/about/login_close.gif"></a>
		</div>
		<div class="head">
			<img src="/images/about/remember_password.png">
		</div>
		<div class="text">
			<%=DB2HTML_BR(obLanguage("Login","kBriefInstructions1")) & Application("NS_PRODUCT_NAME") & DB2HTML_BR(obLanguage("Login","kBriefInstructions2")) & Application("NS_PRODUCT_NAME")%>
		</div>
		<div class="info">
			<form method="POST" action="/asp/postlogin.asp" name="PasswordRecoveryForm" onsubmit="return false;">
				<input type="hidden" name="VER" value="<%=nVer%>" />
				<input type="hidden" name="PW2" value="" />
				<input type="hidden" name="LT" value="<%=nLT%>" />
				<input type="hidden" name="LoginType" value="<%= LoginType_School %>"/>
				<table>
					<tbody>
						<input type="radio"  name="recoveryType" value="<%=PswRecoveryType_Email%>" checked /> <%=obLanguage("UsersExport_1C","kEMail") %><br />
						<input type="radio" name="recoveryType" value="<%=PswRecoveryType_MobPhone%>" /> <%=obLanguage("Common","kMobilePhone") %>
						<div>
							<% Call DrawInput("", "recoveryValue", "text", TextInputSize(35), kMaxLengthEmail) %>
						</div>
						
						<tr>
							<td class="first">&nbsp;</td>
							<td class="secont">
								<div style="margin-left: -10px; padding-top: 15px">
									<a class='capply' style="display: inline" href="JavaScript:recoveryPassword();">
										<img src="/images/about/btn_apply.png">
									</a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
		<div class="text">
			<%=DB2HTML_BR(obLanguage("Login","kBriefInstructions3"))%>
		</div>
	</div>

	<div id="message_em" class="message" style="display: none">
		<div class="close">
			<a id="cexit_em" style="display: block"><img src="/images/about/login_close.gif"></a>
		</div>
		<div class="head">
			<img src="/images/about/login_text.png">
		</div>
		<div class="text">
			<%=obLanguage("Login","kSelectDataFromListboxes")%>
		</div>
		<div class="info">
			<form method="POST" action="/asp/postlogin.asp" name="EmForm" onsubmit="return false;">
				<input type="hidden" name="VER" value="<%=nVer%>" />
				<input type="hidden" name="PW2" value="" />
				<input type="hidden" name="LT" value="<%=nLT%>" />
				<input type="hidden" name="LoginType" value="<%=LoginType_EducManager%>"/>
				<table>
					<tbody>
						<%Call DrawEmLoginForm() %>
						<tr>
							<td class="first">&nbsp;</td>
							<td class="secont">
								<div style="margin-left: -10px; padding-top: 15px">
									<a class='capply' style="display: none" href="JavaScript:em_login_ctrl.login();"><img src="/images/about/btn_apply.png"></a>
								</div>
								<%If kUseSignatureLogon Then %>
									<a class='capply' style="display: none" href="JavaScript:signatureLogin();"><%=obLanguage("Common","kLoginWithSignature")%></a>
								<%End If %>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	</div>
	<div id="overlay" style="display: none"></div>
</body>
</html>

<%
Sub DrawFilter(strTitle, strFormElemId, strFormElemName)
%>
<tr>
	<% If strTitle <> "" Then %>
		<td class="first"><%=strTitle%></td>
	<% End If %>
	<td class="secont">
		<select id="<%=strFormElemId%>" style="width: 271px" name="<%=strFormElemName%>"></select>
	</td>
</tr>
<%	
End Sub

Sub DrawCheckBox(strTitle, strFormElemName, rowAttrs)
%>
<tr <%=rowAttrs%>>
	<td colspan="2">
		<input type="checkbox" name="<%=strFormElemName%>"><%=strTitle%></input>
	</td>
</tr>
<%
End Sub

Sub DrawInput(strTitle, strFormElemName, strType, size, length)
%>
<tr>
	<% If strTitle <> "" Then %>
		<td class="first"><%=strTitle%></td>
	<% End If %>
	<td class="secont">
		<div class="myinput" style="margin-top: -15px; z-index: 5; position: absolute">
			<input name="<%=strFormElemName%>" style="outline: none" size="<%=size%>" maxlength="<%=length%>" type="<%=strType%>" />
		</div>
	</td>
</tr>
<%
End Sub

Sub DrawLink(linkEvent, hint, txtBody, attr)
%>
<tr>
	<td class="">
		<div style="margin-top: -15px; z-index: 5; position: absolute">
			<% Response.Write ShowAnchor(linkEvent, hint, txtBody, attr) %>
		</div>
	</td>
</tr>
<%
End Sub

Sub DrawLoginForm()
	Call DrawFilter(obLanguage("Common","kCountry"), "countries", kCID)
	Call DrawFilter(obLanguage("Login","kLoginRegion"), "states", kSID)
	Call DrawFilter(obLanguage("Login","kLoginProvince"), "provinces", kPID)
	Call DrawFilter(obLanguage("Login","kLoginCity"), "cities", kCN)
	Call DrawFilter(obLanguage("Common","kEOType"), "funcs", kSFT)
	Call DrawFilter(obLanguage("Common","kEO"), "schools", kSCID)
	Call DrawInput(obLanguage("Common","kUser"), "UN", "text", TextInputSize(35), kMaxLogin)
	Call DrawInput(obLanguage("Common","kPassword"), "PW", "password", TextInputSize(35), kMaxPassword)
	Call DrawLink("", obLanguage("Login","kPasswordRecovery"), obLanguage("Login","kPasswordRecovery"), "id=recovery")
	If bECardAuthentication Then
		Call DrawLink("OpenECardWnd();", obLanguage("Login","kReadECardID"), obLanguage("Login","kReadECardID"), "id=ECardAuth")
	End If
End Sub

Sub DrawEmLoginForm()
	Call DrawFilter(obLanguage("Common","kCountry"), "countries", kEM_CID)
	Call DrawFilter(obLanguage("Login","kLoginRegion"), "states", kEM_SID)
	Call DrawFilter(obLanguage("ServAdmin","kHierarchyLevel"), "hlevels", kEM_HL)
	Call DrawFilter(obLanguage("Common","kEMName"), "ems", kEM_EMID)
	Call DrawInput(obLanguage("Common","kUser"), "UN", "text", TextInputSize(35), kMaxLengthEmail)
	Call DrawInput(obLanguage("Common","kPassword"), "PW", "password", TextInputSize(35), kMaxPassword)
End Sub
%>

login_ctrl = null
em_login_ctrl = null

deferredResLoader.loadStyle("/vendor/bootstrap/css/bootstrap.min.css")
deferredResLoader.loadScript("/asp/md5r.min.js")
deferredResLoader.loadScript("/js/winauth.js")
deferredResLoader.loadScript("/js/PasswordRecovery.js")
deferredResLoader.loadScript("/vendor/bootstrap/js/bootstrap.min.js")
deferredResLoader.loadScript("/vendor/bootstrap3-dialog/js/bootstrap-dialog.min.js")

showForm = (form) ->
	#последняя цифра строки для тонкой настройки высоты затемненной области
	$('#overlay').css('height', "100%")
	form.fadeIn()
	if (-[1,])
		$('#overlay').fadeIn()
	else
		$('#overlay').css('display', 'block')
		
hideForm = (form) ->
	form.fadeOut()

	bVisibleRecoveryForm = $("form[name=PasswordRecoveryForm]").is(":visible")
	bVisibleSelectSchoolForm = $("form[name=SelectSchoolForm]").is(":visible")
		
	if !bVisibleSelectSchoolForm
		if (-[1, ])
			$('#overlay').fadeOut();
		else
			$('#overlay').css('display', 'none');

initRecoveryDialog = () ->
	$("[name=recoveryType]").click () ->
		if this.value == '1'
			$("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"80\" />");
		else
			$("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"11\" />");
			
	$("#recovery").click () ->
		showForm $('#message-password-recovery')
		$(":radio[value='E']").prop("checked", true)

		$("input[name=recoveryValue]")
			.prop("style", "outline: none")
			.prop("size", 35)
			.prop("maxlength", 80)
			.removeClass()

	$(":radio[name='recoveryType']").click () ->
		if $("input[name='recoveryValue']").val() != ""
			$("input[name='recoveryValue']").val("")

	$("#cexit_recovery").click () ->
		hideForm $('#message-password-recovery')

	$("#message-password-recovery a.button-login").click () -> window.recoveryPassword()

initPage = (settings) ->
	#переключает вкладки формы
	$('ul.tabs-form').delegate 'li:not(.current)', 'click', () -> 
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.sectiontable').find('div.box-form')
			.eq($(this).index())
			.fadeIn(150).siblings('div.box-form').hide()
			
		# запись в куки текущей открытой вкладки
		$.cookie 'openForm', $('.current').prop('id')

	initPromises = []

	if settings.schoolLogin
		#фильтры формы логина в ОО
		schoolLoginFilters =
			country: new filter('cid', true, 1, language.Generic.Login.kSelectCountry),
			state: new filter('sid', false, 2, language.Generic.Login.kSelectRegion),
			province: new filter('pid', true, 3, language.Generic.Login.kSelectMunicipality),
			city: new filter('cn', false, 4, language.Generic.Login.kSelectCity),
			funcType: new filter('sft', true, 5, language.Generic.Login.kSelectSchoolType),
			school: new filter('scid', false, 6, language.Generic.Login.kSelectSchool)
			
		#функция проверки перед входом в ОО
		schoolSubmitFunc = (user, pw) ->
			school = $('select[name=scid]').val()
			userName = user.val()

			if school == 0
				alert(lngLogin.kFirstYouShouldSelectSchool)
				return false
		
			if userName == "" or pw.val() == ""
				alert(lngLogin.kEnterLoginAndPassword)
				return false
		
			return true
	
		#инициализация контрола для входа в ОО
		login_ctrl = login_ctor()
		$(document).on("click", "#message a.button-login-marker", login_ctrl.login)
		initPromises.push login_ctrl.init($('#message'), schoolLoginFilters, schoolSubmitFunc, settings.cacheVer)

	if settings.emLogin
		#фильтры формы логина в УО
		emLoginFilters =
			country: new filter('em_cid', true, 1, language.Generic.Login.kSelectCountry),
			state: new filter('em_sid', false, 2, language.Generic.Login.kSelectRegion),
			hlevel: new filter('hlevel', true, 3, language.Generic.Login.kSelectHierarchyLevel),
			em: new filter('emId', false, 4, language.Generic.Login.kSelectEM)

		#функция проверки перед входом в УО
		emSubmitFunc = (user, pw) ->
			emid = $('select[name=emid]').val()
			userName = user.val()

			if emid == 0
				alert(lngLogin.kFirstYouShouldSelectSchool)
				return false

			if userName == "" or pw.val() == ""
				alert(lngLogin.kEnterLoginAndPassword)
				return false

			return true
			
		#инициализация контрола для входа в УО
		em_login_ctrl = login_ctor()
		$(document).on("click", "#message-em a.button-login-marker", em_login_ctrl.login)
		initPromises.push em_login_ctrl.init($('#message-em'), emLoginFilters, emSubmitFunc, settings.cacheVer)

	#дожидаемся полной загрузки всех js, css ресурсов
	initPromises.push deferredResLoader.promise()

	#событие полной готовности формы авторизации
	extDeferred.when(initPromises).then () ->
		if window.preLoaderRemoved
			showPreloginNoticeDialog()
			return
		window.preLoaderRemoved = true
		hidePreloader () -> $('input[name="UN"]').focus()
		
		$('div.centered > div.loginbox').addClass('appear');

		showPreloginNoticeDialog()

	do initRecoveryDialog

	if (-[1, ])
		return;

	agt = navigator.userAgent.toLowerCase()
	if agt.substr(agt.indexOf("msie") + 5, 1) == '8'
		$('#message .info table tr td').css('padding-top', '6px');
		$('#message .info table tr td').css('padding-bottom', '6px');
		$('#message-em .info table tr td').css('padding-top', '6px');
		$('#message-em .info table tr td').css('padding-bottom', '6px');

hidePreloader = (onHide) ->
	$preloader = $('#login-page-preloader')
	$spinner = $preloader.find('.spinner')
	$spinner.fadeOut()
	$preloader.delay(350).fadeOut 'slow', () -> 
		if typeof onHide == "function"
			onHide() 

# выводит уведомление
showPreloginNoticeDialog = () ->

	getHashNotice()
		.then(() ->
			jsSubmit
				action: "/webapi/settings/preloginnotice"
				method: "GET"
				auth: false
			.then((settings) ->
				if settings.showPopUp
					content =
						 "<div class='text-left' style='font-size: 16;'>" + settings.popUpDisplayText + "</div>"

					# опции диалога уведомления
					opts = {
						closable: false
						buttons: [
							{
								label: settings.popUpButtonText,
								cssClass: "btn-primary center-block"
								action: (dialog) ->
									setNoticeHash().then () -> dialog.close()
							}
						]
					}

					$.show.message(content, language.Generic.Common.kAttention, opts)
			)
		)

hashCode = (str) ->
	hash = 0
	for i in [0..str.length-1] by 1
		hash = ~~(((hash << 5) - hash) + str.charCodeAt(i))
	hash

getHashNotice = () ->
	curNoticeHash = $.cookie("hash-notice_state")

	deferred = $.Deferred()

	jsSubmit(
		action: "/webapi/settings/preloginnotice"
		method: "GET"
		auth: false
	)
	.then((settings) ->

		if settings.showPopUp
			hashNotice = hashCode(settings.popUpDisplayText)

			if hashNotice isnt +curNoticeHash
				deferred.resolve()

		deferred.reject()
	,
		() -> deferred.reject()
	)

	deferred.promise()

setNoticeHash = () ->
	expires = 365 * 24 * 60 * 60

	jsSubmit(
		action: "/webapi/settings/preloginnotice"
		method: "GET"
		auth: false
	)
	.then((settings) ->
		popUpDisplayText = settings.popUpDisplayText
		if popUpDisplayText
			hashPopUpDisplayText = hashCode(popUpDisplayText)

			# установка куки
			date = new Date()
			date.setTime(date.getTime() + expires * 1000);
			$.cookie("hash-notice_state", hashPopUpDisplayText, { expires: date })
	)


$(document).ready () ->
	window.preLoaderRemoved = false
  
	templates = {}

	loadTpl = (tplName, tplUrl) ->
		jsSubmit
			action: tplUrl
			method: 'GET'
			dataType: 'html'
			showProcessing: false
			auth: false
		.then (html) ->
			templates[tplName] = html

	$.when(
		jsSubmit
			action: '/webapi/logindata',
			method: 'GET'
			showProcessing: false
			defaultErrorHandling: false
			auth: false
		.fail (err) -> 
			#дожидаемся полной загрузки всех js, css ресурсов и показываем ошибку
			deferredResLoader.ready () ->
				hidePreloader()
				if err?.responseJSON
					$.show.error(err?.responseJSON?.message or err?.statusText or language.Generic.Common.kUnexpErr, "Ошибка инициализации формы входа")
					return
				$.show.error(err?.statusText or language.Generic.Common.kUnexpErr, "Ошибка инициализации формы входа")
				if err.responseText
					document.open().write(err.responseText)
	)
	.then (response) ->

		currentForm = urlHelper.getParameterByName("openForm") or $.cookie("openForm") or ""
		currentForm = currentForm.toLowerCase()

		if currentForm != "school" and currentForm != "em" then currentForm = "school"
		if currentForm == "em" and !response.emLogin then currentForm = "school"
		if currentForm == "school" and !response.schoolLogin then currentForm = "em"

		idpInfoKey = urlHelper.getParameterByName("idpInfoKey")

		model = 
			enableSms:response.enableSms
			language: language
			authPage: "/postlogin.asp"
			productName: response.productName
			schoolLogin: response.schoolLogin
			emLogin: response.emLogin
			severalForms: response.schoolLogin and response.emLogin
			idpInfoKey: idpInfoKey
			signatureLogin: response.signatureLogin
			currentForm:
				school: currentForm == "school"
				em: currentForm == "em"
			esia: false
			cacheVer: response.cacheVer
			windowsAuth: response.windowsAuth

		if response.esiaLogin
			model.esia = 
				mainAuth: response.esiaMainAuth
				buttonMode: response.esiaButton
				linkMode: !response.esiaButton
				linkText: "Вход с учетной записью портала Госуслуг"
				loginPage: response.esiaLoginPage

		if idpInfoKey
			model.bindIdpAccountMessage = language.Generic.Common.kLoginAndBindNetCityAccount
				.replace("{0}", model.productName)
				.replace("{1}", "ЕСИА") #todo. получать из запроса

		$.when(
			loadTpl('loginForm', '/vendor/pages/about/templates/loginform.html?ver=' + response.version),
			loadTpl('extras_header', '/extras/about_header.html?ver=' + response.version),
			loadTpl('extras_footer', '/extras/about_footer.html?ver=' + response.version))
		.then () ->

			model.extras = 
				header: Handlebars.compile(templates.extras_header) model
				footer: Handlebars.compile(templates.extras_footer) model

			template = Handlebars.compile templates.loginForm
			loginFormHtml = template(model)
			
			$("div.body").append loginFormHtml

			if model.esia.mainAuth and not idpInfoKey
				$(".tabs-form").css("display", "none");
				$(".box-form").css("display", "none");
				$("#showLoginForm").click () ->
					$(".tabs-form").css("display", "block")
					$('.box-form').filter('.visible').css('display', 'block')
					$(".box-form-auth").css("display", "none")

			if not model.severalForms
				$(".box-form").css({ 'padding-top': '0px' });
				$(".sectiontable").css({ "border-top": "1px solid #225588" });
				$(".message-form").css({ "padding-top": "40px" });

				if model.schoolLogin
					$(".img-logo").attr({ "src": "/vendor/custom/img/logo_netscool.png" });

			initPage(model)

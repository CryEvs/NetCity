
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
	
validateRecoveryInput = () ->
	recoveryType = parseInt $("input[name=recoveryType]:checked").val()
	recoveryValue = $("input[name=recoveryValue]").val()
	
	if recoveryValue == ""
		if recoveryType == constants.PswRecoveryType_MobPhone
			processing.close()
			alert(language.Generic.Login.kNotSetPhoneNumber)
		else
			alert(language.Generic.Login.kNotSetEmailAdress)
		return false

	if recoveryType == constants.PswRecoveryType_MobPhone
		form = document.PasswordRecoveryForm
		elMobile = form.elements['recoveryValue']
		
		if recoveryValue.indexOf(7) != 0 
			alert(words.kMobileValueMustStartWith)
			elMobile.focus()
			return false;

		for charIndex in [0..recoveryValue.length]
			if isNaN recoveryValue.charAt(charIndex)
				alert words.kFieldMobileHasOnlyNumbers
				elMobile.focus()
				return false

		if recoveryValue.length != 11
			alert words.kMobileLenMustBe
			elMobile.focus()
			return false
	return true

if constants.bECardAuthentication
	eCardWnd = null
	OpenECardWnd = () ->
		school = $('select[name=SCID]').val()
		if school <= 0
			alert lngLogin.kFirstYouShouldSelectSchool
			return

		info = navigator.userAgent; 
		isIE = (info.indexOf("MSIE") > 0)
		isChrome = (info.indexOf("Chrome") > 0)
		
		if !isIE && ! isChrome
			alert(lngLogin.kLoginByECardPossibleViaIEorChrome)
			return
		
		url = urlHelper.makeUrl("ECardLogin/ECard.asp")
		winOptions = { url: url, name: '_ecard', specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=700,height=420', winChild: eCardWnd }
		windowOpen( winOptions )
		eCardWnd = winOptions.winChild
		eCardWnd.name = '_ecard'
		
		if eCardWnd
			center(eCardWnd, 700, 420)

	SetECardID = (sECardID) ->
		eCardWnd.close();
		eCardWnd = null;

		elUN = $('input[name=UN]', '#message')[0]
			
		if sECardID == ''
			elUN.value = ''
			elUN.disabled = false
			$('input[name=LoginType]').val(constants.loginType.School)
			alert(lngLogin.kECardIDWasReset)
		else
			elUN.value = lngLogin.kECardIDWasRead
			elUN.disabled = true
			$('input[name=LoginType]').val(constants.loginType.ECardSchool)
			alert(lngLogin.kECardIDWasRead)

		$('input[name=ECardID]').val(sECardID)
		
if constants.kUseSignatureLogon
	signatureLogin = () ->
		emid = $('select[name=EMID]').val()
		DoSubmit( document.forms['EmForm'], "/SignatureLogin.asp?EMID=" + emid)

login_ctrl = null
em_login_ctrl = null

$(document).ready () ->
	preLoaderRemoved = false
	$(document).bind 'login_form_ready', () ->
		if preLoaderRemoved
			return
		preLoaderRemoved = true
		
		setUserNameFocus = () ->
			$('input[name="UN"]').focus()

		
		$preloader = $('#login-page-preloader')
		$spinner = $preloader.find('.spinner')
		$spinner.fadeOut()
		$preloader.delay(350).fadeOut('slow', () -> setUserNameFocus())
		$('div.centered > div.loginbox').addClass('appear');

	if constants.schoolLogin
		#фильтры формы логина в ОО
		schoolLoginFilters =
			country: new filter('CID', true, 1, language.Generic.Login.kSelectCountry),
			state: new filter('SID', false, 2, language.Generic.Login.kSelectRegion),
			province: new filter('PID', true, 3, language.Generic.Login.kSelectProvince),
			city: new filter('CN', false, 4, language.Generic.Login.kSelectCity),
			funcType: new filter('SFT', true, 5, language.Generic.Login.kSelectSchoolType),
			school: new filter('SCID', false, 6, language.Generic.Login.kSelectSchool)
			
		#функция проверки перед входом в ОО
		schoolSubmitFunc = (user, pw, pw2) ->
			school = $('select[name=SCID]').val()
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
		login_ctrl.init($('#message'), schoolLoginFilters, schoolSubmitFunc)

	if constants.emLogin
		#фильтры формы логина в УО
		emLoginFilters =
			country: new filter('EM_CID', true, 1, language.Generic.Login.kSelectCountry),
			state: new filter('EM_SID', false, 2, language.Generic.Login.kSelectRegion),
			hlevel: new filter('HLEVEL', true, 3, language.Generic.Login.kSelectHierarchyLevel),
			em: new filter('EMID', false, 4, language.Generic.Login.kSelectEM)

		#функция проверки перед входом в УО
		emSubmitFunc = (user, pw, pw2) ->
			emid = $('select[name=EMID]').val()
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
		em_login_ctrl.init($('#message-em'), emLoginFilters, emSubmitFunc)

	#переключает вкладки формы
	$('ul.tabs-form').delegate 'li:not(.current)', 'click', 
		() -> 
			$(this).addClass('current').siblings().removeClass('current')
				.parents('div.sectiontable').find('div.box-form')
				.eq($(this).index())
				.fadeIn(150).siblings('div.box-form').hide()
			
			# запись в куки текущей открытой вкладки
			$.cookie 'openForm', $('.current').prop('id')

	$("[name=recoveryType]").click () ->
		if this.value == '1'
			#$("input[name=recoveryValue]").attr("maxlength", "80");<input type="radio" name="recoveryType" value="<%=PswRecoveryType_Email%>" />
			$("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"" + constants.kMaxLengthEmail + "\" />");
		else
			#$("input[name=recoveryValue]").attr("maxlength", "11")
			$("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"11\" />");
			
	$("#recovery").click () ->
		showForm $('#message-password-recovery')
		$(":radio[value='E']").prop("checked", true)

	$(":radio[name='recoveryType']").click () ->
		if $("input[name='recoveryValue']").val() != ""
			$("input[name='recoveryValue']").val("")

	$("#cexit_recovery").click () ->
		hideForm $('#message-password-recovery')

	if (-[1, ])
		return;

	agt = navigator.userAgent.toLowerCase()
	if agt.substr(agt.indexOf("msie") + 5, 1) == '8'
		$('#message .info table tr td').css('padding-top', '6px');
		$('#message .info table tr td').css('padding-bottom', '6px');
		$('#message-em .info table tr td').css('padding-top', '6px');
		$('#message-em .info table tr td').css('padding-bottom', '6px');
	


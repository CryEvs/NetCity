	class changePasswordCtrl
		constructor: (@params) ->
		
		_data = {}
		_template = '<form class="form-horizontal" name="SavePassword" action="/asp/ajax/ChangePassword.asp">
						<input type="hidden" name="NP3">
						<input type="hidden" name="OP2">
						
						{{#if userEditHimself}}
							<div class="form-group">
								<label class="control-label col-md-4">' + language.Generic.Common.kCurrPassword + '</label>
								<div class="col-md-8">
									<input type="password" class="form-control " autocomplete="off" name="OP" size="15" maxlength="40" onchange="dataChanged()">
									<div style="margin-top: 5px;">' + language.Generic.Common.kEnterCurrPassword + '</div>
								</div>
							</div>
						{{/if}}
						<div class="form-group">
							<label class="control-label col-md-4">' + language.Generic.Common.kNewPassword + '</label>
							<div class="col-md-8">
								<input type="password" class="form-control" autocomplete="off" name="NP" size="15" maxlength="40" onchange="dataChanged()">
								
								{{#if userEditHimself}}
									<div style="margin-top: 5px;">' + language.Generic.Common.kCreateNewPassword + '</div>
								{{/if}}
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-4">' + language.Generic.Common.kConfirmPassword + '</label>
							<div class="col-md-8">
								<input type="password" class="form-control" autocomplete="off" name="NP2" size="15" maxlength="40" onchange="dataChanged()">
							</div>
						</div>
					</form>'
				
		changePassword: (userId) ->
			_showDialog = () =>
				cancelBtn = (dialog) -> dialog.successClose()
				saveBtn = (dialog) =>
					_params = 
						loginName:	_data.loginName,
						lastName:	_data.lastName,
						firstName:	_data.firstName,
						middleName: _data.middleName,

						restrictNumericPasswords: _data.restrictNumericPasswords,
						inputOldPass: $('input[name="OP"]'),
						inputOldPass2: $('input[name="OP2"]'),
						inputNewPass: $('input[name="NP"]'),
						inputConfirmPass: $('input[name="NP2"]'),
						inputNewPass3: $('input[name="NP3"]'),
							
						userEditHimself: @params.userEditHimself,
						minPasswordLength: @params.minPasswordLength
					
					if not @canChangePassword(_params) then return false
						
					jsSubmit({
						action: '/asp/ajax/ChangePassword.asp',
						data: { 
							userId: if typeof userId is "undefined" then @params.userId else userId
							act: "save"
							OP2: $('input[name="OP2"]').val()
							NP3: $('input[name="NP3"]').val()
						},
						showProcessing: true,
						onSuccess: (response) =>
							if typeof @params.customSuccess isnt "undefined"
								@params.customSuccess()
							else
								alert(response.message)
								dialog.successClose()
					})

				fullTemplate	= Handlebars.compile _template
				html			= fullTemplate userEditHimself: @params.userEditHimself
				
				$.show.dialog({
					title: language.Generic.Common.kChangePassword,
					size: BootstrapDialog.SIZE_WIDE,
					message: html,
					buttons: [{label: language.Generic.Buttons.kSave, action: saveBtn, cssClass: 'btn-primary', hotkey: 13}, 
						{label: language.Generic.Curriculum.kBtnCancel, action: cancelBtn}],
					onshown: () =>
						if not @params.userEditHimself
							do $('input[name="NP"]').focus
						else
							do $('input[name="OP"]').focus
				})
				
			if not $.isEmptyObject(_data)
				_showDialog()
			else
				jsSubmit({
					action: '/asp/ajax/ChangePassword.asp',
					data:
						userId: if typeof userId is "undefined" then @params.userId else userId,
						act: "prepare"
					showProcessing: true,
					onSuccess: (response) =>
						_data["loginName"]					= response.data.loginName
						_data["lastName"]					= response.data.lastName
						_data["firstName"]					= response.data.firstName
						_data["middleName"]					= response.data.middleName
						_data["restrictNumericPasswords"]	= response.data.restrictNumericPasswords
					
						_showDialog()
						return
				})
			
		canChangePassword: (_options) ->
			oldPass			= _options.inputOldPass.val()
			pass			= _options.inputNewPass.val()
			upperPass		= pass.toUpperCase()
			confirmPass		= _options.inputConfirmPass.val()

			if @params.userEditHimself and not oldPass
				focusAlert(_options.inputOldPass, language.Generic.Common.kErrOldPassword)
				return false

			if not pass
				focusAlert(_options.inputNewPass, language.Generic.Common.kErrNewPassword)
				return false

			if pass.length < @params.minPasswordLength
				focusAlert(_options.inputNewPass, language.Generic.Common.kErrorPasswordMustHave)
				return false

			if pass != confirmPass
				focusAlert(_options.inputConfirmPass, language.Generic.Common.kErrDifferentPassword)
				return false

			if upperPass is _options.loginName \
			or upperPass is _options.lastName \
			or upperPass is _options.lastName + _options.firstName \
			or upperPass is _options.firstName + _options.lastName \
			or upperPass is _options.firstName \
			or upperPass is _options.lastName + _options.firstName.substr(0, 1) \
			or upperPass is _options.firstName.substr(0, 1) + _options.lastName \
			or upperPass is _options.lastName + _options.firstName.substr(0, 1) + _options.middleName.substr(0, 1) \
			or upperPass is _options.firstName.substr(0, 1) + _options.middleName.substr(0, 1) + _options.lastName
				focusAlert(_options.inputNewPass, language.Generic.Common.kSimplePassword)
				return false

			if _options.restrictNumericPasswords and !/\D/.test(upperPass)
				focusAlert(_options.inputNewPass, language.Generic.Common.kErrNumericPasswordsRestricted)
				return false

			if @params.userEditHimself and pass is oldPass
				focusAlert(_options.inputNewPass, language.Generic.Common.kNewPasswordMustNotEqualOld)
				return false
				
			if pass.charAt(0) is ' ' or pass.charAt(pass.length - 1) is ' '
				focusAlert(_options.inputNewPass, language.Generic.Common.kErrPWDSurroundSpaces)
				return false
				
			if @params.userEditHimself then _options.inputOldPass2.val(hexMD5_(oldPass))
			_options.inputNewPass3.val(hexMD5_(pass))

			return true
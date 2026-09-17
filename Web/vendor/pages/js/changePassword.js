var changePasswordCtrl;

changePasswordCtrl = (function() {
  var _data, _template;

  function changePasswordCtrl(params) {
    this.params = params;
  }

  _data = {};

  _template = '<form class="form-horizontal" name="SavePassword" action="/asp/ajax/ChangePassword.asp"> <input type="hidden" name="NP3"> <input type="hidden" name="OP2"> {{#if userEditHimself}} <div class="form-group"> <label class="control-label col-md-4">' + language.Generic.Common.kCurrPassword + '</label> <div class="col-md-8"> <input type="password" class="form-control " autocomplete="off" name="OP" size="15" maxlength="40" onchange="dataChanged()"> <div style="margin-top: 5px;">' + language.Generic.Common.kEnterCurrPassword + '</div> </div> </div> {{/if}} <div class="form-group"> <label class="control-label col-md-4">' + language.Generic.Common.kNewPassword + '</label> <div class="col-md-8"> <input type="password" class="form-control" autocomplete="off" name="NP" size="15" maxlength="40" onchange="dataChanged()"> {{#if userEditHimself}} <div style="margin-top: 5px;">' + language.Generic.Common.kCreateNewPassword + '</div> {{/if}} </div> </div> <div class="form-group"> <label class="control-label col-md-4">' + language.Generic.Common.kConfirmPassword + '</label> <div class="col-md-8"> <input type="password" class="form-control" autocomplete="off" name="NP2" size="15" maxlength="40" onchange="dataChanged()"> </div> </div> </form>';

  changePasswordCtrl.prototype.changePassword = function(userId) {
    var _showDialog;
    _showDialog = (function(_this) {
      return function() {
        var cancelBtn, fullTemplate, html, saveBtn;
        cancelBtn = function(dialog) {
          return dialog.successClose();
        };
        saveBtn = function(dialog) {
          var _params;
          _params = {
            loginName: _data.loginName,
            lastName: _data.lastName,
            firstName: _data.firstName,
            middleName: _data.middleName,
            restrictNumericPasswords: _data.restrictNumericPasswords,
            inputOldPass: $('input[name="OP"]'),
            inputOldPass2: $('input[name="OP2"]'),
            inputNewPass: $('input[name="NP"]'),
            inputConfirmPass: $('input[name="NP2"]'),
            inputNewPass3: $('input[name="NP3"]'),
            userEditHimself: _this.params.userEditHimself,
            minPasswordLength: _this.params.minPasswordLength
          };
          if (!_this.canChangePassword(_params)) {
            return false;
          }
          return jsSubmit({
            action: '/asp/ajax/ChangePassword.asp',
            data: {
              userId: typeof userId === "undefined" ? _this.params.userId : userId,
              act: "save",
              OP2: $('input[name="OP2"]').val(),
              NP3: $('input[name="NP3"]').val()
            },
            showProcessing: true,
            onSuccess: function(response) {
              if (typeof _this.params.customSuccess !== "undefined") {
                return _this.params.customSuccess();
              } else {
                alert(response.message);
                return dialog.successClose();
              }
            }
          });
        };
        fullTemplate = Handlebars.compile(_template);
        html = fullTemplate({
          userEditHimself: _this.params.userEditHimself
        });
        return $.show.dialog({
          title: language.Generic.Common.kChangePassword,
          size: BootstrapDialog.SIZE_WIDE,
          message: html,
          buttons: [
            {
              label: language.Generic.Buttons.kSave,
              action: saveBtn,
              cssClass: 'btn-primary',
              hotkey: 13
            }, {
              label: language.Generic.Curriculum.kBtnCancel,
              action: cancelBtn
            }
          ],
          onshown: function() {
            if (!_this.params.userEditHimself) {
              return $('input[name="NP"]').focus();
            } else {
              return $('input[name="OP"]').focus();
            }
          }
        });
      };
    })(this);
    if (!$.isEmptyObject(_data)) {
      return _showDialog();
    } else {
      return jsSubmit({
        action: '/asp/ajax/ChangePassword.asp',
        data: {
          userId: typeof userId === "undefined" ? this.params.userId : userId,
          act: "prepare"
        },
        showProcessing: true,
        onSuccess: (function(_this) {
          return function(response) {
            _data["loginName"] = response.data.loginName;
            _data["lastName"] = response.data.lastName;
            _data["firstName"] = response.data.firstName;
            _data["middleName"] = response.data.middleName;
            _data["restrictNumericPasswords"] = response.data.restrictNumericPasswords;
            _showDialog();
          };
        })(this)
      });
    }
  };

  changePasswordCtrl.prototype.canChangePassword = function(_options) {
    var confirmPass, oldPass, pass, upperPass;
    oldPass = _options.inputOldPass.val();
    pass = _options.inputNewPass.val();
    upperPass = pass.toUpperCase();
    confirmPass = _options.inputConfirmPass.val();
    if (this.params.userEditHimself && !oldPass) {
      focusAlert(_options.inputOldPass, language.Generic.Common.kErrOldPassword);
      return false;
    }
    if (!pass) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrNewPassword);
      return false;
    }
    if (pass.length < this.params.minPasswordLength) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrorPasswordMustHave);
      return false;
    }
    if (pass !== confirmPass) {
      focusAlert(_options.inputConfirmPass, language.Generic.Common.kErrDifferentPassword);
      return false;
    }
    if (upperPass === _options.loginName || upperPass === _options.lastName || upperPass === _options.lastName + _options.firstName || upperPass === _options.firstName + _options.lastName || upperPass === _options.firstName || upperPass === _options.lastName + _options.firstName.substr(0, 1) || upperPass === _options.firstName.substr(0, 1) + _options.lastName || upperPass === _options.lastName + _options.firstName.substr(0, 1) + _options.middleName.substr(0, 1) || upperPass === _options.firstName.substr(0, 1) + _options.middleName.substr(0, 1) + _options.lastName) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kSimplePassword);
      return false;
    }
    if (_options.restrictNumericPasswords && !/\D/.test(upperPass)) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrNumericPasswordsRestricted);
      return false;
    }
    if (this.params.userEditHimself && pass === oldPass) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kNewPasswordMustNotEqualOld);
      return false;
    }
    if (pass.charAt(0) === ' ' || pass.charAt(pass.length - 1) === ' ') {
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrPWDSurroundSpaces);
      return false;
    }
    if (this.params.userEditHimself) {
      _options.inputOldPass2.val(hexMD5_(oldPass));
    }
    _options.inputNewPass3.val(hexMD5_(pass));
    return true;
  };

  return changePasswordCtrl;

})();

//# sourceMappingURL=changePassword.js.map

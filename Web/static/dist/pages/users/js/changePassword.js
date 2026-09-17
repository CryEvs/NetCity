var changePasswordCtrl =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var changePasswordCtrl;

changePasswordCtrl = (function() {
  var _data, _template, md5;

  md5 = __webpack_require__(3);

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
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrorPasswordMustHave.replace("{0}", this.params.minPasswordLength));
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
      _options.inputOldPass2.val(md5(oldPass));
    }
    _options.inputNewPass3.val(md5(pass));
    return true;
  };

  return changePasswordCtrl;

})();

(function(exp, name) {
  var exported, exports;
  exported = false;
  if ( true && module !== null ? module.exports : void 0) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === void 0)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})(changePasswordCtrl);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 1.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Code also contributed by Greg Holt
 * See http://pajhome.org.uk/site/legal.html for details.
 */

/*
 * This file was modified to process non-ascii strings in IE
 */

(function () {
  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  }
  /*
   * Bitwise rotate a 32-bit number to the left.
   */
  function rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }

  /*
   * These functions implement the four basic operations the algorithm uses.
   */
  function cmn(q, a, b, x, s, t) {
    return safe_add(rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }
  function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  /*
   * Calculate the MD5 of an array of little-endian words, producing an array
   * of little-endian words.
   */
  function coreMD5(x) {
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = ff(c, d, a, b, x[i + 10], 17, -42063);
      b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558);
      d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return [a, b, c, d];
  }

  /*
   * Convert an array of little-endian words to a hex string.
   */
  function binl2hex(binarray) {
    var hex_tab = "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
      str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
    }
    return str;
  }

  /* Differently from charCodeAt, returns normal ASCII codes for russian letters */
  function charCodeAt_(s, pos) {
    var n = s.charCodeAt(pos);
    if (n >= 0 && n <= 255) return n;else if (n >= 1040 && n <= 1103) return n - 848;else if (n == 1025) return 168;else if (n == 1105) return 184;else if (n == 8470) return 185;else return 0;
  }

  /*
   * Convert an 8-bit character string to a sequence of 16-word blocks, stored
   * as an array, and append appropriate padding for MD4/5 calculation.
   * If any of the characters are >255, the high byte is silently ignored.
   */
  function str2binl_(str) {
    var nblk = (str.length + 8 >> 6) + 1; // number of 16-word blocks
    var blks = new Array(nblk * 16);
    for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
    for (var i = 0; i < str.length; i++) blks[i >> 2] |= (charCodeAt_(str, i) & 0xFF) << i % 4 * 8;
    blks[i >> 2] |= 0x80 << i % 4 * 8;
    blks[nblk * 16 - 2] = str.length * 8;
    return blks;
  }

  /* External interface */
  function hexMD5_(str) {
    return binl2hex(coreMD5(str2binl_(str)));
  }

  //для поддержки js модульности
  (function (exp, name) {
    var exported = false;
    if ( true && module.exports) {
      module.exports = exp;
      exported = true;
    }
    if (true) {
      exports = exp;
      exported = true;
    }
    if (!exported && typeof window !== "undefined" && typeof name !== "undefined") {
      window[name] = exp;
    }
    if (typeof root !== "undefined" && typeof name !== "undefined") {
      root[name] = exp;
    }
  })(hexMD5_, "hexMD5");
})();

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 225);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminListCtrl = exports.AdminListComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var changePasswordCtrl = __webpack_require__(13);
var AdminListCtrl = /*#__PURE__*/function (_NetCityModalControll) {
  AdminListCtrl.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "org", "$q", "settingsProvider", "changePasswordService", "schoolsRepository", "emsRepository"];
  _inherits(AdminListCtrl, _NetCityModalControll);
  var _super = _createSuper(AdminListCtrl);
  /*@ngInject*/
  function AdminListCtrl($scope, $uibModalInstance, changeTracker, $dialogs, language, org, $q, settingsProvider, changePasswordService, schoolsRepository, emsRepository) {
    var _this;
    _classCallCheck(this, AdminListCtrl);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.org = org;
    _this.$q = $q;
    _this.settingsProvider = settingsProvider;
    _this.changePasswordService = changePasswordService;
    _this.admins = [];
    _this.ready = false;
    if (org.isFounder) {
      _this.header = "Администрирование учредителя";
    } else {
      _this.header = "Администрирование образовательной организации";
    }
    _this.admins = [];
    _this.ready = false;
    var getAdmins = !org.isFounder ? schoolsRepository.getSchoolAdmins(org.id).then(function (admins) {
      _this.admins = admins;
    }) : emsRepository.getEmAdmins(org.id).then(function (admins) {
      _this.admins = admins;
    });
    // const getMinPasswordLength = this.settingsProvider.SecuritySettings.MinPasswordLength()
    // 	.then((minLength) => {
    // 		this.changePassCtrl = new changePasswordCtrl({ userEditHimself: false, minPasswordLength: minLength });
    // 	});
    // this.$q.all([getAdmins, getMinPasswordLength])
    // 	.then(() => {
    // 		this.ready = true;
    // 	});
    _this.$q.when(getAdmins).then(function () {
      _this.ready = true;
    });
    return _this;
  }
  _createClass(AdminListCtrl, [{
    key: "changePassword",
    value: function changePassword(userId) {
      this.changePasswordService.changePassword({
        userId: userId
      });
    }
  }]);
  return AdminListCtrl;
}(_netcityModalCtrl.NetCityModalController);
exports.AdminListCtrl = AdminListCtrl;
var AdminListComponent = {
  controller: AdminListCtrl,
  controllerAs: "ctrl",
  templateUrl: "/static/dist/app/admin/schools/adminllist/adminList.component.html"
};
exports.AdminListComponent = AdminListComponent;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var changePasswordCtrl;

changePasswordCtrl = (function() {
  var _data, _template, md5;

  md5 = __webpack_require__(10);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))

/***/ }),

/***/ 14:
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

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchToEdit = exports.single = exports.read = exports.multi = exports.edit = exports.checkMode = void 0;
// Режимы работы дерева
// Режимы работы дерева следует рассматривать как набор бинарнных флагов
/*
 нулевой бит -- режим редактирования (1 -- можно редактировать, 0 -- нельзя)
 первый бит -- режим выбора организацй (0 -- одна организация, 1 -- несколько организаций)
*/
var read = 0; // чтение (значение по умолчанию)
exports.read = read;
var edit = 1; // редактирование 
exports.edit = edit;
var single = 0; // выбор одной организации (значение по умолчанию)
exports.single = single;
var multi = 2; // выбор нескольких организаций
exports.multi = multi;
var switchToEdit = 4; // возможен переход к редактированию

// Проверка доступности режима
exports.switchToEdit = switchToEdit;
var checkMode = function checkMode(value, mode) {
  return (value & mode) == mode;
};
exports.checkMode = checkMode;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgInfoRepository = void 0;
var _repository = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var OrgInfoRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(OrgInfoRepository, _BaseRepository);
  var _super = _createSuper(OrgInfoRepository);
  function OrgInfoRepository() {
    _classCallCheck(this, OrgInfoRepository);
    return _super.apply(this, arguments);
  }
  _createClass(OrgInfoRepository, [{
    key: "loadCommonInfo",
    value: function loadCommonInfo(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editSchool",
    value: function editSchool(data) {
      return this.$http.post("/webapi/schools/", data).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadFiles",
    value: function loadFiles(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/card/files")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadAuthorities",
    value: function loadAuthorities(schoolId) {
      var params = {};
      if (schoolId) {
        params.schoolId = schoolId;
      }
      return this.$http.get("/webapi/em/authorities", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadEducmanagements",
    value: function loadEducmanagements(filter) {
      return this.$http.get("/webapi/educmanagements", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadFounders",
    value: function loadFounders(cityId) {
      var params = {};
      if (cityId) {
        params.cityId = cityId;
      }
      return this.$http.get("/webapi/founders", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadAttachmentTypes",
    value: function loadAttachmentTypes(group) {
      var params = {};
      if (group) {
        params.group = group;
      }
      return this.$http.get("/webapi/attachments/types", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPfdoPublishStatus",
    value: function getPfdoPublishStatus(schoolId) {
      return this.$http.get("/webapi/integration/pfdo/organizationstatus", {
        params: {
          schoolId: schoolId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "pfdoPublish",
    value: function pfdoPublish(organizationId) {
      return this.$http.post("/webapi/integration/pfdo/publishorganization", null, {
        params: {
          organizationId: organizationId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "loadOrgParamInfo",
    value: function loadOrgParamInfo(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/card/values")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveDirector",
    value: function saveDirector(schoolId, directorId) {
      var params = {
        directorId: directorId
      };
      return this.$http.post("/webapi/schools/".concat(schoolId, "/director"), null, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveOrgParamInfo",
    value: function saveOrgParamInfo(schoolId, data, reason) {
      var params = reason;
      return this.$http.put("/webapi/schools/".concat(schoolId, "/card/values"), data, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return OrgInfoRepository;
}(_repository.BaseRepository);
exports.OrgInfoRepository = OrgInfoRepository;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolsRepository = exports.EmsRepository = void 0;
var _repository = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var SchoolsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SchoolsRepository, _BaseRepository);
  var _super = _createSuper(SchoolsRepository);
  function SchoolsRepository() {
    _classCallCheck(this, SchoolsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SchoolsRepository, [{
    key: "getSchoolInfo",
    value: function getSchoolInfo(id) {
      return this.$http.get("/webapi/schools/" + id).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolEducOrgInfo",
    value: function getSchoolEducOrgInfo(id) {
      return this.$http.get("/webapi/schools/" + id + "/educorg").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolAddressedName",
    value: function getSchoolAddressedName(id) {
      return this.$http.get("/webapi/schools/" + id + "/getAddressedName").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "searchSchools",
    value: function searchSchools(filter) {
      return this.$http.get("/webapi/schools/search", {
        params: filter
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "createSchool",
    value: function createSchool(dto) {
      return this.$http.put("/webapi/schools", dto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editSchool",
    value: function editSchool(dto) {
      return this.$http.post("/webapi/schools", dto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editSchoolEducOrg",
    value: function editSchoolEducOrg(dto) {
      return this.$http.post("/webapi/schoolseducorg", dto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getSchoolAdmins",
    value: function getSchoolAdmins(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/admins")).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return SchoolsRepository;
}(_repository.BaseRepository);
exports.SchoolsRepository = SchoolsRepository;
var EmsRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(EmsRepository, _BaseRepository2);
  var _super2 = _createSuper(EmsRepository);
  function EmsRepository() {
    _classCallCheck(this, EmsRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(EmsRepository, [{
    key: "getAuthorities",
    value: function getAuthorities(schoolId, emId) {
      return this.$http.get("/webapi/em/authorities", {
        params: {
          schoolId: schoolId,
          emId: emId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEmHierarchy",
    value: function getEmHierarchy(cityId) {
      return this.$http.get("/webapi/educmanagements/hierarchy", {
        params: {
          cityId: cityId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getChildEducManagments",
    value: function getChildEducManagments(emId) {
      return this.$http.get("/webapi/educmanagements/childs", {
        params: {
          emId: emId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getFounders",
    value: function getFounders(cityId) {
      var params = {};
      if (cityId) {
        params = {
          cityId: cityId
        };
      }
      return this.$http.get("/webapi/founders", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPossibleParentFounders",
    value: function getPossibleParentFounders(level, stateId, cityId, founderId) {
      var params = {
        nHLevel: level !== null && level !== void 0 ? level : "",
        nStateID: stateId,
        nCityID: cityId !== null && cityId !== void 0 ? cityId : 0,
        nFounderID: founderId
      };
      return this.$http.get("/webapi/possibleParentFounders", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getEmAdmins",
    value: function getEmAdmins(emId) {
      return this.$http.get("/webapi/ems/".concat(emId, "/admins")).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return EmsRepository;
}(_repository.BaseRepository);
exports.EmsRepository = EmsRepository;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(21);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var staticInstance = null;
var BaseRepository = /*#__PURE__*/function () {
  function BaseRepository($http, $dialogs, $alerts) {
    _classCallCheck(this, BaseRepository);
    this.$http = $http;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    staticInstance = this;
  }
  _createClass(BaseRepository, [{
    key: "handleResponse",
    value: function handleResponse(response) {
      return response.data;
    }
  }, {
    key: "handleError",
    value: function handleError(response) {
      var errInformer = function errInformer(message) {
        return staticInstance.$dialogs.error(message);
      };
      var messageInformer = function messageInformer(message) {
        return staticInstance.$dialogs.message(message);
      };
      return new _common.CommonXhrErrorHandler(errInformer, messageInformer).handleErrorResponse(response);
    }
  }]);
  return BaseRepository;
}();
exports.BaseRepository = BaseRepository;
BaseRepository.$inject = ["$http", "$dialogs", "$alerts"];

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatesRepository = exports.ProvincesRepository = exports.MunicipalitiesRepository = exports.LocationsRepository = exports.ExternalAddressesRepository = exports.DistrictsRepository = exports.CountriesRepository = exports.CitiesRepository = void 0;
var _baseRepository = __webpack_require__(27);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CitiesRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(CitiesRepository, _BaseRepository);
  var _super = _createSuper(CitiesRepository);
  function CitiesRepository() {
    _classCallCheck(this, CitiesRepository);
    return _super.apply(this, arguments);
  }
  _createClass(CitiesRepository, [{
    key: "getCities",
    value: function getCities(ids, stateId, provinceId, municipalityId, isSimpleNames) {
      var params = {
        id: ids
      };
      if (ids.length > 10) {
        return this.$http.post("/webapi/addresses/cities/search", params).then(this.handleResponse, this.handleError);
      }
      if (stateId) {
        params = Object.assign(params, {
          stateId: stateId
        });
      }
      if (provinceId) {
        params = Object.assign(params, {
          provinceId: provinceId
        });
      }
      if (municipalityId) {
        params = Object.assign(params, {
          municipalityId: municipalityId
        });
      }
      if (isSimpleNames) {
        params = Object.assign(params, {
          isSimpleNames: isSimpleNames
        });
      }
      return this.$http.get("/webapi/addresses/cities", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createCity",
    value: function createCity(command) {
      return this.$http.post("/webapi/addresses/cities", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editCity",
    value: function editCity(command) {
      return this.$http.put("/webapi/addresses/cities", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "replaceCity",
    value: function replaceCity(command) {
      return this.$http.post("/webapi/addresses/cities/replace", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeCity",
    value: function removeCity(id) {
      return this.$http["delete"]("/webapi/addresses/cities/" + id).then(this.handleResponse, this.handleError);
    }
  }]);
  return CitiesRepository;
}(_baseRepository.BaseRepository);
exports.CitiesRepository = CitiesRepository;
var MunicipalitiesRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(MunicipalitiesRepository, _BaseRepository2);
  var _super2 = _createSuper(MunicipalitiesRepository);
  function MunicipalitiesRepository() {
    _classCallCheck(this, MunicipalitiesRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(MunicipalitiesRepository, [{
    key: "getMunicipalities",
    value: function getMunicipalities(filter) {
      if ((filter === null || filter === void 0 ? void 0 : filter.id) && filter.id.length > 10) {
        var query = {
          idType: filter.idType
        };
        return this.$http.post("/webapi/addresses/municipalities/search", {
          filter: filter
        }, {
          params: query
        }).then(this.handleResponse, this.handleError);
      }
      return this.$http.get("/webapi/addresses/municipalities", {
        params: filter
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeMunicipality",
    value: function removeMunicipality(id) {
      return this.$http["delete"]("/webapi/addresses/municipalities/" + id).then(this.handleResponse, this.handleError);
    }
  }]);
  return MunicipalitiesRepository;
}(_baseRepository.BaseRepository);
exports.MunicipalitiesRepository = MunicipalitiesRepository;
var DistrictsRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(DistrictsRepository, _BaseRepository3);
  var _super3 = _createSuper(DistrictsRepository);
  function DistrictsRepository() {
    _classCallCheck(this, DistrictsRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(DistrictsRepository, [{
    key: "getCityDistricts",
    value: function getCityDistricts(cityId) {
      return this.$http.get("/webapi/addresses/cities/".concat(cityId, "/districts")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDistricts",
    value: function getDistricts(query) {
      return this.$http.get("/webapi/addresses/districts", {
        params: query
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createDistrict",
    value: function createDistrict(command) {
      return this.$http.post("/webapi/addresses/districts", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editDistrict",
    value: function editDistrict(command) {
      return this.$http.put("/webapi/addresses/districts", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "replaceDistrict",
    value: function replaceDistrict(command) {
      return this.$http.post("/webapi/addresses/districts/replace", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeDistrict",
    value: function removeDistrict(id) {
      return this.$http["delete"]("/webapi/addresses/districts/" + id).then(this.handleResponse, this.handleError);
    }
  }]);
  return DistrictsRepository;
}(_baseRepository.BaseRepository);
exports.DistrictsRepository = DistrictsRepository;
var ProvincesRepository = /*#__PURE__*/function (_BaseRepository4) {
  _inherits(ProvincesRepository, _BaseRepository4);
  var _super4 = _createSuper(ProvincesRepository);
  function ProvincesRepository() {
    _classCallCheck(this, ProvincesRepository);
    return _super4.apply(this, arguments);
  }
  _createClass(ProvincesRepository, [{
    key: "getProvinces",
    value: function getProvinces(query) {
      return this.$http.get("/webapi/addresses/provinces", {
        params: query
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createProvince",
    value: function createProvince(command) {
      return this.$http.post("/webapi/addresses/provinces", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editProvince",
    value: function editProvince(command) {
      return this.$http.put("/webapi/addresses/provinces", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "replaceProvince",
    value: function replaceProvince(command) {
      return this.$http.post("/webapi/addresses/provinces/replace", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeProvince",
    value: function removeProvince(id) {
      return this.$http["delete"]("/webapi/addresses/provinces/" + id).then(this.handleResponse, this.handleError);
    }
  }]);
  return ProvincesRepository;
}(_baseRepository.BaseRepository);
exports.ProvincesRepository = ProvincesRepository;
var StatesRepository = /*#__PURE__*/function (_BaseRepository5) {
  _inherits(StatesRepository, _BaseRepository5);
  var _super5 = _createSuper(StatesRepository);
  function StatesRepository() {
    _classCallCheck(this, StatesRepository);
    return _super5.apply(this, arguments);
  }
  _createClass(StatesRepository, [{
    key: "getStates",
    value: function getStates(query) {
      return this.$http.get("/webapi/addresses/states", {
        params: query
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createState",
    value: function createState(command) {
      return this.$http.post("/webapi/addresses/states", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editState",
    value: function editState(command) {
      return this.$http.put("/webapi/addresses/states", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "replaceState",
    value: function replaceState(command) {
      return this.$http.post("/webapi/addresses/states/replace", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeState",
    value: function removeState(id) {
      return this.$http["delete"]("/webapi/addresses/states/" + id).then(this.handleResponse, this.handleError);
    }
  }]);
  return StatesRepository;
}(_baseRepository.BaseRepository);
exports.StatesRepository = StatesRepository;
var CountriesRepository = /*#__PURE__*/function (_BaseRepository6) {
  _inherits(CountriesRepository, _BaseRepository6);
  var _super6 = _createSuper(CountriesRepository);
  function CountriesRepository() {
    _classCallCheck(this, CountriesRepository);
    return _super6.apply(this, arguments);
  }
  _createClass(CountriesRepository, [{
    key: "getCountries",
    value: function getCountries() {
      return this.$http.get("/webapi/addresses/countries").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createCountry",
    value: function createCountry(command) {
      return this.$http.post("/webapi/addresses/countries", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editCountry",
    value: function editCountry(command) {
      return this.$http.put("/webapi/addresses/countries", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "replaceCountry",
    value: function replaceCountry(command) {
      return this.$http.post("/webapi/addresses/countries/replace", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeCountry",
    value: function removeCountry(id) {
      return this.$http["delete"]("/webapi/addresses/countries/" + id).then(this.handleResponse, this.handleError);
    }
  }]);
  return CountriesRepository;
}(_baseRepository.BaseRepository);
exports.CountriesRepository = CountriesRepository;
var LocationsRepository = /*#__PURE__*/function (_BaseRepository7) {
  _inherits(LocationsRepository, _BaseRepository7);
  var _super7 = _createSuper(LocationsRepository);
  function LocationsRepository() {
    _classCallCheck(this, LocationsRepository);
    return _super7.apply(this, arguments);
  }
  _createClass(LocationsRepository, [{
    key: "getLocations",
    value: function getLocations(query) {
      return this.$http.get("/webapi/addresses/locations", {
        params: query
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createLocation",
    value: function createLocation(command) {
      return this.$http.post("/webapi/addresses/locations", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editLocation",
    value: function editLocation(command) {
      return this.$http.put("/webapi/addresses/locations", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "replaceLocation",
    value: function replaceLocation(command) {
      return this.$http.post("/webapi/addresses/locations/replace", command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeLocation",
    value: function removeLocation(id) {
      return this.$http["delete"]("/webapi/addresses/locations/" + id).then(this.handleResponse, this.handleError);
    }
  }]);
  return LocationsRepository;
}(_baseRepository.BaseRepository);
exports.LocationsRepository = LocationsRepository;
var ExternalAddressesRepository = /*#__PURE__*/function (_BaseRepository8) {
  _inherits(ExternalAddressesRepository, _BaseRepository8);
  var _super8 = _createSuper(ExternalAddressesRepository);
  function ExternalAddressesRepository() {
    _classCallCheck(this, ExternalAddressesRepository);
    return _super8.apply(this, arguments);
  }
  _createClass(ExternalAddressesRepository, [{
    key: "getProviders",
    value: function getProviders() {
      return this.$http.get("/webapi/addresses/external/providers").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStates",
    value: function getStates(provider, notExists) {
      return this.$http.get("/webapi/addresses/external/".concat(provider, "/states"), {
        params: {
          notExists: notExists
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getMunicipalities",
    value: function getMunicipalities(provider, stateId, notExists) {
      return this.$http.get("/webapi/addresses/external/".concat(provider, "/municipalities"), {
        params: {
          stateId: stateId,
          notExists: notExists
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProvinces",
    value: function getProvinces(provider, stateId, notExists) {
      return this.$http.get("/webapi/addresses/external/".concat(provider, "/provinces"), {
        params: {
          stateId: stateId,
          notExists: notExists
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCities",
    value: function getCities(provider, stateId, municipalityId, notExists) {
      return this.$http.get("/webapi/addresses/external/".concat(provider, "/cities"), {
        params: {
          stateId: stateId,
          municipalityId: municipalityId,
          notExists: notExists
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getLocations",
    value: function getLocations(provider, cityId, notExists) {
      return this.$http.get("/webapi/addresses/external/".concat(provider, "/locations"), {
        params: {
          cityId: cityId,
          notExists: notExists
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "importStates",
    value: function importStates(provider, records) {
      return this.$http.put("/webapi/addresses/external/".concat(provider, "/states/import"), {
        records: records
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "importMunicipalities",
    value: function importMunicipalities(provider, stateId, records) {
      return this.$http.put("/webapi/addresses/external/".concat(provider, "/municipalities/import"), {
        records: records
      }, {
        params: {
          stateId: stateId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "importProvinces",
    value: function importProvinces(provider, stateId, records) {
      return this.$http.put("/webapi/addresses/external/".concat(provider, "/provinces/import"), {
        records: records
      }, {
        params: {
          stateId: stateId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "importCities",
    value: function importCities(provider, stateId, municipalityId, records) {
      return this.$http.put("/webapi/addresses/external/".concat(provider, "/cities/import"), {
        records: records
      }, {
        params: {
          stateId: stateId,
          municipalityId: municipalityId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "importLocations",
    value: function importLocations(provider, cityId, records) {
      return this.$http.put("/webapi/addresses/external/".concat(provider, "/locations/import"), {
        records: records
      }, {
        params: {
          cityId: cityId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return ExternalAddressesRepository;
}(_baseRepository.BaseRepository);
exports.ExternalAddressesRepository = ExternalAddressesRepository;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(22);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CommonXhrErrorHandler = /*#__PURE__*/function () {
  function CommonXhrErrorHandler(errorInformer, messageInformer, appContextAccessor, language) {
    _classCallCheck(this, CommonXhrErrorHandler);
    this.errorInformer = errorInformer;
    this.messageInformer = messageInformer;
    this.appContextAccessor = appContextAccessor;
    this.language = language;
    this.errorInformer = errorInformer || $.show.error;
    this.messageInformer = messageInformer || $.show.message;
    this.appContextAccessor = appContextAccessor || function () {
      return window.appContext;
    };
    this.language = language || window.language;
  }
  _createClass(CommonXhrErrorHandler, [{
    key: "getErrorResponseMessage",
    value: function getErrorResponseMessage(response) {
      var _a;
      if (response.status === 401) {
        var authError = response.headers("auth-error");
        if (authError === "SessionExpired") {
          return this.language.Generic.Common.kTimeOutOccured4Ajax;
        } else {
          return this.language.Generic.Common.kErrPageAccess;
        }
      }
      if (response.status === 503) {
        return response.statusText;
      }
      if (response.status === 404 && response.config) {
        var errMessage = response.statusText + " " + response.config.url;
        return errMessage;
      }
      var message = response.data && (response.data.message || response.data.details);
      var details = response.data && response.data.details;
      var stackTrace = response.data && response.data.stackTrace;
      if (response.data && response.data.isInformation) {
        return message;
      }
      var displayMsg = message;
      var environment = (_a = this.appContextAccessor()) === null || _a === void 0 ? void 0 : _a.environment;
      if (environment != "prod" && (details || stackTrace)) {
        var debugPanel = "<div class='debug-panel'>";
        if (details) {
          debugPanel += "<p class='title'>Details:</span><div>" + details + "</div>";
        }
        if (stackTrace) {
          debugPanel += "<p class='title'>StackTrace:</span><div class='stack'>" + stackTrace + "</div>";
        }
        displayMsg += debugPanel + "</div>";
      }
      return displayMsg || this.language.Generic.Common.kUnexpErr;
    }
  }, {
    key: "handleErrorResponse",
    value: function handleErrorResponse(response) {
      var _a;
      $(document).trigger("closeProcessing");
      if (response.status === 401) {
        var authError = response.headers("auth-error");
        if (authError === "SessionExpired") {
          this.messageInformer(this.language.Generic.Common.kTimeOutOccured4Ajax).then(function () {
            return (0, _common.postTo)({
              path: "/",
              method: "GET"
            });
          });
        } else {
          this.messageInformer(this.language.Generic.Common.kErrPageAccess);
        }
        return Promise.reject(response);
      }
      if (response.status === 503) {
        this.errorInformer(response.statusText);
        return Promise.reject(response);
      }
      if (response.status === 404 && response.config) {
        var errMessage = response.statusText + " " + response.config.url;
        this.errorInformer(errMessage);
        return Promise.reject(response);
      }
      var message = response.data && (response.data.message || response.data.details);
      var details = response.data && response.data.details;
      var stackTrace = response.data && response.data.stackTrace;
      if (response.data && response.data.isInformation) {
        this.messageInformer(message);
        return Promise.reject(response);
      }
      var displayMsg = message;
      var environment = (_a = this.appContextAccessor()) === null || _a === void 0 ? void 0 : _a.environment;
      if (environment != "prod" && (details || stackTrace)) {
        var debugPanel = "<div class='debug-panel'>";
        if (details) {
          debugPanel += "<p class='title'>Details:</span><div>" + details + "</div>";
        }
        if (stackTrace) {
          debugPanel += "<p class='title'>StackTrace:</span><div class='stack'>" + stackTrace + "</div>";
        }
        displayMsg += debugPanel + "</div>";
      }
      this.errorInformer(displayMsg || this.language.Generic.Common.kUnexpErr);
      return Promise.reject(response);
    }
  }]);
  return CommonXhrErrorHandler;
}();
exports.CommonXhrErrorHandler = CommonXhrErrorHandler;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(23);
var postTo = function postTo(path, params, formParams, auth) {
  var _a;
  var parameters;
  var defparams = {
    path: '',
    method: "POST",
    params: void 0,
    formParams: void 0,
    auth: true,
    nocache: true
  };
  if (typeof path === 'string') {
    parameters = defparams;
    if (path) {
      parameters.path = path;
    }
    if (params) {
      parameters.params = params;
    }
    if (formParams) {
      parameters.formParams = formParams;
    }
    if (auth === false) {
      parameters.auth = false;
    }
  } else {
    parameters = $.extend({}, defparams, path);
  }
  var createHiddenField = function createHiddenField(form, key, value) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", value);
    return form.appendChild(hiddenField);
  };
  var form = document.createElement("form");
  form.setAttribute("method", parameters.method);
  form.setAttribute("action", parameters.path);
  if (parameters.formParams !== "undefined") {
    for (var key in parameters.formParams) {
      form.setAttribute(key, parameters.formParams[key]);
    }
  }
  var at = typeof appContext != "undefined" && appContext.at || window.strATTok;
  parameters.auth = parameters.auth && at;
  if (parameters.auth) {
    createHiddenField(form, 'at', at);
  }
  var vers = null;
  if (parameters.nocache && typeof window.getVer == "function") {
    vers = (_a = window.getVer()) === null || _a === void 0 ? void 0 : _a.toString();
    createHiddenField(form, 'VER', vers);
  }
  if (parameters.formParams && parameters.formParams.download) {
    var fileDownloadCheckTimer = null;
    var finishDownload = function finishDownload() {
      window.clearInterval(fileDownloadCheckTimer);
      $.cookie('fileDownloadToken', null);
      return $(document).trigger('closeProcessing');
    };
    var checkFunc = function checkFunc() {
      var cookieVal = $.cookie('fileDownloadToken');
      if (cookieVal !== vers) {
        return;
      }
      return finishDownload();
    };
    fileDownloadCheckTimer = window.setInterval(checkFunc, 1000);
    $(document).trigger('showProcessing');
  }
  _urlHelper.UrlHelperInstance.iterateParams(parameters.params, function (name, value) {
    if (parameters.auth && name === 'AT') {
      return;
    }
    createHiddenField(form, name, value);
  });
  document.body.appendChild(form);
  window.isHaveToLogout = false;
  return form.submit();
};
exports.postTo = postTo;
var saveFormPosition = function saveFormPosition(key, path) {
  var arrPanels = [];
  $.each($('[data-toggle="collapse"]'), function (index, value) {
    var $value = $(value);
    var panelId = $value.attr('data-target');
    var isPanelExpanded = $value.attr('aria-expanded');
    arrPanels[index] = {
      "id": panelId,
      "isExpanded": isPanelExpanded
    };
  });
  var position = $(window).scrollTop();
  var data = {
    "position": position,
    "panels": arrPanels
  };
  var date = new Date();
  var minutes = 30;
  date.setTime(date.getTime() + minutes * 60 * 1000);
  var params = {
    expires: date
  };
  if (path) {
    params = $.extend(params, {
      path: path
    });
  }
  $.cookie(key, JSON.stringify(data), params);
};
exports.saveFormPosition = saveFormPosition;
var restoreFormPosition = function restoreFormPosition(key) {
  return new Promise(function (resolve) {
    if (!$.cookie(key)) {
      resolve();
      return;
    }
    var param = JSON.parse($.cookie(key));
    var panelsStatus = param["panels"];
    panelsStatus.forEach(function (panelStatus) {
      var isExpanded = $("[data-target=\"".concat(panelStatus.id, "\"]")).attr("aria-expanded");
      if (panelStatus.isExpanded != isExpanded) {
        $(panelStatus.id).collapse("toggle");
      }
    });
    setTimeout(function () {
      resolve();
      $("html, body").animate({
        scrollTop: param["position"]
      }, 200);
    }, 1000);
    document.cookie = "".concat(key, "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;");
  });
};
exports.restoreFormPosition = restoreFormPosition;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(226);


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _selectOrgs = __webpack_require__(227);
var _doupay = __webpack_require__(230);
var _repositories = __webpack_require__(26);
var _orginfo = __webpack_require__(189);
var _addresses = __webpack_require__(208);
var _schools = __webpack_require__(19);
var _founders = __webpack_require__(231);
var _foundersRegistry = __webpack_require__(232);
var _module = angular.module("irtech.netcity.admin.founders", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "irtech.netcity.ui-components", "ui.tree"]);
_module.service("foundersRepository", _founders.FoundersRepository).service("referencesRepository", _repositories.ReferencesRepository).service("educOrganizationsRepository", _repositories.EducOrganizationsRepository).service("addressRepository", _repositories.AddressRepository).service("citiesRepository", _addresses.CitiesRepository).service("emsRepository", _schools.EmsRepository).service("douPayRepository", _doupay.DouPayRepository).service("orgInfoRepository", _orginfo.OrgInfoRepository).service("schoolsRepository", _schools.SchoolsRepository).component(_selectOrgs.SelectOrganizationsComponent.selector, _selectOrgs.SelectOrganizationsComponent).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/", _foundersRegistry.FoundersRegistryComponent);
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOrganizationsComponent = void 0;
var FuncTypes = _interopRequireWildcard(__webpack_require__(228));
var _organizationTreeLevels = __webpack_require__(229);
var Modes = _interopRequireWildcard(__webpack_require__(167));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var groupBy = function groupBy(elements, groupPropFunc) {
  var result = {};
  var group = function group(element) {
    var key = groupPropFunc(element);
    if (_typeof(key) === 'object') {
      key = JSON.stringify(key);
    }
    if (result[key]) {
      result[key].push(element);
    } else {
      result[key] = [element];
    }
  };
  angular.forEach(elements, group);
  return result;
};
var copy = function copy(array) {
  var result = [];
  for (var i in array) {
    result.push(angular.extend({}, array[i]));
  }
  return result;
};
var isFirstInstance = function isFirstInstance(value, index, array) {
  return array.indexOf(value) === index;
};
var SelectOrganizationsController = /*#__PURE__*/function () {
  SelectOrganizationsController.$inject = ["$scope", "addressRepository", "referencesRepository", "language", "$timeout", "$q"];
  /*@ngInject*/
  function SelectOrganizationsController($scope, addressRepository, referencesRepository, language, $timeout, $q) {
    var _this = this;
    _classCallCheck(this, SelectOrganizationsController);
    this.$scope = $scope;
    this.addressRepository = addressRepository;
    this.referencesRepository = referencesRepository;
    this.language = language;
    this.$timeout = $timeout;
    this.$q = $q;
    this["default"] = [];
    this.filter = "";
    this.funcType = "";
    this.hasSelected = false;
    this.readMode = true;
    this.$scope.$watch(function () {
      return _this.filter;
    }, function () {
      return _this.updateOrganizations();
    });
    this.$scope.$watch(function () {
      return _this["default"];
    }, function () {
      return _this.updateOrganizations();
    });
    this.$scope.$watch(function () {
      return _this.settings.needUpdate;
    }, function (newVal) {
      if (newVal) {
        _this.settings.needUpdate = false;
        _this.$timeout(function () {
          try {
            _this.reloadTree();
          } finally {
            _this.settings.needUpdate = false;
          }
        }, 100);
      }
    });
    referencesRepository.getFuncTypes().then(function (funcTypes) {
      return _this.funcTypes = funcTypes;
    });
  }
  _createClass(SelectOrganizationsController, [{
    key: "updateOrganizations",
    value: function updateOrganizations() {
      this.organizations = this.checkChildrens(angular.copy(this["default"]));
    }
  }, {
    key: "filterOrgs",
    value: function filterOrgs() {
      var _this2 = this;
      var filterFunc;
      var filterFuncType = function filterFuncType(o) {
        return !_this2.funcTypeFilter || o.funcType == _this2.funcTypeFilter.id;
      };
      if (this.settings.filterFunc) {
        filterFunc = function filterFunc(o) {
          return _this2.settings.filterFunc(o) && filterFuncType(o);
        };
      } else {
        filterFunc = function filterFunc(o) {
          return filterFuncType(o);
        };
      }
      this.filteredOrganizationsWithInfo = this.organizationsWithInfo.filter(filterFunc);
    }
  }, {
    key: "getSelectedBranches",
    value: function getSelectedBranches(selectedNodes) {
      var result = [];
      var selectedIds = selectedNodes.map(function (o) {
        return o.id;
      });
      var checkNode = function checkNode(node) {
        // Проверяем выбран ли листок
        if (!node.children) {
          return selectedIds.indexOf(node.id) != -1;
        }
        if (_.all(node.children, checkNode)) {
          result.push(node);
          return true;
        }
        return false;
      };
      this["default"].map(checkNode);
      return result;
    }
  }, {
    key: "reloadTree",
    value: function reloadTree() {
      var treeInfo = this.getTree();
      this["default"] = copy(treeInfo);
      var tree = $("#tree");
      // сбрасывает все выбранные
      tree.dynatree("getRoot").visit(function (node) {
        return node.select(false);
      });
      // перезагружает дерево
      tree.dynatree(this["default"]);
      tree.dynatree("getTree").reload();
      // выбранные элементы синхронизируются с данными сервиса
      var selected = tree.dynatree("getSelectedNodes").map(function (x) {
        return x.data;
      });
      this.onUpdate({
        selected: selected
      });
    }
    // Функция передачи выбранных на уровень выше
  }, {
    key: "internalOnUpdate",
    value: function internalOnUpdate(selected) {
      // Подготовить информацию о полностью выбранных ветках
      var prepareBranch = function prepareBranch(branch) {
        var branchElement = branch.own[0];
        var result = {};
        if (branch.level <= _organizationTreeLevels.Levels.functype) result[_organizationTreeLevels.LevelType.functype] = {
          id: branchElement.funcTypeLevel.id,
          name: branchElement.funcTypeLevel.name
        };
        if (branch.level <= _organizationTreeLevels.Levels.city) result[_organizationTreeLevels.LevelType.city] = {
          id: branchElement.cityLevel.id,
          name: branchElement.cityLevel.name
        };
        if (branch.level <= _organizationTreeLevels.Levels.province && branchElement.provinceLevel) result[_organizationTreeLevels.LevelType.province] = {
          id: branchElement.provinceLevel.id,
          name: branchElement.provinceLevel.name
        };
        if (branch.level <= _organizationTreeLevels.Levels.municipalityDistrict) result[_organizationTreeLevels.LevelType.municipalityDistrict] = {
          id: branchElement.munDistrictLevel.id,
          name: branchElement.munDistrictLevel.name
        };
        return result;
      };
      var result = {
        selectedIds: selected.nodes.map(function (node) {
          return node.id;
        }),
        selectedOrgs: selected.nodes.map(function (node) {
          return node.own[0];
        }),
        selectedLevels: this.getSelectedBranches(selected.nodes).map(prepareBranch)
      };
      this.hasSelected = result.selectedIds.length > 0;
      // Передать результат верхнему контроллеру
      this.onUpdate({
        selected: result
      });
    }
    // Настройки
  }, {
    key: "getCompareFunction",
    value: function getCompareFunction() {
      var order = this.settings.order;
      // Если сортировка не указана, то неменяем порядок
      if (!order) return function () {
        return 0;
      };
      switch (_typeof(order)) {
        // Если задана сортировка, то исползуем её
        case 'function':
          return order;
        // Если указан уровень который должен быть вверху, то формируем функцию
        case 'number':
          return function (a, b) {
            if (a == b) return 0;
            if (a == order) return -1;
            if (b == order) {
              return 1;
            }
            return 0;
          };
        // По умолчанию не меняем порядок
        default:
          return function () {
            return 0;
          };
      }
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this3 = this;
      this.readMode = !this.settings.editMode && this.settings.readMode;
      this.hasSelected = this.selected.selectedIds.length > 0;
      this.schoolsIds = this.selected.selectedIds.filter(function (o) {
        return !!o;
      });
      var idFilter = function idFilter(o) {
        return true;
      };
      var editMode = this.settings.editMode;
      if (!editMode) {
        //загружаем информацию только по выбранным организациям
        idFilter = function idFilter(o) {
          return _this3.schoolsIds.indexOf(o.id) > -1;
        };
      }
      this.treeSettings = {
        mode: (this.settings.multiMode ? Modes.multi : Modes.single) | (this.settings.editMode ? Modes.edit : Modes.read),
        selected: null
      };
      var group = function group(elements) {
        var result = {};
        var group = function group(element) {
          var key = element.id;
          result[key] = {
            id: element.id,
            name: element.name,
            typeName: element === null || element === void 0 ? void 0 : element.atoTypeName
          };
        };
        angular.forEach(elements, group);
        return result;
      };
      var filteredOrgs = this.inputOrganizations.filter(idFilter);
      var provincesIds = filteredOrgs.map(function (o) {
        return o.provinceId;
      }).filter(isFirstInstance).filter(function (o) {
        return o;
      });
      var provinces;
      var provincePromise;
      if (provincesIds.length) {
        provincePromise = this.addressRepository.getProvinces(provincesIds).then(function (result) {
          return provinces = group(result);
        });
      } else {
        provincePromise = Promise.resolve({});
      }
      var districtsIds = filteredOrgs.map(function (o) {
        return o.municipalityDistrictId;
      }).filter(isFirstInstance).filter(function (o) {
        return o;
      });
      var districts;
      var districtPromise;
      if (districtsIds.length) {
        districtPromise = this.addressRepository.getCityDistricts(-1).then(function (result) {
          return districts = group(result);
        });
      } else {
        districtPromise = Promise.resolve({});
      }
      var citiesIds = filteredOrgs.map(function (o) {
        return o.cityId;
      }).filter(isFirstInstance);
      var parentsCitiesId = filteredOrgs.map(function (o) {
        return o.parentCityId;
      }).filter(isFirstInstance);
      var allCitiesIds = [].concat(_toConsumableArray(citiesIds), _toConsumableArray(parentsCitiesId));
      var cities;
      var cityPromise;
      if (allCitiesIds.length) {
        cityPromise = this.addressRepository.getCities(allCitiesIds).then(function (result) {
          return cities = group(result);
        });
      } else {
        cityPromise = Promise.resolve({});
      }
      var funcTypesPromise = this.referencesRepository.getFuncTypes().then(function (funcTypes) {
        var _a;
        _this3.funcTypes = funcTypes;
        if ((_a = _this3.settings.enabledFuncTypes) === null || _a === void 0 ? void 0 : _a.length) {
          _this3.funcTypes = _this3.funcTypes.filter(function (x) {
            return _this3.settings.enabledFuncTypes.some(function (y) {
              return y == x.id;
            });
          });
        }
      });
      this.$q.all([provincePromise, cityPromise, districtPromise, funcTypesPromise]).then(function () {
        return {
          provinces: provinces,
          cities: cities,
          districts: districts,
          filteredOrgs: filteredOrgs
        };
      })
      // Дополнение информацией о ветках
      .then(function (data) {
        _this3.organizationsWithInfo = data.filteredOrgs;
        var cities = data.cities;
        var provinces = data.provinces;
        // Дополняем модель названиями
        angular.forEach(_this3.organizationsWithInfo, function (organization) {
          var orgLevelInfo = organization;
          try {
            orgLevelInfo.funcTypeLevel = {
              id: organization.funcType,
              name: "".concat(_this3.language.Generic.Common.kEOType, " ").concat(FuncTypes.locale[organization.funcType]),
              type: _organizationTreeLevels.LevelType.functype
            };
            orgLevelInfo.cityLevel = {
              id: organization.cityId,
              name: "".concat(cities[organization.cityId].typeName || _this3.language.Generic.Common.kCity, " ").concat(cities[organization.cityId].name),
              type: _organizationTreeLevels.LevelType.city
            };
            orgLevelInfo.cityDistrictLevel = {
              id: organization.cityDistrictId,
              name: organization.cityDistrictId ? "".concat(districts[organization.cityDistrictId].typeName || _this3.language.Generic.Common.kDistrict, " ").concat(districts[organization.cityDistrictId].name) : "",
              type: _organizationTreeLevels.LevelType.cityDistrict
            };
            if (organization.provinceId && organization.parentCityId) {
              console.error('conflict: province - parent city', organization);
            }
            orgLevelInfo.munDistrictLevel = {
              id: organization.municipalityDistrictId,
              name: "",
              type: _organizationTreeLevels.LevelType.municipalityDistrict
            };
            if (organization.provinceId) {
              orgLevelInfo.provinceLevel = {
                id: organization.provinceId,
                name: "".concat(_this3.language.Generic.Common.kProvince, " ").concat(provinces[organization.provinceId].name),
                type: _organizationTreeLevels.LevelType.province
              };
              orgLevelInfo.munDistrictLevel.name = "".concat(_this3.language.Generic.Common.kProvince, " ").concat(provinces[organization.provinceId].name);
            } else {
              var municipalityCity = cities[organization.parentCityId || organization.cityId];
              // orgLevelInfo.provinceLevel = {
              // 	id: -municipalityCity.id, // Городской округ
              // 	name: `${this.language.Generic.Common.kCityMunicipalityDistrict} ${municipalityCity.name}`,
              // 	type: LevelType.city
              // };
              // Если можно в одиной ветке совместить тип образовательной организации и населённый пункт, то раскоментировать
              //organization.cityLevel = null;
              orgLevelInfo.munDistrictLevel.name = "".concat(_this3.language.Generic.Common.kCityMunicipalityDistrict, " ").concat(municipalityCity.name);
            }
            orgLevelInfo.type = _organizationTreeLevels.LevelType.educOrganization;
          } catch (ex) {
            console.error(ex.name + ": " + ex.message);
          } finally {}
        });
        return _this3.getTree();
      })
      // Инициазлизация дерева
      .then(function (organizationsTree) {
        _this3["default"] = copy(organizationsTree);
      });
    }
  }, {
    key: "getTree",
    value: function getTree() {
      var _a;
      var compareFunction = this.getCompareFunction();
      var orderFunction = function orderFunction(a, b) {
        return compareFunction(a.level, b.level);
      };
      var treePropGetters = [];
      if ((_a = this.settings.propGetters) === null || _a === void 0 ? void 0 : _a.length) {
        treePropGetters = _toConsumableArray(this.settings.propGetters);
      } else {
        treePropGetters = [
        // сортировка дерева
        //prop -- получение информации о ветке
        //level -- уровень
        {
          prop: function prop(o) {
            return o.munDistrictLevel;
          },
          level: _organizationTreeLevels.Levels.municipalityDistrict,
          expand: true
        }, {
          prop: function prop(o) {
            return o.cityLevel;
          },
          level: _organizationTreeLevels.Levels.city,
          expand: true
        }, {
          prop: function prop(o) {
            return o.funcTypeLevel;
          },
          level: _organizationTreeLevels.Levels.functype,
          expand: false
        }, {
          prop: function prop(o) {
            return o.name;
          },
          level: _organizationTreeLevels.Levels.educOrganization
        }];
      }
      // Глубина раскрытия списка организаций
      // const maxExpandDepth = 3;
      // for (let index in treePropGetters) {
      // 	let getterObject: PropGetter = treePropGetters[index];
      // 	if (getterObject) {
      // 		getterObject.expand = parseInt(index) < maxExpandDepth
      // 	}
      // }
      // Преобразование в дерево
      this.filterOrgs();
      var organizationsList = this.mapBranch(this.filteredOrganizationsWithInfo, treePropGetters.sort(function (a, b) {
        return a.level - b.level;
      }));
      return organizationsList;
    }
    // Преобразование линейного массива в ветку
  }, {
    key: "mapBranch",
    value: function mapBranch(data, branchFuncs) {
      var _this4 = this;
      var tuple = branchFuncs.pop();
      if (!tuple) {
        return [];
      }
      var func = tuple.prop;
      //console.log("mapbranch", tuple.level);
      var getSubTree = function getSubTree(treeItem, elements) {
        var _copyBranchFuncs;
        var copyBranchFuncs = [];
        (_copyBranchFuncs = copyBranchFuncs).push.apply(_copyBranchFuncs, _toConsumableArray(branchFuncs));
        if (_this4.funcTypeFilter && copyBranchFuncs.find(function (x) {
          return x.level == _organizationTreeLevels.Levels.functype;
        })) {
          // убираем из дерева уровень "Тип ОО" при выбранном фильтре
          copyBranchFuncs = copyBranchFuncs.filter(function (x) {
            return x.level != _organizationTreeLevels.Levels.functype;
          });
        }
        if (tuple.level == _organizationTreeLevels.Levels.municipalityDistrict && treeItem.id > 0) {
          //для муниципальных районов убираем из дерева уровень "населенный пункт"
          var removedLevel = copyBranchFuncs.pop();
          elements.forEach(function (o) {
            var cityLevelInfo = removedLevel.prop(o);
            o.name = o.name + " (" + cityLevelInfo.name + ")";
          });
        }
        return _this4.mapBranch(elements, copyBranchFuncs.sort(function (a, b) {
          return a.level - b.level;
        }));
      };
      var getBranch = function getBranch(elements, keyString) {
        var isOrganization = tuple.level === _organizationTreeLevels.Levels.educOrganization;
        var key = isOrganization ? elements[0] : keyString == "undefined" ? {
          id: "-1",
          name: "",
          type: ""
        } : JSON.parse(keyString);
        var isHideTreeNodeCheckBox = false;
        var name = key.name;
        var tooltip = "";
        if (isOrganization) {
          isHideTreeNodeCheckBox = _this4.settings.renderService ? _this4.settings.renderService.isHideTreeNodeCheckbox(key.id) : false;
          name = _this4.settings.renderService ? _this4.settings.renderService.getTreeNodeName(key.id, key.name) : key.name;
          tooltip = _this4.settings.renderService ? _this4.settings.renderService.getTreeNodeTooltip(key.id) : "";
        }
        ;
        var result = {
          id: key.id,
          title: name,
          isFolder: !!branchFuncs.length,
          level: tuple.level,
          expand: tuple.expand,
          own: elements,
          key: "".concat(tuple.level, "-").concat(key.type, "-").concat(key.id),
          select: false,
          hideCheckbox: isHideTreeNodeCheckBox,
          unselectable: isHideTreeNodeCheckBox,
          tooltip: tooltip
        };
        if (result.isFolder) {
          result.children = getSubTree(result, elements);
        } else {
          result.select = _this4.schoolsIds.indexOf(result.id) >= 0;
        }
        return result;
      };
      var getBranchs = function getBranchs(group) {
        var result = [];
        for (var key in group) {
          var organizations = group[key];
          var _branch = getBranch(organizations, key);
          result.push(_branch);
        }
        return result;
      };
      var group = groupBy(data, func);
      var mainGroup = {};
      var nullGroup;
      for (var key in group) {
        if (key == 'null') {
          nullGroup = group[key];
        } else {
          mainGroup[key] = group[key];
          ;
        }
      }
      var branch;
      if (nullGroup) {
        branch = [].concat(_toConsumableArray(getBranchs(mainGroup)), _toConsumableArray(getSubTree(null, nullGroup)));
      } else {
        branch = getBranchs(mainGroup);
      }
      //console.log("mapbranch result", tuple.level, branch);
      return branch;
    }
    // Фильтрация
  }, {
    key: "filterFunc",
    value: function filterFunc(value, filterValues) {
      var result = true;
      filterValues.forEach(function (filter) {
        return result = result && value.indexOf(filter) >= 0;
      });
      return result;
    }
  }, {
    key: "checkChildren",
    value: function checkChildren(value) {
      if (!value) {
        return false;
      }
      if (value.isFolder) {
        value.children = this.checkChildrens(value.children);
        return value.children.length > 0;
      }
      return this.filterFunc(value.title.toLowerCase(), this.filter.toLowerCase().split(' ')); // !(value.title.indexOf($scope.filter) < 0)
    }
  }, {
    key: "checkChildrens",
    value: function checkChildrens(branch) {
      var _this5 = this;
      if (!this.filter) return branch;
      return branch.filter(function (b) {
        return _this5.checkChildren(b);
      });
    }
  }]);
  return SelectOrganizationsController;
}();
var SelectOrganizationsComponent = {
  selector: "selectOrganizations",
  templateUrl: '/static/dist/app/em/common/selectOrgs/selectOrgs.component.html',
  controller: SelectOrganizationsController,
  bindings: {
    selected: '=?',
    inputOrganizations: "=organizations",
    settings: '=',
    onUpdate: '&'
  }
};
exports.SelectOrganizationsComponent = SelectOrganizationsComponent;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.university = exports.school = exports.profSchool = exports.preSchool = exports.orphanage = exports.locale = exports.generic = exports.educMgr = exports.addSchool = void 0;
var generic = -1;
exports.generic = generic;
var educMgr = 0;
exports.educMgr = educMgr;
var preSchool = 1;
exports.preSchool = preSchool;
var school = 2;
exports.school = school;
var addSchool = 3;
exports.addSchool = addSchool;
var profSchool = 4;
exports.profSchool = profSchool;
var orphanage = 5;
exports.orphanage = orphanage;
var university = 6;
exports.university = university;
var locale = {
  "-1": "-",
  0: language.Generic.Common.kEMName,
  1: language.Generic.Common.kFuncType_PreSchool,
  2: language.Generic.Common.kFuncType_School,
  3: language.Generic.Common.kFuncType_AddSchool,
  4: language.Generic.Common.kFuncType_ProfSchool,
  5: language.Generic.Common.kFuncType_Orphanage,
  6: language.Generic.Common.kFuncType_University
};
exports.locale = locale;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.province = exports.municipalityDistrict = exports.functype = exports.educOrganization = exports.cityDistrict = exports.city = exports.Levels = exports.LevelType = void 0;
var educOrganization = 1;
exports.educOrganization = educOrganization;
var functype = 2;
exports.functype = functype;
var city = 4;
exports.city = city;
var province = 8;
exports.province = province;
var municipalityDistrict = 16;
exports.municipalityDistrict = municipalityDistrict;
var cityDistrict = 32;
exports.cityDistrict = cityDistrict;
var Levels;
exports.Levels = Levels;
(function (Levels) {
  Levels[Levels["educOrganization"] = 1] = "educOrganization";
  Levels[Levels["functype"] = 2] = "functype";
  Levels[Levels["city"] = 4] = "city";
  Levels[Levels["province"] = 8] = "province";
  Levels[Levels["municipalityDistrict"] = 16] = "municipalityDistrict";
  Levels[Levels["cityDistrict"] = 32] = "cityDistrict";
})(Levels || (exports.Levels = Levels = {}));
var LevelType;
exports.LevelType = LevelType;
(function (LevelType) {
  LevelType["educOrganization"] = "organization";
  LevelType["functype"] = "funcType";
  LevelType["city"] = "city";
  LevelType["municipalityDistrict"] = "municipalityDistrict";
  LevelType["province"] = "province";
  LevelType["cityDistrict"] = "cityDistrict";
})(LevelType || (exports.LevelType = LevelType = {}));

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlHelperInstance = exports.UrlHelper = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var url = /*#__PURE__*/function () {
  function url(address) {
    _classCallCheck(this, url);
    this._url = address;
    this._params = "";
  }
  _createClass(url, [{
    key: "url",
    value: function url() {
      return this._url;
    }
  }, {
    key: "params",
    value: function params() {
      return this._params;
    }
  }, {
    key: "addParam",
    value: function addParam(paramName, paramValue) {
      if (this._params.length !== 0) {
        this._params += "&";
      }
      this._params += encodeURIComponent(paramName) + "=" + encodeURIComponent(paramValue);
    }
  }, {
    key: "getFullUrl",
    value: function getFullUrl() {
      if (this._params.length > 0) {
        if (this._url.indexOf('?') > 0) return this._url + '&' + this._params;else return this._url + '?' + this._params;
      } else return this._url;
    }
  }]);
  return url;
}();
var UrlHelper = /*#__PURE__*/function () {
  function UrlHelper() {
    _classCallCheck(this, UrlHelper);
  }
  _createClass(UrlHelper, [{
    key: "iterateParams",
    value: function iterateParams(params, func) {
      if (typeof params === 'string') {
        var arrParamValues = params.split('&');
        var _iterator = _createForOfIteratorHelper(arrParamValues),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var keyvalue = _step.value;
            var split = keyvalue.split('=');
            func(split[0], split[1]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return;
      }
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          var item = params[key];
          if (Array.isArray(item)) {
            var _iterator2 = _createForOfIteratorHelper(item),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subItem = _step2.value;
                func(key, subItem);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else if (item && _typeof(item) === "object" && typeof item.name !== "undefined") {
            func(item.name, item.value);
          } else {
            func(key, item);
          }
        }
      }
    }
  }, {
    key: "makeUrl",
    value: function makeUrl(in_url, params, withoutObligatory) {
      var retUrl = new url(in_url);
      if (!withoutObligatory) {
        var vers = this.getVer();
        retUrl.addParam('ver', vers);
        if (typeof window.appContext !== "undefined" && window.appContext.at) {
          retUrl.addParam('at', window.appContext.at);
        } else if (typeof window.strATTok !== "undefined") {
          retUrl.addParam('at', window.strATTok);
        }
      }
      this.iterateParams(params, function (name, value) {
        return retUrl.addParam(name, value);
      });
      return retUrl.getFullUrl();
    }
  }, {
    key: "getParameterByName",
    value: function getParameterByName(name, url) {
      if (!url) {
        url = window.location.href;
      }
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      var results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      var value = results[2].replace(/\+/g, " ");
      return decodeURIComponent(value);
    }
  }, {
    key: "getParameters",
    value: function getParameters(url) {
      var startQuery = url.indexOf("?");
      if (startQuery == -1) {
        return {};
      }
      var query = url.substring(startQuery + 1);
      return query ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce(function (params, param) {
        var _param$split = param.split('='),
          _param$split2 = _slicedToArray(_param$split, 2),
          key = _param$split2[0],
          value = _param$split2[1];
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
      }, {}) : {};
    }
  }, {
    key: "getVer",
    value: function getVer() {
      var d;
      d = new Date();
      return d.getTime();
    }
  }]);
  return UrlHelper;
}();
exports.UrlHelper = UrlHelper;
var UrlHelperInstance = new UrlHelper();
exports.UrlHelperInstance = UrlHelperInstance;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DouPayRepository = void 0;
var _baseRepository = __webpack_require__(27);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DouPayRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(DouPayRepository, _BaseRepository);
  var _super = _createSuper(DouPayRepository);
  function DouPayRepository() {
    _classCallCheck(this, DouPayRepository);
    return _super.apply(this, arguments);
  }
  _createClass(DouPayRepository, [{
    key: "getEmSchools",
    value: function getEmSchools(funcType, emId, founderId, expand) {
      return this.$http.get("/webapi/em/schools", {
        params: {
          funcType: funcType,
          emId: emId,
          expand: expand,
          founderId: founderId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveSchoolCode",
    value: function saveSchoolCode(schoolId, schoolCode) {
      return this.$http.post("/webapi/em/schools/code", null, {
        params: {
          schoolId: schoolId,
          schoolCode: schoolCode
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNormDecrees",
    value: function getPayNormDecrees(emId) {
      return this.$http.get("/webapi/parentpay/paynormdecrees", {
        params: {
          emId: emId
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNormDecreeMinMaxYears",
    value: function getPayNormDecreeMinMaxYears(decreeId) {
      return this.$http.get("/webapi/parentpay/paynormdecrees/".concat(decreeId, "/years")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNormDecree",
    value: function getPayNormDecree(decreeId) {
      return this.$http.get("/webapi/parentpay/paynormdecrees/".concat(decreeId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deletePayNormDecree",
    value: function deletePayNormDecree(decreeId) {
      return this.$http["delete"]("/webapi/parentpay/paynormdecrees/".concat(decreeId)).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "deletePayNorms",
    value: function deletePayNorms(ids) {
      return this.$http["delete"]("/webapi/parentpay/paynorms", {
        params: {
          ids: ids
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "savePayNormDecree",
    value: function savePayNormDecree(payNormDecree) {
      return this.$http.post("/webapi/parentpay/paynormdecrees", payNormDecree).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getPayNorms",
    value: function getPayNorms(decreeId) {
      return this.$http.get("/webapi/parentpay/paynormdecrees/".concat(decreeId, "/paynorms")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveAccessMonth",
    value: function saveAccessMonth(emId, month) {
      return this.$http.post("/webapi/parentpay/accessmonth", null, {
        params: {
          emId: emId,
          month: month
        }
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return DouPayRepository;
}(_baseRepository.BaseRepository);
exports.DouPayRepository = DouPayRepository;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoundersRepository = void 0;
var _baseRepository = __webpack_require__(27);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var FoundersRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(FoundersRepository, _BaseRepository);
  var _super = _createSuper(FoundersRepository);
  function FoundersRepository() {
    _classCallCheck(this, FoundersRepository);
    return _super.apply(this, arguments);
  }
  _createClass(FoundersRepository, [{
    key: "createFounder",
    value: function createFounder(dto) {
      return this.$http.put("/webapi/founders/", dto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "editFounder",
    value: function editFounder(dto) {
      return this.$http.post("/webapi/founders/", dto).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "removeFounder",
    value: function removeFounder(id) {
      return this.$http["delete"]("/webapi/founders/" + id).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getFounder",
    value: function getFounder(id) {
      return this.$http.get("/webapi/founders/" + id).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return FoundersRepository;
}(_baseRepository.BaseRepository);
exports.FoundersRepository = FoundersRepository;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoundersRegistryComponent = void 0;
var _adminList = __webpack_require__(12);
var _registry = __webpack_require__(3);
var _nsModal = __webpack_require__(6);
var _editFounder = __webpack_require__(233);
var _founders = __webpack_require__(237);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FoundersRegistryController = /*#__PURE__*/function () {
  FoundersRegistryController.$inject = ["pageContext", "referencesRepository", "$uibModal", "$appLoader", "language", "$dialogs", "$alerts", "$longWork", "emsRepository", "foundersRepository", "settingsProvider"];
  /*@ngInject*/
  function FoundersRegistryController(pageContext, referencesRepository, $uibModal, $appLoader, language, $dialogs, $alerts, $longWork, emsRepository, foundersRepository, settingsProvider) {
    var _this = this;
    _classCallCheck(this, FoundersRegistryController);
    this.$uibModal = $uibModal;
    this.$appLoader = $appLoader;
    this.language = language;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.emsRepository = emsRepository;
    this.foundersRepository = foundersRepository;
    this.settingsProvider = settingsProvider;
    pageContext.title = this.language.Generic.ServAdmin.kFounders;
    pageContext.parent = null;
    var prepareFounderTypes = referencesRepository.getFounderTypes().then(function (types) {
      return _this.founderTypes = types;
    });
    var prepareFounderKinds = referencesRepository.getFounderKinds().then(function (types) {
      return _this.founderKinds = types;
    });
    var prepareAuthorityTypes = referencesRepository.getAuthorityTypes().then(function (types) {
      return _this.authorityTypes = types;
    });
    var prepareHierarchyLevels = referencesRepository.getHierarchyLevels().then(function (levels) {
      return _this.hierarchyLevels = levels;
    });
    var prepareFounders = emsRepository.getFounders().then(function (founders) {
      return _this.founders = founders;
    });
    var prepareModuleNationOlympiad = this.settingsProvider.ServerSettings.SystemSettings.ModuleNationOlympiad().then(function (val) {
      return _this.moduleNationOlympiad = val;
    });
    var prepareEnableCertificatesDo = this.settingsProvider.ServerSettings.SystemSettings.EnableCertificatesDo().then(function (val) {
      return _this.enableCertificatesDo = val;
    });
    this.prepareRefs = Promise.all([prepareAuthorityTypes, prepareFounderKinds, prepareFounderTypes, prepareHierarchyLevels, prepareFounders, prepareModuleNationOlympiad, prepareEnableCertificatesDo]);
    this.registryInfo = this.initRegistry();
  }
  _createClass(FoundersRegistryController, [{
    key: "initRegistry",
    value: function initRegistry() {
      var _this2 = this;
      var registry = {
        url: "/webapi/admin/founders/registry",
        filtersUrl: "/webapi/admin/founders/registry/filter"
      };
      var addButton = {
        title: this.language.Generic.Buttons.kAdd,
        icon: "glyphicon glyphicon-plus-sign",
        action: function action() {
          return _this2.add();
        },
        isEnabled: function isEnabled() {
          return !_this2.controller.state.emptyFilter;
        }
      };
      var editButton = {
        title: this.language.Generic.Buttons.kEdit,
        action: function action() {
          return _this2.edit();
        },
        icon: "glyphicon glyphicon-pencil",
        selectionMode: _registry.SelectionMode.Single
      };
      var removeButton = {
        title: this.language.Generic.Buttons.kRemove,
        icon: "glyphicon glyphicon-minus-sign",
        style: _nsModal.ButtonClass.danger,
        selectionMode: _registry.SelectionMode.Single,
        action: function action() {
          return _this2.remove();
        }
      };
      var adminButton = {
        title: this.language.Generic.ServAdmin.kTitleOptions,
        icon: "glyphicon glyphicon-wrench",
        selectionMode: _registry.SelectionMode.Single,
        action: function action() {
          return _this2.admin();
        },
        isEnabled: function isEnabled() {
          return _this2.isEnabledAdminButton();
        }
      };
      registry.buttons = [addButton, editButton, removeButton, adminButton];
      registry.fieldDecorators = {
        "founderKind": new _registry.MapDecorator(function (x) {
          var _a;
          return (_a = _this2.founderKinds.find(function (f) {
            return f.key == x;
          })) === null || _a === void 0 ? void 0 : _a.name;
        }),
        "founderType": new _registry.MapDecorator(function (x) {
          var _a;
          return (_a = _this2.founderTypes.find(function (f) {
            return f.key == x;
          })) === null || _a === void 0 ? void 0 : _a.name;
        }),
        "authorityType": new _registry.MapDecorator(function (x) {
          var _a;
          return (_a = _this2.authorityTypes.find(function (f) {
            return f.key == x;
          })) === null || _a === void 0 ? void 0 : _a.name;
        }),
        "level": new _registry.MapDecorator(function (x) {
          var _a;
          return (_a = _this2.hierarchyLevels.find(function (f) {
            return f.key == x;
          })) === null || _a === void 0 ? void 0 : _a.name;
        }),
        "isAuthority": new _registry.MapDecorator(function (x) {
          return _this2.getIsAuthorityStr(x);
        })
      };
      registry.events = {
        filterPanel: {
          ready: function ready() {
            _this2.prepareRefs.then(function () {
              return _this2.$appLoader.hide();
            });
          },
          emptyChoice: function emptyChoice() {
            _this2.$appLoader.hide();
          }
        }
      };
      return registry;
    }
  }, {
    key: "getIsAuthorityStr",
    value: function getIsAuthorityStr(isAuthority) {
      var result = isAuthority.toString() == "true" ? this.language.Generic.Common.kYes : this.language.Generic.Common.kNo;
      return result;
    }
  }, {
    key: "add",
    value: function add() {
      var _this3 = this;
      var fp = this.controller.filterInfo.filterPanel.getValue();
      var fpValues = fp.getValues();
      var dialog = this.$uibModal.open({
        controller: _editFounder.EditFounderComponent.controller,
        controllerAs: _editFounder.EditFounderComponent.controllerAs,
        templateUrl: _editFounder.EditFounderComponent.templateUrl,
        size: "lg",
        resolve: {
          founderId: function founderId() {
            return 0;
          },
          founderKinds: function founderKinds() {
            return _this3.founderKinds;
          },
          founderTypes: function founderTypes() {
            return _this3.founderTypes;
          },
          authorityTypes: function authorityTypes() {
            return _this3.authorityTypes;
          },
          hierarchyLevels: function hierarchyLevels() {
            return _this3.hierarchyLevels;
          },
          founders: function founders() {
            return _this3.founders;
          },
          stateId: function stateId() {
            return +fpValues.state;
          },
          moduleNationOlympiad: function moduleNationOlympiad() {
            return _this3.moduleNationOlympiad;
          },
          enableCertificatesDo: function enableCertificatesDo() {
            return _this3.enableCertificatesDo;
          }
        }
      });
      dialog.result.then(function (result) {
        _this3.reloadData();
      });
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this4 = this;
      var item = this.controller.selection.items[0];
      var fp = this.controller.filterInfo.filterPanel.getValue();
      var fpValues = fp.getValues();
      var dialog = this.$uibModal.open({
        controller: _editFounder.EditFounderComponent.controller,
        controllerAs: _editFounder.EditFounderComponent.controllerAs,
        templateUrl: _editFounder.EditFounderComponent.templateUrl,
        size: "lg",
        resolve: {
          founderId: function founderId() {
            return item.id;
          },
          founderKinds: function founderKinds() {
            return _this4.founderKinds;
          },
          founderTypes: function founderTypes() {
            return _this4.founderTypes;
          },
          authorityTypes: function authorityTypes() {
            return _this4.authorityTypes;
          },
          hierarchyLevels: function hierarchyLevels() {
            return _this4.hierarchyLevels;
          },
          founders: function founders() {
            return _this4.founders;
          },
          stateId: function stateId() {
            return +fpValues.state;
          },
          moduleNationOlympiad: function moduleNationOlympiad() {
            return _this4.moduleNationOlympiad;
          },
          enableCertificatesDo: function enableCertificatesDo() {
            return _this4.enableCertificatesDo;
          }
        }
      });
      dialog.result.then(function (result) {
        _this4.reloadData();
      });
    }
  }, {
    key: "reloadData",
    value: function reloadData() {
      var _this5 = this;
      if (!this.controller.state.emptyFilter) {
        this.emsRepository.getFounders().then(function (founders) {
          _this5.founders = founders;
          _this5.controller.load();
        });
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this6 = this;
      var item = this.controller.selection.items[0];
      this.$dialogs.confirmDelete("Вы действительно желаете удалить учредителя?").then(function () {
        return _this6.$longWork.execute(_this6.foundersRepository.removeFounder(+item.id)).then(function () {
          _this6.$alerts.success("Учредитель успешно удалён");
          _this6.reloadData();
        });
      });
    }
  }, {
    key: "admin",
    value: function admin() {
      var item = this.controller.selection.items[0];
      if (item && item.emId) {
        this.$uibModal.open({
          templateUrl: _adminList.AdminListComponent.templateUrl,
          controller: _adminList.AdminListComponent.controller,
          controllerAs: _adminList.AdminListComponent.controllerAs,
          resolve: {
            org: function org() {
              return {
                id: item.emId,
                isFounder: true,
                name: item.name
              };
            }
          }
        });
      }
    }
  }, {
    key: "isEnabledAdminButton",
    value: function isEnabledAdminButton() {
      var item = this.controller.selection.items[0];
      return item && item.founderType == _founders.FounderType.EducManagement;
    }
  }]);
  return FoundersRegistryController;
}();
var FoundersRegistryComponent = {
  template: "<registry info=\"$ctrl.registryInfo\" controller=\"$ctrl.controller\"></registry>",
  controller: FoundersRegistryController,
  controllerAs: "$ctrl"
};
exports.FoundersRegistryComponent = FoundersRegistryComponent;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditFounderComponent = void 0;
var _organizationTreeLevels = __webpack_require__(229);
var _netcityModalCtrl = __webpack_require__(5);
var _formValidationHelper = __webpack_require__(77);
var _nsModal = __webpack_require__(6);
var _adduser = __webpack_require__(234);
var md5r = _interopRequireWildcard(__webpack_require__(10));
var _founders = __webpack_require__(237);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var md5 = md5r["default"];
var EditFounderController = /*#__PURE__*/function (_NetCityModalControll) {
  EditFounderController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$alerts", "$q", "$longWork", "foundersRepository", "language", "douPayRepository", "educOrganizationsRepository", "citiesRepository", "orgInfoRepository", "settingsProvider", "emsRepository", "founderId", "founderKinds", "founderTypes", "authorityTypes", "hierarchyLevels", "founders", "moduleNationOlympiad", "enableCertificatesDo", "stateId"];
  _inherits(EditFounderController, _NetCityModalControll);
  var _super = _createSuper(EditFounderController);
  /*@ngInject*/
  function EditFounderController($scope, $uibModalInstance, changeTracker, $dialogs, $alerts, $q, $longWork, foundersRepository, language, douPayRepository, educOrganizationsRepository, citiesRepository, orgInfoRepository, settingsProvider, emsRepository, founderId, founderKinds, founderTypes, authorityTypes, hierarchyLevels, founders, moduleNationOlympiad, enableCertificatesDo, stateId) {
    var _this;
    _classCallCheck(this, EditFounderController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.$alerts = $alerts;
    _this.$q = $q;
    _this.$longWork = $longWork;
    _this.foundersRepository = foundersRepository;
    _this.language = language;
    _this.douPayRepository = douPayRepository;
    _this.educOrganizationsRepository = educOrganizationsRepository;
    _this.citiesRepository = citiesRepository;
    _this.orgInfoRepository = orgInfoRepository;
    _this.settingsProvider = settingsProvider;
    _this.emsRepository = emsRepository;
    _this.founderId = founderId;
    _this.founderKinds = founderKinds;
    _this.founderTypes = founderTypes;
    _this.authorityTypes = authorityTypes;
    _this.hierarchyLevels = hierarchyLevels;
    _this.founders = founders;
    _this.moduleNationOlympiad = moduleNationOlympiad;
    _this.enableCertificatesDo = enableCertificatesDo;
    _this.stateId = stateId;
    _this.buttons = [];
    _this.hasSelected = false;
    _this.passwordConfirm = null;
    _this.ready = false;
    _this.founder = null;
    _this.notOwnSchools = [];
    _this.helper = new _formValidationHelper.FormValidationHelper(null, _this.language, null);
    _this.loginCredentials = {
      login: null,
      pass: null
    };
    _this.editMode = founderId > 0;
    _this.header = _this.editMode ? "Редактирование Учредителя" : "Добавление Учредителя";
    _this.selected = {
      selectedIds: []
    };
    _this.foundersInfo = Object.assign.apply(Object, [{}].concat(_toConsumableArray(_this.founders.map(function (item) {
      return _defineProperty({}, item.id, item.name);
    }))));
    _this.settings = {
      multiMode: true,
      editMode: true,
      updateMethod: function updateMethod(selected) {},
      renderService: _assertThisInitialized(_this)
    };
    var saveButton = {
      title: language.Generic.Buttons.kSave,
      "class": [_nsModal.ButtonClass.primary],
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this.save();
      }
    };
    var cancelButton = {
      title: language.Generic.Buttons.kCancel,
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this.close();
      }
    };
    _this.buttons.push(saveButton);
    _this.buttons.push(cancelButton);
    return _this;
  }
  _createClass(EditFounderController, [{
    key: "save",
    value: function save() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var invalidControl, work;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.form.$displayErrors = true;
              if (this.form.$valid) {
                _context.next = 5;
                break;
              }
              invalidControl = this.form.$$controls.find(function (c) {
                return c.$invalid;
              });
              if (invalidControl) {
                this.helper.focusInvalidControl(invalidControl.$$element);
              }
              return _context.abrupt("return");
            case 5:
              this.founder.schools = _toConsumableArray(new Set(this.selected.selectedIds));
              work = null;
              if (this.editMode) {
                work = this.foundersRepository.editFounder(this.founder);
              } else {
                work = this.foundersRepository.createFounder({
                  founder: this.founder,
                  loginCredentials: {
                    login: this.loginCredentials.login,
                    pass: !this.loginCredentials.pass ? null : md5(this.loginCredentials.pass)
                  }
                });
              }
              _context.next = 10;
              return this.$longWork.execute(work);
            case 10:
              this.founder = _context.sent;
              this.changeTracker.clearDataChanges();
              if (this.editMode) {
                this.$alerts.success("Информация об учредителе успешно сохранена");
              } else {
                this.$alerts.success("Учредитель успешно добавлен");
              }
              this.$uibModalInstance.close(this.founder);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "select",
    value: function select(selected) {
      // Сохраняем результат полученный из контроллера выбора организаций
      this.selected = selected;
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }, {
    key: "checkPasswordSurroundSpaces",
    value: function checkPasswordSurroundSpaces() {
      return _adduser.AddUserController.existsSurroundSpaces(this.loginCredentials.pass);
    }
  }, {
    key: "checkPasswordReliability",
    value: function checkPasswordReliability() {
      return _adduser.AddUserController.checkPasswordReliability(this.loginCredentials.login, this.loginCredentials.pass, "admin", "admin", "admin");
    }
  }, {
    key: "isShowCity",
    value: function isShowCity() {
      return this.founder.level == _founders.HierarchyLevel.DistrictCity;
    }
  }, {
    key: "isEducManagement",
    value: function isEducManagement() {
      return this.founder.founderType == _founders.FounderType.EducManagement;
    }
  }, {
    key: "isShowMunicipalityCode",
    value: function isShowMunicipalityCode() {
      var isFounderTypeEducManagement = this.founder.founderType == _founders.FounderType[_founders.FounderType.EducManagement];
      var isLevelNotMixed = this.founder.level && this.founder.level != _founders.HierarchyLevel.Mixed;
      var showCode = this.enableCertificatesDo && isFounderTypeEducManagement && isLevelNotMixed && this.isEducManagement();
      return showCode;
    }
  }, {
    key: "isExistsCertificates",
    value: function isExistsCertificates() {
      var _a;
      return (_a = this.founder) === null || _a === void 0 ? void 0 : _a.isExistsEmCertificates;
    }
  }, {
    key: "load",
    value: function load() {}
  }, {
    key: "loadPossibleParentFounders",
    value: function loadPossibleParentFounders() {
      var _this2 = this;
      if (!this.founder.level) {
        this.possibleParentFounders = [];
        return;
      }
      this.emsRepository.getPossibleParentFounders(this.founder.level, this.founder.stateId, this.founder.cityId, this.founder.id).then(function (ids) {
        _this2.possibleParentFounders = _this2.founders.filter(function (x) {
          return ids.some(function (y) {
            return y == x.id;
          }) || x.id == _this2.founder.parentFounderId;
        }).map(function (z) {
          return {
            id: z.id,
            name: z.name,
            treeLevel: z.treeLevel,
            treeOrder: z.treeOrder,
            tabs: '\t'.repeat(z.treeLevel),
            elementName: z.elementName
          };
        }).sort(function (a, b) {
          return a.treeOrder - b.treeOrder;
        });
      });
    }
  }, {
    key: "onChangeOrgs",
    value: function onChangeOrgs(selected) {
      if (selected === null || selected === void 0 ? void 0 : selected.selectedIds) {
        this.selected.selectedIds = _toConsumableArray(new Set(selected.selectedIds));
      }
    }
  }, {
    key: "onChangeData",
    value: function onChangeData() {
      var _a;
      if (this.founder.level == _founders.HierarchyLevel.DistrictCity && !this.founder.cityId && ((_a = this.cities) === null || _a === void 0 ? void 0 : _a.length)) {
        this.founder.cityId = this.cities[0].id;
      } else if (this.founder.level != _founders.HierarchyLevel.DistrictCity) {
        this.founder.cityId = null;
      }
      this.reloadTreeData();
      this.settings.needUpdate = true;
      this.loadPossibleParentFounders();
    }
  }, {
    key: "isHideTreeNodeCheckbox",
    value: function isHideTreeNodeCheckbox(id) {
      var _a;
      return (_a = this.notOwnSchools) === null || _a === void 0 ? void 0 : _a.some(function (x) {
        return x.id == id;
      });
    }
  }, {
    key: "reloadTreeData",
    value: function reloadTreeData() {
      this.settings.propGetters = _toConsumableArray(this.getPropGetters());
      this.settings.filterFunc = this.getFilterFunc();
      this.selected = {
        selectedIds: this.founder.schools
      };
    }
  }, {
    key: "getTreeNodeName",
    value: function getTreeNodeName(id, name) {
      var _a;
      var notOwnSchool = (_a = this.notOwnSchools) === null || _a === void 0 ? void 0 : _a.find(function (x) {
        return x.id == id;
      });
      return notOwnSchool ? name + " <b>(\u0423\u041E: ".concat(this.emInfo[notOwnSchool.ownEmId], ")</b>") : name;
    }
  }, {
    key: "getTreeNodeTooltip",
    value: function getTreeNodeTooltip(id) {
      return this.isHideTreeNodeCheckbox(id) ? "используется другим" : "";
    }
  }, {
    key: "getFilterFunc",
    value: function getFilterFunc() {
      var _this3 = this;
      var filterFunc = function filterFunc(o) {
        return true;
      };
      switch (this.founder.level) {
        case _founders.HierarchyLevel.City:
          filterFunc = function filterFunc(o) {
            return !o.provinceId;
          };
          break;
        case _founders.HierarchyLevel.Mixed:
          filterFunc = function filterFunc(o) {
            return true;
          };
          break;
        case _founders.HierarchyLevel.DistrictCity:
          filterFunc = function filterFunc(o) {
            return o.cityDistrictId && (_this3.founder.cityId ? o.cityId == _this3.founder.cityId : true);
          };
          break;
        case _founders.HierarchyLevel.Province:
          filterFunc = function filterFunc(o) {
            return !!o.provinceId;
          };
          break;
        default:
          filterFunc = function filterFunc(o) {
            return true;
          };
          break;
      }
      return filterFunc;
    }
  }, {
    key: "getPropGetters",
    value: function getPropGetters() {
      var _a;
      var propGetters = [];
      switch ((_a = this.founder) === null || _a === void 0 ? void 0 : _a.level) {
        case _founders.HierarchyLevel.City:
          propGetters = [{
            prop: function prop(o) {
              return o.munDistrictLevel;
            },
            level: _organizationTreeLevels.Levels.municipalityDistrict,
            expand: false
          }, {
            prop: function prop(o) {
              return o.cityLevel;
            },
            level: _organizationTreeLevels.Levels.city,
            expand: false
          }, {
            prop: function prop(o) {
              return o.name;
            },
            level: _organizationTreeLevels.Levels.educOrganization
          }];
          break;
        case _founders.HierarchyLevel.Mixed:
          propGetters = [{
            prop: function prop(o) {
              return o.munDistrictLevel;
            },
            level: _organizationTreeLevels.Levels.municipalityDistrict,
            expand: false
          }, {
            prop: function prop(o) {
              return o.cityLevel;
            },
            level: _organizationTreeLevels.Levels.city,
            expand: false
          }, {
            prop: function prop(o) {
              return o.name;
            },
            level: _organizationTreeLevels.Levels.educOrganization
          }];
          break;
        case _founders.HierarchyLevel.DistrictCity:
          propGetters = [{
            prop: function prop(o) {
              return o.cityDistrictLevel;
            },
            level: _organizationTreeLevels.Levels.cityDistrict,
            expand: false
          }, {
            prop: function prop(o) {
              return o.name;
            },
            level: _organizationTreeLevels.Levels.educOrganization
          }];
          break;
        case _founders.HierarchyLevel.Province:
          propGetters = [{
            prop: function prop(o) {
              return o.provinceLevel;
            },
            level: _organizationTreeLevels.Levels.province,
            expand: false
          }, {
            prop: function prop(o) {
              return o.name;
            },
            level: _organizationTreeLevels.Levels.educOrganization
          }];
          break;
        default:
          {
            propGetters = [{
              prop: function prop(o) {
                return o.munDistrictLevel;
              },
              level: _organizationTreeLevels.Levels.municipalityDistrict,
              expand: false
            }, {
              prop: function prop(o) {
                return o.cityLevel;
              },
              level: _organizationTreeLevels.Levels.city,
              expand: false
            }, {
              prop: function prop(o) {
                return o.name;
              },
              level: _organizationTreeLevels.Levels.educOrganization
            }];
            break;
          }
      }
      return propGetters;
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this4 = this;
      var loadAllOrganizations = this.educOrganizationsRepository.getSchoolsAddressesInfo({
        stateId: this.stateId
      }).then(function (organizations) {
        _this4.organizations = organizations;
      });
      var loads = [loadAllOrganizations];
      if (!this.editMode) {
        var loadRestrictNumericPasswords = this.settingsProvider.SecuritySettings.RestrictNumericPasswords().then(function (res) {
          _this4.notDigitsOnly = res;
        });
        var loadMinLoginLength = this.settingsProvider.SecuritySettings.MinLoginLength().then(function (res) {
          _this4.minLoginLength = res;
        });
        var loadMinPasswordLength = this.settingsProvider.SecuritySettings.MinPasswordLength().then(function (res) {
          _this4.minPasswordLength = res;
        });
        var loadRegExpAlphabet = this.settingsProvider.LocalSettings.RegExpAlphabet().then(function (alphabet) {
          _this4.regExpAlphabet = alphabet;
        });
        loads.push(loadRestrictNumericPasswords, loadMinLoginLength, loadMinPasswordLength, loadRegExpAlphabet);
      }
      if (this.editMode) {
        var loadFounderInfo = this.foundersRepository.getFounder(this.founderId).then(function (founder) {
          _this4.founder = founder;
          _this4.reloadTreeData();
          _this4.loadPossibleParentFounders();
          _this4.citiesRepository.getCities([], founder.stateId).then(function (cities) {
            _this4.cities = cities;
          });
        });
        loads.push(loadFounderInfo);
        var loadSchools = this.douPayRepository.getEmSchools(null, null, this.founderId, false).then(function (schools) {
          if (!schools) {
            _this4.notOwnSchools = [];
            _this4.emInfo = {};
            return;
          }
          _this4.notOwnSchools = schools.filter(function (x) {
            return x.emId != x.ownEmId;
          });
          var ownEmIds = _toConsumableArray(new Set(_this4.notOwnSchools.map(function (x) {
            return x.ownEmId;
          })));
          if (ownEmIds === null || ownEmIds === void 0 ? void 0 : ownEmIds.length) {
            _this4.orgInfoRepository.loadEducmanagements({
              emIds: ownEmIds
            }).then(function (ems) {
              _this4.emInfo = Object.assign.apply(Object, [{}].concat(_toConsumableArray(ems.map(function (item) {
                return _defineProperty({}, item.id, item.name);
              }))));
            });
          }
        });
        loads.push(loadSchools);
      } else {
        this.founder = {
          id: 0,
          name: "",
          fullName: "",
          schools: [],
          nationOlympOrg: false,
          childFounders: [],
          stateId: this.stateId,
          level: _founders.HierarchyLevel.City,
          founderType: _founders.FounderType.EducManagement,
          founderKind: this.founderKinds.find(function (x) {
            return x.key == _founders.FounderKind.Municipality;
          }) ? _founders.FounderKind.Municipality : null
        };
        this.reloadTreeData();
        var loadCities = this.citiesRepository.getCities([], this.founder.stateId).then(function (cities) {
          _this4.cities = cities;
        });
        loads.push(loadCities);
      }
      this.$q.all(loads).then(function () {
        _this4.loginPattern = new RegExp("^[0-9a-zA-Z".concat(_this4.regExpAlphabet, "\\.\\_\\-]{").concat(_this4.minLoginLength, ",}$")); // разрешены символы '_' '-' '.', цифры, буквы лат. и национальные
        _this4.passwordPattern = _this4.notDigitsOnly ? new RegExp("\\D") : new RegExp(".*");
        _this4.loadPossibleParentFounders();
        _this4.changeTracker.clearDataChanges();
        _this4.ready = true;
      });
    }
  }]);
  return EditFounderController;
}(_netcityModalCtrl.NetCityModalController);
var EditFounderComponent = {
  controller: EditFounderController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/admin/founders/edit/editFounder.component.html"
};
exports.EditFounderComponent = EditFounderComponent;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonUser = exports.AddUserController = void 0;
var _common = __webpack_require__(71);
__webpack_require__(235);
var _users = __webpack_require__(236);
var _formValidationHelper = __webpack_require__(77);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var CommonUser = /*#__PURE__*/function () {
  function CommonUser() {
    _classCallCheck(this, CommonUser);
    this.lastName = "";
    this.firstName = "";
    this.middleName = "";
    this.gender = null;
    this.birthDate = null;
    this.login = "";
    this.password = "";
    this.passwordConfirm = "";
    this.preferedComm = "C";
    this.email = "";
    this.passwordExpired = true;
    this.noMiddleName = false;
    this.idForSimilarChoice = null;
  }
  _createClass(CommonUser, [{
    key: "fullName",
    get: function get() {
      return this.lastName + " " + this.firstName + " " + this.middleName;
    }
  }]);
  return CommonUser;
}();
exports.CommonUser = CommonUser;
var AddUserController = /*#__PURE__*/function () {
  AddUserController.$inject = ["language", "pageContext", "$appLoader", "changeTracker", "dateUtils", "appContext", "similarsService", "settingsRepository", "$q", "$dialogs", "$longWork", "usersRepository", "navigationService", "userInfoRepository", "$scope"];
  /*@ngInject*/
  function AddUserController(language, pageContext, $appLoader, changeTracker, dateUtils, appContext, similarsService, settingsRepository, $q, $dialogs, $longWork, usersRepository, navigationService, userInfoRepository, $scope) {
    var _this = this;
    _classCallCheck(this, AddUserController);
    this.language = language;
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.changeTracker = changeTracker;
    this.dateUtils = dateUtils;
    this.appContext = appContext;
    this.similarsService = similarsService;
    this.settingsRepository = settingsRepository;
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.usersRepository = usersRepository;
    this.navigationService = navigationService;
    this.userInfoRepository = userInfoRepository;
    this.$scope = $scope;
    this.mode = "add";
    this.users = [];
    this.maxQAddUsers = 10;
    pageContext.back = {
      history: true
    };
    this.initPage();
    var getMaleLetter = this.settingsRepository.getMaleLetter().then(function (result) {
      _this.maleLetter = result;
    });
    var getFemaleLetter = this.settingsRepository.getFemaleLetter().then(function (result) {
      _this.femaleLetter = result;
    });
    var getRequireParentBirthDate = this.settingsRepository.requireParentBirthDate().then(function (result) {
      _this.requireParentBirthDate = result;
    });
    this.$q.all([getMaleLetter, getFemaleLetter, getRequireParentBirthDate]).then(function () {
      _this.load();
    });
    this.helper = new _formValidationHelper.FormValidationHelper(this.$dialogs, this.language, {});
  }
  _createClass(AddUserController, [{
    key: "getNewUser",
    value: function getNewUser() {
      return null;
    }
  }, {
    key: "load",
    value: function load() {
      this.currentUser = this.getNewUser();
      this.changeTracker.clearDataChanges;
      this.$appLoader.hide();
    }
  }, {
    key: "editExecution",
    value: function editExecution() {
      this.mode = "edit";
      this.copyUser(this.editingUser, this.currentUser);
      this.changeTracker.clearDataChanges();
      this.$scope.$applyAsync();
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this2 = this;
      var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (user) {
        this.editingUser = user;
      }
      if (this.mode == "add" && this.changeTracker.isDataChanged()) {
        this.$dialogs.confirm(this.language.Generic.Common.kDataWereChanged).then(function () {
          _this2.editExecution();
        }, function () {})["catch"](function () {});
      } else {
        this.editExecution();
      }
    }
  }, {
    key: "update",
    value: function update(canUpdate) {
      if (canUpdate) {
        this.copyUser(this.currentUser, this.editingUser);
        this.changeTracker.clearDataChanges();
      } else {
        this.validDataMessages();
      }
    }
  }, {
    key: "create",
    value: function create() {
      this.mode = "add";
      this.currentUser = this.getNewUser();
      this.editingUser = this.currentUser;
      this.clearForm();
    }
  }, {
    key: "updateAndCreate",
    value: function updateAndCreate() {
      if (this.userInfo.$valid && this.isValidData() && this.users.length < this.maxQAddUsers) {
        this.copyUser(this.currentUser, this.editingUser);
        this.create();
      } else {
        if (this.focusInvalidControl()) {
          return;
        }
        this.validDataMessages();
        if (this.users && this.users.length >= this.maxQAddUsers) {
          if (this.userInfo.$valid && this.currentUser.birthDate) {
            this.update(true);
            this.$dialogs.message("".concat(this.language.Generic.Import.kRecordWasRefreshed, "\n") + this.language.Generic.SetupSchoolUI.kMsgMaxQuickUsers);
          } else {
            this.$dialogs.message(this.language.Generic.SetupSchoolUI.kMsgMaxQuickUsers);
          }
        }
      }
    }
  }, {
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = "Новый пользователь";
    }
  }, {
    key: "existsUsers",
    value: function existsUsers() {
      return this.users && this.users.length ? true : false;
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.userInfo.$displayErrors = false;
      this.userInfo.$setUntouched();
      this.userInfo.$setPristine();
      this.changeTracker.clearDataChanges();
    }
  }, {
    key: "clearUser",
    value: function clearUser(user) {
      user.lastName = "";
      user.firstName = "";
      user.middleName = "";
      user.noMiddleName = false;
      user.birthDate = null;
      user.gender = this.femaleLetter;
      user.login = "";
      user.password = "";
      user.preferedComm = "C";
      user.email = "";
      user.passwordExpired = true;
      user.passwordConfirm = "";
      this.clearForm();
    }
  }, {
    key: "clearCurrentUser",
    value: function clearCurrentUser() {
      this.clearUser(this.currentUser);
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this3 = this;
      this.users = this.users.filter(function (x) {
        return x != _this3.currentUser;
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this4 = this;
      this.users = this.users.filter(function (item) {
        return item.login !== _this4.editingUser.login;
      });
      if (this.users.length) {
        this.mode = 'edit';
        this.editingUser = this.users[0];
        this.copyUser(this.editingUser, this.currentUser);
      } else {
        this.mode = 'add';
        this.clearUser(this.currentUser);
        //todo. проверить
        this.editingUser = this.currentUser;
        this.userInfo.$displayErrors = false;
      }
    }
  }, {
    key: "compareCommonUsers",
    value: function compareCommonUsers(user1, user2) {
      if (user1.lastName == user2.lastName && user1.firstName == user2.firstName && user1.middleName == user2.middleName && user1.noMiddleName == user2.noMiddleName && user1.gender == user2.gender && this.dateUtils.date2str(user1.birthDate) == this.dateUtils.date2str(user2.birthDate) && user1.login == user2.login && user1.password == user2.password && user1.passwordConfirm == user2.passwordConfirm && user1.preferedComm == user2.preferedComm && user1.email == user2.email && user1.passwordExpired == user2.passwordExpired && user1.noMiddleName == user2.noMiddleName) {
        return true;
      }
      return false;
    }
  }, {
    key: "isLoginAlreadyExists",
    value: function isLoginAlreadyExists() {
      var _this5 = this;
      return !this.isPreSchool() && this.users.find(function (item) {
        return _this5.currentUser.login && item.login.toUpperCase() === _this5.currentUser.login.toUpperCase() && (_this5.mode === 'add' || _this5.mode === 'edit' && _this5.editingUser.login.toUpperCase() !== _this5.currentUser.login.toUpperCase());
      });
    }
  }, {
    key: "equalByFio",
    value: function equalByFio(user1, user2) {
      return user1.lastName && user2.lastName.toUpperCase() === user1.lastName.toUpperCase() && user1.firstName && user2.firstName.toUpperCase() === user1.firstName.toUpperCase() && (user1.middleName && !user1.noMiddleName && !user2.noMiddleName && user2.middleName.toUpperCase() === user1.middleName.toUpperCase() || user1.noMiddleName && user2.noMiddleName);
    }
  }, {
    key: "isFioAlreadyExists",
    value: function isFioAlreadyExists() {
      var _this6 = this;
      return this.users.find(function (item) {
        return _this6.equalByFio(_this6.currentUser, item) && (_this6.mode === 'add' || _this6.mode == 'edit' && !_this6.equalByFio(_this6.editingUser, _this6.currentUser));
      });
    }
  }, {
    key: "isSimplePasswordExists",
    value: function isSimplePasswordExists() {
      return !this.isPreSchool() && (this.users.find(function (item) {
        return AddUserController.checkPasswordReliability(item.login, item.password, item.lastName, item.firstName, item.middleName);
      }) || AddUserController.checkPasswordReliability(this.currentUser.login, this.currentUser.password, this.currentUser.lastName, this.currentUser.firstName, this.currentUser.middleName));
    }
  }, {
    key: "isPwdSurroundSpacesExists",
    value: function isPwdSurroundSpacesExists() {
      return !this.isPreSchool() && (this.users.find(function (item) {
        return AddUserController.existsSurroundSpaces(item.password);
      }) || AddUserController.existsSurroundSpaces(this.currentUser.password));
    }
  }, {
    key: "isPreSchool",
    value: function isPreSchool() {
      return this.appContext.funcType === 1;
    }
  }, {
    key: "isValidData",
    value: function isValidData() {
      return this.currentUser.birthDate && !this.isLoginAlreadyExists() && !this.isFioAlreadyExists() && !this.isSimplePasswordExists() && !this.isPwdSurroundSpacesExists() && this.users.length <= this.maxQAddUsers && this.currentUser.password == this.currentUser.passwordConfirm;
    }
  }, {
    key: "save",
    value: function save() {
      this.userInfo.$displayErrors = true;
      var existsUsers = this.existsUsers();
      var validData = this.currentUser && this.userInfo.$valid && this.isValidData();
      if (!validData && (!existsUsers || this.mode != 'add' || this.changeTracker.isDataChanged())) {
        if (this.focusInvalidControl()) {
          return;
        }
      }
      if (existsUsers || validData) {
        if (existsUsers && this.mode == 'add') {
          if (!validData && this.changeTracker.isDataChanged()) {
            this.validDataMessages();
            return;
          }
          if (this.users.length < this.maxQAddUsers && validData) {
            this.users.unshift(this.currentUser);
          }
        }
        if (this.mode == 'edit') {
          if (!validData) {
            return;
          }
          this.update(true);
        }
        this.complete();
      }
    }
  }, {
    key: "complete",
    value: function complete() {}
  }, {
    key: "completeWithParams",
    value: function completeWithParams(userType, roleGroup, navigateTo) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this7 = this;
        var emptyUsers, usersArr, similars, personSimilarsResolveData, similarsResolveData, usersAddArr, result, roleGroupType;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              emptyUsers = !this.users.length;
              if (emptyUsers) {
                this.users.push(this.currentUser);
              }
              usersArr = this.users.map(function (element) {
                return _this7.similarsService.ConvertCommonUserToAddUserDto(element);
              });
              similars = usersArr.map(function (user) {
                return _this7.similarsService.ConvertUserToSimilarsCheckRequest(user, userType, _this7.maleLetter);
              });
              _context.next = 6;
              return this.$longWork.execute(this.usersRepository.checkSimilars(similars, roleGroup));
            case 6:
              personSimilarsResolveData = _context.sent;
              _context.prev = 7;
              _context.next = 10;
              return this.similarsService.chooseSimilars(personSimilarsResolveData, similars, roleGroup);
            case 10:
              similarsResolveData = _context.sent;
              usersAddArr = [];
              usersArr.forEach(function (usr) {
                var similarChoice = similarsResolveData.find(function (x) {
                  return x.personId == usr.idForSimilarChoice;
                });
                if (!similarChoice) {
                  usersAddArr.push(usr);
                } else {
                  if ((similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.choice) == _users.PersonEnrollmentOption.ExistingPerson || (similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.choice) == _users.PersonEnrollmentOption.NewPerson) {
                    if ((similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.choice) == _users.PersonEnrollmentOption.ExistingPerson && (similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.existingUserId) > 0) {
                      usr.id = similarChoice === null || similarChoice === void 0 ? void 0 : similarChoice.choice.existingUserId;
                    }
                    usersAddArr.push(usr);
                  }
                }
              });
              _context.next = 15;
              return this.$longWork.execute(this.usersRepository.addUsers(usersAddArr));
            case 15:
              result = _context.sent;
              if (!result.error) {
                _context.next = 33;
                break;
              }
              roleGroupType = "";
              _context.t0 = roleGroup;
              _context.next = _context.t0 === _common.RoleGroup.Staffs ? 21 : _context.t0 === _common.RoleGroup.EducManagers ? 23 : _context.t0 === _common.RoleGroup.Parents ? 25 : 27;
              break;
            case 21:
              roleGroupType = "персонала";
              return _context.abrupt("break", 28);
            case 23:
              roleGroupType = "пользователя УО";
              return _context.abrupt("break", 28);
            case 25:
              roleGroupType = "родителя";
              return _context.abrupt("break", 28);
            case 27:
              roleGroupType = "";
            case 28:
              this.$dialogs.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F ".concat(roleGroupType, ". ").concat(result.message));
              this.mode = "edit";
              this.currentUser = this.getNewUser();
              this.edit(this.users[0]);
              return _context.abrupt("return");
            case 33:
              this.$dialogs.message("Добавлено записей: " + result.added);
              this.changeTracker.clearDataChanges();
              this.users = [];
              this.navigationService.navigateTo((_b = (_a = this.pageContext.back.href) !== null && _a !== void 0 ? _a : this.pageContext.parent.href) !== null && _b !== void 0 ? _b : navigateTo);
              _context.next = 42;
              break;
            case 39:
              _context.prev = 39;
              _context.t1 = _context["catch"](7);
              this.addExecution(false);
            case 42:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[7, 39]]);
      }));
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this8 = this;
      if (!this.compareCommonUsers(this.editingUser, this.currentUser) || this.changeTracker.isDataChanged()) {
        this.$dialogs.confirm("Внимание! Текущие изменения формы будут сброшены. Продолжить?").then(function () {
          _this8.edit();
          _this8.$dialogs.notify(_this8.language.Generic.Common.kAttention, _this8.language.Generic.Common.kResetChanges, true);
        })["catch"](function () {});
      } else {
        this.$dialogs.notify(this.language.Generic.Common.kAttention, this.language.Generic.Common.kNoChanges, true);
      }
    }
  }, {
    key: "addExecution",
    value: function addExecution(showMessages) {
      if (this.users && this.users.length < this.maxQAddUsers) {
        this.mode = "add";
        this.currentUser = this.getNewUser();
        this.editingUser = this.currentUser;
        this.clearForm();
      } else if (this.users && this.users.length == this.maxQAddUsers) {
        this.mode = "edit";
        this.currentUser = this.getNewUser();
        this.edit(this.users[0]);
        if (showMessages) {
          this.$dialogs.message(this.language.Generic.SetupSchoolUI.kMsgMaxQuickUsers);
        }
      }
    }
  }, {
    key: "focusInvalidControl",
    value: function focusInvalidControl() {
      var invalidControl = this.userInfo.$$controls.find(function (c) {
        return c.$invalid;
      });
      if (invalidControl) {
        this.helper.focusInvalidControl(invalidControl.$$element);
        return true;
      } else {
        if (this.currentUser && this.userInfo.PW && (AddUserController.checkPasswordReliability(this.currentUser.login, this.currentUser.password, this.currentUser.lastName, this.currentUser.firstName, this.currentUser.middleName) || AddUserController.existsSurroundSpaces(this.currentUser.password))) {
          this.helper.focusInvalidControl(this.userInfo.PW.$$element[0]);
          return true;
        }
      }
      return false;
    }
  }, {
    key: "add",
    value: function add() {
      var _this9 = this;
      var canSave = this.userInfo.$valid && this.isValidData() && this.users.length < this.maxQAddUsers;
      if (!canSave) {
        if (this.focusInvalidControl()) {
          return;
        }
        this.validDataMessages();
        if (this.users.length >= this.maxQAddUsers) {
          this.clearUser(this.currentUser);
          this.$dialogs.message(this.language.Generic.SetupSchoolUI.kMsgMaxQuickUsers);
          return;
        }
        return;
      }
      if (!this.users.find(function (user) {
        return _this9.compareCommonUsers(user, _this9.currentUser);
      })) {
        this.users.unshift(this.currentUser);
      }
      this.addExecution(true);
    }
  }, {
    key: "validDataMessages",
    value: function validDataMessages() {
      if (this.isLoginAlreadyExists()) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kErrorLoginNameAlreadyExists);
        return;
      }
      if (this.isFioAlreadyExists()) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kErrorFioAlreadyExists);
        return;
      }
      if (this.isSimplePasswordExists()) {
        this.$dialogs.message(this.language.Generic.Common.kSimplePassword);
        return;
      }
      if (this.isPwdSurroundSpacesExists()) {
        this.$dialogs.message(this.language.Generic.Common.kErrPWDSurroundSpaces);
        return;
      }
    }
  }, {
    key: "copyUser",
    value: function copyUser(source, dest) {
      if (!this.compareCommonUsers(source, dest)) {
        angular.copy(source, dest);
      }
    }
  }], [{
    key: "existsSurroundSpaces",
    value: function existsSurroundSpaces(value) {
      return value && value.length && (value.charAt(0) == ' ' || value.charAt(value.length - 1) == ' ');
    }
  }, {
    key: "checkPasswordReliability",
    value: function checkPasswordReliability(login, password, lastName, firstName, middleName) {
      var upperPass = password === null || password === void 0 ? void 0 : password.toUpperCase();
      var upperLastName = lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase();
      var upperFirstName = firstName === null || firstName === void 0 ? void 0 : firstName.toUpperCase();
      var upperLogin = login === null || login === void 0 ? void 0 : login.toUpperCase();
      var firstSymbolFN = upperFirstName === null || upperFirstName === void 0 ? void 0 : upperFirstName.charAt(0);
      var firstSymbolMN = middleName ? middleName.toUpperCase().charAt(0) : "";
      return upperPass == upperLogin || upperPass == upperLastName || upperPass == upperFirstName || upperPass == upperLastName + upperFirstName || upperPass == upperFirstName + upperLastName || upperPass == upperLastName + firstSymbolFN || upperPass == firstSymbolFN + upperLastName || upperPass == upperLastName + firstSymbolFN + firstSymbolMN || upperPass == firstSymbolFN + firstSymbolMN + upperLastName;
    }
  }]);
  return AddUserController;
}();
exports.AddUserController = AddUserController;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var CheckUserActivityPlug = function () {
  // пользователь активен
  var userIsActive = false;
  // последнее время активности сессии на клиенте
  var clientLastAccessTime;
  // время неактивности сессии пользователя, мс
  var tokenTimeOut = appContext.tokenTimeOut;

  // идентификаторы задач
  var task1Id, task2Id;
  var opts = {
    activityInterval: 300000,
    // мс
    checkEndOfSessionInterval: 60000 // мс
  };

  var setUserIsActivity = function setUserIsActivity() {
    if (!userIsActive) {
      userIsActive = true;
    }
  };

  // инициализирует время последней активности сессии
  var initLastAccessTime = function initLastAccessTime() {
    var now = new Date();
    clientLastAccessTime = now;
  };

  // продлевает сессию
  var extendSession = function extendSession() {
    return jsSubmit({
      action: "/webapi/context/keepAlive?token=" + appContext.at,
      auth: false,
      method: "GET",
      defaultErrorHandling: false
    }).then(function (time) {
      initLastAccessTime();
    });
  };
  var detectUserActivity = function detectUserActivity() {
    // если пользователь активен - отправить запрос на сервер и продлить сессию
    if (userIsActive) {
      var queries = [extendSession];
      extDeferred.when(queries).then(function () {
        userIsActive = false;
      });
    }
  };

  // останавливает задачу setInterval
  var stopTask = function stopTask(intervalId) {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  // останавливает выполнение задач
  var stopTasks = function stopTasks() {
    stopTask(task1Id);
    stopTask(task2Id);
  };
  var TimeOutError = /*#__PURE__*/function (_Error) {
    _inherits(TimeOutError, _Error);
    var _super = _createSuper(TimeOutError);
    function TimeOutError() {
      _classCallCheck(this, TimeOutError);
      return _super.apply(this, arguments);
    }
    return _createClass(TimeOutError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var handleError = function handleError(error) {
    stopTasks();
    if (error instanceof TimeOutError) {
      $.show.message(error.message, language.Generic.Common.kAttention).then(function () {
        return window.postTo({
          path: "/",
          method: "GET"
        });
      });
    } else {
      $.show.error(error.message);
    }
  };
  var getIdleMs = function getIdleMs(lastAccessTimeDt) {
    // срез времени
    var now = new Date();
    // время простоя в мс
    var ms = now - lastAccessTimeDt; // мс

    return ms;
  };

  // проверяет попадание оставшегося времени жизни сессии в двухминутный интервал
  var checkAnxietyInterval = function checkAnxietyInterval(lifetime) {
    var twoMinutsMs = 2 * 60 * 1000;
    return lifetime > 0 && lifetime < twoMinutsMs;
  };

  // вычисляет оставшееся время жизни сессии
  var getLifetime = function getLifetime(lastAccessTime) {
    var ms = getIdleMs(lastAccessTime);
    var lifetime = tokenTimeOut - ms;
    return lifetime;
  };
  var checkTime = function checkTime(time) {
    if (time === 0) {
      // для мс
      return;
    }
    if (time) {
      return;
    }
    throw new TimeOutError(language.Generic.Common.kTimeOutSessionWarn);
  };
  var showMessage = function showMessage() {
    if ($("#timeOutInfoId").is(":visible")) {
      return;
    }
    alert(language.Generic.SetupSchoolUI.kStrExpireWarning, {
      id: "timeOutInfoId"
    });
  };
  var checkServerSessionLifetime = function checkServerSessionLifetime() {
    // убедиться, что на сервере сессия скоро подойдет к концу
    jsSubmit({
      action: "/webapi/context/lifetime?token=" + appContext.at,
      auth: false,
      method: "GET",
      defaultErrorHandling: false
    }).then(function (serverSessionLifetime) {
      try {
        checkTime(serverSessionLifetime);
        if (checkAnxietyInterval(serverSessionLifetime)) {
          if (userIsActive) {
            extendSession().then(function () {
              userIsActive = false;
            });
          } else {
            showMessage();
          }
        }
      } catch (ex) {
        handleError(ex);
      }
    });
  };
  var checkSessionLifetime = function checkSessionLifetime() {
    try {
      checkTime(clientLastAccessTime);
      var clientSessionLifetime = getLifetime(clientLastAccessTime);
      if (checkAnxietyInterval(clientSessionLifetime)) {
        // убедиться, что на сервере сессия скоро подойдет к концу
        checkServerSessionLifetime();
      }
    } catch (ex) {
      handleError(ex);
    }
  };

  // проверяет истечение времени жизни сессии
  var sessionExpired = function sessionExpired() {
    if (!clientLastAccessTime) {
      return true;
    }
    var clientIdleMs = getIdleMs(clientLastAccessTime);
    return clientIdleMs > tokenTimeOut;
  };
  var sessionExpiredWhen = function sessionExpiredWhen() {
    var deferred = $.Deferred();
    var isExpired = sessionExpired();
    if (isExpired) {
      // убедиться, что на сервере сессия тоже истекла
      jsSubmit({
        action: "/webapi/context/expired?token=" + appContext.at,
        auth: false,
        method: "GET",
        defaultErrorHandling: false
      }).then(function (expired) {
        deferred.resolve(expired);
      });
    } else {
      deferred.resolve(isExpired);
    }
    return deferred.promise();
  };
  var handleEndSession = function handleEndSession() {
    stopTasks();
    if ($("#timeOutInfoId").is(":visible")) {
      $("#timeOutInfoId").modal("hide");
    }
    $.show.message(language.Generic.Common.kTimeOutSessionWarn, language.Generic.Common.kAttention).then(function () {
      return window.postTo({
        path: "/",
        method: "GET"
      });
    });
  };
  var checkEndOfSession = function checkEndOfSession() {
    sessionExpiredWhen().then(function (isExpired) {
      if (isExpired) {
        // сессия истекла
        handleEndSession();
      } else {
        checkSessionLifetime();
      }
    });
  };

  // инициализирует выполнение задач
  var initTasks = function initTasks() {
    // задачи
    var task1 = detectUserActivity;
    var task2 = checkEndOfSession;
    initLastAccessTime();

    // запуск задач
    task1Id = setInterval(task1, opts.activityInterval);
    task2Id = setInterval(task2, opts.checkEndOfSessionInterval);

    // подписаться на события движения мыши и нажатия клавиатуры
    $(document).on("mousemove", setUserIsActivity);
    $(document).on("keypress", setUserIsActivity);
  };
  initTasks();
}();
(function (exp, name) {
  var exports;
  var exported = false;
  if ( true && module !== null) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === undefined)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})(CheckUserActivityPlug);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserType = exports.SimilarsType = exports.SimilarsCheckLimitation = exports.SimilarLocation = exports.SililarsCheckBehavior = exports.PredefinedDocumentType = exports.PersonGender = exports.PersonEnrollmentOption = exports.Gender = void 0;
var PersonGender;
exports.PersonGender = PersonGender;
(function (PersonGender) {
  PersonGender[PersonGender["Male"] = 0] = "Male";
  PersonGender[PersonGender["Female"] = 1] = "Female";
})(PersonGender || (exports.PersonGender = PersonGender = {}));
var UserType;
exports.UserType = UserType;
(function (UserType) {
  UserType[UserType["Staff"] = 1] = "Staff";
  UserType[UserType["Student"] = 2] = "Student";
  UserType[UserType["Parent"] = 3] = "Parent";
})(UserType || (exports.UserType = UserType = {}));
var PredefinedDocumentType;
exports.PredefinedDocumentType = PredefinedDocumentType;
(function (PredefinedDocumentType) {
  PredefinedDocumentType[PredefinedDocumentType["Unknown"] = 0] = "Unknown";
  PredefinedDocumentType[PredefinedDocumentType["Passport"] = 1] = "Passport";
  PredefinedDocumentType[PredefinedDocumentType["BirthCertificate"] = 2] = "BirthCertificate";
  PredefinedDocumentType[PredefinedDocumentType["Snils"] = 3] = "Snils";
})(PredefinedDocumentType || (exports.PredefinedDocumentType = PredefinedDocumentType = {}));
var SimilarLocation;
exports.SimilarLocation = SimilarLocation;
(function (SimilarLocation) {
  SimilarLocation[SimilarLocation["InSchool"] = 0] = "InSchool";
  SimilarLocation[SimilarLocation["InPool"] = 1] = "InPool";
  SimilarLocation[SimilarLocation["InOtherSchoolsExcludeUDODs"] = 2] = "InOtherSchoolsExcludeUDODs";
  SimilarLocation[SimilarLocation["InOtherSchools"] = 3] = "InOtherSchools";
  SimilarLocation[SimilarLocation["Any"] = 4] = "Any";
})(SimilarLocation || (exports.SimilarLocation = SimilarLocation = {}));
var SimilarsCheckLimitation;
exports.SimilarsCheckLimitation = SimilarsCheckLimitation;
(function (SimilarsCheckLimitation) {
  SimilarsCheckLimitation[SimilarsCheckLimitation["WithoutLimitation"] = 0] = "WithoutLimitation";
  SimilarsCheckLimitation[SimilarsCheckLimitation["MunicipalitySearch"] = 1] = "MunicipalitySearch";
})(SimilarsCheckLimitation || (exports.SimilarsCheckLimitation = SimilarsCheckLimitation = {}));
var SililarsCheckBehavior;
exports.SililarsCheckBehavior = SililarsCheckBehavior;
(function (SililarsCheckBehavior) {
  SililarsCheckBehavior[SililarsCheckBehavior["FindFirsts"] = 0] = "FindFirsts";
  SililarsCheckBehavior[SililarsCheckBehavior["FindAll"] = 1] = "FindAll";
})(SililarsCheckBehavior || (exports.SililarsCheckBehavior = SililarsCheckBehavior = {}));
var SimilarsType;
exports.SimilarsType = SimilarsType;
(function (SimilarsType) {
  SimilarsType[SimilarsType["SimilarFiSolidMiddleSoftBirthDate"] = 1] = "SimilarFiSolidMiddleSoftBirthDate";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSolidBirthDate"] = 2] = "SimilarFiSoftMiddleSolidBirthDate";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSolidOneOrMoreDocuments"] = 3] = "SimilarFiSoftMiddleSolidOneOrMoreDocuments";
  SimilarsType[SimilarsType["SimilarFuzzyLastMoreThanOneDocuments"] = 4] = "SimilarFuzzyLastMoreThanOneDocuments";
  SimilarsType[SimilarsType["SimilarFuzzyFiSoftFuzzyMiddleOther"] = 5] = "SimilarFuzzyFiSoftFuzzyMiddleOther";
  SimilarsType[SimilarsType["SimilarSimilarStudentParentsFi"] = 6] = "SimilarSimilarStudentParentsFi";
  SimilarsType[SimilarsType["SimilarFiSoftMiddle"] = 7] = "SimilarFiSoftMiddle";
  SimilarsType[SimilarsType["SimilarFiSoftMiddleSoftBirthDate"] = 8] = "SimilarFiSoftMiddleSoftBirthDate";
  SimilarsType[SimilarsType["SimilarOneOrMoreDocuments"] = 9] = "SimilarOneOrMoreDocuments";
})(SimilarsType || (exports.SimilarsType = SimilarsType = {}));
var Gender;
exports.Gender = Gender;
(function (Gender) {
  Gender[Gender["Female"] = 0] = "Female";
  Gender[Gender["Male"] = 1] = "Male";
})(Gender || (exports.Gender = Gender = {}));
var PersonEnrollmentOption;
exports.PersonEnrollmentOption = PersonEnrollmentOption;
(function (PersonEnrollmentOption) {
  PersonEnrollmentOption["NewPerson"] = "NewPerson";
  PersonEnrollmentOption["ExistingPerson"] = "ExistingPerson";
  PersonEnrollmentOption["IgnorePerson"] = "IgnorePerson";
  PersonEnrollmentOption["DuplicatePerson"] = "DuplicatePerson";
})(PersonEnrollmentOption || (exports.PersonEnrollmentOption = PersonEnrollmentOption = {}));

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HierarchyLevel = exports.FounderType = exports.FounderKind = exports.AuthorityType = void 0;
var HierarchyLevel;
exports.HierarchyLevel = HierarchyLevel;
(function (HierarchyLevel) {
  HierarchyLevel["Mixed"] = "Mixed";
  HierarchyLevel["Province"] = "Province";
  HierarchyLevel["City"] = "City";
  HierarchyLevel["DistrictCity"] = "DistrictCity";
})(HierarchyLevel || (exports.HierarchyLevel = HierarchyLevel = {}));
var FounderType;
exports.FounderType = FounderType;
(function (FounderType) {
  FounderType["EducManagement"] = "EducManagement";
  FounderType["OtherOrganizations"] = "OtherOrganizations";
})(FounderType || (exports.FounderType = FounderType = {}));
var FounderKind;
exports.FounderKind = FounderKind;
(function (FounderKind) {
  FounderKind["RussianFederation"] = "RussianFederation";
  FounderKind["RussianFederationSubject"] = "RussianFederationSubject";
  FounderKind["Municipality"] = "Municipality";
  FounderKind["RussianCommercialOrgs"] = "RussianCommercialOrgs";
  FounderKind["ForeignCommercialOrgs"] = "ForeignCommercialOrgs";
  FounderKind["RussianNonCommercialOrgs"] = "RussianNonCommercialOrgs";
  FounderKind["ForeignNonCommercialOrgs"] = "ForeignNonCommercialOrgs";
  FounderKind["RussianReligiousOrgs"] = "RussianReligiousOrgs";
  FounderKind["ForeignReligiousOrgs"] = "ForeignReligiousOrgs";
  FounderKind["RussianCitizens"] = "RussianCitizens";
  FounderKind["ForeignCitizens"] = "ForeignCitizens";
})(FounderKind || (exports.FounderKind = FounderKind = {}));
var AuthorityType;
exports.AuthorityType = AuthorityType;
(function (AuthorityType) {
  AuthorityType["Educations"] = "Educations";
  AuthorityType["Socials"] = "Socials";
  AuthorityType["Cultures"] = "Cultures";
  AuthorityType["Sports"] = "Sports";
  AuthorityType["Politics"] = "Politics";
  AuthorityType["Others"] = "Others";
})(AuthorityType || (exports.AuthorityType = AuthorityType = {}));

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearRepository = exports.ReferencesRepository = exports.MunicipalityIdType = exports.EducOrganizationsRepository = exports.AddressRepository = exports.AddressReferencesRepository = void 0;
var _baseRepository = __webpack_require__(27);
var _repository = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AddressRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AddressRepository, _BaseRepository);
  var _super = _createSuper(AddressRepository);
  function AddressRepository() {
    _classCallCheck(this, AddressRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AddressRepository, [{
    key: "getCities",
    value: function getCities(ids) {
      if (ids.length > 10) {
        return this.$http.post("/webapi/addresses/cities/search", {
          id: ids
        }).then(this.handleResponse, this.handleError);
      }
      return this.$http.get("/webapi/addresses/cities", {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCityDistricts",
    value: function getCityDistricts(cityId) {
      return this.$http.get("/webapi/addresses/cities/".concat(cityId, "/districts")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProvinces",
    value: function getProvinces(ids) {
      return this.$http.get("/webapi/addresses/provinces", {
        params: {
          id: ids
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return AddressRepository;
}(_baseRepository.BaseRepository);
exports.AddressRepository = AddressRepository;
var EducOrganizationsRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(EducOrganizationsRepository, _BaseRepository2);
  var _super2 = _createSuper(EducOrganizationsRepository);
  function EducOrganizationsRepository() {
    _classCallCheck(this, EducOrganizationsRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(EducOrganizationsRepository, [{
    key: "getSchoolsAddressesInfo",
    value: function getSchoolsAddressesInfo(filter) {
      return this.$http.post("/webapi/addresses/schools/info", filter).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolAddressInfo",
    value: function getSchoolAddressInfo(schoolId) {
      return this.$http.get("/webapi/addresses/schools/".concat(schoolId, "/info")).then(this.handleResponse, this.handleError);
    }
  }]);
  return EducOrganizationsRepository;
}(_baseRepository.BaseRepository);
exports.EducOrganizationsRepository = EducOrganizationsRepository;
var ReferencesRepository = /*#__PURE__*/function (_SimpleBaseRepository) {
  _inherits(ReferencesRepository, _SimpleBaseRepository);
  var _super3 = _createSuper(ReferencesRepository);
  function ReferencesRepository() {
    _classCallCheck(this, ReferencesRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(ReferencesRepository, [{
    key: "getYears",
    value: function getYears() {
      return this.$http.get("/webapi/references/years").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getYear",
    value: function getYear(yearId) {
      return this.$http.get("/webapi/references/years/" + yearId).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTestLevels",
    value: function getTestLevels() {
      return this.$http.get("/webapi/references/testLevels").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTaskMistakeTypes",
    value: function getTaskMistakeTypes() {
      return this.$http.get("/webapi/references/taskMistakeTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFuncTypes",
    value: function getFuncTypes() {
      return this.$http.get("/webapi/references/functypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEoTypes",
    value: function getEoTypes() {
      return this.$http.get("/webapi/references/eotypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTaskDifficults",
    value: function getTaskDifficults() {
      return this.$http.get("/webapi/references/taskDifficults").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgramTypes",
    value: function getProgramTypes() {
      return this.$http.get("/webapi/references/addprogramtypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgramPaymentTypes",
    value: function getProgramPaymentTypes() {
      return this.$http.get("/webapi/references/addprogrampaymenttypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgramEducForms",
    value: function getProgramEducForms() {
      return this.$http.get("/webapi/references/addprogrameducforms").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAdaptationTypes",
    value: function getAdaptationTypes() {
      return this.$http.get("/webapi/references/adaptationtypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProgramStatuses",
    value: function getProgramStatuses() {
      return this.$http.get("/webapi/references/addprogramstatuses").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSignificantProjects",
    value: function getSignificantProjects() {
      return this.$http.get("/webapi/references/significantprojects").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getIupLevels",
    value: function getIupLevels() {
      return this.$http.get("/webapi/references/iuplevels").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getExtraOrgForms",
    value: function getExtraOrgForms() {
      return this.$http.get("/webapi/references/extraorgforms").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getExtraDirections",
    value: function getExtraDirections() {
      return this.$http.get("/webapi/references/extradirections").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEducOrgReferences",
    value: function getEducOrgReferences() {
      return this.$http.get("/webapi/references/eoRefs").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getRelationShipTypes",
    value: function getRelationShipTypes() {
      return this.$http.get("/webapi/references/relationShipTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAtoTypes",
    value: function getAtoTypes() {
      var atoTypeShortName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return this.$http.get("/webapi/references/atotypes", {
        params: {
          atoTypeShortName: atoTypeShortName
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSettlementTypes",
    value: function getSettlementTypes() {
      return this.$http.get("/webapi/references/settlementTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFounderTypes",
    value: function getFounderTypes() {
      return this.$http.get("/webapi/references/founderTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFounderKinds",
    value: function getFounderKinds() {
      return this.$http.get("/webapi/references/founderKinds").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAuthorityTypes",
    value: function getAuthorityTypes() {
      return this.$http.get("/webapi/references/authorityTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getIdentityDocumentTypes",
    value: function getIdentityDocumentTypes() {
      return this.$http.get("/webapi/references/identityDocumentTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getHierarchyLevels",
    value: function getHierarchyLevels() {
      return this.$http.get("/webapi/references/hierarchyLevels").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProjectTypeForSchoolTypes",
    value: function getProjectTypeForSchoolTypes() {
      return this.$http.get("/webapi/references/projectTypeForSchool").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolDocTypes",
    value: function getSchoolDocTypes() {
      return this.$http.get("/webapi/references/schoolDocTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStatFormTypes",
    value: function getStatFormTypes() {
      return this.$http.get("/webapi/references/statFormTypes").then(this.handleResponse, this.handleError);
    }
  }]);
  return ReferencesRepository;
}(_repository.BaseRepository);
exports.ReferencesRepository = ReferencesRepository;
var AddressReferencesRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(AddressReferencesRepository, _BaseRepository3);
  var _super4 = _createSuper(AddressReferencesRepository);
  function AddressReferencesRepository() {
    _classCallCheck(this, AddressReferencesRepository);
    return _super4.apply(this, arguments);
  }
  _createClass(AddressReferencesRepository, [{
    key: "getMunicipalityDistricts",
    value: function getMunicipalityDistricts(filter) {
      if ((filter === null || filter === void 0 ? void 0 : filter.id) && filter.id.length > 10) {
        var query = {
          idType: filter.idType
        };
        return this.$http.post("/webapi/addresses/municipalities/search", {
          filter: filter
        }, {
          params: query
        }).then(this.handleResponse, this.handleError);
      }
      return this.$http.get("/webapi/addresses/municipalities", {
        params: filter
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getProvinces",
    value: function getProvinces(yearId) {
      return this.$http.get("/webapi/addresses/provinces").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getLocations",
    value: function getLocations() {
      return this.$http.get("/webapi/addresses/locations").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStates",
    value: function getStates() {
      return this.$http.get("/webapi/addresses/states").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCountries",
    value: function getCountries() {
      return this.$http.get("/webapi/addresses/countries").then(this.handleResponse, this.handleError);
    }
  }]);
  return AddressReferencesRepository;
}(_baseRepository.BaseRepository);
exports.AddressReferencesRepository = AddressReferencesRepository;
var MunicipalityIdType;
exports.MunicipalityIdType = MunicipalityIdType;
(function (MunicipalityIdType) {
  MunicipalityIdType["NegativeBound"] = "NegativeBound";
  MunicipalityIdType["PositiveBound"] = "PositiveBound";
})(MunicipalityIdType || (exports.MunicipalityIdType = MunicipalityIdType = {}));
var YearRepository = /*#__PURE__*/function (_BaseRepository4) {
  _inherits(YearRepository, _BaseRepository4);
  var _super5 = _createSuper(YearRepository);
  function YearRepository() {
    _classCallCheck(this, YearRepository);
    return _super5.apply(this, arguments);
  }
  _createClass(YearRepository, [{
    key: "getGlobalYearInfo",
    value: function getGlobalYearInfo(globalYearId) {
      return this.$http.get("/webapi/calendar/years/globalYearInfo", {
        params: {
          globalYearId: globalYearId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return YearRepository;
}(_baseRepository.BaseRepository);
exports.YearRepository = YearRepository;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(21);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var staticInstance = null;
var BaseRepository = /*#__PURE__*/function () {
  BaseRepository.$inject = ["$http", "$dialogs", "$longWork"];
  /*@ngInject*/
  function BaseRepository($http, $dialogs, $longWork) {
    _classCallCheck(this, BaseRepository);
    this.$http = $http;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    staticInstance = this;
  }
  _createClass(BaseRepository, [{
    key: "handleResponse",
    value: function handleResponse(response) {
      $(document).trigger("closeProcessing");
      if (response.status == 204) return null;
      return response.data;
    }
  }, {
    key: "handleResponseSimple",
    value: function handleResponseSimple(response) {
      return response.data;
    }
  }, {
    key: "handleError",
    value: function handleError(response) {
      if (staticInstance.$longWork) {
        staticInstance.$longWork.close();
      }
      var errInformer = function errInformer(message) {
        return staticInstance.$dialogs.error(message);
      };
      var messageInformer = function messageInformer(message) {
        return staticInstance.$dialogs.message(message);
      };
      return new _common.CommonXhrErrorHandler(errInformer, messageInformer).handleErrorResponse(response);
    }
  }, {
    key: "get",
    value: function get(url, options) {
      if (window.appContext.environment === "dev") {
        console.log("url:", url);
        console.log("options:", options);
      }
      $(document).trigger("showProcessing");
      return this.$http.get(url, options).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "post",
    value: function post(url, options) {
      if (window.appContext.environment === "dev") {
        console.log("url:", url);
        console.log("options:", options);
      }
      $(document).trigger("showProcessing");
      return this.$http.post(url, options).then(this.handleResponse, this.handleError);
    }
  }]);
  return BaseRepository;
}();
exports.BaseRepository = BaseRepository;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCenterDecorator = exports.SelectionMode = exports.RegistryBasedComponentTemplate = exports.PreserveWhiteSpaceDecorator = exports.MapDecorator = exports.LinkFieldDecorator = exports.EnumItemDecorator = exports.DateTimeDecorator = exports.DateDecorator = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SelectionMode;
exports.SelectionMode = SelectionMode;
(function (SelectionMode) {
  SelectionMode["Empty"] = "Empty";
  SelectionMode["Multiple"] = "Multiple";
  SelectionMode["Single"] = "Single";
})(SelectionMode || (exports.SelectionMode = SelectionMode = {}));
var LinkFieldDecorator = /*#__PURE__*/function () {
  function LinkFieldDecorator(linkAction) {
    _classCallCheck(this, LinkFieldDecorator);
    this.linkAction = linkAction;
    this.template = "<a href=\"javascript:void(0);\" ng-click=\"action(row, filterInfo)\">{{content}}</a>";
  }
  _createClass(LinkFieldDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      var _this = this;
      scope["action"] = function (row) {
        _this.linkAction(row);
      };
    }
  }]);
  return LinkFieldDecorator;
}();
exports.LinkFieldDecorator = LinkFieldDecorator;
var MapDecorator = /*#__PURE__*/function () {
  function MapDecorator(map) {
    _classCallCheck(this, MapDecorator);
    this.map = map;
  }
  _createClass(MapDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      scope["content"] = this.map(scope["content"]);
    }
  }]);
  return MapDecorator;
}();
exports.MapDecorator = MapDecorator;
var DateDecorator = /*#__PURE__*/function (_MapDecorator) {
  _inherits(DateDecorator, _MapDecorator);
  var _super = _createSuper(DateDecorator);
  function DateDecorator() {
    _classCallCheck(this, DateDecorator);
    var mapFunc = function mapFunc(date) {
      if (!date || date == null || typeof date == "undefined") {
        return "";
      }
      var dtDate = new Date(date);
      return dateUtils.date2str(dtDate);
    };
    return _super.call(this, mapFunc);
  }
  return _createClass(DateDecorator);
}(MapDecorator);
exports.DateDecorator = DateDecorator;
var DateTimeDecorator = /*#__PURE__*/function (_MapDecorator2) {
  _inherits(DateTimeDecorator, _MapDecorator2);
  var _super2 = _createSuper(DateTimeDecorator);
  function DateTimeDecorator() {
    _classCallCheck(this, DateTimeDecorator);
    var mapFunc = function mapFunc(date) {
      if (!date || date == null || typeof date == "undefined") {
        return "";
      }
      var dtDate = new Date(date);
      return dateUtils.date2str(dtDate) + " " + dateUtils.time2Str_ss(dtDate);
    };
    return _super2.call(this, mapFunc);
  }
  return _createClass(DateTimeDecorator);
}(MapDecorator);
exports.DateTimeDecorator = DateTimeDecorator;
var PreserveWhiteSpaceDecorator = /*#__PURE__*/function () {
  function PreserveWhiteSpaceDecorator() {
    _classCallCheck(this, PreserveWhiteSpaceDecorator);
  }
  _createClass(PreserveWhiteSpaceDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      element.css("white-space", "pre-line");
    }
  }]);
  return PreserveWhiteSpaceDecorator;
}();
exports.PreserveWhiteSpaceDecorator = PreserveWhiteSpaceDecorator;
var TextCenterDecorator = /*#__PURE__*/function () {
  function TextCenterDecorator() {
    _classCallCheck(this, TextCenterDecorator);
  }
  _createClass(TextCenterDecorator, [{
    key: "activate",
    value: function activate(scope, element) {
      element.parent().addClass("text-center");
    }
  }]);
  return TextCenterDecorator;
}();
exports.TextCenterDecorator = TextCenterDecorator;
var EnumItemDecorator = /*#__PURE__*/function (_MapDecorator3) {
  _inherits(EnumItemDecorator, _MapDecorator3);
  var _super3 = _createSuper(EnumItemDecorator);
  function EnumItemDecorator() {
    _classCallCheck(this, EnumItemDecorator);
    var mapFunc = function mapFunc(val) {
      var itemDto = val;
      if (itemDto === null || itemDto === void 0 ? void 0 : itemDto.name) {
        return itemDto.name;
      }
      return "";
    };
    return _super3.call(this, mapFunc);
  }
  return _createClass(EnumItemDecorator);
}(MapDecorator);
exports.EnumItemDecorator = EnumItemDecorator;
var RegistryBasedComponentTemplate = "<registry info=\"ctrl.registryInfo\" controller=\"ctrl.controller\"></registry>";
exports.RegistryBasedComponentTemplate = RegistryBasedComponentTemplate;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetCityModalController = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var closeReasons = ["backdrop click", "cancel", "escape key press"];
var NetCityModalController = /*#__PURE__*/function () {
  NetCityModalController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs"];
  /*@ngInject*/
  function NetCityModalController($scope, $uibModalInstance, changeTracker, $dialogs) {
    var _this = this;
    _classCallCheck(this, NetCityModalController);
    this.$scope = $scope;
    this.$uibModalInstance = $uibModalInstance;
    this.changeTracker = changeTracker;
    this.$dialogs = $dialogs;
    $scope.$on("modal.closing", function (event, reason) {
      var modalCtx = _this.modalCtx;
      var changed = changeTracker.isDataChanged(modalCtx);
      if (!changed) {
        return;
      }
      if (closeReasons.indexOf(reason) == -1) {
        return;
      }
      event.preventDefault();
      $dialogs.confirm(language.Generic.Common.kDataWereChanged).then(function () {
        changeTracker.clearDataChanges(modalCtx);
        $uibModalInstance.dismiss(reason);
      });
    });
  }
  _createClass(NetCityModalController, [{
    key: "modalCtx",
    get: function get() {
      return $("div.modal.fade");
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return NetCityModalController;
}();
exports.NetCityModalController = NetCityModalController;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NsModalDirective = exports.ButtonClass = void 0;
var ButtonClass;
exports.ButtonClass = ButtonClass;
(function (ButtonClass) {
  ButtonClass["default"] = "btn-default";
  ButtonClass["primary"] = "btn-primary";
  ButtonClass["danger"] = "btn-danger";
  ButtonClass["warning"] = "btn-warning";
  ButtonClass["info"] = "btn-info";
})(ButtonClass || (exports.ButtonClass = ButtonClass = {}));
var NsModalDirective = function NsModalDirective() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      header: "@",
      type: "@",
      buttons: "<",
      "class": "<",
      controller: "<"
    },
    template: "\n\t\t<div class=\"bootstrap-dialog type-{{type || 'primary'}}\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div class=\"bootstrap-dialog-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-close-button\">\n\t\t\t\t\t\t<button class=\"close\" ng-click=\"controller.close()\">&times;</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bootstrap-dialog-title\">{{header}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"bootstrap-dialog-body\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-message\">\n\t\t\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<div class=\"bootstrap-dialog-footer\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-footer-buttons\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn\" ng-class=\"button.class || 'btn-default'\" ng-click=\"button.action()\" ng-repeat=\"button in buttons\" ng-disabled=\"button.isEnabled && !button.isEnabled()\" ng-show=\"!button.isDisplayed || button.isDisplayed()\">\n\t\t\t\t\t\t\t<span ng-if=\"button.icon\" class=\"bootstrap-dialog-button-icon {{button.icon}}\"></span>\n\t\t\t\t\t\t\t{{button.title}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t"
  };
};
exports.NsModalDirective = NsModalDirective;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusOrganization = exports.RoleGroup = exports.Gender = exports.FuncType = exports.AppConstants = void 0;
var FuncType;
exports.FuncType = FuncType;
(function (FuncType) {
  FuncType[FuncType["educMgr"] = 0] = "educMgr";
  FuncType[FuncType["preSchool"] = 1] = "preSchool";
  FuncType[FuncType["school"] = 2] = "school";
  FuncType[FuncType["addSchool"] = 3] = "addSchool";
  FuncType[FuncType["profSchool"] = 4] = "profSchool";
  FuncType[FuncType["orphanage"] = 5] = "orphanage";
  FuncType[FuncType["university"] = 6] = "university";
})(FuncType || (exports.FuncType = FuncType = {}));
var StatusOrganization;
exports.StatusOrganization = StatusOrganization;
(function (StatusOrganization) {
  StatusOrganization[StatusOrganization["functions"] = 1] = "functions";
  StatusOrganization[StatusOrganization["overhaul"] = 2] = "overhaul";
  StatusOrganization[StatusOrganization["reconstruction"] = 3] = "reconstruction";
  StatusOrganization[StatusOrganization["suspendedActivities"] = 4] = "suspendedActivities";
  StatusOrganization[StatusOrganization["noContingent"] = 5] = "noContingent";
  StatusOrganization[StatusOrganization["expectsOpening"] = 6] = "expectsOpening";
  StatusOrganization[StatusOrganization["liquidated"] = 7] = "liquidated";
  StatusOrganization[StatusOrganization["closed"] = 8] = "closed";
  StatusOrganization[StatusOrganization["attachedToAnotherOrganization"] = 9] = "attachedToAnotherOrganization";
})(StatusOrganization || (exports.StatusOrganization = StatusOrganization = {}));
var Gender;
exports.Gender = Gender;
(function (Gender) {
  Gender["Male"] = "Male";
  Gender["Female"] = "Female";
})(Gender || (exports.Gender = Gender = {}));
var RoleGroup;
exports.RoleGroup = RoleGroup;
(function (RoleGroup) {
  RoleGroup["Staffs"] = "Staffs";
  RoleGroup["Students"] = "Students";
  RoleGroup["Parents"] = "Parents";
  RoleGroup["EducManagers"] = "EducManagers";
})(RoleGroup || (exports.RoleGroup = RoleGroup = {}));
var AppConstants;
exports.AppConstants = AppConstants;
(function (AppConstants) {
  AppConstants["adminName"] = "ADMIN";
})(AppConstants || (exports.AppConstants = AppConstants = {}));

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JQueryHelper = exports.FormValidationHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var JQueryHelper = /*#__PURE__*/function () {
  function JQueryHelper() {
    _classCallCheck(this, JQueryHelper);
  }
  _createClass(JQueryHelper, null, [{
    key: "SingleOn",
    value:
    //подпись на событие, с отпиской после первого выполнения
    function SingleOn(element, event, handler) {
      var proxiedHandler = function proxiedHandler() {
        var result = handler();
        if (typeof result !== "boolean" || result) {
          element.off(event, proxiedHandler);
        }
      };
      element.on(event, proxiedHandler);
    }
  }]);
  return JQueryHelper;
}();
exports.JQueryHelper = JQueryHelper;
var FormValidationHelper = /*#__PURE__*/function () {
  function FormValidationHelper($dialogs, language, localSettings) {
    _classCallCheck(this, FormValidationHelper);
    this.$dialogs = $dialogs;
    this.language = language;
    this.localSettings = localSettings;
    this.localSettings = localSettings || {};
  }
  _createClass(FormValidationHelper, [{
    key: "checkNotEmpty",
    value: function checkNotEmpty(el, fieldname) {
      el.value = el.value.trim();
      if (el.value == "") {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kErrEmpty + fieldname);
        el.focus();
        return true;
      }
      return false;
    }
  }, {
    key: "badFio",
    value: function badFio(el, bCheck, bNoShowMessage, fieldName) {
      if (this.localSettings.regExpFio == null || this.localSettings.regExpFio == undefined || this.localSettings.regExpFio == "") {
        return this.badFirstLetter(el, bCheck, bNoShowMessage);
      }
      el.value = el.value.trim();
      if (el.value == "") {
        return false;
      }
      var firstLetter = el.value.slice(0, 1).toUpperCase();
      if (bCheck) {
        var namePattern = new RegExp(this.localSettings.regExpFio, "i");
        if (!namePattern.test(el.value)) {
          var badMessage = this.language.Generic.Common.kbadFio.replace("{0}", fieldName);
          if (!bNoShowMessage) {
            el.focus();
            this.$dialogs.message(badMessage);
          }
          return true;
        }
      }
      el.value = firstLetter + el.value.slice(1);
      return false;
    }
  }, {
    key: "badFirstLetter",
    value: function badFirstLetter(el, bCheck, bNoShowMessage) {
      el.value = el.value.trim();
      if (el.value == "") {
        return false;
      }
      var firstLetter = el.value.slice(0, 1).toUpperCase();
      if (bCheck) {
        var namePattern = new RegExp("[" + this.localSettings.regExpAlphabet + "]");
        if (!namePattern.test(firstLetter)) {
          var badMessage = this.language.Generic.Common.kbadFirstLetter.replace("{0}", this.localSettings.firstLetter).replace("{1}", this.localSettings.lastLetter);
          if (!bNoShowMessage) {
            el.focus();
            this.$dialogs.message(badMessage);
          }
          return true;
        }
      }
      el.value = firstLetter + el.value.slice(1);
      return false;
    }
  }, {
    key: "focusFormControl",
    value: function focusFormControl(form, controlName) {
      var control = form.$$controls.find(function (c) {
        return c.$name == controlName;
      });
      if (!control) {
        return;
      }
      this.focusInvalidControl(control.$$element);
    }
  }, {
    key: "focusInvalidFormControl",
    value: function focusInvalidFormControl(form) {
      var invalidControl = this.findInvalidControl(form.$$controls);
      if (!invalidControl) {
        return;
      }
      this.focusInvalidControl(invalidControl.$$element);
    }
  }, {
    key: "findInvalidControl",
    value: function findInvalidControl(controls) {
      var _a;
      if (!(controls === null || controls === void 0 ? void 0 : controls.length)) {
        return null;
      }
      var invalidControl = controls.find(function (c) {
        return c.$invalid;
      });
      if (!invalidControl) {
        return null;
      }
      if (invalidControl && !((_a = invalidControl.$$controls) === null || _a === void 0 ? void 0 : _a.length)) {
        return invalidControl;
      }
      return this.findInvalidControl(invalidControl.$$controls);
    }
  }, {
    key: "focusInvalidControl",
    value: function focusInvalidControl(invalidControl) {
      var panel = $(invalidControl).closest(".panel-collapse");
      if (panel && panel.length && !panel.hasClass("in")) {
        JQueryHelper.SingleOn(panel, "shown.bs.collapse", function () {
          invalidControl.trigger("focus");
        });
        panel.collapse("show");
      } else {
        invalidControl.trigger("focus");
      }
    }
  }]);
  return FormValidationHelper;
}();
exports.FormValidationHelper = FormValidationHelper;

/***/ })

/******/ });
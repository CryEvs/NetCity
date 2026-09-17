var SsoLoginModule =
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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SsoLoginController = void 0;
var _login = __webpack_require__(2);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SsoLoginService = /*#__PURE__*/function () {
  function SsoLoginService(idpUserList, mobileInfo) {
    _classCallCheck(this, SsoLoginService);
    this.init(idpUserList, mobileInfo);
  }
  _createClass(SsoLoginService, [{
    key: "init",
    value: function init(idpUserList, mobileInfo) {
      var _this = this;
      this.idpUserList = idpUserList;
      this.isMobile = mobileInfo.isMobile;
      this.isMobileBind = mobileInfo.isMobileBind;
      if (this.isMobileBind) {
        // привязываются только родители школы
        this.idpUserList = idpUserList.filter(function (usr) {
          return _this.isSchoolUser(usr) && _this.isParent(usr);
        });
      } else if (this.isMobile) {
        // авторизуются родители или ученики
        this.idpUserList = idpUserList.filter(function (usr) {
          return _this.isSchoolUser(usr) && (_this.isParent(usr) || !usr.IsStaff);
        });
      }
      this.noUsers = !this.idpUserList.length;
      if (this.idpUserList.length == 1) {
        this.singleUser = this.idpUserList[0];
      }
    }
  }, {
    key: "isSchoolUser",
    value: function isSchoolUser(userInfo) {
      return userInfo.FuncType == 2;
    }
  }, {
    key: "isParent",
    value: function isParent(userInfo) {
      var res = userInfo.Roles.filter(function (ri) {
        return ri.Id == 2;
      });
      return res && res.length;
    }
  }]);
  return SsoLoginService;
}();
var SsoLoginUiHelper = /*#__PURE__*/function () {
  function SsoLoginUiHelper() {
    _classCallCheck(this, SsoLoginUiHelper);
    this.container = null;
  }
  _createClass(SsoLoginUiHelper, [{
    key: "init",
    value: function init(callback) {
      var _this2 = this;
      $(document).ready(function () {
        _this2.container = $(".entry-container");
        callback();
      });
    }
  }, {
    key: "showContainer",
    value: function showContainer() {
      this.container.removeClass("hide");
    }
  }, {
    key: "showEntryForm",
    value: function showEntryForm() {
      $(".entry-form").show();
    }
  }, {
    key: "hideEntryForm",
    value: function hideEntryForm() {
      $(".entry-form").hide();
    }
  }, {
    key: "showRoleForm",
    value: function showRoleForm() {
      $(".role-form").show();
    }
  }, {
    key: "hideRoleForm",
    value: function hideRoleForm() {
      $(".role-form").hide();
    }
  }, {
    key: "buildRolesList",
    value: function buildRolesList(roles) {
      var rolesListCtr = $(".role-form").find("select[name='ROLEGROUP']");
      // здесь контейнер очищается
      rolesListCtr.empty();
      roles.forEach(function (role) {
        rolesListCtr.append(new Option(role.Name, role.Id));
      });
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      return $("select[name='LSCOPE']").val();
    }
  }, {
    key: "getUserRole",
    value: function getUserRole() {
      return $("select[name='ROLEGROUP']").val();
    }
  }, {
    key: "getLScope",
    value: function getLScope() {
      return $("[name=LSCOPE]").val();
    }
  }, {
    key: "setLScope",
    value: function setLScope(complexId) {
      $("[name=LSCOPE]").val(complexId);
    }
  }, {
    key: "setScreenname",
    value: function setScreenname(screenname) {
      $("[name=Screenname]").val(screenname);
    }
  }]);
  return SsoLoginUiHelper;
}();
var SsoLoginController = /*#__PURE__*/function () {
  function SsoLoginController(idpUserList, arrRequestForward, mobileInfo) {
    _classCallCheck(this, SsoLoginController);
    this.ssoLoginService = new SsoLoginService(idpUserList, mobileInfo);
    this.uiHelper = new SsoLoginUiHelper();
    this.login_ctrl = (0, _login.login_ctor)();
    this.refs = {
      roles: {
        staff: 0,
        student: 1,
        parent: 2
      }
    };
    this.data = {
      idpUserList: null,
      arrRequestForward: null,
      addOpts: null,
      noUsers: false,
      // есть только один связанный пользователь
      singleRecord: false,
      needInteract: false,
      needChooseRole: false
    };
    this.data.idpUserList = this.ssoLoginService.idpUserList;
    this.data.arrRequestForward = arrRequestForward;
    this.loadAddOpts();
    this.data.noUsers = this.ssoLoginService.noUsers;
    this.data.singleRecord = this.ssoLoginService.singleUser != null;
  }
  _createClass(SsoLoginController, [{
    key: "loadAddOpts",
    value: function loadAddOpts() {
      var _this3 = this;
      this.data.addOpts = [];
      Object.keys(this.data.arrRequestForward).forEach(function (prop) {
        _this3.data.addOpts.push({
          name: prop,
          value: _this3.data.arrRequestForward[prop]
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;
      this.uiHelper.init(function () {
        if (_this4.data.singleRecord) {
          _this4.singleProcess();
        } else if (!_this4.data.noUsers) {
          _this4.uiHelper.showContainer();
          _this4.onChangeSelect();
        }
      });
    }
  }, {
    key: "singleProcess",
    value: function singleProcess() {
      var userInfo = this.ssoLoginService.singleUser;
      this.uiHelper.setLScope(userInfo.Complexid);
      this.uiHelper.setScreenname(userInfo.Screenname);
      this.initNeedChooseRole(userInfo);
      this.initNeedUserInteract(userInfo);

      // если не нужен ввод логин/пароль и не нужно выбирать роль, то вход осуществляется сразу
      if (!this.data.needInteract && !this.data.needChooseRole) {
        this.showInstantLogin();
        return;
      }
      this.uiHelper.showContainer();
      if (this.data.needChooseRole) {
        this.uiHelper.showRoleForm();
        this.uiHelper.buildRolesList(userInfo.Roles);
      }
      if (!this.data.needInteract) {
        this.uiHelper.hideEntryForm();
      }
    }
  }, {
    key: "showInstantLogin",
    value: function showInstantLogin() {
      var _this5 = this;
      $.show.processing("Выполняется вход");
      var ua = navigator.userAgent.toLowerCase();
      var safariBrowser = ua.indexOf("safari") != -1 && ua.indexOf("chrome") == -1;
      if (document.fonts && document.fonts.ready) {
        // ожидаем загрузки шрифтов на странице
        document.fonts.ready.then(function () {
          return _this5.doLogin();
        });
      } else if (safariBrowser) {
        //для сафари делаем исскуственную задержку - для прогрузки шрифтов
        setTimeout(function () {
          return _this5.doLogin();
        }, 500);
      } else {
        this.doLogin();
      }
    }
  }, {
    key: "showUserRoles",
    value: function showUserRoles() {
      var userInfo = this.getUserInfo();
      this.initNeedChooseRole(userInfo);
      if (this.data.needChooseRole) {
        this.uiHelper.showRoleForm();
        this.uiHelper.buildRolesList(userInfo.Roles);
      } else {
        this.uiHelper.hideRoleForm();
      }
    }
  }, {
    key: "initNeedChooseRole",
    value: function initNeedChooseRole(userInfo) {
      if (this.ssoLoginService.isMobile) {
        this.data.needChooseRole = false;
      } else {
        this.data.needChooseRole = userInfo.Roles && userInfo.Roles.length > 1;
      }
    }
  }, {
    key: "onChangeSelect",
    value: function onChangeSelect() {
      this.showUserRoles();
      this.showLoginForm();
      dataChanged();
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this6 = this;
      // кроссбраузерность
      var userInfo = function () {
        var filtered = _this6.data.idpUserList.filter(function (x) {
          return x.Complexid === _this6.uiHelper.getUserId();
        });
        if (!filtered || !filtered.length) {
          return null;
        }
        return filtered[0];
      }();
      return userInfo;
    }
  }, {
    key: "initNeedUserInteract",
    value: function initNeedUserInteract(userInfo) {
      var role = this.uiHelper.getUserRole();
      if (_.isNull(role) && this.data.needChooseRole) {
        role = userInfo.Roles[0].Id;
      }

      // todo
      var parentOrStudent = role == this.refs.roles.student || role == this.refs.roles.parent;
      if (this.ssoLoginService.isMobile) {
        parentOrStudent = true;
      }
      if (userInfo.Binded && parentOrStudent) {
        this.data.needInteract = false;
      } else {
        this.data.needInteract = userInfo.MustVerifyLoginPass;
      }
    }
  }, {
    key: "changeRole",
    value: function changeRole() {
      this.showLoginForm();
      dataChanged();
    }
  }, {
    key: "showLoginForm",
    value: function showLoginForm() {
      var userInfo = this.getUserInfo();
      this.initNeedUserInteract(userInfo);
      if (this.data.needInteract) {
        this.uiHelper.showEntryForm();
      } else {
        this.uiHelper.hideEntryForm();
      }
    }

    // функция проверки перед входом
  }, {
    key: "validateFunc",
    value: function validateFunc(user, pw) {
      var userName = user.val();
      if (userName == "" || pw.val() == "") {
        alert(language.Generic.Login.kEnterLoginAndPassword);
        return false;
      }
      return true;
    }
  }, {
    key: "CheckEnter",
    value: function CheckEnter(event) {
      if (event.keyCode == 13) {
        this.beContinue();
      }
    }
  }, {
    key: "doLogin",
    value: function doLogin() {
      var id = this.uiHelper.getLScope();
      var userInfo = _.findWhere(this.data.idpUserList, {
        Complexid: id
      });
      var authParams = $.extend({}, this.data.arrRequestForward, {
        LSCOPE: userInfo.Complexid
      });
      if (this.data.needChooseRole) {
        authParams.ROLEGROUP = this.uiHelper.getUserRole();
      }
      // уточняет роль
      else if (this.ssoLoginService.isMobile && userInfo.Roles.length > 1) {
        authParams.ROLEGROUP = 2; // родитель
      }

      var processing = $.show.processing();
      jsSubmit({
        action: "/webapi/login",
        data: authParams,
        defaultErrorHandling: false,
        onError: function onError(response) {
          processing.close();
          var msg = language.Generic.Common.kUnexpErr;
          if (response && response.responseJSON && response.responseJSON.message) {
            msg = response.responseJSON.message;
          }
          $.show.error(msg);
        }
      }).then(function (response) {
        if (response.at) {
          var data = response.requestData || {};
          data.at = response.at;
          var defOpts = {
            path: response.entryPoint,
            auth: false,
            nocache: false,
            params: data
          };
          if (response.errorMessage) {
            processing.close();
            $.show.error(response.errorMessage).then(function () {
              var options = $.extend({}, defOpts, {
                method: "GET"
              });
              delete options.params;
              postTo(options);
            });
          } else {
            postTo(defOpts);
          }
        } else {
          processing.close();
          $.show.error("ошибка авторизации");
        }
      });
    }
  }, {
    key: "beContinue",
    value: function beContinue() {
      if (this.data.needInteract) {
        this.login_ctrl.login(this.uiHelper.container, this.validateFunc, this.data.addOpts);
      } else {
        this.doLogin();
      }
    }
  }]);
  return SsoLoginController;
}();
exports.SsoLoginController = SsoLoginController;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lngLogin", function() { return lngLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_ctor", function() { return login_ctor; });
var SessionStore, _cookies;

SessionStore = __webpack_require__(3).SessionStore;

var lngLogin = {
  kFirstYouShouldSelect: language.Generic.Login.kFirstYouShouldSelect,
  kEmptyAjaxAnswer: language.Generic.Login.kEmptyAjaxAnswer,
  kErrorAjaxListLoading: language.Generic.Login.kErrorAjaxListLoading,
  kFirstYouShouldSelectSchool: language.Generic.Login.kFirstYouShouldSelectSchool,
  kEnterLoginAndPassword: language.Generic.Login.kEnterLoginAndPassword,
  kLoginByECardPossibleViaIEorChrome: language.Generic.Login.kLoginByECardPossibleViaIEorChrome,
  kECardIDWasReset: language.Generic.Login.kECardIDWasReset,
  kECardIDWasRead: language.Generic.Login.kECardIDWasRead
};

_cookies = _.chain(($.cookie("TTSLogin") || "").split('&')).map(function(cookie) {
  return cookie.split('=');
}).filter(function(cookieArr) {
  return typeof cookieArr[1] !== "undefined" && cookieArr[1];
}).object().value();

var filter = (function() {
  function filter(name1, optional, order, initItemText1) {
    this.name = name1;
    this.optional = optional;
    this.order = order;
    this.initItemText = initItemText1;
  }

  filter.prototype.getCooketVal = function() {
    var cookie;
    cookie = _.findWhere(_cookies, {
      name: this.name
    });
    return (cookie != null ? cookie.val : void 0) || -999999;
  };

  return filter;

})();

var login_ctor = function() {
  var NavEnterKeyHandler, _addOpts, _apply, _cacheVer, _constants, _container, _filters, _getAuthData, _initData, _initFilters, _login, _loginAndPass, _onChangeLastElem, _saveAccount, _sessionStore, _setOptions, _validateFunc, allowEnterPair, onLoginFormReady, onSuccessList, sendAjaxRequest;
  _container = null;
  _sessionStore = null;
  _onChangeLastElem = null;
  _cacheVer = null;
  _addOpts = null;
  _constants = {
    unselectedVal: -999999
  };
  _filters = null;
  _loginAndPass = null;
  _apply = null;
  _validateFunc = null;
  _initFilters = function(rawFilters) {
    _filters = (function() {
      var __filters, _getSelectByName, retObj;
      __filters = rawFilters;
      _getSelectByName = function(name) {
        return $('select[name=' + name + ']', _container);
      };
      retObj = {};
      retObj = _.map(rawFilters, function(filter) {
        return _getSelectByName(filter.name);
      });
      $.extend(retObj, {
        showFilter: function(filterName) {
          return this.getSelectByName(filterName).closest(".row").show();
        },
        hideFilter: function(filterName) {
          return this.getSelectByName(filterName).closest(".row").hide();
        },
        readOnlyFilter: function(filterName) {
          var parent, select, span, text;
          select = this.getSelectByName(filterName);
          parent = select.parent();
          text = $('option:selected', select).text();
          span = $('<span />').text(text);
          parent.append(span);
          return select.hide();
        },
        getNextFilter: function(filterName) {
          filter = this.getByName(filterName);
          return _.find(__filters, function(testFilter) {
            return testFilter.order === filter.order + 1;
          });
        },
        getSelectByName: _getSelectByName,
        getByName: function(name) {
          return _.find(__filters, function(filter) {
            return filter.name === name;
          });
        },
        disableAfter: function(filterName) {
          var curFilter, index, results;
          filter = this.getByName(filterName);
          results = [];
          for (index in __filters) {
            curFilter = __filters[index];
            if (curFilter.order <= filter.order) {
              continue;
            }
            results.push(_filters.getSelectByName(curFilter.name).prop('disabled', true).val(0).show().nextAll().remove());
          }
          return results;
        }
      });
      return retObj;
    })();
    _loginAndPass = $('input[name=UN], input[name=PW]', _container);
    return _apply = $('.button-login:not(.button-login-esia):not(.button-login-esa)', _container);
  };
  _setOptions = function(select, items, initItemText) {
    var i, item, jqSelect, len, option;
    jqSelect = $(select);
    jqSelect.html('');
    if (!items || !items.length || items.length <= 0) {
      return;
    }
    option = $('<option />').html(initItemText).attr('value', _constants.unselectedVal);
    jqSelect.append(option);
    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      option = $('<option />').html(item.name).attr('value', item.id);
      $(select).append(option);
    }
    jqSelect.prop('disabled', false);
    return jqSelect.show();
  };
  _initData = function() {
    var _initSuccess, deferred, initData, prepareAction, prepareSuffix;
    deferred = $.Deferred();
    _initSuccess = function(response) {
      var currId, data, firstParam, flt, i, id, items, jqSelect, lastSelect, lastVal, len, name, select, selects;
      data = response;
      selects = $('select', _container);
      lastSelect = $('select', _container).last();
      firstParam = selects.first().attr('id');
      if (data[firstParam].length !== 0) {
        for (i = 0, len = selects.length; i < len; i++) {
          select = selects[i];
          jqSelect = $(select);
          id = jqSelect.attr('id');
          name = jqSelect.attr('name');
          flt = _filters.getByName(name);
          currId = data[name];
          items = data[id];
          _setOptions(select, items, flt.initItemText);
          jqSelect.val(currId);
          if (!items || items.length !== 1) {
            continue;
          }
          if (currId === _constants.unselectedVal) {
            currId = items[0].id;
            jqSelect.val(currId);
            if (lastSelect.attr('id') !== id) {
              sendAjaxRequest(jqSelect);
            } else {
              _filters.readOnlyFilter(name);
            }
            break;
          }
          if (currId !== _constants.unselectedVal) {
            if (flt.optional) {
              _filters.hideFilter(name);
            } else {
              _filters.readOnlyFilter(name);
            }
          }
        }
        lastVal = lastSelect.val();
        if (lastVal && lastVal > _constants.unselectedVal) {
          allowEnterPair(lastSelect);
          if (_onChangeLastElem) {
            _onChangeLastElem(lastSelect);
          }
        }
        allowEnterPair(lastSelect);
      }
      deferred.resolve();
      return onLoginFormReady();
    };
    initData = $.extend({}, _cookies, {
      cacheVer: _cacheVer
    });
    prepareSuffix = _container.attr('id').replace("message", "").replace("-", "");
    prepareAction = '/webapi/prepare' + prepareSuffix + 'loginform';
    jsSubmit({
      action: prepareAction,
      method: "get",
      auth: false,
      defaultErrorHandling: false,
      cache: true,
      data: initData,
      onError: function(response) {
        var msg, ref;
        if (response.status === 0) {
          deferred.reject("canceled");
          return;
        }
        msg = (response != null ? (ref = response.responseJSON) != null ? ref.message : void 0 : void 0) || language.Generic.Common.kUnexpErr;
        window.lalert(msg);
        return deferred.reject(msg);
      },
      onSuccess: _initSuccess
    });
    return deferred.promise();
  };
  sendAjaxRequest = function($changedElement) {
    var strAjaxQuery;
    $('input[type=text], input[type=password]', _container).prop('disabled', true);
    _filters.disableAfter($changedElement.attr('name'));
    _apply.css('display', 'none');
    if ($changedElement.prop("selectedIndex") !== 0) {
      strAjaxQuery = $('select', _container).serialize();
      strAjaxQuery += "&LASTNAME=" + $changedElement.attr("name") + "&cacheVer=" + _cacheVer;
      return jsSubmit({
        action: '/webapi/loginform',
        method: "get",
        cache: true,
        auth: false,
        data: strAjaxQuery,
        onSuccess: onSuccessList
      });
    }
  };
  NavEnterKeyHandler = function(evt) {
    if (evt.which === 13) {
      return _login();
    }
  };
  onLoginFormReady = function() {
    return $(document).trigger("login_form_ready");
  };
  onSuccessList = function(response) {
    var currFilter, currFilterSelect, data, lastFilter, lastFilterSelect;
    data = response;
    lastFilter = _filters.getByName(data.lastElem);
    lastFilterSelect = _filters.getSelectByName(data.lastElem);
    if (lastFilterSelect.children().length === 2) {
      if (lastFilter.optional) {
        _filters.hideFilter(data.lastElem);
      } else {
        _filters.readOnlyFilter(data.lastElem);
      }
    }
    currFilter = _filters.getNextFilter(data.lastElem);
    currFilterSelect = _filters.getSelectByName(currFilter.name);
    _setOptions(currFilterSelect, data.items, currFilter.initItemText);
    currFilterSelect.nextAll().remove();
    if (data.items.length === 1) {
      currFilterSelect.val(data.items[0].id);
      if (_filters.getNextFilter(currFilter.name)) {
        return sendAjaxRequest(currFilterSelect);
      } else {
        _filters.readOnlyFilter(currFilter.name);
        allowEnterPair(currFilterSelect);
        return onLoginFormReady();
      }
    } else {
      _filters.showFilter(currFilter.name);
      return onLoginFormReady();
    }
  };
  _getAuthData = (function(_this) {
    return function(pw) {
      var deferred;
      deferred = $.Deferred();
      jsSubmit({
        action: "/webapi/auth/getdata",
        method: "POST",
        auth: false,
        showProcessing: false
      }).then(function(authData) {
        var pw2;
        pw2 = hexMD5_(authData.salt + hexMD5_(pw.val()));
        pw.val(pw2.substr(0, pw.val().length));
        return deferred.resolve({
          "lt": authData.lt,
          "pw2": pw2,
          "ver": authData.ver
        });
      }).fail(function() {
        return deferred.reject();
      });
      return deferred.promise();
    };
  })(this);
  _login = function(container, validateFunc, addOpts) {
    var processing, pw, user;
    _container = _container || container;
    user = $('[name=UN]', _container);
    pw = $('[name=PW]', _container);
    _validateFunc = typeof _validateFunc === "function" ? _validateFunc : validateFunc;
    addOpts = addOpts || _addOpts || [];
    if (!_validateFunc(user, pw)) {
      return;
    }
    _container.find("input[name=UN]").trigger("blur");
    _container.find("input[name=PW]").trigger("blur");
    processing = $.show.processing();
    return _getAuthData(pw).then(function(authData) {
      var authParams;
      authParams = _container.find('select, input').serializeArray();
      authParams.push({
        name: "lt",
        value: authData.lt
      });
      authParams.push({
        name: "pw2",
        value: authData.pw2
      });
      authParams.push({
        name: "ver",
        value: authData.ver
      });
      authParams.push.apply(authParams, addOpts);
      return jsSubmit({
        action: "/webapi/login",
        data: authParams,
        showProcessing: false,
        auth: false,
        defaultErrorHandling: false,
        onError: function(response) {
          var msg, ref;
          processing.close();
          msg = (response != null ? (ref = response.responseJSON) != null ? ref.message : void 0 : void 0) || language.Generic.Common.kUnexpErr;
          return $.show.error(msg).then(function() {
            user.trigger("focus");
            return pw.val("");
          });
        }
      }).then(function(response) {
        var data, defOpts;
        if (!response.at) {
          processing.close();
          $.show.error("ошибка авторизации");
          return;
        }
        data = response.requestData || {};
        data.at = response.at;
        defOpts = {
          path: response.entryPoint,
          auth: false,
          nocache: false,
          params: data
        };
        if (response.errorMessage) {
          processing.close();
          $.show.error(response.errorMessage).then(function() {
            var options;
            options = $.extend({}, defOpts, {
              method: "GET"
            });
            delete options.params;
            return postTo(options);
          });
          return;
        }
        return _saveAccount(data.at).then(function() {
          return postTo(defOpts);
        });
      }).always(function() {
        return setDBFree();
      });
    }).fail(function() {
      return processing.close();
    });
  };
  _saveAccount = function(at) {
    if (true) {
      return Promise.resolve();
    }
    return jsSubmit({
      action: "/webapi/auth/account",
      headers: {
        at: at
      },
      method: "get",
      showProcessing: false,
      auth: false,
      defaultErrorHandling: false
    }).then(function(accountInfo) {
      if (_sessionStore) {
        return _sessionStore.put(accountInfo);
      }
    });
  };
  allowEnterPair = function($changedElement) {
    if ($changedElement.prop("selectedIndex") !== 0) {
      _loginAndPass.prop('disabled', false);
      return _apply.css('display', 'inline');
    } else {
      _loginAndPass.prop('disabled', true);
      return _apply.css('display', 'none');
    }
  };
  return {
    init: function(cont, filters, validateFunc, cacheVer, addOpts) {
      var initPromise, onChange;
      _container = cont;
      _addOpts = addOpts;
      _sessionStore = new SessionStore();
      _initFilters(filters);
      _validateFunc = validateFunc;
      _cacheVer = cacheVer;
      initPromise = _initData();
      onChange = function(elem) {
        if (_onChangeLastElem) {
          _onChangeLastElem(elem);
        }
        return allowEnterPair(elem);
      };
      $('select', _container).prop("selectedIndex", 0);
      $('select', _container).not($('select', _container).last()).on('change', function() {
        return sendAjaxRequest($(this));
      });
      $('select', _container).last().on('change', function() {
        return onChange($(this));
      });
      $('select', _container).first().prop('disabled', false);
      $('select', _container).not($('select', _container).first()).prop('disabled', true);
      $('input[type=text], input[type=password]', _container).on('keypress', function(e) {
        return NavEnterKeyHandler(e);
      });
      return initPromise;
    },
    login: _login
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionStore = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SessionStore = /*#__PURE__*/function () {
  SessionStore.$inject = ["loginRepository"];
  /*@ngInject*/
  function SessionStore(loginRepository) {
    _classCallCheck(this, SessionStore);
    this.loginRepository = loginRepository;
  }
  _createClass(SessionStore, [{
    key: "getFromStorage",
    value: function getFromStorage() {
      var storedInfo = localStorage.getItem("session-store");
      if (!storedInfo) {
        return [];
      }
      //todo. handle errors
      return JSON.parse(storedInfo);
    }
  }, {
    key: "setToStorage",
    value: function setToStorage(list) {
      localStorage.setItem("session-store", JSON.stringify(list));
    }
  }, {
    key: "getRefreshTokensList",
    value: function getRefreshTokensList() {
      var storedInfo = localStorage.getItem("refresh-tokens-store");
      var list = null;
      if (storedInfo) {
        list = JSON.parse(storedInfo);
      }
      return list !== null && list !== void 0 ? list : [];
    }
  }, {
    key: "setRefreshTokensList",
    value: function setRefreshTokensList(list) {
      localStorage.setItem("refresh-tokens-store", JSON.stringify(list));
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken(userId, orgId) {
      return this.getRefreshTokensList().find(function (x) {
        return x.userId == userId && x.orgId == orgId;
      });
    }
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(token) {
      var list = this.getRefreshTokensList();
      var index = list.findIndex(function (x) {
        return x.userId == token.userId && x.orgId == token.orgId;
      });
      if (index >= 0) {
        Object.assign(list[index], token);
      } else {
        list.push(token);
      }
      this.setRefreshTokensList(list);
    }
  }, {
    key: "removeRefreshTokens",
    value: function removeRefreshTokens(account) {
      var list = this.getRefreshTokensList();
      var filtered = list.filter(function (x) {
        return x.userId !== account.user.id;
      });
      this.setRefreshTokensList(filtered);
    }
  }, {
    key: "removeRefreshToken",
    value: function removeRefreshToken(userId, orgId) {
      var list = this.getRefreshTokensList();
      var filtered = list.filter(function (x) {
        return x.userId !== userId && x.orgId != orgId;
      });
      this.setRefreshTokensList(filtered);
    }
  }, {
    key: "put",
    value: function put(account) {
      var list = this.getFromStorage();
      list.push(account);
      var filtered = this.getUniques(list);
      this.setToStorage(filtered);
    }
  }, {
    key: "remove",
    value: function remove(account) {
      var list = this.getFromStorage();
      var filtered = list.filter(function (a) {
        return a.user.id !== account.user.id;
      });
      this.setToStorage(filtered);
      this.removeRefreshTokens(account);
    }
  }, {
    key: "getUniques",
    value: function getUniques(accounts) {
      var grouped = arrayHelper.groupBy(accounts, function (s) {
        return s.user.id;
      });
      var filtered = grouped.map(function (gr) {
        var values = gr.values;
        var sorted = values.sort(function (a, b) {
          var aval = new Date(a.logintime).getTime() + (a.active ? 10000 : 0);
          var bval = new Date(b.logintime).getTime() + (b.active ? 10000 : 0);
          return aval - bval;
        });
        var lastLogin = sorted.pop();
        return lastLogin;
      });
      return filtered;
    }
  }, {
    key: "getStored",
    value: function getStored() {
      var list = this.getFromStorage();
      return this.getUniques(list);
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;
      var list = this.getFromStorage();
      var filtered = this.getUniques(list);
      // todo. не отображать слишком старые (более месяца)
      return this.loginRepository.checkAccountList(filtered).then(function (activeAccounts) {
        var saveCopy = activeAccounts.map(function (a) {
          return Object.assign({}, a);
        });
        saveCopy.forEach(function (x) {
          return x.activeToken = null;
        });
        _this.setToStorage(saveCopy);
        return activeAccounts;
      });
    }
  }]);
  return SessionStore;
}();
exports.SessionStore = SessionStore;
var arrayHelper = {
  groupBy: function groupBy(array, keyOptions) {
    var helper = {};
    var result = array.reduce(function (r, o) {
      var key;
      if (typeof keyOptions === "function") {
        key = keyOptions(o);
      } else if (Array.isArray(keyOptions)) {
        key = keyOptions.reduce(function (memo, prop) {
          return memo += o[prop] + "|";
        }, "");
      }
      var group = helper[key];
      if (!group) {
        group = {
          key: key,
          values: []
        };
        helper[key] = group;
        r.push(group);
      }
      group.values.push(o);
      return r;
    }, []);
    return result;
  }
};

/***/ })
/******/ ]);
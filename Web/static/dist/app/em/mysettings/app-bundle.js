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
/******/ 	return __webpack_require__(__webpack_require__.s = 384);
/******/ })
/************************************************************************/
/******/ ({

/***/ 152:
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

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserParams = exports.UserParamType = exports.UserParamNames = exports.UserInfoRoleType = exports.StaffWorkingStatus = exports.SimilarLocation = exports.ParamAccessType = exports.DependencyOperator = exports.DependActionType = exports.AddressType = void 0;
var UserInfoRoleType;
exports.UserInfoRoleType = UserInfoRoleType;
(function (UserInfoRoleType) {
  UserInfoRoleType[UserInfoRoleType["Staff"] = 1] = "Staff";
  UserInfoRoleType[UserInfoRoleType["Students"] = 2] = "Students";
  UserInfoRoleType[UserInfoRoleType["Parents"] = 3] = "Parents";
  UserInfoRoleType[UserInfoRoleType["EducManagers"] = 4] = "EducManagers";
})(UserInfoRoleType || (exports.UserInfoRoleType = UserInfoRoleType = {}));
var SimilarLocation;
exports.SimilarLocation = SimilarLocation;
(function (SimilarLocation) {
  /// <summary>
  /// в текущей ОО 
  /// </summary>
  SimilarLocation["InSchool"] = "InSchool";
  /// <summary>
  /// в пуле
  /// </summary>
  SimilarLocation["InPool"] = "InPool";
  /// <summary>
  /// в другой ОО, здесь не смотрятся УДОДы
  /// </summary>
  SimilarLocation["InOtherSchoolsExcludeUDODs"] = "InOtherSchoolsExcludeUDODs";
  /// <summary>
  /// в другой ОО, здесь смотрятся и УДОДы
  /// </summary>
  SimilarLocation["InOtherSchools"] = "InOtherSchools";
  /// <summary>
  /// в любом месте
  /// </summary>
  SimilarLocation["Any"] = "Any";
})(SimilarLocation || (exports.SimilarLocation = SimilarLocation = {}));
var StaffWorkingStatus;
exports.StaffWorkingStatus = StaffWorkingStatus;
(function (StaffWorkingStatus) {
  StaffWorkingStatus["dismissed"] = "Dismissed";
  StaffWorkingStatus["working"] = "Working";
})(StaffWorkingStatus || (exports.StaffWorkingStatus = StaffWorkingStatus = {}));
var AddressType;
exports.AddressType = AddressType;
(function (AddressType) {
  /// <summary>
  /// Совпадает домашний и регистрации
  /// </summary>
  AddressType["equals"] = "Equals";
  /// <summary>
  /// Регистрации
  /// </summary>
  AddressType["registration"] = "Registration";
  /// <summary>
  /// Домашний
  /// </summary>
  AddressType["home"] = "Home";
})(AddressType || (exports.AddressType = AddressType = {}));
var DependencyOperator;
exports.DependencyOperator = DependencyOperator;
(function (DependencyOperator) {
  DependencyOperator["Equals"] = "Equals";
  DependencyOperator["NotEquals"] = "NotEquals";
  DependencyOperator["LessThen"] = "LessThen";
  DependencyOperator["GreaterThen"] = "GreaterThen";
  DependencyOperator["In"] = "In";
  DependencyOperator["NotIn"] = "NotIn";
  DependencyOperator["Empty"] = "Empty";
  DependencyOperator["NotEmpty"] = "NotEmpty";
})(DependencyOperator || (exports.DependencyOperator = DependencyOperator = {}));
var DependActionType;
exports.DependActionType = DependActionType;
(function (DependActionType) {
  DependActionType["Hide"] = "Hide";
  DependActionType["Show"] = "Show";
  DependActionType["DisableParamItems"] = "DisableParamItems";
  DependActionType["EnableParamItems"] = "EnableParamItems";
})(DependActionType || (exports.DependActionType = DependActionType = {}));
var UserParamType;
exports.UserParamType = UserParamType;
(function (UserParamType) {
  /// <summary>
  /// тип - дата
  /// </summary>
  UserParamType["Date"] = "Date";
  /// <summary>
  /// тип - списочный. выбор значения осуществляется из списка
  /// </summary>
  UserParamType["List"] = "List";
  /// <summary>
  /// тип - строковый. свободный ввод
  /// </summary>
  UserParamType["String"] = "String";
  /// <summary>
  /// тип - списочный с возможностью множественного выбора
  /// </summary>
  UserParamType["MultiChoice"] = "MultiChoice";
  /// <summary>
  /// тип - группировочный. не имеет собственного значения. служит для группировки нескольких параметров
  /// </summary>
  UserParamType["Group"] = "Group";
  /// <summary>
  /// тип - указатель на другой параметр. указывает на списочный параметр <see cref="List"/>
  /// </summary>
  UserParamType["Pointer"] = "Pointer";
  /// <summary>
  /// тип - указатель на другой параметр. указывает на списочный параметр с множественными значениями <see cref="MultiChoice"/>
  /// </summary>
  UserParamType["Relation"] = "Relation";
  /// <summary>
  /// тип - свободный. ввод обрабатывается отдельно.
  /// </summary>
  UserParamType["Free"] = "Free";
  /// <summary>
  /// тип - текстовое поле
  /// </summary>
  UserParamType["Area"] = "Area";
  /// <summary>
  /// тип - логический. да/нет
  /// </summary>
  /// <remarks>
  /// пока не используется. заведен на будущее
  /// </remarks>
  UserParamType["Bool"] = "Bool";
})(UserParamType || (exports.UserParamType = UserParamType = {}));
var ParamAccessType;
exports.ParamAccessType = ParamAccessType;
(function (ParamAccessType) {
  ParamAccessType["Full"] = "Full";
  ParamAccessType["ReadOnly"] = "ReadOnly";
  ParamAccessType["Hidden"] = "Hidden";
})(ParamAccessType || (exports.ParamAccessType = ParamAccessType = {}));
var UserParams;
exports.UserParams = UserParams;
(function (UserParams) {
  UserParams[UserParams["educForm"] = 1041] = "educForm";
  UserParams[UserParams["educProgramPreSchool"] = 1071] = "educProgramPreSchool";
  UserParams[UserParams["educProgram"] = 1042] = "educProgram";
  UserParams[UserParams["disabilityType"] = 1048] = "disabilityType";
  UserParams[UserParams["socialStatus"] = 1026] = "socialStatus";
  UserParams[UserParams["privilege"] = 3002] = "privilege";
  UserParams[UserParams["paramGroupDisability"] = 1056] = "paramGroupDisability";
  UserParams[UserParams["disabilityGroup"] = 1057] = "disabilityGroup";
  UserParams[UserParams["disabilityCategory"] = 1058] = "disabilityCategory";
  UserParams[UserParams["disabilityEnd"] = 1059] = "disabilityEnd";
  UserParams[UserParams["adaptedProgram"] = 1060] = "adaptedProgram";
  UserParams[UserParams["needLongCare"] = 4003] = "needLongCare";
  /// Группа параметров "Инвалидность" (ЛК Родителя)
  UserParams[UserParams["disabilityParamGroupParent"] = 2025] = "disabilityParamGroupParent";
  /// Инвалидность (ЛК Родителя): Группа инвалидности
  UserParams[UserParams["disabilityGroupParent"] = 2026] = "disabilityGroupParent";
  /// Инвалидность (ЛК Родителя): Категория инвалидности
  UserParams[UserParams["disabilityCategoryParent"] = 2027] = "disabilityCategoryParent";
  /// Инвалидность (ЛК Родителя): Адаптированная программа
  UserParams[UserParams["adaptedProgramParent"] = 2028] = "adaptedProgramParent";
  /// Инвалидность (ЛК Родителя): Потребность в длительном лечении
  UserParams[UserParams["needLongCareParent"] = 4025] = "needLongCareParent";
  UserParams[UserParams["medicalPolicyGroup"] = 1021] = "medicalPolicyGroup";
  UserParams[UserParams["medCertifSeria"] = 1022] = "medCertifSeria";
  UserParams[UserParams["medCertifNum"] = 1023] = "medCertifNum";
  UserParams[UserParams["medCertifDate"] = 1024] = "medCertifDate";
  UserParams[UserParams["medOrg"] = 1025] = "medOrg";
  UserParams[UserParams["omega3"] = 1128] = "omega3";
  UserParams[UserParams["studentMovement"] = 1040] = "studentMovement";
  /// признак болеет/здоров (ЛК ученика)
  UserParams[UserParams["isIll"] = 1129] = "isIll";
})(UserParams || (exports.UserParams = UserParams = {}));
var UserParamNames;
exports.UserParamNames = UserParamNames;
(function (UserParamNames) {
  UserParamNames["housing"] = "HOUSING";
  UserParamNames["nationality"] = "NATIONALITY";
  UserParamNames["mobilephone"] = "MOBILE";
  UserParamNames["health"] = "HEALTH";
  UserParamNames["health_after18"] = "HEALTH_AFTER18";
  UserParamNames["fgroup"] = "FGROUP";
  UserParamNames["illnes"] = "ILLNESS";
})(UserParamNames || (exports.UserParamNames = UserParamNames = {}));

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoRepository = void 0;
var _baseRepository = __webpack_require__(41);
var _userinfo = __webpack_require__(153);
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
var UserInfoRepository = /*#__PURE__*/function (_BaseRepository) {
  UserInfoRepository.$inject = ["$http", "$dialogs", "$longWork", "appContext"];
  _inherits(UserInfoRepository, _BaseRepository);
  var _super = _createSuper(UserInfoRepository);
  /*@ngInject*/
  function UserInfoRepository($http, $dialogs, $longWork, appContext) {
    var _this;
    _classCallCheck(this, UserInfoRepository);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.appContext = appContext;
    return _this;
  }
  _createClass(UserInfoRepository, [{
    key: "getUserInfo",
    value: function getUserInfo(userId, roleType) {
      return this.$http.get('/webapi/userinfo', {
        params: {
          userId: userId,
          roleType: roleType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSeniorities",
    value: function getSeniorities(userId, typeId) {
      var params = {
        userId: userId
      };
      if (typeId) {
        params = Object.assign(params, {
          typeId: typeId
        });
      }
      return this.$http.get('/webapi/userinfo/seniorities', {
        params: {
          userId: userId,
          typeId: typeId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteSeniority",
    value: function deleteSeniority(seniorityId) {
      return this.$http["delete"]('/webapi/userinfo/seniorities', {
        params: {
          seniorityId: seniorityId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParameters",
    value: function getParameters(roleType) {
      return this.$http.get('/webapi/userinfo/parameters/', {
        params: {
          roleType: roleType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getBatchParameterValues",
    value: function getBatchParameterValues(query) {
      return this.$http.post('/webapi/userinfo/parameter/value/get-batch', query).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setBatchParameterValues",
    value: function setBatchParameterValues(command) {
      return this.$http.post('/webapi/userinfo/parameter/value/set-batch', command).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParamInfo",
    value: function getParamInfo(paramId) {
      return this.$http.get('/webapi/userinfo/parameters/' + paramId).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParamItems",
    value: function getParamItems(paramId) {
      return this.$http.get('/webapi/userinfo/parameters/' + paramId + "/items").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkSimilarUsers",
    value: function checkSimilarUsers(userId, roleType, userInfoCommonData) {
      return this.$http.post("/webapi/userinfo/".concat(userId, "/checkSimilar"), userInfoCommonData, {
        params: {
          roleType: roleType
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveUserInfo",
    value: function saveUserInfo(userId, roleType, userInfoData) {
      return this.$http.post("/webapi/userinfo/", userInfoData, {
        params: {
          roleType: roleType,
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSeniorityInfo",
    value: function getSeniorityInfo(userId, typeId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/staff/seniority"), {
        params: {
          typeId: typeId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setSeniorityInfo",
    value: function setSeniorityInfo(userId, seniorities) {
      return this.$http.post("/webapi/userinfo/seniorities", seniorities, {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentCreativesInfo",
    value: function getStudentCreativesInfo(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/studentCreatives")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAddEducation",
    value: function getAddEducation(userId, schoolId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/addeducation"), {
        params: {
          schoolId: schoolId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAddEducationsAll",
    value: function getAddEducationsAll(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/addeducation")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setAddEducationCost",
    value: function setAddEducationCost(userId, addEducationId, classId, cost, enrollReason) {
      return this.$http.post("/webapi/userinfo/".concat(userId, "/addeducation"), {
        addEducationId: addEducationId,
        classId: classId,
        cost: cost,
        enrollReason: enrollReason
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAidResultsInfo",
    value: function getAidResultsInfo(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/aidResults")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCommissionsInfo",
    value: function getCommissionsInfo(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/commissions")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFamilyObservesInfo",
    value: function getFamilyObservesInfo(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/familyobserves")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCommissionTypes",
    value: function getCommissionTypes() {
      return this.$http.get("/webapi/references/commissionTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFamilyObserveTypes",
    value: function getFamilyObserveTypes() {
      return this.$http.get("/webapi/references/familyObserveTypes").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editCommission",
    value: function editCommission(commission) {
      return this.$http.post("/webapi/userinfo/".concat(commission.studentId, "/commissions"), commission).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addCommission",
    value: function addCommission(commission) {
      return this.$http.put("/webapi/userinfo/".concat(commission.studentId, "/commissions"), commission).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeCommission",
    value: function removeCommission(commission) {
      return this.$http["delete"]("/webapi/userinfo/".concat(commission.studentId, "/commissions"), {
        params: {
          commissionId: commission.commissionId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editFamilyObserve",
    value: function editFamilyObserve(studentId, familyObserve) {
      return this.$http.post("/webapi/userinfo/".concat(studentId, "/familyobserves"), familyObserve).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addFamilyObserve",
    value: function addFamilyObserve(studentId, familyObserve) {
      return this.$http.put("/webapi/userinfo/".concat(studentId, "/familyobserves"), familyObserve).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeFamilyObserve",
    value: function removeFamilyObserve(studentId, familyObserve) {
      return this.$http["delete"]("/webapi/userinfo/".concat(studentId, "/familyobserves"), {
        params: {
          familyObserveId: familyObserve.id
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDependencies",
    value: function getDependencies() {
      return this.$http.get("/webapi/users/paramDependecies").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentParents",
    value: function getStudentParents(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/parents")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getParentStudents",
    value: function getParentStudents(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/students")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "associateParent",
    value: function associateParent(userId, parentId) {
      return this.$http.post("/webapi/userinfo/".concat(userId, "/parents"), null, {
        params: {
          parentId: parentId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "dissociateParent",
    value: function dissociateParent(userId, parentId) {
      return this.$http["delete"]("/webapi/userinfo/".concat(userId, "/parents"), {
        params: {
          parentId: parentId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentMainEducation",
    value: function getStudentMainEducation(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/mainEducation")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentCertificate",
    value: function getStudentCertificate(studentId) {
      return this.$http.get("/webapi/educcertificates/student/".concat(studentId)).then(this.handleResponse);
    }
  }, {
    key: "delPhoto",
    value: function delPhoto(userId) {
      return this.$http["delete"]("/webapi/userinfo/".concat(userId, "/photo")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUserSettings",
    value: function getUserSettings(userId) {
      return this.$http.get("/webapi/usersettings", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUserAddresses",
    value: function getUserAddresses(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/addresses")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getRoles",
    value: function getRoles(staff, em) {
      return this.$http.get("/webapi/references/roles", {
        params: {
          "at": this.appContext.at,
          staff: staff,
          em: em
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCitizenships",
    value: function getCitizenships() {
      return this.$http.get("/webapi/userinfo/citizenships").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeacherSubjects",
    value: function getTeacherSubjects(teacherId) {
      return this.$http.get("/webapi/userinfo/".concat(teacherId, "/staff/teacherSubjects")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setTeacherSubjects",
    value: function setTeacherSubjects(userId, subjectIds) {
      return this.$http.post("/webapi/userinfo/staff/teacherSubjects", subjectIds, {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getAvailableTeacherSubjects",
    value: function getAvailableTeacherSubjects(teacherId) {
      return this.$http.get("/webapi/userinfo/".concat(teacherId, "/staff/availableTeacherSubjects")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTeacherClasses",
    value: function getTeacherClasses(teacherId) {
      return this.$http.get("/webapi/userinfo/".concat(teacherId, "/staff/teacherClasses")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setRegEqualHome",
    value: function setRegEqualHome(userId, forAll) {
      return this.$http.post("/webapi/addresses/users/".concat(userId, "/setregequalhome"), {
        params: {
          forAll: forAll
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setAddress",
    value: function setAddress(userId, addressId, addressType, forAll) {
      var params = {
        addressId: addressId,
        addressType: addressType,
        forAll: forAll
      };
      return this.$http.post("/webapi/addresses/users/".concat(userId), null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getIdentityDocumentsCheckAccess",
    value: function getIdentityDocumentsCheckAccess(userId) {
      return this.$http.get("/webapi/users/".concat(userId, "/info/identityDocuments/checkAccess")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getEventsCheckReadAccess",
    value: function getEventsCheckReadAccess(userId) {
      return this.$http.get("/webapi/users/".concat(userId, "/events/checkReadAccess")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getCohabitants",
    value: function getCohabitants(userId, addressId, addressType) {
      var params = {
        addressId: addressId,
        addressType: addressType
      };
      return this.$http.get("/webapi/userinfo/".concat(userId, "/addresses/cohabitants"), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createPfrSnilsRequest",
    value: function createPfrSnilsRequest(userId) {
      return this.$http.post("/webapi/integration/pfr/snils-requests", {
        userId: userId
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSnilsRequest",
    value: function getSnilsRequest(userId) {
      var _this2 = this;
      var params = {
        userId: userId
      };
      return this.$http.get("/webapi/integration/pfr/snils-requests/get-by-user", {
        params: params
      }).then(this.handleResponse, function (response) {
        if (response.status != 404) _this2.handleError(response);
      });
    }
  }, {
    key: "getChildAddresses",
    value: function getChildAddresses(userId, addressType) {
      var params = addressType == null ? null : {
        addressType: addressType
      };
      return this.$http.get("/webapi/userinfo/".concat(userId, "/childs/addresses"), {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudentClasses",
    value: function getStudentClasses(userId) {
      return this.$http.get("/webapi/userinfo/".concat(userId, "/student/classes")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteParent",
    value: function deleteParent(userId) {
      return this.$http["delete"]("/webapi/users/parents", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteStaff",
    value: function deleteStaff(userId) {
      return this.$http["delete"]("/webapi/users/staff", {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "changeStaffWorkStatus",
    value: function changeStaffWorkStatus(userId, status) {
      var params = {
        userId: userId,
        operation: status === _userinfo.StaffWorkingStatus.working ? "Recruitment" : "Dismissal"
      };
      return this.$http.post("/webapi/users/staff/employment", null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getRelatives",
    value: function getRelatives(userId) {
      return this.$http.get("/webapi/staff/".concat(userId, "/relatives")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createRelative",
    value: function createRelative(userId, relative) {
      return this.$http.put("/webapi/staff/".concat(userId, "/relatives"), relative).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editRelative",
    value: function editRelative(userId, relative) {
      return this.$http.post("/webapi/staff/".concat(userId, "/relatives/").concat(relative.id), relative).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteRelative",
    value: function deleteRelative(userId, relativeId) {
      return this.$http["delete"]("/webapi/staff/".concat(userId, "/relatives/").concat(relativeId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUserNickname",
    value: function getUserNickname(userId) {
      return this.$http.get('/webapi/users/get', {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkEmUserRoleIsNotSingle",
    value: function checkEmUserRoleIsNotSingle(userId, role) {
      return this.$http.get("/webapi/em/user/".concat(userId, "/role/").concat(role), {
        params: {
          userId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "bindWinAccount",
    value: function bindWinAccount() {
      var _this3 = this;
      var handleAspError = function handleAspError(response) {
        var data = response.data;
        if (data) {
          var error = data;
          _this3.$dialogs.error(error.message);
          return true;
        }
        if (response.status == 401) {
          return true;
        }
        return false;
      };
      return this.$http.post("/winauthlogin.asp", "CU=1&_AJAXCALL_", {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        if (handleAspError(response)) {
          return;
        }
        var data = response.data;
        return data;
      }, function (response) {
        if (handleAspError(response)) {
          return;
        }
        _this3.$dialogs.error(response.message || language.Generic.Login.kWinAuthError);
      });
    }
  }]);
  return UserInfoRepository;
}(_baseRepository.BaseRepository);
exports.UserInfoRepository = UserInfoRepository;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileValidator = exports.MobileInputDirective = exports.MobileInputController = exports.MobileInputComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
__webpack_require__(181);
/*@ngInject*/
var MobileInputDirective = function MobileInputDirective(language) {
  return {
    require: 'ngModel',
    link: function link(scope, element, attrs, ngModel) {
      var initFlag = false;
      var maskedFlag = false;
      var localSettings = {
        regExpAlphabet: "",
        firstLetter: "А",
        lastLetter: "Я",
        phoneStateCode: "7",
        phoneNumberLength: 11,
        phoneTemplate: "+9(999)999-99-99"
      };
      var setMaskHandler = function setMaskHandler(e) {
        var handlerValidator = new MobileValidator(e.target.value, localSettings.phoneStateCode, localSettings.phoneNumberLength, language);
        if (!handlerValidator.validate().error) {
          element.inputmask(localSettings.phoneTemplate);
          maskedFlag = true;
          element.off("input", setMaskHandler);
        }
        ;
      };
      var validator = null;
      var initValidator = function initValidator(viewValue) {
        if (validator == null || validator.mobile !== viewValue) {
          validator = new MobileValidator(viewValue, localSettings.phoneStateCode, localSettings.phoneNumberLength, language);
        }
      };
      ngModel.$formatters.push(function (raw) {
        if (raw == null || raw == "") {
          element.inputmask(localSettings.phoneTemplate);
          maskedFlag = true;
          return "";
        }
        var mobileValidator = new MobileValidator(raw, localSettings.phoneStateCode, localSettings.phoneNumberLength, language);
        if (!initFlag) {
          initFlag = true;
          if (!mobileValidator.validate().error) {
            element.inputmask(localSettings.phoneTemplate);
            maskedFlag = true;
          } else {
            element.on("input", setMaskHandler);
          }
        }
        return raw;
      });
      ngModel.$parsers.push(function (raw) {
        if (raw == null || raw == "") {
          if (!maskedFlag) {
            element.inputmask(localSettings.phoneTemplate);
            maskedFlag = true;
          }
          return null;
        }
        //получаем значение без форматирования
        var unmaskedValue = element.inputmask("unmaskedvalue");
        return unmaskedValue;
      });
      ngModel.$validators.numbersOnly = function (modelValue, viewValue) {
        if (ngModel.$isEmpty(modelValue)) {
          return true;
        }
        initValidator(viewValue);
        var result = validator.validate();
        return !result.error || result.type != "numbersOnly";
      };
      ngModel.$validators.wrongLength = function (modelValue, viewValue) {
        if (ngModel.$isEmpty(modelValue)) {
          return true;
        }
        initValidator(viewValue);
        var result = validator.validate();
        return !result.error || result.type != "wrongLength";
      };
      ngModel.$validators.mustStartWith = function (modelValue, viewValue) {
        if (ngModel.$isEmpty(modelValue)) {
          return true;
        }
        initValidator(viewValue);
        var result = validator.validate();
        return !result.error || result.type != "mustStartWith";
      };
    }
  };
};
MobileInputDirective.$inject = ["language"];
exports.MobileInputDirective = MobileInputDirective;
var MobileValidator = /*#__PURE__*/function () {
  function MobileValidator(mobilePhone, phoneStateCode, phoneNumberLength, language) {
    _classCallCheck(this, MobileValidator);
    this.mobilePhone = mobilePhone;
    this.phoneStateCode = phoneStateCode;
    this.phoneNumberLength = phoneNumberLength;
    this.language = language;
    this.mobile = mobilePhone;
  }
  _createClass(MobileValidator, [{
    key: "validate",
    value: function validate() {
      var messageText = "";
      var i;
      if (!this.mobile) {
        return {
          error: false
        };
      }
      var sMobile = this.mobile.replace(/\_+/g, "").replace(/\(+/g, "").replace(/\)+/g, "").replace(/\++/g, "").replace(/\-+/g, "");
      if (!sMobile) {
        return {
          error: false
        };
      }
      if (sMobile.indexOf(this.phoneStateCode) != 0) {
        messageText = this.language.Generic.SetupSchoolUI.kMobileValueMustStartWith.format(this.language.Generic.Common.kMobilePhone, this.phoneStateCode);
        return {
          error: true,
          message: messageText,
          type: "mustStartWith"
        };
      }
      for (i = 0; i < sMobile.length; i++) {
        if (isNaN(sMobile.charAt(i))) {
          messageText = this.language.Generic.SetupSchoolUI.kFieldPhoneHasOnlyNumbers.format(this.language.Generic.Common.kMobilePhone);
          return {
            error: true,
            message: messageText,
            type: "numbersOnly"
          };
        }
      }
      if (sMobile.length != this.phoneNumberLength) {
        messageText = this.language.Generic.SetupSchoolUI.kMobileLenMustBe.format(this.language.Generic.Common.kMobilePhone, this.phoneNumberLength);
        return {
          error: true,
          message: messageText,
          type: "wrongLength"
        };
      }
      return {
        error: false
      };
    }
  }]);
  return MobileValidator;
}();
exports.MobileValidator = MobileValidator;
var MobileInputController = /*#__PURE__*/function () {
  MobileInputController.$inject = ["language"];
  /*@ngInject*/
  function MobileInputController(language) {
    _classCallCheck(this, MobileInputController);
    this.language = language;
    this.localSettings = {
      regExpAlphabet: "",
      firstLetter: "А",
      lastLetter: "Я",
      phoneStateCode: "7",
      phoneNumberLength: 11,
      phoneTemplate: "+9(999)999-99-99"
    };
  }
  _createClass(MobileInputController, [{
    key: "$onInit",
    value: function $onInit() {}
  }, {
    key: "$postLink",
    value: function $postLink() {
      this.mobilephoneForm.next(this.form);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.mobilephone.next(this.value);
    }
  }, {
    key: "mustStartWithMessage",
    value: function mustStartWithMessage() {
      return this.language.Generic.SetupSchoolUI.kMobileValueMustStartWith.format(this.language.Generic.Common.kMobilePhone, this.localSettings.phoneStateCode).replace(/\\'/g, '"');
    }
  }, {
    key: "wrongLengthMessage",
    value: function wrongLengthMessage() {
      return this.language.Generic.SetupSchoolUI.kMobileLenMustBe.format(this.language.Generic.Common.kMobilePhone, this.localSettings.phoneNumberLength).replace(/\\'/g, '"');
    }
  }, {
    key: "numbersOnlyMessage",
    value: function numbersOnlyMessage() {
      return this.language.Generic.SetupSchoolUI.kFieldPhoneHasOnlyNumbers.format(this.language.Generic.Common.kMobilePhone).replace(/\\'/g, '"');
    }
  }]);
  return MobileInputController;
}();
exports.MobileInputController = MobileInputController;
var MobileInputComponent = {
  controller: MobileInputController,
  selector: "mobileInputComponent",
  template: "\n\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.mobile.$invalid }\">\n\t\t\t<input track-changes size=\"25\" name=\"mobile\" mobile-input type=\"text\" ng-model=\"$ctrl.value\" ng-disabled=\"$ctrl.readonly\" class=\"form-control\" ng-change=\"$ctrl.onChange()\"></input>\n\t\t\t<div ng-messages=\"$ctrl.form.mobile.$error\">\n\t\t\t\t<span class=\"help-block\" ng-message=\"numbersOnly\">{{$ctrl.numbersOnlyMessage()}}</span>\n\t\t\t\t<span class=\"help-block\" ng-message=\"mustStartWith\">{{$ctrl.mustStartWithMessage()}}</span>\n\t\t\t\t<span class=\"help-block\" ng-message=\"wrongLength\">{{$ctrl.wrongLengthMessage()}}</span>\n\t\t\t</div>\n\t\t</ng-form>\n\t",
  bindings: {
    readonly: "<",
    value: "<",
    mobilephone: "=",
    mobilephoneForm: "=form"
  }
};
exports.MobileInputComponent = MobileInputComponent;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
* jquery.inputmask.bundle.js
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2015 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.2.6-11
*/
!function (a) {
  function b(c, d) {
    return this instanceof b ? (a.isPlainObject(c) ? d = c : (d = d || {}, d.alias = c), this.el = void 0, this.opts = a.extend(!0, {}, this.defaults, d), this.noMasksCache = d && void 0 !== d.definitions, this.userOptions = d || {}, void e(this.opts.alias, d, this.opts)) : new b(c, d);
  }
  function c(a) {
    var b = document.createElement("input"),
      c = "on" + a,
      d = (c in b);
    return d || (b.setAttribute(c, "return;"), d = "function" == typeof b[c]), b = null, d;
  }
  function d(a) {
    var b = "text" === a || "tel" === a || "password" === a;
    if (!b) {
      var c = document.createElement("input");
      c.setAttribute("type", a), b = "text" === c.type, c = null;
    }
    return b;
  }
  function e(b, c, d) {
    var f = d.aliases[b];
    return f ? (f.alias && e(f.alias, void 0, d), a.extend(!0, d, f), a.extend(!0, d, c), !0) : (null === d.mask && (d.mask = b), !1);
  }
  function f(b, c, d) {
    function f(a, c) {
      c = void 0 !== c ? c : b.getAttribute("data-inputmask-" + a), null !== c && ("string" == typeof c && (0 === a.indexOf("on") ? c = window[c] : "false" === c ? c = !1 : "true" === c && (c = !0)), d[a] = c);
    }
    var g,
      h,
      i,
      j,
      k = b.getAttribute("data-inputmask");
    if (k && "" !== k && (k = k.replace(new RegExp("'", "g"), '"'), h = JSON.parse("{" + k + "}")), h) {
      i = void 0;
      for (j in h) if ("alias" === j.toLowerCase()) {
        i = h[j];
        break;
      }
    }
    f("alias", i), d.alias && e(d.alias, d, c);
    for (g in c) {
      if (h) {
        i = void 0;
        for (j in h) if (j.toLowerCase() === g.toLowerCase()) {
          i = h[j];
          break;
        }
      }
      f(g, i);
    }
    return a.extend(!0, c, d), c;
  }
  function g(c, d) {
    function e(b) {
      function d(a, b, c, d) {
        this.matches = [], this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = {
          min: 1,
          max: 1
        };
      }
      function e(b, d, e) {
        var f = c.definitions[d];
        e = void 0 !== e ? e : b.matches.length;
        var g = b.matches[e - 1];
        if (f && !r) {
          f.placeholder = a.isFunction(f.placeholder) ? f.placeholder(c) : f.placeholder;
          for (var h = f.prevalidator, i = h ? h.length : 0, j = 1; j < f.cardinality; j++) {
            var k = i >= j ? h[j - 1] : [],
              l = k.validator,
              m = k.cardinality;
            b.matches.splice(e++, 0, {
              fn: l ? "string" == typeof l ? new RegExp(l) : new function () {
                this.test = l;
              }() : new RegExp("."),
              cardinality: m ? m : 1,
              optionality: b.isOptional,
              newBlockMarker: void 0 === g || g.def !== (f.definitionSymbol || d),
              casing: f.casing,
              def: f.definitionSymbol || d,
              placeholder: f.placeholder,
              mask: d
            }), g = b.matches[e - 1];
          }
          b.matches.splice(e++, 0, {
            fn: f.validator ? "string" == typeof f.validator ? new RegExp(f.validator) : new function () {
              this.test = f.validator;
            }() : new RegExp("."),
            cardinality: f.cardinality,
            optionality: b.isOptional,
            newBlockMarker: void 0 === g || g.def !== (f.definitionSymbol || d),
            casing: f.casing,
            def: f.definitionSymbol || d,
            placeholder: f.placeholder,
            mask: d
          });
        } else b.matches.splice(e++, 0, {
          fn: null,
          cardinality: 0,
          optionality: b.isOptional,
          newBlockMarker: void 0 === g || g.def !== d,
          casing: null,
          def: c.staticDefinitionSymbol || d,
          placeholder: void 0 !== c.staticDefinitionSymbol ? d : void 0,
          mask: d
        }), r = !1;
      }
      function f(a, b) {
        a.isGroup && (a.isGroup = !1, e(a, c.groupmarker.start, 0), b !== !0 && e(a, c.groupmarker.end));
      }
      function g(a, b, c, d) {
        b.matches.length > 0 && (void 0 === d || d) && (c = b.matches[b.matches.length - 1], f(c)), e(b, a);
      }
      function h() {
        if (t.length > 0) {
          if (m = t[t.length - 1], g(k, m, o, !m.isAlternator), m.isAlternator) {
            n = t.pop();
            for (var a = 0; a < n.matches.length; a++) n.matches[a].isGroup = !1;
            t.length > 0 ? (m = t[t.length - 1], m.matches.push(n)) : s.matches.push(n);
          }
        } else g(k, s, o);
      }
      function i(a) {
        function b(a) {
          return a === c.optionalmarker.start ? a = c.optionalmarker.end : a === c.optionalmarker.end ? a = c.optionalmarker.start : a === c.groupmarker.start ? a = c.groupmarker.end : a === c.groupmarker.end && (a = c.groupmarker.start), a;
        }
        a.matches = a.matches.reverse();
        for (var d in a.matches) {
          var e = parseInt(d);
          if (a.matches[d].isQuantifier && a.matches[e + 1] && a.matches[e + 1].isGroup) {
            var f = a.matches[d];
            a.matches.splice(d, 1), a.matches.splice(e + 1, 0, f);
          }
          void 0 !== a.matches[d].matches ? a.matches[d] = i(a.matches[d]) : a.matches[d] = b(a.matches[d]);
        }
        return a;
      }
      for (var j, k, l, m, n, o, p, q = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, r = !1, s = new d(), t = [], u = []; j = q.exec(b);) if (k = j[0], r) h();else switch (k.charAt(0)) {
        case c.escapeChar:
          r = !0;
          break;
        case c.optionalmarker.end:
        case c.groupmarker.end:
          if (l = t.pop(), void 0 !== l) {
            if (t.length > 0) {
              if (m = t[t.length - 1], m.matches.push(l), m.isAlternator) {
                n = t.pop();
                for (var v = 0; v < n.matches.length; v++) n.matches[v].isGroup = !1;
                t.length > 0 ? (m = t[t.length - 1], m.matches.push(n)) : s.matches.push(n);
              }
            } else s.matches.push(l);
          } else h();
          break;
        case c.optionalmarker.start:
          t.push(new d(!1, !0));
          break;
        case c.groupmarker.start:
          t.push(new d(!0));
          break;
        case c.quantifiermarker.start:
          var w = new d(!1, !1, !0);
          k = k.replace(/[{}]/g, "");
          var x = k.split(","),
            y = isNaN(x[0]) ? x[0] : parseInt(x[0]),
            z = 1 === x.length ? y : isNaN(x[1]) ? x[1] : parseInt(x[1]);
          if (("*" === z || "+" === z) && (y = "*" === z ? 0 : 1), w.quantifier = {
            min: y,
            max: z
          }, t.length > 0) {
            var A = t[t.length - 1].matches;
            j = A.pop(), j.isGroup || (p = new d(!0), p.matches.push(j), j = p), A.push(j), A.push(w);
          } else j = s.matches.pop(), j.isGroup || (p = new d(!0), p.matches.push(j), j = p), s.matches.push(j), s.matches.push(w);
          break;
        case c.alternatormarker:
          t.length > 0 ? (m = t[t.length - 1], o = m.matches.pop()) : o = s.matches.pop(), o.isAlternator ? t.push(o) : (n = new d(!1, !1, !1, !0), n.matches.push(o), t.push(n));
          break;
        default:
          h();
      }
      for (; t.length > 0;) l = t.pop(), f(l, !0), s.matches.push(l);
      return s.matches.length > 0 && (o = s.matches[s.matches.length - 1], f(o), u.push(s)), c.numericInput && i(u[0]), u;
    }
    function f(f, g) {
      if (null === f || "" === f) return void 0;
      if (1 === f.length && c.greedy === !1 && 0 !== c.repeat && (c.placeholder = ""), c.repeat > 0 || "*" === c.repeat || "+" === c.repeat) {
        var h = "*" === c.repeat ? 0 : "+" === c.repeat ? 1 : c.repeat;
        f = c.groupmarker.start + f + c.groupmarker.end + c.quantifiermarker.start + h + "," + c.repeat + c.quantifiermarker.end;
      }
      var i;
      return void 0 === b.prototype.masksCache[f] || d === !0 ? (i = {
        mask: f,
        maskToken: e(f),
        validPositions: {},
        _buffer: void 0,
        buffer: void 0,
        tests: {},
        metadata: g
      }, d !== !0 && (b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f] = i, i = a.extend(!0, {}, b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f]))) : i = a.extend(!0, {}, b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f]), i;
    }
    function g(a) {
      return a = a.toString();
    }
    var h;
    if (a.isFunction(c.mask) && (c.mask = c.mask(c)), a.isArray(c.mask)) {
      if (c.mask.length > 1) {
        c.keepStatic = null === c.keepStatic ? !0 : c.keepStatic;
        var i = "(";
        return a.each(c.numericInput ? c.mask.reverse() : c.mask, function (b, c) {
          i.length > 1 && (i += ")|("), i += g(void 0 === c.mask || a.isFunction(c.mask) ? c : c.mask);
        }), i += ")", f(i, c.mask);
      }
      c.mask = c.mask.pop();
    }
    return c.mask && (h = void 0 === c.mask.mask || a.isFunction(c.mask.mask) ? f(g(c.mask), c.mask) : f(g(c.mask.mask), c.mask)), h;
  }
  function h(e, f, g) {
    function i(a, b, c) {
      b = b || 0;
      var d,
        e,
        f,
        g = [],
        h = 0;
      do {
        if (a === !0 && p().validPositions[h]) {
          var i = p().validPositions[h];
          e = i.match, d = i.locator.slice(), g.push(c === !0 ? i.input : L(h, e));
        } else f = u(h, d, h - 1), e = f.match, d = f.locator.slice(), g.push(L(h, e));
        h++;
      } while ((void 0 === ra || ra > h - 1) && null !== e.fn || null === e.fn && "" !== e.def || b >= h);
      return g.pop(), g;
    }
    function p() {
      return f;
    }
    function q(a) {
      var b = p();
      b.buffer = void 0, a !== !0 && (b.tests = {}, b._buffer = void 0, b.validPositions = {}, b.p = 0);
    }
    function r(a, b) {
      var c = p(),
        d = -1,
        e = c.validPositions;
      void 0 === a && (a = -1);
      var f = d,
        g = d;
      for (var h in e) {
        var i = parseInt(h);
        e[i] && (b || null !== e[i].match.fn) && (a >= i && (f = i), i >= a && (g = i));
      }
      return d = -1 !== f && a - f > 1 || a > g ? f : g;
    }
    function s(b, c, d) {
      if (g.insertMode && void 0 !== p().validPositions[b] && void 0 === d) {
        var e,
          f = a.extend(!0, {}, p().validPositions),
          h = r();
        for (e = b; h >= e; e++) delete p().validPositions[e];
        p().validPositions[b] = c;
        var i,
          j = !0,
          k = p().validPositions;
        for (e = i = b; h >= e; e++) {
          var l = f[e];
          if (void 0 !== l) for (var m = i, n = -1; m < G() && (null == l.match.fn && k[e] && (k[e].match.optionalQuantifier === !0 || k[e].match.optionality === !0) || null != l.match.fn);) {
            if (null === l.match.fn || !g.keepStatic && k[e] && (void 0 !== k[e + 1] && y(e + 1, k[e].locator.slice(), e).length > 1 || void 0 !== k[e].alternation) ? m++ : m = H(i), w(m, l.match.def)) {
              j = E(m, l.input, !0, !0) !== !1, i = m;
              break;
            }
            if (j = null == l.match.fn, n === m) break;
            n = m;
          }
          if (!j) break;
        }
        if (!j) return p().validPositions = a.extend(!0, {}, f), q(!0), !1;
      } else p().validPositions[b] = c;
      return q(!0), !0;
    }
    function t(a, b, c, d) {
      var e,
        f = a;
      for (p().p = a, e = f; b > e; e++) void 0 !== p().validPositions[e] && (c === !0 || g.canClearPosition(p(), e, r(), d, g) !== !1) && delete p().validPositions[e];
      for (e = f + 1; e <= r();) {
        for (; void 0 !== p().validPositions[f];) f++;
        var h = p().validPositions[f];
        if (f > e && (e = f + 1), void 0 === p().validPositions[e] && F(e) || void 0 !== h) e++;else {
          var i = u(e);
          w(f, i.match.def) ? E(f, i.input || L(e), !0) !== !1 && (delete p().validPositions[e], e++) : F(e) || (e++, f--), f++;
        }
      }
      var j = r(),
        k = G();
      for (d !== !0 && c !== !0 && void 0 !== p().validPositions[j] && p().validPositions[j].input === g.radixPoint && delete p().validPositions[j], e = j + 1; k >= e; e++) p().validPositions[e] && delete p().validPositions[e];
      q(!0);
    }
    function u(a, b, c) {
      var d = p().validPositions[a];
      if (void 0 === d) for (var e = y(a, b, c), f = r(), h = p().validPositions[f] || y(0)[0], i = void 0 !== h.alternation ? h.locator[h.alternation].toString().split(",") : [], j = 0; j < e.length && (d = e[j], !(d.match && (g.greedy && d.match.optionalQuantifier !== !0 || (d.match.optionality === !1 || d.match.newBlockMarker === !1) && d.match.optionalQuantifier !== !0) && (void 0 === h.alternation || h.alternation !== d.alternation || void 0 !== d.locator[h.alternation] && D(d.locator[h.alternation].toString().split(","), i)))); j++);
      return d;
    }
    function v(a) {
      return p().validPositions[a] ? p().validPositions[a].match : y(a)[0].match;
    }
    function w(a, b) {
      for (var c = !1, d = y(a), e = 0; e < d.length; e++) if (d[e].match && d[e].match.def === b) {
        c = !0;
        break;
      }
      return c;
    }
    function x(b, c) {
      var d, e;
      return (p().tests[b] || p().validPositions[b]) && a.each(p().tests[b] || [p().validPositions[b]], function (a, b) {
        var f = b.alternation ? b.locator[b.alternation].toString().indexOf(c) : -1;
        (void 0 === e || e > f) && -1 !== f && (d = b, e = f);
      }), d;
    }
    function y(b, c, d, e) {
      function f(c, d, e, i) {
        function k(e, i, n) {
          function o(a, b) {
            var c = x(a, b);
            return c ? c.locator.slice(c.alternation + 1) : [];
          }
          if (j > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + p().mask;
          if (j === b && void 0 === e.matches) return l.push({
            match: e,
            locator: i.reverse()
          }), !0;
          if (void 0 !== e.matches) {
            if (e.isGroup && n !== e) {
              if (e = k(c.matches[a.inArray(e, c.matches) + 1], i)) return !0;
            } else if (e.isOptional) {
              var q = e;
              if (e = f(e, d, i, n)) {
                if (g = l[l.length - 1].match, h = 0 === a.inArray(g, q.matches), !h) return !0;
                m = !0, j = b;
              }
            } else if (e.isAlternator) {
              var r,
                s = e,
                t = [],
                u = l.slice(),
                v = i.length,
                w = d.length > 0 ? d.shift() : -1;
              if (-1 === w || "string" == typeof w) {
                var y,
                  z = j,
                  A = d.slice(),
                  B = [];
                if ("string" == typeof w) B = w.split(",");else for (y = 0; y < s.matches.length; y++) B.push(y);
                for (var C = 0; C < B.length; C++) {
                  if (y = parseInt(B[C]), l = [], d = o(j, y), e = k(s.matches[y] || c.matches[y], [y].concat(i), n) || e, e !== !0 && void 0 !== e && B[B.length - 1] < s.matches.length) {
                    var D = c.matches.indexOf(e) + 1;
                    c.matches.length > D && (e = k(c.matches[D], [D].concat(i.slice(1, i.length)), n), e && (B.push(D.toString()), a.each(l, function (a, b) {
                      b.alternation = i.length - 1;
                    })));
                  }
                  r = l.slice(), j = z, l = [];
                  for (var E = 0; E < A.length; E++) d[E] = A[E];
                  for (var F = 0; F < r.length; F++) {
                    var G = r[F];
                    G.alternation = G.alternation || v;
                    for (var H = 0; H < t.length; H++) {
                      var I = t[H];
                      if (G.match.def === I.match.def && ("string" != typeof w || -1 !== a.inArray(G.locator[G.alternation].toString(), B))) {
                        G.match.mask === I.match.mask && (r.splice(F, 1), F--), -1 === I.locator[G.alternation].toString().indexOf(G.locator[G.alternation]) && (I.locator[G.alternation] = I.locator[G.alternation] + "," + G.locator[G.alternation], I.alternation = G.alternation);
                        break;
                      }
                    }
                  }
                  t = t.concat(r);
                }
                "string" == typeof w && (t = a.map(t, function (b, c) {
                  if (isFinite(c)) {
                    var d,
                      e = b.alternation,
                      f = b.locator[e].toString().split(",");
                    b.locator[e] = void 0, b.alternation = void 0;
                    for (var g = 0; g < f.length; g++) d = -1 !== a.inArray(f[g], B), d && (void 0 !== b.locator[e] ? (b.locator[e] += ",", b.locator[e] += f[g]) : b.locator[e] = parseInt(f[g]), b.alternation = e);
                    if (void 0 !== b.locator[e]) return b;
                  }
                })), l = u.concat(t), j = b, m = l.length > 0;
              } else e = k(s.matches[w] || c.matches[w], [w].concat(i), n);
              if (e) return !0;
            } else if (e.isQuantifier && n !== c.matches[a.inArray(e, c.matches) - 1]) for (var J = e, K = d.length > 0 ? d.shift() : 0; K < (isNaN(J.quantifier.max) ? K + 1 : J.quantifier.max) && b >= j; K++) {
              var L = c.matches[a.inArray(J, c.matches) - 1];
              if (e = k(L, [K].concat(i), L)) {
                if (g = l[l.length - 1].match, g.optionalQuantifier = K > J.quantifier.min - 1, h = 0 === a.inArray(g, L.matches)) {
                  if (K > J.quantifier.min - 1) {
                    m = !0, j = b;
                    break;
                  }
                  return !0;
                }
                return !0;
              }
            } else if (e = f(e, d, i, n)) return !0;
          } else j++;
        }
        for (var n = d.length > 0 ? d.shift() : 0; n < c.matches.length; n++) if (c.matches[n].isQuantifier !== !0) {
          var o = k(c.matches[n], [n].concat(e), i);
          if (o && j === b) return o;
          if (j > b) break;
        }
      }
      var g,
        h,
        i = p().maskToken,
        j = c ? d : 0,
        k = c || [0],
        l = [],
        m = !1;
      if (b > -1) {
        if (e === !0 && p().tests[b]) return p().tests[b];
        if (void 0 === c) {
          for (var n, o = b - 1; void 0 === (n = p().validPositions[o]) && o > -1 && (!p().tests[o] || void 0 === (n = p().tests[o][0]));) o--;
          void 0 !== n && o > -1 && (j = o, k = n.locator.slice());
        }
        for (var q = k.shift(); q < i.length; q++) {
          var r = f(i[q], k, [q]);
          if (r && j === b || j > b) break;
        }
      }
      return (0 === l.length || m) && l.push({
        match: {
          fn: null,
          cardinality: 0,
          optionality: !0,
          casing: null,
          def: ""
        },
        locator: []
      }), p().tests[b] = a.extend(!0, [], l), p().tests[b];
    }
    function z() {
      return void 0 === p()._buffer && (p()._buffer = i(!1, 1)), p()._buffer;
    }
    function A(a) {
      if (void 0 === p().buffer || a === !0) {
        if (a === !0) for (var b in p().tests) void 0 === p().validPositions[b] && delete p().tests[b];
        p().buffer = i(!0, r(), !0);
      }
      return p().buffer;
    }
    function B(a, b, c) {
      var d;
      if (c = c, a === !0) q(), a = 0, b = c.length;else for (d = a; b > d; d++) delete p().validPositions[d], delete p().tests[d];
      for (d = a; b > d; d++) q(!0), c[d] !== g.skipOptionalPartCharacter && E(d, c[d], !0, !0);
    }
    function C(a, b) {
      switch (b.casing) {
        case "upper":
          a = a.toUpperCase();
          break;
        case "lower":
          a = a.toLowerCase();
      }
      return a;
    }
    function D(b, c) {
      for (var d = g.greedy ? c : c.slice(0, 1), e = !1, f = 0; f < b.length; f++) if (-1 !== a.inArray(b[f], d)) {
        e = !0;
        break;
      }
      return e;
    }
    function E(b, c, d, e) {
      function f(b, c, d, e) {
        var f = !1;
        return a.each(y(b), function (h, i) {
          for (var j = i.match, k = c ? 1 : 0, l = "", m = j.cardinality; m > k; m--) l += J(b - (m - 1));
          if (c && (l += c), A(!0), f = null != j.fn ? j.fn.test(l, p(), b, d, g) : c !== j.def && c !== g.skipOptionalPartCharacter || "" === j.def ? !1 : {
            c: j.placeholder || j.def,
            pos: b
          }, f !== !1) {
            var n = void 0 !== f.c ? f.c : c;
            n = n === g.skipOptionalPartCharacter && null === j.fn ? j.placeholder || j.def : n;
            var o = b,
              u = A();
            if (void 0 !== f.remove && (a.isArray(f.remove) || (f.remove = [f.remove]), a.each(f.remove.sort(function (a, b) {
              return b - a;
            }), function (a, b) {
              t(b, b + 1, !0);
            })), void 0 !== f.insert && (a.isArray(f.insert) || (f.insert = [f.insert]), a.each(f.insert.sort(function (a, b) {
              return a - b;
            }), function (a, b) {
              E(b.pos, b.c, !0);
            })), f.refreshFromBuffer) {
              var v = f.refreshFromBuffer;
              if (d = !0, B(v === !0 ? v : v.start, v.end, u), void 0 === f.pos && void 0 === f.c) return f.pos = r(), !1;
              if (o = void 0 !== f.pos ? f.pos : b, o !== b) return f = a.extend(f, E(o, n, !0)), !1;
            } else if (f !== !0 && void 0 !== f.pos && f.pos !== b && (o = f.pos, B(b, o, A().slice()), o !== b)) return f = a.extend(f, E(o, n, !0)), !1;
            return f !== !0 && void 0 === f.pos && void 0 === f.c ? !1 : (h > 0 && q(!0), s(o, a.extend({}, i, {
              input: C(n, j)
            }), e) || (f = !1), !1);
          }
        }), f;
      }
      function h(b, c, d, e) {
        for (var f, h, i, j, k, l, m = a.extend(!0, {}, p().validPositions), n = a.extend(!0, {}, p().tests), o = r(); o >= 0 && (j = p().validPositions[o], !j || void 0 === j.alternation || (f = o, h = p().validPositions[f].alternation, u(f).locator[j.alternation] === j.locator[j.alternation])); o--);
        if (void 0 !== h) {
          f = parseInt(f);
          for (var s in p().validPositions) if (s = parseInt(s), j = p().validPositions[s], s >= f && void 0 !== j.alternation) {
            var t;
            0 === f ? (t = [], a.each(p().tests[f], function (a, b) {
              void 0 !== b.locator[h] && (t = t.concat(b.locator[h].toString().split(",")));
            })) : t = p().validPositions[f].locator[h].toString().split(",");
            var v = void 0 !== j.locator[h] ? j.locator[h] : t[0];
            v.length > 0 && (v = v.split(",")[0]);
            for (var w = 0; w < t.length; w++) {
              var y = [],
                z = 0,
                A = 0;
              if (v < t[w]) {
                for (var B, C, D = s; D >= 0; D--) if (B = p().validPositions[D], void 0 !== B) {
                  var F = x(D, t[w]);
                  p().validPositions[D].match.def !== F.match.def && (y.push(p().validPositions[D].input), p().validPositions[D] = F, p().validPositions[D].input = L(D), null === p().validPositions[D].match.fn && A++, B = F), C = B.locator[h], B.locator[h] = parseInt(t[w]);
                  break;
                }
                if (v !== B.locator[h]) {
                  for (k = s + 1; k < r(void 0, !0) + 1; k++) l = p().validPositions[k], l && null != l.match.fn ? y.push(l.input) : b > k && z++, delete p().validPositions[k], delete p().tests[k];
                  for (q(!0), g.keepStatic = !g.keepStatic, i = !0; y.length > 0;) {
                    var G = y.shift();
                    if (G !== g.skipOptionalPartCharacter && !(i = E(r(void 0, !0) + 1, G, !1, !0))) break;
                  }
                  if (B.alternation = h, B.locator[h] = C, i) {
                    var H = r(b) + 1;
                    for (k = s + 1; k < r() + 1; k++) l = p().validPositions[k], (void 0 === l || null == l.match.fn) && b > k && A++;
                    b += A - z, i = E(b > H ? H : b, c, d, e);
                  }
                  if (g.keepStatic = !g.keepStatic, i) return i;
                  q(), p().validPositions = a.extend(!0, {}, m), p().tests = a.extend(!0, {}, n);
                }
              }
            }
            break;
          }
        }
        return !1;
      }
      function i(b, c) {
        for (var d = p().validPositions[c], e = d.locator, f = e.length, g = b; c > g; g++) if (!F(g, !0)) {
          var h = y(g),
            i = h[0],
            j = -1;
          a.each(h, function (a, b) {
            for (var c = 0; f > c && void 0 !== b.locator[c] && D(b.locator[c].toString().split(","), e[c].toString().split(",")); c++) c > j && (j = c, i = b);
          }), s(g, a.extend({}, i, {
            input: i.match.def
          }), !0);
        }
      }
      d = d === !0;
      for (var j = A(), k = b - 1; k > -1 && !p().validPositions[k]; k--);
      for (k++; b > k; k++) void 0 === p().validPositions[k] && ((!F(k) || j[k] !== L(k)) && y(k).length > 1 || j[k] === g.radixPoint || "0" === j[k] && a.inArray(g.radixPoint, j) < k) && f(k, j[k], !0);
      var l = b,
        m = !1,
        n = a.extend(!0, {}, p().validPositions);
      if (l < G() && (m = f(l, c, d, e), (!d || e) && m === !1)) {
        var o = p().validPositions[l];
        if (!o || null !== o.match.fn || o.match.def !== c && c !== g.skipOptionalPartCharacter) {
          if ((g.insertMode || void 0 === p().validPositions[H(l)]) && !F(l, !0)) for (var v = l + 1, w = H(l); w >= v; v++) if (m = f(v, c, d, e), m !== !1) {
            i(l, v), l = v;
            break;
          }
        } else m = {
          caret: H(l)
        };
      }
      if (m === !1 && g.keepStatic && (m = h(b, c, d, e)), m === !0 && (m = {
        pos: l
      }), a.isFunction(g.postValidation) && m !== !1 && !d) {
        var z = g.postValidation(A(!0), g);
        if (z) {
          if (z.refreshFromBuffer) {
            var I = z.refreshFromBuffer;
            B(I === !0 ? I : I.start, I.end, z.buffer), q(!0), m = z;
          }
        } else q(!0), p().validPositions = a.extend(!0, {}, n), m = !1;
      }
      return m;
    }
    function F(a, b) {
      var c = v(a);
      if (null != c.fn) return c.fn;
      if (b !== !0 && a > -1 && !g.keepStatic && void 0 === p().validPositions[a]) {
        var d = y(a, void 0, void 0, !0);
        return d.length > 2;
      }
      return !1;
    }
    function G() {
      var a;
      ra = void 0 !== pa ? pa.maxLength : void 0, -1 === ra && (ra = void 0);
      var b,
        c = r(),
        d = p().validPositions[c],
        e = void 0 !== d ? d.locator.slice() : void 0;
      for (b = c + 1; void 0 === d || null !== d.match.fn || null === d.match.fn && "" !== d.match.def; b++) d = u(b, e, b - 1), e = d.locator.slice();
      var f = v(b - 1);
      return a = "" !== f.def ? b : b - 1, void 0 === ra || ra > a ? a : ra;
    }
    function H(a, b) {
      var c = G();
      if (a >= c) return c;
      for (var d = a; ++d < c && (b === !0 && (v(d).newBlockMarker !== !0 || !F(d)) || b !== !0 && !F(d) && (g.nojumps !== !0 || g.nojumpsThreshold > d)););
      return d;
    }
    function I(a, b) {
      var c = a;
      if (0 >= c) return 0;
      for (; --c > 0 && (b === !0 && v(c).newBlockMarker !== !0 || b !== !0 && !F(c)););
      return c;
    }
    function J(a) {
      return void 0 === p().validPositions[a] ? L(a) : p().validPositions[a].input;
    }
    function K(b, c, d, e, f) {
      if (e && a.isFunction(g.onBeforeWrite)) {
        var h = g.onBeforeWrite(e, c, d, g);
        if (h) {
          if (h.refreshFromBuffer) {
            var i = h.refreshFromBuffer;
            B(i === !0 ? i : i.start, i.end, h.buffer || c), c = A(!0);
          }
          void 0 !== d && (d = void 0 !== h.caret ? h.caret : d);
        }
      }
      b.inputmask._valueSet(c.join("")), void 0 === d || void 0 !== e && "blur" === e.type || O(b, d), f === !0 && (va = !0, a(b).trigger("input"));
    }
    function L(a, b) {
      if (b = b || v(a), void 0 !== b.placeholder) return b.placeholder;
      if (null === b.fn) {
        if (a > -1 && !g.keepStatic && void 0 === p().validPositions[a]) {
          var c,
            d = y(a),
            e = 0;
          if (d.length > 2) for (var f = 0; f < d.length; f++) if (d[f].match.optionality !== !0 && d[f].match.optionalQuantifier !== !0 && (null === d[f].match.fn || void 0 === c || d[f].match.fn.test(c.match.def, p(), a, !0, g) !== !1) && (e++, null === d[f].match.fn && (c = d[f]), e > 1)) return g.placeholder.charAt(a % g.placeholder.length);
        }
        return b.def;
      }
      return g.placeholder.charAt(a % g.placeholder.length);
    }
    function M(c, d, e, f) {
      function h() {
        var a = !1,
          b = z().slice(k, H(k)).join("").indexOf(j);
        if (-1 !== b && !F(k)) {
          a = !0;
          for (var c = z().slice(k, k + b), d = 0; d < c.length; d++) if (" " !== c[d]) {
            a = !1;
            break;
          }
        }
        return a;
      }
      var i = f.slice(),
        j = "",
        k = 0;
      if (q(), p().p = H(-1), !e) if (g.autoUnmask !== !0) {
        var l = z().slice(0, H(-1)).join(""),
          m = i.join("").match(new RegExp("^" + b.escapeRegex(l), "g"));
        m && m.length > 0 && (i.splice(0, m.length * l.length), k = H(k));
      } else k = H(k);
      a.each(i, function (b, d) {
        var f = a.Event("keypress");
        f.which = d.charCodeAt(0), j += d;
        var i = r(void 0, !0),
          l = p().validPositions[i],
          m = u(i + 1, l ? l.locator.slice() : void 0, i);
        if (!h() || e || g.autoUnmask) {
          var n = e ? b : null == m.match.fn && m.match.optionality && i + 1 < p().p ? i + 1 : p().p;
          X.call(c, f, !0, !1, e, n), k = n + 1, j = "";
        } else X.call(c, f, !0, !1, !0, i + 1);
      }), d && K(c, A(), document.activeElement === c ? H(r(0)) : void 0, a.Event("checkval"));
    }
    function N(b) {
      if (b && void 0 === b.inputmask) return b.value;
      var c = [],
        d = p().validPositions;
      for (var e in d) d[e].match && null != d[e].match.fn && c.push(d[e].input);
      var f = 0 === c.length ? null : (ta ? c.reverse() : c).join("");
      if (null !== f) {
        var h = (ta ? A().slice().reverse() : A()).join("");
        a.isFunction(g.onUnMask) && (f = g.onUnMask(h, f, g) || f);
      }
      return f;
    }
    function O(a, b, c) {
      function d(a) {
        if (ta && "number" == typeof a && (!g.greedy || "" !== g.placeholder)) {
          var b = A().join("").length;
          a = b - a;
        }
        return a;
      }
      var e;
      if ("number" != typeof b) return a.setSelectionRange ? (b = a.selectionStart, c = a.selectionEnd) : window.getSelection ? (e = window.getSelection().getRangeAt(0), (e.commonAncestorContainer.parentNode === a || e.commonAncestorContainer === a) && (b = e.startOffset, c = e.endOffset)) : document.selection && document.selection.createRange && (e = document.selection.createRange(), b = 0 - e.duplicate().moveStart("character", -1e5), c = b + e.text.length), {
        begin: d(b),
        end: d(c)
      };
      b = d(b), c = d(c), c = "number" == typeof c ? c : b;
      var f = parseInt(((a.ownerDocument.defaultView || window).getComputedStyle ? (a.ownerDocument.defaultView || window).getComputedStyle(a, null) : a.currentStyle).fontSize) * c;
      if (a.scrollLeft = f > a.scrollWidth ? f : 0, l || g.insertMode !== !1 || b !== c || c++, a.setSelectionRange) a.selectionStart = b, a.selectionEnd = c;else if (window.getSelection) {
        if (e = document.createRange(), void 0 === a.firstChild) {
          var h = document.createTextNode("");
          a.appendChild(h);
        }
        e.setStart(a.firstChild, b < a.inputmask._valueGet().length ? b : a.inputmask._valueGet().length), e.setEnd(a.firstChild, c < a.inputmask._valueGet().length ? c : a.inputmask._valueGet().length), e.collapse(!0);
        var i = window.getSelection();
        i.removeAllRanges(), i.addRange(e);
      } else a.createTextRange && (e = a.createTextRange(), e.collapse(!0), e.moveEnd("character", c), e.moveStart("character", b), e.select());
    }
    function P(b) {
      var c,
        d,
        e = A(),
        f = e.length,
        g = r(),
        h = {},
        i = p().validPositions[g],
        j = void 0 !== i ? i.locator.slice() : void 0;
      for (c = g + 1; c < e.length; c++) d = u(c, j, c - 1), j = d.locator.slice(), h[c] = a.extend(!0, {}, d);
      var k = i && void 0 !== i.alternation ? i.locator[i.alternation] : void 0;
      for (c = f - 1; c > g && (d = h[c], (d.match.optionality || d.match.optionalQuantifier || k && (k !== h[c].locator[i.alternation] && null != d.match.fn || null === d.match.fn && d.locator[i.alternation] && D(d.locator[i.alternation].toString().split(","), k.toString().split(",")) && "" !== y(c)[0].def)) && e[c] === L(c, d.match)); c--) f--;
      return b ? {
        l: f,
        def: h[f] ? h[f].match : void 0
      } : f;
    }
    function Q(a) {
      for (var b = P(), c = a.length - 1; c > b && !F(c); c--);
      return a.splice(b, c + 1 - b), a;
    }
    function R(b) {
      if (a.isFunction(g.isComplete)) return g.isComplete(b, g);
      if ("*" === g.repeat) return void 0;
      var c = !1,
        d = P(!0),
        e = I(d.l);
      if (void 0 === d.def || d.def.newBlockMarker || d.def.optionality || d.def.optionalQuantifier) {
        c = !0;
        for (var f = 0; e >= f; f++) {
          var h = u(f).match;
          if (null !== h.fn && void 0 === p().validPositions[f] && h.optionality !== !0 && h.optionalQuantifier !== !0 || null === h.fn && b[f] !== L(f, h)) {
            c = !1;
            break;
          }
        }
      }
      return c;
    }
    function S(a, b) {
      return ta ? a - b > 1 || a - b === 1 && g.insertMode : b - a > 1 || b - a === 1 && g.insertMode;
    }
    function T(c) {
      return function (d) {
        var e = !1,
          f = !1;
        if (void 0 === this.inputmask) {
          var h = a.data(this, "_inputmask_opts");
          h ? new b(h).mask(this) : a(this).off(".inputmask");
        } else {
          if ("setvalue" === d.type || !(this.disabled || this.readOnly && !("keydown" === d.type && d.ctrlKey && 67 === d.keyCode || g.tabThrough === !1 && d.keyCode === b.keyCode.TAB))) {
            switch (d.type) {
              case "input":
                if (va === !0 || e === !0) return va = !1, d.preventDefault();
                f = !1;
                break;
              case "keydown":
                ua = !1, e = !1, f = !0;
                break;
              case "keypress":
                if (ua === !0) return d.preventDefault();
                ua = !0;
                break;
              case "compositionstart":
                e = !0;
                break;
              case "compositionupdate":
                va = f;
                break;
              case "compositionend":
                e = !1, f = !1;
                break;
              case "cut":
                va = !0;
            }
            return c.apply(this, arguments);
          }
          d.preventDefault();
        }
      };
    }
    function U(b) {
      function c(b) {
        if (a.valHooks && (void 0 === a.valHooks[b] || a.valHooks[b].inputmaskpatch !== !0)) {
          var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function (a) {
              return a.value;
            },
            d = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function (a, b) {
              return a.value = b, a;
            };
          a.valHooks[b] = {
            get: function get(a) {
              if (a.inputmask) {
                if (a.inputmask.opts.autoUnmask) return a.inputmask.unmaskedvalue();
                var b = c(a),
                  d = a.inputmask.maskset,
                  e = d._buffer;
                return e = e ? e.join("") : "", b !== e ? b : "";
              }
              return c(a);
            },
            set: function set(b, c) {
              var e,
                f = a(b);
              return e = d(b, c), b.inputmask && f.trigger("setvalue.inputmask"), e;
            },
            inputmaskpatch: !0
          };
        }
      }
      function d() {
        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : h.call(this) !== z().join("") ? document.activeElement === this && g.clearMaskOnLostFocus ? (ta ? Q(A().slice()).reverse() : Q(A().slice())).join("") : h.call(this) : "" : h.call(this);
      }
      function e(b) {
        i.call(this, b), this.inputmask && a(this).trigger("setvalue.inputmask");
      }
      function f(b) {
        a(b).on("mouseenter.inputmask", T(function (b) {
          var c = a(this),
            d = this,
            e = d.inputmask._valueGet();
          "" !== e && e !== A().join("") && c.trigger("setvalue.inputmask");
        }));
      }
      var h, i;
      b.inputmask.__valueGet || (Object.getOwnPropertyDescriptor && void 0 === b.value ? (h = function h() {
        return this.textContent;
      }, i = function i(a) {
        this.textContent = a;
      }, Object.defineProperty(b, "value", {
        get: d,
        set: e
      })) : document.__lookupGetter__ && b.__lookupGetter__("value") ? (h = b.__lookupGetter__("value"), i = b.__lookupSetter__("value"), b.__defineGetter__("value", d), b.__defineSetter__("value", e)) : (h = function h() {
        return b.value;
      }, i = function i(a) {
        b.value = a;
      }, c(b.type), f(b)), b.inputmask.__valueGet = h, b.inputmask._valueGet = function (a) {
        return ta && a !== !0 ? h.call(this.el).split("").reverse().join("") : h.call(this.el);
      }, b.inputmask.__valueSet = i, b.inputmask._valueSet = function (a, b) {
        i.call(this.el, null === a || void 0 === a ? "" : b !== !0 && ta ? a.split("").reverse().join("") : a);
      });
    }
    function V(c, d, e, f) {
      function h() {
        if (g.keepStatic) {
          q(!0);
          var b,
            d = [],
            e = a.extend(!0, {}, p().validPositions);
          for (b = r(); b >= 0; b--) {
            var f = p().validPositions[b];
            if (f && (null != f.match.fn && d.push(f.input), delete p().validPositions[b], void 0 !== f.alternation && f.locator[f.alternation] === u(b).locator[f.alternation])) break;
          }
          if (b > -1) for (; d.length > 0;) {
            p().p = H(r());
            var h = a.Event("keypress");
            h.which = d.pop().charCodeAt(0), X.call(c, h, !0, !1, !1, p().p);
          } else p().validPositions = a.extend(!0, {}, e);
        }
      }
      if ((g.numericInput || ta) && (d === b.keyCode.BACKSPACE ? d = b.keyCode.DELETE : d === b.keyCode.DELETE && (d = b.keyCode.BACKSPACE), ta)) {
        var i = e.end;
        e.end = e.begin, e.begin = i;
      }
      d === b.keyCode.BACKSPACE && (e.end - e.begin < 1 || g.insertMode === !1) ? (e.begin = I(e.begin), void 0 === p().validPositions[e.begin] || p().validPositions[e.begin].input !== g.groupSeparator && p().validPositions[e.begin].input !== g.radixPoint || e.begin--) : d === b.keyCode.DELETE && e.begin === e.end && (e.end = F(e.end) ? e.end + 1 : H(e.end) + 1, void 0 === p().validPositions[e.begin] || p().validPositions[e.begin].input !== g.groupSeparator && p().validPositions[e.begin].input !== g.radixPoint || e.end++), t(e.begin, e.end, !1, f), f !== !0 && h();
      var j = r(e.begin);
      j < e.begin ? (-1 === j && q(), p().p = H(j)) : f !== !0 && (p().p = e.begin);
    }
    function W(d) {
      var e = this,
        f = a(e),
        h = d.keyCode,
        i = O(e);
      h === b.keyCode.BACKSPACE || h === b.keyCode.DELETE || j && 127 === h || d.ctrlKey && 88 === h && !c("cut") ? (d.preventDefault(), 88 === h && (na = A().join("")), V(e, h, i), K(e, A(), p().p, d, na !== A().join("")), e.inputmask._valueGet() === z().join("") ? f.trigger("cleared") : R(A()) === !0 && f.trigger("complete"), g.showTooltip && (e.title = g.tooltip || p().mask)) : h === b.keyCode.END || h === b.keyCode.PAGE_DOWN ? setTimeout(function () {
        var a = H(r());
        g.insertMode || a !== G() || d.shiftKey || a--, O(e, d.shiftKey ? i.begin : a, a);
      }, 0) : h === b.keyCode.HOME && !d.shiftKey || h === b.keyCode.PAGE_UP ? O(e, 0, d.shiftKey ? i.begin : 0) : (g.undoOnEscape && h === b.keyCode.ESCAPE || 90 === h && d.ctrlKey) && d.altKey !== !0 ? (M(e, !0, !1, na.split("")), f.trigger("click")) : h !== b.keyCode.INSERT || d.shiftKey || d.ctrlKey ? g.tabThrough === !0 && h === b.keyCode.TAB ? (d.shiftKey === !0 ? (null === v(i.begin).fn && (i.begin = H(i.begin)), i.end = I(i.begin, !0), i.begin = I(i.end, !0)) : (i.begin = H(i.begin, !0), i.end = H(i.begin, !0), i.end < G() && i.end--), i.begin < G() && (d.preventDefault(), O(e, i.begin, i.end))) : g.insertMode !== !1 || d.shiftKey || (h === b.keyCode.RIGHT ? setTimeout(function () {
        var a = O(e);
        O(e, a.begin);
      }, 0) : h === b.keyCode.LEFT && setTimeout(function () {
        var a = O(e);
        O(e, ta ? a.begin + 1 : a.begin - 1);
      }, 0)) : (g.insertMode = !g.insertMode, O(e, g.insertMode || i.begin !== G() ? i.begin : i.begin - 1)), g.onKeyDown.call(this, d, A(), O(e).begin, g), wa = -1 !== a.inArray(h, g.ignorables);
    }
    function X(c, d, e, f, h) {
      var i = this,
        j = a(i),
        k = c.which || c.charCode || c.keyCode;
      if (!(d === !0 || c.ctrlKey && c.altKey) && (c.ctrlKey || c.metaKey || wa)) return k === b.keyCode.ENTER && na !== A().join("") && (na = A().join(""), setTimeout(function () {
        j.trigger("change");
      }, 0)), !0;
      if (k) {
        46 === k && c.shiftKey === !1 && "," === g.radixPoint && (k = 44);
        var l,
          m = d ? {
            begin: h,
            end: h
          } : O(i),
          n = String.fromCharCode(k),
          o = S(m.begin, m.end);
        o && (p().undoPositions = a.extend(!0, {}, p().validPositions), V(i, b.keyCode.DELETE, m, !0), m.begin = p().p, g.insertMode || (g.insertMode = !g.insertMode, s(m.begin, f), g.insertMode = !g.insertMode), o = !g.multi), p().writeOutBuffer = !0;
        var r = ta && !o ? m.end : m.begin,
          t = E(r, n, f);
        if (t !== !1) {
          if (t !== !0 && (r = void 0 !== t.pos ? t.pos : r, n = void 0 !== t.c ? t.c : n), q(!0), void 0 !== t.caret) l = t.caret;else {
            var u = p().validPositions;
            l = !g.keepStatic && (void 0 !== u[r + 1] && y(r + 1, u[r].locator.slice(), r).length > 1 || void 0 !== u[r].alternation) ? r + 1 : H(r);
          }
          p().p = l;
        }
        if (e !== !1) {
          var v = this;
          if (setTimeout(function () {
            g.onKeyValidation.call(v, k, t, g);
          }, 0), p().writeOutBuffer && t !== !1) {
            var w = A();
            K(i, w, d ? void 0 : g.numericInput ? I(l) : l, c, d !== !0), d !== !0 && setTimeout(function () {
              R(w) === !0 && j.trigger("complete");
            }, 0);
          } else o && (p().buffer = void 0, p().validPositions = p().undoPositions);
        } else o && (p().buffer = void 0, p().validPositions = p().undoPositions);
        if (g.showTooltip && (i.title = g.tooltip || p().mask), d && a.isFunction(g.onBeforeWrite)) {
          var x = g.onBeforeWrite(c, A(), l, g);
          if (x && x.refreshFromBuffer) {
            var z = x.refreshFromBuffer;
            B(z === !0 ? z : z.start, z.end, x.buffer), q(!0), x.caret && (p().p = x.caret);
          }
        }
        if (c.preventDefault(), d) return t;
      }
    }
    function Y(b) {
      var c = this,
        d = b.originalEvent || b,
        e = a(c),
        f = c.inputmask._valueGet(!0),
        h = O(c);
      if ("propertychange" === b.type && c.inputmask._valueGet().length <= G()) return !0;
      if ("paste" === b.type) {
        var i = f.substr(0, h.begin),
          j = f.substr(h.end, f.length);
        i === z().slice(0, h.begin).join("") && (i = ""), j === z().slice(h.end).join("") && (j = ""), window.clipboardData && window.clipboardData.getData ? f = i + window.clipboardData.getData("Text") + j : d.clipboardData && d.clipboardData.getData && (f = i + d.clipboardData.getData("text/plain") + j);
      }
      var k = f;
      if (a.isFunction(g.onBeforePaste)) {
        if (k = g.onBeforePaste(f, g), k === !1) return b.preventDefault(), !1;
        k || (k = f);
      }
      return M(c, !1, !1, ta ? k.split("").reverse() : k.toString().split("")), K(c, A(), void 0, b, !0), e.trigger("click"), R(A()) === !0 && e.trigger("complete"), !1;
    }
    function Z(b) {
      var c = this;
      M(c, !0, !1, c.inputmask._valueGet().split("")), R(A()) === !0 && a(c).trigger("complete"), b.preventDefault();
    }
    function $(a) {
      var c = this,
        d = O(c),
        e = c.inputmask._valueGet();
      e = e.replace(new RegExp("(" + b.escapeRegex(z().join("")) + ")*"), ""), d.begin > e.length && (O(c, e.length), d = O(c)), A().length - e.length !== 1 || e.charAt(d.begin) === A()[d.begin] || e.charAt(d.begin + 1) === A()[d.begin] || F(d.begin) ? Z.call(this, a) : (a.keyCode = g.keyCode.BACKSPACE, W.call(c, a)), a.preventDefault();
    }
    function _(a) {
      var b = a.originalEvent || a;
      na = A().join(""), "" === oa || 0 !== b.data.indexOf(oa);
    }
    function aa(b) {
      var c = this,
        d = b.originalEvent || b;
      0 === d.data.indexOf(oa) && (q(), p().p = H(-1), va = !0);
      for (var e = d.data, f = 0; f < e.length; f++) {
        var h = a.Event("keypress");
        h.which = e.charCodeAt(f), ua = !1, wa = !1, X.call(c, h, !0, !1, !1, p().p);
      }
      setTimeout(function () {
        var a = p().p;
        K(c, A(), g.numericInput ? I(a) : a);
      }, 0), oa = d.data;
    }
    function ba(a) {}
    function ca(b) {
      var c = this,
        d = c.inputmask._valueGet();
      M(c, !0, !1, (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(d, g) || d : d).split("")), na = A().join(""), (g.clearMaskOnLostFocus || g.clearIncomplete) && c.inputmask._valueGet() === z().join("") && c.inputmask._valueSet("");
    }
    function da(a) {
      var b = this,
        c = b.inputmask._valueGet();
      g.showMaskOnFocus && (!g.showMaskOnHover || g.showMaskOnHover && "" === c) ? b.inputmask._valueGet() !== A().join("") && K(b, A(), H(r())) : xa === !1 && O(b, H(r())), g.positionCaretOnTab === !0 && setTimeout(function () {
        O(b, H(r()));
      }, 0), na = A().join("");
    }
    function ea(a) {
      var b = this;
      if (xa = !1, g.clearMaskOnLostFocus) {
        var c = A().slice(),
          d = b.inputmask._valueGet();
        document.activeElement !== b && d !== b.getAttribute("placeholder") && "" !== d && (-1 === r() && d === z().join("") ? c = [] : Q(c), K(b, c));
      }
    }
    function fa(b) {
      function c(b) {
        if (g.radixFocus && "" !== g.radixPoint) {
          var c = p().validPositions;
          if (void 0 === c[b] || c[b].input === L(b)) {
            if (b < H(-1)) return !0;
            var d = a.inArray(g.radixPoint, A());
            if (-1 !== d) {
              for (var e in c) if (e > d && c[e].input !== L(e)) return !1;
              return !0;
            }
          }
        }
        return !1;
      }
      var d = this;
      if (document.activeElement === d) {
        var e = O(d);
        if (e.begin === e.end) if (c(e.begin)) O(d, a.inArray(g.radixPoint, A()));else {
          var f = e.begin,
            h = r(f),
            i = H(h);
          i > f ? O(d, F(f) || F(f - 1) ? f : H(f)) : ((A()[i] !== L(i) || !F(i, !0) && v(i).def === L(i)) && (i = H(i)), O(d, i));
        }
      }
    }
    function ga(a) {
      var b = this;
      setTimeout(function () {
        O(b, 0, H(r()));
      }, 0);
    }
    function ha(c) {
      var d = this,
        e = a(d),
        f = O(d),
        h = c.originalEvent || c,
        i = window.clipboardData || h.clipboardData,
        j = ta ? A().slice(f.end, f.begin) : A().slice(f.begin, f.end);
      i.setData("text", ta ? j.reverse().join("") : j.join("")), document.execCommand && document.execCommand("copy"), V(d, b.keyCode.DELETE, f), K(d, A(), p().p, c, na !== A().join("")), d.inputmask._valueGet() === z().join("") && e.trigger("cleared"), g.showTooltip && (d.title = g.tooltip || p().mask);
    }
    function ia(b) {
      var c = a(this),
        d = this;
      if (d.inputmask) {
        var e = d.inputmask._valueGet(),
          f = A().slice();
        na !== f.join("") && setTimeout(function () {
          c.trigger("change"), na = f.join("");
        }, 0), "" !== e && (g.clearMaskOnLostFocus && (-1 === r() && e === z().join("") ? f = [] : Q(f)), R(f) === !1 && (setTimeout(function () {
          c.trigger("incomplete");
        }, 0), g.clearIncomplete && (q(), f = g.clearMaskOnLostFocus ? [] : z().slice())), K(d, f, void 0, b));
      }
    }
    function ja(a) {
      var b = this;
      xa = !0, document.activeElement !== b && g.showMaskOnHover && b.inputmask._valueGet() !== A().join("") && K(b, A());
    }
    function ka(a) {
      na !== A().join("") && qa.trigger("change"), g.clearMaskOnLostFocus && -1 === r() && pa.inputmask._valueGet && pa.inputmask._valueGet() === z().join("") && pa.inputmask._valueSet(""), g.removeMaskOnSubmit && (pa.inputmask._valueSet(pa.inputmask.unmaskedvalue(), !0), setTimeout(function () {
        K(pa, A());
      }, 0));
    }
    function la(a) {
      setTimeout(function () {
        qa.trigger("setvalue.inputmask");
      }, 0);
    }
    function ma(b) {
      if (pa = b, qa = a(pa), g.showTooltip && (pa.title = g.tooltip || p().mask), ("rtl" === pa.dir || g.rightAlign) && (pa.style.textAlign = "right"), ("rtl" === pa.dir || g.numericInput) && (pa.dir = "ltr", pa.removeAttribute("dir"), pa.inputmask.isRTL = !0, ta = !0), qa.off(".inputmask"), U(pa), ("INPUT" === pa.tagName && d(pa.getAttribute("type")) || pa.isContentEditable || "TEXTAREA" === pa.tagName) && (a(pa.form).on("submit.inputmask", ka).on("reset.inputmask", la), qa.on("mouseenter.inputmask", T(ja)).on("blur.inputmask", T(ia)).on("focus.inputmask", T(da)).on("mouseleave.inputmask", T(ea)).on("click.inputmask", T(fa)).on("dblclick.inputmask", T(ga)).on(o + ".inputmask dragdrop.inputmask drop.inputmask", T(Y)).on("cut.inputmask", T(ha)).on("complete.inputmask", T(g.oncomplete)).on("incomplete.inputmask", T(g.onincomplete)).on("cleared.inputmask", T(g.oncleared)).on("keydown.inputmask", T(W)).on("keypress.inputmask", T(X)), m || qa.on("compositionstart.inputmask", T(_)).on("compositionupdate.inputmask", T(aa)).on("compositionend.inputmask", T(ba)), "paste" === o && qa.on("input.inputmask", T(Z)), (k || m || l || n) && (qa.off("input.inputmask"), qa.on("input.inputmask", T($)))), qa.on("setvalue.inputmask", T(ca)), "" !== pa.inputmask._valueGet() || g.clearMaskOnLostFocus === !1) {
        var c = a.isFunction(g.onBeforeMask) ? g.onBeforeMask(pa.inputmask._valueGet(), g) || pa.inputmask._valueGet() : pa.inputmask._valueGet();
        M(pa, !0, !1, c.split(""));
        var e = A().slice();
        na = e.join(""), R(e) === !1 && g.clearIncomplete && q(), g.clearMaskOnLostFocus && (e.join("") === z().join("") ? e = [] : Q(e)), K(pa, e), document.activeElement === pa && O(pa, H(r()));
      }
    }
    var na,
      oa,
      pa,
      qa,
      ra,
      sa,
      ta = !1,
      ua = !1,
      va = !1,
      wa = !1,
      xa = !0;
    if (void 0 !== e) switch (e.action) {
      case "isComplete":
        return pa = e.el, R(A());
      case "unmaskedvalue":
        return pa = e.el, void 0 !== pa && void 0 !== pa.inputmask ? (f = pa.inputmask.maskset, g = pa.inputmask.opts, ta = pa.inputmask.isRTL) : (sa = e.value, g.numericInput && (ta = !0), sa = (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(sa, g) || sa : sa).split(""), M(void 0, !1, !1, ta ? sa.reverse() : sa), a.isFunction(g.onBeforeWrite) && g.onBeforeWrite(void 0, A(), 0, g)), N(pa);
      case "mask":
        pa = e.el, f = pa.inputmask.maskset, g = pa.inputmask.opts, ta = pa.inputmask.isRTL, na = A().join(""), ma(pa);
        break;
      case "format":
        return g.numericInput && (ta = !0), sa = (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(e.value, g) || e.value : e.value).split(""), M(void 0, !1, !1, ta ? sa.reverse() : sa), a.isFunction(g.onBeforeWrite) && g.onBeforeWrite(void 0, A(), 0, g), e.metadata ? {
          value: ta ? A().slice().reverse().join("") : A().join(""),
          metadata: h({
            action: "getmetadata"
          }, f, g)
        } : ta ? A().slice().reverse().join("") : A().join("");
      case "isValid":
        g.numericInput && (ta = !0), e.value ? (sa = e.value.split(""), M(void 0, !1, !0, ta ? sa.reverse() : sa)) : e.value = A().join("");
        for (var ya = A(), za = P(), Aa = ya.length - 1; Aa > za && !F(Aa); Aa--);
        return ya.splice(za, Aa + 1 - za), R(ya) && e.value === A().join("");
      case "getemptymask":
        return z();
      case "remove":
        pa = e.el, qa = a(pa), f = pa.inputmask.maskset, g = pa.inputmask.opts, pa.inputmask._valueSet(N(pa)), qa.off(".inputmask");
        var Ba;
        Object.getOwnPropertyDescriptor && (Ba = Object.getOwnPropertyDescriptor(pa, "value")), Ba && Ba.get ? pa.inputmask.__valueGet && Object.defineProperty(pa, "value", {
          get: pa.inputmask.__valueGet,
          set: pa.inputmask.__valueSet
        }) : document.__lookupGetter__ && pa.__lookupGetter__("value") && pa.inputmask.__valueGet && (pa.__defineGetter__("value", pa.inputmask.__valueGet), pa.__defineSetter__("value", pa.inputmask.__valueSet)), pa.inputmask = void 0;
        break;
      case "getmetadata":
        if (a.isArray(f.metadata)) {
          for (var Ca, Da = r(), Ea = Da; Ea >= 0; Ea--) if (p().validPositions[Ea] && void 0 !== p().validPositions[Ea].alternation) {
            Ca = p().validPositions[Ea].alternation;
            break;
          }
          return void 0 !== Ca ? f.metadata[p().validPositions[Da].locator[Ca]] : f.metadata[0];
        }
        return f.metadata;
    }
  }
  b.prototype = {
    defaults: {
      placeholder: "_",
      optionalmarker: {
        start: "[",
        end: "]"
      },
      quantifiermarker: {
        start: "{",
        end: "}"
      },
      groupmarker: {
        start: "(",
        end: ")"
      },
      alternatormarker: "|",
      escapeChar: "\\",
      mask: null,
      oncomplete: a.noop,
      onincomplete: a.noop,
      oncleared: a.noop,
      repeat: 0,
      greedy: !0,
      autoUnmask: !1,
      removeMaskOnSubmit: !1,
      clearMaskOnLostFocus: !0,
      insertMode: !0,
      clearIncomplete: !1,
      aliases: {},
      alias: null,
      onKeyDown: a.noop,
      onBeforeMask: null,
      onBeforePaste: function onBeforePaste(b, c) {
        return a.isFunction(c.onBeforeMask) ? c.onBeforeMask(b, c) : b;
      },
      onBeforeWrite: null,
      onUnMask: null,
      showMaskOnFocus: !0,
      showMaskOnHover: !0,
      onKeyValidation: a.noop,
      skipOptionalPartCharacter: " ",
      showTooltip: !1,
      tooltip: void 0,
      numericInput: !1,
      rightAlign: !1,
      undoOnEscape: !0,
      radixPoint: "",
      groupSeparator: "",
      radixFocus: !1,
      nojumps: !1,
      nojumpsThreshold: 0,
      keepStatic: null,
      positionCaretOnTab: !1,
      tabThrough: !1,
      supportsInputType: [],
      definitions: {
        9: {
          validator: "[0-9]",
          cardinality: 1,
          definitionSymbol: "*"
        },
        a: {
          validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
          cardinality: 1,
          definitionSymbol: "*"
        },
        "*": {
          validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
          cardinality: 1
        }
      },
      ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
      isComplete: null,
      canClearPosition: a.noop,
      postValidation: null,
      staticDefinitionSymbol: void 0
    },
    masksCache: {},
    mask: function mask(c) {
      var d = this;
      return "string" == typeof c && (c = document.getElementById(c) || document.querySelectorAll(c)), c = c.nodeName ? [c] : c, a.each(c, function (c, e) {
        var i = a.extend(!0, {}, d.opts);
        f(e, i, a.extend(!0, {}, d.userOptions));
        var j = g(i, d.noMasksCache);
        void 0 !== j && (void 0 !== e.inputmask && e.inputmask.remove(), e.inputmask = new b(), e.inputmask.opts = i, e.inputmask.noMasksCache = d.noMasksCache, e.inputmask.userOptions = a.extend(!0, {}, d.userOptions), e.inputmask.el = e, e.inputmask.maskset = j, e.inputmask.isRTL = !1, a.data(e, "_inputmask_opts", i), h({
          action: "mask",
          el: e
        }));
      }), c && c[0] ? c[0].inputmask || this : this;
    },
    option: function option(b) {
      return "string" == typeof b ? this.opts[b] : "object" == _typeof(b) ? (a.extend(this.opts, b), a.extend(this.userOptions, b), this.el && (void 0 !== b.mask || void 0 !== b.alias ? this.mask(this.el) : (a.data(this.el, "_inputmask_opts", this.opts), h({
        action: "mask",
        el: this.el
      }))), this) : void 0;
    },
    unmaskedvalue: function unmaskedvalue(a) {
      return h({
        action: "unmaskedvalue",
        el: this.el,
        value: a
      }, this.el && this.el.inputmask ? this.el.inputmask.maskset : g(this.opts, this.noMasksCache), this.opts);
    },
    remove: function remove() {
      return this.el ? (h({
        action: "remove",
        el: this.el
      }), this.el.inputmask = void 0, this.el) : void 0;
    },
    getemptymask: function getemptymask() {
      return h({
        action: "getemptymask"
      }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
    },
    hasMaskedValue: function hasMaskedValue() {
      return !this.opts.autoUnmask;
    },
    isComplete: function isComplete() {
      return h({
        action: "isComplete",
        el: this.el
      }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
    },
    getmetadata: function getmetadata() {
      return h({
        action: "getmetadata"
      }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
    },
    isValid: function isValid(a) {
      return h({
        action: "isValid",
        value: a
      }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
    },
    format: function format(a, b) {
      return h({
        action: "format",
        value: a,
        metadata: b
      }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
    }
  }, b.extendDefaults = function (c) {
    a.extend(!0, b.prototype.defaults, c);
  }, b.extendDefinitions = function (c) {
    a.extend(!0, b.prototype.defaults.definitions, c);
  }, b.extendAliases = function (c) {
    a.extend(!0, b.prototype.defaults.aliases, c);
  }, b.format = function (a, c, d) {
    return b(c).format(a, d);
  }, b.unmask = function (a, c) {
    return b(c).unmaskedvalue(a);
  }, b.isValid = function (a, c) {
    return b(c).isValid(a);
  }, b.remove = function (b) {
    a.each(b, function (a, b) {
      b.inputmask && b.inputmask.remove();
    });
  }, b.escapeRegex = function (a) {
    var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
    return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1");
  }, b.keyCode = {
    ALT: 18,
    BACKSPACE: 8,
    CAPS_LOCK: 20,
    COMMA: 188,
    COMMAND: 91,
    COMMAND_LEFT: 91,
    COMMAND_RIGHT: 93,
    CONTROL: 17,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    INSERT: 45,
    LEFT: 37,
    MENU: 93,
    NUMPAD_ADD: 107,
    NUMPAD_DECIMAL: 110,
    NUMPAD_DIVIDE: 111,
    NUMPAD_ENTER: 108,
    NUMPAD_MULTIPLY: 106,
    NUMPAD_SUBTRACT: 109,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SHIFT: 16,
    SPACE: 32,
    TAB: 9,
    UP: 38,
    WINDOWS: 91
  };
  var i = navigator.userAgent,
    j = null !== i.match(new RegExp("iphone", "i")),
    k = null !== i.match(new RegExp("android.*safari.*", "i")),
    l = null !== i.match(new RegExp("android.*chrome.*", "i")),
    m = null !== i.match(new RegExp("android.*firefox.*", "i")),
    n = /Kindle/i.test(i) || /Silk/i.test(i) || /KFTT/i.test(i) || /KFOT/i.test(i) || /KFJWA/i.test(i) || /KFJWI/i.test(i) || /KFSOWI/i.test(i) || /KFTHWA/i.test(i) || /KFTHWI/i.test(i) || /KFAPWA/i.test(i) || /KFAPWI/i.test(i),
    o = c("paste") ? "paste" : c("input") ? "input" : "propertychange";
  return window.Inputmask = b, b;
}(jQuery), function (a, b) {
  return void 0 === a.fn.inputmask && (a.fn.inputmask = function (c, d) {
    var e,
      f = this[0];
    if (d = d || {}, "string" == typeof c) switch (c) {
      case "unmaskedvalue":
        return f && f.inputmask ? f.inputmask.unmaskedvalue() : a(f).val();
      case "remove":
        return this.each(function () {
          this.inputmask && this.inputmask.remove();
        });
      case "getemptymask":
        return f && f.inputmask ? f.inputmask.getemptymask() : "";
      case "hasMaskedValue":
        return f && f.inputmask ? f.inputmask.hasMaskedValue() : !1;
      case "isComplete":
        return f && f.inputmask ? f.inputmask.isComplete() : !0;
      case "getmetadata":
        return f && f.inputmask ? f.inputmask.getmetadata() : void 0;
      case "setvalue":
        a(f).val(d), f && void 0 !== f.inputmask && a(f).triggerHandler("setvalue.inputmask");
        break;
      case "option":
        if ("string" != typeof d) return this.each(function () {
          return void 0 !== this.inputmask ? this.inputmask.option(d) : void 0;
        });
        if (f && void 0 !== f.inputmask) return f.inputmask.option(d);
        break;
      default:
        return d.alias = c, e = new b(d), this.each(function () {
          e.mask(this);
        });
    } else {
      if ("object" == _typeof(c)) return e = new b(c), void 0 === c.mask && void 0 === c.alias ? this.each(function () {
        return void 0 !== this.inputmask ? this.inputmask.option(c) : void e.mask(this);
      }) : this.each(function () {
        e.mask(this);
      });
      if (void 0 === c) return this.each(function () {
        e = new b(d), e.mask(this);
      });
    }
  }), a.fn.inputmask;
}(jQuery, Inputmask), function (a, b) {
  return b.extendDefinitions({
    h: {
      validator: "[01][0-9]|2[0-3]",
      cardinality: 2,
      prevalidator: [{
        validator: "[0-2]",
        cardinality: 1
      }]
    },
    s: {
      validator: "[0-5][0-9]",
      cardinality: 2,
      prevalidator: [{
        validator: "[0-5]",
        cardinality: 1
      }]
    },
    d: {
      validator: "0[1-9]|[12][0-9]|3[01]",
      cardinality: 2,
      prevalidator: [{
        validator: "[0-3]",
        cardinality: 1
      }]
    },
    m: {
      validator: "0[1-9]|1[012]",
      cardinality: 2,
      prevalidator: [{
        validator: "[01]",
        cardinality: 1
      }]
    },
    y: {
      validator: "(19|20)\\d{2}",
      cardinality: 4,
      prevalidator: [{
        validator: "[12]",
        cardinality: 1
      }, {
        validator: "(19|20)",
        cardinality: 2
      }, {
        validator: "(19|20)\\d",
        cardinality: 3
      }]
    }
  }), b.extendAliases({
    "dd/mm/yyyy": {
      mask: "1/2/y",
      placeholder: "dd/mm/yyyy",
      regex: {
        val1pre: new RegExp("[0-3]"),
        val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
        val2pre: function val2pre(a) {
          var c = b.escapeRegex.call(this, a);
          return new RegExp("((0[1-9]|[12][0-9]|3[01])" + c + "[01])");
        },
        val2: function val2(a) {
          var c = b.escapeRegex.call(this, a);
          return new RegExp("((0[1-9]|[12][0-9])" + c + "(0[1-9]|1[012]))|(30" + c + "(0[13-9]|1[012]))|(31" + c + "(0[13578]|1[02]))");
        }
      },
      leapday: "29/02/",
      separator: "/",
      yearrange: {
        minyear: 1900,
        maxyear: 2099
      },
      isInYearRange: function isInYearRange(a, b, c) {
        if (isNaN(a)) return !1;
        var d = parseInt(a.concat(b.toString().slice(a.length))),
          e = parseInt(a.concat(c.toString().slice(a.length)));
        return (isNaN(d) ? !1 : d >= b && c >= d) || (isNaN(e) ? !1 : e >= b && c >= e);
      },
      determinebaseyear: function determinebaseyear(a, b, c) {
        var d = new Date().getFullYear();
        if (a > d) return a;
        if (d > b) {
          for (var e = b.toString().slice(0, 2), f = b.toString().slice(2, 4); e + c > b;) e--;
          var g = e + f;
          return a > g ? a : g;
        }
        return d;
      },
      onKeyDown: function onKeyDown(c, d, e, f) {
        var g = a(this);
        if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
          var h = new Date();
          g.val(h.getDate().toString() + (h.getMonth() + 1).toString() + h.getFullYear().toString()), g.trigger("setvalue.inputmask");
        }
      },
      getFrontValue: function getFrontValue(a, b, c) {
        for (var d = 0, e = 0, f = 0; f < a.length && "2" !== a.charAt(f); f++) {
          var g = c.definitions[a.charAt(f)];
          g ? (d += e, e = g.cardinality) : e++;
        }
        return b.join("").substr(d, e);
      },
      definitions: {
        1: {
          validator: function validator(a, b, c, d, e) {
            var f = e.regex.val1.test(a);
            return d || f || a.charAt(1) !== e.separator && -1 === "-./".indexOf(a.charAt(1)) || !(f = e.regex.val1.test("0" + a.charAt(0))) ? f : (b.buffer[c - 1] = "0", {
              refreshFromBuffer: {
                start: c - 1,
                end: c
              },
              pos: c,
              c: a.charAt(0)
            });
          },
          cardinality: 2,
          prevalidator: [{
            validator: function validator(a, b, c, d, e) {
              var f = a;
              isNaN(b.buffer[c + 1]) || (f += b.buffer[c + 1]);
              var g = 1 === f.length ? e.regex.val1pre.test(f) : e.regex.val1.test(f);
              if (!d && !g) {
                if (g = e.regex.val1.test(a + "0")) return b.buffer[c] = a, b.buffer[++c] = "0", {
                  pos: c,
                  c: "0"
                };
                if (g = e.regex.val1.test("0" + a)) return b.buffer[c] = "0", c++, {
                  pos: c
                };
              }
              return g;
            },
            cardinality: 1
          }]
        },
        2: {
          validator: function validator(a, b, c, d, e) {
            var f = e.getFrontValue(b.mask, b.buffer, e);
            -1 !== f.indexOf(e.placeholder[0]) && (f = "01" + e.separator);
            var g = e.regex.val2(e.separator).test(f + a);
            if (!d && !g && (a.charAt(1) === e.separator || -1 !== "-./".indexOf(a.charAt(1))) && (g = e.regex.val2(e.separator).test(f + "0" + a.charAt(0)))) return b.buffer[c - 1] = "0", {
              refreshFromBuffer: {
                start: c - 1,
                end: c
              },
              pos: c,
              c: a.charAt(0)
            };
            if (e.mask.indexOf("2") === e.mask.length - 1 && g) {
              var h = b.buffer.join("").substr(4, 4) + a;
              if (h !== e.leapday) return !0;
              var i = parseInt(b.buffer.join("").substr(0, 4), 10);
              return i % 4 === 0 ? i % 100 === 0 ? i % 400 === 0 ? !0 : !1 : !0 : !1;
            }
            return g;
          },
          cardinality: 2,
          prevalidator: [{
            validator: function validator(a, b, c, d, e) {
              isNaN(b.buffer[c + 1]) || (a += b.buffer[c + 1]);
              var f = e.getFrontValue(b.mask, b.buffer, e);
              -1 !== f.indexOf(e.placeholder[0]) && (f = "01" + e.separator);
              var g = 1 === a.length ? e.regex.val2pre(e.separator).test(f + a) : e.regex.val2(e.separator).test(f + a);
              return d || g || !(g = e.regex.val2(e.separator).test(f + "0" + a)) ? g : (b.buffer[c] = "0", c++, {
                pos: c
              });
            },
            cardinality: 1
          }]
        },
        y: {
          validator: function validator(a, b, c, d, e) {
            if (e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)) {
              var f = b.buffer.join("").substr(0, 6);
              if (f !== e.leapday) return !0;
              var g = parseInt(a, 10);
              return g % 4 === 0 ? g % 100 === 0 ? g % 400 === 0 ? !0 : !1 : !0 : !1;
            }
            return !1;
          },
          cardinality: 4,
          prevalidator: [{
            validator: function validator(a, b, c, d, e) {
              var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
              if (!d && !f) {
                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 1);
                if (f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), {
                  pos: c
                };
                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 2), f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), b.buffer[c++] = g.charAt(1), {
                  pos: c
                };
              }
              return f;
            },
            cardinality: 1
          }, {
            validator: function validator(a, b, c, d, e) {
              var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
              if (!d && !f) {
                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2);
                if (f = e.isInYearRange(a[0] + g[1] + a[1], e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(1), {
                  pos: c
                };
                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2), e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) {
                  var h = b.buffer.join("").substr(0, 6);
                  if (h !== e.leapday) f = !0;else {
                    var i = parseInt(a, 10);
                    f = i % 4 === 0 ? i % 100 === 0 ? i % 400 === 0 ? !0 : !1 : !0 : !1;
                  }
                } else f = !1;
                if (f) return b.buffer[c - 1] = g.charAt(0), b.buffer[c++] = g.charAt(1), b.buffer[c++] = a.charAt(0), {
                  refreshFromBuffer: {
                    start: c - 3,
                    end: c
                  },
                  pos: c
                };
              }
              return f;
            },
            cardinality: 2
          }, {
            validator: function validator(a, b, c, d, e) {
              return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
            },
            cardinality: 3
          }]
        }
      },
      insertMode: !1,
      autoUnmask: !1
    },
    "mm/dd/yyyy": {
      placeholder: "mm/dd/yyyy",
      alias: "dd/mm/yyyy",
      regex: {
        val2pre: function val2pre(a) {
          var c = b.escapeRegex.call(this, a);
          return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])");
        },
        val2: function val2(a) {
          var c = b.escapeRegex.call(this, a);
          return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)");
        },
        val1pre: new RegExp("[01]"),
        val1: new RegExp("0[1-9]|1[012]")
      },
      leapday: "02/29/",
      onKeyDown: function onKeyDown(c, d, e, f) {
        var g = a(this);
        if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
          var h = new Date();
          g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue.inputmask");
        }
      }
    },
    "yyyy/mm/dd": {
      mask: "y/1/2",
      placeholder: "yyyy/mm/dd",
      alias: "mm/dd/yyyy",
      leapday: "/02/29",
      onKeyDown: function onKeyDown(c, d, e, f) {
        var g = a(this);
        if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
          var h = new Date();
          g.val(h.getFullYear().toString() + (h.getMonth() + 1).toString() + h.getDate().toString()), g.trigger("setvalue.inputmask");
        }
      }
    },
    "dd.mm.yyyy": {
      mask: "1.2.y",
      placeholder: "dd.mm.yyyy",
      leapday: "29.02.",
      separator: ".",
      alias: "dd/mm/yyyy"
    },
    "dd-mm-yyyy": {
      mask: "1-2-y",
      placeholder: "dd-mm-yyyy",
      leapday: "29-02-",
      separator: "-",
      alias: "dd/mm/yyyy"
    },
    "mm.dd.yyyy": {
      mask: "1.2.y",
      placeholder: "mm.dd.yyyy",
      leapday: "02.29.",
      separator: ".",
      alias: "mm/dd/yyyy"
    },
    "mm-dd-yyyy": {
      mask: "1-2-y",
      placeholder: "mm-dd-yyyy",
      leapday: "02-29-",
      separator: "-",
      alias: "mm/dd/yyyy"
    },
    "yyyy.mm.dd": {
      mask: "y.1.2",
      placeholder: "yyyy.mm.dd",
      leapday: ".02.29",
      separator: ".",
      alias: "yyyy/mm/dd"
    },
    "yyyy-mm-dd": {
      mask: "y-1-2",
      placeholder: "yyyy-mm-dd",
      leapday: "-02-29",
      separator: "-",
      alias: "yyyy/mm/dd"
    },
    datetime: {
      mask: "1/2/y h:s",
      placeholder: "dd/mm/yyyy hh:mm",
      alias: "dd/mm/yyyy",
      regex: {
        hrspre: new RegExp("[012]"),
        hrs24: new RegExp("2[0-4]|1[3-9]"),
        hrs: new RegExp("[01][0-9]|2[0-4]"),
        ampm: new RegExp("^[a|p|A|P][m|M]"),
        mspre: new RegExp("[0-5]"),
        ms: new RegExp("[0-5][0-9]")
      },
      timeseparator: ":",
      hourFormat: "24",
      definitions: {
        h: {
          validator: function validator(a, b, c, d, e) {
            if ("24" === e.hourFormat && 24 === parseInt(a, 10)) return b.buffer[c - 1] = "0", b.buffer[c] = "0", {
              refreshFromBuffer: {
                start: c - 1,
                end: c
              },
              c: "0"
            };
            var f = e.regex.hrs.test(a);
            if (!d && !f && (a.charAt(1) === e.timeseparator || -1 !== "-.:".indexOf(a.charAt(1))) && (f = e.regex.hrs.test("0" + a.charAt(0)))) return b.buffer[c - 1] = "0", b.buffer[c] = a.charAt(0), c++, {
              refreshFromBuffer: {
                start: c - 2,
                end: c
              },
              pos: c,
              c: e.timeseparator
            };
            if (f && "24" !== e.hourFormat && e.regex.hrs24.test(a)) {
              var g = parseInt(a, 10);
              return 24 === g ? (b.buffer[c + 5] = "a", b.buffer[c + 6] = "m") : (b.buffer[c + 5] = "p", b.buffer[c + 6] = "m"), g -= 12, 10 > g ? (b.buffer[c] = g.toString(), b.buffer[c - 1] = "0") : (b.buffer[c] = g.toString().charAt(1), b.buffer[c - 1] = g.toString().charAt(0)), {
                refreshFromBuffer: {
                  start: c - 1,
                  end: c + 6
                },
                c: b.buffer[c]
              };
            }
            return f;
          },
          cardinality: 2,
          prevalidator: [{
            validator: function validator(a, b, c, d, e) {
              var f = e.regex.hrspre.test(a);
              return d || f || !(f = e.regex.hrs.test("0" + a)) ? f : (b.buffer[c] = "0", c++, {
                pos: c
              });
            },
            cardinality: 1
          }]
        },
        s: {
          validator: "[0-5][0-9]",
          cardinality: 2,
          prevalidator: [{
            validator: function validator(a, b, c, d, e) {
              var f = e.regex.mspre.test(a);
              return d || f || !(f = e.regex.ms.test("0" + a)) ? f : (b.buffer[c] = "0", c++, {
                pos: c
              });
            },
            cardinality: 1
          }]
        },
        t: {
          validator: function validator(a, b, c, d, e) {
            return e.regex.ampm.test(a + "m");
          },
          casing: "lower",
          cardinality: 1
        }
      },
      insertMode: !1,
      autoUnmask: !1
    },
    datetime12: {
      mask: "1/2/y h:s t\\m",
      placeholder: "dd/mm/yyyy hh:mm xm",
      alias: "datetime",
      hourFormat: "12"
    },
    "mm/dd/yyyy hh:mm xm": {
      mask: "1/2/y h:s t\\m",
      placeholder: "mm/dd/yyyy hh:mm xm",
      alias: "datetime12",
      regex: {
        val2pre: function val2pre(a) {
          var c = b.escapeRegex.call(this, a);
          return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])");
        },
        val2: function val2(a) {
          var c = b.escapeRegex.call(this, a);
          return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)");
        },
        val1pre: new RegExp("[01]"),
        val1: new RegExp("0[1-9]|1[012]")
      },
      leapday: "02/29/",
      onKeyDown: function onKeyDown(c, d, e, f) {
        var g = a(this);
        if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
          var h = new Date();
          g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue.inputmask");
        }
      }
    },
    "hh:mm t": {
      mask: "h:s t\\m",
      placeholder: "hh:mm xm",
      alias: "datetime",
      hourFormat: "12"
    },
    "h:s t": {
      mask: "h:s t\\m",
      placeholder: "hh:mm xm",
      alias: "datetime",
      hourFormat: "12"
    },
    "hh:mm:ss": {
      mask: "h:s:s",
      placeholder: "hh:mm:ss",
      alias: "datetime",
      autoUnmask: !1
    },
    "hh:mm": {
      mask: "h:s",
      placeholder: "hh:mm",
      alias: "datetime",
      autoUnmask: !1
    },
    date: {
      alias: "dd/mm/yyyy"
    },
    "mm/yyyy": {
      mask: "1/y",
      placeholder: "mm/yyyy",
      leapday: "donotuse",
      separator: "/",
      alias: "mm/dd/yyyy"
    },
    shamsi: {
      regex: {
        val2pre: function val2pre(a) {
          var c = b.escapeRegex.call(this, a);
          return new RegExp("((0[1-9]|1[012])" + c + "[0-3])");
        },
        val2: function val2(a) {
          var c = b.escapeRegex.call(this, a);
          return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + c + "30)|((0[1-6])" + c + "31)");
        },
        val1pre: new RegExp("[01]"),
        val1: new RegExp("0[1-9]|1[012]")
      },
      yearrange: {
        minyear: 1300,
        maxyear: 1499
      },
      mask: "y/1/2",
      leapday: "/12/30",
      placeholder: "yyyy/mm/dd",
      alias: "mm/dd/yyyy",
      clearIncomplete: !0
    }
  }), b;
}(jQuery, Inputmask), function (a, b) {
  return b.extendDefinitions({
    A: {
      validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
      cardinality: 1,
      casing: "upper"
    },
    "&": {
      validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
      cardinality: 1,
      casing: "upper"
    },
    "#": {
      validator: "[0-9A-Fa-f]",
      cardinality: 1,
      casing: "upper"
    }
  }), b.extendAliases({
    url: {
      definitions: {
        i: {
          validator: ".",
          cardinality: 1
        }
      },
      mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
      insertMode: !1,
      autoUnmask: !1
    },
    ip: {
      mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
      definitions: {
        i: {
          validator: function validator(a, b, c, d, e) {
            return c - 1 > -1 && "." !== b.buffer[c - 1] ? (a = b.buffer[c - 1] + a, a = c - 2 > -1 && "." !== b.buffer[c - 2] ? b.buffer[c - 2] + a : "0" + a) : a = "00" + a, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a);
          },
          cardinality: 1
        }
      },
      onUnMask: function onUnMask(a, b, c) {
        return a;
      }
    },
    email: {
      mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,64}]@*{1,64}[.*{2,64}][.*{2,6}][.*{1,2}]",
      greedy: !1,
      onBeforePaste: function onBeforePaste(a, b) {
        return a = a.toLowerCase(), a.replace("mailto:", "");
      },
      definitions: {
        "*": {
          validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
          cardinality: 1,
          casing: "lower"
        }
      },
      onUnMask: function onUnMask(a, b, c) {
        return a;
      }
    },
    mac: {
      mask: "##:##:##:##:##:##"
    }
  }), b;
}(jQuery, Inputmask), function (a, b) {
  return b.extendAliases({
    numeric: {
      mask: function mask(a) {
        function b(b) {
          for (var c = "", d = 0; d < b.length; d++) c += a.definitions[b.charAt(d)] ? "\\" + b.charAt(d) : b.charAt(d);
          return c;
        }
        if (0 !== a.repeat && isNaN(a.integerDigits) && (a.integerDigits = a.repeat), a.repeat = 0, a.groupSeparator === a.radixPoint && ("." === a.radixPoint ? a.groupSeparator = "," : "," === a.radixPoint ? a.groupSeparator = "." : a.groupSeparator = ""), " " === a.groupSeparator && (a.skipOptionalPartCharacter = void 0), a.autoGroup = a.autoGroup && "" !== a.groupSeparator, a.autoGroup && ("string" == typeof a.groupSize && isFinite(a.groupSize) && (a.groupSize = parseInt(a.groupSize)), isFinite(a.integerDigits))) {
          var c = Math.floor(a.integerDigits / a.groupSize),
            d = a.integerDigits % a.groupSize;
          a.integerDigits = parseInt(a.integerDigits) + (0 === d ? c - 1 : c), a.integerDigits < 1 && (a.integerDigits = "*");
        }
        a.placeholder.length > 1 && (a.placeholder = a.placeholder.charAt(0)), a.radixFocus = a.radixFocus && "" !== a.placeholder && a.integerOptional === !0, a.definitions[";"] = a.definitions["~"], a.definitions[";"].definitionSymbol = "~", a.numericInput === !0 && (a.radixFocus = !1, a.digitsOptional = !1, isNaN(a.digits) && (a.digits = 2), a.decimalProtect = !1);
        var e = b(a.prefix);
        return e += "[+]", e += a.integerOptional === !0 ? "~{1," + a.integerDigits + "}" : "~{" + a.integerDigits + "}", void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && (e += a.digitsOptional ? "[" + (a.decimalProtect ? ":" : a.radixPoint) + ";{1," + a.digits + "}]" : (a.decimalProtect ? ":" : a.radixPoint) + ";{" + a.digits + "}"), "" !== a.negationSymbol.back && (e += "[-]"), e += b(a.suffix), a.greedy = !1, e;
      },
      placeholder: "",
      greedy: !1,
      digits: "*",
      digitsOptional: !0,
      radixPoint: ".",
      radixFocus: !0,
      groupSize: 3,
      groupSeparator: "",
      autoGroup: !1,
      allowPlus: !0,
      allowMinus: !0,
      negationSymbol: {
        front: "-",
        back: ""
      },
      integerDigits: "+",
      integerOptional: !0,
      prefix: "",
      suffix: "",
      rightAlign: !0,
      decimalProtect: !0,
      min: null,
      max: null,
      step: 1,
      insertMode: !0,
      autoUnmask: !1,
      unmaskAsNumber: !1,
      postFormat: function postFormat(c, d, e, f) {
        f.numericInput === !0 && (c = c.reverse(), isFinite(d) && (d = c.join("").length - d - 1));
        var g,
          h,
          i = !1;
        c.length >= f.suffix.length && c.join("").indexOf(f.suffix) === c.length - f.suffix.length && (c.length = c.length - f.suffix.length, i = !0), d = d >= c.length ? c.length - 1 : d < f.prefix.length ? f.prefix.length : d;
        var j = !1,
          k = c[d];
        if ("" === f.groupSeparator || f.numericInput !== !0 && -1 !== a.inArray(f.radixPoint, c) && d > a.inArray(f.radixPoint, c) || new RegExp("[" + b.escapeRegex(f.negationSymbol.front) + "+]").test(k)) {
          if (i) for (g = 0, h = f.suffix.length; h > g; g++) c.push(f.suffix.charAt(g));
          return {
            pos: d
          };
        }
        var l = c.slice();
        k === f.groupSeparator && (l.splice(d--, 1), k = l[d]), e ? k !== f.radixPoint && (l[d] = "?") : l.splice(d, 0, "?");
        var m = l.join(""),
          n = m;
        if (m.length > 0 && f.autoGroup || e && -1 !== m.indexOf(f.groupSeparator)) {
          var o = b.escapeRegex(f.groupSeparator);
          j = 0 === m.indexOf(f.groupSeparator), m = m.replace(new RegExp(o, "g"), "");
          var p = m.split(f.radixPoint);
          if (m = "" === f.radixPoint ? m : p[0], m !== f.prefix + "?0" && m.length >= f.groupSize + f.prefix.length) for (var q = new RegExp("([-+]?[\\d?]+)([\\d?]{" + f.groupSize + "})"); q.test(m);) m = m.replace(q, "$1" + f.groupSeparator + "$2"), m = m.replace(f.groupSeparator + f.groupSeparator, f.groupSeparator);
          "" !== f.radixPoint && p.length > 1 && (m += f.radixPoint + p[1]);
        }
        for (j = n !== m, c.length = m.length, g = 0, h = m.length; h > g; g++) c[g] = m.charAt(g);
        var r = a.inArray("?", c);
        if (-1 === r && k === f.radixPoint && (r = a.inArray(f.radixPoint, c)), e ? c[r] = k : c.splice(r, 1), !j && i) for (g = 0, h = f.suffix.length; h > g; g++) c.push(f.suffix.charAt(g));
        return r = f.numericInput && isFinite(d) ? c.join("").length - r - 1 : r, f.numericInput && (c = c.reverse(), a.inArray(f.radixPoint, c) < r && c.join("").length - f.suffix.length !== r && (r -= 1)), {
          pos: r,
          refreshFromBuffer: j,
          buffer: c
        };
      },
      onBeforeWrite: function onBeforeWrite(c, d, e, f) {
        if (c && ("blur" === c.type || "checkval" === c.type)) {
          var g = d.join(""),
            h = g.replace(f.prefix, "");
          if (h = h.replace(f.suffix, ""), h = h.replace(new RegExp(b.escapeRegex(f.groupSeparator), "g"), ""), "," === f.radixPoint && (h = h.replace(b.escapeRegex(f.radixPoint), ".")), isFinite(h) && isFinite(f.min) && parseFloat(h) < parseFloat(f.min)) return a.extend(!0, {
            refreshFromBuffer: !0,
            buffer: (f.prefix + f.min).split("")
          }, f.postFormat((f.prefix + f.min).split(""), 0, !0, f));
          if (f.numericInput !== !0) {
            var i = "" !== f.radixPoint ? d.join("").split(f.radixPoint) : [d.join("")],
              j = i[0].match(f.regex.integerPart(f)),
              k = 2 === i.length ? i[1].match(f.regex.integerNPart(f)) : void 0;
            if (j) {
              j[0] !== f.negationSymbol.front + "0" && j[0] !== f.negationSymbol.front && "+" !== j[0] || void 0 !== k && !k[0].match(/^0+$/) || d.splice(j.index, 1);
              var l = a.inArray(f.radixPoint, d);
              if (-1 !== l) {
                if (isFinite(f.digits) && !f.digitsOptional) {
                  for (var m = 1; m <= f.digits; m++) (void 0 === d[l + m] || d[l + m] === f.placeholder.charAt(0)) && (d[l + m] = "0");
                  return {
                    refreshFromBuffer: g !== d.join(""),
                    buffer: d
                  };
                }
                if (l === d.length - f.suffix.length - 1) return d.splice(l, 1), {
                  refreshFromBuffer: !0,
                  buffer: d
                };
              }
            }
          }
        }
        if (f.autoGroup) {
          var n = f.postFormat(d, f.numericInput ? e : e - 1, !0, f);
          return n.caret = e <= f.prefix.length ? n.pos : n.pos + 1, n;
        }
      },
      regex: {
        integerPart: function integerPart(a) {
          return new RegExp("[" + b.escapeRegex(a.negationSymbol.front) + "+]?\\d+");
        },
        integerNPart: function integerNPart(a) {
          return new RegExp("[\\d" + b.escapeRegex(a.groupSeparator) + "]+");
        }
      },
      signHandler: function signHandler(a, b, c, d, e) {
        if (!d && e.allowMinus && "-" === a || e.allowPlus && "+" === a) {
          var f = b.buffer.join("").match(e.regex.integerPart(e));
          if (f && f[0].length > 0) return b.buffer[f.index] === ("-" === a ? "+" : e.negationSymbol.front) ? "-" === a ? "" !== e.negationSymbol.back ? {
            pos: f.index,
            c: e.negationSymbol.front,
            remove: f.index,
            caret: c,
            insert: {
              pos: b.buffer.length - e.suffix.length - 1,
              c: e.negationSymbol.back
            }
          } : {
            pos: f.index,
            c: e.negationSymbol.front,
            remove: f.index,
            caret: c
          } : "" !== e.negationSymbol.back ? {
            pos: f.index,
            c: "+",
            remove: [f.index, b.buffer.length - e.suffix.length - 1],
            caret: c
          } : {
            pos: f.index,
            c: "+",
            remove: f.index,
            caret: c
          } : b.buffer[f.index] === ("-" === a ? e.negationSymbol.front : "+") ? "-" === a && "" !== e.negationSymbol.back ? {
            remove: [f.index, b.buffer.length - e.suffix.length - 1],
            caret: c - 1
          } : {
            remove: f.index,
            caret: c - 1
          } : "-" === a ? "" !== e.negationSymbol.back ? {
            pos: f.index,
            c: e.negationSymbol.front,
            caret: c + 1,
            insert: {
              pos: b.buffer.length - e.suffix.length,
              c: e.negationSymbol.back
            }
          } : {
            pos: f.index,
            c: e.negationSymbol.front,
            caret: c + 1
          } : {
            pos: f.index,
            c: a,
            caret: c + 1
          };
        }
        return !1;
      },
      radixHandler: function radixHandler(b, c, d, e, f) {
        if (!e && (-1 !== a.inArray(b, [",", "."]) && (b = f.radixPoint), b === f.radixPoint && void 0 !== f.digits && (isNaN(f.digits) || parseInt(f.digits) > 0))) {
          var g = a.inArray(f.radixPoint, c.buffer),
            h = c.buffer.join("").match(f.regex.integerPart(f));
          if (-1 !== g && c.validPositions[g]) return c.validPositions[g - 1] ? {
            caret: g + 1
          } : {
            pos: h.index,
            c: h[0],
            caret: g + 1
          };
          if (!h || "0" === h[0] && h.index + 1 !== d) return c.buffer[h ? h.index : d] = "0", {
            pos: (h ? h.index : d) + 1,
            c: f.radixPoint
          };
        }
        return !1;
      },
      leadingZeroHandler: function leadingZeroHandler(b, c, d, e, f) {
        if (f.numericInput === !0) {
          if ("0" === c.buffer[c.buffer.length - f.prefix.length - 1]) return {
            pos: d,
            remove: c.buffer.length - f.prefix.length - 1
          };
        } else {
          var g = c.buffer.join("").match(f.regex.integerNPart(f)),
            h = a.inArray(f.radixPoint, c.buffer);
          if (g && !e && (-1 === h || h >= d)) if (0 === g[0].indexOf("0")) {
            d < f.prefix.length && (d = g.index);
            var i = a.inArray(f.radixPoint, c._buffer),
              j = c._buffer && c.buffer.slice(h).join("") === c._buffer.slice(i).join("") || 0 === parseInt(c.buffer.slice(h + 1).join("")),
              k = c._buffer && c.buffer.slice(g.index, h).join("") === c._buffer.slice(f.prefix.length, i).join("") || "0" === c.buffer.slice(g.index, h).join("");
            if (-1 === h || j && k) return c.buffer.splice(g.index, 1), d = d > g.index ? d - 1 : g.index, {
              pos: d,
              remove: g.index
            };
            if (g.index + 1 === d || "0" === b) return c.buffer.splice(g.index, 1), d = g.index, {
              pos: d,
              remove: g.index
            };
          } else if ("0" === b && d <= g.index && g[0] !== f.groupSeparator) return !1;
        }
        return !0;
      },
      postValidation: function postValidation(c, d) {
        var e = !0,
          f = c.join(""),
          g = f.replace(d.prefix, "");
        return g = g.replace(d.suffix, ""), g = g.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), "," === d.radixPoint && (g = g.replace(b.escapeRegex(d.radixPoint), ".")), g = g.replace(new RegExp("^" + b.escapeRegex(d.negationSymbol.front)), "-"), g = g.replace(new RegExp(b.escapeRegex(d.negationSymbol.back) + "$"), ""), g = g === d.negationSymbol.front ? g + "0" : g, isFinite(g) && (null !== d.max && isFinite(d.max) && (e = parseFloat(g) <= parseFloat(d.max)), e && null !== d.min && isFinite(d.min) && (0 >= g || g.toString().length >= d.min.toString().length) && (e = parseFloat(g) >= parseFloat(d.min), e || (e = a.extend(!0, {
          refreshFromBuffer: !0,
          buffer: (d.prefix + d.min).split("")
        }, d.postFormat((d.prefix + d.min).split(""), 0, !0, d)), e.refreshFromBuffer = !0))), e;
      },
      definitions: {
        "~": {
          validator: function validator(c, d, e, f, g) {
            var h = g.signHandler(c, d, e, f, g);
            if (!h && (h = g.radixHandler(c, d, e, f, g), !h && (h = f ? new RegExp("[0-9" + b.escapeRegex(g.groupSeparator) + "]").test(c) : new RegExp("[0-9]").test(c), h === !0 && (h = g.leadingZeroHandler(c, d, e, f, g), h === !0)))) {
              var i = a.inArray(g.radixPoint, d.buffer);
              h = -1 !== i && g.digitsOptional === !1 && g.numericInput !== !0 && e > i && !f ? {
                pos: e,
                remove: e
              } : {
                pos: e
              };
            }
            return h;
          },
          cardinality: 1,
          prevalidator: null
        },
        "+": {
          validator: function validator(a, b, c, d, e) {
            var f = e.signHandler(a, b, c, d, e);
            return !f && (d && e.allowMinus && a === e.negationSymbol.front || e.allowMinus && "-" === a || e.allowPlus && "+" === a) && (f = "-" === a ? "" !== e.negationSymbol.back ? {
              pos: c,
              c: "-" === a ? e.negationSymbol.front : "+",
              caret: c + 1,
              insert: {
                pos: b.buffer.length,
                c: e.negationSymbol.back
              }
            } : {
              pos: c,
              c: "-" === a ? e.negationSymbol.front : "+",
              caret: c + 1
            } : !0), f;
          },
          cardinality: 1,
          prevalidator: null,
          placeholder: ""
        },
        "-": {
          validator: function validator(a, b, c, d, e) {
            var f = e.signHandler(a, b, c, d, e);
            return !f && d && e.allowMinus && a === e.negationSymbol.back && (f = !0), f;
          },
          cardinality: 1,
          prevalidator: null,
          placeholder: ""
        },
        ":": {
          validator: function validator(a, c, d, e, f) {
            var g = f.signHandler(a, c, d, e, f);
            if (!g) {
              var h = "[" + b.escapeRegex(f.radixPoint) + ",\\.]";
              g = new RegExp(h).test(a), g && c.validPositions[d] && c.validPositions[d].match.placeholder === f.radixPoint && (g = {
                caret: d + 1
              });
            }
            return g ? {
              c: f.radixPoint
            } : g;
          },
          cardinality: 1,
          prevalidator: null,
          placeholder: function placeholder(a) {
            return a.radixPoint;
          }
        }
      },
      onUnMask: function onUnMask(a, c, d) {
        var e = a.replace(d.prefix, "");
        return e = e.replace(d.suffix, ""), e = e.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), d.unmaskAsNumber ? ("" !== d.radixPoint && -1 !== e.indexOf(d.radixPoint) && (e = e.replace(b.escapeRegex.call(this, d.radixPoint), ".")), Number(e)) : e;
      },
      isComplete: function isComplete(a, c) {
        var d = a.join(""),
          e = a.slice();
        if (c.postFormat(e, 0, !0, c), e.join("") !== d) return !1;
        var f = d.replace(c.prefix, "");
        return f = f.replace(c.suffix, ""), f = f.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), ""), "," === c.radixPoint && (f = f.replace(b.escapeRegex(c.radixPoint), ".")), isFinite(f);
      },
      onBeforeMask: function onBeforeMask(a, c) {
        if ("" !== c.radixPoint && isFinite(a)) a = a.toString().replace(".", c.radixPoint);else {
          var d = a.match(/,/g),
            e = a.match(/\./g);
          e && d ? e.length > d.length ? (a = a.replace(/\./g, ""), a = a.replace(",", c.radixPoint)) : d.length > e.length ? (a = a.replace(/,/g, ""), a = a.replace(".", c.radixPoint)) : a = a.indexOf(".") < a.indexOf(",") ? a.replace(/\./g, "") : a = a.replace(/,/g, "") : a = a.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), "");
        }
        if (0 === c.digits && (-1 !== a.indexOf(".") ? a = a.substring(0, a.indexOf(".")) : -1 !== a.indexOf(",") && (a = a.substring(0, a.indexOf(",")))), "" !== c.radixPoint && isFinite(c.digits) && -1 !== a.indexOf(c.radixPoint)) {
          var f = a.split(c.radixPoint),
            g = f[1].match(new RegExp("\\d*"))[0];
          if (parseInt(c.digits) < g.toString().length) {
            var h = Math.pow(10, parseInt(c.digits));
            a = a.replace(b.escapeRegex(c.radixPoint), "."), a = Math.round(parseFloat(a) * h) / h, a = a.toString().replace(".", c.radixPoint);
          }
        }
        return a.toString();
      },
      canClearPosition: function canClearPosition(c, d, e, f, g) {
        var h = c.validPositions[d].input,
          i = h !== g.radixPoint || null !== c.validPositions[d].match.fn && g.decimalProtect === !1 || isFinite(h) || d === e || h === g.groupSeparator || h === g.negationSymbol.front || h === g.negationSymbol.back;
        if (i && isFinite(h)) {
          var j,
            k = a.inArray(g.radixPoint, c.buffer),
            l = !1;
          if (void 0 === c.validPositions[k] && (c.validPositions[k] = {
            input: g.radixPoint
          }, l = !0), !f && c.buffer) {
            j = c.buffer.join("").substr(0, d).match(g.regex.integerNPart(g));
            var m = d + 1,
              n = null == j || 0 === parseInt(j[0].replace(new RegExp(b.escapeRegex(g.groupSeparator), "g"), ""));
            if (n) for (; c.validPositions[m] && (c.validPositions[m].input === g.groupSeparator || "0" === c.validPositions[m].input);) delete c.validPositions[m], m++;
          }
          var o = [];
          for (var p in c.validPositions) void 0 !== c.validPositions[p].input && o.push(c.validPositions[p].input);
          if (l && delete c.validPositions[k], k > 0) {
            var q = o.join("");
            if (j = q.match(g.regex.integerNPart(g))) if (k >= d) {
              if (0 === j[0].indexOf("0")) i = j.index !== d || "0" === g.placeholder;else {
                var r = parseInt(j[0].replace(new RegExp(b.escapeRegex(g.groupSeparator), "g"), "")),
                  s = parseInt(q.split(g.radixPoint)[1]);
                10 > r && c.validPositions[d] && ("0" !== g.placeholder || s > 0) && (c.validPositions[d].input = "0", c.p = g.prefix.length + 1, i = !1);
              }
            } else 0 === j[0].indexOf("0") && 3 === q.length && (c.validPositions = {}, i = !1);
          }
        }
        return i;
      },
      onKeyDown: function onKeyDown(c, d, e, f) {
        var g = a(this);
        if (c.ctrlKey) switch (c.keyCode) {
          case b.keyCode.UP:
            g.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(f.step)), g.trigger("setvalue.inputmask");
            break;
          case b.keyCode.DOWN:
            g.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(f.step)), g.trigger("setvalue.inputmask");
        }
      }
    },
    currency: {
      prefix: "$ ",
      groupSeparator: ",",
      alias: "numeric",
      placeholder: "0",
      autoGroup: !0,
      digits: 2,
      digitsOptional: !1,
      clearMaskOnLostFocus: !1
    },
    decimal: {
      alias: "numeric"
    },
    integer: {
      alias: "numeric",
      digits: 0,
      radixPoint: ""
    },
    percentage: {
      alias: "numeric",
      digits: 2,
      radixPoint: ".",
      placeholder: "0",
      autoGroup: !1,
      min: 0,
      max: 100,
      suffix: " %",
      allowPlus: !1,
      allowMinus: !1
    }
  }), b;
}(jQuery, Inputmask), function (a, b) {
  return b.extendAliases({
    phone: {
      url: "phone-codes/phone-codes.js",
      countrycode: "",
      mask: function mask(b) {
        b.definitions["#"] = b.definitions[9];
        var c = [];
        return a.ajax({
          url: b.url,
          async: !1,
          dataType: "json",
          success: function success(a) {
            c = a;
          },
          error: function error(a, c, d) {
            alert(d + " - " + b.url);
          }
        }), c = c.sort(function (a, b) {
          return (a.mask || a) < (b.mask || b) ? -1 : 1;
        });
      },
      keepStatic: !1,
      nojumps: !0,
      nojumpsThreshold: 1,
      onBeforeMask: function onBeforeMask(a, b) {
        var c = a.replace(/^0/g, "");
        return (c.indexOf(b.countrycode) > 1 || -1 === c.indexOf(b.countrycode)) && (c = "+" + b.countrycode + c), c;
      }
    },
    phonebe: {
      alias: "phone",
      url: "phone-codes/phone-be.js",
      countrycode: "32",
      nojumpsThreshold: 4
    }
  }), b;
}(jQuery, Inputmask), function (a, b) {
  return b.extendAliases({
    Regex: {
      mask: "r",
      greedy: !1,
      repeat: "*",
      regex: null,
      regexTokens: null,
      tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
      quantifierFilter: /[0-9]+[^,]/,
      isComplete: function isComplete(a, b) {
        return new RegExp(b.regex).test(a.join(""));
      },
      definitions: {
        r: {
          validator: function validator(b, c, d, e, f) {
            function g(a, b) {
              this.matches = [], this.isGroup = a || !1, this.isQuantifier = b || !1, this.quantifier = {
                min: 1,
                max: 1
              }, this.repeaterPart = void 0;
            }
            function h() {
              var a,
                b,
                c = new g(),
                d = [];
              for (f.regexTokens = []; a = f.tokenizer.exec(f.regex);) switch (b = a[0], b.charAt(0)) {
                case "(":
                  d.push(new g(!0));
                  break;
                case ")":
                  j = d.pop(), d.length > 0 ? d[d.length - 1].matches.push(j) : c.matches.push(j);
                  break;
                case "{":
                case "+":
                case "*":
                  var e = new g(!1, !0);
                  b = b.replace(/[{}]/g, "");
                  var h = b.split(","),
                    i = isNaN(h[0]) ? h[0] : parseInt(h[0]),
                    k = 1 === h.length ? i : isNaN(h[1]) ? h[1] : parseInt(h[1]);
                  if (e.quantifier = {
                    min: i,
                    max: k
                  }, d.length > 0) {
                    var l = d[d.length - 1].matches;
                    a = l.pop(), a.isGroup || (j = new g(!0), j.matches.push(a), a = j), l.push(a), l.push(e);
                  } else a = c.matches.pop(), a.isGroup || (j = new g(!0), j.matches.push(a), a = j), c.matches.push(a), c.matches.push(e);
                  break;
                default:
                  d.length > 0 ? d[d.length - 1].matches.push(b) : c.matches.push(b);
              }
              c.matches.length > 0 && f.regexTokens.push(c);
            }
            function i(b, c) {
              var d = !1;
              c && (l += "(", n++);
              for (var e = 0; e < b.matches.length; e++) {
                var f = b.matches[e];
                if (f.isGroup === !0) d = i(f, !0);else if (f.isQuantifier === !0) {
                  var g = a.inArray(f, b.matches),
                    h = b.matches[g - 1],
                    j = l;
                  if (isNaN(f.quantifier.max)) {
                    for (; f.repeaterPart && f.repeaterPart !== l && f.repeaterPart.length > l.length && !(d = i(h, !0)););
                    d = d || i(h, !0), d && (f.repeaterPart = l), l = j + f.quantifier.max;
                  } else {
                    for (var k = 0, m = f.quantifier.max - 1; m > k && !(d = i(h, !0)); k++);
                    l = j + "{" + f.quantifier.min + "," + f.quantifier.max + "}";
                  }
                } else if (void 0 !== f.matches) for (var p = 0; p < f.length && !(d = i(f[p], c)); p++);else {
                  var q;
                  if ("[" == f.charAt(0)) {
                    q = l, q += f;
                    for (var r = 0; n > r; r++) q += ")";
                    var s = new RegExp("^(" + q + ")$");
                    d = s.test(o);
                  } else for (var t = 0, u = f.length; u > t; t++) if ("\\" !== f.charAt(t)) {
                    q = l, q += f.substr(0, t + 1), q = q.replace(/\|$/, "");
                    for (var r = 0; n > r; r++) q += ")";
                    var s = new RegExp("^(" + q + ")$");
                    if (d = s.test(o)) break;
                  }
                  l += f;
                }
                if (d) break;
              }
              return c && (l += ")", n--), d;
            }
            var j,
              k = c.buffer.slice(),
              l = "",
              m = !1,
              n = 0;
            null === f.regexTokens && h(), k.splice(d, 0, b);
            for (var o = k.join(""), p = 0; p < f.regexTokens.length; p++) {
              var q = f.regexTokens[p];
              if (m = i(q, q.isGroup)) break;
            }
            return m;
          },
          cardinality: 1
        }
      }
    }
  }), b;
}(jQuery, Inputmask);

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoEmailComponent = exports.EmailInputDirective = void 0;
var _emailValidator = __webpack_require__(183);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EmailInputDirective = function EmailInputDirective() {
  return {
    require: 'ngModel',
    link: function link(scope, element, attrs, ngModel) {
      ngModel.$validators.email = function (modelValue, viewValue) {
        return new _emailValidator.EmailValidatorCtrl().isEmailValid(viewValue);
      };
    }
  };
};
exports.EmailInputDirective = EmailInputDirective;
var UserInfoEmailController = /*#__PURE__*/function () {
  UserInfoEmailController.$inject = ["editUserInfoService", "language"];
  /*@ngInject*/
  function UserInfoEmailController(editUserInfoService, language) {
    _classCallCheck(this, UserInfoEmailController);
    this.editUserInfoService = editUserInfoService;
    this.language = language;
  }
  _createClass(UserInfoEmailController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.editUserInfoService.ready.subscribe(function () {
        _this.email = _this.editUserInfoService.userInfoData.commonData.email;
      });
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      this.editUserInfoService.forms.push(this.form);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.editUserInfoService.userInfoData.commonData.email = this.email;
    }
  }, {
    key: "emailError",
    value: function emailError() {
      return this.language.Generic.SetupSchoolUI.kSetEMail;
    }
  }]);
  return UserInfoEmailController;
}();
var UserInfoEmailComponent = {
  controller: UserInfoEmailController,
  template: "\n\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.EM.$invalid }\">\n\t\t\t<input track-changes email-input type=\"text\" class=\"form-control\" name=\"EM\" size=\"35\" maxlength=\"80\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.email\" ng-change=\"$ctrl.onChange()\">\n\t\t\t<div ng-messages=\"$ctrl.form.EM.$error\">\n\t\t\t\t<span class=\"help-block\" ng-message=\"email\">{{$ctrl.emailError()}}</span>\n\t\t\t</div>\n\t\t</ng-form>\n\t",
  controllerAs: "$ctrl",
  selector: "emailComponent",
  bindings: {
    email: "<",
    readonly: "<"
  }
};
exports.UserInfoEmailComponent = UserInfoEmailComponent;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailValidatorCtrl = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defPattern = "^[-!#$%&'*+/=?^`{|}~\\w]+([.][-!#$%&'*+/=?^`{|}~\\w]+)*@[-!#$%&'*+/=?^`{|}~\\w]+([.][-!#$%&'*+/=?^`{|}~\\w]+)*[.]\\w\\w+$";
var EmailValidatorCtrl = /*#__PURE__*/function () {
  function EmailValidatorCtrl() {
    _classCallCheck(this, EmailValidatorCtrl);
  }
  _createClass(EmailValidatorCtrl, [{
    key: "isEmailValid",
    value: function isEmailValid(sEmail) {
      if (!sEmail) {
        return true;
      }
      if (sEmail.length === 0) {
        return true;
      }
      if (sEmail.indexOf("@") === -1) {
        return false;
      }
      var emailRe = new RegExp(defPattern, 'ig');
      if (!emailRe.test(sEmail)) {
        return false;
      }
      return true;
    }
  }, {
    key: "getPattern",
    value: function getPattern() {
      return new RegExp(defPattern);
    }
  }]);
  return EmailValidatorCtrl;
}();
exports.EmailValidatorCtrl = EmailValidatorCtrl;
;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPhotoRepository = exports.UserInfoPhotoComponent = void 0;
var _urlHelper = __webpack_require__(4);
var _baseRepository = __webpack_require__(41);
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfoPhotoController = /*#__PURE__*/function () {
  UserInfoPhotoController.$inject = ["settingsProvider", "language", "$scope", "$dialogs", "userPhotoRepository", "$alerts"];
  /*@ngInject*/
  function UserInfoPhotoController(settingsProvider, language, $scope, $dialogs, userPhotoRepository, $alerts) {
    _classCallCheck(this, UserInfoPhotoController);
    this.settingsProvider = settingsProvider;
    this.language = language;
    this.$scope = $scope;
    this.$dialogs = $dialogs;
    this.userPhotoRepository = userPhotoRepository;
    this.$alerts = $alerts;
  }
  _createClass(UserInfoPhotoController, [{
    key: "$onInit",
    value: function $onInit() {
      this.photoUrl = _urlHelper.UrlHelperInstance.makeUrl("/webapi/users/photo", {
        userId: this.userId
      });
    }
  }, {
    key: "setPhoto",
    value: function setPhoto() {
      var _this = this;
      var faDialogOptions = {
        fileExts: function fileExts() {
          return ['png', 'jpg', 'gif', 'jpeg'];
        },
        url: "/webapi/userinfo/".concat(this.userId, "/photo"),
        invalidFileExtMsg: this.language.Generic.Photo.kPhotoFileName_Ext,
        submitData: {
          userId: this.userId
        },
        needResize: function needResize(fileSize, uploadLimits) {
          return fileSize > uploadLimits.photoFileSizeLimit;
        },
        withPreview: true,
        imageFile: true
      };
      this.$dialogs.uploadFile(this.language.Generic.Photo.kAttachPhoto, faDialogOptions).then(function () {
        _this.photoUrl = _this.photoUrl + '&' + Math.random();
        _this.existsPhoto = true;
        _this.$scope.$applyAsync();
      });
    }
  }, {
    key: "delPhoto",
    value: function delPhoto() {
      var _this2 = this;
      this.$dialogs.confirm("".concat(this.language.Generic.Photo.kRemovePhotoConfirm, " \"").concat(this.userName, "\"?")).then(function () {
        _this2.userPhotoRepository.delPhoto(_this2.userId).then(function () {
          _this2.existsPhoto = false;
          _this2.photoUrl = _urlHelper.UrlHelperInstance.makeUrl("/webapi/users/photo", {
            userId: _this2.userId
          });
          _this2.$scope.$applyAsync();
          _this2.$alerts.success(_this2.language.Generic.Photo.kPhotoWasDeleted);
        });
      });
    }
  }]);
  return UserInfoPhotoController;
}();
var UserPhotoRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(UserPhotoRepository, _BaseRepository);
  var _super = _createSuper(UserPhotoRepository);
  function UserPhotoRepository() {
    _classCallCheck(this, UserPhotoRepository);
    return _super.apply(this, arguments);
  }
  _createClass(UserPhotoRepository, [{
    key: "delPhoto",
    value: function delPhoto(userId) {
      return this.$http["delete"]("/webapi/userinfo/".concat(userId, "/photo")).then(this.handleResponse, this.handleError);
    }
  }]);
  return UserPhotoRepository;
}(_baseRepository.BaseRepository);
exports.UserPhotoRepository = UserPhotoRepository;
var UserInfoPhotoComponent = {
  template: "\n\t\t<a href=\"javascript:void(0)\" ng-click=\"$ctrl.setPhoto()\" title=\"{{$ctrl.language.Generic.SetupSchoolUI.kSetPhoto}}\" >\n\t\t\t<img ng-src=\"{{$ctrl.photoUrl}}\" ng-if=\"$ctrl.photoUrl\" border=\"0\" alt=\"\u0424\u043E\u0442\u043E\" style=\"max-height: 100px; max-width: 100px;\">\n\t\t</a>\n\t\t<a style=\"white-space: nowrap\" href=\"javascript:void(0);\" title=\"{{$ctrl.language.Generic.Photo.kDeletePhoto}}\" ng-show=\"$ctrl.existsPhoto\" ng-click=\"$ctrl.delPhoto()\"><small>\u0443\u0434\u0430\u043B\u0438\u0442\u044C</small></a>\n\t\t",
  controller: UserInfoPhotoController,
  controllerAs: "$ctrl",
  selector: "userInfoPhoto",
  bindings: {
    userId: "<",
    userName: "<",
    existsPhoto: "<"
  }
};
exports.UserInfoPhotoComponent = UserInfoPhotoComponent;

/***/ }),

/***/ 219:
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

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsProvider = exports.PfdoIntegrationType = void 0;
var ServerSettingsInfo = _interopRequireWildcard(__webpack_require__(235));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SettingsCache = /*#__PURE__*/function () {
  function SettingsCache() {
    _classCallCheck(this, SettingsCache);
    this.cache = {
      // SystemSettings
      enableLessonMaps: undefined,
      moduleQA: {},
      // LocalSettings
      isDefaultLangRus: undefined
    };
  }
  _createClass(SettingsCache, [{
    key: "checkCache",
    value: function checkCache(settingName, extKey) {
      var cachedData = extKey ? this.cache[settingName][extKey] : this.cache[settingName];
      if (cachedData === undefined) {
        return undefined;
      }
      return cachedData;
    }
  }, {
    key: "putCache",
    value: function putCache(data, settingName, extKey) {
      if (extKey) {
        this.cache[settingName][extKey] = data;
      } else {
        this.cache[settingName] = data;
      }
    }
  }]);
  return SettingsCache;
}();
var CommonServerSettings = /*#__PURE__*/function () {
  function CommonServerSettings($http) {
    _classCallCheck(this, CommonServerSettings);
    this.$http = $http;
  }
  _createClass(CommonServerSettings, [{
    key: "AllowEditTimezoneInOo",
    value: function AllowEditTimezoneInOo() {
      return this.$http.get("/webapi/settings/common/allowEditTimezoneInOo").then(function (response) {
        return response.data;
      });
    }
  }]);
  return CommonServerSettings;
}();
var SystemSettings = /*#__PURE__*/function () {
  function SystemSettings($http, settingsCache, appContext) {
    _classCallCheck(this, SystemSettings);
    this.$http = $http;
    this.settingsCache = settingsCache;
    this.appContext = appContext;
  }
  _createClass(SystemSettings, [{
    key: "getSetting",
    value: function getSetting(id) {
      return this.$http.get("/webapi/settings", {
        params: {
          id: id
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "getSettingByKey",
    value: function getSettingByKey(key) {
      return this.$http.get("/webapi/settings/" + key).then(function (response) {
        return response.data;
      });
    }
    // См. ServersController.GetSetting
  }, {
    key: "getBoolSetting",
    value: function getBoolSetting(id) {
      return this.$http.get("/webapi/settings", {
        params: {
          id: id
        }
      }).then(function (response) {
        return response.data == "1";
      });
    }
  }, {
    key: "IsRegionEMForSchool",
    value: function IsRegionEMForSchool() {
      return this.getBoolSetting(ServerSettingsInfo.IsRegionEMForSchool);
    }
  }, {
    key: "LaIntegrationCourses",
    value: function LaIntegrationCourses() {
      return this.getBoolSetting(ServerSettingsInfo.LaIntegrationCourses);
    }
  }, {
    key: "EnableLessonMaps",
    value: function EnableLessonMaps() {
      var _this = this;
      var settingName = "enableLessonMaps";
      var cachedData = this.settingsCache.checkCache(settingName);
      if (cachedData !== undefined) {
        return Promise.resolve(cachedData);
      }
      return Promise.resolve(this.getBoolSetting(ServerSettingsInfo.EnableLessonMaps).then(function (val) {
        _this.settingsCache.putCache(val, settingName);
        return val;
      }));
    }
  }, {
    key: "ModuleQA",
    value: function ModuleQA() {
      var _this2 = this;
      // В общем случае - недостаточно кэшировать только по названию этой настройки, т.к. модуль МСОКО может быть доступен одной школе, но недоступен другой (соседней),
      // и при этом может быть заход УО.
      var settingName = "moduleQA";
      var cachedData = this.settingsCache.checkCache(settingName, this.appContext.at);
      if (cachedData !== undefined) {
        return Promise.resolve(cachedData);
      }
      return Promise.resolve(this.$http.get("/webapi/settings/ModuleQA").then(function (response) {
        _this2.settingsCache.putCache(response.data, settingName, _this2.appContext.at);
        return response.data;
      }));
    }
  }, {
    key: "ModuleDistanceLearning",
    value: function ModuleDistanceLearning() {
      return this.$http.get("/webapi/settings/moduleDistanceLearning").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ProjectHealthyChildren",
    value: function ProjectHealthyChildren() {
      return this.$http.get("/webapi/settings/projectHealthyChildren").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EditableDefaultPortfolioGroups",
    value: function EditableDefaultPortfolioGroups() {
      return this.$http.get("/webapi/settings/editableDefaultPortfolioGroups").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleFoodPay",
    value: function ModuleFoodPay() {
      return this.$http.get("/webapi/settings/moduleFoodPay").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleTalentStudents",
    value: function ModuleTalentStudents() {
      return this.$http.get("/webapi/settings/moduleTalentStudents").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleStaffAttest",
    value: function ModuleStaffAttest() {
      return this.$http.get("/webapi/settings/moduleStaffAttest").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleRegion",
    value: function ModuleRegion() {
      return this.$http.get("/webapi/settings/moduleRegion").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MinLoginLength",
    value: function MinLoginLength() {
      return this.getSettingByKey("minLoginLength");
    }
  }, {
    key: "SecureApi",
    value: function SecureApi() {
      return this.getBoolSetting(ServerSettingsInfo.SecureApi);
    }
  }, {
    key: "IntegrationPFDOType",
    value: function IntegrationPFDOType() {
      return this.$http.get("/webapi/settings/IntegrationPFDOType").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModulePfrIntegration",
    value: function ModulePfrIntegration() {
      return this.$http.get("/webapi/settings/ModulePfrIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleChats",
    value: function ModuleChats(config) {
      return this.$http.get("/webapi/settings/moduleChats", config).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "PfdoIntegrationDontRequireEmail",
    value: function PfdoIntegrationDontRequireEmail() {
      return this.$http.get("/webapi/settings/PfdoIntegrationDontRequireEmail").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "SoloIntegration",
    value: function SoloIntegration() {
      return this.$http.get("/webapi/settings/system-settings/SoloIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "GisRuoIntegration",
    value: function GisRuoIntegration() {
      return this.$http.get("/webapi/settings/gisRuoIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MyEducationIntegration",
    value: function MyEducationIntegration() {
      return this.$http.get("/webapi/settings/myEducationIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MobileAppAdPage",
    value: function MobileAppAdPage() {
      return this.$http.get("/webapi/settings/system-settings/MobileAppAdPage").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "JournalCorrection",
    value: function JournalCorrection() {
      return this.$http.get("/webapi/settings/JournalCorrection").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EditCertificatesDOOnlyByRegion",
    value: function EditCertificatesDOOnlyByRegion() {
      return this.getBoolSetting(ServerSettingsInfo.EditCertificatesDOOnlyByRegion);
    }
  }, {
    key: "PushNotificationsEnabled",
    value: function PushNotificationsEnabled() {
      return this.$http.get("/webapi/settings/system-settings/PushNotificationsEnabled").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EnableStudentsDataQuality",
    value: function EnableStudentsDataQuality() {
      return this.$http.get("/webapi/settings/system-settings/enableStudentsDataQuality").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleInlearnoIntegration",
    value: function ModuleInlearnoIntegration() {
      return this.$http.get("/webapi/settings/system-settings/moduleInlearnoIntegration").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleSchoolAwardEvents",
    value: function ModuleSchoolAwardEvents() {
      return this.$http.get("/webapi/settings/system-settings/moduleSchoolAwardEvents").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleNationOlympiad",
    value: function ModuleNationOlympiad() {
      return this.$http.get("/webapi/settings/system-settings/moduleNationOlympiad").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EnableCertificatesDo",
    value: function EnableCertificatesDo() {
      return this.$http.get("/webapi/settings/system-settings/enableCertificatesDo").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ExternalAccessEmUserToSchool",
    value: function ExternalAccessEmUserToSchool() {
      return this.$http.get("/webapi/settings/system-settings/externalAccessEmUserToSchool").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModulePoo",
    value: function ModulePoo() {
      return this.$http.get("/webapi/settings/system-settings/ModulePoo").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleMedSysIntegration",
    value: function ModuleMedSysIntegration() {
      return this.$http.get("/webapi/settings/system-settings/ModuleMedSysIntegration").then(function (response) {
        return response.data;
      });
    }
  }]);
  return SystemSettings;
}();
var UserAuthorizationSettings = /*#__PURE__*/function () {
  function UserAuthorizationSettings($http) {
    _classCallCheck(this, UserAuthorizationSettings);
    this.$http = $http;
  }
  _createClass(UserAuthorizationSettings, [{
    key: "WindowsAuth",
    value: function WindowsAuth() {
      return this.$http.get("/webapi/settings/windowsAuth").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EsiaAuth",
    value: function EsiaAuth() {
      return this.$http.get("/webapi/settings/esiaAuth").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "IrtechAuth",
    value: function IrtechAuth() {
      return this.$http.get("/webapi/settings/irtechAuth").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "EsaAuth",
    value: function EsaAuth() {
      return this.$http.get("/webapi/settings/esaAuth").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "QueueImportMode",
    value: function QueueImportMode() {
      return this.$http.get("/webapi/settings/queueImportMode").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ImportStaffFromOtherOrgs",
    value: function ImportStaffFromOtherOrgs() {
      return this.$http.get("/webapi/settings/importStaffFromOtherOrgs").then(function (response) {
        return response.data;
      });
    }
  }]);
  return UserAuthorizationSettings;
}();
var IntegrationSettings = /*#__PURE__*/function () {
  function IntegrationSettings($http) {
    _classCallCheck(this, IntegrationSettings);
    this.$http = $http;
  }
  _createClass(IntegrationSettings, [{
    key: "NetCityPooUrl",
    value: function NetCityPooUrl() {
      return this.$http.get("/webapi/settings/netCityPooUrl").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "NetCityPooManagementUrl",
    value: function NetCityPooManagementUrl() {
      return this.$http.get("/webapi/settings/netCityPooManagementUrl").then(function (response) {
        return response.data;
      });
    }
  }]);
  return IntegrationSettings;
}();
var SchoolInfoSettings = /*#__PURE__*/function () {
  function SchoolInfoSettings($http) {
    _classCallCheck(this, SchoolInfoSettings);
    this.$http = $http;
  }
  _createClass(SchoolInfoSettings, [{
    key: "RequireReasonChangeSchoolCard",
    value: function RequireReasonChangeSchoolCard() {
      return this.$http.get("/webapi/settings/schoolinfo-settings/requirereasonchangeschoolcard").then(function (response) {
        return response.data == "1";
      });
    }
  }, {
    key: "EM_MayEditExtraSchoolInfo",
    value: function EM_MayEditExtraSchoolInfo() {
      return this.$http.get("/webapi/settings/schoolinfo-settings/em_mayeditextraschoolinfo").then(function (response) {
        return response.data == "1";
      });
    }
  }]);
  return SchoolInfoSettings;
}();
var UserAccountsSettings = /*#__PURE__*/function () {
  function UserAccountsSettings($http) {
    _classCallCheck(this, UserAccountsSettings);
    this.$http = $http;
  }
  _createClass(UserAccountsSettings, [{
    key: "RequireParentBirthDate",
    value: function RequireParentBirthDate() {
      return this.$http.get("/webapi/settings/requireParentBirthDate").then(function (response) {
        return response.data;
      });
    }
  }]);
  return UserAccountsSettings;
}();
var SecuritySettings = /*#__PURE__*/function () {
  function SecuritySettings($http) {
    _classCallCheck(this, SecuritySettings);
    this.$http = $http;
  }
  _createClass(SecuritySettings, [{
    key: "MinPasswordLength",
    value: function MinPasswordLength() {
      return this.$http.get("/webapi/settings/minPasswordLength").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MinLoginLength",
    value: function MinLoginLength() {
      return this.$http.get("/webapi/settings/minLoginLength").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "RestrictNumericPasswords",
    value: function RestrictNumericPasswords() {
      return this.$http.get("/webapi/settings/restrictNumericPasswords").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "MaxSessionIdleTime",
    value: function MaxSessionIdleTime() {
      return this.$http.get("/webapi/settings/maxSessionIdleTime").then(function (response) {
        return response.data;
      });
    }
  }]);
  return SecuritySettings;
}();
var ServerSettings = /*#__PURE__*/_createClass(function ServerSettings($http, settingsCache, appContext) {
  _classCallCheck(this, ServerSettings);
  this.$http = $http;
  this.settingsCache = settingsCache;
  this.appContext = appContext;
  this.CommonServerSettings = new CommonServerSettings(this.$http);
  this.SystemSettings = new SystemSettings($http, settingsCache, appContext);
  this.UserAuthorizationSettings = new UserAuthorizationSettings($http);
  this.SchoolInfoSettings = new SchoolInfoSettings($http);
  this.UserAccountsSettings = new UserAccountsSettings($http);
});
var LocalSettings = /*#__PURE__*/function () {
  function LocalSettings($http, settingsCache, appContext) {
    _classCallCheck(this, LocalSettings);
    this.$http = $http;
    this.settingsCache = settingsCache;
    this.appContext = appContext;
  }
  _createClass(LocalSettings, [{
    key: "getSetting",
    value: function getSetting(id) {
      return this.$http.get("/webapi/settings", {
        params: {
          id: id
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "getSettingByKey",
    value: function getSettingByKey(key) {
      return this.$http.get("/webapi/settings/" + key).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "RegExpAlphabet",
    value: function RegExpAlphabet() {
      return this.getSettingByKey("regExpAlphabet");
    }
  }, {
    key: "RegExpFio",
    value: function RegExpFio() {
      return this.getSettingByKey("regExpFio");
    }
  }, {
    key: "IsDefaultLangRus",
    value: function IsDefaultLangRus() {
      var _this3 = this;
      var settingName = "isDefaultLangRus";
      var cachedData = this.settingsCache.checkCache(settingName);
      if (cachedData !== undefined) {
        return Promise.resolve(cachedData);
      }
      return Promise.resolve(this.getSettingByKey("defaultLanguage").then(function (res) {
        var val = res == "ru";
        _this3.settingsCache.putCache(val, settingName);
        return val;
      }));
    }
  }, {
    key: "FirstLetter",
    value: function FirstLetter() {
      return this.getSettingByKey("firstLetter");
    }
  }, {
    key: "LastLetter",
    value: function LastLetter() {
      return this.getSettingByKey("lastLetter");
    }
  }, {
    key: "PhoneStateCode",
    value: function PhoneStateCode() {
      return this.getSettingByKey("phoneStateCode");
    }
  }, {
    key: "PhoneNumberLength",
    value: function PhoneNumberLength() {
      return this.getSettingByKey("phoneNumberLength");
    }
  }, {
    key: "PhoneTemplate",
    value: function PhoneTemplate() {
      return this.getSettingByKey("phoneTemplate");
    }
  }]);
  return LocalSettings;
}();
var AppFlags = /*#__PURE__*/function () {
  function AppFlags($http) {
    _classCallCheck(this, AppFlags);
    this.$http = $http;
  }
  _createClass(AppFlags, [{
    key: "PersonData",
    value: function PersonData() {
      return this.$http.get("/webapi/appflags/persondata").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "ModuleSocialPassport",
    value: function ModuleSocialPassport() {
      return this.$http.get("/webapi/settings/ModuleSocialPassport").then(function (response) {
        return response.data;
      });
    }
  }]);
  return AppFlags;
}();
var SysInfo = /*#__PURE__*/function () {
  function SysInfo($http) {
    _classCallCheck(this, SysInfo);
    this.$http = $http;
  }
  _createClass(SysInfo, [{
    key: "HaveModuleAddSchool",
    value: function HaveModuleAddSchool() {
      return this.$http.get("/webapi/addschoolmodule").then(function (response) {
        return response.data;
      });
    }
  }]);
  return SysInfo;
}();
var SettingsProvider = /*#__PURE__*/function () {
  SettingsProvider.$inject = ["$http", "appContext"];
  /*@ngInject*/
  function SettingsProvider($http, appContext) {
    _classCallCheck(this, SettingsProvider);
    this.$http = $http;
    this.appContext = appContext;
    this.SettingsCache = new SettingsCache();
    this.ServerSettings = new ServerSettings($http, this.SettingsCache, this.appContext);
    this.SecuritySettings = new SecuritySettings($http);
    this.IntegrationSettings = new IntegrationSettings($http);
    this.LocalSettings = new LocalSettings($http, this.SettingsCache, this.appContext);
    this.AppFlags = new AppFlags($http);
    this.SysInfo = new SysInfo($http);
  }
  _createClass(SettingsProvider, [{
    key: "UploadLimits",
    get: function get() {
      return this.$http.get("/webapi/attachments/uploadLimits").then(function (response) {
        return response.data;
      });
    }
  }]);
  return SettingsProvider;
}();
exports.SettingsProvider = SettingsProvider;
var PfdoIntegrationType;
exports.PfdoIntegrationType = PfdoIntegrationType;
(function (PfdoIntegrationType) {
  /// <summary>
  /// Самарский ПФДО ИРТех
  /// </summary>
  PfdoIntegrationType["IRTechEes"] = "IRTechEes";
  /// <summary>
  /// Челябинский образовательный портал - Навигатор доп. образования
  /// </summary>
  PfdoIntegrationType["IRTech"] = "IRTech";
  /// <summary>
  /// ПФДО Славин (Волгоград, Томск) 
  /// </summary>
  PfdoIntegrationType["Slavin"] = "Slavin";
  /// <summary>
  /// Региональный Навигатор доп.образования "Навигатор-47"
  /// </summary>
  PfdoIntegrationType["InlearnoNavigator"] = "InlearnoNavigator";
})(PfdoIntegrationType || (exports.PfdoIntegrationType = PfdoIntegrationType = {}));

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YaCountersOff = exports.YaCounterCode = exports.YaClassUrl = exports.WindowsAuth = exports.TrustedAppCode = exports.StaffAttestUrl = exports.StaffAttestSecret = exports.StaffAttestLogin = exports.ShowMnsForms = exports.ServAdminMail = exports.SecureApi = exports.SchoolCardUrl = exports.RestrictStudentsAndParents = exports.RestrictNumericPasswords = exports.RequireIdentityData = exports.RequireEsiaAdminLoginNever = exports.RequireEsiaAdminLoginFirstEntrance = exports.RequireEsiaAdminLoginEachEntrance = exports.RequireEsiaAdminLoginAfterChangePass = exports.RegionUrl = exports.ProxyAddress = exports.PopUpStartDate = exports.PopUpEndDate = exports.PopUpDisplayText = exports.PopUpButtonText = exports.PaidServicesUrl = exports.PFDOUserName = exports.PFDOPassword = exports.PFDOClientSecret = exports.PFDOClientId = exports.OpenAuthPublicKey = exports.OnOrderImportMode = exports.NoticeTitle = exports.NoticeStartDate = exports.NoticeEndDate = exports.NoticeDisplayText = exports.NoticeButtonText = exports.NetCitySpoUrl = exports.MsokoUrl = exports.ModuleTalentStudents = exports.ModuleStatReportsSchoolsCondition = exports.ModuleStatReports = exports.ModuleRegion = exports.ModuleQaSchoolsCondition = exports.ModuleQaEnabledForAll = exports.ModuleEServices = exports.MinLoginLength = exports.MailUser = exports.MailUseSsl = exports.MailPort = exports.MailPassword = exports.MailHost = exports.MailFrom = exports.MODULE_StaffAttest = exports.LaIntegrationCourses = exports.IsRegionEMForSchool = exports.IrtechAuth = exports.IpFilter = exports.IntegrationNewDiskTokens = exports.IntegrationNewDiskSchoolsCondition = exports.IntegrationNewDiskMainToken = exports.IntegrationNewDiskEnabledForAll = exports.IdInstall = exports.FiasAddressServiceUrl = exports.ExternalFiasAddressServiceUrl = exports.EsiaMainAuth = exports.EsiaLogoutUserPage = exports.EsiaLoginPage = exports.EsiaLinkUserPage = exports.EsiaButtonAuth = exports.EsiaAuth = exports.EnableStudentsDataQuality = exports.EnablePopUp = exports.EnableNotice = exports.EnableLessonMaps = exports.EducPortalUrl = exports.EducPortalApiUrl = exports.EditCertificatesDOOnlyByRegion = exports.EServicesUrl = exports.ContingentUrl = exports.ClientIdForSync = exports.BlockSimilars = exports.BlockFastInput = exports.BlockEsiaUserLogin = exports.BlockByIp = exports.BlockByEducOrgAndLogin = exports.AllowedReturnUrl = exports.Address = void 0;
var IdInstall = 0;
exports.IdInstall = IdInstall;
var Address = 1;
exports.Address = Address;
var ProxyAddress = 12;
exports.ProxyAddress = ProxyAddress;
var TrustedAppCode = 2;
exports.TrustedAppCode = TrustedAppCode;
var MailHost = 4;
exports.MailHost = MailHost;
var MailUseSsl = 10;
exports.MailUseSsl = MailUseSsl;
var MailPort = 5;
exports.MailPort = MailPort;
var MailUser = 6;
exports.MailUser = MailUser;
var MailPassword = 7;
exports.MailPassword = MailPassword;
var MailFrom = 8;
exports.MailFrom = MailFrom;
var ServAdminMail = 11;

// Настройки интеграции
exports.ServAdminMail = ServAdminMail;
var EServicesUrl = 101;
exports.EServicesUrl = EServicesUrl;
var ContingentUrl = 102;
exports.ContingentUrl = ContingentUrl;
var NetCitySpoUrl = 103;
exports.NetCitySpoUrl = NetCitySpoUrl;
var RegionUrl = 104;
exports.RegionUrl = RegionUrl;
var ClientIdForSync = 105;
exports.ClientIdForSync = ClientIdForSync;
var MsokoUrl = 106;
exports.MsokoUrl = MsokoUrl;
var YaCounterCode = 107;
exports.YaCounterCode = YaCounterCode;
var StaffAttestUrl = 109;
exports.StaffAttestUrl = StaffAttestUrl;
var StaffAttestLogin = 110;
exports.StaffAttestLogin = StaffAttestLogin;
var StaffAttestSecret = 111;
exports.StaffAttestSecret = StaffAttestSecret;
var FiasAddressServiceUrl = 112;
exports.FiasAddressServiceUrl = FiasAddressServiceUrl;
var ExternalFiasAddressServiceUrl = 114;
exports.ExternalFiasAddressServiceUrl = ExternalFiasAddressServiceUrl;
var EducPortalUrl = 115;
exports.EducPortalUrl = EducPortalUrl;
var EducPortalApiUrl = 121;
exports.EducPortalApiUrl = EducPortalApiUrl;
var PFDOClientId = 117;
exports.PFDOClientId = PFDOClientId;
var PFDOClientSecret = 118;
exports.PFDOClientSecret = PFDOClientSecret;
var PFDOUserName = 119;
exports.PFDOUserName = PFDOUserName;
var PFDOPassword = 120;

// Учетные записи пользователей
exports.PFDOPassword = PFDOPassword;
var BlockSimilars = 201;
exports.BlockSimilars = BlockSimilars;
var BlockFastInput = 202;
exports.BlockFastInput = BlockFastInput;
var OnOrderImportMode = 203;
exports.OnOrderImportMode = OnOrderImportMode;
var RequireIdentityData = 204;

// Настройки авторизации пользователей
exports.RequireIdentityData = RequireIdentityData;
var EsiaAuth = 301;
exports.EsiaAuth = EsiaAuth;
var EsiaLoginPage = 302;
exports.EsiaLoginPage = EsiaLoginPage;
var EsiaLogoutUserPage = 303;
exports.EsiaLogoutUserPage = EsiaLogoutUserPage;
var EsiaLinkUserPage = 304;
exports.EsiaLinkUserPage = EsiaLinkUserPage;
var IrtechAuth = 305;
exports.IrtechAuth = IrtechAuth;
var EsiaButtonAuth = 306;
exports.EsiaButtonAuth = EsiaButtonAuth;
var EsiaMainAuth = 307;
exports.EsiaMainAuth = EsiaMainAuth;
var WindowsAuth = 308;
exports.WindowsAuth = WindowsAuth;
var BlockEsiaUserLogin = 309;
exports.BlockEsiaUserLogin = BlockEsiaUserLogin;
var RequireEsiaAdminLoginEachEntrance = 310;
exports.RequireEsiaAdminLoginEachEntrance = RequireEsiaAdminLoginEachEntrance;
var RequireEsiaAdminLoginFirstEntrance = 326;
exports.RequireEsiaAdminLoginFirstEntrance = RequireEsiaAdminLoginFirstEntrance;
var RequireEsiaAdminLoginAfterChangePass = 311;
exports.RequireEsiaAdminLoginAfterChangePass = RequireEsiaAdminLoginAfterChangePass;
var RequireEsiaAdminLoginNever = 327;
exports.RequireEsiaAdminLoginNever = RequireEsiaAdminLoginNever;
var EnableNotice = 312;
exports.EnableNotice = EnableNotice;
var NoticeTitle = 316;
exports.NoticeTitle = NoticeTitle;
var NoticeDisplayText = 313;
exports.NoticeDisplayText = NoticeDisplayText;
var NoticeButtonText = 317;
exports.NoticeButtonText = NoticeButtonText;
var NoticeStartDate = 314;
exports.NoticeStartDate = NoticeStartDate;
var NoticeEndDate = 315;
exports.NoticeEndDate = NoticeEndDate;
var AllowedReturnUrl = 323;
exports.AllowedReturnUrl = AllowedReturnUrl;
var OpenAuthPublicKey = 325;

// Системные настройки (не отображаются в интерфейсе)
exports.OpenAuthPublicKey = OpenAuthPublicKey;
var ModuleQaEnabledForAll = 401;
exports.ModuleQaEnabledForAll = ModuleQaEnabledForAll;
var ModuleQaSchoolsCondition = 402;
exports.ModuleQaSchoolsCondition = ModuleQaSchoolsCondition;
var ModuleStatReports = 403;
exports.ModuleStatReports = ModuleStatReports;
var ModuleStatReportsSchoolsCondition = 404;
exports.ModuleStatReportsSchoolsCondition = ModuleStatReportsSchoolsCondition;
var IntegrationNewDiskEnabledForAll = 405;
exports.IntegrationNewDiskEnabledForAll = IntegrationNewDiskEnabledForAll;
var IntegrationNewDiskSchoolsCondition = 406;
exports.IntegrationNewDiskSchoolsCondition = IntegrationNewDiskSchoolsCondition;
var ShowMnsForms = 407;
exports.ShowMnsForms = ShowMnsForms;
var YaCountersOff = 408;
exports.YaCountersOff = YaCountersOff;
var ModuleRegion = 409;
exports.ModuleRegion = ModuleRegion;
var IsRegionEMForSchool = 410;
exports.IsRegionEMForSchool = IsRegionEMForSchool;
var ModuleEServices = 411;
exports.ModuleEServices = ModuleEServices;
var IntegrationNewDiskTokens = 412;
exports.IntegrationNewDiskTokens = IntegrationNewDiskTokens;
var IntegrationNewDiskMainToken = 413;
exports.IntegrationNewDiskMainToken = IntegrationNewDiskMainToken;
var PaidServicesUrl = 414;
exports.PaidServicesUrl = PaidServicesUrl;
var SchoolCardUrl = 415;
exports.SchoolCardUrl = SchoolCardUrl;
var YaClassUrl = 416;
exports.YaClassUrl = YaClassUrl;
var MODULE_StaffAttest = 417;
exports.MODULE_StaffAttest = MODULE_StaffAttest;
var ModuleTalentStudents = 418;
exports.ModuleTalentStudents = ModuleTalentStudents;
var RestrictStudentsAndParents = 419;
exports.RestrictStudentsAndParents = RestrictStudentsAndParents;
var EnableStudentsDataQuality = 420;
exports.EnableStudentsDataQuality = EnableStudentsDataQuality;
var LaIntegrationCourses = 422;
exports.LaIntegrationCourses = LaIntegrationCourses;
var EnableLessonMaps = 426;
exports.EnableLessonMaps = EnableLessonMaps;
var EditCertificatesDOOnlyByRegion = 434;

// Настройки безопасности
exports.EditCertificatesDOOnlyByRegion = EditCertificatesDOOnlyByRegion;
var IpFilter = 501;
exports.IpFilter = IpFilter;
var RestrictNumericPasswords = 502;
exports.RestrictNumericPasswords = RestrictNumericPasswords;
var BlockByIp = 503;
exports.BlockByIp = BlockByIp;
var BlockByEducOrgAndLogin = 504;
exports.BlockByEducOrgAndLogin = BlockByEducOrgAndLogin;
var MinLoginLength = 506; // Минимальная длина логина пользователя
exports.MinLoginLength = MinLoginLength;
var SecureApi = 510; // Признак включенной защиты api

// Настройки для всплывающего окна на экране входа
exports.SecureApi = SecureApi;
var EnablePopUp = 601;
exports.EnablePopUp = EnablePopUp;
var PopUpDisplayText = 602;
exports.PopUpDisplayText = PopUpDisplayText;
var PopUpButtonText = 603;
exports.PopUpButtonText = PopUpButtonText;
var PopUpStartDate = 604;
exports.PopUpStartDate = PopUpStartDate;
var PopUpEndDate = 605;
exports.PopUpEndDate = PopUpEndDate;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(4);
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subject = exports.EventEmitter = exports.BehaviorSubject = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    this.hadlers = [];
  }
  _createClass(EventEmitter, [{
    key: "on",
    value: function on(handler) {
      this.hadlers.push(handler);
    }
  }, {
    key: "emit",
    value: function emit(data) {
      this.hadlers.forEach(function (h) {
        return h(data);
      });
    }
  }, {
    key: "off",
    value: function off() {
      this.hadlers = [];
    }
  }]);
  return EventEmitter;
}();
exports.EventEmitter = EventEmitter;
var Subject = /*#__PURE__*/function () {
  function Subject() {
    _classCallCheck(this, Subject);
    this.subject = null;
    this.handlers = [];
  }
  _createClass(Subject, [{
    key: "fireHandlers",
    value: function fireHandlers(data) {
      this.handlers.forEach(function (h) {
        return h(data);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: "next",
    value: function next(data) {
      this.subject = data;
      this.fireHandlers(data);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.subject;
    }
  }]);
  return Subject;
}();
exports.Subject = Subject;
var BehaviorSubject = /*#__PURE__*/function (_Subject) {
  _inherits(BehaviorSubject, _Subject);
  var _super = _createSuper(BehaviorSubject);
  function BehaviorSubject() {
    _classCallCheck(this, BehaviorSubject);
    return _super.apply(this, arguments);
  }
  _createClass(BehaviorSubject, [{
    key: "subscribe",
    value: function subscribe(handler) {
      _get(_getPrototypeOf(BehaviorSubject.prototype), "subscribe", this).call(this, handler);
      if (this.subject) {
        _get(_getPrototypeOf(BehaviorSubject.prototype), "fireHandlers", this).call(this, this.subject);
      }
    }
  }]);
  return BehaviorSubject;
}(Subject);
exports.BehaviorSubject = BehaviorSubject;

/***/ }),

/***/ 36:
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

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mobile = __webpack_require__(180);
var _mysettingsCommondata = __webpack_require__(386);
var _mysettingsButtons = __webpack_require__(388);
var _mysettings = __webpack_require__(389);
var _mysettingsEmail = __webpack_require__(390);
var _mysettings2 = __webpack_require__(391);
var _mysettingsSchoolyear = __webpack_require__(392);
var _userinfoEmail = __webpack_require__(182);
var _userinfoPhoto = __webpack_require__(184);
var _userinfo = __webpack_require__(179);
var _module = angular.module("irtech.netcity.em.mysettings", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.otherwise(_mysettings.MySettingsComponent);
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.component(_mysettingsCommondata.MySettingsCommonDataComponent.selector, _mysettingsCommondata.MySettingsCommonDataComponent).component(_mysettings.MySettingsComponent.selector, _mysettings.MySettingsComponent).component(_mysettingsButtons.MySettingsButtonsComponent.selector, _mysettingsButtons.MySettingsButtonsComponent).component(_mysettingsEmail.MySettingsEmailComponent.selector, _mysettingsEmail.MySettingsEmailComponent).component(_mobile.MobileInputComponent.selector, _mobile.MobileInputComponent).component(_userinfoPhoto.UserInfoPhotoComponent.selector, _userinfoPhoto.UserInfoPhotoComponent).component(_mysettingsSchoolyear.SchoolyearChangeComponent.selector, _mysettingsSchoolyear.SchoolyearChangeComponent).service("mySettingsRepository", _mysettings2.MySettingsRepository).service("userInfoRepository", _userinfo.UserInfoRepository).service("userPhotoRepository", _userinfoPhoto.UserPhotoRepository).service("editMySettingsService", _mysettings.EditMySettingsService).directive("mobileInput", _mobile.MobileInputDirective).directive("emailInput", _userinfoEmail.EmailInputDirective).config(config);

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySettingsCommonDataController = exports.MySettingsCommonDataComponent = void 0;
var Roles = _interopRequireWildcard(__webpack_require__(51));
var _common = __webpack_require__(31);
var _userinfoPassword = __webpack_require__(387);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MySettingsCommonDataController = /*#__PURE__*/function () {
  MySettingsCommonDataController.$inject = ["language", "appContext", "editMySettingsService", "changeTracker", "userInfoRepository", "mySettingsRepository", "$q", "settingsProvider"];
  /*@ngInject*/
  function MySettingsCommonDataController(language, appContext, editMySettingsService, changeTracker, userInfoRepository, mySettingsRepository, $q, settingsProvider) {
    var _this = this;
    _classCallCheck(this, MySettingsCommonDataController);
    this.language = language;
    this.appContext = appContext;
    this.editMySettingsService = editMySettingsService;
    this.changeTracker = changeTracker;
    this.userInfoRepository = userInfoRepository;
    this.mySettingsRepository = mySettingsRepository;
    this.$q = $q;
    this.settingsProvider = settingsProvider;
    this._questionId = 0;
    this.ready = false;
    this.minPasswordLength = 6;
    this.userId = this.appContext.userId;
    this.controlQuestions = [{
      id: 0,
      name: this.language.Generic.Common.kUnselected
    }, {
      id: 1,
      name: this.language.Generic.Login.YourMotherMaidenName
    }, {
      id: 2,
      name: this.language.Generic.Login.PetName
    }, {
      id: 3,
      name: this.language.Generic.Login.FavoriteDish
    }, {
      id: 4,
      name: this.language.Generic.Login.ParentsZip
    }, {
      id: 5,
      name: this.language.Generic.Login.GrandmaBirtday
    }, {
      id: 6,
      name: this.language.Generic.Login.PassportNumber
    }, {
      id: 7,
      name: this.language.Generic.Login.FavoritePhoneNumber
    }, {
      id: 8,
      name: this.language.Generic.Login.AskYouOwnQuestion
    }];
    this.settingsProvider.ServerSettings.UserAuthorizationSettings.WindowsAuth().then(function (windowsAuth) {
      return _this.windowsAuth = windowsAuth;
    });
  }
  _createClass(MySettingsCommonDataController, [{
    key: "onEditMySettingsInfoServiceReady",
    value: function onEditMySettingsInfoServiceReady() {
      var _this2 = this;
      this.commondata = this.editMySettingsService.userInfoData;
      this.userName = "".concat(this.commondata.lastName, " ").concat(this.commondata.firstName, " ").concat(this.commondata.middleName);
      if (this.commondata.userSettings) {
        this.userSettings = this.commondata.userSettings;
        if (this.userSettings.language == null || this.userSettings.language == "") this.userSettings.language = this.languageList[0].key;
        if (!this.mySettingsCtrl.isEm && this.userSettings.defaultDesktop == null) this.userSettings.defaultDesktop = this.desktopList[0].id;
        var currquestion = this.controlQuestions.find(function (c) {
          return c.name == _this2.commondata.userSettings.recoveryQuestion;
        });
        this._questionId = currquestion ? currquestion.id : this.commondata.userSettings.recoveryQuestion != "" ? 8 : 0;
      }
      this.ready = true;
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      if (this.appContext.hasRole(Roles.student)) {
        this.userRoles = [{
          id: Roles.student,
          key: Roles.student.toString(),
          name: this.language.Common.kStudent
        }];
      } else if (this.appContext.hasRole(Roles.parent)) {
        this.userRoles = [{
          id: Roles.parent,
          key: Roles.parent.toString(),
          name: this.language.Generic.Common.kParent
        }];
      } else {
        this.userInfoRepository.getRoles(!this.mySettingsCtrl.isEm, this.mySettingsCtrl.isEm).then(function (roles) {
          _this3.userRoles = roles.filter(function (role) {
            return _this3.appContext.hasRole(role.id);
          });
        });
      }
      ;
      var getDesktop;
      if (!this.mySettingsCtrl.isEm) {
        getDesktop = this.mySettingsRepository.getDesktopList().then(function (list) {
          _this3.desktopList = list;
        });
      }
      var getLanguages = this.mySettingsRepository.getLanguageList().then(function (list) {
        _this3.languageList = list;
      });
      var getPasswordLength = this.settingsProvider.SecuritySettings.MinPasswordLength().then(function (res) {
        _this3.minPasswordLength = res;
      });
      var requests = [getDesktop, getLanguages, getPasswordLength];
      return this.$q.all(requests);
    }
  }, {
    key: "mailManner",
    get: function get() {
      if (this.commondata == undefined) return;
      switch (this.commondata.preferedCom) {
        case "C":
          return this.language.Generic.SetupSchoolUI.kNSSchoolAnnoun;
        case "E":
          return this.language.Generic.Import.kEMail;
        case "P":
          return this.language.Generic.Import.kPaperMail;
      }
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      var _this4 = this;
      this.mobilephoneValue = new _common.BehaviorSubject();
      this.mobilephoneForm = new _common.BehaviorSubject();
      var loadReady = this.load();
      this.editMySettingsService.ready.subscribe(function () {
        loadReady.then(function () {
          return _this4.onEditMySettingsInfoServiceReady();
        });
      });
      this.mobilephoneValue.subscribe(function (value) {
        _this4.onMobilephoneChange(value);
      });
      this.mobilephoneForm.subscribe(function (value) {
        _this4.onMobilephoneReady(value);
      });
    }
  }, {
    key: "onMobilephoneChange",
    value: function onMobilephoneChange(value) {
      this.editMySettingsService.userInfoData.mobilePhone = value;
    }
  }, {
    key: "onMobilephoneReady",
    value: function onMobilephoneReady(value) {
      this.editMySettingsService.forms.push(value);
    }
  }, {
    key: "question",
    get: function get() {
      var _this5 = this;
      if (!this.controlQuestions) return;
      if (!this.commondata.userSettings || !this.commondata.userSettings.recoveryQuestion && this._questionId != 8) return this.controlQuestions[0].name;
      var question = this.controlQuestions.find(function (c) {
        return c.id == _this5._questionId;
      });
      return question ? question.name : this.controlQuestions[8].name;
    },
    set: function set(selected) {
      this._questionId = 0;
      if (selected == this.controlQuestions[0].name) {
        this._questionId = 0;
        this.commondata.userSettings.recoveryQuestion = "0";
      } else if (selected == this.controlQuestions[8].name) {
        this._questionId = 8;
        this.commondata.userSettings.recoveryQuestion = "";
      } else {
        this._questionId = this.controlQuestions.find(function (c) {
          return c.name == selected;
        }).id;
        this.commondata.userSettings.recoveryQuestion = selected;
      }
    }
  }, {
    key: "showAnswer",
    get: function get() {
      return this._questionId != 0;
    }
  }, {
    key: "showQuestionInput",
    get: function get() {
      return this._questionId == 8;
    }
  }, {
    key: "changePassword",
    value: function changePassword() {
      var params = {
        userEditHimself: false,
        minPasswordLength: this.minPasswordLength,
        userId: this.appContext.userId
      };
      new _userinfoPassword.ChangePasswordCtrl(params).changePassword(this.userId);
    }
  }, {
    key: "bindWinAccount",
    value: function bindWinAccount() {
      var _this6 = this;
      this.userInfoRepository.bindWinAccount().then(function (winAccount) {
        _this6.editMySettingsService.userInfoData.windowsAccount = winAccount;
        _this6.changeTracker.dataWasChanged();
      });
    }
  }]);
  return MySettingsCommonDataController;
}();
exports.MySettingsCommonDataController = MySettingsCommonDataController;
var MySettingsCommonDataComponent = {
  templateUrl: "/static/dist/app/global/webapp/components/my-settings/mysettings.commondata.component.html",
  controller: MySettingsCommonDataController,
  controllerAs: "$ctrl",
  selector: "mySettingsCommonData",
  bindings: {
    "mySettingsCtrl": "<ctrl"
  }
};
exports.MySettingsCommonDataComponent = MySettingsCommonDataComponent;

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePasswordCtrl = void 0;
var md5r = _interopRequireWildcard(__webpack_require__(219));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var md5 = md5r["default"];
var ChangePasswordCtrl = /*#__PURE__*/function () {
  function ChangePasswordCtrl(params) {
    _classCallCheck(this, ChangePasswordCtrl);
    this.params = params;
    this.template = "\n\t\t\t\t<form class=\"form-horizontal\" name=\"SavePassword\" action=\"/asp/ajax/ChangePassword.asp\">\n\t\t\t\t\t<input type=\"hidden\" name=\"NP3\">\n\t\t\t\t\t<input type=\"hidden\" name=\"OP2\">\n\t\t\t\t\t\t\n\t\t\t\t\t{{#if userEditHimself}}\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label class=\"control-label col-md-4\">".concat(language.Generic.Common.kCurrPassword, "</label>\n\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control \" autocomplete=\"off\" name=\"OP\" size=\"15\" maxlength=\"40\" onchange=\"dataChanged()\">\n\t\t\t\t\t\t\t\t<div style=\"margin-top: 5px;\">").concat(language.Generic.Common.kEnterCurrPassword, "</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">").concat(language.Generic.Common.kNewPassword, "</label>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" autocomplete=\"off\" name=\"NP\" size=\"15\" maxlength=\"40\" onchange=\"dataChanged()\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t{{#if userEditHimself}}\n\t\t\t\t\t\t\t\t<div style=\"margin-top: 5px;\">").concat(language.Generic.Common.kCreateNewPassword, "</div>\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">").concat(language.Generic.Common.kConfirmPassword, "</label>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" autocomplete=\"off\" name=\"NP2\" size=\"15\" maxlength=\"40\" onchange=\"dataChanged()\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>");
    this.template = this.template.replace(/(?:\r\n|\r|\n)/g, '');
  }
  _createClass(ChangePasswordCtrl, [{
    key: "changePassword",
    value: function changePassword(userId) {
      var _this = this;
      var _showDialog = function _showDialog() {
        var cancelBtn = function cancelBtn(dialog) {
          return dialog.successClose();
        };
        var saveBtn = function saveBtn(dialog) {
          var params = {
            loginName: _this.data.loginName,
            lastName: _this.data.lastName,
            firstName: _this.data.firstName,
            middleName: _this.data.middleName,
            restrictNumericPasswords: _this.data.restrictNumericPasswords,
            inputOldPass: $('input[name="OP"]'),
            inputOldPass2: $('input[name="OP2"]'),
            inputNewPass: $('input[name="NP"]'),
            inputConfirmPass: $('input[name="NP2"]'),
            inputNewPass3: $('input[name="NP3"]'),
            userEditHimself: _this.params.userEditHimself,
            minPasswordLength: _this.params.minPasswordLength,
            isParent: _this.params.isParent,
            isStudent: _this.params.isStudent
          };
          if (!_this.canChangePassword(params)) {
            return false;
          }
          jsSubmit({
            action: '/asp/ajax/ChangePassword.asp',
            data: {
              userId: typeof userId === "undefined" ? _this.params.userId : userId,
              act: "save",
              OP2: $('input[name="OP2"]').val(),
              NP3: $('input[name="NP3"]').val()
            },
            showProcessing: true,
            onSuccess: function onSuccess(response) {
              if (typeof _this.params.customSuccess !== "undefined") {
                _this.params.customSuccess();
              } else {
                alert(response.message);
                dialog.successClose();
              }
            }
          });
        };
        var fullTemplate = Handlebars.compile(_this.template);
        var html = fullTemplate({
          userEditHimself: _this.params.userEditHimself
        });
        $.show.dialog({
          title: language.Generic.Common.kChangePassword,
          size: BootstrapDialog.SIZE_WIDE,
          message: html,
          buttons: [{
            label: language.Generic.Buttons.kSave,
            action: saveBtn,
            cssClass: 'btn-primary',
            hotkey: 13
          }, {
            label: language.Generic.Buttons.kCancel,
            action: cancelBtn
          }],
          onshown: function onshown() {
            if (!_this.params.userEditHimself) {
              $('input[name="NP"]').trigger("focus");
            } else {
              $('input[name="OP"]').trigger("focus");
            }
          }
        });
      };
      if (!$.isEmptyObject(this.data)) {
        _showDialog();
      } else {
        this.data = {};
        jsSubmit({
          action: '/asp/ajax/ChangePassword.asp',
          data: {
            userId: typeof userId === "undefined" ? this.params.userId : userId,
            act: "prepare"
          },
          showProcessing: true,
          onSuccess: function onSuccess(response) {
            _this.data["loginName"] = response.data.loginName;
            _this.data["lastName"] = response.data.lastName;
            _this.data["firstName"] = response.data.firstName;
            _this.data["middleName"] = response.data.middleName;
            _this.data["restrictNumericPasswords"] = response.data.restrictNumericPasswords;
            _showDialog();
            return;
          }
        });
      }
    }
  }, {
    key: "canChangePassword",
    value: function canChangePassword(_options) {
      var oldPass = _options.inputOldPass.val();
      var pass = _options.inputNewPass.val();
      var upperPass = pass.toUpperCase();
      var confirmPass = _options.inputConfirmPass.val();
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
      if (pass != confirmPass) {
        focusAlert(_options.inputConfirmPass, language.Generic.Common.kErrDifferentPassword);
        return false;
      }
      if (upperPass == _options.loginName || upperPass == _options.lastName || upperPass == _options.lastName + _options.firstName || upperPass == _options.firstName + _options.lastName || upperPass == _options.firstName || upperPass == _options.lastName + _options.firstName.substr(0, 1) || upperPass == _options.firstName.substr(0, 1) + _options.lastName || upperPass == _options.lastName + _options.firstName.substr(0, 1) + _options.middleName.substr(0, 1) || upperPass == _options.firstName.substr(0, 1) + _options.middleName.substr(0, 1) + _options.lastName) {
        focusAlert(_options.inputNewPass, language.Generic.Common.kSimplePassword);
        return false;
      }
      // для родителей и учащихся нет ограничения на использование цифровых паролей
      var checkRestrictNumericPasswords = !_options.isParent && !_options.isStudent && _options.restrictNumericPasswords && !/\D/.test(upperPass);
      if (checkRestrictNumericPasswords) {
        focusAlert(_options.inputNewPass, language.Generic.Common.kErrNumericPasswordsRestricted);
        return false;
      }
      if (this.params.userEditHimself && pass == oldPass) {
        focusAlert(_options.inputNewPass, language.Generic.Common.kNewPasswordMustNotEqualOld);
        return false;
      }
      if (pass.charAt(0) == ' ' || pass.charAt(pass.length - 1) == ' ') {
        focusAlert(_options.inputNewPass, language.Generic.Common.kErrPWDSurroundSpaces);
        return false;
      }
      if (this.params.userEditHimself) {
        _options.inputOldPass2.val(md5(oldPass));
      }
      _options.inputNewPass3.val(md5(pass));
      return true;
    }
  }]);
  return ChangePasswordCtrl;
}();
exports.ChangePasswordCtrl = ChangePasswordCtrl;

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySettingsButtonsComponent = void 0;
var _urlHelper = __webpack_require__(4);
var _common = __webpack_require__(5);
var Roles = _interopRequireWildcard(__webpack_require__(51));
var _settingsProvider = __webpack_require__(234);
var _netcityModalCtrl = __webpack_require__(36);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
var AuthType;
(function (AuthType) {
  AuthType["irtech"] = "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 ID \u0418\u0420\u0422\u0435\u0445";
  AuthType["esia"] = "\u043F\u043E\u0440\u0442\u0430\u043B\u0430 \u0413\u043E\u0441\u0443\u0441\u043B\u0443\u0433";
  AuthType["esa"] = "\u0415\u0421\u0410";
})(AuthType || (AuthType = {}));
var MySettingsButtonsController = /*#__PURE__*/function () {
  MySettingsButtonsController.$inject = ["$scope", "language", "appContext", "editMySettingsService", "ssoLinkService", "$dialogs", "settingsProvider", "mySettingsRepository", "$uibModal"];
  /*@ngInject*/
  function MySettingsButtonsController($scope, language, appContext, editMySettingsService, ssoLinkService, $dialogs, settingsProvider, mySettingsRepository, $uibModal) {
    var _this = this;
    _classCallCheck(this, MySettingsButtonsController);
    this.$scope = $scope;
    this.language = language;
    this.appContext = appContext;
    this.editMySettingsService = editMySettingsService;
    this.ssoLinkService = ssoLinkService;
    this.$dialogs = $dialogs;
    this.settingsProvider = settingsProvider;
    this.mySettingsRepository = mySettingsRepository;
    this.$uibModal = $uibModal;
    this.readonly = true;
    this.identityProviders = {
      "irtech": {
        enabled: false,
        linked: false
      },
      "esia": {
        enabled: false,
        linked: false
      },
      "esa": {
        enabled: false,
        linked: false
      }
    };
    this.urlHelper = new _urlHelper.UrlHelper();
    this.isStaff = !this.appContext.hasRole(Roles.parent) && !this.appContext.hasRole(Roles.student);
    this.settingsProvider.ServerSettings.SystemSettings.SoloIntegration().then(function (integration) {
      return _this.soloIntegration = integration;
    });
    this.processSsoRemovedMessage();
  }
  _createClass(MySettingsButtonsController, [{
    key: "processSsoRemovedMessage",
    value: function processSsoRemovedMessage() {
      var message = localStorage.getItem("sso-removed-message");
      localStorage.removeItem("sso-removed-message");
      if (!message) {
        return;
      }
      var searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has("linkIsRemoved")) {
        this.$dialogs.message(message);
      }
    }
  }, {
    key: "$onInit",
    value: function $onInit() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var promises;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.isStaff && !this.mySettingsCtrl.isEm) {
                this.settingsProvider.ServerSettings.UserAuthorizationSettings.QueueImportMode().then(function (mode) {
                  return _this2.showQueue = mode;
                });
              }
              promises = [];
              if (!this.appContext.emId) {
                promises.push(this.initIdentityProvider("irtech", this.settingsProvider.ServerSettings.UserAuthorizationSettings.IrtechAuth()));
              }
              promises.push(this.initIdentityProvider("esia", this.settingsProvider.ServerSettings.UserAuthorizationSettings.EsiaAuth()));
              promises.push(this.initIdentityProvider("esa", this.settingsProvider.ServerSettings.UserAuthorizationSettings.EsaAuth()));
              _context.next = 7;
              return Promise.all(promises);
            case 7:
              this.$scope.$applyAsync();
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "initIdentityProvider",
    value: function initIdentityProvider(providerId, getSetting) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var enabled, linked;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getSetting;
            case 2:
              enabled = _context2.sent;
              linked = false;
              if (!enabled) {
                _context2.next = 8;
                break;
              }
              _context2.next = 7;
              return this.mySettingsRepository.checkLink(providerId);
            case 7:
              linked = _context2.sent;
            case 8:
              this.identityProviders[providerId].linked = linked;
              this.identityProviders[providerId].enabled = enabled;
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getAuthName",
    value: function getAuthName(name) {
      var authType = AuthType[name];
      if (this.soloIntegration && name == "irtech") {
        return authType.replace(authType, "Мобильный ID");
      }
      return authType;
    }
  }, {
    key: "save",
    value: function save() {
      this.mySettingsCtrl.save();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.mySettingsCtrl.reset();
    }
  }, {
    key: "changePassword",
    value: function changePassword() {
      this.mySettingsCtrl.changePassword();
    }
  }, {
    key: "link",
    value: function link(idp) {
      this.ssoLinkService.link(idp);
    }
  }, {
    key: "removeLink",
    value: function removeLink(idp, authType) {
      var _this3 = this;
      this.$dialogs.confirm(this.language.Generic.Common.kAreYouSureToDeleteLinkWithIdp.replace('{0}', this.getAuthName(authType))).then(function () {
        _this3.ssoLinkService.removeLink(idp);
      });
    }
  }, {
    key: "isStudentLess18AndOver5Years",
    get: function get() {
      if (!this.appContext.hasRole(Roles.student)) return true;
      if (!this.editMySettingsService.userInfoData) return false;
      var date = new Date();
      var birthday = new Date(this.editMySettingsService.userInfoData.birthDate);
      var five = new Date(date.getFullYear() - 5, date.getMonth(), date.getDate());
      var eighteen = new Date(date.getFullYear() - 18, date.getMonth(), date.getDate());
      return eighteen < birthday && five >= birthday;
    }
  }, {
    key: "showNavigator",
    get: function get() {
      return this.editMySettingsService.pfdoIntegrationType == _settingsProvider.PfdoIntegrationType.Slavin && (this.appContext.hasRole(Roles.student) || this.appContext.hasRole(Roles.parent) || this.appContext.hasRole(Roles.admin) || this.appContext.hasRole(Roles.principal)) && this.isStudentLess18AndOver5Years;
    }
  }, {
    key: "openPFDO",
    value: function openPFDO() {
      var wnd = null;
      var winOptions = {
        url: "/webapi/integration/pfdo/get?at=" + this.appContext.at,
        name: '_blank',
        specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620',
        winChild: wnd
      };
      (0, _common.windowOpen)(winOptions);
      wnd = winOptions.winChild;
      (0, _common.center)(wnd, 750, 560);
    }
  }, {
    key: "showQueuedTasks",
    value: function showQueuedTasks() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _tasks;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.mySettingsRepository.getTasks();
            case 2:
              _tasks = _context3.sent;
              if (!(_tasks.length == 0)) {
                _context3.next = 6;
                break;
              }
              this.$dialogs.message(this.language.Movement.kMsgNoActiveQueuedImportProcesses);
              return _context3.abrupt("return");
            case 6:
              this.$uibModal.open({
                controller: ShowQueuedTasksComponent.controller,
                controllerAs: ShowQueuedTasksComponent.controllerAs,
                template: ShowQueuedTasksComponent.template,
                resolve: {
                  tasks: function tasks() {
                    return _tasks;
                  }
                }
              });
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }]);
  return MySettingsButtonsController;
}();
var MySettingsButtonsComponent = {
  templateUrl: "/static/dist/app/global/webapp/components/my-settings/mysettings.buttons.component.html",
  controller: MySettingsButtonsController,
  controllerAs: "$ctrl",
  selector: "mySettingsButtons",
  bindings: {
    "mySettingsCtrl": "<ctrl"
  }
};
exports.MySettingsButtonsComponent = MySettingsButtonsComponent;
var ShowQueuedTasksComponent = {
  template: "\n\t\t<table class=\"table table-xs table-hover table-striped\">\n\t\t\t<tr>\n\t\t\t\t<th>{{$ctrl.language.Generic.MySettings.kEnqueueDate}}</th>\n\t\t\t\t<th>{{$ctrl.language.Generic.MySettings.kStartProcessingDate}}</th>\n\t\t\t\t<th>{{$ctrl.language.Generic.MySettings.kNumberInQueue}}</th>\n\t\t\t\t<th>{{$ctrl.language.Generic.Common.kFileName}}</th>\n\t\t\t\t<th>{{$ctrl.language.Generic.ServAdmin.kDocNumber}}</th>\n\t\t\t\t<th>{{$ctrl.language.Generic.Movement.kDocDate}}</th>\n\t\t\t\t<th>{{$ctrl.language.Generic.MySettings.kQueueCurrentStatus}}</th>\n\t\t\t</tr>\n\t\t\t<tr ng-repeat=\"task in $ctrl.tasks\">\n\t\t\t\t<td>{{task.enqueueDate}}</td>\n\t\t\t\t<td>{{task.startDate}}</td>\n\t\t\t\t<td>{{task.queuePosition}}</td>\n\t\t\t\t<td>{{task.fileName}}</td>\n\t\t\t\t<td>{{task.docNumber}}</td>\n\t\t\t\t<td>{{task.docDate}}</td>\n\t\t\t\t<td>{{task.status}}</td>\n\t\t\t</tr>\n\t\t</table>\n\t",
  controller: /*#__PURE__*/function (_NetCityModalControll) {
    controller.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "tasks"];
    _inherits(controller, _NetCityModalControll);
    var _super = _createSuper(controller);
    /*@ngInject*/
    function controller($scope, $uibModalInstance, changeTracker, $dialogs, language, tasks) {
      var _this4;
      _classCallCheck(this, controller);
      _this4 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
      _this4.language = language;
      _this4.tasks = tasks;
      _this4.buttons = [];
      _this4.title = _this4.language.Generic.Movement.kQueuedImportProcesses;
      _this4.buttons = [{
        title: _this4.language.Generic.Buttons.kClose,
        icon: "glyphicon glyphicon-ban-circle",
        action: function action() {
          return _this4.close();
        }
      }];
      return _this4;
    }
    _createClass(controller, [{
      key: "close",
      value: function close() {
        this.cancel();
      }
    }]);
    return controller;
  }(_netcityModalCtrl.NetCityModalController),
  controllerAs: "$ctrl"
};

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySettingsController = exports.MySettingsComponent = exports.EditMySettingsService = void 0;
var _formValidationHelper = __webpack_require__(152);
var _common = __webpack_require__(31);
var _common2 = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MySettingsController = /*#__PURE__*/function () {
  MySettingsController.$inject = ["$q", "editMySettingsService", "settingsProvider", "$uibModal", "$longWork", "$alerts", "$dialogs", "changeTracker", "appContext", "$appLoader", "language", "pageContext", "mySettingsRepository", "navigationService", "changePasswordService"];
  /*@ngInject*/
  function MySettingsController($q, editMySettingsService, settingsProvider, $uibModal, $longWork, $alerts, $dialogs, changeTracker, appContext, $appLoader, language, pageContext, mySettingsRepository, navigationService, changePasswordService) {
    _classCallCheck(this, MySettingsController);
    this.$q = $q;
    this.editMySettingsService = editMySettingsService;
    this.settingsProvider = settingsProvider;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.changeTracker = changeTracker;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.language = language;
    this.pageContext = pageContext;
    this.mySettingsRepository = mySettingsRepository;
    this.navigationService = navigationService;
    this.changePasswordService = changePasswordService;
    this.windowsAuth = false;
    this.certificateExists = false;
    this.localSettings = {
      regExpAlphabet: "",
      firstLetter: "А",
      lastLetter: "Я",
      phoneStateCode: "7",
      phoneNumberLength: 11,
      phoneTemplate: ""
    };
    this.minPasswordLength = 6;
    this.userId = appContext.userId;
    this.isEm = appContext.emId > 0;
    this.pageContext.back = null;
    this.pageContext.title = this.language.Generic.MenuFolders.kMySettings;
    this.$onInit();
  }
  _createClass(MySettingsController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.isStudent = this.appContext.hasRole(4);
      this.isParent = this.appContext.hasRole(5);
      var prepareSettings = [];
      if (!this.isEm) {
        prepareSettings.push(this.settingsProvider.ServerSettings.SystemSettings.IntegrationPFDOType().then(function (pfdoIntegrationType) {
          _this.editMySettingsService.pfdoIntegrationType = pfdoIntegrationType;
        }));
      }
      prepareSettings.push(this.settingsProvider.LocalSettings.RegExpAlphabet().then(function (res) {
        return _this.localSettings.regExpAlphabet = res;
      }));
      prepareSettings.push(this.settingsProvider.LocalSettings.FirstLetter().then(function (res) {
        return _this.localSettings.firstLetter = res;
      }));
      prepareSettings.push(this.settingsProvider.LocalSettings.LastLetter().then(function (res) {
        return _this.localSettings.lastLetter = res;
      }));
      prepareSettings.push(this.settingsProvider.LocalSettings.PhoneStateCode().then(function (res) {
        return _this.localSettings.phoneStateCode = res;
      }));
      prepareSettings.push(this.settingsProvider.LocalSettings.PhoneNumberLength().then(function (res) {
        return _this.localSettings.phoneNumberLength = res;
      }));
      prepareSettings.push(this.settingsProvider.LocalSettings.PhoneTemplate().then(function (res) {
        return _this.localSettings.phoneTemplate = res;
      }));
      prepareSettings.push(this.settingsProvider.SecuritySettings.MinPasswordLength().then(function (res) {
        return _this.minPasswordLength = res;
      }));
      return this.$q.all(prepareSettings).then(function () {
        return _this.load();
      }).then(function () {
        return (0, _common2.restoreFormPosition)('panels-mysettings');
      }).then(function () {
        _this.$appLoader.hide();
        _this.ready = true;
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var promises = [];
      if (this.editMySettingsService.pfdoIntegrationType && this.isStudent) {
        this.mySettingsRepository.checkStudentAge(this.userId).then(function (value) {
          return _this2.isStudentLess18AndOver5Years = value;
        });
      }
      promises.push(this.mySettingsRepository.getMySettings().then(function (userInfoData) {
        _this2.editMySettingsService.userInfoData = userInfoData;
        _this2.editMySettingsService.userInfoData.schoolyearId = +_this2.appContext.yearId;
      }));
      if (this.editMySettingsService.pfdoIntegrationType && this.isStudent) {
        promises.push(this.mySettingsRepository.getUserCertificate(this.userId).then(function (certificate) {
          _this2.editMySettingsService.educCertificate = certificate;
          if (certificate) _this2.certificateExists = true;
        }));
      }
      ;
      return this.$q.all(promises).then(function () {
        _this2.editMySettingsService.init(_this2.localSettings);
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kDataNotModified);
        return;
      }
      var commonData = this.editMySettingsService.userInfoData;
      if (commonData.userSettings.recoveryQuestion && commonData.userSettings.recoveryQuestion != "0" && commonData.userSettings.recoveryAnswer.length < 6) {
        this.$dialogs.message(this.language.Generic.Common.kAnswerLengthInvalid);
        return;
      }
      var isYearChanged = !this.isEm && commonData.schoolyearId != +this.appContext.yearId;
      var saveDate = {
        userId: commonData.userId,
        email: commonData.email,
        mobilePhone: commonData.mobilePhone,
        schoolyearId: commonData.schoolyearId,
        windowsAccount: null,
        userSettings: commonData.userSettings
      };
      if (!this.validate(saveDate)) {
        return;
      }
      this.$longWork.execute(this.mySettingsRepository.saveMySettings(saveDate)).then(function () {
        _this3.$longWork.close();
        _this3.changeTracker.clearDataChanges();
        _this3.$alerts.success(_this3.language.Generic.MySettings.kSettingsAreSaved);
      }).then(function () {
        if (isYearChanged) _this3.navigationService.navigateTo("/angular/school/mysettings/", null, null);
      });
    }
  }, {
    key: "validate",
    value: function validate(data) {
      var helper = new _formValidationHelper.FormValidationHelper(this.$dialogs, this.language, this.localSettings);
      var _iterator = _createForOfIteratorHelper(this.editMySettingsService.forms),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var form = _step.value;
          if (form.$invalid) {
            var invalidControl = form.$$controls.find(function (c) {
              return c.$invalid;
            });
            if (!invalidControl) {
              return false;
            }
            helper.focusInvalidControl(invalidControl.$$element);
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this4 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kDataNotModified);
        return;
      }
      this.reload().then(function () {
        _this4.changeTracker.clearDataChanges();
        _this4.$alerts.success(_this4.language.Generic.Common.kResetChanges);
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      this.$longWork.show();
      return this.load().then(function () {
        _this5.$longWork.close();
      });
    }
  }, {
    key: "changePassword",
    value: function changePassword() {
      this.changePasswordService.changePassword({
        userId: this.userId
      });
    }
  }, {
    key: "certificateCanBeShown",
    get: function get() {
      if (this.editMySettingsService.pfdoIntegrationType && (this.isStudent || this.isParent)) {
        if (this.isStudent && !this.isStudentLess18AndOver5Years) return false;
        return true;
      }
      return false;
    }
  }]);
  return MySettingsController;
}();
exports.MySettingsController = MySettingsController;
var MySettingsComponent = {
  controller: MySettingsController,
  controllerAs: "mySettingsCtrl",
  selector: "mySettings",
  templateUrl: "/static/dist/app/global/webapp/components/my-settings/mysettings.component.html"
};
exports.MySettingsComponent = MySettingsComponent;
var EditMySettingsService = /*#__PURE__*/function () {
  EditMySettingsService.$inject = ["navigationService"];
  /*@ngInject*/
  function EditMySettingsService(navigationService) {
    _classCallCheck(this, EditMySettingsService);
    this.navigationService = navigationService;
    this.forms = [];
    this.reset();
  }
  _createClass(EditMySettingsService, [{
    key: "reset",
    value: function reset() {
      this.forms = [];
      this.ready = new _common.BehaviorSubject();
    }
  }, {
    key: "init",
    value: function init(localSettings) {
      this.localSettings = localSettings;
      this.ready.next(true);
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(url, data) {
      this.navigationService.navigateTo(url, data, "panels-mysettings");
    }
  }]);
  return EditMySettingsService;
}();
exports.EditMySettingsService = EditMySettingsService;

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySettingsEmailComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MySettingsEmailController = /*#__PURE__*/function () {
  MySettingsEmailController.$inject = ["editMySettingsService", "language"];
  /*@ngInject*/
  function MySettingsEmailController(editMySettingsService, language) {
    _classCallCheck(this, MySettingsEmailController);
    this.editMySettingsService = editMySettingsService;
    this.language = language;
  }
  _createClass(MySettingsEmailController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.editMySettingsService.ready.subscribe(function () {
        _this.email = _this.editMySettingsService.userInfoData.email;
      });
    }
  }, {
    key: "$postLink",
    value: function $postLink() {
      this.editMySettingsService.forms.push(this.form);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.editMySettingsService.userInfoData.email = this.email;
    }
  }, {
    key: "emailError",
    value: function emailError() {
      return this.language.Generic.SetupSchoolUI.kSetEMail;
    }
  }]);
  return MySettingsEmailController;
}();
var MySettingsEmailComponent = {
  controller: MySettingsEmailController,
  template: "\n\t\t<ng-form name=\"$ctrl.form\" ng-class=\"{'has-error': $ctrl.form.EM.$invalid }\">\n\t\t\t<input track-changes email-input type=\"text\" class=\"form-control\" name=\"EM\" size=\"35\" maxlength=\"80\" ng-disabled=\"$ctrl.readonly\" ng-model=\"$ctrl.email\" ng-change=\"$ctrl.onChange()\">\n\t\t\t<div ng-messages=\"$ctrl.form.EM.$error\">\n\t\t\t\t<span class=\"help-block\" ng-message=\"email\">{{$ctrl.emailError()}}</span>\n\t\t\t</div>\n\t\t</ng-form>\n\t",
  controllerAs: "$ctrl",
  selector: "emailComponent",
  bindings: {
    email: "<",
    readonly: "<"
  }
};
exports.MySettingsEmailComponent = MySettingsEmailComponent;

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySettingsRepository = void 0;
var _repository = __webpack_require__(7);
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
var MySettingsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(MySettingsRepository, _BaseRepository);
  var _super = _createSuper(MySettingsRepository);
  function MySettingsRepository() {
    _classCallCheck(this, MySettingsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(MySettingsRepository, [{
    key: "getMySettings",
    value: function getMySettings() {
      return this.$http.get('/webapi/mysettings').then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveMySettings",
    value: function saveMySettings(userInfoData) {
      return this.$http.post("/webapi/mysettings/", userInfoData).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getDesktopList",
    value: function getDesktopList() {
      return this.$http.get("/webapi/mysettings/desktoplist").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getYearList",
    value: function getYearList() {
      return this.$http.get("/webapi/mysettings/yearlist").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getLanguageList",
    value: function getLanguageList() {
      return this.$http.get("/webapi/mysettings/languagelist").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getUserCertificate",
    value: function getUserCertificate(userId) {
      return this.$http.get("/webapi/educcertificates/student/".concat(userId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkCertificatePdf",
    value: function checkCertificatePdf(userId) {
      return this.$http.get("/webapi/educcertificates/pdf/".concat(userId, "/exists")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "addUserCertificate",
    value: function addUserCertificate(userId) {
      return this.$http.post("/webapi/educcertificates/createById", null, {
        params: {
          studentId: userId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return this.$http.get("/webapi/context/students").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkLink",
    value: function checkLink(idp) {
      return this.$http.get("/webapi/mysettings/idp/".concat(idp, "/link")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "checkStudentAge",
    value: function checkStudentAge(studentId) {
      return this.$http.get("/webapi/educcertificates/checkAge/".concat(studentId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getPINCode",
    value: function getPINCode() {
      return this.$http.get("/webapi/mysettings/pincode").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      return this.$http.get("/webapi/queue/tasks").then(this.handleResponse, this.handleError);
    }
  }]);
  return MySettingsRepository;
}(_repository.BaseRepository);
exports.MySettingsRepository = MySettingsRepository;

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolyearChangeComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SchoolyearController = /*#__PURE__*/function () {
  SchoolyearController.$inject = ["mySettingsRepository", "contextService", "language", "appContext", "navigationService", "$longWork"];
  /*@ngInject*/
  function SchoolyearController(mySettingsRepository, contextService, language, appContext, navigationService, $longWork) {
    _classCallCheck(this, SchoolyearController);
    this.mySettingsRepository = mySettingsRepository;
    this.contextService = contextService;
    this.language = language;
    this.appContext = appContext;
    this.navigationService = navigationService;
    this.$longWork = $longWork;
    this.schoolyearId = +appContext.yearId;
  }
  _createClass(SchoolyearController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.mySettingsRepository.getYearList().then(function (list) {
        _this.yearsList = list;
      });
    }
  }, {
    key: "changeYear",
    value: function changeYear() {
      var _this2 = this;
      if (this.schoolyearId != +this.appContext.yearId) {
        this.$longWork.show();
        this.contextService.changeYear(this.schoolyearId).then(function () {
          _this2.navigationService.navigateTo("/angular/school/mysettings/", null, null);
        });
      }
    }
  }]);
  return SchoolyearController;
}();
var SchoolyearChangeComponent = {
  template: "\n\t\t<div class=\"row form-group\" id=\"schoolyearSelect\">\n\t\t\t<div class=\"col-md-9\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label col-md-3 col-lg-3\">\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u0433\u043E\u0434</label>\n\t\t\t\t\t<div class=\"col-md-9 col-lg-9\">\n\t\t\t\t\t\t<select ng-change=\"$ctrl.changeYear()\" class=\"form-control\" name=\"yearsList\" ng-model=\"$ctrl.schoolyearId\" ng-options=\"item.id as item.name for item in $ctrl.yearsList\"></select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t",
  controller: SchoolyearController,
  controllerAs: "$ctrl",
  selector: "changeSchoolyear"
};
exports.SchoolyearChangeComponent = SchoolyearChangeComponent;

/***/ }),

/***/ 4:
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(8);
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowOpen = exports.openTab = exports.openPopupWindow = exports.closeChildWindows = exports.center = void 0;
window.childWindows = [];
var windowsNotCloseNames = ["_mail", "_forum", "_help", "_qualityAssessmentAnalytics", "_qualityAssessmentAnalyticsEM", "nsxml", "_staffAttest"];
var makeUrlWithToken = function makeUrlWithToken(url) {
  var appendUrl;
  if (url.lastIndexOf("?") != -1) appendUrl = "&";else appendUrl = "?";
  appendUrl += "at=" + appContext.at + "&ver=" + getVer();
  return url + appendUrl;
};
var openPopupWindow = function openPopupWindow(wnd_to, url, width, height) {
  var wnd = window.windows[wnd_to];
  try {
    if (wnd && !wnd.closed && wnd_to != "_qualityAssessmentAnalytics" && wnd_to != "_qualityAssessmentAnalyticsEM" && wnd_to != "_staffAttest") {
      wnd.forceClosing = true;
      wnd.close();
    }
  } catch (e) {
    console.log(e);
  }
  var winOptions = {
    url: makeUrlWithToken(url),
    name: wnd_to,
    specs: "status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=" + width + ",height=" + height,
    winChild: wnd
  };
  if (wnd && !wnd.closed && (wnd_to == "_qualityAssessmentAnalytics" || wnd_to == "_qualityAssessmentAnalyticsEM")) {
    wnd.focus();
    return;
  }
  windowOpen(winOptions);
  wnd = window.windows[wnd_to] = winOptions.winChild;
  center(wnd, width, height);
  wnd.focus();
};
exports.openPopupWindow = openPopupWindow;
var openTab = function openTab(url, target) {
  var link = document.createElement('a');
  link.href = makeUrlWithToken(url);
  link.target = target || "_blank";
  document.body.appendChild(link);
  link.click();
  link.remove();
};
exports.openTab = openTab;
var center = function center(wnd, width, height) {
  try {
    if (!wnd || !wnd.screen) {
      return;
    }
  } catch (e) {
    console.log(e);
  }
  if (typeof bowser !== "undefined") {
    if (bowser.webkit && parseInt(bowser.version) < 20) {
      return;
    }
  }
  var dw = (wnd.screen.availWidth - width) / 2;
  var dh = (wnd.screen.availHeight - height) / 2;
  wnd.moveTo(dw, dh);
};
exports.center = center;
var windowOpen = function windowOpen(winOptions) {
  var opener, wnd;
  var url = winOptions.url || "";
  var name = winOptions.name || "";
  var specs = winOptions.specs || "";
  wnd = winOptions.winChild;
  if (wnd && !wnd.closed) {
    wnd.close();
  }
  wnd = window.open(url, name, specs);
  winOptions.winChild = wnd;
  opener = wnd.opener;
  while (opener && !opener.closed) {
    try {
      opener.childWindows.push(wnd);
      opener = opener.opener;
    } catch (error) {
      break;
    }
  }
  var closeWindow = windowsNotCloseNames.indexOf(name) < 0;
  if (closeWindow) {
    $(window).on("unload", function (e) {
      if (wnd && !wnd.closed) {
        wnd.forceClosing = true;
        return wnd.close();
      }
    });
  }
};
exports.windowOpen = windowOpen;
var closeChildWindows = function closeChildWindows() {
  var k;
  k = window.childWindows.length;
  while (k > 0) {
    if (window.childWindows[k - 1] && !window.childWindows.closed) {
      window.childWindows[k - 1].close();
    }
    window.childWindows.pop();
    k = k - 1;
  }
};
exports.closeChildWindows = closeChildWindows;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teacher = exports.student = exports.specialistStaff = exports.secretary = exports.psychologist = exports.principal = exports.parent = exports.minorStaff = exports.medicalStaff = exports.emOper = exports.emOFREM = exports.emECoordOD = exports.emAdmin = exports.eMHDEM = exports.admin = exports.Keys = void 0;
//todo. написать gulp плагин для автоматической генерации по файлу role.cs

var admin = 1;
exports.admin = admin;
var principal = 2;
exports.principal = principal;
var teacher = 3;
exports.teacher = teacher;
var student = 4;
exports.student = student;
var parent = 5;
exports.parent = parent;
var minorStaff = 6;
exports.minorStaff = minorStaff;
var secretary = 7;
exports.secretary = secretary;
var medicalStaff = 8;
exports.medicalStaff = medicalStaff;
var psychologist = 9;
exports.psychologist = psychologist;
var specialistStaff = 10;
exports.specialistStaff = specialistStaff;
var emAdmin = 11;
exports.emAdmin = emAdmin;
var eMHDEM = 12;
exports.eMHDEM = eMHDEM;
var emOFREM = 13;
exports.emOFREM = emOFREM;
var emOper = 14;
exports.emOper = emOper;
var emECoordOD = 15;
exports.emECoordOD = emECoordOD;
var Keys = {
  admin: "Admin",
  principal: "Principal",
  teacher: "Teacher",
  student: "Student",
  parent: "Parent",
  minorStaff: "MinorStaff",
  secretary: "Secretary",
  medicalStaff: "MedicalStaff",
  psychologist: "Psychologist",
  specialistStaff: "SpecialistStaff"
};
exports.Keys = Keys;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(8);
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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(3);
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

/***/ })

/******/ });
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
exports.PendingRequests = exports.NavigationService = exports.NavigationNotificationService = exports.DownloadService = void 0;
var _app = __webpack_require__(2);
var _menu = __webpack_require__(15);
var _changeTracker = __webpack_require__(17);
var _contextService = __webpack_require__(18);
var _settingsProvider = __webpack_require__(20);
var _context = __webpack_require__(22);
var _printExport = __webpack_require__(23);
var _apploader = __webpack_require__(24);
var _logging = __webpack_require__(25);
var _downloadFile2 = __webpack_require__(26);
var _exceptionHandler = __webpack_require__(27);
var _common = __webpack_require__(28);
var _common2 = __webpack_require__(29);
var _netcityModalCtrl = __webpack_require__(30);
var _netcityController = __webpack_require__(31);
var _filterpanel = __webpack_require__(32);
var _baseRepository = __webpack_require__(19);
var _inputSuggest = __webpack_require__(43);
var _registry = __webpack_require__(44);
var _registry2 = __webpack_require__(45);
var _fileattachments = __webpack_require__(52);
var _nsPanel = __webpack_require__(54);
var _nsModal = __webpack_require__(55);
var _nsForm = __webpack_require__(56);
var _taskqueue = __webpack_require__(57);
var _common3 = __webpack_require__(3);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
var _uikit2 = __webpack_require__(65);
var _tree = __webpack_require__(66);
var _select = __webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
__webpack_require__(71);
var _dateInput = __webpack_require__(72);
var _common4 = __webpack_require__(73);
var _dateUtils = __webpack_require__(74);
var _earlyaccess = __webpack_require__(75);
__webpack_require__(76);
var _schoolCard = __webpack_require__(78);
var _listOnlineUsers = __webpack_require__(80);
var _sessions = __webpack_require__(82);
var _switchYear = __webpack_require__(83);
var _appBackgroundTask = __webpack_require__(84);
var _appMailButton = __webpack_require__(85);
var _appForumButton = __webpack_require__(86);
var _appHelpButton = __webpack_require__(87);
var _appAnnouncementsButton = __webpack_require__(88);
var _coworker = __webpack_require__(89);
var _orginfo = __webpack_require__(91);
var _changepassword = __webpack_require__(92);
var _app2 = __webpack_require__(8);
var _commonChangepassword = __webpack_require__(93);
var _commonChangepassword2 = __webpack_require__(94);
var _changepassword2 = __webpack_require__(97);
var _ssoLink = __webpack_require__(99);
var _ssoLink2 = __webpack_require__(100);
var _parentstudentslist = __webpack_require__(101);
var _parentstudentslist2 = __webpack_require__(102);
var _metrika = __webpack_require__(103);
var _metrika2 = __webpack_require__(104);
var _sferumBanner = __webpack_require__(106);
var _userSettings = __webpack_require__(108);
var _appChatsButton = __webpack_require__(109);
var _banner = __webpack_require__(110);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*@ngInject*/
var httpHtmlAntiCache = function httpHtmlAntiCache($q, appContext) {
  return {
    request: function request(_request) {
      if (_request.url.substr(-5) == '.html' && _request.url.startsWith("/static/dist/")) {
        _request.params = {
          ver: appContext.version
        };
      }
      return $q.resolve(_request);
    }
  };
};
httpHtmlAntiCache.$inject = ["$q", "appContext"];
// https://xebia.com/blog/cancelling-http-requests-for-fun-and-profit/
/*@ngInject*/
var httpPendingRequestCancel = function httpPendingRequestCancel($q, pendingRequests) {
  return {
    request: function request(config) {
      if (config.timeout === undefined && !config.noCancelOnRouteChange) {
        var cancel = $q.defer();
        config.timeout = cancel.promise;
        config.cancel = cancel;
        pendingRequests.add(config);
      }
      return config;
    },
    responseError: function responseError(response) {
      var _a;
      if (((_a = response === null || response === void 0 ? void 0 : response.config) === null || _a === void 0 ? void 0 : _a.timeout).isGloballyCancelled) {
        return $q.defer().promise;
      }
      return $q.reject(response);
    }
  };
};
httpPendingRequestCancel.$inject = ["$q", "pendingRequests"];
var LogDecorator = function LogDecorator($delegate) {
  var methods = ['info', 'debug', 'warn', 'error'];
  var prod = window.appContext.environment == "prod";
  if (prod) {
    methods.forEach(function (method) {
      $delegate[method] = function () {
        return void 0;
      };
    });
  }
  return $delegate;
};
/*@ngInject*/
var configure = function configure($provide, $qProvider, loggerFactoryProvider, $uibModalProvider, $httpProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  loggerFactoryProvider.config.enabled = window.appContext.environment != "prod";
  $provide.decorator("$log", LogDecorator);
  var modalHolder = $("#modals-holder");
  if (modalHolder.length) {
    $uibModalProvider.options.appendAfter = modalHolder;
  }
  $httpProvider.interceptors.push(httpHtmlAntiCache);
  $httpProvider.interceptors.push(httpPendingRequestCancel);
};
configure.$inject = ["$provide", "$qProvider", "loggerFactoryProvider", "$uibModalProvider", "$httpProvider"];
/*@ngInject*/
var run = function run($http, appContext, router, metrika, $q, language) {
  router.init();
  $http.defaults.withCredentials = true;
  $http.defaults.headers.common["at"] = appContext.at;
  if (window.isAngularApp) {
    new _metrika2.AddYaCounters(appContext, metrika, $q, language).execute();
  }
};
run.$inject = ["$http", "appContext", "router", "metrika", "$q", "language"];
var DownloadService = /*#__PURE__*/function () {
  function DownloadService() {
    _classCallCheck(this, DownloadService);
  }
  _createClass(DownloadService, [{
    key: "downloadFile",
    value: function downloadFile(url, options) {
      return (0, _downloadFile2.downloadFile)(url, options);
    }
  }, {
    key: "downloadAttachment",
    value: function downloadAttachment(id, fileName) {
      return (0, _downloadFile2.downloadFile)("/webapi/attachments/" + id, {
        filename: fileName
      });
    }
  }]);
  return DownloadService;
}();
exports.DownloadService = DownloadService;
var NavigationService = /*#__PURE__*/function () {
  NavigationService.$inject = ["pageContext", "$location"];
  /*@ngInject*/
  function NavigationService(pageContext, $location) {
    _classCallCheck(this, NavigationService);
    this.pageContext = pageContext;
    this.$location = $location;
  }
  _createClass(NavigationService, [{
    key: "navigateTo",
    value: function navigateTo(url, data) {
      var _this = this;
      var formPositionKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this.pageContext.checkForChanges().then(function () {
        try {
          var tabItem = _this.pageContext.tabItem;
          _this.pageContext.tabItem = null;
          if (formPositionKey) {
            (0, _common3.saveFormPosition)(formPositionKey, "/");
          }
          if (tabItem) {
            var auxInfo = {
              TabItem: tabItem
            };
            if (data) {
              angular.extend(data, auxInfo);
            } else {
              data = auxInfo;
            }
          }
        } catch (e) {
          console.log(e);
        }
        if (url.indexOf(".asp") > 0 || url.indexOf("/angular/") == 0) {
          (0, _common3.postTo)({
            path: url,
            params: data
          });
        } else {
          if (url.indexOf("?") >= 0) {
            _this.$location.url(url);
          } else {
            _this.$location.path(url).search({});
          }
        }
      });
    }
  }]);
  return NavigationService;
}();
exports.NavigationService = NavigationService;
var NavigationNotificationService = /*#__PURE__*/function () {
  NavigationNotificationService.$inject = ["$dialogs"];
  /*@ngInject*/
  function NavigationNotificationService($dialogs) {
    _classCallCheck(this, NavigationNotificationService);
    this.$dialogs = $dialogs;
    this.notifications = [];
    var raw = localStorage.getItem("notifications");
    if (raw) {
      this.notifications = JSON.parse(raw);
    }
  }
  _createClass(NavigationNotificationService, [{
    key: "addNotification",
    value: function addNotification(notification) {
      this.notifications.push(notification);
      localStorage.setItem("notifications", JSON.stringify(this.notifications));
    }
  }, {
    key: "processNotifications",
    value: function processNotifications() {
      var notification = this.notifications.shift();
      while (notification) {
        this.$dialogs.message(notification);
        notification = this.notifications.shift();
      }
      localStorage.removeItem("notifications");
    }
  }]);
  return NavigationNotificationService;
}();
exports.NavigationNotificationService = NavigationNotificationService;
var ContentPreloaderComponent = {
  controller: /*#__PURE__*/_createClass(function ContentPreloader(language) {
    _classCallCheck(this, ContentPreloader);
    this.language = language;
  }),
  controllerAs: "$ctrl",
  template: "<div class=\"content-preloader\">\n\t\t\t\t<span class=\"arrows\"></span>\n\t\t\t\t<span class=\"title\">{{$ctrl.language.Generic.Curriculum.kPleaseWait}}</span>\n\t\t\t</div>"
};
// https://stackoverflow.com/questions/23244389/angularjs-abort-all-pending-http-requests-on-route-change
var PendingRequests = /*#__PURE__*/function () {
  function PendingRequests() {
    _classCallCheck(this, PendingRequests);
    this.requests = [];
  }
  _createClass(PendingRequests, [{
    key: "add",
    value: function add(request) {
      this.requests.push(request);
    }
  }, {
    key: "cancelAll",
    value: function cancelAll() {
      this.requests.forEach(function (request) {
        request.timeout.isGloballyCancelled = true;
        request.cancel.resolve();
      });
      this.requests.length = 0;
    }
  }]);
  return PendingRequests;
}();
exports.PendingRequests = PendingRequests;
angular.module("irtech.netcity.common", ["ui.bootstrap", "ngFileUpload"]).component(_app.AppComponent.selector, _app.AppComponent).component(_menu.MenuComponent.selector, _menu.MenuComponent).component(_menu.MobileMenuComponent.selector, _menu.MobileMenuComponent).component(_switchYear.SwitchYearComponent.selector, _switchYear.SwitchYearComponent).component(_appChatsButton.AppChatsButtonComponent.selector, _appChatsButton.AppChatsButtonComponent).component(_appAnnouncementsButton.AppAnnouncementsButtonComponent.selector, _appAnnouncementsButton.AppAnnouncementsButtonComponent).component(_appMailButton.AppMailButtonComponent.selector, _appMailButton.AppMailButtonComponent).component(_appForumButton.AppForumButtonComponent.selector, _appForumButton.AppForumButtonComponent).component(_appHelpButton.AppHelpButtonComponent.selector, _appHelpButton.AppHelpButtonComponent).component(_filterpanel.FilterPanelComponent.selector, _filterpanel.FilterPanelComponent).component(_registry.RegistryComponent.selector, _registry.RegistryComponent).directive("registryField", _registry2.RegistryFieldDirective).component("fileAttachments", _fileattachments.FileAttachmentsComponent).component(_inputSuggest.InputSuggestComponent.selector, _inputSuggest.InputSuggestComponent).component("contentPreLoader", ContentPreloaderComponent).component(_sferumBanner.SferumBannerComponent.selector, _sferumBanner.SferumBannerComponent).service("userSettingsRepository", _userSettings.UserSettingsRepository).service("router", _common4.Router).service("dateUtils", _dateUtils.DateUtils).service("attachmentsRepository", _fileattachments.AttachmentsRepository).service("sessionsRepository", _sessions.SessionsRepository).service("orgInfoRepository", _orginfo.OrgInfoRepository).service("changeTracker", _changeTracker.ChangeTracker).service("taskQueueService", _taskqueue.TaskQueueService).service("menuActivateService", _menu.MenuActivateService).service("schoolCardService", _schoolCard.SchoolCardService).service("listOnlineUsersService", _listOnlineUsers.ListOnlineUsersService).service("appBackgroundTaskService", _appBackgroundTask.AppBackgroundTaskService).service("coworkerService", _coworker.CoWorkerService).service("ssoLinkService", _ssoLink.SsoLinkService).service("ssoLinkRepository", _ssoLink2.SsoLinkRepository).directive(_select.Select2Directive.selector, _select.Select2Directive).service("metrika", _metrika.Metrika).service("select2Stack", _select.Select2StackService).value("select2Config", _select.Select2Config).factory("appContext", function () {
  return _app2.AppInitializer.appContext || window.appContext;
}).factory("language", function () {
  return language;
}).service("baseRepository", _baseRepository.BaseRepository).service("settingsProvider", _settingsProvider.SettingsProvider).service("contextService", _contextService.ContextService).service("pageContext", _context.PageContext).service("printExportService", _printExport.PrintExportService).service("$longWork", _uikit2.LongWorkService).provider("$appLoader", _apploader.AppLoaderProvider).provider("loggerFactory", _logging.LoggerFactoryProvider).factory("downloadService", function () {
  return new DownloadService();
}).service("exceptionHandler", _exceptionHandler.ExceptionHandler).service("navigationService", NavigationService).service("navigationNotificationService", NavigationNotificationService)
//переопределение штатного angularjs обработчика ошибок
.factory('$exceptionHandler', ['exceptionHandler', function (exceptionHandler) {
  return function (exception, cause) {
    return exceptionHandler.handleError(exception, cause);
  };
}]).directive("trackChanges", _common.TrackChangesDirective).component("nsPanel", _nsPanel.NsPanelComponent).directive("nsAccordion", _nsPanel.NsAccordionDirective).directive("nsModal", _nsModal.NsModalDirective).directive(_common.SaveStateDirective.selector, _common.SaveStateDirective).component(_nsForm.NsFormComponent.selector, _nsForm.NsFormComponent).component(_nsForm.NsFormGroupComponent.selector, _nsForm.NsFormGroupComponent).component(_dateInput.DateInputComponent.selector, _dateInput.DateInputComponent).component(_tree.TreeComponent.selector, _tree.TreeComponent).component(_commonChangepassword.CommonChangePasswordComponent.selector, _commonChangepassword.CommonChangePasswordComponent).component(_parentstudentslist2.ParentStudentsListComponent.selector, _parentstudentslist2.ParentStudentsListComponent).service("fileAttachmentsServiceProvider", _fileattachments.FileAttachmentsServiceProvider).service("earlyAccessService", _earlyaccess.EarlyAccessService).directive("fileUpload", _fileattachments.FileUploadDirective).directive("ngIndeterminate", _common.IndeterminateDirective).directive("tableRowHighlite", _common.HighliteInputTableRowDirective).directive("nsDateModel2", _common.NsDateModel2Directive).directive("nsDateInput", _dateInput.NsDateInputDirective).directive("nsLinkify", _common.NsLinkifyDirective).filter("language", _common2.LanguageFilter).filter("trusted", _common2.TrustedFilter).filter("nsDate", _common2.NsDateFilter).filter("nsDateTime", _common2.NsDateTimeFilter).filter("nsDateTimeSs", _common2.NsDateTimeSsFilter).filter("nsDateMonth", _common2.NsDateMonthFilter).filter("nsTime", _common2.NsTimeFilter).filter("nsTimeShort", _common2.NsTimeShortFilter).filter("float2str", _common2.Float2Str).filter("newLineToBr", _common2.NewLineToBrFilter).filter("tabToNbsp", _common2.TabToNbspFilter).controller("NetCityModalController", _netcityModalCtrl.NetCityModalController).controller("NetCityController", _netcityController.NetCityController).service("pendingRequests", PendingRequests).service("commonChangePasswordService", _commonChangepassword2.CommonChangePasswordService).service("changePasswordService", _changepassword2.ChangePasswordService).service("changePasswordRepository", _changepassword.ChangePasswordRepository).service("parentStudentsListService", _parentstudentslist.ParentStudentsListService).service("sferumBannerManager", _banner.BannerManager).config(configure).run(run);
angular.module("appboostrap", ["uikit.dialogs"]).service("appInitializer", _app2.AppInitializer);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = void 0;
var _common = __webpack_require__(3);
var _commonLegacy = __webpack_require__(5);
var _rooms = __webpack_require__(7);
var _app = __webpack_require__(8);
var Roles = _interopRequireWildcard(__webpack_require__(11));
var Rights = _interopRequireWildcard(__webpack_require__(12));
var _common2 = __webpack_require__(13);
var _common3 = __webpack_require__(14);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppComponentController = /*#__PURE__*/function () {
  AppComponentController.$inject = ["$scope", "appContext", "pageContext", "$q", "$dialogs", "contextService", "schoolCardService", "listOnlineUsersService", "appBackgroundTaskService", "settingsProvider", "$timeout", "language"];
  /*@ngInject*/
  function AppComponentController($scope, appContext, pageContext, $q, $dialogs, contextService, schoolCardService, listOnlineUsersService, appBackgroundTaskService, settingsProvider, $timeout, language) {
    var _this = this;
    _classCallCheck(this, AppComponentController);
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.contextService = contextService;
    this.schoolCardService = schoolCardService;
    this.listOnlineUsersService = listOnlineUsersService;
    this.appBackgroundTaskService = appBackgroundTaskService;
    this.settingsProvider = settingsProvider;
    this.$timeout = $timeout;
    this.language = language;
    this.ready = false;
    this.loaded = false;
    this.angularContext = _app.AppInitializer.angularContext;
    this.page = pageContext;
    this.context = appContext;
    // загрузка ext-scripts.js и файлов стилей
    $scope.$on("$viewContentLoaded", function () {
      if (!_this.loaded) {
        deferredResLoader.loadExtScripts();
        _this.loaded = true;
      }
    });
    this.init();
  }
  _createClass(AppComponentController, [{
    key: "drawHeader",
    get: function get() {
      return !this.angularContext.popup;
    }
  }, {
    key: "drawMenu",
    get: function get() {
      return !this.angularContext.popup && !this.angularContext.simple;
    }
  }, {
    key: "drawChSelect",
    get: function get() {
      return !this.angularContext.popup && !this.angularContext.simple && this.context.hasRole(Roles.parent);
    }
  }, {
    key: "drawForum",
    get: function get() {
      return !this.angularContext.popup && !this.angularContext.simple && !this.isEducManager && !this.isServAdmin && !this.isWizard && this.context.hasRights([Rights.arForumSendReceive]);
    }
  }, {
    key: "drawAnnouncements",
    get: function get() {
      return !this.angularContext.popup && !this.angularContext.simple && !this.isServAdmin && !this.isWizard && this.context.hasAnyRight([Rights.arAnnouncementView, Rights.arAnnouncementPost]);
    }
  }, {
    key: "drawMail",
    get: function get() {
      return !this.angularContext.popup && !this.angularContext.simple && !this.isServAdmin && !this.isWizard;
    }
  }, {
    key: "drawChats",
    get: function get() {
      return !this.angularContext.popup && !this.angularContext.simple && !this.isEmForSchool && !this.isEducManager && !this.isServAdmin && !this.isWizard && this.moduleChats && !(this.context.funcType == _common2.FuncType.preSchool || this.context.funcType == _common2.FuncType.addSchool);
    }
  }, {
    key: "forum",
    value: function forum() {
      (0, _common3.openPopupWindow)("_forum_new", "/app/popup/forum", 950, 660);
    }
  }, {
    key: "initFlags",
    value: function initFlags() {
      if (this.context.schoolId && this.context.emId) {
        this.isEmForSchool = true;
      } else if (this.context.emId) {
        this.isEducManager = true;
      } else if (!this.context.schoolId && !this.context.emId) {
        // не уверен, что правильно
        this.isServAdmin = true;
      }
      this.isStaff = !this.context.hasRole(Roles.parent) && !this.context.hasRole(Roles.student);
    }
  }, {
    key: "updTabItemFromContext",
    value: function updTabItemFromContext() {
      var _this2 = this;
      // таймаут добавил, чтобы быть уверенным наверняка в отрисовке формы refreshfix
      this.$timeout(0).then(function () {
        // при установке page.tabItem поле TabItem в refreshfix устанавливается,
        // поэтому в разметке убрал из <input type="hidden" name="TabItem" value="{{$ctrl.angularContext.tabItem}}"/>
        // инициализацию value
        _this2.page.tabItem = _this2.angularContext.tabItem;
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;
      this.isWizard = this.checkWizard();
      this.initFlags();
      var promises = [];
      promises.push(this.settingsProvider.ServerSettings.SystemSettings.ModuleChats().then(function (moduleChats) {
        _this3.moduleChats = moduleChats;
      }));
      if (this.checkYearAccess()) {
        promises.push(this.contextService.getYears(2).then(function (lastYears) {
          var futureYear = lastYears.find(function (y) {
            return y.closed == _rooms.YearStatus.Future;
          });
          var openYear = lastYears.find(function (y) {
            return y.closed == _rooms.YearStatus.Open;
          });
          _this3.futureYearExists = futureYear != undefined;
          if (!_this3.futureYearExists) {
            return;
          }
          _this3.switchYearInfo = {
            futureYearId: futureYear.id,
            openYearId: openYear.id
          };
          _this3.futureMode = parseInt(_this3.context.yearId) == futureYear.id;
        }));
      }
      this.$q.all(promises).then(function () {
        _this3.ready = true;
        _app.AppInitializer.initing = false;
        _this3.updTabItemFromContext();
      })["finally"](function () {
        // запускает фоновую задачу, отслеживающую события для пользователя
        _this3.appBackgroundTaskService.execute();
      });
    }
  }, {
    key: "checkYearAccess",
    value: function checkYearAccess() {
      if (this.isEducManager || this.isServAdmin) {
        return false;
      }
      return this.context.hasAnyRight([Rights.arCreateCloseEditYear]) || this.isStaff;
    }
  }, {
    key: "checkWizard",
    value: function checkWizard() {
      return window.location.pathname.toLowerCase().indexOf("wizard") >= 0;
    }
  }, {
    key: "getUserName",
    value: function getUserName() {
      if (this.isServAdmin) {
        return this.language.Generic.ServAdmin.kSAName;
      }
      return this.context.user.name;
    }
  }, {
    key: "getScreenScheme",
    value: function getScreenScheme() {
      if (this.isServAdmin) {
        return "servadmin";
      }
      if (this.isEducManager) {
        return "em";
      }
      switch (this.context.funcType) {
        case _common2.FuncType.preSchool:
          return "preschool";
        case _common2.FuncType.school:
          return "school";
        case _common2.FuncType.addSchool:
          return "addschool";
        case _common2.FuncType.profSchool:
          return "profschool";
        case _common2.FuncType.orphanage:
          return "school";
      }
    }
  }, {
    key: "showYearsTab",
    value: function showYearsTab() {
      return this.futureYearExists && (!this.page.parent || this.page.showYearTabs);
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this4 = this;
      (0, _commonLegacy.checkForChanges)().then(function () {
        return _this4.$dialogs.confirm(_this4.language.Generic.Common.kExitConfirmationQuestion);
      }).then(function () {
        return (0, _common.postTo)("/webapi/auth/logout");
      });
    }
  }, {
    key: "openPersonalSettings",
    value: function openPersonalSettings() {
      if (this.isEducManager) {
        (0, _common.postTo)({
          path: "/angular/em/mysettings/"
        });
      } else {
        (0, _common.postTo)({
          path: "/angular/school/mysettings/"
        });
      }
    }
  }, {
    key: "openSchoolInfo",
    value: function openSchoolInfo() {
      this.schoolCardService.openSchoolInfo();
    }
  }, {
    key: "updateWorkInSystemCnt",
    value: function updateWorkInSystemCnt() {
      this.listOnlineUsersService.updateWorkInSystemCnt();
    }
  }]);
  return AppComponentController;
}(); // вместо фабрики мы используем обычные объекты
var AppComponent = {
  bindings: {
    //'context': '='
  },
  templateUrl: "/static/dist/app/global/webapp/components/app.component.html",
  selector: "appComponent",
  controller: AppComponentController
};
exports.AppComponent = AppComponent;

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.haveToLogout = exports.goHistoryBack = exports.goCommonBack = exports.goBack = exports.checkForChanges = exports.canSubmit = exports.OnChangeSelect = exports.GetForm = exports.DoSubmit = void 0;
exports.isDBBusy = isDBBusy;
exports.ok_check_db = exports.ok = void 0;
exports.setDBBusy = setDBBusy;
exports.setDBFree = setDBFree;
var _extensionDeferred = _interopRequireDefault(__webpack_require__(6));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
window.isHaveToLogout = true;
function isDBBusy() {
  return !window.bIsDBFree;
}
function setDBBusy() {
  window.bIsDBFree = false;
}
function setDBFree() {
  window.bIsDBFree = true;
}

//выполняет проверку наличия изменений. при наличии таковых выводится соответствующее подтверждение
var checkForChanges = function checkForChanges() {
  return _extensionDeferred["default"].when(!window.dataWereChanged || $.show.getConfirmation(language.Generic.Common.kDataWereChanged));
};
exports.checkForChanges = checkForChanges;
var GetForm = function GetForm(fName, obj) {
  if ($(obj).parents().is('.ui-dialog')) return $(obj).parents(".ui-dialog").last().find('form[name=' + fName + ']')[0];else
    //### По какой-то причине выбор элементов, без предков .ui-dialog не работает, потому берем первый ###
    return $('form[name=' + fName + ']').first()[0];
};
exports.GetForm = GetForm;
var canSubmit = function canSubmit() {
  return true;
};
exports.canSubmit = canSubmit;
var haveToLogout = function haveToLogout() {
  return window.isHaveToLogout;
};
exports.haveToLogout = haveToLogout;
var goCommonBack = function goCommonBack() {
  if (typeof Back === "function") {
    return Back();
  } else {
    return goHistoryBack();
  }
};
exports.goCommonBack = goCommonBack;
var goHistoryBack = function goHistoryBack() {
  return checkForChanges().then(function () {
    window.isHaveToLogout = false;
    return history.go(-1);
  });
};
exports.goHistoryBack = goHistoryBack;
var DoSubmit = function DoSubmit(form, action) {
  var existToken;
  if (action) {
    form.action = action;
  }
  window.isHaveToLogout = false;
  var createHiddenField = function createHiddenField(form, key, value) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", value);
    return form.appendChild(hiddenField);
  };
  existToken = form.at || form.AT;
  if (!existToken) {
    existToken = /\bat\=/i.test(form.action);
  }
  if (!existToken && typeof window.strATTok !== "undefined" && window.strATTok.length) {
    createHiddenField(form, "at", window.strATTok);
  }
  return form.submit();
};
exports.DoSubmit = DoSubmit;
var goBack = function goBack(form, action) {
  return checkForChanges().then(function () {
    $('input[type="password"]', form).attr("disabled", "disabled");
    return DoSubmit(form, action);
  });
};
exports.goBack = goBack;
var ok_check_db = function ok_check_db(formName, action) {
  return _extensionDeferred["default"].when(window.bIsDBFree, window.canSubmit).then(function () {
    $(document).trigger("showProcessing");
    setDBBusy();
    return DoSubmit(document.forms[formName], action);
  });
};
exports.ok_check_db = ok_check_db;
var ok = function ok(formName, action, obj) {
  var form;
  if (obj === null) {
    form = document.forms[formName];
  } else {
    form = GetForm(formName, obj);
  }
  return _extensionDeferred["default"].when(canSubmit).then(function () {
    return DoSubmit(form, action);
  });
};
exports.ok = ok;
var OnChangeSelect = function OnChangeSelect(sFormName, sAction) {
  checkForChanges().then(function () {
    return ok_check_db(sFormName, sAction);
  }).fail(function () {
    document.forms[sFormName].reset();
  });
};
exports.OnChangeSelect = OnChangeSelect;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var extDeferred;

extDeferred = (function() {
  var handleDef;
  handleDef = function(condition) {
    var internalDef;
    while (typeof condition === 'function') {
      condition = condition();
    }
    if (Array.isArray(condition)) {
      condition = extDeferred.when(condition);
    }
    if (typeof condition === 'undefined' || typeof condition === 'boolean') {
      internalDef = $.Deferred();
      if (condition) {
        internalDef.resolve();
      } else {
        internalDef.reject();
      }
      return internalDef.promise();
    }
    if (typeof Promise !== 'undefined' && condition instanceof Promise) {
      internalDef = $.Deferred();
      condition.then(function() {
        return internalDef.resolve();
      }, function() {
        return internalDef.reject();
      });
      return internalDef.promise();
    }
    return condition;
  };
  return {
    wrapPromise: function(promiseFunc, success, fail) {
      return function() {
        return $.when(promiseFunc()).then(success, fail);
      };
    },
    wrapAlwaysPromise: function(promiseFunc) {
      return function() {
        var deferred, funcResolve;
        deferred = $.Deferred();
        funcResolve = function() {
          return deferred.resolve();
        };
        extDeferred.wrapPromise(promiseFunc, funcResolve, funcResolve)();
        return deferred.promise();
      };
    },
    resolve: function() {
      var deferred;
      deferred = $.Deferred();
      deferred.resolve();
      return deferred.promise();
    },
    when: function() {
      var arrDeferred, deferred, firstDef, recThen, rejectFunc, successFunc;
      deferred = $.Deferred();
      arrDeferred = arguments;
      if (arguments.length === 1 && typeof arguments[0] === 'object') {
        arrDeferred = arguments[0];
      }
      if (arrDeferred.length === 0) {
        deferred.resolve();
        return deferred.promise();
      }
      rejectFunc = function() {
        deferred.reject();
      };
      successFunc = function() {
        deferred.resolve();
      };
      recThen = function(index) {
        var nextDef, nextDefFunc;
        nextDef = arrDeferred[index];
        nextDefFunc = function() {
          return handleDef(nextDef);
        };
        if (index < arrDeferred.length - 1) {
          return function() {
            return $.when(nextDefFunc()).then(recThen(index + 1), rejectFunc);
          };
        } else if (index === arrDeferred.length - 1) {
          return function() {
            return $.when(nextDefFunc()).then(successFunc, rejectFunc);
          };
        } else {
          return successFunc;
        }
      };
      firstDef = arrDeferred[0];
      $.when(handleDef(firstDef)).then(recThen(1), rejectFunc);
      return deferred.promise();
    }
  };
})();

module.exports = extDeferred;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearStatus = void 0;
var YearStatus;
exports.YearStatus = YearStatus;
(function (YearStatus) {
  YearStatus["Open"] = "Open";
  YearStatus["Future"] = "Future";
})(YearStatus || (exports.YearStatus = YearStatus = {}));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppInitializer = void 0;
var _resourceLoader = __webpack_require__(9);
var _common = __webpack_require__(10);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
window["globalContext"] = window;
var AppInitializer = /*#__PURE__*/function () {
  AppInitializer.$inject = ["$http", "$q", "$dialogs", "$window"];
  /*@ngInject*/
  function AppInitializer($http, $q, $dialogs, $window) {
    _classCallCheck(this, AppInitializer);
    this.$http = $http;
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.$window = $window;
    this.resLoader = new _resourceLoader.ResourceLoader(function (url) {
      return url + "?ver=1";
    });
    globalContext = window;
  }
  _createClass(AppInitializer, [{
    key: "init",
    value: function init(appContext, angularContext) {
      var _this = this;
      globalContext = window;
      globalContext.isAngularApp = true;
      if (!appContext.at) {
        this.$window.location.href = "/";
        return Promise.reject("unauthorized");
      }
      AppInitializer.angularContext = angularContext;
      // идет процесс инициализации
      AppInitializer.initing = true;
      var config = {
        headers: {
          'at': appContext.at
        }
      };
      var loadLanguage = function loadLanguage(lng, funcType) {
        var defaultLng = "ru";
        if (lng == null) {
          lng = defaultLng;
        }
        var promises = [];
        promises.push(_this.resLoader.loadScript("/static/dist/lng/language_".concat(lng, ".js")));
        if (funcType != null) {
          promises.push(_this.resLoader.loadScript("/static/dist/lng/language_".concat(lng, "_").concat(funcType, ".js")));
        }
        promises.push(_this.resLoader.loadScript("/static/dist/common/js/core-scripts.js"));
        globalContext.bootpromises = promises;
        return _this.$q.all(promises);
      };
      var mapFuncType = function mapFuncType(funcType) {
        switch (funcType) {
          case "Generic":
            return -1;
          case "EducMgr":
            return 0;
          case "PreSchool":
            return 1;
          case "School":
            return 2;
          case "AddSchool":
            return 3;
          case "ProfSchool":
            return 4;
          case "Orphanage":
            return 5;
          case "University":
            return 6;
        }
      };
      return new Promise(function (resolve) {
        _this.$http.get("/webapi/context", config).then(function (response) {
          var _a;
          var appContext = response.data;
          appContext.funcType = mapFuncType(appContext.funcType);
          appContext.readOnly = false;
          if (appContext.schoolyear) {
            appContext.yearId = appContext.schoolyear.id.toString();
            appContext.currYear = appContext.schoolyear.name;
            appContext.fullSchoolName = (_a = appContext.organizationName) !== null && _a !== void 0 ? _a : appContext.organization.name;
            appContext.readOnly = appContext.schoolyear.closed == "Closed";
          }
          appContext.hasAnyRight = function (checkRights) {
            return checkRights.some(function (r) {
              return appContext.rights.indexOf(r) !== -1;
            });
          };
          appContext.hasRights = function (checkRights) {
            return !checkRights.some(function (r) {
              return appContext.rights.indexOf(r) === -1;
            });
          };
          AppInitializer.appContext = angular.extend(globalContext.appContext, appContext);
          globalContext.appContext = AppInitializer.appContext;
          return loadLanguage(appContext.userLanguage, appContext.funcType);
        }, function (response) {
          var errInformer = function errInformer(message) {
            return _this.$dialogs.error(message);
          };
          var messageInformer = function messageInformer(message) {
            return _this.$dialogs.message(message);
          };
          var language = {
            Generic: {
              Common: {
                kUnexpErr: "Неожиданная ошибка!",
                kErrPageAccess: "Обратитесь к администратору системы, чтобы получить право доступа.",
                kTimeOutOccured4Ajax: "Ошибка! Ваш сеанс работы был завершен"
              }
            }
          };
          return new _common.CommonXhrErrorHandler(errInformer, messageInformer, null, language).handleErrorResponse(response);
        }).then(function () {
          return resolve();
        });
      });
    }
  }]);
  return AppInitializer;
}();
exports.AppInitializer = AppInitializer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVersionedLink = exports.ResourceLoader = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var getVersionedLink = function getVersionedLink(link) {
  if (typeof appContext === "undefined") {
    return link;
  }
  return link + "?ver=" + appContext.version;
};
exports.getVersionedLink = getVersionedLink;
var ResourceLoader = /*#__PURE__*/function () {
  function ResourceLoader(versFunc) {
    _classCallCheck(this, ResourceLoader);
    this.head = document.getElementsByTagName("head")[0] || document.documentElement;
    if (!versFunc) {
      this.getVersionedLink = getVersionedLink;
    } else {
      this.getVersionedLink = versFunc;
    }
  }
  //функция загрузки css
  _createClass(ResourceLoader, [{
    key: "loadStyleSheet",
    value: function loadStyleSheet(src) {
      src = this.getVersionedLink(src);
      if (document.createStyleSheet) {
        document.createStyleSheet(src);
      } else {
        $(this.head).append($("<link rel='stylesheet' href='".concat(src, "' type='text/css' media='screen' />")));
      }
    }
  }, {
    key: "loadScript",
    value:
    //функция загрузки скрипта
    function loadScript(src, onLoadHandler) {
      var _this = this;
      var executed = false;
      var loadHandler = function loadHandler(resolve) {
        var script = document.createElement("script");
        var scriptUrl = _this.getVersionedLink(src);
        script.src = scriptUrl;
        script.async = false;
        var afterLoad = function afterLoad() {
          if (onLoadHandler) {
            onLoadHandler(src);
          }
          if (_this.head && script.parentNode) {
            return _this.head.removeChild(script);
          }
        };
        script.onload = function () {
          if (executed) {
            return;
          }
          executed = true;
          afterLoad();
          resolve();
        };
        script.onreadystatechange = function () {
          var self = _this;
          if (_this.readyState === "complete" || _this.readyState === "loaded") {
            return setTimeout(function () {
              return self.onload();
            }, 0);
          }
        };
        _this.head.insertBefore(script, _this.head.firstChild);
      };
      if (typeof Promise === "undefined") {
        //обратная совместимость с IE
        var def = $.Deferred();
        loadHandler(function () {
          return def.resolve();
        });
        return def.promise();
      }
      return new Promise(loadHandler);
    }
  }]);
  return ResourceLoader;
}();
exports.ResourceLoader = ResourceLoader;

/***/ }),
/* 10 */
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

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arSchoolDocsView = exports.arSchoolDocsEdit = exports.arReportsViewSpecialEducNeeds = exports.arReportsViewForAssignedClass = exports.arReportsViewAdministrativeReports = exports.arReportsViewAdditionalReports = exports.arReportsUseReportConstructor = exports.arReportsForAssignedClass = exports.arReportsForAllClasses = exports.arProfileViewSchoolInfo = exports.arProfileEditSchoolInfo = exports.arProfileEditRegionalSettings = exports.arProfileDefineSecurityRoles = exports.arPostSchoolEvent = exports.arPostFoodPayStudentOrders = exports.arPostAwardEvents = exports.arMovePoolStudents = exports.arMovePoolStaff = exports.arMoveBookView = exports.arMoveBookEdit = exports.arMessagesSendReceive = exports.arLAViewSelf = exports.arLAViewMaterials = exports.arLAViewAll = exports.arLASetPolicies = exports.arLAEditSelf = exports.arLACreateGradingScales = exports.arJournalViewSelf = exports.arJournalViewAll = exports.arJournalEditSelf = exports.arJournalEditHAOnlyOnFuture = exports.arJournalEditAll = exports.arIndividualSupportStudentsReestrView = exports.arIndividualSupportMeasuresEditSelf = exports.arIndividualSupportMeasuresEditAll = exports.arForumSendReceive = exports.arForumEdit = exports.arFoodPayPayment = exports.arFillStatReports = exports.arEnrollSelf = exports.arEditSelfAwardEventResults = exports.arEditSchoolTermTypes = exports.arEditSchoolSettings = exports.arEditSchoolResources = exports.arEditReferenceBook = exports.arEditInfoSelf = exports.arEditHealthMonitoring = exports.arEditFoodPayStudentOrdersSelf = exports.arEditFoodPayStudentOrdersAll = exports.arEditFoodPayOrders = exports.arEditFoodPayNorms = exports.arEditFoodPayBalanceSelf = exports.arEditFoodPayBalanceAll = exports.arEditAwardEventMembers = exports.arEMUsersView = exports.arEMUsersEdit = exports.arEMStats = exports.arEMReports = exports.arEMPersonDataReports = exports.arEMODView = exports.arEMODEdit = exports.arEMMsoko = exports.arEMMovement = exports.arEMEventsView = exports.arEMEventsMembersView = exports.arEMEventsMembersEdit = exports.arEMEventsEdit = exports.arEMEgeView = exports.arEMEgeImport = exports.arEMDouPayNormView = exports.arEMDouPayNormEdit = exports.arEMCuratorsODView = exports.arEMCuratorsODEdit = exports.arEMAddReportsView = exports.arEMAddReportsEdit = exports.arDeleteUsers = exports.arCurrMgmViewSelf = exports.arCurrMgmViewAll = exports.arCurrMgmCreateAll = exports.arCurrMgmCreate = exports.arCreateEditTerm = exports.arCreateCloseEditYear = exports.arClassMgmViewClassSubjAll = exports.arClassMgmPostClassEventSelf = exports.arClassMgmPostClassEventAll = exports.arClassMgmEnrollClass = exports.arClassMgmEditSubjects = exports.arClassMgmCreateClass = exports.arCalendarViewSelf = exports.arCalendarViewAll = exports.arCalendarCreateCalendar = exports.arBrowseStatReports = exports.arBrowseResultsEGEHisClassesOrSubjects = exports.arBrowseResultsEGEAllClasses = exports.arBrowseAccessJournal = exports.arAssignmentsViewComplete = exports.arAnnouncementView = exports.arAnnouncementPost = exports.arAddLA = exports.arAddIndividualSupportStudents = void 0;
exports.arViewSelfAwardEvents = exports.arViewHealthMonitoring = exports.arViewFoodPayOrders = exports.arViewAwardEvents = exports.arUsersEditStudentsPsyInfo = exports.arUsersEditStudentsMedInfo = exports.arUsersEditStudents = exports.arUsersEditStaffMedInfo = exports.arUsersEditStaff = exports.arUsersEditAccountStudentsParentsInClass = exports.arUsersEditAccountStudentsParents = exports.arUsersEditAccountStaff = exports.arUserStat = exports.arTotalsViewSelf = exports.arTotalsViewAll = exports.arTotalsEditSelf = exports.arTotalsEditAll = exports.arShortInfoStudents = exports.arShortInfoStaff = exports.arSetPhoto = exports.arSelfRegisterForAwardEvents = exports.arSchoolSubjects = exports.arSchoolPublicDocsView = void 0;
//todo. написать gulp плагин для автоматической генерации по файлу Right.cs

var arProfileEditSchoolInfo = 1;
exports.arProfileEditSchoolInfo = arProfileEditSchoolInfo;
var arProfileViewSchoolInfo = 65;
exports.arProfileViewSchoolInfo = arProfileViewSchoolInfo;
var arProfileEditRegionalSettings = 2;
exports.arProfileEditRegionalSettings = arProfileEditRegionalSettings;
var arProfileDefineSecurityRoles = 3;
exports.arProfileDefineSecurityRoles = arProfileDefineSecurityRoles;
var arEditReferenceBook = 45;
exports.arEditReferenceBook = arEditReferenceBook;
var arEditSchoolSettings = 58;
exports.arEditSchoolSettings = arEditSchoolSettings;
var arUsersEditStaff = 5;
exports.arUsersEditStaff = arUsersEditStaff;
var arUsersEditStaffMedInfo = 66;
exports.arUsersEditStaffMedInfo = arUsersEditStaffMedInfo;
var arUsersEditStudents = 6;
exports.arUsersEditStudents = arUsersEditStudents;
var arUsersEditStudentsMedInfo = 67;
exports.arUsersEditStudentsMedInfo = arUsersEditStudentsMedInfo;
var arUsersEditStudentsPsyInfo = 68;
exports.arUsersEditStudentsPsyInfo = arUsersEditStudentsPsyInfo;
var arUsersEditAccountStaff = 73;
exports.arUsersEditAccountStaff = arUsersEditAccountStaff;
var arUsersEditAccountStudentsParents = 74;
exports.arUsersEditAccountStudentsParents = arUsersEditAccountStudentsParents;
var arUsersEditAccountStudentsParentsInClass = 75;
exports.arUsersEditAccountStudentsParentsInClass = arUsersEditAccountStudentsParentsInClass;
var arCreateCloseEditYear = 29;
exports.arCreateCloseEditYear = arCreateCloseEditYear;
var arSchoolSubjects = 37;
exports.arSchoolSubjects = arSchoolSubjects;
var arCreateEditTerm = 30;
exports.arCreateEditTerm = arCreateEditTerm;
var arEditSchoolTermTypes = 44;
exports.arEditSchoolTermTypes = arEditSchoolTermTypes;
var arMoveBookView = 50;
exports.arMoveBookView = arMoveBookView;
var arMoveBookEdit = 51;
exports.arMoveBookEdit = arMoveBookEdit;
var arMovePoolStudents = 52;
exports.arMovePoolStudents = arMovePoolStudents;
var arMovePoolStaff = 53;
exports.arMovePoolStaff = arMovePoolStaff;
var arSchoolDocsView = 61;
exports.arSchoolDocsView = arSchoolDocsView;
var arSchoolDocsEdit = 62;
exports.arSchoolDocsEdit = arSchoolDocsEdit;
var arClassMgmViewClassSubjAll = 36;
exports.arClassMgmViewClassSubjAll = arClassMgmViewClassSubjAll;
var arClassMgmCreateClass = 7;
exports.arClassMgmCreateClass = arClassMgmCreateClass;
var arClassMgmEditSubjects = 38;
exports.arClassMgmEditSubjects = arClassMgmEditSubjects;
var arClassMgmEnrollClass = 8;
exports.arClassMgmEnrollClass = arClassMgmEnrollClass;
var arClassMgmPostClassEventSelf = 11;
exports.arClassMgmPostClassEventSelf = arClassMgmPostClassEventSelf;
var arClassMgmPostClassEventAll = 14;
exports.arClassMgmPostClassEventAll = arClassMgmPostClassEventAll;
var arCurrMgmViewSelf = 40;
exports.arCurrMgmViewSelf = arCurrMgmViewSelf;
var arCurrMgmViewAll = 39;
exports.arCurrMgmViewAll = arCurrMgmViewAll;
var arCurrMgmCreate = 12;
exports.arCurrMgmCreate = arCurrMgmCreate;
var arCurrMgmCreateAll = 13;
exports.arCurrMgmCreateAll = arCurrMgmCreateAll;
var arAddLA = 60;
exports.arAddLA = arAddLA;
var arCalendarViewSelf = 15;
exports.arCalendarViewSelf = arCalendarViewSelf;
var arCalendarViewAll = 16;
exports.arCalendarViewAll = arCalendarViewAll;
var arCalendarCreateCalendar = 19;
exports.arCalendarCreateCalendar = arCalendarCreateCalendar;
var arPostSchoolEvent = 33;
exports.arPostSchoolEvent = arPostSchoolEvent;
var arViewAwardEvents = 83;
exports.arViewAwardEvents = arViewAwardEvents;
var arPostAwardEvents = 84;
exports.arPostAwardEvents = arPostAwardEvents;
var arEditAwardEventMembers = 85;
exports.arEditAwardEventMembers = arEditAwardEventMembers;
var arViewSelfAwardEvents = 86;
exports.arViewSelfAwardEvents = arViewSelfAwardEvents;
var arSelfRegisterForAwardEvents = 87;
exports.arSelfRegisterForAwardEvents = arSelfRegisterForAwardEvents;
var arEditSelfAwardEventResults = 88;
exports.arEditSelfAwardEventResults = arEditSelfAwardEventResults;
var arJournalViewSelf = 20;
exports.arJournalViewSelf = arJournalViewSelf;
var arJournalViewAll = 18;
exports.arJournalViewAll = arJournalViewAll;
var arJournalEditSelf = 17;
exports.arJournalEditSelf = arJournalEditSelf;
var arJournalEditAll = 23;
exports.arJournalEditAll = arJournalEditAll;
var arJournalEditHAOnlyOnFuture = 59;
exports.arJournalEditHAOnlyOnFuture = arJournalEditHAOnlyOnFuture;
var arTotalsViewSelf = 34;
exports.arTotalsViewSelf = arTotalsViewSelf;
var arTotalsViewAll = 31;
exports.arTotalsViewAll = arTotalsViewAll;
var arTotalsEditSelf = 41;
exports.arTotalsEditSelf = arTotalsEditSelf;
var arTotalsEditAll = 32;
exports.arTotalsEditAll = arTotalsEditAll;
var arLASetPolicies = 9;
exports.arLASetPolicies = arLASetPolicies;
var arLACreateGradingScales = 10;
exports.arLACreateGradingScales = arLACreateGradingScales;
var arLAViewMaterials = 35;
exports.arLAViewMaterials = arLAViewMaterials;
var arLAEditSelf = 4;
exports.arLAEditSelf = arLAEditSelf;
var arLAViewSelf = 42;
exports.arLAViewSelf = arLAViewSelf;
var arLAViewAll = 43;
exports.arLAViewAll = arLAViewAll;
var arReportsForAssignedClass = 21;
exports.arReportsForAssignedClass = arReportsForAssignedClass;
var arReportsForAllClasses = 22;
exports.arReportsForAllClasses = arReportsForAllClasses;
var arReportsViewForAssignedClass = 24;
exports.arReportsViewForAssignedClass = arReportsViewForAssignedClass;
var arReportsViewAdditionalReports = 54;
exports.arReportsViewAdditionalReports = arReportsViewAdditionalReports;
var arReportsUseReportConstructor = 55;
exports.arReportsUseReportConstructor = arReportsUseReportConstructor;
var arReportsViewAdministrativeReports = 64;
exports.arReportsViewAdministrativeReports = arReportsViewAdministrativeReports;
var arAnnouncementView = 25;
exports.arAnnouncementView = arAnnouncementView;
var arAnnouncementPost = 26;
exports.arAnnouncementPost = arAnnouncementPost;
var arMessagesSendReceive = 27;
exports.arMessagesSendReceive = arMessagesSendReceive;
var arForumSendReceive = 56;
exports.arForumSendReceive = arForumSendReceive;
var arForumEdit = 57;
exports.arForumEdit = arForumEdit;
var arAssignmentsViewComplete = 28;
exports.arAssignmentsViewComplete = arAssignmentsViewComplete;
var arShortInfoStaff = 46;
exports.arShortInfoStaff = arShortInfoStaff;
var arShortInfoStudents = 47;
exports.arShortInfoStudents = arShortInfoStudents;
var arEditInfoSelf = 48;
exports.arEditInfoSelf = arEditInfoSelf;
var arEnrollSelf = 49;
exports.arEnrollSelf = arEnrollSelf;
var arDeleteUsers = 63;
exports.arDeleteUsers = arDeleteUsers;
var arEditSchoolResources = 69;
exports.arEditSchoolResources = arEditSchoolResources;
var arSetPhoto = 72;
exports.arSetPhoto = arSetPhoto;
var arBrowseResultsEGEAllClasses = 76;
exports.arBrowseResultsEGEAllClasses = arBrowseResultsEGEAllClasses;
var arBrowseResultsEGEHisClassesOrSubjects = 77;
exports.arBrowseResultsEGEHisClassesOrSubjects = arBrowseResultsEGEHisClassesOrSubjects;
var arSchoolPublicDocsView = 78;
exports.arSchoolPublicDocsView = arSchoolPublicDocsView;
var arBrowseStatReports = 79;
exports.arBrowseStatReports = arBrowseStatReports;
var arFillStatReports = 80;
exports.arFillStatReports = arFillStatReports;
var arBrowseAccessJournal = 81;
exports.arBrowseAccessJournal = arBrowseAccessJournal;
var arUserStat = 82;

/* Индивидуальная поддержка обучающихся */
exports.arUserStat = arUserStat;
var arIndividualSupportStudentsReestrView = 91; // Просмотр реестра учащихся индивидуальной поддержки
exports.arIndividualSupportStudentsReestrView = arIndividualSupportStudentsReestrView;
var arAddIndividualSupportStudents = 92; // Добавление учащихся в систему индивидуальной поддержки
exports.arAddIndividualSupportStudents = arAddIndividualSupportStudents;
var arIndividualSupportMeasuresEditAll = 93; // Редактирование мероприятий индивидуальной поддержки.Всех мероприятий
exports.arIndividualSupportMeasuresEditAll = arIndividualSupportMeasuresEditAll;
var arIndividualSupportMeasuresEditSelf = 94; // Редактирование мероприятий индивидуальной поддержки.Своих мероприятий
exports.arIndividualSupportMeasuresEditSelf = arIndividualSupportMeasuresEditSelf;
var arReportsViewSpecialEducNeeds = 100;
exports.arReportsViewSpecialEducNeeds = arReportsViewSpecialEducNeeds;
var arEMUsersView = 1001;
exports.arEMUsersView = arEMUsersView;
var arEMUsersEdit = 1002;
exports.arEMUsersEdit = arEMUsersEdit;
var arEMEventsView = 1003;
exports.arEMEventsView = arEMEventsView;
var arEMEventsEdit = 1004;
exports.arEMEventsEdit = arEMEventsEdit;
var arEMReports = 1005;
exports.arEMReports = arEMReports;
var arEMPersonDataReports = 1006;
exports.arEMPersonDataReports = arEMPersonDataReports;
var arEMAddReportsView = 1007;
exports.arEMAddReportsView = arEMAddReportsView;
var arEMAddReportsEdit = 1008;
exports.arEMAddReportsEdit = arEMAddReportsEdit;
var arEMMovement = 1009;
exports.arEMMovement = arEMMovement;
var arEMStats = 1010;
exports.arEMStats = arEMStats;
var arEMEgeView = 1011;
exports.arEMEgeView = arEMEgeView;
var arEMEgeImport = 1012;
exports.arEMEgeImport = arEMEgeImport;
var arEMMsoko = 1013;
exports.arEMMsoko = arEMMsoko;
var arEMDouPayNormView = 1014;
exports.arEMDouPayNormView = arEMDouPayNormView;
var arEMDouPayNormEdit = 1015;
exports.arEMDouPayNormEdit = arEMDouPayNormEdit;
var arEMCuratorsODView = 1016;
exports.arEMCuratorsODView = arEMCuratorsODView;
var arEMCuratorsODEdit = 1017;
exports.arEMCuratorsODEdit = arEMCuratorsODEdit;
var arEMODView = 1018;
exports.arEMODView = arEMODView;
var arEMODEdit = 1019;
exports.arEMODEdit = arEMODEdit;
var arEMEventsMembersView = 1020;
exports.arEMEventsMembersView = arEMEventsMembersView;
var arEMEventsMembersEdit = 1021;
exports.arEMEventsMembersEdit = arEMEventsMembersEdit;
var arViewHealthMonitoring = 101;
exports.arViewHealthMonitoring = arViewHealthMonitoring;
var arEditHealthMonitoring = 102;
exports.arEditHealthMonitoring = arEditHealthMonitoring;
var arViewFoodPayOrders = 104;
exports.arViewFoodPayOrders = arViewFoodPayOrders;
var arEditFoodPayOrders = 105;
exports.arEditFoodPayOrders = arEditFoodPayOrders;
var arEditFoodPayStudentOrdersAll = 106;
exports.arEditFoodPayStudentOrdersAll = arEditFoodPayStudentOrdersAll;
var arEditFoodPayStudentOrdersSelf = 107;
exports.arEditFoodPayStudentOrdersSelf = arEditFoodPayStudentOrdersSelf;
var arEditFoodPayBalanceAll = 108;
exports.arEditFoodPayBalanceAll = arEditFoodPayBalanceAll;
var arEditFoodPayBalanceSelf = 109;
exports.arEditFoodPayBalanceSelf = arEditFoodPayBalanceSelf;
var arPostFoodPayStudentOrders = 110;
exports.arPostFoodPayStudentOrders = arPostFoodPayStudentOrders;
var arFoodPayPayment = 111;
exports.arFoodPayPayment = arFoodPayPayment;
var arEditFoodPayNorms = 112;
exports.arEditFoodPayNorms = arEditFoodPayNorms;

/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMenuComponent = exports.MenuComponent = exports.MenuActivateService = exports.ActivateMenuItem = void 0;
var _common = __webpack_require__(16);
var _commonLegacy = __webpack_require__(5);
var _urlHelper = __webpack_require__(4);
var _app = __webpack_require__(8);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MenuItem = /*#__PURE__*/function () {
  function MenuItem(dto, mainmenu) {
    var _this = this;
    _classCallCheck(this, MenuItem);
    var _a, _b;
    this.title = dto.title;
    this.tabs = ((_a = dto.tabItemInfos) === null || _a === void 0 ? void 0 : _a.map(function (tabDto) {
      return new TabItem(_this, tabDto);
    })) || [];
    this.submenu = ((_b = dto.subMenus) === null || _b === void 0 ? void 0 : _b.map(function (subMenuDto) {
      return new MenuItem(subMenuDto, _this);
    })) || [];
    this.mainmenu = mainmenu || null;
    this.dropDownMenu = dto.dropDownMenu;
    this.hasTabItems = dto.hasTabItems;
    this.selected = dto.selected;
  }
  _createClass(MenuItem, [{
    key: "isSubMenu",
    get: function get() {
      return this.mainmenu != null;
    }
  }, {
    key: "select",
    value: function select() {
      this.selected = true;
      if (this.isSubMenu) {
        this.mainmenu.selected = true;
      }
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.selected = false;
      if (this.isSubMenu) {
        this.mainmenu.selected = false;
      }
    }
  }]);
  return MenuItem;
}();
var TabItem = /*#__PURE__*/function () {
  function TabItem(menuItem, dto) {
    _classCallCheck(this, TabItem);
    this.menuItem = menuItem;
    this.title = dto.title;
    this.selected = dto.selected;
    this.id = dto.id;
    this.url = dto.url;
  }
  _createClass(TabItem, [{
    key: "select",
    value: function select() {
      this.selected = true;
      this.menuItem.select();
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.selected = false;
      this.menuItem.unselect();
    }
  }]);
  return TabItem;
}();
var MenuActivateService = /*#__PURE__*/function () {
  MenuActivateService.$inject = ["appContext", "pageContext", "$location"];
  /*@ngInject*/
  function MenuActivateService(appContext, pageContext, $location) {
    var _this2 = this;
    _classCallCheck(this, MenuActivateService);
    this.appContext = appContext;
    this.pageContext = pageContext;
    this.$location = $location;
    this.confirmAndLeave = function (leave) {
      if (_this2.pageContext.leaveConfirmFunc) {
        _this2.pageContext.leaveConfirmFunc(leave);
        return;
      }
      (0, _commonLegacy.checkForChanges)().then(leave);
    };
  }
  _createClass(MenuActivateService, [{
    key: "init",
    value: function init(menuController) {
      this.menuController = menuController;
      this.initCtx();
      this.initMenu();
    }
  }, {
    key: "initMenu",
    value: function initMenu() {
      if (this.context) {
        this.activateRouteMenu(this.context.route);
      }
    }
  }, {
    key: "initCtx",
    value: function initCtx() {
      this.menuCtx = this.appContext.menuContext;
      this.context = _app.AppInitializer.angularContext;
      if (!this.context.search) {
        this.context.search = this.$location.search();
      }
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      this.menuController.toggleMobileMenu();
    }
  }, {
    key: "selectTab",
    value: function selectTab(tabItem) {
      this.unselectAll();
      tabItem.select();
      this.menuCtx.tabItemInfo = tabItem;
      this.menuCtx.menuItemInfo = tabItem.menuItem;
      this.goTab(tabItem);
    }
  }, {
    key: "unselectAll",
    value: function unselectAll() {
      this.flatTabItems().forEach(function (ti) {
        return ti.unselect();
      });
    }
  }, {
    key: "activateRouteMenu",
    value: function activateRouteMenu(route) {
      var appPart = this.context.app;
      var routePart = route;
      if (this.context.app === "school/userinfo") {
        // фикс для модуля ЛК пользователей.
        // актуально для всех модулей доступ к которым производится не из меню
        appPart = "school/users";
        routePart = route.substring(0, route.lastIndexOf('/'));
      }
      if (!routePart.startsWith("/")) {
        routePart = "/" + routePart;
      }
      var urlSearch = "/".concat(appPart).concat(routePart);
      var tabItem = this.searchTabItemByRegex(urlSearch, this.context.search);
      if (tabItem) {
        this.unselectAll();
        tabItem.select();
        this.menuCtx.tabItemInfo = tabItem;
        this.menuCtx.menuItemInfo = tabItem.menuItem;
      }
    }
  }, {
    key: "searchTabItemByRegex",
    value: function searchTabItemByRegex(url, search) {
      var pattern = "".concat(url, "/?([?].+)?$");
      var rxp = new RegExp(pattern);
      var tabItems = this.flatTabItems().filter(function (t) {
        return t.url.match(rxp);
      });
      if (tabItems.length == 0) {
        return null;
      }
      if (tabItems.length == 1) {
        return tabItems[0];
      }
      var searchKeys = search ? Object.keys(search) : [];
      var tabItem = tabItems.find(function (t) {
        var tabItemParams = _urlHelper.UrlHelperInstance.getParameters(t.url);
        if (searchKeys.length == 0) {
          return Object.keys(tabItemParams).length == 0;
        }
        return !searchKeys.some(function (qp) {
          return tabItemParams[qp] != search[qp];
        });
      });
      return tabItem;
    }
  }, {
    key: "searchTabItem",
    value: function searchTabItem(url) {
      var findTabItem = function findTabItem(ti) {
        return ti.url.replace(/\//g, "").indexOf(url.replace(/\//g, "")) >= 0;
      };
      var tabItem = this.flatTabItems().find(findTabItem);
      return tabItem;
    }
  }, {
    key: "flatTabItems",
    value: function flatTabItems() {
      var menuItems = this.menuCtx.items;
      // лямбды
      var miFilter = function miFilter(mi) {
        return mi.hasTabItems;
      };
      var getSubmenu = function getSubmenu(mi) {
        return mi.submenu;
      };
      var getTabs = function getTabs(mi) {
        return mi.tabs;
      };
      // подменю
      var subMenus = _.flatten(menuItems.map(getSubmenu)).filter(miFilter);
      // tab items
      var tabItems = _.flatten(subMenus.map(getTabs)).concat(_.flatten(menuItems.filter(miFilter).map(getTabs)));
      return tabItems;
    }
  }, {
    key: "goTab",
    value: function goTab(tabItem) {
      var form = document.forms["MenuForm"];
      var tbID = tabItem.id;
      var url = tabItem.url;
      if (!form) {
        return;
      }
      if (url.length == 0) {
        $.show.message("В процессе разработки...");
        return;
      }
      this.navigateHandler(url).then(function () {
        return (0, _common.doNavigate)(tbID, url);
      });
    }
  }, {
    key: "navigateHandler",
    value: function navigateHandler(url) {
      var _this3 = this;
      var nowApp = $(document).find("base").attr("href");
      if (url.indexOf(nowApp) === 0) {
        // навигация через меню (в рамках текущего модуля)
        var clearedRoute = "/".concat(url.replace(nowApp, ""));
        if (this.cleanUrl(this.$location.url()) !== this.cleanUrl(url)) {
          this.changeAngularRoute(clearedRoute, url);
        }
        // отклоняем базовую навигацию - редирект
        return Promise.reject("angular navigation");
      }
      // проверяем наличие изменений - выполням навигацию
      return new Promise(function (resolve, reject) {
        _this3.confirmAndLeave(resolve);
      });
    }
  }, {
    key: "changeAngularRoute",
    value: function changeAngularRoute(url, full) {
      var _this4 = this;
      if (!url.endsWith("/") && url.indexOf("?") === -1) {
        url += "/";
      }
      var search = null;
      var queryStart = url.indexOf("?");
      if (queryStart != -1) {
        var queryString = url.substring(queryStart + 1);
        url = url.substring(0, queryStart);
        var queryData = queryString.split("&");
        search = {};
        var _iterator = _createForOfIteratorHelper(queryData),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var keyValue = _step.value;
            var data = keyValue.split("=");
            search[data[0]] = data[1];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      this.confirmAndLeave(function () {
        _this4.$location.path(url);
        _this4.$location.search(search || {});
        _this4.menuController.refresh();
      });
    }
  }, {
    key: "cleanUrl",
    value: function cleanUrl(url) {
      return url.replace(/[/]?$/gm, "");
    }
  }]);
  return MenuActivateService;
}();
exports.MenuActivateService = MenuActivateService;
var MenuComponentController = /*#__PURE__*/function () {
  MenuComponentController.$inject = ["$scope", "appContext", "menuActivateService"];
  /*@ngInject*/
  function MenuComponentController($scope, appContext, menuActivateService) {
    _classCallCheck(this, MenuComponentController);
    this.$scope = $scope;
    this.menuActivateService = menuActivateService;
    this.mobileMenuOpen = false;
    this.navbarStyle = {};
    this.menuCtx = appContext.menuContext;
    this.menuCtx.items = this.menuCtx.modelMenu.map(function (dto) {
      return new MenuItem(dto);
    });
    this.menuActivateService.init(this);
  }
  _createClass(MenuComponentController, [{
    key: "selectTab",
    value: function selectTab(tabItem) {
      this.menuActivateService.selectTab(tabItem);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.$scope.$applyAsync();
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      this.navbarStyle = {
        display: this.mobileMenuOpen ? "block" : ""
      };
    }
  }, {
    key: "toggleMobileMenuItem",
    value: function toggleMobileMenuItem(event) {
      event.stopImmediatePropagation();
      //обработчик из menu.coffee
      //там попрежнему остается часть логики, автоматического открытия меню и обработчик ресайза
      //todo. переместить в angular после отказа от asp сайта.
      var btn = angular.element(event.target);
      var element_li = btn.parent("li");
      if (element_li.hasClass('open-menu')) {
        element_li.removeClass('open-menu');
        element_li.find('li').removeClass('open-menu');
        element_li.find('ul').slideUp();
      } else {
        element_li.addClass('open-menu');
        element_li.children('ul').slideDown();
        element_li.siblings('li').children('ul').slideUp();
        element_li.siblings('li').removeClass('open-menu');
        element_li.siblings('li').find('li').removeClass('open-menu');
        element_li.siblings('li').find('ul').slideUp();
      }
    }
  }]);
  return MenuComponentController;
}();
var ActivateMenuItem = function ActivateMenuItem(href) {
  var menu = $("ul.nav.navbar-nav");
  menu.find("li").removeClass("active");
  var hrefSearch = "a[href*=\"'".concat(href, "'\"]");
  if (href.slice(-1) === "/") {
    href = href.substr(0, href.length - 1);
    hrefSearch += "," + "a[href*=\"'".concat(href, "'\"]");
  } else {
    href += "/";
    hrefSearch += "," + "a[href*=\"'".concat(href, "'\"]");
  }
  var menuElem = menu.find(hrefSearch);
  menuElem.parent().addClass("active");
  menuElem.parents("li.dropdown").addClass("active");
  menuElem.closest(".navbar-inner").hide();
};
exports.ActivateMenuItem = ActivateMenuItem;
var MenuComponent = {
  template: "\n\t<nav class=\"navbar-inner\" ng-style=\"$ctrl.navbarStyle\">\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t<li ng-repeat-start=\"menuItem in $ctrl.menuCtx.items\" class=\"dropdown\" ng-class=\"{'active': menuItem.selected}\" ng-if=\"menuItem.dropDownMenu\">\n\t\t\t\t<a data-toggle=\"dropdown\" href=\"javascript:void(0)\" ng-click=\"$ctrl.toggleMobileMenuItem($event)\">\n\t\t\t\t\t{{menuItem.title}}\n\t\t\t\t</a>\n\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t<li ng-repeat=\"tabItem in menuItem.tabs\" ng-class=\"{'active': tabItem.selected}\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" ng-click=\"$ctrl.selectTab(tabItem)\">{{tabItem.title}}</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"divider\" ng-if=\"!$first\" ng-repeat-start=\"submenuItem in menuItem.submenu | filter:{ hasTabItems: true}\"></li>\n\t\t\t\t\t<li class=\"dropdown-header\">&nbsp;--&nbsp;{{submenuItem.title}}&nbsp;--&nbsp;</li>\n\t\t\t\t\t<li ng-repeat-end=\"\" ng-repeat=\"tabItem in submenuItem.tabs\" ng-class=\"{'active': tabItem.selected}\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" ng-click=\"$ctrl.selectTab(tabItem)\">{{tabItem.title}}</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li ng-repeat-end=\"\" ng-repeat=\"tabItem in menuItem.tabs\" ng-class=\"{'active': tabItem.selected}\" ng-if=\"!menuItem.dropDownMenu && menuItem.hasTabItems\">\n\t\t\t\t<a href=\"javascript:void(0)\" ng-click=\"$ctrl.selectTab(tabItem)\">{{tabItem.title}}</a>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>",
  selector: "appMenu",
  controller: MenuComponentController
};
exports.MenuComponent = MenuComponent;
var MobileMenuComponentController = /*#__PURE__*/function () {
  MobileMenuComponentController.$inject = ["menuActivateService"];
  /*@ngInject*/
  function MobileMenuComponentController(menuActivateService) {
    _classCallCheck(this, MobileMenuComponentController);
    this.menuActivateService = menuActivateService;
  }
  _createClass(MobileMenuComponentController, [{
    key: "title",
    get: function get() {
      var _a, _b, _c;
      return (_c = (_b = (_a = this.menuActivateService) === null || _a === void 0 ? void 0 : _a.menuCtx) === null || _b === void 0 ? void 0 : _b.menuItemInfo) === null || _c === void 0 ? void 0 : _c.title;
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.menuActivateService.toggleMobileMenu();
    }
  }]);
  return MobileMenuComponentController;
}();
var MobileMenuComponent = {
  template: "\n\t\t\t<div class=\"btn-menu visible-scr-sm\" ng-click=\"$ctrl.toggleMenu()\">\n\t\t\t\t<div class=\"btn-menu-body\">\n\t\t\t\t\t<span class=\"icon-reorder\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"btn-menu-text\">\n\t\t\t\t\t{{$ctrl.title}}\n\t\t\t\t</div>\n\t\t\t</div>\t",
  selector: "appMobileMenu",
  controller: MobileMenuComponentController
};
exports.MobileMenuComponent = MobileMenuComponent;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doNavigate = exports.SetSelectedTab = exports.SetSelectedMenu = void 0;
var _commonLegacy = __webpack_require__(5);
var _common = __webpack_require__(14);
var SetSelectedTab = function SetSelectedTab(tbID, url) {
  var form = document.forms["MenuForm"];
  if (!form) {
    return;
  }
  if (url.length == 0) {
    $.show.message("В процессе разработки...");
    return;
  }
  if (typeof window.AngularNavigateHandler === "function") {
    window.isHaveToLogout = false;
    window.AngularNavigateHandler(url).then(function () {
      return doNavigate(tbID, url);
    }, function () {});
    return true;
  }
  (0, _commonLegacy.checkForChanges)().then(function () {
    return doNavigate(tbID, url);
  });
};
exports.SetSelectedTab = SetSelectedTab;
var doNavigate = function doNavigate(tbID, url) {
  var form = document.forms["MenuForm"];
  if (url.indexOf("tab:") === 0) {
    var clearUrl = url.substring(4);
    (0, _common.openTab)(clearUrl, "tab_" + tbID);
    return;
  }
  if (url.indexOf("window:") === 0) {
    var _clearUrl = url.substring(7);
    var wndto = tbID === 66 ? "_staffAttest" : tbID.toString();
    (0, _common.openPopupWindow)(wndto, _clearUrl, 1024, 800);
    return;
  }
  if (tbID === 56) {
    url = (!url.match(/\/$/) ? url + "/" : url) + "?SchoolYearId=" + appContext.yearId + "&UserId=" + appContext.userId;
    (0, _common.openPopupWindow)("_qualityAssessmentAnalytics", url, 950, 660);
    return;
  }
  if (tbID === 208) {
    url = "".concat(!url.match(/\/$/) ? url + "/" : url, "?EMId=").concat(appContext.emId, "&UserId=").concat(appContext.userId, "&GlobalYearId=").concat(appContext.globalYearId);
    (0, _common.openPopupWindow)("_qualityAssessmentAnalyticsEM", url, 950, 660);
    return;
  }
  form.elements["TabItem"].value = tbID;
  form.action = url;
  window.isHaveToLogout = false;
  form.submit();
  return;
};
exports.doNavigate = doNavigate;
var SetSelectedMenu = function SetSelectedMenu(miID, url) {
  var form = document.forms["MenuForm"];
  if (!form) {
    return;
  }
  (0, _commonLegacy.checkForChanges)().then(function () {
    form.elements["MenuItem"].value = miID;
    form.elements["TabItem"].value = 0;
    form.action = url;
    window.isHaveToLogout = false;
    return form.submit();
  });
  return false;
};
exports.SetSelectedMenu = SetSelectedMenu;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeTracker = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ChangeTracker = /*#__PURE__*/function () {
  function ChangeTracker($dialogs) {
    _classCallCheck(this, ChangeTracker);
    this.$dialogs = $dialogs;
  }
  _createClass(ChangeTracker, [{
    key: "dataWasChanged",
    value: function dataWasChanged(context) {
      if (context) {
        context.prop("dataWereChanged", true);
      } else {
        window.dataWereChanged = true;
      }
    }
  }, {
    key: "clearDataChanges",
    value: function clearDataChanges(context) {
      if (context) {
        context.prop("dataWereChanged", false);
      } else {
        window.dataWereChanged = false;
      }
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged(context) {
      if (context) {
        return context.prop("dataWereChanged");
      }
      return window.dataWereChanged;
    }
  }, {
    key: "check",
    value: function check(context) {
      if (!this.isDataChanged(context)) {
        return Promise.resolve();
      }
      return this.$dialogs.confirm(language.Generic.Common.kDataWereChanged);
    }
  }]);
  return ChangeTracker;
}();
exports.ChangeTracker = ChangeTracker;
ChangeTracker.$inject = ["$dialogs"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextService = void 0;
var _baseRepository = __webpack_require__(19);
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
var ContextService = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ContextService, _BaseRepository);
  var _super = _createSuper(ContextService);
  function ContextService() {
    _classCallCheck(this, ContextService);
    return _super.apply(this, arguments);
  }
  _createClass(ContextService, [{
    key: "getContext",
    value: function getContext() {
      return this.$http.get("/webapi/context").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getYears",
    value: function getYears(take) {
      var params = {};
      if (take) {
        params.take = take;
      }
      return this.$http.get("/webapi/context/years", {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudents",
    value: function getStudents(config) {
      return this.$http.get("/webapi/context/students", config).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "changeYear",
    value: function changeYear(yearId) {
      var postData = '=' + yearId;
      var settings = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      return this.$http.post("/webapi/context/year", postData, settings).then(function (response) {
        return {
          page: response.headers("page")
        };
      }, this.handleError);
    }
  }, {
    key: "isYearTransitionState",
    value: function isYearTransitionState(appContext) {
      return this.getYears(2).then(function (years) {
        var futureYear = years.find(function (y) {
          return y.closed == "Future";
        });
        var openYear = years.find(function (y) {
          return y.closed == "Open";
        });
        if (!futureYear) {
          return false;
        }
        return openYear.id == parseInt(appContext.yearId);
      });
    }
  }]);
  return ContextService;
}(_baseRepository.BaseRepository);
exports.ContextService = ContextService;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(10);
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsProvider = exports.PfdoIntegrationType = void 0;
var ServerSettingsInfo = _interopRequireWildcard(__webpack_require__(21));
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContext = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PageContext = /*#__PURE__*/function () {
  PageContext.$inject = ["changeTracker", "$q", "$dialogs", "$document"];
  /*@ngInject*/
  function PageContext(changeTracker, $q, $dialogs, $document) {
    _classCallCheck(this, PageContext);
    this.changeTracker = changeTracker;
    this.$q = $q;
    this.$dialogs = $dialogs;
    this.$document = $document;
    this.title = "";
    this._tabItem = 0;
  }
  _createClass(PageContext, [{
    key: "tabItem",
    get: function get() {
      return this._tabItem;
    },
    set: function set(newValue) {
      this._tabItem = newValue || 0;
      this.$document[0].forms["refreshfix"].TabItem.value = this._tabItem;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.title = "";
      this.help = "";
      this.parent = null;
      this.leaveConfirmFunc = null;
      this.back = null;
    }
  }, {
    key: "confirmAndLeave",
    value: function confirmAndLeave(leave) {
      if (this.leaveConfirmFunc) {
        this.leaveConfirmFunc(leave);
        return;
      }
      this.checkForChanges().then(leave);
    }
  }, {
    key: "checkForChanges",
    value: function checkForChanges() {
      return !this.changeTracker.isDataChanged() ? this.$q.when() : this.$dialogs.confirm(language.Generic.Common.kDataWereChanged);
    }
  }]);
  return PageContext;
}();
exports.PageContext = PageContext;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintExportService = void 0;
var _common = __webpack_require__(14);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PrintExportService = /*#__PURE__*/function () {
  function PrintExportService($http, $timeout, $q, $compile, $rootScope, appContext) {
    _classCallCheck(this, PrintExportService);
    this.$http = $http;
    this.$timeout = $timeout;
    this.$q = $q;
    this.$compile = $compile;
    this.$rootScope = $rootScope;
    this.appContext = appContext;
  }
  _createClass(PrintExportService, [{
    key: "loadTemplate",
    value: function loadTemplate(templPath) {
      var promise = this.$http.get(templPath);
      return promise;
    }
  }, {
    key: "compileTemplate",
    value: function compileTemplate(template, model) {
      var _this = this;
      var withStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      //копия скоупа
      var scope = this.$rootScope.$new();
      var content = this.$compile(template)(scope);
      scope = angular.extend(scope, model);
      var defer = this.$q.defer();
      this.$timeout(function () {
        _this.wrapContent(content, withStyles).then(function (html) {
          return defer.resolve(html);
        });
      });
      return defer.promise;
    }
    //оборачивает в html->body
  }, {
    key: "wrapContent",
    value: function wrapContent(content) {
      var withStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (withStyles) {
        var jqContent = $(content);
        var printUtils = jqContent.printUtils();
        return printUtils.getPrintHtml();
      }
      var htmlNode = $('<html />');
      var head = $('<head />');
      var body = $('<body />');
      content.appendTo(body);
      head.appendTo(htmlNode);
      body.appendTo(htmlNode);
      var html = htmlNode.wrap('<tag>').parent().html();
      return Promise.resolve(html);
    }
  }, {
    key: "openNewWindow",
    value:
    //создает новое окно браузера
    function openNewWindow() {
      var defDiaryWinOpts = {
        name: "print_diary",
        specs: "status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=790,height=590",
        winChild: null
      };
      (0, _common.windowOpen)(defDiaryWinOpts);
      return defDiaryWinOpts.winChild;
    }
  }, {
    key: "print",
    value:
    //печать
    function print(templatePath, model) {
      var _this2 = this;
      var withStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.loadTemplate(templatePath).then(function (response) {
        var template = response.data;
        var promise = _this2.compileTemplate(template, model, withStyles);
        return promise;
      }).then(function (html) {
        var printWindow = _this2.openNewWindow();
        var printDocument = printWindow.document;
        printDocument.open();
        printDocument.writeln(html);
        printDocument.title = _this2.appContext.productName;
        printDocument.close();
      })["catch"](function (err) {
        console.error(err);
      });
    }
    //экспорт в EXCEL
  }, {
    key: "export",
    value: function _export(templatePath, model, options) {
      var _this3 = this;
      this.loadTemplate(templatePath).then(function (response) {
        var template = response.data;
        var promise = _this3.compileTemplate(template, model);
        return promise;
      }).then(function (data) {
        var content = $(data);
        var printUtils = content.printUtils();
        printUtils.toExcel(options);
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }]);
  return PrintExportService;
}();
exports.PrintExportService = PrintExportService;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppLoaderProvider = exports.AppLoader = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppLoader = /*#__PURE__*/function () {
  function AppLoader(preloader) {
    _classCallCheck(this, AppLoader);
    this.preloader = preloader;
    this.displayed = false;
    this.preloader.css("height", window.innerHeight - $("div.header").height() - $("h1.title").outerHeight() - 20);
    $(window).on("resize", function () {
      preloader.css("height", window.innerHeight - $("div.header").height() - $("h1.title").outerHeight() - 20);
    });
  }
  _createClass(AppLoader, [{
    key: "show",
    value: function show() {
      if (!this.preloader.length || !$.contains(document, this.preloader[0])) {
        this.preloader = $(".apploader");
      }
      this.preloader.css("display", "block");
      this.preloader.find(".placeholder").show();
      this.preloader.css({
        opacity: 1,
        "z-index": 999
      });
      this.displayed = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this = this;
      $(".ns-cloak").removeClass("ns-cloak");
      this.preloader.css({
        opacity: 0
      });
      this.displayed = false;
      setTimeout(function () {
        deferredResLoader.ready(function () {
          if (floatingScroll) {
            floatingScroll.scanTables();
          }
        });
        _this.preloader.css("z-index", -99999);
        _this.preloader.css("display", "none");
      }, 150);
    }
  }, {
    key: "hideArrows",
    value: function hideArrows() {
      this.preloader.find(".placeholder").hide();
    }
  }]);
  return AppLoader;
}();
exports.AppLoader = AppLoader;
var AppLoaderProvider = /*#__PURE__*/function () {
  function AppLoaderProvider() {
    _classCallCheck(this, AppLoaderProvider);
  }
  _createClass(AppLoaderProvider, [{
    key: "$get",
    value: function $get() {
      var preloader = $(".apploader");
      return new AppLoader(preloader);
    }
  }]);
  return AppLoaderProvider;
}();
exports.AppLoaderProvider = AppLoaderProvider;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggerFactoryProvider = exports.LoggerFactory = exports.Logger = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var supplant = function supplant(str, o) {
  return str.replace(/\{([^{}]*)\}/g, function (a, b) {
    var r = o[b];
    return typeof r === "string" || typeof r === "number" ? r : a;
  });
};
var getFormattedTimestamp = function getFormattedTimestamp(date) {
  return supplant("{0}:{1}:{2}:{3}", [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]);
};
var Logger = /*#__PURE__*/function () {
  function Logger($log, context, config) {
    _classCallCheck(this, Logger);
    this.$log = $log;
    this.context = context;
    this.config = config;
  }
  _createClass(Logger, [{
    key: "_log",
    value: function _log(originalFn, args) {
      if (!this.config.enabled) {
        return;
      }
      var now = getFormattedTimestamp(new Date());
      var message = "",
        supplantData = [];
      switch (args.length) {
        case 1:
          message = supplant("{0} - {1}: {2}", [now, this.context, args[0]]);
          break;
        case 3:
          supplantData = args[2];
          message = supplant("{0} - {1}::{2}(\'{3}\')", [now, this.context, args[0], args[1]]);
          break;
        case 2:
          if (typeof args[1] === "string") {
            message = supplant("{0} - {1}::{2}(\'{3}\')", [now, this.context, args[0], args[1]]);
          } else {
            supplantData = args[1];
            message = supplant("{0} - {1}: {2}", [now, this.context, args[0]]);
          }
          break;
      }
      this.$log[originalFn].call(null, supplant(message, supplantData));
    }
  }, {
    key: "log",
    value: function log() {
      this._log("log", arguments);
    }
  }, {
    key: "info",
    value: function info() {
      this._log("info", arguments);
    }
  }, {
    key: "warn",
    value: function warn() {
      this._log("warn", arguments);
    }
  }, {
    key: "debug",
    value: function debug() {
      this._log("debug", arguments);
    }
  }, {
    key: "error",
    value: function error() {
      this._log("error", arguments);
    }
  }]);
  return Logger;
}();
exports.Logger = Logger;
var LoggerFactory = /*#__PURE__*/function () {
  function LoggerFactory($log, config) {
    _classCallCheck(this, LoggerFactory);
    this.$log = $log;
    this.config = config;
  }
  _createClass(LoggerFactory, [{
    key: "getInstance",
    value: function getInstance(context) {
      return new Logger(this.$log, context, this.config);
    }
  }]);
  return LoggerFactory;
}();
exports.LoggerFactory = LoggerFactory;
var LoggerFactoryProvider = /*#__PURE__*/function () {
  function LoggerFactoryProvider() {
    _classCallCheck(this, LoggerFactoryProvider);
    this.config = {
      enabled: false
    };
  }
  _createClass(LoggerFactoryProvider, [{
    key: "$get",
    value: function $get($log) {
      return new LoggerFactory($log, this.config);
    }
  }]);
  return LoggerFactoryProvider;
}();
exports.LoggerFactoryProvider = LoggerFactoryProvider;
LoggerFactoryProvider.prototype.$get.$inject = ["$log"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadFile = void 0;
var tryReadBlobAsJson = function tryReadBlobAsJson(blob) {
  return new Promise(function (resolve, reject) {
    try {
      var reader = new FileReader();
      reader.onloadend = function () {
        var responseText = reader.result;
        if (!responseText) {
          resolve(null);
          return;
        }
        try {
          var responseJson = JSON.parse(responseText);
          if (!responseJson) {
            resolve(null);
          }
          resolve(responseJson);
        } catch (e) {
          resolve(null);
        }
      };
      reader.readAsText(blob);
    } catch (e) {
      return resolve(null);
    }
  });
};
var downloadFile = function downloadFile(url, options) {
  "use strict";

  if (!options) {
    options = {};
  }
  var data = null;
  if (options.data && options.method === "post") {
    options.contentype = "application/json";
    data = JSON.stringify(options.data);
  }
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method || "GET", url, true);
    xhr.setRequestHeader("AT", window.appContext.at);
    xhr.setRequestHeader("responseType", "arraybuffer");
    xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
    xhr.responseType = "blob";
    if (options.contentype) {
      xhr.setRequestHeader("Content-type", options.contentype);
    }
    xhr.onload = function (e) {
      if (xhr.status && xhr.status >= 200 && xhr.status < 300) {
        var responseData = xhr.response;
        var filename = options && options.filename || decodeURIComponent(xhr.getResponseHeader("filename"));
        var mimeType = xhr.getResponseHeader("content-type");
        var blob = new Blob([responseData], {
          type: mimeType
        });
        saveAs(blob, filename);
        resolve(xhr);
      } else if (xhr.status && xhr.status >= 500 && xhr.status < 600) {
        $.show.error("В данный момент файловое хранилище, на котором расположен файл, недоступно. Пожалуйста, повторите попытку позднее. (" + xhr.status + ")");
        reject(xhr);
      } else {
        tryReadBlobAsJson(xhr.response).then(function (response) {
          if (response && !response.message && response.status == 404) {
            $.show.error(language.Generic.Common.kAttachmentFileNotFound);
          } else {
            $.show.error(response && response.message || language.Generic.Common.kUnexpErr);
          }
        });
        reject(xhr);
      }
    };
    xhr.onerror = function () {
      var errorMessageText = this.status === 0 ? "Нет доступа для получения файла" : 'Ошибка ' + this.status + ' при получении файла';
      $.show.error(errorMessageText);
      reject(xhr);
    };
    xhr.send(data);
  });
};
exports.downloadFile = downloadFile;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExceptionHandler = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ExceptionHandler = /*#__PURE__*/function () {
  function ExceptionHandler($log, $appLoader) {
    _classCallCheck(this, ExceptionHandler);
    this.$log = $log;
    this.$appLoader = $appLoader;
  }
  _createClass(ExceptionHandler, [{
    key: "handleError",
    value: function handleError(exception, cause) {
      this.$log.error(exception, cause);
      if (this.$appLoader.displayed) {
        //если отображается стрелки - отображаем ошибку сразу
        //let $dialogs = $injector.get('$dialogs')
        //$dialogs.error("Неожиданная ошибка", exception.message);
        $.show.error(exception.message || language.Generic.Common.kUnexpErr);
      }
    }
  }]);
  return ExceptionHandler;
}();
exports.ExceptionHandler = ExceptionHandler;
ExceptionHandler.$inject = ["$log", "$appLoader"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackChangesDirective = exports.StrictlyMaxValueDirective = exports.SaveStateDirective = exports.OnlyDigitsValidationDirective = exports.OnlyDigitsDirective = exports.NsLinkifyDirective = exports.NsInputAllowedLengthDirective = exports.NsDateModelDirective = exports.NsDateModel2Directive = exports.IndeterminateDirective = exports.HighliteInputTableRowDirective = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*@ngInject*/
var TrackChangesDirective = function TrackChangesDirective(changeTracker) {
  return {
    link: function link(scope, element, attrs) {
      if (attrs.trackChanges == "false") {
        return;
      }
      var modalDialog = $(element).closest("div.modal.fade");
      var isDatepicker = element[0].tagName === "DATE-INPUT-COMPONENT";
      var isUiSelect = $(element).hasClass("ui-select-container");
      var context = modalDialog.length ? modalDialog : undefined;
      var wasChangedFunc = function wasChangedFunc() {
        changeTracker.dataWasChanged(context);
        scope.$applyAsync();
      };
      //костыль для календаря. в момент инициализации вызывается change. см. dateInput.coffee
      var wasChangedDatePicker = function wasChangedDatePicker() {
        var initingCalendar = element.find("div.input-group.date").prop("initingCalendar");
        if (initingCalendar === true) {
          return;
        }
        wasChangedFunc();
      };
      if (isUiSelect) {
        element.on("click", wasChangedFunc);
        element.on("keydown", wasChangedFunc);
      } else if (isDatepicker) {
        element.on("change", wasChangedDatePicker);
      } else {
        element.on("change", wasChangedFunc);
      }
    }
  };
};
TrackChangesDirective.$inject = ["changeTracker"];
exports.TrackChangesDirective = TrackChangesDirective;
var IndeterminateDirective = function IndeterminateDirective() {
  return {
    restrict: "A",
    link: function link(scope, element, attributes) {
      scope.$watch(attributes["ngIndeterminate"], function (value) {
        element.prop("indeterminate", !!value);
      });
    }
  };
};
exports.IndeterminateDirective = IndeterminateDirective;
var HighliteInputTableRowDirective = function HighliteInputTableRowDirective() {
  return {
    restrict: 'A',
    link: function link(scope, element) {
      element.on("blur", "td.input-cell > input", function () {
        var row = $(this).closest("tr");
        row.removeClass("selected");
      });
      element.on("focus", "td.input-cell > input", function () {
        var row = $(this).closest("tr");
        row.addClass("selected");
      });
    }
  };
};
/*@ngInject*/
exports.HighliteInputTableRowDirective = HighliteInputTableRowDirective;
var NsDateModelDirective = function NsDateModelDirective(dateUtils) {
  var toStr = function toStr(dateParam) {
    return dateParam ? dateUtils.date2str(new Date(dateParam)) : null;
  };
  return {
    restrict: 'A',
    scope: {
      date: "=nsDateModel"
    },
    replace: false,
    link: function link(scope, element) {
      var isoDate = scope.date;
      var strDate = toStr(isoDate);
      $(element).val(strDate);
      $(element).on("change", function () {
        var strVal = element.val();
        var date = dateUtils.str2date(strVal);
        if (date) {
          scope.date = date.toISOString();
        } else {
          scope.date = null;
        }
        scope.$apply();
      });
    }
  };
};
NsDateModelDirective.$inject = ["dateUtils"];
exports.NsDateModelDirective = NsDateModelDirective;
/*@ngInject*/
var NsDateModel2Directive = function NsDateModel2Directive($timeout, dateUtils) {
  var toStr = function toStr(dateParam) {
    return dateParam ? dateUtils.date2str(new Date(dateParam)) : null;
  };
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function link(scope, element, attr, ngModel) {
      ngModel.$formatters.push(function (raw) {
        if (raw == null || raw == "") {
          return "";
        }
        if (typeof raw == "string") {
          return toStr(raw);
        }
        var str = dateUtils.date2str(raw);
        return str;
      });
      ngModel.$parsers.push(function (raw) {
        if (raw == null || raw == "") {
          return null;
        }
        var date = dateUtils.str2date(raw);
        return date;
      });
      element.on('paste', function ($event) {
        var data = $event.originalEvent.clipboardData;
        if (typeof data !== "undefined") {
          var pastValue = data.getData("text/plain");
          $timeout(function () {
            ngModel.$setViewValue(pastValue);
          });
          return;
        }
        $timeout(function () {
          var pastValue = element.val();
          ngModel.$setViewValue(pastValue);
        }, 100);
      });
    }
  };
};
NsDateModel2Directive.$inject = ["$timeout", "dateUtils"];
exports.NsDateModel2Directive = NsDateModel2Directive;
var NsLinkifyDirective = function NsLinkifyDirective($timeout) {
  return {
    restrict: "A",
    link: function link(scope, element) {
      var jqElement = $(element);
      $timeout(50).then(function () {
        return jqElement.linkify();
      });
    }
  };
};
/*
 Директива для жестого ограничения вводимых чисел в рамки max
*/
exports.NsLinkifyDirective = NsLinkifyDirective;
var StrictlyMaxValueDirective = function StrictlyMaxValueDirective() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link(scope, element, attrs, ngModel) {
      if (attrs.max) {
        ngModel.$parsers.push(function (value) {
          var maxValue = parseInt(attrs.max);
          if (value || value === 0) {
            if (value > maxValue) {
              ngModel.$setViewValue(maxValue.toString());
              return maxValue.toString();
            }
            return value;
          }
        });
      }
    }
  };
};
exports.StrictlyMaxValueDirective = StrictlyMaxValueDirective;
var OnlyDigitsDirective = function OnlyDigitsDirective() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function (text) {
        if (text === " ") {
          return "";
        }
        var transformedInput = text.replace(/[^0-9,]/g, "");
        if (transformedInput !== text) {
          ngModel.$setViewValue(transformedInput);
          ngModel.$render();
        }
        return transformedInput;
      });
    }
  };
};
/*@ngInject*/
exports.OnlyDigitsDirective = OnlyDigitsDirective;
var OnlyDigitsValidationDirective = function OnlyDigitsValidationDirective($parse) {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link(scope, element, attrs, ngModel) {
      var enabled = $parse(attrs.onlyDigitsValidation)(scope);
      if (enabled) {
        ngModel.$validators.onlydigits = function (modelValue, viewValue) {
          if (ngModel.$isEmpty(modelValue)) {
            return true;
          }
          return /^\d+$/.test(modelValue);
        };
      }
    }
  };
};
OnlyDigitsValidationDirective.$inject = ["$parse"];
exports.OnlyDigitsValidationDirective = OnlyDigitsValidationDirective;
OnlyDigitsValidationDirective.selector = "onlyDigitsValidation";
//проверяет длину поля на список возможных
/*@ngInject*/
var NsInputAllowedLengthDirective = function NsInputAllowedLengthDirective($parse) {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link(scope, element, attrs, ngModel) {
      var lengths = $parse(attrs.nsInputAllowedLength)(scope);
      if (!lengths) {
        return;
      }
      ngModel.$validators.allowedlength = function (modelValue, viewValue) {
        if (ngModel.$isEmpty(modelValue)) {
          return true;
        }
        return lengths.some(function (l) {
          return modelValue.length == l;
        });
      };
    }
  };
};
NsInputAllowedLengthDirective.$inject = ["$parse"];
exports.NsInputAllowedLengthDirective = NsInputAllowedLengthDirective;
NsInputAllowedLengthDirective.selector = "nsInputAllowedLength";
var SaveStateDirective = function SaveStateDirective() {
  return {
    restrict: 'A',
    link: function link(scope, element, attributes) {
      var supportLocalStorage = function supportLocalStorage() {
        try {
          return window.localStorage && _typeof(window['localStorage']) === 'object';
        } catch (error) {
          return false;
        }
      };
      var simpleHash = function simpleHash(str) {
        var hash = 0;
        if (str.length === 0) {
          return hash;
        }
        for (var i = 0, end = str.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
          var _char = str.charCodeAt(i);
          hash = (hash << 5) - hash + _char;
          hash = hash & hash;
        }
        return hash;
      };
      var id = attributes.ngModel;
      var url = /^https?:\/\/([^?#]*)/.exec(document.URL)[1];
      // Ключ берётся через хэш функцию, что бы уменьшить вероятность пересечения ключей
      var key = "H" + simpleHash(url + "|" + attributes.ngModel);
      //console.log id
      var get, set;
      if (supportLocalStorage()) {
        get = function get() {
          return localStorage[key];
        };
        set = function set(value) {
          return localStorage[key] = value;
        };
      } else {
        get = function get() {
          return $.cookie(key);
        };
        set = function set(value) {
          return $.cookie(key, value);
        };
      }
      var load = function load() {
        scope;
        var value = get();
        if (value && "undefined" !== value) {
          return eval("scope." + id + "=" + value);
        }
      };
      var save = function save() {
        scope;
        var value = JSON.stringify(eval("scope." + id));
        return set(value);
      };
      load();
      element.on('change', function (event) {
        return setTimeout(save, 1);
      }); // Отложить выполнение в конец стека обработчиков
    }
  };
};
exports.SaveStateDirective = SaveStateDirective;
SaveStateDirective.selector = "saveState";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrustedFilter = exports.TabToNbspFilter = exports.NsTimeShortFilter = exports.NsTimeFilter = exports.NsDateTimeSsFilter = exports.NsDateTimeFilter = exports.NsDateMonthFilter = exports.NsDateFilter = exports.NewLineToBrFilter = exports.LanguageFilter = exports.Float2Str = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*@ngInject*/
var NsDateFilter = function NsDateFilter(dateUtils) {
  return function (dt) {
    if (!dt) {
      return "";
    }
    var date;
    if (typeof dt == "string") {
      date = new Date(dt);
    } else {
      date = dt;
    }
    return dateUtils.date2str(date);
  };
};
NsDateFilter.$inject = ["dateUtils"];
exports.NsDateFilter = NsDateFilter;
/*@ngInject*/
var NsDateTimeFilter = function NsDateTimeFilter(dateUtils) {
  return function (input) {
    if (!input) {
      return "";
    }
    var date = new Date(input);
    var ddmmyyyy = dateUtils.date2str(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var hoursStr = hours < 10 ? '0' + hours : hours;
    var minutesStr = minutes < 10 ? '0' + minutes : minutes;
    var hhmm = "".concat(hoursStr, ":").concat(minutesStr);
    var res = "".concat(ddmmyyyy, " ").concat(hhmm);
    return res;
  };
};
NsDateTimeFilter.$inject = ["dateUtils"];
exports.NsDateTimeFilter = NsDateTimeFilter;
/*@ngInject*/
var NsDateTimeSsFilter = function NsDateTimeSsFilter(dateUtils) {
  return function (input) {
    if (!input) {
      return "";
    }
    var date;
    if (typeof input == "string") {
      date = new Date(input);
    } else {
      date = input;
    }
    var ddmmyyyy = dateUtils.date2str(date);
    var hhmmss = dateUtils.time2Str_ss(date);
    var res = "".concat(ddmmyyyy, " ").concat(hhmmss);
    return res;
  };
};
NsDateTimeSsFilter.$inject = ["dateUtils"];
exports.NsDateTimeSsFilter = NsDateTimeSsFilter;
/*@ngInject*/
var NsDateMonthFilter = function NsDateMonthFilter(dateUtils) {
  return function (dt) {
    if (!dt) {
      return "";
    }
    var date;
    if (typeof dt == "string") {
      date = dateUtils.asUTCDate(dt);
    } else {
      date = dt;
    }
    return moment(dt).format("MMMM YYYY");
  };
};
NsDateMonthFilter.$inject = ["dateUtils"];
exports.NsDateMonthFilter = NsDateMonthFilter;
/*@ngInject*/
var NsTimeFilter = function NsTimeFilter(dateUtils) {
  return function (input) {
    if (!input) {
      return "";
    }
    var date = new Date(input);
    return dateUtils.time2Str_ss(date);
  };
};
NsTimeFilter.$inject = ["dateUtils"];
exports.NsTimeFilter = NsTimeFilter;
/*@ngInject*/
var NsTimeShortFilter = function NsTimeShortFilter(dateUtils) {
  return function (input) {
    if (!input) {
      return "";
    }
    var date = new Date(input);
    return dateUtils.time2str(date);
  };
};
NsTimeShortFilter.$inject = ["dateUtils"];
exports.NsTimeShortFilter = NsTimeShortFilter;
/*@ngInject*/
var Float2Str = function Float2Str() {
  return function (input, arg1, arg2) {
    if (input == null || typeof input === "undefined") {
      return "";
    }
    var returnValue = input || 0;
    if (arg1 && arg1 == "onlyPositive") {
      if (returnValue == 0 || returnValue == "0") {
        return "";
      }
    }
    var floatVal;
    if (typeof returnValue != "number") {
      floatVal = parseFloat(returnValue);
    } else {
      floatVal = returnValue;
    }
    if (input === 0) {
      return "0";
    }
    var digits;
    if (arg1 && arg1 == "fractDigits") {
      digits = parseInt(arg2 || "2");
    }
    if (digits) {
      returnValue = floatVal.toFixed(digits);
    } else {
      returnValue = floatVal.toString();
    }
    returnValue = returnValue.replace('.', ',');
    return returnValue;
  };
};
/*@ngInject*/
exports.Float2Str = Float2Str;
var LanguageFilter = function LanguageFilter(language) {
  return function (keyChain) {
    if (!keyChain) {
      throw "language path is not set";
    }
    var separator = ".";
    var elements = keyChain.split(separator);
    if (elements[0] === "language") {
      elements = elements.slice(1);
    }
    var lng = language;
    var _iterator = _createForOfIteratorHelper(elements),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elm = _step.value;
        lng = lng[elm];
        if (!lng) {
          throw "language element ".concat(keyChain, " not found");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return lng;
  };
};
LanguageFilter.$inject = ["language"];
exports.LanguageFilter = LanguageFilter;
/*@ngInject*/
var NewLineToBrFilter = function NewLineToBrFilter($sanitize) {
  return function (input) {
    input = (input + '').replace(/(\r\n|\n\r|\r|\n|&#10;&#13;|&#13;&#10;|&#10;|&#13;)/g, '<br>' + '$1');
    return $sanitize(input);
  };
};
NewLineToBrFilter.$inject = ["$sanitize"];
exports.NewLineToBrFilter = NewLineToBrFilter;
/*@ngInject*/
var TabToNbspFilter = function TabToNbspFilter() {
  return function (input) {
    if (input && input.startsWith("\\t")) {
      input = input.replace(/\\t/g, String.fromCharCode(160) + String.fromCharCode(160));
    }
    return input;
  };
};
/*@ngInject*/
exports.TabToNbspFilter = TabToNbspFilter;
var TrustedFilter = function TrustedFilter($sce) {
  return function (html) {
    return $sce.trustAsHtml(_.unescape(html));
  };
};
TrustedFilter.$inject = ["$sce"];
exports.TrustedFilter = TrustedFilter;

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetCityController = void 0;
var _menu = __webpack_require__(15);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var NetCityController = /*#__PURE__*/_createClass( /*@ngInject*/["$scope", "$location", "contextService", "$dialogs", "$longWork", "$q", "changeTracker", "pageContext", function NetCityController($scope, $location, contextService, $dialogs, $longWork, $q, changeTracker, pageContext) {
  _classCallCheck(this, NetCityController);
  $scope.page = pageContext;
  //здесь пока заглушки. 
  //заполнение пока ведется непосредственно в тех экранах где нужен данный контекст.
  //в последствии это должно загружаться вместе со всеми остальными данными (меню, текущая организация, и т.д.)
  $scope.context = {
    students: null,
    student: null
  };
  var cleanUrl = function cleanUrl(url) {
    return url.replace(/[/]?$/gm, "");
  };
  $scope.confirmAndLeave = function (leave) {
    if (pageContext.leaveConfirmFunc) {
      pageContext.leaveConfirmFunc(leave);
      return;
    }
    $scope.checkForChanges().then(leave);
  };
  $scope.checkForChanges = function () {
    return !changeTracker.isDataChanged() ? $q.when() : $dialogs.confirm(language.Generic.Common.kDataWereChanged);
  };
  $scope.showYearsTab = function () {
    return !pageContext.parent || pageContext.showYearTabs;
  };
  $scope.changeYear = function (yearId) {
    $longWork.show();
    contextService.changeYear(yearId).then(function (result) {
      var page = result.page || window.location.pathname;
      window.postTo(page);
    });
  };
  var nowApp = $(document).find("base").attr("href");
  //навигация через меню (общее. используется перед базовой логикой ухода со страницы)
  window.AngularNavigateHandler = function (url) {
    if (url.indexOf(nowApp) === 0) {
      //навигация через меню (в рамках текущего модуля)
      var clearedRoute = "/".concat(url.replace(nowApp, ""));
      if (cleanUrl($location.url()) !== cleanUrl(url)) {
        window.ChangeAngularRoute(clearedRoute, url);
      }
      //отклоняем базовую навигацию - редирект
      return Promise.reject();
    }
    //проверяем наличие изменений - выполням навигацию
    return new Promise(function (resolve, reject) {
      $scope.confirmAndLeave(resolve);
    });
  };
  window.ChangeAngularRoute = function (url, full) {
    if (!url.endsWith("/") && url.indexOf("?") === -1) {
      url += "/";
    }
    var search = null;
    var queryStart = url.indexOf("?");
    if (queryStart != -1) {
      var queryString = url.substring(queryStart + 1);
      url = url.substring(0, queryStart);
      var queryData = queryString.split("&");
      search = {};
      var _iterator = _createForOfIteratorHelper(queryData),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var keyValue = _step.value;
          var data = keyValue.split("=");
          search[data[0]] = data[1];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    $scope.confirmAndLeave(function () {
      $location.path(url);
      $location.search(search || {});
      if (!$scope.$$phase) {
        $scope.$apply();
      }
      (0, _menu.ActivateMenuItem)(full);
    });
  };
  window.ShowHelp = function () {
    var helpPage = window.location.pathname.replace("/angular/", "");
    helpPage = helpPage.replace(/[0-9]|\//g, "_").split("_").filter(function (item) {
      return item !== "";
    }).join("_");
    helpPage = "/help/".concat(helpPage, ".htm");
    if ($scope.page.help || pageContext.help) {
      helpPage = $scope.page.help || pageContext.help;
    }
    window.openPopupWindow("_help", helpPage, 950, 660);
  };
}]);
exports.NetCityController = NetCityController;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterPanelComponent = void 0;
var _filterpanel = __webpack_require__(33);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FilterPanelController = /*#__PURE__*/function () {
  FilterPanelController.$inject = ["$scope", "$element", "$http", "$longWork", "$dialogs"];
  /*@ngInject*/
  function FilterPanelController($scope, $element, $http, $longWork, $dialogs) {
    _classCallCheck(this, FilterPanelController);
    this.$scope = $scope;
    this.$element = $element;
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.$element.addClass("filters-panel");
    this.$element.css("display", "block");
    this.filterPanelRepository = new _filterpanel.FilterPanelRepository($http, $dialogs, $longWork);
  }
  _createClass(FilterPanelController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      if (!this.fpSettings.styles || this.fpSettings.styles.compact) {
        this.$element.addClass("filters-panel-compact");
      }
      if (!this.fpSettings.info && !this.fpSettings.sources && this.fpSettings.url) {
        this.filterPanelRepository.getFpInfo(this.fpSettings.url).then(function (preparedFp) {
          _this.fpSettings.info = preparedFp.filterPanel;
          _this.fpSettings.sources = preparedFp.filterSources;
          _this.init();
        });
        return;
      }
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var initFiltersUrl = this.fpSettings.initUrl || this.fpSettings.url;
      var filterPanel = new _filterpanel.FilterPanel(this.$longWork, this.$dialogs, this.filterPanelRepository, this.$element, this.fpSettings.info, this.fpSettings.sources, initFiltersUrl, true, null, this.fpSettings.styles);
      if (this.filterPanel && this.filterPanel.next) {
        this.filterPanel.next(filterPanel);
      } else {
        this.filterPanel = filterPanel;
      }
      if (this.fpSettings.events && this.fpSettings.events.ready) {
        filterPanel.ready(this.fpSettings.events.ready);
      }
      if (this.fpSettings.events && this.fpSettings.events.canChange) {
        filterPanel.canChange = this.fpSettings.events.canChange;
      }
      if (this.fpSettings.events && this.fpSettings.events.emptyChoice) {
        filterPanel.emptyChoice(this.fpSettings.events.emptyChoice);
      }
      if (this.fpSettings.values) {
        this.setValues();
      }
      this.$scope.$applyAsync(function () {
        filterPanel.initPanel();
      });
    }
  }, {
    key: "setValues",
    value: function setValues() {
      var _this2 = this;
      var sources = this.fpSettings.sources;
      var _loop = function _loop(filterId) {
        var value = _this2.fpSettings.values[filterId];
        var source = sources.find(function (s) {
          return s.filterId == filterId;
        });
        if (!source) {
          return "continue";
        }
        source.defaultValue = value;
      };
      for (var filterId in this.fpSettings.values) {
        var _ret = _loop(filterId);
        if (_ret === "continue") continue;
      }
    }
  }]);
  return FilterPanelController;
}();
var FilterPanelComponent = {
  bindings: {
    filterPanel: "=?fp",
    fpSettings: "=fpSettings"
  },
  selector: "filterPanel",
  controller: FilterPanelController
};
exports.FilterPanelComponent = FilterPanelComponent;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterPanelRepository = exports.FilterPanel = void 0;
var _filterpanel = __webpack_require__(34);
var _list = __webpack_require__(35);
var _datetange = __webpack_require__(38);
var _date = __webpack_require__(39);
var _baseRepository = __webpack_require__(19);
var _listrange = __webpack_require__(40);
var _checks = __webpack_require__(41);
var _text = __webpack_require__(42);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
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
var FilterPanelStatus;
(function (FilterPanelStatus) {
  FilterPanelStatus["init"] = "init";
  FilterPanelStatus["emptyChoice"] = "emptyChoice";
  FilterPanelStatus["ready"] = "ready";
})(FilterPanelStatus || (FilterPanelStatus = {}));
;
var FilterPanelRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(FilterPanelRepository, _BaseRepository);
  var _super = _createSuper(FilterPanelRepository);
  function FilterPanelRepository() {
    _classCallCheck(this, FilterPanelRepository);
    return _super.apply(this, arguments);
  }
  _createClass(FilterPanelRepository, [{
    key: "getFpInfo",
    value: function getFpInfo(url) {
      return this.$http.get(url).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "initFilters",
    value: function initFilters(url, ctx, forceInitAllData) {
      var params = {};
      if (forceInitAllData) {
        params.forceInitAllData = true;
      }
      return this.$http.post(url, ctx, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return FilterPanelRepository;
}(_baseRepository.BaseRepository);
exports.FilterPanelRepository = FilterPanelRepository;
var FilterPanel = /*#__PURE__*/function () {
  function FilterPanel($longWork, $dialogs, filterPanelRepository, container, model, sources, initFiltersUrl, lazyInit, checkChanges, filterSize) {
    _classCallCheck(this, FilterPanel);
    this.$longWork = $longWork;
    this.$dialogs = $dialogs;
    this.filterPanelRepository = filterPanelRepository;
    this.container = container;
    this.model = model;
    this.sources = sources;
    this.initFiltersUrl = initFiltersUrl;
    this.checkChanges = checkChanges;
    this.filterSize = filterSize;
    this.filters = [];
    this.handlers_ready = [];
    this.handlers_init = [];
    this.handlers_emptyChoice = [];
    this.template = '<div class="filters-panel form-horizontal"></div>';
    this.emptyChoice = function (handler) {
      this.handlers_emptyChoice.push(handler);
    };
    this.filterSize = this.filterSize || {};
    this.filterSize.label = this.filterSize.label || "control-label col-md-4 col-lg-3 col-sm-4";
    this.filterSize.control = this.filterSize.control || "col-md-8 col-lg-9 col-sm-8";
    if (this.container.hasClass("filters-panel")) {
      this.panel = this.container;
    } else {
      this.panel = $(this.template);
      this.container.append(this.panel);
    }
    if (!lazyInit) {
      this.initPanel();
    }
  }
  _createClass(FilterPanel, [{
    key: "initPanel",
    value: function initPanel() {
      var _this = this;
      this.changeStatus(FilterPanelStatus.init);
      if (this.model === null) {
        this.$dialogs.error("Ошибка инициализации фильтр-панели. Модель не заполнена.");
        return;
      }
      this.model.filters = _.sortBy(this.model.filters, function (item) {
        return item.order;
      });
      var _iterator = _createForOfIteratorHelper(this.model.filters),
        _step;
      try {
        var _loop = function _loop() {
          var filterModel = _step.value;
          var active = true;
          var filterSource = _this.sources.find(function (s) {
            return s.filterId == filterModel.id;
          });
          if (!filterSource) {
            active = false;
          }
          var filterCtrl = _this.buildFilter(filterModel);
          if (filterModel.dependencies) {
            var satisfied = filterCtrl.dependenciesSatisfied();
            if (!satisfied) {
              active = false;
            }
          }
          filterCtrl.appendToPanel(_this.panel);
          if (filterSource) {
            filterCtrl.setSource(filterSource);
          }
          _this.setFilterStatus(filterCtrl);
          _this.filters.push(filterCtrl);
          if (!active) {
            filterCtrl.changeStatus(_filterpanel.FilterStatus.inactive);
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.panel.find(".form-group.aux").insertAfter(this.panel.find('.form-group:last-child'));
      return this.tryReady();
    }
  }, {
    key: "buildFilter",
    value: function buildFilter(filterModel) {
      var _a, _b;
      var withArrows = ((_b = (_a = this.filterSize) === null || _a === void 0 ? void 0 : _a.arrows) === null || _b === void 0 ? void 0 : _b.indexOf(filterModel.id)) > -1;
      switch (filterModel.filterType) {
        case "List":
          return new _list.ListFilter(this.$dialogs, this, filterModel);
        case "List2":
          return new _list.List2Filter(this.$dialogs, this, filterModel);
        case "ListAjax":
          return new _list.ListAjaxFilter(this.$dialogs, this, filterModel);
        case "ListWithArrows":
          return new _list.ListWithArrowsFilter(this.$dialogs, this, filterModel);
        case "DateRange":
          return new _datetange.DateRangeFilter(this.$dialogs, this, filterModel);
        case "Date":
          if (withArrows) {
            return new _date.DateWithArrowsFilter(this.$dialogs, this, filterModel);
          }
          return new _date.DateFilter(this.$dialogs, this, filterModel);
        case "Checks2":
          return new _checks.Checks2Filter(this.$dialogs, this, filterModel);
        case "Checks":
          return new _checks.ChecksFilter(this.$dialogs, this, filterModel);
        case "ListRange":
          return new _listrange.ListRangeFilter(this.$dialogs, this, filterModel);
        case "Text":
          return new _text.TextFilter(this.$dialogs, this, filterModel);
        default:
          this.$dialogs.error("Ошибка инициализации фильтр-панели. Неподдерживаемый тип фильтра " + filterModel.filterType);
          return;
      }
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(status) {
      console.log(status);
      this.panel.removeClass(this.status);
      this.status = status;
      this.panel.addClass(this.status);
      if (this.status === FilterPanelStatus.ready) {
        var fpValues = this.getValues();
        var _iterator2 = _createForOfIteratorHelper(this.handlers_ready),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var handler = _step2.value;
            handler(fpValues);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (this.status === FilterPanelStatus.init) {
        var _iterator3 = _createForOfIteratorHelper(this.handlers_init),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _handler = _step3.value;
            _handler();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      if (this.status === FilterPanelStatus.emptyChoice) {
        var emptyChoiceFilter = this.filters.find(function (ft) {
          return ft.getStatus() === _filterpanel.FilterStatus.emptyChoice;
        });
        var _iterator4 = _createForOfIteratorHelper(this.handlers_emptyChoice),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _handler2 = _step4.value;
            _handler2(emptyChoiceFilter);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "tryReady",
    value: function tryReady() {
      if (!this.checkEmptyChoice()) {
        return this.changeStatus(FilterPanelStatus.ready);
      }
    }
  }, {
    key: "setFilterStatus",
    value: function setFilterStatus(filterCtrl) {
      if (filterCtrl.emptyChoice) {
        if (filterCtrl.model.optionalFlag) {
          return filterCtrl.changeStatus(_filterpanel.FilterStatus.inactive);
        } else {
          return filterCtrl.changeStatus(_filterpanel.FilterStatus.emptyChoice);
        }
      } else {
        return filterCtrl.changeStatus(_filterpanel.FilterStatus.active);
      }
    }
  }, {
    key: "getValues",
    value: function getValues(excludeFilters) {
      var activeFilters = this.filters.filter(function (ft) {
        return ft.getStatus() === _filterpanel.FilterStatus.active;
      });
      if (excludeFilters) {
        activeFilters = activeFilters.filter(function (f) {
          return excludeFilters.findIndex(function (exf) {
            return exf.id === f.id;
          }) === -1;
        });
      }
      var keyValues = activeFilters.map(function (x) {
        return [x.id, x.getChoice()];
      });
      var values = _.object(keyValues);
      return values;
    }
  }, {
    key: "setValues",
    value: function setValues(vals) {
      var _this2 = this;
      var promise = Promise.resolve();
      var _loop2 = function _loop2(filterId) {
        if (vals.hasOwnProperty(filterId)) {
          var filterValue = vals[filterId];
          var filter = _this2.filters.find(function (f) {
            return f.id == filterId;
          });
          promise.then(function () {
            return filter.setChoice(filterValue);
          });
        }
      };
      for (var filterId in vals) {
        _loop2(filterId);
      }
    }
  }, {
    key: "getCtxValues",
    value: function getCtxValues(excludeFilters) {
      var activeFilters = this.filters.filter(function (ft) {
        return ft.getStatus() === _filterpanel.FilterStatus.active;
      });
      if (excludeFilters) {
        activeFilters = activeFilters.filter(function (f) {
          return excludeFilters.findIndex(function (exf) {
            return exf.id === f.id;
          }) === -1;
        });
      }
      return activeFilters.map(function (x) {
        return {
          filterId: x.id,
          filterValue: x.getChoice(),
          filterText: x.getChoiceText()
        };
      });
    }
  }, {
    key: "getTexts",
    value: function getTexts(forFilters) {
      var activeFilters = this.filters.filter(function (ft) {
        return ft.getStatus() === _filterpanel.FilterStatus.active;
      });
      if (forFilters) {
        activeFilters = activeFilters.filter(function (ft) {
          return forFilters.indexOf(ft.id) > -1;
        });
      }
      var keyValues = activeFilters.map(function (x) {
        return [x.id, x.getChoiceText()];
      });
      var texts = _.object(keyValues);
      return texts;
    }
  }, {
    key: "checkChoiceEnabling",
    value: function checkChoiceEnabling() {
      return _.find(this.filters, function (ft) {
        return ft.getChoiceEnabling();
      });
    }
  }, {
    key: "checkEmptyChoice",
    value: function checkEmptyChoice() {
      var emptyFilters = this.filters.filter(function (item) {
        return item.getStatus() === _filterpanel.FilterStatus.active || item.getStatus() === _filterpanel.FilterStatus.emptyChoice;
      });
      var _iterator5 = _createForOfIteratorHelper(emptyFilters),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var emptyFilter = _step5.value;
          if (emptyFilter.emptyChoice && !emptyFilter.model.optionalFlag) {
            this.changeStatus(FilterPanelStatus.emptyChoice);
            return true;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return false;
    }
    //перекрывается через настройки
  }, {
    key: "canChange",
    value: function canChange(filter, value, prevValue) {
      return Promise.resolve(true);
    }
  }, {
    key: "fpSync",
    value: function fpSync(filterSources) {
      var _this3 = this;
      var _iterator6 = _createForOfIteratorHelper(this.filters),
        _step6;
      try {
        var _loop3 = function _loop3() {
          var filterCtrl = _step6.value;
          var active = true;
          var filterModel = filterCtrl.model;
          var filterSource = filterSources.find(function (s) {
            return s.filterId == filterModel.id;
          });
          if (!filterSource) {
            active = false;
          }
          if (filterModel.dependencies) {
            var satisfied = filterCtrl.dependenciesSatisfied();
            if (!satisfied) {
              active = false;
            }
          }
          if (filterSource) {
            filterCtrl.setSource(filterSource);
          }
          _this3.setFilterStatus(filterCtrl);
          if (!active) {
            filterCtrl.changeStatus(_filterpanel.FilterStatus.inactive);
          }
        };
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "reInit",
    value: function reInit(values) {
      var _this4 = this;
      var ctx = {
        selectedData: values || [],
        params: null
      };
      var forceInit = values && values.length && true;
      this.status = FilterPanelStatus.init;
      var fpReInit = this.filterPanelRepository.initFilters(this.initFiltersUrl, ctx, forceInit).then(function (filterSources) {
        _this4.fpSync(filterSources);
        _this4.tryReady();
      });
      return fpReInit;
    }
  }, {
    key: "changedValue",
    value: function changedValue(filter, value, prevValue) {
      var _this5 = this;
      console.log(filter.id + " = " + value);
      if (this.status === FilterPanelStatus.init) {
        return;
      }
      var preSendActionsPromise = Promise.resolve();
      if (this.checkChanges) {
        preSendActionsPromise = this.checkChanges();
      }
      if (filter.getStatus() == _filterpanel.FilterStatus.emptyChoice && value) {
        filter.changeStatus(_filterpanel.FilterStatus.active);
      }
      return preSendActionsPromise.then(function () {
        _this5.changeStatus(FilterPanelStatus.init);
        var dependentFilters = filter.getDependency();
        var ctxValues = _this5.getCtxValues(dependentFilters);
        var ctx = {
          selectedData: ctxValues,
          params: null
        };
        var nextFilters = _.chain(_this5.filters).sortBy(function (ft) {
          return ft.model.order;
        }).filter(function (ft) {
          return ft.model.order > filter.model.order;
        }).value();
        var existNextFilter = false;
        if (!nextFilters) {
          _this5.checkEmptyChoice();
        }
        var _iterator7 = _createForOfIteratorHelper(nextFilters),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var nextFilter = _step7.value;
            if (!nextFilter.model.dependencies) {
              existNextFilter = true;
            } else if (nextFilter.dependenciesSatisfied()) {
              existNextFilter = true;
            } else {
              nextFilter.changeStatus(_filterpanel.FilterStatus.inactive);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        if (!dependentFilters.length || !existNextFilter) {
          _this5.tryReady();
          if (filter.existStateProvider) {
            _this5.filterPanelRepository.initFilters(_this5.initFiltersUrl, ctx);
          }
          return;
        }
        _this5.$longWork.show();
        _this5.filterPanelRepository.initFilters(_this5.initFiltersUrl, ctx)["catch"](function () {
          _this5.$longWork.close();
          _this5.changeStatus(FilterPanelStatus.emptyChoice);
          var _iterator8 = _createForOfIteratorHelper(dependentFilters),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var dependFilter = _step8.value;
              dependFilter.changeStatus(_filterpanel.FilterStatus.inactive);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }).then(function (filterSources) {
          _this5.$longWork.close();
          var _iterator9 = _createForOfIteratorHelper(filterSources),
            _step9;
          try {
            var _loop4 = function _loop4() {
              var filterSrc = _step9.value;
              var filterCtrl = dependentFilters.find(function (ft) {
                return ft.id === filterSrc.filterId && (!ft.model.dependencies || ft.dependenciesSatisfied());
              });
              if (!filterCtrl) {
                return "continue";
              }
              filterCtrl.setSource(filterSrc);
              _this5.setFilterStatus(filterCtrl);
            };
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _ret = _loop4();
              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          var _iterator10 = _createForOfIteratorHelper(nextFilters),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var filterCtrl = _step10.value;
              if (filterCtrl.model.dependencies) {
                var satisfied = filterCtrl.dependenciesSatisfied();
                if (!satisfied) {
                  filterCtrl.changeStatus(_filterpanel.FilterStatus.inactive);
                }
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          _this5.tryReady();
        });
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      var isValid = true;
      this.filters.forEach(function (filter) {
        if (filter.getStatus() !== _filterpanel.FilterStatus.active) {
          return;
        }
        if (!filter.validate) {
          return;
        }
        if (!filter.validate()) {
          isValid = false;
        }
      });
      return isValid;
    }
  }, {
    key: "ready",
    value: function ready(handler) {
      this.handlers_ready.push(handler);
    }
  }, {
    key: "init",
    value: function init(handler) {
      this.handlers_init.push(handler);
    }
  }]);
  return FilterPanel;
}();
exports.FilterPanel = FilterPanel;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusInactive = exports.statusActive = exports.FilterStatus = exports.FilterDependencyResult = exports.DateRange = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FilterStatus;
exports.FilterStatus = FilterStatus;
(function (FilterStatus) {
  FilterStatus["active"] = "active";
  FilterStatus["inactive"] = "inactive";
  FilterStatus["emptyChoice"] = "emptyChoice";
})(FilterStatus || (exports.FilterStatus = FilterStatus = {}));
var statusActive = "active";
exports.statusActive = statusActive;
var statusInactive = "inactive";
exports.statusInactive = statusInactive;
var FilterDependencyResult;
exports.FilterDependencyResult = FilterDependencyResult;
(function (FilterDependencyResult) {
  FilterDependencyResult[FilterDependencyResult["notSatisfy"] = 0] = "notSatisfy";
  FilterDependencyResult[FilterDependencyResult["satisfy"] = 1] = "satisfy";
})(FilterDependencyResult || (exports.FilterDependencyResult = FilterDependencyResult = {}));
//класс описывающий диапазон дат
var DateRange = /*#__PURE__*/function () {
  function DateRange(startDate, endDate) {
    _classCallCheck(this, DateRange);
    this.startDate = startDate;
    this.endDate = endDate;
    this.source = this.toString();
  }
  _createClass(DateRange, [{
    key: "toString",
    value:
    //#представление диапазона в виде строки
    function toString() {
      // #используем штатную сериализацию даты
      // #она приводит дату в utc формат
      // #соответственно в рамках контрола работа с датами проходит с часами: дата (+часовой пояс)
      var ret = "";
      if (this.startDate) ret += JSON.stringify(dateUtils.asUTCDate(this.startDate));
      ret += " - ";
      if (this.endDate) ret += JSON.stringify(dateUtils.asUTCDate(this.endDate));
      return ret.replace(/"/g, "");
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.startDate <= this.endDate;
    }
  }], [{
    key: "parseDate",
    value: function parseDate(str) {
      var strDate = str.substring(0, 19);
      var date;
      if (strDate.length == 19) {
        date = new Date(strDate);
      } else {
        date = dateUtils.str2date(strDate);
      }
      return date;
    }
  }, {
    key: "parseRange",
    value: function parseRange(str) {
      var rangeArr = str.split(" - ");
      var startDate;
      var endDate;
      if (rangeArr[0]) startDate = DateRange.parseDate(rangeArr[0]);
      if (rangeArr[1]) endDate = DateRange.parseDate(rangeArr[1]);
      var range = new DateRange(startDate, endDate);
      range.source = str;
      return range;
    }
  }]);
  return DateRange;
}();
exports.DateRange = DateRange;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListWithArrowsFilter = exports.ListFilter = exports.ListAjaxFilter = exports.List2Filter = void 0;
var _filter = __webpack_require__(36);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var allOptionVal = "-1";
var nullOptionVal = "-2";
var ListFilter = /*#__PURE__*/function (_Filter) {
  _inherits(ListFilter, _Filter);
  var _super = _createSuper(ListFilter);
  function ListFilter($dialogs, panel, model) {
    var _this;
    _classCallCheck(this, ListFilter);
    _this = _super.call(this, $dialogs, panel, model);
    _this.control = $("<select></select>").addClass("form-control").attr("name", _this.model.id).on("change", function () {
      var value = _this.control.val();
      _this.onChange(value);
    });
    return _this;
  }
  _createClass(ListFilter, [{
    key: "setSource",
    value: function setSource(src) {
      src.items = src.items || [];
      this.sourceIds = [];
      if (this.model.nullOption) {
        var nullItem = {
          title: this.model.nullOption,
          value: nullOptionVal
        };
        src.items.unshift(nullItem);
      }
      if (this.model.allOption) {
        this.sourceIds.unshift(allOptionVal);
      }
      this.listItems = angular.copy(src.items);
      this.sourceIds = this.sourceIds.concat(_.pluck(src.items, "value"));
      var itemsCount = this.model.showAllValueIfSingleFlag ? this.sourceIds.length : src.items.length;
      this.emptyChoice = !itemsCount;
      this.control.empty();
      if (itemsCount > 0) {
        if (itemsCount === 1) {
          this.setChoiceEnabling(false);
          var item = src.items[0];
          if (item != null) {
            this.setLabel(item.title, item.value);
            if (src.defaultValue) {
              src.defaultValue = item.value;
            }
          } else {
            this.setLabel(this.model.allOption);
          }
          if (this.model.hideSingleOption) {
            this.filterRow.addClass("hidden");
          }
        } else {
          this.setList(src.items);
        }
      } else {
        this.setChoiceEnabling(false);
        this.setLabel(this.model.emptyText);
      }
      if (this.model.hideSingleOption && itemsCount !== 1) {
        this.filterRow.removeClass("hidden");
      }
      _get(_getPrototypeOf(ListFilter.prototype), "setSource", this).call(this, src);
    }
  }, {
    key: "setList",
    value: function setList(items) {
      this.control.show();
      this.enable();
      if (this.labelBlock) {
        this.labelBlock.remove();
        this.labelBlock = null;
      }
      var actualItems = items;
      if (this.model.allOption) {
        actualItems.unshift({
          title: this.model.allOption,
          value: allOptionVal
        });
      }
      var _iterator = _createForOfIteratorHelper(actualItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var escapedTitle = item.title.escapeHTML();
          if (escapedTitle.startsWith("\t")) {
            escapedTitle = escapedTitle.replace(/\t/g, "&nbsp;&nbsp;");
          }
          $("<option></option>").val(item.value).append(escapedTitle).appendTo(this.control);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setLabel",
    value: function setLabel(title, value) {
      this.control.hide();
      this.disable();
      if (this.labelBlock) {
        this.labelBlock.remove();
        this.labelBlock = null;
      }
      this.labelBlock = $("<div></div>");
      this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").attr("title", title).val(title));
      if (value) {
        var valInput = $("<input type=\"hidden\" />").attr("name", this.model.id).val(value);
        this.labelBlock.append(valInput);
      }
      return this.labelBlock.insertAfter(this.control);
    }
  }, {
    key: "setChoice",
    value: function setChoice(choice) {
      if (!_.contains(this.sourceIds, choice)) {
        choice = _.first(this.sourceIds);
      }
      this.control.val(choice);
      return _get(_getPrototypeOf(ListFilter.prototype), "setChoice", this).call(this, choice);
    }
  }, {
    key: "getChoiceText",
    value: function getChoiceText() {
      if (this.labelBlock) {
        return this.labelBlock.find('input[type=text]').val();
      } else {
        return $("option:selected", this.control).text();
      }
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.labelBlock) {
        return this.labelBlock.find("input[type=hidden]").prop("disabled", false);
      } else {
        return this.control.prop("disabled", false);
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      if (this.labelBlock) {
        return this.labelBlock.find("input[type=hidden]").attr("disabled", "disabled");
      } else {
        return this.control.attr("disabled", "disabled");
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      var _this2 = this;
      var prevValue = this.choice;
      this.panel.canChange(this, value, prevValue).then(function (canChange) {
        if (canChange) {
          _this2.setChoice(value);
        } else {
          $(_this2.control).val(prevValue);
        }
      });
    }
  }]);
  return ListFilter;
}(_filter.Filter);
exports.ListFilter = ListFilter;
var List2Filter = /*#__PURE__*/function (_ListFilter) {
  _inherits(List2Filter, _ListFilter);
  var _super2 = _createSuper(List2Filter);
  function List2Filter() {
    _classCallCheck(this, List2Filter);
    return _super2.apply(this, arguments);
  }
  _createClass(List2Filter, [{
    key: "setSource",
    value: function setSource(src) {
      _get(_getPrototypeOf(List2Filter.prototype), "setSource", this).call(this, src);
      if (src.items.length > 1) {
        this.select2Control = this.control.select2({
          placeholder: "Введите наименование",
          language: "ru"
        });
      } else {
        this.control.select2();
        this.control.select2('close');
        this.control.siblings('span.select2').hide();
      }
    }
  }]);
  return List2Filter;
}(ListFilter);
exports.List2Filter = List2Filter;
var ListAjaxFilter = /*#__PURE__*/function (_Filter2) {
  _inherits(ListAjaxFilter, _Filter2);
  var _super3 = _createSuper(ListAjaxFilter);
  function ListAjaxFilter($dialogs, panel, model) {
    var _this3;
    _classCallCheck(this, ListAjaxFilter);
    _this3 = _super3.call(this, $dialogs, panel, model);
    _this3.control = $("<select></select>").addClass("form-control").attr("name", _this3.model.id).on("change", function () {
      var value = _this3.control.val();
      _this3.onChange(value);
    });
    return _this3;
  }
  _createClass(ListAjaxFilter, [{
    key: "setSource",
    value: function setSource(src) {
      var _this4 = this;
      this.select2Control = this.control.select2({
        placeholder: "Введите наименование",
        language: "ru"
      });
      this.control.prop('disabled', true);
      jsSubmit({
        action: src.url,
        method: "get"
      }).then(function (items) {
        var data = items.map(function (x) {
          return {
            id: x.id,
            text: x.name || x.text || x.title
          };
        });
        data.unshift({
          id: -1,
          text: "Все"
        });
        _this4.control.select2({
          data: data
        });
        _this4.control.prop('disabled', false);
      });
      _get(_getPrototypeOf(ListAjaxFilter.prototype), "setSource", this).call(this, src);
    }
  }, {
    key: "setLabel",
    value: function setLabel(title, value) {}
  }, {
    key: "setChoice",
    value: function setChoice(choice) {
      this.control.val(choice);
      return _get(_getPrototypeOf(ListAjaxFilter.prototype), "setChoice", this).call(this, choice);
    }
  }, {
    key: "getChoiceText",
    value: function getChoiceText() {
      return $("option:selected", this.control).text();
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      var _this5 = this;
      var prevValue = this.choice;
      this.panel.canChange(this, value, prevValue).then(function (canChange) {
        if (canChange) {
          _this5.setChoice(value);
        } else {
          $(_this5.control).val(prevValue);
        }
      });
    }
  }, {
    key: "enable",
    value: function enable() {}
  }, {
    key: "disable",
    value: function disable() {}
  }]);
  return ListAjaxFilter;
}(_filter.Filter);
exports.ListAjaxFilter = ListAjaxFilter;
var ListWithArrowsFilter = /*#__PURE__*/function (_ListFilter2) {
  _inherits(ListWithArrowsFilter, _ListFilter2);
  var _super4 = _createSuper(ListWithArrowsFilter);
  function ListWithArrowsFilter() {
    _classCallCheck(this, ListWithArrowsFilter);
    return _super4.apply(this, arguments);
  }
  _createClass(ListWithArrowsFilter, [{
    key: "appendToPanel",
    value: function appendToPanel(panel) {
      var _this6 = this;
      var leftButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-left"></span></button>').on("click", function (event) {
        var newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").prev('option').val();
        _this6.onChange(newValue);
      });
      var rightButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-right"></span></button>').on("click", function (event) {
        var newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").next('option').val();
        _this6.onChange(newValue);
      });
      var buttonGroup = $('<span class="input-group-btn"></span>').append(leftButton).append(rightButton);
      $(this.control).addClass("list-with-arrows");
      var inputGroup = $('<div class="input-group"></div>');
      inputGroup.append(this.control);
      inputGroup.append(buttonGroup);
      this.filterRow.find("#filter-control").replaceWith(inputGroup);
      return panel.append(this.filterRow);
    }
  }]);
  return ListWithArrowsFilter;
}(ListFilter);
exports.ListWithArrowsFilter = ListWithArrowsFilter;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;
var _filterpanel = __webpack_require__(34);
var _dependencyTracker = __webpack_require__(37);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Filter = /*#__PURE__*/function () {
  function Filter($dialogs, panel, model) {
    _classCallCheck(this, Filter);
    this.$dialogs = $dialogs;
    this.panel = panel;
    this.model = model;
    this.id = this.model.id;
    this.emptyChoice = false;
    this.filterRow = null;
    this.choice = null;
    this.choiceEnabling = true;
    this.existStateProvider = this.model.existStateProvider;
    var filterSize = this.panel.filterSize;
    var label = "<label class=\"" + filterSize.label + "\">{{{title}}}</label>";
    var control = "<div class=\"" + filterSize.control + "\">";
    var row = '<div class="form-group">' + label + control + '<div id="filter-control"></div> </div> </div>';
    var template = Handlebars.compile(row);
    var html = template({
      title: this.model.title
    });
    this.filterRow = $(html);
  }
  _createClass(Filter, [{
    key: "appendToPanel",
    value: function appendToPanel(panel) {
      this.filterRow.find("#filter-control").replaceWith(this.control);
      return panel.append(this.filterRow);
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(status) {
      this.filterRow.removeClass(this.status);
      this.status = status;
      this.filterRow.addClass(this.status);
      switch (status) {
        case _filterpanel.FilterStatus.inactive:
          this.disable();
          break;
        case _filterpanel.FilterStatus.active:
          this.enable();
          break;
      }
    }
  }, {
    key: "getChoiceEnabling",
    value: function getChoiceEnabling() {
      return this.choiceEnabling;
    }
  }, {
    key: "setChoiceEnabling",
    value: function setChoiceEnabling(choiceEnabling) {
      return this.choiceEnabling = choiceEnabling;
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.status;
    }
  }, {
    key: "getChoice",
    value: function getChoice() {
      return this.choice;
    }
  }, {
    key: "getChoiceText",
    value: function getChoiceText() {
      return this.choice;
    }
  }, {
    key: "setChoice",
    value: function setChoice(choice) {
      var prevChoice = this.choice;
      this.choice = choice;
      var promise = this.panel.changedValue(this, choice, prevChoice);
      this.filterRow.trigger(this.id + ':change', [choice, prevChoice, this]);
      return promise;
    }
  }, {
    key: "setSource",
    value: function setSource(src) {
      if (src.defaultValue || src.defaultValue === "") {
        this.setChoice(src.defaultValue);
      }
    }
  }, {
    key: "getDependency",
    value: function getDependency() {
      var _this = this;
      var testFilters = this.panel.filters.filter(function (item) {
        return item.model.order > _this.model.order;
      });
      var dependentFilters = [];
      var _iterator = _createForOfIteratorHelper(testFilters),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var testFilter = _step.value;
          var testFilterModel = testFilter.model;
          if (!testFilterModel.dependencies) {
            continue;
          }
          var fltFunc = function fltFunc(dependency) {
            return dependency.relatedObject.type === "Filter" && dependency.relatedObject.ref === _this.model.id;
          };
          if (!_.some(testFilterModel.dependencies, fltFunc)) {
            continue;
          }
          dependentFilters.push(testFilter);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var _i = 0, _dependentFilters = dependentFilters; _i < _dependentFilters.length; _i++) {
        var dependentFilter = _dependentFilters[_i];
        var subDependentFilters = dependentFilter.getDependency();
        if ((subDependentFilters != null ? subDependentFilters.length : void 0) === 0) {
          continue;
        }
        subDependentFilters = subDependentFilters.filter(function (subDepFlt) {
          return dependentFilters.findIndex(function (f) {
            return f.id == subDepFlt.id;
          }) == -1;
        });
        if (subDependentFilters.length === 0) {
          continue;
        }
        dependentFilters = _.union(dependentFilters, subDependentFilters);
      }
      return dependentFilters;
    }
  }, {
    key: "dependenciesSatisfied",
    value: function dependenciesSatisfied() {
      var vals = this.panel.getValues();
      var tracker = new _dependencyTracker.DependencyTracker(this.model.dependencies);
      return tracker.isSatisfied(vals);
    }
  }, {
    key: "validate",
    value: function validate() {
      return true;
    }
  }]);
  return Filter;
}();
exports.Filter = Filter;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DependencyTracker = void 0;
var _filterpanel = __webpack_require__(34);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DependencyTracker = /*#__PURE__*/function () {
  function DependencyTracker(dependencies) {
    _classCallCheck(this, DependencyTracker);
    this.dependencies = dependencies;
  }
  _createClass(DependencyTracker, [{
    key: "isSatisfied",
    value: function isSatisfied(vals) {
      var _this = this;
      var unSatisfiedDep = this.dependencies.find(function (dep) {
        return !_this.checkDependency(vals, dep);
      });
      return unSatisfiedDep == null;
    }
  }, {
    key: "checkDependency",
    value: function checkDependency(vals, dep) {
      var relObject = dep.relatedObject;
      if (relObject.type === "Param") {
        return true;
      }
      if (relObject.type !== "Filter") {
        throw "Неизвестный тип зависимости для фильтра";
      }
      var relFilterValue = vals[relObject.ref];
      if (typeof relFilterValue === 'undefined' || relFilterValue === null) {
        //return false;
        return dep.relatedObjectNotFoundResult == _filterpanel.FilterDependencyResult.satisfy;
      }
      switch (dep.condition) {
        case "Equals":
          return relFilterValue === dep.relatedValue;
        case "Greater":
          return relFilterValue > dep.relatedValue;
        case "Less":
          return relFilterValue < dep.relatedValue;
        case "NotEquals":
          return relFilterValue !== dep.relatedValue;
        case "Any":
          return true;
        case "NotContains":
          return typeof relFilterValue === 'string' && relFilterValue.toString().indexOf(dep.relatedValue) < 0;
        case "Contains":
          return typeof relFilterValue === 'string' && relFilterValue.toString().indexOf(dep.relatedValue) >= 0;
        case "In":
          var arrValue = JSON.parse(dep.relatedValue);
          if (!Array.isArray(arrValue)) {
            return false;
          }
          return _.some(arrValue, function (v) {
            return v === relFilterValue;
          });
        default:
          return false;
      }
    }
  }]);
  return DependencyTracker;
}();
exports.DependencyTracker = DependencyTracker;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangeFilter = void 0;
var _filter = __webpack_require__(36);
var _filterpanel = __webpack_require__(34);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DateRangeFilter = /*#__PURE__*/function (_Filter) {
  _inherits(DateRangeFilter, _Filter);
  var _super = _createSuper(DateRangeFilter);
  function DateRangeFilter($dialogs, panel, model) {
    var _this;
    _classCallCheck(this, DateRangeFilter);
    _this = _super.call(this, $dialogs, panel, model);
    _this.startDateIsChanged = false;
    _this.endDateIsChanged = false;
    var baseName = _this.model.id;
    var startControl = $("<input type=\"text\" class=\"input-md form-control start-date\"></input>").attr("name", baseName + "_start");
    var endControl = $("<input type=\"text\" class=\"input-md form-control end-date\"></input>").attr("name", baseName + "_end");
    var separatorCtrl = $("<span class=\"input-group-addon\">—</span>");
    _this.control = $("<div class=\"input-daterange input-group date\"></div>").append(startControl).append(separatorCtrl).append(endControl);
    dateInput.initDateInput(_this.control, "", "", "", {
      autoCorrectDates: false,
      keepEmptyField: true
    }, true);
    var dateChanged = function dateChanged() {
      if (_this.status === 'inactive') {
        return;
      }
      var startDate = _this.control.find('.start-date').val();
      var endDate = _this.control.find('.end-date').val();
      var range = !startDate && !endDate ? null : startDate + " - " + endDate;
      return _this.setChoice(range, true);
    };
    var startDateBlur = function startDateBlur() {
      if (_this.startDateIsChanged) {
        _this.startDateIsChanged = false;
        var startDate = _this.control.find('.start-date').val();
        var endDate = _this.control.find('.end-date').val();
        if (startDate && endDate) {
          var dtStartDate = _filterpanel.DateRange.parseDate(startDate);
          if (dtStartDate > _filterpanel.DateRange.parseDate(endDate)) {
            if (_this.validateDate(dtStartDate)) {
              _this.control.find('.end-date').val(startDate);
            }
          }
        }
        return dateChanged();
      }
    };
    var endDateBlur = function endDateBlur() {
      if (_this.endDateIsChanged) {
        _this.endDateIsChanged = false;
        var startDate = _this.control.find('.start-date').val();
        var endDate = _this.control.find('.end-date').val();
        if (startDate && endDate) {
          var dtEndDate = _filterpanel.DateRange.parseDate(endDate);
          if (dtEndDate < _filterpanel.DateRange.parseDate(startDate)) {
            if (_this.validateDate(dtEndDate)) {
              _this.control.find('.start-date').val(endDate);
            }
          }
        }
        return dateChanged();
      }
    };
    var startDateChanged = function startDateChanged() {
      _this.startDateIsChanged = true;
    };
    var endDateChanged = function endDateChanged() {
      _this.endDateIsChanged = true;
    };
    var startDateChangedAndBlur = function startDateChangedAndBlur() {
      if (!_this.startDateIsChanged) {
        startDateChanged();
        return startDateBlur();
      }
    };
    var endDateChangedAndBlur = function endDateChangedAndBlur() {
      if (!_this.endDateIsChanged) {
        endDateChanged();
        return endDateBlur();
      }
    };
    _this.control.find('.start-date').on("blur", startDateBlur);
    _this.control.find('.end-date').on("blur", endDateBlur);
    _this.control.find('.start-date').on("change", startDateChanged);
    _this.control.find('.end-date').on("change", endDateChanged);
    _this.control.find('.start-date').datepicker().on("changeDate", startDateChangedAndBlur);
    _this.control.find('.end-date').datepicker().on("changeDate", endDateChangedAndBlur);
    return _this;
  }
  _createClass(DateRangeFilter, [{
    key: "setSource",
    value: function setSource(src) {
      var minDate = moment(src.minValue).toDate();
      var maxDate = moment(src.maxValue).toDate();
      this.control.find('.start-date, .end-date').datepicker("setStartDate", minDate);
      this.control.find('.start-date, .end-date').datepicker("setEndDate", maxDate);
      this.src = src;
      var range = new _filterpanel.DateRange(minDate, maxDate);
      this.setChoice(range, true);
      return _get(_getPrototypeOf(DateRangeFilter.prototype), "setSource", this).call(this, src);
    }
  }, {
    key: "getChoice",
    value: function getChoice() {
      var currChoice = this.choice;
      var currRange = new _filterpanel.DateRange(currChoice.startDate, currChoice.endDate);
      return currRange.toString();
    }
  }, {
    key: "getChoiceText",
    value: function getChoiceText() {
      var currChoice;
      currChoice = this.choice;
      return moment(currChoice.startDate).format('DD.MM.YYYY') + " - " + moment(currChoice.endDate).format('DD.MM.YYYY');
    }
  }, {
    key: "setChoice",
    value: function setChoice(choice, internal) {
      if (!choice) {
        return;
      }
      var range = choice;
      if (range && range.source) {
        if (this.choice && range.source === choice) {
          return;
        }
      } else {
        range = _filterpanel.DateRange.parseRange(choice);
      }
      _get(_getPrototypeOf(DateRangeFilter.prototype), "setChoice", this).call(this, range);
      if (internal) {
        return;
      }
      if (range.startDate) {
        this.control.find('.start-date').datepicker('update', dateUtils.date2str(range.startDate));
      }
      if (range.endDate) {
        this.control.find('.end-date').datepicker('update', dateUtils.date2str(range.endDate));
      }
      var startDate = this.control.find('.start-date').val();
      var endDate = this.control.find('.end-date').val();
      if (!startDate || !endDate) {
        var serializedRange = startDate + " - " + endDate;
        return this.setChoice(serializedRange, true);
      }
    }
  }, {
    key: "validateDate",
    value: function validateDate(dt) {
      var maxValue, minValue;
      minValue = dateUtils.asUTCDate(_filterpanel.DateRange.parseDate(this.src.minValue));
      maxValue = dateUtils.asUTCDate(_filterpanel.DateRange.parseDate(this.src.maxValue));
      return dt >= minValue && dt <= maxValue;
    }
  }, {
    key: "validate",
    value: function validate() {
      var range = this.choice;
      if (range.startDate === null || !range.startDate) {
        this.$dialogs.error(language.Generic.Common.kErrInvalidStartDate);
        return false;
      }
      if (range.endDate === null || !range.endDate) {
        this.$dialogs.error(language.Generic.Common.kErrInvalidEndDate);
        return false;
      }
      var minValue = dateUtils.asUTCDate(_filterpanel.DateRange.parseDate(this.src.minValue));
      var maxValue = dateUtils.asUTCDate(_filterpanel.DateRange.parseDate(this.src.maxValue));
      var startDate = dateUtils.asUTCDate(new Date(range.startDate));
      var endDate = dateUtils.asUTCDate(new Date(range.endDate));
      if (startDate < minValue || startDate > maxValue) {
        this.$dialogs.error(language.Generic.Common.kErrInvalidStartDate + '\n' + language.Generic.Common.kStartEndDatesInCurrYear);
        return false;
      }
      if (endDate < minValue || endDate > maxValue) {
        this.$dialogs.error(language.Generic.Common.kErrInvalidEndDate + '\n' + language.Generic.Common.kStartEndDatesInCurrYear);
        return false;
      }
      if (!range.isValid()) {
        this.$dialogs.error(language.Generic.Common.kMsgStartBeforeEnd);
        return false;
      }
      return true;
    }
  }, {
    key: "enable",
    value: function enable() {
      return this.control.find("input").prop("disabled", false);
    }
  }, {
    key: "disable",
    value: function disable() {
      return this.control.find("input").attr("disabled", "disabled");
    }
  }]);
  return DateRangeFilter;
}(_filter.Filter);
exports.DateRangeFilter = DateRangeFilter;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateWithArrowsFilter = exports.DateFilter = void 0;
var _filterpanel = __webpack_require__(34);
var _filter = __webpack_require__(36);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DateFilter = /*#__PURE__*/function (_Filter) {
  _inherits(DateFilter, _Filter);
  var _super = _createSuper(DateFilter);
  function DateFilter($dialogs, panel, model) {
    var _this;
    _classCallCheck(this, DateFilter);
    _this = _super.call(this, $dialogs, panel, model);
    var baseName = _this.model.id;
    var control = $("<input type=\"text\" class=\"input-md form-control filter-date\"></input>").attr("name", baseName);
    var buttonCtrl = $("<button type=\"button\" class=\"btn btn-primary\">").append($("<span class=\"glyphicon glyphicon-calendar\"></span>")).append($("</button>"));
    var inputCtrl = $("<span class=\"input-group-btn\">").append(buttonCtrl).append($("</span>"));
    _this.control = $("<div class=\"input-group date\">").append(control).append(inputCtrl).append($("</div>"));
    dateInput.initDateInput(_this.control, null, null, null, {
      autoCorrectDates: false,
      keepEmptyField: true,
      autoclose: true
    }, true);
    var dateChanged = function dateChanged() {
      var filterDate;
      if (_this.status === 'inactive') {
        return;
      }
      filterDate = dateUtils.str2date(_this.control.find('.filter-date').val());
      return _this.setChoice(filterDate, true);
    };
    _this.control.find('.filter-date').on("change", dateChanged);
    _this.control.find('.filter-date').on('paste', function ($event) {
      var data = $event.originalEvent["clipboardData"];
      if (typeof data !== "undefined") {
        $event.stopPropagation();
        $event.preventDefault();
        var pastValue = data.getData("text/plain");
        var parsedPastValue = dateUtils.str2date(pastValue);
        if (parsedPastValue === null) {
          // если вставленное значение даты не валидно, то восстанавливаем старое значение инпута
          $($event.currentTarget).val($($event.currentTarget).data('val'));
          return;
        }
        $($event.currentTarget).val(pastValue);
        dateChanged();
        return;
      }
    });
    // запоминаем старое значение при фокусе на инпут
    _this.control.find('.filter-date').on("focusin", function ($event) {
      $($event.currentTarget).data('val', $($event.currentTarget).val());
    });
    return _this;
  }
  _createClass(DateFilter, [{
    key: "setSource",
    value: function setSource(src) {
      var minDate = moment(src.minValue).toDate();
      var maxDate = moment(src.maxValue).toDate();
      this.control.datepicker("setStartDate", minDate);
      this.control.datepicker("setEndDate", maxDate);
      var filterDate = moment(src.defaultValue).toDate();
      this.control.datepicker("setDate", filterDate);
      this.setChoice(filterDate, true);
      this.src = src;
    }
  }, {
    key: "setChoice",
    value: function setChoice(choice, internal) {
      if (!choice) {
        this.control.datepicker('update', null);
        this.emptyChoice = true;
        _get(_getPrototypeOf(DateFilter.prototype), "setChoice", this).call(this, null);
        return;
      }
      this.emptyChoice = false;
      //todo. выяснить что кроме строки сюда приходит
      if (this.choice && this.choice.source && this.choice.source === choice) {
        return;
      }
      if (!internal) {
        this.control.datepicker('update', choice);
      }
      var filterDate = dateUtils.str2date(this.control.find('.filter-date').val());
      return _get(_getPrototypeOf(DateFilter.prototype), "setChoice", this).call(this, filterDate);
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.choice === null || !this.choice) {
        if (this.model.optionalFlag) {
          return true;
        }
        this.$dialogs.error(language.Generic.Common.kErrInvalidDate);
        return false;
      }
      var filterDate = dateUtils.asUTCDate(this.choice);
      if (!this.isValidDate(filterDate)) {
        this.$dialogs.error(language.Generic.Common.kErrInvalidDate + '\n' + language.Generic.Common.kDateMustBeInCurrYear);
        return false;
      }
      return true;
    }
  }, {
    key: "enable",
    value: function enable() {
      return this.control.find("input").prop("disabled", false);
    }
  }, {
    key: "disable",
    value: function disable() {
      return this.control.find("input").attr("disabled", "disabled");
    }
  }, {
    key: "isValidDate",
    value: function isValidDate(date) {
      var minValue = dateUtils.asUTCDate(_filterpanel.DateRange.parseDate(this.src.minValue));
      var maxValue = dateUtils.asUTCDate(_filterpanel.DateRange.parseDate(this.src.maxValue));
      if (date < minValue || date > maxValue) {
        return false;
      }
      return true;
    }
  }]);
  return DateFilter;
}(_filter.Filter);
exports.DateFilter = DateFilter;
var DateWithArrowsFilter = /*#__PURE__*/function (_DateFilter) {
  _inherits(DateWithArrowsFilter, _DateFilter);
  var _super2 = _createSuper(DateWithArrowsFilter);
  function DateWithArrowsFilter() {
    _classCallCheck(this, DateWithArrowsFilter);
    return _super2.apply(this, arguments);
  }
  _createClass(DateWithArrowsFilter, [{
    key: "appendToPanel",
    value: function appendToPanel(panel) {
      var _this2 = this;
      var leftButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-left"></span></button>').on("click", function (event) {
        var value = _this2.control.find('.filter-date').val();
        if (!value) {
          return;
        }
        var filterDate = dateUtils.str2date(value);
        var prevDate = moment(filterDate).add(-1, 'days').toDate();
        if (_this2.isValidDate(prevDate)) {
          _this2.setChoice(dateUtils.date2str(prevDate));
        }
      });
      var rightButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-right"></span></button>').on("click", function (event) {
        var value = _this2.control.find('.filter-date').val();
        if (!value) {
          return;
        }
        var filterDate = dateUtils.str2date(value);
        var nextDate = moment(filterDate).add(1, 'days').toDate();
        if (_this2.isValidDate(nextDate)) {
          _this2.setChoice(dateUtils.date2str(nextDate));
        }
      });
      var buttonGroup = $('<span class="input-group-btn"></span>').append(leftButton).append(rightButton);
      $(this.control).addClass("list-with-arrows");
      var inputGroup = $('<div class="input-group"></div>');
      inputGroup.append(this.control);
      inputGroup.append(buttonGroup);
      this.filterRow.find("#filter-control").replaceWith(inputGroup);
      return panel.append(this.filterRow);
    }
  }]);
  return DateWithArrowsFilter;
}(DateFilter);
exports.DateWithArrowsFilter = DateWithArrowsFilter;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRangeFilter = void 0;
var _filter = __webpack_require__(36);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ListRangeFilter = /*#__PURE__*/function (_Filter) {
  _inherits(ListRangeFilter, _Filter);
  var _super = _createSuper(ListRangeFilter);
  function ListRangeFilter($dialogs, panel, model) {
    var _this;
    _classCallCheck(this, ListRangeFilter);
    _this = _super.call(this, $dialogs, panel, model);
    var ctrl = _assertThisInitialized(_this);
    _this.control = $("<select></select>").addClass("form-control").attr("name", _this.model.id).on("change", function () {
      var value = $(this).val();
      return ctrl.setChoice(value);
    });
    var baseName = _this.model.id;
    _this.startControl = $("<select></select>").addClass("form-control").attr("name", baseName + "_start").on("change", function () {
      return ctrl.setChoice($(this).val(), 1);
    });
    _this.endControl = $("<select></select>").addClass("form-control").attr("name", baseName + "_end").on("change", function () {
      return ctrl.setChoice($(this).val(), 2);
    });
    _this.separatorCtrl = $("<span class=\"input-group-addon\">-</span>");
    _this.control = $("<div class=\"input-group\"></div>").append(_this.startControl).append(_this.separatorCtrl).append(_this.endControl);
    return _this;
  }
  _createClass(ListRangeFilter, [{
    key: "setSource",
    value: function setSource(src) {
      this.emptyChoice = src.itemsFrom.length === 0;
      this.sourceFromIds = [];
      this.startControl.empty();
      var itemsCount = src.itemsFrom.length;
      if (itemsCount > 0) {
        this.setList(src.itemsFrom, this.startControl);
        this.sourceFromIds = this.sourceFromIds.concat(_.pluck(src.itemsFrom, "value"));
        this.listFromItems = angular.copy(src.itemsFrom);
      }
      this.endControl.empty();
      itemsCount = src.itemsTo.length;
      if (itemsCount > 0) {
        this.setList(src.itemsTo, this.endControl);
      }
      if (src.defaultValue) {
        this.setChoice(src.defaultValue);
      }
      _get(_getPrototypeOf(ListRangeFilter.prototype), "setSource", this).call(this, src);
    }
  }, {
    key: "setList",
    value: function setList(items, control) {
      control.show();
      this.enable();
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var escapedHtml = item.title.escapeHTML();
          $("<option></option>").val(item.value).append(escapedHtml).appendTo(control);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setChoice",
    value: function setChoice(choice, partNum) {
      if (typeof partNum !== "undefined") {
        if (partNum === 1) {
          var endChoice = this.endControl.val();
          this.startControl.val(choice);
          if (choice && endChoice) {
            var choiceIndex = $(this.startControl).find("option[value='" + choice + "']").index();
            var endChoiceIndex = $(this.endControl).find("option[value='" + endChoice + "']").index();
            if (endChoiceIndex < choiceIndex) {
              this.endControl.val(choice);
            }
          }
        } else if (partNum === 2) {
          var startChoice = this.startControl.val();
          this.endControl.val(choice);
          if (choice && startChoice) {
            var _choiceIndex = $(this.endControl).find("option[value='" + choice + "']").index();
            var startChoiceIndex = $(this.startControl).find("option[value='" + startChoice + "']").index();
            if (_choiceIndex < startChoiceIndex) {
              this.startControl.val(choice);
            }
          }
        }
        choice = this.getChoice();
      } else {
        var sepIndex = choice.indexOf(" - ");
        if (sepIndex) {
          this.startControl.val(choice.substring(0, sepIndex));
          this.endControl.val(choice.substring(sepIndex + 3));
        }
      }
      return _get(_getPrototypeOf(ListRangeFilter.prototype), "setChoice", this).call(this, choice);
    }
  }, {
    key: "getChoice",
    value: function getChoice() {
      return this.startControl.val() + " - " + this.endControl.val();
    }
  }, {
    key: "enable",
    value: function enable() {
      return this.control.prop("disabled", false);
    }
  }, {
    key: "disable",
    value: function disable() {
      return this.control.attr("disabled", "disabled");
    }
  }]);
  return ListRangeFilter;
}(_filter.Filter);
exports.ListRangeFilter = ListRangeFilter;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChecksFilter = exports.Checks2Filter = void 0;
var _filter = __webpack_require__(36);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ChecksFilter = /*#__PURE__*/function (_Filter) {
  _inherits(ChecksFilter, _Filter);
  var _super = _createSuper(ChecksFilter);
  function ChecksFilter($dialogs, panel, model) {
    var _this;
    _classCallCheck(this, ChecksFilter);
    _this = _super.call(this, $dialogs, panel, model);
    var ctrl = _assertThisInitialized(_this);
    var checkboxChanged = function checkboxChanged() {
      if (_this.status === 'inactive') {
        return;
      }
      if (_this.model.hasSureCheckedFlag && _this.control.find("input:checked").length == 0) {
        _this.$dialogs.message(language.Generic.Filter.kSureCheckedMsg.replace('{0}', _this.model.title));
        return false;
      }
      var checkboxValues = _this.control.find('input:checked').map(function () {
        return $(this).prop('value');
      }).get().join();
      return ctrl.setChoice(checkboxValues);
    };
    _this.control = $("<div></div>").on("change", checkboxChanged);
    return _this;
  }
  _createClass(ChecksFilter, [{
    key: "setSource",
    value: function setSource(src) {
      this.emptyChoice = false;
      this.control.empty();
      var itemsCount = src.items.length;
      if (itemsCount > 0) {
        this.setChecks(src.items);
        if (src.defaultValue) {
          return this.setChoice(src.defaultValue);
        }
      } else {
        if (this.model.emptyText) {
          this.labelBlock = $("<div></div>");
          this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(this.model.emptyText));
          this.labelBlock.appendTo(this.control);
          this.emptyChoice = true;
        }
        return this.setChoiceEnabling(false);
      }
    }
  }, {
    key: "getChoice",
    value: function getChoice() {
      return this.control.find('input:checked').map(function () {
        return $(this).prop('value');
      }).get().join();
    }
  }, {
    key: "getChoiceText",
    value: function getChoiceText() {
      return this.control.find('input:checked').map(function () {
        return $(this).parent().text();
      }).get().join();
    }
  }, {
    key: "setChoice",
    value: function setChoice(choice) {
      if (choice) {
        var checkedItems = choice.split(',');
        var _iterator = _createForOfIteratorHelper(checkedItems),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if (item || item === "0") {
              this.control.find('input:checkbox[value=' + item + ']').attr("checked", "");
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return _get(_getPrototypeOf(ChecksFilter.prototype), "setChoice", this).call(this, choice);
    }
  }, {
    key: "setChecks",
    value: function setChecks(items) {
      var actualItems = items;
      var _iterator2 = _createForOfIteratorHelper(actualItems),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          var chk = $("<input type=\"checkbox\" />").attr("name", this.model.id).val(item.value);
          if (item.readOnly) {
            chk.on("click", function () {
              return false;
            });
          }
          var lbl = $("<label></label>").text(item.title).prepend(chk);
          $("<div class=\"checkbox\"></div>").append(lbl).appendTo(this.control);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "enable",
    value: function enable() {}
  }, {
    key: "disable",
    value: function disable() {}
  }, {
    key: "validate",
    value: function validate() {
      var choice = this.getChoice();
      if (this.model.hasSureCheckedFlag && (choice === null || choice === "")) {
        this.$dialogs.error("Не выбраны значения фильтра \"" + this.model.title + "\"");
        return false;
      }
      return true;
    }
  }]);
  return ChecksFilter;
}(_filter.Filter);
exports.ChecksFilter = ChecksFilter;
var Checks2Filter = /*#__PURE__*/function (_ChecksFilter) {
  _inherits(Checks2Filter, _ChecksFilter);
  var _super2 = _createSuper(Checks2Filter);
  function Checks2Filter($dialogs, panel, model) {
    _classCallCheck(this, Checks2Filter);
    return _super2.call(this, $dialogs, panel, model);
  }
  _createClass(Checks2Filter, [{
    key: "setChecks",
    value: function setChecks(items) {
      var actualItems = items;
      var _iterator3 = _createForOfIteratorHelper(actualItems),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          var chk = $("<input type=\"checkbox\" />").attr("name", this.model.id).val(item.value);
          if (item.readOnly) {
            chk.on("click", function () {
              return false;
            });
          }
          var lbl = $("<label></label>").text(item.title).prepend(chk);
          $("<div class=\"checkbox checkbox-inline checkbox-row\"></div>").append(lbl).appendTo(this.control);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);
  return Checks2Filter;
}(ChecksFilter);
exports.Checks2Filter = Checks2Filter;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFilter = void 0;
var _filter = __webpack_require__(36);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var TextFilter = /*#__PURE__*/function (_Filter) {
  _inherits(TextFilter, _Filter);
  var _super = _createSuper(TextFilter);
  function TextFilter($dialogs, panel, model) {
    var _this;
    _classCallCheck(this, TextFilter);
    _this = _super.call(this, $dialogs, panel, model);
    var ctrl = _assertThisInitialized(_this);
    _this.validationExp = null;
    _this.validationErrorMessage = null;
    _this.control = $("<input></input>").addClass("form-control").attr("name", _this.model.id).on("change", function () {
      return ctrl.setChoice($(this).val());
    });
    return _this;
  }
  _createClass(TextFilter, [{
    key: "setSource",
    value: function setSource(src) {
      this.setChoice(src.defaultValue);
      this.validationExp = src.validationExp;
      this.validationErrorMessage = src.validationErrorMessage;
      _get(_getPrototypeOf(TextFilter.prototype), "setSource", this).call(this, src);
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.validationExp) {
        var choice = this.getChoice();
        if (!choice.match(this.validationExp)) {
          this.$dialogs.error('Фильтр "' + this.model.title + '": ' + this.validationErrorMessage);
          return false;
        }
      }
      return true;
    }
  }, {
    key: "getChoice",
    value: function getChoice() {
      return $(this.control).val();
    }
  }, {
    key: "setChoice",
    value: function setChoice(choice) {
      $(this.control).val(choice);
      if (this.model.optionalFlag || choice) {
        this.emptyChoice = false;
      } else {
        this.emptyChoice = true;
      }
      return _get(_getPrototypeOf(TextFilter.prototype), "setChoice", this).call(this, choice);
    }
  }, {
    key: "enable",
    value: function enable() {
      this.control.prop("disabled", false);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.control.attr("disabled", "disabled");
    }
  }]);
  return TextFilter;
}(_filter.Filter);
exports.TextFilter = TextFilter;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSuggestComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var InputSuggestController = /*#__PURE__*/function () {
  InputSuggestController.$inject = ["changeTracker"];
  /*@ngInject*/
  function InputSuggestController(changeTracker) {
    _classCallCheck(this, InputSuggestController);
    this.changeTracker = changeTracker;
  }
  _createClass(InputSuggestController, [{
    key: "use",
    value: function use(item) {
      this.model = item;
      // todo: вызов без контекста, может дальше и понадобится
      this.changeTracker.dataWasChanged();
    }
  }]);
  return InputSuggestController;
}();
var InputSuggestComponent = {
  controller: InputSuggestController,
  selector: "inputSuggest",
  bindings: {
    model: "=",
    title: "<",
    suggestions: "<"
  },
  template: "\n\t<div class=\"input-group copyto\">\n\t\t<input type=\"text\" ng-model=\"$ctrl.model\" class=\"form-control\" />\n\t\t<div class=\"input-group-btn\">\n\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t<span>{{$ctrl.title}}</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</button>\n\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t<li ng-repeat=\"item in $ctrl.suggestions\">\n\t\t\t\t\t<a href=\"javascript:void(0);\" ng-click=\"$ctrl.use(item)\">{{item}}</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>"
};
exports.InputSuggestComponent = InputSuggestComponent;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistryComponent = void 0;
var _registry = __webpack_require__(45);
var RegistryComponent = {
  selector: "registry",
  templateUrl: "/static/dist/app/global/components/registry/registry.component.html",
  bindings: {
    registryController: "=?controller",
    registry: "<info"
  },
  controller: _registry.RegistryController,
  controllerAs: "ctrl"
};
exports.RegistryComponent = RegistryComponent;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistryFieldDirective = exports.RegistryController = exports.OrderDirection = void 0;
var _dependencyTracker = __webpack_require__(37);
var _common = __webpack_require__(46);
var _multiSelectable = _interopRequireDefault(__webpack_require__(47));
var _registry = __webpack_require__(48);
var _registry2 = __webpack_require__(49);
var _registrySelected = __webpack_require__(50);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var OrderDirection;
exports.OrderDirection = OrderDirection;
(function (OrderDirection) {
  OrderDirection["asc"] = "asc";
  OrderDirection["desc"] = "desc";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
//умолчательные настройки
var defRegistryInfo = {
  url: null,
  filtersUrl: null,
  buttons: null,
  linkButtons: null,
  fieldDecorators: null,
  extensions: {
    postButtonsTpl: null
  },
  filterPanelStyles: {
    compact: true,
    label: "col-md-4 col-lg-5 col-sm-4",
    control: "col-md-8 col-lg-6 col-sm-8"
  },
  registryStyles: {
    table: "table-xs table-bright table-bright-hover table-thin",
    filtersForm: "form-sm"
  },
  //compactFilters: true,
  initialPageSize: 50,
  "export": true,
  filtersValues: null,
  selectAllRecordsTitle: "Выбрать записи на всех страницах",
  unselectAllRecordsTitle: "Отменить выделение",
  selectedRecordsTitle: "Выбрано записей"
};
var scrollable = false;
var RegistryFieldsHelper = /*#__PURE__*/function () {
  function RegistryFieldsHelper(registryCtrl) {
    _classCallCheck(this, RegistryFieldsHelper);
    this.registryCtrl = registryCtrl;
  }
  _createClass(RegistryFieldsHelper, [{
    key: "initAvailableFields",
    value: function initAvailableFields() {
      var fp = this.registryCtrl.filterInfo.filterPanel.getValue();
      var filterValues = fp.getValues();
      var availableFields = this.registryCtrl.data.registry.fields.filter(function (field) {
        if (!field.dependencies) {
          return true;
        }
        return new _dependencyTracker.DependencyTracker(field.dependencies).isSatisfied(filterValues);
      });
      return availableFields;
    }
  }, {
    key: "initDisplayFilters",
    value: function initDisplayFilters() {
      var _this = this;
      //инициализация полей реестра
      var fields = this.initAvailableFields();
      if (this.registryCtrl.data.registryData) {
        fields = fields.filter(function (f) {
          return _this.registryCtrl.data.registryData.fields.indexOf(f.id) > -1;
        });
      }
      if (this.registryCtrl.registry.fieldDecorators) {
        fields.forEach(function (f) {
          return f.decorator = _this.registryCtrl.registry.fieldDecorators[f.id];
        });
      }
      this.registryCtrl.data.displayFields = _.sortBy(fields, function (f) {
        return f.order;
      });
    }
  }]);
  return RegistryFieldsHelper;
}();
var RegistryController = /*#__PURE__*/function () {
  RegistryController.$inject = ["$injector", "$scope", "$appLoader", "$dialogs", "$uibModal", "$alerts", "language", "$timeout"];
  /*@ngInject*/
  function RegistryController($injector, $scope, $appLoader, $dialogs, $uibModal, $alerts, language, $timeout) {
    var _this2 = this;
    _classCallCheck(this, RegistryController);
    this.$injector = $injector;
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.$alerts = $alerts;
    this.language = language;
    this.$timeout = $timeout;
    this.events = {
      loaded: new _common.EventEmitter(),
      loading: new _common.EventEmitter(),
      filterpanel: {
        ready: new _common.EventEmitter(),
        emptyChoice: new _common.EventEmitter()
      }
    };
    this.allRecordsLoaded = false;
    this.$http = this.$injector.get("$http");
    this.$window = this.$injector.get("$window");
    this.$document = this.$injector.get("$document");
    this.$location = this.$injector.get("$location");
    this.downloadService = this.$injector.get("downloadService");
    this.$longWork = this.$injector.get("$longWork");
    this.repository = new _registry2.RegistryRepository(this.$http, this.$dialogs, this.$longWork);
    this.state = {
      dataReady: false,
      loading: false,
      emptyData: false,
      emptyFilter: false,
      selectable: false,
      withMultiSelection: false,
      exporting: false,
      initing: true
    };
    this.filterInfo = {
      filterPanel: new _common.BehaviorSubject(),
      filterPanelSettings: null
    };
    this.fieldsHelper = new RegistryFieldsHelper(this);
    this.selection = new _multiSelectable["default"]();
    this.data = {
      error: null,
      registry: null,
      registryData: null,
      search: {
        fieldId: null,
        fieldTitle: null,
        text: "",
        fields: []
      },
      fields: null,
      displayFields: null
    };
    this.paging = {
      page: 1,
      pageSize: 50,
      currentPageSize: null,
      totalRows: 0
    };
    $scope.$watch(function () {
      return _this2.paging.currentPageSize;
    }, this.watch.bind(this)); // не был виден контекст в методе
    //this.init();
  }
  _createClass(RegistryController, [{
    key: "$onInit",
    value: function $onInit() {
      this.registryController = this;
      if (this.registry) {
        this.registry = Object.assign({}, defRegistryInfo, this.registry);
        this.init();
      }
    }
  }, {
    key: "$onChanges",
    value: function $onChanges(changesObject) {
      if (changesObject.registry && !changesObject.registry.isFirstChange()) {
        this.registry = changesObject.registry.currentValue;
        this.$onInit();
      }
    }
  }, {
    key: "watch",
    value: function watch(newVal, oldVal) {
      if (newVal && (newVal < 1 || newVal > 999)) {
        this.paging.currentPageSize = oldVal;
      }
    }
  }, {
    key: "initRowClasses",
    value: function initRowClasses(row) {
      var classes = [];
      if (this.selection.isSelected(row)) {
        classes.push("selected");
      }
      if (this.registry.isRowHighlighted && this.registry.isRowHighlighted(row)) {
        classes.push("highlighted");
      }
      if (this.registry.rowClasses) {
        for (var className in this.registry.rowClasses) {
          if (this.registry.rowClasses[className](row)) {
            classes.push(className);
          }
        }
      }
      return classes;
    }
  }, {
    key: "getRowArrayLength",
    value: function getRowArrayLength(row, field) {
      if (field !== undefined && field.grouped) return 1;
      var arrayItemKey = Object.keys(row).find(function (x) {
        var _a;
        return ((_a = row[x]) === null || _a === void 0 ? void 0 : _a.constructor) == Array;
      });
      if (arrayItemKey != undefined) return row[arrayItemKey].length + 1;
      return 1;
    }
  }, {
    key: "getRowArray",
    value: function getRowArray(row) {
      var arrayItemKey = Object.keys(row).find(function (x) {
        var _a;
        return ((_a = row[x]) === null || _a === void 0 ? void 0 : _a.constructor) == Array;
      });
      if (arrayItemKey != undefined) return row[arrayItemKey];
      return [];
    }
  }, {
    key: "getGroupedFields",
    value: function getGroupedFields() {
      return this.data.displayFields.filter(function (x) {
        return x.grouped;
      });
    }
  }, {
    key: "selectAllRecordsTitles",
    value: function selectAllRecordsTitles() {
      return this.allRecordsLoaded ? this.registry.unselectAllRecordsTitle : this.registry.selectAllRecordsTitle;
    }
  }, {
    key: "showSelectedItems",
    value: function showSelectedItems() {
      var _this3 = this;
      var modal = this.$uibModal.open({
        templateUrl: _registrySelected.RegistrySelectedComponent.templateUrl,
        controller: _registrySelected.RegistrySelectedComponent.controller,
        controllerAs: "ctrl",
        size: "lg",
        resolve: {
          registryController: function registryController() {
            return _this3.registryController;
          },
          header: function header() {
            return "Список выбранных";
          }
        }
      });
      return modal.result["catch"](function () {});
    }
  }, {
    key: "clickCheckbox",
    value: function clickCheckbox(event, row) {
      var _this4 = this;
      event.preventDefault();
      event.stopPropagation();
      this.$timeout(function () {
        _this4.clickRow(event, row);
      }, 100);
    }
  }, {
    key: "clickRow",
    value: function clickRow(event, row) {
      var clickOnTag = event.target && event.target.tagName;
      if (clickOnTag === "A") {
        //исключаем нажатие на линках
        return;
      }
      if (!this.state.selectable) {
        return;
      }
      if (this.registry.selectableClick) {
        this.registry.selectableClick(row);
      } else {
        if (!this.state.withMultiSelection) {
          //эмулирование единственности выбора
          if (!this.selection.isSelected(row)) {
            this.selection.dropSelect();
          }
        }
        this.selection.select(row);
      }
    }
    //инициализация кнопок и действий и их правил показа
  }, {
    key: "initCommandButtons",
    value: function initCommandButtons() {
      var _this5 = this;
      var commands = this.data.registry.commands;
      var buttons = this.registry.buttons;
      var checkSelectionMode = function checkSelectionMode(mode, defaultVal) {
        if (mode === _registry.SelectionMode.Empty) {
          return _this5.selection.selected.length === 0;
        } else if (mode === _registry.SelectionMode.Single) {
          return _this5.selection.selected.length === 1;
        } else if (mode === _registry.SelectionMode.Multiple) {
          return _this5.selection.selected.length > 0;
        }
        return defaultVal;
      };
      this.state.withMultiSelection = false;
      if (commands && commands.length) {
        //если есть команды с необходимостью выбора - то возможность выбора есть
        this.state.selectable = commands.findIndex(function (c) {
          return c.mode != _registry.SelectionMode.Empty;
        }) != -1;
        this.state.withMultiSelection = commands.find(function (c) {
          return c.mode == _registry.SelectionMode.Multiple;
        }) !== null;
        commands.forEach(function (cmd) {
          cmd.isEnabled = function () {
            return checkSelectionMode(cmd.mode, false);
          };
          cmd.isHide = function () {
            return false;
          };
        });
      }
      if (buttons && buttons.length) {
        this.state.selectable = this.state.selectable || buttons.find(function (b) {
          return b.selectionMode !== null;
        }) != null;
        this.state.withMultiSelection = this.state.withMultiSelection || buttons.findIndex(function (b) {
          return b.selectionMode == _registry.SelectionMode.Multiple;
        }) !== -1;
        buttons.forEach(function (btn) {
          var externalCheck = btn.isEnabled;
          btn.isEnabled = function () {
            if (!checkSelectionMode(btn.selectionMode, true)) {
              return false;
            }
            if (externalCheck) {
              return externalCheck();
            }
            return true;
          };
          var externalCheckHide = btn.isHide;
          btn.isHide = function () {
            if (externalCheckHide) {
              return externalCheckHide();
            }
            return false;
          };
          btn.style = btn.style || "btn-default";
        });
      }
      if (this.registry.selectable && this.registry.selectable != _registry.SelectionMode.Empty) {
        this.state.selectable = true;
        this.state.withMultiSelection = this.registry.selectable == _registry.SelectionMode.Multiple;
      }
    }
    // перезагружает фильтр-панель
  }, {
    key: "fpReload",
    value: function fpReload() {
      var fp = this.filterInfo.filterPanel.getValue();
      return fp.reInit();
    }
  }, {
    key: "init",
    value: function init() {
      var _this6 = this;
      this.state.initing = true;
      this.btnExport = {
        title: this.language.Generic.Common.kBtnExcel,
        action: function action() {
          return _this6["export"]();
        },
        icon: "glyphicon glyphicon-export"
      };
      this.repository.getDescription(this.registry.url).then(function (registry) {
        var _a, _b;
        _this6.data.registry = registry;
        var fpInfo = registry.filterPanel.filterPanel;
        var fpSources = registry.filterPanel.filterSources;
        _this6.initFilterSources(fpSources);
        _this6.initCommandButtons();
        //первичная инициализация полей реестра
        _this6.data.fields = registry.fields.filter(function (f) {
          return f["default"];
        });
        //this.$appLoader.hide();
        _this6.filterInfo.filterPanelSettings = {
          url: _this6.registry.filtersUrl,
          info: fpInfo,
          sources: fpSources,
          styles: _this6.registry.filterPanelStyles,
          events: {
            ready: function ready(values) {
              var _a, _b, _c;
              _this6.state.emptyFilter = false;
              _this6.setSearchFields();
              _this6.state.initing = false;
              (_c = (_b = (_a = _this6.registry) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.filterPanel) === null || _c === void 0 ? void 0 : _c.ready(values);
              _this6.events.filterpanel.ready.emit(values);
              _this6.$scope.$emit("FilterPanelInitialized", _this6.filterInfo.filterPanel.getValue());
              _this6.$scope.$applyAsync();
            },
            emptyChoice: function emptyChoice() {
              var _a, _b, _c;
              _this6.state.emptyFilter = true;
              (_c = (_b = (_a = _this6.registry) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.filterPanel) === null || _c === void 0 ? void 0 : _c.emptyChoice();
              _this6.events.filterpanel.emptyChoice.emit();
              _this6.$scope.$applyAsync();
            }
          }
        };
        _this6.loadingState();
        (_b = (_a = _this6.registry) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.ready();
      }, function (response) {
        _this6.$appLoader.hide();
        _this6.data.error = response.data && response.data.message || "Ошибка загрузки реестра";
      });
    }
  }, {
    key: "initFilterSources",
    value: function initFilterSources(sources) {
      var filtersValues = this.registry.filtersValues;
      if (!filtersValues) {
        return;
      }
      var filterIds = Object.keys(filtersValues);
      filterIds.forEach(function (filterId) {
        var source = sources.find(function (x) {
          return x.filterId === filterId;
        });
        if (!source) {
          return;
        }
        source.defaultValue = filtersValues[filterId].toString();
      });
    }
  }, {
    key: "loadingState",
    value: function loadingState() {
      var _this7 = this;
      this.repository.getState(this.registry.url).then(function (registryState) {
        var defRegistryState = {
          fields: [],
          search: null,
          order: null,
          paging: {
            page: 1,
            pageSize: _this7.registry.initialPageSize,
            currentPageSize: _this7.registry.initialPageSize
          }
        };
        var needLoad = _this7.data.registry.autoLoad;
        if (!registryState) {
          _this7.paging = angular.extend(_this7.paging, defRegistryState.paging);
        } else {
          needLoad = true;
          _this7.paging = angular.extend(_this7.paging, registryState.paging);
          if (!_this7.paging.pageSize) {
            _this7.paging.pageSize = _this7.registry.initialPageSize;
          }
          _this7.paging.currentPageSize = _this7.paging.pageSize;
          if (registryState.fields) {
            _this7.data.fields = _this7.data.registry.fields.filter(function (item) {
              return registryState.fields.indexOf(item.id) != -1;
            });
          }
          if (registryState.search && registryState.search.text) {
            var stateSearchField = _this7.data.registry.fields.find(function (x) {
              return x.id === registryState.search.fieldId;
            });
            _this7.data.search.fieldTitle = stateSearchField.title;
            _this7.data.search.fieldId = stateSearchField.id;
            _this7.data.search.text = decodeURIComponent(registryState.search.text);
          }
          if (registryState.order && registryState.order.fieldId) {
            _this7.fieldsHelper.initDisplayFilters();
            var orderFieldId = registryState.order.fieldId.charAt(0).toLowerCase() + registryState.order.fieldId.substring(1);
            var stateOrderField = _this7.data.fields.find(function (f) {
              return f.id == orderFieldId;
            });
            if (stateOrderField == null) {
              throw "Не обнаружено поле c идентификатором " + registryState.order.fieldId;
            }
            _this7.data.displayFields.forEach(function (f) {
              return f.sortOrder = null;
            });
            stateOrderField.sortOrder = registryState.order.ascending ? OrderDirection.asc : OrderDirection.desc;
          }
        }
        if (needLoad) {
          _this7.load();
        }
        _this7.state.initing = false;
        _this7.$appLoader.hide();
      })["catch"](function () {
        _this7.state.initing = false;
        _this7.$appLoader.hide();
        _this7.data.error = "Ошибка загрузки реестра";
      });
    }
  }, {
    key: "setSearchField",
    value: function setSearchField(field) {
      if (this.data.search && this.data.search.fieldId && this.data.search.fieldId === field.id && this.data.search.fieldTitle === field.title) {
        return;
      }
      this.data.search.text = "";
      this.data.search.fieldTitle = field.title;
      this.data.search.fieldId = field.id;
    }
  }, {
    key: "canExport",
    value: function canExport() {
      var _this8 = this;
      var exportWarn = "Экспорт возможен только в случае заполненного фильтра \"Фамилия\"";
      var searchNotByLastname = function searchNotByLastname() {
        var lastNameId = "lastName";
        var searchFilter = _this8.data.search;
        return searchFilter.text && searchFilter.fieldId !== lastNameId;
      };
      if (searchNotByLastname()) {
        alert(exportWarn);
        return false;
      }
      return true;
    }
  }, {
    key: "equalArrays",
    value: function equalArrays(array1, array2) {
      if (!array1 || !array2) {
        return false;
      }
      return !_.chain(array1).difference(array2).union(_.difference(array2, array1)).value().length;
    }
  }, {
    key: "setSearchFields",
    value: function setSearchFields() {
      var _this9 = this;
      var availableFields = this.fieldsHelper.initAvailableFields();
      var availableFieldsArr = _.pluck(availableFields, "id");
      this.data.search.fields = this.data.registry.fields.filter(function (f) {
        return f.search;
      }).filter(function (item) {
        return availableFieldsArr.find(function (availableField) {
          return availableField === item.id;
        }) !== null;
      });
      if (this.data.search.fields.length) {
        var searchField = this.data.search.fields.find(function (f) {
          return f["default"];
        });
        searchField = this.data.search.fields.find(function (f) {
          return f.searchByDefault;
        }) || searchField;
        if (this.data.search && this.data.search.fieldId && _.some(this.data.search.fields, function (fld) {
          return fld.id === _this9.data.search.fieldId;
        }) && this.data.search.fieldId !== searchField.id) {
          return;
        }
        this.setSearchField(searchField);
      }
    }
  }, {
    key: "setSearch",
    value: function setSearch(_field) {
      var _this10 = this;
      var text = "";
      if (this.data.search && this.data.search.fieldId === _field.id) {
        text = this.data.search.text;
      }
      var modalInstance = this.$uibModal.open({
        template: SetRegistryFieldSearchComponent.template,
        controllerAs: SetRegistryFieldSearchComponent.controllerAs,
        controller: SetRegistryFieldSearchComponent.controller,
        resolve: {
          search: function search() {
            return text;
          },
          field: function field() {
            return _field;
          }
        }
      });
      modalInstance.result.then(function (search) {
        if (search) {
          _this10.data.search = $.extend(_this10.data.search, {
            fieldId: _field.id,
            fieldTitle: _field.title,
            text: search
          });
        } else {
          _this10.data.search.text = "";
        }
        _this10.load();
      });
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.data.search.text = "";
      this.load();
    }
  }, {
    key: "setSortOrder",
    value: function setSortOrder(field, newOrder) {
      if (!newOrder) {
        if (!field.sortOrder) {
          newOrder = OrderDirection.asc;
        } else {
          newOrder = field.sortOrder === OrderDirection.asc ? OrderDirection.desc : OrderDirection.asc;
        }
      }
      this.data.displayFields.forEach(function (f) {
        return f.sortOrder = null;
      });
      field.sortOrder = angular.copy(newOrder);
      this.load();
    }
  }, {
    key: "pageChange",
    value: function pageChange() {
      if (this.state.loading) {
        return;
      }
      this.load(true);
    }
    //загрузка данных
  }, {
    key: "load",
    value: function load() {
      var _this11 = this;
      var pageChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.allRecordsLoaded = false;
      var errorHandle = function errorHandle(message) {
        _this11.data.error = message;
        _this11.state.dataReady = true;
        _this11.state.loading = false;
      };
      //инициализация запрашиваемых полей
      var initRequestField = function initRequestField() {
        var fp = _this11.filterInfo.filterPanel.getValue();
        var filterValues = fp.getValues();
        var chain = _.chain(_this11.data.fields).filter(function (field) {
          if (!field.dependencies) {
            return true;
          }
          return new _dependencyTracker.DependencyTracker(field.dependencies).isSatisfied(filterValues);
        }).pluck("id");
        return chain.value();
      };
      var setLoadingState = function setLoadingState() {
        var body = _this11.$document.find("body");
        scrollable = body.scrollHeight > _this11.$document[0].documentElement.clientHeight;
        _this11.events.loading.emit();
        _this11.state.dataReady = false;
        _this11.state.loading = true;
        if (!_this11.registry.newPageDontDropSelection || !pageChange) {
          _this11.selection.dropSelect();
        }
        if (scrollable) {
          body.css({
            "padding-right": "17px"
          });
        }
      };
      var unsetLoadingState = function unsetLoadingState() {
        var body = _this11.$document.find("body");
        if (scrollable) {
          body.css({
            "padding-right": ""
          });
        }
        _this11.events.loaded.emit();
        _this11.state.dataReady = true;
        _this11.state.loading = false;
      };
      var fp = this.filterInfo.filterPanel.getValue();
      if (!fp.validate()) {
        return;
      }
      setLoadingState();
      if (!this.paging.currentPageSize) {
        this.paging.currentPageSize = this.registry.initialPageSize;
      }
      var data = {
        filterContext: {
          selectedData: fp.getCtxValues(),
          params: this.registry.filterParams
        },
        fields: initRequestField(),
        page: this.paging.page,
        pageSize: this.paging.currentPageSize,
        search: null,
        order: null
      };
      if (this.data.search.fieldId && this.data.search.text) {
        data.search = {
          fieldId: this.data.search.fieldId,
          text: this.data.search.text
        };
      }
      var orderField;
      if (this.data.displayFields) {
        orderField = this.data.displayFields.find(function (f) {
          return typeof f.sortOrder !== "undefined" && f.sortOrder != null;
        });
        if (orderField) {
          data.order = {
            fieldId: orderField.id,
            ascending: orderField.sortOrder === OrderDirection.asc
          };
        }
      }
      return this.repository.getData(this.registry.url, data).then(function (registryData) {
        _this11.data.error = null;
        try {
          _this11.data.registryData = registryData;
          _this11.paging.pageSize = _this11.paging.currentPageSize;
          //инициализация пейджинга
          if (_this11.paging.page !== _this11.data.registryData.page) {
            _this11.paging.page = _this11.data.registryData.page;
          }
          _this11.paging.totalRows = _this11.data.registryData.totalItems;
          //инициализация полей реестра
          _this11.fieldsHelper.initDisplayFilters();
          //инициализация сортировки
          var defOrder = _this11.data.registry.defaultOrder;
          if (orderField) {
            var orderFieldInDisplayFields = _this11.data.displayFields.find(function (f) {
              return f.id == orderField.id;
            });
            if (!orderFieldInDisplayFields) {
              _this11.data.displayFields.forEach(function (f) {
                return f.sortOrder = null;
              });
              orderField = null;
            }
          }
          if (!orderField && defOrder) {
            //todo. наверное нужно заменить this.data.registry.fields на this.data.fields
            orderField = _this11.data.registry.fields.find(function (x) {
              return x.id == defOrder.fieldId;
            });
            if (orderField) {
              orderField.sortOrder = defOrder.ascending ? OrderDirection.asc : OrderDirection.desc;
            }
          }
          //установка номеров строк
          _this11.data.registryData.rows.forEach(function (row, ind) {
            return row.rownum = (Math.max(_this11.paging.page, 1) - 1) * _this11.paging.pageSize + ind + 1;
          });
        } catch (ex) {
          errorHandle("Ошибка обработки данных: " + ex.message);
          return;
        }
        unsetLoadingState();
        _this11.state.emptyData = !registryData.rows.length;
      }, function (response) {
        if (response && response.status === 401) {
          _this11.$dialogs.message(_this11.language.Generic.Common.kTimeOutOccured4Ajax).then(function () {
            return _this11.$window.location.pathname = "/";
          });
          return;
        }
        errorHandle("Ошибка загрузки данных " + (response && response.data ? response.data.message + (response.data.details ? " " + response.data.details : "") : ""));
      });
    }
  }, {
    key: "clearLoad",
    value: function clearLoad() {
      var _this12 = this;
      this.paging.page = 1;
      if (this.data.search.fieldId && this.data.search && this.data.search.fields && this.data.search.fields.length && !this.data.search.fields.find(function (item) {
        return item.id === _this12.data.search.fieldId;
      })) {
        this.data.search.fieldId = this.data.search.fields[0].id;
        this.data.search.text = null;
      }
      ;
      this.load();
    }
  }, {
    key: "selectAll",
    value: function selectAll(event) {
      var _this13 = this;
      if (this.state.withMultiSelection && this.data.registryData.rows && this.data.registryData.rows.length) {
        if (event.target.checked) {
          this.data.registryData.rows.forEach(function (row) {
            if (!_this13.selection.isSelected(row)) {
              if (_this13.registry.selectableClick) {
                _this13.registry.selectableClick(row);
              } else {
                _this13.selection.select(row);
              }
            }
          });
        } else {
          this.data.registryData.rows.forEach(function (row) {
            if (_this13.selection.isSelected(row)) {
              if (_this13.registry.selectableClick) {
                _this13.registry.selectableClick(row);
              } else {
                _this13.selection.select(row);
              }
            }
          });
        }
      }
    }
  }, {
    key: "selectAllRecords",
    value: function selectAllRecords() {
      var _this14 = this;
      if (!this.allRecordsLoaded) {
        var initRequestField = function initRequestField() {
          var fp = _this14.filterInfo.filterPanel.getValue();
          var filterValues = fp.getValues();
          var chain = _.chain(_this14.data.fields).filter(function (field) {
            if (!field.dependencies) {
              return true;
            }
            return new _dependencyTracker.DependencyTracker(field.dependencies).isSatisfied(filterValues);
          }).pluck("id");
          return chain.value();
        };
        var fp = this.filterInfo.filterPanel.getValue();
        var data = {
          filterContext: {
            selectedData: fp.getCtxValues()
          },
          fields: initRequestField(),
          page: 0,
          pageSize: 0,
          search: null,
          order: null
        };
        this.$longWork.execute(this.repository.getData(this.registry.url, data)).then(function (registryData) {
          _this14.$longWork.close;
          _this14.selection.dropSelect();
          registryData.rows.forEach(function (row) {
            if (_this14.registry.selectableClick) {
              _this14.registry.selectableClick(row);
            } else {
              _this14.selection.select(row);
            }
          });
        });
      } else {
        this.selection.dropSelect();
      }
      this.allRecordsLoaded = !this.allRecordsLoaded;
    }
    //экспорт данных
  }, {
    key: "export",
    value: function _export() {
      var _this15 = this;
      var getDefaultExportFields = function getDefaultExportFields() {
        var exportFields = _this15.data.displayFields;
        if (exportFields) {
          exportFields = exportFields.filter(function (field) {
            return field["default"];
          });
        }
        return exportFields;
      };
      if (!this.data.displayFields) {
        this.fieldsHelper.initDisplayFilters();
        this.data.displayFields = getDefaultExportFields();
      }
      var fp = this.filterInfo.filterPanel.getValue();
      if (!fp.validate()) {
        return;
      }
      var data = {
        filterContext: {
          selectedData: fp.getCtxValues()
        },
        fields: _.pluck(this.data.displayFields, "id"),
        search: this.data.search,
        order: null,
        page: null,
        pageSize: null
      };
      var orderField = this.data.displayFields.find(function (f) {
        return typeof f.sortOrder != "undefined" && f.sortOrder != null;
      });
      if (orderField) {
        data.order = {
          fieldId: orderField.id,
          ascending: orderField.sortOrder === OrderDirection.asc
        };
      }
      this.state.exporting = true;
      var wait = this.$dialogs.wait("Операция выполняется");
      this.repository.exportData(this.registry.url, data).then(function (fileId) {
        wait.close();
        var isValidTempFileId = /^[0-9a-f]{24}$/i.test(fileId);
        if (!isValidTempFileId) {
          _this15.$alerts.error("Ошибка экспорта данных.", "Неизвестный ответ");
          return;
        }
        _this15.downloadService.downloadFile("/webapi/files/".concat(fileId));
        _this15.state.exporting = false;
      }, function (response) {
        _this15.state.exporting = false;
        _this15.$alerts.error("Ошибка экспорта данных.", response.data && response.data.message);
        wait.close();
      });
    }
  }, {
    key: "execCmd",
    value:
    //выполнение команды реестра
    function execCmd(cmd) {
      var _this16 = this;
      var confirms = [];
      if (cmd.confirm) {
        confirms.push(function () {
          return _this16.$dialogs.confirm(cmd.confirm);
        });
      }
      extDeferred.when(confirms).then(function () {
        var fp = _this16.filterInfo.filterPanel.getValue();
        var wait = _this16.$dialogs.wait("Операция выполняется");
        var data = {
          itemId: _.pluck(_this16.selection.selected, "id"),
          filterContext: {
            selectedData: fp.getCtxValues()
          }
        };
        _this16.repository.execCommand(_this16.registry.url, cmd.id, data).then(function (result) {
          wait.close();
          if (result.success) {
            _this16.$dialogs.message(result.message);
            _this16.load();
          } else {
            _this16.$dialogs.error(result.message);
            if (result.needReload) {
              _this16.load();
            }
          }
        }, function (response) {
          _this16.$dialogs.error(response.data && response.data.message, "Ошибка выполнения команды");
          wait.close();
        });
      });
    }
  }, {
    key: "settings",
    value:
    //настройки
    function settings() {
      var _this17 = this;
      var availableFields = this.fieldsHelper.initAvailableFields();
      var _oneCheckedOnly = function oneCheckedOnly(checked) {
        return checked && _.countBy(chooseFields, function (field) {
          return field.selected ? 'checked' : 'notChecked';
        }).checked === 1;
      };
      var chooseFields = availableFields.map(function (f) {
        return {
          id: f.id,
          title: f.title,
          selected: _this17.data.fields.find(function (x) {
            return x.id == f.id;
          }) ? true : false,
          oneCheckedOnly: function oneCheckedOnly(checked) {
            return _oneCheckedOnly(checked);
          }
        };
      });
      var modalInstance = this.$uibModal.open({
        template: RegistrySettingsComponent.template,
        controller: RegistrySettingsComponent.controller,
        controllerAs: RegistrySettingsComponent.controllerAs,
        resolve: {
          fields: function fields() {
            return chooseFields;
          }
        }
      });
      modalInstance.result.then(function (fields) {
        var currentFieldsIds = _this17.data.fields.map(function (f) {
          return f.id;
        });
        var choosingFieldsIds = fields.map(function (f) {
          return f.id;
        });
        var selectedFieldsIds = fields.filter(function (f) {
          return f.selected;
        }).map(function (f) {
          return f.id;
        });
        //todo. что тут творится?
        var fieldIds = _.chain(_this17.data.registry.fields).pluck("id").difference(choosingFieldsIds).intersection(currentFieldsIds).union(selectedFieldsIds).value();
        var notSelectedFields = _this17.data.fields.filter(function (f) {
          return fieldIds.indexOf(f.id) == -1;
        });
        notSelectedFields.forEach(function (f) {
          return f.sortOrder = null;
        });
        _this17.data.fields = _this17.data.registry.fields.filter(function (item) {
          return fieldIds.indexOf(item.id) !== -1;
        });
        _this17.data.displayFields = _this17.data.displayFields.filter(function (item) {
          return fieldIds.indexOf(item.id) !== -1;
        });
        _this17.load();
      });
    }
  }]);
  return RegistryController;
}();
exports.RegistryController = RegistryController;
var RegistryFieldDirective = function RegistryFieldDirective($compile) {
  var linker = function linker(scope, element) {
    var decorator = scope.field.decorator;
    scope.content = scope.row[scope.field.id];
    var template = "<span>{{content}}</span>";
    if (decorator) {
      if (decorator.type) {
        //устаревшее. оставлено для обратной совместимости
        if (decorator.type === "link") {
          scope.action = decorator.action;
          template = "<a href=\"javascript:void(0);\" ng-click=\"action(row, filterInfo)\">{{content}}</a>";
        }
        if (decorator.type === "map") {
          scope.content = decorator.map(scope.content);
        }
        if (decorator.type === "preserveWhiteSpace") {
          element.css("white-space", "pre-line");
        }
        if (decorator.type === "text-center") {
          element.parent().addClass("text-center");
        }
      }
      if (decorator.activate) {
        decorator.activate(scope, element);
      }
      if (decorator.template) {
        template = decorator.template;
      }
    }
    element.html(template).show();
    $compile(element.contents())(scope);
  };
  return {
    restrict: "E",
    replace: true,
    link: linker,
    scope: {
      field: "=",
      row: "=",
      filterInfo: "="
    }
  };
};
exports.RegistryFieldDirective = RegistryFieldDirective;
var RegistrySettingsController = /*#__PURE__*/function () {
  RegistrySettingsController.$inject = ["$uibModalInstance", "fields"];
  /*@ngInject*/
  function RegistrySettingsController($uibModalInstance, fields) {
    _classCallCheck(this, RegistrySettingsController);
    this.$uibModalInstance = $uibModalInstance;
    this.fields = fields;
  }
  _createClass(RegistrySettingsController, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "set",
    value: function set() {
      this.$uibModalInstance.close(this.fields);
    }
  }]);
  return RegistrySettingsController;
}();
var SetRegistryFieldSearchCtrl = /*#__PURE__*/function () {
  SetRegistryFieldSearchCtrl.$inject = ["$uibModalInstance", "search", "field"];
  /*@ngInject*/
  function SetRegistryFieldSearchCtrl($uibModalInstance, search, field) {
    _classCallCheck(this, SetRegistryFieldSearchCtrl);
    this.$uibModalInstance = $uibModalInstance;
    this.search = search;
    this.field = field;
  }
  _createClass(SetRegistryFieldSearchCtrl, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "set",
    value: function set() {
      this.$uibModalInstance.close(this.search);
    }
  }]);
  return SetRegistryFieldSearchCtrl;
}();
var SetRegistryFieldSearchComponent = {
  controller: SetRegistryFieldSearchCtrl,
  controllerAs: "$ctrl",
  template: "<div class=\"bootstrap-dialog type-primary\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\">\n\t\t\t\t\t\t\t<h4 class=\"modal-title\">\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043F\u043E\u043B\u044E \"{{$ctrl.field.title}}\"</h4> \n\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" ng-model=\"$ctrl.search\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button class=\"btn btn-primary ng-binding\" ng-click=\"$ctrl.set()\">\u041E\u041A</button>\n\t\t\t\t</div>\n\t\t\t</div>"
};
var RegistrySettingsComponent = {
  controller: RegistrySettingsController,
  controllerAs: "$ctrl",
  template: "<div class=\"bootstrap-dialog type-primary\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-title\">\n\t\t\t\t\t\t<h4 class=\"modal-title\">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</h4>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<h4>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u043B\u044F</h4>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"checkbox\" ng-repeat=\"field in $ctrl.fields\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"field.selected\" ng-disabled=\"field.oneCheckedOnly(field.selected)\"> {{field.title}}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button class=\"btn btn-primary ng-binding\" ng-click=\"$ctrl.set()\">\u041E\u041A</button>\n\t\t\t\t</div>\n\t\t\t</div>"
};

/***/ }),
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MultiSelectable = /*#__PURE__*/function () {
  function MultiSelectable() {
    _classCallCheck(this, MultiSelectable);
    this.items = [];
  }
  _createClass(MultiSelectable, [{
    key: "selected",
    get: function get() {
      return this.items;
    }
  }, {
    key: "isSelected",
    value: function isSelected(val) {
      var currIdx = this.items.indexOf(val);
      return currIdx !== -1;
    }
  }, {
    key: "select",
    value: function select(val) {
      var currIdx = this.items.indexOf(val);
      if (currIdx !== -1) {
        this.items.splice(currIdx, 1);
      } else {
        this.items.push(val);
      }
    }
  }, {
    key: "dropSelect",
    value: function dropSelect() {
      this.items = [];
    }
  }, {
    key: "toggleSelectAll",
    value: function toggleSelectAll(possible) {
      var _this = this;
      if (this.items.length == possible.length) {
        this.dropSelect();
      } else {
        this.dropSelect();
        possible.forEach(function (s) {
          return _this.select(s);
        });
      }
    }
  }]);
  return MultiSelectable;
}();
exports["default"] = MultiSelectable;

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistryRepository = void 0;
var _baseRepository = __webpack_require__(19);
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
var RegistryRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(RegistryRepository, _BaseRepository);
  var _super = _createSuper(RegistryRepository);
  function RegistryRepository() {
    _classCallCheck(this, RegistryRepository);
    return _super.apply(this, arguments);
  }
  _createClass(RegistryRepository, [{
    key: "getDescription",
    value: function getDescription(registryUrl) {
      return this.$http.get(registryUrl).then(this.handleResponse);
    }
  }, {
    key: "getState",
    value: function getState(registryUrl) {
      return this.$http.get(registryUrl + "/state").then(this.handleResponse);
    }
  }, {
    key: "getData",
    value: function getData(registryUrl, data) {
      return this.$http.post(registryUrl, data).then(this.handleResponse);
    }
  }, {
    key: "exportData",
    value: function exportData(registryUrl, data) {
      return this.$http.post(registryUrl, data, {
        params: {
          "export": true
        }
      }).then(this.handleResponse);
    }
  }, {
    key: "execCommand",
    value: function execCommand(registryUrl, commandId, data) {
      return this.$http.post("".concat(registryUrl, "/command/").concat(commandId), data).then(this.handleResponse);
    }
  }]);
  return RegistryRepository;
}(_baseRepository.BaseRepository);
exports.RegistryRepository = RegistryRepository;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistrySelectedComponent = void 0;
var _registrySelected = __webpack_require__(51);
var RegistrySelectedComponent = {
  templateUrl: "/static/dist/app/global/components/registry/selected/registry.selected.component.html",
  controller: _registrySelected.RegistrySelectedController,
  controllerAs: "ctrl"
};
exports.RegistrySelectedComponent = RegistrySelectedComponent;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistrySelectedController = void 0;
var _netcityModalCtrl = __webpack_require__(30);
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
var RegistrySelectedController = /*#__PURE__*/function (_NetCityModalControll) {
  RegistrySelectedController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "header", "registryController"];
  _inherits(RegistrySelectedController, _NetCityModalControll);
  var _super = _createSuper(RegistrySelectedController);
  /*@ngInject*/
  function RegistrySelectedController($scope, $uibModalInstance, changeTracker, $dialogs, language, header, registryController) {
    var _this;
    _classCallCheck(this, RegistrySelectedController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.header = header;
    _this.registryController = registryController;
    _this.state = {
      dataReady: false
    };
    return _this;
  }
  _createClass(RegistrySelectedController, [{
    key: "$onInit",
    value: function $onInit() {
      this.state.dataReady = true;
    }
  }]);
  return RegistrySelectedController;
}(_netcityModalCtrl.NetCityModalController);
exports.RegistrySelectedController = RegistrySelectedController;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUploadService = exports.FileUploadDirective = exports.FileAttachmentsServiceProvider = exports.FileAttachmentsComponent = exports.FileAttachments = exports.EditAttachmentService = exports.AttachmentsRepository = void 0;
var _repository = __webpack_require__(53);
var _common = __webpack_require__(10);
var _urlHelper = __webpack_require__(4);
var _common2 = __webpack_require__(46);
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
var FileAttachments = /*#__PURE__*/function () {
  function FileAttachments(rawFiles) {
    _classCallCheck(this, FileAttachments);
    this.rawFiles = rawFiles;
    this.files = this.files || [];
    this.rawFiles = this.rawFiles || [];
    this.mapFiles();
  }
  _createClass(FileAttachments, [{
    key: "mapFiles",
    value: function mapFiles() {
      this.files = this.rawFiles.map(function (rawFile) {
        return {
          id: rawFile.id,
          name: rawFile.name,
          description: rawFile.description || "",
          attachmentType: rawFile.attachmentType,
          isNew: false,
          isCanDeleteFromDb: rawFile.isCanDeleteFromDb
        };
      });
    }
  }, {
    key: "add",
    value: function add(file) {
      this.files.push(file);
      this.files = this.files.sort(function (a, b) {
        if (a.attachmentType > b.attachmentType) {
          return 1;
        } else if (a.attachmentType < b.attachmentType) {
          return -1;
        } else {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          }
          return 0;
        }
      });
    }
  }, {
    key: "removeById",
    value: function removeById(ids) {
      if (Array.isArray(ids)) {
        this.files = this.files.filter(function (f) {
          return ids.indexOf(f.id) === -1;
        });
      } else {
        this.files = this.files.filter(function (f) {
          return f.id !== ids;
        });
      }
    }
  }, {
    key: "exist",
    value: function exist() {
      return !!this.files.length;
    }
  }, {
    key: "current",
    value: function current() {
      return this.files[0];
    }
  }, {
    key: "getById",
    value: function getById(id) {
      // if not id then return
      return this.files.find(function (f) {
        return f.id === id;
      });
    }
  }]);
  return FileAttachments;
}();
exports.FileAttachments = FileAttachments;
var FileUploadService = /*#__PURE__*/_createClass(function FileUploadService(uploadUrl, extensions, uploadLimits, imageFile,
// переход с локальных uploadLimits на функции определения лимита
sizeLimit) {
  _classCallCheck(this, FileUploadService);
  this.uploadUrl = uploadUrl;
  this.extensions = extensions;
  this.uploadLimits = uploadLimits;
  this.imageFile = imageFile;
  this.sizeLimit = sizeLimit;
});
/*@ngInject*/
exports.FileUploadService = FileUploadService;
var FileUploadDirective = function FileUploadDirective(appContext, $dialogs, language, $longWork, Upload, settingsProvider) {
  return {
    restrict: 'E',
    scope: {
      service: "=",
      withDescription: "=?"
    },
    template: "\n\t\t\t<div class=\"form-group\" ng-if=\"service.imageFile && service.withPreview && previewFileSrc\" style=\"text-align: center;\">\n\t\t\t\t<img ng-src=\"{{previewFileSrc}}\" alt=\"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\" style=\"max-width: 400px; max-height: 400px;\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class='alert alert-info'  ng-if='service.hint'>\n\t\t\t\t\t\u0424\u0430\u0439\u043B\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043B\u044E\u0431\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430. \u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0438\u043F\u043E\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C {{service.uploadLimits.fileSizeLimit / 1024}} \u041C\u0411\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<span class=\"btn btn-primary btn-file input-group-addon\">\n\t\t\t\t\t\t{{language.Generic.Common.kSelectFile}} \n\t\t\t\t\t\t<input track-changes type=\"file\" id=\"file\" ngf-select ngf-model-options=\"{updateOn: 'change drop dropUrl paste', allowInvalid: false, debounce: 0}\" ng-model=\"file\" ngf-change=\"uploadChange($file)\" name=\"fileAttachment\" class=\"form-control\" accept=\"{{acceptFiles}}\">\n\t\t\t\t\t</span>\n\t\t\t\t\t<input type=\"text\" class=\"form-control file-input-filename\" id=\"fileName\" name=\"fileName\" ng-model=\"filename\" readonly>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" ng-if=\"withDescription\">\n\t\t\t\t<label class=\"control-label\">{{language.Generic.Curriculum.kDescription}}</label>\n\t\t\t\t<textarea class=\"form-control\" rows=\"10\" ng-model=\"$parent.description\" maxlength=\"4000\" name=\"description\" style=\"border: 1px solid #8baed8;\"></textarea>\n\t\t\t</div>",
    link: function link(scope) {
      scope.language = language;
      settingsProvider.UploadLimits.then(function (result) {
        scope.uploadLimits = result;
        var service = scope.service;
        // тут должна отрабатывать функция определения лимита
        // желательно впоследствии сделать безусловным и избавиться от локальных uploadLimits
        if (!service.uploadLimits) {
          // если произошёл переход на функцию лимита
          if (service.sizeLimit) {
            service.uploadLimits = {
              fileSizeLimit: service.sizeLimit(scope.uploadLimits)
            };
          } else {
            // если ограничение не выставлено ни в каком виде - значение по умолчанию
            service.uploadLimits = {
              fileSizeLimit: scope.uploadLimits.fileSizeLimit
            };
          }
        }
        scope.file = {};
        scope.description = "";
        scope.uploadChange = function ($file) {
          scope.file = {};
          scope.filename = "";
          if ($file) {
            scope.file = $file;
            scope.filename = $file.name;
            if (service.imageFile && service.withPreview) {
              var prepareFile = Promise.resolve(scope.file);
              if (service.needResize && service.needResize(scope.file.size / 1024, scope.uploadLimits)) {
                prepareFile = resize(scope.file);
              }
              prepareFile.then(function (file) {
                var reader = new FileReader();
                reader.onload = function () {
                  scope.previewFileSrc = reader.result;
                };
                reader.readAsDataURL(file);
              });
            }
          }
        };
        if (service.extensions && service.extensions(scope.uploadLimits).length) {
          scope.acceptFiles = service.extensions(scope.uploadLimits).reduce(function (msg, ext, ind) {
            return msg += (ind > 0 ? "," : "") + (ext.startsWith('.') ? "" : ".") + ext;
          }, "");
        } else if (service.imageFile) {
          scope.acceptFiles = "image/*";
        }
        var eventEmmit = new _common2.EventEmitter();
        var prepareUpload = function prepareUpload() {
          var url = service.uploadUrl;
          if (service.queryStringParams) {
            url = new _urlHelper.UrlHelper().makeUrl(service.uploadUrl, service.queryStringParams, true);
          }
          var extraData = null;
          if (scope.withDescription && scope.description) {
            extraData = {
              description: scope.description
            };
          }
          if (service.getSubmitData) {
            extraData = angular.extend({}, service.getSubmitData(), extraData || {});
          }
          var data = {
            name: scope.filename
          };
          if (extraData) {
            data = angular.extend(data, extraData);
          }
          var document = {
            file: scope.file,
            data: JSON.stringify(data)
          };
          var config = {
            url: url,
            method: "POST",
            data: document
          };
          $longWork.show();
          uploadFile(config);
        };
        var handleSuccess = function handleSuccess(response) {
          $longWork.close();
          if (response.status != 204 && !response.data) {
            $dialogs.error(language.Generic.Common.kUnexpErr);
            return;
          }
          var uploadResults = {
            result: response.data,
            fileName: scope.filename,
            description: scope.description
          };
          if (service.onFileUploadDone) {
            service.onFileUploadDone(uploadResults);
          }
        };
        var handleError = function handleError(response) {
          $longWork.close();
          if (service.onFileUploadFail) {
            service.onFileUploadFail(response.data);
          }
          var errInformer = function errInformer(message) {
            return $dialogs.error(message);
          };
          var messageInformer = function messageInformer(message) {
            return $dialogs.message(message);
          };
          return new _common.CommonXhrErrorHandler(errInformer, messageInformer, function () {
            return appContext;
          }, language).handleErrorResponse(response);
        };
        var uploadFile = function uploadFile(config) {
          return Upload.upload(config).then(handleSuccess, handleError);
        };
        var checkImage = function checkImage(fileObject) {
          return new Promise(function (resolve) {
            var img = new Image();
            var objUrl;
            try {
              objUrl = URL.createObjectURL(fileObject);
            } catch (e) {
              return resolve(true);
            }
            img.onload = function () {
              try {
                URL.revokeObjectURL(objUrl);
              } catch (e) {
                return resolve(true);
              }
              return resolve(true);
            };
            img.onerror = function () {
              try {
                URL.revokeObjectURL(objUrl);
              } catch (e) {
                return resolve(false);
              }
              return resolve(false);
            };
            try {
              img.src = objUrl;
            } catch (e) {
              return resolve(true);
            }
          });
        };
        service.onFileUploadDone = function (data) {
          eventEmmit.emit(data);
        };
        service.onFileUploadFail = function (data) {
          if ($longWork.isShowing) {
            $longWork.close();
          }
          eventEmmit.emit(null);
        };
        var resize = function resize(file) {
          var fileResizeOptions = {};
          if (service.quality) {
            fileResizeOptions.quality = service.quality(scope.uploadLimits);
          }
          if (service.maxWidth) {
            fileResizeOptions.width = service.maxWidth(scope.uploadLimits);
          }
          return Upload.resize(file, fileResizeOptions);
        };
        var validateSubmit = function validateSubmit() {
          return new Promise(function (resolve) {
            var defaultStrings = $dialogs.getDefaultStrings();
            var okMessage = defaultStrings.ok;
            if (!scope.file || !scope.filename) {
              $dialogs.translate({
                ok: language.Generic.Common.kOk
              });
              $dialogs.message('Необходимо выбрать файл').then(function () {
                $dialogs.translate({
                  ok: okMessage
                });
              }, function () {
                $dialogs.translate({
                  ok: okMessage
                });
              });
              return resolve(false);
            }
            var extensions = service.extensions;
            if (extensions && extensions(scope.uploadLimits).length) {
              var isExtensionsCorrect = extensions(scope.uploadLimits).some(function (ext) {
                return scope.filename.toLowerCase().endsWith(ext);
              });
              if (!isExtensionsCorrect) {
                var allowedExtMsg = "Разрешенные расширения для загрузки: " + extensions(scope.uploadLimits).reduce(function (msg, ext) {
                  return msg += ", " + ext;
                });
                $dialogs.translate({
                  ok: language.Generic.Common.kOk
                });
                $dialogs.message('Неверное расширение файла\n' + allowedExtMsg).then(function () {
                  $dialogs.translate({
                    ok: okMessage
                  });
                }, function () {
                  $dialogs.translate({
                    ok: okMessage
                  });
                });
                return resolve(false);
              }
            }
            var prepareFile = Promise.resolve(scope.file);
            $longWork.show();
            var imageExts = ['.tiff', '.pjp', '.jfif', '.bmp', '.gif', '.svg', '.png', '.xbm', '.dlib', '.jxl', '.jpeg', '.svgz', '.jpg', '.webp', '.ico', '.tif', '.pjpeg', '.avif'];
            var needResize = service.needResize && service.needResize(scope.file.size / 1024, scope.uploadLimits);
            var isImage = imageExts.some(function (ext) {
              return scope.filename.toLowerCase().endsWith(ext);
            });
            if (isImage && needResize) {
              prepareFile = resize(scope.file);
            }
            prepareFile.then(function (file) {
              $longWork.close();
              scope.file = file;
              //общие ограничения на загрузку
              if (scope.file.size && service.uploadLimits.fileSizeLimit && scope.file.size > service.uploadLimits.fileSizeLimit * 1024) {
                $dialogs.translate({
                  ok: language.Generic.Common.kOk
                });
                var limitSize;
                if (service.uploadLimits.fileSizeLimit > 1024) {
                  limitSize = service.uploadLimits.fileSizeLimit / 1024 + ' Мб';
                } else {
                  limitSize = service.uploadLimits.fileSizeLimit + ' Кб';
                }
                $dialogs.error(language.Generic.LearnApp.kServErrFileTooLarge + limitSize)["finally"](function () {
                  $dialogs.translate({
                    ok: okMessage
                  });
                });
                return resolve(false);
              }
              if (service.imageFile) {
                return checkImage(scope.file).then(function (validImage) {
                  if (validImage) {
                    return resolve(true);
                  } else {
                    $dialogs.translate({
                      ok: language.Generic.Common.kOk
                    });
                    $dialogs.message('Загружаемый файл не является изображением или пустой')["finally"](function () {
                      $dialogs.translate({
                        ok: okMessage
                      });
                    });
                    return resolve(false);
                  }
                });
              }
              return resolve(true);
            });
          });
        };
        service.submit = function () {
          return validateSubmit().then(function (canSubmit) {
            return new Promise(function (resolve, reject) {
              if (canSubmit) {
                prepareUpload();
                eventEmmit.off();
                eventEmmit.on(function (uploadResult) {
                  //см. onFileUploadFail
                  if (uploadResult == null) {
                    reject();
                  } else {
                    resolve(uploadResult);
                  }
                });
              } else {
                reject();
              }
            });
          });
        };
      });
    }
  };
};
FileUploadDirective.$inject = ["appContext", "$dialogs", "language", "$longWork", "Upload", "settingsProvider"];
exports.FileUploadDirective = FileUploadDirective;
var EditAttachmentController = /*#__PURE__*/function () {
  EditAttachmentController.$inject = ["$uibModalInstance", "$alerts", "attachmentsRepository", "changeTracker", "language", "file", "withDescription", "fileExtensions", "uploadLimits", "context", "attachmentTypes", "imageFile", "needResize", "maxWidth", "quality", "setWasChanged", "sizeLimit", "hint"];
  /*@ngInject*/
  function EditAttachmentController($uibModalInstance, $alerts, attachmentsRepository, changeTracker, language, file, withDescription, fileExtensions, uploadLimits, context, attachmentTypes, imageFile, needResize, maxWidth, quality, setWasChanged, sizeLimit, hint) {
    var _this = this;
    _classCallCheck(this, EditAttachmentController);
    this.$uibModalInstance = $uibModalInstance;
    this.$alerts = $alerts;
    this.attachmentsRepository = attachmentsRepository;
    this.changeTracker = changeTracker;
    this.language = language;
    this.file = file;
    this.withDescription = withDescription;
    this.fileExtensions = fileExtensions;
    this.uploadLimits = uploadLimits;
    this.context = context;
    this.attachmentTypes = attachmentTypes;
    this.imageFile = imageFile;
    this.needResize = needResize;
    this.maxWidth = maxWidth;
    this.quality = quality;
    this.setWasChanged = setWasChanged;
    this.sizeLimit = sizeLimit;
    this.hint = hint;
    this.mode = {
      attach: false,
      edit: false
    };
    if (this.file.id) {
      this.mode.edit = true;
      this.header = language.Generic.Common.kEditAttachmentDescription;
    } else {
      this.header = language.Generic.Buttons.kAttachFile;
      this.mode.attach = true;
      var uploadService = new FileUploadService('/webapi/attachments', this.fileExtensions, this.uploadLimits, this.imageFile, this.sizeLimit);
      uploadService.needResize = needResize;
      uploadService.maxWidth = maxWidth;
      uploadService.quality = quality;
      uploadService.hint = hint;
      uploadService.getSubmitData = function () {
        var extraData = Object.assign({
          description: _this.file.description,
          attachmentType: _this.attachmentType && _this.attachmentType.id
        }, _this.context);
        return extraData;
      };
      this.fileUploadService = uploadService;
    }
    this.withTypes = this.attachmentTypes && this.attachmentTypes.length > 0;
    if (this.file.attachmentType && this.attachmentTypes) {
      this.attachmentType = this.attachmentTypes.find(function (t) {
        return t.id == _this.file.attachmentType;
      });
    } else if (this.withTypes) {
      this.attachmentType = this.attachmentTypes[0];
    }
  }
  _createClass(EditAttachmentController, [{
    key: "attach",
    value: function attach() {
      var _this2 = this;
      this.fileUploadService.submit().then(function (uploadResult) {
        if (!uploadResult) {
          return;
        }
        var description = uploadResult.description;
        if (_this2.attachmentType) {
          description = "(" + _this2.attachmentType.name + ") " + description;
        }
        var file = {
          id: uploadResult.result,
          name: uploadResult.fileName,
          description: description,
          attachmentType: _this2.attachmentType && _this2.attachmentType.id,
          isNew: true
        };
        if (_this2.setWasChanged !== false) {
          _this2.changeTracker.dataWasChanged();
        }
        _this2.$alerts.success("Файл успешно загружен");
        _this2.$uibModalInstance.close(file);
      }, function () {});
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      this.attachmentsRepository.editDescription(this.file.id, this.file.description).then(function () {
        _this3.$alerts.success("Описание успешно изменено");
        _this3.$uibModalInstance.close(_this3.file);
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return EditAttachmentController;
}();
var FileAttachmentsServiceProvider = /*#__PURE__*/function () {
  FileAttachmentsServiceProvider.$inject = ["$uibModal", "attachmentsRepository", "$dialogs", "$longWork"];
  /*@ngInject*/
  function FileAttachmentsServiceProvider($uibModal, attachmentsRepository, $dialogs, $longWork) {
    _classCallCheck(this, FileAttachmentsServiceProvider);
    this.$uibModal = $uibModal;
    this.attachmentsRepository = attachmentsRepository;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
  }
  _createClass(FileAttachmentsServiceProvider, [{
    key: "getEditAttachmentsService",
    value: function getEditAttachmentsService(options, context) {
      return new EditAttachmentService(this.$uibModal, this.attachmentsRepository, this.$dialogs, this.$longWork, options, context);
    }
  }]);
  return FileAttachmentsServiceProvider;
}();
exports.FileAttachmentsServiceProvider = FileAttachmentsServiceProvider;
var EditAttachmentService = /*#__PURE__*/function () {
  function EditAttachmentService($uibModal, attachmentsRepository, $dialogs, $longWork, options, context) {
    _classCallCheck(this, EditAttachmentService);
    this.$uibModal = $uibModal;
    this.attachmentsRepository = attachmentsRepository;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.options = options;
    this.context = context;
  }
  _createClass(EditAttachmentService, [{
    key: "attachFile",
    value: function attachFile() {
      var _this4 = this;
      var _file = {
        id: 0,
        name: "",
        description: "",
        isNew: true
      };
      var modalInstance = this.$uibModal.open({
        template: EditAttachmentComponent.template,
        controller: EditAttachmentComponent.controller,
        controllerAs: "$ctrl",
        resolve: {
          file: function file() {
            return _file;
          },
          context: function context() {
            return _this4.context;
          },
          fileExtensions: function fileExtensions() {
            return _this4.options.filesExtensions;
          },
          uploadLimits: function uploadLimits() {
            return _this4.options.uploadLimits;
          },
          withDescription: function withDescription() {
            return _this4.options.showDescription;
          },
          attachmentTypes: function attachmentTypes() {
            return _this4.options.attachmentTypes;
          },
          imageFile: function imageFile() {
            return _this4.options.imageFile;
          },
          needResize: function needResize() {
            return _this4.options.needResize;
          },
          maxWidth: function maxWidth() {
            return _this4.options.maxWidth;
          },
          quality: function quality() {
            return _this4.options.quality;
          },
          setWasChanged: function setWasChanged() {
            return _this4.options.setWasChanged;
          },
          sizeLimit: function sizeLimit() {
            return _this4.options.sizeLimit;
          },
          hint: function hint() {
            return _this4.options.hint;
          }
        }
      });
      var promise = modalInstance.result;
      promise.then(function (file) {
        if (_this4.options.onSuccessAttach) {
          _this4.options.onSuccessAttach(file);
        }
      });
      return promise;
    }
  }, {
    key: "editDescriptionFile",
    value: function editDescriptionFile(_file2) {
      var _this5 = this;
      var modalInstance = this.$uibModal.open({
        template: EditAttachmentComponent.template,
        controller: EditAttachmentComponent.controller,
        controllerAs: "$ctrl",
        resolve: {
          file: function file() {
            return Object.assign({}, _file2);
          },
          context: function context() {
            return _this5.context;
          },
          fileExtensions: function fileExtensions() {
            return _this5.options.filesExtensions;
          },
          uploadLimits: function uploadLimits() {
            return _this5.options.uploadLimits;
          },
          withDescription: function withDescription() {
            return _this5.options.showDescription;
          },
          attachmentTypes: function attachmentTypes() {
            return _this5.options.attachmentTypes;
          },
          imageFile: function imageFile() {
            return _this5.options.imageFile;
          },
          needResize: function needResize() {
            return _this5.options.needResize;
          },
          maxWidth: function maxWidth() {
            return _this5.options.maxWidth;
          },
          quality: function quality() {
            return _this5.options.quality;
          },
          sizeLimit: function sizeLimit() {
            return _this5.options.sizeLimit;
          },
          hint: function hint() {
            return _this5.options.hint;
          },
          setWasChanged: function setWasChanged() {
            return _this5.options.setWasChanged;
          }
        }
      });
      var promise = modalInstance.result;
      promise.then(function (file) {
        if (_this5.options.onSuccessAttach) {
          _this5.options.onSuccessAttach(file);
        }
      });
      return promise;
    }
  }, {
    key: "delete",
    value: function _delete(file) {
      var _this6 = this;
      return this.$dialogs.confirmDelete("Удалить файл " + file.name + "?").then(function () {
        return _this6.$longWork.execute(_this6.attachmentsRepository["delete"](file.id, _this6.context));
      }).then(function () {
        if (_this6.options.onSuccessDetach) {
          _this6.options.onSuccessDetach(file);
        }
      });
    }
  }]);
  return EditAttachmentService;
}();
exports.EditAttachmentService = EditAttachmentService;
var EditAttachmentComponent = {
  controller: EditAttachmentController,
  template: "\n\t\t\t<div class=\"bootstrap-dialog type-primary\">\n\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<div class=\"bootstrap-dialog-title\">\n\t\t\t\t\t<h4 class=\"modal-title\">{{$ctrl.header}}</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bootstrap-dialog-close-button\">\n\t\t\t\t\t<button class=\"close\" ng-click=\"$ctrl.cancel()\">\xD7</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form name=\"form\" method=\"POST\" enctype=\"multipart/form-data\">\n\n\t\t\t\t<div class=\"form-group\" ng-if=\"$ctrl.withTypes\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label for=\"attachmentType\" class=\"control-label\">\u0422\u0438\u043F \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<select class=\"form-control\" \n\t\t\t\t\t\t\tname=\"attachmentType\" \n\t\t\t\t\t\t\tng-model=\"$ctrl.attachmentType\" \n\t\t\t\t\t\t\tng-options=\"type as type.name for type in $ctrl.attachmentTypes track by type.id\">\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\" ng-if=\"$ctrl.mode.attach\">\n\t\t\t\t\t<file-upload service=\"$ctrl.fileUploadService\" with-description=\"$ctrl.withDescription\"></file-upload>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\" ng-if=\"$ctrl.withDescription && $ctrl.mode.edit\">\n\t\t\t\t\t<label class=\"control-label\">{{$ctrl.language.Generic.Curriculum.kDescription}}</label>\n\t\t\t\t\t<textarea class=\"form-control\" ng-model=\"$ctrl.file.description\" rows=\"10\" maxlength=\"4000\" name=\"description\" style=\"border: 1px solid #8baed8;\"></textarea>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t<div class=\"modal-footer\">\n\n\t\t<button class=\"btn btn-primary btn-sm\" ng-click=\"$ctrl.attach()\" ng-if=\"$ctrl.mode.attach\">\n\t\t\t<span class=\"glyphicon glyphicon-paperclip\"></span> \n\t\t\t<span>{{$ctrl.language.Generic.Buttons.kAttachFile}}</span>\n\t\t</button>\n\n\t\t<button class=\"btn btn-primary btn-sm\" ng-click=\"$ctrl.save()\" ng-if=\"$ctrl.mode.edit\">\n\t\t\t<span class=\"glyphicon glyphicon-floppy-save\"></span>\n\t\t\t<span>{{$ctrl.language.Generic.Buttons.kSave}}</span>\n\t\t</button>\n\n\t\t<button class=\"btn btn-default btn-sm\" ng-click=\"$ctrl.cancel()\">\n\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle\"></span>\n\t\t\t<span>{{$ctrl.language.Generic.Buttons.kCancel}}</span>\n\t\t</button>\n\n\t</div>\n</div>\n"
};
var AttachmentsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(AttachmentsRepository, _BaseRepository);
  var _super = _createSuper(AttachmentsRepository);
  function AttachmentsRepository() {
    _classCallCheck(this, AttachmentsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(AttachmentsRepository, [{
    key: "delete",
    value: function _delete(fileId, context) {
      return this.$http.post('/webapi/attachments/' + fileId + "/delete", context).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editDescription",
    value: function editDescription(fileId, description) {
      var postData = '=' + description;
      var options = {
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
        }
      };
      return this.$http.post('/webapi/attachments/' + fileId + '/description', postData, options).then(this.handleResponse, this.handleError);
    }
  }]);
  return AttachmentsRepository;
}(_repository.BaseRepository);
exports.AttachmentsRepository = AttachmentsRepository;
var FileAttachmentCtrl = /*#__PURE__*/function () {
  FileAttachmentCtrl.$inject = ["language", "$scope", "downloadService", "fileAttachmentsServiceProvider", "$alerts", "$longWork"];
  /*@ngInject*/
  function FileAttachmentCtrl(language, $scope, downloadService, fileAttachmentsServiceProvider, $alerts, $longWork) {
    _classCallCheck(this, FileAttachmentCtrl);
    this.language = language;
    this.$scope = $scope;
    this.downloadService = downloadService;
    this.fileAttachmentsServiceProvider = fileAttachmentsServiceProvider;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
  }
  _createClass(FileAttachmentCtrl, [{
    key: "$onInit",
    value: function $onInit() {
      var _this7 = this;
      if (this.settings && this.settings.data) {
        this.fileAttachments = new FileAttachments(this.settings.data.files || []);
        this.editService = this.fileAttachmentsServiceProvider.getEditAttachmentsService(this.settings.options, this.settings.data.context);
      }
      this.$scope.$watch(function () {
        return _this7.settings && _this7.settings.data && _this7.settings.data.files;
      }, function () {
        if (_this7.settings && _this7.settings.data) {
          _this7.editService = _this7.fileAttachmentsServiceProvider.getEditAttachmentsService(_this7.settings.options, _this7.settings.data.context);
          _this7.fileAttachments = new FileAttachments(_this7.settings.data.files || []);
        }
      });
    }
  }, {
    key: "openAttachment",
    value: function openAttachment(file) {
      var _this8 = this;
      var downloadUrl = "/webapi/attachments/" + file.id;
      this.$longWork.show();
      this.downloadService.downloadFile(downloadUrl, {
        filename: file.name
      }).then(function () {
        return _this8.$longWork.close();
      }, function () {
        return _this8.$longWork.close();
      });
    }
  }, {
    key: "attachFile",
    value: function attachFile() {
      var _this9 = this;
      this.editService.attachFile().then(function (file) {
        _this9.fileAttachments.add(file);
        _this9.settings.data.files = _this9.fileAttachments.files;
      });
    }
  }, {
    key: "editDescription",
    value: function editDescription(file) {
      var _this10 = this;
      this.editService.editDescriptionFile(file).then(function (editedFile) {
        var file = _this10.fileAttachments.getById(editedFile.id);
        file.description = editedFile.description;
        _this10.settings.data.files = _this10.fileAttachments.files;
        _this10.$scope.$applyAsync();
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(file) {
      var _this11 = this;
      if (typeof file.isCanDeleteFromDb !== "undefined" && !file.isCanDeleteFromDb) {
        this.fileAttachments.removeById(file.id);
        this.settings.options.onSuccessDetach(file);
        return;
      }
      this.editService["delete"](file).then(function () {
        _this11.fileAttachments.removeById(file.id);
        _this11.settings.data.files = _this11.fileAttachments.files;
        _this11.$alerts.success("Файл успешно удалён");
        _this11.$scope.$applyAsync();
      });
    }
  }]);
  return FileAttachmentCtrl;
}();
var FileAttachmentsComponent = {
  controller: FileAttachmentCtrl,
  bindings: {
    settings: "="
  },
  template: "\n\t\t<div class=\"file-attachment-block\" ng-class=\"{'multiple': $ctrl.settings.options.multiple}\">\n\t\t\t<div ng-repeat=\"file in $ctrl.fileAttachments.files\" class=\"file-attachment\" title=\"{{file.name + $ctrl.settings.options.showDescription ? ' ' + file.description : ''}}\">\n\t\t\t\t<div class=\"file-info\" ng-click=\"$ctrl.openAttachment(file);\">\n\t\t\t\t\t<span class=\"file-name\">{{file.name}}</span>\n\t\t\t\t\t<span class=\"file-description\" ng-if=\"$ctrl.settings.options.showDescription && file.description\">{{file.description}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"{{file.id}}\" class=\"buttons\" ng-if=\"!$ctrl.settings.options.readonly\">\n\t\t\t\t\t<span ng-click=\"$ctrl.editDescription(file)\" ng-if=\"$ctrl.settings.options.showDescription\" class=\"glyphicon glyphicon-pencil edit-description-button\" aria-hidden=\"true\" title=\"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\"></span>\n\t\t\t\t\t<span ng-click=\"$ctrl.deleteFile(file)\" class=\"glyphicon glyphicon-trash remove-button\" aria-hidden=\"true\" title=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button ng-if=\"!$ctrl.settings.options.readonly && ($ctrl.settings.options.multiple || !$ctrl.fileAttachments.files.length)\" class=\"btn btn-default btn-sm\" type=\"button\" title=\"{{$ctrl.language.Generic.Buttons.kAttachFile}}\" ng-click=\"$ctrl.attachFile()\">\n\t\t\t\t<span class=\"glyphicon glyphicon-paperclip\"></span> \n\t\t\t\t{{$ctrl.language.Generic.Buttons.kAttachFile}}\n\t\t\t</button>\n\t\t</div>"
};
exports.FileAttachmentsComponent = FileAttachmentsComponent;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(10);
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NsPanelComponent = exports.NsAccordionDirective = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var NsPanelController = /*#__PURE__*/function () {
  function NsPanelController($scope, $element) {
    _classCallCheck(this, NsPanelController);
    this.$scope = $scope;
    this.$element = $element;
  }
  _createClass(NsPanelController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.$element.on('show.bs.collapse', function () {
        $(window).trigger('scroll');
        _this.toggleInternal();
      });
      this.$element.on('hide.bs.collapse', function () {
        _this.toggleInternal();
      });
      this.internalExpanded = !!this.expanded;
      if (this.nsAccordion) {
        this.nsAccordion.initPanel(this);
      }
    }
  }, {
    key: "toggleInternal",
    value: function toggleInternal() {
      if (this.toggle && typeof this.toggle == "function") {
        this.toggle();
      }
      this.internalExpanded = !this.internalExpanded;
      if (this.nsAccordion) {
        this.nsAccordion.togglePanel(this);
      }
    }
  }]);
  return NsPanelController;
}();
var NsPanelComponent = {
  restrict: 'E',
  transclude: true,
  require: {
    nsAccordion: "?^^nsAccordion"
  },
  bindings: {
    panelId: "@",
    expanded: "<",
    "class": "@",
    title: '@',
    toggle: "&"
  },
  controller: NsPanelController,
  controllerAs: "$ctrl",
  template: "\n\t\t<div class=\"panel panel-{{$ctrl.class}}\">\n\t\t\t<div class=\"panel-heading\" role=\"tab\" id=\"heading{{$ctrl.panelId}}\">\n\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t<a data-toggle=\"collapse\" ng-class=\"{'collapsed': !$ctrl.expanded}\" data-target=\"#{{$ctrl.panelId}}\" aria-expanded=\"{{$ctrl.expanded}}\" aria-controls=\"{{$ctrl.panelId}}\">\n\t\t\t\t\t{{$ctrl.title}}\n\t\t\t\t\t</a>\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t\t<div id=\"{{$ctrl.panelId}}\" class=\"panel-collapse collapse\" ng-class=\"{'in': $ctrl.expanded}\" aria-labelledby=\"heading{{$ctrl.panelId}}\" role=\"tabpanel\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};
exports.NsPanelComponent = NsPanelComponent;
var NsAccordionController = /*#__PURE__*/function () {
  function NsAccordionController($scope, $element) {
    var _this2 = this;
    _classCallCheck(this, NsAccordionController);
    this.$scope = $scope;
    this.$element = $element;
    this.panels = [];
    this.handle = false;
    $(document).bind("accordion-ready", function () {
      _this2.restoreState();
    });
    $element.on("show.bs.collapse", "div.panel-collapse", function (event) {
      _this2.storeState(event.target.id);
      var collapsedPanel = _this2.panels.find(function (p) {
        return p.panelId == event.target.id;
      });
      if (collapsedPanel) {
        $(".collapse.in:not(#".concat(event.target.id, ")")).collapse("hide");
      }
    });
  }
  _createClass(NsAccordionController, [{
    key: "storeState",
    value: function storeState(panelId) {
      $.cookie("accordion_state", panelId);
    }
  }, {
    key: "restoreState",
    value: function restoreState() {
      var panelId = $.cookie("accordion_state");
      var collapsedPanel = this.panels.find(function (p) {
        return p.panelId == panelId;
      });
      if (collapsedPanel) {
        collapsedPanel.expanded = true;
      }
    }
  }, {
    key: "initPanel",
    value: function initPanel(panelCtrl) {
      console.log("initing " + panelCtrl.panelId);
      this.panels.push(panelCtrl);
    }
  }, {
    key: "togglePanel",
    value: function togglePanel(panelCtrl) {
      console.log("collapse " + panelCtrl.panelId);
    }
  }]);
  return NsAccordionController;
}();
var NsAccordionDirective = function NsAccordionDirective() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      "class": "@",
      accordionId: "@"
    },
    controller: NsAccordionController,
    template: "<div class=\"{{class}}\" id=\"{{accordionId}}\">\n\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t</div>"
  };
};
exports.NsAccordionDirective = NsAccordionDirective;

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NsFormGroupComponent = exports.NsFormComponent = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var NsFormController = /*#__PURE__*/_createClass(function NsFormController() {
  _classCallCheck(this, NsFormController);
});
var NsFormComponent = {
  selector: 'nsForm',
  restrict: 'E',
  transclude: true,
  controller: NsFormController,
  template: "<ng-transclude></ng-transclude>",
  bindings: {
    labelSize: "@",
    controlSize: "@"
  }
};
exports.NsFormComponent = NsFormComponent;
var NsFormGroupController = /*#__PURE__*/function () {
  function NsFormGroupController() {
    _classCallCheck(this, NsFormGroupController);
  }
  _createClass(NsFormGroupController, [{
    key: "labelSize",
    get: function get() {
      var _a;
      return this.fgLabelSize || ((_a = this.nsFormCtrl) === null || _a === void 0 ? void 0 : _a.labelSize) || "col-md-4";
    }
  }, {
    key: "controlSize",
    get: function get() {
      var _a;
      return this.fgControlSize || ((_a = this.nsFormCtrl) === null || _a === void 0 ? void 0 : _a.controlSize) || "col-md-8";
    }
  }]);
  return NsFormGroupController;
}();
var NsFormGroupComponent = {
  restrict: 'E',
  selector: 'nsFormGroup',
  transclude: true,
  require: {
    nsFormCtrl: "^^?nsForm"
  },
  controller: NsFormGroupController,
  controllerAs: "$fgCtrl",
  bindings: {
    fgLabelSize: "@labelSize",
    fgControlSize: "@controlSize",
    title: '@'
  },
  template: "\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label {{$fgCtrl.labelSize}}\">{{$fgCtrl.title}}</label>\n\t\t\t\t<div class=\"{{$fgCtrl.controlSize}}\">\n\t\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"
};
exports.NsFormGroupComponent = NsFormGroupComponent;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskQueueService = void 0;
var _task = __webpack_require__(58);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TaskQueueService = /*#__PURE__*/function () {
  TaskQueueService.$inject = ["loggerFactory", "appContext", "$dialogs", "$uibModal", "language"];
  /*@ngInject*/
  function TaskQueueService(loggerFactory, appContext, $dialogs, $uibModal, language) {
    _classCallCheck(this, TaskQueueService);
    this.loggerFactory = loggerFactory;
    this.appContext = appContext;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.language = language;
  }
  _createClass(TaskQueueService, [{
    key: "execute",
    value: function execute(opt) {
      var handler = new _task.QueueTaskHandler(this.loggerFactory, this.appContext, this.$dialogs, this.$uibModal, this.language, opt);
      var res = handler.execute();
      return res;
    }
  }, {
    key: "progress",
    value: function progress(opt) {
      var handler = new _task.ProgressTaskHandler(this.loggerFactory, this.appContext, this.$dialogs, this.$uibModal, this.language, opt);
      var res = handler.execute();
      return res;
    }
  }]);
  return TaskQueueService;
}();
exports.TaskQueueService = TaskQueueService;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskHandler = exports.QueueTaskHandler = exports.ProgressTaskHandler = void 0;
var _taskqueue = __webpack_require__(59);
var _common = __webpack_require__(46);
var _taskexecution = __webpack_require__(60);
var _queuehub = __webpack_require__(61);
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
var TaskHandler = /*#__PURE__*/function () {
  TaskHandler.$inject = ["loggerFactory", "appContext", "$dialogs", "$uibModal", "language"];
  /*@ngInject*/
  function TaskHandler(loggerFactory, appContext, $dialogs, $uibModal, language) {
    _classCallCheck(this, TaskHandler);
    this.appContext = appContext;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.language = language;
    this.logger = loggerFactory.getInstance("taskQueueService");
    if (typeof signalR != "undefined" && (signalR === null || signalR === void 0 ? void 0 : signalR.HubConnectionBuilder)) {
      //aspnet core signalr
      this.signalRVersion = 2;
    } else if ($.connection) {
      //aspnet signalr
      this.signalRVersion = 1;
    }
  }
  _createClass(TaskHandler, [{
    key: "onErrorCommon",
    value: function onErrorCommon(errorInfo) {
      this.eventsSubject.next(_taskqueue.TaskExecutionEvent.complete);
      this.executionCtx.error = true;
      this.logger.error(errorInfo);
    }
  }, {
    key: "onError",
    value: function onError(errorInfo) {
      this.onErrorCommon(errorInfo);
      var errMessage = errorInfo.Details || errorInfo.details || this.language.Generic.Common.kUnexpErr;
      this.$dialogs.error(errMessage);
      this.reject(errMessage);
      return Promise.reject(errMessage);
    }
  }, {
    key: "disposeHandler",
    value: function disposeHandler() {
      this.disposeHandlerCommon();
    }
  }, {
    key: "disposeHandlerCommon",
    value: function disposeHandlerCommon() {
      this.connectionInfo = null;
      if (!this.executionCtx.taskId && !this.executionCtx.error) {
        return false;
      }
      var connectionInfo = this.executionCtx.connectionInfo;
      if (!connectionInfo) {
        return false;
      }
      if (!connectionInfo.connection) {
        return false;
      }
      connectionInfo.connection.stop();
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this = this;
      this.executionCtx = {
        taskId: null,
        error: false,
        progress: false,
        connectionInfo: null
      };
      this.eventsSubject = new _common.Subject();
      this.processingDialog = this.prepareProcessingDialog();
      this.processingDialog.result.then(function () {
        return _this.disposeHandler();
      }, function () {
        return _this.disposeHandler();
      });
      return new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
        _this.prepareHub().then(function (connectionInfo) {
          _this.executionCtx.connectionInfo = connectionInfo;
          return _this.processingDialog.opened;
        }, function (data) {
          return _this.onError(data);
        }).then(function () {
          return _this.executionBody();
        });
      });
    }
  }, {
    key: "getConnection",
    value: function getConnection() {
      var connectionInfo;
      if (this.signalRVersion == 1) {
        connectionInfo = {
          connection: $.connection.hub
        };
        connectionInfo.connection.qs = {
          "at": this.appContext.at
        };
      } else {
        //multi process error
        //https://github.com/dotnet/aspnetcore/issues/9917
        //https://learn.microsoft.com/en-us/aspnet/core/signalr/scale
        var settings = {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
        };
        if (this.appContext.environment === "testing") {
          settings = {};
        }
        var connection = new signalR.HubConnectionBuilder().withUrl("/webapi/queueHub?at=" + this.appContext.at, settings).build();
        connectionInfo = {
          connection: connection
        };
      }
      this.initConnection(connectionInfo);
      return connectionInfo;
    }
  }, {
    key: "prepareHub",
    value: function prepareHub() {
      var _this2 = this;
      if (this.connectionInfo && this.connectionInfo.connection) {
        this.logger.info("connection is ready");
        return Promise.resolve(this.connectionInfo);
      }
      var connectionInfo = this.getConnection();
      return new Promise(function (resolve, reject) {
        var startTask = connectionInfo.connection.start();
        var onSuccess = function onSuccess() {
          _this2.logger.debug("connection started");
          _this2.connectionInfo = connectionInfo;
          resolve(connectionInfo);
        };
        var onError = function onError() {
          _this2.logger.error("connection start fail");
          connectionInfo = null;
          reject("Ошибка соединения с сервером");
        };
        if (_this2.signalRVersion == 1) {
          startTask = Promise.resolve(startTask);
        }
        startTask.then(function () {
          return onSuccess();
        }, function () {
          return onError();
        });
      });
    }
  }]);
  return TaskHandler;
}();
exports.TaskHandler = TaskHandler;
var ProgressTaskHandler = /*#__PURE__*/function (_TaskHandler) {
  _inherits(ProgressTaskHandler, _TaskHandler);
  var _super = _createSuper(ProgressTaskHandler);
  function ProgressTaskHandler(loggerFactory, appContext, $dialogs, $uibModal, language, options) {
    var _this3;
    _classCallCheck(this, ProgressTaskHandler);
    _this3 = _super.call(this, loggerFactory, appContext, $dialogs, $uibModal, language);
    _this3.options = options;
    return _this3;
  }
  _createClass(ProgressTaskHandler, [{
    key: "prepareProcessingDialog",
    value: function prepareProcessingDialog() {
      var _this4 = this;
      this.progressSubject = new _common.Subject();
      var processingDialog = this.$uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: this.options.dialogComponent.controller,
        controllerAs: this.options.dialogComponent.controllerAs,
        templateUrl: this.options.dialogComponent.templateUrl,
        resolve: {
          progressSubject: function progressSubject() {
            return _this4.progressSubject;
          }
        }
      });
      return processingDialog;
    }
  }, {
    key: "executionBody",
    value: function executionBody() {
      return this.options.bindConnection(this.connectionInfo.connectionId);
    }
  }, {
    key: "initConnection",
    value: function initConnection(connectionInfo) {
      var _this5 = this;
      if (this.signalRVersion == 1) {
        var hub = $.connection.progressInformerHub;
        hub.client.progress = function (data) {
          _this5.logger.info("progress: ", JSON.stringify(data));
          _this5.progressSubject.next(data);
        };
      } else {
        var connection = connectionInfo.connection;
        connection.on("progress", function (data) {
          _this5.logger.info("progress: ", JSON.stringify(data));
          _this5.progressSubject.next(data);
        });
      }
    }
  }]);
  return ProgressTaskHandler;
}(TaskHandler);
exports.ProgressTaskHandler = ProgressTaskHandler;
var QueueTaskHandler = /*#__PURE__*/function (_TaskHandler2) {
  _inherits(QueueTaskHandler, _TaskHandler2);
  var _super2 = _createSuper(QueueTaskHandler);
  function QueueTaskHandler(loggerFactory, appContext, $dialogs, $uibModal, language, options) {
    var _this6;
    _classCallCheck(this, QueueTaskHandler);
    _this6 = _super2.call(this, loggerFactory, appContext, $dialogs, $uibModal, language);
    _this6.options = options;
    var defOpts = {
      getTaskFunc: null,
      closeOnStart: false,
      hint: "",
      userErrorHandler: null,
      userCloseHandler: null,
      startTaskImmediately: true
    };
    _this6.options = angular.extend({}, defOpts, options);
    return _this6;
  }
  _createClass(QueueTaskHandler, [{
    key: "disposeHandler",
    value: function disposeHandler() {
      this.disposeHandlerCommon();
      this.queueHubClient = null;
      if (this.executionCtx.taskId && !this.executionCtx.error && this.options.userCloseHandler) {
        return this.options.userCloseHandler();
      }
    }
  }, {
    key: "onErrorCommon",
    value: function onErrorCommon(errorInfo) {
      this.eventsSubject.next(_taskqueue.TaskExecutionEvent.complete);
      this.executionCtx.error = true;
      this.logger.error(errorInfo);
      if (_typeof(this.options.closeOnEnd) == undefined || this.options.closeOnEnd == null || this.options.closeOnEnd) {
        this.processingDialog.close();
      }
    }
  }, {
    key: "onError",
    value: function onError(errorInfo) {
      if (this.options.userErrorHandler) {
        this.onErrorCommon(errorInfo);
        var errorMessage = errorInfo.Details || errorInfo.details || this.language.Generic.Common.kUnexpErr;
        this.options.userErrorHandler(errorMessage);
        this.reject(errorMessage);
        return Promise.reject(errorMessage);
      }
      return _get(_getPrototypeOf(QueueTaskHandler.prototype), "onError", this).call(this, errorInfo);
    }
  }, {
    key: "prepareProcessingDialog",
    value: function prepareProcessingDialog() {
      var _this7 = this;
      this.statusSubject = new _common.BehaviorSubject();
      this.taskEnqueueInfoSubject = new _common.BehaviorSubject();
      this.statusSubject.subscribe(function (status) {
        return _this7.logger.info(status);
      });
      this.statusSubject.next(_taskqueue.startingStatus);
      var processingDialog = this.$uibModal.open({
        backdrop: 'static',
        keyboard: false,
        controller: _taskexecution.TaskExecutionComponent.controller,
        controllerAs: _taskexecution.TaskExecutionComponent.controllerAs,
        templateUrl: _taskexecution.TaskExecutionComponent.templateUrl,
        resolve: {
          statusSubject: function statusSubject() {
            return _this7.statusSubject;
          },
          taskEnqueueInfoSubject: function taskEnqueueInfoSubject() {
            return _this7.taskEnqueueInfoSubject;
          },
          eventsSubject: function eventsSubject() {
            return _this7.eventsSubject;
          },
          logoutputMode: function logoutputMode() {
            return _this7.options.logoutputMode;
          },
          header: function header() {
            return _this7.options.header;
          },
          hint: function hint() {
            return _this7.options.hint;
          }
        }
      });
      return processingDialog;
    }
  }, {
    key: "executionBody",
    value: function executionBody() {
      var _this8 = this;
      return this.options.getTaskFunc()["catch"](function (response) {
        _this8.executionCtx.error = true;
        _this8.processingDialog.close();
        _this8.reject();
        if (response && response.data && response.data.message) {
          //this.$dialogs.error(response.data.message)
        }
        return null;
      }).then(function (enqueueInfo) {
        if (enqueueInfo === null || typeof enqueueInfo == "undefined") {
          _this8.executionCtx.error = true;
          _this8.reject();
          _this8.processingDialog.close();
          return;
        }
        _this8.taskEnqueueInfoSubject.next(enqueueInfo);
        _this8.eventsSubject.subscribe(function (event) {
          if (event == _taskqueue.TaskExecutionEvent.cancel) {
            _this8.logger.info("Инициирована отмена задачи " + taskId);
            _this8.queueHubClient.cancelTask(taskId);
          }
        });
        var taskId = enqueueInfo.taskId || enqueueInfo;
        _this8.logger.info("Успешно создана задача " + taskId);
        var initReconnection = function initReconnection(connectionInfo) {
          if (_this8.signalRVersion == 1) {
            connectionInfo.connection.reconnected(function () {
              _this8.logger.info("Соединение восстановлено");
              _this8.queueHubClient.subscribeTask(taskId).then(function () {
                _this8.logger.info("Успешно выполнена переподписка на сообщения по задаче " + taskId);
              });
            });
          }
        };
        if (_this8.options.startTaskImmediately) {
          return _this8.queueHubClient.startTask(taskId).then(function (operationResult) {
            var _a, _b;
            if (!operationResult.success && !operationResult.Success) {
              var message = (_a = operationResult.message) !== null && _a !== void 0 ? _a : operationResult.Message;
              return Promise.reject({
                details: message,
                Details: message,
                TaskId: taskId
              });
            }
            _this8.logger.info("Успешно запущена в обработку задача " + taskId);
            _this8.executionCtx.taskId = taskId;
            if (_this8.options.closeOnStart) {
              _this8.executionCtx.connectionInfo.connection.stop();
              _this8.$dialogs.message("Отчет поставлен в очередь на обработку. \n Результат выполнения придет Вам на внутреннюю почту.");
              _this8.processingDialog.close();
              return;
            }
            if (!_this8.executionCtx.progress) {
              _this8.statusSubject.next((_b = _this8.options.initialStatus) !== null && _b !== void 0 ? _b : "В очереди обработки");
            }
            initReconnection(_this8.executionCtx.connectionInfo);
          })["catch"](function (x) {
            return _this8.onError(x);
          });
        } else {
          return _this8.queueHubClient.subscribeTask(taskId).then(function (operationResult) {
            var _a, _b;
            if (!operationResult.success && !operationResult.Success) {
              var message = (_a = operationResult.message) !== null && _a !== void 0 ? _a : operationResult.Message;
              return Promise.reject({
                details: message,
                Details: message,
                TaskId: taskId
              });
            }
            _this8.logger.info("Успешно выполнена подписка на сообщения по задаче " + taskId);
            _this8.executionCtx.taskId = taskId;
            if (!_this8.executionCtx.progress) {
              _this8.statusSubject.next((_b = _this8.options.initialStatus) !== null && _b !== void 0 ? _b : "В ожидании запуска задачи");
            }
            initReconnection(_this8.executionCtx.connectionInfo);
          })["catch"](function (x) {
            return _this8.onError(x);
          });
        }
      });
    }
  }, {
    key: "onProgress",
    value: function onProgress(progressInfo) {
      var _a;
      this.executionCtx.progress = true;
      this.statusSubject.next((_a = progressInfo.Status) !== null && _a !== void 0 ? _a : progressInfo.status);
    }
  }, {
    key: "onComplete",
    value: function onComplete(completeInfo) {
      var _a;
      this.eventsSubject.next(_taskqueue.TaskExecutionEvent.complete);
      if (_typeof(this.options.closeOnEnd) == undefined || this.options.closeOnEnd == null || this.options.closeOnEnd) {
        this.processingDialog.close();
      }
      var data = (_a = completeInfo.Data) !== null && _a !== void 0 ? _a : completeInfo.data;
      var result = null;
      if (data[0] === "{") {
        result = JSON.parse(data);
      } else {
        //todo. проверить что тип T string
        result = data;
      }
      this.resolve(result);
    }
  }, {
    key: "initConnection",
    value: function initConnection(connectionInfo) {
      var _this9 = this;
      if (this.signalRVersion == 1) {
        var queueHub = $.connection.queueHub;
        queueHub.client.progress = function (data) {
          _this9.logger.info("progress: ", JSON.stringify(data));
          _this9.onProgress(data);
        };
        queueHub.client.complete = function (data) {
          _this9.logger.info("complete: ", JSON.stringify(data));
          _this9.onComplete(data);
          return connectionInfo.connection.stop();
        };
        queueHub.client.error = function (data) {
          _this9.logger.error(data);
          _this9.onError(data);
          return connectionInfo.connection.stop();
        };
        this.queueHubClient = new _queuehub.QueueHubClient(connectionInfo);
      } else {
        var connection = connectionInfo.connection;
        connection.on("progress", function (data) {
          _this9.logger.info("progress: ", JSON.stringify(data));
          _this9.onProgress(data);
        });
        connection.on("complete", function (data) {
          _this9.logger.info("complete: ", JSON.stringify(data));
          _this9.onComplete(data);
          //connectionInfo.queueHub = null;
          return connectionInfo.connection.stop();
        });
        connection.on("error", function (data) {
          _this9.logger.error(data);
          _this9.onError(data);
          //connectionInfo.queueHub = null;
          return connectionInfo.connection.stop();
        });
        this.queueHubClient = new _queuehub.QueueHubClientV2(connectionInfo);
      }
    }
  }]);
  return QueueTaskHandler;
}(TaskHandler);
exports.QueueTaskHandler = QueueTaskHandler;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startingStatus = exports.TaskExecutionEvent = void 0;
var TaskExecutionEvent;
exports.TaskExecutionEvent = TaskExecutionEvent;
(function (TaskExecutionEvent) {
  TaskExecutionEvent["cancel"] = "cancel";
  TaskExecutionEvent["complete"] = "complete";
  TaskExecutionEvent["error"] = "error";
})(TaskExecutionEvent || (exports.TaskExecutionEvent = TaskExecutionEvent = {}));
var startingStatus = "Постановка в очередь обработки";
exports.startingStatus = startingStatus;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskExecutionComponent = void 0;
var _taskqueue = __webpack_require__(59);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TaskExecutionController = /*#__PURE__*/function () {
  TaskExecutionController.$inject = ["$scope", "$uibModalInstance", "language", "statusSubject", "taskEnqueueInfoSubject", "eventsSubject", "logoutputMode", "hint", "header"];
  /*@ngInject*/
  function TaskExecutionController($scope, $uibModalInstance, language, statusSubject, taskEnqueueInfoSubject, eventsSubject, logoutputMode, hint, header) {
    var _this = this;
    _classCallCheck(this, TaskExecutionController);
    this.$uibModalInstance = $uibModalInstance;
    this.language = language;
    this.statusSubject = statusSubject;
    this.eventsSubject = eventsSubject;
    this.logoutputMode = logoutputMode;
    this.hint = hint;
    this.header = header;
    this.activeConnectionExec = false;
    this.cancellable = false;
    this.inProgress = true;
    this.header = this.header || "Подождите";
    if (logoutputMode) {
      this.logoutput = [];
    }
    statusSubject.subscribe(function (status) {
      if (logoutputMode) {
        _this.logoutput.unshift({
          time: new Date(),
          message: status
        });
      } else {
        _this.message = status;
      }
      $scope.$applyAsync();
    });
    taskEnqueueInfoSubject.subscribe(function (unknownEnqueueInfo) {
      if (typeof unknownEnqueueInfo !== "number") {
        var enqueueInfo = unknownEnqueueInfo;
        _this.activeConnectionExec = enqueueInfo.activeConnectionExec;
        _this.cancellable = enqueueInfo.cancellable || _this.activeConnectionExec;
      }
    });
    eventsSubject.subscribe(function (event) {
      if (event === _taskqueue.TaskExecutionEvent.complete || event === _taskqueue.TaskExecutionEvent.error) {
        _this.inProgress = false;
      }
    });
  }
  _createClass(TaskExecutionController, [{
    key: "taskInitialized",
    value: function taskInitialized() {
      return this.statusSubject.getValue() !== _taskqueue.startingStatus;
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.close();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.inProgress) {
        this.eventsSubject.next(_taskqueue.TaskExecutionEvent.cancel);
      }
      this.$uibModalInstance.close();
    }
  }]);
  return TaskExecutionController;
}();
var TaskExecutionComponent = {
  controller: TaskExecutionController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/services/queue/taskexecution.component.html"
};
exports.TaskExecutionComponent = TaskExecutionComponent;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueHubClientV2 = exports.QueueHubClient = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var QueueHubClient = /*#__PURE__*/function () {
  function QueueHubClient(connectionInfo) {
    _classCallCheck(this, QueueHubClient);
    this.queueHub = $.connection.queueHub;
  }
  _createClass(QueueHubClient, [{
    key: "startTask",
    value: function startTask(taskId) {
      return Promise.resolve(this.queueHub.server.startTask(taskId));
    }
  }, {
    key: "cancelTask",
    value: function cancelTask(taskId) {
      return Promise.resolve(this.queueHub.server.cancelTask(taskId));
    }
  }, {
    key: "subscribeTask",
    value: function subscribeTask(taskId) {
      return Promise.resolve(this.queueHub.server.subscribeTask(taskId));
    }
  }]);
  return QueueHubClient;
}();
exports.QueueHubClient = QueueHubClient;
var QueueHubClientV2 = /*#__PURE__*/function () {
  function QueueHubClientV2(connectionInfo) {
    _classCallCheck(this, QueueHubClientV2);
    this.connectionInfo = connectionInfo;
  }
  _createClass(QueueHubClientV2, [{
    key: "startTask",
    value: function startTask(taskId) {
      return this.connectionInfo.connection.invoke("startTask", taskId);
    }
  }, {
    key: "cancelTask",
    value: function cancelTask(taskId) {
      return this.connectionInfo.connection.invoke("cancelTask", taskId);
    }
  }, {
    key: "subscribeTask",
    value: function subscribeTask(taskId) {
      return this.connectionInfo.connection.invoke("subscribeTask", taskId);
    }
  }]);
  return QueueHubClientV2;
}();
exports.QueueHubClientV2 = QueueHubClientV2;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageTitleDirective = exports.PageBackDirective = exports.BreadcrumbRouting = void 0;
var _common = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BreadcrumbRouting = /*#__PURE__*/function () {
  BreadcrumbRouting.$inject = ["pageContext", "pendingRequests", "$location", "$window"];
  /*@ngInject*/
  function BreadcrumbRouting(pageContext, pendingRequests, $location, $window) {
    _classCallCheck(this, BreadcrumbRouting);
    this.pageContext = pageContext;
    this.pendingRequests = pendingRequests;
    this.$location = $location;
    this.$window = $window;
  }
  _createClass(BreadcrumbRouting, [{
    key: "confirmAndLeave",
    value: function confirmAndLeave(scope, leave) {
      if (scope.confirmAndLeave) {
        scope.confirmAndLeave(leave);
        return;
      }
      if (this.pageContext.confirmAndLeave) {
        this.pageContext.confirmAndLeave(leave);
        return;
      }
    }
  }, {
    key: "getPageContext",
    value: function getPageContext($scope) {
      if (this.pageContext && this.pageContext.title) {
        return this.pageContext;
      }
      return $scope["page"];
    }
  }, {
    key: "goBack",
    value: function goBack(scope, backUrl) {
      if (backUrl.indexOf(".asp") > 0 || backUrl.indexOf("/angular/") == 0) {
        this.pendingRequests.cancelAll();
        //если указан href на asp страницу или ангулар страницу другого модуля
        (0, _common.postTo)(backUrl);
      } else {
        //если указан href - angular страницу
        if (backUrl.indexOf("?") >= 0) {
          this.$location.url(backUrl);
        } else {
          this.$location.path(backUrl).search({});
        }
        scope.$applyAsync();
      }
    }
  }, {
    key: "back",
    value: function back(scope) {
      var currentPageCtx = this.getPageContext(scope);
      var backInfo = currentPageCtx.back;
      var backInfoHref = backInfo && backInfo.href;
      var backHref = backInfoHref || currentPageCtx.parent && currentPageCtx.parent.href;
      if (backInfo && backInfo.history) {
        //браузерный бэк
        if (this.$window.routeChanges > 1) {
          this.$window.routeChanges = this.$window.routeChanges - 2; /* Т.к. при смене маршрута (событие $routeChangeStart) добавляется +1 */
          this.$window.history.back();
          return;
        }
        if (!backInfoHref) {
          this.pendingRequests.cancelAll();
          (0, _common.postTo)(document.referrer);
          return;
        }
        this.goBack(scope, backHref);
        return;
      }
      if (backHref) {
        this.goBack(scope, backHref);
        return;
      }
      // Недоступен контект
      //$window.history.back();
    }
  }, {
    key: "toTitle",
    value: function toTitle(scope) {
      if (!scope) {
        console.error("Scope is not available");
        return;
      }
      var currentPageCtx = this.getPageContext(scope);
      if (currentPageCtx.parent) {
        if (currentPageCtx.parent.postTo || currentPageCtx.parent.href.indexOf(".asp") > 0) {
          this.pendingRequests.cancelAll();
          (0, _common.postTo)(currentPageCtx.parent.href);
        } else {
          if (currentPageCtx.parent.href.indexOf("?") >= 0) {
            this.$location.url(currentPageCtx.parent.href);
          } else {
            this.$location.path(currentPageCtx.parent.href).search({});
          }
          scope.$applyAsync();
        }
      }
    }
  }]);
  return BreadcrumbRouting;
}();
/*@ngInject*/
exports.BreadcrumbRouting = BreadcrumbRouting;
var PageTitleDirective = function PageTitleDirective(breadcrumbRouting) {
  return {
    replace: true,
    link: function link(scope, element) {
      var leave = function leave() {
        return breadcrumbRouting.toTitle(scope);
      };
      var confirmAndLeave = function confirmAndLeave() {
        return breadcrumbRouting.confirmAndLeave(scope, leave);
      };
      element.attr("href", "javascript:void(0);");
      element.on("click", ".parent-page-link", confirmAndLeave);
      scope["hasParentPage"] = function () {
        var pageContext = breadcrumbRouting.getPageContext(scope);
        return pageContext && pageContext.parent && pageContext.parent.title;
      };
      scope["getPageContext"] = function () {
        return breadcrumbRouting.getPageContext(scope);
      };
    },
    template: "<h1 class='title'>" + "<a data-ng-bind-html='getPageContext().parent.title' ng-if='hasParentPage()' class='parent-page-link' href='#'></a>" + "<span ng-if='hasParentPage()' class='title-delim'>/</span>" + "<span data-ng-bind-html='getPageContext().title'></span>" + "</h1>"
  };
};
PageTitleDirective.$inject = ["breadcrumbRouting"];
exports.PageTitleDirective = PageTitleDirective;
/*@ngInject*/
var PageBackDirective = function PageBackDirective(breadcrumbRouting) {
  return {
    replace: true,
    link: function link(scope, element) {
      var leave = function leave() {
        return breadcrumbRouting.back(scope);
      };
      var confirmAndLeave = function confirmAndLeave() {
        return breadcrumbRouting.confirmAndLeave(scope, leave);
      };
      element.attr("href", "javascript:void(0);");
      element.on("click", confirmAndLeave);
      scope["isActive"] = function () {
        var pageCtx = breadcrumbRouting.getPageContext(scope);
        return pageCtx && (pageCtx.back || pageCtx.parent);
      };
      scope["getPageContext"] = function () {
        return breadcrumbRouting.getPageContext(scope);
      };
    },
    template: "<a title='\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F' class='back' ng-class='{active: !isActive()}'><span class='icon-signout'></span></a>"
  };
};
PageBackDirective.$inject = ["breadcrumbRouting"];
exports.PageBackDirective = PageBackDirective;
angular.module('irtech.netcity.ui-components', []).service("breadcrumbRouting", BreadcrumbRouting).directive("pageTitle", PageTitleDirective).directive("pageBack", PageBackDirective);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertsService = void 0;
var _this = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var offsetBlock = function offsetBlock(currBlock) {
  var currBlockBottom = $(currBlock).css("bottom");
  currBlockBottom = parseInt(currBlockBottom.substr(0, currBlockBottom.length - 2), 10);
  var currBlockHeight = $(currBlock).height();
  $(currBlock).remove();
  $('.bootstrap-growl').each(function () {
    var bottom = $(this).css("bottom");
    bottom = parseInt(bottom.substr(0, bottom.length - 2), 10);
    if (bottom > currBlockBottom) {
      bottom = bottom - currBlockHeight - 10;
      $(this).css("bottom", bottom.toString() + 'px');
      // в этом each мы опускаем блоки-алерты,которые располагались выше закрывающегося блока, вниз на высоту,
      // которая равна высоте блока плюс margin(отступ от соседнего блока)
    }
  });
};

var showGrowl = function showGrowl($dialogs, message, type, textException) {
  var options = {
    element: 'body',
    offset: {
      from: "bottom",
      amount: 10
    },
    align: "right",
    width: 300,
    delay: 9000,
    stackup_spacing: 10
  };
  var css = {
    "position": "fixed",
    "margin": 0,
    "z-index": "2000",
    "white-space": "pre-wrap",
    "display": "none"
  };
  var $alert = $("<div>");
  var $wrap = $("<div>");
  $wrap.addClass("bootstrap-growl");
  $alert.attr("class", "alert");
  $alert.css("margin-bottom", "0");
  ;
  $alert.addClass("alert-" + type);
  var $cross = $("<span class=\"close\">&times;</span>").on("click", function () {
    offsetBlock($(this).parent().parent());
  });
  $alert.append($cross);
  $alert.append(message);
  var offsetAmount = options.offset.amount;
  $(".bootstrap-growl").each(function () {
    offsetAmount = Math.max(options.offset.amount, parseInt($(this).css(options.offset.from)) + $(this).outerHeight() + options.stackup_spacing);
  });
  css[options.offset.from] = offsetAmount + "px";
  $wrap.css(css);
  $wrap.css("width", options.width + "px");
  $(options.element).append($wrap);
  $wrap.css(options.align, "20px");
  $wrap.fadeIn();
  if (type == 'danger') $wrap.delay(30000);else $wrap.delay(options.delay);
  $wrap.fadeOut(function () {
    offsetBlock(this);
  });
  if (typeof textException == 'string' && textException != "") {
    var $link = $('<a></a>');
    $link.append(_this.language.Generic.Common.kErrorDetails);
    $link.css('font-size', '11px');
    $link.css('cursor', 'pointer');
    $link.on("click", function () {
      $dialogs.error(textException);
      offsetBlock($(this).parent().parent());
      $(this).parent().remove();
    });
    $alert.append('<br/>');
    $alert.append($link);
  }
  $wrap.append($alert);
};
var AlertsService = /*#__PURE__*/function () {
  AlertsService.$inject = ["$dialogs"];
  /*@ngInject*/
  function AlertsService($dialogs) {
    _classCallCheck(this, AlertsService);
    this.$dialogs = $dialogs;
  }
  _createClass(AlertsService, [{
    key: "success",
    value: function success(message) {
      showGrowl(this.$dialogs, message, 'success');
    }
  }, {
    key: "error",
    value: function error(message, textException) {
      showGrowl(this.$dialogs, message, 'danger', textException);
    }
  }, {
    key: "info",
    value: function info(message) {
      showGrowl(this.$dialogs, message, 'info');
    }
  }, {
    key: "warning",
    value: function warning(message) {
      showGrowl(this.$dialogs, message, 'warning');
    }
  }]);
  return AlertsService;
}();
exports.AlertsService = AlertsService;
angular.module('uikit.alerts', ["uikit.dialogs"]).service('$alerts', AlertsService);

/***/ }),
/* 64 */
/***/ (function(module, exports) {

angular.module('uikit.controls.controllers', ['ui.bootstrap']).controller('treeSelectCtrl', function($scope, $dialogs, $uibModal, $uibModalInstance, tree, header, treeCfg) {
  var mapParams, selectedNode, showNode, treeSearch;
  treeSearch = function(items, getChildList, searchCriteria) {
    var iterate, recurs;
    console.log("1,5");
    iterate = function(items) {
      var i, item, len, result;
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        result = recurs(item);
        if (result) {
          return result;
        }
      }
      return null;
    };
    recurs = function(item) {
      var childs, searchResult;
      childs = getChildList(item);
      if (!childs || !childs.length || childs.length < 1) {
        return;
      }
      searchResult = _.where(childs, searchCriteria);
      if (searchResult.length > 0) {
        return searchResult[0];
      }
      return iterate(childs);
    };
    return iterate(items);
  };
  showNode = function(node) {
    var parent;
    node.collapsed = false;
    parent = node.getParent();
    if (parent) {
      return showNode(parent);
    }
  };
  mapParams = function() {
    _.each(selectedNode.parameters, function(param) {
      var temp;
      temp = _.findWhere(treeCfg.parameters, {
        argId: param.id
      });
      return param.value = typeof temp === 'undefined' ? null : temp.value;
    });
  };
  if (treeCfg.Current) {
    selectedNode = treeSearch(tree, function(item) {
      return item[treeCfg.childrens];
    }, {
      Id: treeCfg.current
    });
    if (selectedNode) {
      tree.currentNode = selectedNode;
      selectedNode.selected = "selected";
      showNode(selectedNode);
    }
  }
  $.extend($scope, {
    tree: tree,
    header: header,
    language: language,
    treeCfg: treeCfg,
    ok: function(form) {
      var modalInstance;
      selectedNode = this.tree.currentNode;
      if (!selectedNode) {
        $dialogs.notify("Внимание", "Выберите элемент из списка.");
        return;
      }
      if (typeof selectedNode.parameters !== 'undefined' && selectedNode.parameters.length > 0) {
        if (selectedNode.id === treeCfg.current && typeof treeCfg.parameters !== 'undefined') {
          mapParams();
        }
        modalInstance = $uibModal.open({
          templateUrl: '/static/dist/app/em/statReports/common/templates/enterParamValue.html',
          controller: 'Em.Indicators.EditIndicator.EnterParamValues',
          resolve: {
            calculator: function() {
              return selectedNode;
            }
          }
        });
        modalInstance.result.then(function(response) {
          selectedNode.parameters = response;
          return $uibModalInstance.close(selectedNode);
        });
        return;
      }
      return $uibModalInstance.close(selectedNode);
    },
    cancel: function() {
      return $uibModalInstance.dismiss('cancel');
    }
  });
});

angular.module('uikit.controls.services', ['ui.bootstrap.modal', 'uikit.controls.controllers']).factory('$uiControls', function($uibModal) {
  return {
    treeSelect: function(header, tree, treeCfg) {
      var cfg, defaultCfg, modalInstance;
      defaultCfg = {
        id: "id",
        label: "name",
        childrens: "childrens",
        noText: "Нет данных"
      };
      cfg = $.extend({}, defaultCfg, treeCfg);
      modalInstance = $uibModal.open({
        templateUrl: '/static/dist/app/global/templates/treeSelect.html',
        controller: 'treeSelectCtrl',
        resolve: {
          tree: function() {
            return tree;
          },
          header: function() {
            return angular.copy(header);
          },
          treeCfg: function() {
            return cfg;
          }
        }
      });
      return modalInstance.result;
    }
  };
});

angular.module('uikit.controls', ['uikit.controls.services']);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongWorkService = exports.DialogsService = void 0;
var _fileattachments = __webpack_require__(52);
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
var ErrorDialogCtrl = /*#__PURE__*/function () {
  ErrorDialogCtrl.$inject = ["$scope", "$uibModalInstance", "header", "msg", "defaultStrings"];
  /*@ngInject*/
  function ErrorDialogCtrl($scope, $uibModalInstance, header, msg, defaultStrings) {
    _classCallCheck(this, ErrorDialogCtrl);
    this.$scope = $scope;
    this.$uibModalInstance = $uibModalInstance;
    this.header = header;
    this.msg = msg;
    this.defaultStrings = defaultStrings;
    this.header = this.header || this.defaultStrings.error;
    this.msg = this.msg || this.defaultStrings.errorMessage;
  }
  _createClass(ErrorDialogCtrl, [{
    key: "close",
    value: function close() {
      this.$uibModalInstance.close();
      this.$scope.$destroy();
    }
  }]);
  return ErrorDialogCtrl;
}();
var MessageDialogCtrl = /*#__PURE__*/function () {
  MessageDialogCtrl.$inject = ["$scope", "$uibModalInstance", "header", "msg", "defaultStrings"];
  /*@ngInject*/
  function MessageDialogCtrl($scope, $uibModalInstance, header, msg, defaultStrings) {
    _classCallCheck(this, MessageDialogCtrl);
    this.$scope = $scope;
    this.$uibModalInstance = $uibModalInstance;
    this.header = header;
    this.msg = msg;
    this.defaultStrings = defaultStrings;
    this.header = this.header || this.defaultStrings.notification;
    this.msg = this.msg || this.defaultStrings.notificationMessage;
  }
  _createClass(MessageDialogCtrl, [{
    key: "close",
    value: function close() {
      this.$uibModalInstance.close();
      this.$scope.$destroy();
    }
  }]);
  return MessageDialogCtrl;
}();
var WaitDialogCtrl = /*#__PURE__*/function () {
  WaitDialogCtrl.$inject = ["$scope", "$uibModalInstance", "$timeout", "msg", "progress", "defaultStrings"];
  /*@ngInject*/
  function WaitDialogCtrl($scope, $uibModalInstance, $timeout, msg, progress, defaultStrings) {
    var _this = this;
    _classCallCheck(this, WaitDialogCtrl);
    this.$scope = $scope;
    this.$uibModalInstance = $uibModalInstance;
    this.$timeout = $timeout;
    this.msg = msg;
    this.progress = progress;
    this.defaultStrings = defaultStrings;
    this.header = defaultStrings.pleaseWaitEllipsis;
    this.msg = this.msg || this.defaultStrings.processing;
    this.progress = this.progress || 0;
    //#Listeners
    //#Note: used $timeout instead of $scope.$apply() because I was getting a $$nextSibling error
    //#close wait dialog
    $scope.$on('dialogs.wait.complete', function () {
      _this.$timeout(function () {
        _this.$uibModalInstance.close();
        _this.$scope.$destroy();
      });
    });
    //#update the dialog's message
    $scope.$on('dialogs.wait.message', function (evt, args) {
      _this.msg = args.msg || _this.msg;
    });
    //#update the dialog's progress (bar) and/or message
    $scope.$on('dialogs.wait.progress', function (evt, args) {
      _this.msg = args.msg || _this.msg;
      _this.progress = args.progress || _this.progress;
    });
    new InfiniteProgress(function (progress) {
      _this.progress = progress;
      $scope.$applyAsync();
    });
  }
  _createClass(WaitDialogCtrl, [{
    key: "getProgress",
    value: function getProgress() {
      return {
        width: this.progress + "%"
      };
    }
  }]);
  return WaitDialogCtrl;
}();
var ConfirmDialogCtrl = /*#__PURE__*/function () {
  ConfirmDialogCtrl.$inject = ["$uibModalInstance", "header", "msg", "defaultStrings"];
  /*@ngInject*/
  function ConfirmDialogCtrl($uibModalInstance, header, msg, defaultStrings) {
    _classCallCheck(this, ConfirmDialogCtrl);
    this.$uibModalInstance = $uibModalInstance;
    this.header = header;
    this.msg = msg;
    this.defaultStrings = defaultStrings;
    this.header = this.header || this.defaultStrings.confirmation;
    this.msg = this.msg || this.defaultStrings.confirmationMessage;
  }
  _createClass(ConfirmDialogCtrl, [{
    key: "no",
    value: function no() {
      this.$uibModalInstance.dismiss("no");
    }
  }, {
    key: "yes",
    value: function yes() {
      this.$uibModalInstance.close("yes");
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss();
    }
  }]);
  return ConfirmDialogCtrl;
}();
var FileUploadDialogCtrl = /*#__PURE__*/function () {
  FileUploadDialogCtrl.$inject = ["$uibModalInstance", "$sce", "options", "header", "defaultStrings"];
  /*@ngInject*/
  function FileUploadDialogCtrl($uibModalInstance, $sce, options, header, defaultStrings) {
    var _this2 = this;
    _classCallCheck(this, FileUploadDialogCtrl);
    this.$uibModalInstance = $uibModalInstance;
    this.$sce = $sce;
    this.options = options;
    this.header = header;
    this.defaultStrings = defaultStrings;
    this.header = this.header || "Загрузка файла";
    // todo: похоже на костыль нужно для отображения поля в директиве
    this.withDescription = this.options.withDescription;
    var limits;
    if (this.options.maxFileSize) {
      limits = {
        fileSizeLimit: this.options.maxFileSize
      };
    }
    // * - в модулях, где используются IFileDialogOptions, значения захардкожены. В fileattachments.component - динамические.
    // Возможно, стоит также сделать их динамическими, но тогда нужно будет вводить новые константы в UploadLimits
    this.fileUploadService = new _fileattachments.FileUploadService(this.options.url, this.options.fileExts, limits, this.options.imageFile);
    this.fileUploadService.withPreview = this.options.withPreview;
    this.fileUploadService.sizeLimit = this.options.sizeLimit;
    this.fileUploadService.needResize = this.options.needResize; // * 
    this.fileUploadService.maxWidth = this.options.maxWidth; // *
    this.fileUploadService.quality = this.options.quality; // *
    this.fileUploadService.hint = this.options.hint;
    this.fileUploadService.queryStringParams = this.options.queryStringParams;
    if (this.options.submitData) {
      if (typeof this.options.submitData == "function") {
        this.fileUploadService.getSubmitData = this.options.submitData;
      } else {
        this.fileUploadService.getSubmitData = function () {
          return _this2.options.submitData;
        };
      }
    }
    if (this.options.overrideStrings) {
      angular.extend(defaultStrings, this.options.overrideStrings);
    }
  }
  _createClass(FileUploadDialogCtrl, [{
    key: "checkContentHtml",
    value: function checkContentHtml() {
      return !!this.options.contentHtml;
    }
  }, {
    key: "getContentHtml",
    value: function getContentHtml() {
      return this.$sce.trustAsHtml(this.options.contentHtml);
    }
  }, {
    key: "upload",
    value: function upload() {
      var _this3 = this;
      if (typeof this.options.preUploadCheck == "function") {
        if (!this.options.preUploadCheck()) {
          return;
        }
      }
      this.fileUploadService.submit().then(function (uploadResult) {
        _this3.$uibModalInstance.close(uploadResult);
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return FileUploadDialogCtrl;
}();
var asPromise = function asPromise(modalInstance) {
  return new Promise(function (resolve, reject) {
    modalInstance.result.then(function (data) {
      return resolve(data);
    }, function (data) {
      return reject(data);
    });
  });
};
var DialogsService = /*#__PURE__*/function () {
  DialogsService.$inject = ["$uibModal"];
  /*@ngInject*/
  function DialogsService($uibModal) {
    _classCallCheck(this, DialogsService);
    this.$uibModal = $uibModal;
  }
  _createClass(DialogsService, [{
    key: "error",
    value: function error(_msg, _header, isStatic) {
      _msg = this.replaceNewLineSymbol(_msg);
      var settings = {
        templateUrl: '/dialogs/error.html',
        controller: ErrorDialogCtrl,
        controllerAs: "ctrl",
        backdrop: isStatic ? 'static' : true,
        keyboard: !isStatic,
        resolve: {
          header: function header() {
            return angular.copy(_header);
          },
          msg: function msg() {
            return angular.copy(_msg);
          }
        }
      };
      var modalInstance = this.$uibModal.open(settings);
      return asPromise(modalInstance);
    }
  }, {
    key: "wait",
    value: function wait(_msg2, _progress) {
      _msg2 = this.replaceNewLineSymbol(_msg2);
      var settings = {
        templateUrl: '/dialogs/wait.html',
        controller: WaitDialogCtrl,
        controllerAs: "ctrl",
        backdrop: 'static',
        keyboard: false,
        resolve: {
          progress: function progress() {
            return angular.copy(_progress);
          },
          msg: function msg() {
            return angular.copy(_msg2);
          }
        }
      };
      var modalInstance = this.$uibModal.open(settings);
      return {
        close: function close() {
          return modalInstance.close();
        }
      };
    }
  }, {
    key: "message",
    value: function message(_msg3, _header2, options) {
      _msg3 = this.replaceNewLineSymbol(_msg3);
      var defaultSettings = {
        templateUrl: '/dialogs/notify.html',
        controller: MessageDialogCtrl,
        controllerAs: "ctrl",
        backdrop: true,
        keyboard: true,
        resolve: {
          header: function header() {
            return angular.copy(_header2 || language.Generic.Common.kAttention);
          },
          msg: function msg() {
            return angular.copy(_msg3);
          }
        }
      };
      var settings = Object.assign({}, defaultSettings, options);
      var modalInstance = this.$uibModal.open(settings);
      return asPromise(modalInstance);
    }
  }, {
    key: "notify",
    value: function notify(_header3, _msg4, isStatic) {
      _msg4 = this.replaceNewLineSymbol(_msg4);
      var settings = {
        templateUrl: '/dialogs/notify.html',
        controller: MessageDialogCtrl,
        controllerAs: "ctrl",
        backdrop: isStatic ? 'static' : true,
        keyboard: !isStatic,
        resolve: {
          header: function header() {
            return angular.copy(_header3);
          },
          msg: function msg() {
            return angular.copy(_msg4);
          }
        }
      };
      var modalInstance = this.$uibModal.open(settings);
      return modalInstance.result;
    }
  }, {
    key: "confirm",
    value: function confirm(_msg5, _header4, isStatic) {
      _msg5 = this.replaceNewLineSymbol(_msg5);
      var settings = {
        templateUrl: '/dialogs/confirm.html',
        controller: ConfirmDialogCtrl,
        controllerAs: "ctrl",
        backdrop: isStatic ? 'static' : true,
        keyboard: !isStatic,
        resolve: {
          header: function header() {
            return angular.copy(_header4);
          },
          msg: function msg() {
            return angular.copy(_msg5);
          }
        }
      };
      var modalInstance = this.$uibModal.open(settings);
      return asPromise(modalInstance);
    }
  }, {
    key: "confirmDelete",
    value: function confirmDelete(_msg6, _header5, isStatic) {
      _msg6 = this.replaceNewLineSymbol(_msg6);
      var settings = {
        templateUrl: '/dialogs/confirmDelete.html',
        controller: ConfirmDialogCtrl,
        controllerAs: "ctrl",
        backdrop: isStatic ? 'static' : true,
        keyboard: !isStatic,
        resolve: {
          header: function header() {
            return angular.copy(_header5);
          },
          msg: function msg() {
            return angular.copy(_msg6);
          }
        }
      };
      var modalInstance = this.$uibModal.open(settings);
      return asPromise(modalInstance);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_header6, _options, isStatic) {
      var settings = {
        templateUrl: '/dialogs/upload.html',
        controller: FileUploadDialogCtrl,
        controllerAs: "ctrl",
        backdrop: isStatic ? 'static' : true,
        keyboard: !isStatic,
        resolve: {
          header: function header() {
            return angular.copy(_header6);
          },
          options: function options() {
            return _options;
          }
        }
      };
      var modalInstance = this.$uibModal.open(settings);
      return asPromise(modalInstance);
    }
  }, {
    key: "create",
    value: function create(url, ctrlr, _data, opts) {
      opts = opts || {};
      var k = opts.keyboard || true;
      var b = opts.backdrop || true;
      var w = opts.windowClass || 'dialogs-default';
      var settings = {
        templateUrl: url,
        controller: ctrlr,
        backdrop: b,
        keyboard: k,
        windowClass: w,
        resolve: {
          data: function data() {
            return angular.copy(_data);
          }
        }
      };
      var modalInstance = this.$uibModal.open(settings);
      return modalInstance.result;
    }
  }, {
    key: "translate",
    value: function translate(newStrings) {
      angular.extend(defaultStrings, newStrings);
    }
  }, {
    key: "getDefaultStrings",
    value: function getDefaultStrings() {
      return defaultStrings;
    }
  }, {
    key: "replaceNewLineSymbol",
    value: function replaceNewLineSymbol(str) {
      return str.split("\\n").join('<br/>');
    }
  }]);
  return DialogsService;
}();
exports.DialogsService = DialogsService;
var defaultStrings = {
  error: language.Generic.Common.kErrorMsgEmotional,
  errorMessage: language.Generic.Common.kUnexpErr,
  close: language.Generic.Buttons.kClose,
  pleaseWait: language.Generic.Curriculum.kPleaseWait,
  processing: language.Generic.Common.kProcessing,
  pleaseWaitEllipsis: language.Generic.Movement.kPleaseWait,
  pleaseWaitMessage: "Waiting on operation to complete.",
  percentComplete: "% Завершено",
  message: language.Generic.Common.kAttention,
  notification: "Уведомление",
  notificationMessage: "Неизвестное уведомление.",
  confirmation: language.Generic.Common.kAttention,
  confirmationMessage: "Требуется подтверждение.",
  ok: language.Generic.Common.kOk,
  cancel: language.Generic.Buttons.kCancel,
  yes: language.Generic.Common.kYes,
  no: language.Generic.Common.kNo
};
var ShowerModalDialogService = /*#__PURE__*/function () {
  ShowerModalDialogService.$inject = ["$dialogs", "$timeout"];
  /*@ngInject*/
  function ShowerModalDialogService($dialogs, $timeout) {
    _classCallCheck(this, ShowerModalDialogService);
    this.$dialogs = $dialogs;
    this.$timeout = $timeout;
    this.wait = null;
    this.counter = 0;
  }
  _createClass(ShowerModalDialogService, [{
    key: "show",
    value: function show(message, header) {
      var _this4 = this;
      if (this.counter == 0 && !this.wait) {
        this.wait = this.$dialogs.wait(message || language.Generic.Common.kProcessing);
      }
      this.counter++;
      return {
        close: function close() {
          return _this4.close();
        }
      };
    }
  }, {
    key: "isShowing",
    get: function get() {
      return this.counter > 0;
    }
  }, {
    key: "close",
    value: function close() {
      var _this5 = this;
      if (this.counter > 0) {
        this.counter--;
      }
      this.$timeout(function () {
        if (_this5.counter == 0 && _this5.wait) {
          _this5.wait.close();
          _this5.wait = null;
        }
      }, 100);
    }
  }]);
  return ShowerModalDialogService;
}();
var LongWorkService = /*#__PURE__*/function (_ShowerModalDialogSer) {
  _inherits(LongWorkService, _ShowerModalDialogSer);
  var _super = _createSuper(LongWorkService);
  function LongWorkService() {
    _classCallCheck(this, LongWorkService);
    return _super.apply(this, arguments);
  }
  _createClass(LongWorkService, [{
    key: "execute",
    value: function execute(work, message) {
      var _this6 = this;
      this.show();
      work["finally"](function () {
        _this6.close();
      });
      return work;
    }
  }]);
  return LongWorkService;
}(ShowerModalDialogService);
exports.LongWorkService = LongWorkService;
var InfiniteProgressBarComponent = {
  selector: "infiniteProgressBar",
  controller: /*#__PURE__*/function () {
    ProgressBarController.$inject = ["$scope"];
    /*@ngInject*/
    function ProgressBarController($scope) {
      _classCallCheck(this, ProgressBarController);
      this.$scope = $scope;
      this.percentComplete = " выполнено %";
    }
    _createClass(ProgressBarController, [{
      key: "$onInit",
      value: function $onInit() {
        var _this7 = this;
        new InfiniteProgress(function (progress) {
          _this7.progress = progress;
          _this7.$scope.$applyAsync();
        });
      }
    }, {
      key: "getProgress",
      value: function getProgress() {
        return {
          width: this.progress + "%"
        };
      }
    }]);
    return ProgressBarController;
  }(),
  controllerAs: "$ctrl",
  template: "<div class=\"progress progress-striped active\">\n\t\t\t\t\t<div class=\"progress-bar progress-bar-info\" ng-style=\"$ctrl.getProgress()\"></div>\n\t\t\t\t\t<span class=\"sr-only\">{{$ctrl.progress | number:2}}{{$ctrl.percentComplete}}</span>\n\t\t\t\t</div>"
};
var InfiniteProgress = /*#__PURE__*/function () {
  function InfiniteProgress(setCallBack) {
    var _this8 = this;
    _classCallCheck(this, InfiniteProgress);
    this.setCallBack = setCallBack;
    this.current = 0;
    window.setTimeout(function () {
      _this8.timer = window.setInterval(function () {
        _this8.current = _this8.getNext();
        _this8.setCallBack(_this8.current);
      }, 100);
    }, 200);
  }
  _createClass(InfiniteProgress, [{
    key: "getIncr",
    value: function getIncr(current) {
      if (current >= 1) {
        window.clearInterval(this.timer);
        return 0;
      }
      var rnd = 0;
      if (current >= 0 && current < 0.25) rnd = (Math.random() * (5 - 3 + 1) + 3) / 100; // Start out between 3 - 6% increments
      else if (current >= 0.25 && current < 0.65) rnd = Math.random() * 3 / 100; // increment between 0 - 3%
      else if (current >= 0.65 && current < 0.9) rnd = Math.random() / 100; // increment between 0 - 1%
      else if (current >= 0.9 && current < 0.99) rnd = 0.001; // finally, increment it .1 %
      else {
        window.clearInterval(this.timer); // after 99%, don't increment:
        return 0;
      }
      return rnd;
    }
  }, {
    key: "getNext",
    value: function getNext() {
      var incr = this.getIncr(this.current / 100) * 100 * 2;
      return this.current + incr;
    }
  }]);
  return InfiniteProgress;
}();
angular.module('uikit.dialogs.services', ['ui.bootstrap', 'ui.bootstrap.modal']).component(InfiniteProgressBarComponent.selector, InfiniteProgressBarComponent).service('$dialogs', DialogsService).service("$showerModalDialog", ShowerModalDialogService).service("$longWork", LongWorkService);
angular.module('uikit.dialogs', ['ui.bootstrap', 'ui.bootstrap.modal', 'uikit.dialogs.services', 'ngSanitize']).value("defaultStrings", defaultStrings).run(['$templateCache', '$interpolate', function ($templateCache, $interpolate) {
  var startSym = $interpolate.startSymbol();
  var endSym = $interpolate.endSymbol();
  $templateCache.put('/dialogs/error.html', "<div class=\"bootstrap-dialog type-danger\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-header\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-close-button\" style=\"display: block;\">\n\t\t\t\t\t\t\t<button class=\"close\" ng-click=\"ctrl.close()\">\xD7</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\"></span> " + startSym + "ctrl.header" + endSym + "</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-body\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-message\">\n\t\t\t\t\t\t\t<div class=\"wrap-pre\" ng-bind-html=\"ctrl.msg\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-footer\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-footer-buttons\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.close()\">\n\t\t\t\t\t\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ok-sign\"></span>\n\t\t\t\t\t\t\t\t" + startSym + "ctrl.defaultStrings.ok" + endSym + "</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>");
  $templateCache.put('/dialogs/notify.html', "<div class=\"bootstrap-dialog type-info\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-header\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-close-button\">\n\t\t\t\t\t\t\t<button class=\"close\" ng-click=\"ctrl.close()\">&times;</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\"><span class=\"glyphicon glyphicon-info-sign\"></span> " + startSym + "ctrl.header" + endSym + "</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-body\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-message\">\n\t\t\t\t\t\t\t<div class=\"wrap-pre\" ng-bind-html=\"ctrl.msg\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-footer\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-footer-buttons\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.close()\">\n\t\t\t\t\t\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ok-sign\"></span> " + startSym + "ctrl.defaultStrings.ok" + endSym + "\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>");
  $templateCache.put('/dialogs/wait.html', "<div class=\"bootstrap-dialog type-primary\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-header\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\"> <span class=\"glyphicon glyphicon-time\"></span> " + startSym + "ctrl.header" + endSym + "</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-body\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-message\">\n\t\t\t\t\t\t\t<p ng-bind-html=\"ctrl.msg\"></p>\n\t\t\t\t\t\t\t<infinite-progress-bar></infinite-progress-bar>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>");
  $templateCache.put('/dialogs/confirm.html', "<div class=\"bootstrap-dialog type-primary\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-header\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-close-button\" style=\"display: block;\">\n\t\t\t\t\t\t\t<button class=\"close\" ng-click=\"ctrl.close()\">&times;</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\"> " + startSym + "ctrl.header" + endSym + "</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-body\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-message\">\n\t\t\t\t\t\t\t<div class=\"wrap-pre\" ng-bind-html=\"ctrl.msg\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-footer\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-footer-buttons\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" autofocus ng-click=\"ctrl.yes()\">\n\t\t\t\t\t\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ok-sign\"></span>\n\t\t\t\t\t\t\t\t" + startSym + "ctrl.defaultStrings.yes" + endSym + "\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-default\" ng-click=\"ctrl.no()\">\n\t\t\t\t\t\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-remove-sign\"></span>\n\t\t\t\t\t\t\t\t" + startSym + "ctrl.defaultStrings.no" + endSym + "\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>");
  $templateCache.put('/dialogs/confirmDelete.html', "<div class=\"bootstrap-dialog type-danger\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-header\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-close-button\">\n\t\t\t\t\t\t\t<button class=\"close\" ng-click=\"ctrl.no()\">&times;</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\"> " + startSym + "ctrl.header" + endSym + "</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-body\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-message\">\n\t\t\t\t\t\t\t<div class=\"wrap-pre\" ng-bind-html=\"ctrl.msg\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-footer\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-footer-buttons\">\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" ng-click=\"ctrl.yes()\">\n\t\t\t\t\t\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ok-sign\"></span>\n\t\t\t\t\t\t\t\t" + startSym + "ctrl.defaultStrings.yes" + endSym + "\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-default\" ng-click=\"ctrl.no()\">\n\t\t\t\t\t\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-remove-sign\"></span>\n\t\t\t\t\t\t\t\t" + startSym + "ctrl.defaultStrings.no" + endSym + "\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>");
  $templateCache.put('/dialogs/upload.html', "<div class=\"bootstrap-dialog type-primary\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-header\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-close-button\">\n\t\t\t\t\t\t\t<button class=\"close\" ng-click=\"ctrl.cancel()\">&times;</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-title\"> " + startSym + "ctrl.header" + endSym + "</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-body\">\n\t\t\t\t\t\t<div ng-if=\"ctrl.checkContentHtml()\" ng-bind-html=\"ctrl.getContentHtml()\"></div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<file-upload service=\"ctrl.fileUploadService\" with-description=\"ctrl.withDescription\"></file-upload>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<div class=\"bootstrap-dialog-footer\">\n\t\t\t\t\t\t<div class=\"bootstrap-dialog-footer-buttons\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ng-click=\"ctrl.upload()\">\n\t\t\t\t\t\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ok-sign\"></span>\n\t\t\t\t\t\t\t\t" + startSym + "ctrl.defaultStrings.ok" + endSym + "\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-default\" ng-click=\"ctrl.cancel()\">\n\t\t\t\t\t\t\t\t<span class=\"bootstrap-dialog-button-icon glyphicon glyphicon-ban-circle\"></span>\n\t\t\t\t\t\t\t\t" + startSym + "ctrl.defaultStrings.cancel" + endSym + "\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>");
}]);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Документация на dynatree http://wwwendt.de/tech/dynatree/doc/dynatree-doc.html
// Dynotree больше не поддерживается, документация мертва. Альтернативный источник документации http://web.archive.org/web/20181009203806/http://wwwendt.de:80/tech/dynatree/doc/dynatree-doc.html
// Документация на angular components
// * https://code.angularjs.org/1.6.4/docs/guide/component
// * https://code.angularjs.org/1.6.4/docs/tutorial/step_03


// Скрытие а не удаление отфильтрованных листьев
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeComponent = void 0;
var Modes = _interopRequireWildcard(__webpack_require__(67));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var treeController = function treeController($scope, $element, $attrs) {
  var $ctrl = $scope.$ctrl;
  $ctrl.$onInit = function () {
    // контроллер и привязки (bindings) инициализируются после исполнения функции
    $scope.$watch(function () {
      return $ctrl.model;
    }, $scope.rebuildTree);
    $scope.$watch(function () {
      return $ctrl.settings;
    }, function () {
      $scope.settings = angular.extend($scope.settings, $ctrl.settings);
      $scope.rebuildTree();
    });
  };
  $ctrl.selected = {};
  var defaultSettings = {
    mode: Modes.single | Modes.read,
    selected: {
      nodes: []
    }
  };
  $scope.settings = angular.extend({}, defaultSettings);

  // Элемент дерева
  $scope.tree = $('#tree', $element);
  var isTreeInited = false;
  $scope.rebuildTree = function () {
    // взять от дерева только листья
    var unpackNode = function unpackNode(node) {
      if (node.childList) {
        var _ref;
        return (_ref = [node]).concat.apply(_ref, _toConsumableArray(node.childList.map(unpackNode)));
      }
      return [node];
    };
    var readMode = {
      selectMode: 3,
      children: $ctrl.model,
      onExpand: function onExpand(flag, node) {
        var key = node.getKeyPath();
        if (flag) {
          $scope.expandedList.push(key);
        } else {
          $scope.expandedList = $scope.expandedList.filter(function (nodeKey) {
            return nodeKey != key;
          });
        }
      }
    };
    var getSelectedModel = function getSelectedModel(selectedNodes) {
      //let selectedNodes = $scope.tree.dynatree("getSelectedNodes").map(o => o.data);
      return {
        nodes: selectedNodes.filter(function (o) {
          return !o.isFolder;
        })
      };
    };
    var editMode = {
      checkbox: Modes.checkMode($scope.settings.mode, Modes.multi),
      onSelect: function onSelect(isSelected, node) {
        var selectedNodes = $ctrl.selected.nodes || [];
        var nodes = unpackNode(node).map(function (node) {
          return node.data;
        });
        if (isSelected) {
          var _selectedNodes;
          var newNodes = nodes.filter(function (node) {
            return selectedNodes.every(function (sel) {
              return sel.key != node.key;
            });
          });
          (_selectedNodes = selectedNodes).push.apply(_selectedNodes, _toConsumableArray(newNodes));
        } else {
          var keys = nodes.map(function (node) {
            return node.key;
          });
          selectedNodes = selectedNodes.filter(function (node) {
            return keys.indexOf(node.key) < 0;
          });
        }
        $ctrl.selected = getSelectedModel(selectedNodes.filter(function (o) {
          return !o.isFolder;
        }));

        // для нужд ТКУ понадобилось - чтобы следить за изменениями в дереве (включен/выключен элемент)
        if ($scope.settings.customOnSelectHandler && typeof $scope.settings.customOnSelectHandler === "function") {
          $scope.settings.customOnSelectHandler($ctrl.selected);
        }

        // Передать выбранные верхнему контроллеру
        $ctrl.onUpdate({
          selected: $ctrl.selected
        });
      },
      onActivate: function onActivate(node) {
        if (Modes.checkMode($scope.settings.mode, Modes.multi) || node.childList) return;
        var selectedNodes = [node.data];
        $ctrl.selected = getSelectedModel(selectedNodes);
        // Передать выбранные верхнему контроллеру
        $ctrl.onUpdate({
          selected: $ctrl.selected
        });
      }
    };
    var configuredModel = !Modes.checkMode($scope.settings.mode, Modes.edit) ? readMode : angular.extend(readMode, editMode);
    $scope.dynatreemodel = angular.extend({}, $ctrl.dynatreemodel, configuredModel);
    $scope.tree.dynatree($scope.dynatreemodel);
    if (!isTreeInited) {
      saveExpanded();
      isTreeInited = true;
    }
    $scope.tree.dynatree("getTree").reload();
    var reselectNode = function reselectNode(node) {
      if (!node.data.isFolder && selectedNodesIds.indexOf(node.data.id) >= 0) node.toggleSelect();
    };
    $ctrl.selected.nodes = $ctrl.selected.nodes || [];
    var selectedNodesIds = $ctrl.selected.nodes.map(function (node) {
      return node.id;
    });
    $scope.tree.dynatree("getRoot").visit(function (node) {
      if (!node.isSelected()) {
        reselectNode(node);
        return;
      }
      var data = node.data;
      if (!data.isFolder) $ctrl.selected.nodes.push(data);
    });
    $ctrl.selected.nodes = _.uniq($ctrl.selected.nodes, false, 'id');
    $ctrl.onUpdate({
      selected: getSelectedModel(($ctrl.selected.nodes || []).filter(function (o) {
        return !o.isFolder;
      }))
    });
    loadeExpanded();
  };
  $scope.expandedList = [];
  var saveExpanded = function saveExpanded() {
    $scope.expandedList = [];
    $scope.tree.dynatree("getRoot").visit(function (node) {
      if (node.isExpanded()) $scope.expandedList.push(node.getKeyPath());
    });
  };
  var loadeExpanded = function loadeExpanded() {
    $scope.tree.dynatree("getRoot").visit(function (node) {
      if ($scope.expandedList.indexOf(node.getKeyPath()) < 0) return;
      node.expand(true);
    });
  };
};
var TreeComponent = {
  templateUrl: '/static/dist/app/global/ui-components/tree/template.html',
  selector: "tree",
  controller: treeController,
  bindings: {
    settings: '<?',
    model: '=',
    onUpdate: '&'
  }
};
exports.TreeComponent = TreeComponent;

/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select2StackService = exports.Select2Directive = exports.Select2Config = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var defaultOptions = {
  width: '100%'
};
var sortedKeys = function sortedKeys(obj) {
  var keys = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys.sort();
};
/* @ngInject */
var Select2Directive = function Select2Directive($parse, $timeout, $filter, select2Config, select2Stack, $log) {
  if (select2Config) {
    Object.assign(defaultOptions, select2Config);
  }
  var filter = $filter("filter");
  return {
    restrict: "E",
    scope: {
      options: "<"
    },
    require: "ngModel",
    priority: 1,
    replace: true,
    template: "<select class=\"form-control\"></select>",
    link: function link(scope, element, attrs, controller) {
      var getOptions;
      var opts = Object.assign({}, defaultOptions, scope.options);
      opts.width = attrs.width || opts.width;
      var isMultiple = angular.isDefined(attrs.multiple) || opts.multiple;
      opts.multiple = isMultiple;
      // make sure ngrequired validation works
      if (isMultiple) {
        controller.$isEmpty = function (value) {
          return !value || value.length === 0;
        };
      }
      if (attrs.placeholder) {
        opts.placeholder = attrs.placeholder;
      }
      var filterOptions = $parse(attrs.optionsFilter);
      var optionItems = {};
      var filterValues = function filterValues(values) {
        if (filterOptions) {
          var filterParams = filterOptions(scope);
          if (filterParams) {
            return filter(values, filterParams);
          }
        }
        return values;
      };
      //функция определения идентификатора опции. по умолчанию - сама опция
      var getTrackIdFn = function getTrackIdFn(obj) {
        return obj;
      };
      //функция определения модели значения опции. по умолчанию - сама опция
      var getValueFn = function getValueFn(obj) {
        return obj;
      };
      var expressionScope = scope.$parent.$parent;
      var runWatch = function runWatch() {
        scope.$watch(function () {
          return controller.$modelValue;
        }, function (newVal, oldVal) {
          if (newVal == undefined || oldVal == undefined) {
            return;
          }
          if (!angular.equals(newVal, oldVal)) {
            $log.debug("reset", element, newVal);
            controller.$render();
            $timeout(function () {
              return scope.select2.trigger("change.select2");
            });
          }
        });
      };
      var prepareOptsData = function prepareOptsData() {};
      var defineGetOptions = function defineGetOptions() {
        if (attrs.s2Options) {
          opts.data = $parse(attrs.s2Options)(expressionScope);
        } else if (opts.data) {
          prepareOptsData = function prepareOptsData() {
            return opts.data.forEach(function (opt) {
              return opt.obj = opt.obj || opt.id;
            });
          };
        }
        getOptions = function getOptions(callback) {
          prepareOptsData();
          callback(opts.data);
        };
        runWatch();
      };
      if (attrs.s2Options) {
        var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;
        var match = attrs.s2Options.match(NG_OPTIONS_REGEXP);
        //конфигурация 
        if (match) {
          var displayFn = $parse(match[2] || match[1]);
          var valuesFn = $parse(match[7]);
          var valueName = match[4] || match[6];
          var valueFn = $parse(match[2] ? match[1] : valueName);
          var keyName = match[5];
          var trackByFn;
          if (match[8]) {
            //если указано выражение track by - используем его для идентификации опций
            trackByFn = $parse(match[8]);
          } else {
            //иначе используем выражение value
            trackByFn = valueFn;
          }
          getTrackIdFn = function getTrackIdFn(obj) {
            var locals = {};
            locals[valueName] = obj;
            return trackByFn(expressionScope, locals);
          };
          getValueFn = function getValueFn(obj) {
            var locals = {};
            locals[valueName] = obj;
            return valueFn(expressionScope, locals);
          };
          getOptions = function getOptions(callback) {
            optionItems = {};
            var matchValues = valuesFn(expressionScope);
            var values = filterValues(matchValues);
            var keys = (keyName ? sortedKeys(values) : values) || [];
            var options = [];
            for (var i = 0; i < keys.length; i++) {
              var locals = {};
              var key = i;
              if (keyName) {
                key = keys[i];
                locals[keyName] = key;
              }
              locals[valueName] = values[key];
              var value = valueFn(expressionScope, locals) || values[key];
              var label = displayFn(expressionScope, locals) || "";
              var trackId = trackByFn(expressionScope, locals);
              // Select2 returns strings, we use a dictionary to get
              // back to the original value.
              optionItems[trackId] = {
                id: trackId,
                text: label,
                obj: value
              };
              options.push(optionItems[trackId]);
            }
            callback(options);
          };
          getOptions(function (options) {
            opts.data = options;
          });
          expressionScope.$watch(match[7], function () {
            getOptions(function (options) {
              opts.data = options;
              if (scope.select2) {
                element.empty().select2(opts);
              }
              controller.$render();
            });
          });
          runWatch();
        } else {
          defineGetOptions();
        }
      }
      // todo: задублировал код выше
      else if (opts.data) {
        getTrackIdFn = opts.getTrackIdFn || function (obj) {
          return obj === null || obj === void 0 ? void 0 : obj.id;
        };
        getValueFn = opts.getValueFn || function (obj) {
          return obj === null || obj === void 0 ? void 0 : obj.id;
        };
        defineGetOptions();
      }
      if (opts.clear) {
        opts.clear.subscribe(function () {
          element.val("").trigger("change").trigger("select2:select");
        });
      }
      if (opts.ajax) {
        var options = [];
        var proxiedFunc = opts.ajax.processResults;
        getTrackIdFn = function getTrackIdFn(obj) {
          return obj === null || obj === void 0 ? void 0 : obj.id;
        };
        if (opts.ajax.getInitOptionsFn) {
          options = opts.ajax.getInitOptionsFn();
        }
        opts.ajax.processResults = function (data, query) {
          var result = proxiedFunc(data, query);
          options = result.results.map(function (i) {
            return {
              id: i.id,
              text: i.text,
              obj: i
            };
          });
          return result;
        };
        if (opts.initSelection) {
          var _initSelection2 = opts.initSelection;
          opts.initSelection = function (element, callback) {
            _initSelection2(element, function (result) {
              if (result && result.id) {
                options.push({
                  id: result.id,
                  text: result.text,
                  obj: result
                });
              }
              callback(result);
            });
          };
        }
        getOptions = function getOptions(callback) {
          callback(options);
        };
        runWatch();
      }
      function getSelection(callback) {
        if (isMultiple) {
          //todo. trackby
          getOptions(function (options) {
            var selection = [];
            var viewValue = controller.$viewValue || [];
            var _loop = function _loop() {
              value = viewValue[i];
              var trackId = getTrackIdFn(value) || value;
              var optionItem = options.find(function (x) {
                return x.id == trackId;
              });
              if (optionItem) {
                selection.push(optionItem);
              } else if (opts.tags) {
                //todo. make item by external function in options
                var tagItem = {
                  id: trackId,
                  text: trackId
                };
                selection.push(tagItem);
              }
            };
            for (var i = 0; i < viewValue.length; i++) {
              var value;
              _loop();
            }
            // for (var i = 0; i < options.length; i++) {
            // 	var option = options[i];
            // 	if (viewValue.indexOf(option.id + "") > -1) {
            // 		selection.push(option);
            // 	}
            // }
            callback(selection);
          });
        } else {
          getOptions(function (options) {
            var trackId = getTrackIdFn(controller.$viewValue);
            if (!trackId && trackId != 0) {
              trackId = controller.$viewValue;
            }
            ;
            var optionItem = options.find(function (x) {
              return x.id == trackId;
            });
            callback(optionItem || {
              obj: {}
            });
          });
        }
      }
      if (!opts.initSelection) {
        opts.initSelection = function (element, callback) {
          getSelection(callback);
        };
      } else {
        var _initSelection = opts.initSelection;
        opts.initSelection = function (element, callback) {
          _initSelection(element, function (result) {
            if (result && result.id) {
              optionItems[result.id] = result;
            }
            callback(result);
          });
        };
      }
      // register with the select2stack
      var controlObj = {
        close: function close() {
          element.select2("close");
        }
      };
      select2Stack.$register(controlObj);
      scope.$on("destroy", function () {
        select2Stack.$unregister(controlObj);
      });
      var setSelection = function setSelection() {
        getSelection(function (selection) {
          var setVal = null;
          if (isMultiple) {
            setVal = selection.map(function (x) {
              return x.id + "";
            });
          } else if (selection.id) {
            setVal = selection.id + "";
          }
          if (setVal) {
            scope.select2.val(setVal);
          }
        });
      };
      var forceInit = function forceInit() {
        if (!isMultiple && opts.search) {
          scope.select2.val(null);
        }
      };
      controller.$render = function () {
        if (!scope.select2) {
          $log.debug("configure", element, opts);
          scope.select2 = element.select2(opts);
          if (!opts.ajax) {
            // сбивает выбор при ajax инициализации
            $timeout(function () {
              return scope.select2.trigger("change.select2");
            });
          }
          // при первичной отрисовке явно инициализирует элемент с поиском
          // единственного выбора значением null
          forceInit();
        }
        if (!opts.ajax) {
          setSelection();
        }
      };
      $timeout(function () {
        if (!scope.select2) {
          $log.debug("configure", element, opts);
          scope.select2 = element.select2(opts);
        }
        element.on("change", function (e) {
          scope.$applyAsync(function () {
            var trackId = element.select2("val");
            if (isMultiple) {
              getOptions(function (options) {
                var ids = trackId || [];
                var optionItems = ids.map(function (id) {
                  return options.find(function (x) {
                    return x.id == id;
                  }) || {
                    id: id,
                    obj: id,
                    text: id
                  };
                });
                var values = optionItems.map(function (o) {
                  return getValueFn(o);
                });
                //по-хорошему это разрешено только в режиме добавления
                controller.$setViewValue(values);
                controller.$render();
                if (opts.onChange) {
                  $timeout(function () {
                    return opts.onChange();
                  });
                }
              });
            } else {
              getOptions(function (options) {
                var optionItem = options.find(function (x) {
                  return x.id == trackId;
                });
                //по-хорошему это разрешено только в режиме добавления
                optionItem = optionItem || {
                  obj: trackId
                };
                controller.$setViewValue(optionItem.obj);
                controller.$render();
                if (opts.onChange) {
                  $timeout(function () {
                    return opts.onChange();
                  });
                }
              });
            }
          });
        });
        element.on("select2-blur", function () {
          if (controller.$touched) {
            return;
          }
          scope.$evalAsync(function () {
            return controller.$setTouched();
          });
        });
      });
    }
  };
};
Select2Directive.$inject = ["$parse", "$timeout", "$filter", "select2Config", "select2Stack", "$log"];
exports.Select2Directive = Select2Directive;
Select2Directive.selector = "select2";
var Select2Config = {};
exports.Select2Config = Select2Config;
var stack = [];
var Select2StackService = /*#__PURE__*/function () {
  function Select2StackService() {
    _classCallCheck(this, Select2StackService);
  }
  _createClass(Select2StackService, [{
    key: "$register",
    value: function $register(callbackElem) {
      stack.push(callbackElem);
    }
  }, {
    key: "$unregister",
    value: function $unregister(callbackElem) {
      var idx = stack.indexOf(callbackElem);
      if (idx !== -1) {
        stack.splice(idx, 1);
      }
    }
  }, {
    key: "closeAll",
    value: function closeAll() {
      stack.forEach(function (elem) {
        elem.close();
      });
    }
  }]);
  return Select2StackService;
}();
exports.Select2StackService = Select2StackService;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BaseTableController = /*#__PURE__*/function () {
  function BaseTableController($scope) {
    var _this = this;
    _classCallCheck(this, BaseTableController);
    var defaultPageSize = 25;
    this.$scope = $scope;
    var self = this;
    $scope.br = '<br />';
    $scope.$watch(function () {
      return self.model;
    }, function (newModel, oldModel) {
      if (!newModel) return;
      var _self$prepare = self.prepare(newModel);
      var _self$prepare2 = _slicedToArray(_self$prepare, 2);
      self.fields = _self$prepare2[0];
      self.data = _self$prepare2[1];
      /*
      let oldSystemName = oldModel && oldModel.type && oldModel.type.systemName;
      let newSystemName = oldModel.type && oldModel.type.systemName;
      */
      var page = /*oldSystemName == newSystemName &&*/$scope.paging && $scope.paging.page || 1;
      $scope.paging = {
        size: newModel.pageSize || defaultPageSize,
        page: page
      };
      $scope.messages = {
        noData: newModel.type.messages.noDataMessage || language.Generic.ServAdmin.kRefItemsEmpty,
        notFound: newModel.type.messages.notFoundMessage || language.Generic.Common.kNoMatchesFound
      };
    });
    $scope.messages = {
      noData: language.Generic.ServAdmin.kRefItemsEmpty,
      notFound: language.Generic.Common.kNoMatchesFound
    };
    self.filteredData = [];
    $scope.$watch(function () {
      return self.search;
    }, function (newValue, oldValue) {
      if (newValue == oldValue) return newValue;
      self.filteredData = [];
      if (!newValue) return newValue;
      _this.updateFilteredData();
    });
    $scope.$watch(function () {
      return self.data;
    }, function () {
      _this.updateFilteredData();
    });
  }
  _createClass(BaseTableController, [{
    key: "updateFilteredData",
    value: function updateFilteredData() {
      var self = this;
      self.filteredData = [];
      if (this.search == undefined) return;
      var searchString = this.search.toLowerCase();
      for (var index in self.data) {
        var row = self.data[index];
        var _loop = function _loop(prop) {
          var field = self.fields.find(function (f) {
            return f.systemName == prop;
          });
          if (!field || field.isHidden || prop != "name" && prop != "shortName") return "continue";
          var value = row[prop].toString().toLowerCase();
          var text = (field && self.getText(row, field).toString() || "").toLowerCase();
          if (text.includes(searchString) || value.includes(searchString)) {
            self.filteredData.push(row);
            return "break";
          }
        };
        for (var prop in row) {
          var _ret = _loop(prop);
          if (_ret === "continue") continue;
          if (_ret === "break") break;
        }
      }
    }
  }, {
    key: "prepareDate",
    value: function prepareDate(line) {
      var data = angular.copy(this.fields);
      for (var index in data) {
        var prop = data[index];
        prop.value = line[prop.systemName];
      }
      return data;
    }
  }, {
    key: "select",
    value: function select(line) {
      if (line.isUsed != "System") {
        var data = this.prepareDate(line);
        this.onSelect({
          data: data
        });
      }
    }
  }, {
    key: "isEditable",
    value: function isEditable(column) {
      return column.isMain; // && !!this.onEdit;
    }
  }, {
    key: "edit",
    value: function edit(line) {
      var data = this.prepareDate(line);
      this.onEdit({
        data: data
      });
    }
  }, {
    key: "isSystem",
    value: function isSystem(line) {
      return line.isUsed == "System";
    }
  }, {
    key: "isFree",
    value: function isFree(line) {
      return line.isUsed == "Free";
    }
  }, {
    key: "isSelected",
    value: function isSelected(line) {
      return line.isSelected;
    }

    /* Метод подготовки модели к использованию
    * Должен вернуть массив из 3х массивов
    * [0] -- массив заголовков
    * [1] -- массив данных
    * [2] -- массив подвала
    */
  }, {
    key: "prepare",
    value: function prepare(model) {
      if (!model) return;
      for (var index in model.fields) {
        var field = model.fields[index];
        if (field.isHidden) continue;

        //Todo подумать нужно ли автоскрытие пустых полей
        //field.isHidden = !model.data.filter(o => !!o[field.systemName]).length;
      }

      return [model.fields.sort(function (a, b) {
        return a.order - b.order;
      }), model.data];
    }
  }, {
    key: "getData",
    value: function getData() {
      return !this.search ? this.data : this.filteredData;
    }
  }, {
    key: "getPage",
    value: function getPage(page, size) {
      return this.getData().slice((page - 1) * size, page * size);
    }
  }, {
    key: "showPaging",
    value: function showPaging() {
      var data = this.getData();
      return data && data.length > this.$scope.paging.size;
    }
  }, {
    key: "getText",
    value: function getText(line, column) {
      var toCamelCase = function toCamelCase(str) {
        return str && "".concat(str[0].toLocaleLowerCase()).concat(str.slice(1));
      };
      var toPascalCase = function toPascalCase(str) {
        return str && "".concat(str[0].toLocaleUpperCase()).concat(str.slice(1));
      };
      var value = line[column.systemName];
      if (column.type === "Date") {
        var date = new Date(value);
        return dateUtils.date2str(date);
      }
      if (column.availableValues) {
        if (column.type === "Select" || column.type === "CheckBox") {
          // Без core api, availableValues передаются в camelCase формате, а с core api передаются в pascalCase
          var isAvailableValuesInCamelCase = Object.keys(column.availableValues).every(function (key) {
            return key.toString()[0] == key.toString().toLocaleLowerCase()[0];
          });
          if (isAvailableValuesInCamelCase) {
            value = toCamelCase(value.toString());
          } else {
            value = toPascalCase(value.toString());
          }
        } else {
          if (typeof value === "string") {
            value = toCamelCase(value);
          }
        }
        var data = column.availableValues[value];
        return !!data ? data.name : '-';
      }
      return value;
    }
  }]);
  return BaseTableController;
}();
BaseTableController.$inject = ["$scope"];
var tableControllerName = "BaseTableCtrl";
var tableComponent = {
  templateUrl: "/static/dist/app/global/ui-components/codebaseView/table/tableTemplate.html",
  controller: tableControllerName,
  controllerAs: "$ctrl",
  bindings: {
    model: "=ngModel",
    onSelect: "&onSelect",
    onEdit: "&onEdit",
    search: "="
  }
};
var moduleNamespace = 'irtech.netcity.ui-components';
var moduleName = 'tableView';
angular.module(moduleNamespace).controller(tableControllerName, BaseTableController).component(moduleName, tableComponent);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
    this.br = '<br />';
  }
  _createClass(Controller, [{
    key: "init",
    value: function init() {
      this.sourceModelValue = angular.copy(this.model.value);
    }
  }, {
    key: "validate",
    value: function validate(validator) {
      var condition = new RegExp(validator.condition);
      var value = validator.sourceValue ? this.sourceModelValue : this.model.value;
      return condition.test(value == undefined ? "" : value);
    }
  }, {
    key: "getInformationClass",
    value: function getInformationClass(info) {
      return "alert-".concat(info.type.toLowerCase());
    }
  }, {
    key: "getType",
    value: function getType() {
      var predefined = ['Select', 'Date', 'CheckBox'];
      if (predefined.indexOf(this.model.type) >= 0) {
        return this.model.type;
      }
      return 'Input';
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue(model) {
      if (typeof model.value === "boolean") {
        return this.model.value.toString();
      }
      if (typeof model.value === 'number') {
        return this.model.value.toString();
      }
      return model.value || this.mapEnumKey(Object.keys(model['availableValues'])[0]);
    }
  }, {
    key: "mapEnumKey",
    value: function mapEnumKey(value) {
      if (typeof value == "boolean" || value == "true" || value == "false") return value;
      return value && "".concat(value[0].toUpperCase()).concat(value.slice(1));
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var result = this.isEdit && !(this.isEditable() || this.model.isEditable);
      return !this.prepareEmbendedScripts(!result);
    }
  }, {
    key: "getValueBySystemName",
    value: function getValueBySystemName(model, systemName) {
      var field = model.find(function (o) {
        return o.systemName == systemName;
      });
      return field && field.value;
    }
  }, {
    key: "prepareEmbendedScripts",
    value: function prepareEmbendedScripts(previewValue) {
      var replacer = function replacer(str) {
        return str.replace(/(this\.parentModel)\.(\w+)/gm, "this.getValueBySystemName($1, '$2')");
      };
      var lastResult = previewValue;
      for (var index in this.model.embendedScriptsEditable) {
        var embendedScript = this.model.embendedScriptsEditable[index];
        switch (embendedScript.combinationWithOtherOperations) {
          case 'And':
            if (!lastResult) continue;
            lastResult = eval(replacer(embendedScript.script));
            break;
          case 'Or':
            if (lastResult) continue;
            lastResult = eval(replacer(embendedScript.script));
            break;
        }
      }
      return lastResult;
    }
  }, {
    key: "isEditable",
    value: function isEditable() {
      return this.model.isEditableInStatus.indexOf(this.status) >= 0;
    }
  }]);
  return Controller;
}();
var controllerName = "EditModelFieldController";
var component = {
  templateUrl: "/static/dist/app/global/ui-components/codebaseView/field/editModelFieldTemplate.html",
  controller: controllerName,
  controllerAs: "$ctrl",
  bindings: {
    model: "=ngModel",
    isEdit: "=isEdit",
    status: "=status",
    parentModel: "=",
    minDate: "=",
    maxDate: "="
  }
};
var moduleNamespace = 'irtech.netcity.ui-components';
var moduleName = 'uiEditField';
angular.module(moduleNamespace).controller(controllerName, Controller).component(moduleName, component);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var devDebug = function devDebug() {
  var _console;
  return window.appContext.environment === "dev" && (_console = console).debug.apply(_console, arguments);
};
var dateInputDirective = function dateInputDirective() {
  var linkFunc = function linkFunc(scope, element, attr, controller) {
    var setDate = function setDate(newDate) {
      if (!newDate) return;
      newDate = dateUtils.str2date(newDate);
      if (!newDate) return;
      if (!scope.dateValue) {
        scope.dateValue = new Date();
        scope.dateValue.setMinutes(0);
      }
      scope.dateValue.setDate(newDate.getDate());
      scope.dateValue.setMonth(newDate.getMonth());
      scope.dateValue.setFullYear(newDate.getFullYear());
    };
    if (typeof scope.dateValue === "string") {
      var date = new Date(scope.dateValue);
      setDate(scope.dateValue);
      if (!scope.dateValue || typeof scope.dateValue === "string") scope.dateValue = date;
    }
    var initDateInput = function initDateInput() {
      return window.dateInput.initDateInput($(".input-group.date", element), scope.minDate || null, scope.maxDate || null, null, {
        format: dateUtils.getDateFormat().format
      });
    };
    scope.$watch(function () {
      if (scope.minDate) {
        initDateInput();
      }
      return scope.minDate;
    }, function () {
      return initDateInput();
    });
    scope.$watch(function () {
      if (scope.maxDate) {
        initDateInput();
      }
      return scope.maxDate;
    }, function () {
      return initDateInput();
    });
    initDateInput();
    scope.$watch("dateInputValue", setDate);
    var dateInputElement = $("#dateInput");
    scope.$watch(scope.dateValue, function (value, valueold) {
      if (scope.dateValue !== value && scope.dateValue !== valueold) {
        value = scope.dateValue;
      }
      if (!value) {
        dateInputElement.val("");
        return;
      }
      var val = dateUtils.date2str(value);
      scope.dateInputValue = val;
      dateInputElement.val(val);
    });
  };
  return {
    restrict: "E",
    require: "ngModel",
    replace: false,
    scope: {
      dateValue: "=ngModel",
      minDate: "=minDate",
      maxDate: "=maxDate"
    },
    link: linkFunc,
    templateUrl: "/static/dist/app/global/ui-components/dateinput/dateInputTemplate.html"
  };
};
angular.module("irtech.netcity.ui-components").directive("dateInput", dateInputDirective);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NsDateInputDirective = exports.DateInputComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DateValidator = /*#__PURE__*/function () {
  function DateValidator(strDate, dateUtils) {
    _classCallCheck(this, DateValidator);
    this.strDate = strDate;
    this.dateUtils = dateUtils;
  }
  _createClass(DateValidator, [{
    key: "validateDateFormat",
    value: function validateDateFormat() {
      return !!this.dateUtils.str2date(this.strDate);
    }
  }]);
  return DateValidator;
}();
/*@ngInject*/
var NsDateInputDirective = function NsDateInputDirective($timeout, changeTracker, dateUtils) {
  var toStr = function toStr(dateParam) {
    return dateParam ? dateUtils.date2str(new Date(dateParam)) : null;
  };
  var initDatepicker = function initDatepicker(component, options) {
    var minDate = dateUtils.asUTCDate(options.calendarMinDate || new Date(1753, 1, 1));
    var maxDate = options.calendarMaxDate || null;
    if (maxDate) {
      maxDate = dateUtils.asUTCDate(maxDate);
    }
    dateInput.initDateInput(component, minDate, maxDate, options.calendarSettings || null, options.datePickerOptions || null, true);
  };
  var setStartDateDatepicker = function setStartDateDatepicker(component, startDate) {
    dateInput.setStartDate(component, startDate);
  };
  var setEndDateDatepicker = function setEndDateDatepicker(component, endDate) {
    dateInput.setEndDate(component, endDate);
  };
  var onChange = function onChange() {
    changeTracker.dataWasChanged();
  };
  return {
    restrict: 'A',
    require: "ngModel",
    scope: {
      required: "=requiredValue",
      options: "=?",
      minDate: "=?",
      maxDate: "=?",
      dateChange: "=?"
    },
    link: function link(scope, element, attrs, ngModel) {
      var options = scope.options || {};
      options.calendarMinDate = options.calendarMinDate || scope.minDate;
      options.calendarMaxDate = options.calendarMaxDate || scope.maxDate;
      options.calendarMinDate = dateUtils.asUTCDate(options.calendarMinDate || new Date(1753, 1, 1));
      if (options.calendarMaxDate) {
        options.calendarMaxDate = dateUtils.asUTCDate(options.calendarMaxDate);
      }
      // инициализация
      initDatepicker(element.closest(".input-group.date"), options);
      scope.$watch(function () {
        return scope.minDate;
      }, function (newVal, oldVal) {
        options.calendarMinDate = dateUtils.asUTCDate(newVal || new Date(1753, 1, 1));
        setStartDateDatepicker(element.closest(".input-group.date"), options.calendarMinDate);
        if (oldVal) {
          ngModel.$setDirty();
          ngModel.$validate();
        }
      });
      scope.$watch(function () {
        return scope.maxDate;
      }, function (newVal, oldVal) {
        options.calendarMaxDate = newVal;
        if (options.calendarMaxDate) {
          options.calendarMaxDate = dateUtils.asUTCDate(options.calendarMaxDate);
        }
        if (options.calendarMaxDate) {
          setEndDateDatepicker(element.closest(".input-group.date"), options.calendarMaxDate);
        }
        if (oldVal) {
          ngModel.$setDirty();
          ngModel.$validate();
        }
      });
      var validator = null;
      var initValidator = function initValidator(viewValue) {
        if (validator == null || validator.strDate !== viewValue) {
          validator = new DateValidator(viewValue, dateUtils);
        }
      };
      ngModel.$formatters.push(function (raw) {
        if (raw == null || raw == "") {
          return "";
        }
        if (typeof raw == "string") {
          return toStr(raw);
        }
        //необходимо приведение к локальной дате
        //в противном случае даты с временем < 4 или > 20 часов искажают номер дня
        //это не должно никак вилять на даты без времени
        var localDate = dateUtils.asLocalDateTime(raw);
        var str = dateUtils.date2str(localDate);
        return str;
      });
      ngModel.$parsers.push(function (raw) {
        if (raw == null || raw == "") {
          return null;
        }
        var date = dateUtils.str2date(raw);
        return date;
      });
      //выключаем штатный в jquery обработчик 'paste' событие во избежания автокоррекции даты
      element.unbind('paste');
      element.on('paste', function ($event) {
        var data = $event.originalEvent.clipboardData;
        if (typeof data !== "undefined") {
          var pastValue = data.getData("text/plain");
          // пробуем спарсить дату из вставленных данных и если дата невалидная то отменяем событие
          var parcedDate = dateUtils.str2date(pastValue);
          if (parcedDate === null) {
            $event.stopPropagation();
            $event.preventDefault();
            return;
          }
          $timeout(function () {
            ngModel.$setViewValue(pastValue);
            if (attrs.trackChanges != "false") {
              onChange();
            }
          });
          return;
        }
        $timeout(function () {
          var pastValue = element.val();
          ngModel.$setViewValue(pastValue);
        }, 100);
      });
      element.on("change", function ($event) {
        var changeValue = element.val();
        ngModel.$setViewValue(changeValue);
        if (scope.dateChange && typeof scope.dateChange === "function") {
          scope.dateChange();
        }
      });
      // валидаторы по умолчанию
      ngModel.$validators.dateFormat = function (modelValue, viewValue) {
        if (!scope.required && ngModel.$isEmpty(viewValue)) {
          return true;
        }
        initValidator(viewValue);
        var result = validator.validateDateFormat();
        return result;
      };
      ngModel.$validators.datePeriod = function (modelValue, viewValue) {
        if (!scope.minDate && !scope.maxDate) {
          return true;
        }
        if (!modelValue && ngModel.$isEmpty(viewValue)) {
          if (!scope.required) {
            return true;
          }
          return false;
        }
        if (options.calendarMinDate && modelValue < options.calendarMinDate) {
          return false;
        }
        if (options.calendarMaxDate && modelValue > options.calendarMaxDate) {
          return false;
        }
        return true;
      };
    }
  };
};
NsDateInputDirective.$inject = ["$timeout", "changeTracker", "dateUtils"];
exports.NsDateInputDirective = NsDateInputDirective;
var DateInputComponent = {
  template: "\n\t\t<div class=\"input-group date\" ng-if=\"!$ctrl.readonly\">\n\t\t\t<input track-changes=\"{{$ctrl.trackChanges()}}\" type=\"text\" class=\"form-control date-input\" size=\"11\" maxlength=\"10\" ns-date-input\n\t\t\t\tng-model=\"$ctrl.dateModel\" name=\"{{$ctrl.name}}\" ng-required=\"$ctrl.required\"\n\t\t\t\trequired-value=\"$ctrl.required\" options=\"$ctrl.options\" min-date=\"$ctrl.minDate\" max-date=\"$ctrl.maxDate\" date-change=\"$ctrl.dateChange\">\n\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t<button title=\"\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C\" type=\"button\" class=\"btn btn-primary\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-calendar\"></span>\n\t\t\t\t</button>\n\t\t\t</span>\n\t\t</div>\n\t\t<input type=\"text\" class=\"form-control date-input\" name=\"{{$ctrl.name}}\" size=\"11\" maxlength=\"10\" ns-date-model2 ng-model=\"$ctrl.dateModel\" disabled ng-if=\"$ctrl.readonly\">",
  controller: /*#__PURE__*/function () {
    function DateInputComponentController() {
      _classCallCheck(this, DateInputComponentController);
    }
    _createClass(DateInputComponentController, [{
      key: "trackChanges",
      value: function trackChanges() {
        return !this.notrack;
      }
    }]);
    return DateInputComponentController;
  }(),
  selector: "dateInputComponent",
  bindings: {
    dateModel: "=",
    name: "@",
    required: "=?",
    options: "=?",
    readonly: "=?",
    minDate: "=?",
    maxDate: "=?",
    dateChange: "&?",
    notrack: "=?"
  },
  controllerAs: "$ctrl"
};
exports.DateInputComponent = DateInputComponent;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = void 0;
var _menu = __webpack_require__(15);
var _common = __webpack_require__(3);
var _app = __webpack_require__(8);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Router = /*#__PURE__*/function () {
  function Router($rootScope, pageContext, $window, $appLoader, changeTracker, $dialogs, $location, coworkerService, pendingRequests, navigationNotificationService, language, loggerFactory) {
    var _this = this;
    _classCallCheck(this, Router);
    this.$rootScope = $rootScope;
    this.pageContext = pageContext;
    this.$window = $window;
    this.$appLoader = $appLoader;
    this.changeTracker = changeTracker;
    this.$dialogs = $dialogs;
    this.$location = $location;
    this.coworkerService = coworkerService;
    this.pendingRequests = pendingRequests;
    this.navigationNotificationService = navigationNotificationService;
    this.language = language;
    this.activateRouteMenu = function (route) {
      var appPart = _this.context.app;
      var routePart = route;
      if (_this.context.app === "school/userinfo") {
        //фикс для модуля ЛК пользователей.
        //актуально для всех модулей доступ к которым производится не из меню
        appPart = "school/users";
        routePart = route.substring(0, route.lastIndexOf('/'));
      }
      var hrefSearch = "/angular/".concat(appPart).concat(routePart);
      (0, _menu.ActivateMenuItem)(hrefSearch);
    };
    this.logger = loggerFactory.getInstance("router");
  }
  _createClass(Router, [{
    key: "updateSearch",
    value: function updateSearch() {
      if (!document.forms["refreshfix"]) {
        return;
      }
      var searchData = this.$location.search();
      if (searchData && Object.getOwnPropertyNames(searchData).length) {
        document.forms["refreshfix"].search.value = encodeURIComponent(JSON.stringify(searchData));
      } else {
        document.forms["refreshfix"].search.value = "";
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      //обработка маршрутизации
      this.$rootScope.$on("$routeChangeStart", function (event, next, prev) {
        _this2.logger.debug("$routeChangeStart", prev, next);
        _this2.$window.routeChanges = _this2.$window.routeChanges || 0;
        _this2.$window.routeChanges++;
        _this2.$appLoader.show();
        _this2.pageContext.showYearTabs = null;
        if (_app.AppInitializer.initing) {
          return;
        }
        _this2.pendingRequests.cancelAll();
        _this2.logger.info("cancel all pending requests");
      });
      this.$rootScope.$on("$routeChangeSuccess", function () {
        _this2.changeTracker.clearDataChanges();
        _this2.navigationNotificationService.processNotifications();
        if (document.forms["refreshfix"]) {
          var baseUrl = document.forms["refreshfix"].baseurl.value;
          document.forms["refreshfix"].route.value = window.location.pathname.replace("/angular/".concat(baseUrl), "").replace("/app/popup/".concat(baseUrl), "");
        }
        // отключил для ангулар asp версии
        if (_this2.$window.isAngularApp) {
          // выводит коворкеров
          _this2.coworkerService.viewCoWorker();
        }
        //let route = this.$location.path();
        var route = _this2.$location.url(); // - в отличие от path сохраняет пар-ры
        if (!_this2.$window.isAngularApp) {
          _this2.activateRouteMenu(route);
        }
        _this2.logger.debug("$routeChangeSuccess", route);
        if (_this2.$window.routeChanges > 1) {
          if (_this2.$window.appContext.yaCounters) {
            var _iterator = _createForOfIteratorHelper(_this2.$window.appContext.yaCounters),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var counter = _step.value;
                var hitUrl = window.location.href;
                if (window.location.origin && window.location.pathname) {
                  hitUrl = window.location.origin + window.location.pathname;
                }
                counter.hit(hitUrl);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
        _this2.updateSearch();
      });
      this.$rootScope.$on("$routeUpdate", function () {
        _this2.updateSearch();
        _this2.logger.debug("$routeUpdate");
      });
      this.$rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        _this2.logger.debug("$routeChangeError");
        _this2.$appLoader.hideArrows();
        if (_this2.$rootScope["test"]) {
          _this2.$appLoader.hideArrows();
        }
        var text = "Запрошенной страницы не существует";
        if (rejection && rejection === 'RouteAccessRestrict') {
          text = "Обратитесь к администратору системы, чтобы получить права доступа";
        }
        _this2.$dialogs.error(text).then(function () {
          if (_this2.$window.routeChanges > 1) {
            _this2.$window.routeChanges = _this2.$window.routeChanges - 2;
            _this2.$window.history.back();
            return;
          } else {
            (0, _common.postTo)(document.referrer);
            return;
          }
        });
        event.preventDefault();
      });
      this.context = this.$window.context;
      if (this.context && (this.context.route !== "" && this.context.route !== "/" || this.context.search)) {
        this.logger.debug("restoring current route ".concat(this.context.route, " from context"));
        if (!this.$window.isAngularApp) {
          this.activateRouteMenu(this.context.route);
        }
        if (this.context.search) {
          this.context.search = JSON.parse(decodeURIComponent(this.context.search));
          this.$location.path(this.context.route).search(this.context.search);
        } else {
          this.$location.path(this.context.route);
        }
      }
    }
  }]);
  return Router;
}();
exports.Router = Router;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateUtils = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DateUtils = /*#__PURE__*/function () {
  DateUtils.$inject = ["appContext"];
  //инициализация
  /*@ngInject*/
  function DateUtils(appContext) {
    _classCallCheck(this, DateUtils);
    //настройки по умолчанию
    this.options = {
      firstYear: parseInt(new Date().getFullYear().toString().substr(-2)) + 15,
      nsFormat: "d" + String.fromCharCode(1) + "mm" + String.fromCharCode(1) + "yy" + String.fromCharCode(1) + ".",
      nsFormatTime: "h" + String.fromCharCode(1) + "mm" + String.fromCharCode(1) + ":" + String.fromCharCode(1),
      timezoneStamp: "04:00",
      dateFormat: {
        format: "d.mm.yy",
        delimeter: '.'
      },
      timeFormat: {
        format: "h.mm.ss",
        delimeter: ':'
      }
    };
    var tzOffset = -new Date().getTimezoneOffset() / 60;
    this.options.timezoneStamp = (tzOffset >= 10 ? "" : "0") + tzOffset + ":00";
    if (typeof appContext.dateFormat != "undefined") {
      this.options.nsFormat = appContext.dateFormat;
      this.options.dateFormat = this.parseDateFormat(appContext.dateFormat);
    }
    if (typeof appContext.timeFormat != "undefined") {
      this.options.nsFormatTime = appContext.timeFormat;
      this.options.timeFormat = this.parseDateFormat(appContext.timeFormat);
    }
  }
  //функция парсинга формата рег. нстроек в NetCity
  _createClass(DateUtils, [{
    key: "parseDateFormat",
    value: function parseDateFormat(nsDateFormat) {
      if (nsDateFormat) {
        var formatArr = nsDateFormat.split(String.fromCharCode(1));
        var delimeter = formatArr[3];
        formatArr.pop();
        return {
          format: formatArr.join(delimeter),
          delimeter: delimeter
        };
      } else {
        return this.options.dateFormat;
      }
    }
    //краткий вариант конвертации строки в дату. с учетом текущих рег. настроек
  }, {
    key: "str2date",
    value: function str2date(strDate) {
      return this.str2datef(strDate, this.options.nsFormat, String.fromCharCode(1), this.options.firstYear);
    }
    //конвертация строки в дату с учетом формата
  }, {
    key: "str2dateFormat",
    value: function str2dateFormat(strDate, dateFormat) {
      return this.str2datef(strDate, dateFormat, String.fromCharCode(1), this.options.firstYear);
    }
    // //краткий вариант конвертации строки в дату. с учетом текущих рег. настроек (время)
    // str2time(strTime) {
    // strTwoTimef strTime, options.nsFormatTime
    // }
    //краткий вариант конвертации даты в строку. с учетом текущих рег. настроек
  }, {
    key: "date2str",
    value: function date2str(dtDate) {
      return this.date2strf(dtDate, this.options.nsFormat);
    }
    //краткий вариант конвертации даты в строку. Передаем сюда формат даты
  }, {
    key: "date2strfrm",
    value: function date2strfrm(dtDate, dateFormat) {
      return this.date2strf(dtDate, dateFormat);
    }
    //краткий вариант конвертации время в строку. с учетом текущих рег. настроек
  }, {
    key: "time2str",
    value: function time2str(dtTime) {
      return this.timeTwoStrf(dtTime, this.options.nsFormatTime);
    }
    //краткий вариант конвертации время в строку.
  }, {
    key: "time2Str_ss",
    value: function time2Str_ss(dtTime) {
      return this.time2Str_ss_f(dtTime, this.options.nsFormatTime);
    }
    //информация о текущих рег. настроках (дата)
  }, {
    key: "getDateFormat",
    value: function getDateFormat() {
      return this.options.dateFormat;
    }
    //информация о текущих рег. настроках (дата) - ns
  }, {
    key: "getDateNsFormat",
    value: function getDateNsFormat() {
      return this.options.nsFormat;
    }
    // # todo: соответствие формата региональным настройкам, пока только для русского языка
  }, {
    key: "getLocaleFormat",
    value: function getLocaleFormat() {
      var formatInfo = this.options.dateFormat;
      var localeFormatsMap = {
        "d": "д",
        "dd": "дд",
        "m": "м",
        "mm": "мм",
        "yy": "гг",
        "yyyy": "гггг"
      };
      //получение локализованного формата
      var localeFormat = formatInfo.format.split(formatInfo.delimeter).map(function (formatPart) {
        return localeFormatsMap[formatPart];
      }).join(formatInfo.delimeter);
      return localeFormat;
    }
    // #информация о текущих рег. настроках (время)
    // getTimeFormat: () ->
    // 	options.timeFormat
    // getLocalDateTime: (iso) ->
    // 	return new Date(iso + "+" + options.timezoneStamp)
    // getUTCDate: (year, month, day) ->
    // 	return new Date(Date.UTC(year, month, day))
    // #представляет локальную дату в UTC
    // #т.е. добавляется разница между локальным ч.п. и utc
  }, {
    key: "asUTC",
    value: function asUTC(date) {
      var newDate = new Date(date.getTime());
      newDate.setHours(date.getHours() - date.getTimezoneOffset() / 60);
      return newDate;
    }
    // # loginTime - string (пример: 2016-06-28T13:46:41) серверное время в UTC формате
    // castServerDateTimeToClient: (loginTime) ->
    // 	time = moment(loginTime).toDate()
    // 	# часовой пояс сервера
    // 	serverTimeZone = appContext.serverTimeZone
    // 	# часовой пояс клиента
    // 	clientTimeZone = (new Date()).getTimezoneOffset() / -60 # в минутах, пример GMT +0400 = -240 минут
    // 	# разница между часовыми поясами в часах
    // 	difference = clientTimeZone - serverTimeZone
    // 	time.setTime(time.getTime() + difference * 3600000)
    // 	return time
    // # Преобразовать в дату UTC без времени (часовой пояс не вычетается, а игнорируется так, чтобы на серверной стороне время объекта DateTime было 0:00:00)
    // # Дата Wed Jul 26 2017 01:32:36 GMT+0400 будет преобразована в Wed Jul 26 2017 04:00:00 GMT+0400, 
    // #	что отличается от метода toUTCString, который возвращает Tue, 25 Jul 2017 21:32:36 GMT
    // # dateTime строка или объект совместимые с js объектом Date
  }, {
    key: "asUTCDate",
    value: function asUTCDate(dateTime) {
      var date = new Date(dateTime);
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      return new Date(Date.UTC(year, month, day));
    }
    // # Преобразовать в дату UTC с временем (часовой пояс не вычитается, а игнорируется так)
  }, {
    key: "asUTCDateTime",
    value: function asUTCDateTime(dateTime) {
      if (dateTime == null) {
        return null;
      }
      var date = new Date(dateTime);
      if (typeof dateTime == "string") {
        if (dateTime.endsWith("Z")) {
          //если пришла дата уже в ISO UTC - не выполняем никаких манипуляций с часовым поясом
          return date;
        }
      }
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      return new Date(Date.UTC(year, month, day, hour, minutes, seconds));
    }
    // # Без UTC... См. аккуратнее - что/где надо - только показывать/работать на Клиенте, также передавать на Сервер, и т.д.
  }, {
    key: "asDateTime",
    value: function asDateTime(dateTime) {
      if (dateTime == null) {
        return null;
      }
      var date = new Date(dateTime);
      return date;
    }
  }, {
    key: "str2datef",
    value: function str2datef(strDate, datFormat, deli, firstYear) {
      var formatArr = datFormat.split(deli);
      deli = formatArr[3];
      var dateArr = strDate.split(deli);
      var ye;
      var da;
      var mo;
      if (dateArr.length != 3) {
        return null;
      }
      for (var _i = 0, _arr = [0, 1, 2]; _i < _arr.length; _i++) {
        var i = _arr[_i];
        if (formatArr[i] == "m" || formatArr[i] == "mm") {
          if (dateArr[i]) {
            mo = str2lng(dateArr[i]);
            if (isNaN(mo) || mo <= 0 || mo > 12) return null;
          } else return null;
        } else if (formatArr[i] == "d" || formatArr[i] == "dd") {
          if (dateArr[i]) {
            da = str2lng(dateArr[i]);
            if (isNaN(da) || da <= 0 || da > 31) return null;
          } else return null;
        } else if (formatArr[i] == "yy" || formatArr[i] == "yyyy") {
          if (dateArr[i]) ye = str2lng(dateArr[i]);
          if (ye < 100) {
            if (ye < firstYear) {
              ye = 2000 + ye;
            } else ye = 1900 + ye;
          } else if (ye >= 100 && ye < 1000 || ye > 9999) {
            ye = NaN;
          }
          if (isNaN(ye)) return null;
        } else return null;
      }
      if (da > 30 && (mo == 4 || mo == 6 || mo == 9 || mo == 11)) {
        return null;
      } else if (mo == 2 && da > (ye % 4 == 0 && ye % 100 != 0 || ye % 400 == 0 ? 29 : 28)) {
        return null;
      }
      //с этим вариантом искуственно добавляются часы.например 01.01.2017 превращается в 01 - 01 - 2017T04: 00GMT + 4
      //однако при передаче на сервер штатная сериализация приводит дату к UTC - и убирает эти часы.
      return new Date(Date.UTC(ye, mo - 1, da));
      //в этом же варианте при передаче на сервер от даты отнимались часы - что портило дату на сервере
      //return new Date(ye, mo - 1, da)
    }
  }, {
    key: "date2strf",
    value: function date2strf(dt, datFormat) {
      if (!dt) {
        return null;
      }
      var strRes = "";
      var formatArr = datFormat.split(String.fromCharCode(1));
      var deli = formatArr[3];
      var ye = dt.getFullYear();
      var mo = dt.getMonth() + 1;
      var da = dt.getDate();
      for (var _i2 = 0, _arr2 = [0, 1, 2]; _i2 < _arr2.length; _i2++) {
        var i = _arr2[_i2];
        if (formatArr[i] == "m") {
          strRes += mo.toString() + deli;
        } else if (formatArr[i] == "mm") {
          strRes += (mo < 10 ? "0" : "") + mo.toString() + deli;
        } else if (formatArr[i] == "d") {
          strRes += da.toString() + deli;
        } else if (formatArr[i] == "dd") {
          strRes += (da < 10 ? "0" : "") + da.toString() + deli;
        } else if (formatArr[i] == "yy") {
          ye = ye % 100;
          strRes += (ye < 10 ? "0" : "") + ye.toString() + deli;
        } else if (formatArr[i] == "yyyy") {
          strRes += ye.toString() + deli;
        }
      }
      return strRes.slice(0, -1);
    }
  }, {
    key: "timeTwoStrf",
    value: function timeTwoStrf(dtTime, theFormat) {
      var strRes = "";
      dtTime = dtTime || new Date(0, 0);
      var formatArr = theFormat.split(String.fromCharCode(1));
      var deli = formatArr[2];
      var ho = dtTime.getHours();
      var min = dtTime.getMinutes();
      var sec = dtTime.getSeconds();
      var d3 = formatArr[3];
      for (var _i3 = 0, _arr3 = [0, 1, 2, 3]; _i3 < _arr3.length; _i3++) {
        var i = _arr3[_i3];
        if (formatArr[i].charAt(0) == "h") {
          if (d3 != "") {
            if (ho == 12) d3 = formatArr[4];else if (ho > 12) {
              ho = ho - 12;
              d3 = formatArr[4];
            } else if (ho == 0) ho = 12;
          }
          if (formatArr[i] == "hh") strRes += (ho < 10 ? "0" : "") + ho.toString() + deli;else strRes += ho.toString() + deli;
        } else if (formatArr[i] == "mm") {
          strRes += (min < 10 ? "0" : "") + min.toString() + deli;
        } else if (formatArr[i] == "ss") {
          strRes += (sec < 10 ? "0" : "") + sec.toString() + deli;
        }
      }
      strRes = strRes.slice(0, -1);
      return strRes;
    }
  }, {
    key: "time2Str_ss_f",
    value: function time2Str_ss_f(dtTime, theFormat) {
      if (dtTime == null) return "00:00:00";
      var timeStr = this.timeTwoStrf(dtTime, theFormat);
      var formatArr = theFormat.split(String.fromCharCode(1));
      var deli = formatArr[2];
      var sec = dtTime.getSeconds();
      var res = timeStr + deli + (sec < 10 ? "0" : "") + sec.toString();
      return res;
    }
    // strTwoTimef = ( strTime, theFormat ) ->
    // 	formatArr = theFormat.split( String.fromCharCode(1) )
    // 	deli = formatArr[2]
    // 	timeArr = strTime.split( deli )
    // 	if timeArr.length isnt 2 or not 3 then return null
    // 	for i in [0..2] by 1
    // 		if formatArr[i].charAt(0) is "h"
    // 			ho = parseInt(timeArr[i])
    // 		else if formatArr[i].charAt(0) is "m"
    // 			mi = parseInt(timeArr[i])
    // 		else if formatArr[i].charAt(0) is "s"
    // 			sec = parseInt(timeArr[i])
    // 	if sec is undefined then sec = 0
    // 	if formatArr[3] = timeArr[4] then ho = ho + 12
    // 	res = new Date(0, 0, 0, ho, mi, sec)
    //смещение по времени
  }, {
    key: "addTime",
    value: function addTime(date, hours_delta, minutes_delta) {
      var currentTime = date.getTime();
      var deltaTime = hours_delta * 60 * 60 * 1000 + minutes_delta * 60 * 1000;
      date.setTime(currentTime + deltaTime);
    }
  }, {
    key: "asLocalDateTime",
    value: function asLocalDateTime(date) {
      var localDate = angular.copy(date);
      var tzOffset = date.getTimezoneOffset() / 60;
      this.addTime(localDate, tzOffset, 0);
      return localDate;
    }
    //установка времени для даты.
    //у исходной даты сбрасывается время и устанвливается согласно переданному в offsetTime
  }, {
    key: "setTimeOffset",
    value: function setTimeOffset(dateTime, offsetTime) {
      //необходимо для начала получить правильную дату.
      //без перевода в локальную дату - может произойти изменение дня (+1/-1) для случаев < 4 часов или > 20 
      var localDateTime = this.asLocalDateTime(dateTime);
      //далее получаем utc дату для исходного дня
      var utcDate = this.asUTCDate(localDateTime);
      //добавялем смещение по времени
      utcDate.setTime(utcDate.getTime() + (offsetTime !== null && offsetTime !== void 0 ? offsetTime : 0));
      return utcDate;
    }
  }]);
  return DateUtils;
}();
exports.DateUtils = DateUtils;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EarlyAccessService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EarlyAccessService = /*#__PURE__*/function () {
  EarlyAccessService.$inject = ["$http"];
  /*@ngInject*/
  function EarlyAccessService($http) {
    _classCallCheck(this, EarlyAccessService);
    this.$http = $http;
  }
  _createClass(EarlyAccessService, [{
    key: "isAllowed",
    value: function isAllowed(accessKey) {
      return this.$http.get("/webapi/earlyaccess", {
        params: {
          accessKey: accessKey
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }]);
  return EarlyAccessService;
}();
exports.EarlyAccessService = EarlyAccessService;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(77)(module)))

/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolCardService = void 0;
var _schoolCard = __webpack_require__(79);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SchoolCardService = /*#__PURE__*/function () {
  function SchoolCardService($uibModal) {
    _classCallCheck(this, SchoolCardService);
    this.$uibModal = $uibModal;
  }
  _createClass(SchoolCardService, [{
    key: "openSchoolInfo",
    value: function openSchoolInfo() {
      var modalInstance = this.$uibModal.open({
        controller: _schoolCard.SchoolCardComponent.controller,
        controllerAs: _schoolCard.SchoolCardComponent.controllerAs,
        templateUrl: _schoolCard.SchoolCardComponent.templateUrl,
        size: "lg"
      });
      return modalInstance.result;
    }
  }]);
  return SchoolCardService;
}();
exports.SchoolCardService = SchoolCardService;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolCardComponent = void 0;
var _common = __webpack_require__(13);
var _nsModal = __webpack_require__(55);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SchoolCardController = /*#__PURE__*/function () {
  SchoolCardController.$inject = ["appContext", "$http", "$uibModalInstance", "settingsProvider", "$q", "language"];
  /*@ngInject*/
  function SchoolCardController(appContext, $http, $uibModalInstance, settingsProvider, $q, language) {
    var _this = this;
    _classCallCheck(this, SchoolCardController);
    this.$http = $http;
    this.$uibModalInstance = $uibModalInstance;
    this.settingsProvider = settingsProvider;
    this.$q = $q;
    this.language = language;
    this.context = appContext;
    this.init();
    this.load().then(function () {
      _this.onReady();
    });
  }
  _createClass(SchoolCardController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.header = this.language.Generic.SchoolInfo.kTitleSchoolInfoCard;
      this.buttons = [];
      var printBtn = {
        title: this.language.Generic.Buttons.kPrint,
        "class": _nsModal.ButtonClass.primary,
        action: function action() {
          return _this2.print();
        }
      };
      this.buttons.push(printBtn);
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this2.cancel();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons.push(cancelBtn);
      this.schoolId = parseInt(this.context.schoolId);
      var funcType = this.context.funcType;
      this.functionalities = {
        isSchool: funcType == _common.FuncType.school,
        isPreSchool: funcType == _common.FuncType.preSchool,
        isAddSchool: funcType == _common.FuncType.addSchool,
        isOrphanageSchool: funcType == _common.FuncType.orphanage
      };
    }
  }, {
    key: "load",
    value: function load() {
      var _this3 = this;
      var promises = [];
      var getIsDefaultLanguageRus = this.settingsProvider.LocalSettings.IsDefaultLangRus().then(function (isDefaultLangRus) {
        _this3.isDefaultLangRus = isDefaultLangRus;
      });
      promises.push(getIsDefaultLanguageRus);
      var getSchoolCard = this.$http.get("/webapi/schools/".concat(this.schoolId, "/card")).then(function (response) {
        _this3.schoolCard = response.data;
      });
      promises.push(getSchoolCard);
      return this.$q.all(promises);
    }
  }, {
    key: "onReady",
    value: function onReady() {
      this.ready = true;
    }
  }, {
    key: "displayFounders",
    value: function displayFounders() {
      return this.schoolCard.commonInfo.founders.join("\n");
    }
  }, {
    key: "displayOwnEducManagements",
    value: function displayOwnEducManagements() {
      return this.schoolCard.commonInfo.ownEducManagements.join("\n");
    }
  }, {
    key: "print",
    value: function print() {
      angular.element(".print-block").printUtils().toPrint({
        viewHeader: true
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return SchoolCardController;
}();
var SchoolCardComponent = {
  controller: SchoolCardController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/webapp/components/school.card.component.html"
};
exports.SchoolCardComponent = SchoolCardComponent;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListOnlineUsersService = void 0;
var _listOnlineUsers = __webpack_require__(81);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ListOnlineUsersService = /*#__PURE__*/function () {
  function ListOnlineUsersService($uibModal) {
    _classCallCheck(this, ListOnlineUsersService);
    this.$uibModal = $uibModal;
  }
  _createClass(ListOnlineUsersService, [{
    key: "updateWorkInSystemCnt",
    value: function updateWorkInSystemCnt() {
      var modalInstance = this.$uibModal.open({
        controller: _listOnlineUsers.ListOnlineUsersComponent.controller,
        controllerAs: _listOnlineUsers.ListOnlineUsersComponent.controllerAs,
        templateUrl: _listOnlineUsers.ListOnlineUsersComponent.templateUrl,
        size: "lg"
      });
      return modalInstance.result;
    }
  }]);
  return ListOnlineUsersService;
}();
exports.ListOnlineUsersService = ListOnlineUsersService;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListOnlineUsersComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ListOnlineUsersController = /*#__PURE__*/function () {
  ListOnlineUsersController.$inject = ["$uibModalInstance", "sessionsRepository", "language"];
  /*@ngInject*/
  function ListOnlineUsersController($uibModalInstance, sessionsRepository, language) {
    _classCallCheck(this, ListOnlineUsersController);
    this.$uibModalInstance = $uibModalInstance;
    this.sessionsRepository = sessionsRepository;
    this.language = language;
    this.header = "Список пользователей в сети";
    this.data = {
      activeSessions: []
    };
    this.state = {
      dataReady: false,
      emptyData: false
    };
    this.load();
  }
  _createClass(ListOnlineUsersController, [{
    key: "load",
    value: function load() {
      var _this = this;
      this.sessionsRepository.getActiveSessions().then(function (activeSessions) {
        _this.data.activeSessions = activeSessions;
        _this.state.emptyData = !activeSessions.length;
        _this.state.dataReady = true;
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return ListOnlineUsersController;
}();
var ListOnlineUsersComponent = {
  controller: ListOnlineUsersController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/webapp/components/list.online.users.component.html"
};
exports.ListOnlineUsersComponent = ListOnlineUsersComponent;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionsRepository = void 0;
var _baseRepository = __webpack_require__(19);
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
var SessionsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SessionsRepository, _BaseRepository);
  var _super = _createSuper(SessionsRepository);
  function SessionsRepository() {
    _classCallCheck(this, SessionsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SessionsRepository, [{
    key: "getActiveSessions",
    value: function getActiveSessions() {
      return this.$http.get("/webapi/context/activeSessions").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "killSessions",
    value: function killSessions(atToken) {
      return this.$http["delete"]("/webapi/context/activeSessions", {
        params: {
          atToken: atToken
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return SessionsRepository;
}(_baseRepository.BaseRepository);
exports.SessionsRepository = SessionsRepository;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchYearController = exports.SwitchYearComponent = void 0;
var _common = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SwitchYearController = /*#__PURE__*/function () {
  SwitchYearController.$inject = ["appContext", "$longWork", "contextService"];
  /*@ngInject*/
  function SwitchYearController(appContext, $longWork, contextService) {
    _classCallCheck(this, SwitchYearController);
    this.appContext = appContext;
    this.$longWork = $longWork;
    this.contextService = contextService;
    this.currYearId = parseInt(this.appContext.yearId);
  }
  _createClass(SwitchYearController, [{
    key: "$onInit",
    value: function $onInit() {
      if (this.currYearId == this.info.openYearId) {
        this.allowedYearId = this.info.futureYearId;
      } else {
        this.allowedYearId = this.info.openYearId;
      }
    }
  }, {
    key: "goLeft",
    value: function goLeft() {
      return this.currYearId == this.info.openYearId;
    }
  }, {
    key: "changeYear",
    value: function changeYear() {
      this.$longWork.show();
      this.contextService.changeYear(this.allowedYearId).then(function (result) {
        var page = result.page || window.location.pathname;
        (0, _common.postTo)(page);
      });
    }
  }]);
  return SwitchYearController;
}();
exports.SwitchYearController = SwitchYearController;
var SwitchYearComponent = {
  bindings: {
    info: "<"
  },
  template: "\n\t\t<div class=\"switch-year\">\n\t\t\t<button class=\"switch-year-btn ng-class: $ctrl.goLeft() ? 'go_left': '';\" ng-click=\"$ctrl.changeYear(); $event.stopPropagation()\">\n\t\t\t\t<div id=\"flip_container\">\n\t\t\t\t\t<div id=\"current\">\u0412 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0443\u0447.\u0433\u043E\u0434</div>\n\t\t\t\t\t<div class=\"lever-switch\"><span></span></div>\n\t\t\t\t\t<div id=\"future\">\u0412 \u0431\u0443\u0434\u0443\u0449\u0438\u0439 \u0443\u0447.\u0433\u043E\u0434</div>\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t</div>",
  selector: "appSwitchYear",
  controller: SwitchYearController
};
exports.SwitchYearComponent = SwitchYearComponent;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBackgroundTaskService = void 0;
var _common = __webpack_require__(46);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppBackgroundTaskService = /*#__PURE__*/function () {
  function AppBackgroundTaskService(appContext, $http, $interval, $alerts) {
    _classCallCheck(this, AppBackgroundTaskService);
    this.appContext = appContext;
    this.$http = $http;
    this.$interval = $interval;
    this.$alerts = $alerts;
    this.init();
  }
  _createClass(AppBackgroundTaskService, [{
    key: "execute",
    value: function execute() {
      var _this = this;
      this.fire();
      this.stop = this.$interval(function () {
        return _this.handle();
      }, 60000);
    }
  }, {
    key: "stopTask",
    value: function stopTask() {
      this.$interval.cancel(this.stop);
    }
  }, {
    key: "handle",
    value: function handle() {
      var _this2 = this;
      var url = "/webapi/context/expired";
      var config = {
        params: {
          token: this.appContext.at
        },
        headers: {
          "keepAlive": "No"
        }
      };
      this.$http.get(url, config).then(function (response) {
        var expired = response.data;
        if (expired) {
          _this2.stopTask();
        } else {
          _this2.fire();
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.msgCountEventEmitter = new _common.EventEmitter();
    }
  }, {
    key: "fire",
    value: function fire() {
      var _this3 = this;
      var headersConfig = {
        "keepAlive": "No"
      };
      var httpConfig = {
        headers: headersConfig
      };
      this.$http.get("/webapi/context/state", httpConfig).then(function (response) {
        var contextState = response.data;
        if (contextState.mailError) {
          _this3.$alerts.error(contextState.mailError);
        }
        var msgCount = contextState.mailMessagesUnreadCount;
        if (msgCount > 0) {
          _this3.msgCountEventEmitter.emit(msgCount);
        }
        _this3.appContext.activeUsers = contextState.activeSessionsCount;
      });
    }
  }]);
  return AppBackgroundTaskService;
}();
exports.AppBackgroundTaskService = AppBackgroundTaskService;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppMailButtonComponent = void 0;
var _common = __webpack_require__(14);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppMailButtonController = /*#__PURE__*/function () {
  AppMailButtonController.$inject = ["appBackgroundTaskService"];
  /*@ngInject*/
  function AppMailButtonController(appBackgroundTaskService) {
    var _this = this;
    _classCallCheck(this, AppMailButtonController);
    // отслеживает количество новых сообщений
    appBackgroundTaskService.msgCountEventEmitter.on(function (msgCount) {
      _this.msgCount = msgCount;
    });
  }
  _createClass(AppMailButtonController, [{
    key: "mail",
    value: function mail() {
      (0, _common.openPopupWindow)("_mail_new", "/app/popup/mail", 950, 660);
    }
  }]);
  return AppMailButtonController;
}();
var AppMailButtonComponent = {
  controller: AppMailButtonController,
  controllerAs: "$ctrl",
  selector: "appMailButton",
  template: "\n\t\t<a href=\"javascript:void(0);\" ng-click=\"$ctrl.mail()\" title=\"\u041F\u043E\u0447\u0442\u0430\" id=\"sys-mail-link\">\n\t\t\t<span class=\"cb-mail mail\">\n\t\t\t\t<span ng-if=\"$ctrl.msgCount\" class=\"numberMail\" title=\"{{$ctrl.msgCount}}\">{{$ctrl.msgCount}}</span>\n\t\t\t</span>\n\t\t</a>"
};
exports.AppMailButtonComponent = AppMailButtonComponent;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppForumButtonComponent = void 0;
var _common = __webpack_require__(14);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppForumButtonController = /*#__PURE__*/function () {
  function AppForumButtonController() {
    _classCallCheck(this, AppForumButtonController);
  }
  _createClass(AppForumButtonController, [{
    key: "showForum",
    value: function showForum() {
      (0, _common.openPopupWindow)("_forum", "/asp/Forum/Forum.asp", 950, 660);
    }
  }]);
  return AppForumButtonController;
}();
var AppForumButtonComponent = {
  controller: AppForumButtonController,
  controllerAs: "$ctrl",
  selector: "appForumButton",
  template: "\n\t\t<a href=\"javascript:void(0);\" ng-click=\"$ctrl.showForum()\" title=\"\u0424\u043E\u0440\u0443\u043C\">\n\t\t\t<span class=\"cb-forum\"></span>\n\t\t</a>"
};
exports.AppForumButtonComponent = AppForumButtonComponent;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppHelpButtonComponent = void 0;
var _common = __webpack_require__(14);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppHelpButtonController = /*#__PURE__*/function () {
  AppHelpButtonController.$inject = ["pageContext"];
  /*@ngInject*/
  function AppHelpButtonController(pageContext) {
    _classCallCheck(this, AppHelpButtonController);
    this.page = pageContext;
  }
  _createClass(AppHelpButtonController, [{
    key: "showHelp",
    value: function showHelp() {
      var helpPage = window.location.pathname.replace("/angular/", "");
      helpPage = helpPage.replace(/[0-9]|\//g, "_").split("_").filter(function (item) {
        return item !== "";
      }).join("_");
      helpPage = "/help/".concat(helpPage, ".htm");
      if (this.page.help) {
        helpPage = this.page.help;
      }
      (0, _common.openPopupWindow)("_help", helpPage, 950, 660);
    }
  }]);
  return AppHelpButtonController;
}();
var AppHelpButtonComponent = {
  controller: AppHelpButtonController,
  controllerAs: "$ctrl",
  selector: "appHelpButton",
  template: "\n\t\t<a href=\"javascript:void(0);\" ng-click=\"$ctrl.showHelp()\" title=\"\u0421\u043F\u0440\u0430\u0432\u043A\u0430\">\n\t\t\t<span class=\"cb-help\"></span>\n\t\t</a>"
};
exports.AppHelpButtonComponent = AppHelpButtonComponent;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppAnnouncementsButtonComponent = void 0;
var _common = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppAnnouncementsButtonController = /*#__PURE__*/function () {
  function AppAnnouncementsButtonController(appContext, pageContext) {
    _classCallCheck(this, AppAnnouncementsButtonController);
    this.context = appContext;
    this.page = pageContext;
  }
  _createClass(AppAnnouncementsButtonController, [{
    key: "showAnnouncements",
    value: function showAnnouncements() {
      var _this = this;
      this.page.checkForChanges().then(function () {
        if (_this.context.schoolId) {
          (0, _common.postTo)("/angular/school/announcements/");
        } else {
          (0, _common.postTo)("/angular/em/announcements/");
        }
      });
    }
  }]);
  return AppAnnouncementsButtonController;
}();
var AppAnnouncementsButtonComponent = {
  controller: AppAnnouncementsButtonController,
  controllerAs: "$ctrl",
  selector: "appAnnouncementsButton",
  template: "\n\t\t<a href=\"javascript:void(0);\" ng-click=\"$ctrl.showAnnouncements()\" title=\"\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F\" style=\"margin-top: 0px;\">\n\t\t\t<span class=\"cb-announcements\"></span>\n\t\t</a>"
};
exports.AppAnnouncementsButtonComponent = AppAnnouncementsButtonComponent;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoWorkerService = void 0;
var _baseRepository = __webpack_require__(19);
var _coworker = __webpack_require__(90);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var CoWorkerService = /*#__PURE__*/function (_BaseRepository) {
  CoWorkerService.$inject = ["$http", "$dialogs", "$longWork", "$uibModal"];
  _inherits(CoWorkerService, _BaseRepository);
  var _super = _createSuper(CoWorkerService);
  /*@ngInject*/
  function CoWorkerService($http, $dialogs, $longWork, $uibModal) {
    var _this;
    _classCallCheck(this, CoWorkerService);
    _this = _super.call(this, $http, $dialogs, $longWork);
    _this.$http = $http;
    _this.$dialogs = $dialogs;
    _this.$longWork = $longWork;
    _this.$uibModal = $uibModal;
    return _this;
  }
  _createClass(CoWorkerService, [{
    key: "getCoWorker",
    value: function getCoWorker() {
      return this.$http.get("/webapi/context/coworker").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "clearCoWorker",
    value: function clearCoWorker() {
      this.$http.post("/webapi/context/coworker/clear").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "viewCoWorker",
    value: function viewCoWorker() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _coWorker;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getCoWorker();
            case 2:
              _coWorker = _context.sent;
              if (_coWorker) {
                this.$uibModal.open({
                  controller: _coworker.CoWorkerComponent.controller,
                  controllerAs: _coworker.CoWorkerComponent.controllerAs,
                  templateUrl: _coworker.CoWorkerComponent.templateUrl,
                  size: "lg",
                  resolve: {
                    coWorker: function coWorker() {
                      return _coWorker;
                    }
                  }
                });
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }]);
  return CoWorkerService;
}(_baseRepository.BaseRepository);
exports.CoWorkerService = CoWorkerService;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoWorkerComponent = void 0;
var _nsModal = __webpack_require__(55);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CoWorkerController = /*#__PURE__*/function () {
  CoWorkerController.$inject = ["appContext", "$uibModalInstance", "orgInfoRepository", "coworkerService", "language", "coWorker"];
  /*@ngInject*/
  function CoWorkerController(appContext, $uibModalInstance, orgInfoRepository, coworkerService, language, coWorker) {
    var _this = this;
    _classCallCheck(this, CoWorkerController);
    this.$uibModalInstance = $uibModalInstance;
    this.orgInfoRepository = orgInfoRepository;
    this.coworkerService = coworkerService;
    this.language = language;
    this.coWorker = coWorker;
    this.context = appContext;
    this.header = this.language.Generic.Login.kTitleSecurityWarning;
    this.buttons = [];
    var cancelBtn = {
      title: this.language.Generic.Buttons.kContinue,
      action: function action() {
        return _this.cancel();
      },
      "class": [_nsModal.ButtonClass.primary]
    };
    this.buttons.push(cancelBtn);
    this.process();
  }
  _createClass(CoWorkerController, [{
    key: "process",
    value: function process() {
      var _this2 = this;
      var schoolId = parseInt(this.context.schoolId);
      this.orgInfoRepository.loadCommonInfo(schoolId).then(function (schoolInfo) {
        _this2.schoolInfo = schoolInfo;
        _this2.ready = true;
      });
      this.coworkerService.clearCoWorker();
    }
  }, {
    key: "getWarningMessage",
    value: function getWarningMessage() {
      var schoolName = this.schoolInfo.name;
      var isEmForSchool = this.context.isEmForSchool;
      var msgParts = [];
      msgParts.push("<b>".concat(this.language.Generic.Common.kAttention, "</b><br/>"));
      msgParts.push(" ");
      msgParts.push("".concat(this.language.Generic.Login.kToTheSchool, " <b>").concat(schoolName, "</b> ").concat(this.language.Generic.Login.kOneMoreUserLoggedIn));
      msgParts.push(" ");
      if (!isEmForSchool) {
        msgParts.push("".concat(this.language.Generic.Login.kWithName, " <b>").concat(this.coWorker.loginName, "</b>"));
        msgParts.push(" ");
        msgParts.push("(".concat(this.language.Generic.Login.kDisplayName_, ": <b>").concat(this.coWorker.nickName, "</b>)."));
      } else {
        msgParts.push("<n><nobr>".concat(this.coWorker.nickName, "</nobr></b>."));
      }
      var warningMsg = msgParts.join("");
      return warningMsg;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return CoWorkerController;
}();
var CoWorkerComponent = {
  controller: CoWorkerController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/webapp/components/coworker.component.html"
};
exports.CoWorkerComponent = CoWorkerComponent;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgInfoRepository = void 0;
var _repository = __webpack_require__(53);
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePasswordRepository = void 0;
var _baseRepository = __webpack_require__(19);
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
// отвечает за смену пароля
var ChangePasswordRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ChangePasswordRepository, _BaseRepository);
  var _super = _createSuper(ChangePasswordRepository);
  function ChangePasswordRepository() {
    _classCallCheck(this, ChangePasswordRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ChangePasswordRepository, [{
    key: "getUserInfo",
    value:
    // todo: решил перенести пока сюда
    function getUserInfo(userId) {
      return this.$http.get("/webapi/users/".concat(userId, "/info")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "changePassword",
    value: function changePassword(userId, oldPassword, password) {
      var request = {
        oldPassword: oldPassword,
        password: password
      };
      return this.$http.post("/webapi/users/".concat(userId, "/password"), request).then(this.handleResponse, this.handleError);
    }
  }]);
  return ChangePasswordRepository;
}(_baseRepository.BaseRepository);
exports.ChangePasswordRepository = ChangePasswordRepository;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonChangePasswordComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CommonChangePasswordController = /*#__PURE__*/function () {
  CommonChangePasswordController.$inject = ["$scope", "appContext", "commonChangePasswordService", "language"];
  /*@ngInject*/
  function CommonChangePasswordController($scope, appContext, commonChangePasswordService, language) {
    var _this = this;
    _classCallCheck(this, CommonChangePasswordController);
    this.$scope = $scope;
    this.appContext = appContext;
    this.commonChangePasswordService = commonChangePasswordService;
    this.language = language;
    this.data = this.commonChangePasswordService.data;
    this.passData = {
      oldPassword: null,
      newPassword: null,
      confirmPassword: null
    };
    this.$scope.$watch(function () {
      return _this.commonChangePasswordService.readOnly;
    }, function (newVal) {
      _this.readOnly = newVal;
    });
  }
  _createClass(CommonChangePasswordController, [{
    key: "init",
    value: function init() {
      this.userEditHimself = this.appContext.userId == this.options.userId;
      this.setDefaultControlSize();
      this.enterHandler();
      this.commonChangePasswordService.configure(this.options, this.passData, this.form);
    }
  }, {
    key: "setDefaultControlSize",
    value: function setDefaultControlSize() {
      if (!this.options.labelSize) {
        this.options.labelSize = "col-md-4";
      }
      if (!this.options.controlSize) {
        this.options.controlSize = "col-md-8";
      }
    }
  }, {
    key: "enterHandler",
    value: function enterHandler() {
      var _this2 = this;
      this.form.$$element.on("keydown keypress", function (event) {
        if (event.which !== 13) {
          return;
        }
        _this2.commonChangePasswordService.saveProcess();
        _this2.$scope.$applyAsync();
        event.preventDefault();
      });
    }
  }, {
    key: "runStartEndValidator",
    value: function runStartEndValidator() {
      this.commonChangePasswordService.runStartEndValidator();
    }
  }]);
  return CommonChangePasswordController;
}();
var CommonChangePasswordComponent = {
  controller: CommonChangePasswordController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/components/changepassword/common.changepassword.component.html",
  selector: "commonChangePassword",
  bindings: {
    options: "="
  }
};
exports.CommonChangePasswordComponent = CommonChangePasswordComponent;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonChangePasswordService = void 0;
var _changepassword = __webpack_require__(95);
var _common = __webpack_require__(46);
var md5r = _interopRequireWildcard(__webpack_require__(96));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var md5 = md5r["default"];
var CommonChangePasswordService = /*#__PURE__*/function () {
  CommonChangePasswordService.$inject = ["appContext", "$alerts", "$longWork", "settingsProvider", "changePasswordRepository", "$q", "language"];
  /*@ngInject*/
  function CommonChangePasswordService(appContext, $alerts, $longWork, settingsProvider, changePasswordRepository, $q, language) {
    _classCallCheck(this, CommonChangePasswordService);
    this.appContext = appContext;
    this.$alerts = $alerts;
    this.$longWork = $longWork;
    this.settingsProvider = settingsProvider;
    this.changePasswordRepository = changePasswordRepository;
    this.$q = $q;
    this.language = language;
    this.onSave = new _common.EventEmitter();
  }
  _createClass(CommonChangePasswordService, [{
    key: "initData",
    value: function initData(userId) {
      var _this = this;
      this.data = null;
      var data = {
        loginName: null,
        lastName: null,
        firstName: null,
        middleName: null,
        minPasswordLength: null,
        restrictNumericPasswords: null
      };
      this.readOnly = false;
      this.onSave.off();
      var promises = [];
      promises.push(this.changePasswordRepository.getUserInfo(userId).then(function (userInfo) {
        data.loginName = userInfo.loginname;
        data.lastName = userInfo.lastName;
        data.firstName = userInfo.firstName;
        data.middleName = userInfo.middleName;
      }));
      promises.push(this.settingsProvider.SecuritySettings.MinPasswordLength().then(function (minLength) {
        data.minPasswordLength = minLength;
      }));
      promises.push(this.settingsProvider.SecuritySettings.RestrictNumericPasswords().then(function (restrictNumericPasswords) {
        data.restrictNumericPasswords = restrictNumericPasswords;
      }));
      return this.$q.all(promises).then(function () {
        _this.data = data;
        return _this.data;
      });
    }
  }, {
    key: "configure",
    value: function configure(options, passData, form) {
      this.options = options;
      this.passData = passData;
      this.form = form;
    }
    // валидирует пароль
  }, {
    key: "runStartEndValidator",
    value: function runStartEndValidator() {
      var validator = this.getValidator();
      if (this.passData.newPassword) {
        this.form.newPassword.$setValidity("passLength", !validator.checkNewPasswordLessLength());
        this.form.newPassword.$setValidity("passSimple", !validator.checkNewPasswordSimple());
        this.form.newPassword.$setValidity("passNumeric", !validator.checkNewPasswordNumeric());
        this.form.newPassword.$setValidity("passEqual", !validator.checkNewPasswordEqualOld());
        this.form.newPassword.$setValidity("passSurroundSpaces", !validator.checkNewPasswordSurroundSpaces());
      }
      if (this.passData.confirmPassword) {
        this.form.confirmPassword.$setValidity("passDifferent", !validator.checkDifferentPassword());
      }
    }
  }, {
    key: "getValidator",
    value: function getValidator() {
      var options = {
        loginName: this.data.loginName,
        lastName: this.data.lastName,
        firstName: this.data.firstName,
        middleName: this.data.middleName,
        oldPassword: this.passData.oldPassword,
        newPassword: this.passData.newPassword,
        confirmPassword: this.passData.confirmPassword,
        userEditHimself: this.appContext.userId == this.options.userId,
        minPasswordLength: this.data.minPasswordLength,
        restrictNumericPasswords: this.data.restrictNumericPasswords,
        allowNumericPassword: this.options.allowNumericPassword
      };
      return new _changepassword.ChangePasswordValidator(options);
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;
      this.runStartEndValidator();
      if (this.form.$invalid) {
        this.form.$displayErrors = true;
        return this.$q.reject();
      }
      this.readOnly = true;
      var oldPassword = this.passData.oldPassword ? md5(this.passData.oldPassword) : null;
      var password = md5(this.passData.newPassword);
      return this.changePasswordRepository.changePassword(this.options.userId, oldPassword, password).then(function () {
        return _this2.onSuccessSave();
      })["catch"](function () {
        return _this2.readOnly = false;
      });
    }
  }, {
    key: "onSuccessSave",
    value: function onSuccessSave() {
      this.onSave.emit();
      this.$alerts.success(this.language.Generic.Common.kPasswordIsSaved);
    }
  }, {
    key: "saveProcess",
    value: function saveProcess() {
      var saveWork = this.save();
      if (this.form.$valid) {
        this.$longWork.execute(saveWork);
      }
    }
  }]);
  return CommonChangePasswordService;
}();
exports.CommonChangePasswordService = CommonChangePasswordService;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePasswordValidator = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ChangePasswordValidator = /*#__PURE__*/function () {
  function ChangePasswordValidator(options) {
    _classCallCheck(this, ChangePasswordValidator);
    this.options = options;
  }
  _createClass(ChangePasswordValidator, [{
    key: "checkOldPasswordEmpty",
    value: function checkOldPasswordEmpty() {
      return this.options.userEditHimself && !this.options.oldPassword;
    }
  }, {
    key: "checkNewPasswordEmpty",
    value: function checkNewPasswordEmpty() {
      return !this.options.newPassword;
    }
  }, {
    key: "checkNewPasswordLessLength",
    value: function checkNewPasswordLessLength() {
      return this.options.newPassword.length < this.options.minPasswordLength;
    }
  }, {
    key: "checkDifferentPassword",
    value: function checkDifferentPassword() {
      return this.options.newPassword != this.options.confirmPassword;
    }
  }, {
    key: "checkNewPasswordSimple",
    value: function checkNewPasswordSimple() {
      var _a, _b, _c;
      var upperPass = this.options.newPassword.toUpperCase();
      var upperLastName = ((_a = this.options.lastName) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "";
      var upperFirstName = ((_b = this.options.firstName) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || "";
      var upperLoginName = ((_c = this.options.loginName) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || "";
      var firstSymbolFN = upperFirstName.charAt(0);
      var firstSymbolMN = this.options.middleName ? this.options.middleName.toUpperCase().charAt(0) : "";
      return upperPass == upperLoginName || upperPass == upperLastName || upperPass == upperFirstName || upperPass == upperLastName + upperFirstName || upperPass == upperFirstName + upperLastName || upperPass == upperLastName + firstSymbolFN || upperPass == firstSymbolFN + upperLastName || upperPass == upperLastName + firstSymbolFN + firstSymbolMN || upperPass == firstSymbolFN + firstSymbolMN + upperLastName;
    }
  }, {
    key: "checkNewPasswordNumeric",
    value: function checkNewPasswordNumeric() {
      var upperPass = this.options.newPassword.toUpperCase();
      return !this.options.allowNumericPassword && this.options.restrictNumericPasswords && !/\D/.test(upperPass);
    }
  }, {
    key: "checkNewPasswordEqualOld",
    value: function checkNewPasswordEqualOld() {
      return this.options.userEditHimself && this.options.newPassword == this.options.oldPassword;
    }
  }, {
    key: "checkNewPasswordSurroundSpaces",
    value: function checkNewPasswordSurroundSpaces() {
      return this.options.newPassword.charAt(0) == ' ' || this.options.newPassword.charAt(this.options.newPassword.length - 1) == ' ';
    }
  }]);
  return ChangePasswordValidator;
}();
exports.ChangePasswordValidator = ChangePasswordValidator;

/***/ }),
/* 96 */
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePasswordService = void 0;
var _modalChangepassword = __webpack_require__(98);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ChangePasswordService = /*#__PURE__*/function () {
  ChangePasswordService.$inject = ["$uibModal", "$longWork", "commonChangePasswordService"];
  /*@ngInject*/
  function ChangePasswordService($uibModal, $longWork, commonChangePasswordService) {
    _classCallCheck(this, ChangePasswordService);
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    this.commonChangePasswordService = commonChangePasswordService;
  }
  _createClass(ChangePasswordService, [{
    key: "changePassword",
    value: function changePassword(options) {
      var _this = this;
      return this.$longWork.execute(this.commonChangePasswordService.initData(options.userId)).then(function () {
        return _this.showDialog(options);
      });
    }
  }, {
    key: "showDialog",
    value: function showDialog(_options) {
      var modalInstance = this.$uibModal.open({
        controller: _modalChangepassword.ModalChangePasswordComponent.controller,
        controllerAs: _modalChangepassword.ModalChangePasswordComponent.controllerAs,
        templateUrl: _modalChangepassword.ModalChangePasswordComponent.templateUrl,
        size: "lg",
        resolve: {
          options: function options() {
            return _options;
          }
        }
      });
      return modalInstance.result;
    }
  }]);
  return ChangePasswordService;
}();
exports.ChangePasswordService = ChangePasswordService;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalChangePasswordComponent = void 0;
var _nsModal = __webpack_require__(55);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ModalChangePasswordController = /*#__PURE__*/function () {
  function ModalChangePasswordController(commonChangePasswordService, $uibModalInstance, language, options) {
    var _this = this;
    _classCallCheck(this, ModalChangePasswordController);
    this.commonChangePasswordService = commonChangePasswordService;
    this.$uibModalInstance = $uibModalInstance;
    this.language = language;
    this.options = options;
    this.header = this.language.Generic.Common.kChangePassword;
    var saveBtn = {
      title: this.language.Generic.Buttons.kSave,
      action: function action() {
        return _this.commonChangePasswordService.saveProcess();
      },
      icon: "glyphicon glyphicon-floppy-save",
      "class": _nsModal.ButtonClass.primary
    };
    var cancelBtn = {
      title: this.language.Generic.Buttons.kCancel,
      action: function action() {
        return _this.cancel();
      },
      icon: "glyphicon glyphicon-ban-circle"
    };
    this.buttons = [saveBtn, cancelBtn];
    // закрывает модальное окно при успешном сохранении
    this.commonChangePasswordService.onSave.on(function () {
      _this.$uibModalInstance.close();
    });
  }
  _createClass(ModalChangePasswordController, [{
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return ModalChangePasswordController;
}();
var ModalChangePasswordComponent = {
  controller: ModalChangePasswordController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/components/changepassword/modal.changepassword.component.html"
};
exports.ModalChangePasswordComponent = ModalChangePasswordComponent;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SsoLinkService = void 0;
var _common = __webpack_require__(3);
var _ssoLink = __webpack_require__(100);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SsoLinkService = /*#__PURE__*/function () {
  SsoLinkService.$inject = ["$uibModal", "language"];
  /*@ngInject*/
  function SsoLinkService($uibModal, language) {
    _classCallCheck(this, SsoLinkService);
    this.$uibModal = $uibModal;
    this.language = language;
  }
  _createClass(SsoLinkService, [{
    key: "link",
    value: function link(_idp) {
      return this.$uibModal.open({
        controller: _ssoLink.SsoLinkComponent.controller,
        controllerAs: _ssoLink.SsoLinkComponent.controllerAs,
        templateUrl: _ssoLink.SsoLinkComponent.templateUrl,
        resolve: {
          idp: function idp() {
            return _idp;
          }
        }
      });
    }
  }, {
    key: "removeLink",
    value: function removeLink(idp) {
      var authName = this.getAuthName(idp);
      localStorage.setItem("sso-removed-message", this.language.Generic.Common.kIdpAccountLinkIsRemoved.replace("{0}", authName));
      var postToParams = {
        path: "/webapi/sso/".concat(idp, "/remove-link"),
        formParams: {
          method: "get"
        },
        nocache: false
      };
      (0, _common.postTo)(postToParams);
    }
  }, {
    key: "getAuthName",
    value: function getAuthName(idp) {
      switch (idp) {
        case "esia":
          return "портала Госуслуг";
        case "esa":
          return "ЕСА";
        case "irtech":
          return "Мобильный ID ИРТех";
      }
    }
  }]);
  return SsoLinkService;
}();
exports.SsoLinkService = SsoLinkService;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SsoLinkRepository = exports.SsoLinkComponent = void 0;
var _baseRepository = __webpack_require__(19);
var _common = __webpack_require__(3);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var SsoLinkRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(SsoLinkRepository, _BaseRepository);
  var _super = _createSuper(SsoLinkRepository);
  function SsoLinkRepository() {
    _classCallCheck(this, SsoLinkRepository);
    return _super.apply(this, arguments);
  }
  _createClass(SsoLinkRepository, [{
    key: "getIdpInfo",
    value: function getIdpInfo(idp) {
      return this.$http.get("/webapi/sso/".concat(idp, "/info")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSessionData",
    value: function getSessionData(key) {
      var url = "/webapi/context/session";
      var config = {
        params: {
          key: key
        }
      };
      return this.$http.get(url, config).then(this.handleResponse, this.handleError);
    }
  }]);
  return SsoLinkRepository;
}(_baseRepository.BaseRepository);
exports.SsoLinkRepository = SsoLinkRepository;
var SsoLinkController = /*#__PURE__*/function () {
  SsoLinkController.$inject = ["$scope", "ssoLinkRepository", "mySettingsRepository", "$uibModalInstance", "language", "idp"];
  /*@ngInject*/
  function SsoLinkController($scope, ssoLinkRepository, mySettingsRepository, $uibModalInstance, language, idp) {
    var _this = this;
    _classCallCheck(this, SsoLinkController);
    this.$scope = $scope;
    this.ssoLinkRepository = ssoLinkRepository;
    this.mySettingsRepository = mySettingsRepository;
    this.$uibModalInstance = $uibModalInstance;
    this.language = language;
    this.idp = idp;
    this.buttons = [];
    var linkBtn = {
      title: this.language.Generic.Buttons.kContinue,
      isEnabled: function isEnabled() {
        return _this.ready && !_this.isIdpLogin;
      },
      action: function action() {
        return _this.linkWithIdp();
      },
      icon: "glyphicon glyphicon-new-window"
    };
    var cancelBtn = {
      title: this.language.Generic.Buttons.kCancel,
      action: function action() {
        return _this.cancel();
      },
      icon: "glyphicon glyphicon-ban-circle"
    };
    this.buttons.push(linkBtn);
    this.buttons.push(cancelBtn);
    this.init();
  }
  _createClass(SsoLinkController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var ssoLogin, providerId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.ssoLinkRepository.getSessionData("SSOLogin");
            case 2:
              ssoLogin = _context.sent;
              if (!(ssoLogin == 1)) {
                _context.next = 8;
                break;
              }
              _context.next = 6;
              return this.ssoLinkRepository.getSessionData("Idp");
            case 6:
              providerId = _context.sent;
              this.isIdpLogin = providerId == this.idp;
            case 8:
              _context.next = 10;
              return this.ssoLinkRepository.getIdpInfo(this.idp);
            case 10:
              this.idpInfo = _context.sent;
              _context.next = 13;
              return this.mySettingsRepository.checkLink(this.idp);
            case 13:
              this.linked = _context.sent;
              this.header = this.language.Generic.SetupSchool.kTitleLinkToIdp.replace("{0}", this.idpInfo.title);
              this.enterHandler();
              this.ready = true;
              this.$scope.$applyAsync();
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "prepareMessage",
    value: function prepareMessage(message) {
      return message.replace(/\{0\}/g, this.idpInfo.title);
    }
  }, {
    key: "linkWithIdp",
    value: function linkWithIdp() {
      var postToParams = {
        path: "/webapi/sso/".concat(this.idp, "/link"),
        formParams: {
          method: "get"
        },
        nocache: false
      };
      (0, _common.postTo)(postToParams);
    }
  }, {
    key: "enterHandler",
    value: function enterHandler() {
      var _this2 = this;
      angular.element(document).on("keydown keypress", function (event) {
        if (event.which !== 13) {
          return;
        }
        _this2.linkWithIdp();
        _this2.$scope.$applyAsync();
        event.preventDefault();
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss("cancel");
    }
  }]);
  return SsoLinkController;
}();
var SsoLinkComponent = {
  controller: SsoLinkController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/global/webapp/components/sso/sso.link.component.html"
};
exports.SsoLinkComponent = SsoLinkComponent;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentStudentsListService = void 0;
var _common = __webpack_require__(46);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ParentStudentsListService = /*#__PURE__*/function () {
  ParentStudentsListService.$inject = ["$http", "$q", "contextService"];
  /*@ngInject*/
  function ParentStudentsListService($http, $q, contextService) {
    _classCallCheck(this, ParentStudentsListService);
    this.$http = $http;
    this.$q = $q;
    this.contextService = contextService;
    this.init();
  }
  _createClass(ParentStudentsListService, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.student = new _common.BehaviorSubject();
      var defer = this.$q.defer();
      this.dataReady = defer.promise;
      this.load().then(function () {
        _this.student.next(_this.getCurrentStudent());
        defer.resolve();
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var promises = [];
      var config = {
        noCancelOnRouteChange: true
      };
      promises.push(this.contextService.getStudents(config).then(function (students) {
        _this2.students = students;
      }));
      promises.push(this.$http.get("/webapi/context/session", Object.assign({
        params: {
          key: "State47"
        }
      }, config)).then(function (response) {
        _this2.currentStudentId = response.data;
      }));
      return this.$q.all(promises);
    }
  }, {
    key: "getCurrentStudent",
    value: function getCurrentStudent() {
      var _this3 = this;
      if (!this.students) {
        return null;
      }
      var currentStudent = this.students[0];
      if (this.currentStudentId) {
        currentStudent = this.students.find(function (st) {
          return st.id == _this3.currentStudentId;
        });
      }
      return currentStudent;
    }
    // запоминает в сессию текущий выбор
  }, {
    key: "saveCurrentStudentId",
    value: function saveCurrentStudentId(currentStudentId) {
      this.$http.post("/webapi/context/session", currentStudentId, {
        params: {
          key: "State47"
        }
      });
    }
  }]);
  return ParentStudentsListService;
}();
exports.ParentStudentsListService = ParentStudentsListService;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParentStudentsListComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ParentStudentsListController = /*#__PURE__*/function () {
  ParentStudentsListController.$inject = ["$scope", "$timeout", "$element", "parentStudentsListService"];
  /*@ngInject*/
  function ParentStudentsListController($scope, $timeout, $element, parentStudentsListService) {
    _classCallCheck(this, ParentStudentsListController);
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$element = $element;
    this.parentStudentsListService = parentStudentsListService;
  }
  _createClass(ParentStudentsListController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;
      this.parentStudentsListService.dataReady.then(function () {
        _this.onReady();
      });
    }
  }, {
    key: "onReady",
    value: function onReady() {
      this.students = this.parentStudentsListService.students;
      this.student = this.parentStudentsListService.student.getValue();
      this.initSelect2();
      this.runWatch();
      this.$scope.$applyAsync();
    }
  }, {
    key: "initSelect2",
    value: function initSelect2() {
      var _this2 = this;
      this.$timeout(function () {
        var chSelect = _this2.$element.find("select.ch_select");
        if (chSelect.select2 && typeof chSelect.select2 == "function") {
          chSelect.select2({
            minimumResultsForSearch: -1,
            containerCssClass: "ch-select",
            dropdownCssClass: "ch-options"
          });
        }
      }, 50);
    }
  }, {
    key: "runWatch",
    value: function runWatch() {
      var _this3 = this;
      this.$scope.$watch(function () {
        return _this3.student;
      }, function (newVal, oldVal) {
        if (newVal) {
          _this3.parentStudentsListService.saveCurrentStudentId(newVal.id);
        }
        _this3.parentStudentsListService.student.next(newVal);
      });
    }
  }, {
    key: "cloaked",
    value: function cloaked() {
      return !this.parentStudentsListService.showStudentsList;
    }
  }]);
  return ParentStudentsListController;
}();
var ParentStudentsListComponent = {
  controller: ParentStudentsListController,
  selector: "parentStudentsList",
  controllerAs: "$ctrl",
  template: "\n\t\t<li ng-show=\"!$ctrl.mobile && $ctrl.students\" class=\"hidden-xs\" ng-class=\"{'ng-cloak': $ctrl.cloaked()}\">\n\t\t\t<div class=\"childs_select\">\n\t\t\t\t<div>\u0414\u0435\u0442\u0438: <select class=\"ch_select\" ng-options=\"student.name for student in $ctrl.students\" ng-model=\"$ctrl.student\"></select></div>\n\t\t\t</div>\n\t\t</li>\n\t\t<div ng-show=\"$ctrl.mobile && $ctrl.students && $ctrl.students.length > 1\" class=\"childs_select visible-xs\" ng-class=\"{'single': $ctrl.students.length == 1, 'ng-cloak': $ctrl.cloaked()}\">\n\t\t\t<div>\u0414\u0435\u0442\u0438: <select class=\"ch_select\" ng-options=\"student.name for student in $ctrl.students\" ng-model=\"$ctrl.student\"></select></div>\n\t\t</div>",
  bindings: {
    mobile: "<?"
  }
};
exports.ParentStudentsListComponent = ParentStudentsListComponent;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Metrika = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Metrika = /*#__PURE__*/function () {
  Metrika.$inject = ["$q"];
  /*@ngInject*/
  function Metrika($q) {
    _classCallCheck(this, Metrika);
    this.$q = $q;
  }
  _createClass(Metrika, [{
    key: "init",
    value: function init(counterConfigs, defaultCounterId) {
      this.defaultCounterId = defaultCounterId;
      this.counterConfigs = counterConfigs;
      this.positionToId = counterConfigs.map(function (config) {
        return config.id;
      });
    }
  }, {
    key: "insertMetrika",
    value: function insertMetrika() {
      var metrika = this;
      var name = 'yandex_metrika_callbacks2';
      window[name] = window[name] || [];
      window[name].push(function () {
        try {
          metrika.counterConfigs.map(function (config) {
            return Metrika.createCounter(config);
          });
        } catch (e) {}
      });
      var n = document.getElementsByTagName('script')[0];
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://mc.yandex.ru/metrika/tag.js';
      var insetScriptTag = function insetScriptTag() {
        return n.parentNode.insertBefore(s, n);
      };
      if (window.opera === '[object Opera]') {
        document.addEventListener('DOMContentLoaded', insetScriptTag, false);
      } else {
        insetScriptTag();
      }
      return name;
    }
  }, {
    key: "addFileExtension",
    value: function addFileExtension(extensions, counterPosition) {
      this.counterIsLoaded(counterPosition).then(function (counter) {
        return counter.addFileExtension(extensions);
      })["catch"](function () {
        return console.warn('Counter is still loading');
      });
    }
  }, {
    key: "extLink",
    value: function extLink(url) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var counterPosition = arguments.length > 2 ? arguments[2] : undefined;
      return this.counterIsLoaded(counterPosition).then(function (counter) {
        var promise = _this.getCallbackPromise(options, url);
        counter.extLink(url, options);
        return promise;
      })["catch"](function () {
        return console.warn('Counter is still loading');
      });
    }
  }, {
    key: "file",
    value: function file(url) {
      var _this2 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var counterPosition = arguments.length > 2 ? arguments[2] : undefined;
      return this.counterIsLoaded(counterPosition).then(function (counter) {
        var promise = _this2.getCallbackPromise(options, url);
        counter.file(url, options);
        return promise;
      })["catch"](function () {
        return console.warn('Counter is still loading');
      });
    }
  }, {
    key: "getClientID",
    value: function getClientID(counterPosition) {
      var counter = this.getCounterByPosition(counterPosition);
      if (counter && counter.reachGoal) {
        return counter.getClientID();
      }
      console.warn('Counter is still loading');
    }
  }, {
    key: "setUserID",
    value: function setUserID(userId, counterPosition) {
      this.counterIsLoaded(counterPosition).then(function (counter) {
        return counter.setUserID(userId);
      })["catch"](function () {
        return console.warn('Counter is still loading');
      });
    }
  }, {
    key: "userParams",
    value: function userParams(params, counterPosition) {
      this.counterIsLoaded(counterPosition).then(function (counter) {
        return counter.userParams(params);
      })["catch"](function () {
        return console.warn('Counter is still loading');
      });
    }
  }, {
    key: "params",
    value: function params(_params, counterPosition) {
      this.counterIsLoaded(counterPosition).then(function (counter) {
        return counter.userParams(_params);
      })["catch"](function () {
        return console.warn('Counter is still loading');
      });
    }
  }, {
    key: "replacePhones",
    value: function replacePhones(counterPosition) {
      this.counterIsLoaded(counterPosition).then(function (counter) {
        return counter.replacePhones();
      })["catch"](function () {
        return console.warn('Counter is still loading');
      });
    }
  }, {
    key: "notBounce",
    value: function notBounce() {
      var _this3 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var counterPosition = arguments.length > 1 ? arguments[1] : undefined;
      return this.counterIsLoaded(counterPosition).then(function (counter) {
        var promise = _this3.getCallbackPromise(options, options);
        counter.notBounce(options);
        return promise;
      })["catch"](function () {
        return console.warn('Counter is still loading');
      });
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(type) {
      var _this4 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var counterPosition = arguments.length > 2 ? arguments[2] : undefined;
      return this.counterIsLoaded(counterPosition).then(function (counter) {
        var promise = _this4.getCallbackPromise(options, type);
        counter.reachGoal(type, options.params, options.callback, options.ctx);
        return promise;
      })["catch"](function () {
        return console.warn("'Event with type [".concat(type, "] can't be fired because counter is still loading'"));
      });
    }
  }, {
    key: "hit",
    value: function hit(url) {
      var _this5 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var counterPosition = arguments.length > 2 ? arguments[2] : undefined;
      return this.counterIsLoaded(counterPosition).then(function (counter) {
        var promise = _this5.getCallbackPromise(options, url);
        counter.hit(url, options);
        return promise;
      })["catch"](function () {
        return console.warn("'Hit for page [".concat(url, "] can't be fired because counter is still loading'"));
      });
    }
  }, {
    key: "getCallbackPromise",
    value: function getCallbackPromise(options, resolveWith) {
      var defer = this.$q.defer();
      var optionsCallback = options.callback;
      options.callback = function () {
        optionsCallback && optionsCallback.call(this);
        defer.resolve(resolveWith);
      };
      return defer.promise;
    }
  }, {
    key: "counterIsLoaded",
    value: function counterIsLoaded(counterPosition) {
      var counter = this.getCounterByPosition(counterPosition);
      if (counter && counter.reachGoal) {
        return this.$q.resolve(counter);
      }
      return this.$q.reject(counter);
    }
  }, {
    key: "getCounterByPosition",
    value: function getCounterByPosition(counterPosition) {
      var counterId = this.getCounterIdByPosition(counterPosition);
      return Metrika.getCounterById(counterId);
    }
  }, {
    key: "getCounterIdByPosition",
    value: function getCounterIdByPosition(counterPosition) {
      return counterPosition === undefined ? this.defaultCounterId : this.positionToId[counterPosition];
    }
  }], [{
    key: "getCounterNameById",
    value: function getCounterNameById(id) {
      return 'yaCounter' + id;
    }
  }, {
    key: "getCounterById",
    value: function getCounterById(id) {
      return window[Metrika.getCounterNameById(id)];
    }
  }, {
    key: "createCounter",
    value: function createCounter(config) {
      window[Metrika.getCounterNameById(config.id)] = new Ya.Metrika2(config);
    }
  }]);
  return Metrika;
}();
exports.Metrika = Metrika;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddYaCounters = void 0;
var _securityrights = __webpack_require__(105);
var _common = __webpack_require__(13);
var _metrika = __webpack_require__(103);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AddYaCounters = /*#__PURE__*/function () {
  function AddYaCounters(appContext, metrika, $q, language) {
    _classCallCheck(this, AddYaCounters);
    this.appContext = appContext;
    this.metrika = metrika;
    this.$q = $q;
    this.language = language;
  }
  _createClass(AddYaCounters, [{
    key: "getRoleName",
    value: function getRoleName() {
      var roleName = this.language.Generic.Common.kStaff;
      if (this.appContext.hasRole(_securityrights.Role.Student)) {
        roleName = this.language.Generic.Common.kLearner;
      } else if (this.appContext.hasRole(_securityrights.Role.Parent)) {
        roleName = this.language.Generic.Common.kParent;
      }
      return roleName;
    }
  }, {
    key: "getOoType",
    value: function getOoType() {
      var ooType = "";
      switch (this.appContext.funcType) {
        case _common.FuncType.preSchool:
          ooType = this.language.Generic.Common.kFuncType_PreSchool;
          break;
        case _common.FuncType.school:
          ooType = this.language.Generic.Common.kFuncType_School;
          break;
        case _common.FuncType.addSchool:
          ooType = this.language.Generic.Common.kFuncType_AddSchool;
          break;
        case _common.FuncType.profSchool:
          ooType = this.language.Generic.Common.kFuncType_ProfSchool;
          break;
        case _common.FuncType.orphanage:
          ooType = this.language.Generic.Common.kFuncType_Orphanage;
          break;
        default:
          ooType = this.language.Generic.Common.kEMName;
          break;
      }
      return ooType;
    }
  }, {
    key: "execute",
    value: function execute() {
      if (this.appContext.yaCounterOff) {
        return;
      }
      var params = {
        productName: this.appContext.productName,
        environment: this.appContext.environment,
        version: this.appContext.version,
        ooType: this.getOoType(),
        ooName: this.appContext.organizationName,
        role: this.getRoleName(),
        serverId: this.appContext.serverId
      };
      var yandexCounterConfig = {
        id: 28935260,
        accurateTrackBounce: true,
        ut: "noindex",
        params: params
      };
      if (!this.appContext.yaCounterOff) {
        this.metrika.init([yandexCounterConfig], yandexCounterConfig.id);
        this.metrika.insertMetrika();
        this.appContext.yaCounters = [this.metrika];
        if (this.appContext.yaCounterCode) {
          var addMetrika = new _metrika.Metrika(this.$q);
          var addParams = Object.assign({}, params);
          var addYandexCounterConfig = {
            id: +this.appContext.yaCounterCode,
            accurateTrackBounce: true,
            ut: "noindex",
            params: addParams
          };
          addMetrika.init([addYandexCounterConfig], addYandexCounterConfig.id);
          addMetrika.insertMetrika();
          this.appContext.yaCounters.push(addMetrika);
        }
      }
    }
  }]);
  return AddYaCounters;
}();
exports.AddYaCounters = AddYaCounters;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupRights = exports.Role = exports.Right = exports.MinValidateRule = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Role;
exports.Role = Role;
(function (Role) {
  Role["Admin"] = "Admin";
  Role["Principal"] = "Principal";
  Role["Teacher"] = "Teacher";
  Role["Student"] = "Student";
  Role["Parent"] = "Parent";
  Role["MinorStaff"] = "MinorStaff";
  Role["Secretary"] = "Secretary";
  Role["MedicalStaff"] = "MedicalStaff";
  Role["Psychologist"] = "Psychologist";
  Role["SpecialistStaff"] = "SpecialistStaff";
  Role["EmAdmin"] = "EmAdmin";
  Role["EMHDEM"] = "EMHDEM";
  Role["EmOFREM"] = "EmOFREM";
  Role["EmOper"] = "EmOper";
  Role["EmCoordOD"] = "EmCoordOD";
  Role["EmCoordMer"] = "EmCoordMer";
})(Role || (exports.Role = Role = {}));
var Right;
exports.Right = Right;
(function (Right) {
  Right["arProfileEditSchoolInfo"] = "arProfileEditSchoolInfo";
  Right["arProfileViewSchoolInfo"] = "arProfileViewSchoolInfo";
  Right["arProfileEditRegionalSettings"] = "arProfileEditRegionalSettings";
  Right["arProfileDefineSecurityRoles"] = "arProfileDefineSecurityRoles";
  Right["arEditReferenceBook"] = "arEditReferenceBook";
  Right["arEditSchoolSettings"] = "arEditSchoolSettings";
  // Редактировать все сведения о сотрудниках
  Right["arUsersEditStaff"] = "arUsersEditStaff";
  Right["arUsersEditStaffMedInfo"] = "arUsersEditStaffMedInfo";
  // Редактировать все сведения об учениках и родителях
  Right["arUsersEditStudents"] = "arUsersEditStudents";
  Right["arUsersEditStudentsMedInfo"] = "arUsersEditStudentsMedInfo";
  Right["arUsersEditStudentsPsyInfo"] = "arUsersEditStudentsPsyInfo";
  // Редактировать имена пользователей и пароли сотрудников
  Right["arUsersEditAccountStaff"] = "arUsersEditAccountStaff";
  // Редактировать имена пользователей и пароли учеников и родителей
  Right["arUsersEditAccountStudentsParents"] = "arUsersEditAccountStudentsParents";
  Right["arUsersEditAccountStudentsParentsInClass"] = "arUsersEditAccountStudentsParentsInClass";
  Right["arCreateCloseEditYear"] = "arCreateCloseEditYear";
  Right["arSchoolSubjects"] = "arSchoolSubjects";
  Right["arCreateEditTerm"] = "arCreateEditTerm";
  Right["arEditSchoolTermTypes"] = "arEditSchoolTermTypes";
  Right["arMoveBookView"] = "arMoveBookView";
  Right["arMoveBookEdit"] = "arMoveBookEdit";
  Right["arMovePoolStudents"] = "arMovePoolStudents";
  Right["arMovePoolStaff"] = "arMovePoolStaff";
  Right["arSchoolDocsView"] = "arSchoolDocsView";
  Right["arSchoolDocsEdit"] = "arSchoolDocsEdit";
  Right["arClassMgmViewClassSubjAll"] = "arClassMgmViewClassSubjAll";
  Right["arClassMgmCreateClass"] = "arClassMgmCreateClass";
  Right["arClassMgmEditSubjects"] = "arClassMgmEditSubjects";
  Right["arClassMgmEnrollClass"] = "arClassMgmEnrollClass";
  // Право определять мероприятия в своём классе/группе>
  Right["arClassMgmPostClassEventSelf"] = "arClassMgmPostClassEventSelf";
  // Право определять мероприятия во всех классах/группах
  Right["arClassMgmPostClassEventAll"] = "arClassMgmPostClassEventAll";
  Right["arCurrMgmViewSelf"] = "arCurrMgmViewSelf";
  Right["arCurrMgmViewAll"] = "arCurrMgmViewAll";
  Right["arCurrMgmCreate"] = "arCurrMgmCreate";
  Right["arCurrMgmCreateAll"] = "arCurrMgmCreateAll";
  Right["arAddLA"] = "arAddLA";
  Right["arCalendarViewSelf"] = "arCalendarViewSelf";
  Right["arCalendarViewAll"] = "arCalendarViewAll";
  Right["arCalendarCreateCalendar"] = "arCalendarCreateCalendar";
  // Определять мероприятия ОО, каникулы, праздники
  Right["arPostSchoolEvent"] = "arPostSchoolEvent";
  Right["arViewAwardEvents"] = "arViewAwardEvents";
  Right["arPostAwardEvents"] = "arPostAwardEvents";
  Right["arEditAwardEventMembers"] = "arEditAwardEventMembers";
  Right["arViewSelfAwardEvents"] = "arViewSelfAwardEvents";
  Right["arSelfRegisterForAwardEvents"] = "arSelfRegisterForAwardEvents";
  Right["arEditSelfAwardEventResults"] = "arEditSelfAwardEventResults";
  Right["arJournalViewSelf"] = "arJournalViewSelf";
  Right["arJournalViewAll"] = "arJournalViewAll";
  Right["arJournalEditSelf"] = "arJournalEditSelf";
  Right["arJournalEditAll"] = "arJournalEditAll";
  Right["arJournalEditHAOnlyOnFuture"] = "arJournalEditHAOnlyOnFuture";
  Right["arTotalsViewSelf"] = "arTotalsViewSelf";
  Right["arTotalsViewAll"] = "arTotalsViewAll";
  Right["arTotalsEditSelf"] = "arTotalsEditSelf";
  Right["arTotalsEditAll"] = "arTotalsEditAll";
  // Задавать настройки учебных курсов
  Right["arLASetPolicies"] = "arLASetPolicies";
  // Задавать оценочные шкалы
  Right["arLACreateGradingScales"] = "arLACreateGradingScales";
  // Просматривать материал учебных курсов
  Right["arLAViewMaterials"] = "arLAViewMaterials";
  // Редактировать задания и оценки по учебным курсам для своей группы/класса/объединения или предмета
  Right["arLAEditSelf"] = "arLAEditSelf";
  // Просматривать задания и оценки по учебным курсам для своей группы/класса/объединения или предмета
  Right["arLAViewSelf"] = "arLAViewSelf";
  // Просматривать задания и оценки по учебным курсам для всех групп/классов/объединений
  Right["arLAViewAll"] = "arLAViewAll";
  // Просмотр отчетов для своих групп/классов/объединений
  Right["arReportsForAssignedClass"] = "arReportsForAssignedClass";
  // Просматривать отчеты во всех группах/классах/объединениях
  Right["arReportsForAllClasses"] = "arReportsForAllClasses";
  // Просматривать отчеты в своей группе/классе/объединении
  Right["arReportsViewForAssignedClass"] = "arReportsViewForAssignedClass";
  // Просматривать дополнительные отчеты
  Right["arReportsViewAdditionalReports"] = "arReportsViewAdditionalReports";
  // Использовать конструктор отчетов
  Right["arReportsUseReportConstructor"] = "arReportsUseReportConstructor";
  // Просмотр административных отчётов
  Right["arReportsViewAdministrativeReports"] = "arReportsViewAdministrativeReports";
  Right["arAnnouncementView"] = "arAnnouncementView";
  Right["arAnnouncementPost"] = "arAnnouncementPost";
  Right["arMessagesSendReceive"] = "arMessagesSendReceive";
  Right["arForumSendReceive"] = "arForumSendReceive";
  Right["arForumEdit"] = "arForumEdit";
  Right["arAssignmentsViewComplete"] = "arAssignmentsViewComplete";
  Right["arShortInfoStaff"] = "arShortInfoStaff";
  Right["arShortInfoStudents"] = "arShortInfoStudents";
  Right["arEditInfoSelf"] = "arEditInfoSelf";
  Right["arEnrollSelf"] = "arEditInfoSelf";
  Right["arDeleteUsers"] = "arDeleteUsers";
  Right["arEditSchoolResources"] = "arEditSchoolResources";
  Right["arSetPhoto"] = "arSetPhoto";
  Right["arBrowseResultsEGEAllClasses"] = "arBrowseResultsEGEAllClasses";
  Right["arBrowseResultsEGEHisClassesOrSubjects"] = "arBrowseResultsEGEHisClassesOrSubjects";
  Right["arSchoolPublicDocsView"] = "arSchoolPublicDocsView";
  Right["arBrowseStatReports"] = "arBrowseStatReports";
  Right["arFillStatReports"] = "arFillStatReports";
  Right["arBrowseAccessJournal"] = "arBrowseAccessJournal";
  Right["arUserStat"] = "arUserStat";
  /* Индивидуальная поддержка обучающихся */
  Right["arIndividualSupportStudentsReestrView"] = "arIndividualSupportStudentsReestrView";
  Right["arAddIndividualSupportStudents"] = "arAddIndividualSupportStudents";
  Right["arIndividualSupportMeasuresEditAll"] = "arIndividualSupportMeasuresEditAll";
  Right["arIndividualSupportMeasuresEditSelf"] = "arIndividualSupportMeasuresEditSelf";
  // Просматривать отчеты по детям с особыми образовательными потребностями
  Right["arReportsViewSpecialEducNeeds"] = "arReportsViewSpecialEducNeeds";
  Right["arViewHealthMonitoring"] = "arViewHealthMonitoring";
  Right["arEditHealthMonitoring"] = "arEditHealthMonitoring";
  Right["arViewFoodPayOrders"] = "arViewFoodPayOrders";
  Right["arEditFoodPayOrders"] = "arEditFoodPayOrders";
  Right["arEditFoodPayStudentOrdersAll"] = "arEditFoodPayStudentOrdersAll";
  Right["arEditFoodPayStudentOrdersSelf"] = "arEditFoodPayStudentOrdersSelf";
  Right["arEditFoodPayBalanceAll"] = "arEditFoodPayBalanceAll";
  Right["arEditFoodPayBalanceSelf"] = "arEditFoodPayBalanceSelf";
  Right["arPostFoodPayStudentOrders"] = "arPostFoodPayStudentOrders";
  Right["arFoodPayPayment"] = "arFoodPayPayment";
  // #17155. EM rights.
  Right["arEMUsersView"] = "arEMUsersView";
  Right["arEMUsersEdit"] = "arEMUsersEdit";
  Right["arEMEventsView"] = "arEMEventsView";
  Right["arEMEventsEdit"] = "arEMEventsEdit";
  Right["arEMReports"] = "arEMReports";
  Right["arEMPersonDataReports"] = "arEMPersonDataReports";
  Right["arEMAddReportsView"] = "arEMAddReportsView";
  Right["arEMAddReportsEdit"] = "arEMAddReportsEdit";
  Right["arEMMovement"] = "arEMMovement";
  Right["arEMStats"] = "arEMStats";
  Right["arEMEgeView"] = "arEMEgeView";
  Right["arEMEgeImport"] = "arEMEgeImport";
  Right["arEMMsoko"] = "arEMMsoko";
  Right["arEMDouPayNormView"] = "arEMDouPayNormView";
  Right["arEMDouPayNormEdit"] = "arEMDouPayNormEdit";
  Right["arEMCuratorsODView"] = "arEMCuratorsODView";
  Right["arEMCuratorsODEdit"] = "arEMCuratorsODEdit";
  Right["arEMODView"] = "arEMODView";
  Right["arEMODEdit"] = "arEMODEdit";
  Right["arEMEventsMembersView"] = "arEMEventsMembersView";
  Right["arEMEventsMembersEdit"] = "arEMEventsMembersEdit";
})(Right || (exports.Right = Right = {}));
// подгруппа прав
var SubgroupRights = /*#__PURE__*/function () {
  function SubgroupRights(subgroup, rights) {
    _classCallCheck(this, SubgroupRights);
    this.subgroup = subgroup;
    this.rights = rights;
    this.prepare();
  }
  _createClass(SubgroupRights, [{
    key: "prepare",
    value: function prepare() {
      if (this.isList()) {
        this.rights = this.rights.sort(function (a, b) {
          return a.order - b.order;
        });
      }
    }
  }, {
    key: "isList",
    value: function isList() {
      return !!this.subgroup && this.rights.length > 1 || this.rights.length == 1 && this.rights[0].key == Right.arIndividualSupportMeasuresEditSelf;
    }
  }]);
  return SubgroupRights;
}();
exports.SubgroupRights = SubgroupRights;
var MinValidateRule = /*#__PURE__*/function () {
  function MinValidateRule(min, setting, message) {
    _classCallCheck(this, MinValidateRule);
    this.min = min;
    this.setting = setting;
    this.message = message;
  }
  _createClass(MinValidateRule, [{
    key: "validate",
    value: function validate() {
      return this.setting.value >= this.min;
    }
  }]);
  return MinValidateRule;
}();
exports.MinValidateRule = MinValidateRule;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SferumBannerComponent = void 0;
var _commonRouting = __webpack_require__(107);
var _common = __webpack_require__(13);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SferumBannerController = /*#__PURE__*/function () {
  SferumBannerController.$inject = ["$scope", "appContext", "userSettingsRepository", "navigationService", "sferumBannerManager"];
  /*@ngInject*/
  function SferumBannerController($scope, appContext, userSettingsRepository, navigationService, sferumBannerManager) {
    _classCallCheck(this, SferumBannerController);
    this.$scope = $scope;
    this.appContext = appContext;
    this.userSettingsRepository = userSettingsRepository;
    this.navigationService = navigationService;
    this.sferumBannerManager = sferumBannerManager;
    this.init();
  }
  _createClass(SferumBannerController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.sferumBannerManager.ready.then(function () {
        _this.needShow = _this.showOnScreen() && _this.sferumBannerManager.displayBanner() && !_this.sferumBannerManager.alreadyDisplayed();
        if (_this.needShow) {
          _this.sferumBannerManager.store();
        }
        _this.$scope.$applyAsync();
      });
    }
  }, {
    key: "showOnScreen",
    value: function showOnScreen() {
      var screens = ["announcements", "studentdiary", "schedule", "main"];
      var uri = window.location.pathname.toLowerCase();
      return screens.some(function (screen) {
        return uri.indexOf(screen) >= 0;
      });
    }
  }, {
    key: "tryToGo",
    value: function tryToGo() {
      this.navigationService.navigateTo("/angular/school/chats");
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var _this2 = this;
      this.userSettingsRepository.setShowSferumBanner(this.appContext.userId, false).then(function () {
        return _this2.needShow = false;
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.needShow = false;
    }
  }]);
  return SferumBannerController;
}();
var SferumBannerComponent = {
  controller: SferumBannerController,
  controllerAs: "$ctrl",
  selector: "sferumBanner",
  // todo: templateUrl закомментил, потому что мешает при загрузке PendingRequests.cancelAll, он прерывает загрузку, при переходе на core оставить только templateUrl
  //templateUrl: "/static/dist/app/global/webapp/components/sferum-banner/sferum-banner.component.html",
  template: "\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/static/dist/app/global/webapp/components/sferum-banner/sferum-banner.component.css\" />\n\t\t<div class=\"sferum_banner-container sferum_banner-float\" ng-if=\"$ctrl.needShow\">\n\t\t\t<div class=\"sferum_banner\">\n\t\t\t\t<div class=\"sferum_banner_close\" ng-click=\"$ctrl.close()\"></div>\n\t\t\t\t<div class=\"sferum_banner_logo\"></div>\n\t\t\t\t<div class=\"sferum_banner_right\">\n\t\t\t\t\t<div class=\"sferum_banner_header\">\u0427\u0430\u0442\u044B \u0438 \u0432\u0438\u0434\u0435\u043E\u0437\u0432\u043E\u043D\u043A\u0438 \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \u0432\u0430\u0448\u0435\u043C \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435</div>\n\t\t\t\t\t<div class=\"sferum_banner_text\">\u0422\u0435\u043F\u0435\u0440\u044C \u0443 \u043D\u0430\u0441 \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0447\u0430\u0442\u044B \u0438 \u0432\u0438\u0434\u0435\u043E\u0437\u0432\u043E\u043D\u043A\u0438 \u0432 \u0421\u0444\u0435\u0440\u0443\u043C. <br>\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u0447\u0430\u0442\u0430\u0445 \u0438 \u0432\u0438\u0434\u0435\u043E\u0437\u0432\u043E\u043D\u043A\u0430\u0445 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441.</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"sferum_banner_button\" ng-click=\"$ctrl.tryToGo()\">\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C</div>\n\t\t\t\t\t\t<div class=\"sferum_banner_closelink\" ng-click=\"$ctrl.toggle()\">\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>",
  resolve: (0, _commonRouting.Guards)().Add((0, _commonRouting.FuncTypeGuard)({
    allowed: [_common.FuncType.school]
  })).Set()
};
exports.SferumBannerComponent = SferumBannerComponent;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RolesGuard = exports.RightsGuard = exports.Guards = exports.GuardBuilder = exports.FuncTypeGuard = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RouteAccessRestrict = "RouteAccessRestrict";
var FuncTypeGuard = function FuncTypeGuard(config) {
  return {
    /*@ngInject*/
    functypeGuard: ["appContext", "$q", function functypeGuard(appContext, $q) {
      if (config.allowed && config.allowed.indexOf(appContext.funcType) == -1) {
        return $q.reject(RouteAccessRestrict);
      }
      if (config.disallowed && config.disallowed.indexOf(appContext.funcType) > -1) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.FuncTypeGuard = FuncTypeGuard;
var RightsGuard = function RightsGuard(needRights) {
  return {
    /*@ngInject*/
    rightsGuard: ["appContext", "$q", function rightsGuard(appContext, $q) {
      if (!appContext.hasAnyRight(needRights)) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.RightsGuard = RightsGuard;
var RolesGuard = function RolesGuard(needRoles) {
  return {
    /*@ngInject*/
    rolesGuard: ["appContext", "$q", function rolesGuard(appContext, $q) {
      if (!needRoles.some(function (role) {
        return appContext.hasRole(role);
      })) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.RolesGuard = RolesGuard;
var GuardBuilder = /*#__PURE__*/function () {
  function GuardBuilder() {
    _classCallCheck(this, GuardBuilder);
    this.guards = {};
  }
  _createClass(GuardBuilder, [{
    key: "Add",
    value: function Add(guardConfig) {
      this.guards = Object.assign(this.guards, guardConfig);
      return this;
    }
  }, {
    key: "Set",
    value: function Set() {
      return this.guards;
    }
  }]);
  return GuardBuilder;
}();
exports.GuardBuilder = GuardBuilder;
var Guards = function Guards() {
  return new GuardBuilder();
};
exports.Guards = Guards;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSettingsRepository = void 0;
var _baseRepository = __webpack_require__(19);
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
var UserSettingsRepository = /*#__PURE__*/function (_BaseRepository) {
  UserSettingsRepository.$inject = ["$http", "$dialogs", "$longWork"];
  _inherits(UserSettingsRepository, _BaseRepository);
  var _super = _createSuper(UserSettingsRepository);
  /*@ngInject*/
  function UserSettingsRepository($http, $dialogs, $longWork) {
    _classCallCheck(this, UserSettingsRepository);
    return _super.call(this, $http, $dialogs, $longWork);
  }
  _createClass(UserSettingsRepository, [{
    key: "getUserSettings",
    value: function getUserSettings(userId, config) {
      var httpConfig = {
        params: {
          userId: userId
        }
      };
      if (config) {
        httpConfig = Object.assign({}, httpConfig, config);
      }
      return this.$http.get("/webapi/usersettings", httpConfig).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "setShowNetSchoolApp",
    value: function setShowNetSchoolApp(userId, showNetSchoolApp) {
      var promise = this.saveUserSettings(userId, null, null, null, null, null, null, null, null, showNetSchoolApp);
      return promise;
    }
  }, {
    key: "setShowSferumBanner",
    value: function setShowSferumBanner(userId, showSferumBanner) {
      var promise = this.saveUserSettings(userId, null, null, null, null, null, null, null, null, null, showSferumBanner);
      return promise;
    }
  }, {
    key: "saveUserSettings",
    value: function saveUserSettings(userId, showMobilePhone, defaultDesktop, language, favoriteReports, passwordExpired, recoveryAnswer, recoveryQuestion, theme, showNetSchoolApp, showSferumBanner) {
      var params = {
        userId: userId
      };
      if (!showMobilePhone) {
        params.showMobilePhone = showMobilePhone;
      }
      if (!defaultDesktop) {
        params.defaultDesktop = defaultDesktop;
      }
      if (!language) {
        params.language = language;
      }
      if (!favoriteReports) {
        params.favoriteReports = favoriteReports;
      }
      if (!passwordExpired) {
        params.passwordExpired = passwordExpired;
      }
      if (!recoveryAnswer) {
        params.recoveryAnswer = recoveryAnswer;
      }
      if (!recoveryQuestion) {
        params.recoveryQuestion = recoveryQuestion;
      }
      if (!theme) {
        params.theme = theme;
      }
      if (!showNetSchoolApp) {
        params.showNetSchoolApp = showNetSchoolApp;
      }
      if (!showSferumBanner) {
        params.showSferumBanner = showSferumBanner;
      }
      return this.$http.post("/webapi/usersettings", null, {
        params: params
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return UserSettingsRepository;
}(_baseRepository.BaseRepository);
exports.UserSettingsRepository = UserSettingsRepository;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppChatsButtonComponent = void 0;
var _common = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AppChatsButtonController = /*#__PURE__*/function () {
  function AppChatsButtonController(pageContext) {
    _classCallCheck(this, AppChatsButtonController);
    this.page = pageContext;
  }
  _createClass(AppChatsButtonController, [{
    key: "showChats",
    value: function showChats() {
      this.page.checkForChanges().then(function () {
        (0, _common.postTo)("/angular/school/chats/");
      });
    }
  }]);
  return AppChatsButtonController;
}();
var AppChatsButtonComponent = {
  controller: AppChatsButtonController,
  controllerAs: "$ctrl",
  selector: "appChatsButton",
  template: "\n\t\t<a href=\"javascript:void(0);\" ng-click=\"$ctrl.showChats()\" title=\"\u0427\u0430\u0442\u044B\" style=\"margin-top: 0px;\">\n\t\t\t<span class=\"cb-chats\"></span>\n\t\t</a>"
};
exports.AppChatsButtonComponent = AppChatsButtonComponent;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerManager = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BannerManager = /*#__PURE__*/function () {
  BannerManager.$inject = ["appContext", "userSettingsRepository", "settingsProvider", "$q"];
  /*@ngInject*/
  function BannerManager(appContext, userSettingsRepository, settingsProvider, $q) {
    _classCallCheck(this, BannerManager);
    this.appContext = appContext;
    this.userSettingsRepository = userSettingsRepository;
    this.settingsProvider = settingsProvider;
    this.$q = $q;
    this._state = "shown.once.state";
    this.init();
  }
  // инициализирует
  _createClass(BannerManager, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.clear();
      var defer = this.$q.defer();
      this.ready = defer.promise;
      var config = {
        noCancelOnRouteChange: true
      };
      var moduleChatsLoad = this.settingsProvider.ServerSettings.SystemSettings.ModuleChats(config).then(function (moduleChats) {
        _this.moduleChats = moduleChats;
      });
      moduleChatsLoad.then(function () {
        if (_this.moduleChats) {
          _this.userSettingsRepository.getUserSettings(_this.appContext.userId, config).then(function (userSettings) {
            _this.showSferumBanner = userSettings.showSferumBanner;
            defer.resolve();
          });
        } else {
          defer.resolve();
        }
      })["catch"](function () {
        return defer.reject();
      });
    }
    // чистит историю
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;
      var now = new Date();
      var list = this.state().filter(function (x) {
        return _this2.dateDiff(new Date(x.date), now) <= 24;
      });
      localStorage.setItem(this._state, JSON.stringify(list));
    }
    // вычисляет разницу дат в часах
  }, {
    key: "dateDiff",
    value: function dateDiff(start, end) {
      return Math.abs((end.getTime() - start.getTime()) / (1000 * 60 * 60));
    }
    // получает текущее состояние в виде списка
  }, {
    key: "state",
    value: function state() {
      var storedState = localStorage.getItem(this._state);
      var list = null;
      if (storedState != null) {
        list = JSON.parse(storedState);
      }
      return list !== null && list !== void 0 ? list : [];
    }
  }, {
    key: "displayBanner",
    value: function displayBanner() {
      return this.appContext.funcType == 2 && this.moduleChats && this.showSferumBanner;
    }
    // добавляет элемент в историю
  }, {
    key: "store",
    value: function store() {
      var list = this.state();
      list.push({
        token: this.appContext.at,
        date: new Date()
      });
      localStorage.setItem(this._state, JSON.stringify(list));
    }
    // показан уже
  }, {
    key: "alreadyDisplayed",
    value: function alreadyDisplayed() {
      var _this3 = this;
      return this.state().some(function (x) {
        return x.token == _this3.appContext.at;
      });
    }
  }]);
  return BannerManager;
}();
exports.BannerManager = BannerManager;

/***/ })
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BaseRepository = function () {
		function BaseRepository($http, $dialogs, $alerts) {
			_classCallCheck(this, BaseRepository);
	
			this.$http = $http;
			this.$dialogs = $dialogs;
			this.$alerts = $alerts;
		}
	
		_createClass(BaseRepository, [{
			key: "handleError",
			value: function handleError(response) {
				$(document).trigger("closeProcessing");
				if (response.status === 401) {
					var authError = response.headers("auth-error");
					if (authError === "SessionExpired") {
						$.show.message(language.Generic.Common.kTimeOutOccured4Ajax).then(function () {
							return window.location.pathname = "/";
						});
					} else {
						alert(language.Generic.Common.kErrPageAccess);
					}
				} else {
	
					var errorText = '';
	
					if (response.data.message) {
						errorText += response.data.message;
					}
	
					if (response.data.details) {
						errorText += ', ' + response.data.details;
					}
	
					$.show.error(errorText);
				}
				return Promise.reject(response);
			}
		}]);
	
		return BaseRepository;
	}();
	
	module.exports = { BaseRepository: BaseRepository };

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//todo. написать gulp плагин для автоматической генерации по файлу Right.cs
	
	var arProfileEditSchoolInfo = exports.arProfileEditSchoolInfo = 1;
	var arProfileViewSchoolInfo = exports.arProfileViewSchoolInfo = 65;
	var arProfileEditRegionalSettings = exports.arProfileEditRegionalSettings = 2;
	var arProfileDefineSecurityRoles = exports.arProfileDefineSecurityRoles = 3;
	var arEditReferenceBook = exports.arEditReferenceBook = 45;
	var arEditSchoolSettings = exports.arEditSchoolSettings = 58;
	
	var arUsersEditStaff = exports.arUsersEditStaff = 5;
	var arUsersEditStaffMedInfo = exports.arUsersEditStaffMedInfo = 66;
	var arUsersEditStudents = exports.arUsersEditStudents = 6;
	var arUsersEditStudentsMedInfo = exports.arUsersEditStudentsMedInfo = 67;
	var arUsersEditStudentsPsyInfo = exports.arUsersEditStudentsPsyInfo = 68;
	var arUsersEditAccountStaff = exports.arUsersEditAccountStaff = 73;
	var arUsersEditAccountStudentsParents = exports.arUsersEditAccountStudentsParents = 74;
	var arUsersEditAccountStudentsParentsInClass = exports.arUsersEditAccountStudentsParentsInClass = 75;
	
	var arCreateCloseEditYear = exports.arCreateCloseEditYear = 29;
	var arSchoolSubjects = exports.arSchoolSubjects = 37;
	var arCreateEditTerm = exports.arCreateEditTerm = 30;
	var arEditSchoolTermTypes = exports.arEditSchoolTermTypes = 44;
	var arMoveBookView = exports.arMoveBookView = 50;
	var arMoveBookEdit = exports.arMoveBookEdit = 51;
	var arMovePoolStudents = exports.arMovePoolStudents = 52;
	var arMovePoolStaff = exports.arMovePoolStaff = 53;
	
	var arSchoolDocsView = exports.arSchoolDocsView = 61;
	var arSchoolDocsEdit = exports.arSchoolDocsEdit = 62;
	
	var arClassMgmViewClassSubjAll = exports.arClassMgmViewClassSubjAll = 36;
	var arClassMgmCreateClass = exports.arClassMgmCreateClass = 7;
	var arClassMgmEditSubjects = exports.arClassMgmEditSubjects = 38;
	var arClassMgmEnrollClass = exports.arClassMgmEnrollClass = 8;
	var arClassMgmPostClassEventSelf = exports.arClassMgmPostClassEventSelf = 11;
	var arClassMgmPostClassEventAll = exports.arClassMgmPostClassEventAll = 14;
	
	var arCurrMgmViewSelf = exports.arCurrMgmViewSelf = 40;
	var arCurrMgmViewAll = exports.arCurrMgmViewAll = 39;
	var arCurrMgmCreate = exports.arCurrMgmCreate = 12;
	var arCurrMgmCreateAll = exports.arCurrMgmCreateAll = 13;
	var arAddLA = exports.arAddLA = 60;
	
	var arCalendarViewSelf = exports.arCalendarViewSelf = 15;
	var arCalendarViewAll = exports.arCalendarViewAll = 16;
	var arCalendarCreateCalendar = exports.arCalendarCreateCalendar = 19;
	var arPostSchoolEvent = exports.arPostSchoolEvent = 33;
	
	var arJournalViewSelf = exports.arJournalViewSelf = 20;
	var arJournalViewAll = exports.arJournalViewAll = 18;
	var arJournalEditSelf = exports.arJournalEditSelf = 17;
	var arJournalEditAll = exports.arJournalEditAll = 23;
	var arJournalEditLimitedTime = exports.arJournalEditLimitedTime = 70;
	var arJournalEditHAOnlyOnFuture = exports.arJournalEditHAOnlyOnFuture = 59;
	var arTotalsViewSelf = exports.arTotalsViewSelf = 34;
	var arTotalsViewAll = exports.arTotalsViewAll = 31;
	var arTotalsEditSelf = exports.arTotalsEditSelf = 41;
	var arTotalsEditAll = exports.arTotalsEditAll = 32;
	
	var arLASetPolicies = exports.arLASetPolicies = 9;
	var arLACreateGradingScales = exports.arLACreateGradingScales = 10;
	var arLAViewMaterials = exports.arLAViewMaterials = 35;
	var arLAEditSelf = exports.arLAEditSelf = 4;
	var arLAViewSelf = exports.arLAViewSelf = 42;
	var arLAViewAll = exports.arLAViewAll = 43;
	
	var arReportsForAssignedClass = exports.arReportsForAssignedClass = 21;
	var arReportsForAllClasses = exports.arReportsForAllClasses = 22;
	var arReportsViewForAssignedClass = exports.arReportsViewForAssignedClass = 24;
	var arReportsViewAdditionalReports = exports.arReportsViewAdditionalReports = 54;
	var arReportsUseReportConstructor = exports.arReportsUseReportConstructor = 55;
	var arReportsViewAdministrativeReports = exports.arReportsViewAdministrativeReports = 64;
	
	var arAnnouncementView = exports.arAnnouncementView = 25;
	var arAnnouncementPost = exports.arAnnouncementPost = 26;
	var arMessagesSendReceive = exports.arMessagesSendReceive = 27;
	var arForumSendReceive = exports.arForumSendReceive = 56;
	var arForumEdit = exports.arForumEdit = 57;
	var arAssignmentsViewComplete = exports.arAssignmentsViewComplete = 28;
	
	var arShortInfoStaff = exports.arShortInfoStaff = 46;
	var arShortInfoStudents = exports.arShortInfoStudents = 47;
	var arEditInfoSelf = exports.arEditInfoSelf = 48;
	var arEnrollSelf = exports.arEnrollSelf = 49;
	
	var arDeleteUsers = exports.arDeleteUsers = 63;
	
	var arEditSchoolResources = exports.arEditSchoolResources = 69;
	var arSetPhoto = exports.arSetPhoto = 72;
	
	var arBrowseResultsEGEAllClasses = exports.arBrowseResultsEGEAllClasses = 76;
	var arBrowseResultsEGEHisClassesOrSubjects = exports.arBrowseResultsEGEHisClassesOrSubjects = 77;
	var arSchoolPublicDocsView = exports.arSchoolPublicDocsView = 78;
	
	var arBrowseStatReports = exports.arBrowseStatReports = 79;
	var arFillStatReports = exports.arFillStatReports = 80;
	
	var arBrowseAccessJournal = exports.arBrowseAccessJournal = 81;
	var arUserStat = exports.arUserStat = 82;
	
	var arEMUsersView = exports.arEMUsersView = 1001;
	var arEMUsersEdit = exports.arEMUsersEdit = 1002;
	var arEMEventsView = exports.arEMEventsView = 1003;
	var arEMEventsEdit = exports.arEMEventsEdit = 1004;
	var arEMReports = exports.arEMReports = 1005;
	var arEMPersonDataReports = exports.arEMPersonDataReports = 1006;
	var arEMAddReportsView = exports.arEMAddReportsView = 1007;
	var arEMAddReportsEdit = exports.arEMAddReportsEdit = 1008;
	var arEMMovement = exports.arEMMovement = 1009;
	var arEMStats = exports.arEMStats = 1010;
	var arEMEgeView = exports.arEMEgeView = 1011;
	var arEMEgeImport = exports.arEMEgeImport = 1012;
	var arEMMsoko = exports.arEMMsoko = 1013;
	var arEMDouPayNormView = exports.arEMDouPayNormView = 1014;
	var arEMDouPayNormEdit = exports.arEMDouPayNormEdit = 1015;
	
	var arEMCuratorsODView = exports.arEMCuratorsODView = 1016;
	var arEMCuratorsODEdit = exports.arEMCuratorsODEdit = 1017;
	var arEMODView = exports.arEMODView = 1018;
	var arEMODEdit = exports.arEMODEdit = 1019;
	var arEMEventsMembersView = exports.arEMEventsMembersView = 1020;
	var arEMEventsMembersEdit = exports.arEMEventsMembersEdit = 1021;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _maintenanceCtrl = __webpack_require__(63);
	
	var _repository = __webpack_require__(65);
	
	var _module = angular.module("irtech.netcity.school.maintenance", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "netcity.common.menu", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
	
	_module.controller("MaintenanceCtrl", _maintenanceCtrl.MaintenanceCtrl).factory("maintenanceRepository", function ($http, $dialogs, $alerts, $q) {
		return new _repository.MaintenanceRepository($http, $dialogs, $alerts, $q);
	}).config(function ($routeProvider, $locationProvider) {
		$routeProvider.otherwise({
			templateUrl: "/static/dist/app/school/maintenance/template.html",
			controller: "MaintenanceCtrl as ctrl"
		});
		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	});

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rights = __webpack_require__(14);
	
	var Rights = _interopRequireWildcard(_rights);
	
	var _maintainSpecialty = __webpack_require__(64);
	
	var Specialty = _interopRequireWildcard(_maintainSpecialty);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MaintenanceCtrl = function () {
		function MaintenanceCtrl($scope, pageContext, $appLoader, $q, $alerts, maintenanceRepository, changeTracker) {
			_classCallCheck(this, MaintenanceCtrl);
	
			this.language = language;
			this.scope = $scope;
			pageContext.title = language.Generic.Maintenance.kTitleMaintenance;
			pageContext.parent = null;
	
			this.readonly = appContext.readOnly || !appContext.hasAnyRight([Rights.arProfileEditSchoolInfo]);
			this.state = {
				dataReady: false
			};
			this.data = {
				maintenance: {}
			};
			this.specialty = Specialty;
	
			this.appLoader = $appLoader;
			this.q = $q;
			this.alerts = $alerts;
			this.repository = maintenanceRepository;
			this.changeTracker = changeTracker;
	
			this.load();
		}
	
		// загрузка данных
	
	
		_createClass(MaintenanceCtrl, [{
			key: "load",
			value: function load() {
				var _this = this;
	
				this.state.dataReady = false;
	
				var getMaintenance = this.repository.getMaintenance().then(function (maintenance) {
					_this.data.maintenance = maintenance;
				});
	
				var queries = this.q.all([getMaintenance]);
	
				queries.then(function () {
					_this.state.dataReady = true;
					_this.changeTracker.clearDataChanges();
					_this.appLoader.hide();
				});
			}
		}, {
			key: "checkDefects",
			value: function checkDefects(defectologist, isStaff) {
				var _this2 = this;
	
				if (defectologist.specialty.id !== this.specialty.defectologist) return true;
	
				var oligophren = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this2.specialty.oligophren;
				}).value();
				var surdo = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this2.specialty.surdo;
				}).value();
				var tiflo = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this2.specialty.tiflo;
				}).value();
	
				if (isStaff && defectologist.specNumber1 === 0 && (oligophren.specNumber1 !== 0 || surdo.specNumber1 !== 0 || tiflo.specNumber1 !== 0)) return false;
	
				if (!isStaff && defectologist.specNumber2 === 0 && (oligophren.specNumber2 !== 0 || surdo.specNumber2 !== 0 || tiflo.specNumber2 !== 0)) return false;
	
				return true;
			}
		}, {
			key: "checkMedicals",
			value: function checkMedicals(med, isStaff) {
				var _this3 = this;
	
				if (med.specialty.id !== this.specialty.med) return true;
	
				var pediatr = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this3.specialty.pediatr;
				}).value();
				var neurolog = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this3.specialty.neurolog;
				}).value();
				var ophthalmologist = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this3.specialty.ophthalmologist;
				}).value();
				var audiologist = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this3.specialty.audiologist;
				}).value();
	
				if (isStaff && med.specNumber1 === 0 && (pediatr.specNumber1 !== 0 || neurolog.specNumber1 !== 0 || ophthalmologist.specNumber1 !== 0 || audiologist.specNumber1 !== 0)) return false;
	
				if (!isStaff && med.specNumber2 === 0 && (pediatr.specNumber2 !== 0 || neurolog.specNumber2 !== 0 || ophthalmologist.specNumber2 !== 0 || audiologist.specNumber2 !== 0)) return false;
	
				return true;
			}
		}, {
			key: "save",
			value: function save(valid) {
				var _this4 = this;
	
				if (!valid) {
					return;
				}
	
				var defectologist = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this4.specialty.defectologist;
				}).value();
				var med = _.chain(this.data.maintenance).find(function (x) {
					return x.specialty.id === _this4.specialty.med;
				}).value();
				if (!(this.checkDefects(defectologist, true) && this.checkDefects(defectologist, false) && this.checkMedicals(med, true) && this.checkMedicals(med, false))) {
					return;
				}
	
				var processing = $.show.processing();
				this.repository.save(this.data.maintenance).then(function () {
					//this.load();
					processing.close();
					_this4.state.dataReady = true;
					_this4.changeTracker.clearDataChanges();
					_this4.alerts.success(language.Generic.Common.kDataSaved);
				}, function () {
					processing.close();
				});
			}
		}]);
	
		return MaintenanceCtrl;
	}();
	
	MaintenanceCtrl.$inject = ["$scope", "pageContext", "$appLoader", "$q", "$alerts", "maintenanceRepository", "changeTracker"];
	module.exports = { MaintenanceCtrl: MaintenanceCtrl };

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//todo. написать gulp плагин для автоматической генерации по файлу MaintainSpecialty.cs
	
	var psychologist = exports.psychologist = 1;
	var logopedist = exports.logopedist = 2;
	var defectologist = exports.defectologist = 3;
	var oligophren = exports.oligophren = 4;
	var surdo = exports.surdo = 5;
	var tiflo = exports.tiflo = 6;
	var lfk = exports.lfk = 7;
	var afk = exports.afk = 8;
	var social = exports.social = 9;
	var med = exports.med = 10;
	var pediatr = exports.pediatr = 11;
	var neurolog = exports.neurolog = 12;
	var ophthalmologist = exports.ophthalmologist = 13;
	var audiologist = exports.audiologist = 14;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _repository = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaintenanceRepository = function (_BaseRepository) {
		_inherits(MaintenanceRepository, _BaseRepository);
	
		function MaintenanceRepository() {
			_classCallCheck(this, MaintenanceRepository);
	
			return _possibleConstructorReturn(this, (MaintenanceRepository.__proto__ || Object.getPrototypeOf(MaintenanceRepository)).apply(this, arguments));
		}
	
		_createClass(MaintenanceRepository, [{
			key: "getMaintenance",
			value: function getMaintenance() {
				return this.$http.get("/webapi/school/maintenance").then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "save",
			value: function save(maintenance) {
				return this.$http.post("/webapi/school/maintenance", maintenance).catch(this.handleError);
			}
		}]);
	
		return MaintenanceRepository;
	}(_repository.BaseRepository);
	
	module.exports = { MaintenanceRepository: MaintenanceRepository };

/***/ })

/******/ });
//# sourceMappingURL=app-bundle.js.map
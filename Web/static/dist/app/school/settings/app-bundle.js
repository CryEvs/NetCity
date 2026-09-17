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

	module.exports = __webpack_require__(105);


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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _repository = __webpack_require__(106);
	
	var _module = angular.module("irtech.netcity.school.settings", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "netcity.common.menu", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
	
	__webpack_require__(107);
	__webpack_require__(108);
	
	_module.factory("settingsRepository", function ($http, $dialogs, $alerts, $q) {
		return new _repository.SettingsRepository($http, $dialogs, $alerts, $q);
	}).config(function ($routeProvider, $locationProvider) {
		$routeProvider.when("/list/", {
			templateUrl: "/static/dist/app/school/settings/list/template.html",
			controller: "SettingsListCtrl"
		}).otherwise({
			templateUrl: "/static/dist/app/school/settings/list/template.html",
			controller: "SettingsListCtrl"
		});
		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	});

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _repository = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SettingsRepository = function (_BaseRepository) {
		_inherits(SettingsRepository, _BaseRepository);
	
		function SettingsRepository() {
			_classCallCheck(this, SettingsRepository);
	
			return _possibleConstructorReturn(this, (SettingsRepository.__proto__ || Object.getPrototypeOf(SettingsRepository)).apply(this, arguments));
		}
	
		_createClass(SettingsRepository, [{
			key: "getSchoolSettings",
			value: function getSchoolSettings() {
				return this.$http.get("/webapi/school/settings", { params: { yearId: appContext.yearId } }).then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "saveSchoolSettings",
			value: function saveSchoolSettings(schoolSettings) {
				return this.$http.post("/webapi/school/settings", schoolSettings).then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "getWindowsAuth",
			value: function getWindowsAuth() {
				return this.$http.get("/webapi/settings/windowsAuth").then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "getAssignmentTypes",
			value: function getAssignmentTypes() {
				return this.$http.get("/webapi/grade/assignment/types").then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "getAssignmentTypesWeights",
			value: function getAssignmentTypesWeights() {
				return this.$http.get("/webapi/grade/journal/assignments/types/weights").then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "saveAssignmentTypesWeights",
			value: function saveAssignmentTypesWeights(weights) {
				return this.$http.post("/webapi/grade/journal/assignments/types/weights", weights).then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}]);
	
		return SettingsRepository;
	}(_repository.BaseRepository);
	
	module.exports = {
		SettingsRepository: SettingsRepository
	};

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

	"use strict";
	
	angular.module("irtech.netcity.school.settings").controller("SettingsListCtrl", function ($scope, $http, $document, $location, $appLoader, settingsRepository, $uibModal, $alerts, $q, $dialogs, changeTracker) {
	
		$scope.$parent.page = {
			title: language.MenuFolders.kFNSchoolSettings
		};
	
		$.extend($scope, {
			language: language,
			data: {
				schoolSettings: {},
				grades: appContext.funcType === 1 ? [{ id: 0, name: language.Generic.Common.kGr0_s }, { id: 1, name: language.Generic.Common.kGr1_s }, { id: 2, name: language.Generic.Common.kGr2_s }, { id: 3, name: language.Generic.Common.kGr3_s }, { id: 4, name: language.Generic.Common.kGr4_s }, { id: 5, name: language.Generic.Common.kGr5_s }, { id: 6, name: language.Generic.Common.kGr6_s }, { id: 7, name: language.Generic.Common.kGr7_s }, { id: 8, name: language.Generic.Common.kGr8_s }] : [{ id: 0, name: "0" }, { id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }, { id: 4, name: "4" }, { id: 5, name: "5" }, { id: 6, name: "6" }, { id: 7, name: "7" }, { id: 8, name: "8" }, { id: 9, name: "9" }, { id: 10, name: "10" }, { id: 11, name: "11" }, { id: 12, name: "12" }],
				funcType: appContext.funcType,
				windowsAuth: false,
				oldMinMark: null,
				oldMaxMark: null
			},
			state: {
				dataReady: false
			}
		});
	
		$scope.load = function () {
			$scope.state.dataReady = false;
			var getSchoolSettings = settingsRepository.getSchoolSettings().then(function (settings) {
				$scope.data.schoolSettings = settings;
				$scope.data.oldMinMark = $scope.data.schoolSettings.minMark;
				$scope.data.oldMaxMark = $scope.data.schoolSettings.maxMark;
			});
			var getWindowsAuth = settingsRepository.getWindowsAuth().then(function (windowsAuth) {
				$scope.data.windowsAuth = windowsAuth;
			});
			var waits = [getSchoolSettings, getWindowsAuth];
			$q.all(waits).then(function () {
				$scope.state.dataReady = true;
				$appLoader.hide();
			});
		};
	
		$scope.saveExecute = function () {
			$appLoader.show();
			settingsRepository.saveSchoolSettings($scope.data.schoolSettings).then(function (result) {
				$appLoader.hide();
				$scope.data.schoolSettings = angular.copy(result);
				$scope.data.oldMinMark = $scope.data.schoolSettings.minMark;
				$scope.data.oldMaxMark = $scope.data.schoolSettings.maxMark;
				changeTracker.clearDataChanges();
				$alerts.success(language.Generic.SchoolSettings.kTitleSettings + language.Common.kOfSchool + language.Generic.SchoolSettings.kSuccessfulSaved);
			});
		};
	
		$scope.save = function (valid) {
			var juniorRange = { start: $scope.data.schoolSettings.juniorStepGrade.start, end: $scope.data.schoolSettings.juniorStepGrade.end };
			var middleRange = { start: $scope.data.schoolSettings.middleStepGrade.start, end: $scope.data.schoolSettings.middleStepGrade.end };
			var seniorRange = { start: $scope.data.schoolSettings.seniorStepGrade.start, end: $scope.data.schoolSettings.seniorStepGrade.end };
			if (valid && $scope.isValidRange(juniorRange) && $scope.isValidRange(middleRange) && $scope.isValidRange(seniorRange) && !$scope.isIntersectedGradesRanges() && !$scope.isGradesRangesWrongOrder() && !$scope.emptySpaceBetweenRanges()) {
				if ($scope.data.schoolSettings.minMark !== $scope.data.oldMinMark || $scope.data.schoolSettings.maxMark !== $scope.data.oldMaxMark) {
					$dialogs.confirm(language.Generic.SetupSchoolUI.kConfirm, language.Generic.SchoolSettings.kConChangeMarkRange).result.then(function () {
						$scope.saveExecute();
					});
				} else {
					$scope.saveExecute();
				}
			}
		};
	
		$scope.enabledMaxMark = function () {
			if (+settingsForm.MinMark.value && !$scope.data.schoolSettings.minMark) {
				$scope.data.schoolSettings.minMark = +settingsForm.MinMark.value;
			}
			if (+settingsForm.MaxMark.value && !$scope.data.schoolSettings.maxMark) {
				$scope.data.schoolSettings.maxMark = +settingsForm.MaxMark.value;
			}
			var minMark = Math.min($scope.data.schoolSettings.minMark || +settingsForm.MinMark.value, 99);
			var maxMark = $scope.data.schoolSettings.maxMark || +settingsForm.MaxMark.value;
	
			return minMark && minMark >= 1 && minMark < 100 && maxMark <= minMark ? minMark + 1 : (maxMark || 1) > 100 ? (minMark || 1) + 1 : maxMark || 1;
		};
	
		$scope.enabledMinMark = function () {
			if (+settingsForm.MaxMark.value && !$scope.data.schoolSettings.maxMark) {
				$scope.data.schoolSettings.maxMark = +settingsForm.MaxMark.value;
			}
			if (+settingsForm.MinMark.value && !$scope.data.schoolSettings.minMark) {
				$scope.data.schoolSettings.minMark = +settingsForm.MinMark.value;
			}
			var minMark = $scope.data.schoolSettings.minMark || +settingsForm.MinMark.value;
			var maxMark = Math.min($scope.data.schoolSettings.maxMark || +settingsForm.MaxMark.value, 100);
			return maxMark && maxMark > 1 && maxMark <= 100 && minMark >= maxMark ? maxMark - 1 : Math.min(minMark, 99) || (maxMark || 100) - 1;
		};
	
		$scope.isValidRange = function (range) {
			return range.end >= range.start;
		};
	
		$scope.isIntersectedOrInvalidRanges = function (firstRange, secondRange) {
			return !($scope.isValidRange(firstRange) && $scope.isValidRange(secondRange) && (firstRange.end < secondRange.start || secondRange.end < firstRange.start));
		};
	
		$scope.isIntersectedGradesRanges = function () {
			if ($scope.data.schoolSettings.juniorStepGrade && $scope.data.schoolSettings.middleStepGrade && $scope.data.schoolSettings.seniorStepGrade) {
				var juniorRange = { start: $scope.data.schoolSettings.juniorStepGrade.start, end: $scope.data.schoolSettings.juniorStepGrade.end };
				var middleRange = { start: $scope.data.schoolSettings.middleStepGrade.start, end: $scope.data.schoolSettings.middleStepGrade.end };
				var seniorRange = { start: $scope.data.schoolSettings.seniorStepGrade.start, end: $scope.data.schoolSettings.seniorStepGrade.end };
				return $scope.isValidRange(juniorRange) && $scope.isValidRange(middleRange) && $scope.isValidRange(seniorRange) && ($scope.isIntersectedOrInvalidRanges(juniorRange, middleRange) || $scope.isIntersectedOrInvalidRanges(juniorRange, seniorRange) || $scope.isIntersectedOrInvalidRanges(seniorRange, middleRange));
			} else {
				return false;
			}
		};
	
		$scope.emptySpaceBetweenRanges = function () {
			if ($scope.data.schoolSettings.juniorStepGrade && $scope.data.schoolSettings.middleStepGrade && $scope.data.schoolSettings.seniorStepGrade) {
				return $scope.data.schoolSettings.juniorStepGrade.end !== $scope.data.schoolSettings.middleStepGrade.start - 1 || $scope.data.schoolSettings.middleStepGrade.end !== $scope.data.schoolSettings.seniorStepGrade.start - 1;
			} else {
				return false;
			}
		};
	
		$scope.isGradesRangesWrongOrder = function () {
			if ($scope.data.schoolSettings.juniorStepGrade && $scope.data.schoolSettings.middleStepGrade && $scope.data.schoolSettings.seniorStepGrade) {
				return $scope.data.schoolSettings.juniorStepGrade.start >= $scope.data.schoolSettings.middleStepGrade.start || $scope.data.schoolSettings.juniorStepGrade.start >= $scope.data.schoolSettings.seniorStepGrade.start || $scope.data.schoolSettings.middleStepGrade.start >= $scope.data.schoolSettings.seniorStepGrade.start;
			} else {
				return false;
			}
		};
	
		$scope.weights = function () {
			var modalInstance = $uibModal.open({
				templateUrl: "/static/dist/app/school/settings/edit/editAssignmentTypeWeightsTemplate.html",
				controller: 'AssignmentTypeWeightsController',
				size: "md",
				resolve: {}
			});
	
			modalInstance.rendered.then(function () {});
	
			modalInstance.result.then(function (options) {
				return resolve(options);
			});
		};
	
		$scope.load();
	});

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	"use strict";
	
	angular.module("irtech.netcity.school.settings").controller("AssignmentTypeWeightsController", function ($scope, $http, $document, $location, $appLoader, $uibModal, $uibModalInstance, $alerts, $q, $dialogs, $controller, settingsRepository, changeTracker) {
		$scope.header = language.Generic.SchoolSettings.kAssignmentTypeWeightsSetup;
	
		$.extend($scope, {
			language: language,
			data: {
				assignmentTypes: [],
				assignmentTypesWeights: [],
				weights: []
			},
			state: {
				dataReady: false
			},
			messages: {
				from1Before100: language.Generic.Messages.kIntFromBefore.replace(/\{(\d+)\}/g, function (match, index) {
					return Array.prototype.slice.call([0, 100], 0)[index];
				})
			}
		});
	
		$scope.cancel = function () {
			$uibModalInstance.dismiss("cancel");
		};
	
		$scope.save = function (valid) {
			if (valid) {
				settingsRepository.saveAssignmentTypesWeights(_.map($scope.data.weights, function (item) {
					return { assignmentTypeId: item.id, schoolId: +appContext.schoolId, weight: item.weight };
				})).then(function () {
					changeTracker.clearDataChanges($("div.modal.fade"));
					$alerts.success(language.Generic.Assignment.kAssignmentTypesWeightsWasSaved);
					$scope.cancel();
				});
			}
		};
	
		$scope.load = function () {
			$scope.state.dataReady = false;
			var getAssignmentTypes = settingsRepository.getAssignmentTypes().then(function (types) {
				$scope.data.assignmentTypes = types;
			});
			var getAssignmentTypesWeights = settingsRepository.getAssignmentTypesWeights().then(function (weights) {
				$scope.data.assignmentTypesWeights = weights;
			});
			var waits = [getAssignmentTypes, getAssignmentTypesWeights];
			$q.all(waits).then(function () {
				$scope.data.weights = _.chain($scope.data.assignmentTypes).map(function (item) {
					return { id: item.id, name: item.name, weight: (_.find($scope.data.assignmentTypesWeights, function (wt) {
							return wt.assignmentTypeId === item.id;
						}) || { assignmentTypeId: item.id, weight: 10 }).weight };
				}).sortBy(function (item) {
					return item.order;
				}).toArray().value();
				$scope.state.dataReady = true;
				$appLoader.hide();
			});
		};
	
		$scope.load();
	
		$controller("NetCityModalController", { $scope: $scope, $dialogs: $dialogs, $uibModalInstance: $uibModalInstance, changeTracker: changeTracker });
	}).directive('yrInteger', yrInteger);
	function yrInteger() {
		return {
			restrict: 'A',
			link: function link(scope, element, attrs) {
	
				element.on('keypress', function (event) {
	
					if (!isIntegerChar()) event.preventDefault();
	
					function isIntegerChar() {
						return (/[0-9]/.test(String.fromCharCode(event.which))
						);
					}
				});
			}
		};
	};

/***/ })

/******/ });
//# sourceMappingURL=app-bundle.js.map
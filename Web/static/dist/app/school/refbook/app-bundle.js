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

	module.exports = __webpack_require__(101);


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

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _module = angular.module("irtech.netcity.school.refbook", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "netcity.common.menu", "irtech.netcity.ui-components"]);
	
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	
	_module.config(function ($routeProvider, $locationProvider) {
		$routeProvider.when("/list/", {
			templateUrl: "/static/dist/app/school/refbook/list/template.html",
			controller: "RefBookCtrl"
		}).when("/edit/", {
			templateUrl: "/static/dist/app/school/refbook/edit/template.html",
			controller: "EditRefItemCtrl"
		}).otherwise({
			templateUrl: "/static/dist/app/school/refbook/list/template.html",
			controller: "RefBookCtrl"
		});
		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	});

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _repository = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RefBookRepository = function (_BaseRepository) {
		_inherits(RefBookRepository, _BaseRepository);
	
		function RefBookRepository() {
			_classCallCheck(this, RefBookRepository);
	
			return _possibleConstructorReturn(this, (RefBookRepository.__proto__ || Object.getPrototypeOf(RefBookRepository)).apply(this, arguments));
		}
	
		_createClass(RefBookRepository, [{
			key: "getRefs",
			value: function getRefs() {
				return this.$http.get("/webapi/refbook").then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "getRefItems",
			value: function getRefItems(refType, parameterId) {
				var params = {};
				if (parameterId) {
					params.parameterId = parameterId;
				}
				return this.$http.get("/webapi/refbook/" + refType, { params: params }).then(function (response) {
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "saveRefItems",
			value: function saveRefItems(refType, item, parameterId) {
				var _this2 = this;
	
				var params = {};
				if (parameterId) {
					params.parameterId = parameterId;
				}
				return this.$http.post("/webapi/refbook/" + refType, item, { params: params }).then(function () {
					_this2.$alerts.success("Справочник успешно сохранен");
					return item;
				}, this.handleError);
			}
		}, {
			key: "deleteRefItems",
			value: function deleteRefItems(refType, id) {
				var _this3 = this;
	
				var params = { id: id };
				return this.$http.delete("/webapi/refbook/" + refType, { params: params }).then(function (response) {
					_this3.$alerts.success("Значения справочника успешно удалены");
					return response.data;
				}).catch(this.handleError);
			}
		}]);
	
		return RefBookRepository;
	}(_repository.BaseRepository);
	
	angular.module("irtech.netcity.school.refbook").factory("refBookRepository", function ($http, $dialogs, $alerts) {
		return new RefBookRepository($http, $dialogs, $alerts);
	});

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	"use strict";
	
	angular.module("irtech.netcity.school.refbook").controller("RefBookCtrl", function ($scope, $http, $document, $location, $appLoader, refBookRepository, $uibModal, $alerts) {
	
		$scope.$parent.page = {
			title: language.Generic.SetupSchool.kTitleRefBooks
		};
	
		$.extend($scope, {
			language: language,
			state: {
				dataReady: false,
				emptyData: false
			},
			data: {
				refType: null,
				checked: [],
				refTypes: [],
				refItems: []
			}
		});
	
		var typesReady = refBookRepository.getRefs().then(function (refTypes) {
			$scope.data.refTypes = _.map(refTypes, function (item) {
				item.id = item.refType + item.parameterId;
				return item;
			});
			$scope.data.refType = refTypes[0];
		});
	
		$scope.toggleChecks = function (id) {
			var idx = $scope.data.checked.indexOf(id);
			if (idx > -1) {
				$scope.data.checked.splice(idx, 1);
			} else {
				$scope.data.checked.push(id);
			}
		};
	
		$scope.add = function () {
			$scope.edit({ name: "", shortName: "" });
		};
	
		$scope.edit = function (_refItem) {
			var modalInstance = $uibModal.open({
				templateUrl: "/static/dist/app/school/refbook/edit/template.html",
				controller: "EditRefItemCtrl",
				resolve: {
					refType: function refType() {
						return $scope.data.refType;
					},
					refItem: function refItem() {
						return angular.copy(_refItem);
					}
				}
			});
			modalInstance.result.then($scope.load);
		};
	
		//todo. обработку чекбокса
	
		$scope.delete = function () {
			$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function () {
				refBookRepository.deleteRefItems($scope.data.refType.refType, $scope.data.checked).then(function () {
					$scope.load();
				});
			});
		};
	
		//загрузка данных
		$scope.load = function () {
			$scope.state.dataReady = false;
	
			refBookRepository.getRefItems($scope.data.refType.refType, $scope.data.refType.parameterId).then(function (refItems) {
				$scope.data.checked = [];
				$appLoader.hide();
				$scope.data.refItems = refItems;
				$scope.state.dataReady = true;
				$scope.state.emptyData = $scope.data.refItems.length === 0;
			});
		};
	
		typesReady.then(function () {
			$scope.load();
		});
	});

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

	"use strict";
	
	angular.module("irtech.netcity.school.refbook").controller("EditRefItemCtrl", function ($scope, refBookRepository, refType, refItem, $uibModalInstance) {
	
		if (refItem.id) {
			$scope.header = language.Generic.SetupSchool.kPageTitle_Edit + " \"" + refType.name + "\"";
		} else {
			$scope.header = language.Generic.SetupSchool.kPageTitle_New + " \"" + refType.name + "\"";
		}
	
		$.extend($scope, {
			language: language,
			data: {
				refType: refType,
				refItem: refItem
			}
		});
	
		$scope.save = function () {
			if (!$scope.data.refItem.name.trim()) {
				alert("Необходимо заполнить полное название");
				return;
			}
			refBookRepository.saveRefItems(refType.refType, $scope.data.refItem, refType.parameterId).then(function (item) {
				if (!item) {
					return;
				}
				$uibModalInstance.close(refItem);
			});
		};
	
		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
	});

/***/ })

/******/ });
//# sourceMappingURL=app-bundle.js.map
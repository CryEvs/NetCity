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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _module = angular.module("irtech.netcity.school.addservices", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "netcity.common.menu", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
	
	__webpack_require__(4);
	__webpack_require__(6);
	__webpack_require__(8);
	
	_module.config(function ($routeProvider, $locationProvider) {
		$routeProvider.when("/list", {
			templateUrl: "/static/dist/app/school/addservices/list/template.html",
			controller: "AddServiceListCtrl"
		}).otherwise({
			templateUrl: "/static/dist/app/school/addservices/list/template.html",
			controller: "AddServiceListCtrl"
		});
	
		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _repository = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddServicesRepository = function (_BaseRepository) {
		_inherits(AddServicesRepository, _BaseRepository);
	
		function AddServicesRepository() {
			_classCallCheck(this, AddServicesRepository);
	
			return _possibleConstructorReturn(this, (AddServicesRepository.__proto__ || Object.getPrototypeOf(AddServicesRepository)).apply(this, arguments));
		}
	
		_createClass(AddServicesRepository, [{
			key: "getAll",
			value: function getAll(params) {
				params = params || {};
				params.yearId = appContext.yearId;
				return this.$http.get("/webapi/addServices/school", { params: params }).then(function (response) {
					var addServices = response.data;
					if (response.headers("count")) {
						addServices.totalcount = parseInt(response.headers("count"));
					}
					return addServices;
				});
			}
		}, {
			key: "getStaffList",
			value: function getStaffList(yearId, addService) {
				var params = {};
				params.yearId = yearId;
				params.userId = addService && addService.user ? addService.user.id : -1;
				return this.$http.get("/webapi/addServices/staff", { params: params }).then(function (response) {
					return response.data;
				});
			}
		}, {
			key: "create",
			value: function create(service) {
				var _this2 = this;
	
				service.schoolYearId = appContext.yearId;
				return this.$http.post("/webapi/addServices", service).then(function (response) {
					_this2.$alerts.success("Добавлена новая дополнительная услуга");
					return response.data;
				}).catch(this.handleError);
			}
		}, {
			key: "remove",
			value: function remove(id) {
				var _this3 = this;
	
				return this.$http.delete("/webapi/addServices?addServiceId=" + id).then(function () {
					_this3.$alerts.success("Дополнительная услуга удалена");
				}).catch(this.handleError);
			}
		}, {
			key: "edit",
			value: function edit(service) {
				var _this4 = this;
	
				return this.$http.put("/webapi/addServices", service).then(function (response) {
					_this4.$alerts.success("Дополнительная услуга отредактирована");
					return response.data;
				}).catch(this.handleError);
			}
		}]);
	
		return AddServicesRepository;
	}(_repository.BaseRepository);
	
	angular.module("irtech.netcity.school.addservices").factory('addServicesRepository', function ($http, $dialogs, $alerts) {
		return new AddServicesRepository($http, $dialogs, $alerts);
	});

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _selectable = __webpack_require__(7);
	
	var _selectable2 = _interopRequireDefault(_selectable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module("irtech.netcity.school.addservices").controller("AddServiceListCtrl", function ($scope, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModal, addServicesRepository) {
	
		$scope.$parent.page = {
			title: "Дополнительные услуги"
		};
	
		angular.extend($scope, {
			paging: {
				page: 1,
				pageSize: 20,
				totalcount: 0
			}
		});
	
		$.extend($scope, {
			language: language,
			data: {
				addServices: [],
				selection: new _selectable2.default()
			},
			state: {
				dataReady: false,
				emptyData: false,
				viewReady: true,
				readOnlyContext: appContext.readOnly
			}
		});
	
		//редактировать
		$scope.editService = function (_addService) {
			var modalInstance = $uibModal.open({
				templateUrl: '/static/dist/app/school/addservices/edit/template.html',
				controller: 'EditAddServiceCtrl',
				backdrop: false,
				resolve: {
					addService: function addService() {
						return angular.copy(_addService);
					},
					mode: function mode() {
						return new Object({ edit: true });
					}
				}
			});
			modalInstance.result.then(function () {
				return $scope.load();
			});
			modalInstance.closed.then(function () {
				return $scope.load();
			});
		};
	
		//добавить
		$scope.addService = function (addService) {
			var modalInstance = $uibModal.open({
				templateUrl: '/static/dist/app/school/addservices/edit/template.html',
				controller: 'EditAddServiceCtrl',
				backdrop: false,
				resolve: {
					addService: addService,
					mode: function mode() {
						return new Object({ create: true });
					}
				}
			});
			modalInstance.result.then(function (addService) {
				return $scope.load();
			});
			modalInstance.closed.then(function () {
				return $scope.load();
			});
		};
	
		//удалить
		$scope.removeService = function (addService) {
			$.show.confirmation(("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0443\u0441\u043B\u0443\u0433\u0443 \"" + addService.name + "\"?").escapeHTML()).then(function () {
				addServicesRepository.remove(addService.id).then(function () {
					$scope.load();
				});
			});
		};
	
		//загрузка данных
		$scope.load = function () {
			var params = {
				page: $scope.paging.page,
				pageSize: $scope.paging.pageSize
			};
			addServicesRepository.getAll(params).then(function (addServices) {
				// paging
				$scope.paging.totalcount = addServices.totalcount;
				$scope.paging.show = $scope.paging.totalcount > $scope.paging.pageSize && $scope.paging.page > 0;
	
				$scope.data.addServices = addServices;
				$scope.data.selection.selected = false;
				$scope.state.emptyData = !addServices.length;
				$scope.state.dataReady = true;
				$appLoader.hide();
			});
		};
	
		$scope.load();
	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Selectable = function () {
		function Selectable() {
			var _this = this;
	
			_classCallCheck(this, Selectable);
	
			this.item = null;
	
			Object.defineProperty(this, "selected", {
				get: function get() {
					return _this.item;
				},
				set: function set(val) {
					_this.item = val;
				}
			});
		}
	
		_createClass(Selectable, [{
			key: "isSelected",
			value: function isSelected(val) {
				return this.item === val;
			}
		}, {
			key: "select",
			value: function select(val) {
				if (val === this.item) {
					this.item = null;
				} else {
					this.item = val;
				}
			}
		}, {
			key: "dropSelect",
			value: function dropSelect() {
				this.item = null;
			}
		}]);
	
		return Selectable;
	}();
	
	module.exports = Selectable;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _selectable = __webpack_require__(7);
	
	var _selectable2 = _interopRequireDefault(_selectable);
	
	var _refs = __webpack_require__(9);
	
	var AddServicesRefs = _interopRequireWildcard(_refs);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module("irtech.netcity.school.addservices").controller("EditAddServiceCtrl", function ($scope, addServicesRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModal, $uibModalInstance, addService, mode) {
	
		$.extend($scope, {
			language: language,
			data: {
				addService: addService,
				selection: new _selectable2.default(),
				addServiceTypes: AddServicesRefs.default.addServicesTypes
			},
			state: {
				dataReady: false,
				emptyData: false,
				viewReady: true,
				contentWasChanged: false
			},
			mode: mode,
			header: mode.edit ? "Редактировать дополнительную услугу" : "Добавить дополнительную услугу"
		});
	
		$scope.cancel = function () {
			$uibModalInstance.dismiss("cancel");
		};
	
		$scope.save = function (valid, addService) {
			if (valid) {
				if (addService) {
					addServicesRepository.edit(addService).then(function (addService) {
						$scope.state.dataReady = true;
						$appLoader.hide();
						$uibModalInstance.close(addService);
					});
				} else {
					addServicesRepository.create($scope.data.addService.item).then(function (addService) {
						$appLoader.hide();
						if (addService) {
							$scope.state.dataReady = true;
							$scope.mode.edit = true;
							$scope.mode.create = false;
							$scope.data.addService.item = addService;
							$uibModalInstance.close(addService);
						}
					});
				}
			}
		};
	
		$scope.load = function () {
			addServicesRepository.getStaffList(appContext.yearId, $scope.data.addService ? $scope.data.addService.item : null).then(function (staffList) {
				$scope.data.users = staffList;
				$appLoader.hide();
			});
		};
	
		$scope.load();
	});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AddServicesRefs = function () {
		function AddServicesRefs() {
			_classCallCheck(this, AddServicesRefs);
		}
	
		_createClass(AddServicesRefs, [{
			key: "addServicesTypes",
			get: function get() {
				return [{ id: 1, name: "Платная" }, { id: 2, name: "Бесплатная" }];
			}
		}]);
	
		return AddServicesRefs;
	}();
	
	var instance = new AddServicesRefs();
	
	exports.default = instance;

/***/ })
/******/ ]);
//# sourceMappingURL=app-bundle.js.map
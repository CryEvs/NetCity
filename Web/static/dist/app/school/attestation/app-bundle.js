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
/******/ 	return __webpack_require__(__webpack_require__.s = 261);
/******/ })
/************************************************************************/
/******/ ({

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(262);


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//angular = require 'angular'

var _module = angular.module("irtech.netcity.school.attestation", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
__webpack_require__(263);
__webpack_require__(264);
_module.directive("nsDateModel", function () {
  var toStr = function toStr(dateParam) {
    return dateParam ? dateUtils.date2strfrm(new Date(dateParam), "dd".concat(String.fromCharCode(1), "mm").concat(String.fromCharCode(1), "yyyy").concat(String.fromCharCode(1), ".")) : null;
  };
  return {
    restrict: 'A',
    scope: {
      date: "=nsDateModel"
    },
    link: function link(scope, element) {
      var isoDate = scope.date;
      var strDate = toStr(isoDate);
      $(element).val(strDate);
      $(element).on("change", function () {
        var date = dateUtils.str2date($(element).val());
        if (date) {
          scope.date = date.toISOString();
        } else {
          scope.date = null;
        }
        scope.$apply();
      });
    },
    replace: false
  };
}).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/list", {
    templateUrl: "/static/dist/app/school/attestation/list/template.html",
    controller: "ListAttestationCtrl"
  }).when("/portfolio/:userId?", {
    templateUrl: "/static/dist/app/school/attestation/portfolio/template.html",
    controller: "PortfolioAttestationCtrl"
  }).otherwise({
    redirectTo: "/list"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.attestation").controller("ListAttestationCtrl", function ($scope, $http, $document, $location, $appLoader) {
  $scope.$parent.page = {
    title: language.Generic.MenuFolders.kStaffAttestMyAttestation
  };
  $scope.userId = appContext.userId;
  $.extend($scope, {
    data: {
      language: language,
      staffAttestUrl: "",
      attestations: []
    },
    state: {
      dataReady: false,
      emptyData: false
    },
    ready: false
  });
  $scope.dateOnly2strF = function (dateParam) {
    return dateParam ? dateUtils.date2strfrm(new Date(dateParam), "dd".concat(String.fromCharCode(1), "mm").concat(String.fromCharCode(1), "yyyy").concat(String.fromCharCode(1), ".")) : null;
  };
  $scope.openStaffAttestModule = function (url) {
    openPopupWindow("_staffAttest", url, 1024, 800);
  };
  $scope.openStaffAttestModuleNewRequest = function () {
    $scope.openStaffAttestModule("/webapi/integration/staffattest/newrequest");
  };
  $scope.openStaffAttestModuleEditRequest = function (id) {
    $scope.openStaffAttestModule("/webapi/integration/staffattest/editrequest?id=".concat(id));
  };

  //загрузка данных
  $scope.load = function () {
    $http.get("/webapi/users/".concat($scope.userId, "/staff/attest")).then(function (response) {
      $scope.data.attestations = response.data;
      $scope.state.dataReady = true;
      $scope.state.emptyData = !response.data.length;
      $scope.ready = true;
      $appLoader.hide();
    })["catch"](function (response) {
      //отображение в темплейте
      $scope.error = response.message || response.details || language.Generic.Common.kUnexpErr;
    });
  };
  $scope.load();
});

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this = void 0;
angular.module("irtech.netcity.school.attestation").controller("PortfolioAttestationCtrl", function ($scope, $http, $uibModal, $dialogs, $appLoader, $alerts, $routeParams, $q, $longWork, $timeout) {
  $scope.userId = $routeParams.userId || appContext.userId;
  $scope.$parent.page = {
    title: language.Generic.MenuFolders.kStaffAttestPortfolio
  };
  if ($routeParams.userId) {
    $scope.$parent.page.parent = {
      title: "Сведения о сотруднике",
      href: "/angular/school/userinfo/staff/" + $scope.userId,
      postTo: true
    };
    $scope.$parent.page.back = {
      href: "/angular/school/userinfo/staff/" + $scope.userId
    };
  }
  $.extend($scope, {
    language: language,
    refs: {},
    data: {},
    state: {
      dataReady: false,
      emptyData: false
    },
    ready: false,
    emptyData: {
      education: {
        organization: null,
        municipality: null,
        period: {
          start: new Date().getFullYear(),
          end: new Date().getFullYear()
        },
        speciality: null,
        secondName: null,
        completionDocument: {
          docName: null,
          doctype: null,
          series: null,
          number: null,
          regNumber: null,
          issueDate: new Date()
        },
        id: null
      },
      academicAward: {
        academicDegree: null,
        academicTitle: null,
        speciality: null,
        awardDocument: {
          series: null,
          number: null,
          docName: null,
          awardDate: new Date(),
          organization: null
        }
      },
      staffTraining: {
        theme: null,
        level: null,
        form: null,
        organization: null,
        place: null,
        period: {
          start: new Date(),
          end: new Date()
        },
        hours: null,
        id: null,
        completionDocument: {
          docName: null,
          series: null,
          number: null,
          regNumber: null,
          issueDate: new Date()
        }
      },
      staffRetraining: {
        organization: null,
        place: null,
        period: {
          start: new Date(),
          end: new Date()
        },
        hours: null,
        id: null,
        speciality: null,
        qualification: null,
        note: null,
        secondName: null,
        completionDocument: {
          docName: null,
          series: null,
          number: null,
          regNumber: null,
          issueDate: new Date()
        }
      },
      staffMethodicalActivity: {
        period: {
          start: new Date().getFullYear(),
          end: new Date().getFullYear()
        },
        workName: null,
        productName: null,
        level: null,
        implementedIn: null,
        hostingAddress: null,
        participation: null,
        id: null
      },
      staffPortfolioFile: {
        originalFileName: null,
        description: null,
        name: null,
        content: null,
        id: null,
        fileCategory: null
      }
    }
  });
  $scope.dateOnly2strF = function (dateParam) {
    return dateParam ? dateUtils.date2strfrm(new Date(dateParam), "dd".concat(String.fromCharCode(1), "mm").concat(String.fromCharCode(1), "yyyy").concat(String.fromCharCode(1), ".")) : null;
  };

  //загрузка данных
  $scope.load = function () {
    var refsRequests = [$http.get("/webapi/refs/staff/portfolio/levels").then(function (response) {
      return $scope.refs.levels = response.data;
    }), $http.get("/webapi/refs/staff/portfolio/visitForms").then(function (response) {
      return $scope.refs.visitForms = response.data;
    }), $http.get("/webapi/refs/staff/portfolio/awardDocTypes").then(function (response) {
      return $scope.refs.awardDocTypes = response.data;
    }), $http.get("/webapi/refs/staff/portfolio/fileCategories").then(function (response) {
      return $scope.refs.fileCategories = response.data;
    }), $http.get("/webapi/refs/staff/portfolio/retrainingTypes").then(function (response) {
      return $scope.refs.retrainingTypes = response.data;
    }), $http.get("/webapi/refs/staff/portfolio/participationStatus").then(function (response) {
      return $scope.refs.participationStatus = response.data;
    }), $http.get("/webapi/refs/staff/portfolio/educDocumentType").then(function (response) {
      $scope.refs.educDocTypes = response.data;
      $scope.refs.educDocTypes.index = _.indexBy(response.data, "key");
    })];
    var loadStaffProfile = $http.get("/webapi/users/".concat($scope.userId, "/staff/portfolio")).then(function (response) {
      $scope.data = response.data;
      $scope.state.emptyData = response.data.length;
      if (appContext.yearId) {
        $http.get("/webapi/users/".concat($scope.userId, "/staff/portfolio/mainPosition/").concat(appContext.yearId)).then(function (response) {
          return $scope.data.mainPosition = response.data;
        });
        $http.get("/webapi/users/".concat($scope.userId, "/staff/portfolio/auxPosition/").concat(appContext.yearId)).then(function (response) {
          return $scope.data.addPosition = response.data;
        });
      }
    })["catch"](function (response) {
      //отображение в темплейте
      $scope.error = response.data.message || response.data.details || language.Generic.Common.kUnexpErr;
    });
    var waits = refsRequests.concat([loadStaffProfile]);
    $q.all(waits).then(function () {
      $scope.state.dataReady = true;
      $scope.ready = true;
      $appLoader.hide();
    });
  };
  $scope.refreshSection = function (item, itemsName, order, delFlag) {
    var findedItem = _.findWhere($scope.data[itemsName], {
      id: item.id
    });
    if (delFlag && findedItem) {
      $scope.data[itemsName] = _.without($scope.data[itemsName], findedItem);
    } else {
      if (findedItem) {
        angular.extend(findedItem, item);
      } else {
        $scope.data[itemsName].push(item);
      }
    }
    $timeout(function () {
      $scope.data[itemsName] = _.sortBy($scope.data[itemsName], function (x) {
        return order(x);
      });
    });
  };
  $scope.addItem = function (templateUrl, controller, emptyItem, itemsName, order, _url, _createTitle, _successCreateMessage) {
    var modalInstance = $uibModal.open({
      templateUrl: templateUrl,
      controller: controller,
      size: "md",
      resolve: {
        item: function item() {
          return angular.copy(emptyItem);
        },
        userId: function userId() {
          return $scope.userId;
        },
        createTitle: function createTitle() {
          return _createTitle;
        },
        url: function url() {
          return _url;
        },
        successCreateMessage: function successCreateMessage() {
          return _successCreateMessage;
        },
        editTitle: function editTitle() {
          return null;
        },
        successEditMessage: function successEditMessage() {
          return null;
        },
        refs: function refs() {
          return $scope.refs;
        }
      }
    });
    modalInstance.rendered.then(function () {
      return dateInput.initDateInputs(null, null, null, {
        format: "dd.mm.yyyy"
      });
    });
    modalInstance.result.then(function (result) {
      if (result) {
        //$appLoader.show();
        $scope.refreshSection(result, itemsName, order);
      }
    }, function () {});
  };
  $scope.removeItem = function (confirmMessage, deleteUrl, successMessage, itemsName, order) {
    $dialogs.confirm(confirmMessage).then(function () {
      return $http["delete"](deleteUrl);
    }).then(function (result) {
      //$appLoader.show();
      $scope.refreshSection(result.data, itemsName, order, true);
      $alerts.success(successMessage);
    })["catch"](function (response) {
      $alerts.error(response.data.message, response.data.details);
    });
  };
  $scope.editItem = function (_item, templateUrl, controller, itemsName, order, _url2, _editTitle, _successEditMessage) {
    var modalInstance = $uibModal.open({
      templateUrl: templateUrl,
      controller: controller,
      size: "md",
      resolve: {
        item: function item() {
          return angular.copy(_item);
        },
        userId: function userId() {
          return $scope.userId;
        },
        editTitle: function editTitle() {
          return _editTitle;
        },
        url: function url() {
          return _url2;
        },
        successEditMessage: function successEditMessage() {
          return _successEditMessage;
        },
        createTitle: function createTitle() {
          return null;
        },
        successCreateMessage: function successCreateMessage() {
          return null;
        },
        refs: function refs() {
          return $scope.refs;
        }
      }
    });
    modalInstance.rendered.then(function () {
      dateInput.initDateInputs(null, null, null, {
        format: "dd.mm.yyyy"
      });
    });
    modalInstance.result.then(function (result) {
      if (result) {
        //$appLoader.show();
        $scope.refreshSection(result, itemsName, order);
      }
    }, function () {});
  };

  // Функция сортировки образования
  $scope.orderEducation = function (education) {
    return education.period.end;
  };

  // Добавить образование
  $scope.addEducation = function () {
    $scope.addItem("/static/dist/app/school/attestation/portfolio/editEducationTemplate.html", "EditItemCtrl", $scope.emptyData.education, "educationData", $scope.orderEducation, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/educations"), "Добавление документа об образовании", "Информация об образовании добавлена");
  };

  // Изменить образование
  $scope.editEducation = function (education) {
    $scope.editItem(education, "/static/dist/app/school/attestation/portfolio/editEducationTemplate.html", "EditItemCtrl", "educationData", $scope.orderEducation, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/educations"), "Редактирование информации об образовании", "Информация об образовании сохранена");
  };

  // Удалить образование
  $scope.removeEducation = function (eduId) {
    $scope.removeItem("Вы действительно желаете удалить информацию об образовании?", "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/educations/").concat(eduId), "Информация об образовании удалена", "educationData", $scope.orderEducation);
  };

  // Функция сортировки научно-методической деятельности
  $scope.orderMethodicalActivity = function (methodicalActivity) {
    return methodicalActivity.period.end;
  };

  // Добавить научно-методическую деятельность
  $scope.addMethodicalActivity = function () {
    $scope.addItem("/static/dist/app/school/attestation/portfolio/editMethodicalActivityTemplate.html", "EditItemCtrl", $scope.emptyData.staffMethodicalActivity, "staffMethodicalActivityData", $scope.orderMethodicalActivity, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/methodActivities"), "Добавление документа о научно-методической деятельности", "Информация о научно-методической деятельности добавлена");
  };

  // Изменить научно-методическую деятельность
  $scope.editMethodicalActivity = function (methodicalActivity) {
    $scope.editItem(methodicalActivity, "/static/dist/app/school/attestation/portfolio/editMethodicalActivityTemplate.html", "EditItemCtrl", "staffMethodicalActivityData", $scope.orderMethodicalActivity, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/methodActivities"), "Редактирование информации о научно-методической деятельности", "Информация о научно-методической деятельности сохранена");
  };

  // Удалить научно-методическую деятельность
  $scope.removeMethodicalActivity = function (methodicalActivityId) {
    $scope.removeItem("Вы действительно желаете удалить информацию о научно-методической деятельности?", "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/methodActivities/").concat(methodicalActivityId), "Информация о научно-методической деятельности удалена", "staffMethodicalActivityData", $scope.orderMethodicalActivity);
  };

  // Функция сортировки файлов портфолио
  $scope.orderFiles = function (file) {
    return file.name;
  };

  // Добавить файл портфолио
  $scope.addStaffPortfolioFile = function () {
    $scope.addItem("/static/dist/app/school/attestation/portfolio/editStaffPortfolioFileTemplate.html", "EditPortfolioFileCtrl", $scope.emptyData.staffPortfolioFile, "staffPortfolioFilesData", $scope.orderFiles, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/files"), "Добавление файла портфолио", "Информация о файле портфолио добавлена");
  };

  // Изменить файл портфолио
  $scope.editStaffPortfolioFile = function (staffPortfolioFile) {
    $http.get("/webapi/".concat(staffPortfolioFile.downloadUrl)).then(function (response) {
      staffPortfolioFile.content = {
        file: response.data,
        name: staffPortfolioFile.originalFileName
      };
      $scope.editItem(staffPortfolioFile, "/static/dist/app/school/attestation/portfolio/editStaffPortfolioFileTemplate.html", "EditPortfolioFileCtrl", "staffPortfolioFilesData", $scope.orderFiles, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/files"), "Редактирование информации о файле портфолио", "Информация о файле портфолио сохранена");
    }.bind(_this));
  };

  // Удалить файл портфолио
  $scope.removeStaffPortfolioFile = function (staffPortfolioFileId) {
    $scope.removeItem("Вы действительно желаете удалить файл портфолио?", "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/files/").concat(staffPortfolioFileId), "Файл портфолио успешно удалён", "staffPortfolioFilesData", $scope.orderFiles);
  };

  // Функция сортировки успехов в профессиональной деятельности
  $scope.orderAcademicAwards = function (academicAward) {
    return academicAward.awardDocument.awardDate;
  };

  // Добавить профессиональное достижение
  $scope.addAcademicAward = function () {
    $scope.addItem("/static/dist/app/school/attestation/portfolio/editAcademicAwardTemplate.html", "EditItemCtrl", $scope.emptyData.academicAward, "academicAwardsData", $scope.orderAcademicAwards, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/academicAwards"), "Добавление документа о профессиональном научном развитии", "Информация о профессиональном научном развитии добавлена");
  };

  // Изменить профессиональное достижение
  $scope.editAcademicAward = function (academicAward) {
    $scope.editItem(academicAward, "/static/dist/app/school/attestation/portfolio/editAcademicAwardTemplate.html", "EditItemCtrl", "academicAwardsData", $scope.orderAcademicAwards, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/academicAwards"), "Редактирование информации о профессиональном научном развитии", "Информация о профессиональном научном развитии сохранена");
  };

  // Удалить профессиональное достижение
  $scope.removeAcademicAward = function (academicAwardId) {
    $scope.removeItem("Вы действительно желаете удалить информацию о профессиональном научном развитии?", "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/academicAwards/").concat(academicAwardId), "Информация о профессиональном научном развитии удалена", "academicAwardsData", $scope.orderAcademicAwards);
  };

  // Функция сортировки курсов повышения квалификации
  $scope.orderStaffTrainings = function (staffTraining) {
    return staffTraining.period.end;
  };

  // Добавить курс повышения квалификации
  $scope.addStaffTraining = function () {
    $scope.addItem("/static/dist/app/school/attestation/portfolio/editStaffTrainingTemplate.html", "EditItemCtrl", $scope.emptyData.staffTraining, "staffTrainingsData", $scope.orderStaffTrainings, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/trainings"), "Добавление документа о курсах повышения квалификации", "Информация о курсах повышения квалификации добавлена");
  };

  // Изменить информацию о курсах повышения квалификации
  $scope.editStaffTraining = function (staffTraining) {
    $scope.editItem(staffTraining, "/static/dist/app/school/attestation/portfolio/editStaffTrainingTemplate.html", "EditItemCtrl", "staffTrainingsData", $scope.orderStaffTrainings, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/trainings"), "Редактирование информации о курсах повышения квалификации", "Информация о курсах повышения квалификации сохранена");
  };

  // Удалить информацию о курсах повышения квалификации
  $scope.removeStaffTraining = function (staffTrainingId) {
    $scope.removeItem("Вы действительно желаете удалить информацию о курсах повышения квалификации?", "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/trainings/").concat(staffTrainingId), "Информация о курсах повышения квалификации удалена", "staffTrainingsData", $scope.orderStaffTrainings);
  };

  // Функция сортировки второго высшего, профессиональной переподготовки
  $scope.orderStaffRetrainings = function (staffRetraining) {
    return staffRetraining.period.end;
  };

  // Добавить второе высшее, профессиональную переподготовку
  $scope.addStaffRetraining = function () {
    $scope.addItem("/static/dist/app/school/attestation/portfolio/editStaffRetrainingTemplate.html", "EditItemCtrl", $scope.emptyData.staffRetraining, "staffRetrainingsData", $scope.orderStaffRetrainings, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/retrainings"), "Добавление документа о втором высшем, профессиональной переподготовке", "Информация о втором высшем, профессиональной переподготовке добавлена");
  };

  // Изменить информацию о втором высшем, профессиональной переподготовке
  $scope.editStaffRetraining = function (staffRetraining) {
    $scope.editItem(staffRetraining, "/static/dist/app/school/attestation/portfolio/editStaffRetrainingTemplate.html", "EditItemCtrl", "staffRetrainingsData", $scope.orderStaffRetrainings, "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/retrainings"), "Редактирование информации о втором высшем, профессиональной переподготовке", "Информация о втором высшем, профессиональной переподготовке сохранена");
  };

  // Удалить информацию о втором высшем, профессиональной переподготовке
  $scope.removeStaffRetraining = function (staffRetrainingId) {
    $scope.removeItem("Вы действительно желаете удалить информацию о втором высшем, профессиональной переподготовке?", "/webapi/users/".concat($scope.data.userId, "/staff/portfolio/retrainings/").concat(staffRetrainingId), "Информация о втором высшем, профессиональной переподготовке удалена", "staffRetrainingsData", $scope.orderStaffRetrainings);
  };
  function preparedTeacherActivities(studentsCertifResults) {
    var teacherPerformanceItems = studentsCertifResults.teacherPerformanceItems;
    for (var i = 0; i < teacherPerformanceItems.length; i++) {
      var teacherPerformance = teacherPerformanceItems[i];
      if (teacherPerformance.totalStudentsCount == null) {
        teacherPerformance.totalStudentsCount = "-";
      }
      if (teacherPerformance.studentsWithPositiveResultsCount == null) {
        teacherPerformance.studentsWithPositiveResultsCount = "-";
      }
      if (teacherPerformance.studentsWithMarkTwoCount == null) {
        teacherPerformance.studentsWithMarkTwoCount = "-";
      }
      if (teacherPerformance.percentageStudentsWithPositiveResults == null) {
        teacherPerformance.percentageStudentsWithPositiveResults = "-";
      }
    }
    var totalTeacherPerformance = studentsCertifResults.totalTeacherPerformance;
    if (totalTeacherPerformance.totalStudentsCount == null) {
      totalTeacherPerformance.totalStudentsCount = "-";
    }
    if (totalTeacherPerformance.studentsWithPositiveResultsCount == null) {
      totalTeacherPerformance.studentsWithPositiveResultsCount = "-";
    }
    if (totalTeacherPerformance.studentsWithMarkTwoCount == null) {
      totalTeacherPerformance.studentsWithMarkTwoCount = "-";
    }
    if (totalTeacherPerformance.percentageStudentsWithPositiveResults == null) {
      totalTeacherPerformance.percentageStudentsWithPositiveResults = "-";
    }
  }

  // Результаты освоения обучающимися образовательных программ по результатам промежуточной аттестации
  function getStudentsCertifResults(uri, templatePath, fileName, fio) {
    // шаблон
    var studentsCertifResultsTemplate;
    $(document).trigger('showProcessing');
    $http.get(templatePath).then(function (response) {
      var data = response.data;
      studentsCertifResultsTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
      return $http.get(uri);
    }).then(function (response) {
      var studentsCertifResults = response.data;
      preparedTeacherActivities(studentsCertifResults);
      var template = Handlebars.compile(studentsCertifResultsTemplate);
      var html = template({
        studentsCertifResults: studentsCertifResults
      });
      $(document).trigger('closeProcessing');
      var opts = {
        viewHeader: true,
        noShowYear: true,
        addInfo: fio,
        formTitle: function formTitle() {
          return fileName;
        }
      };
      $(html).printUtils().toExcel(opts);
    }, function (response) {
      $(document).trigger('closeProcessing');
      var msg = response.data.message || response.data.details;
      $.show.error("<div style='overflow: auto; max-height: 400px; overflow-x: hidden;'>".concat(msg, "</div>"));
    });
  }
  function genFio() {
    var fio;
    if ($scope.data.lastName) {
      fio = $scope.data.lastName;
    }
    if ($scope.data.firstName) {
      fio += " ".concat($scope.data.firstName);
    }
    if ($scope.data.middleName) {
      fio += " ".concat($scope.data.middleName);
    }
    if (fio) {
      fio = fio.trim();
    }
    return fio;
  }

  // Результаты освоения обучающимися образовательных программ по результатам промежуточной аттестации
  $scope.getStudentsCertifResults = function () {
    var uri = "/webapi/users/".concat($scope.userId, "/teacher/portfolio/studentsCertifResults");
    var templatePath = "/static/dist/app/school/attestation/portfolio/studentsCertifResultsTemplate.html";
    var fileName = $scope.language.Generic.Common.kResultsStudentsLearningOfIntermediateCertif;
    var fio = genFio();
    getStudentsCertifResults(uri, templatePath, fileName, fio);
  };

  // Доля обучающихся, успевающих на «4» и «5» по результатам промежуточной аттестации от общей численности обучающихся у учителя
  $scope.getStudentsPartFromTotalOfCertif = function () {
    var uri = "/webapi/users/".concat($scope.userId, "/teacher/portfolio/studentsPartFromTotalOfCertif");
    var templatePath = "/static/dist/app/school/attestation/portfolio/studentsPartFromTotalOfCertifTemplate.html";
    var fileName = $scope.language.Generic.Common.kStudentsPartHaveFourOrFiveOfIntermediateCertifFromTotal;
    var fio = genFio();
    getStudentsCertifResults(uri, templatePath, fileName, fio);
  };
  $scope.load();
}).controller("EditItemCtrl", function ($scope, $http, $alerts, $uibModalInstance, $appLoader, $dialogs, $controller, item, userId, createTitle, editTitle, url, successCreateMessage, successEditMessage, refs) {
  $scope.editMode = item && item.id > 0;
  $scope.header = $scope.editMode ? editTitle : createTitle;
  $scope.initCalendar = function () {
    return dateInput.initDateInputs(null, null, null, {
      format: "dd.mm.yyyy"
    });
  };
  $.extend($scope, {
    language: language,
    refs: refs,
    data: {
      item: item,
      userId: userId
    }
  });
  $scope.save = function (valid) {
    if (valid) {
      if ($scope.editMode) {
        $http.put("".concat(url, "/").concat($scope.data.item.id), $scope.data.item).then(function (response) {
          $uibModalInstance.close(response.data);
          $alerts.success(successEditMessage);
        })["catch"](function (response) {
          $alerts.error(response.data.message, response.data.details);
        });
      } else {
        $http.post(url, $scope.data.item).then(function (response) {
          $uibModalInstance.close(response.data);
          $alerts.success(successCreateMessage);
        })["catch"](function (response) {
          $alerts.error(response.data.message, response.data.details);
        });
      }
    }
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $controller("NetCityModalController", {
    $scope: $scope,
    $http: $http,
    $alerts: $alerts,
    $uibModalInstance: $uibModalInstance,
    $appLoader: $appLoader,
    $dialogs: $dialogs
  });
}).controller("EditPortfolioFileCtrl", function ($scope, $http, $alerts, $uibModalInstance, $appLoader, $dialogs, $controller, Upload, item, userId, createTitle, editTitle, url, successCreateMessage, successEditMessage, refs) {
  $scope.editMode = item && item.id > 0;
  $scope.header = $scope.editMode ? editTitle : createTitle;
  $.extend($scope, {
    language: language,
    refs: refs,
    data: {
      item: item,
      userId: userId
    }
  });
  $scope.save = function (valid) {
    if (valid) {
      if ($scope.editMode) {
        Upload.upload({
          url: "".concat(url, "/").concat($scope.data.item.id),
          method: "PUT",
          data: {
            file: $scope.data.item.content,
            info: JSON.stringify({
              OriginalFileName: $scope.data.item.content.name,
              Description: $scope.data.item.description,
              Name: $scope.data.item.name,
              FileCategory: $scope.data.item.fileCategory
            })
          }
        }).then(function (response) {
          $uibModalInstance.close(response.data);
          $alerts.success(successEditMessage);
        })["catch"](function (response) {
          $alerts.error(response.data.message, response.data.details);
        });
      } else {
        Upload.upload({
          url: "".concat(url),
          method: "POST",
          data: {
            file: $scope.data.item.content,
            info: JSON.stringify({
              OriginalFileName: $scope.data.item.content.name,
              Description: $scope.data.item.description,
              Name: $scope.data.item.name,
              FileCategory: $scope.data.item.fileCategory
            })
          }
        }).then(function (response) {
          $uibModalInstance.close(response.data);
          $alerts.success(successCreateMessage);
        })["catch"](function (response) {
          $alerts.error(response.data.message, response.data.details);
        });
      }
    }
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $controller("NetCityModalController", {
    $scope: $scope,
    $http: $http,
    $alerts: $alerts,
    $uibModalInstance: $uibModalInstance,
    $appLoader: $appLoader,
    $dialogs: $dialogs
  });
});

/***/ })

/******/ });
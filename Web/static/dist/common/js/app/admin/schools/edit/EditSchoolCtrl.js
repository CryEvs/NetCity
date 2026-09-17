(function(angular) {
  'use strict';
  angular.module('irtech.netcity.admin.schools').controller('EditSchoolCtrl', function($scope, $http, $q, $alerts, $dialogs, $uibModalInstance, $longWork, md5, model) {
    var processEducmanagements, promises, schooldefault, validate;
    $scope.$parent.pagetitle = "Редактирование образовательных организаций";
    schooldefault = {
      cityId: model.city.id,
      educOrganization: {
        foundersIds: []
      },
      department: null,
      departmentSchools: null,
      districtId: null,
      admin: {
        login: "admin",
        pass: "admin"
      },
      name: null,
      ownEducManagementsIds: []
    };
    $.extend($scope, {
      language: language,
      header: (model.school === null ? "Создание" : "Редактирование") + " образовательной организации",
      ready: false,
      city: model.city,
      settings: {
        editing: model.school !== null
      },
      references: {
        schools: model.schools,
        cityDistricts: [],
        eoTypes: [],
        eoForms: function() {
          var eoType, forms;
          if (!$scope.school.educOrganization.eoTypeId) {
            return [];
          }
          eoType = _.findWhere($scope.references.eoTypes, {
            id: $scope.school.educOrganization.eoTypeId
          });
          if (!eoType) {
            return [];
          }
          forms = _.filter(eoType.eoForms, function(ef) {
            return ef.funcType > 0;
          });
          if ($scope.settings.editing && !$scope.school.canChangeFuncType) {
            forms = _.filter(forms, function(ef) {
              return ef.funcType === $scope.school.funcType;
            });
          }
          return forms;
        },
        funcTypes: [],
        eoLegalForms: [],
        eoLegalForms83: []
      },
      school: schooldefault
    });
    promises = [];
    promises.push($http.get("/webapi/addresses/cities/" + $scope.city.id + "/districts").then(function(response) {
      return $scope.references.cityDistricts = response.data;
    }));
    promises.push($http.get("/webapi/founders?cityId=" + $scope.city.id).then(function(response) {
      return $scope.references.founders = response.data;
    }));
    promises.push($http.get("/webapi/educmanagements/hierarchy?cityId=" + $scope.city.id).then(function(response) {
      $scope.references.educmanagements = response.data;
      return processEducmanagements($scope.references.educmanagements);
    }));
    if (model.school !== null) {
      promises.push($http.get("/webapi/schools/" + model.school.id).then(function(response) {
        $scope.school = response.data;
        if ($scope.school.schoolInformation && $scope.school.schoolInformation.foundingDate) {
          $scope.school.schoolInformation.foundingDateStr = dateUtils.date2str(new Date($scope.school.schoolInformation.foundingDate));
        }
      }));
    }
    promises.push($http.get("/webapi/references/eoRefs").then(function(response) {
      $scope.references.eoTypes = _.filter(response.data.types, function(et) {
        return _.some(et.eoForms, function(ef) {
          return ef.funcType > 0;
        });
      });
      $scope.references.eoLegalForms = response.data.legalForms;
      $scope.references.eoLegalForms83 = response.data.legalForms83;
      $scope.references.funcTypes = response.data.functionalityTypes;
      $scope.references.otrasls = response.data.otrasls;
      $scope.references.statusOrganizations = response.data.statusOrganizations;
      if (!$scope.school.schoolInformation) {
        return $scope.school.schoolInformation = {
          statusOrganization: $scope.references.statusOrganizations[0].id
        };
      }
    }));
    $q.all(promises).then(function() {
      var schoolEoForm, schoolEoType;
      if (!$scope.settings.editing) {
        return;
      }
      if (!$scope.school.canChangeFuncType) {
        schoolEoType = _.findWhere($scope.references.eoTypes, {
          id: $scope.school.educOrganization.eoTypeId
        });
        schoolEoForm = _.findWhere(schoolEoType.eoForms, {
          id: $scope.school.educOrganization.eoFormId
        });
        $scope.school.funcType = schoolEoForm.funcType;
        $scope.references.eoTypes = _.filter($scope.references.eoTypes, function(et) {
          return _.some(et.eoForms, function(ef) {
            return ef.funcType === $scope.school.funcType;
          });
        });
      }
      if ($scope.school.department && $scope.school.department.mainSchoolId) {
        return $http.get("/webapi/schools/" + $scope.school.department.mainSchoolId + "/getAddressedName").then(function(response) {
          return $scope.references.mainSchools = [
            {
              id: $scope.school.department.mainSchoolId,
              name: response.data
            }
          ];
        });
      }
    }).then(function() {
      return $scope.ready = true;
    });
    $scope.changeType = function() {
      return $scope.school.educOrganization.eoFormId = $scope.references.eoForms()[0].id;
    };
    $scope.isFounderSelected = function(founder) {
      return _.contains($scope.school.educOrganization.foundersIds, founder.id);
    };
    $scope.toggleFounder = function(founder) {
      if ($scope.isFounderSelected(founder)) {
        return $scope.school.educOrganization.foundersIds = _.without($scope.school.educOrganization.foundersIds, founder.id);
      } else {
        return $scope.school.educOrganization.foundersIds.push(founder.id);
      }
    };
    $scope.isEducmanagementSelected = function(educmanagement) {
      return _.contains($scope.school.ownEducManagementsIds, educmanagement.emId);
    };
    $scope.toggleEducmanagement = function(educmanagement) {
      var subOwnEducManagementsIds;
      if ($scope.isEducmanagementSelected(educmanagement)) {
        $scope.school.ownEducManagementsIds = _.without($scope.school.ownEducManagementsIds, educmanagement.emId);
      } else {
        $scope.school.ownEducManagementsIds.push(educmanagement.emId);
      }
      subOwnEducManagementsIds = _.map(_.filter($scope.references.educmanagements, function(item) {
        return item.parentEmId === educmanagement.parentEmId && item.emId !== educmanagement.emId;
      }), function(item) {
        return item.emId;
      });
      return _.each(subOwnEducManagementsIds, function(subOwnEducManagementId) {
        return $scope.school.ownEducManagementsIds = _.without($scope.school.ownEducManagementsIds, subOwnEducManagementId);
      });
    };
    processEducmanagements = function(educmanagements) {
      var nodeName, parentEmId;
      if (!(educmanagements && educmanagements.length)) {
        return;
      }
      nodeName = "";
      parentEmId = -1;
      return _.each(educmanagements, function(educmanagement) {
        if (educmanagement.treeLevel === 0) {
          nodeName = "educmanagement-" + educmanagement.emId;
          parentEmId = educmanagement.emId;
        }
        educmanagement.tabs = '\t'.repeat(educmanagement.treeLevel);
        educmanagement.elementName = nodeName;
        educmanagement.parentEmId = parentEmId;
      });
    };
    validate = function() {
      if (!$scope.school.name) {
        $dialogs.message("Полное наименование не может быть пустым");
        return false;
      }
      if (!$scope.school.educOrganization.name) {
        $dialogs.message("Краткое наименование не может быть пустым");
        return false;
      }
      if (!$scope.school.number) {
        $dialogs.message("Номер не может быть пустым");
        return false;
      }
      if (!$scope.school.educOrganization.eoTypeId || !$scope.school.educOrganization.eoFormId) {
        $dialogs.message("Необходимо выбрать тип и вид ОО");
        return false;
      }
      if (!$scope.school.educOrganization.eoLegalFormId) {
        $dialogs.message("Необходимо выбрать правовую форму");
        return false;
      }
      if ($scope.school.department && !$scope.school.department.mainSchoolId) {
        $dialogs.message("Необходимо выбрать основную организацию");
        return false;
      }
      if (!$scope.settings.editing) {
        if (!$scope.school.admin.login || !$scope.school.admin.pass) {
          $dialogs.message("Необходимо укзать логин и пароль администратора организации");
          return false;
        }
      }
      if ($scope.school.schoolInformation.foundingDateStr) {
        if (!str2date($scope.school.schoolInformation.foundingDateStr)) {
          $dialogs.message("Некорректная дата основания");
          return false;
        }
      }
      return true;
    };
    $scope.toggleDepartment = function() {
      if ($scope.school.department === null) {
        return $scope.school.department = {};
      } else {
        return $scope.school.department = null;
      }
    };
    $scope.refreshMainSchools = function(schoolName) {
      var excludeUrlAppendix;
      if (!schoolName) {
        return;
      }
      excludeUrlAppendix = $scope.school.id > 0 ? "?excludeSchoolId=" + $scope.school.id : "";
      $scope.references.mainSchools = [
        {
          name: 'Поиск...'
        }
      ];
      return $http.get(("/webapi/cities/" + $scope.city.id + "/schools/" + schoolName) + excludeUrlAppendix).then(function(response) {
        if (!response.data.length) {
          return $scope.references.mainSchools = [
            {
              name: 'Совпадений не найдено'
            }
          ];
        } else {
          return $scope.references.mainSchools = response.data;
        }
      }, function(response) {
        return $alerts.error(response.data.message);
      });
    };
    $scope.ok = function() {
      var canCreate, confirmText, promise;
      promise = null;
      if (!validate()) {
        return;
      }
      if ($scope.school.schoolInformation.foundingDateStr) {
        $scope.school.schoolInformation.foundingDate = dateUtils.str2date($scope.school.schoolInformation.foundingDateStr);
      } else {
        $scope.school.schoolInformation.foundingDate = $scope.school.schoolInformation.foundingDateStr;
      }
      if ($scope.settings.editing) {
        return $longWork.execute($http.post("/webapi/schools", $scope.school)).success(function(response) {
          $uibModalInstance.close(response);
          return $alerts.success(language.Generic.ServAdmin.kSchoolInfoWasChanged);
        })["catch"](function(response) {
          return $alerts.error(response.data.message || response.data.details);
        });
      } else {
        canCreate = true;
        if ($scope.references.cityDistricts.length && !$scope.school.districtId) {
          confirmText = language.Generic.ServAdmin.kMsgSchoolDistict + '\n\t' + language.Generic.Common.kMsgAreYouSure + '\n' + language.Generic.ServAdmin.kMsgBindSchoolWIthRegion;
          canCreate = $dialogs.confirm(language.Generic.SetupSchoolUI.kConfirm, confirmText.replace("\n", "<br />")).result;
        }
        return $q.when(canCreate).then(function() {
          var createData;
          createData = $.extend({}, $scope.school);
          createData.admin.pass = md5.createHash(createData.admin.pass);
          return $longWork.execute($http.put("/webapi/schools", createData)).success(function(response) {
            $uibModalInstance.close(response);
            return $alerts.success(language.Generic.ServAdmin.kSchoolWasCreated);
          })["catch"](function(response) {
            return $alerts.error(response.data.message || response.data.details);
          });
        });
      }
    };
    $scope.cancel = function() {
      return $uibModalInstance.dismiss('cancel');
    };
    $scope.browseAccessJournal = function() {
      var browseSchoolInfoAccessJournalCtrl, ctrl;
      ctrl = require("./../../../../../vendor/pages/js/browseSchoolInfoAccessJournal.js");
      browseSchoolInfoAccessJournalCtrl = new ctrl({
        schoolId: $scope.school.id
      });
      return browseSchoolInfoAccessJournalCtrl.browseAccessJournal();
    };
  }).filter('propsFilter', function() {
    return function(items, props) {
      var keys, out;
      out = [];
      if (angular.isArray(items)) {
        keys = Object.keys(props);
        items.forEach(function(item) {
          var i, itemMatches, len, prop, text;
          itemMatches = false;
          for (i = 0, len = keys.length; i < len; i++) {
            prop = keys[i];
            text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }
          if (itemMatches) {
            return out.push(item);
          }
        });
      } else {
        out = items;
      }
      return out;
    };
  });
})(window.angular);

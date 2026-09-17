(function(angular) {
  'use strict';
  angular.module('irtech.netcity.admin.schools').controller('SchoolsListCtrl', function($scope, $http, $alerts, $uibModal, $longWork) {
    var initFilter, initingFilters, loader;
    $scope.$parent.pagetitle = "Список образовательных организаций";
    $.extend($scope, {
      viewReady: false,
      data: {
        countries: [],
        country: null,
        states: [],
        state: null,
        provinces: [],
        province: null,
        cities: [],
        city: null,
        schools: [],
        school: null
      }
    });
    initFilter = function(setlist, setselected, loadFunc, dependentExpression) {
      var handler;
      handler = function(newVal, oldVal) {
        if (initingFilters) {
          return;
        }
        if (newVal === null) {
          setlist([]);
          setselected(null);
          return;
        }
        return loadFunc(newVal).then(function(response) {
          setlist(response.data);
          if (response.data.length && response.data.length > 0) {
            return setselected(response.data[0]);
          }
        });
      };
      if (!angular.isArray(dependentExpression)) {
        return $scope.$watch(dependentExpression, handler);
      } else {
        return $scope.$watchGroup(dependentExpression, handler);
      }
    };
    loader = {
      getStates: function(countryId) {
        return $http.get("/webapi/addresses/countries/" + countryId + "/states?withCities=true");
      },
      getProvinces: function(stateId) {
        return $http.get("/webapi/addresses/states/" + stateId + "/provinces");
      },
      getCities: function(stateId, provinceId) {
        if (provinceId === -1) {
          provinceId = null;
        }
        return $http.get("/webapi/addresses/states/" + stateId + "/cities?provinceId=" + provinceId + "&withCities=true");
      },
      getSchools: function(cityId) {
        return $http.get("/webapi/schools/short?cityId=" + cityId + "&withHiddenMarks=true");
      }
    };
    initingFilters = true;
    $http.get("/webapi/addresses/init?main=true").then(function(response) {
      return $scope.data = angular.extend($scope.data, response.data);
    }).then(function() {
      initFilter((function(list) {
        return $scope.data.states = list;
      }), (function(item) {
        return $scope.data.state = item;
      }), (function(country) {
        return loader.getStates(country.id);
      }), 'data.country');
      initFilter((function(list) {
        return $scope.data.provinces = list;
      }), (function(item) {
        return $scope.data.province = item;
      }), (function(state) {
        return loader.getProvinces(state.id);
      }), 'data.state');
      initFilter((function(list) {
        return $scope.data.cities = list;
      }), (function(item) {
        return $scope.data.city = item;
      }), (function(stateprovince) {
        var ref, ref1;
        return loader.getCities((ref = stateprovince[0]) != null ? ref.id : void 0, (ref1 = stateprovince[1]) != null ? ref1.id : void 0);
      }), ['data.state', 'data.province']);
      initFilter((function(list) {
        return $scope.data.schools = list;
      }), (function(item) {
        return $scope.data.school = item;
      }), (function(city) {
        return loader.getSchools(city.id);
      }), 'data.city');
      loader.getSchools($scope.data.city.id).then(function(response) {
        $scope.viewReady = true;
        $scope.data.schools = response.data;
        return $scope.data.school = $scope.data.schools[0];
      });
      return window.setTimeout((function() {
        return initingFilters = false;
      }), 1000);
    })["catch"](function(response) {
      if (response != null ? response.data : void 0) {
        return $.show.error(response.data.message || language.Generic.ServAdmin.kUnknownError);
      } else {
        return $.show.error(language.Generic.ServAdmin.kUnknownError);
      }
    });
    $scope.reloadSchools = function(selectSchool) {
      return $longWork.execute(loader.getSchools($scope.data.city.id)).then(function(response) {
        $scope.data.schools = response.data;
        if (selectSchool) {
          return $scope.data.school = _.findWhere($scope.data.schools, {
            id: selectSchool.id
          });
        }
      });
    };
    $scope["delete"] = function(school) {
      return $longWork.execute($http.get("/webapi/schools/" + school.id + "/canDelete")).then(function(response) {
        var confirms;
        if (!response.data) {
          alert(language.Generic.ServAdmin.kUnknownError);
          return;
        }
        if (response.data.isWorkInSchool) {
          alert(response.message);
          return;
        }
        confirms = [];
        if (response.data.isCommonDataEnter) {
          confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool_DataEnter));
          confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool2));
          confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool3));
        } else {
          confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool));
          confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kAreYouSureToDelSchool2));
        }
        return extDeferred.when(confirms);
      }).then(function() {
        return $longWork.execute($http["delete"]("/webapi/schools/" + school.id)).then(function(response) {
          alert("Образовательная организация успешно удалена");
          return $scope.data.schools = _.reject($scope.data.schools, function(s) {
            return s.id === school.id;
          });
        }, function(response) {
          return $.show.error(response.data.message || response.data.details);
        });
      });
    };
    $scope["import"] = function() {
      var cityId, districtId;
      cityId = $scope.data.city.id;
      districtId = -1;
      return $http.get("/js/app/admin/schools/list/import.html").then(function(response) {
        var template;
        template = response.data;
        return $.show.fileDialog({
          title: language.Generic.Buttons.kImportOU,
          isAjax: true,
          submitParams: {
            cityId: cityId,
            districtId: districtId
          },
          fileExts: ['.xls'],
          url: "/asp/Administration/SchoolsImport.asp",
          handlerAjaxSuccess: function(response) {
            var buttons, html, importUnavailable, model, source;
            if (response.IsError) {
              $.show.error(response.message);
              return;
            }
            model = {
              data: response.data,
              language: language,
              showDistricts: _.some(response.data.schoolList, function(school) {
                return school.DistrictName && school.DistrictName.length;
              }),
              showProvinces: _.some(response.data.schoolList, function(school) {
                return school.ProvinceName && school.ProvinceName.length;
              }),
              showComments: _.some(response.data.schoolList, function(school) {
                return school.Comment && school.Comment.length;
              })
            };
            importUnavailable = !_.some(response.data.schoolList, function(school) {
              return school.CanImport;
            });
            source = template.replace(/(?:\r\n|\r|\n)/g, '');
            template = Handlebars.compile(source);
            html = template(model);
            buttons = [
              {
                label: language.Generic.Import.kBeginImport,
                cssClass: "btn-primary",
                action: function(dialog) {
                  var data, selectedSchools;
                  selectedSchools = $("input[name='incEO']:checkbox:checked");
                  if (selectedSchools.length === 0) {
                    alert(language.Generic.ServAdmin.kMustSelectEO);
                    return;
                  }
                  data = {
                    incEO: []
                  };
                  selectedSchools.each(function() {
                    return data.incEO.push(this.value);
                  });
                  return jsSubmit({
                    data: data,
                    action: "/asp/Administration/SchoolsImportSave.asp",
                    showProcessing: true
                  }).then(function(response) {
                    dialog.close();
                    $scope.reloadSchools();
                    model = response.data.result;
                    return $http.get("/js/app/admin/schools/list/import-completed.html").then(function(response) {
                      template = response.data;
                      source = template.replace(/(?:\r\n|\r|\n)/g, '');
                      template = Handlebars.compile(source);
                      html = template({
                        model: model,
                        language: language
                      });
                      return $.show.dialog({
                        title: language.Generic.Import.kTitleImportEO,
                        size: BootstrapDialog.SIZE_WIDE,
                        message: html,
                        buttons: [
                          {
                            label: language.Generic.Calendar.kClose,
                            action: function(dialog) {
                              return dialog.close();
                            }
                          }
                        ]
                      });
                    });
                  });
                }
              }, {
                label: language.Generic.Common.kCheckAll,
                action: function(dialog) {
                  return $('input[name="incEO"]:enabled:checkbox', document.MainForm).prop('checked', true);
                }
              }, {
                label: language.Generic.Common.kUnCheckAll,
                action: function(dialog) {
                  return $('input[name="incEO"]:enabled:checkbox', document.MainForm).prop('checked', false);
                }
              }
            ];
            if (importUnavailable) {
              buttons = [];
            }
            return $.show.dialog({
              title: language.Generic.Import.kTitleImportEO,
              size: BootstrapDialog.SIZE_WIDE,
              message: html,
              buttons: buttons
            });
          }
        });
      });
    };
    $scope.admin = function() {
      var modalInstance;
      return modalInstance = $uibModal.open({
        templateUrl: '/js/app/admin/schools/adminllist/template.html',
        controller: 'AdminListCtrl',
        resolve: {
          school: function() {
            return $scope.data.school;
          }
        }
      });
    };
    $scope.edit = function(school) {
      var modalInstance;
      modalInstance = $uibModal.open({
        templateUrl: '/js/app/admin/schools/edit/template.html',
        controller: 'EditSchoolCtrl',
        size: "lg",
        resolve: {
          model: function() {
            return {
              schools: $scope.data.schools,
              school: school,
              city: $scope.data.city
            };
          }
        }
      });
      modalInstance.rendered.then(function() {
        return dateInput.initDateInputs();
      });
      return modalInstance.result.then(function(editedSchool) {
        school = _.findWhere($scope.data.schools, {
          id: editedSchool.id
        });
        school.name = editedSchool.educOrganization.name;
        if (editedSchool.hidden) {
          return school.name = "(-) " + school.name;
        }
      });
    };
    $scope.add = function() {
      var modalInstance;
      modalInstance = $uibModal.open({
        templateUrl: '/js/app/admin/schools/edit/template.html',
        controller: 'EditSchoolCtrl',
        size: "lg",
        resolve: {
          model: function() {
            return {
              schools: $scope.data.schools,
              school: null,
              city: $scope.data.city
            };
          }
        }
      });
      modalInstance.rendered.then(function() {
        return dateInput.initDateInputs();
      });
      return modalInstance.result.then(function(createdSchool) {
        return $scope.reloadSchools(createdSchool);
      });
    };
  });
})(window.angular);

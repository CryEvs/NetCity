(function(angular) {
  return angular.module('irtech.netcity.school.activities').controller('learningApplicationsController', function($scope, $http, $q) {
    var bringingUrlFormat, defaultErrorCatcher, getId, laDeleted, mapActivity, requests, wndApp;
    $scope.ready = false;
    $scope.rights = {};
    $scope.uploadLimit = 65535;
    $scope.ciform = {
      kLAImport1: language.Generic.LearnApp.kLAImport1,
      kLAImport2: language.Generic.LearnApp.kLAImport2,
      kLAImport3: language.Generic.LearnApp.kLAImport3,
      kLAImport4: language.Generic.LearnApp.kLAImport4,
      kLAImport5: language.Generic.LearnApp.kLAImport5,
      kLAImport6: language.Generic.LearnApp.kLAImport6,
      kLAImportTool: language.Generic.LearnApp.kLAImportTool,
      kLAImportToolManual: language.Generic.LearnApp.kLAImportToolManual,
      kImportIntoLA: language.Generic.LearnApp.kImportIntoLA,
      kSelectLA: language.Generic.LearnApp.kSelectLA,
      productName: appContext.productName,
      activities: []
    };
    $scope.products = [];
    $scope.versions = [];
    $scope.LAList = function() {
      return ok('MenuForm', '/asp/LearnApp/LAList.asp');
    };
    $scope.laImport = function() {
      return $.show.fileDialog({
        title: language.Generic.LearnApp.kImportLearnCourses,
        fileExts: ['.mdb'],
        additionalContent: '<input id="grIDFile" type="hidden" name="GroupID" />',
        invalidFileExtMsg: language.Generic.LearnApp.kAlertInvalidExt,
        url: '/asp/LearnApp/LADoImport.asp',
        contentHtml: $('#laImportTempl').html().replace(/(?:\r\n|\r|\n)/g, ''),
        onShownDlg: function() {
          if ($('#grID').val() === null) {
            return $('#grIDFile').val('-1');
          } else {
            return $('#grIDFile').val($('#grID').val());
          }
        },
        customCheck: function() {
          var LAN, form;
          LAN = _.filter($('select[name="LAN"]'), function(elem) {
            return $(elem).parents(".modal-dialog").length > 0;
          })[0];
          if (Number(LAN.value) === 0) {
            alert(language.Generic.LearnApp.kAlertEnterLAName);
            LAN.focus();
            return false;
          }
          form = $('form[name="selectFile"]');
          form.append($('<input type="hidden" name="LAN" />').val(LAN.value.replace(/courses\|(.*)/g, '$1')));
          return $.show.confirmation(language.Generic.LearnApp.kConfirmMayTakeTime);
        },
        maxFileSize: $scope.uploadLimit
      });
    };
    $scope.buttons = [
      {
        name: language.Generic.LearnApp.kBtnLAList,
        style: "glyphicon-list",
        action: $scope.LAList
      }, {
        name: language.Generic.LearnApp.kImportLearnCourses,
        style: "glyphicon glyphicon-import",
        action: $scope.laImport
      }
    ];
    $scope.action = function(element) {
      return element.action();
    };
    mapActivity = function(activities) {
      if (activities.length === 1 && activities[0].id === "courses") {
        $scope.ciform.activities = _.chain($scope.products).map(function(o) {
          return _.defaults(o, activities[0]);
        }).each(function(o) {
          return o.id = "courses|" + o.id;
        }).value();
        return $scope.ciform.activities;
      } else {
        return _.map(activities, function(o) {
          if (o.publisher.code === "nd") {
            o.img = "/js/app/school/activities/img/thumb_" + o.id + ".jpg";
          }
          return o;
        });
      }
    };
    requests = {
      getAllActivity: function() {
        var versionKey;
        versionKey = "LACourse";
        return $http.get(urlHelper.makeUrl("/webapi/grade/activities", {
          version: $scope.versions[versionKey]
        })).success(function(response) {
          var f;
          f = function(a) {
            return a.groupName + '. ' + a.publisher.name;
          };
          $scope.groups = _.chain(response).groupBy(function(a) {
            return a.groupId;
          }).map(function(a, key) {
            return {
              id: key,
              name: f(a[0]),
              "class": null,
              activities: mapActivity(a)
            };
          }).value();
          $scope.group = $scope.groups[0];
          return $scope.selectGroup($scope.groups[0]);
        })["catch"](defaultErrorCatcher);
      },
      getProducts: function() {
        var versionKey;
        versionKey = "LACourse";
        return requests.getVersion(versionKey).then(function() {
          return $http.get(urlHelper.makeUrl("/webapi/grade/products", {
            version: $scope.versions[versionKey]
          })).success(function(response) {
            return $scope.products = response;
          })["catch"](defaultErrorCatcher);
        });
      },
      laPost: function(url, data) {
        var getValue;
        getValue = function(name) {
          return $("input[name='" + name + "'][type='hidden']").val();
        };
        _.extend(data, {
          AT: appContext.at,
          LoginType: getValue('LoginType'),
          Ver: getValue('ver'),
          Back: window.location.pathname
        });
        return postTo(url, data);
      },
      role: function() {
        return $http.get("/webapi/activity/rights").success(function(response) {
          return $scope.rights = {
            add: _.contains(response, "add"),
            read: _.contains(response, "read"),
            journalAssign: _.contains(response, "journalAssign")
          };
        })["catch"](defaultErrorCatcher);
      },
      uploadLimits: function() {
        return $http.get("/webapi/attachments/uploadLimits").success(function(response) {
          return $scope.uploadLimits = response;
        })["catch"](defaultErrorCatcher);
      },
      getVersion: function(key) {
        return $http.get(urlHelper.makeUrl("/webapi/version", {
          key: key
        })).success(function(response) {
          return $scope.versions[key] = response;
        })["catch"](defaultErrorCatcher);
      }
    };
    $scope.selectGroup = function(group) {
      $scope.ready = false;
      $scope.group["class"] = null;
      $scope.group = group;
      $scope.group["class"] = 'active';
      return $scope.ready = true;
    };
    defaultErrorCatcher = function(response) {
      if (response != null ? response.data : void 0) {
        return $.show.error(response.data.message || language.Generic.Common.kErrorMsg);
      } else {
        return $.show.error(language.Generic.Common.kErrorMsg);
      }
    };
    bringingUrlFormat = function(url) {
      var lastSymbol;
      lastSymbol = url[url.length - 1];
      if (lastSymbol !== '\\' && lastSymbol !== '/') {
        return url + '/';
      }
      return url;
    };
    wndApp = null;
    $scope.laView = function(activity) {
      var url, winOptions;
      if (activity.IsDeleted === 1) {
        alert(language.Generic.LearnApp.kMsgLAWasDeleted);
        return;
      }
      url = urlHelper.makeUrl("/asp/RemoteHostProxy.asp", {
        PROXYURL: activity.problemListUrl,
        TTSURL: bringingUrlFormat(window.location.origin),
        RO: 1,
        LAID: activity.id
      });
      winOptions = {
        url: url,
        name: '_blank',
        specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=950,height=660',
        winChild: wndApp
      };
      windowOpen(winOptions);
      return wndApp = winOptions.winChild;
    };
    $scope.laAssign = function(activity) {
      return requests.laPost('/asp/Grade/LAAssignments.asp', {
        LAID: getId(activity.id),
        LADELETED: laDeleted(activity.isDeleted),
        LANAME: activity.name,
        LaURL: activity.problemListUrl
      });
    };
    $scope.laJournal = function(activity) {
      return requests.laPost('/asp/Grade/Gradebook.asp', {
        LAID: getId(activity.id)
      });
    };
    getId = function(id) {
      if (Number($scope.group.id) < 0) {
        return 'courses|' + id;
      }
      return id;
    };
    laDeleted = function(isDeleted) {
      if (isDeleted) {
        return 'Y';
      }
      return 'N';
    };
    return $q.all([requests.getProducts().then(requests.getAllActivity), requests.role(), requests.uploadLimits()]);
  });
})(window.angular);

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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = angular.module("irtech.netcity.em.statreports", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "netcity.helpers", "netcity.validation", "netcity.indicators.directives", "uikit.controls.controllers", "uikit.controls", "irtech.netcity.ui-components", "irtech.netcity.em.statreports.common", "angularTreeview"]);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
var _require = __webpack_require__(23),
  WptInitializer = _require.WptInitializer;
_module.service("wptInit", WptInitializer).config(function ($routeProvider, $locationProvider, $provide) {
  $routeProvider.when("/", {
    templateUrl: "/static/dist/app/em/statReports/index/template.html",
    controller: "IndexController"
  }).when("/fill/", {
    templateUrl: "/static/dist/app/em/statReports/fill/template.html",
    controller: "FillIndicators.View.Em"
  }).when("/edit/", {
    templateUrl: "/static/dist/app/em/statReports/edit/template.html",
    controller: "Em.Indicators.View"
  }).when("/relevance/", {
    templateUrl: "/static/dist/app/em/statReports/relevance/template.html",
    controller: "RelevanceData.View"
  }).when("/view", {
    templateUrl: "/static/dist/app/em/statReports/view/template.html",
    controller: "EmStatReports.View",
    resolve: {
      wpt: function wpt() {
        return new WptInitializer().getWpt();
      }
    }
  }).otherwise({
    redirectTo: "/"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
}).run(function ($rootScope, wptInit) {
  //Без этой строчки при переходе на экран "Получение отчетов" возникает ошибка Error: multipleDefine
  wptInit.init();

  //костыль: добавляем на страницу элемент для отображения данных отчета
  //динамическое создание не работает. видимо ограничение wpt
  //требуется именно один единственный элемент, который создавался один единственный раз
  var wptContainer = $("<div></div>").attr("id", "wpt-container").css({
    height: "1000px",
    width: "1300px"
  });
  var wptWrap = $("<div></div>").addClass("wpt-styles").append(wptContainer);
  wptWrap.insertAfter($("div[ng-view]"));
  $rootScope.$on("$routeChangeStart", function () {
    //прячем элемент перед переходами между экранами
    wptContainer.hide();
  });
});

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

angular.module('netcity.indicators.directives', []).directive("indicatorNodes", function($compile) {
  return {
    restrict: 'A',
    scope: false,
    template: '<td ng-bind-template="{{indicator.fullNumber}} {{indicator.name}}"></td>',
    replace: false,
    link: function(scope, element, attrs) {
      var disabled, hasFillAccess, indicatorId, indicatorValueType, inputReadonly, isApproved, strElement;
      indicatorValueType = {
        numeric: "Numeric",
        bool: "Bool"
      };
      indicatorId = scope.indicator.id;
      hasFillAccess = typeof scope.$parent.state === "undefined" || typeof scope.$parent.state !== "undefined" && scope.$parent.state.hasFillAccess;
      isApproved = scope.$parent.isApprovedIndicatorGroup;
      inputReadonly = appContext.readOnly || isApproved || !hasFillAccess;
      scope.fillIndicators = scope.$parent.fillIndicators;
      scope._inputChange = scope.$parent.inputChange;
      if (scope.indicator.subIndicators !== void 0 && scope.indicator.subIndicators !== null) {
        $compile('<td></td>')(scope, function(cloned, scope) {
          element.append(cloned);
          element.addClass("indicator-group");
        });
        return $compile('<tr indicator-nodes ng-repeat="indicator in indicator.subIndicators" indicator="indicator"></tr>')(scope, function(cloned, scope) {
          element.after(cloned);
        });
      } else {
        if (scope.indicator.valueType === indicatorValueType.numeric) {
          scope.content = '<span>' + language.Generic.StatReports.kEnterOnlyNumbers + '</span>';
          scope.numberPattern = {
            test: function(value) {
              return /^\d+$/.test(value);
            }
          };
          strElement = '<td style="text-align: center;"> <div class="has-feedback" ng-class="{\'has-error\': fillIndicators.indicator' + indicatorId + '.$error.pattern, \'calculator-input\': !fillIndicators.indicator' + indicatorId + '.$error.pattern && indicator.calcExpression && ' + !inputReadonly + '}"> <input class="form-control" name="indicator' + indicatorId + '" type="text" ng-pattern="numberPattern" size="10" ng-change="_inputChange()" ng-model="indicator.value" ng-readonly="' + inputReadonly + '"/> <span ng-show="fillIndicators.indicator' + indicatorId + '.$error.pattern" tooltip-html-unsafe="{{content}}" tooltip-placement="right" class="glyphicon glyphicon-remove form-control-feedback input-icon-align"> </span> </div> </td>';
        } else if (scope.indicator.valueType === indicatorValueType.bool) {
          scope.values = [
            {
              id: 0,
              name: 'Нет'
            }, {
              id: 1,
              name: 'Да'
            }
          ];
          disabled = inputReadonly ? 'disabled' : '';
          strElement = '<td style="text-align: center;"> <select ng-model="indicator.value" ng-options="value.id as value.name for value in values" ng-change="_inputChange()" class="form-control" ng-readonly="' + inputReadonly + '"' + disabled + '> <option value=""></option> </select> </td>';
        }
        return $compile(strElement)(scope, function(cloned, scope) {
          element.append(cloned);
        });
      }
    }
  };
}).directive("parameterValue", function($compile) {
  return {
    restrict: 'E',
    scope: false,
    template: '',
    replace: true,
    link: function(scope, element, attrs) {
      var argumentType, parameterId, strElement;
      argumentType = {
        number: "Number",
        text: "Text",
        bool: "Bool"
      };
      if (scope.parameter.type === argumentType.number) {
        parameterId = scope.parameter.id;
        scope.numberPattern = {
          test: function(value) {
            return /^\d+$/.test(value);
          }
        };
        scope.content = '<span>' + language.Generic.StatReports.kEnterOnlyNumbers + '</span>';
        scope.fillParameterValues = scope.$parent.fillParameterValues;
        scope.$parent.$parent.fillParameterValues = scope.$parent.fillParameterValues;
        strElement = '<input type="text" class="form-control" size="10" ng-pattern="numberPattern" ng-model="parameter.value" name="parameter' + parameterId + '" />';
        strElement = '<div class="has-feedback" ng-class="{\'has-error\': fillParameterValues.parameter' + parameterId + '.$error.pattern}">' + strElement;
        strElement = strElement + '		<span ng-show="fillParameterValues.parameter' + parameterId + '.$error.pattern" tooltip-html-unsafe="{{content}}" tooltip-placement="right" class="glyphicon glyphicon-remove form-control-feedback input-icon-align"> </span> </div>';
      } else if (scope.parameter.type === argumentType.text) {
        strElement = '<input type="text" class="input-sm input-parameter-value" size="10" ng-model="parameter.value"/>';
      } else if (scope.parameter.type === argumentType.bool) {
        scope.values = [
          {
            id: '0',
            name: 'Нет'
          }, {
            id: '1',
            name: 'Да'
          }
        ];
        strElement = '  <select ng-model="parameter.value" ng-options="value.id as value.name for value in values" class="form-control"> <option value=""></option> </select>';
      }
      return $compile(strElement)(scope, function(cloned, scope) {
        element.append(cloned);
      });
    }
  };
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

angular.module('netcity.helpers', []).provider('$collectionHelper', function() {
  this.$get = function() {
    return {
      treeTransform: function(items, transformFunc, getChildList) {
        var recurs, transformCollection, transformItem;
        transformItem = function(item, parent) {
          var childs;
          childs = getChildList(item);
          item = transformFunc(item, parent);
          recurs(childs, item);
          return item;
        };
        transformCollection = function(items, parent) {
          var index, item, j, len;
          for (index = j = 0, len = items.length; j < len; index = ++j) {
            item = items[index];
            items[index] = transformItem(item, parent);
          }
        };
        recurs = function(childs, parent) {
          if (!childs || !childs.length || childs.length < 1) {
            return;
          }
          transformCollection(childs, parent);
        };
        if (!items) {
          return;
        }
        if (_.isArray(items)) {
          transformCollection(items, null);
        } else {
          items = transformItem(items, null);
        }
        return items;
      },
      treeForEach: function(items, getChildList, action) {
        var item, j, len, recurs;
        recurs = function(item) {
          var child, childs, index, j, len, results;
          childs = getChildList(item);
          if (!childs || !childs.length || childs.length < 1) {
            return;
          }
          results = [];
          for (index = j = 0, len = childs.length; j < len; index = ++j) {
            child = childs[index];
            action(child);
            results.push(recurs(child));
          }
          return results;
        };
        if (!items) {
          return;
        }
        if (_.isArray(items)) {
          for (j = 0, len = items.length; j < len; j++) {
            item = items[j];
            recurs(item);
          }
        } else {
          action(items);
          recurs(items);
        }
        return items;
      },
      treeToFlatArray: function(items, getChildList) {
        var func, retArr;
        retArr = new Array();
        func = function(items) {
          return _.each(items, function(item) {
            var childs;
            retArr.push(item);
            childs = getChildList(item);
            if (angular.isArray(retArr)) {
              return func(childs);
            }
          });
        };
        func(items);
        return retArr;
      },
      treeSearch: function(items, getChildList, searchCriteria) {
        var iterate, recurs;
        iterate = function(items) {
          var item, j, len, result;
          for (j = 0, len = items.length; j < len; j++) {
            item = items[j];
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
      }
    };
  };
}).provider("$autoMapper", function() {
  this.$get = function() {
    var dictionary;
    dictionary = {};
    return {
      createMap: function(sourceKey, destinationKey) {
        var combinedKey, functions;
        combinedKey = sourceKey + "_" + destinationKey;
        dictionary[combinedKey] = {};
        return functions = {
          forMember: function(key, e) {
            dictionary[combinedKey][key] = e;
            return functions;
          },
          forAllMembers: function(func) {
            dictionary[combinedKey].__forAllMembers = func;
            return functions;
          }
        };
      },
      map: function(sourceKey, destinationKey, sourceValue, destinationValue, lazy) {
        var combinedKey, extensions, getValue, i, j, key, len, mapItem, mappings, output, srcVal;
        if (!sourceValue && sourceValue !== false) {
          return;
        }
        getValue = function(item) {
          if (typeof item === "function" && !lazy) {
            return item();
          }
          return item;
        };
        combinedKey = sourceKey + "_" + destinationKey;
        mappings = dictionary[combinedKey];
        output = null;
        key = null;
        extensions = {
          ignore: function() {},
          mapFrom: function(sourceMemberKey) {
            var value;
            if (!this.__sourceValue.hasOwnProperty(sourceMemberKey)) {
              throw sourceKey + "." + sourceMemberKey + " не определено";
            }
            value = getValue(this.__sourceValue[sourceMemberKey]);
            if (mappings.__forAllMembers) {
              return mappings.__forAllMembers(this.__destinationValue, this.__key, value);
            } else {
              return this.__destinationValue[this.__key] = value;
            }
          }
        };
        if (!mappings) {
          throw "Не найден соответствующий маппинг из источника " + sourceKey + " в получателя " + destinationKey;
        }
        mapItem = function(destinationValue, sourceValue) {
          var value;
          for (key in destinationValue) {
            if (!destinationValue.hasOwnProperty(key)) {
              continue;
            }
            if (mappings.hasOwnProperty(key) && mappings[key]) {
              if (typeof mappings[key] === "function") {
                extensions.__key = key;
                extensions.__sourceValue = sourceValue;
                extensions.__destinationValue = destinationValue;
                output = mappings[key].call(extensions);
              } else {
                output = mappings[key];
              }
              if (output) {
                value = getValue(output);
                if (mappings.__forAllMembers) {
                  mappings.__forAllMembers(destinationValue, key, value);
                } else {
                  destinationValue[key] = value;
                }
              }
            } else if (!sourceValue.hasOwnProperty(key)) {
              throw sourceKey + "." + key + " не определено";
            } else {
              value = getValue(sourceValue[key]);
              if (mappings.__forAllMembers) {
                mappings.__forAllMembers(destinationValue, key, value);
              } else {
                destinationValue[key] = value;
              }
            }
          }
        };
        if (sourceValue instanceof Array) {
          if (destinationValue instanceof Array) {
            for (i = j = 0, len = sourceValue.length; j < len; i = ++j) {
              srcVal = sourceValue[i];
              if (!destinationValue[i]) {
                if (typeof destinationKey !== "function") {
                  throw "destinationKey of mapping must be a function in order to initialize the array";
                }
                destinationValue[i] = destinationKey();
              }
              mapItem(destinationValue[i], srcVal);
            }
          } else {
            throw "Cannot map array to object";
          }
        } else if (destinationValue instanceof Array) {
          throw "Cannot map object to array";
        } else {
          mapItem(destinationValue, sourceValue);
        }
      }
    };
  };
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

angular.module('netcity.validation', []).provider('$errorHandler', function() {
  this.$get = function($alerts) {
    return {
      responseHandler: function(response, errMessage) {
        this.errorList = [];
        if (response.status === 401) {
          $alerts.error('Ошибка! Ваш сеанс работы был завершен');
        } else {
          if (response.headers('server-validation-exception') === 'true') {
            this.errorList = Array(response.data.message);
          } else {
            errMessage = response.data.message || errMessage || 'Неожиданная ошибка';
            $alerts.error(errMessage, response.data.details);
          }
        }
      },
      errorList: []
    };
  };
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	@license Angular Treeview version 0.1.6
	ⓒ 2013 AHN JAE-HA http://github.com/eu81273/angular.treeview
	License: MIT
*/

(function (f) {
  f.module("angularTreeview", []).directive("treeModel", function ($compile) {
    return {
      restrict: "A",
      link: function link(b, h, c) {
        var a = c.treeId,
          g = c.treeModel,
          e = c.nodeLabel || "label",
          d = c.nodeChildren || "children",
          e = '<ul><li data-ng-repeat="node in ' + g + '"><i class="collapsed" data-ng-show="node.' + d + '.length && node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="expanded" data-ng-show="node.' + d + '.length && !node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="normal" data-ng-hide="node.' + d + '.length"></i> <span data-ng-class="node.selected" data-ng-click="' + a + '.selectNodeLabel(node)">{{node.' + e + '}}</span><div data-ng-hide="node.collapsed" data-tree-id="' + a + '" data-tree-model="node.' + d + '" data-node-id=' + (c.nodeId || "id") + " data-node-label=" + e + " data-node-children=" + d + "></div></li></ul>";
        a && g && (c.angularTreeview && (b[a] = b[a] || {}, b[a].selectNodeHead = b[a].selectNodeHead || function (a) {
          a.collapsed = !a.collapsed;
        }, b[a].selectNodeLabel = b[a].selectNodeLabel || function (c) {
          b[a].currentNode && b[a].currentNode.selected && (b[a].currentNode.selected = void 0);
          c.selected = "selected";
          b[a].currentNode = c;
        }), h.html('').append($compile(e)(b)));
      }
    };
  });
})(angular);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

angular.module('irtech.netcity.em.statreports.common', []).factory('indicatorsRepository', function($http, $dialogs, $alerts, $showerModalDialog) {
  var longWork, notify, showError;
  showError = function(error) {
    var errorMessage;
    if (error.data) {
      errorMessage = error.data.message;
      if (!errorMessage) {
        errorMessage = "Ошибка";
      }
      if (error.data.details) {
        errorMessage = errorMessage + "(" + error.data.details + ")";
      }
    } else {
      errorMessage = "Ошибка";
    }
    return $alerts.error(errorMessage);
  };
  notify = function(action, message) {
    action.then(function() {
      return $alerts.success(message);
    }, function(error) {
      return showError(error);
    });
    return action;
  };
  longWork = function(work, message) {
    $showerModalDialog.show();
    work["finally"](function() {
      return $showerModalDialog.close();
    });
    return work;
  };
  return {
    calculators: {
      get: function(indicatorLevel, indicatorValueType) {
        return longWork($http.get("/webapi/calculators/?indicatorLevel=" + indicatorLevel + "&valueType=" + indicatorValueType));
      }
    },
    indicators: {
      getPredefinedGroups: function(indicatorLevel) {
        return longWork(notify($http.get("/webapi/indicators/predefinedGroups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorGroupsWasLoaded));
      }
    },
    filters: {
      getChildEMs: function() {
        return longWork($http.get("/webapi/em/childEMs"));
      },
      getFuncTypes: function(emId) {
        return longWork($http.get("/webapi/em/" + emId + "/funcTypes"));
      }
    },
    educInstitutions: {
      get: function() {
        return longWork(notify($http.get("/webapi/em/educInstitutions"), language.Generic.StatReports.kEducInstitutionsWasLoaded));
      }
    },
    educManagements: {
      get: function() {
        return longWork(notify($http.get("/webapi/em/educManagements"), language.Generic.StatReports.kSubEmListWasLoaded));
      }
    },
    educInstIndicators: {
      get: function(indicatorGroupId) {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId), language.Generic.StatReports.kIndicatorsWasLoaded));
      },
      getGroups: function() {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/groups")));
      },
      getIndicatorValues: function(indicatorGroupId) {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId + "/values"), language.Generic.StatReports.kIndicatorsDataWasLoaded));
      },
      saveIndicatorValues: function(indicatorValues, groupIndicatorId) {
        return notify($http.post("/webapi/educInstitution/indicators/" + groupIndicatorId + "/values", indicatorValues), language.Generic.StatReports.kChangesWasSaved);
      },
      approveIndicatorGroups: function(indicatorGroupIds) {
        return notify($http.post("/webapi/educInstitution/indicators/values/approve", indicatorGroupIds), language.Generic.StatReports.kIndicatorGroupSuccessApproved);
      },
      approveIndicatorGroup: function(indicatorGroupId, syId, accessType, text) {
        return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values/approve/?accessType=" + accessType + "&syId=" + syId), text));
      },
      disapproveIndicatorsGroups: function(indicatorGroupId, syId) {
        return notify($http.post("/webapi/educInstitution/indicators/values/approve", indicatorGroupIds), language.Generic.StatReports.kDataOpenedForEditing);
      },
      getCalculatedIndicatorValues: function(indicatorGroupId) {
        return longWork(notify($http.get("/webapi/educInstitution/indicators/" + indicatorGroupId + "/values/calculated"), language.Generic.StatReports.kCalcWasSuccess));
      }
    },
    emIndicators: {
      subscribed: {
        get: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId), language.Generic.StatReports.kIndicatorsWasLoaded), language.Generic.StatReports.kIndicatorListLoading);
        },
        getGroups: function() {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/groups")));
        },
        getIndicatorGroup: function(indicatorGroupId, indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/groups/" + indicatorGroupId + "/?indicatorLevel=" + indicatorLevel)));
        },
        saveIndicatorValues: function(indicatorValues, groupIndicatorId) {
          return notify($http.post("/webapi/em/indicators/subscribed/" + groupIndicatorId + "/values", indicatorValues), language.Generic.StatReports.kChangesWasSaved);
        },
        approveIndicatorGroups: function(indicatorGroupIds) {
          return notify($http.post("/webapi/em/indicators/subscribed/values/approve", indicatorGroupIds), language.Generic.StatReports.kIndicatorGroupSuccessApproved);
        },
        approveIndicatorGroup: function(indicatorGroupId, emId, accessType, text) {
          return notify($http.get("/webapi/em/" + emId + "/indicators/subscribed/" + indicatorGroupId + "/values/approve/?accessType=" + accessType), text);
        },
        getIndicatorValues: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values"), language.Generic.StatReports.kIndicatorsDataWasLoaded));
        },
        getCalculatedIndicatorValues: function(indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/subscribed/" + indicatorGroupId + "/values/calculated"), language.Generic.StatReports.kCalcWasSuccess));
        }
      },
      published: {
        get: function(indicatorLevel, indicatorGroupId) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + (indicatorGroupId ? indicatorGroupId + '/' : '') + "?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorListLoading));
        },
        getGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        getRootGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/roots/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        getRegionRootGroups: function(indicatorLevel) {
          return longWork(notify($http.get("/webapi/em/indicators/published/regionGroups/?indicatorLevel=" + indicatorLevel), language.Generic.StatReports.kIndicatorsInfoWasLoaded));
        },
        renumber: function(numbers) {
          return $http.post("/webapi/em/indicators/published/renumber", numbers);
        },
        regionPublish: function(indicatorLevel) {
          return longWork($http.post("/webapi/em/indicators/published/regionpublish/?indicatorLevel=" + indicatorLevel));
        },
        getIndicatorValues: function(indicatorGroupId, indicatorLevel) {
          var src;
          src = indicatorLevel === 0 ? "educInst" : "em";
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/values/" + src), language.Generic.StatReports.kIndicatorsDataWasLoaded));
        },
        getEmAccessJournal: function(indicatorGroupId, funcTypeId) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/emAccessJournal")));
        },
        getEducInstAccessJournal: function(indicatorGroupId, funcTypeId, emId) {
          return longWork(notify($http.get("/webapi/em/indicators/published/groups/" + indicatorGroupId + "/educInstAccessJournal/?eoFuncType=" + funcTypeId + "&emId=" + emId)));
        },
        editExplanation: function(indicatorGroupInfo) {
          return longWork($http.post("/webapi/em/indicators/published/edit/explanation", indicatorGroupInfo));
        },
        add: function(indicator) {
          return longWork($http.put("/webapi/em/indicators/published", indicator));
        },
        update: function(indicator) {
          return longWork(notify($http.post("/webapi/em/indicators/published", indicator), language.Generic.StatReports.kIndicatorWasSaved));
        },
        remove: function(indicatorId) {
          return longWork($http["delete"]("/webapi/em/indicators/published/" + indicatorId));
        }
      }
    }
  };
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

angular.module('irtech.netcity.em.statreports.common').controller('FillIndicators.View.Common', function($scope, fillIndicatorsRepository, $alerts, $dialogs, $errorHandler, $collectionHelper, $appLoader) {
  var fillCalculatedValues, initIndicatorGroups, initIndicators, mappingAddValue, mappingToIndicatorValue;
  $scope.bDataWasChanged;
  $scope.language = language;

  /* mappingAddValue - добавляет ко всем объектам indicator свойство Value */
  mappingAddValue = function(indicatorList) {
    return $collectionHelper.treeForEach(indicatorList, function(ind) {
      return ind.subIndicators;
    }, function(ind) {
      var indicatorValue;
      indicatorValue = $scope.indicatorValuesIndexer[ind.id];
      if (typeof indicatorValue !== 'undefined') {
        return ind.value = indicatorValue.value;
      }
    });
  };
  mappingToIndicatorValue = function(list) {
    return _.map(list, function(indicator) {
      return {
        indicatorId: indicator.id,
        value: indicator.value
      };
    });
  };
  $scope.existsIndicatorGroups = function() {
    return typeof $scope.indicatorGroupsList !== 'undefined' && $scope.indicatorGroupsList.length > 0;
  };

  /*Подгружается список индикаторов и их значений */
  initIndicators = function() {
    $scope.bDataWasChanged = false;
    if ($scope.existsIndicatorGroups()) {
      fillIndicatorsRepository.getIndicatorValues($scope.indicatorGroup.id).then(function(response) {
        $scope.indicatorValuesIndexer = _.indexBy(response.data, "indicatorId");
        fillIndicatorsRepository.get($scope.indicatorGroup.id).then(function(response) {
          $scope.indicatorList = mappingAddValue(response.data);
          $scope.indicator = $scope.indicatorList[0];
          return $scope.isApprovedIndicatorGroup = $scope.indicator.isApproved;
        }, function(response) {
          return $errorHandler.responseHandler(response, language.Generic.StatReports.kErrIndicatorListLoading);
        });
      });
    }
  };
  fillCalculatedValues = function(indicatorGroupId) {
    _.each($scope.indicatorList, function(indicatorGroup, index) {
      if (indicatorGroup.id === indicatorGroupId) {
        $scope.indicatorList[index] = mappingAddValue([$scope.indicatorList[index]])[0];
      }
    });
  };

  /*Загрузка списка групп индикаторов для селекта */
  initIndicatorGroups = function() {
    fillIndicatorsRepository.getIndicatorGroups().then(function(result) {
      $scope.indicatorGroupsList = result.data;
      if (typeof $scope.indicatorGroup === 'undefined' || $scope.indicatorGroup === null) {
        $scope.indicatorGroup = result.data[0];
      } else {
        $scope.indicatorGroup = _.findWhere($scope.indicatorGroupsList, {
          id: $scope.indicatorGroup.id
        });
      }
      $scope.previousIndicator = $scope.indicatorGroup;
      _.each($scope.indicatorGroupsList, function(indicatorGroup) {
        if (indicatorGroup.number === '') {
          indicatorGroup.name = indicatorGroup.name;
        } else {
          indicatorGroup.name = indicatorGroup.number + '. ' + indicatorGroup.name;
        }
        return indicatorGroup;
      });
      initIndicators();
      $appLoader.hide();
    });
  };
  $.extend($scope, {
    calculate: function(indicatorGroupId) {
      return fillIndicatorsRepository.getCalculatedIndicatorValues(indicatorGroupId).then(function(response) {
        $scope.indicatorValuesIndexer = _.indexBy(response.data, "indicatorId");
        fillCalculatedValues(indicatorGroupId);
        return $scope.bDataWasChanged = true;
      }, function(response) {
        return $errorHandler.responseHandler(response, language.Generic.StatReports.kAutomaticCalculationErr);
      });
    },
    inputChange: function() {
      return $scope.bDataWasChanged = true;
    },
    indicatorGroupChange: function() {
      if ($scope.bDataWasChanged) {
        $dialogs.confirm(language.Generic.StatReports.kDataWasChangedContinueWithoutChangingData).then(function() {
          initIndicatorGroups();
        }, function() {
          return $scope.indicatorGroup = $scope.previousIndicator;
        });
      } else {
        initIndicatorGroups();
      }
    },
    prepareSaveData: function() {
      var flatArray, indValues;
      flatArray = $collectionHelper.treeToFlatArray(this.indicatorList, function(ind) {
        return ind.subIndicators;
      });
      indValues = mappingToIndicatorValue(flatArray);
      return _.reject(indValues, function(indValue) {
        return typeof indValue.value === 'undefined' || indValue.value === '' || indValue.value === null;
      });
    },
    approveIndicatorGroup: function(groupId) {
      if ($scope.fillIndicators.$invalid) {
        $alerts.error(language.Generic.StatReports.kEnteredIncorrectData, language.Generic.StatReports.kEnterCorrectDataInRedFields);
        return;
      }
      return $dialogs.confirm(language.Generic.StatReports.kImpossibleMakeChangesAfterApproval).then(function() {
        var saveData;
        if ($scope.bDataWasChanged) {
          saveData = $scope.prepareSaveData();
          return fillIndicatorsRepository.save(saveData, $scope.indicatorGroup.id).then(function(data) {
            $scope.bDataWasChanged = false;
            $scope.approve(groupId);
          }, function(data) {
            $errorHandler.responseHandler(data, language.Generic.StatReports.kSavingError);
            initIndicators();
          });
        } else {
          $scope.approve(groupId);
        }
      });
    },
    approve: function(groupId) {
      fillIndicatorsRepository.approve([groupId]).then(function() {
        return initIndicators();
      }, function(data) {
        $errorHandler.responseHandler(data, language.Generic.StatReports.kErrApproving);
        return initIndicators();
      });
    },
    save: function() {
      var saveData;
      if ($scope.fillIndicators.$invalid) {
        $alerts.error(language.Generic.StatReports.kEnteredIncorrectData, language.Generic.StatReports.kEnterCorrectDataInRedFields);
        return;
      }
      saveData = this.prepareSaveData();
      fillIndicatorsRepository.save(saveData, $scope.indicatorGroup.id).then(function(data) {
        return $scope.bDataWasChanged = false;
      }, function(data) {
        $errorHandler.responseHandler(data, language.Generic.StatReports.kSavingError);
        initIndicators();
      });
    }
  });
  initIndicatorGroups();
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.em.statreports").controller("IndexController", function ($scope, $http, $location, $appLoader) {
  $scope.$parent.page = {
    title: language.Generic.StatReports.kStatReports
  };
  $scope.language = language;
  $scope.data = {
    year: null,
    years: []
  };
  $http.get("/webapi/em/years").then(function (response) {
    $scope.data.years = response.data;
    $scope.data.year = _.findWhere(response.data, {
      id: appContext.globalYearId
    });
    $appLoader.hide();
    $scope.$applyAsync();
  });
  $scope.navigate = function (url, search) {
    if (search) {
      $location.path(url).search(search);
    } else {
      $location.path(url);
    }
  };
  $scope.onYearChange = function () {
    var setYearId = $scope.data.year.id;
    $http.post("/webapi/context/year", setYearId).then(function (response) {
      appContext.globalYearId = setYearId;
    });
  };
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var Indicator, TreeItem,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

TreeItem = (function() {
  function TreeItem(id, name, parent, childs, parameters) {
    this.getParent = function() {
      return parent;
    };
    this.id = id;
    this.name = name;
    this.childs = childs;
    this.parameters = parameters;
  }

  return TreeItem;

})();

Indicator = (function(superClass) {
  extend(Indicator, superClass);

  function Indicator(dto, parent) {
    angular.extend(this, dto);
    Indicator.__super__.constructor.call(this, dto.id, dto.name, parent, dto.subIndicators);
  }

  Indicator.prototype.getFullNumber = function() {
    var parent;
    parent = this.getParent();
    if (parent) {
      return parent.getFullNumber() + '.' + this.number;
    } else {
      return this.number;
    }
  };

  return Indicator;

})(TreeItem);

angular.module('irtech.netcity.em.statreports').controller('Em.Indicators.View', function($scope, indicatorsRepository, $uibModal, $alerts, $collectionHelper, $dialogs, $errorHandler, $routeParams, $appLoader, $http) {
  var $indicatorLevel, transformDto;
  $errorHandler.errorList = [];
  $indicatorLevel = $routeParams.it || 0;
  window.$indicatorLevel = $indicatorLevel;
  $scope.$parent.page = {
    parent: {
      title: language.Generic.StatReports.kStatReports,
      href: "/angular/em/statreports/"
    },
    back: {
      history: true
    },
    title: $indicatorLevel === 0 ? language.Generic.StatReports.kSchoolIndicators : language.Generic.StatReports.kEmIndicators
  };
  transformDto = function(dtos) {
    $collectionHelper.treeTransform(dtos, function(dto, parentDto) {
      return new Indicator(dto, parentDto);
    }, function(dto) {
      return dto.subIndicators;
    });
    return dtos;
  };
  $scope.indicatorGroup = null;
  $scope.indicatorsLoaded = false;
  $scope.regionShowGroup = false;
  $http.get("/webapi/settings", {
    params: {
      id: 410
    }
  }).then(function(response) {
    return $scope.regionShowGroup = response.data === "1";
  });
  $scope.indicatorListEmpty = function() {
    var ref;
    return ((ref = $scope.rootGroups) != null ? ref.length : void 0) === 0;
  };
  $scope.indicatorSelected = function() {
    return $scope.indicatorGroup !== null;
  };
  $.extend($scope, {
    language: language,
    predefinedGroups: [],
    sortableOptions: {
      accept: function(sourceNodeScope, destNodesScope, destIndex) {
        return destNodesScope.isParent(sourceNodeScope);
      },
      dropped: function(event) {
        if (event.source.index === event.dest.index && event.dest.nodesScope === event.source.nodeScope.$parentNodesScope) {
          return;
        }
        _.each(event.dest.nodesScope.$nodes, function(node) {
          return node.$modelValue.number = node.index() + 1;
        });
        $scope.renumber(event.dest.nodesScope.$nodes);
        return true;
      },
      dragStart: function(event) {
        return true;
      },
      dragMove: function(event) {
        return true;
      },
      dragStop: function(event) {
        return true;
      }
    },
    load: function() {
      if (!$scope.indicatorGroup) {
        return;
      }
      $scope.indicatorList = [];
      $scope.indicatorList.push($scope.indicatorGroup);
      $scope.indicatorsLoaded = true;
      return $appLoader.hide();
    },
    renumber: function(nodes) {
      var numbers;
      numbers = _.map(nodes, function(node) {
        return {
          indicatorId: node.$modelValue.id,
          number: node.$modelValue.number
        };
      });
      return indicatorsRepository.emIndicators.published.renumber(numbers).then(function() {
        return $alerts.success(language.Generic.StatReports.kIndicatorsWasSaved);
      })["catch"](function(response) {
        return $errorHandler.responseHandler(response);
      });
    },
    publish: function() {
      return indicatorsRepository.emIndicators.published.regionPublish($indicatorLevel).then(function(response) {
        return $alerts.success(language.Generic.StatReports.kIndicatorsPublishedSuccessfully);
      })["catch"](function(response) {
        return $errorHandler.responseHandler(response);
      });
    },
    del: function(nodeScope) {
      var cfrm, indicator;
      indicator = nodeScope instanceof Indicator ? nodeScope : nodeScope.$modelValue;
      cfrm = indicator.groupId === null ? language.Generic.StatReports.kCfmRemoveReport : language.Generic.StatReports.kCfmRemoveIndicator;
      return $dialogs.confirm(cfrm).then(function(btn) {
        return indicatorsRepository.emIndicators.published.remove(indicator.id).then(function(response) {
          var container, delRootNode, neighborNodes, parent, parentNodesScope;
          if (!(nodeScope instanceof Indicator)) {
            parentNodesScope = nodeScope.$parentNodesScope;
            nodeScope.remove();
          }
          parent = indicator.getParent();
          delRootNode = !parent;
          container = delRootNode ? $scope.rootGroups : parent.subIndicators;
          container = _.without(container, indicator);
          _.each(container, function(neighborInd) {
            if (neighborInd.number > indicator.number) {
              return neighborInd.number--;
            }
          });
          if (delRootNode) {
            $scope.rootGroups = container;
            $scope.indicatorGroup = null;
          } else {
            neighborNodes = _.without(parentNodesScope.$nodes, nodeScope);
            $scope.renumber(neighborNodes);
          }
          return $alerts.success(language.Generic.StatReports.kIndicatorRemoved);
        })["catch"](function(response) {
          return $errorHandler.responseHandler(response);
        });
      });
    },
    addGroup: function(node) {
      var addRootNode, container, modalInstance, newGroup;
      addRootNode = !node;
      container = addRootNode ? $scope.rootGroups : node.subIndicators;
      newGroup = new Indicator({
        subIndicators: [],
        groupId: node != null ? node.id : void 0,
        level: $indicatorLevel,
        isGroup: true,
        number: container.length + 1
      }, node);
      modalInstance = $uibModal.open({
        templateUrl: '/static/dist/app/em/statreports/common/templates/editIndicatorGroup.html',
        controller: 'EmIndicators.EditGroup',
        resolve: {
          group: function() {
            return newGroup;
          }
        }
      });
      modalInstance.result.then(function(createdGroup) {
        createdGroup = transformDto(createdGroup);
        container.push(createdGroup);
        if (addRootNode) {
          $scope.indicatorGroup = createdGroup;
          return $scope.load();
        }
      });
    },
    add: function(node) {
      var container, modalInstance, newIndicator;
      container = node.subIndicators;
      newIndicator = new Indicator({
        groupId: node.id,
        isGroup: false,
        level: $indicatorLevel,
        valueType: 0,
        number: container.length + 1
      }, node);
      modalInstance = $uibModal.open({
        templateUrl: '/static/dist/app/em/statReports/common/templates/editIndicator.html',
        controller: 'EmIndicators.Edit',
        resolve: {
          indicator: function() {
            return newIndicator;
          },
          mode: function() {
            return "add";
          }
        }
      });
      modalInstance.result.then(function(createdIndicator) {
        newIndicator = _.extend(newIndicator, createdIndicator);
        return container.push(newIndicator);
      });
    },
    edit: function(indicator) {
      var modalInstance;
      modalInstance = $uibModal.open({
        templateUrl: '/static/dist/app/em/statReports/common/templates/editIndicator.html',
        controller: 'EmIndicators.Edit',
        resolve: {
          indicator: function() {
            return indicator;
          },
          mode: function() {
            return "edit";
          }
        }
      });
      modalInstance.result.then(function(modifiedIndicator) {
        return indicator = _.extend(indicator, modifiedIndicator);
      });
    },
    editExplanation: function() {
      indicatorsRepository.emIndicators.subscribed.getIndicatorGroup($scope.indicatorGroup.id, $indicatorLevel).then(function(response) {
        var modalInstance;
        $scope.indicatorGroupInfo = response.data;
        modalInstance = $uibModal.open({
          templateUrl: '/static/dist/app/em/statreports/common/templates/editExplanation.html',
          controller: 'Em.Indicators.EditIndicator.EditExplanation',
          resolve: {
            indicatorExplanation: function() {
              return $scope.indicatorGroupInfo.explanation;
            }
          }
        });
        return modalInstance.result.then(function(modifiedIndicatorExplanation) {
          $scope.indicatorGroupInfo.explanation = modifiedIndicatorExplanation;
          return indicatorsRepository.emIndicators.published.editExplanation($scope.indicatorGroupInfo).then(function(response) {
            return $alerts.success(language.Generic.StatReports.kExplanationWasAddedSuccess);
          }, function(response) {
            return $alerts.error(response.data.message);
          });
        });
      }, function(response) {
        return $alerts.error(response.data.message || language.Generic.StatReports.kErrEditExplanation);
      });
    },
    $errorHandler: $errorHandler
  });
  indicatorsRepository.emIndicators.published.getGroups($indicatorLevel).then(function(response) {
    $alerts.success(language.Generic.StatReports.kIndicatorGroupListWasLoaded);
    $scope.rootGroups = transformDto(response.data);
    $scope.indicatorGroup = $scope.rootGroups[0];
    $scope.load();
    $appLoader.hide();
  })["catch"](function(response) {
    return $errorHandler.responseHandler(response);
  });
}).controller('EmIndicators.Edit', function($scope, $alerts, $uibModalInstance, $collectionHelper, indicator, mode, indicatorsRepository, $uiControls, $errorHandler, $dialogs, $q) {
  $errorHandler.errorList = [];
  $.extend($scope, {
    header: mode === "add" ? language.Generic.StatReports.kCreatingIndicator : language.Generic.StatReports.kEditingIndicator,
    editIndicator: _.clone(indicator),
    language: language,
    indicatorValTypes: [
      {
        id: 0,
        name: language.Generic.StatReports.kNumber,
        key: "Numeric"
      }, {
        id: 2,
        name: language.Generic.StatReports.kLogical,
        key: "Bool"
      }
    ],
    buildCalcExp: function() {
      return indicatorsRepository.calculators.get($indicatorLevel, $scope.editIndicator.valueType).then(function(result) {
        var currentCalculatorId, currentParams, transformDto, tree;
        $alerts.success(language.Generic.StatReports.kCalculatorListWasLoaded);
        transformDto = function(dtos) {
          $collectionHelper.treeTransform(dtos, function(dto, parentDto) {
            return new TreeItem(dto.id, dto.name, parentDto, dto.calculators, dto["arguments"]);
          }, function(dto) {
            return dto.calculators;
          });
          return dtos;
        };
        tree = transformDto(result.data);
        if ($scope.editIndicator.calcExpression) {
          currentCalculatorId = $scope.editIndicator.calcExpression.calculatorId;
          if ($scope.editIndicator.calcExpression.params) {
            currentParams = $scope.editIndicator.calcExpression.params;
          }
        }
        return $uiControls.treeSelect(language.Generic.StatReports.kSelectCalculator, tree, {
          childrens: "childs",
          current: currentCalculatorId,
          noText: language.Generic.StatReports.kCalculatorsNotFounded,
          parameters: currentParams
        });
      }, function(response) {
        return $errorHandler.responseHandler(response);
      }).then(function(calcExp) {
        var result;
        result = _.map(calcExp.parameters, function(parameter) {
          var arg;
          return arg = {
            argId: parameter.id,
            value: parameter.value
          };
        });
        $scope.editIndicator.calcExpression = {
          calculatorId: calcExp.id,
          valueType: $scope.editIndicator.valueType,
          params: result
        };
      });
    },
    removeCalcExp: function() {
      $scope.editIndicator.calcExpression = null;
    },
    ok: function(form) {
      var save;
      if (!$scope.editIndicator.name) {
        $dialogs.notify(language.Generic.StatReports.kAttention, language.Generic.Common.kEnterTheName);
        return;
      }
      if (mode === "add") {
        return indicatorsRepository.emIndicators.published.add($scope.editIndicator).then(function(response) {
          $alerts.success(language.Generic.StatReports.kIndicatorAdded);
          $scope.editIndicator = _.extend($scope.editIndicator, response.data);
          return $uibModalInstance.close($scope.editIndicator);
        })["catch"](function(response) {
          return $errorHandler.responseHandler(response);
        });
      } else if (mode === "edit") {
        save = function() {
          return indicatorsRepository.emIndicators.published.update($scope.editIndicator).then(function(response) {
            $scope.editIndicator = _.extend($scope.editIndicator, _.omit(response.data, "subIndicators"));
            return $uibModalInstance.close($scope.editIndicator);
          })["catch"](function(response) {
            return $errorHandler.responseHandler(response);
          });
        };
        if ($scope.editIndicator.valueType === indicator.valueType) {
          save();
          return;
        }
        return $dialogs.confirm(language.Generic.StatReports.kCfrmChangeIndicatorValueType + '\r\n' + language.Generic.Common.kCfrmContinue).then(function() {
          if (!$scope.editIndicator.calcExpression || $scope.editIndicator.calcExpression.valueType === $scope.editIndicator.valueType) {
            save();
            return;
          }
          return $dialogs.confirm(language.Generic.StatReports.kCfrmIndicatorCalcExpRemove + '\r\n' + language.Generic.Common.kCfrmContinue).then(function() {
            $scope.removeCalcExp();
            return save();
          });
        });
      }
    },
    cancel: function() {
      return $uibModalInstance.dismiss('cancel');
    },
    $errorHandler: $errorHandler
  });
}).controller('EmIndicators.EditGroup', function($scope, $uibModalInstance, $uibModal, $dialogs, $alerts, $collectionHelper, group, indicatorsRepository, $uiControls, $errorHandler) {
  $errorHandler.errorList = [];
  $.extend($scope, {
    predefined: null,
    editGroup: _.clone(group),
    language: language,
    cancelPredefined: function() {
      $scope.predefined = false;
      return $scope.editGroup.subIndicators = null;
    },
    selectPredefined: function() {
      return indicatorsRepository.indicators.getPredefinedGroups($indicatorLevel).then(function(response) {
        var modalInstance;
        modalInstance = $uibModal.open({
          templateUrl: '/static/dist/app/em/statReports/common/templates/selectPredefined.html',
          controller: 'EmIndicators.EditGroup.SelectPredefined',
          resolve: {
            selected: function() {
              return $scope.predefined;
            },
            predefinedIndicators: function() {
              return response.data;
            }
          }
        });
        return modalInstance.result;
      }, function(response) {
        return $errorHandler.responseHandler(response);
      }).then(function(predefinedIndicator) {
        var indicatorCopy;
        $alerts.success(language.Generic.StatReports.kPredefinedIndicatorSelected);
        $scope.predefined = predefinedIndicator;
        indicatorCopy = _.extend({}, predefinedIndicator);
        $collectionHelper.treeForEach(indicatorCopy, function(indicator) {
          return indicator.subIndicators;
        }, function(indicator) {
          indicator.id = 0;
          indicator.isPredefined = false;
          indicator.groupId = 0;
        });
        indicatorCopy.number = $scope.editGroup.number;
        indicatorCopy.groupId = $scope.editGroup.groupId;
        $scope.editGroup = _.extend($scope.editGroup, indicatorCopy);
      });
    },
    ok: function(form) {
      if (!$scope.editGroup.name) {
        $dialogs.notify(language.Generic.StatReports.kAttention, language.Generic.Common.kEnterTheName);
        return;
      }
      return indicatorsRepository.emIndicators.published.add($scope.editGroup).then(function(response) {
        $alerts.success(language.Generic.StatReports.kIndicatorGroupAdded);
        $scope.editGroup = _.extend($scope.editGroup, response.data);
        return $uibModalInstance.close($scope.editGroup);
      })["catch"](function(response) {
        return $errorHandler.responseHandler(response);
      });
    },
    cancel: function() {
      return $uibModalInstance.dismiss('cancel');
    },
    $errorHandler: $errorHandler
  });
}).controller('EmIndicators.EditGroup.SelectPredefined', function($scope, $uibModalInstance, $alerts, selected, predefinedIndicators, $errorHandler) {
  $.extend($scope, {
    language: language,
    model: {
      predefinedIndicators: predefinedIndicators,
      selected: selected
    },
    ok: function(form) {
      return $uibModalInstance.close($scope.model.selected);
    },
    cancel: function() {
      return $uibModalInstance.dismiss('cancel');
    },
    $errorHandler: $errorHandler
  });
  if (!selected) {
    $scope.model.selected = predefinedIndicators[0];
  }
}).controller('Em.Indicators.EditIndicator.EnterParamValues', function($scope, $uibModalInstance, $errorHandler, $alerts, calculator) {
  $errorHandler.errorList = [];
  $.extend($scope, {
    parameters: _.map(calculator.parameters, function(parameter) {
      if (!parameter.value) {
        parameter.value = null;
      }
      return parameter;
    }),
    calculator: calculator,
    $errorHandler: $errorHandler,
    language: language,
    cancel: function() {
      return $uibModalInstance.dismiss('cancel');
    },
    ok: function() {
      if ($scope.fillParameterValues.$invalid) {
        $alerts.error(language.Generic.StatReports.kEnteredIncorrectData, language.Generic.StatReports.kEnterCorrectDataInRedFields);
        return;
      }
      return $uibModalInstance.close($scope.parameters);
    }
  });
}).controller('Em.Indicators.EditIndicator.EditExplanation', function($scope, $uibModalInstance, $alerts, indicatorExplanation) {
  $scope.model = {
    indicatorExplanation: indicatorExplanation
  };
  $.extend($scope, {
    language: language,
    cancel: function() {
      return $uibModalInstance.dismiss('cancel');
    },
    ok: function() {
      return $uibModalInstance.close($scope.model.indicatorExplanation);
    }
  });
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.em.statreports").factory("fillIndicatorsRepositoryEm", function (indicatorsRepository) {
  var baseRep = indicatorsRepository.emIndicators.subscribed;
  return {
    get: function get(indicatorGroupId) {
      return baseRep.get(indicatorGroupId);
    },
    save: function save(indicatorValues, groupIndicatorId) {
      return baseRep.saveIndicatorValues(indicatorValues, groupIndicatorId);
    },
    approve: function approve(arrIndicatorGroups) {
      return baseRep.approveIndicatorGroups(arrIndicatorGroups);
    },
    getIndicatorGroups: function getIndicatorGroups() {
      return baseRep.getGroups();
    },
    getIndicatorValues: function getIndicatorValues(indicatorGroupId) {
      return baseRep.getIndicatorValues(indicatorGroupId);
    },
    getCalculatedIndicatorValues: function getCalculatedIndicatorValues(indicatorGroupId) {
      return baseRep.getCalculatedIndicatorValues(indicatorGroupId);
    }
  };
}).controller("FillIndicators.View.Em", function ($scope, $alerts, $dialogs, $errorHandler, $collectionHelper, $controller, fillIndicatorsRepositoryEm) {
  $scope.$parent.page = {
    parent: {
      title: language.Generic.StatReports.kStatReports,
      href: "/angular/em/statreports/"
    },
    back: {
      history: true
    },
    title: language.Generic.StatReports.kFillingStatIndicators
  };

  //наследование от базового контроллера
  $controller("FillIndicators.View.Common", {
    $scope: $scope,
    fillIndicatorsRepository: fillIndicatorsRepositoryEm,
    $alerts: $alerts,
    $dialogs: $dialogs,
    $errorHandler: $errorHandler,
    $collectionHelper: $collectionHelper
  });
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

angular.module('irtech.netcity.em.statreports').factory('relevanceDataRepository', function(indicatorsRepository) {
  var baseRep;
  baseRep = indicatorsRepository.emIndicators.subscribed;
  return {
    get: function(indicatorGroupId) {
      return baseRep.get(indicatorGroupId);
    },
    save: function(indicatorValues, groupIndicatorId) {
      return baseRep.saveIndicatorValues(indicatorValues, groupIndicatorId);
    },
    approve: function(arrIndicatorGroups) {
      return baseRep.approveIndicatorGroups(arrIndicatorGroups);
    },
    getIndicatorGroups: function() {
      return baseRep.getGroups();
    },
    getIndicatorValues: function(indicatorGroupId) {
      return baseRep.getIndicatorValues(indicatorGroupId);
    },
    getCalculatedIndicatorValues: function(indicatorGroupId) {
      return baseRep.getCalculatedIndicatorValues(indicatorGroupId);
    }
  };
}).controller('RelevanceData.View', function($scope, indicatorsRepository, $alerts, $dialogs, $errorHandler, $collectionHelper, $appLoader) {
  var loadEMs, loadFuncTypes, loadGroups, refreshFilters;
  $scope.language = language;
  $scope.$parent.page = {
    parent: {
      title: language.Generic.StatReports.kStatReports,
      href: "/angular/em/statreports/"
    },
    back: {
      history: true
    },
    title: language.Generic.StatReports.kRelevanceData
  };
  $scope.cnstApprovedValues = 1;
  $scope.cnstDisapprovedValues = 2;
  $scope.indicatorLevels = [
    {
      name: language.Generic.StatReports.kEducInst,
      value: 0
    }, {
      name: language.Generic.StatReports.kEducManagements,
      value: 1
    }
  ];
  $scope.reportGroups = [
    {
      name: language.Generic.StatReports.kMunicipalReports,
      value: 0
    }, {
      name: language.Generic.StatReports.kRegionReports,
      value: 1
    }
  ];
  $scope.indicatorLevel = $scope.indicatorLevels[1];
  $scope.reportGroup = $scope.reportGroups[0];
  $scope.indicatorAccessJournals = [];
  $scope.show = function() {
    if (typeof $scope.indicatorGroup === 'undefined' || $scope.indicatorGroup === null) {
      $alerts.info(language.Generic.StatReports.kNotSelectedIndicatorGroups);
      return;
    }
    if ($scope.indicatorLevel.value === 0) {
      indicatorsRepository.emIndicators.published.getEducInstAccessJournal($scope.indicatorGroup.id, $scope.funcType.id, $scope.em.id).then(function(response) {
        $scope.indicatorAccessJournals = response.data;
      });
    } else {
      indicatorsRepository.emIndicators.published.getEmAccessJournal($scope.indicatorGroup.id).then(function(response) {
        $scope.indicatorAccessJournals = response.data;
      });
    }
  };
  $scope.showAuthorAndDate = function(author, date) {
    var result;
    result = '';
    if (date !== null) {
      result = date;
    }
    if (author !== null) {
      result += ' ' + author;
    }
    return result;
  };
  $scope.approveEm = function(emId, accessType) {
    var text;
    text = accessType === $scope.cnstApprovedValues ? language.Generic.StatReports.kIndicatorGroupSuccessApproved : language.Generic.StatReports.kDataOpenedForEditing;
    return indicatorsRepository.emIndicators.subscribed.approveIndicatorGroup($scope.indicatorGroup.id, emId, accessType, text).then(function(response) {
      return $scope.show();
    }, function(response) {
      $errorHandler.responseHandler(response, language.Generic.StatReports.kErrApproving);
      return $scope.show();
    });
  };
  $scope.approveEducInst = function(syId, accessType) {
    var text;
    text = accessType === $scope.cnstApprovedValues ? language.Generic.StatReports.kIndicatorGroupSuccessApproved : language.Generic.StatReports.kDataOpenedForEditing;
    return indicatorsRepository.educInstIndicators.approveIndicatorGroup($scope.indicatorGroup.id, syId, accessType, text).then(function(response) {
      return $scope.show();
    }, function(response) {
      $errorHandler.responseHandler(response, language.Generic.StatReports.kErrApproving);
      return $scope.show();
    });
  };
  loadGroups = function() {
    var getGroups;
    if ($scope.reportGroup.value === 1) {
      getGroups = indicatorsRepository.emIndicators.published.getRegionRootGroups;
    } else {
      getGroups = indicatorsRepository.emIndicators.published.getRootGroups;
    }
    return getGroups($scope.indicatorLevel.value).then(function(response) {
      return $scope.rootGroups = response.data;
    }, $appLoader.hide(), function(response) {
      return $errorHandler.responseHandler(response);
    });
  };
  loadEMs = function() {
    if ($scope.indicatorLevel.value !== $scope.indicatorLevels[0].value) {
      return;
    }
    return indicatorsRepository.filters.getChildEMs().then(function(response) {
      $scope.ems = [
        {
          id: -1,
          name: language.Generic.Common.kAll
        }
      ];
      $scope.ems = _.union($scope.ems, response.data);
      return $scope.em = $scope.ems[0];
    }, function(response) {
      return $errorHandler.responseHandler(response);
    });
  };
  loadFuncTypes = function() {
    var currEmId;
    if ($scope.indicatorLevel.value !== $scope.indicatorLevels[0].value) {
      return;
    }
    currEmId = typeof $scope.em === 'undefined' ? -1 : $scope.em.id;
    return indicatorsRepository.filters.getFuncTypes(currEmId).then(function(response) {
      $scope.funcTypes = [
        {
          id: -1,
          name: language.Generic.Common.kAll
        }
      ];
      $scope.funcTypes = _.union($scope.funcTypes, response.data);
      return $scope.funcType = $scope.funcTypes[0];
    }, function(response) {
      return $errorHandler.responseHandler(response);
    });
  };
  refreshFilters = function() {
    $scope.indicatorGroup = null;
    $scope.indicatorAccessJournals = [];
    loadGroups();
    return loadEMs();
  };
  $scope.$watch('indicatorLevel', function() {
    return refreshFilters();
  });
  $scope.$watch('reportGroup', function() {
    return refreshFilters();
  });
  return $scope.$watch('em', function() {
    return loadFuncTypes();
  });
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

angular.module('irtech.netcity.em.statreports').controller('EmStatReports.View', function($scope, $alerts, $dialogs, $collectionHelper, indicatorsRepository, $errorHandler, wpt, $appLoader) {
  var FlatData, IndicatorInfo, getIndicatorLevelName, levels, loadGroups, options, recurs;
  $scope.language = language;
  $('body').addClass("claro");
  $scope.$parent.page = {
    parent: {
      title: language.Generic.StatReports.kStatReports,
      href: "/angular/em/statreports/"
    },
    back: {
      history: true
    },
    title: language.Generic.StatReports.kViewStatIndicatorData
  };
  IndicatorInfo = (function() {
    function IndicatorInfo(dto, parent) {
      this.getParent = function() {
        return parent;
      };
      angular.extend(this, dto);
    }

    IndicatorInfo.prototype.getFullNumber = function() {
      var parent;
      parent = this.getParent();
      if (parent) {
        return parent.getFullNumber() + '.' + this.number;
      } else {
        return this.number;
      }
    };

    return IndicatorInfo;

  })();
  levels = [];
  recurs = function(indicatorInfo, levels) {
    var parent;
    parent = indicatorInfo.getParent();
    if (parent) {
      recurs(parent, levels);
    }
    return levels.push(indicatorInfo.name);
  };
  getIndicatorLevelName = function(depth) {
    if (depth > 0) {
      return language.Generic.StatReports.kStatReportIndicatorGroupLevel + ' ' + depth;
    } else {
      return language.Generic.StatReports.kStatReportIndicatorGroupTitle;
    }
  };
  $scope.dataLoaded = false;
  FlatData = (function() {
    function FlatData(dto) {
      var educInstInfo, emInfo, i, index, indicator, j, len, len1, levelName, ref;
      indicator = $scope.$indicatorsIndex[dto.indicatorId];
      if (dto.educInstId) {
        educInstInfo = $scope.educInstitutions[dto.educInstId];
        if (educInstInfo) {
          this["Регион"] = educInstInfo.stateName;
          this["Город"] = educInstInfo.cityName;
          this["УО"] = educInstInfo.emName;
          this["Функциональность ОО"] = educInstInfo.functionalityName;
          this["Тип ОО"] = educInstInfo.typeName;
          this["ОО"] = educInstInfo.educInstName;
        }
      } else if (dto.emId) {
        emInfo = $scope.educManagements[dto.emId];
        this["Регион"] = emInfo.stateName;
        this["УО"] = emInfo.emName;
      }
      this["Значение"] = dto.value;
      ref = $scope.levels;
      for (i = 0, len = ref.length; i < len; i++) {
        levelName = ref[i];
        this[levelName] = "";
      }
      levels = [];
      recurs(indicator, levels);
      for (index = j = 0, len1 = levels.length; j < len1; index = ++j) {
        levelName = levels[index];
        this[getIndicatorLevelName(index)] = levelName;
      }
    }

    return FlatData;

  })();
  $scope.indicatorLevels = [
    {
      name: language.Generic.StatReports.kEducInst,
      value: 0
    }, {
      name: language.Generic.StatReports.kEducManagements,
      value: 1
    }
  ];
  $scope.reportGroups = [
    {
      name: language.Generic.StatReports.kMunicipalReports,
      value: 0
    }, {
      name: language.Generic.StatReports.kRegionReports,
      value: 1
    }
  ];
  $scope.educInstitutions = {};
  $scope.educManagements = {};
  $scope.$indicatorsIndex = {};
  loadGroups = function() {
    var getGroups;
    if ($scope.reportGroup.value === 1) {
      getGroups = indicatorsRepository.emIndicators.published.getRegionRootGroups;
    } else {
      getGroups = indicatorsRepository.emIndicators.published.getRootGroups;
    }
    return getGroups($scope.indicatorLevel.value).then(function(response) {
      $scope.rootGroups = response.data;
      return $appLoader.hide();
    })["catch"](function(response) {
      return $errorHandler.responseHandler(response);
    });
  };
  $scope.reportGroup = $scope.reportGroups[0];
  $scope.indicatorLevel = $scope.indicatorLevels[0];
  $scope.$watch('indicatorLevel', loadGroups);
  indicatorsRepository.educInstitutions.get().then(function(response) {
    return $scope.educInstitutions = _.indexBy(response.data, "educInstId");
  })["catch"](function(response) {
    return $errorHandler.responseHandler(response);
  });
  indicatorsRepository.educManagements.get().then(function(response) {
    return $scope.educManagements = _.indexBy(response.data, "emId");
  })["catch"](function(response) {
    return $errorHandler.responseHandler(response);
  });
  options = {
    customOptions: {
      locale: 'ru',
      uiFlags: {
        menuBtn: 0,
        dataSourceBtn: 0,
        languageSwitchBtn: 0,
        helpBtn: 0,
        aboutBtn: 0,
        openWptMenu: 0,
        saveWptMenu: 0,
        sourceDataMenu: 0,
        settingMenu: 0,
        nonEmptyBtn: 0,
        mdxBtn: 0,
        pivotFieldsPaneBtn: 1,
        positionPivotContentBtn: 1,
        gridOptionBtn: 1,
        gridStyleBtn: 1,
        gridZoomBtn: 1,
        gridFullScreenBtn: 1,
        gridExportExcelBtn: 1,
        chartOptionBtn: 1,
        chartZoomBtn: 1,
        chartFullScreenBtn: 1,
        csvGridSizeBtn: 1,
        csvGridZoomBtn: 1,
        csvGridExportExcelBtn: 1
      },
      expandRows: 1,
      expandCols: 1,
      pivotLayout: 2,
      grid: {
        showColSubtotals: 0,
        showColTotals: 0,
        compactForm: 0
      }
    }
  };
  $scope.wpt = $scope.$parent.wpt || new wpt(options, "wpt-container");
  $scope.$parent.wpt = $scope.wpt;
  $scope.dataLoaded = false;
  $.extend($scope, {
    "export": function() {
      if (!$scope.indicatorGroup) {
        $dialogs.notify(language.Generic.StatReports.kAttention, language.Generic.StatReports.kMustSelectIndicatorGroup);
        return;
      }
      return postTo({
        path: "/webapi/em/indicators/published/groups/" + $scope.indicatorGroup.id + "/report",
        method: "GET",
        formParams: {
          download: true
        }
      });
    },
    exportAll: function() {
      var ref;
      if (((ref = $scope.rootGroups) != null ? ref.length : void 0) === 0) {
        $dialogs.notify(language.Generic.StatReports.kAttention, language.Generic.StatReports.kIndicatorGroupListIsEmpty);
        return;
      }
      return postTo({
        path: "/webapi/em/indicators/published/groups/report/" + $scope.indicatorLevel.value,
        method: "GET",
        formParams: {
          download: true
        }
      });
    },
    show: function() {
      var indicatorInfoLoad;
      if (!$scope.indicatorGroup) {
        $dialogs.notify(language.Generic.StatReports.kAttention, language.Generic.StatReports.kMustSelectIndicatorGroup);
        return;
      }
      indicatorInfoLoad = indicatorsRepository.emIndicators.published.get($scope.indicatorLevel.value, $scope.indicatorGroup.id).then(function(response) {
        $scope.$indicatorsIndex = {};
        return $collectionHelper.treeTransform(response.data, function(dto, parentDto) {
          var indInfo;
          indInfo = new IndicatorInfo(dto, parentDto);
          $scope.$indicatorsIndex[indInfo.id] = indInfo;
          return indInfo;
        }, function(item) {
          return item.subIndicators;
        });
      });
      indicatorsRepository.emIndicators.published.getIndicatorValues($scope.indicatorGroup.id, $scope.indicatorLevel.value).then(function(response) {
        $scope.indicatorsValues = response.data;
        return indicatorInfoLoad.then(function() {
          var cols, dataFields, depthLevel, i, ind, indicatorInfo, j, len, level, levelName, ref, ref1, rows, wptData;
          $scope.dataLoaded = true;
          indicatorInfo = $scope.$indicatorsIndex[$scope.indicatorGroup.id];
          $scope.indicatorGroupDepth = 0;
          $collectionHelper.treeForEach(indicatorInfo, function(ind) {
            return ind.subIndicators;
          }, function(ind) {
            var parent;
            parent = ind.getParent();
            if (parent != null ? parent.depth : void 0) {
              ind.depth = parent.depth + 1;
            } else {
              ind.depth = 1;
            }
            if (ind.depth > $scope.indicatorGroupDepth) {
              return $scope.indicatorGroupDepth = ind.depth;
            }
          });
          $scope.levels = [];
          for (depthLevel = i = 0, ref = $scope.indicatorGroupDepth - 1; 0 <= ref ? i <= ref : i >= ref; depthLevel = 0 <= ref ? ++i : --i) {
            levelName = getIndicatorLevelName(depthLevel);
            $scope.levels.push(levelName);
          }
          $scope.flatData = _.chain($scope.indicatorsValues).map(function(dto) {
            return new FlatData(dto);
          }).filter(function(flat) {
            return flat["Регион"];
          }).value();
          dataFields = _.keys(_.first($scope.flatData));
          $scope.CsvFields = _.union(dataFields, $scope.levels);
          $scope.CsvData = _.map($scope.flatData, function(flat) {
            return _.toArray(flat);
          });
          cols = [];
          ref1 = $scope.levels;
          for (ind = j = 0, len = ref1.length; j < len; ind = ++j) {
            level = ref1[ind];
            cols.unshift(dataFields.length - ind - 1);
          }
          if ($scope.indicatorLevel.value === 0) {
            rows = [2, 5];
          } else {
            rows = [0, 1];
          }
          wptData = {
            format: "WPT",
            version: "1.0",
            mode: "CSV",
            data: $scope.CsvData,
            fields: $scope.CsvFields,
            rows: rows,
            cols: cols,
            values: [
              {
                id: 1,
                label: "Значение показателей",
                fieldIndex: dataFields.length - $scope.levels.length - 1,
                stats: "Sum",
                showValueAs: 0,
                format: {
                  category: "GENERAL",
                  decimal: 2,
                  separatorFlag: true,
                  symbol: "$",
                  symbolSuffix: 0,
                  negative: 0
                }
              }
            ]
          };
          $("#wpt-container").show();
          $scope.wpt.setCsvData($scope.CsvFields, $scope.CsvData, wptData);
        });
      })["catch"](function(response) {
        return $errorHandler.responseHandler(response);
      });
    }
  });
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WptInitializer = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var WptInitializer = /*#__PURE__*/function () {
  function WptInitializer() {
    _classCallCheck(this, WptInitializer);
  }
  _createClass(WptInitializer, [{
    key: "init",
    value: function init() {
      window.require(["wpt/WebPivotTable", "dojo/domReady!"]);
    }
  }, {
    key: "getWpt",
    value: function getWpt() {
      return new Promise(function (resolve, reject) {
        window.require(["wpt/WebPivotTable", "dojo/domReady!"], function (wpt) {
          resolve(wpt);
        });
      });
    }
  }]);
  return WptInitializer;
}();
exports.WptInitializer = WptInitializer;

/***/ })
/******/ ]);
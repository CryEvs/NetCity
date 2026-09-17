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

angular.module('netcity.em.indicators.controllers', []).controller('Em.Indicators.View', function($scope, indicatorsRepository, $uibModal, $alerts, $collectionHelper, $dialogs, $errorHandler) {
  var transformDto;
  $errorHandler.errorList = [];
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
      return $scope.indicatorsLoaded = true;
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
        return $alerts.error(response.data.message);
      });
    },
    del: function(nodeScope) {
      var cfrm, indicator;
      indicator = nodeScope instanceof Indicator ? nodeScope : nodeScope.$modelValue;
      cfrm = indicator.groupId === null ? language.Generic.StatReports.kCfmRemoveReport : language.Generic.StatReports.kCfmRemoveIndicator;
      return $dialogs.confirm(language.Generic.SetupSchoolUI.kConfirm, cfrm).result.then(function(btn) {
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
        templateUrl: '/js/app/em/indicators/templates/editIndicatorGroup.html',
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
        templateUrl: '/js/app/em/indicators/templates/editIndicator.html',
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
        templateUrl: '/js/app/em/indicators/templates/editIndicator.html',
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
          templateUrl: '/js/app/em/indicators/templates/editExplanation.html',
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
        name: language.Generic.StatReports.kNumber
      }, {
        id: 2,
        name: language.Generic.StatReports.kLogical
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
        return $dialogs.confirm(language.Generic.SetupSchoolUI.kConfirm, language.Generic.StatReports.kCfrmChangeIndicatorValueType + '\r\n' + language.Generic.Common.kCfrmContinue).result.then(function() {
          if (!$scope.editIndicator.calcExpression || $scope.editIndicator.calcExpression.valueType === $scope.editIndicator.valueType) {
            save();
            return;
          }
          return $dialogs.confirm(language.Generic.SetupSchoolUI.kConfirm, language.Generic.StatReports.kCfrmIndicatorCalcExpRemove + '\r\n' + language.Generic.Common.kCfrmContinue).result.then(function() {
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
          templateUrl: '/js/app/em/indicators/templates/selectPredefined.html',
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

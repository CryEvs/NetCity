angular.module('netcity.indicators.directives', []).directive("indicatorNodes", function($compile) {
  return {
    restrict: 'A',
    scope: false,
    template: '<td ng-bind-template="{{indicator.fullNumber}} {{indicator.name}}"></td>',
    replace: false,
    link: function(scope, element, attrs) {
      var disabled, indicatorId, indicatorValueType, inputReadonly, isApproved, strElement;
      indicatorValueType = {
        numeric: "Numeric",
        bool: "Bool"
      };
      indicatorId = scope.indicator.id;
      isApproved = scope.$parent.isApprovedIndicatorGroup;
      inputReadonly = bReadonly || isApproved;
      scope.fillIndicators = scope.$parent.fillIndicators;
      scope._inputChange = scope.$parent.inputChange;
      if (scope.indicator.subIndicators !== null) {
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
});

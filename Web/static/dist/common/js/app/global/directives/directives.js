angular.module('netcity.indicators.directives', []).directive("parameterValue", function($compile) {
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

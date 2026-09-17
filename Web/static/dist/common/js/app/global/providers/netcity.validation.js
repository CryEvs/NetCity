angular.module('netcity.validation', []).provider('$errorHandler', function() {
  this.$get = function($alerts) {
    return {
      responseHandler: function(response, errMessage) {
        var _errMessage;
        this.errorList = [];
        if (response.status === 401) {
          $alerts.error('Ошибка! Ваш сеанс работы был завершен');
        } else {
          if (response.headers('server-validation-exception') === 'true' || response.headers('business-logic-exception') === 'true') {
            this.errorList = Array(response.data.message);
          } else {
            _errMessage = 'Неожиданная ошибка';
            if (typeof errMessage !== 'undefined') {
              _errMessage = errMessage;
            }
            $alerts.error(_errMessage, response.data.Details);
          }
        }
      },
      errorList: []
    };
  };
});

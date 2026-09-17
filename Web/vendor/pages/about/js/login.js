var _cookies, ajaxMethods, filter, lngLogin, login_ctor;

lngLogin = {
  kFirstYouShouldSelect: language.Generic.Login.kFirstYouShouldSelect,
  kEmptyAjaxAnswer: language.Generic.Login.kEmptyAjaxAnswer,
  kErrorAjaxListLoading: language.Generic.Login.kErrorAjaxListLoading,
  kFirstYouShouldSelectSchool: language.Generic.Login.kFirstYouShouldSelectSchool,
  kEnterLoginAndPassword: language.Generic.Login.kEnterLoginAndPassword,
  kLoginByECardPossibleViaIEorChrome: language.Generic.Login.kLoginByECardPossibleViaIEorChrome,
  kECardIDWasReset: language.Generic.Login.kECardIDWasReset,
  kECardIDWasRead: language.Generic.Login.kECardIDWasRead
};

ajaxMethods = {
  kPrepareLoginForm: 'kPrepareLoginForm'
};

_cookies = _.chain(($.cookie("TTSLogin") || "").split('&')).map(function(cookie) {
  return cookie.split('=');
}).filter(function(cookieArr) {
  return typeof cookieArr[1] !== "undefined" && cookieArr[1];
}).object().value();

filter = (function() {
  function filter(name1, optional, order, initItemText1) {
    this.name = name1;
    this.optional = optional;
    this.order = order;
    this.initItemText = initItemText1;
  }

  return filter;

})();

({
  getCooketVal: function() {
    var cookie;
    cookie = _.findWhere(_cookies, {
      name: this.name
    });
    return (cookie != null ? cookie.val : void 0) || -999999;
  }
});

login_ctor = function() {
  var NavEnterKeyHandler, _apply, _cacheVer, _constants, _container, _filters, _getAuthData, _initData, _initFilters, _login, _loginAndPass, _onChangeLastElem, _setOptions, _validateFunc, allowEnterPair, onLoginFormReady, onSuccessList, sendAjaxRequest;
  _container = null;
  _onChangeLastElem = null;
  _cacheVer = null;
  _constants = {
    unselectedVal: -999999
  };
  _filters = null;
  _loginAndPass = null;
  _apply = null;
  _validateFunc = null;
  _initFilters = function(rawFilters) {
    _filters = (function() {
      var __filters, _getSelectByName, retObj;
      __filters = rawFilters;
      _getSelectByName = function(name) {
        return $('select[name=' + name + ']', _container);
      };
      retObj = {};
      retObj = _.map(rawFilters, function(filter) {
        return _getSelectByName(filter.name);
      });
      $.extend(retObj, {
        showFilter: function(filterName) {
          return this.getSelectByName(filterName).closest(".row").show();
        },
        hideFilter: function(filterName) {
          return this.getSelectByName(filterName).closest(".row").hide();
        },
        readOnlyFilter: function(filterName) {
          var parent, select, span, text;
          select = this.getSelectByName(filterName);
          parent = select.parent();
          text = $('option:selected', select).text();
          span = $('<span />').text(text);
          parent.append(span);
          return select.hide();
        },
        getNextFilter: function(filterName) {
          filter = this.getByName(filterName);
          return _.find(__filters, function(testFilter) {
            return testFilter.order === filter.order + 1;
          });
        },
        getSelectByName: _getSelectByName,
        getByName: function(name) {
          return _.find(__filters, function(filter) {
            return filter.name === name;
          });
        },
        disableAfter: function(filterName) {
          var curFilter, index, results;
          filter = this.getByName(filterName);
          results = [];
          for (index in __filters) {
            curFilter = __filters[index];
            if (curFilter.order <= filter.order) {
              continue;
            }
            results.push(_filters.getSelectByName(curFilter.name).prop('disabled', true).val(0).show().nextAll().remove());
          }
          return results;
        }
      });
      return retObj;
    })();
    _loginAndPass = $('input[name=UN], input[name=PW]', _container);
    return _apply = $('.button-login:not(.button-login-esia)', _container);
  };
  _setOptions = function(select, items, initItemText) {
    var i, item, jqSelect, len, option;
    jqSelect = $(select);
    jqSelect.html('');
    if (!items || !items.length || items.length <= 0) {
      return;
    }
    option = $('<option />').html(initItemText).attr('value', _constants.unselectedVal);
    jqSelect.append(option);
    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      option = $('<option />').html(item.name).attr('value', item.id);
      $(select).append(option);
    }
    jqSelect.prop('disabled', false);
    return jqSelect.show();
  };
  _initData = function() {
    var _initSuccess, deferred, initData, prepareAction, prepareSuffix;
    deferred = $.Deferred();
    _initSuccess = function(response) {
      var currId, data, firstParam, flt, i, id, items, jqSelect, lastSelect, lastVal, len, name, select, selects;
      data = response;
      selects = $('select', _container);
      lastSelect = $('select:last', _container);
      firstParam = selects.first().attr('id');
      if (data[firstParam].length !== 0) {
        for (i = 0, len = selects.length; i < len; i++) {
          select = selects[i];
          jqSelect = $(select);
          id = jqSelect.attr('id');
          name = jqSelect.attr('name');
          flt = _filters.getByName(name);
          currId = data[name];
          items = data[id];
          _setOptions(select, items, flt.initItemText);
          jqSelect.val(currId);
          if (!items || items.length !== 1) {
            continue;
          }
          if (currId === _constants.unselectedVal) {
            currId = items[0].id;
            jqSelect.val(currId);
            if (lastSelect.attr('id') !== id) {
              sendAjaxRequest(jqSelect);
            } else {
              _filters.readOnlyFilter(name);
            }
            break;
          }
          if (currId !== _constants.unselectedVal) {
            if (flt.optional) {
              _filters.hideFilter(name);
            } else {
              _filters.readOnlyFilter(name);
            }
          }
        }
        lastVal = lastSelect.val();
        if (lastVal && lastVal > _constants.unselectedVal) {
          allowEnterPair(lastSelect);
          if (_onChangeLastElem) {
            _onChangeLastElem(lastSelect);
          }
        }
        allowEnterPair(lastSelect);
      }
      deferred.resolve();
      return onLoginFormReady();
    };
    initData = $.extend({}, _cookies, {
      cacheVer: _cacheVer
    });
    prepareSuffix = _container.attr('id').replace("message", "").replace("-", "");
    prepareAction = '/webapi/prepare' + prepareSuffix + 'loginform';
    jsSubmit({
      action: prepareAction,
      method: "get",
      auth: false,
      defaultErrorHandling: false,
      cache: true,
      data: initData,
      onError: function(response) {
        var msg, ref;
        if (response.status === 0) {
          deferred.reject("canceled");
          return;
        }
        msg = (response != null ? (ref = response.responseJSON) != null ? ref.message : void 0 : void 0) || language.Generic.Common.kUnexpErr;
        window.lalert(msg);
        return deferred.reject(msg);
      },
      onSuccess: _initSuccess
    });
    return deferred.promise();
  };
  sendAjaxRequest = function($changedElement) {
    var strAjaxQuery;
    $('input[type=text], input[type=password]', _container).prop('disabled', true);
    _filters.disableAfter($changedElement.attr('name'));
    _apply.css('display', 'none');
    if ($changedElement.prop("selectedIndex") !== 0) {
      strAjaxQuery = $('select', _container).serialize();
      strAjaxQuery += "&LASTNAME=" + $changedElement.attr("name") + "&cacheVer=" + _cacheVer;
      return jsSubmit({
        action: '/webapi/loginform',
        method: "get",
        cache: true,
        auth: false,
        data: strAjaxQuery,
        onSuccess: onSuccessList
      });
    }
  };
  NavEnterKeyHandler = function(evt) {
    if (evt.which === 13) {
      return _login();
    }
  };
  onLoginFormReady = function() {
    return $(document).trigger("login_form_ready");
  };
  onSuccessList = function(response) {
    var currFilter, currFilterSelect, data, lastFilter, lastFilterSelect;
    data = response;
    lastFilter = _filters.getByName(data.lastElem);
    lastFilterSelect = _filters.getSelectByName(data.lastElem);
    if (lastFilterSelect.children().length === 2) {
      if (lastFilter.optional) {
        _filters.hideFilter(data.lastElem);
      } else {
        _filters.readOnlyFilter(data.lastElem);
      }
    }
    currFilter = _filters.getNextFilter(data.lastElem);
    currFilterSelect = _filters.getSelectByName(currFilter.name);
    _setOptions(currFilterSelect, data.items, currFilter.initItemText);
    currFilterSelect.nextAll().remove();
    if (data.items.length === 1) {
      currFilterSelect.val(data.items[0].id);
      if (_filters.getNextFilter(currFilter.name)) {
        return sendAjaxRequest(currFilterSelect);
      } else {
        _filters.readOnlyFilter(currFilter.name);
        allowEnterPair(currFilterSelect);
        return onLoginFormReady();
      }
    } else {
      _filters.showFilter(currFilter.name);
      return onLoginFormReady();
    }
  };
  _getAuthData = (function(_this) {
    return function(pw) {
      var deferred;
      deferred = $.Deferred();
      jsSubmit({
        action: "/webapi/auth/getdata",
        method: "POST",
        auth: false,
        showProcessing: false
      }).then(function(authData) {
        var pw2;
        pw2 = hexMD5_(authData.salt + hexMD5_(pw.val()));
        pw.val(pw2.substr(0, pw.val().length));
        return deferred.resolve({
          "lt": authData.lt,
          "pw2": pw2,
          "ver": authData.ver
        });
      }).fail(function() {
        return deferred.reject();
      });
      return deferred.promise();
    };
  })(this);
  _login = function(container, validateFunc, addOpts) {
    var processing, pw, user;
    _container = _container || container;
    user = $('[name=UN]', _container);
    pw = $('[name=PW]', _container);
    _validateFunc = typeof _validateFunc === "function" ? _validateFunc : validateFunc;
    addOpts = addOpts || [];
    if (_validateFunc(user, pw)) {
      _container.find("input[name=UN]").blur();
      _container.find("input[name=PW]").blur();
      processing = $.show.processing();
      return _getAuthData(pw).then(function(authData) {
        var authParams;
        authParams = _container.find('select, input').serializeArray();
        authParams.push({
          name: "lt",
          value: authData.lt
        });
        authParams.push({
          name: "pw2",
          value: authData.pw2
        });
        authParams.push({
          name: "ver",
          value: authData.ver
        });
        authParams.push.apply(authParams, addOpts);
        return jsSubmit({
          action: "/webapi/login",
          data: authParams,
          showProcessing: false,
          auth: false,
          defaultErrorHandling: false,
          onError: function(response) {
            var msg, ref;
            processing.close();
            msg = (response != null ? (ref = response.responseJSON) != null ? ref.message : void 0 : void 0) || language.Generic.Common.kUnexpErr;
            return $.show.error(msg).then(function() {
              user.focus();
              return pw.val("");
            });
          }
        }).then(function(response) {
          var data, defOpts;
          if (!response.at) {
            processing.close();
            $.show.error("ошибка авторизации");
            return;
          }
          data = response.requestData || {};
          data.at = response.at;
          defOpts = {
            path: response.entryPoint,
            auth: false,
            nocache: false,
            params: data
          };
          if (response.errorMessage) {
            processing.close();
            $.show.error(response.errorMessage).then(function() {
              var options;
              options = $.extend({}, defOpts, {
                method: "GET"
              });
              delete options.params;
              return postTo(options);
            });
            return;
          }
          return postTo(defOpts);
        }).always(function() {
          return setDBFree();
        });
      }).fail(function() {
        return processing.close();
      });
    }
  };
  allowEnterPair = function($changedElement) {
    if ($changedElement.prop("selectedIndex") !== 0) {
      _loginAndPass.prop('disabled', false);
      return _apply.css('display', 'inline');
    } else {
      _loginAndPass.prop('disabled', true);
      return _apply.css('display', 'none');
    }
  };
  return {
    init: function(cont, filters, validateFunc, cacheVer) {
      var initPromise, onChange;
      _container = cont;
      _initFilters(filters);
      _validateFunc = validateFunc;
      _cacheVer = cacheVer;
      initPromise = _initData();
      onChange = function(elem) {
        if (_onChangeLastElem) {
          _onChangeLastElem(elem);
        }
        return allowEnterPair(elem);
      };
      $('select', _container).prop("selectedIndex", 0);
      $('select:not(:last)', _container).change(function() {
        return sendAjaxRequest($(this));
      });
      $('select:last', _container).change(function() {
        return onChange($(this));
      });
      $('select:first', _container).prop('disabled', false);
      $('select:not(:first)', _container).prop('disabled', true);
      $('input[type=text], input[type=password]', _container).keypress(function(e) {
        return NavEnterKeyHandler(e);
      });
      return initPromise;
    },
    login: _login
  };
};

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
    return (cookie != null ? cookie.val : void 0) || -100;
  }
});

login_ctor = function() {
  var NavEnterKeyHandler, _apply, _constants, _container, _filters, _initData, _initFilters, _login, _loginAndPass, _onChangeLastElem, _setOptions, _submitFunc, allowEnterPair, onLoginFormReady, onSuccessList, sendAjaxRequest;
  _container = null;
  _onChangeLastElem = null;
  _constants = {
    unselectedVal: -100
  };
  _filters = null;
  _loginAndPass = null;
  _apply = null;
  _submitFunc = null;
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
    option = $('<option />').html(initItemText).attr('value', -100);
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
    var _initSuccess, initData;
    _initSuccess = function(response) {
      var currId, firstParam, flt, i, id, items, jqSelect, lastSelect, lastVal, len, name, select, selects;
      selects = $('select', _container);
      lastSelect = $('select:last', _container);
      firstParam = selects.first().attr('id');
      if (response.data[firstParam].length !== 0) {
        for (i = 0, len = selects.length; i < len; i++) {
          select = selects[i];
          jqSelect = $(select);
          id = jqSelect.attr('id');
          name = jqSelect.attr('name');
          flt = _filters.getByName(name);
          currId = response.data[name];
          items = response.data[id];
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
        return onLoginFormReady();
      } else {
        return onLoginFormReady();
      }
    };
    initData = $.extend({}, _cookies, {
      method: "InitLoginForm",
      login: _container.attr('id'),
      t: 1
    });
    return jsSubmit({
      action: '/asp/scripts/ajaxmethods_login.asp',
      method: "get",
      auth: false,
      cache: true,
      data: initData,
      onSuccess: _initSuccess
    });
  };
  sendAjaxRequest = function($changedElement) {
    var strAjaxQuery;
    $('input[type=text], input[type=password]', _container).prop('disabled', true);
    _filters.disableAfter($changedElement.attr('name'));
    _apply.css('display', 'none');
    if ($changedElement.prop("selectedIndex") !== 0) {
      strAjaxQuery = $('select', _container).serialize();
      strAjaxQuery += "&LASTNAME=" + $changedElement.attr("name") + "&method=" + ajaxMethods.kPrepareLoginForm + "&login=" + _container.attr('id');
      return jsSubmit({
        action: '/asp/scripts/ajaxmethods_login.asp',
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
    data = response.data;
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
  _login = function() {
    var form, processing, pw, pw2, user;
    user = $('[name=UN]', _container);
    pw = $('[name=PW]', _container);
    pw2 = $('[name=PW2]', _container);
    if (_submitFunc(user, pw, pw2) && !isDBBusy()) {
      form = $('form', _container)[0];
      form.elements["UN"].blur();
      form.elements["PW"].blur();
      setDBBusy();
      processing = $.show.processing();
      return jsSubmit({
        action: "/webapi/auth/getdata",
        method: "POST",
        auth: false,
        showProcessing: false
      }).then(function(authData) {
        var authParams;
        pw2.val(hexMD5_(authData.salt + hexMD5_(pw.val())));
        pw.val(pw2.val().substr(0, pw.val().length));
        authParams = getFormsParams(form);
        authParams.push({
          name: "lt",
          value: authData.lt
        });
        authParams.push({
          name: "ver",
          value: authData.ver
        });
        return jsSubmit({
          action: "/asp/postlogin.asp",
          data: authParams,
          showProcessing: false,
          auth: false,
          defaultErrorHandling: false,
          onError: function(response) {
            var msg, ref;
            processing.close();
            msg = (response != null ? (ref = response.responseJSON) != null ? ref.message : void 0 : void 0) || 'Ошибка авторизации';
            return $.show.error(msg).then(function() {
              user.focus();
              pw.val("");
              return pw2.val("");
            });
          }
        }).then(function(response) {
          var data;
          if (!response.AT) {
            processing.close();
            $.show.error("Ошибка авторизации");
            return;
          }
          data = response.RequestData || {};
          data.at = response.AT;
          return postTo({
            path: response.EntryPoint,
            nocache: false,
            params: data
          });
        }).always(function() {
          return setDBFree();
        });
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
    init: function(cont, filters, submit, onChangeLastElem) {
      var onChange;
      _container = cont;
      _onChangeLastElem = onChangeLastElem;
      _initFilters(filters);
      _submitFunc = submit;
      _initData();
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
      return $('input[type=text], input[type=password]', _container).keypress(function(e) {
        return NavEnterKeyHandler(e);
      });
    },
    login: _login
  };
};

//# sourceMappingURL=login.js.map

var Back, GetForm, GetLocalEmId, KeyDown, Logout, ShowInDialog, WasSaved, WorkInSystemUpdater, addCheckLockEventToButtons, bIsDBFree, bNewWindow, blockMainWindow, cancel_event, center, checkAreaLength, checkFileExtension, checkForChanges, childWindows, confirmExcel, dataChanged, dataWereChanged, exportToExcel, focusAlert, focusError, getEvent, getFormsParams, getKeyCode, getTargetElement, getVer, heavyAction, isButtonsLock, isDBBusy, isEMailValid, jsSaveForm, jsSubmit, jumpVer, kClosingSes, kDataWereChanged, lalert, leaveAndConfirm, leaveConfirmFunc, maximize, nalert, openExcelCommon, openExcelVersn, openPopupWindow, openSchoolInfo, postTo, processKeyDown, setDBBusy, setDBFree, setFocus, setImgState, shouldProcessKey, showPrintVersion, urlHelper, whenChecked, windows;

kClosingSes = "Сейчас ваш сеанс работы будет завершён";

kDataWereChanged = "Данные были изменены. Вы хотите продолжить без сохранения данных?";

dataWereChanged = false;

bIsDBFree = true;

childWindows = [];

$(document).ready(function() {
  $(".switсh_year").click(function() {
    return $(".switсh_year").toggleClass("go_left");
  });
  $('body').on('click', 'button:not([onclick])', function() {
    var events, handler, handlers, isDblClickHandled;
    isDblClickHandled = $.data(this, 'isDblClickHandled');
    if (isDblClickHandled) {
      return;
    }
    events = $._data(this, 'events');
    if (!events) {
      return;
    }
    handlers = events['click'];
    $.data(this, 'lastClicked', new Date().getTime());
    $(this).click(function(e) {
      var lastClicked, now;
      lastClicked = $.data(this, 'lastClicked');
      now = new Date().getTime();
      if (lastClicked && (now - lastClicked < 200)) {
        return e.stopImmediatePropagation();
      } else {
        return $.data(this, 'lastClicked', now);
      }
    });
    handler = handlers.pop();
    handlers.splice(0, 0, handler);
    return $.data(this, 'isDblClickHandled', true);
  });
  return addCheckLockEventToButtons();
});

addCheckLockEventToButtons = function() {
  var $buttons;
  $buttons = $('button[onclick]');
  $buttons.each(function() {
    var $button, onclickAttr;
    $button = $(this);
    onclickAttr = $button.attr('onclick');
    return $button.attr('onclick', 'if(isButtonsLock()) {return;} ' + onclickAttr);
  });
};

isButtonsLock = (function() {
  var isLock;
  isLock = false;
  return function() {
    if (isLock) {
      return true;
    }
    isLock = true;
    setTimeout(function() {
      return isLock = false;
    }, 200);
    return false;
  };
})();

dataChanged = function() {
  var caller, changedElement, context, event, modalDialog;
  context = $(window);
  caller = dataChanged;
  while (caller) {
    event = caller["arguments"][0];
    if (event instanceof Event || event instanceof $.Event) {
      break;
    } else {
      event = null;
    }
    caller = caller.caller;
  }
  if (event) {
    changedElement = event.target || event.srcElement;
    modalDialog = $(changedElement).closest('div.modal.fade');
    if (modalDialog.length) {
      context = modalDialog;
    }
  }
  return context.prop("dataWereChanged", true);
};

WasSaved = function(text) {
  var opts;
  if (arguments.length === 0) {
    text = wasSavedMsg;
  }
  if (!text || text.length < 1) {
    return;
  }
  if (typeof Storage !== "undefined") {
    if (typeof sessionStorage.showedWasSaved !== "undefined" && _.contains(sessionStorage.showedWasSaved.split(','), pageVer.toString())) {
      return;
    }
    if (typeof sessionStorage.showedWasSaved === "undefined") {
      sessionStorage["showedWasSaved"] = '';
    }
    sessionStorage.showedWasSaved += pageVer + ',';
  }
  opts = {};
  if (arguments[1]) {
    opts = arguments[1];
  }
  if (text.length > 500) {
    opts.width = 600;
  }
  alert(text, opts);
  return dataWereChanged = false;
};

getEvent = function(e) {
  if (!e) {
    e = event;
  }
  return e;
};

cancel_event = function(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
};

getKeyCode = function(e) {
  if (e.which) {
    return e.which;
  }
  return e.keyCode;
};

getTargetElement = function(e) {
  if (e.target) {
    return e.target;
  }
  return e.srcElement;
};

windows = {};

openPopupWindow = function(wnd_to, url, width, height) {
  var winOptions, wnd;
  wnd = windows[wnd_to];
  if (wnd && !wnd.closed && wnd_to !== "_qualityAssessmentAnalytics" && wnd_to !== "_qualityAssessmentAnalyticsEM" && wnd_to !== "_staffAttest") {
    wnd.forceClosing = true;
    wnd.close();
  }
  if (url.lastIndexOf("?") !== -1) {
    url += "&";
  } else {
    url += "?";
  }
  winOptions = {
    url: url + "AT=" + appContext.at + "&VER=" + getVer(),
    name: wnd_to,
    specs: "status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=" + width + ",height=" + height,
    winChild: wnd
  };
  if (wnd && !wnd.closed && (wnd_to === "_qualityAssessmentAnalytics" || wnd_to === "_qualityAssessmentAnalyticsEM")) {
    return wnd.focus();
  } else {
    windowOpen(winOptions);
    wnd = windows[wnd_to] = winOptions.winChild;
    return center(wnd, width, height);
  }
};

center = function(wnd, width, height) {
  var dh, dw;
  if (!wnd || !wnd.screen) {
    return;
  }
  if (bowser.webkit && parseInt(bowser.version) < 20) {
    return;
  }
  dw = (wnd.screen.availWidth - width) / 2;
  dh = (wnd.screen.availHeight - height) / 2;
  return wnd.moveTo(dw, dh);
};

maximize = function(wnd) {
  if (!wnd || !wnd.screen) {
    return;
  }
  wnd.moveTo(0, 0);
  return wnd.resizeTo(wnd.screen.availWidth, wnd.screen.availHeight);
};

whenChecked = function(form, inputName) {
  var checkedCnt, deferred, promise;
  deferred = $.Deferred();
  promise = deferred.promise();
  promise.fail(function() {
    return $.show.message(language.Generic.Common.kErrMsgNoChecks);
  });
  checkedCnt = $("input[name='" + inputName + "']:checkbox:checked", form).length;
  if (checkedCnt > 0) {
    deferred.resolve(checkedCnt);
  } else {
    deferred.reject(checkedCnt);
  }
  return promise;
};

processKeyDown = function(e) {
  var element, keycode;
  e = getEvent(e);
  keycode = getKeyCode(e);
  element = getTargetElement(e);
  if (!shouldProcessKey(e, keycode, element)) {
    return false;
  }
  return KeyDown(e, keycode, element);
};

KeyDown = function(e, keycode, element) {
  return true;
};

Back = null;

shouldProcessKey = function(e, keycode, element) {
  if (keycode === 116) {
    if (document.forms.length > 0) {
      DoSubmit(document.forms[0], "#");
      return false;
    }
  }
  if (element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
    if (keycode === 8) {
      cancel_event(e);
      if (Back) {
        Back();
      }
      return false;
    }
  }
  return true;
};

$(document).bind('keydown', processKeyDown);

lalert = window.alert;

nalert = (function() {
  var deferredArgs;
  deferredArgs = [];
  return function() {
    var activeElementTagName, closeFunc, curDlg, focusElement, key, options;
    focusElement = null;
    curDlg = $('#dialog');
    if (curDlg.length < 1) {
      curDlg = $('<div id="dialog"></div>');
      $('body').append(curDlg);
    } else {
      if (curDlg.dialog("isOpen")) {
        deferredArgs.push(arguments);
        return;
      }
    }
    closeFunc = function() {
      if (focusElement !== null) {
        focusElement.focus();
      }
      if (deferredArgs.length > 0) {
        nalert.apply(this, deferredArgs[0]);
        return deferredArgs.shift();
      }
    };
    options = {
      modal: true,
      autoOpen: false,
      closeOnEscape: true,
      dialogClass: 'alertDialog',
      buttons: {
        "Ok": function() {
          $(this).dialog("close");
        }
      },
      title: language.Generic.Common.kAttention,
      resizable: false,
      close: null,
      bgiframe: false
    };
    if (bowser.msie && /6.0/.test(navigator.userAgent)) {
      options.bgiframe = true;
    }
    curDlg.html(arguments[0]);
    if (typeof arguments[1] !== 'undefined') {
      for (key in arguments[1]) {
        options[key] = arguments[1][key];
      }
    }
    curDlg.dialog(options);
    if (document.activeElement !== null) {
      activeElementTagName = document.activeElement.tagName.toUpperCase();
      if (activeElementTagName === "INPUT") {
        focusElement = document.activeElement;
      }
    }
    curDlg.dialog('open');
    curDlg.bind('dialogclose', function(event) {
      closeFunc();
    });
  };
})();

window.alert = window.nalert;

focusAlert = function(el, msg) {
  return alert(msg).then(function() {
    return setTimeout(function() {
      return el.focus();
    }, 100);
  });
};

focusError = function(el, msg) {
  return $.show.error(msg).then(function() {
    return setTimeout(function() {
      return el.focus();
    }, 100);
  });
};

isDBBusy = function() {
  return !bIsDBFree;
};

setDBBusy = function() {
  return bIsDBFree = false;
};

setDBFree = function() {
  return bIsDBFree = true;
};

getFormsParams = function(forms) {
  var arrAllParams, arrParams, form, j, len;
  arrAllParams = [];
  for (j = 0, len = forms.length; j < len; j++) {
    form = forms[j];
    arrParams = $(form).serializeArray();
    arrAllParams = _.union(arrAllParams, arrParams);
  }
  return arrAllParams;
};

postTo = function(path, params, formParams, auth) {
  var checkFunc, createHiddenField, defparams, fileDownloadCheckTimer, finishDownload, form, key, parameters, vers;
  defparams = {
    path: '',
    method: "POST",
    params: void 0,
    formParams: void 0,
    auth: true,
    nocache: true
  };
  if (typeof path === 'string') {
    parameters = defparams;
    if (path) {
      parameters.path = path;
    }
    if (params) {
      parameters.params = params;
    }
    if (formParams) {
      parameters.formParams = formParams;
    }
    if (auth === false) {
      parameters.auth = false;
    }
  } else {
    parameters = $.extend({}, defparams, path);
  }
  createHiddenField = function(form, key, value) {
    var hiddenField;
    hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", value);
    return form.appendChild(hiddenField);
  };
  form = document.createElement("form");
  form.setAttribute("method", parameters.method);
  form.setAttribute("action", parameters.path);
  if (parameters.formParams !== "undefined") {
    for (key in parameters.formParams) {
      form.setAttribute(key, parameters.formParams[key]);
    }
  }
  parameters.auth = parameters.auth && typeof strATTok !== "undefined";
  if (parameters.auth) {
    createHiddenField(form, 'at', strATTok);
  }
  if (parameters.nocache) {
    vers = getVer().toString();
    createHiddenField(form, 'VER', vers);
  }
  if (parameters.formParams && parameters.formParams.download) {
    finishDownload = function() {
      window.clearInterval(fileDownloadCheckTimer);
      $.cookie('fileDownloadToken', null);
      return $(document).trigger('closeProcessing');
    };
    checkFunc = function() {
      var cookieVal;
      cookieVal = $.cookie('fileDownloadToken');
      if (cookieVal !== vers) {
        return;
      }
      return finishDownload();
    };
    fileDownloadCheckTimer = window.setInterval(checkFunc, 1000);
    $(document).trigger('showProcessing');
  }
  urlHelper.iterateParams(parameters.params, function(name, value) {
    if (parameters.auth && name === 'AT') {
      return;
    }
    createHiddenField(form, name, value);
  });
  document.body.appendChild(form);
  return DoSubmit(form, '');
};

checkForChanges = function() {
  return extDeferred.when(!dataWereChanged || $.show.getConfirmation(kDataWereChanged));
};

leaveConfirmFunc = function() {
  return true;
};

leaveAndConfirm = function() {
  return leaveConfirmFunc();
};

jsSubmit = function(inparams) {
  var deferred, defparams, handle_error, internal_Success, internal_error, jqAjaxParams, parameters, paramsToSend, queryParams, show_error_message, streamInterval, streamPartHandler, streamReadPos, useFormAuth, useformAuth, xhr;
  defparams = {
    form: '',
    action: '',
    auth: true,
    nocache: false,
    method: 'POST',
    data: null,
    queryData: null,
    forceData: null,
    dataType: "JSON",
    showProcessing: false,
    showSuccessMessage: false,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    streamed: false,
    streamReadInterval: 200,
    defaultErrorHandling: true,
    onStreamRead: function(streamPart) {},
    onSuccess: function(response) {},
    onError: function(xhr, message, error) {},
    onComplete: function(xhr, message, error) {},
    rawSettings: null
  };
  parameters = $.extend({}, defparams, inparams);
  paramsToSend = "";
  useFormAuth = false;
  if (parameters.form) {
    useformAuth = parameters.form.elements["AT"] !== void 0;
    if (!inparams.action) {
      parameters.action = parameters.form.action;
    }
    paramsToSend += '&' + $(parameters.form).serialize();
  }
  if (parameters.auth && !useformAuth && parameters.action.indexOf("webapi") === -1) {
    paramsToSend += "&AT=" + strATTok;
  }
  if (parameters.nocache) {
    paramsToSend += "&ver=" + getVer();
  }
  if (parameters.queryData) {
    queryParams = $.param(parameters.queryData);
    if (queryParams.length > 0) {
      if (parameters.action.indexOf("?") === -1) {
        parameters.action += "?" + queryParams;
      } else {
        parameters.action += "&" + queryParams;
      }
    }
  }
  if (parameters.data) {
    if (parameters.contentType === "application/json") {
      if (typeof parameters.data === 'object') {
        paramsToSend = '&' + JSON.stringify(parameters.data);
      }
    } else {
      if (typeof parameters.data === 'string') {
        paramsToSend += '&' + parameters.data;
      } else {
        urlHelper.iterateParams(parameters.data, function(name, value) {
          paramsToSend += '&' + encodeURIComponent(name) + "=" + encodeURIComponent(value);
        });
      }
    }
  }
  if (paramsToSend.length > 0) {
    paramsToSend = paramsToSend.substring(1);
  }
  deferred = $.Deferred();
  internal_error = function(xml, message, error) {
    var authError, msg, ref, ref1;
    if (parameters.showProcessing) {
      $(document).trigger('closeProcessing');
    }
    if (parameters.streamed) {
      clearInterval(streamInterval);
      streamPartHandler();
    }
    if (xml.status === 401) {
      authError = xml.getResponseHeader("auth-error");
      if (authError === 'SessionExpired') {
        show_error_message((ref = language.Generic.Common.kTimeOutOccured4Ajax) != null ? ref : "Ваш сеанс работы был завершен", "/");
      } else {
        show_error_message((ref1 = language.Generic.Common.kErrPageAccess) != null ? ref1 : "Ошибка доступа");
      }
      deferred.reject();
      return;
    } else if (parameters.defaultErrorHandling) {
      msg = null;
      if (xml.responseJSON && xml.responseJSON.message) {
        msg = xml.responseJSON.message;
      }
      if (xml.responseJSON) {
        show_error_message(msg, null, xml.responseJSON.isInformation);
      } else {
        show_error_message(msg);
      }
    }
    parameters.onError(xml, message, error);
    return deferred.reject(xml);
  };
  handle_error = function(response) {
    if (response && response.message) {
      show_error_message(response.message);
    } else {
      show_error_message();
    }
    deferred.reject();
  };
  show_error_message = function(message, redirectUrl, isInformation) {
    var show;
    if (isInformation === void 0) {
      isInformation = null;
    }
    if (message && typeof message === 'string') {
      if (isInformation) {
        show = $.show.message;
      } else {
        show = $.show.error;
      }
      show(message).then(function() {
        if (redirectUrl) {
          return window.location.pathname = redirectUrl;
        }
      });
    } else {
      $.show.error(language.Generic.Common.kUnexpErr).then(function() {
        if (redirectUrl) {
          return window.location.pathname = redirectUrl;
        }
      });
    }
  };
  internal_Success = function(response, textStatus, jqXHR) {
    if (parameters.showProcessing) {
      $(document).trigger('closeProcessing');
    }
    if (parameters.streamed) {
      clearInterval(streamInterval);
      streamPartHandler();
    }
    if (parameters.defaultErrorHandling) {
      if (parameters.dataType !== "JSON") {
        parameters.onSuccess(response);
        deferred.resolve(response);
        return;
      }
      if (typeof response === "undefined") {
        if (jqXHR.status !== 204) {
          handle_error();
        }
      } else if (response.isError) {
        handle_error(response);
        return;
      }
    }
    if (parameters.showSuccessMessage && response.message) {
      $.show.message(response.message);
    }
    parameters.onSuccess(response);
    return deferred.resolve(response);
  };
  if (parameters.showProcessing) {
    $(document).trigger('showProcessing');
  }
  jqAjaxParams = {
    type: parameters.method,
    url: parameters.action,
    contentType: parameters.contentType,
    data: parameters.forceData ? parameters.forceData : paramsToSend,
    dataType: parameters.dataType,
    success: internal_Success,
    error: internal_error,
    complete: parameters.onComplete
  };
  if (parameters.auth && typeof strATTok !== "undefined") {
    jqAjaxParams.headers = {
      at: strATTok
    };
  }
  if (parameters.streamed) {
    xhr = jQuery.ajaxSettings.xhr();
    jqAjaxParams.xhr = function() {
      return xhr;
    };
    streamReadPos = 0;
    streamPartHandler = function() {
      var currentFullReponseText, currentPart, err;
      try {
        currentFullReponseText = xhr.responseText;
        currentPart = currentFullReponseText.substring(streamReadPos);
        if (currentPart) {
          streamReadPos = streamReadPos + currentPart.length;
          parameters.onStreamRead(currentPart);
        }
        return streamReadPos;
      } catch (error1) {
        err = error1;
      }
    };
    streamInterval = setInterval(streamPartHandler, parameters.streamReadInterval);
  }
  if (parameters.rawSettings) {
    jqAjaxParams = $.extend(jqAjaxParams, parameters.rawSettings);
  }
  jQuery.ajax(jqAjaxParams);
  return deferred.promise();
};

jsSaveForm = function(saveForm, data, action) {
  var onSave;
  onSave = function(response) {
    if (response.message) {
      alert(response.message);
    }
    dataWereChanged = false;
    return $(saveForm).rememberState();
  };
  data = data || {};
  return jsSubmit({
    form: saveForm,
    action: action || saveForm.action,
    data: data,
    showProcessing: true,
    onSuccess: onSave
  });
};

urlHelper = (function() {
  var _iterateParams, url;
  url = function(url) {
    var _params, _url;
    _url = url;
    _params = '';
    return {
      url: function() {
        return _url;
      },
      params: function() {
        return _params;
      },
      addParam: function(paramName, paramValue) {
        if (_params.length !== 0) {
          _params += "&";
        }
        _params += encodeURIComponent(paramName) + "=" + encodeURIComponent(paramValue);
      },
      getFullUrl: function() {
        if (_params.length > 0) {
          if (_url.indexOf('?') > 0) {
            return _url + '&' + _params;
          } else {
            return _url + '?' + _params;
          }
        } else {
          return _url;
        }
      }
    };
  };
  _iterateParams = function(params, func) {
    var arrPair, arrParamValues, i, item, j, key, ref;
    if (typeof params === 'string') {
      arrParamValues = params.split('&');
      for (i = j = 0, ref = arrParamValues.length - 1; j <= ref; i = j += 1) {
        arrPair = arrParamValues[i].split('=');
        func(arrPair[0], decodeURIComponent(arrPair[1]));
      }
    } else {
      for (key in params) {
        item = params[key];
        if (item instanceof Array) {
          for (i in item) {
            func(key, item[i]);
          }
        } else if ((item instanceof Object) && typeof item.name !== 'undefined') {
          func(item.name, item.value);
        } else {
          func(key, item);
        }
      }
    }
  };
  return {
    iterateParams: _iterateParams,
    makeUrl: function(in_url, params, withoutObligatory) {
      var retUrl, vers;
      retUrl = new url(in_url);
      if (!withoutObligatory) {
        if (typeof window.strATTok !== "undefined") {
          retUrl.addParam('at', strATTok);
          vers = getVer();
          retUrl.addParam('ver', vers);
        }
      }
      _iterateParams(params, function(name, value) {
        retUrl.addParam(name, value);
      });
      return retUrl.getFullUrl();
    },
    getParameterByName: function(name, url) {
      var regex, results, value;
      if (!url) {
        url = window.location.href;
      }
      name = name.replace(/[\[\]]/g, "\\$&");
      regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      results = regex.exec(url);
      if (!results) {
        return null;
      }
      if (!results[2]) {
        return '';
      }
      value = results[2].replace(/\+/g, " ");
      return decodeURIComponent(value);
    }
  };
})();

getVer = function() {
  var d;
  d = new Date();
  return d.getTime();
};

jumpVer = function(win, page, params) {
  win.location.href = page + "?" + params + '&ver=' + getVer();
};

setFocus = function() {
  var elems, focusElement, windowHeight;
  elems = $('input[type=text]:enabled:visible').not('.date-input,.date input');
  windowHeight = $(window).height();
  if (elems.length > 0) {
    focusElement = $(elems[0]);
    if ((focusElement.height() + focusElement.offset().top) < windowHeight) {
      focusElement.focus();
    }
  }
};

if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

setImgState = function(img, imgId, state) {
  var newImg;
  newImg = new Image();
  if (state === 1) {
    newImg.src = img + '_on.gif';
  } else {
    newImg.src = img + '.gif';
  }
  return document[imgId].src = newImg.src;
};

checkAreaLength = function(elTextArea, nMaxLength, sElementTitle) {
  if (elTextArea.value.length > nMaxLength) {
    alert("Поле '" + sElementTitle + "' должно содержать не более " + nMaxLength + " символов");
    elTextArea.focus();
    return false;
  }
  return true;
};

bNewWindow = false;

Logout = function(bAskConf) {
  if (bAskConf != null) {
    checkForChanges().then(function() {
      return $.show.confirmation("Вы решили выйти из программы?");
    }).then(function() {
      return postTo("/asp/logout.asp");
    });
  } else {
    if (!(typeof appContext !== "undefined" && appContext !== null ? appContext.at : void 0)) {
      return;
    }
    window.open(urlHelper.makeUrl('/asp/logout.asp'));
  }
};

(function() {
  var wasLogouting;
  wasLogouting = false;
  return $(document).ready(function() {
    if ($("body").hasClass("print")) {
      return;
    }
    if ((window.opener != null) && !window.opener.closed) {
      return;
    }
    window.onunload = function(evt) {
      if (wasLogouting) {
        return;
      }
      if (!haveToLogout()) {
        return;
      }
      Logout();
    };
    return $(window).on("beforeunload", function() {
      if (!haveToLogout()) {
        return;
      }
      wasLogouting = true;
      Logout();
    });
  });
})();

heavyAction = function(action, onError) {
  var handleError, successCallBack;
  handleError = function() {
    if (onError) {
      return onError();
    }
  };
  successCallBack = function(response) {
    if (response.isError || !response.data) {
      alert(response.message || language.Generic.Common.kUnexpErr);
      handleError();
      return;
    }
    if (!response.data.isPosible) {
      alert(language.Generic.Common.kMaxHeavySessionsReached);
      handleError();
      return;
    }
    action();
  };
  return jsSubmit({
    action: '/asp/scripts/ajaxmethods.asp',
    data: {
      method: "kHeavySessionIsPosible"
    },
    showProcessing: true,
    defaultErrorHandling: false,
    onSuccess: successCallBack
  });
};

WorkInSystemUpdater = function(code, response) {
  return $('#WorkingInSystemCnt').html(response);
};

GetForm = function(fName, obj) {
  if ($(obj).parents().is('.ui-dialog')) {
    return $(obj).parents(".ui-dialog:last").find('form[name=' + fName + ']')[0];
  } else {

    /* По какой-то причине выбор элементов, без предков .ui-dialog не работает, потому берем первый */
    return $('form[name=' + fName + ']:first')[0];
  }
};

ShowInDialog = function(objForm, action, onDataWereChanged, onShow) {
  jsSubmit({
    form: objForm,
    action: action,
    dataType: "html",
    showProcessing: true,
    onSuccess: function(data, textStatus) {
      var _dialog, json, onclose, onopen;
      if (/"isError":true}/i.test(data)) {
        json = $.parseJSON(data);
        alert(json.message);
        return;
      }
      onclose = $(data).filter('script[rel~=onclose]').html();
      onopen = $(data).filter('script[rel~=onload]').html();
      _dialog = $.show.dialog({
        title: $('h1.title', data).text(),
        size: BootstrapDialog.SIZE_WIDE,
        onshown: function(dialog) {
          $('.bootstrap-dialog-message').html(data);
          $('h1.title', $('.bootstrap-dialog-message')).remove();
          if (onShow) {
            onShow();
          }
          $.globalEval(onopen);
        },
        onhide: function(dialog) {
          $.globalEval(onclose);
          setDBFree();
          if (dialog.$modal.prop("dataWereChanged") && onDataWereChanged) {
            onDataWereChanged();
          }
          return true;
        }
      });
      _dialog.showInDialog = 'SID';
    },
    onError: function(XMLHttpRequest, textStatus, errorThrown) {
      return alert(textStatus);
    }
  });
};

confirmExcel = function() {
  return $.show.confirmation(language.Generic.Common.kExportIntoExcel, 0, null, false, 'ShowExcelConfirm');
};

openExcelCommon = function(form, action, parameters) {
  var Yes, objButtons;
  Yes = function() {
    var i, strParameters;
    strParameters = action + '?VER=' + getVer() + '&AT=' + strATTok;
    for (i in parameters) {
      strParameters += '&' + i + '=' + parameters[i];
    }
    return DoSubmit(form, strParameters);
  };
  objButtons = {};
  objButtons[$.show.defaults.yesText] = Yes;
  return $.show.confirmation(language.Generic.Common.kExportIntoExcel, 0, objButtons, false, 'ShowExcelConfirm');
};

openExcelVersn = function(form, action, parameters) {
  var Yes, objButtons;
  Yes = function() {
    var i;
    for (i in parameters) {
      action += i + '=' + parameters[i] + "&";
    }
    return DoSubmit(form, action);
  };
  objButtons = {};
  objButtons[$.show.defaults.yesText] = Yes;
  return $.show.confirmation(language.Generic.Common.kExportIntoExcel, 0, objButtons, false, 'ShowExcelConfirm');
};

GetLocalEmId = function(strEMID) {
  var EmID;
  EmID = $('select[name^=FilterEMID_] option:selected[value!=-1]').last().val();
  if (EmID === void 0 || EmID === -1) {
    EmID = strEMID;
  }
  return EmID;
};

blockMainWindow = function(windowChild) {
  var checkWindowIsActive, checkWindowIsClosed, info, isActive, isIE;
  info = navigator.userAgent;
  isIE = !!info.match(/Trident\/7\./) || info.indexOf("MSIE") > 0;
  if (!isIE) {
    setTimeout(function() {
      $(document).trigger('showProcessing');
    }, 500);
    checkWindowIsClosed = function() {
      if (windowChild.closed) {
        $(document).trigger('closeProcessing');
        clearInterval(window.timer1);
      }
    };
    window.timer1 = setInterval(checkWindowIsClosed, 500);
  } else {
    isActive = true;
    window.onblur = function() {
      return isActive = false;
    };
    checkWindowIsActive = function() {
      if (!isActive) {
        windowChild.focus();
        window.onblur = null;
        return clearInterval(window.timer1);
      }
    };
    return window.timer1 = setInterval(checkWindowIsActive, 1000);
  }
};

checkFileExtension = function(strFileExtension, arrPossibleExtensions) {
  var bCorrespondsToExtension, i, j, ref, strListOfExtensions;
  strListOfExtensions = '';
  bCorrespondsToExtension = false;
  for (i = j = 0, ref = arrPossibleExtensions.length - 1; j <= ref; i = j += 1) {
    strListOfExtensions = strListOfExtensions + ', ' + arrPossibleExtensions[i];
    if (strFileExtension === arrPossibleExtensions[i]) {
      bCorrespondsToExtension = true;
    }
  }
  strListOfExtensions = strListOfExtensions.slice(1);
  if (!bCorrespondsToExtension) {
    alert(language.Generic.SetupSchoolResources.kErrInvalidFileExt + strListOfExtensions);
    return false;
  } else {
    return true;
  }
};

isEMailValid = function(documentForm) {
  var elEmail, emailRe, form, sEmail;
  form = documentForm;
  elEmail = form.elements['EMAIL'];
  sEmail = elEmail.value;
  emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/;
  if (!emailRe.test(sEmail)) {
    elEmail.focus();
    alert(language.Generic.SetupSchoolUI.kSetEMail);
    return false;
  }
  return true;
};

showPrintVersion = function(opts) {
  var defaults, options;
  defaults = {
    viewHeader: true
  };
  options = $.extend({}, defaults, opts);
  return $('.print-block').printUtils().toPrint(options);
};

exportToExcel = function(opts) {
  var defaults, options;
  defaults = {
    viewHeader: true
  };
  options = $.extend({}, defaults, opts);
  return $('.print-block').printUtils().toExcel(options);
};

openSchoolInfo = function(schoolId, isPreSchool, isAddSchool, isOrphanageSchool) {
  var context, getFormGroupTemplate, getSchoolCard, getSchoolCardTemplate, queries, schoolCardPrint, schoolCardTemplate;
  schoolCardTemplate = null;
  context = null;
  queries = new Array();
  schoolCardPrint = {
    replace: function(printBlock, copyBlock) {
      return $('table', copyBlock).addClass('table table-xs');
    },
    getSchoolCard: function() {
      var container, schoolCard, schoolCardClone;
      container = $('<div>');
      schoolCard = $('div.print-block');
      schoolCardClone = schoolCard.clone();
      schoolCardClone.find('.form-group').appendTo(container);
      return container;
    }
  };
  getSchoolCardTemplate = $.ajax({
    url: '/vendor/pages/templates/schoolCard/schoolCardTemplate.html',
    cache: true,
    success: function(data) {
      return schoolCardTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
    }
  });
  getFormGroupTemplate = $.ajax({
    url: '/vendor/pages/templates/schoolCard/formGroupTemlate.html',
    cache: true,
    success: function(data) {
      var formGroupTemplate;
      formGroupTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
      return Handlebars.registerPartial('formGroup', formGroupTemplate);
    }
  });
  getSchoolCard = jsSubmit({
    action: '/webapi/schools/' + schoolId + '/card',
    showProcessing: true,
    method: 'GET',
    onSuccess: function(schoolCard) {
      if (schoolCard.commonInfo.foundingDate) {
        schoolCard.commonInfo.foundingDate = dateUtils.date2str(new Date(schoolCard.commonInfo.foundingDate));
      }
      if (schoolCard.commonInfo.locationInfo) {
        schoolCard.commonInfo.locationInfo.inProvinceCenter = schoolCard.commonInfo.locationInfo.inProvinceCenter ? language.Generic.Common.kYes : language.Generic.Common.kNo;
        schoolCard.commonInfo.locationInfo.isProvinceSchoolInCity = schoolCard.commonInfo.locationInfo.isProvinceSchoolInCity ? language.Generic.Common.kYes : language.Generic.Common.kNo;
      }
      return context = {
        schoolCard: schoolCard,
        language: language,
        functionalities: {
          isSchool: appContext.funcType === 2,
          isPreSchool: isPreSchool,
          isAddSchool: isAddSchool,
          isOrphanageSchool: isOrphanageSchool
        }
      };
    }
  });
  queries.push(getSchoolCardTemplate);
  queries.push(getFormGroupTemplate);
  queries.push(getSchoolCard);
  return extDeferred.when(queries).then(function() {
    var html, printBtn, template;
    template = Handlebars.compile(schoolCardTemplate);
    html = template(context);
    printBtn = function() {
      var options;
      options = {
        viewHeader: true,
        processingFunc: [schoolCardPrint.replace],
        header: language.Generic.SchoolInfo.kTitleSchoolInfoCard,
        titleWindow: '<%=NETSCHOOL_PRODUCT_NAME%>' + '. ' + language.Generic.SchoolInfo.kTitleSchoolInfoCard,
        showFilters: false
      };
      html = html.split('background-color: RGB( 238, 238, 238);').join('padding:0;');
      return $(html).printUtils().toPrint(options);
    };
    return $.show.dialog({
      size: BootstrapDialog.SIZE_WIDE,
      title: language.Generic.SchoolInfo.kTitleSchoolInfoCard,
      message: html,
      buttons: [
        {
          label: language.Generic.Buttons.kPrint,
          action: printBtn,
          cssClass: 'btn-primary'
        }
      ]
    });
  });
};

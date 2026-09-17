var deferredResLoader;

deferredResLoader = (function() {
  var _allScriptLoadedDefer, _allScriptLoadedPromise, _baseLoadHandler, _loadScript, _loadStyleSheet, _proxyLoadHandler, head, loadHandler, onAllScriptsLoadedHandlers, scriptsAlreadyLoaded, scriptsToLoad, stylesToLoad;
  scriptsToLoad = [];
  stylesToLoad = ["/vendor/custom/css/ext-styles.min.css"];
  head = document.getElementsByTagName("head")[0] || document.documentElement;
  _allScriptLoadedDefer = $.Deferred();
  _allScriptLoadedPromise = _allScriptLoadedDefer.promise();
  scriptsAlreadyLoaded = 0;
  onAllScriptsLoadedHandlers = [];
  _baseLoadHandler = function(src) {
    scriptsAlreadyLoaded = scriptsAlreadyLoaded + 1;
    if (scriptsAlreadyLoaded === scriptsToLoad.length) {
      return _allScriptLoadedDefer.resolve();
    }
  };
  _proxyLoadHandler = function(handler) {
    return function(src) {
      if (handler) {
        handler(src);
      }
      return _baseLoadHandler(src);
    };
  };
  _loadStyleSheet = function(src) {
    src = getVersionedLink(src);
    if (document.createStyleSheet) {
      return document.createStyleSheet(src);
    } else {
      return $("head").append($("<link rel='stylesheet' href='" + src + "' type='text/css' media='screen' />"));
    }
  };
  _loadScript = function(src, onLoadHandler) {
    var afterLoad, done, script, scriptLoadDeferred, scriptUrl;
    scriptLoadDeferred = $.Deferred();
    script = document.createElement("script");
    scriptUrl = getVersionedLink(src);
    script.src = scriptUrl;
    script.async = false;
    done = false;
    afterLoad = function() {
      if (onLoadHandler) {
        onLoadHandler(src);
      }
      if (head && script.parentNode) {
        return head.removeChild(script);
      }
    };
    script.onload = function() {
      if (this.executed) {
        return;
      }
      this.executed = true;
      afterLoad();
      return scriptLoadDeferred.resolve();
    };
    script.onreadystatechange = function() {
      var self;
      self = this;
      if (this.readyState === "complete" || this.readyState === "loaded") {
        return setTimeout(function() {
          return self.onload();
        }, 0);
      }
    };
    head.insertBefore(script, head.firstChild);
    return scriptLoadDeferred.promise();
  };
  loadHandler = function() {
    var extScriptsFile, i, info, j, len, len1, results, src;
    extScriptsFile = (typeof appContext !== "undefined" && appContext !== null ? appContext.environment : void 0) === "dev" ? "/js/ext-scripts.js" : "/js/ext-scripts.min.js";
    scriptsToLoad.push({
      src: extScriptsFile
    });
    for (i = 0, len = stylesToLoad.length; i < len; i++) {
      src = stylesToLoad[i];
      _loadStyleSheet(src);
    }
    results = [];
    for (j = 0, len1 = scriptsToLoad.length; j < len1; j++) {
      info = scriptsToLoad[j];
      info.handler = _proxyLoadHandler(info.handler);
      results.push(_loadScript(info.src, info.handler));
    }
    return results;
  };
  if (window.addEventListener) {
    window.addEventListener("load", loadHandler, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", loadHandler);
  } else {
    window.onload = loadHandler;
  }
  return {
    loadScript: function(src, onScriptLoadHandler) {
      return scriptsToLoad.push({
        src: src,
        handler: onScriptLoadHandler
      });
    },
    loadStyle: function(src) {
      return stylesToLoad.push(src);
    },
    loadJsScript: function(src, onScriptLoadHandler) {
      return _loadScript(src, onScriptLoadHandler);
    },
    ready: function(handler) {
      return _allScriptLoadedPromise.then(handler);
    }
  };
})();

$(window).on('load', function() {
  var $preloader, $spinner;
  $preloader = $('#page-preloader');
  $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  return $preloader.delay(350).fadeOut('slow');
});

(function($) {
  var _noEnter, _prepareTitle;
  _prepareTitle = function(title) {
    var btnWidth, child, inputGroup, inputWidth, needWidth, width;
    child = $('span[class=text]', title);
    inputGroup = title.parent('.input-group');
    if (inputGroup.length > 0) {
      inputWidth = child.width();
      btnWidth = inputGroup.find('.input-group-btn').width();
      width = inputWidth + btnWidth;
      needWidth = inputGroup.parent().width();
    } else {
      needWidth = title.width();
      width = child.width();
    }
    if (needWidth <= width) {
      title.attr('data-original-title', child.text());
      return title.popover({
        placement: 'bottom',
        html: 'true',
        trigger: "hover"
      });
    }
  };
  $(document).ready(function() {
    return $('span.form-control-title, span.form-control').each(function() {
      return _prepareTitle($(this));
    });
  });
  _noEnter = function(input) {
    $(input).on({
      'keypress': function(e) {
        var chr;
        e = e || window.event;
        chr = String.fromCharCode(e.charCode);
        if (e.keyCode === 13) {
          return false;
        }
      }
    });
  };
  $(document).ready(function() {
    return $('form').each(function() {
      var $inputs;
      $inputs = $(this).find('input[type="text"]');
      if ($inputs.length === 1) {
        return _noEnter($inputs);
      }
    });
  });
  $.uicontrols = {
    button: function(options) {

      /*возможные опции 
      				id			- идентификатор кнопки
      				size		- размер кнопки (btn-lg, btn-sm, btn-xs и по умолчанию)
      				type		- btn-primary, btn-default
      				icon		- иконка кнопки
      				label		- текст кнопки
      				name		- наименование кнопки
      				title		- всплывающий текст при наведении на кнопку
      				click		- обработчик события click
       */
      var button, defOptions;
      defOptions = {
        type: 'btn-default'
      };
      options = $.extend({}, defOptions, options);
      button = $('<button></button>').addClass('btn').addClass(options.type).attr('type', 'button');
      if (options.size) {
        button.addClass(options.size);
      }
      if (options.icon) {
        button.append($('<span></span>').addClass('glyphicon glyphicon-' + options.icon));
      }
      if (options.id) {
        button.attr('id', options.id);
      }
      if (options.label) {
        button.append(' ' + options.label);
      }
      if (options.name) {
        button.attr('name', options.name);
      }
      if (options.title) {
        button.attr('title', options.title);
      }
      if (typeof options.click === 'function') {
        button.on('click', options.click);
      } else if (typeof options.click === 'string') {
        button.attr('onclick', options.click);
      }
      return button;
    },
    linkButton: function(options) {

      /* options - массив, где
      				id			- идентификатор кнопки
      				classButton	- класс
      				title		- всплывающий текст при наведении на кнопку
      				icon			- иконка кнопки
      				click		- обработчик события click
       */
      var divButtons, i, len, linkButton, option;
      divButtons = $('<div></div>');
      for (i = 0, len = options.length; i < len; i++) {
        option = options[i];
        linkButton = $('<a></a>');
        if (option.classButton) {
          linkButton.addClass(option.classButton);
        }
        if (option.title) {
          linkButton.attr('title', option.title);
        }
        if (options.id) {
          linkButton.attr('id', options.id);
        }
        if (option.icon) {
          linkButton.append($('<span></span>').addClass('glyphicon ' + option.icon));
        }
        if (option.click) {
          linkButton.attr('href', option.click);
        }
        divButtons.append(linkButton);
      }
      return divButtons;
    },
    title: function(text) {
      var control;
      control = $("<span></span>").addClass("form-control").addClass("form-control-title");
      $("<span></span>").addClass("text").append(text).appendTo(control);
      setTimeout(function() {
        return _prepareTitle(control);
      }, 500);
      return control;
    },
    info: function(html) {
      var control;
      control = $("<div></div>").addClass("alert").addClass("alert-info").attr("role", "alert").html(html);
      return control;
    }
  };
  jQuery.fn.ajaxSelect = function() {
    this.selectpicker({
      liveSearch: true
    }).ajaxSelectPicker({
      ajax: {
        data: function() {
          return {
            query: $('.bs-searchbox input').val(),
            AT: strATTok
          };
        },
        type: 'GET'
      },
      preprocessData: function(response) {
        var values;
        if (typeof customHandler !== 'undefined') {
          customHandler(response);
          return;
        }
        values = [];
        _.each(response.data.values, function(value) {
          values.push({
            'value': value.id,
            'text': value.name,
            'disable': false
          });
        });
        return values;
      },
      preserveSelected: false,
      requestDelay: 1000
    });
  };
  jQuery.fn.inputRules = (function() {
    var inputRules;
    inputRules = {
      inputNum: function(options) {
        var defRules, settings;
        defRules = {
          minVal: 0.01,
          maxVal: null,
          allowFractional: true
        };
        settings = $.extend(defRules, options);
        $(this, 'input').on({
          'keypress': function(e) {
            var chr, ref;
            e = e || window.event;
            chr = String.fromCharCode(e.charCode);
            if (((ref = e.keyCode) === 8 || ref === 9 || ref === 37 || ref === 39 || ref === 46) && (chr !== ".")) {
              return true;
            }
            if ("1234567890".indexOf(chr) > -1) {
              return true;
            }
            if (settings.allowFractional && ".,".indexOf(chr) > -1 && !(/[.,]/.test(this.value))) {
              return true;
            }
            return false;
          }
        }).blur(function() {
          var control, max, min, res, value;
          control = $(this);
          min = parseFloat(settings.minVal);
          value = parseFloat(control.val().replace(',', '.'));
          if (isNaN(value) || value === 0) {
            control.val('');
            control.change();
            if (!this.wasChanged()) {
              window.dataWereChanged = false;
            }
            return;
          }
          if (settings.maxVal) {
            max = parseFloat(settings.maxVal);
            if (value > max) {
              control.val('');
              control.change();
              window.dataWereChanged = false;
              return focusAlert(control, language.Generic.Common.kMaxInput + max);
            }
          }
          if (value < min) {
            control.val('');
            control.change();
            window.dataWereChanged = false;
            return focusAlert(control, language.Generic.Common.kMinInput + min);
          } else {
            res = value.toString().replace('.', ',');
            return control.val(res);
          }
        });
      }
    };
    return function(rules) {
      if (inputRules[rules]) {
        return inputRules[rules].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        $.error('Метод с именем ' + rules + ' не существует для jQuery.inputRules');
      }
    };
  })();
})(jQuery);

var extDeferred;

extDeferred = (function() {
  var handleDef;
  handleDef = function(condition) {
    var internalDef;
    while (typeof condition === 'function') {
      condition = condition();
    }
    if (Array.isArray(condition)) {
      condition = extDeferred.when(condition);
    }
    if (typeof condition === 'undefined' || typeof condition === 'boolean') {
      internalDef = $.Deferred();
      if (condition) {
        internalDef.resolve();
      } else {
        internalDef.reject();
      }
      return internalDef.promise();
    }
    return condition;
  };
  return {
    wrapPromise: function(promiseFunc, success, fail) {
      return function() {
        return $.when(promiseFunc()).then(success, fail);
      };
    },
    wrapAlwaysPromise: function(promiseFunc) {
      return function() {
        var deferred, funcResolve;
        deferred = $.Deferred();
        funcResolve = function() {
          return deferred.resolve();
        };
        extDeferred.wrapPromise(promiseFunc, funcResolve, funcResolve)();
        return deferred.promise();
      };
    },
    resolve: function() {
      var deferred;
      deferred = $.Deferred();
      deferred.resolve();
      return deferred.promise();
    },
    when: function() {
      var arrDeferred, deferred, recThen, rejectFunc, successFunc;
      deferred = $.Deferred();
      arrDeferred = arguments;
      if (arguments.length === 1 && typeof arguments[0] === 'object') {
        arrDeferred = arguments[0];
      }
      if (arrDeferred.length === 0) {
        deferred.resolve();
        return deferred.promise();
      }
      rejectFunc = function() {
        deferred.reject();
      };
      successFunc = function() {
        deferred.resolve();
      };
      recThen = function(index) {
        var nextDefFunc;
        nextDefFunc = function() {
          return handleDef(arrDeferred[index]);
        };
        if (index < arrDeferred.length - 1) {
          return function() {
            return $.when(nextDefFunc()).then(recThen(index + 1), rejectFunc);
          };
        } else if (index === arrDeferred.length - 1) {
          return function() {
            return $.when(nextDefFunc()).then(successFunc, rejectFunc);
          };
        } else {
          return successFunc;
        }
      };
      $.when(handleDef(arrDeferred[0])).then(recThen(1), rejectFunc);
      return deferred.promise();
    }
  };
})();

(function() {
  if (typeof Handlebars === "undefined") {
    return;
  }
  Handlebars.registerHelper('ifNull', function(value, options) {
    if (value === null) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
  Handlebars.registerHelper('ifNotNull', function(value, options) {
    if (value !== null) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
  Handlebars.registerHelper('currentDate', function(loginTime) {
    var result, time;
    loginTime = loginTime.substring(0, 19);
    time = dateUtils.castServerDateTimeToClient(loginTime);
    return result = dateUtils.date2str(time) + " " + dateUtils.time2Str_ss(time);
  });
  Handlebars.registerHelper('date2str', function(date) {
    if (date === void 0 || (date == null)) {
      return "";
    }
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return dateUtils.date2str(date);
  });
  Handlebars.registerHelper('uCase', function(string) {
    return strCheckIsNull(string).toUpperCase();
  });
  Handlebars.registerHelper('lCase', function(string) {
    return strCheckIsNull(string).toLowerCase();
  });
  Handlebars.registerHelper('match', function(value) {
    return value + 1;
  });
  Handlebars.registerHelper('debug', function(optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      return console.log(optionalValue);
    }
  });
  Handlebars.registerHelper('ifCond', function(v1, operator, v2, options) {
    switch (operator) {
      case '==':
      case '===':
        if (v1 === v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case '<':
        if (v1 < v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case '<=':
        if (v1 <= v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case '>':
        if (v1 > v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case '>=':
        if (v1 >= v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case '&&':
        if (v1 && v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      case '||':
        if (v1 || v2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      default:
        return options.inverse(this);
    }
  });
  Handlebars.registerHelper('forLoop', function(from, to, incr, block) {
    var accum, i, j, ref, ref1, ref2;
    accum = '';
    for (i = j = ref = from, ref1 = to, ref2 = incr; ref2 > 0 ? j <= ref1 : j >= ref1; i = j += ref2) {
      accum += block.fn(i);
    }
    return accum;
  });
}).call(this);

var resetScreen;

$(document).ready(function() {
  var form, j, len, ref, results;
  if (typeof CalculateOSH === 'function') {
    CalculateOSH();
  }
  ref = document.forms;
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    form = ref[j];
    results.push($(form).rememberState());
  }
  return results;
});

(function($) {
  $.fn.rememberState = function() {
    return $('input:not([type=hidden]), select, textarea, .text-data', this).each(function(i, elem) {
      var value;
      if (elem.type === "radio" || elem.type === "checkbox") {
        value = elem.checked;
      } else if ($(elem).hasClass("text-data")) {
        value = $(elem).text();
      } else {
        value = $(elem).val();
      }
      $(elem).data("storedState", value);
      return elem.wasChanged = function() {
        var curValue;
        if (this.type === "radio" || this.type === "checkbox") {
          curValue = this.checked;
        } else if ($(this).hasClass("text-data")) {
          curValue = $(this).text();
        } else {
          curValue = $(this).val();
        }
        if (curValue === $(this).data("storedState")) {
          return false;
        } else {
          return true;
        }
      };
    });
  };
  $.fn.resetState = function() {
    return $('input:not([type=hidden]), select, textarea, .text-data', this).each(function(i, elem) {
      var curValue, savedValue;
      if ($(elem).is(':disabled')) {
        return;
      }
      savedValue = $(elem).data("storedState");
      if (elem.type === "radio" || elem.type === "checkbox") {
        return $(elem).prop('checked', savedValue);
      } else if ($(elem).hasClass("text-data")) {
        return $(elem).text(savedValue);
      } else {
        curValue = $(elem).val();
        if (curValue !== savedValue) {
          return $(elem).val(savedValue).change();
        }
      }
    });
  };
})(jQuery);

resetScreen = function(formName) {
  var form;
  form = document.forms[formName];
  $(form).resetState();
  this.dataWereChanged = false;
  return alert(language.Generic.Common.kResetChanges);
};

var getItemValue, getListText, getListValue, str2lng, str2lngEx, strCheckIsNull, trimStr,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

str2lngEx = function(el) {
  var nVal, sVal;
  sVal = trimStr(el.value);
  if (sVal !== '') {
    nVal = parseInt(sVal);
    if (!isNaN(nVal)) {
      sVal = nVal.toString();
      el.value = sVal;
    }
    return nVal;
  } else {
    el.value = sVal;
    return sVal;
  }
};

trimStr = function(strStr) {
  return $.trim(strStr);
};

str2lng = function(strValue) {
  var i, j;
  strValue = trimStr(strValue);
  i = 0;
  while (i < strValue.length && strValue.charAt(i) === '0') {
    i++;
  }
  j = i;
  while (j < strValue.length && '0' <= strValue.charAt(j) && strValue.charAt(j) <= '9') {
    j++;
  }
  if (i < strValue.length) {
    return (j < strValue.length ? Number.NaN : parseInt(strValue.substring(i, j), 10));
  } else {
    return 0;
  }
};

strCheckIsNull = function(string) {
  if (string === void 0 || (string == null)) {
    return " ";
  } else {
    return string;
  }
};

getItemValue = function(list) {
  if (list.value !== null) {
    return list.value;
  } else {
    return list.options[list.selectedIndex].value;
  }
};

getListValue = function(list) {
  return list.options[list.selectedIndex].value;
};

getListText = function(list) {
  return list.options[list.selectedIndex].text;
};

(function() {
  var entityMap;
  entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };
  if (indexOf.call(String.prototype, 'escapeHTML') < 0) {
    return String.prototype.escapeHTML = function() {
      return this.replace(/[&<>"'\/]/g, function(s) {
        return entityMap[s];
      });
    };
  }
})();

if (indexOf.call(String.prototype, 'format') < 0) {
  String.prototype.format = function(replaces) {
    var key, replaceStr, str;
    str = this;
    for (key in replaces) {
      replaceStr = replaces[key];
      str = str.replace("_" + key + "_", replaceStr);
    }
    return str;
  };
}

if (indexOf.call(String.prototype, 'normalizeFileName') < 0) {
  String.prototype.normalizeFileName = function() {
    var name;
    name = this.replace(/["]/g, "'");
    return name.replace(/[\/:*?<>|+\/]/g, "");
  };
}

if (indexOf.call(String.prototype, 'repeat') < 0) {
  String.prototype.repeat = function(count) {
    var rpt, str;
    if (this === null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    str = '' + this;
    if (count !== count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count === 2e308) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length === 0 || count === 0) {
      return '';
    }
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    rpt = '';
    while (1) {
      if ((count & 1) === 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count === 0) {
        break;
      }
      str += str;
    }
    return rpt;
  };
}

var date2strf, dateUtils, str2datef, strTwoTimef, time2Str_ss_f, timeTwoStrf;

dateUtils = (function() {
  var options, parseDateFormat, parseTimeFormat;
  options = {
    firstYear: parseInt(new Date().getFullYear().toString().substr(-2)) + 15,
    nsFormat: "d" + String.fromCharCode(1) + "mm" + String.fromCharCode(1) + "yy" + String.fromCharCode(1) + ".",
    nsFormatTime: "h" + String.fromCharCode(1) + "mm" + String.fromCharCode(1) + "ss" + String.fromCharCode(1) + ":",
    timezoneStamp: "04:00",
    dateFormat: {
      format: "d.mm.yy",
      delimeter: '.'
    },
    timeFormat: {
      format: "h.mm.ss",
      delimeter: ':'
    }
  };
  parseDateFormat = function(nsDateFormat) {
    var delimeter, formatArr;
    if (nsDateFormat) {
      formatArr = nsDateFormat.split(String.fromCharCode(1));
      delimeter = formatArr[3];
      formatArr.pop();
      return {
        format: formatArr.join(delimeter),
        delimeter: delimeter
      };
    } else {
      return options.dateFormat;
    }
  };
  parseTimeFormat = function(nsTimeFormat) {
    var delimeter, formatArr;
    if (nsTimeFormat) {
      formatArr = nsTimeFormat.split(String.fromCharCode(1));
      delimeter = formatArr[2];
      formatArr.pop();
      return {
        format: formatArr.join(delimeter),
        delimeter: delimeter
      };
    } else {
      return options.timeFormat;
    }
  };
  return {
    init: function(nsDateFormat, nsTimeFormat) {
      options.timezoneStamp = "0" + (-(new Date()).getTimezoneOffset() / 60) + ":00";
      if (typeof nsDateFormat !== "undefined") {
        options.nsFormat = nsDateFormat;
        options.dateFormat = parseDateFormat(nsDateFormat);
      }
      if (typeof nsTimeFormat !== "undefined") {
        options.nsFormatTime = nsTimeFormat;
        return options.timeFormat = parseDateFormat(nsTimeFormat);
      }
    },
    str2date: function(strDate) {
      return str2datef(strDate, options.nsFormat, String.fromCharCode(1), options.firstYear);
    },
    str2time: function(strTime) {
      return strTwoTimef(strTime, options.nsFormatTime);
    },
    date2str: function(dtDate) {
      return date2strf(dtDate, options.nsFormat);
    },
    date2strfrm: function(dtDate, dateFormat) {
      return date2strf(dtDate, dateFormat);
    },
    time2str: function(dtTime) {
      return timeTwoStrf(dtTime, options.nsFormatTime);
    },
    time2Str_ss: function(dtTime) {
      return time2Str_ss_f(dtTime, options.nsFormatTime);
    },
    getDateFormat: function() {
      return options.dateFormat;
    },
    getTimeFormat: function() {
      return options.timeFormat;
    },
    getLocalDateTime: function(iso) {
      return new Date(iso + "+" + options.timezoneStamp);
    },
    getUTCDate: function(year, month, day) {
      return new Date(Date.UTC(year, month, day));
    },
    asUTC: function(date) {
      var newDate;
      newDate = new Date(date.getTime());
      newDate.setHours(date.getHours() - date.getTimezoneOffset() / 60);
      return newDate;
    },
    castServerDateTimeToClient: function(loginTime) {
      var clientTimeZone, difference, serverTimeZone, time;
      time = moment(loginTime).toDate();
      serverTimeZone = appContext.serverTimeZone;
      clientTimeZone = (new Date()).getTimezoneOffset() / -60;
      difference = clientTimeZone - serverTimeZone;
      time.setTime(time.getTime() + difference * 3600000);
      return time;
    }
  };
})();

str2datef = function(strDate, datFormat, deli, firstYear) {
  var da, dateArr, formatArr, i, j, mo, res, ye;
  formatArr = datFormat.split(deli);
  deli = formatArr[3];
  dateArr = strDate.split(deli);
  if (dateArr.length !== 3) {
    return null;
  }
  for (i = j = 0; j <= 2; i = j += 1) {
    if (formatArr[i] === "m" || formatArr[i] === "mm") {
      if (dateArr[i]) {
        mo = str2lng(dateArr[i]);
        if (isNaN(mo) || mo <= 0 || mo > 12) {
          return null;
        }
      } else {
        return null;
      }
    } else if (formatArr[i] === "d" || formatArr[i] === "dd") {
      if (dateArr[i]) {
        da = str2lng(dateArr[i]);
        if (isNaN(da) || da <= 0 || da > 31) {
          return null;
        }
      } else {
        return null;
      }
    } else if (formatArr[i] === "yy" || formatArr[i] === "yyyy") {
      if (dateArr[i]) {
        ye = str2lng(dateArr[i]);
        if (ye < 100) {
          if (ye < firstYear) {
            ye = 2000 + ye;
          } else {
            ye = 1900 + ye;
          }
        }
        if (isNaN(ye)) {
          return null;
        }
      } else {
        return null;
      }
    }
  }
  if (da > 30 && (mo === 4 || mo === 6 || mo === 9 || mo === 11)) {
    return null;
  } else {
    if (mo === 2 && da > (ye % 4 === 0 && ye % 100 !== 0 || ye % 400 === 0 ? res = 29 : res = 28)) {
      return null;
    }
  }
  return new Date(Date.UTC(ye, mo - 1, da));
};

date2strf = function(dt, datFormat) {
  var da, deli, formatArr, i, j, mo, strRes, ye;
  strRes = "";
  formatArr = datFormat.split(String.fromCharCode(1));
  deli = formatArr[3];
  ye = dt.getFullYear();
  mo = dt.getMonth() + 1;
  da = dt.getDate();
  for (i = j = 0; j <= 2; i = j += 1) {
    if (formatArr[i] === "m") {
      strRes += mo.toString() + deli;
    } else if (formatArr[i] === "mm") {
      strRes += (mo < 10 ? "0" : "") + mo.toString() + deli;
    } else if (formatArr[i] === "d") {
      strRes += da.toString() + deli;
    } else if (formatArr[i] === "dd") {
      strRes += (da < 10 ? "0" : "") + da.toString() + deli;
    } else if (formatArr[i] === "yy") {
      ye = ye % 100;
      strRes += (ye < 10 ? "0" : "") + ye.toString() + deli;
    } else if (formatArr[i] === "yyyy") {
      strRes += ye.toString() + deli;
    }
  }
  return strRes.slice(0, -1);
};

timeTwoStrf = function(dtTime, theFormat) {
  var d3, deli, formatArr, ho, i, j, min, sec, strRes;
  strRes = "";
  if (dtTime === null) {
    dtTime = new Date(0, 0);
  }
  formatArr = theFormat.split(String.fromCharCode(1));
  deli = formatArr[2];
  ho = dtTime.getHours();
  min = dtTime.getMinutes();
  sec = dtTime.getSeconds();
  d3 = formatArr[3];
  for (i = j = 0; j <= 3; i = j += 1) {
    if (formatArr[i].charAt(0) === "h") {
      if (d3 !== "") {
        if (ho === 12) {
          d3 = formatArr[4];
        } else {
          if (ho > 12) {
            ho = ho - 12;
            d3 = formatArr[4];
          } else {
            if (ho = 0) {
              ho = 12;
            }
          }
        }
      }
      if (formatArr[i] === "hh") {
        strRes += (ho < 10 ? "0" : "") + ho.toString() + deli;
      } else {
        strRes += ho.toString() + deli;
      }
    } else if (formatArr[i] === "mm") {
      strRes += (min < 10 ? "0" : "") + min.toString() + deli;
    } else if (formatArr[i] === "ss") {
      strRes += (sec < 10 ? "0" : "") + sec.toString() + deli;
    }
  }
  return strRes.slice(0, -1);
};

time2Str_ss_f = function(dtTime, theFormat) {
  var deli, formatArr, res, sec, timeStr;
  if (dtTime === null) {
    return "00:00:00";
  }
  timeStr = timeTwoStrf(dtTime, theFormat);
  formatArr = theFormat.split(String.fromCharCode(1));
  deli = formatArr[2];
  sec = dtTime.getSeconds();
  return res = timeStr + deli + (sec < 10 ? "0" : "") + sec.toString();
};

strTwoTimef = function(strTime, theFormat) {
  var deli, formatArr, ho, i, j, mi, res, sec, timeArr;
  formatArr = theFormat.split(String.fromCharCode(1));
  deli = formatArr[2];
  timeArr = strTime.split(deli);
  if (timeArr.length !== 2 || !3) {
    return null;
  }
  for (i = j = 0; j <= 2; i = j += 1) {
    if (formatArr[i].charAt(0) === "h") {
      ho = parseInt(timeArr[i]);
    } else if (formatArr[i].charAt(0) === "m") {
      mi = parseInt(timeArr[i]);
    } else if (formatArr[i].charAt(0) === "s") {
      sec = parseInt(timeArr[i]);
    }
  }
  if (sec === void 0) {
    sec = 0;
  }
  if (formatArr[3] = timeArr[4]) {
    ho = ho + 12;
  }
  return res = new Date(0, 0, 0, ho, mi, sec);
};

(function() {
  return $(document).ready(function() {
    if (typeof appContext !== "undefined") {
      return dateUtils.init(appContext.dateFormat, appContext.timeFormat);
    }
  });
})();

var DoSubmit, OnChangeSelect, SetSelectedMenu, SetSelectedTab, canSubmit, closeChildWindows, getVersionedLink, goBack, goCommonBack, goHistoryBack, haveToLogout, isHaveToLogout, ok, ok_check_db, windowOpen, windowsNotCloseNames;

canSubmit = function() {
  return true;
};

isHaveToLogout = true;

haveToLogout = function() {
  return isHaveToLogout;
};

windowsNotCloseNames = ["_mail", "_forum", "_help", "_qualityAssessmentAnalytics", "_qualityAssessmentAnalyticsEM", "nsxml"];

goCommonBack = function() {
  if (typeof Back === "function") {
    return Back();
  } else {
    return goHistoryBack();
  }
};

goHistoryBack = function() {
  return checkForChanges().then(function() {
    isHaveToLogout = false;
    return history.go(-1);
  });
};

goBack = function(form, action) {
  return checkForChanges().then(function() {
    $('input[type="password"]', form).attr('disabled', 'disabled');
    return DoSubmit(form, action);
  });
};

DoSubmit = function(form, action) {
  if (action && action !== '') {
    form.action = action;
  }
  isHaveToLogout = false;
  return form.submit();
};

ok_check_db = function(formName, action) {
  return extDeferred.when(bIsDBFree, canSubmit).then(function() {
    $(document).trigger('showProcessing');
    setDBBusy();
    return DoSubmit(document.forms[formName], action);
  });
};

ok = function(formName, action, obj) {
  var form;
  if (obj === null) {
    form = document.forms[formName];
  } else {
    form = GetForm(formName, obj);
  }
  return extDeferred.when(canSubmit).then(function() {
    return DoSubmit(form, action);
  });
};

SetSelectedTab = function(tbID, url) {
  var form;
  form = document.forms['MenuForm'];
  if (!form) {
    return;
  }
  return checkForChanges().then(function() {
    if (tbID === 56) {
      return openPopupWindow("_qualityAssessmentAnalytics", (!url.match(/\/$/) ? url + "/" : url) + "?SchoolYearId=" + appContext.yearId + "&UserId=" + appContext.userId, 950, 660);
    } else if (tbID === 208) {
      return openPopupWindow("_qualityAssessmentAnalyticsEM", (!url.match(/\/$/) ? url + "/" : url) + "?EMId=" + appContext.emId + "&UserId=" + appContext.userId + "&GlobalYearId=" + appContext.globalYearId, 950, 660);
    } else {
      form.elements['TabItem'].value = tbID;
      form.action = url;
      isHaveToLogout = false;
      return form.submit();
    }
  });
};

SetSelectedMenu = function(miID, url) {
  var form;
  form = document.forms['MenuForm'];
  if (!form) {
    return;
  }
  checkForChanges().then(function() {
    form.elements['MenuItem'].value = miID;
    form.elements['TabItem'].value = 0;
    form.action = url;
    isHaveToLogout = false;
    return form.submit();
  });
  return false;
};

OnChangeSelect = function(sFormName, sAction) {
  checkForChanges().then(function() {
    return ok_check_db(sFormName, sAction);
  }).fail(function() {
    document.forms[sFormName].reset();
  });
};

getVersionedLink = function(link) {
  if (typeof appContext === "undefined") {
    return link;
  }
  return link + "?ver=" + appContext.version;
};

windowOpen = function(winOptions) {
  var name, opener, replace, specs, url, wnd;
  url = winOptions.url || '';
  name = winOptions.name || '';
  specs = winOptions.specs || '';
  replace = winOptions.replace || '';
  wnd = winOptions.winChild;
  if (wnd && !wnd.closed) {
    wnd.close();
  }
  wnd = window.open(url, name, specs, replace);
  winOptions.winChild = wnd;
  opener = wnd.opener;
  while (opener && !opener.closed) {
    try {
      opener.childWindows.push(wnd);
      opener = opener.opener;
    } catch (error) {
      break;
    }
  }
  return $(window).on("unload", function(e) {
    if (wnd && !wnd.closed && windowsNotCloseNames.indexOf(wnd.name) < 0) {
      wnd.forceClosing = true;
      return wnd.close();
    }
  });
};

closeChildWindows = function() {
  var k;
  k = childWindows.length;
  while (k > 0) {
    if (childWindows[k - 1] && !childWindows.closed) {
      childWindows[k - 1].close();
    }
    childWindows.pop();
    k = k - 1;
  }
};

var Back, GetForm, GetLocalEmId, KeyDown, Logout, ShowInDialog, WasSaved, WorkInSystemUpdater, addCheckLockEventToButtons, bIsDBFree, bNewWindow, blockMainWindow, cancel_event, center, checkAreaLength, checkFileExtension, checkForChanges, childWindows, dataChanged, dataWereChanged, exportToExcel, focusAlert, getEvent, getFormsParams, getKeyCode, getTargetElement, getVer, heavyAction, isButtonsLock, isDBBusy, isEMailValid, jsSaveForm, jsSubmit, jumpVer, kClosingSes, kDataWereChanged, lalert, maximize, nalert, openExcelCommon, openExcelVersn, openPopupWindow, openSchoolInfo, postTo, processKeyDown, setDBBusy, setDBFree, setFocus, setImgState, shouldProcessKey, showPrintVersion, urlHelper, whenChecked, windows;

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
  if (wnd && !wnd.closed && wnd_to !== "_qualityAssessmentAnalytics" && wnd_to !== "_qualityAssessmentAnalyticsEM") {
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

jsSubmit = function(inparams) {
  var deferred, defparams, handle_error, internal_Success, internal_error, jqAjaxParams, parameters, paramsToSend, show_error_message, streamInterval, streamPartHandler, streamReadPos, useFormAuth, useformAuth, xhr;
  defparams = {
    form: '',
    action: '',
    auth: true,
    nocache: false,
    method: 'POST',
    data: {},
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
    onComplete: function(xhr, message, error) {}
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
  if (parameters.auth && !useformAuth) {
    paramsToSend += "&AT=" + strATTok;
  }
  if (parameters.nocache) {
    paramsToSend += "&ver=" + getVer();
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
        show_error_message((ref = language.Generic.Common.kTimeOutOccured4Ajax) != null ? ref : "Ваш сеанс работы был завершен");
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
      show_error_message(msg);
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
  show_error_message = function(message) {
    if (message && typeof message === 'string') {
      $.show.error(message);
    } else {
      $.show.error(language.Generic.Common.kUnexpErr);
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
  if (typeof strATTok !== "undefined") {
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
    makeUrl: function(in_url, params) {
      var retUrl, vers;
      retUrl = new url(in_url);
      if (typeof window.strATTok !== "undefined") {
        retUrl.addParam('at', strATTok);
      }
      vers = getVer();
      retUrl.addParam('ver', vers);
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
      return context = {
        schoolCard: schoolCard,
        language: language,
        functionalities: {
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

(function($) {
  var deferredArgs, mapButtons, mapOpts2VendorOpts, mergeBtn, opts;
  mapButtons = function(btnsObject) {
    var action, btnName, results;
    if (btnsObject.length) {
      return btnsObject;
    } else {
      results = [];
      for (btnName in btnsObject) {
        action = btnsObject[btnName];
        results.push({
          label: btnName,
          action: action
        });
      }
      return results;
    }
  };
  mergeBtn = function(btnArr, addBtn) {
    var btn, btnInd, i, len1;
    for (btnInd = i = 0, len1 = btnArr.length; i < len1; btnInd = ++i) {
      btn = btnArr[btnInd];
      if (btn.label === addBtn.label) {
        btnArr[btnInd] = $.extend(addBtn, btn);
        return;
      }
    }
    return btnArr.push(addBtn);
  };
  mapOpts2VendorOpts = function(options) {
    var mappedObg;
    if (!options) {
      return {};
    }
    mappedObg = $.extend({}, options);
    mappedObg.onhide = options.close;
    return mappedObg;
  };
  deferredArgs = [];
  opts = {};
  $.show = {
    defaults: {
      okText: language.Generic.Common.kOk,
      errorTitle: language.Generic.Common.kErrorMsgEmotional,
      messageTitle: language.Generic.Announcement.kDescription,
      confirmationTitle: language.Generic.Common.kAttention,
      yesText: language.Generic.Common.kYes,
      noText: language.Generic.Common.kNo,
      processingTitle: language.Generic.Common.kWait,
      processingText: language.Generic.Common.kProcessing,
      loadingText: language.Generic.Common.kLoad,
      selfErrorText: language.Generic.Common.kPageErrWrongCall,
      noAskText: language.Generic.Common.kNoAsk,
      checkBoxId: 'MyCheckBox',
      cancelText: language.Generic.Buttons.kCancel
    },

    /*
    		* @method message - базовый метод для показа сообщений. По умолчанию содержит одну кнопку ОК - закрывающиее окно
    		* @param {Object} message - текст сообщения (может быть строкой, массивом строк или jQuery-объектов	или jQuery-объектом).
    		* @param {String} title - текст заголовка.
     */
    message: function(message, title, options) {
      var defOpts, deferred, extHandler, messageDialog, msgOptions;
      if (typeof message === 'undefined') {
        $.show.error(opts.selfErrorText + ' "$.show.message"');
        return;
      }
      deferred = $.Deferred();
      defOpts = {
        title: typeof title === 'string' ? title : opts.messageTitle,
        message: message,
        type: BootstrapDialog.TYPE_INFO,
        buttons: [
          {
            label: opts.okText,
            hotkey: 13,
            icon: 'glyphicon glyphicon-ok-sign',
            action: function(dialog) {
              return dialog.close();
            }
          }
        ]
      };
      msgOptions = $.extend({}, defOpts, mapOpts2VendorOpts(options));
      if (msgOptions.onhide) {
        extHandler = msgOptions.onhide;
        msgOptions.onhide = function(dialog) {
          extHandler(dialog);
          return deferred.resolve(dialog);
        };
      } else {
        msgOptions.onhide = function(dialog) {
          return deferred.resolve(dialog);
        };
      }
      messageDialog = BootstrapDialog.show(msgOptions);
      messageDialog.getModal().on('keyup', function(event) {
        if (event.which === 32) {
          return messageDialog.close();
        }
      });
      messageDialog.isMessage = true;
      return deferred.promise();
    },

    /*
    		@method dialog - показывает окно с произвольным контентом.
    		@param {Object} options - настройки диалога
    			content - jquery объект - содержимое.
    			title - заголовок
    			buttons - массив кнопок
     */
    dialog: function(options) {
      var button, dialog, existsCancel, ext_onhide, ext_onshown, i, len1, ref, ref1, setDefButtonStyle;
      if (((ref = options.message) != null ? ref.jquery : void 0) && options.message.prop("tagName").toLowerCase() === "script") {
        options.message = options.message.html().replace(/(?:\r\n|\r|\n)/g, '');
      }
      options.draggable = true;
      setDefButtonStyle = function(btn, icon, cssClass) {
        if (!btn.icon) {
          btn.icon = icon;
        }
        if (!btn.cssClass) {
          return btn.cssClass = cssClass;
        }
      };
      if (options.buttons) {
        existsCancel = false;
        ref1 = options.buttons;
        for (i = 0, len1 = ref1.length; i < len1; i++) {
          button = ref1[i];
          switch (button.label) {
            case language.Generic.Common.kOk:
              setDefButtonStyle(button, "glyphicon glyphicon-ok-sign", "btn-primary");
              break;
            case language.Generic.Buttons.kAdd:
              setDefButtonStyle(button, "glyphicon glyphicon-plus-sign", "btn-primary");
              break;
            case language.Generic.Buttons.kCreate:
              setDefButtonStyle(button, "glyphicon glyphicon-file", "btn-primary");
              break;
            case language.Generic.Buttons.kApply:
              setDefButtonStyle(button, "glyphicon glyphicon-ok-sign", "btn-primary");
              break;
            case language.Generic.Buttons.kSave:
              setDefButtonStyle(button, "glyphicon glyphicon-floppy-save", "btn-primary");
              break;
            case language.Generic.Buttons.kEdit:
              setDefButtonStyle(button, "glyphicon glyphicon-pencil", "btn-primary");
              break;
            case language.Generic.Buttons.kRemove:
              setDefButtonStyle(button, "glyphicon glyphicon-minus-sign", "btn-danger");
              break;
            case language.Generic.Buttons.kContinue:
              setDefButtonStyle(button, "glyphicon glyphicon-new-window", "btn-primary");
              break;
            case language.Generic.Buttons.kRefresh:
              setDefButtonStyle(button, "glyphicon glyphicon-refresh", "btn-default");
              break;
            case language.Generic.Calendar.kClose:
              existsCancel = true;
              setDefButtonStyle(button, "glyphicon glyphicon-remove", "btn-default");
              break;
            case language.Generic.Buttons.kCancel:
              existsCancel = true;
              setDefButtonStyle(button, "glyphicon glyphicon-ban-circle", "btn-default");
          }
        }
        if (!existsCancel) {
          options.closeByKeyboard = false;
          options.buttons.push({
            hotkey: 27,
            label: language.Generic.Buttons.kCancel,
            action: function(dialog) {
              $(document.activeElement).blur();
              return dialog.close();
            },
            icon: "glyphicon glyphicon-ban-circle",
            cssClass: "btn-default"
          });
        }
      }
      ext_onshown = options.onshown;
      options.onshown = function(dialog) {
        $("input:visible, select:visible", dialog.$modalContent).first().focus();
        if (ext_onshown) {
          return ext_onshown(dialog);
        }
      };
      ext_onhide = options.onhide;
      options.onhide = function(dialog) {
        if (dialog.$modal.prop("forceClose")) {
          return true;
        }
        if (!dialog.$modal.prop("dataWereChanged")) {
          return !ext_onhide || ext_onhide(dialog);
        }
        $.show.confirmation(kDataWereChanged).then(function() {
          if (!ext_onhide || ext_onhide(dialog)) {
            dialog.forceClose();
          }
          return dialog.$modal.prop("dataWereChanged", false);
        });
        return false;
      };
      dialog = new BootstrapDialog(options);
      dialog = $.extend(dialog, {
        forceClose: function() {
          dialog.$modal.prop("forceClose", true);
          return dialog.close();
        },
        successClose: function() {
          dialog.$modal.prop("dataWereChanged", false);
          return dialog.forceClose();
        }
      });
      $(document).trigger('dialog-opened');
      if (!options.deferredOpen) {
        dialog.open();
      }
      return dialog;
    },

    /*
    		* @method confirmation - показывает окно-подтвержние, может содержать несколько кнопок, см. описание параметров.
    		* @param {Object} message - текст сообщения (может быть строкой, массивом строк или jQuery-объектов
    		* 		или jQuery-объектом).
    		* @param {String} title - текст заголовка.
    		*
    		* @param {JSON Object} objButtons - набор соответствий "Название кнопки" -> Функция, функция вызывается
    		* 		после закрытия окна. К передаваемому набору добавляются две дефолтные кпопки opts.yesText, opts.noText,
    		* 		но только если их явно нет в передаваемом наборе.
    		*
    		* @param {Bool} isEscapeDisabled - запрещение реакции на нажатие кнопки Escape.
    		* @param {String} escapeCookie - выводится чекбокс "Больше не спрашивать", и соответствующая работа с куками.
    		*
     */
    confirmation: function(message, title, objButtons, isEscapeDisabled, escapeCookie) {
      var btn, btnYesAction, buttons, cfrmOpts, defBtn, defButtons, deferred, i, j, k, len1, len2, len3;
      if (typeof message === 'undefined') {
        $.show.error(opts.selfErrorText + ' "$.show.confirmation" (p1)');
        return;
      }
      defButtons = [
        {
          label: opts.yesText,
          cssClass: 'btn-primary',
          icon: 'glyphicon glyphicon-ok-sign',
          hotkey: 13,
          action: function() {}
        }, {
          label: opts.noText,
          icon: 'glyphicon glyphicon-remove-sign',
          action: function() {}
        }
      ];
      if (!objButtons) {
        objButtons = [];
      }
      buttons = mapButtons(objButtons);
      for (i = 0, len1 = defButtons.length; i < len1; i++) {
        defBtn = defButtons[i];
        mergeBtn(buttons, defBtn);
      }
      deferred = $.Deferred();
      if (typeof escapeCookie !== 'undefined') {
        for (j = 0, len2 = buttons.length; j < len2; j++) {
          btn = buttons[j];
          if (btn.label === opts.yesText) {
            btnYesAction = btn.action;
          }
        }
        if ($.cookie(escapeCookie) === "1") {
          btnYesAction();
          deferred.resolve(opts.yesText);
          return deferred.promise();
        }
        buttons.unshift({
          label: opts.yesText + ", " + opts.noAskText,
          action: function() {
            $.cookie(escapeCookie, 1, {
              expires: 30,
              path: '/'
            });
            return btnYesAction();
          }
        });
      }
      for (k = 0, len3 = buttons.length; k < len3; k++) {
        btn = buttons[k];
        if (typeof btn.action !== 'function') {
          $.show.error(opts.selfErrorText + ' "$.show.confirmation" ' + btn.label + '');
          return;
        }
        btn.action = (function() {
          var btninfo;
          btninfo = {
            action: btn.action,
            label: btn.label
          };
          return function(dialog) {
            dialog.close();
            btninfo.action();
            if (btninfo.label === opts.noText) {
              return deferred.reject(btninfo.label);
            } else {
              return deferred.resolve(btninfo.label);
            }
          };
        })();
      }
      cfrmOpts = {
        title: typeof title === 'string' ? title : opts.confirmationTitle,
        message: message,
        type: BootstrapDialog.TYPE_PRIMARY,
        buttons: buttons
      };
      if (typeof isEscapeDisabled !== 'undefined' && isEscapeDisabled) {
        cfrmOpts.closable = false;
      }
      BootstrapDialog.show(cfrmOpts);
      return deferred.promise();
    },
    getConfirmation: function(message, title, objButtons, isEscapeDisabled, escapeCookie) {
      return function() {
        return $.show.confirmation(message, title, objButtons, isEscapeDisabled, escapeCookie);
      };
    },
    prompt: function(message, title, checkFuncExt) {
      var checkFunc, content, deferred, getText, options;
      if (typeof message === 'undefined') {
        $.show.error(opts.selfErrorText + ' "$.show.message"');
        return;
      }
      content = message + ': <input type="text" class="form-control">';
      deferred = $.Deferred();
      getText = function(dialog) {
        return $('input', dialog.getModalContent()).val();
      };
      checkFunc = function(dialog) {
        var text;
        text = getText(dialog);
        if (!checkFuncExt) {
          return true;
        }
        return checkFuncExt(text);
      };
      options = {
        title: typeof title === 'string' ? title : opts.messageTitle,
        message: content,
        closable: true,
        type: BootstrapDialog.TYPE_INFO,
        buttons: [
          {
            label: opts.okText,
            hotkey: 13,
            action: function(dialog) {
              var text;
              if (!checkFunc(dialog)) {
                return false;
              }
              text = getText(dialog);
              dialog.close();
              return deferred.resolve(text);
            }
          }, {
            label: opts.cancelText,
            action: function(dialog) {
              var text;
              text = getText(dialog);
              dialog.close();
              return deferred.reject;
            }
          }
        ]
      };
      BootstrapDialog.show(options);
      return deferred.promise();
    },
    fileDialog: function(options) {

      /* возможные опции
      				title					- заголовок
      				content					- текст внутри окна
      				fileExts				- разрешенные расширения файлов (массив)
      				url						- для сабмита формы
      				target					- в это же окно, или в отдельное
      				queryStringParams		- дополнительный параметры передаваемые в querystring
      				submitParams			- дополнительные параметры для сабмита
      				invalidFileExtMsg		- сообщение о разрешенных файловых расширений
      				additionalContent		- дополнительный контент в HTML
      				handlerApplyBtn			- дополнительные действия после выбора файла
      				customCheck				- уникальные проверки
      				onShownDlg				- дополнительные действия при открытии диалогового окна
      				contentHtml				- html-содержимое внутри окна
      				isAjax					- выполнение добавления файла Ajax-запросом
      				handlerAjaxSuccess		- обработчик success callback
      				maxFileSize				- максимальный размер файла, Кб
       */
      var _check, _createHiddenField, _datasubmit, applyBtn, cancelBtn, content, deferred;
      deferred = $.Deferred();
      _createHiddenField = function(_form, key, value) {
        var hiddenField;
        hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", value);
        return _form.appendChild(hiddenField);
      };
      _check = function() {
        var elements, fileExt, fileName, fullFileName, i, isMatch, len, len1, lowerFileName, ref;
        fullFileName = $('#fileName').val();
        if (!fullFileName) {
          alert(language.Generic.SetupSchoolUI.kMsgSelectFileName);
          return false;
        }
        if (options.fileExts) {
          elements = fullFileName.split('\\');
          fileName = elements[elements.length - 1];
          lowerFileName = fileName.toLowerCase();
          isMatch = false;
          ref = options.fileExts;
          for (i = 0, len1 = ref.length; i < len1; i++) {
            fileExt = ref[i];
            len = fileExt.length;
            if (lowerFileName.substr(lowerFileName.length - len, len) === fileExt) {
              isMatch = true;
            }
          }
          if (!isMatch) {
            alert(options.invalidFileExtMsg ? options.invalidFileExtMsg : language.Generic.Curriculum.kInvalidImportFileFormat);
            return false;
          }
        }
        if (options.customCheck) {
          return options.customCheck();
        }
        return true;
      };
      _datasubmit = null;
      cancelBtn = function(dialog) {
        return dialog.close();
      };
      applyBtn = function(dialog) {
        return extDeferred.when(_check).then(function() {
          var form, key, winOptions, wnd;
          if (options.isAjax) {
            _datasubmit.submit();
            $(document).trigger('showProcessing');
          } else {
            form = document.forms.selectFile;
            if (options.target) {
              form.target = options.target;
              winOptions = {
                url: '/asp/blank.htm',
                name: options.target,
                specs: 'status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no, width=1200px, height=500px'
              };
              windowOpen(winOptions);
              wnd = winOptions.winChild;
            } else {
              $(document).trigger('showProcessing');
            }
            if (options.handlerApplyBtn) {
              options.handlerApplyBtn(wnd);
            }
            _createHiddenField(form, 'VER', getVer());
            _createHiddenField(form, 'AT', strATTok);
            if (options.submitParams) {
              for (key in options.submitParams) {
                _createHiddenField(form, key, options.submitParams[key]);
              }
            }
            if (options.isHeavyAction) {
              heavyAction(function() {
                return DoSubmit(form, options.url);
              }, function() {
                return wnd.close();
              });
            } else {
              DoSubmit(form, options.url);
            }
            dialog.close();
          }
        });
      };
      content = '{0} <form name="selectFile" method="post" enctype="multipart/form-data"> <div class="form-group"> <div class="input-group"> <span class="btn btn-primary btn-file input-group-addon">' + language.Generic.Common.kSelectFile + '<input type="file" name="file" id="fileupload"> </span> <input type="text" class="form-control" disabled id="fileName"> </div> </div> {1} <div class="alert alert-info" role="alert" style="display: none;" id="explanation"></div> </form>';
      content = content.replace('{0}', typeof options.contentHtml !== 'undefined' ? options.contentHtml : "");
      content = content.replace('{1}', typeof options.additionalContent !== 'undefined' ? options.additionalContent : "");
      $.show.dialog({
        title: options.title,
        message: content,
        onshown: function(dialog) {
          var queryStringParams, url;
          $('input[name="file"]').on('change', function() {
            var elements, fileName;
            elements = this.value.split('\\');
            fileName = elements[elements.length - 1];
            $(this).parent().parent().find('#fileName').val(fileName).attr('title', fileName);
            if (options.maxFileSize && this.files && this.files[0] && this.files[0].size > options.maxFileSize * 1024) {
              return alert(language.Generic.SetupSchoolPortfolio.kFileSizeCantBeGreaterThan + options.maxFileSize + ' KB');
            }
          });
          if (options.content) {
            $('#explanation').show();
            $('#explanation').text(options.content);
          }
          if (options.onShownDlg) {
            options.onShownDlg();
          }
          if (options.isAjax) {
            $('#fileupload').bind('fileuploadsubmit', function(e, data) {
              var _params;
              _params = {
                fileName: $('#fileName').val()
              };
              if ($('input[name="Separator"]').length) {
                _params.Separator = $('input[name="Separator"]').val();
              }
              data.formData = $.extend({}, _params, options.submitParams);
            });
            queryStringParams = $.extend({}, {
              "_AJAXCALL_": 1
            }, options.queryStringParams);
            url = urlHelper.makeUrl(options.url, queryStringParams);
            return $('#fileupload').fileupload({
              url: url,
              dataType: 'json',
              add: function(e, data) {
                return _datasubmit = data;
              },
              done: function(e, response) {
                $(document).trigger('closeProcessing');
                if (!response.result) {
                  return $.show.error(language.Generic.Common.kUnexpErr);
                } else if (response.result.isError) {
                  return $.show.error(response.result.message);
                } else {
                  if (options.handlerAjaxSuccess) {
                    options.handlerAjaxSuccess(response.result);
                  }
                  dialog.close();
                  return deferred.resolve(response.result);
                }
              },
              fail: function(e, response) {
                var authError, ref, ref1;
                $(document).trigger('closeProcessing');
                if (response.jqXHR.status === 401) {
                  authError = response.jqXHR.getResponseHeader("auth-error");
                  if (authError === 'SessionExpired') {
                    $.show.error((ref = language.Generic.Common.kTimeOutOccured4Ajax) != null ? ref : "Ваш сеанс работы был завершен");
                  } else {
                    $.show.error((ref1 = language.Generic.Common.kErrPageAccess) != null ? ref1 : "Ошибка доступа");
                  }
                  return;
                }
                if (response.jqXHR.responseJSON.isError) {
                  $.show.error(response.jqXHR.responseJSON.message);
                }
                if (response.jqXHR.responseJSON.message) {
                  return $.show.error(response.jqXHR.responseJSON.message);
                }
              }
            });
          }
        },
        buttons: [
          {
            label: language.Generic.Common.kOk,
            action: applyBtn
          }, {
            label: language.Generic.Buttons.kCancel,
            action: cancelBtn
          }
        ]
      });
      return deferred.promise();
    },
    alert: function(message, options) {
      var activeElementTagName, exists, focusElement;
      exists = false;
      $.each(BootstrapDialog.dialogs, function(id, dialog) {
        if (!dialog.closing && dialog.isMessage) {
          return exists = true;
        }
      });
      if (exists) {
        deferredArgs.push(arguments);
        return;
      }
      focusElement = null;
      if (document.activeElement) {
        activeElementTagName = document.activeElement.tagName.toUpperCase();
        if (activeElementTagName === "INPUT" || activeElementTagName === "SELECT") {
          focusElement = document.activeElement;
        }
      }
      return $.show.message(message, language.Generic.Common.kAttention, options).then(function(closeDlg) {
        closeDlg.closing = true;
        if (focusElement) {
          setTimeout((function() {
            return focusElement.focus();
          }), 200);
        }
        if (deferredArgs.length > 0) {
          $.show.alert.apply(this, deferredArgs[0]);
          return deferredArgs.shift();
        }
      });
    },
    longWork: function(message, title, settings) {
      var content, inc, options, setProgress, timer;
      settings = settings || {};
      if (typeof message === 'undefined') {
        $.show.error(opts.selfErrorText + ' "$.show.longWork"');
        return;
      }
      if (typeof title === 'undefined') {
        title = language.Generic.Curriculum.kPleaseWait;
      }
      content = $("<div><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' style='width: 1%'></div></div></div>");
      content.prepend("<span class='dialog-message'>" + message + "</span>");
      if (settings.content) {
        content.append(settings.content);
      }
      setProgress = function() {
        var current, incr, progressBar;
        progressBar = $('.progress-bar', content);
        current = progressBar.width() / progressBar.parent().width() * 100;
        incr = inc(current / 100) * 100 * 2;
        current = current + incr;
        return progressBar.css('width', current + '%');
      };
      timer = null;
      setTimeout(function() {
        return timer = setInterval(setProgress, 100);
      }, 200);
      inc = function(current) {
        var rnd;
        if (current >= 1) {
          clearInterval(timer);
          return 0;
        }
        rnd = 0;
        if (current >= 0 && current < 0.25) {
          rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if (current >= 0.25 && current < 0.65) {
          rnd = (Math.random() * 3) / 100;
        } else if (current >= 0.65 && current < 0.9) {
          rnd = Math.random() / 100;
        } else if (current >= 0.9 && current < 0.99) {
          rnd = 0.001;
        } else {
          clearInterval(timer);
          rnd = 0;
        }
        return rnd;
      };
      options = $.extend({}, {
        message: content,
        title: title,
        closable: false,
        closeByBackdrop: false,
        closeByKeyboard: false
      }, settings);
      options.onshow = function(dialog) {
        $('body').css("cursor", "wait");
        if (settings.onshow) {
          return settings.onshow(dialog);
        }
      };
      options.onhide = function(dialog) {
        clearInterval(timer);
        $('body').css("cursor", "");
        if (settings.onhide) {
          return settings.onhide(dialog);
        }
      };
      return BootstrapDialog.show(options);
    },
    error: function(message, title) {
      return $.show.message(message, title || opts.errorTitle, {
        type: BootstrapDialog.TYPE_DANGER
      });
    },
    success: function(message, title) {
      return $.show.message(message, title || opts.messageTitle, {
        type: BootstrapDialog.TYPE_SUCCESS
      });
    },
    processing: function(message, title) {
      return $.show.processing.current = $.show.longWork(message != null ? message : opts.processingText, "<span class=\"glyphicon glyphicon-time\"></span> " + (title || opts.processingTitle));
    },
    loading: function() {
      return $.show.loading.current = $.show.longWork(opts.loadingText, opts.loadingText);
    },
    modelDialog: function(parametrs) {
      var cancelButton, cancelButtonHandler, content, okButton, okButtonHanler, promiseSubst, tmp;
      okButtonHanler = function() {};
      cancelButtonHandler = function() {};
      cancelButton = function(dialog) {
        dialog.close();
        return cancelButtonHandler(dialog);
      };
      okButton = function(dialog) {
        return okButtonHanler(dialog);
      };
      tmp = Handlebars.compile(parametrs.template);
      content = tmp(parametrs.model);
      parametrs.message = content;
      parametrs.buttons = [
        {
          label: language.Generic.Buttons.kSave,
          action: okButton
        }, {
          label: language.Generic.Buttons.kCancel,
          action: cancelButton
        }
      ];
      promiseSubst = {
        then: function(okHandler, cancelHandler) {
          okButtonHanler = okHandler;
          if (cancelHandler) {
            cancelButtonHandler = cancelHandler;
          }
        },
        done: function(okHandler) {
          okButtonHanler = okHandler;
        },
        fail: function(cancelHandler) {
          cancelButtonHandler = cancelHandler;
        }
      };
      $.show.dialog(parametrs);
      return promiseSubst;
    }
  };
  opts = $.extend({}, $.show.defaults);
  window.alert = $.show.alert;
  $(function() {
    var $doc;
    $doc = $(document);
    $doc.bind('showError', function(event, data) {
      return $.show.error(data.message, data.onClose);
    });
    $doc.bind('showMessage', function(event, data) {
      return $.show.message(data.message, data.title);
    });
    $doc.bind('showConfirmation', function(event, data) {
      return $.show.confirmation(data.message, data.title, data.yesFunc, data.noFunc);
    });
    $doc.bind('showProcessing', function(event, data) {
      if (!$.show.processing.current) {
        return $.show.processing();
      }
    });
    $doc.bind('closeProcessing', function(event, data) {
      if ($.show.processing.current) {
        $.show.processing.current.close();
        return $.show.processing.current = null;
      }
    });
    $doc.bind('showLoading', function(event, data) {
      return $.show.loading();
    });
    return $doc.bind('closeLoading', function(event, data) {
      if ($.show.processing.current) {
        return $.show.loading.current.close();
      }
    });
  });
})(jQuery);

(function() {
  return $(document).ready(function() {
    var buttonsPanel, form, formGroup, formGroupClone, wnd;
    wnd = $(window);
    form = $(".form-edit");
    if (form.length !== 1) {
      return;
    }
    buttonsPanel = $(".buttons-panel");
    formGroup = form.find('.form-group:first');
    if (formGroup.closest(".panel-body").length > 0) {
      return;
    }
    formGroupClone = formGroup.clone();
    formGroupClone.find('label.control-label').empty().addClass("hidden-sm").addClass("hidden-xs");
    buttonsPanel.detach();
    formGroupClone.find('div:first').empty().append(buttonsPanel);
    return formGroupClone.insertBefore(formGroup);
  });
})();

var ButtonsPanelCtrl;

ButtonsPanelCtrl = (function() {
  var actionsWidth, adaptiveButtonPanelHandler, addActionsButtons, buttonsPanel, buttonsPanelTopOffset, cloneButtonsPanel, fixedButtonPanelHandler, fixedButtonPanelHideBySmallScreen, fixedButtonsPanel, fixedExtraButtons, getMinWidth, minScreenWidth, rightButtonsCnt, wnd;

  function ButtonsPanelCtrl() {}

  wnd = $(window);

  buttonsPanel = null;

  buttonsPanelTopOffset = 0;

  fixedButtonsPanel = null;

  fixedExtraButtons = null;

  rightButtonsCnt = 0;

  actionsWidth = 0;

  minScreenWidth = 600;

  addActionsButtons = function(_buttonsPanel) {
    var adaptiveButtonsPanel, adaptivePanelMenuContainer, buttonDropDown, rightButtons, rightButtonsPanel;
    rightButtonsPanel = _buttonsPanel.find(".buttons-panel-right").filter(":not(.no-actions)");
    $(".buttons-panel-adaptive").remove();
    adaptiveButtonsPanel = $("<div></div>").addClass("buttons-panel-adaptive").addClass("btn-group").css("float", "right").hide().appendTo(_buttonsPanel);
    adaptiveButtonsPanel.css("margin-right", "0").css("right", "0");
    buttonDropDown = $("<button type=\"button\" />").addClass("btn").addClass("dropdown-toggle").attr("data-toggle", "dropdown").attr("aria-expanded", "false").append("<span class=\"glyphicon glyphicon-menu-hamburger\" />").append(" <span id=\"action\">Действия</span> ").append("<span class=\"caret\" />");
    adaptiveButtonsPanel.append(buttonDropDown);
    adaptivePanelMenuContainer = $("<ul></ul>").addClass("dropdown-menu buttons-panel-right buttons-panel-adaptive-wrapper pull-right").attr("role", "menu").appendTo(adaptiveButtonsPanel);
    rightButtons = rightButtonsPanel.filter(":not(.buttons-panel-adaptive-wrapper)").find('button');
    rightButtonsCnt = rightButtons.length;
    rightButtons.clone().appendTo(adaptivePanelMenuContainer).wrap("<li></li>");
    return actionsWidth = adaptiveButtonsPanel.outerWidth();
  };

  cloneButtonsPanel = function() {
    var toUpButtonContainer, upButton;
    $('.buttons-panel-fixed').remove();
    if (!buttonsPanel.is(":visible")) {
      window.buttonsPanelCtrl.init();
    }
    fixedButtonsPanel = buttonsPanel.clone();
    upButton = $.uicontrols.button({
      icon: "circle-arrow-up",
      label: language.Generic.Buttons.kToUp,
      click: function() {
        return $('html, body').animate({
          scrollTop: 0
        }, 600);
      }
    });
    toUpButtonContainer = $("<div class='buttons-up'></div>").append(upButton);
    fixedButtonsPanel.prepend(toUpButtonContainer);
    return fixedButtonsPanel.addClass("buttons-panel-fixed").css({
      visibility: "hidden"
    }).appendTo("body");
  };

  getMinWidth = function() {
    var minWidth, scrollWidth;
    scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    return minWidth = minScreenWidth - scrollWidth;
  };

  fixedButtonPanelHideBySmallScreen = function() {
    var minWidth;
    minWidth = getMinWidth();
    if (fixedButtonsPanel) {
      if (wnd.width() <= minWidth) {
        return fixedButtonsPanel.hide();
      } else {
        return fixedButtonsPanel.show();
      }
    }
  };

  fixedButtonPanelHandler = function() {
    var adaptiveButtonsPanel, buttonOpts, ind, leftFixedPanel, minWidth;
    minWidth = getMinWidth();
    if (buttonsPanelTopOffset === 0) {
      buttonsPanelTopOffset = buttonsPanel.length ? buttonsPanel.offset().top : 0;
    }
    if (wnd.scrollTop() > buttonsPanelTopOffset) {
      if (wnd.width() <= minWidth) {
        return;
      }
      if (fixedButtonsPanel) {
        return;
      }
      cloneButtonsPanel();
      if (fixedExtraButtons != null ? fixedExtraButtons.length : void 0) {
        leftFixedPanel = fixedButtonsPanel.find(".buttons-panel-left");
        if (!leftFixedPanel.length) {
          leftFixedPanel = $("<div></div>").addClass("buttons-panel-left").insertAfter(fixedButtonsPanel.find(".buttons-up"));
        }
        for (ind in fixedExtraButtons) {
          buttonOpts = fixedExtraButtons[ind];
          leftFixedPanel.append($.uicontrols.button(buttonOpts));
        }
      }
      adaptiveButtonsPanel = fixedButtonsPanel.find(".buttons-panel-adaptive").css("position", "").css("margin-right", "").css("right", "");
      adaptiveButtonPanelHandler(fixedButtonsPanel);
      fixedButtonsPanel.css({
        visibility: "visible"
      });
      return fixedButtonsPanel.fadeIn("700");
    } else if (wnd.scrollTop() <= buttonsPanelTopOffset) {
      if (!fixedButtonsPanel) {
        return;
      }
      return fixedButtonsPanel.fadeOut("700", function() {
        fixedButtonsPanel = null;
        return $(this).remove();
      });
    }
  };

  adaptiveButtonPanelHandler = function(_buttonsPanel) {
    var _actionsSpan, adaptiveButtonsPanel, adaptiveButtonsPanelLength, bpWidth, bplWidth, bprWidth, button_up, leftButtonsPanel, rightButtonsPanel, sumBlocksWidth;
    if (rightButtonsCnt === 0) {
      return;
    }
    leftButtonsPanel = _buttonsPanel.find(".buttons-panel-left");
    rightButtonsPanel = _buttonsPanel.find(".buttons-panel-right");
    adaptiveButtonsPanel = _buttonsPanel.find(".buttons-panel-adaptive");
    if (actionsWidth === 0) {
      actionsWidth = adaptiveButtonsPanel.outerWidth();
      if (actionsWidth === 0) {
        return;
      }
    }
    button_up = _buttonsPanel.find(".buttons-up");
    bpWidth = _buttonsPanel.outerWidth();
    bplWidth = leftButtonsPanel.outerWidth();
    bprWidth = rightButtonsPanel.outerWidth();
    _actionsSpan = adaptiveButtonsPanel.find("#action");
    sumBlocksWidth = bplWidth + bprWidth;
    if (button_up.length) {
      sumBlocksWidth += button_up.outerWidth();
    }
    if (wnd.outerWidth() < 700 || sumBlocksWidth >= bpWidth) {
      if (bplWidth + actionsWidth >= bpWidth) {
        _actionsSpan.hide();
      } else {
        _actionsSpan.show();
      }
      rightButtonsPanel.hide();
      adaptiveButtonsPanel.show();
      adaptiveButtonsPanel.find("ul.dropdown-menu").css("display", "");
    } else {
      rightButtonsPanel.show();
      adaptiveButtonsPanel.hide();
    }
    adaptiveButtonsPanelLength = adaptiveButtonsPanel.has("li").length;
    if (!adaptiveButtonsPanelLength) {
      return adaptiveButtonsPanel.hide();
    }
  };

  ButtonsPanelCtrl.prototype.init = function() {
    $(".buttons-panel-fixed").hide();
    buttonsPanel = $(".buttons-panel").filter(":not(.no-actions)");
    if (buttonsPanel.length > 1) {
      buttonsPanel = buttonsPanel.filter(":visible");
      if (!buttonsPanel.length) {
        buttonsPanel = $(".buttons-panel").first();
      } else {
        buttonsPanel = buttonsPanel.first();
      }
    }
    buttonsPanelTopOffset = buttonsPanel.length ? buttonsPanel.offset().top : 0;
    addActionsButtons(buttonsPanel);
    if (!buttonsPanel) {
      return;
    }
    wnd.scroll(function() {
      var scrollTopBody;
      fixedButtonPanelHandler();
      scrollTopBody = $("body").scrollTop();
      if (scrollTopBody !== 0) {
        return $(".buttons-panel-adaptive").removeClass("open");
      }
    });
    wnd.resize(function() {
      fixedButtonPanelHideBySmallScreen();
      adaptiveButtonPanelHandler(buttonsPanel);
      if (wnd.scrollTop() > buttonsPanelTopOffset) {
        return adaptiveButtonPanelHandler(fixedButtonsPanel);
      }
    });
    $(document).bind('pageReady', function() {
      adaptiveButtonPanelHandler(buttonsPanel);
      return actionsWidth = buttonsPanel.find(".buttons-panel-adaptive").outerWidth();
    });
    return adaptiveButtonPanelHandler(buttonsPanel);
  };

  ButtonsPanelCtrl.prototype.addFixedExtraButtons = function(buttons) {
    return fixedExtraButtons = buttons;
  };

  return ButtonsPanelCtrl;

})();

$(document).ready(function() {
  window.buttonsPanelCtrl = new ButtonsPanelCtrl;
  window.buttonsPanelCtrl.init();
});

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/**
 * @preserve 
 * bootpag - jQuery plugin for dynamic pagination
 *
 * Copyright (c) 2013 botmonster@7items.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://botmonster.com/jquery-bootpag/
 *
 * Version:  1.0.5
 *
 */
(function($, window) {

    $.fn.bootpag = function(options){

        var $owner = this, 
            settings = $.extend({
                total: 0,
                page: 1,
                maxVisible: null,
                leaps: true,
                href: 'javascript:void(0);',
                hrefVariable: '{{number}}',
                next: '&raquo;',
                prev: '&laquo;'
            }, 
            $owner.data('settings') || {}, 
            options || {});

        if(settings.total <= 0)
            return this;

          if(!$.isNumeric(settings.maxVisible) && !settings.maxVisible){
            settings.maxVisible = settings.total;
        }

        $owner.data('settings', settings);

        function renderPage($bootpag, page){
        
            var lp, 
                maxV = settings.maxVisible == 0 ? 1 : settings.maxVisible,
                step = settings.maxVisible == 1 ? 0 : 1,
                vis = Math.floor((page - 1) / maxV) * maxV,
                $page = $bootpag.find('li');
            settings.page = page = page < 0 ? 0 : page > settings.total ? settings.total : page;
            $page.removeClass('disabled');
            lp = page - 1 < 1 ? 1 : 
                    settings.leaps && page - 1 >= settings.maxVisible ? 
                        Math.floor((page - 1) / maxV) * maxV : page - 1;
            $page
                .first()
                .toggleClass('disabled', page === 1)
                .attr('data-lp', lp)
                .find('a').attr('href', href(lp));
            
            var step = settings.maxVisible == 1 ? 0 : 1;
            
            lp = page + 1 > settings.total ? settings.total : 
                    settings.leaps && page + 1 < settings.total - settings.maxVisible ? 
                        vis + settings.maxVisible + step: page + 1;
       
            $page
                .last()
                .toggleClass('disabled', page === settings.total)
                .attr('data-lp', lp)
                .find('a').attr('href', href(lp));;

            var $currPage = $page.filter('[data-lp='+page+']');
            if(!$currPage.not('.next,.prev').length){
                var d = page <= vis ? -settings.maxVisible : 0;
                $page.not('.next,.prev').each(function(index){
                    lp = index + 1 + vis + d;
                    $(this)
                        .attr('data-lp', lp)
                        .toggle(lp <= settings.total)
                        .find('a').html(lp).attr('href', href(lp));
                });
                $currPage = $page.filter('[data-lp='+page+']');
            }
            $currPage.addClass('disabled');
            $owner.data('settings', settings);
        }

        function href(c){

            return settings.href.replace(settings.hrefVariable, c);
        }

        return this.each(function(){
            
            var $bootpag, lp, me = $(this),
                p = ['<ul class="pagination bootpag">'];

            if(settings.prev){
                p.push('<li data-lp="1" class="prev"><a href="'+href(1)+'">'+settings.prev+'</a></li>');
            }
            for(var c = 1; c <= Math.min(settings.total, settings.maxVisible); c++){
                p.push('<li data-lp="'+c+'"><a href="'+href(c)+'">'+c+'</a></li>');
            }
            if(settings.next){
                lp = settings.leaps && settings.total > settings.maxVisible
                    ? Math.min(settings.maxVisible + 1, settings.total) : 2;
                p.push('<li data-lp="'+lp+'" class="next"><a href="'+href(lp)+'">'+settings.next+'</a></li>');
            }
            p.push('</ul>');
            me.find('ul.bootpag').remove();
            me.append(p.join(''));
            $bootpag = me.find('ul.bootpag');
            me.find('li').click(function paginationClick(){
            
                var me = $(this);
                if(me.hasClass('disabled')){
                    return;
                }
                var page = parseInt(me.attr('data-lp'), 10);
                renderPage($bootpag, page);
                $owner.trigger('page', page);
            });
            renderPage($bootpag, settings.page);
        });
    }

})(jQuery, window);

//# sourceMappingURL=core-scripts.js.map

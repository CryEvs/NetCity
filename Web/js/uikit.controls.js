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
    select: function(options) {
      var control, i, item, len, ref, ref1;
      control = $("<select></select>").addClass("form-control").attr("id", options.id).attr("name", options.name);
      ref = options.items;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        $("<option></option>").val(item.value).append((ref1 = item.title) != null ? ref1.escapeHTML() : void 0).appendTo(control);
      }
      return control;
    },
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

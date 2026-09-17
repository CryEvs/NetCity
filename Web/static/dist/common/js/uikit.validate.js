var uikitValidation;

uikitValidation = (function($) {
  var fixDateInputs, options, self;
  self = this;
  fixDateInputs = function(validator, dateInput, element) {
    validator.dateInputs = validator.dateInputs || {};
    if (validator.dateInputs[element.name]) {
      return;
    }
    dateInput.on('changeDate', function() {
      var input;
      if (Event.type === "keyup") {
        return;
      }
      input = $(this).find('.date-input');
      input.validate().resetForm();
      return input.trigger('blur');
    });
    return validator.dateInputs[element.name] = true;
  };
  options = {
    highlight: function(element) {
      var dateInput;
      $(element).closest('.form-group').addClass('has-error');
      dateInput = $(element).closest(".input-group.date");
      if (dateInput.length) {
        return fixDateInputs(this, dateInput, element);
      }
    },
    unhighlight: function(element) {
      var formGroup, helpBlocks;
      formGroup = $(element).closest('.form-group');
      helpBlocks = formGroup.find('[id*="-error"]:visible');
      if (helpBlocks.length === 0) {
        return $(element).closest('.form-group').removeClass('has-error');
      }
    },
    errorElement: "span",
    errorClass: "help-block",
    errorPlacement: function(error, element) {
      var $element, $elementParent, elementName;
      $element = $(element);
      elementName = $element.attr('name');
      if (self.customOptions && self.customOptions[elementName] && self.customOptions[elementName].errorPlacement) {
        return self.customOptions[elementName].errorPlacement(error, element);
      }
      $elementParent = $element.parent();
      if ($elementParent.is('.input-group')) {
        return error.insertAfter($elementParent);
      } else {
        return error.insertAfter(element);
      }
    }
  };
  $.validator.setDefaults(options);
  $.validator.addMethod('permissibleLength', function(value, element, params) {
    return !value || _.some(params, function(length) {
      return value.length === length;
    });
  });
  $.validator.addMethod('pattern', function(value, element, pattern) {
    return this.optional(element) || pattern.test(value);
  });
  $.validator.addMethod('selectRequired', function(value, element) {
    return value !== '-1';
  });
  $.validator.addMethod('validDate', function(value, element) {
    return !value || str2date(value);
  }, language.Generic.Common.kErrInvalidDate);
  $.validator.addMethod('dependLists', function(value, element, params) {
    var dependsFieldElementVal, matches;
    dependsFieldElementVal = $(params.dependsField.selector).val();
    matches = params.matchesDictionary[dependsFieldElementVal];
    if (!matches) {
      return true;
    }
    return matches.indexOf(parseInt(value)) > -1;
  }, function(params) {
    var dependsField, dependsFieldElementVal, element, i, itemDct, itemId, itemIds, itemOpt, itemOpts, j, len, len1, str, text;
    dependsField = params.dependsField;
    element = $(dependsField.selector);
    dependsFieldElementVal = element.val();
    text = element.find(':selected').text();
    itemIds = params.matchesDictionary[dependsFieldElementVal];
    itemOpts = arguments[1].childNodes;
    itemDct = {};
    for (i = 0, len = itemOpts.length; i < len; i++) {
      itemOpt = itemOpts[i];
      itemDct[itemOpt.value] = itemOpt.text;
    }
    str = 'Для поля "' + dependsField.fieldName + '" со значением "' + text + '" разрешены следующие значения текущего поля: <ul>';
    for (j = 0, len1 = itemIds.length; j < len1; j++) {
      itemId = itemIds[j];
      str += '<li>' + itemDct[itemId] + '</li>';
    }
    return str + '</ul>';
  });
  $.validator.addMethod('dependElements', function(value, element, params) {
    var dependFunc;
    dependFunc = params.dependFunc;
    if (!dependFunc) {
      return true;
    }
    return dependFunc();
  }, function(params) {
    return params.message;
  });
  $.validator.addMethod('dependsLength', function(value, element, params) {
    var dependsField, dependsFieldElementVal, parity, valueLength;
    dependsField = params.dependsField;
    dependsFieldElementVal = dependsField.element.val();
    valueLength = dependsFieldElementVal.length;
    if (!valueLength) {
      return true;
    }
    parity = params.lengths[valueLength.toString()];
    return typeof parity === 'undefined' || parity === value.length;
  }, function(params) {
    var dependsField, dependsFieldElementVal, parity, subText, valueLength;
    dependsField = params.dependsField;
    dependsFieldElementVal = dependsField.element.val();
    valueLength = dependsFieldElementVal.length;
    parity = params.lengths[valueLength.toString()];
    subText = 'символ';
    if (valueLength > 1 && valueLength < 5) {
      subText = 'символа';
    } else if (valueLength > 4) {
      subText = 'символов';
    }
    if (parity === 0) {
      return $.validator.format('Для поля {0} длиной {1} {2} данное поле заполнять не нужно', [dependsField.fieldName, valueLength.toString(), subText]);
    }
    return $.validator.format('Для поля {0} длиной {1} {2} длина данного поля должна быть равна {3} символам', [dependsField.fieldName, valueLength.toString(), subText, parity]);
  });
  return this;
})(jQuery);

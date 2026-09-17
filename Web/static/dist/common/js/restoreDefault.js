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

var EmCardInfoCtrl,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

EmCardInfoCtrl = (function() {
  function EmCardInfoCtrl() {
    this.SaveCard = bind(this.SaveCard, this);
    this.emCardInfoTmpl;
    this.context = {
      language: language
    };
    this.focusInput = function(element, panelId, message) {
      var formGroup, isExpanded, label, panel;
      panel = $(element).closest(panelId, 'div.panel');
      isExpanded = panel.attr('aria-expanded');
      if (isExpanded !== 'true') {
        panel.collapse('show');
      }
      formGroup = $(element).closest('.form-group');
      label = formGroup.find('label').text();
      message = message.replace('{0}', label);
      return focusAlert(element, message);
    };
    this.checkFormat = function(sourceStr, availableLengths, checkPtrn) {
      var result;
      if (!sourceStr) {
        return false;
      }
      if (availableLengths && availableLengths.length) {
        result = _.some(availableLengths, function(length) {
          return length === sourceStr.length;
        });
        if (!result) {
          return false;
        }
      }
      if (checkPtrn) {
        return checkPtrn.test(sourceStr);
      }
      return true;
    };
  }

  EmCardInfoCtrl.prototype.GetCardInfo = function() {
    var getEmCardInfo, getEmCardInfoTemplate, queries;
    queries = [];
    getEmCardInfoTemplate = $.ajax({
      url: "/vendor/pages/templates/emCard/emCardInfo.html",
      cache: true,
      success: (function(_this) {
        return function(data) {
          return _this.emCardInfoTmpl = data.replace(/(?:\r\n|\r|\n)/g, '');
        };
      })(this)
    });
    getEmCardInfo = jsSubmit({
      action: "/webapi/em/" + appContext.emId + "/info",
      method: "GET",
      contentType: "application/json",
      showProcessing: true,
      onSuccess: (function(_this) {
        return function(emCardInfo) {
          if (!emCardInfo) {
            return;
          }
          return $.extend(_this.context, {
            emCardInfo: emCardInfo
          });
        };
      })(this)
    });
    queries.push(getEmCardInfoTemplate);
    queries.push(getEmCardInfo);
    return extDeferred.when(queries).then((function(_this) {
      return function() {
        var html, template;
        template = Handlebars.compile(_this.emCardInfoTmpl);
        html = template(_this.context);
        return $('#cardInfo').html(html);
      };
    })(this));
  };

  EmCardInfoCtrl.prototype.SaveCard = function() {
    var emCardInfo, inn, legalAddress, message, nationOlympOrg, npaDetails, ogrn, panelId;
    panelId = '#geneos';
    message = language.Generic.SetupSchoolUI.kMobileLenMustBe;
    legalAddress = $('input[name="LegalAddress"]').val();
    inn = document.EMSchools.Inn;
    ogrn = document.EMSchools.Ogrn;
    npaDetails = $('input[name="NPADetails"]').val();
    nationOlympOrg = $('input[name="NationOlympOrg"]:checked').length;
    if (!this.checkFormat(inn.value, [10, 12], /^\d+$/g)) {
      return this.focusInput(inn, panelId, message.replace('{1}', '10 или 12'));
    }
    if (!this.checkFormat(ogrn.value, [13], /^\d+$/g)) {
      return this.focusInput(ogrn, panelId, message.replace('{1}', '13'));
    }
    emCardInfo = {
      legalAddress: legalAddress,
      inn: inn.value,
      ogrn: ogrn.value,
      npaDetails: npaDetails,
      nationOlympOrg: nationOlympOrg > 0
    };
    return jsSubmit({
      action: "/webapi/em/" + appContext.emId + "/info",
      method: "POST",
      data: emCardInfo,
      contentType: "application/json",
      showProcessing: true,
      onSuccess: function() {
        window.dataWereChanged = false;
        return alert(language.Generic.Common.kDataSaved);
      }
    });
  };

  return EmCardInfoCtrl;

})();

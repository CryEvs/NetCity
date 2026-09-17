var FillingStatFormInfoCtrl;

FillingStatFormInfoCtrl = (function() {
  function FillingStatFormInfoCtrl(container, filterPanel) {
    this.container = container;
    this.filterPanel = filterPanel;
    this.context;
    this.statFormInfoTemplate;
    this.printOptions = {
      viewHeader: true,
      processingFunc: [
        function(printBlock, copyBlock) {
          return copyBlock.find('.alert-info').remove();
        }
      ]
    };
    this.buildStatFormInfoView = function(forEditing) {
      var html, template;
      template = Handlebars.compile(this.statFormInfoTemplate);
      if (!this.context.statFormInfo.length) {
        this.container.hide();
        $("#openToEditButton").hide();
        alert(language.Generic.Common.kNoDetails);
        return;
      }
      $("#openToEditButton").show();
      this.context.forEditing = forEditing || false;
      html = template(this.context);
      this.container.html(html);
      return this.container.show();
    };
  }

  FillingStatFormInfoCtrl.prototype.browseStatFormInfo = function() {
    var currVals, getStatFormInfo, getStatFormInfoTemplate, params, queries, statformId;
    queries = new Array();
    currVals = this.filterPanel.getValues();
    statformId = currVals.STATFORMID;
    params = {
      emId: currVals.EMID,
      provinceId: currVals.PROVINCEID,
      cityId: currVals.CITYID,
      year: currVals.YEAR,
      eoType: currVals.EOTYPEID,
      mns: currVals.MNS ? !!parseInt(currVals.MNS[0]) : false,
      onlyOpened: currVals.ONLYOPENED.length > 0
    };
    getStatFormInfoTemplate = $.ajax({
      url: '/vendor/pages/templates/statforms/fillinginfo.html',
      cache: true,
      success: (function(_this) {
        return function(data) {
          return _this.statFormInfoTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
        };
      })(this)
    });
    getStatFormInfo = jsSubmit({
      action: "/webapi/em/schools/statforms/" + statformId + "/fillingInfo",
      data: params,
      showProcessing: true,
      method: "GET",
      onSuccess: (function(_this) {
        return function(statFormInfo) {
          return _this.context = {
            statFormInfo: statFormInfo,
            language: language
          };
        };
      })(this)
    });
    queries.push(getStatFormInfoTemplate);
    queries.push(getStatFormInfo);
    return extDeferred.when(queries).then((function(_this) {
      return function() {
        return _this.buildStatFormInfoView();
      };
    })(this));
  };

  FillingStatFormInfoCtrl.prototype.openToEdit = function() {
    return this.buildStatFormInfoView(true);
  };

  FillingStatFormInfoCtrl.prototype.reopenForms = function() {
    var currVals, el, reopenStatFormContext, statformId;
    currVals = this.filterPanel.getValues();
    statformId = currVals.STATFORMID;
    el = $('table input:checked');
    if (el.length === 0) {
      return alert(language.Generic.EMReports.kErrSchoolsForOpeningFormNotSelected);
    }
    reopenStatFormContext = {
      year: currVals.YEAR,
      mns: currVals.MNS ? !!parseInt(currVals.MNS[0]) : false,
      schoolIds: el.map(function() {
        return $(this).val();
      }).get()
    };
    return jsSubmit({
      action: "/webapi/em/schools/statforms/" + statformId + "/open",
      data: reopenStatFormContext,
      showProcessing: true,
      method: "POST",
      onSuccess: function() {
        var statusCells;
        statusCells = $('table td:nth-child(5)');
        return el.each(function() {
          var indx;
          indx = $(this).closest('tr').index() - 1;
          statusCells.eq(indx).text(language.Generic.Common.kOpened);
          return $(this).remove();
        });
      }
    });
  };

  FillingStatFormInfoCtrl.prototype.getForEditing = function() {
    if (!this.context) {
      return false;
    }
    return this.context.forEditing || false;
  };

  FillingStatFormInfoCtrl.prototype.cancel = function() {
    return this.buildStatFormInfoView();
  };

  FillingStatFormInfoCtrl.prototype.print = function() {
    return this.container.printUtils().toPrint(this.printOptions);
  };

  FillingStatFormInfoCtrl.prototype["export"] = function() {
    return this.container.printUtils().toExcel(this.printOptions);
  };

  return FillingStatFormInfoCtrl;

})();

(function(exp, name) {
  var exported, exports;
  exported = false;
  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === void 0)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})(FillingStatFormInfoCtrl);

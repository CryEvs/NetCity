var limitsController;

limitsController = (function() {
  var addLimitsTpl, settings;

  settings = {
    noLimits: false,
    valEps: 0.000001,
    componentList: null,
    iupComponentList: null,
    grades: null,
    gradeLabels: null,
    minGrade: null,
    maxGrade: null
  };

  function limitsController(_settings) {
    settings = $.extend({}, settings, _settings);
  }

  addLimitsTpl = '<div class="row"> <div class="col-md-12"> <div class="form-group"> <label class="control-label col-md-3">{{language.Generic.SetupSchoolCalendar.kComponent}}</label> <div class="col-md-9"> <select name="COMPID" class="form-control"> {{#each components}} <option value="{{this.id}}">{{this.name}}</option> {{/each}} </select> </div> </div> </div> </div> <div class="row" style="padding-top: 15px"> <div class="col-md-12"> <table class="table table-bordered table-compact table-condensed scrollable"> <tr> <th colspan="{{count}}">{{language.SetupSchoolCalendar.kGradesHours}}</th> </tr> <tr> {{#each grades}} <th>{{this}}</th> {{/each}} </tr> <tr> {{#each grades}} <td class="input-cell"><input name="Hours" type="text" value="" maxlength="5" size="{{../textInputSize}}" OnChange="dataChanged()"></td> {{/each}} </tr> </table> </div> </div>';

  limitsController.prototype.canSubmit = function(formName, isIup, addDialog) {
    var compLimit, el, errCnt, form, getMergedArray, i, j, k, l, lim, list, m, n, n0, n0summ, n1, ref, ref1, ref2, ref3, ref4, totalLimit, valParse;
    getMergedArray = function(query) {
      var formInputs;
      formInputs = $(query, $("[name=" + formName + "]"));
      if (!addDialog) {
        return formInputs;
      }
      return $.merge(formInputs, $(query, addDialog.$modalBody));
    };
    if (isDBBusy()) {
      return false;
    }
    form = document.forms[formName];
    list = getMergedArray('[name=COMPID]');
    if (settings.noLimits) {
      if (!isIup) {
        if (list.length !== 0) {
          if (parseInt($('*[name="COMPID"]').val()) !== 0) {
            list.focus();
            alert(language.Generic.SetupSchoolCalendar.kEnterLimitFirst);
            return false;
          }
        }
      }
    }
    el = getMergedArray('[name=Hours]');
    errCnt = -1;
    if (el.length > 0) {
      for (i = j = 0, ref = el.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        valParse = str2floatEx(el[i]);
        if (valParse !== '') {
          if (isNaN(valParse) || (valParse < settings.valEps)) {
            errCnt = i;
            break;
          }
        }
      }
      if (errCnt !== -1) {
        el[errCnt].focus();
        alert(language.Generic.SetupSchoolCurPlan.kEnterNumberGreater_0);
        return false;
      }
    }
    if (!isIup) {
      lim = new Array(settings.grades);
      n0summ = 0;
      if (el.length <= settings.grades) {
        return true;
      }
      for (i = l = 0, ref1 = settings.grades - 1; 0 <= ref1 ? l <= ref1 : l >= ref1; i = 0 <= ref1 ? ++l : --l) {
        lim[i] = 0;
        k = 1;
        while (k * settings.grades < el.length) {
          n0 = str2floatEx(el[i]);
          n0summ = n0summ + n0;
          n1 = str2floatEx(el[i + k * settings.grades]);
          if (!isNaN(n1) && (n1 !== '')) {
            if (isNaN(n0) || (n0 === '')) {
              el[i].focus();
              alert(language.Generic.SetupSchoolCalendar.kUndefinedLimit + " " + i % settings.grades + " " + language.SetupSchoolCalendar.kForLimit);
              return false;
            }
          }
          k++;
        }
      }
      if (n0summ === 0) {
        alert(language.Generic.SetupSchoolCalendar.kLimitMustBe);
        return false;
      }
      for (i = m = ref2 = settings.grades, ref3 = el.length - 1; ref2 <= ref3 ? m <= ref3 : m >= ref3; i = ref2 <= ref3 ? ++m : --m) {
        totalLimit = str2floatEx(el[i % settings.grades]);
        compLimit = str2floatEx(el[i]);
        if (!isNaN(compLimit) && (compLimit !== '')) {
          if (compLimit > (totalLimit + settings.valEps)) {
            el[i].focus();
            alert(language.Generic.SetupSchoolCalendar.kOverflowLimit);
            return false;
          }
          lim[i % settings.grades] = lim[i % settings.grades] + compLimit;
        }
      }
      for (i = n = 0, ref4 = settings.grades; 0 <= ref4 ? n <= ref4 : n >= ref4; i = 0 <= ref4 ? ++n : --n) {
        if ((lim[i] > settings.valEps) && (lim[i] > (str2floatEx(el[i]) + settings.valEps))) {
          el[i].focus();
          alert(language.Generic.SetupSchoolCalendar.kSumLimit1 + " " + i + " " + language.SetupSchoolCalendar.kSumLimit2);
          return false;
        }
      }
    }
    return true;
  };

  limitsController.prototype.doSave = function(formName, isIup, addDialog) {
    var data;
    if (!this.canSubmit(formName, isIup, addDialog)) {
      return false;
    }
    if (addDialog) {
      data = $("[name=MAX_GRADE], [name=IUP], [name=COMPID], [name=Hours]", $("form[name=" + formName + "]"));
      if (addDialog) {
        data = $.merge(data, $("input, select", addDialog.$modalContent));
      }
      data = data.serializeArray();
      $.show.processing();
      return postTo("/asp/SetupSchool/Calendar/Curriculum/CuriculumLimitsSave.asp", data);
    } else {
      return jsSaveForm(document.forms[formName]);
    }
  };

  limitsController.prototype.addLimits = function(formName, IUP) {
    var ctrl, model;
    if (!this.canSubmit(formName, IUP)) {
      return false;
    }
    ctrl = this;
    model = {
      textInputSize: 2,
      language: language,
      count: settings.grades
    };
    if (IUP) {
      model.components = settings.iupComponentList;
    } else {
      model.components = settings.componentList;
    }
    if (model.components.length === 0) {
      $.show.message(language.Generic.SetupSchoolCalendar.kAllCurriculumLimitsDefined);
      return;
    }
    model.grades = (function() {
      var gradeLabels, j, maxGrade, minGrade, results;
      minGrade = settings.minGrade;
      maxGrade = settings.maxGrade;
      gradeLabels = settings.gradeLabels;
      if (!gradeLabels) {
        gradeLabels = (function() {
          results = [];
          for (var j = minGrade; minGrade <= maxGrade ? j <= maxGrade : j >= maxGrade; minGrade <= maxGrade ? j++ : j--){ results.push(j); }
          return results;
        }).apply(this);
      }
      return gradeLabels;
    })();
    return $.show.modelDialog({
      title: language.Generic.SetupSchoolCalendar.kAddComponentLimit,
      model: model,
      template: addLimitsTpl,
      size: BootstrapDialog.SIZE_WIDE
    }).then(function(dialog) {
      return ctrl.doSave(formName, IUP, dialog);
    });
  };

  return limitsController;

})();

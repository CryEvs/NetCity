var checksFilter, checksFilter2, dateFilter, dateRange, dateRangeFilter, dependencyTracker, filter, filterPanel, listFilter, listFilter2, listRangeFilter, listWithArrowsFilter, textFilter,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

filterPanel = (function() {
  var template;

  template = '<div class="filters-panel form-horizontal"></div>';

  function filterPanel(container, model, sources, filterPanelHandlers, buttonsPanel, listContainer, lazyInit, checkChanges) {
    this.container = container;
    this.model = model;
    this.sources = sources;
    this.filterPanelHandlers = filterPanelHandlers;
    this.buttonsPanel = buttonsPanel;
    this.listContainer = listContainer;
    this.checkChanges = checkChanges;
    this.filters = [];
    this.handlers_ready = [];
    this.handlers_init = [];
    this.handlers_emptyChoice = [];
    if (this.buttonsPanel) {
      this.handlers_init.push((function(_this) {
        return function() {
          _this.buttonsPanel.hide();
          if (_this.listContainer) {
            return _this.listContainer.html('<div class="col-md-12 alert alert-info" role="alert">' + language.Generic.Movement.kMsgApplyBtnClick + '</div>');
          }
        };
      })(this));
      this.handlers_ready.push((function(_this) {
        return function() {
          _this.buttonsPanel.show();
          if (window.buttonsPanelCtrl) {
            return window.buttonsPanelCtrl.init();
          }
        };
      })(this));
      this.handlers_emptyChoice.push((function(_this) {
        return function() {
          _this.buttonsPanel.hide();
          if (_this.listContainer) {
            _this.listContainer.html('<div class="col-md-12 alert alert-danger" role="alert">' + language.Generic.Movement.kMsgNoChoice + '</div>');
          }
        };
      })(this));
    }
    if (this.container.hasClass("filters-panel")) {
      this.panel = this.container;
    } else {
      this.panel = $(template);
      this.container.append(this.panel);
    }
    if (!lazyInit) {
      this.initPanel();
    }
  }

  filterPanel.prototype.initPanel = function() {
    var active, ctor, filterCtrl, filterModel, filterSource, i, len, ref, satisfied;
    this.changeStatus("init");
    if (this.model === null) {
      $.show.error("Ошибка инициализации фильтр-панели. Модель не заполнена.");
      return;
    }
    ref = _.sortBy(this.model.filters, function(item) {
      return item.order;
    });
    for (i = 0, len = ref.length; i < len; i++) {
      filterModel = ref[i];
      active = true;
      filterSource = _.findWhere(this.sources, {
        filterId: filterModel.id
      });
      if (!filterSource) {
        active = false;
      }
      filterCtrl = null;
      ctor = null;
      switch (filterModel.filterType) {
        case "List2":
          ctor = listFilter2;
          break;
        case "List":
          ctor = listFilter;
          break;
        case "ListWithArrows":
          ctor = listWithArrowsFilter;
          break;
        case "DateRange":
          ctor = dateRangeFilter;
          break;
        case "Date":
          ctor = dateFilter;
          break;
        case "Checks2":
          ctor = checksFilter2;
          break;
        case "Checks":
          ctor = checksFilter;
          break;
        case "ListRange":
          ctor = listRangeFilter;
          break;
        case "Text":
          ctor = textFilter;
          break;
        default:
          $.show.error("Ошибка инициализации фильтр-панели. Неподдерживаемый тип фильтра " + filterModel.filterType);
          return;
      }
      filterCtrl = new ctor(this, filterModel);
      if (filterModel.dependencies) {
        satisfied = filterModel.control.dependenciesSatisfied();
        if (!satisfied) {
          active = false;
        }
      }
      if (filterSource) {
        filterCtrl.setSource(filterSource);
      }
      this.setFilterStatus(filterCtrl);
      this.filters.push(filterCtrl);
      if (!active) {
        filterCtrl.changeStatus("inactive");
      }
      filterCtrl.appendToPanel(this.panel);
    }
    this.panel.find(".form-group.aux").insertAfter(this.panel.find('.form-group:last-child'));
    return this.tryReady();
  };

  filterPanel.prototype.tryReady = function() {
    if (!this.checkEmptyChoice()) {
      return this.changeStatus("ready");
    }
  };

  filterPanel.prototype.changeStatus = function(status) {
    var emptyChoiceFilter, fpValues, handler, i, j, k, len, len1, len2, ref, ref1, ref2, results;
    console.log(status);
    this.panel.removeClass(this.status);
    this.status = status;
    this.panel.addClass(this.status);
    if (this.status === "ready") {
      fpValues = this.getValues();
      ref = this.handlers_ready;
      for (i = 0, len = ref.length; i < len; i++) {
        handler = ref[i];
        handler(fpValues);
      }
    }
    if (this.status === "init") {
      ref1 = this.handlers_init;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        handler = ref1[j];
        handler();
      }
    }
    if (this.status === "emptyChoice") {
      emptyChoiceFilter = _.find(this.filters, function(ft) {
        return ft.getStatus() === "emptyChoice";
      });
      ref2 = this.handlers_emptyChoice;
      results = [];
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        handler = ref2[k];
        results.push(handler(emptyChoiceFilter));
      }
      return results;
    }
  };

  filterPanel.prototype.setFilterStatus = function(filterCtrl) {
    if (filterCtrl.emptyChoice) {
      if (filterCtrl.model.optionalFlag) {
        return filterCtrl.changeStatus("inactive");
      } else {
        return filterCtrl.changeStatus("emptyChoice");
      }
    } else {
      return filterCtrl.changeStatus("active");
    }
  };

  filterPanel.prototype.getValues = function(excludeFilters) {
    var activeFilters, keyValues, values;
    values = {};
    activeFilters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (excludeFilters) {
      activeFilters = _.difference(activeFilters, excludeFilters);
    }
    keyValues = _.map(activeFilters, function(x) {
      return [x.id, x.getChoice()];
    });
    values = _.object(keyValues);
    return values;
  };

  filterPanel.prototype.getCtxValues = function(excludeFilters) {
    var activeFilters;
    activeFilters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (excludeFilters) {
      activeFilters = _.difference(activeFilters, excludeFilters);
    }
    return _.map(activeFilters, function(x) {
      return {
        filterId: x.id,
        filterValue: x.getChoice(),
        filterText: x.getChoiceText()
      };
    });
  };

  filterPanel.prototype.getTexts = function(forFilters) {
    var filters, keyValues, texts;
    texts = {};
    filters = _.filter(this.filters, function(ft) {
      return ft.getStatus() === "active";
    });
    if (forFilters) {
      filters = _.filter(filters, function(ft) {
        return _.contains(forFilters, ft.id);
      });
    }
    keyValues = _.map(filters, function(x) {
      return [x.id, x.getChoiceText()];
    });
    texts = _.object(keyValues);
    return texts;
  };

  filterPanel.prototype.checkChoiceEnabling = function() {
    return _.find(this.filters, function(ft) {
      return ft.getChoiceEnabling();
    });
  };

  filterPanel.prototype.checkEmptyChoice = function() {
    var emptyFilter, i, len, ref;
    ref = _.filter(this.filters, function(item) {
      return item.getStatus() === "active" || item.getStatus() === "emptyChoice";
    });
    for (i = 0, len = ref.length; i < len; i++) {
      emptyFilter = ref[i];
      if (emptyFilter.emptyChoice && !emptyFilter.model.OptionalFlag) {
        this.changeStatus("emptyChoice");
        return true;
      }
    }
    return false;
  };

  filterPanel.prototype.changedValue = function(filter, value, prevValue) {
    var preSendActionsPromise;
    console.log(filter.id + " = " + value);
    if (this.status === "init") {
      return;
    }
    preSendActionsPromise = true;
    if (this.checkChanges) {
      preSendActionsPromise = window.checkForChanges;
    }
    return extDeferred.when(preSendActionsPromise).then((function(_this) {
      return function() {
        var ctx, dependentFilters, existNextFilter, i, id, len, nextFilter, nextFilters, requestOptions, val, vals;
        _this.changeStatus("init");
        dependentFilters = filter.getDependency();
        vals = _this.getValues(dependentFilters);
        ctx = {
          selectedData: []
        };
        for (id in vals) {
          val = vals[id];
          ctx.selectedData.push({
            filterId: id,
            filterValue: val
          });
        }
        nextFilters = _.chain(_this.filters).sortBy(function(ft) {
          return ft.model.order;
        }).filter(function(ft) {
          return ft.model.order > filter.model.order;
        }).value();
        existNextFilter = false;
        if (!nextFilters) {
          _this.checkEmptyChoice();
        }
        for (i = 0, len = nextFilters.length; i < len; i++) {
          nextFilter = nextFilters[i];
          if (!nextFilter.model.dependencies) {
            existNextFilter = true;
            continue;
          }
          if (!nextFilter.dependenciesSatisfied()) {
            nextFilter.changeStatus("inactive");
            continue;
          }
          existNextFilter = true;
        }
        requestOptions = {
          action: _this.filterPanelHandlers,
          dataType: "json",
          contentType: 'application/json',
          forceData: JSON.stringify(ctx),
          showProcessing: dependentFilters.length || existNextFilter,
          method: "post"
        };
        if (!dependentFilters.length || !existNextFilter) {
          _this.tryReady();
          if (filter.existStateProvider) {
            requestOptions.showProcessing = false;
            jsSubmit(requestOptions);
          }
          return;
        }
        return jsSubmit(requestOptions).fail(function(xhr) {
          var dependFilter, j, len1, results;
          _this.changeStatus("emptyChoice");
          results = [];
          for (j = 0, len1 = dependentFilters.length; j < len1; j++) {
            dependFilter = dependentFilters[j];
            results.push(dependFilter.changeStatus("inactive"));
          }
          return results;
        }).then(function(response) {
          var filterCtrl, filterSrc, j, k, len1, len2, satisfied;
          for (j = 0, len1 = response.length; j < len1; j++) {
            filterSrc = response[j];
            filterCtrl = _.find(dependentFilters, function(ft) {
              return ft.id === filterSrc.filterId && (!ft.model.dependencies || ft.dependenciesSatisfied());
            });
            if (!filterCtrl) {
              continue;
            }
            filterCtrl.setSource(filterSrc);
            _this.setFilterStatus(filterCtrl);
          }
          vals = _this.getValues();
          for (k = 0, len2 = nextFilters.length; k < len2; k++) {
            filterCtrl = nextFilters[k];
            if (filterCtrl.model.dependencies) {
              satisfied = filterCtrl.dependenciesSatisfied();
              if (!satisfied) {
                filterCtrl.changeStatus("inactive");
              }
            }
          }
          return _this.tryReady();
        });
      };
    })(this));
  };

  filterPanel.prototype.choiceOnFilter = function(filterId, val) {};

  filterPanel.prototype.choiceComplete = function() {};

  filterPanel.prototype.choiceInProgress = function() {};

  filterPanel.prototype.validate = function() {
    var isValid;
    isValid = true;
    _.each(this.filters, function(filter) {
      if (filter.getStatus() !== "active") {
        return;
      }
      if (!filter.validate) {
        return;
      }
      if (!filter.validate()) {
        isValid = false;
      }
    });
    return isValid;
  };

  filterPanel.prototype.ready = function(handler) {
    return this.handlers_ready.push(handler);
  };

  filterPanel.prototype.init = function(handler) {
    return this.handlers_init.push(handler);
  };

  filterPanel.prototype.emptyChoice = function(handler) {
    return this.handlers_emptyChoice.push(handler);
  };

  return filterPanel;

})();

dependencyTracker = (function() {
  function dependencyTracker(dependencies) {
    this.dependencies = dependencies;
  }

  dependencyTracker.prototype.checkDependency = function(vals, dep) {
    var arrValue, relFilterValue, relObject;
    relObject = dep.relatedObject;
    if (relObject.type === "Param") {
      return true;
    }
    if (relObject.type !== "Filter") {
      $.show.error("Неизвестный тип зависимости для фильтра");
      return false;
    }
    relFilterValue = vals[relObject.ref];
    if (typeof relFilterValue === 'undefined' || relFilterValue === null) {
      return false;
    }
    switch (dep.condition) {
      case "Equals":
        return relFilterValue === dep.relatedValue;
      case "Greater":
        return relFilterValue > dep.relatedValue;
      case "Less":
        return relFilterValue < dep.relatedValue;
      case "NotEquals":
        return relFilterValue !== dep.relatedValue;
      case "Any":
        return true;
      case "NotContains":
        return typeof relFilterValue === 'string' && relFilterValue.toString().indexOf(dep.relatedValue) < 0;
      case "Contains":
        return typeof relFilterValue === 'string' && relFilterValue.toString().indexOf(dep.relatedValue) >= 0;
      case "In":
        arrValue = JSON.parse(dep.relatedValue);
        if (!Array.isArray(arrValue)) {
          return false;
        }
        return _.some(arrValue, function(v) {
          return v === relFilterValue;
        });
      default:
        return false;
    }
  };

  dependencyTracker.prototype.isSatisfied = function(vals) {
    return _.every(this.dependencies, (function(_this) {
      return function(dep) {
        return _this.checkDependency(vals, dep);
      };
    })(this));
  };

  return dependencyTracker;

})();

filter = (function() {
  function filter(panel1, model) {
    var html, ref, ref1, template, titleInfo;
    this.panel = panel1;
    this.model = model;
    this.id = this.model.id;
    this.emptyChoice = false;
    this.childFilters = [];
    this.filterRow = null;
    this.choice = null;
    this.control = (ref = this.control) != null ? ref : null;
    this.status = (ref1 = this.status) != null ? ref1 : null;
    this.choiceEnabling = true;
    this.existStateProvider = this.model.existStateProvider;
    this.model.control = this;
    template = Handlebars.compile('<div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">{{{title}}}</label> <div class="col-md-8 col-lg-5 col-sm-8"> <div id="filter-control"></div> </div> </div>');
    titleInfo = this.model.hideTitleFlag ? "" : this.model.title;
    html = template({
      title: titleInfo
    });
    this.filterRow = $(html);
    this.filterRow.find("#filter-control").replaceWith(this.control);
  }

  filter.prototype.appendToPanel = function(panel) {
    return panel.append(this.filterRow);
  };

  filter.prototype.changeStatus = function(status) {
    this.filterRow.removeClass(this.status);
    this.status = status;
    this.filterRow.addClass(this.status);
    switch (status) {
      case "inactive":
        return this.disable();
      case "active":
        return this.enable();
    }
  };

  filter.prototype.getChoiceEnabling = function() {
    return this.choiceEnabling;
  };

  filter.prototype.setChoiceEnabling = function(choiceEnabling) {
    return this.choiceEnabling = choiceEnabling;
  };

  filter.prototype.getStatus = function() {
    return this.status;
  };

  filter.prototype.addChild = function(filter) {
    return this.childFilters.push(filter);
  };

  filter.prototype.getChoice = function() {
    return this.choice;
  };

  filter.prototype.getChoiceText = function() {
    return this.choice;
  };

  filter.prototype.setChoice = function(choice) {
    var prevChoice;
    prevChoice = this.choice;
    this.choice = choice;
    this.panel.changedValue(this, choice, prevChoice);
    return this.filterRow.trigger(this.id + ':change', [choice, prevChoice, this]);
  };

  filter.prototype.setSource = function(src) {
    if (src.defaultValue || (src.defaultValue === "")) {
      return this.setChoice(src.defaultValue);
    }
  };

  filter.prototype.getDependency = function() {
    var dependentFilter, dependentFilters, fltFunc, i, j, len, len1, subDependentFilters, testFilter, testFilterModel, testFilters;
    testFilters = _.filter(this.panel.filters, (function(_this) {
      return function(item) {
        return item.model.order > _this.model.order;
      };
    })(this));
    dependentFilters = [];
    for (i = 0, len = testFilters.length; i < len; i++) {
      testFilter = testFilters[i];
      testFilterModel = testFilter.model;
      if (!testFilterModel.dependencies) {
        continue;
      }
      fltFunc = (function(_this) {
        return function(dependency) {
          return (dependency.relatedObject.type === "Filter") && dependency.relatedObject.ref === _this.model.id;
        };
      })(this);
      if (!_.some(testFilterModel.dependencies, fltFunc)) {
        continue;
      }
      dependentFilters.push(testFilter);
    }
    for (j = 0, len1 = dependentFilters.length; j < len1; j++) {
      dependentFilter = dependentFilters[j];
      subDependentFilters = dependentFilter.getDependency();
      if ((subDependentFilters != null ? subDependentFilters.length : void 0) === 0) {
        continue;
      }
      subDependentFilters = _.reject(subDependentFilters, function(subDepFlt) {
        return _.findWhere(dependentFilters, {
          id: subDepFlt.id
        });
      });
      if (subDependentFilters.length === 0) {
        continue;
      }
      dependentFilters = _.union(dependentFilters, subDependentFilters);
    }
    return dependentFilters;
  };

  filter.prototype.dependenciesSatisfied = function() {
    var tracker, vals;
    vals = this.panel.getValues();
    tracker = new dependencyTracker(this.model.dependencies);
    return tracker.isSatisfied(vals);
  };

  return filter;

})();

listFilter = (function(superClass) {
  var allOptionVal, nullOptionVal;

  extend(listFilter, superClass);

  allOptionVal = "-1";

  nullOptionVal = "-2";

  function listFilter(panel1, model) {
    var ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.sourceIds = [];
    this.control = $("<select></select>").addClass("form-control").attr("name", this.model.id).change(function() {
      return ctrl.setChoice($(this).val());
    });
    listFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  listFilter.prototype.setSource = function(src) {
    var ctrl, item, itemsCount;
    ctrl = this;
    src.items = src.items || [];
    this.sourceIds = [];
    if (this.model.nullOption) {
      src.items.unshift({
        title: this.model.nullOption,
        value: nullOptionVal
      });
    }
    if (this.model.allOption) {
      this.sourceIds.unshift(allOptionVal);
    }
    this.sourceIds = this.sourceIds.concat(_.pluck(src.items, "value"));
    itemsCount = src.items.length;
    this.emptyChoice = !itemsCount;
    this.control.empty();
    if (itemsCount > 0) {
      if (itemsCount === 1) {
        this.setChoiceEnabling(false);
        item = src.items[0];
        this.setLabel(item.title, item.value);
        if (src.defaultValue) {
          src.defaultValue = item.value;
        }
        if (this.model.hideSingleOption) {
          ctrl.filterRow.addClass("hidden");
        }
      } else {
        this.setList(src.items);
      }
    } else {
      this.setChoiceEnabling(false);
      this.setLabel(this.model.emptyText);
    }
    if (this.model.hideSingleOption && itemsCount !== 1) {
      ctrl.filterRow.removeClass("hidden");
    }
    return listFilter.__super__.setSource.call(this, src);
  };

  listFilter.prototype.setList = function(items) {
    var actualItems, i, item, len, ref, results;
    this.control.show();
    this.enable();
    if (this.labelBlock) {
      this.labelBlock.remove();
      this.labelBlock = null;
    }
    actualItems = items;
    if (this.model.allOption) {
      actualItems.unshift({
        title: this.model.allOption,
        value: allOptionVal
      });
    }
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.control));
    }
    return results;
  };

  listFilter.prototype.setLabel = function(title, value) {
    var valInput;
    this.control.hide();
    this.disable();
    if (this.labelBlock) {
      this.labelBlock.remove();
      this.labelBlock = null;
    }
    this.labelBlock = $("<div></div>");
    this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(title));
    if (value) {
      valInput = $("<input type=\"hidden\" />").attr("name", this.model.id).val(value);
      this.labelBlock.append(valInput);
    }
    return this.labelBlock.insertAfter(this.control);
  };

  listFilter.prototype.setChoice = function(choice) {
    if (!_.contains(this.sourceIds, choice)) {
      choice = _.first(this.sourceIds);
    }
    this.control.val(choice);
    return listFilter.__super__.setChoice.call(this, choice);
  };

  listFilter.prototype.getChoiceText = function() {
    if (this.labelBlock) {
      return this.labelBlock.find('input[type=text]').val();
    } else {
      return $("option:selected", this.control).text();
    }
  };

  listFilter.prototype.enable = function() {
    if (this.labelBlock) {
      return this.labelBlock.find("input[type=hidden]").removeAttr("disabled");
    } else {
      return this.control.removeAttr("disabled");
    }
  };

  listFilter.prototype.disable = function() {
    if (this.labelBlock) {
      return this.labelBlock.find("input[type=hidden]").attr("disabled", "disabled");
    } else {
      return this.control.attr("disabled", "disabled");
    }
  };

  return listFilter;

})(filter);

dateRange = (function() {
  function dateRange(startDate1, endDate1) {
    this.startDate = startDate1;
    this.endDate = endDate1;
  }

  dateRange.parseDate = function(str) {
    var date, strDate;
    strDate = str.substring(0, 19);
    date = strDate.length === 19 ? new Date(strDate) : dateUtils.str2date(strDate);
    return date;
  };

  dateRange.parseRange = function(str) {
    var endDate, range, rangeArr, startDate;
    rangeArr = str.split(" - ");
    if (rangeArr[0]) {
      startDate = dateRange.parseDate(rangeArr[0]);
    }
    if (rangeArr[1]) {
      endDate = dateRange.parseDate(rangeArr[1]);
    }
    range = new dateRange(startDate, endDate);
    range.source = str;
    return range;
  };

  dateRange.prototype.toString = function() {
    var ret;
    ret = "";
    if (this.startDate) {
      ret += JSON.stringify(dateUtils.asUTCDate(this.startDate));
    }
    ret += " - ";
    if (this.endDate) {
      ret += JSON.stringify(dateUtils.asUTCDate(this.endDate));
    }
    return ret.replace(/"/g, "");
  };

  dateRange.prototype.isValid = function() {
    return this.startDate <= this.endDate;
  };

  return dateRange;

})();

dateRangeFilter = (function(superClass) {
  extend(dateRangeFilter, superClass);

  function dateRangeFilter(panel1, model) {
    var baseName, ctrl, dateChanged, endControl, endDateBlur, endDateChanged, endDateChangedAndBlur, separatorCtrl, startControl, startDateBlur, startDateChanged, startDateChangedAndBlur;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.startDateIsChanged = false;
    this.endDateIsChanged = false;
    baseName = this.model.id;
    startControl = $("<input type=\"text\" class=\"input-md form-control start-date\"/>").attr("name", baseName + "_start");
    endControl = $("<input type=\"text\" class=\"input-md form-control end-date\"/>").attr("name", baseName + "_end");
    separatorCtrl = $("<span class=\"input-group-addon\">—</span>");
    this.control = $("<div class=\"input-daterange input-group date\"></div>").append(startControl).append(separatorCtrl).append(endControl);
    dateInput.initDateInput(this.control, "", "", "", {
      autoCorrectDates: false,
      keepEmptyField: true
    }, true);
    dateChanged = (function(_this) {
      return function() {
        var endDate, range, startDate;
        if (_this.status === 'inactive') {
          return;
        }
        startDate = _this.control.find('.start-date').val();
        endDate = _this.control.find('.end-date').val();
        range = !startDate && !endDate ? null : startDate + " - " + endDate;
        return _this.setChoice(range, true);
      };
    })(this);
    startDateBlur = (function(_this) {
      return function() {
        var dtStartDate, endDate, startDate;
        if (_this.startDateIsChanged) {
          _this.startDateIsChanged = false;
          startDate = _this.control.find('.start-date').val();
          endDate = _this.control.find('.end-date').val();
          if (startDate && endDate) {
            dtStartDate = dateRange.parseDate(startDate);
            if (dtStartDate > dateRange.parseDate(endDate)) {
              if (_this.validateDate(dtStartDate)) {
                _this.control.find('.end-date').val(startDate);
              }
            }
          }
          return dateChanged();
        }
      };
    })(this);
    endDateBlur = (function(_this) {
      return function() {
        var dtEndDate, endDate, startDate;
        if (_this.endDateIsChanged) {
          _this.endDateIsChanged = false;
          startDate = _this.control.find('.start-date').val();
          endDate = _this.control.find('.end-date').val();
          if (startDate && endDate) {
            dtEndDate = dateRange.parseDate(endDate);
            if (dtEndDate < dateRange.parseDate(startDate)) {
              if (_this.validateDate(dtEndDate)) {
                _this.control.find('.start-date').val(endDate);
              }
            }
          }
          return dateChanged();
        }
      };
    })(this);
    startDateChanged = (function(_this) {
      return function() {
        _this.startDateIsChanged = true;
      };
    })(this);
    endDateChanged = (function(_this) {
      return function() {
        _this.endDateIsChanged = true;
      };
    })(this);
    startDateChangedAndBlur = (function(_this) {
      return function() {
        if (!_this.startDateIsChanged) {
          startDateChanged();
          return startDateBlur();
        }
      };
    })(this);
    endDateChangedAndBlur = (function(_this) {
      return function() {
        if (!_this.endDateIsChanged) {
          endDateChanged();
          return endDateBlur();
        }
      };
    })(this);
    this.control.find('.start-date').on("blur", startDateBlur);
    this.control.find('.end-date').on("blur", endDateBlur);
    this.control.find('.start-date').on("change", startDateChanged);
    this.control.find('.end-date').on("change", endDateChanged);
    this.control.find('.start-date').datepicker().on("changeDate", startDateChangedAndBlur);
    this.control.find('.end-date').datepicker().on("changeDate", endDateChangedAndBlur);
    dateRangeFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  dateRangeFilter.prototype.setSource = function(src) {
    var maxDate, minDate, range;
    minDate = moment(src.minValue).toDate();
    maxDate = moment(src.maxValue).toDate();
    this.control.find('.start-date, .end-date').datepicker("setStartDate", minDate);
    this.control.find('.start-date, .end-date').datepicker("setEndDate", maxDate);
    this.src = src;
    range = new dateRange(minDate, maxDate);
    this.setChoice(range, true);
    return dateRangeFilter.__super__.setSource.call(this, src);
  };

  dateRangeFilter.prototype.getChoice = function() {
    var currChoice, currRange;
    currChoice = this.choice;
    currRange = new dateRange(currChoice.startDate, currChoice.endDate);
    return currRange.toString();
  };

  dateRangeFilter.prototype.getChoiceText = function() {
    var currChoice;
    currChoice = this.choice;
    return moment(currChoice.startDate).format('DD.MM.YYYY') + " - " + moment(currChoice.endDate).format('DD.MM.YYYY');
  };

  dateRangeFilter.prototype.setChoice = function(choice, internal) {
    var endDate, range, startDate;
    if (!choice) {
      return;
    }
    if (this.choice && this.choice.source && this.choice.source === choice) {
      return;
    }
    range = choice.startDate || choice.endDate ? choice : dateRange.parseRange(choice);
    dateRangeFilter.__super__.setChoice.call(this, range);
    if (internal) {
      return;
    }
    if (range.startDate) {
      this.control.find('.start-date').datepicker('update', dateUtils.date2str(range.startDate));
    }
    if (range.endDate) {
      this.control.find('.end-date').datepicker('update', dateUtils.date2str(range.endDate));
    }
    startDate = this.control.find('.start-date').val();
    endDate = this.control.find('.end-date').val();
    if (!startDate || !endDate) {
      range = startDate + " - " + endDate;
      return this.setChoice(range, true);
    }
  };

  dateRangeFilter.prototype.validateDate = function(dt) {
    var maxValue, minValue;
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    return dt >= minValue && dt <= maxValue;
  };

  dateRangeFilter.prototype.validate = function() {
    var endDate, maxValue, minValue, startDate;
    if (this.choice.startDate === null || !this.choice.startDate) {
      $.show.error(language.Generic.Common.kErrInvalidStartDate);
      return false;
    }
    if (this.choice.endDate === null || !this.choice.endDate) {
      $.show.error(language.Generic.Common.kErrInvalidEndDate);
      return false;
    }
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    startDate = dateUtils.asUTCDate(this.choice.startDate.clone());
    endDate = dateUtils.asUTCDate(this.choice.endDate.clone());
    if (startDate < minValue || startDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidStartDate + '\n' + language.Generic.Common.kStartEndDatesInCurrYear);
      return false;
    }
    if (endDate < minValue || endDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidEndDate + '\n' + language.Generic.Common.kStartEndDatesInCurrYear);
      return false;
    }
    if (!this.choice.isValid()) {
      $.show.error(language.Generic.Common.kMsgStartBeforeEnd);
      return false;
    }
    return true;
  };

  dateRangeFilter.prototype.enable = function() {
    return this.control.find("input").removeAttr("disabled");
  };

  dateRangeFilter.prototype.disable = function() {
    return this.control.find("input").attr("disabled", "disabled");
  };

  return dateRangeFilter;

})(filter);

dateFilter = (function(superClass) {
  extend(dateFilter, superClass);

  function dateFilter(panel1, model) {
    var baseName, buttonCtrl, control, ctrl, dateChanged, inputCtrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    baseName = this.model.id;
    control = $("<input type=\"text\" class=\"input-md form-control filter-date\"/>").attr("name", baseName);
    buttonCtrl = $("<button type=\"button\" class=\"btn btn-primary\">").append($("<span class=\"glyphicon glyphicon-calendar\"></span>")).append($("</button>"));
    inputCtrl = $("<span class=\"input-group-btn\">").append(buttonCtrl).append($("</span>"));
    this.control = $("<div class=\"input-group date\">").append(control).append(inputCtrl).append($("</div>"));
    dateInput.initDateInput(this.control, null, null, null, {
      autoCorrectDates: false,
      keepEmptyField: true,
      autoclose: true
    }, true);
    dateChanged = (function(_this) {
      return function() {
        var filterDate;
        if (_this.status === 'inactive') {
          return;
        }
        filterDate = dateUtils.str2date(_this.control.find('.filter-date').val());
        return _this.setChoice(filterDate, true);
      };
    })(this);
    this.control.find('.filter-date').on("change", dateChanged);
    dateFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  dateFilter.prototype.setSource = function(src) {
    var filterDate, maxDate, minDate;
    minDate = moment(src.minValue).toDate();
    maxDate = moment(src.maxValue).toDate();
    this.control.datepicker("setStartDate", minDate);
    this.control.datepicker("setEndDate", maxDate);
    filterDate = moment(src.defaultValue).toDate();
    this.control.datepicker("setDate", filterDate);
    this.setChoice(filterDate, true);
    return this.src = src;
  };

  dateFilter.prototype.setChoice = function(choice, internal) {
    var filterDate;
    if (!choice) {
      dateFilter.__super__.setChoice.call(this, null);
      return;
    }
    if (this.choice && this.choice.source && this.choice.source === choice) {
      return;
    }
    if (!internal) {
      this.control.datepicker('update', choice);
    }
    filterDate = dateUtils.str2date(this.control.find('.filter-date').val());
    return dateFilter.__super__.setChoice.call(this, filterDate);
  };

  dateFilter.prototype.validate = function() {
    var filterDate, maxValue, minValue;
    if (this.choice === null || !this.choice) {
      $.show.error(language.Generic.Common.kErrInvalidDate);
      return false;
    }
    minValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.minValue));
    maxValue = dateUtils.asUTCDate(dateRange.parseDate(this.src.maxValue));
    filterDate = dateUtils.asUTCDate(this.choice.clone());
    if (filterDate < minValue || filterDate > maxValue) {
      $.show.error(language.Generic.Common.kErrInvalidDate + '\n' + language.Generic.Common.kDateMustBeInCurrYear);
      return false;
    }
    return true;
  };

  dateFilter.prototype.enable = function() {
    return this.control.find("input").removeAttr("disabled");
  };

  dateFilter.prototype.disable = function() {
    return this.control.find("input").attr("disabled", "disabled");
  };

  return dateFilter;

})(filter);

checksFilter = (function(superClass) {
  extend(checksFilter, superClass);

  function checksFilter(panel1, model) {
    var checkboxChanged, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    checkboxChanged = (function(_this) {
      return function() {
        var checkboxValues;
        if (_this.status === 'inactive') {
          return;
        }
        checkboxValues = _this.control.find('input:checked').map(function() {
          return $(this).prop('value');
        }).get().join();
        return ctrl.setChoice(checkboxValues);
      };
    })(this);
    this.control = $("<div></div>").on("change", checkboxChanged);
    checksFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  checksFilter.prototype.setSource = function(src) {
    var itemsCount, ref;
    this.control.empty();
    itemsCount = (ref = src.items) != null ? ref.length : void 0;
    if (itemsCount > 0) {
      this.setChecks(src.items);
      if (src.defaultValue) {
        return this.setChoice(src.defaultValue);
      }
    } else {
      return this.setChoiceEnabling(false);
    }
  };

  checksFilter.prototype.getChoice = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).prop('value');
    }).get().join();
  };

  checksFilter.prototype.getChoiceText = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).parent().text();
    }).get().join();
  };

  checksFilter.prototype.setChoice = function(choice) {
    var checkedItems, i, item, len;
    if (choice) {
      checkedItems = choice.split(',');
      for (i = 0, len = checkedItems.length; i < len; i++) {
        item = checkedItems[i];
        if (item || item === "0") {
          this.control.find('input:checkbox[value=' + item + ']').attr("checked", "");
        }
      }
    }
    return checksFilter.__super__.setChoice.call(this, choice);
  };

  checksFilter.prototype.setChecks = function(items) {
    var actualItems, chk, i, item, lbl, len, results;
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      chk = $("<input type=\"checkbox\" />").attr("name", this.model.id).val(item.value);
      if (item.readOnly) {
        chk.on("click", function() {
          return false;
        });
      }

      /*
      			if item.checked
      				chk.attr("checked", "")
       */
      lbl = $("<label></label>").text(item.title).prepend(chk);
      results.push($("<div class=\"checkbox\"></div>").append(lbl).appendTo(this.control));
    }
    return results;
  };

  checksFilter.prototype.enable = function() {};

  checksFilter.prototype.disable = function() {};

  checksFilter.prototype.validate = function() {
    var choice;
    choice = this.getChoice();
    if (this.model.hasSureCheckedFlag && (choice === null || choice === "")) {
      $.show.error("Не выбраны значения фильтра \"" + this.model.title + "\"");
      return false;
    }
    return true;
  };

  return checksFilter;

})(filter);

checksFilter2 = (function(superClass) {
  extend(checksFilter2, superClass);

  function checksFilter2(panel1, model) {
    var checkboxChanged, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    checkboxChanged = (function(_this) {
      return function() {
        var checkboxValues;
        if (_this.status === 'inactive') {
          return;
        }
        if (_this.model.hasSureCheckedFlag && !_this.control.find(".panel-body").find("input:checked").length > 0) {
          alert(language.Generic.Filter.kSureCheckedMsg.replace('{0}', _this.model.title));
          return false;
        }
        checkboxValues = (_this.control.find('.panel-body')).find('input:checked').map(function() {
          return $(this).prop('value');
        }).get().join();
        return ctrl.setChoice(checkboxValues);
      };
    })(this);
    this.control = $("<div></div>");
    this.control = $("<div class='panel panel-default'>" + "<div class='panel-heading' role='tab' id='heading" + this.model.id + "'>" + "<h4 class='panel-title'>" + "<a data-toggle='collapse' data-parent='#' class='collapsed' data-target='#" + this.model.id + "' aria-expanded='false' aria-controls='" + this.model.id + "'>" + this.model.title + "</a>" + "</h4>" + "</div>" + "<div id='" + this.model.id + "' class='panel-collapse collapse' aria-labelledby='heading" + this.model.id + "' role='tabpanel'>" + "<div class='panel-body'>" + "</div>" + "</div>" + "</div>");
    this.control.empty = (function(_this) {
      return function() {
        return _this.control.find(".panel-body").empty();
      };
    })(this);
    this.control.on("change", ".panel-body", checkboxChanged);
    checksFilter2.__super__.constructor.call(this, this.panel, this.model);
  }

  checksFilter2.prototype.setSource = function(src) {
    var itemsCount, ref;
    this.emptyChoice = false;
    this.control.empty();
    itemsCount = (ref = src.items) != null ? ref.length : void 0;
    if (itemsCount > 0) {
      this.setChecks(src.items);
      if (src.defaultValue) {
        return this.setChoice(src.defaultValue);
      }
    } else {
      if (this.model.emptyText) {
        this.labelBlock = $("<div></div>");
        this.labelBlock.append($("<input type=\"text\" class=\"form-control\" />").attr("disabled", "disabled").val(this.model.emptyText));
        this.labelBlock.appendTo(this.control);
        this.emptyChoice = true;
      }
      return this.setChoiceEnabling(false);
    }
  };

  checksFilter2.prototype.getChoice = function() {
    return (this.control.find('.panel-body')).find('input:checked').map(function() {
      return $(this).prop('value');
    }).get().join();
  };

  checksFilter2.prototype.getChoiceText = function() {
    return this.control.find('input:checked').map(function() {
      return $(this).parent().text();
    }).get().join();
  };

  checksFilter2.prototype.setChoice = function(choice) {
    var checkedItems, i, item, len;
    if (choice) {
      checkedItems = choice.split(',');
      for (i = 0, len = checkedItems.length; i < len; i++) {
        item = checkedItems[i];
        if (item || item === "0") {
          this.control.find('.panel-body').find('input:checkbox[value=' + item + ']').attr("checked", "");
        }
      }
    }
    return checksFilter2.__super__.setChoice.call(this, choice);
  };

  checksFilter2.prototype.setChecks = function(items) {
    var actualItems, chk, i, item, lbl, len, results;
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      chk = $("<input type=\"checkbox\" />").attr("name", this.model.id).val(item.value);
      if (item.readOnly) {
        chk.on("click", function() {
          return false;
        });
      }

      /*
      			if item.checked
      				chk.attr("checked", "")
       */
      lbl = $("<label></label>").text(item.title).prepend(chk);
      results.push($("<div class=\"checkbox\"></div>").append(lbl).appendTo(this.control.find(".panel-body")));
    }
    return results;
  };

  checksFilter2.prototype.enable = function() {};

  checksFilter2.prototype.disable = function() {};

  checksFilter2.prototype.validate = function() {
    var choice;
    choice = this.getChoice();
    if (this.model.hasSureCheckedFlag && (choice === null || choice === "")) {
      $.show.error("Не выбраны значения фильтра \"" + this.model.title + "\"");
      return false;
    }
    return true;
  };

  return checksFilter2;

})(filter);

listRangeFilter = (function(superClass) {
  extend(listRangeFilter, superClass);

  function listRangeFilter(panel1, model) {
    var baseName, ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    baseName = this.model.id;
    this.startControl = $("<select></select>").addClass("form-control").attr("name", baseName + "_start").change(function() {
      return ctrl.setChoice($(this).val(), 1);
    });
    this.endControl = $("<select></select>").addClass("form-control").attr("name", baseName + "_end").change(function() {
      return ctrl.setChoice($(this).val(), 2);
    });
    this.separatorCtrl = $("<span class=\"input-group-addon\">-</span>");
    this.control = $("<div class=\"input-group\"></div>").append(this.startControl).append(this.separatorCtrl).append(this.endControl);
    listRangeFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  listRangeFilter.prototype.setSource = function(src) {
    var itemsCount, ref, ref1, ref2;
    this.emptyChoice = ((ref = src.itemsFrom) != null ? ref.length : void 0) === 0;
    this.startControl.empty();
    itemsCount = (ref1 = src.itemsFrom) != null ? ref1.length : void 0;
    if (itemsCount > 0) {
      this.setListFrom(src.itemsFrom);
    }
    this.endControl.empty();
    itemsCount = (ref2 = src.itemsTo) != null ? ref2.length : void 0;
    if (itemsCount > 0) {
      this.setListTo(src.itemsTo);
    }
    this.defVal = src.defaultValue;
    if (this.defVal) {
      this.setChoice(this.defVal);
    }
    return listRangeFilter.__super__.setSource.call(this, src);
  };

  listRangeFilter.prototype.setListFrom = function(items) {
    var actualItems, i, item, len, ref, results;
    this.startControl.show();
    this.enable();
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.startControl));
    }
    return results;
  };

  listRangeFilter.prototype.setListTo = function(items) {
    var actualItems, i, item, len, ref, results;
    this.endControl.show();
    this.enable();
    actualItems = items;
    results = [];
    for (i = 0, len = actualItems.length; i < len; i++) {
      item = actualItems[i];
      results.push($("<option></option>").val(item.value).append((ref = item.title) != null ? ref.escapeHTML() : void 0).appendTo(this.endControl));
    }
    return results;
  };

  listRangeFilter.prototype.setChoice = function(choice, partNum) {
    var choiceIndex, endChoice, endChoiceIndex, sepIndex, startChoice, startChoiceIndex;
    if (typeof partNum !== "undefined") {
      if (partNum === 1) {
        endChoice = this.endControl.val();
        this.startControl.val(choice);
        if (choice && endChoice) {
          choiceIndex = $(this.startControl).find("option[value='" + choice + "']")[0].index;
          endChoiceIndex = $(this.endControl).find("option[value='" + endChoice + "']")[0].index;
          if (endChoiceIndex < choiceIndex) {
            this.endControl.val(choice);
          }
        }
      } else if (partNum === 2) {
        startChoice = this.startControl.val();
        this.endControl.val(choice);
        if (choice && startChoice) {
          choiceIndex = $(this.endControl).find("option[value='" + choice + "']")[0].index;
          startChoiceIndex = $(this.startControl).find("option[value='" + startChoice + "']")[0].index;
          if (choiceIndex < startChoiceIndex) {
            this.startControl.val(choice);
          }
        }
      }
      choice = this.getChoice();
    } else {
      sepIndex = choice.indexOf(" - ");
      if (sepIndex) {
        this.startControl.val(choice.substring(0, sepIndex), 1);
        this.endControl.val(choice.substring(sepIndex + 3), 2);
      }
    }
    return listRangeFilter.__super__.setChoice.call(this, choice);
  };

  listRangeFilter.prototype.getChoice = function() {
    return this.startControl.val() + " - " + this.endControl.val();
  };

  listRangeFilter.prototype.enable = function() {
    return this.control.removeAttr("disabled");
  };

  listRangeFilter.prototype.disable = function() {
    return this.control.attr("disabled", "disabled");
  };

  return listRangeFilter;

})(filter);

listWithArrowsFilter = (function(superClass) {
  extend(listWithArrowsFilter, superClass);

  function listWithArrowsFilter(panel1, model) {
    var buttonGroup, leftButton, rightButton;
    this.panel = panel1;
    this.model = model;
    listWithArrowsFilter.__super__.constructor.call(this, this.panel, this.model);
    $(this.control).addClass("list-with-arrows");
    $(this.control).wrapAll('<div class="input-group">');
    leftButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-left"></span></button>').click((function(_this) {
      return function(event) {
        var newValue;
        if (isButtonsLock()) {
          return;
        }
        newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").prev('option').val();
        _this.setChoice(newValue);
      };
    })(this));
    rightButton = $('<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-right"></span></button>').click((function(_this) {
      return function(event) {
        var newValue;
        if (isButtonsLock()) {
          return;
        }
        newValue = $(event.target).closest(".input-group").find("select").find("option").filter(":selected").next('option').val();
        _this.setChoice(newValue);
      };
    })(this));
    buttonGroup = $('<span class="input-group-btn"></span>').append(leftButton).append(rightButton);
    $(this.control).parent().append(buttonGroup);
  }

  return listWithArrowsFilter;

})(listFilter);

listFilter2 = (function(superClass) {
  extend(listFilter2, superClass);

  function listFilter2() {
    return listFilter2.__super__.constructor.apply(this, arguments);
  }

  listFilter2.prototype.setSource = function(src) {
    var ref;
    listFilter2.__super__.setSource.call(this, src);
    if (((ref = src.items) != null ? ref.length : void 0) > 1) {
      return this.select2Control = this.control.select2({
        placeholder: "Введите наименование",
        language: "ru"
      });
    } else {
      this.control.select2();
      this.control.select2('close');
      return this.control.siblings('span.select2').hide();
    }
  };

  return listFilter2;

})(listFilter);

textFilter = (function(superClass) {
  extend(textFilter, superClass);

  function textFilter(panel1, model) {
    var ctrl;
    this.panel = panel1;
    this.model = model;
    ctrl = this;
    this.validationExp = null;
    this.validationErrorMessage = null;
    this.control = $("<input></input>").addClass("form-control").attr("name", this.model.id).change(function() {
      return ctrl.setChoice($(this).val());
    });
    textFilter.__super__.constructor.call(this, this.panel, this.model);
  }

  textFilter.prototype.setSource = function(src) {
    this.setChoice(src != null ? src.defaultValue : void 0);
    this.validationExp = src != null ? src.validationExp : void 0;
    this.validationErrorMessage = src != null ? src.validationErrorMessage : void 0;
    return textFilter.__super__.setSource.call(this, src);
  };

  textFilter.prototype.validate = function() {
    var choice;
    if (this.validationExp) {
      choice = this.getChoice();
      if (!choice.match(this.validationExp)) {
        $.show.error('Фильтр "' + this.model.title + '": ' + this.validationErrorMessage);
        return false;
      }
    }
    return true;
  };

  textFilter.prototype.getChoice = function() {
    return $(this.control).val();
  };

  textFilter.prototype.setChoice = function(choice) {
    $(this.control).val(choice);
    if (this.model.optionalFlag || choice) {
      this.emptyChoice = false;
    } else {
      this.emptyChoice = true;
    }
    return textFilter.__super__.setChoice.call(this, choice);
  };

  textFilter.prototype.enable = function() {
    return this.control.removeAttr("disabled");
  };

  textFilter.prototype.disable = function() {
    return this.control.attr("disabled", "disabled");
  };

  return textFilter;

})(filter);

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
})({
  filterPanel: filterPanel,
  dependencyTracker: dependencyTracker
});

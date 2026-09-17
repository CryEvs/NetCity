var dateInput;

dateInput = (function() {
  var calendar, limits, onChangeHandler, prepareCalendar, showDateErrorMsg;
  limits = {
    min: new Date(1753, 0, 1),
    max: new Date(2100, 11, 31)
  };
  showDateErrorMsg = function(startDate, endDate) {
    var msg;
    if (startDate) {
      if (!endDate) {
        msg = language.Generic.Common.kErrInvalidStartDate;
      } else if (endDate) {
        msg = language.Generic.Common.kErrInvalidEndDate;
      }
      msg += "\n" + language.Generic.Common.kStartEndDatesInCurrYear;
    } else {
      msg = language.Generic.Common.kDateMustBeInCurrYear;
    }
    return $.show.error(msg);
  };
  calendar = (function() {
    var checkEvents;

    function calendar(holidays1, vacations1, disabledDates1, disabledTooltip1) {
      this.holidays = holidays1;
      this.vacations = vacations1;
      this.disabledDates = disabledDates1;
      this.disabledTooltip = disabledTooltip1;
    }

    checkEvents = function(date, events) {
      return _.some(events, function(event) {
        return event.startDate <= date && event.endDate >= date;
      });
    };

    calendar.prototype.styleDay = function(date) {
      var styleSettings;
      styleSettings = {
        classes: "",
        enabled: true,
        tooltip: ""
      };
      if (checkEvents(date, this.holidays)) {
        styleSettings.classes += " holiday-day";
      }
      if (checkEvents(date, this.vacations)) {
        styleSettings.classes += " vacation-day";
      }
      if (this.disabledDates && this.disabledDates.length > 0) {
        if (_.some(this.disabledDates, function(disabledDate) {
          return disabledDate.equals(date);
        })) {
          styleSettings.enabled = false;
          styleSettings.tooltip = this.disabledTooltip;
        }
      }
      return styleSettings;
    };

    return calendar;

  })();
  prepareCalendar = function(calendarStartDate, calendarEndDate, disabledDates, disabledTooltip, calendarContext) {
    var data, deferred;
    deferred = $.Deferred();
    if (!appContext.yearId) {
      deferred.resolve(new calendar([], [], [], ""));
      return deferred.promise();
    }
    data = {
      yearId: appContext.yearId,
      startDate: calendarStartDate ? dateUtils.date2str(calendarStartDate) : "",
      endDate: calendarEndDate ? dateUtils.date2str(calendarEndDate) : ""
    };
    data = $.extend(data, calendarContext);
    jsSubmit({
      data: data,
      action: "/webapi/calendar",
      method: "GET"
    }).then(function(response) {
      var holidays, preparedCalendar, vacations;
      holidays = _.map(response.holidays, function(holiday) {
        return {
          startDate: new Date(holiday.startDate),
          endDate: new Date(holiday.endDate)
        };
      });
      vacations = _.map(response.vacations, function(vacation) {
        return {
          startDate: new Date(vacation.startDate),
          endDate: new Date(vacation.endDate)
        };
      });
      preparedCalendar = new calendar(holidays, vacations, disabledDates, disabledTooltip);
      return deferred.resolve(preparedCalendar);
    });
    return deferred.promise();
  };
  onChangeHandler = function() {
    return dataChanged();
  };
  return {
    initDateInput: function(jqElement, calendarMinDate, calendarMaxDate, calendarSettings, datePickerOptions, noChangeData) {
      var currentCalendar, initingCalendar, onChangeDateInput, onShow, options, releaseIniting;
      currentCalendar = null;
      initingCalendar = false;
      options = {
        autoclose: true,
        format: dateUtils.getDateFormat().format,
        language: "ru",
        forceParse: false,
        keyboardNavigation: false,
        calendarWeeks: true,
        beforeShowDay: function(date) {
          if (!currentCalendar) {
            return true;
          }
          return currentCalendar.styleDay(date);
        }
      };
      if (typeof datePickerOptions !== "undefined") {
        $.extend(options, datePickerOptions);
      }
      if (calendarMinDate) {
        options.startDate = calendarMinDate;
      }
      if (calendarMaxDate) {
        options.endDate = calendarMaxDate;
      }
      initingCalendar = true;
      jqElement.prop("initingCalendar", true);
      onShow = function(e) {
        if (currentCalendar) {
          return;
        }
        if (!calendarSettings) {
          calendarSettings = {};
        }
        return prepareCalendar(calendarMinDate, calendarMaxDate, calendarSettings.disabledDates, calendarSettings.disabledTooltip, calendarSettings.context).then(function(calendar) {
          currentCalendar = calendar;
          return jqElement.datepicker('update');
        });
      };
      onChangeDateInput = function() {
        if (initingCalendar || noChangeData) {
          return;
        }
        return onChangeHandler.apply(this, arguments);
      };
      jqElement.datepicker(options).on("changeDate", onChangeDateInput).on("show", onShow);
      jqElement.each(function(ind, inputGroupElem) {
        var currDate, inputGroup, normalizedDate;
        inputGroup = $(inputGroupElem);
        currDate = $("input[type='text']", inputGroup).val();
        if (!currDate) {
          return;
        }
        return normalizedDate = dateUtils.str2date(currDate);
      });
      releaseIniting = function() {
        initingCalendar = false;
        return jqElement.prop("initingCalendar", false);
      };
      return setTimeout(releaseIniting, 50);
    },
    initDateInputs: function(calendarMinDate, calendarMaxDate, calendarSettings, datePickerOptions) {
      return this.initDateInput($(".input-group.date"), calendarMinDate, calendarMaxDate, calendarSettings, datePickerOptions);
    },
    setStartDate: function(jqElement, startDate) {
      jqElement.datepicker('setStartDate', startDate);
    },
    setEndDate: function(jqElement, endDate) {
      jqElement.datepicker('setEndDate', endDate);
    },
    onChange: function(handler) {
      return onChangeHandler = handler;
    },
    getDateInputVal: function(inputName) {
      var el;
      el = $("input[name='" + inputName + "']");
      el.val(trimStr(el.val()));
      return el.val();
    },
    getDateInputDate: function(inputName) {
      var strVal;
      strVal = dateInput.getDateInputVal(inputName);
      if (!strVal || strVal.length === 0) {
        return null;
      }
      return dateUtils.str2date(strVal);
    },
    getDateFilterInfo: function(fieldName) {
      var elem, get_date, get_val;
      elem = $("input[name='" + fieldName + "']");
      if (elem.length === 0) {
        return null;
      }
      get_val = function() {
        return elem.val();
      };
      get_date = function() {
        var val;
        val = get_val();
        return dateUtils.str2date(val);
      };
      return {
        element: elem,
        val: function() {
          return get_val();
        },
        date: function() {
          return get_date();
        },
        check: function(message, required) {
          var date;
          if (!get_val()) {
            if (!required) {
              return true;
            }
            focusError(elem, message || language.Generic.Common.kErrInvalidDateNotEmpty);
            return false;
          }
          date = get_date();
          if (date === null || date < limits.min || date > limits.max) {
            focusError(elem, message || language.Generic.Common.kErrInvalidDate);
            return false;
          }
          return true;
        },
        checkDateInterval: function(minDate, maxDate, message, optional) {
          var checkDate;
          checkDate = get_date();
          if (checkDate === null) {
            if (optional) {
              return true;
            }
            focusError(elem, message || language.Generic.Common.kErrInvalidDateNotEmpty);
            return false;
          }
          if (checkDate < minDate || checkDate > maxDate) {
            if (message) {
              focusError(elem, message);
            } else {
              showDateErrorMsg(minDate, maxDate);
            }
            return false;
          }
          return true;
        }
      };
    },
    checkDateInterval: function(fieldName, minDate, maxDate) {
      var checkDate;
      checkDate = getDateInputDate(fieldName);
      if (!checkDate) {
        return true;
      }
      if (checkDate < minDate) {
        showDateErrorMsg(minDate, maxDate);
        return false;
      } else if (checkDate > maxDate) {
        showDateErrorMsg(minDate, maxDate);
        return false;
      }
      return true;
    }
  };
})();

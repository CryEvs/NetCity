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

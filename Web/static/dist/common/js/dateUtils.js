var date2strf, dateUtils, str2datef, strTwoTimef, time2Str_ss_f, timeTwoStrf;

dateUtils = (function() {
  var options, parseDateFormat, parseTimeFormat;
  options = {
    firstYear: parseInt(new Date().getFullYear().toString().substr(-2)) + 15,
    nsFormat: "d" + String.fromCharCode(1) + "mm" + String.fromCharCode(1) + "yy" + String.fromCharCode(1) + ".",
    nsFormatTime: "h" + String.fromCharCode(1) + "mm" + String.fromCharCode(1) + ":" + String.fromCharCode(1),
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
      var tzOffset;
      tzOffset = -(new Date()).getTimezoneOffset() / 60;
      options.timezoneStamp = (tzOffset >= 10 ? "" : "0") + tzOffset + ":00";
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
    },
    asUTCDate: function(dateTime) {
      var date, day, month, year;
      date = new Date(dateTime);
      year = date.getFullYear();
      month = date.getMonth();
      day = date.getDate();
      return new Date(Date.UTC(year, month, day));
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
        } else if ((ye >= 100 && ye < 1000) || ye > 9999) {
          ye = 0/0;
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

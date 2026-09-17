var getItemValue, getListText, getListValue, str2lng, str2lngEx, strCheckIsNull, trimStr,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

str2lngEx = function(el) {
  var nVal, sVal;
  sVal = trimStr(el.value);
  if (sVal !== '') {
    nVal = parseInt(sVal);
    if (!isNaN(nVal)) {
      sVal = nVal.toString();
      el.value = sVal;
    }
    return nVal;
  } else {
    el.value = sVal;
    return sVal;
  }
};

trimStr = function(strStr) {
  return $.trim(strStr);
};

str2lng = function(strValue) {
  var i, j;
  strValue = trimStr(strValue);
  i = 0;
  while (i < strValue.length && strValue.charAt(i) === '0') {
    i++;
  }
  j = i;
  while (j < strValue.length && '0' <= strValue.charAt(j) && strValue.charAt(j) <= '9') {
    j++;
  }
  if (i < strValue.length) {
    return (j < strValue.length ? Number.NaN : parseInt(strValue.substring(i, j), 10));
  } else {
    return 0;
  }
};

strCheckIsNull = function(string) {
  if (string === void 0 || (string == null)) {
    return " ";
  } else {
    return string;
  }
};

getItemValue = function(list) {
  if (list.value !== null) {
    return list.value;
  } else {
    return list.options[list.selectedIndex].value;
  }
};

getListValue = function(list) {
  return list.options[list.selectedIndex].value;
};

getListText = function(list) {
  return list.options[list.selectedIndex].text;
};

(function() {
  var entityMap;
  entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };
  if (indexOf.call(String.prototype, 'escapeHTML') < 0) {
    return String.prototype.escapeHTML = function() {
      return this.replace(/[<>"'\/]|&(?!nbsp;)/g, function(s) {
        return entityMap[s];
      });
    };
  }
})();

if (indexOf.call(String.prototype, 'format') < 0) {
  String.prototype.format = function(replaces) {
    var key, replaceStr, str;
    str = this;
    for (key in replaces) {
      replaceStr = replaces[key];
      str = str.replace("_" + key + "_", replaceStr);
    }
    return str;
  };
}

if (indexOf.call(String.prototype, 'normalizeFileName') < 0) {
  String.prototype.normalizeFileName = function() {
    var name;
    name = this.replace(/["]/g, "'");
    return name.replace(/[\/:*?<>|+\/]/g, "");
  };
}

if (indexOf.call(String.prototype, 'repeat') < 0) {
  String.prototype.repeat = function(count) {
    var rpt, str;
    if (this === null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    str = '' + this;
    if (count !== count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count === 2e308) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length === 0 || count === 0) {
      return '';
    }
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    rpt = '';
    while (1) {
      if ((count & 1) === 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count === 0) {
        break;
      }
      str += str;
    }
    return rpt;
  };
}

var getItemValue, getListText, getListValue, str2lng, str2lngEx, trimStr,
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
      return this.replace(/[&<>"'\/]/g, function(s) {
        return entityMap[s];
      });
    };
  }
})();

if (indexOf.call(String.prototype, 'normalizeFileName') < 0) {
  String.prototype.normalizeFileName = function() {
    var name;
    name = this.replace(/["]/g, "'");
    return name.replace(/[\/:*?<>|+\/]/g, "");
  };
}

//# sourceMappingURL=common.utils.js.map

var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

(function(angular) {
  'use strict';
  return angular.module('irtech.netcity.directive', []).directive("storage", function() {
    var link;
    link = function(scope, element, attributes) {
      var get, id, key, load, save, set, simpleHash, supportLocalStorage, url;
      supportLocalStorage = function() {
        try {
          return indexOf.call(window, 'localStorage') >= 0 && window['localStorage'] !== null;
        } catch (error) {
          return false;
        }
      };
      simpleHash = function(str) {
        var char, hash, i, j, ref;
        hash = 0;
        if (str.length === 0) {
          return hash;
        }
        for (i = j = 0, ref = str.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          char = str.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash = hash & hash;
        }
        return hash;
      };
      id = attributes.ngModel;
      url = /^https?:\/\/([^?#]*)/.exec(document.URL)[1];
      key = "H" + simpleHash(url + "|" + attributes.ngModel);
      if (supportLocalStorage) {
        get = function() {
          return localStorage[key];
        };
        set = function(value) {
          return localStorage[key] = value;
        };
      } else {
        get = function() {
          return $.cookie(key);
        };
        set = function(value) {
          return $.cookie(key, value);
        };
      }
      load = function() {
        scope;
        var value;
        value = get();
        if (value && "undefined" !== value) {
          return eval("scope." + id + "=" + value);
        }
      };
      save = function() {
        scope;
        var value;
        value = JSON.stringify(eval("scope." + id));
        return set(value);
      };
      load();
      return element.on('change', function(event) {
        return setTimeout(save, 1);
      });
    };
    return {
      link: link
    };
  });
})(window.angular);

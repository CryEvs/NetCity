angular.module('netcity.helpers', []).provider('$collectionHelper', function() {
  this.$get = function() {
    return {
      treeTransform: function(items, transformFunc, getChildList) {
        var recurs, transformCollection, transformItem;
        transformItem = function(item, parent) {
          var childs;
          childs = getChildList(item);
          item = transformFunc(item, parent);
          recurs(childs, item);
          return item;
        };
        transformCollection = function(items, parent) {
          var index, item, j, len;
          for (index = j = 0, len = items.length; j < len; index = ++j) {
            item = items[index];
            items[index] = transformItem(item, parent);
          }
        };
        recurs = function(childs, parent) {
          if (!childs || !childs.length || childs.length < 1) {
            return;
          }
          transformCollection(childs, parent);
        };
        if (!items) {
          return;
        }
        if (_.isArray(items)) {
          transformCollection(items, null);
        } else {
          items = transformItem(items, null);
        }
        return items;
      },
      treeForEach: function(items, getChildList, action) {
        var item, j, len, recurs;
        recurs = function(item) {
          var child, childs, index, j, len, results;
          childs = getChildList(item);
          if (!childs || !childs.length || childs.length < 1) {
            return;
          }
          results = [];
          for (index = j = 0, len = childs.length; j < len; index = ++j) {
            child = childs[index];
            action(child);
            results.push(recurs(child));
          }
          return results;
        };
        if (!items) {
          return;
        }
        if (_.isArray(items)) {
          for (j = 0, len = items.length; j < len; j++) {
            item = items[j];
            recurs(item);
          }
        } else {
          action(items);
          recurs(items);
        }
        return items;
      },
      treeToFlatArray: function(items, getChildList) {
        var func, retArr;
        retArr = new Array();
        func = function(items) {
          return _.each(items, function(item) {
            var childs;
            retArr.push(item);
            childs = getChildList(item);
            if (angular.isArray(retArr)) {
              return func(childs);
            }
          });
        };
        func(items);
        return retArr;
      },
      treeSearch: function(items, getChildList, searchCriteria) {
        var iterate, recurs;
        iterate = function(items) {
          var item, j, len, result;
          for (j = 0, len = items.length; j < len; j++) {
            item = items[j];
            result = recurs(item);
            if (result) {
              return result;
            }
          }
          return null;
        };
        recurs = function(item) {
          var childs, searchResult;
          childs = getChildList(item);
          if (!childs || !childs.length || childs.length < 1) {
            return;
          }
          searchResult = _.where(childs, searchCriteria);
          if (searchResult.length > 0) {
            return searchResult[0];
          }
          return iterate(childs);
        };
        return iterate(items);
      }
    };
  };
}).provider("$autoMapper", function() {
  this.$get = function() {
    var dictionary;
    dictionary = {};
    return {
      createMap: function(sourceKey, destinationKey) {
        var combinedKey, functions;
        combinedKey = sourceKey + "_" + destinationKey;
        dictionary[combinedKey] = {};
        return functions = {
          forMember: function(key, e) {
            dictionary[combinedKey][key] = e;
            return functions;
          },
          forAllMembers: function(func) {
            dictionary[combinedKey].__forAllMembers = func;
            return functions;
          }
        };
      },
      map: function(sourceKey, destinationKey, sourceValue, destinationValue, lazy) {
        var combinedKey, extensions, getValue, i, j, key, len, mapItem, mappings, output, srcVal;
        if (!sourceValue && sourceValue !== false) {
          return;
        }
        getValue = function(item) {
          if (typeof item === "function" && !lazy) {
            return item();
          }
          return item;
        };
        combinedKey = sourceKey + "_" + destinationKey;
        mappings = dictionary[combinedKey];
        output = null;
        key = null;
        extensions = {
          ignore: function() {},
          mapFrom: function(sourceMemberKey) {
            var value;
            if (!this.__sourceValue.hasOwnProperty(sourceMemberKey)) {
              throw sourceKey + "." + sourceMemberKey + " не определено";
            }
            value = getValue(this.__sourceValue[sourceMemberKey]);
            if (mappings.__forAllMembers) {
              return mappings.__forAllMembers(this.__destinationValue, this.__key, value);
            } else {
              return this.__destinationValue[this.__key] = value;
            }
          }
        };
        if (!mappings) {
          throw "Не найден соответствующий маппинг из источника " + sourceKey + " в получателя " + destinationKey;
        }
        mapItem = function(destinationValue, sourceValue) {
          var value;
          for (key in destinationValue) {
            if (!destinationValue.hasOwnProperty(key)) {
              continue;
            }
            if (mappings.hasOwnProperty(key) && mappings[key]) {
              if (typeof mappings[key] === "function") {
                extensions.__key = key;
                extensions.__sourceValue = sourceValue;
                extensions.__destinationValue = destinationValue;
                output = mappings[key].call(extensions);
              } else {
                output = mappings[key];
              }
              if (output) {
                value = getValue(output);
                if (mappings.__forAllMembers) {
                  mappings.__forAllMembers(destinationValue, key, value);
                } else {
                  destinationValue[key] = value;
                }
              }
            } else if (!sourceValue.hasOwnProperty(key)) {
              throw sourceKey + "." + key + " не определено";
            } else {
              value = getValue(sourceValue[key]);
              if (mappings.__forAllMembers) {
                mappings.__forAllMembers(destinationValue, key, value);
              } else {
                destinationValue[key] = value;
              }
            }
          }
        };
        if (sourceValue instanceof Array) {
          if (destinationValue instanceof Array) {
            for (i = j = 0, len = sourceValue.length; j < len; i = ++j) {
              srcVal = sourceValue[i];
              if (!destinationValue[i]) {
                if (typeof destinationKey !== "function") {
                  throw "destinationKey of mapping must be a function in order to initialize the array";
                }
                destinationValue[i] = destinationKey();
              }
              mapItem(destinationValue[i], srcVal);
            }
          } else {
            throw "Cannot map array to object";
          }
        } else if (destinationValue instanceof Array) {
          throw "Cannot map object to array";
        } else {
          mapItem(destinationValue, sourceValue);
        }
      }
    };
  };
});

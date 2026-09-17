var deferredResLoader;

deferredResLoader = (function() {
  var _allScriptLoadedDefer, _allScriptLoadedPromise, _baseLoadHandler, _loadScript, _loadStyleSheet, _proxyLoadHandler, head, loadHandler, onAllScriptsLoadedHandlers, scriptsAlreadyLoaded, scriptsToLoad, stylesToLoad;
  scriptsToLoad = [];
  stylesToLoad = ["/static/dist/common/css/ext-styles.min.css"];
  head = document.getElementsByTagName("head")[0] || document.documentElement;
  _allScriptLoadedDefer = $.Deferred();
  _allScriptLoadedPromise = _allScriptLoadedDefer.promise();
  scriptsAlreadyLoaded = 0;
  onAllScriptsLoadedHandlers = [];
  _baseLoadHandler = function(src) {
    scriptsAlreadyLoaded = scriptsAlreadyLoaded + 1;
    if (scriptsAlreadyLoaded === scriptsToLoad.length) {
      return _allScriptLoadedDefer.resolve();
    }
  };
  _proxyLoadHandler = function(handler) {
    return function(src) {
      if (handler) {
        handler(src);
      }
      return _baseLoadHandler(src);
    };
  };
  _loadStyleSheet = function(src) {
    src = getVersionedLink(src);
    if (document.createStyleSheet) {
      return document.createStyleSheet(src);
    } else {
      return $("head").append($("<link rel='stylesheet' href='" + src + "' type='text/css' media='screen' />"));
    }
  };
  _loadScript = function(src, onLoadHandler) {
    var afterLoad, done, script, scriptLoadDeferred, scriptUrl;
    scriptLoadDeferred = $.Deferred();
    script = document.createElement("script");
    scriptUrl = getVersionedLink(src);
    script.src = scriptUrl;
    script.async = false;
    done = false;
    afterLoad = function() {
      if (onLoadHandler) {
        onLoadHandler(src);
      }
      if (head && script.parentNode) {
        return head.removeChild(script);
      }
    };
    script.onload = function() {
      if (this.executed) {
        return;
      }
      this.executed = true;
      afterLoad();
      return scriptLoadDeferred.resolve();
    };
    script.onreadystatechange = function() {
      var self;
      self = this;
      if (this.readyState === "complete" || this.readyState === "loaded") {
        return setTimeout(function() {
          return self.onload();
        }, 0);
      }
    };
    head.insertBefore(script, head.firstChild);
    return scriptLoadDeferred.promise();
  };
  loadHandler = function() {
    var extScriptsFile, i, info, j, len, len1, results, src;
    extScriptsFile = (typeof appContext !== "undefined" && appContext !== null ? appContext.environment : void 0) === "dev" ? "/static/dist/common/js/ext-scripts.js" : "/static/dist/common/js/ext-scripts.min.js";
    scriptsToLoad.push({
      src: extScriptsFile
    });
    for (i = 0, len = stylesToLoad.length; i < len; i++) {
      src = stylesToLoad[i];
      _loadStyleSheet(src);
    }
    results = [];
    for (j = 0, len1 = scriptsToLoad.length; j < len1; j++) {
      info = scriptsToLoad[j];
      info.handler = _proxyLoadHandler(info.handler);
      results.push(_loadScript(info.src, info.handler));
    }
    return results;
  };
  if (window.addEventListener) {
    window.addEventListener("load", loadHandler, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", loadHandler);
  } else {
    window.onload = loadHandler;
  }
  return {
    loadScript: function(src, onScriptLoadHandler) {
      return scriptsToLoad.push({
        src: src,
        handler: onScriptLoadHandler
      });
    },
    loadStyle: function(src) {
      return stylesToLoad.push(src);
    },
    loadJsScript: function(src, onScriptLoadHandler) {
      return _loadScript(src, onScriptLoadHandler);
    },
    ready: function(handler) {
      return _allScriptLoadedPromise.then(handler);
    },
    promise: function() {
      return _allScriptLoadedPromise;
    }
  };
})();

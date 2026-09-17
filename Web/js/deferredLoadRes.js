var deferredResLoader;

deferredResLoader = (function() {
  var _baseLoadHandler, _loadScript, _loadStyleSheet, _proxyLoadHandler, head, loadHandler, onAllScriptsLoadedHandlers, scriptsAlreadyLoaded, scriptsToLoad, stylesToLoad;
  scriptsToLoad = [
    {
      src: "/js/ext-scripts.min.js"
    }
  ];
  stylesToLoad = ["/vendor/custom/css/ext-styles.min.css"];
  head = document.getElementsByTagName("head")[0] || document.documentElement;
  scriptsAlreadyLoaded = 0;
  onAllScriptsLoadedHandlers = [];
  _baseLoadHandler = function(src) {
    var allScriptsLoadedHandler, i, len, results;
    scriptsAlreadyLoaded = scriptsAlreadyLoaded + 1;
    if (scriptsAlreadyLoaded === scriptsToLoad.length) {
      results = [];
      for (i = 0, len = onAllScriptsLoadedHandlers.length; i < len; i++) {
        allScriptsLoadedHandler = onAllScriptsLoadedHandlers[i];
        results.push(allScriptsLoadedHandler());
      }
      return results;
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
    var afterLoad, done, script, scriptUrl;
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
      return afterLoad();
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
    return head.insertBefore(script, head.firstChild);
  };
  loadHandler = function() {
    var i, info, j, len, len1, results, src;
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
    onScriptsLoaded: function(handler) {
      return onAllScriptsLoadedHandlers.push(handler);
    },
    ready: function(handler) {
      return onAllScriptsLoadedHandlers.push(handler);
    }
  };
})();

//# sourceMappingURL=deferredLoadRes.js.map

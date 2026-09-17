var State, StateManager;

State = (function() {
  function State(id1, title) {
    this.id = id1;
    this.title = title;
    this.defaultState = false;
    this.container = $("#state-" + this.id);
    this.active = false;
  }

  State.prototype.setOnEnter = function(handler) {
    this.onEnter = handler;
    return this;
  };

  State.prototype.setHelpPage = function(helpPage) {
    this.helpPage = helpPage;
    return this;
  };

  State.prototype.setOnFail = function(handler) {
    this.onFail = handler;
    return this;
  };

  State.prototype.setOnExit = function(handler) {
    this.onExit = handler;
    return this;
  };

  State.prototype.setDefault = function() {
    this.defaultState = true;
    return this;
  };

  State.prototype.show = function(args) {
    var deferr, promise;
    deferr = $.Deferred();
    promise = deferr.promise();
    if (this.active) {
      return promise;
    }
    this.active = true;
    this.container.removeClass("hide");
    if (this.onEnter) {
      promise = this.onEnter(args);
    } else {
      deferr.resolve();
    }
    promise.then((function(_this) {
      return function() {
        return window.ShowHelp = function() {
          return openPopupWindow("_help", _this.helpPage, 950, 660);
        };
      };
    })(this));
    return promise;
  };

  State.prototype.hide = function() {
    if (!this.active) {
      return;
    }
    this.container.addClass("hide");
    if (this.onExit) {
      this.onExit();
    }
    setTimeout(((function(_this) {
      return function() {
        return _this.container.find('.state-content').empty();
      };
    })(this)), 200);
    return this.active = false;
  };

  return State;

})();

StateManager = (function() {
  function StateManager() {
    this.states = [];
    this.currentState = null;
    this.prevState = null;
  }

  StateManager.prototype.defineState = function(state) {
    return this.states.push(state);
  };

  StateManager.prototype.setPrevState = function(id) {
    var state;
    if (this.prevState) {
      return;
    }
    state = _.findWhere(this.states, {
      id: id
    });
    if (!state) {
      throw "unknown state";
    }
    return this.prevState = state;
  };

  StateManager.prototype.setState = function(id, args) {
    return checkForChanges().then((function(_this) {
      return function() {
        var breadCrumb, defaultState, state;
        window.dataWereChanged = false;
        state = _.findWhere(_this.states, {
          id: id
        });
        if (!state) {
          throw "unknown state";
        }
        _.each(_this.states, function(s) {
          return s.hide();
        });
        state.show(args).fail(function() {
          if (state.onFail) {
            return state.onFail();
          }
        });
        _this.prevState = _this.currentState;
        _this.currentState = state;
        if (state.defaultState) {
          $("a.back").off("click").addClass("active");
          return $("h1.title").html(state.title);
        } else {
          defaultState = _.findWhere(_this.states, {
            defaultState: true
          });
          breadCrumb = $("<a></a>").attr("href", "#").on("click", function() {
            return _this.setState(defaultState.id);
          }).html(defaultState.title);
          $("h1.title").empty();
          $("h1.title").append(breadCrumb).append(" / " + state.title);
          $("a.back").off("click").removeClass("active");
          return $("a.back").on("click", function() {
            return _this.setState(_this.prevState.id);
          });
        }
      };
    })(this));
  };

  return StateManager;

})();

module.exports = {
  State: State,
  StateManager: StateManager
};

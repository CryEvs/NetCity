var TemplatesManager, UserInfoAccessJournalLoader, userInfoAccessJournalCtrl;

userInfoAccessJournalCtrl = (function() {
  function userInfoAccessJournalCtrl(params) {
    this.params = params;
    this.userId = this.params.editedUserId;
    this.loader = new UserInfoAccessJournalLoader();
    this.tplManager = new TemplatesManager();
  }

  userInfoAccessJournalCtrl.prototype._showAccessJournalEntryDetails = function(entryId) {
    var entryDetails, loadDetails, template, templateReady;
    entryDetails = null;
    template = null;
    loadDetails = this.loader.getDetails(this.userId, entryId).then(function(response) {
      return entryDetails = response;
    });
    templateReady = this.tplManager.getDetailsTemplate().then(function(response) {
      return template = response;
    });
    return $.when(loadDetails, templateReady).then((function(_this) {
      return function() {
        var html, model, source;
        if (!entryDetails.length) {
          alert(language.Generic.Common.kNoDetails);
          return;
        }
        model = {
          accessJournalEntryDetails: entryDetails,
          language: language
        };
        source = Handlebars.compile(template);
        html = source(model);
        return $.show.dialog({
          title: language.Generic.Common.kDetails,
          message: html,
          size: BootstrapDialog.SIZE_WIDE
        });
      };
    })(this));
  };

  userInfoAccessJournalCtrl.prototype.browseAccessJournal = function() {
    var ctrl, journalEntries, loadEntries, template, templateReady, userId;
    userId = this.params.editedUserId;
    ctrl = this;
    journalEntries = null;
    template = null;
    loadEntries = this.loader.getAccessJournal(this.params.editedUserId).then((function(_this) {
      return function(response) {
        return journalEntries = response;
      };
    })(this));
    templateReady = this.tplManager.getJournalTemplate().then((function(_this) {
      return function(response) {
        return template = response;
      };
    })(this));
    return $.when(loadEntries, templateReady).then((function(_this) {
      return function() {
        var html, model, source;
        if (!journalEntries.length) {
          alert(language.Generic.Common.kNoChangesData);
          return;
        }
        _.map(journalEntries, function(_obj) {
          var date;
          date = dateUtils.castServerDateTimeToClient(_obj.date);
          return _obj.date = dateUtils.date2str(date) + ' ' + dateUtils.time2Str_ss(date);
        });
        model = {
          accessJournalEntries: journalEntries,
          language: language
        };
        source = Handlebars.compile(template);
        html = source(model);
        return $.show.dialog({
          title: language.Generic.Common.kChangeHistory,
          message: html,
          onshown: function(dialog) {
            return dialog.$modalBody.on("click", "a.link-display-journal-entry-details", function(evt) {
              var entryId;
              entryId = $(evt.currentTarget).data("entry-id");
              return ctrl._showAccessJournalEntryDetails(entryId);
            });
          }
        });
      };
    })(this));
  };

  return userInfoAccessJournalCtrl;

})();

UserInfoAccessJournalLoader = (function() {
  function UserInfoAccessJournalLoader() {}

  UserInfoAccessJournalLoader.prototype.getAccessJournal = function(userId) {
    return jsSubmit({
      action: "/webapi/users/" + userId + "/info/accessjournal",
      showProcessing: true,
      method: 'GET'
    });
  };

  UserInfoAccessJournalLoader.prototype.getDetails = function(userId, entryId) {
    return jsSubmit({
      action: "/webapi/users/" + userId + "/info/accessjournal/" + entryId + "/details",
      showProcessing: true,
      method: 'GET'
    });
  };

  return UserInfoAccessJournalLoader;

})();

TemplatesManager = (function() {
  var _getTemplate;

  function TemplatesManager() {
    this.cache = {};
  }

  _getTemplate = function(url) {
    var def;
    def = $.Deferred();
    jsSubmit({
      method: 'GET',
      action: url,
      auth: false,
      dataType: 'html',
      contentType: 'text/plain',
      showProcessing: true
    }).then(function(html) {
      return def.resolve(html.replace(/(?:\r\n|\r|\n)/g, ''));
    });
    return def.promise();
  };

  TemplatesManager.prototype.getDetailsTemplate = function() {
    return _getTemplate('/static/dist/pages/users/templates/userInfoAccessJournalDetails.html');
  };

  TemplatesManager.prototype.getJournalTemplate = function() {
    return _getTemplate('/static/dist/pages/users/templates/userInfoAccessJournal.html');
  };

  return TemplatesManager;

})();

(function(exp, name) {
  var exported, exports;
  exported = false;
  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === void 0)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})(userInfoAccessJournalCtrl);

var browseUserInfoAccessJournalCtrl;

browseUserInfoAccessJournalCtrl = (function() {
  var _accessJournalDetailsTmpl, _accessJournalTmpl, _showAccessJournalEntries, _showAccessJournalEntryDetails;

  function browseUserInfoAccessJournalCtrl(params) {
    this.params = params;
  }

  _accessJournalTmpl = '	<table class="table table-bordered table-bright-striped table-bright-hover table-xs"> <tr> <th style="width: 25%;">' + language.Generic.Common.kDate + '</th> <th>' + language.Generic.Common.kAuthorOfChanges + '</th> <th style="width: 1%;">Ip</th> <th style="width: 1%;"></th> </tr> {{#each accessJournalEntries}} <tr> <td> {{date}} </td> <td> {{author}} </td> <td> {{ip}} </td> <td> <a onclick="browseUserInfoAccessJournalCtrl.browseAccessJournalDetails({{id}})" title="' + language.Generic.Common.kDetails + '" style="cursor: pointer;"> <span class="icon-th-list "></span> </a> </td> </tr> {{/each}} </table>';

  _accessJournalDetailsTmpl = '<table class="table table-bordered"> <tr> <th style="width: 25%;">' + language.Generic.Common.kField + '</th> <th>' + language.Generic.Common.kSetValue + '</th> </tr> {{#each accessJournalEntryDetails}} <tr> <td> {{fieldName}} </td> <td> {{fieldValue}} </td> </tr> {{/each}} </table>';

  _showAccessJournalEntries = function(accessJournalEntries) {
    var html, model, template;
    if (!accessJournalEntries.length) {
      alert(language.Generic.Common.kNoChangesData);
      return;
    }
    _.map(accessJournalEntries, function(_obj) {
      var date;
      date = dateUtils.castServerDateTimeToClient(_obj.date);
      return _obj.date = dateUtils.date2str(date) + ' ' + dateUtils.time2Str_ss(date);
    });
    model = {
      accessJournalEntries: accessJournalEntries
    };
    template = Handlebars.compile(_accessJournalTmpl);
    html = template(model);
    return $.show.dialog({
      title: language.Generic.Common.kChangeHistory,
      message: html
    });
  };

  _showAccessJournalEntryDetails = function(accessJournalEntryDetails) {
    var html, model, template;
    if (!accessJournalEntryDetails.length) {
      alert(language.Generic.Common.kNoDetails);
      return;
    }
    model = {
      accessJournalEntryDetails: accessJournalEntryDetails
    };
    template = Handlebars.compile(_accessJournalDetailsTmpl);
    html = template(model);
    return $.show.dialog({
      title: language.Generic.Common.kDetails,
      message: html,
      size: BootstrapDialog.SIZE_WIDE
    });
  };

  browseUserInfoAccessJournalCtrl.prototype.browseAccessJournal = function() {
    return jsSubmit({
      action: "/webapi/users/" + this.params.editedUserId + "/info/accessjournal",
      showProcessing: true,
      method: 'GET',
      onSuccess: function(accessJournalEntries) {
        return _showAccessJournalEntries(accessJournalEntries);
      }
    });
  };

  browseUserInfoAccessJournalCtrl.prototype.browseAccessJournalDetails = function(accessJournalId) {
    return jsSubmit({
      action: "/webapi/users/" + this.params.editedUserId + "/info/accessjournal/" + accessJournalId + "/details",
      showProcessing: true,
      method: 'GET',
      onSuccess: function(response) {
        return _showAccessJournalEntryDetails(response);
      }
    });
  };

  return browseUserInfoAccessJournalCtrl;

})();

//# sourceMappingURL=browseUserInfoAccessJournal.js.map

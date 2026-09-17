var UserInfoController;

UserInfoController = (function() {
  var _mChoiceParamsSrc, _similarUsersTpl;

  function UserInfoController(params) {
    this.params = params;
  }

  _mChoiceParamsSrc = '<div style="max-height: 500px; overflow-y: auto;"> {{#unless mChoiceParams.length}} <div class="alert alert-danger subject-filter" role="alert">' + language.Generic.SetupSchool.kEmptyList + '</div> {{/unless}} {{#each mChoiceParams}} <div class="checkbox"> <label> {{#if choiceid}} <input type="checkbox" name="MCHOICEITEMS" onclick="dataChanged();" checked value="{{id}}"> {{/if}} {{#unless choiceid}} <input type="checkbox" name="MCHOICEITEMS" onclick="dataChanged();" value="{{id}}"> {{/unless}} {{name}} </label> </div> {{/each}} </div>';

  _similarUsersTpl = '<h4>{{roleName}}: <b>{{displayName}}</b></h4> <h4>{{language.Generic.SetupSchoolUI.kDuplicateFIO_1}}</h4> {{#each similarUsers}} {{nickname}} {{gender}} {{birthdate}} <br /> {{/each}} {{#if similiarUsersOtherSchools.length}} <h4>{{language.Generic.SetupSchoolUI.kDuplicateFIOInOtherSchools_1}}</h4> <div style="max-height: 400px; overflow-y: scroll; margin-bottom: 15px"> {{#each similiarUsersOtherSchools}} {{lastname}} {{firstname}} {{middlename}} {{gender}} {{birthdate}} (<i>{{language.Generic.Reports.kNameEducInst}}: {{schoolname}}</i>) {{#if @root.isStudent}} {{#if classname}} {{language.SetupSchoolUI.kClassNotAssigned}} {{/if}} {{#unless classname}} {{language.Common.kClass}}: {{classname}} {{/unless}} {{/if}} <br /> {{/each}} </div> {{/if}} <div class="well well-lg">{{language.Generic.SetupSchoolUI.kDuplicateFIO_2}}</div>';

  UserInfoController.prototype.save = function(saveUrl) {
    var form;
    form = document.UserInfo;
    return extDeferred.when(canSubmit).then(function() {
      return jsSubmit({
        form: form,
        action: saveUrl,
        showProcessing: true
      });
    }).then(function(response) {
      var hasSimilar, html, j, k, len, len1, model, ref, ref1, similar, similarUsers, similiarUsersOtherSchools, tpl;
      console.log(response);
      hasSimilar = response.data && (((ref = response.data.similarUsers) != null ? ref.length : void 0) || ((ref1 = response.data.similiarUsersOtherSchools) != null ? ref1.length : void 0));
      if (!hasSimilar) {
        window.dataWereChanged = false;
        $(form).rememberState();
        $.show.message(response.message);
        return;
      }
      similarUsers = response.data.similarUsers;
      similiarUsersOtherSchools = response.data.similiarUsersOtherSchools;
      for (j = 0, len = similarUsers.length; j < len; j++) {
        similar = similarUsers[j];
        if (similar.birthdate) {
          similar.birthdate = date2str(new Date(similar.birthdate));
        }
      }
      for (k = 0, len1 = similiarUsersOtherSchools.length; k < len1; k++) {
        similar = similiarUsersOtherSchools[k];
        if (similar.birthdate) {
          similar.birthdate = date2str(new Date(similar.birthdate));
        }
      }
      model = {
        similarUsers: similarUsers,
        similiarUsersOtherSchools: similiarUsersOtherSchools,
        roleName: response.data.roleName,
        displayName: response.data.displayName,
        language: language,
        isStudent: response.data.roleType === 4
      };
      tpl = Handlebars.compile(_similarUsersTpl);
      html = tpl(model);
      return $.show.dialog({
        title: language.Generic.SetupSchool.kSaveUserInfo,
        message: html,
        buttons: [
          {
            label: language.Generic.Buttons.kContinue,
            action: function(dialog) {
              dialog.close();
              form.action = response.data.savePage;
              return jsSaveForm(form);
            }
          }
        ]
      });
    });
  };

  UserInfoController.prototype.showDialogParamEdit = function(_params) {
    return jsSubmit({
      action: '/asp/ajax/GetMChoiceParams.asp',
      showProcessing: true,
      data: $.extend(this.params, _params),
      onSuccess: function(response) {
        var _data, excludeParams, html, mChoiceParams, mChoiceParamsTmpl, saveBtn;
        _data = response.data;
        mChoiceParams = _data.mChoiceParamData;
        excludeParams = _data.excludeParams || [];
        mChoiceParamsTmpl = Handlebars.compile(_mChoiceParamsSrc);
        html = mChoiceParamsTmpl({
          mChoiceParams: mChoiceParams
        });
        saveBtn = (function(_this) {
          return function(dialog) {
            var checkValues, chkBox, excludeCount, i, j, ref;
            chkBox = document.getElementsByName('MCHOICEITEMS');
            checkValues = [];
            excludeCount = 0;
            for (i = j = 0, ref = mChoiceParams.length - 1; j <= ref; i = j += 1) {
              if (chkBox[i].checked) {
                checkValues[i] = chkBox[i].value;
                if (excludeParams.indexOf(mChoiceParams[i].orderno) >= 0) {
                  excludeCount += 1;
                }
              }
            }
            if (excludeCount > 1) {
              return alert(_data.errMessage);
            }
            return jsSubmit({
              action: '/asp/ajax/SaveMChoiceParams.asp',
              showProcessing: true,
              data: {
                UID: _this.data.userId,
                MChoiceParamID: _params.paramId,
                MCHOICEITEMS: checkValues
              },
              onSuccess: function(response) {
                var divCntx, divParams, divText, labels, modal;
                modal = dialog.getModal();
                divCntx = $('a[href *= "' + this.data.MChoiceParamID + '"]').parents('div[class *= "col-"]').first();
                if (!divCntx.prev().length) {
                  divCntx.removeClass().addClass("col-md-2");
                  divParams = $('<div class="col-md-10">');
                  divParams.insertBefore(divCntx);
                }
                divParams = divCntx.prev();
                labels = $('label', modal);
                divText = '';
                $('input[type = "checkbox"]', modal).each(function(index, checkBox) {
                  if (checkBox.checked) {
                    return divText += labels.eq(index).text().trim() + '<br>';
                  }
                });
                divParams.html(divText);
                if (response.message) {
                  alert(response.message);
                }
                return dialog.successClose();
              }
            });
          };
        })(this);
        return $.show.dialog({
          title: _params.title,
          message: html,
          buttons: [
            {
              label: language.Generic.Buttons.kSave,
              action: saveBtn
            }
          ]
        });
      }
    });
  };

  return UserInfoController;

})();

UserInfoController.setCookieParamPage = function() {
  var UID, arrPanels, data, date, minutes, position;
  arrPanels = [];
  $.each($('[data-toggle="collapse"]'), function(index, value) {
    var $value, isPanelExpanded, panelId;
    $value = $(value);
    panelId = $value.attr('data-target');
    isPanelExpanded = $value.attr('aria-expanded');
    return arrPanels[index] = {
      "id": panelId,
      "isExpanded": isPanelExpanded
    };
  });
  position = $(window).scrollTop();
  data = {
    "position": position,
    "panels": arrPanels
  };
  date = new Date();
  minutes = 30;
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  UID = $('[name="UID"]').val();
  return $.cookie('panels-' + UID, JSON.stringify(data), {
    expires: date
  });
};

UserInfoController.getCookieParamPage = function() {
  var UID, data, param;
  UID = $('[name="UID"]').val();
  if ($.cookie('panels-' + UID) === null) {
    return UserInfoController.showPage();
  }
  param = JSON.parse($.cookie('panels-' + UID));
  data = param["panels"];
  data.forEach(function(currentValue) {
    var isExpanded;
    isExpanded = $('[data-target="' + currentValue.id + '"]').attr('aria-expanded');
    if (currentValue.isExpanded !== isExpanded) {
      return $(currentValue.id).collapse('toggle');
    }
  });
  setTimeout(function() {
    UserInfoController.showPage();
    return $('html, body').animate({
      scrollTop: param["position"]
    }, 200);
  }, 1000);
  return document.cookie = 'panels-' + UID + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

UserInfoController.showPage = function() {
  $('#buttons-panel').show();
  $('[id="preloader"]').remove();
  $('form[name="UserInfo"]').show();
  return $(document).trigger('pageReady');
};

UserInfoController.setCookieParamGoToPage = function(form, urlPage) {
  return checkForChanges().then(function() {
    UserInfoController.setCookieParamPage();
    return DoSubmit(form, urlPage);
  });
};

//# sourceMappingURL=userInfoEdit.js.map

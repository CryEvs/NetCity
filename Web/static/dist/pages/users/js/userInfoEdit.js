var ParentInfoController, StaffInfoController, StudentInfoController, UserInfoController,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

UserInfoController = (function() {
  var ChangePasswordCtrl, IdentityDocumentsCtrl, UserInfoAccessJournalCtrl, UserParamDependenciesManager, _mChoiceParamsSrc, _restoreFormPosition, _setCookieParamPage, _showPage, _showStaffFormT2Page1, _showStaffFormT2Page2, _similarUsersTpl, initIdentityDocs;

  IdentityDocumentsCtrl = (require('./identityDocuments.js')).IdentityDocumentsCtrl;

  UserInfoAccessJournalCtrl = require('./userInfoAccessJournal.coffee');

  ChangePasswordCtrl = require('./changePassword.coffee');

  UserParamDependenciesManager = (require('./userParamDependecies.js')).UserParamDependenciesManager;

  function UserInfoController(params) {
    var chkNoMiddleName;
    this.params = params;
    this.editUserId = this.params.userId;
    this.editHimSelf = parseInt(appContext.userId) === parseInt(this.editUserId);
    this.readonly = this.params.readonly;
    this.changePwdCtrl = new ChangePasswordCtrl({
      userEditHimself: this.editHimSelf,
      minPasswordLength: this.params.minPassLength,
      userId: this.editUserId
    });
    $(document).on("click", "button[id=btn-change-pwd]", (function(_this) {
      return function() {
        return _this.changePwdCtrl.changePassword();
      };
    })(this));
    this.accessJournalCtrl = new UserInfoAccessJournalCtrl({
      editedUserId: this.editUserId
    });
    $(document).on("click", "button.btn-display-edit-journal", (function(_this) {
      return function() {
        return _this.accessJournalCtrl.browseAccessJournal();
      };
    })(this));
    this.dependenciesManager = new UserParamDependenciesManager();
    initIdentityDocs.call(this);
    chkNoMiddleName = $("input[name=NoMiddleName]");
    this.noMiddleName = chkNoMiddleName.prop('checked');
    this.rowMiddleName = $("input[name=MN]").closest(".form-group");
    if (this.noMiddleName) {
      this.rowMiddleName.toggle();
    }
    chkNoMiddleName.change((function(_this) {
      return function() {
        dataChanged();
        return _this.rowMiddleName.toggle();
      };
    })(this));
    this.backPage = this.params.backPage;
  }

  initIdentityDocs = function() {
    var docsContainer, docsPanelHead;
    docsContainer = $(".identityDocumentsCtrl");
    docsPanelHead = docsContainer.closest(".panel").find(".panel-heading");
    this.docsCtrl = new IdentityDocumentsCtrl(docsContainer, this.editUserId, this.readonly);
    return docsPanelHead.click((function(_this) {
      return function() {
        if (_this.docsCtrl.initialized) {
          return;
        }
        _this.docsCtrl.initialized = true;
        return _this.docsCtrl.showIdentityDocuments();
      };
    })(this));
  };

  _mChoiceParamsSrc = '<div style="max-height: 500px; overflow-y: auto;"> {{#unless mChoiceParams.length}} <div class="alert alert-danger subject-filter" role="alert">' + language.Generic.SetupSchool.kEmptyList + '</div> {{/unless}} {{#each mChoiceParams}} {{#if groupTitle.length}} <div>{{groupTitle}}</div> {{/if}} <div class="checkbox"> {{#if displacement}} <span>&nbsp;&nbsp;&nbsp;</span> {{/if}} <label> {{#if choiceid}} <input type="checkbox" name="MCHOICEITEMS" onclick="dataChanged();" checked value="{{id}}"> {{/if}} {{#unless choiceid}} <input type="checkbox" name="MCHOICEITEMS" onclick="dataChanged();" value="{{id}}"> {{/unless}} {{name}} </label> </div> {{/each}} </div>';

  _similarUsersTpl = '<h4>{{roleName}}: <b>{{displayName}}</b></h4> <h4>{{language.Generic.SetupSchoolUI.kDuplicateFIO_1}}</h4> {{#each similarUsers}} {{nickname}} {{gender}} {{birthdate}} <br /> {{/each}} {{#if similiarUsersOtherSchools.length}} <h4>{{language.Generic.SetupSchoolUI.kDuplicateFIOInOtherSchools_1}}</h4> <div style="max-height: 400px; overflow-y: scroll; margin-bottom: 15px"> {{#each similiarUsersOtherSchools}} {{lastname}} {{firstname}} {{middlename}} {{gender}} {{birthdate}} (<i>{{language.Generic.Reports.kNameEducInst}}: {{schoolname}}</i>) {{#if @root.isStudent}} {{#if classname}} {{language.SetupSchoolUI.kClassNotAssigned}} {{/if}} {{#unless classname}} {{language.Common.kClass}}: {{classname}} {{/unless}} {{/if}} <br /> {{/each}} </div> {{/if}} <div class="well well-lg">{{language.Generic.SetupSchoolUI.kDuplicateFIO_2}}</div>';

  UserInfoController.prototype.setRegEqualHomeAddress = function() {
    return checkForChanges().then((function(_this) {
      return function() {
        var forAll, promise;
        promise = true;
        forAll = true;
        _setCookieParamPage();
        if (_this.params.mayMultiSetRegEqualHomeAddr) {
          forAll = false;
          promise = extDeferred.wrapPromise($.show.getConfirmation(_this.params.confirmSetRegEqual), function() {
            return forAll = true;
          });
        }
        return extDeferred.when(promise).then(function() {
          return jsSubmit({
            action: "/webapi/addresses/users/" + _this.editUserId + "/setregequalhome",
            method: "post",
            queryData: {
              forAll: forAll
            }
          }).then(function() {
            return DoSubmit(document.forms.UserInfo, _this.backPage);
          });
        });
      };
    })(this));
  };

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
      var hasSimilar, html, k, l, len, len1, model, ref, ref1, similar, similarUsers, similiarUsersOtherSchools, tpl;
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
      for (k = 0, len = similarUsers.length; k < len; k++) {
        similar = similarUsers[k];
        if (similar.birthdate) {
          similar.birthdate = date2str(new Date(similar.birthdate));
        }
      }
      for (l = 0, len1 = similiarUsersOtherSchools.length; l < len1; l++) {
        similar = similiarUsersOtherSchools[l];
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
        var _data, changedItemNames, excludeParams, html, mChoiceParams, mChoiceParamsTmpl, saveBtn;
        _data = response.data;
        mChoiceParams = _data.mChoiceParamData;
        excludeParams = _data.excludeParams || [];
        _.each(mChoiceParams, function(param) {
          return _.extend(param, {
            displacement: false,
            groupTitle: ''
          });
        });
        changedItemNames = [];
        if (_params.paramId === 1026) {
          mChoiceParams = _.map(mChoiceParams, function(param) {
            var name3;
            if (param.name3 === '1') {
              param.groupTitle = language.Generic.SetupSchool.kParamName_WithoutCare;
              changedItemNames.push({
                id: param.id,
                originalName: param.name
              });
              param.name = param.name2;
            }
            if (param.name3 === '3') {
              param.groupTitle = language.Generic.SetupSchool.kParamName_HealthViolation;
              changedItemNames.push({
                id: param.id,
                originalName: param.name
              });
              param.name = param.name2;
            }
            if (param.name3 !== '') {
              name3 = +param.name3;
              if ((name3 === 1 || name3 === 3) || (indexOf.call([101, 102, 103, 104, 105, 106], name3) >= 0) || (indexOf.call([301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311], name3) >= 0)) {
                param.displacement = true;
              }
            }
            return param;
          });
        }
        if (changedItemNames.length) {
          changedItemNames = _.indexBy(changedItemNames, 'id');
        }
        mChoiceParamsTmpl = Handlebars.compile(_mChoiceParamsSrc);
        html = mChoiceParamsTmpl({
          mChoiceParams: mChoiceParams
        });
        saveBtn = (function(_this) {
          return function(dialog) {
            var checkOrderNo, checkValues, chkBox, exclude1, exclude2, i, j, k, l, ref, ref1;
            chkBox = document.getElementsByName('MCHOICEITEMS');
            checkValues = [];
            j = -1;
            checkOrderNo = [];
            for (i = k = 0, ref = mChoiceParams.length - 1; k <= ref; i = k += 1) {
              if (chkBox[i].checked) {
                j += 1;
                checkValues[j] = chkBox[i].value;
                checkOrderNo[j] = mChoiceParams[i].orderno;
              }
            }
            if (excludeParams.length) {
              for (i = l = 0, ref1 = excludeParams.length - 1; l <= ref1; i = l += 2) {
                exclude1 = _.intersection(checkOrderNo, excludeParams[i]);
                exclude2 = _.intersection(checkOrderNo, excludeParams[i + 1]);
                if ((exclude1.length > 0) && (exclude2.length > 0)) {
                  return alert(_data.errMessage);
                }
              }
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
                  var changedItemName, currId, currText;
                  if (checkBox.checked) {
                    currText = labels.eq(index).text();
                    if (Object.keys(changedItemNames).length) {
                      currId = mChoiceParams[index].id;
                      changedItemName = changedItemNames[currId];
                      if (changedItemName) {
                        currText = changedItemName.originalName;
                      }
                    }
                    return divText += currText.trim() + '<br>';
                  }
                });
                divParams.html(divText);
                if (response.data.message) {
                  alert(response.data.message);
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

  _showStaffFormT2Page1 = function(paramPage) {
    var ajaxParam, model;
    model = {
      paramPage: paramPage,
      schoolName: appContext.fullSchoolName,
      language: language
    };
    ajaxParam = {
      url: '/vendor/pages/templates/formT2/t2Page1.html',
      cache: true,
      success: function(data) {
        var html, template, tmpl;
        tmpl = data;
        template = Handlebars.compile(tmpl);
        html = template(model);
        $(html).printUtils().toPrint();
      }
    };
    return ajaxParam;
  };

  _showStaffFormT2Page2 = function(paramPage, userId) {
    return jsSubmit({
      action: "/webapi/users/" + userId + "/info/identityDocuments",
      data: {
        type: 12
      },
      showProcessing: false,
      defaultErrorHandling: false,
      method: 'GET'
    }).then(function(documents) {
      var ajaxParam, count, freeArr, i, model;
      if (documents.length) {
        paramPage.user.passport = documents[0];
      }
      if (paramPage.user.familyInfo.length < 7) {
        i = 0;
        count = 6 - paramPage.user.familyInfo.length;
        freeArr = [];
        while (i < count) {
          freeArr.push("");
          i++;
        }
        paramPage.user.familyInfo.freeArr = freeArr;
      }
      model = {
        paramPage: paramPage,
        language: language
      };
      ajaxParam = {
        url: '/vendor/pages/templates/formT2/t2Page2.html',
        cache: true,
        success: function(data) {
          var html, template, tmpl;
          tmpl = data;
          template = Handlebars.compile(tmpl);
          html = template(model);
          $(html).printUtils().toPrint();
        }
      };
      $.ajax(ajaxParam);
    });
  };

  UserInfoController.prototype.browseStaffFormT2 = function(numPage) {
    var ajaxParam, model;
    if (numPage === 3 || numPage === 4) {
      model = {
        language: language
      };
      ajaxParam = {
        url: "/vendor/pages/templates/formT2/t2Page" + numPage + ".html",
        cache: true,
        success: function(data) {
          var html, template, tmpl;
          tmpl = data;
          template = Handlebars.compile(tmpl);
          html = template(model);
          $(html).printUtils().toPrint();
        }
      };
      $.ajax(ajaxParam);
    } else {
      jsSubmit({
        action: "/webapi/staff/" + this.params.userId + "/t2Card/page" + numPage,
        showProcessing: true,
        method: 'GET',
        onSuccess: (function(_this) {
          return function(paramPage) {
            switch (numPage) {
              case 1:
                ajaxParam = _showStaffFormT2Page1(paramPage);
                break;
              case 2:
                ajaxParam = _showStaffFormT2Page2(paramPage, _this.params.userId);
            }
            $.ajax(ajaxParam);
          };
        })(this)
      });
    }
  };

  _setCookieParamPage = function() {
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

  _showPage = function(ctrl) {
    var promises;
    promises = [];
    promises.push(ctrl.dependenciesManager.ready);
    $.when.apply($, promises).then(function() {
      $('#buttons-panel').show();
      $('[id="preloader"]').remove();
      $('form[name="UserInfo"]').show();
      return $(document).trigger('pageReady');
    });
  };

  _restoreFormPosition = function(ctrl) {
    var UID, data, param;
    UID = $('[name="UID"]').val();
    if ($.cookie('panels-' + UID) === null) {
      _showPage(ctrl);
      return;
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
      _showPage(ctrl);
      return $('html, body').animate({
        scrollTop: param["position"]
      }, 200);
    }, 1000);
    return document.cookie = 'panels-' + UID + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

  UserInfoController.prototype.showPage = function() {
    if (this.params.readonly) {
      _showPage(this);
    }
    _restoreFormPosition(this);
  };

  UserInfoController.prototype.navigateToPage = function(form, urlPage) {
    return checkForChanges().then((function(_this) {
      return function() {
        _setCookieParamPage();
        if (form) {
          return DoSubmit(form, urlPage);
        } else {
          return postTo(urlPage);
        }
      };
    })(this));
  };

  UserInfoController.prototype.validateMask = function(form, element, mask, validateFunc, validatorMethodName) {
    var addMask, errorMessage, validate;
    validate = function() {
      return form.valid();
    };
    errorMessage = '';
    $.validator.addMethod(validatorMethodName, function(value, element, opts) {
      var currentValue, result, unmaskedValue, valid, validValue;
      unmaskedValue = value.replace(/[\+\(\)\-]+/g, "");
      valid = validateFunc(unmaskedValue);
      errorMessage = valid.error ? valid.message : "";
      result = !valid.error;
      if (result) {
        currentValue = $(element).val();
        validValue = $('<input>').val(unmaskedValue).inputmask(mask).val();
        if (currentValue && validValue && currentValue !== validValue) {
          valid = validateFunc(currentValue);
          errorMessage = valid.error ? valid.message : "";
          result = !valid.error;
        }
      }
      return result;
    }, function(opts) {
      return errorMessage;
    });
    if (validateFunc(element.inputmask("unmaskedvalue")).error) {
      addMask = function() {
        if (!validateFunc(element.inputmask("unmaskedvalue")).error) {
          return element.off("input", "", addMask).inputmask(mask).on("input", validate);
        }
      };
      element.inputmask('remove').on("input", addMask);
    } else {
      element.inputmask(mask).on("input", validate);
    }
    form.validate();
    return element.rules("add", validatorMethodName);
  };

  UserInfoController.prototype.resetScreenUI = function(formName) {
    resetScreen(formName);
    if (this.noMiddleName) {
      return this.rowMiddleName.hide();
    } else {
      return this.rowMiddleName.show();
    }
  };

  return UserInfoController;

})();

ParentInfoController = (function(superClass) {
  extend(ParentInfoController, superClass);

  function ParentInfoController(params) {
    this.params = params;
    ParentInfoController.__super__.constructor.apply(this, arguments);
  }

  ParentInfoController.prototype.deleteUser = function() {
    return $.show.confirmation(language.SetupSchoolUI.kDeleteParentInfo).then(function() {
      return jsSubmit({
        action: "/webapi/users/parents",
        method: "delete",
        queryData: {
          userId: userInfoEdit.editUserId
        }
      });
    }).then(function(response) {
      return alert(language.Generic.SetupSchoolUI.kRecordsWasDelete);
    }).then((function(_this) {
      return function() {
        return postTo(_this.params.userListPage);
      };
    })(this));
  };

  return ParentInfoController;

})(UserInfoController);

StaffInfoController = (function(superClass) {
  extend(StaffInfoController, superClass);

  function StaffInfoController(params) {
    this.params = params;
    StaffInfoController.__super__.constructor.apply(this, arguments);
  }

  StaffInfoController.prototype.deleteUser = function() {
    return $.show.confirmation(language.Generic.SetupSchoolUI.kConfirmDeleteStaff).then(function() {
      return jsSubmit({
        action: "/webapi/users/staff",
        method: "delete",
        queryData: {
          userId: userInfoEdit.editUserId
        }
      });
    }).then((function(_this) {
      return function(response) {
        return alert(language.Generic.SetupSchool.kStaffWasDeleted.replace("%", _this.params.editUserName));
      };
    })(this)).then((function(_this) {
      return function() {
        return postTo(_this.params.userListPage);
      };
    })(this));
  };

  StaffInfoController.prototype.dismissStaff = function() {
    return this.moveAction(language.Generic.SetupSchoolUI.kConfirmDismissStaff, "Dismissal", language.Generic.SetupSchool.kStaffWasDismissed);
  };

  StaffInfoController.prototype.recruitStaff = function() {
    return this.moveAction(language.Generic.SetupSchoolUI.kConfirmRecruitStaff, "Recruitment", language.Generic.SetupSchool.kStaffWasRecruited);
  };

  StaffInfoController.prototype.moveAction = function(sConfirm, employOperation, successMessage) {
    return $.show.confirmation(sConfirm).then(function() {
      return jsSubmit({
        action: "/webapi/users/staff/employment",
        method: "post",
        queryData: {
          operation: employOperation,
          userId: userInfoEdit.editUserId
        }
      });
    }).then((function(_this) {
      return function(response) {
        return alert(successMessage.replace("%", _this.params.editUserName));
      };
    })(this)).then(function(response) {
      return DoSubmit(document.UserInfo, "");
    });
  };

  return StaffInfoController;

})(UserInfoController);

StudentInfoController = (function(superClass) {
  extend(StudentInfoController, superClass);

  function StudentInfoController(params) {
    this.params = params;
    StudentInfoController.__super__.constructor.apply(this, arguments);
  }

  StudentInfoController.prototype.gotoAssociate = function() {
    return this.navigateToPage(document.MenuForm, "AssociateParent.asp?Add=1&UID=" + this.editUserId);
  };

  StudentInfoController.prototype.editAddEducation = function() {
    return this.navigateToPage(document.MenuForm, "AddEducationEdit.asp?UID=" + this.editUserId);
  };

  StudentInfoController.prototype.editCommissions = function() {
    return this.navigateToPage(document.MenuForm, "Commissions.asp?UID=" + this.editUserId);
  };

  StudentInfoController.prototype.gotoDissociate = function() {
    var check, ctrl;
    ctrl = this;
    check = true;
    if (appContext.funcType === 3) {
      check = $.show.getConfirmation(language.Generic.SetupSchoolUI.kConfirmDissociateParentInUDOD);
    }
    return extDeferred.when(check).then((function(_this) {
      return function() {
        return _this.navigateToPage(document.MenuForm, "AssociateParent.asp?Add=0&UID=" + _this.editUserId);
      };
    })(this));
  };

  StudentInfoController.prototype.viewDopEducation = function() {
    return this.navigateToPage(document.MenuForm, "DopEducationView.asp?UID=" + this.editUserId);
  };

  StudentInfoController.prototype.dissociateParent = function(nPID) {
    var check, ctrl;
    ctrl = this;
    check = true;
    if (appContext.funcType === 3) {
      check = $.show.getConfirmation(language.Generic.SetupSchoolUI.kConfirmDissociateParentInUDOD);
    }
    return extDeferred.when(checkForChanges, check).then(function() {
      return ctrl.navigateToPage(document.MenuForm, "AssociateParent.asp?Add=0&Save=Y&PID=" + nPID);
    });
  };

  StudentInfoController.prototype.gotoParentEdit = function(nUID) {
    return checkForChanges().then((function(_this) {
      return function() {
        var form;
        window.dataWereChanged = false;
        form = document.MenuForm;
        if (!form.elements["UID"]) {
          $('<input/>').attr({
            type: 'hidden',
            name: 'UID'
          }).appendTo('form');
        }
        form.elements["UID"].value = nUID;
        return _this.navigateToPage(document.MenuForm, "ParentInfoEdit.asp");
      };
    })(this));
  };

  return StudentInfoController;

})(UserInfoController);

module.exports = {
  UserInfoController: UserInfoController,
  StudentInfoController: StudentInfoController,
  ParentInfoController: ParentInfoController,
  StaffInfoController: StaffInfoController
};

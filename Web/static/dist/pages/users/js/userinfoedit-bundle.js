var UserInfoControllers =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var ParentInfoController, StaffInfoController, StudentInfoController, UserInfoController,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

UserInfoController = (function() {
  var ChangePasswordCtrl, IdentityDocumentsCtrl, UserInfoAccessJournalCtrl, UserParamDependenciesManager, _mChoiceParamsSrc, _restoreFormPosition, _setCookieParamPage, _showPage, _showStaffFormT2Page1, _showStaffFormT2Page2, _similarUsersTpl, initIdentityDocs, initUserEvents;

  IdentityDocumentsCtrl = __webpack_require__(3);

  UserInfoAccessJournalCtrl = __webpack_require__(4);

  ChangePasswordCtrl = __webpack_require__(5);

  UserParamDependenciesManager = (__webpack_require__(7)).UserParamDependenciesManager;

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
    initUserEvents.call(this);
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

  initUserEvents = function() {
    var queries, uaeContainer;
    uaeContainer = $("#userinfo-angular-container");
    queries = [deferredResLoader.loadJsScript("/vendor/components/angular-bundle.min.js"), deferredResLoader.loadJsScript("/js/libs/angular-locale/angular-locale_ru-ru.js"), deferredResLoader.loadJsScript("/static/dist/app/school/userinfo/app-bundle.js"), deferredResLoader.loadJsScript("/static/dist/app/app-common-bundle.js"), deferredResLoader.loadJsScript("/vendor/components/angular-ui-select/dist/select.min.js"), deferredResLoader.loadJsScript("/vendor/components/angular-bootstrap/ui-bootstrap-tpls.min.js")];
    return extDeferred.when(queries).then(function() {
      return angular.bootstrap(uaeContainer[0], ['irtech.netcity.school.userinfo']);
    });
  };

  _mChoiceParamsSrc = '<div style="max-height: 500px; overflow-y: auto;"> {{#unless mChoiceParams.length}} <div class="alert alert-danger subject-filter" role="alert">' + language.Generic.SetupSchool.kEmptyList + '</div> {{/unless}} {{#each mChoiceParams}} {{#if groupTitle.length}} <div>{{groupTitle}}</div> {{/if}} <div class="checkbox"> {{#if displacement}} <span>&nbsp;&nbsp;&nbsp;</span> {{/if}} <label> {{#if choiceid}} <input type="checkbox" name="MCHOICEITEMS" onclick="dataChanged();" checked value="{{id}}"> {{/if}} {{#unless choiceid}} <input type="checkbox" name="MCHOICEITEMS" onclick="dataChanged();" value="{{id}}"> {{/unless}} {{name}} </label> </div> {{/each}} </div>';

  _similarUsersTpl = '<h4>{{roleName}}: <b>{{displayName}}</b></h4> <h4>{{language.Generic.SetupSchoolUI.kDuplicateFIO_1}}</h4> {{#each similarUsers}} {{nickname}} {{gender}} {{birthdate}} <br /> {{/each}} {{#if similiarUsersOtherSchools.length}} <h4>{{language.Generic.SetupSchoolUI.kDuplicateFIOInOtherSchools_1}}</h4> <div style="max-height: 400px; overflow-y: scroll; margin-bottom: 15px"> {{#each similiarUsersOtherSchools}} {{lastname}} {{firstname}} {{middlename}} {{gender}} {{birthdate}} (<i>{{language.Generic.Reports.kNameEducInst}}: {{schoolname}}</i>) {{#if @root.isStudent}} {{#if classname}} {{language.SetupSchoolUI.kClassNotAssigned}} {{/if}} {{#unless classname}} {{language.Common.kClass}}: {{classname}} {{/unless}} {{/if}} <br /> {{/each}} </div> {{/if}} <div class="well well-lg">{{language.Generic.SetupSchoolUI.kDuplicateFIO_2}}</div>';

  UserInfoController.prototype.setRegEqualHomeAddress = function() {
    return checkForChanges().then((function(_this) {
      return function() {
        var afterDialogAction, forAll, promise;
        promise = true;
        forAll = true;
        _setCookieParamPage();
        if (_this.params.mayMultiSetRegEqualHomeAddr) {
          forAll = false;
          promise = extDeferred.wrapPromise($.show.getConfirmation(_this.params.confirmSetRegEqual), function() {
            return forAll = true;
          });
        }
        afterDialogAction = function() {
          return jsSubmit({
            action: "/webapi/addresses/users/" + _this.editUserId + "/setregequalhome",
            method: "post",
            queryData: {
              forAll: forAll
            }
          }).then(function() {
            return DoSubmit(document.forms.UserInfo, _this.backPage);
          });
        };
        return extDeferred.when(promise).then(function() {
          return afterDialogAction();
        }).fail(function() {
          return afterDialogAction();
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
                checkValues[i] = chkBox[i].value;
                j += 1;
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
        return DoSubmit(form, urlPage);
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IdentityDocumentsCtrl =
/*#__PURE__*/
function () {
  function IdentityDocumentsCtrl(container, userId, readOnlyAll) {
    var _this = this;

    _classCallCheck(this, IdentityDocumentsCtrl);

    this.container = container;
    this.userId = userId;
    this.identityDocumentTmpl = "";
    this.identityDocumentInfoTmpl = "";
    this.identityDocumentTypes = "";
    this.identityDocumentTextFieldTmpl = "";
    this.readOnlyAll = readOnlyAll;
    this.loader = new IdentityDocumentsLoader();

    var loadTemplate = function loadTemplate(url, setFunc) {
      return $.ajax({
        url: url,
        cache: true,
        success: function success(data) {
          return setFunc(data.replace(/(?:\r\n|\r|\n)/g, ""));
        }
      });
    };

    var queries = [loadTemplate("/static/dist/pages/users/templates/IdentityDocumentsTemplate.html", function (html) {
      return _this.identityDocumentTmpl = html;
    }), loadTemplate("/static/dist/pages/users/templates/IdentityDocumentInfoTemplate.html", function (html) {
      return _this.identityDocumentInfoTmpl = html;
    }), loadTemplate("/static/dist/pages/users/templates/IdentityDocumentTextFieldTemplate.html", function (html) {
      return _this.identityDocumentTextFieldTmpl = html;
    }), loadTemplate("/static/dist/pages/users/templates/IdentityDocumentDateFieldTemplate.html", function (html) {
      return _this.identityDocumentDateFieldTmpl = html;
    })];
    Handlebars.registerHelper("DateOnly2strF", function (dateParam) {
      return dateParam ? dateUtils.date2strfrm(new Date(dateParam), "dd".concat(String.fromCharCode(1), "mm").concat(String.fromCharCode(1), "yyyy").concat(String.fromCharCode(1), ".")) : null;
    });
    Handlebars.registerHelper("CheckField", function (fields, field, opts) {
      return field & fields ? opts.fn(_this) : opts.inverse(_this);
    });
    Handlebars.registerHelper("ifEqual", function (nParam1, nParam2, opts) {
      return nParam1 === nParam2 ? opts.fn(_this) : opts.inverse(_this);
    });
    this.container.on("click", "button[name=add-button]", function () {
      _this.addIdentityDocument();
    });
    this.container.on("click", "button[name=edit-button]", function (evt) {
      var documentId = parseInt($(evt.currentTarget).data("docid"));

      _this.editIdentityDocument(documentId);
    });
    this.container.on("click", "button[name=remove-button]", function (evt) {
      var documentId = parseInt($(evt.currentTarget).data("docid"));

      _this.delIdentityDocument(documentId);
    });
    extDeferred.when(queries).then(function () {
      Handlebars.registerPartial("identityDocumentInfoTmpl", _this.identityDocumentInfoTmpl);
      Handlebars.registerPartial("identityDocumentTextFieldTmpl", _this.identityDocumentTextFieldTmpl);
      Handlebars.registerPartial("identityDocumentDateFieldTmpl", _this.identityDocumentDateFieldTmpl);
      $.validator.messages.required = language.Generic.Common.kEmptyFieldError;
      $.validator.addMethod("pattern", function (value, element, opts) {
        var regExp = new RegExp(opts.regex);

        if (!value && opts.optional) {
          return true;
        }

        return regExp.test(value);
      }, function (opts) {
        return opts.errorMessage;
      });
      $.validator.addMethod("aboveOrEqualDate", function (value, element, opts) {
        var otherValue = opts.container.find(opts.element).val();

        if (!otherValue || opts.str2dt(value) >= opts.str2dt(otherValue)) {
          return true;
        }

        return false;
      }, function (opts) {
        return opts.errorMessage;
      });
      $.validator.addMethod("belowOrEqualDate", function (value, element, opts) {
        var otherValue = opts.container.find(opts.element).val();

        if (!otherValue || opts.str2dt(value) <= opts.str2dt(otherValue)) {
          return true;
        }

        return false;
      }, function (opts) {
        return opts.errorMessage;
      });
      _this.template = Handlebars.compile(_this.identityDocumentTmpl);
      _this.infoTemplate = Handlebars.compile(_this.identityDocumentInfoTmpl); //this.showIdentityDocuments();
    });
  } //отображение ошибки


  _createClass(IdentityDocumentsCtrl, [{
    key: "displayError",
    value: function displayError(text) {
      this.container.html("<div class=\"alert alert-danger\">".concat(text || language.Generic.Common.kUnexpErr, "<div>"));
    } //отображение документов

  }, {
    key: "showIdentityDocuments",
    value: function showIdentityDocuments() {
      var _this2 = this;

      //загрузка типов и документов и их отображение
      var errHandler = function errHandler(response) {
        var errorText = response && response.responseJSON && response.responseJSON.message ? response.responseJSON.message : response && response.responseText ? response.responseText : language.Generic.Common.kUnexpErr;

        _this2.displayError(errorText);
      };

      this.loader.checkAccessIdentityDocuments(this.userId).fail(errHandler).then(function (check) {
        if (check) {
          _this2.loader.getIdentityDocuments(_this2.userId).fail(errHandler).then(function (response) {
            var html = _this2.template({
              identityDocuments: response,
              language: language,
              readonly: true,
              readOnlyAll: _this2.readOnlyAll
            });

            _this2.container.html(html);
          });
        } else {
          _this2.displayError("Доступ к данным закрыт");
        }
      });
    } //обновление данных по документу

  }, {
    key: "_refreshIdentityDocument",
    value: function _refreshIdentityDocument(identityDocument) {
      var model = $.extend({}, identityDocument, {
        language: language,
        readonly: true
      });
      var html = this.infoTemplate(model);
      $("#identity-document-".concat(identityDocument.id)).html(html);
    }
  }, {
    key: "_bindDocumentDataFromModal",
    value: function _bindDocumentDataFromModal(container) {
      var documentData = {
        docType: container.find("[name=documentType]").val(),
        number: container.find("[name=number]").val(),
        series: container.find("[name=series]").val(),
        issuer: container.find("[name=issuer]").val(),
        otherDocName: container.find("[name=otherDocName]").val(),
        issuerCode: container.find("[name=issuerCode]").val(),
        actNumber: container.find("[name=actNumber]").val(),
        expireDate: container.find("[name=expireDate]").val() ? dateUtils.str2date(container.find("[name=expireDate]").val()) : null,
        issueDate: container.find("[name=issueDate]").val() ? dateUtils.str2date(container.find("[name=issueDate]").val()) : null
      };
      return documentData;
    }
  }, {
    key: "_showFields",
    value: function _showFields(container) {
      var str2Dt = function str2Dt(strDate) {
        return new Date(strDate.substr(6, 4), strDate.substr(3, 2), strDate.substr(0, 2));
      };

      var docTypeId = container.find("[name=documentType]").val();

      var identityDocumentType = _.findWhere(this.identityDocumentTypes, {
        id: docTypeId
      });

      if (!identityDocumentType) {
        throw new "Неизвестный тип документа уд. личность "() + docTypeId;
      }

      var identityDocumentFields = identityDocumentType.identityDocumentFields;

      var fieldValidationOptions = _.indexBy(identityDocumentType.fieldValidationOptions, "fieldId");

      var setValidationAttrs = function setValidationAttrs(fieldId, fieldName) {
        var fieldRow = container.find("div.field-row-".concat(fieldName));
        var field = container.find("input.field-input-".concat(fieldName));

        if (!field.length) {
          return;
        }

        if (identityDocumentFields & fieldId) {
          //если поле присутствует у документа
          var validationOptions = fieldValidationOptions[fieldId];

          if (validationOptions) {
            var validationRule = {
              required: validationOptions.required,
              pattern: {
                regex: validationOptions.regex,
                optional: !validationOptions.required,
                errorMessage: validationOptions.errorMessage
              }
            };
            field.rules("add", validationRule);
          } else {
            //без валидации
            field.rules("remove");
          }

          fieldRow.show();
        } else {
          //отсутствует
          fieldRow.hide();
          field.rules("remove");
        }

        ;

        if (fieldId === 64 && identityDocumentFields & 32 && identityDocumentFields & 64) {
          var validationAboveDateRule = {
            aboveOrEqualDate: {
              container: container,
              element: "input.field-input-issueDate",
              errorMessage: "Дата окончания действия документа должна быть больше или равна, чем дата выдачи документа",
              str2dt: str2Dt
            }
          };
          field.rules("add", validationAboveDateRule);
        }

        if (fieldId === 32 && identityDocumentFields & 32 && identityDocumentFields & 64) {
          var validationBelowDateRule = {
            belowOrEqualDate: {
              container: container,
              element: "input.field-input-expireDate",
              errorMessage: "Дата выдачи документа должна быть меньше или равна дате окончания действия документа",
              str2dt: str2Dt
            }
          };
          field.rules("add", validationBelowDateRule);
        }
      };

      setValidationAttrs(1, "series");
      setValidationAttrs(2, "number");
      setValidationAttrs(4, "actNumber");
      setValidationAttrs(8, "issuer");
      setValidationAttrs(16, "issuerCode");
      setValidationAttrs(32, "issueDate");
      setValidationAttrs(64, "expireDate");
      setValidationAttrs(128, "otherDocName");
    }
  }, {
    key: "_preselectDocType",
    value: function _preselectDocType(docTypeControl) {
      var types = ["RfPassport", "BirthCertificate"];

      for (var ind in types) {
        var preType = types[ind];

        if (!docTypeControl.find("option[value=".concat(preType, "]")).length) {
          continue;
        }

        docTypeControl.val(preType);
        return;
      }
    } ///редактировать документ

  }, {
    key: "editIdentityDocument",
    value: function editIdentityDocument(idIdentityDocument) {
      var _this3 = this;

      this.loader.getDocumentType(this.userId, idIdentityDocument).then(function (response) {
        _this3.identityDocumentTypes = [response];

        _this3.loader.getDocumentInfo(_this3.userId, idIdentityDocument).then(function (response) {
          var model = $.extend({}, response, {
            language: language,
            readonly: false,
            editMode: true,
            editFlag: true
          });

          var html = _this3.infoTemplate(model);

          var editForm = null;
          $.show.dialog({
            size: BootstrapDialog.SIZE_WIDE,
            title: "".concat(language.Generic.Common.kEdit, " ").concat(language.Generic.Common.kIdentityDocument.toLowerCase()),
            message: html,
            onshown: function onshown(dialog) {
              dateInput.initDateInputs(new Date(1900, 0, 1), new Date().addYears(50), null, {
                format: "dd.mm.yyyy"
              });
              editForm = dialog.$modalBody.find("form");
              editForm.validate();

              _this3._showFields(dialog.$modalBody);
            },
            buttons: [{
              label: language.Generic.Buttons.kSave,
              cssClass: "btn-primary",
              action: function action(dialog) {
                if (!editForm.valid()) {
                  alert(language.Generic.Common.kValidationError);
                  return;
                }

                var documentData = _this3._bindDocumentDataFromModal(dialog.$modalBody);

                _this3.loader.saveDocumentInfo(_this3.userId, idIdentityDocument, documentData).then(function (identityDocument) {
                  dialog.successClose();

                  _this3._refreshIdentityDocument(identityDocument);
                });
              }
            }]
          });
        });
      });
    } //добавить документ

  }, {
    key: "addIdentityDocument",
    value: function addIdentityDocument() {
      var _this4 = this;

      this.loader.getDocumentTypesForUser(this.userId).then(function (response) {
        if (!response || response.length === 0) {
          alert(language.Generic.Common.kNotAvailableIdentityDocumentTypes);
          return;
        }

        _this4.identityDocumentTypes = response;

        var html = _this4.infoTemplate({
          language: language,
          readonly: false,
          addFlag: true,
          editMode: true,
          identityDocumentTypes: _this4.identityDocumentTypes,
          docTypeFields: 255
        });

        var editForm = null;
        var dialog = $.show.dialog({
          size: BootstrapDialog.SIZE_WIDE,
          title: "".concat(language.Generic.Common.kAdd, " ").concat(language.Generic.Common.kIdentityDocument.toLowerCase()),
          message: html,
          deferredOpen: true,
          onshown: function onshown(dialog) {
            var dateInputs = dialog.$modalBody.find(".input-group.date");
            dateInput.initDateInput(dateInputs, new Date(1900, 0, 1), new Date().addYears(50), null, {
              format: "dd.mm.yyyy"
            });
          },
          buttons: [{
            label: language.Generic.Buttons.kAdd,
            cssClass: "btn-primary",
            action: function action(dialog) {
              if (!editForm.valid()) {
                alert(language.Generic.Common.kValidationError);
                return;
              }

              var documentData = _this4._bindDocumentDataFromModal(dialog.$modalBody);

              _this4.loader.addDocument(_this4.userId, documentData).then(function () {
                dialog.successClose();

                _this4.showIdentityDocuments();
              });
            }
          }]
        });
        dialog.realize();
        var dialogBody = dialog.getModalBody();
        var docTypeControl = dialogBody.find("[name=documentType]");
        docTypeControl.change(function () {
          return _this4._showFields(dialogBody);
        });
        editForm = dialogBody.find("form");
        editForm.validate();

        _this4._preselectDocType(docTypeControl);

        _this4._showFields(dialogBody);

        dialog.open();
      });
    } //удалить документ

  }, {
    key: "delIdentityDocument",
    value: function delIdentityDocument(idIdentityDocument) {
      var _this5 = this;

      $.show.confirmation("".concat(language.Generic.Common.kRemove, " ").concat(language.Generic.Common.kIdentityDocument.toLowerCase(), "?")).then(function () {
        return _this5.loader.deleteDocument(_this5.userId, idIdentityDocument);
      }).then(function () {
        _this5.showIdentityDocuments();
      });
    }
  }]);

  return IdentityDocumentsCtrl;
}();

var IdentityDocumentsLoader =
/*#__PURE__*/
function () {
  function IdentityDocumentsLoader() {
    _classCallCheck(this, IdentityDocumentsLoader);
  }

  _createClass(IdentityDocumentsLoader, [{
    key: "getIdentityDocuments",
    value: function getIdentityDocuments(userId) {
      return jsSubmit({
        action: "/webapi/users/".concat(userId, "/info/identityDocuments"),
        method: "GET",
        auth: true,
        nocache: true,
        showProcessing: false,
        defaultErrorHandling: false
      });
    }
  }, {
    key: "checkAccessIdentityDocuments",
    value: function checkAccessIdentityDocuments(userId) {
      return jsSubmit({
        action: "/webapi/users/".concat(userId, "/info/identityDocuments/checkAccess"),
        method: "GET",
        auth: true,
        nocache: true,
        showProcessing: false,
        defaultErrorHandling: false
      });
    }
  }, {
    key: "getDocumentInfo",
    value: function getDocumentInfo(userId, docId) {
      return jsSubmit({
        action: "/webapi/users/".concat(userId, "/info/identityDocuments/").concat(docId),
        method: "GET",
        auth: true,
        nocache: true,
        showProcessing: true,
        defaultErrorHandling: true
      });
    }
  }, {
    key: "saveDocumentInfo",
    value: function saveDocumentInfo(userId, docId, documentData) {
      return jsSubmit({
        contentType: "application/json",
        action: "/webapi/users/".concat(userId, "/info/identityDocuments/").concat(docId),
        data: documentData,
        method: "POST",
        auth: true,
        showProcessing: true,
        defaultErrorHandling: true
      });
    }
  }, {
    key: "addDocument",
    value: function addDocument(userId, documentData) {
      return jsSubmit({
        contentType: "application/json",
        action: "/webapi/users/".concat(userId, "/info/identityDocuments"),
        data: documentData,
        method: "PUT",
        auth: true,
        showProcessing: true,
        defaultErrorHandling: true
      });
    }
  }, {
    key: "getDocumentTypesForUser",
    value: function getDocumentTypesForUser(userId) {
      return jsSubmit({
        action: "/webapi/users/".concat(userId, "/info/identityDocuments/identityDocumentTypes"),
        method: "GET",
        auth: true,
        nocache: true,
        showProcessing: false,
        defaultErrorHandling: true
      });
    }
  }, {
    key: "getDocumentType",
    value: function getDocumentType(userId, identityDocumentId) {
      return jsSubmit({
        action: "/webapi/users/".concat(userId, "/info/identityDocuments/identityDocumentType/").concat(identityDocumentId),
        method: "GET",
        auth: true,
        showProcessing: false,
        defaultErrorHandling: true
      });
    }
  }, {
    key: "deleteDocument",
    value: function deleteDocument(userId, docId) {
      return jsSubmit({
        action: "/webapi/users/".concat(userId, "/info/identityDocuments/").concat(docId),
        data: null,
        method: "DELETE",
        auth: true,
        nocache: true,
        showProcessing: true,
        defaultErrorHandling: true
      });
    }
  }]);

  return IdentityDocumentsLoader;
}();

module.exports = IdentityDocumentsCtrl;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var TemplatesManager, UserInfoAccessJournalLoader, userInfoAccessJournalCtrl;

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var changePasswordCtrl;

changePasswordCtrl = (function() {
  var _data, _template, md5;

  md5 = __webpack_require__(6);

  function changePasswordCtrl(params) {
    this.params = params;
  }

  _data = {};

  _template = '<form class="form-horizontal" name="SavePassword" action="/asp/ajax/ChangePassword.asp"> <input type="hidden" name="NP3"> <input type="hidden" name="OP2"> {{#if userEditHimself}} <div class="form-group"> <label class="control-label col-md-4">' + language.Generic.Common.kCurrPassword + '</label> <div class="col-md-8"> <input type="password" class="form-control " autocomplete="off" name="OP" size="15" maxlength="40" onchange="dataChanged()"> <div style="margin-top: 5px;">' + language.Generic.Common.kEnterCurrPassword + '</div> </div> </div> {{/if}} <div class="form-group"> <label class="control-label col-md-4">' + language.Generic.Common.kNewPassword + '</label> <div class="col-md-8"> <input type="password" class="form-control" autocomplete="off" name="NP" size="15" maxlength="40" onchange="dataChanged()"> {{#if userEditHimself}} <div style="margin-top: 5px;">' + language.Generic.Common.kCreateNewPassword + '</div> {{/if}} </div> </div> <div class="form-group"> <label class="control-label col-md-4">' + language.Generic.Common.kConfirmPassword + '</label> <div class="col-md-8"> <input type="password" class="form-control" autocomplete="off" name="NP2" size="15" maxlength="40" onchange="dataChanged()"> </div> </div> </form>';

  changePasswordCtrl.prototype.changePassword = function(userId) {
    var _showDialog;
    _showDialog = (function(_this) {
      return function() {
        var cancelBtn, fullTemplate, html, saveBtn;
        cancelBtn = function(dialog) {
          return dialog.successClose();
        };
        saveBtn = function(dialog) {
          var _params;
          _params = {
            loginName: _data.loginName,
            lastName: _data.lastName,
            firstName: _data.firstName,
            middleName: _data.middleName,
            restrictNumericPasswords: _data.restrictNumericPasswords,
            inputOldPass: $('input[name="OP"]'),
            inputOldPass2: $('input[name="OP2"]'),
            inputNewPass: $('input[name="NP"]'),
            inputConfirmPass: $('input[name="NP2"]'),
            inputNewPass3: $('input[name="NP3"]'),
            userEditHimself: _this.params.userEditHimself,
            minPasswordLength: _this.params.minPasswordLength
          };
          if (!_this.canChangePassword(_params)) {
            return false;
          }
          return jsSubmit({
            action: '/asp/ajax/ChangePassword.asp',
            data: {
              userId: typeof userId === "undefined" ? _this.params.userId : userId,
              act: "save",
              OP2: $('input[name="OP2"]').val(),
              NP3: $('input[name="NP3"]').val()
            },
            showProcessing: true,
            onSuccess: function(response) {
              if (typeof _this.params.customSuccess !== "undefined") {
                return _this.params.customSuccess();
              } else {
                alert(response.message);
                return dialog.successClose();
              }
            }
          });
        };
        fullTemplate = Handlebars.compile(_template);
        html = fullTemplate({
          userEditHimself: _this.params.userEditHimself
        });
        return $.show.dialog({
          title: language.Generic.Common.kChangePassword,
          size: BootstrapDialog.SIZE_WIDE,
          message: html,
          buttons: [
            {
              label: language.Generic.Buttons.kSave,
              action: saveBtn,
              cssClass: 'btn-primary',
              hotkey: 13
            }, {
              label: language.Generic.Curriculum.kBtnCancel,
              action: cancelBtn
            }
          ],
          onshown: function() {
            if (!_this.params.userEditHimself) {
              return $('input[name="NP"]').focus();
            } else {
              return $('input[name="OP"]').focus();
            }
          }
        });
      };
    })(this);
    if (!$.isEmptyObject(_data)) {
      return _showDialog();
    } else {
      return jsSubmit({
        action: '/asp/ajax/ChangePassword.asp',
        data: {
          userId: typeof userId === "undefined" ? this.params.userId : userId,
          act: "prepare"
        },
        showProcessing: true,
        onSuccess: (function(_this) {
          return function(response) {
            _data["loginName"] = response.data.loginName;
            _data["lastName"] = response.data.lastName;
            _data["firstName"] = response.data.firstName;
            _data["middleName"] = response.data.middleName;
            _data["restrictNumericPasswords"] = response.data.restrictNumericPasswords;
            _showDialog();
          };
        })(this)
      });
    }
  };

  changePasswordCtrl.prototype.canChangePassword = function(_options) {
    var confirmPass, oldPass, pass, upperPass;
    oldPass = _options.inputOldPass.val();
    pass = _options.inputNewPass.val();
    upperPass = pass.toUpperCase();
    confirmPass = _options.inputConfirmPass.val();
    if (this.params.userEditHimself && !oldPass) {
      focusAlert(_options.inputOldPass, language.Generic.Common.kErrOldPassword);
      return false;
    }
    if (!pass) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrNewPassword);
      return false;
    }
    if (pass.length < this.params.minPasswordLength) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrorPasswordMustHave);
      return false;
    }
    if (pass !== confirmPass) {
      focusAlert(_options.inputConfirmPass, language.Generic.Common.kErrDifferentPassword);
      return false;
    }
    if (upperPass === _options.loginName || upperPass === _options.lastName || upperPass === _options.lastName + _options.firstName || upperPass === _options.firstName + _options.lastName || upperPass === _options.firstName || upperPass === _options.lastName + _options.firstName.substr(0, 1) || upperPass === _options.firstName.substr(0, 1) + _options.lastName || upperPass === _options.lastName + _options.firstName.substr(0, 1) + _options.middleName.substr(0, 1) || upperPass === _options.firstName.substr(0, 1) + _options.middleName.substr(0, 1) + _options.lastName) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kSimplePassword);
      return false;
    }
    if (_options.restrictNumericPasswords && !/\D/.test(upperPass)) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrNumericPasswordsRestricted);
      return false;
    }
    if (this.params.userEditHimself && pass === oldPass) {
      focusAlert(_options.inputNewPass, language.Generic.Common.kNewPasswordMustNotEqualOld);
      return false;
    }
    if (pass.charAt(0) === ' ' || pass.charAt(pass.length - 1) === ' ') {
      focusAlert(_options.inputNewPass, language.Generic.Common.kErrPWDSurroundSpaces);
      return false;
    }
    if (this.params.userEditHimself) {
      _options.inputOldPass2.val(md5(oldPass));
    }
    _options.inputNewPass3.val(md5(pass));
    return true;
  };

  return changePasswordCtrl;

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
})(changePasswordCtrl);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 1.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Code also contributed by Greg Holt
 * See http://pajhome.org.uk/site/legal.html for details.
 */

/*
 * This file was modified to process non-ascii strings in IE
 */
(function () {
  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  }
  /*
   * Bitwise rotate a 32-bit number to the left.
   */


  function rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  /*
   * These functions implement the four basic operations the algorithm uses.
   */


  function cmn(q, a, b, x, s, t) {
    return safe_add(rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }

  function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t);
  }

  function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t);
  }

  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  /*
   * Calculate the MD5 of an array of little-endian words, producing an array
   * of little-endian words.
   */


  function coreMD5(x) {
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = ff(c, d, a, b, x[i + 10], 17, -42063);
      b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558);
      d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }

    return [a, b, c, d];
  }
  /*
   * Convert an array of little-endian words to a hex string.
   */


  function binl2hex(binarray) {
    var hex_tab = "0123456789abcdef";
    var str = "";

    for (var i = 0; i < binarray.length * 4; i++) {
      str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
    }

    return str;
  }
  /* Differently from charCodeAt, returns normal ASCII codes for russian letters */


  function charCodeAt_(s, pos) {
    var n = s.charCodeAt(pos);
    if (n >= 0 && n <= 255) return n;else if (n >= 1040 && n <= 1103) return n - 848;else if (n == 1025) return 168;else if (n == 1105) return 184;else if (n == 8470) return 185;else return 0;
  }
  /*
   * Convert an 8-bit character string to a sequence of 16-word blocks, stored
   * as an array, and append appropriate padding for MD4/5 calculation.
   * If any of the characters are >255, the high byte is silently ignored.
   */


  function str2binl_(str) {
    var nblk = (str.length + 8 >> 6) + 1; // number of 16-word blocks

    var blks = new Array(nblk * 16);

    for (var i = 0; i < nblk * 16; i++) {
      blks[i] = 0;
    }

    for (var i = 0; i < str.length; i++) {
      blks[i >> 2] |= (charCodeAt_(str, i) & 0xFF) << i % 4 * 8;
    }

    blks[i >> 2] |= 0x80 << i % 4 * 8;
    blks[nblk * 16 - 2] = str.length * 8;
    return blks;
  }
  /* External interface */


  function hexMD5_(str) {
    return binl2hex(coreMD5(str2binl_(str)));
  } //для поддержки js модульности


  (function (exp, name) {
    var exported = false;

    if (typeof module !== "undefined" && module.exports) {
      module.exports = exp;
      exported = true;
    }

    if (true) {
      exports = exp;
      exported = true;
    }

    if (!exported && typeof window !== "undefined" && typeof name !== "undefined") {
      window[name] = exp;
    }

    if (typeof root !== "undefined" && typeof name !== "undefined") {
      root[name] = exp;
    }
  })(hexMD5_, "hexMD5");
})();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserParamDependenciesManager = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserParamDependenciesManager = function UserParamDependenciesManager() {
  var _this = this;

  _classCallCheck(this, UserParamDependenciesManager);

  this.dependencies = [];
  var deferred = $.Deferred();
  this.ready = deferred.promise(); //загрузка всех зависимостей между полями ЛК

  var dependenciesReady = jsSubmit({
    action: "/webapi/users/paramDependecies",
    auth: false,
    data: {
      ver: appContext.version
    },
    method: "get"
  }).then(function (response) {
    _this.dependencies = response;
  });
  var manager = this;
  var controlUtils = new ControlUtils(); //собираем все параметры с формы

  this.paramFields = new ParamsCollector().collect(); //загружаем информацию о зависимостях параметров ЛК

  $.when(dependenciesReady).then(function () {
    var prepareAction = function prepareAction(paramInfo, actionInfo) {
      if (actionInfo.actionType === DependActionType.Show) {
        if (paramInfo.groupItem) {
          return function () {
            return $(paramInfo.groupItem).show();
          };
        } else {
          return function () {
            return $(paramInfo.formGroup).show();
          };
        }
      }

      if (actionInfo.actionType === DependActionType.Hide) {
        if (paramInfo.groupItem) {
          return function () {
            return $(paramInfo.groupItem).hide();
          };
        } else {
          return function () {
            return $(paramInfo.formGroup).hide();
          };
        }
      }

      return function () {};
    };

    var getDependencyActions = function getDependencyActions(paramId, value) {
      var dependentParams = _.filter(manager.dependencies, function (dep) {
        return dep.condition.param === paramId;
      });

      if (!dependentParams.length) {
        return [];
      }

      if (value === "-1") {
        value = "";
      }

      var actions = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dependentParams[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var depInfo = _step.value;

          var dependParam = _.findWhere(manager.paramFields, {
            paramId: depInfo.dependParam
          });

          if (!dependParam) {
            //на форме нет зависимого параметра
            continue;
          }

          var actionInfo = null;

          if (depInfo.condition.operator === "Empty") {
            actionInfo = !value ? depInfo.then : depInfo["else"];
          }

          if (depInfo.condition.operator === "NotEmpty") {
            actionInfo = value ? depInfo.then : depInfo["else"];
          }

          if (depInfo.condition.operator === "Equals") {
            actionInfo = value == depInfo.condition.value ? depInfo.then : depInfo["else"];
          }

          if (!actionInfo) {
            continue;
          }

          var action = prepareAction(dependParam, actionInfo);
          actions.push({
            actionType: actionInfo.actionType,
            dependParam: dependParam,
            action: action
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return actions;
    };

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var paramInfo = _step2.value;

        var dependentParams = _.filter(manager.dependencies, function (dep) {
          return dep.condition.param === paramInfo.paramId;
        });

        if (!dependentParams.length) {
          return "continue";
        }

        var value = $(paramInfo.control).val();
        $(paramInfo.control).data("prev-value", value);
        $(paramInfo.control).on("change", function () {
          var control = $(this);
          var setValue = control.val();
          var changeActions = getDependencyActions(paramInfo.paramId, setValue);

          var clearActions = _.filter(changeActions, function (act) {
            return act.actionType === DependActionType.Hide && !controlUtils.isEmpty(act.dependParam.control);
          });

          _.each(clearActions, function (act) {
            //для действия скрытия добавляем также очистку
            var prevAction = act.action;

            act.action = function () {
              prevAction();
              controlUtils.clearVal(act.dependParam.control);
            };
          });

          if (!clearActions.length) {
            //если действия не критичные - то просто выполняем их и запоминаем установленное значение
            _.each(changeActions, function (act) {
              return act.action();
            });

            control.data("prev-value", setValue);
            return;
          } //для действия - скрытия элемента дополнительно выводим подтверждение пользователю и только потом выполняем действия


          var confirmText = "После изменения станут недоступными и будут очищены следующие поля:";
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = clearActions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var hideAction = _step3.value;
              confirmText += "\n - " + hideAction.dependParam.label;
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          confirmText += "\n\n" + language.Generic.Common.kCfrmContinue;

          var yes = function yes() {
            _.each(changeActions, function (act) {
              return act.action();
            });

            control.data("prev-value", setValue);
          };

          var no = function no() {
            var prevValue = control.data("prev-value");
            control.val(prevValue);
          };

          $.show.confirmation(confirmText).then(yes, no);
        }); //выполняем все правила при инициализации, без диалогов

        var paramDepActions = getDependencyActions(paramInfo.paramId, value);

        _.each(paramDepActions, function (paramDepAction) {
          return paramDepAction.action();
        });
      };

      for (var _iterator2 = manager.paramFields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _ret = _loop();

        if (_ret === "continue") continue;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    deferred.resolve();
  });
};

exports.UserParamDependenciesManager = UserParamDependenciesManager;

var ParamsCollector =
/*#__PURE__*/
function () {
  function ParamsCollector() {
    _classCallCheck(this, ParamsCollector);
  }

  _createClass(ParamsCollector, [{
    key: "collect",
    value: function collect() {
      var paramRegexp = /^P_(\d+)_(\w)_(.+)$/;
      var paramFields = [];
      $("[name^='P_']", document.forms.UserInfo).each(function () {
        var control = this;
        var name = control.name;

        if (!name) {
          return;
        }

        var matches = name.match(paramRegexp);

        if (!matches || !matches.length) {
          return;
        }

        var formGroup = $(this).closest("div.form-group");
        var groupItem = $(this).closest("div.group-item");
        var label = null;

        if (groupItem.length) {
          label = groupItem.find("label").text();
        } else {
          label = formGroup.find("label").text();
        }

        paramFields.push({
          control: control,
          formGroup: formGroup.length ? formGroup[0] : null,
          groupItem: groupItem.length ? groupItem[0] : null,
          label: label,
          paramId: parseInt(matches[1])
        });
      });
      return paramFields;
    }
  }]);

  return ParamsCollector;
}();

var ControlUtils =
/*#__PURE__*/
function () {
  function ControlUtils() {
    _classCallCheck(this, ControlUtils);
  }

  _createClass(ControlUtils, [{
    key: "clearVal",
    //очистка контрола
    value: function clearVal(control) {
      if (control.tagName === "SELECT") {
        $(control).val(-1);
      } else {
        $(control).val("");
      } //todo. не работает очистка малтичойз параметров

    }
  }, {
    key: "isEmpty",
    value: function isEmpty(control) {
      var val = $(control).val();

      if (control.tagName === "SELECT") {
        return !val || val === "-1";
      } else {
        return !val;
      }
    }
  }]);

  return ControlUtils;
}();

var DependActionType = {
  Hide: "Hide",
  Show: "Show",
  SetValue: "SetValue"
};

/***/ })
/******/ ]);
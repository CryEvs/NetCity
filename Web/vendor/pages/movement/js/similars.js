var personSimilarResolveData, similarUser, similarsCtrl, similarsGroup, similarsOption;

similarUser = (function() {
  function similarUser(similarInfo) {
    this.similarInfo = similarInfo;
    this.title = null;
    this.printTitle = null;
    this.organization = null;
    this.infoHint = null;
    this.questionHint = null;
    this.canUse = null;
    this.similarUserId = null;
    this.resolveData = null;
    this.relatedSimilarUser = [];
    this._checked = this.similarInfo.checked;
    this.title = this.similarInfo.fullName;
    this.printTitle = this.similarInfo.fullName;
    this.canUse = this.similarInfo.canUse;
    this.similarUserId = this.similarInfo.userId;
    this.relatedSimilarUser = this.similarInfo.relatedForUserId;
    this.organization = this.similarInfo.organization;
    this.birthDate = this.similarInfo.birthDate;
    this.auxComment = this.similarInfo.auxComment;
  }

  similarUser.prototype.checked = function() {
    if (!(arguments != null ? arguments.length : void 0)) {
      return this._checked;
    } else {
      return this._checked = arguments[0];
    }
  };

  return similarUser;

})();

similarsGroup = (function() {
  function similarsGroup(rslvData, similars1, groupLocation, titleData) {
    var docDateInfoMessage;
    this.rslvData = rslvData;
    this.similars = similars1;
    this.groupLocation = groupLocation;
    this.titleData = titleData;
    this.title = null;
    this.hint = null;
    this.similarUsers = [];
    this.resolveData = this.rslvData;
    this.title = this.titleData;
    this.similarUsers = _.map(this.similars, (function(_this) {
      return function(similar) {
        return new similarUser(similar);
      };
    })(this));
    if (!this.resolveData.isParent) {
      _.each(this.similarUsers, (function(_this) {
        return function(smlrUser) {
          return smlrUser.infoHint = language.Movement.kGetSimilarAddInfo;
        };
      })(this));
      if (this.groupLocation === "InSchool") {
        _.each(_.filter(this.similarUsers, (function(_this) {
          return function(smlrUser) {
            return !smlrUser.canUse;
          };
        })(this)), (function(_this) {
          return function(smlrUser) {
            return smlrUser.questionHint = language.Movement.kMustTransferToAnotherClass;
          };
        })(this));
      } else if (this.groupLocation === "InPool") {
        docDateInfoMessage = language.Generic.Import.kStudentFoundInPool + language.Generic.Import.kButPoolDateMoreThenDocDate;
        _.each(_.filter(this.similarUsers, (function(_this) {
          return function(smlrUser) {
            return !smlrUser.canUse;
          };
        })(this)), (function(_this) {
          return function(smlrUser) {
            return smlrUser.questionHint = docDateInfoMessage;
          };
        })(this));
      }
    }
    if (this.groupLocation === "InOtherSchools" || this.groupLocation === "InOtherSchoolsExcludeUDODs") {
      _.each(this.similarUsers, (function(_this) {
        return function(smlrUser) {
          if (smlrUser.organization) {
            return smlrUser.title = smlrUser.title + " - " + smlrUser.organization.name;
          }
        };
      })(this));
    }
  }

  similarsGroup.prototype.choice = function() {
    var setSimilarUser, setSimilarUserId;
    if (!(arguments != null ? arguments.length : void 0)) {
      return _.find(this.similarUsers, function(similarUser) {
        return similarUser.checked();
      });
    } else {
      this.clearChoice();
      setSimilarUserId = arguments[0];
      setSimilarUser = _.find(this.similarUsers, function(similarUser) {
        return similarUser.similarUserId === setSimilarUserId;
      });
      if (!setSimilarUser) {
        throw "similar " + setSimilarUserId + " not finded in group " + this.title;
      }
      return setSimilarUser.checked(true);
    }
  };

  similarsGroup.prototype.clearChoice = function() {
    return _.each(this.similarUsers, function(similarUser) {
      return similarUser.checked(false);
    });
  };

  return similarsGroup;

})();

similarsOption = (function() {
  function similarsOption(rslvData, type, typeTitle, typeHint) {
    this.rslvData = rslvData;
    this.type = type;
    this.typeTitle = typeTitle;
    this.typeHint = typeHint;
    this.title = null;
    this.hint = null;
    this.id = null;
    this._checked = this.rslvData.data.choice && this.rslvData.data.choice.choice && this.rslvData.data.choice.choice !== "ExistingPerson";
    this.resolveData = this.rslvData;
    this.id = this.type;
    this.title = this.typeTitle;
    this.hint = this.typeHint;
  }

  similarsOption.prototype.checked = function() {
    if (!(arguments != null ? arguments.length : void 0)) {
      return this._checked;
    } else {
      return this._checked = arguments[0];
    }
  };

  return similarsOption;

})();

personSimilarResolveData = (function() {
  var getLocation, getSimilarRadioTitle;

  function personSimilarResolveData(data1) {
    var ref, self, similarsBySimilars;
    this.data = data1;
    this.personId = this.data.personId;
    this.title = this.data.fullName;
    this.similarOptions = [];
    this.similarGroups = [];
    this.parentsResolveData = [];
    this.isParent = false;
    if (this.data.isParent) {
      this.isParent = this.data.isParent;
    }
    self = this;
    if (((ref = this.data.parentsSimilarsResolveData) != null ? ref.length : void 0) > 0) {
      this.parentsResolveData = _.map(this.data.parentsSimilarsResolveData, (function(_this) {
        return function(parentResolveData) {
          parentResolveData.isParent = true;
          return new personSimilarResolveData(parentResolveData);
        };
      })(this));
    }
    if (this.data.options.options) {
      this.similarOptions = _.chain(this.data.options.options).reject(function(option) {
        return option === "ExistingPerson";
      }).map(function(option) {
        return new similarsOption(self, option, getSimilarRadioTitle(option));
      }).value();
    }
    if (this.data.options.similars) {
      this.similarGroups = _.chain(this.data.options.similars).reject(function(similar) {
        var ref1;
        return ((ref1 = similar.relatedForUserId) != null ? ref1.length : void 0) > 0;
      }).groupBy("location").map((function(_this) {
        return function(similars, location) {
          return new similarsGroup(self, similars, location, getLocation(location, _this.isParent));
        };
      })(this)).value();
      similarsBySimilars = _.filter(this.data.options.similars, function(similar) {
        var ref1;
        return ((ref1 = similar.relatedForUserId) != null ? ref1.length : void 0) > 0;
      });
      if ((similarsBySimilars != null ? similarsBySimilars.length : void 0) > 0) {
        self.isParent = true;
        this.similarGroups.unshift(new similarsGroup(self, similarsBySimilars, "", language.Movement.kParentSimilarBySimilar));
      }
      if (this.data.options.similars.length === 1 && this.data.choice && this.data.choice.choice === "ExistingPerson") {
        this.similarGroups[0].similarUsers[0].checked(true);
      }
    }
    return;
  }

  personSimilarResolveData.prototype.resolved = function() {
    var ref, resolvedOptionChoice;
    resolvedOptionChoice = this.getChoice();
    if (((ref = this.parentsResolveData) != null ? ref.length : void 0) && (!resolvedOptionChoice || (resolvedOptionChoice != null ? resolvedOptionChoice.id : void 0) !== "IgnorePerson") && _.any(this.parentsResolveData, function(resolveData) {
      return !resolveData.resolved();
    })) {
      return false;
    }
    if (resolvedOptionChoice) {
      return true;
    }
    if (_.any(this.similarGroups, function(simlarGroup) {
      return simlarGroup.choice();
    })) {
      return true;
    }
    return false;
  };

  personSimilarResolveData.prototype.clearChoice = function() {
    _.each(this.similarOptions, function(option) {
      return option.checked(false);
    });
    return _.each(this.similarGroups, function(group) {
      return group.clearChoice();
    });
  };

  personSimilarResolveData.prototype.setChoice = function(choice) {
    var choiceOption;
    this.clearChoice();
    choiceOption = _.find(this.similarOptions, function(option) {
      return option.id = choice;
    });
    if (!choiceOption) {
      throw "choice " + choice + " not finded";
    }
    return choiceOption.checked(true);
  };

  personSimilarResolveData.prototype.getChoice = function() {
    return _.find(this.similarOptions, function(option) {
      return option.checked();
    });
  };

  personSimilarResolveData.prototype.updateServerModel = function() {
    var optionChoice, ref, userChoice;
    optionChoice = this.getChoice();
    if (optionChoice) {
      this.data.choice = {
        choice: optionChoice.id,
        existingUserId: null
      };
    } else {
      userChoice = (_.find(this.similarGroups, function(smlGroup) {
        return smlGroup.choice();
      })).choice();
      if (userChoice) {
        this.data.choice = {
          choice: "ExistingPerson",
          existingUserId: userChoice.similarUserId
        };
      }
    }
    if ((ref = this.parentsResolveData) != null ? ref.length : void 0) {
      if (optionChoice && optionChoice.id === "IgnorePerson") {
        return _.each(this.parentsResolveData, function(parentReslvData) {
          return parentReslvData.data.choice = {
            choice: "IgnorePerson",
            existingUserId: null
          };
        });
      } else {
        return _.each(this.parentsResolveData, function(parentReslvData) {
          return parentReslvData.updateServerModel();
        });
      }
    }
  };

  personSimilarResolveData.prototype.setSimilar = function(similarUserId) {
    var i, j, len, len1, ref, ref1, similarGroup, user;
    this.clearChoice();
    ref = this.similarGroups;
    for (i = 0, len = ref.length; i < len; i++) {
      similarGroup = ref[i];
      ref1 = similarGroup.similarUsers;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        user = ref1[j];
        if (user.similarUserId === similarUserId) {
          user.checked(true);
          return;
        }
      }
    }
  };

  getSimilarRadioTitle = function(similarChoice) {
    switch (similarChoice.toString()) {
      case "NewPerson":
        return language.Generic.Movement.kNewPerson;
      case "DuplicatePerson":
        return language.Generic.Movement.kDuplicatePerson;
      case "IgnorePerson":
        return language.Generic.Movement.kIgnorePerson;
      default:
        return similarChoice;
    }
  };

  getLocation = function(strLocation, bType) {
    if (bType) {
      switch (strLocation) {
        case "InSchool":
          return language.Generic.Movement.kParentSimilarsInSchool;
        case "InOtherSchools":
          return language.Generic.Movement.kParentSimilarsInOtherSchools;
        case "InOtherSchoolsExcludeUDODs":
          return language.Generic.Movement.kParentSimilarsInOtherSchools;
      }
    } else {
      switch (strLocation) {
        case "InSchool":
          return language.Movement.kSimilarsInSchool;
        case "InPool":
          return language.Movement.kSimilarsInPool;
        case "InOtherSchools":
          return language.Movement.kSimilarsInOtherSchools;
        case "InOtherSchoolsExcludeUDODs":
          return language.Movement.kSimilarsInOtherSchools;
      }
    }
  };

  return personSimilarResolveData;

})();

similarsCtrl = (function() {
  var loadTemplate, optionsTmpl, similarUserAdditionalInfoTmpl, similarsByLocationsTmpl, similarsExistingTmpl, similarsPrintTmpl, similarsPrintUserTmpl, similarsTmpl;

  similarsTmpl = '';

  optionsTmpl = '';

  similarsExistingTmpl = '';

  similarsByLocationsTmpl = '';

  similarUserAdditionalInfoTmpl = '';

  similarsPrintTmpl = '';

  similarsPrintUserTmpl = '';

  loadTemplate = function(url, setFunc) {
    url = url + "?ver=" + appContext.version;
    return $.ajax({
      url: url,
      cache: true,
      success: function(data) {
        var html;
        html = data.replace(/(?:\r\n|\r|\n)/g, '');
        return setFunc(html);
      }
    });
  };

  function similarsCtrl(currentUser1, currentSchoolId1, saveFunction) {
    var queries;
    this.currentUser = currentUser1;
    this.currentSchoolId = currentSchoolId1;
    this.saveFunction = saveFunction;
    this.resolveDatas = new Array();
    this.model = null;
    queries = [
      loadTemplate('/vendor/pages/movement/templates/similarsStudentsListTemplate.html', function(html) {
        return similarsTmpl = html;
      }), loadTemplate('/vendor/pages/movement/templates/similarsOptionsTemplate.html', function(html) {
        return optionsTmpl = html;
      }), loadTemplate('/vendor/pages/movement/templates/similarsExistingTemplate.html', function(html) {
        return similarsExistingTmpl = html;
      }), loadTemplate('/vendor/pages/movement/templates/similarsByLocationsTemplate.html', function(html) {
        return similarsByLocationsTmpl = html;
      }), loadTemplate('/vendor/pages/movement/templates/SimilarUserAdditionalInfoTemplate.html', function(html) {
        return similarUserAdditionalInfoTmpl = html;
      }), loadTemplate('/vendor/pages/movement/templates/SimilarsPrintTemplate.html', function(html) {
        return similarsPrintTmpl = html;
      }), loadTemplate('/vendor/pages/movement/templates/SimilarsPrintUserTemplate.html', function(html) {
        return similarsPrintUserTmpl = html;
      })
    ];
    Handlebars.registerHelper('DelQuots', function(strValue) {
      return strValue.replace('"', '');
    });
    Handlebars.registerHelper('ToLowerCase', function(strValue) {
      return strValue.toLowerCase();
    });
    Handlebars.registerHelper('ExistsEnabledGroups', function(objSimilarGroups) {
      if (_.any(objSimilarGroups, function(similarGroup) {
        return _.any(similarGroup.similarUsers, function(similarUser) {
          return similarUser.canUse;
        });
      })) {
        return "";
      } else {
        return "line-through";
      }
    });
    extDeferred.when(queries).then(function() {
      Handlebars.registerPartial('optionsTmpl', optionsTmpl);
      Handlebars.registerPartial('similarsExistingTmpl', similarsExistingTmpl);
      Handlebars.registerPartial('similarsByLocationsTmpl', similarsByLocationsTmpl);
      return Handlebars.registerPartial('similarsPrintUserTmpl', similarsPrintUserTmpl);
    });
  }

  similarsCtrl.prototype.findResolveDataByPerson = function(personId) {
    var parentsResolveData, resolveData;
    resolveData = _.filter(this.resolveDatas, function(resolveData) {
      return resolveData.personId.replace(/(\")/g, '') === personId;
    });
    if (!resolveData || resolveData.length === 0) {
      parentsResolveData = _.filter(this.resolveDatas, function(resolveData) {
        return resolveData.parentsResolveData && _.any(resolveData.parentsResolveData, function(parent) {
          return parent.personId.replace(/(\")/g, '') === personId;
        });
      });
      resolveData = _.map(_.pluck(parentsResolveData, 'parentsResolveData'), function(resData) {
        return _.find(resData, function(reslvData) {
          return reslvData.personId.replace(/(\")/g, '') === personId;
        });
      });
    }
    if (!resolveData || resolveData.length === 0) {
      throw "resolve data not finded for personId " + personId;
    }
    return resolveData;
  };

  similarsCtrl.prototype.changeOptionChoice = function(ctrl) {
    var choice, ctrlUserIndex, personId, resolveData, selfChangeOptionChoice;
    personId = ctrl.name.slice(13, -1);
    resolveData = this.findResolveDataByPerson(personId);
    selfChangeOptionChoice = this;
    choice = $(ctrl).val();
    ctrlUserIndex = $(ctrl).closest(".similar-resolve-container").data('id');
    _.each(resolveData, function(resData) {
      return resData.setChoice(choice);
    });
    _.each(resolveData, function(resData) {
      var parentsCtrl, similarInputs;
      $("span.similar-resolve-status-icon", resData.container).addClass("resolved");
      if (resData.userIndex !== ctrlUserIndex) {
        $(resData.container).find(".similar-resolve-person").nextAll().hide();
        $("<div class='text-without-choice'>" + $(ctrl).siblings('.similar-user-opton-title').text() + "</div>").insertAfter($(resData.container).find(".similar-resolve-person:visible"));
      }
      if (resData.parentsResolveData && resData.parentsResolveData.length > 0 && !resData.isParent) {
        parentsCtrl = $(resData.container).siblings(".similar-parents");
        if (choice === "IgnorePerson") {
          _.each(parentsCtrl, function(parent) {
            var parentName, parentPersonId, parentResolveData;
            parentName = $(parent).find('input:checked').prop('name');
            if (parentName) {
              parentPersonId = parentName.toString().slice(13, -1);
              parentResolveData = _.reject(selfChangeOptionChoice.findResolveDataByPerson(parentPersonId), function(item) {
                return item.userIndex === $(parent).data('id');
              });
              _.each(parentResolveData, function(item) {
                if ((item.similarOptions && item.similarOptions.length > 1) || (item.similarGroups && item.similarGroups.length > 1) || (item.similarGroups && item.similarGroups.length === 1 && item.similarGroups[0].similarUsers && item.similarGroups[0].similarUsers.length > 1) || (item.similarGroups && item.similarGroups.length > 0 && item.similarOptions && item.similarOptions.length > 0)) {
                  item.clearChoice();
                  return $("span.similar-resolve-status-icon", item.container).removeClass("resolved");
                }
              });
              return $("[name='" + $(parent).find('input:checked').prop('name') + "']").closest('.similar-parents[data-id!="' + $(parent).data('id') + '"]').find(".similar-resolve-person").siblings(".row").show().siblings('.text-without-choice').remove();
            }
          });
          parentsCtrl.hide();
          return $("input[type=radio]:visible[checked]").prop('checked', true);
        } else {
          if ($(".similar-resolve-person:hidden", parentsCtrl).length) {
            parentsCtrl.show();
            similarInputs = $("input[type=radio]:visible[checked]", parentsCtrl);
            similarInputs.prop('checked', true);
            return _.each(similarInputs, function(input) {
              return selfChangeOptionChoice.changeOptionChoice(input);
            });
          }
        }
      }
    });
    if (resolveData.length > 1) {
      return $("input[type=radio]:visible[checked]").prop('checked', true);
    }
  };

  similarsCtrl.prototype.changeSimilarChoice = function(ctrl) {
    var ctrlUserIndex, personId, resolveData, similarUserId;
    personId = ctrl.name.slice(13, -1);
    resolveData = this.findResolveDataByPerson(personId);
    similarUserId = $(ctrl).data("id");
    ctrlUserIndex = $(ctrl).closest(".similar-resolve-container").data('id');
    _.each(resolveData, function(resData) {
      return resData.setSimilar(similarUserId);
    });
    _.each(resolveData, function(resData) {
      $("span.similar-resolve-status-icon", resData.container).addClass("resolved");
      if (resData.userIndex !== ctrlUserIndex) {
        $(resData.container).find(".similar-resolve-person").nextAll().hide();
        return $("<div class='text-without-choice'>" + $(ctrl).siblings('.similar-user-name').text() + "</div>").insertAfter($(resData.container).find(".similar-resolve-person:visible"));
      }
    });
    return $("input[type=radio]:visible[checked]").prop('checked', true);
  };

  similarsCtrl.prototype.resolved = function() {
    return _.every(this.resolveDatas, function(resolveData) {
      return resolveData.resolved();
    });
  };

  similarsCtrl.prototype.getSimilarInfo = function(infoSimilar) {
    var similarId;
    similarId = $(infoSimilar).parent().find("input").data("id");
    return jsSubmit({
      action: "/webapi/movement/similars/" + similarId,
      showProcessing: true,
      method: "GET"
    }).then((function(_this) {
      return function(response) {
        return _this.showSimilarInfo(response);
      };
    })(this));
  };

  similarsCtrl.prototype.showSimilarInfo = function(studentSimilarInfo) {
    var buttonMail, buttonOk, buttons, currentSchoolId, currentUser, orgId, orgName, similarUserAddInfoTemplate, similarUserInfo;
    studentSimilarInfo.language = language;
    similarUserAddInfoTemplate = Handlebars.compile(similarUserAdditionalInfoTmpl);
    similarUserInfo = studentSimilarInfo.lastName + " " + studentSimilarInfo.firstName + " " + studentSimilarInfo.middleName;
    currentUser = this.currentUser;
    currentSchoolId = this.currentSchoolId;
    if (studentSimilarInfo.organization) {
      orgName = studentSimilarInfo.organization.name;
      orgId = studentSimilarInfo.organization.id;
      buttonMail = {
        label: language.Generic.Movement.kRequestDepart,
        action: function() {
          return jsSubmit({
            action: "/webapi/schools/" + currentSchoolId + "/getAddressedName",
            showProcessing: true,
            method: "GET"
          }).then((function(_this) {
            return function(response) {
              var currentSchoolAddressedName, mailText, mailTheme;
              currentSchoolAddressedName = response;
              mailTheme = language.Generic.Movement.kRequestDepartMailTheme.templateFormat({
                StudentFio: similarUserInfo
              });
              mailText = language.Generic.Movement.kRequestDepartMailText.templateFormat({
                StudentFio: similarUserInfo,
                SchoolName: currentSchoolAddressedName,
                CurrentUserFio: currentUser,
                ProductName: appContext.productName
              });
              return sys.mail.compose({
                theme: mailTheme,
                to: sys.mail.getRecipientBuilder().groups.admins(orgId, orgName).end().end(),
                copy: sys.mail.getRecipientBuilder().groups.admins(currentSchoolId, currentSchoolAddressedName).end().end(),
                text: mailText
              });
            };
          })(this));
        }
      };
    }
    buttonOk = {
      label: language.Generic.Common.kOk,
      action: function(dialog) {
        return dialog.close();
      }
    };
    buttons = [];
    buttons.push(buttonOk);
    if (buttonMail) {
      buttons.push(buttonMail);
    }
    return $.show.dialog({
      modal: true,
      title: language.Movement.kGetSimilarAddInfoTitle,
      size: BootstrapDialog.SIZE_WIDE,
      message: similarUserAddInfoTemplate(studentSimilarInfo),
      buttons: buttons
    });
  };

  similarsCtrl.prototype.syncResolveDatas = function() {
    return _.each(this.model.similarsResolveDataView, function(dataView) {
      return dataView.updateServerModel();
    });
  };

  similarsCtrl.prototype.checkSimilars = function(addStudentMovementsModel, callbackFunc) {
    this.addStudentMovementsModel = addStudentMovementsModel;
    this.callbackFunc = callbackFunc;
    this.defObj = new $.Deferred();
    return jsSubmit({
      action: "/webapi/movement/similars/check",
      dataType: "json",
      contentType: 'application/json',
      data: this.addStudentMovementsModel,
      showProcessing: true,
      method: "POST"
    }).then((function(_this) {
      return function(response) {
        var i, j, k, len, len1, len2, parentsData, ref, ref1, ref2, resolveData, template, userIndex;
        _this.model = response;
        _this.model.language = language;
        ref = _this.model.similarsResolveData;
        for (i = 0, len = ref.length; i < len; i++) {
          resolveData = ref[i];
          resolveData.options.similars.sort(function(a, b) {
            return b.location.localeCompare(a.location);
          });
          resolveData.options.options.sort(function(a, b) {
            return b.localeCompare(a);
          });
        }
        _this.resolveDatas = _.map(_this.model.similarsResolveData, function(resolveData) {
          return new personSimilarResolveData(resolveData);
        });
        _this.resolveDataIndexer = [];
        userIndex = 1;
        ref1 = _this.resolveDatas;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          resolveData = ref1[j];
          resolveData.userIndex = userIndex;
          _this.resolveDataIndexer[userIndex] = resolveData;
          userIndex++;
          if (resolveData.parentsResolveData) {
            ref2 = resolveData.parentsResolveData;
            for (k = 0, len2 = ref2.length; k < len2; k++) {
              parentsData = ref2[k];
              parentsData.userIndex = userIndex;
              _this.resolveDataIndexer[userIndex] = parentsData;
              userIndex++;
            }
          }
        }
        _this.model.similarsResolveDataView = _this.resolveDatas;
        template = Handlebars.compile(similarsTmpl);
        _this.defObj.locked = false;
        _this.resolveDialog = $.show.dialog({
          modal: true,
          title: language.Generic.Movement.kCheckSimilars,
          size: BootstrapDialog.SIZE_WIDE,
          message: template(_this.model),
          onshown: function() {
            var resolveContainers;
            resolveContainers = _.toArray($(".similar-resolve-container"));
            _.each(resolveContainers, function(resolveContainer) {
              return _this.resolveDataIndexer[$(resolveContainer).data("id")].container = resolveContainer;
            });
            $(".modal-body").on("click", ".similar-user-option:visible > label > input[type=radio]", function(event) {
              return _this.changeOptionChoice(event.currentTarget);
            });
            $(".modal-body").on("click", ".similar-user-choice:visible > label > input[type=radio]", function(event) {
              return _this.changeSimilarChoice(event.currentTarget);
            });
            $(".modal-body").on("click", ".similar-user-choice:visible .similar-info-icon", function(event) {
              return _this.getSimilarInfo(event.currentTarget);
            });
            $(".modal-body").on("click", ".similar-user-choice:visible .similar-question-icon", function(event) {
              return alert(event.currentTarget.title);
            });
            $(".similar-user-option:visible > label > input[type=radio][checked]").click();
            $(".similar-user-choice:visible > label > input[type=radio][checked]").click();
            $("input[type=radio]:visible[checked]").prop('checked', true);
            return $(".modal-body").on("click", function(event) {
              return dataChanged();
            });
          },
          buttons: [
            {
              label: language.Generic.Common.kOk,
              action: function(dialog) {
                if (_this.defObj.locked) {
                  return;
                }
                return _this.completeResolve(_this.callbackFunc);
              }
            }, {
              label: language.Generic.Buttons.kCancel,
              action: function(dialog) {
                return dialog.close();
              }
            }, {
              label: language.Generic.Buttons.kPrint,
              action: function(dialog) {
                return _this.similarsPrint();
              }
            }
          ]
        });
        return _this.defObj.promise();
      };
    })(this));
  };

  similarsCtrl.prototype.completeResolve = function(callbackFunc) {
    var closeDialog;
    this.callbackFunc = callbackFunc;
    this.defObj.locked = true;
    if (_.every(this.resolveDatas, function(resolveData) {
      var ref;
      return ((ref = resolveData.getChoice()) != null ? ref.id : void 0) === "IgnorePerson";
    })) {
      alert(language.Generic.Movement.kAllSimilarsIgnored);
      this.resolveDialog.successClose();
      this.defObj.reject(this.addStudentMovementsModel);
      return;
    }
    closeDialog = true;
    if (!this.resolved()) {
      this.defObj.locked = false;
      alert(language.Generic.Movement.kNotResolvedSimilars);
      closeDialog = false;
      return closeDialog;
    }
    this.syncResolveDatas();
    this.addStudentMovementsModel.similarsResolveData = this.model.similarsResolveData;
    if (this.saveFunction) {
      this.saveFunction(this.addStudentMovementsModel);
    }
    return this.callbackFunc(this.addStudentMovementsModel, this.defObj);
  };

  similarsCtrl.prototype.similarsPrint = function() {
    var similarsPrintTemplate;
    similarsPrintTemplate = Handlebars.compile(similarsPrintTmpl);
    return $(similarsPrintTemplate(this.model)).printUtils().toPrint().then(function(window) {
      var popup;
      return popup = window;
    });
  };

  return similarsCtrl;

})();

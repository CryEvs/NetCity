var addSchoolClassesMoveDirectionRouter, addSchoolYearMoveDirectionRouter, classesMoveDirectionRouter, classesStay2YearMoveDirectionRouter, moveBookEditCtrl, moveDirectionRouter, preSchoolYearMoveDirectionRouter, repeateYearMoveDirectionRouter, sys, yearAdaptedMoveDirectionRouter, yearMoveDirectionRouter,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

sys = {
  "const": {
    functype: {
      preschool: 1,
      addschool: 3
    },
    docType: {
      out: 1,
      enroll: 2,
      "move": 3,
      year: 4,
      stay: 5,
      graduate: 6
    },
    docSubType: {
      simple: 1,
      NotEnrolled: 0,
      classesStay: 4,
      adapted: 5
    }
  }
};

moveBookEditCtrl = (function() {
  var hideMoveInDirection, hideMoveOutDirection, moveconst, showMoveInDirection, showMoveOutDirection, swithMoveDirection, syncMoveDoc;

  moveconst = {
    actions: {
      create: "create"
    },
    source: {
      quickadd: "quickadd",
      "import": "import",
      attached: "attached"
    }
  };

  swithMoveDirection = function(directionType, enable) {
    return $("#move-direction select[name*=_" + directionType + "]").closest(".form-group").css("display", enable ? "" : "none").find("select").prop("disabled", !enable);
  };

  showMoveInDirection = function() {
    return swithMoveDirection("TO", true);
  };

  hideMoveInDirection = function() {
    return swithMoveDirection("TO", false);
  };

  showMoveOutDirection = function() {
    return swithMoveDirection("FROM", true);
  };

  hideMoveOutDirection = function() {
    return swithMoveDirection("FROM", false);
  };

  syncMoveDoc = function() {
    var qAdminDate;
    this.moveDoc.docDate = dateUtils.str2date($('input[name=DOCDATE]').val());
    qAdminDate = $('input[name=ADMINDATE]');
    this.moveDoc.adminDate = qAdminDate.length ? dateUtils.str2date(qAdminDate.val()) : this.moveDoc.docDate;
    return this.moveDoc.docName = $('input[name=DOCNUMBER]').val();
  };

  function moveBookEditCtrl(moveDoc, readOnly, summerMove, termTypeId, docDateRange1, sources, terms, noMoveDirection, classesFrom, classesTo, editPage, adminDateStart) {
    var routerCtr, self;
    this.moveDoc = moveDoc;
    this.readOnly = readOnly;
    this.summerMove = summerMove;
    this.termTypeId = termTypeId;
    this.docDateRange = docDateRange1;
    this.sources = sources;
    this.terms = terms;
    this.noMoveDirection = noMoveDirection;
    this.editPage = editPage;
    this.adminDateStart = adminDateStart;
    this.newDoc = !this.moveDoc.id;
    this.source = null;
    this.sourceId = null;
    this.addSchool = appContext.funcType === sys["const"].functype.addschool;
    this.preSchool = appContext.funcType === sys["const"].functype.preschool;
    self = this;
    if (this.sources.length === 1) {
      this.source = this.sources[0];
      this.sourceId = this.source.Id;
    }
    this.directionSelected = true;
    this.directionRouter = null;
    routerCtr = null;
    if (this.moveDoc.docType === sys["const"].docType.move) {
      routerCtr = this.addSchool ? addSchoolClassesMoveDirectionRouter : this.moveDoc.docSubType === sys["const"].docSubType.classesStay ? classesStay2YearMoveDirectionRouter : classesMoveDirectionRouter;
    } else if (this.moveDoc.docType === sys["const"].docType.year) {
      if (this.addSchool) {
        routerCtr = addSchoolYearMoveDirectionRouter;
      } else if (this.preSchool) {
        routerCtr = preSchoolYearMoveDirectionRouter;
      } else if (this.moveDoc.docSubType === sys["const"].docSubType.adapted) {
        routerCtr = yearAdaptedMoveDirectionRouter;
      } else {
        routerCtr = yearMoveDirectionRouter;
      }
    } else if (this.moveDoc.docType === sys["const"].docType.stay) {
      routerCtr = repeateYearMoveDirectionRouter;
    } else {
      routerCtr = moveDirectionRouter;
    }
    if (routerCtr) {
      this.directionRouter = new routerCtr(classesFrom, classesTo);
    }
    if (this.termTypeId) {
      this.minEndTerm = _.chain(this.terms).filter(function(term) {
        return term.typeId;
      }).groupBy(function(term) {
        return term.typeId;
      }).map(function(typeGroup) {
        return _.max(typeGroup, function(term) {
          return term.termEnd;
        });
      }).min(function(term) {
        return term.termEnd;
      }).value();
      $(document).ready((function(_this) {
        return function() {
          return _this.setDocTermName();
        };
      })(this));
      if (!this.readOnly) {
        dateInput.onChange((function(_this) {
          return function() {
            _this.setDocTermName();
            return dataChanged();
          };
        })(this));
      }
    }
    $(".modal-body").on("click", "input[name=ENROLLFROM][type=radio]", function() {
      return self.sourcesChangeHandler(this);
    });
  }

  moveBookEditCtrl.prototype.toggleSubDocChecks = function(check) {
    var status, subDocId;
    subDocId = $(check).val();
    status = $(check).prop("checked");
    return $("input[type=checkbox][name=DELSTUDENTS][subdocid=" + subDocId + "]").prop("checked", status);
  };

  moveBookEditCtrl.prototype.onChangeDocType = function(selectCtrl) {
    var setDocType, url;
    setDocType = parseInt($(selectCtrl).val());
    url = "MoveBookEdit.asp";
    if (setDocType === sys["const"].docType.year || setDocType === sys["const"].docType.stay || setDocType === sys["const"].docType.graduate) {
      url = "YearMoveBookEdit.asp";
    } else if (setDocType === sys["const"].docType.move) {
      url = "ClassesMoveBookEdit.asp";
    }
    return OnChangeSelect("MainForm", url);
  };

  moveBookEditCtrl.prototype.sourcesChangeHandler = function(sourceRadio) {
    sourceRadio = sourceRadio || $('input[name=ENROLLFROM]:checked')[0];
    this.sourceId = sourceRadio.value;
    this.source = _.find(this.sources, (function(_this) {
      return function(source) {
        return source.Id === _this.sourceId;
      };
    })(this));
    if (!this.source) {
      throw "Неизвестный список учащихся для движения";
    }
    if (this.source.DirectedEnrollMovements) {
      hideMoveInDirection();
    } else {
      showMoveInDirection();
    }
    if (this.source.DirectedDepartMovements) {
      return hideMoveOutDirection();
    } else {
      return showMoveOutDirection();
    }
  };

  moveBookEditCtrl.prototype.reset = function() {
    resetScreen('MainForm');
    return this.setDocTermName();
  };

  moveBookEditCtrl.prototype.setDocTermName = function() {
    var currentDate, el, elTermName, form, termsNames;
    form = document.MainForm;
    el = form.elements["DOCDATE"];
    elTermName = form.elements["TermName"];
    currentDate = null;
    if (this.readOnly) {
      currentDate = this.moveDoc.docDate;
    } else {
      currentDate = dateUtils.str2date(el.value);
    }
    termsNames = "";
    if (currentDate && elTermName) {
      _.each(this.terms, function(termInfo) {
        if (currentDate >= termInfo.termStart && currentDate <= termInfo.termEnd) {
          return termsNames += ", " + termInfo.termName;
        }
      });
      return elTermName.value = termsNames.substring(2, termsNames.length);
    }
  };

  moveBookEditCtrl.prototype.getClassGrade = function(classId) {
    var cls;
    cls = _.find(this.classes, function(cls) {
      return cls.classId === classId;
    });
    return cls != null ? cls.grade : void 0;
  };

  moveBookEditCtrl.prototype.onChangeClassFrom = function() {
    var classIdFrom, classesTo, from, newOptions, preselected, to;
    from = $('[name="CLASSID_FROM"]');
    to = $('[name="CLASSID_TO"]');
    if (!from.length || !to.length) {
      return;
    }
    classIdFrom = parseInt(from.val());
    if ($(from).is(':disabled')) {
      classesTo = this.directionRouter.educGroupsTo;
    } else {
      classesTo = this.directionRouter.getEducGroupsTo(classIdFrom);
    }
    to[0].options.length = 0;
    if (classesTo.length > 0) {
      this.directionSelected = true;
      to.prop('disabled', false);
      preselected = this.directionRouter.getEducGroupToPreselection(classesTo);
      newOptions = _.map(classesTo, function(classinfo) {
        return new Option(classinfo.name, classinfo.id, false, (preselected != null ? preselected.id : void 0) === classinfo.id);
      });
      _.each(newOptions, function(option) {
        return to[0].options.add(option);
      });
    } else {
      to[0].options.add(new Option("Нет подходящих классов/групп зачисления", -2, false, true));
      to.prop('disabled', 'disabled');
      this.directionSelected = false;
    }
  };

  moveBookEditCtrl.prototype.onChangeClassTo = function(select) {
    var classIdFrom, classIdTo;
    classIdTo = $(select).val();
    classIdFrom = $('[name="CLASSID_FROM"]').val();
    if (classIdFrom === classIdTo) {
      alert(language.Movement.kCantMoveToSameClass);
    }
  };

  moveBookEditCtrl.prototype.checkDocDate = function() {
    var adminDateFilter, docDateChanged, docDateFilter, validateMsg;
    docDateFilter = getDateFilterInfo("DOCDATE");
    docDateChanged = !(this.moveDoc.docDate && this.moveDoc.docDate - docDateFilter.date() === 0);
    if (docDateChanged) {
      validateMsg = language.Generic.Movement.kErrDocDateRange1 + dateUtils.date2str(docDateRange.start) + language.Generic.Movement.kErrDocDateRange2 + dateUtils.date2str(docDateRange.end);
      if (!docDateFilter.checkDateInterval(docDateRange.start, docDateRange.end, validateMsg)) {
        return false;
      }
      if (this.moveDoc.docType === sys["const"].docType.enroll && this.termTypeId) {
        if (!this.summerMove && docDateFilter.date() > this.minEndTerm.termEnd) {
          focusAlert("el", language.Generic.Movement.kErrDocDateAfterLastPeriod);
        }
      }
    }
    adminDateFilter = getDateFilterInfo("ADMINDATE");
    if (adminDateFilter && this.adminDateStart) {
      validateMsg = language.Generic.Movement.kErrAdminDateRange1 + dateUtils.date2str(this.adminDateStart) + language.Generic.Movement.kErrDocDateRange2 + dateUtils.date2str(docDateFilter.date());
      if (!adminDateFilter.checkDateInterval(this.adminDateStart, docDateFilter.date(), validateMsg)) {
        return false;
      }
    }
    return true;
  };

  moveBookEditCtrl.prototype.editSubDoc = function(nSubDocID) {
    var form;
    form = document.MainForm;
    form.SUBDOCID.value = nSubDocID;
    setDBBusy();
    return DoSubmit(form, "/asp/setupschool/movement/MoveSubDocEdit.asp");
  };

  moveBookEditCtrl.prototype.deleteDoc = function() {
    if (isDBBusy()) {
      return false;
    }
    return $.show.confirmation(language.Generic.Movement.kConfirmDeleteDoc).then((function(_this) {
      return function() {
        return jsSubmit({
          action: "/webapi/movement/documents/" + _this.moveDoc.id,
          method: "DELETE",
          showProcessing: true,
          onSuccess: function() {
            return Back();
          }
        });
      };
    })(this));
  };

  moveBookEditCtrl.prototype.deleteStudents = function() {
    var delCnt, deleteInputs, form;
    form = document.MainForm;
    deleteInputs = $("input[name='DELSTUDENTS']:checked");
    delCnt = deleteInputs.length;
    if (!delCnt) {
      alert(language.Movement.kSelectStudentsToDeleteFromDoc);
      return false;
    }
    return $.show.confirmation(language.Generic.Movement.kConfirmDeleteUsersFromDoc.replace('{0}', delCnt)).then((function(_this) {
      return function() {
        var removeStudentsDto;
        removeStudentsDto = {
          docStudentId: _.map(deleteInputs, function(checkBox) {
            return checkBox.value;
          })
        };
        return jsSubmit({
          action: "/webapi/movement/documents/" + _this.moveDoc.id + "/students",
          method: "DELETE",
          queryData: removeStudentsDto,
          contentType: "application/json",
          showProcessing: true,
          onSuccess: function(retDocId) {
            if (!retDocId) {
              form.elements["OUTERMESSAGE"].value = language.Generic.Movement.kMoveDocSuccessfulDeleted;
              return DoSubmit(form, "MoveBook.asp");
            } else {
              form.elements["OUTERMESSAGE"].value = language.Generic.Movement.kMoveDocSuccessfulSaved;
              return DoSubmit(form, _this.editPage);
            }
          }
        });
      };
    })(this));
  };

  moveBookEditCtrl.prototype.onChangeDocDate = function() {
    var form;
    form = document.MainForm;
    form.elements["Delete"].value = "";
    return ok("MainForm", "");
  };

  moveBookEditCtrl.prototype.educContractBlanks = function() {
    return jsSubmit({
      action: "/webapi/integration/pfdo/educContracts/blanks",
      method: "GET",
      showProcessing: true
    }).then(function(blanksInfo) {
      var blanksDialog, dialogButtons, pfdoBlank, rmcBlank;
      rmcBlank = blanksInfo.rmcBlank;
      pfdoBlank = blanksInfo.pfdoBlank;
      dialogButtons = [
        {
          label: "Закрыть",
          action: (function(_this) {
            return function() {
              return blanksDialog.close();
            };
          })(this)
        }
      ];
      return blanksDialog = $.show.dialog({
        title: "Бланки договоров",
        message: "<div> <a href=\"javascript:void(0)\" id=\"rmc-educcontract-blank\"> Бланк договора, рекомендованный РМЦ</a> </div> <div> <a href=\"javascript:void(0)\" id=\"pfdo-educcontract-blank\"> Бланк договора об обучении на основе сертификата персонифицированного финансирования дополнительного образования </a> </div>",
        buttons: dialogButtons,
        onshown: function() {
          $("#rmc-educcontract-blank").on("click", function() {
            if (!rmcBlank || !rmcBlank.id) {
              alert("Бланк не загружен в систему");
              return;
            }
            return downloadFile("/webapi/attachments/" + rmcBlank.id);
          });
          return $("#pfdo-educcontract-blank").on("click", function() {
            if (!pfdoBlank || !pfdoBlank.id) {
              alert("Бланк не загружен в систему.\nЗагрузка бланка выполняется на экране \"Настройки ОДО\"");
              return;
            }
            return downloadFile("/webapi/attachments/" + pfdoBlank.id);
          });
        }
      });
    });
  };

  moveBookEditCtrl.prototype.addStudentsToDoc = function() {
    var canAddStudents, form;
    form = document.MainForm;
    canAddStudents = (function(_this) {
      return function() {
        var docNumber;
        docNumber = trimStr(form.elements['DOCNUMBER'].value);
        if (!docNumber) {
          focusAlert(form.DOCNUMBER, language.Generic.Movement.kErrEmptyDocNumber);
          return false;
        }
        if (!_this.checkDocDate()) {
          return false;
        }
        if (_this.newDoc) {
          return true;
        }
        if (window.dataWereChanged || bEOOrReasonChanged) {
          return $.show.confirmation(kDataWereChanged).then(function() {
            $(form).resetState();
            window.dataWereChanged = false;
            return _this.setDocTermName();
          });
        }
        return true;
      };
    })(this);
    return extDeferred.when(canAddStudents).then((function(_this) {
      return function() {
        var addForm, dialogButtons, direction, isEmptyFormContent, moveInDirection, moveOutDirection, radio, self, source, sourceId, sourceRadio;
        addForm = $($('#addStudentsToDocTempl').html());
        radio = addForm.find(':radio');
        direction = addForm.find('#move-direction').children();
        isEmptyFormContent = $.isEmptyObject(radio.html()) && $.isEmptyObject(direction.html());
        self = _this;
        sourceRadio = addForm.find('input[name="ENROLLFROM"]:checked').get(0);
        moveInDirection = addForm.find("#move-direction select[name*=_TO]").closest(".form-group");
        moveOutDirection = addForm.find("#move-direction select[name*=_FROM]").closest(".form-group");
        if (sourceRadio) {
          sourceId = sourceRadio.value;
          source = _.find(self.sources, function(source) {
            return source.Id === sourceId;
          });
          if (!source) {
            throw "Неизвестный список учащихся для движения";
          }
          if (source.DirectedEnrollMovements) {
            moveInDirection.hide();
          } else {
            moveInDirection.show();
          }
          if (source.DirectedDepartMovements) {
            moveOutDirection.hide();
          } else {
            moveOutDirection.show();
          }
          if (source) {
            self.sourceId = source.Id;
            self.source = source;
          }
        }
        if (isEmptyFormContent) {
          return _this.addStudents();
        } else {
          dialogButtons = [
            {
              label: language.Generic.Buttons.kAdd,
              action: function() {
                return _this.addStudents();
              },
              cssClass: 'btn-primary'
            }
          ];
          if (_this.noMoveDirection) {
            dialogButtons = [];
          }
          return $.show.dialog({
            title: language.Movement.kAddStudentsToDoc,
            message: addForm,
            buttons: dialogButtons,
            onshown: function() {
              $("body").on("click", "input[name=ENROLLFROM][type=radio]", function() {
                self.sourcesChangeHandler(this);
                return self.onChangeClassFrom(this);
              });
              $("body").on("change", "select[name=CLASSID_TO]", function() {
                return self.onChangeClassTo(this);
              });
              $("body").on("change", "select[name=CLASSID_FROM]", function() {
                return self.onChangeClassFrom(this);
              });
              return self.onChangeClassFrom();
            }
          });
        }
      };
    })(this));
  };

  moveBookEditCtrl.prototype.addStudents = function() {
    var addAction, classIdFrom, classIdTo, form;
    if (!this.directionSelected) {
      $.show.message("Не выбран класс зачисления или выбытия");
      return;
    }
    form = document.MainForm;
    classIdFrom = $('[name="CLASSID_FROM"]').val();
    classIdTo = $('[name="CLASSID_TO"]').val();
    addAction = (function(_this) {
      return function() {
        var action;
        action = function() {
          var arrFormsParams;
          form = document.MainForm.elements["SAVEMODE"].value = moveconst.actions.create;
          $(document).trigger('showProcessing');
          arrFormsParams = getFormsParams([document.MainForm, document.addStudentsToDoc]);
          return postTo({
            path: 'SaveDocParam.asp',
            params: arrFormsParams
          });
        };
        if (!_this.source) {
          alert(language.Generic.Movement.kMustSelectEnrollSource);
          return;
        }
        if (_this.moveDoc.docType === sys["const"].docType.move && _this.getClassGrade(parseInt(classIdFrom)) < _this.getClassGrade(parseInt(classIdTo))) {
          $.show.confirmation(language.Movement.kMoveToNextGrade).then(action);
          return;
        }
        return action();
      };
    })(this);
    if (!this.sourceId) {
      alert(language.Movement.kMustSelectMovementSource);
      return false;
    }
    if (this.moveDoc.docType === sys["const"].docType.out) {
      if (!classIdFrom && !this.source.DirectedDepartMovements) {
        alert(language.Movement.kNoStudentsForOut);
        return false;
      }
    }
    if (this.moveDoc.docType === sys["const"].docType.move) {
      if (classIdFrom === classIdTo && this.moveDoc.docType === !sys["const"].docType.attached) {
        alert(language.Movement.kCantMoveToSameClass);
        return;
      }
    }
    if (this.moveDoc.docType === sys["const"].docType.enroll) {
      if (this.moveDoc.docSubType === !sys["const"].docSubType.NotEnrolled && !classIdTo && !this.source.DirectedEnrollMovements) {
        alert(language.Filter.kNoYearClasses);
        return false;
      }
      if (this.sourceId === moveconst.source["import"]) {
        $.show.fileDialog({
          title: language.Generic.Common.kSelectFile,
          fileExts: ['.xls', '.xlsx'],
          invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFileFormat,
          isAjax: true,
          url: "/webapi/movement/import/parsefile",
          queryStringParams: {
            docSubType: this.moveDoc.docSubType
          }
        }).then((function(_this) {
          return function(data) {
            var impValidErrors;
            if (!data.isSuccess) {
              if (data.status === "Failure") {
                $.show.error(data.message.replace(/\\n/g, ' \n'));
                return;
              } else {
                impValidErrors = new importValidation();
                impValidErrors.showModalValidationError(data, addAction, _this.moveDoc.docSubType);
                return;
              }
            }
            return addAction();
          };
        })(this));
        return;
      }
    }
    return addAction();
  };

  moveBookEditCtrl.prototype.savedoc = function() {
    var form;
    if (!window.dataWereChanged) {
      alert(language.Generic.Common.kNoChangesData);
      return false;
    }
    form = document.MainForm;
    return extDeferred.when(this.canSaveDoc()).then((function(_this) {
      return function() {
        var students, studentsSaveData;
        syncMoveDoc();
        students = _.map($("input[type=hidden][name=STUDENTS]"), function(el) {
          return el.value;
        });
        studentsSaveData = null;
        if (_this.moveDoc.docType !== sys["const"].docType.graduate) {
          studentsSaveData = _.map(students, function(studentId) {
            return {
              studentId: studentId,
              eoId: $("input[type=hidden][name=EOS_" + studentId + "]").val(),
              reason: $("input[type=hidden][name=REASON_" + studentId + "]").val(),
              outsidetype: $("input[type=hidden][name=OST_" + studentId + "]").val()
            };
          });
        }
        return jsSubmit({
          action: "/webapi/movement/documents/" + _this.moveDoc.id,
          method: "POST",
          data: {
            movedoc: _this.moveDoc,
            studentData: studentsSaveData
          },
          contentType: "application/json",
          showProcessing: true
        }).then(function() {
          window.dataWereChanged = false;
          return alert(language.Generic.Movement.kMoveDocSuccessfulSaved || "Документ успешно сохранен");
        });
      };
    })(this));
  };

  moveBookEditCtrl.prototype.canSaveDoc = function() {
    var checkSubDocElement, confirms, docNumber, elSubDocs, form, isValidReason, moveFromInputs, self;
    form = document.MainForm;
    docNumber = trimStr(form.elements['DOCNUMBER'].value);
    if (!docNumber) {
      focusAlert(form.DOCNUMBER, language.Generic.Movement.kErrEmptyDocNumber);
      return false;
    }
    if (!this.checkDocDate()) {
      return false;
    }
    if (this.newDoc && this.emptyStudents) {
      if (this.moveDoc.docType === sys["const"].docType.enroll) {
        return $.show.getConfirmation(language.Generic.Movement.kConfirmCreateEmptyDoc);
      } else {
        alert(language.Movement.kAddStudentsPrompt);
        return false;
      }
    }
    if (this.moveDoc.docType === sys["const"].docType.out && !this.addSchool) {
      elSubDocs = form.elements["SubDoc"];
      isValidReason = function(sStudentID) {
        var elReason, value;
        elReason = form.elements['REASON_' + sStudentID];
        value = null;
        if (typeof elReason.options !== 'undefined' || typeof elReason.value !== 'undefined') {
          elReason = elReason;
        } else {
          elReason = elReason[0];
        }
        if (typeof elReason.value !== 'undefined') {
          value = elReason.value;
        } else {
          value = getListValue(elReason);
        }
        if (value === -1) {
          focusAlert(elReason, language.Generic.Movement.kErrSelectDepartReason);
          return false;
        }
        return true;
      };
      checkSubDocElement = function(subDocElement) {
        var elStudents, sStudentSubDoc;
        sStudentSubDoc = "Student_" + subDocElement.value;
        elStudents = form.elements[sStudentSubDoc];
        if (elStudents.length) {
          return _.some(elStudents, function(elStudent) {
            return !isValidReason(elStudent.value);
          });
        } else {
          return !isValidReason(elStudents.value);
        }
      };
      if (elSubDocs.length) {
        if (_.some(elSubDocs, checkSubDocElement)) {
          return false;
        }
      } else {
        if (checkSubDocElement(elSubDocs)) {
          return false;
        }
      }
    } else if (this.moveDoc.docType === sys["const"].docType.enroll) {
      moveFromInputs = $("input[type=hidden][name*=EOS_]");
      confirms = [];
      self = this;
      moveFromInputs.each(function() {
        var departEOID, departEOName, departEoInput, fromMoveEOID, message, studID, studName;
        studID = $(this).attr("studentid");
        departEoInput = document.getElementById("DEPARTEOID_" + studID);
        if (!departEoInput) {
          return;
        }
        departEOID = parseInt(departEoInput.value);
        fromMoveEOID = parseInt(this.value);
        if (departEOID = -1) {
          return;
        }
        if (self.eoId !== departEOID && departEOID !== fromMoveEOID) {
          departEOName = $("#DEPARTEONAME_" + studID).text();
          studName = $("input[name*=Student_][value=" + studID + "]").parent().text();
          message = studName + " выбыл(а) в '" + departEOName + "'\nДля корректного движения укажите 'Откуда прибыл' как '" + departEOName + "'!\n" + language.Generic.Common.kContinue;
          return confirms.push($.show.getConfirmation(message));
        }
      });
      if (!confirms.length) {
        return true;
      }
      return extDeferred.when(confirms);
    }
    return true;
  };

  return moveBookEditCtrl;

})();

moveDirectionRouter = (function() {
  function moveDirectionRouter(educGroupsFrom, educGroupsTo) {
    this.educGroupsFrom = educGroupsFrom;
    this.educGroupsTo = educGroupsTo;
  }

  moveDirectionRouter.prototype.getEducGroupsTo = function(educGroupIdFrom) {
    this.groupFrom = _.find(this.educGroupsFrom, function(group) {
      return group.id === educGroupIdFrom;
    });
    return this.filterEducGroupsTo();
  };

  moveDirectionRouter.prototype.getEducGroupToPreselection = function(groupFrom, groupsTo) {
    return _.first(groupsTo);
  };

  moveDirectionRouter.prototype.filterEducGroupsTo = function() {
    return this.educGroupsTo;
  };

  return moveDirectionRouter;

})();

yearMoveDirectionRouter = (function(superClass) {
  extend(yearMoveDirectionRouter, superClass);

  function yearMoveDirectionRouter() {
    return yearMoveDirectionRouter.__super__.constructor.apply(this, arguments);
  }

  yearMoveDirectionRouter.prototype.filterEducGroupsTo = function() {
    return _.filter(this.educGroupsTo, (function(_this) {
      return function(groupTo) {
        return groupTo.grade > _this.groupFrom.grade;
      };
    })(this));
  };

  yearMoveDirectionRouter.prototype.getEducGroupToPreselection = function(groupsTo) {
    var sameLetterGroup;
    sameLetterGroup = _.find(groupsTo, (function(_this) {
      return function(group) {
        var ref;
        return group.letter === ((ref = _this.groupFrom) != null ? ref.letter : void 0);
      };
    })(this));
    if (sameLetterGroup && sameLetterGroup.grade - this.groupFrom.grade <= 2) {
      return sameLetterGroup;
    }
    return yearMoveDirectionRouter.__super__.getEducGroupToPreselection.call(this, this.groupFrom, groupsTo);
  };

  return yearMoveDirectionRouter;

})(moveDirectionRouter);

yearAdaptedMoveDirectionRouter = (function(superClass) {
  extend(yearAdaptedMoveDirectionRouter, superClass);

  function yearAdaptedMoveDirectionRouter() {
    return yearAdaptedMoveDirectionRouter.__super__.constructor.apply(this, arguments);
  }

  yearAdaptedMoveDirectionRouter.prototype.filterEducGroupsTo = function() {
    return _.filter(this.educGroupsTo, (function(_this) {
      return function(groupTo) {
        return groupTo.grade >= _this.groupFrom.grade;
      };
    })(this));
  };

  return yearAdaptedMoveDirectionRouter;

})(yearMoveDirectionRouter);

repeateYearMoveDirectionRouter = (function(superClass) {
  extend(repeateYearMoveDirectionRouter, superClass);

  function repeateYearMoveDirectionRouter() {
    return repeateYearMoveDirectionRouter.__super__.constructor.apply(this, arguments);
  }

  repeateYearMoveDirectionRouter.prototype.filterEducGroupsTo = function() {
    return _.filter(this.educGroupsTo, (function(_this) {
      return function(groupTo) {
        var dif;
        dif = _this.groupFrom.grade - groupTo.grade;
        return dif >= 0 && dif < 2;
      };
    })(this));
  };

  repeateYearMoveDirectionRouter.prototype.getEducGroupToPreselection = function(groupsTo) {
    var preselected;
    preselected = _.chain(groupsTo).sortBy(function(groupTo) {
      var ref;
      if (groupTo.letter === ((ref = this.groupFrom) != null ? ref.letter : void 0)) {
        return "";
      } else {
        return groupTo.letter;
      }
    }).max(function(groupTo) {
      return groupTo.grade;
    }).value();
    if (preselected) {
      return preselected;
    }
    return repeateYearMoveDirectionRouter.__super__.getEducGroupToPreselection.call(this, this.groupFrom, groupsTo);
  };

  return repeateYearMoveDirectionRouter;

})(moveDirectionRouter);

classesMoveDirectionRouter = (function(superClass) {
  extend(classesMoveDirectionRouter, superClass);

  function classesMoveDirectionRouter() {
    return classesMoveDirectionRouter.__super__.constructor.apply(this, arguments);
  }

  classesMoveDirectionRouter.prototype.getEducGroupToPreselection = function(groupsTo) {
    var preselected;
    preselected = _.chain(groupsTo).min(function(groupTo) {
      return groupTo.grade;
    }).value();
    if (preselected) {
      return preselected;
    }
    return classesMoveDirectionRouter.__super__.getEducGroupToPreselection.call(this, this.groupFrom, groupsTo);
  };

  classesMoveDirectionRouter.prototype.filterEducGroupsTo = function() {
    return _.filter(this.educGroupsTo, (function(_this) {
      return function(groupTo) {
        return groupTo.id !== _this.groupFrom.id;
      };
    })(this));
  };

  return classesMoveDirectionRouter;

})(moveDirectionRouter);

classesStay2YearMoveDirectionRouter = (function(superClass) {
  extend(classesStay2YearMoveDirectionRouter, superClass);

  function classesStay2YearMoveDirectionRouter() {
    return classesStay2YearMoveDirectionRouter.__super__.constructor.apply(this, arguments);
  }

  classesStay2YearMoveDirectionRouter.prototype.filterEducGroupsTo = function() {
    return _.filter(classesStay2YearMoveDirectionRouter.__super__.filterEducGroupsTo.apply(this, arguments), (function(_this) {
      return function(groupTo) {
        return groupTo.grade === (_this.groupFrom.grade - 1);
      };
    })(this));
  };

  return classesStay2YearMoveDirectionRouter;

})(classesMoveDirectionRouter);

preSchoolYearMoveDirectionRouter = (function(superClass) {
  extend(preSchoolYearMoveDirectionRouter, superClass);

  function preSchoolYearMoveDirectionRouter() {
    return preSchoolYearMoveDirectionRouter.__super__.constructor.apply(this, arguments);
  }

  return preSchoolYearMoveDirectionRouter;

})(moveDirectionRouter);

addSchoolYearMoveDirectionRouter = (function(superClass) {
  extend(addSchoolYearMoveDirectionRouter, superClass);

  function addSchoolYearMoveDirectionRouter() {
    return addSchoolYearMoveDirectionRouter.__super__.constructor.apply(this, arguments);
  }

  addSchoolYearMoveDirectionRouter.prototype.filterEducGroupsTo = function() {
    return _.filter(addSchoolYearMoveDirectionRouter.__super__.filterEducGroupsTo.apply(this, arguments), (function(_this) {
      return function(groupTo) {
        return groupTo.progid === _this.groupFrom.progid;
      };
    })(this));
  };

  return addSchoolYearMoveDirectionRouter;

})(yearMoveDirectionRouter);

addSchoolClassesMoveDirectionRouter = (function(superClass) {
  extend(addSchoolClassesMoveDirectionRouter, superClass);

  function addSchoolClassesMoveDirectionRouter() {
    return addSchoolClassesMoveDirectionRouter.__super__.constructor.apply(this, arguments);
  }

  addSchoolClassesMoveDirectionRouter.prototype.filterEducGroupsTo = function() {
    return _.filter(addSchoolClassesMoveDirectionRouter.__super__.filterEducGroupsTo.apply(this, arguments), (function(_this) {
      return function(groupTo) {
        return groupTo.progid === _this.groupFrom.progid;
      };
    })(this));
  };

  return addSchoolClassesMoveDirectionRouter;

})(classesMoveDirectionRouter);

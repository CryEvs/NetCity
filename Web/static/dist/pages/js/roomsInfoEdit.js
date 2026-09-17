var Room, RoomValidationError, RoomsCtrl, funcType, yearId,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

yearId = appContext.yearId;

funcType = appContext.funcType;

RoomValidationError = (function(superClass) {
  extend(RoomValidationError, superClass);

  function RoomValidationError(targetElement, message) {
    RoomValidationError.__super__.constructor.call(this, message);
    this.name = this.constructor.name;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error()).stack;
    }
    this.targetElement = targetElement;
    this.message = message;
  }

  return RoomValidationError;

})(Error);

Room = (function() {
  function Room(dto, yearFormationMode) {
    if (!dto) {
      dto = {};
    }
    this.addYearPostfix(dto, yearFormationMode);
    this.id = dto.id;
    this.roomname = dto.roomname;
    this.floor = dto.floor;
    this.corpus = dto.corpus;
    this.length = dto.length;
    this.width = dto.width;
    this.area = dto.area;
    this.responsible = dto.responsible;
    this.study = dto.study;
    this.seats = dto.seats;
    this.classesnames = _.map(dto.classes, (function(_this) {
      return function(cls) {
        return cls.name;
      };
    })(this)).join(", ");
    this.used = dto.used;
  }

  Room.prototype.addYearPostfix = function(room, yearFormationMode) {
    if (!appContext.readOnly && yearFormationMode) {
      return _.each(room.classes, (function(_this) {
        return function(c) {
          if (c.yearStatus === "Open") {
            return c.name += " (Тек.)";
          } else if (c.yearStatus === "Future") {
            return c.name += " (Буд.)";
          }
        };
      })(this));
    }
  };

  Room.prototype.mapFromContainer = function(container) {
    var $container, areaVal, lengthVal, responsibleId, widthVal;
    $container = $(container);
    this.id = $container.find('input[name="RoomID"]').val();
    this.roomname = $container.find('input[name="RoomName"]').val();
    this.floor = parseInt($container.find('select[name="Floor"]').val());
    this.corpus = $container.find('input[name="Corpus"]').val();
    lengthVal = $container.find('input[name="Length"]').val();
    widthVal = $container.find('input[name="Width"]').val();
    areaVal = $container.find('input[name="Area"]').val();
    this.length = str2floatVal(lengthVal);
    this.width = str2floatVal(widthVal);
    this.area = str2floatVal(areaVal);
    this.study = $container.find('input[name="Study"]').prop('checked');
    this.seats = parseInt($container.find('input[name="Seats"]').val());
    if (lengthVal === "") {
      this.length = null;
    }
    if (widthVal === "") {
      this.width = null;
    }
    if (areaVal === "") {
      this.area = null;
    }
    responsibleId = parseInt($container.find('select[name="RESPONSIBLEID"]').val());
    if (responsibleId > 0) {
      return this.responsible = {
        id: responsibleId
      };
    }
  };

  Room.prototype.validate = function() {
    if (this.roomname === '') {
      return language.Calendar.kErrMsgEmpty;
    }
    if (this.length && (this.length < 1 || this.length > 100)) {
      return language.Generic.Calendar.kErrLen;
    }
    if (this.width && (this.width < 1 || this.width > 100)) {
      return language.Generic.Calendar.kErrWidth;
    }
    if (!this.seats || (this.seats <= 0 || this.seats > 100)) {
      return language.Calendar.kErrSeats2;
    }
    if (this.area && (this.area < 1 || this.area > 999)) {
      return language.Generic.Calendar.kErrArea;
    }
  };

  return Room;

})();

RoomsCtrl = (function() {
  function RoomsCtrl() {
    this.InitRooms = bind(this.InitRooms, this);
    this.NotifyUserOfDuplicateTitles = bind(this.NotifyUserOfDuplicateTitles, this);
    var ctrl;
    ctrl = this;
    this.roomsInfoTmpl;
    this.floorsTmpl;
    this.kClasses = language.SchoolSettings.kClasses.charAt(0).toUpperCase() + language.SchoolSettings.kClasses.slice(1);
    this.context = {
      language: language,
      readonly: appContext.readOnly,
      staffs: staffs,
      floors: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      kClasses: this.kClasses
    };
    this.validationParams = (function() {
      var validMessages, validRules;
      validRules = {};
      validMessages = {};
      return {
        addRule: function(field, rules, messages) {
          validRules[field] = rules;
          if (messages) {
            return validMessages[field] = messages;
          }
        },
        getRules: function() {
          return validRules;
        },
        getMessages: function() {
          return validMessages;
        }
      };
    })();
    $.validator.addMethod("validateRoomName", (function(_this) {
      return function(value, element) {
        return !_.some(_this.context.rooms, function(checkRoom) {
          return trimStr(checkRoom.roomname) === value;
        });
      };
    })(this), language.Generic.Common.kErrMsgExist);
    this.validationParams.addRule('RoomName', {
      required: true,
      validateRoomName: true
    }, {
      required: language.Calendar.kErrMsgEmpty
    });
    this.validationParams.addRule('Seats', {
      required: true,
      digits: true,
      min: 1,
      max: 100
    }, language.Calendar.kErrSeats2);
    this.validationParams.addRule('Length', {
      required: false,
      number: true,
      min: 1,
      max: 100
    }, language.Generic.Calendar.kErrLen);
    this.validationParams.addRule('Width', {
      required: false,
      number: true,
      min: 1,
      max: 100
    }, language.Generic.Calendar.kErrWidth);
    this.validationParams.addRule('Area', {
      required: false,
      number: true,
      min: 1,
      max: 999
    }, language.Generic.Calendar.kErrArea);
    this.yearFormationMode;
    this.addButtons = function() {
      var buttonPanelLeft, ref, ref1, remove, replace, reset, save;
      if (appContext.readOnly) {
        return;
      }
      buttonPanelLeft = $('.buttons-panel-left');
      reset = $.uicontrols.button({
        type: 'btn-warning',
        label: language.Generic.Buttons.kReset,
        icon: "repeat",
        click: "roomsInfoCtrl.ResetRoomsScreen()"
      });
      save = $.uicontrols.button({
        type: 'btn-primary',
        label: language.Generic.Buttons.kSave,
        icon: "floppy-save",
        click: "roomsInfoCtrl.SaveChanges()"
      });
      remove = $.uicontrols.button({
        type: 'btn-danger',
        label: language.Generic.Buttons.kRemove,
        icon: "minus-sign",
        click: "roomsInfoCtrl.RemoveRooms()"
      });
      replace = $.uicontrols.button({
        type: 'btn-warning',
        label: language.Generic.SetupSchool.kReplace,
        icon: "replace",
        click: "roomsInfoCtrl.MergeRooms()"
      });
      if ((ref = this.context) != null ? (ref1 = ref.rooms) != null ? ref1.length : void 0 : void 0) {
        $(reset).prependTo(buttonPanelLeft);
        $(save).prependTo(buttonPanelLeft);
        $(remove).appendTo(buttonPanelLeft);
        return $(replace).appendTo(buttonPanelLeft);
      }
    };
    this.setEventHandlers = function() {
      var onChangeNumField, onChangeRoomName;
      onChangeRoomName = (function(_this) {
        return function(theElement) {
          var editRoomId, existsSameRoomName, rowId, setRoomName;
          setRoomName = trimStr(theElement.value);
          rowId = $(theElement).closest('tr').attr('id');
          editRoomId = parseInt(rowId.replace("room-", ""));
          existsSameRoomName = _.some(_this.context.rooms, function(room) {
            return room.id !== editRoomId && room.roomname === setRoomName;
          });
          if (existsSameRoomName) {
            alert(language.Calendar.kMsgRoomExist).then(function() {
              return $(theElement).val($(theElement).data("storedstate"));
            });
          } else {
            dataChanged();
          }
        };
      })(this);
      onChangeNumField = function(el, min, max) {
        var setLoad;
        dataChanged();
        if (trimStr(el.value) === "") {
          return;
        }
        setLoad = str2floatVal(el.value);
        if (setLoad === 0) {
          return el.value = "";
        }
        if (setLoad % 1 > 0) {
          setLoad = parseFloat(setLoad.toFixed(2));
        }
        return el.value = setLoad.toString();
      };
      $("#rooms-table").on("change", "input[name='RoomName']", (function(_this) {
        return function(event) {
          return onChangeRoomName(event.currentTarget);
        };
      })(this));
      $("#rooms-table").on("change", "input[name='Width']", (function(_this) {
        return function(event) {
          return onChangeNumField(event.currentTarget, 1, 100);
        };
      })(this));
      $("#rooms-table").on("change", "input[name='Length']", (function(_this) {
        return function(event) {
          return onChangeNumField(event.currentTarget, 1, 100);
        };
      })(this));
      return $("#rooms-table").on("change", "input[name='Area']", (function(_this) {
        return function(event) {
          return onChangeNumField(event.currentTarget, 1, 999);
        };
      })(this));
    };
    this.getRooms = function() {
      var getRoomsInfo, getRoomsInfoTemplate, queries;
      queries = [];
      getRoomsInfoTemplate = $.ajax({
        url: "/vendor/pages/templates/rooms/rooms.html",
        cache: true,
        success: (function(_this) {
          return function(data) {
            return _this.roomsInfoTmpl = data.replace(/(?:\r\n|\r|\n)/g, '');
          };
        })(this)
      });
      getRoomsInfo = jsSubmit({
        action: "/webapi/rooms",
        data: {
          detailed: true
        },
        showProcessing: true,
        method: "GET",
        onSuccess: (function(_this) {
          return function(rooms) {
            return $.extend(_this.context, {
              rooms: _.map(rooms, function(dto) {
                return new Room(dto, this.yearFormationMode);
              })
            });
          };
        })(this)
      });
      queries.push(getRoomsInfoTemplate);
      queries.push(getRoomsInfo);
      return extDeferred.when(queries).then((function(_this) {
        return function() {
          var html, template;
          template = Handlebars.compile(_this.roomsInfoTmpl);
          html = template(_this.context);
          $('#roomsInfo').html(html);
          if (_this.context.rooms) {
            return _this.setEventHandlers();
          }
        };
      })(this));
    };
    this.removeRooms = function() {
      var confirms, id;
      id = _.toArray($('input[name="DeleteID"]:checked').map(function() {
        return this.value;
      }));
      confirms = [];
      return jsSubmit({
        action: "/webapi/rooms/used",
        method: "GET",
        queryData: {
          id: id
        },
        contentType: "application/json",
        showProcessing: true
      }).then((function(_this) {
        return function(roomsDtos) {
          if (roomsDtos && roomsDtos.length) {
            confirms.push($.show.getConfirmation(language.Calendar.kDeleteRoomsWarn));
          }
          return extDeferred.when(confirms).then(function() {
            return jsSubmit({
              action: "/webapi/rooms",
              method: "DELETE",
              queryData: {
                id: id
              },
              contentType: "application/json",
              showProcessing: true,
              onSuccess: function() {
                return _this.getRooms();
              }
            });
          });
        };
      })(this));
    };
    this.getValidRoom = function(container) {
      var $container, areaElement, empty, lengthElement, room, roomNameElement, seatsElement, widthElement;
      empty = '';
      $container = $(container);
      roomNameElement = $container.find('input[name="RoomName"]').get(0);
      lengthElement = $container.find('input[name="Length"]').get(0);
      widthElement = $container.find('input[name="Width"]').get(0);
      seatsElement = $container.find('input[name="Seats"]').get(0);
      areaElement = $container.find('input[name="Area"]').get(0);
      room = new Room();
      room.mapFromContainer(container);
      if (room.roomname === empty) {
        throw new RoomValidationError(roomNameElement, language.Calendar.kErrMsgEmpty);
      }
      if (room.length && (room.length < 1 || room.length > 100)) {
        throw new RoomValidationError(lengthElement, language.Generic.Calendar.kErrLen);
      }
      if (room.width && (room.width < 1 || room.width > 100)) {
        throw new RoomValidationError(widthElement, language.Generic.Calendar.kErrWidth);
      }
      if (!room.seats || (room.seats <= 0 || room.seats > 100)) {
        throw new RoomValidationError(seatsElement, language.Calendar.kErrSeats2);
      }
      if (room.area && (room.area < 1 || room.area > 999)) {
        throw new RoomValidationError(areaElement, language.Generic.Calendar.kErrArea);
      }
      return room;
    };
    this.saveChanges = function() {
      var rooms;
      rooms = [];
      _.each($('table tr'), (function(_this) {
        return function(row, index) {
          var room;
          if (index === 0) {
            return;
          }
          room = _this.getValidRoom(row);
          return rooms.push(room);
        };
      })(this));
      return jsSubmit({
        action: "/webapi/rooms",
        method: "POST",
        data: rooms,
        contentType: "application/json",
        showProcessing: true,
        onSuccess: (function(_this) {
          return function() {
            return _this.getRooms().then(function() {
              window.dataWereChanged = false;
              return alert(language.Generic.Common.kDataSaved);
            });
          };
        })(this)
      });
    };
    this.setInvalidCell = function(cell) {
      if (cell) {
        return $(cell).addClass('room-cell-invalid');
      }
    };
    this.clearInvalidCells = function() {
      return $('.room-cell-invalid').removeClass('room-cell-invalid');
    };
    this.createRoom = function(addRoomForm) {
      var room;
      if (!addRoomForm.valid()) {
        return (new $.Deferred).reject();
      }
      room = new Room();
      room.mapFromContainer(addRoomForm);
      return jsSubmit({
        action: "/webapi/rooms",
        method: "PUT",
        data: room,
        contentType: "application/json",
        showProcessing: true,
        onSuccess: (function(_this) {
          return function() {
            return _this.getRooms();
          };
        })(this)
      });
    };
    this.hasRoomWithHimself = function() {
      var mergeRoomId, roomId;
      mergeRoomId = $('select[name="MERGEROOMID"]').val();
      roomId = $('select[name="ROOMID"]').val();
      return mergeRoomId === roomId;
    };
    this.mergeRooms = function() {
      var mergeRoomId, roomId;
      mergeRoomId = $('select[name="MERGEROOMID"]').val();
      roomId = $('select[name="ROOMID"]').val();
      return jsSubmit({
        action: "/webapi/rooms/integrated",
        queryData: {
          mergeRoomId: mergeRoomId,
          roomId: roomId
        },
        method: "POST",
        showProcessing: true
      });
    };
    this.hasSameRoomname = function() {
      return _.some(_.groupBy(_.toArray($('input[name = "RoomName"]').map(function() {
        return trimStr(this.value);
      }))), function(gr) {
        return gr.length > 1;
      });
    };
  }

  RoomsCtrl.prototype.NotifyUserOfDuplicateTitles = function() {
    var groups, keys;
    groups = _.groupBy(_.toArray($('input[name = "RoomName"]')).map(function(el) {
      return {
        name: trimStr(el.value),
        element: el
      };
    }), 'name');
    keys = Object.keys(groups);
    _.each(keys, (function(_this) {
      return function(key) {
        var maps;
        maps = groups[key];
        if (maps.length > 1) {
          return _.each(maps, function(map) {
            return _this.setInvalidCell(map.element);
          });
        }
      };
    })(this));
    if (this.hasSameRoomname()) {
      return alert("Внимание! В поле 'Номер/название' имеются дублирующиеся значения. Необходимо отредактировать значения поля c соблюдением условия уникальности и нажать кнопку 'Сохранить'.");
    }
  };

  RoomsCtrl.prototype.InitRooms = function() {
    var getYearFormationMode, queries;
    queries = new Array();
    getYearFormationMode = function() {
      return jsSubmit({
        action: "/webapi/years/yearFormationMode",
        showProcessing: true,
        method: "GET",
        onSuccess: (function(_this) {
          return function(yearFormationMode) {
            return _this.yearFormationMode = yearFormationMode;
          };
        })(this)
      });
    };
    queries.push(getYearFormationMode());
    queries.push(this.getRooms());
    return extDeferred.when(queries).then((function(_this) {
      return function() {
        return _this.addButtons();
      };
    })(this));
  };

  RoomsCtrl.prototype.AddNew = function() {
    var addRoomForm, createButtonHandler;
    if (this.hasSameRoomname()) {
      return;
    }
    addRoomForm = null;
    createButtonHandler = (function(_this) {
      return function(dialog) {
        var error;
        try {
          return _this.createRoom(addRoomForm).then(function() {
            dialog.forceClose();
            return alert(_this.context.language.Calendar.kCreateRoomsSuccess);
          });
        } catch (error1) {
          error = error1;
          console.log(error);
          return $.show.message(error);
        }
      };
    })(this);
    return $.ajax({
      url: "/vendor/pages/templates/rooms/addRoom.html",
      cache: true,
      success: (function(_this) {
        return function(data) {
          var html, roomsAddTmpl, template;
          roomsAddTmpl = data.replace(/(?:\r\n|\r|\n)/g, '');
          template = Handlebars.compile(roomsAddTmpl);
          html = template(_this.context);
          return $.show.dialog({
            title: language.Calendar.kAddRoom,
            message: $(html),
            buttons: [
              {
                label: language.Generic.Buttons.kAdd,
                action: createButtonHandler,
                cssClass: 'btn-primary'
              }
            ],
            onshown: function() {
              addRoomForm = $(document.addNewRoom);
              return addRoomForm.validate({
                rules: _this.validationParams.getRules(),
                messages: _this.validationParams.getMessages()
              });
            }
          });
        };
      })(this)
    });
  };

  RoomsCtrl.prototype.SaveChanges = function() {
    var error;
    if (this.hasSameRoomname()) {
      return;
    }
    try {
      this.clearInvalidCells();
      return this.saveChanges();
    } catch (error1) {
      error = error1;
      if (error instanceof RoomValidationError) {
        this.setInvalidCell(error.targetElement);
      }
      console.log(error.stack);
      if (error instanceof RoomValidationError) {
        return alert(error.message);
      } else {
        return $.show.error(error.message);
      }
    }
  };

  RoomsCtrl.prototype.RemoveRooms = function() {
    var bOk, chkBox, i, j, ref;
    if (this.hasSameRoomname()) {
      return;
    }
    chkBox = $('input[name="DeleteID"]');
    bOk = false;
    if (chkBox.length) {
      for (i = j = 0, ref = chkBox.length; j < ref; i = j += 1) {
        if (chkBox[i].checked) {
          bOk = true;
        }
      }
    } else {
      bOk = chkBox.checked;
    }
    if (!bOk) {
      alert(language.Calendar.kErrMsgNotChecked);
      return;
    }
    return $.show.confirmation(language.Generic.Common.kMsgAreYouSure).then((function(_this) {
      return function() {
        return _this.removeRooms();
      };
    })(this));
  };

  RoomsCtrl.prototype.ResetRoomsScreen = function() {
    if (this.hasSameRoomname()) {
      return;
    }
    this.clearInvalidCells();
    return this.getRooms();
  };

  RoomsCtrl.prototype.MergeRooms = function() {
    var sendBtn;
    if (this.hasSameRoomname()) {
      return;
    }
    sendBtn = (function(_this) {
      return function(dialog) {
        if (_this.hasRoomWithHimself()) {
          return alert(language.Calendar.kMergeRoomWithHimself);
        }
        return $.show.confirmation(language.Calendar.kMergeRoomsWarn).then(function() {
          return _this.mergeRooms().then(function() {
            alert(_this.context.language.Calendar.kMergeRoomsSuccess);
            return _this.getRooms().then(function() {
              return dialog.forceClose();
            });
          });
        });
      };
    })(this);
    return $.ajax({
      url: "/vendor/pages/templates/rooms/mergeRooms.html",
      cache: true,
      success: (function(_this) {
        return function(data) {
          var html, mergeRoomsTmpl, template;
          mergeRoomsTmpl = data.replace(/(?:\r\n|\r|\n)/g, '');
          template = Handlebars.compile(mergeRoomsTmpl);
          html = template(_this.context);
          return $.show.dialog({
            title: language.Calendar.kReplaceRoom,
            message: $(html),
            buttons: [
              {
                label: language.Generic.SetupSchool.kReplace,
                action: sendBtn,
                cssClass: 'btn-primary'
              }
            ]
          });
        };
      })(this)
    });
  };

  return RoomsCtrl;

})();

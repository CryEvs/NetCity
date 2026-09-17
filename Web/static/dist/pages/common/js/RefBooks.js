var userParamAddCtrl,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

userParamAddCtrl = (function() {
  var _template;

  function userParamAddCtrl(ParamId, SchoolId) {
    this.ParamId = ParamId;
    this.SchoolId = SchoolId;
    this.modalSubmit = bind(this.modalSubmit, this);
    this.showModalAddOrUpdateParameter = bind(this.showModalAddOrUpdateParameter, this);
  }

  _template = "";

  $.ajax({
    url: '/vendor/pages/templates/User/addOrUpdateUserInfoListItemTemplate.html',
    cache: true,
    success: function(data) {
      return _template = data.replace(/(?:\r\n|\r|\n)/g, '');
    }
  });

  userParamAddCtrl.prototype.showModalAddOrUpdateParameter = function(itemId, itemName, itemShortName, action) {
    var html, model, template, title;
    this.itemId = itemId;
    model = {
      language: language,
      itemName: itemName,
      itemShortName: itemShortName
    };
    if (action === 'edit') {
      title = language.Generic.SetupSchool.kPageTitle_Edit + " " + itemName;
    } else {
      title = language.Generic.SetupSchool.kPageTitle_New;
    }
    template = Handlebars.compile(_template);
    html = template(model);
    this.dialog = $.show.dialog({
      title: title,
      message: html,
      buttons: [
        {
          label: language.Generic.Buttons.kSave,
          action: this.modalSubmit,
          cssClass: 'btn-primary'
        }
      ]
    });
  };

  userParamAddCtrl.prototype.modalSubmit = function() {
    var itemName, itemName2, userInfoListItem;
    itemName = $("#itemName").val();
    itemName2 = $("#itemShortName").val();
    if (!itemName.trim()) {
      alert("Введите полное название параметра");
      return;
    }
    userInfoListItem = {
      id: this.itemId,
      parameterId: this.ParamId,
      schoolId: this.SchoolId,
      itemName: itemName.trim(),
      itemName2: itemName2.trim(),
      itemName3: null,
      itemOrderNo: null
    };
    return jsSubmit({
      action: "/webapi/schools/" + this.SchoolId + "/refbook/" + this.ParamId + "/listitems",
      showProcessing: true,
      method: 'POST',
      data: userInfoListItem,
      onSuccess: (function(_this) {
        return function() {
          _this.dialog.successClose();
          return location.reload();
        };
      })(this)
    });
  };

  return userParamAddCtrl;

})();

var UserStatCtrl;

UserStatCtrl = (function() {
  var userStatByClasses, userStatTmpl, userStatTmplByUsers1, userStatTmplClass, userStatTmplOneUser;

  userStatTmpl = '	<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block"> <tr"> <th>{{language.Generic.Common.kDisplayName}}</th> <th>{{language.Generic.Common.kRole}}</th> <th>{{language.Generic.ServAdmin.kLoginTime}}</th> <th>{{language.Generic.ServAdmin.kLogoutTime}}</th> <th>{{language.Generic.ServAdmin.kIPAddress}}</th> <th>{{language.Generic.Login.kEsiaLogin}}</th> </tr> {{#each userStats}} <tr> <td> {{login}} </td> <td> {{role}} </td> <td class="text-center"> {{date2str dateLogin}} </td> <td class="text-center"> {{date2str dateLogout}} </td> <td class="text-center"> {{ip}} </td> <td class="text-center"> {{#if esiaLogin}}{{../../language.Generic.Common.kYes}}{{/if}} </td> </tr> {{/each}} </table>';

  userStatTmplClass = '<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block"> <tr"> <th>{{language.Generic.Common.kDisplayName}}</th> <th>{{language.Generic.Common.kRole}}</th> <th>{{language.Generic.ServAdmin.kLoginTime}}</th> <th>{{language.Generic.ServAdmin.kLogoutTime}}</th> <th>{{language.Generic.ServAdmin.kIPAddress}}</th> <th>{{language.Common.kClass}}</th> <th>{{language.Generic.Login.kEsiaLogin}}</th> </tr> {{#each userStats}} <tr> <td> {{login}} </td> <td> {{role}} </td> <td class="text-center"> {{date2str dateLogin}} </td> <td class="text-center"> {{date2str dateLogout}} </td> <td class="text-center"> {{ip}} </td> <td class="text-center"> {{userClasses}} </td> <td class="text-center"> {{#if esiaLogin}}{{../../language.Generic.Common.kYes}}{{/if}} </td> </tr> {{/each}} </table>';

  userStatTmplByUsers1 = '<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block"> <tr> <th>' + language.Generic.Common.kDisplayName + '</th> <th>' + language.Generic.Common.kRole + '</th> <th>' + language.Generic.Common.kLoginAmount + '</th> <th>' + language.Generic.Common.kWorkTime + '</th> <th>' + language.Generic.Common.kLastLoginDate + '</th> <th>' + language.Common.kClass + '</th> </tr> {{#each userStats}} <tr> <td> {{login}} </td> <td> {{roles}} </td> <td class="text-center"> {{loginCount}} </td> <td class="text-center"> {{workTime}} </td> <td class="text-center"> {{date2str lastDateTimeLogin}} </td> <td class="text-center"> {{classesNames}} </td> </tr> {{/each}} </table> <table> <tr> <td> Всего посетителей за период: {{userStats.length}} </td> </tr> </table>';

  userStatTmplOneUser = '<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block"> <tr> <th>{{language.Generic.ServAdmin.kLoginTime}}</th> <th>{{language.Generic.ServAdmin.kLogoutTime}}</th> <th>{{language.Generic.Common.kWorkTimeOne}}</th> <th>{{language.Generic.ServAdmin.kIPAddress}}</th> <th>{{language.Generic.Login.kEsiaLogin}}</th> </tr> {{#each userStats}} <tr> <td class="text-center"> {{date2str dateLogin}} </td> <td class="text-center"> {{date2str dateLogout}} </td> <td class="text-center"> {{workTime}} </td> <td class="text-center"> {{ip}} </td> <td class="text-center"> {{#if esiaLogin}}{{../../language.Generic.Common.kYes}}{{/if}} </td> </tr> {{/each}} </table> <table> <tr> <td> Всего входов за период: {{userStats.length}} </td> </tr> </table>';

  userStatByClasses = '<table class="table table-bordered table-xs table-bright-striped table-bright-hover print-block"> <tr> <th rowspan=2>' + language.Common.kClass + '</th> <th colspan=2>' + language.Common.kStudents + '</th> <th colspan=2>' + language.Generic.Common.kParents + '</th> </tr> <tr align="center"> <th>' + language.Generic.Common.kUsersAmount + '</th> <th>' + language.Generic.Common.kLoginAmount + '</th> <th>' + language.Generic.Common.kUsersAmount + '</th> <th>' + language.Generic.Common.kLoginAmount + '</th> </tr> {{#each userStats}} <tr class="text-center"> <td> {{className}} </td> <td> {{zeroIsEmpty studentsAmount}} </td> <td> {{zeroIsEmpty studentsLoginAmount}} </td> <td> {{zeroIsEmpty parentsAmount}} </td> <td> {{zeroIsEmpty parentsLoginAmount}} </td> </tr> {{/each}} </table>';

  function UserStatCtrl(params, container, filterPanel) {
    this.params = params;
    this.container = container;
    this.filterPanel = filterPanel;
    Handlebars.registerHelper('date2str', function(dateParam) {
      var dt;
      if (dateParam) {
        dt = new Date(dateParam);
        return dateUtils.date2str(dt) + " " + dateUtils.time2Str_ss(dt);
      }
    });
    Handlebars.registerHelper('zeroIsEmpty', function(nParam) {
      if (nParam === 0) {
        return "";
      } else {
        return nParam;
      }
    });
    this.showUserStat = function(userStats, statTmpl) {
      var html, model, template;
      if (!userStats.length) {
        this.container.empty();
        this.container.append($.uicontrols.info(language.Generic.Common.kNoDataForFilter));
        return;
      }
      model = {
        userStats: userStats,
        language: language
      };
      template = Handlebars.compile(statTmpl);
      html = template(model);
      this.container.html(html);
      return $("#actionPanel").show();
    };
    this.clearResultsHandler = (function(_this) {
      return function() {
        $("#actionPanel").hide();
        _this.container.html("");
        return $("#actionPanel").show();
      };
    })(this);
    this.filterPanel.init(this.clearResultsHandler);
    this.date2StrN = function(date) {
      var dd, mm, yyyy;
      yyyy = date.getFullYear().toString();
      mm = (date.getMonth() + 1).toString();
      dd = date.getDate().toString();
      if (mm.length === 1) {
        mm = '0' + mm;
      }
      if (dd.length === 1) {
        dd = '0' + dd;
      }
      return yyyy + '-' + mm + '-' + dd;
    };
    this.popupUserStat = function() {
      return this.container.printUtils().toPrint().then(function(window) {
        var popup;
        return popup = window;
      });
    };
  }

  UserStatCtrl.prototype.browseUserStat = function() {
    var data, dateBegin, dateEnd, idpType, interval, statTmpl, url, user, userType, vals, viewType;
    vals = this.filterPanel.getValues();
    user = "-1";
    interval = dateRange.parseRange(vals.DatePeriod);
    dateBegin = this.date2StrN(interval.startDate);
    dateEnd = this.date2StrN(interval.endDate);
    viewType = vals.ViewType;
    userType = vals.UserType;
    idpType = vals.IdpType;
    user = vals.Users;
    data = {};
    if (user && user !== "-1") {
      data.userId = user;
    }
    if (userType && userType !== "-1") {
      data.userType = userType;
    }
    url = (function() {
      switch (viewType) {
        case "1":
          return "/webapi/schoolyears/" + this.params.schoolYearId + "/userstat/byLoginTime/" + dateBegin + "/" + dateEnd + "/" + idpType;
        case "2":
          return "/webapi/schoolyears/" + this.params.schoolYearId + "/userstat/byUsers/" + dateBegin + "/" + dateEnd + "/" + idpType;
        case "3":
          return "/webapi/schoolyears/" + this.params.schoolYearId + "/userstat/byClasses/" + dateBegin + "/" + dateEnd + "/" + idpType;
      }
    }).call(this);
    statTmpl = (function() {
      switch (viewType) {
        case "1":
          return userStatTmpl;
        case "2":
          return userStatTmplByUsers1;
        case "3":
          return userStatByClasses;
      }
    })();
    if (viewType === "2" && user !== "-1") {
      url = "/webapi/schoolyears/" + this.params.schoolYearId + "/userstat/byLoginTime/" + dateBegin + "/" + dateEnd + "/" + idpType;
      statTmpl = userStatTmplOneUser;
    }
    if ((viewType === "1") && ((userType === "1") || (userType === "2"))) {
      statTmpl = userStatTmplClass;
    }
    return jsSubmit({
      action: url,
      showProcessing: true,
      method: "GET",
      data: data
    }).then((function(_this) {
      return function(userStats) {
        return _this.showUserStat(userStats, statTmpl);
      };
    })(this));
  };

  UserStatCtrl.prototype.print = function() {
    return this.container.printUtils().toPrint({
      viewHeader: true
    }).then(function(window) {
      var popup;
      return popup = window;
    }).then(function(window) {
      return window.onload = function() {
        window.print();
        return window.close();
      };
    });
  };

  UserStatCtrl.prototype.exportUserStat = function() {
    return this.container.printUtils().toExcel({
      viewHeader: true
    });
  };

  return UserStatCtrl;

})();

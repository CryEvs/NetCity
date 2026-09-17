var UserStatEMCtrl;

UserStatEMCtrl = (function() {
  var emIndexer, loadAllEmNames, loadTemplate, tst, userStatEmAdmInfoTmpl, userStatEmEmInfoTmpl, userStatEmEoInfoTmpl, userStatEmEoOneInfoTmpl;

  userStatEmAdmInfoTmpl = '';

  userStatEmEoInfoTmpl = '';

  userStatEmEoOneInfoTmpl = '';

  userStatEmEmInfoTmpl = '';

  emIndexer = [];

  tst = '';

  loadTemplate = function(url, setFunc) {
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

  loadAllEmNames = function(url, setFunc) {
    return $.ajax({
      url: url,
      cache: true,
      success: function(data) {
        return setFunc(data);
      }
    });
  };

  function UserStatEMCtrl(container, filterPanel) {
    var queries;
    this.container = container;
    this.filterPanel = filterPanel;
    queries = [
      loadTemplate('/vendor/pages/templates/UserStat/userStatEmAdmTemplate.html', function(html) {
        return userStatEmAdmInfoTmpl = html;
      }, loadTemplate('/vendor/pages/templates/UserStat/userStatEmEoTemplate.html', function(html) {
        return userStatEmEoInfoTmpl = html;
      }, loadTemplate('/vendor/pages/templates/UserStat/userStatEmEoOneTemplate.html', function(html) {
        return userStatEmEoOneInfoTmpl = html;
      }, loadTemplate('/vendor/pages/templates/UserStat/userStatEmEmTemplate.html', function(html) {
        return userStatEmEmInfoTmpl = html;
      }, loadAllEmNames('/webapi/educmanagements', function(data) {
        return emIndexer = _.indexBy(data, "id");
      })))))
    ];
    extDeferred.when(queries).then(function() {
      Handlebars.registerHelper('ifEqual', function(nParam1, nParam2, opts) {
        if (nParam1 === nParam2) {
          return opts.fn(this);
        } else {
          return opts.inverse(this);
        }
      });
      Handlebars.registerHelper('date2strDayOnly', function(dateParam) {
        var dt;
        if (dateParam) {
          dt = dateUtils.castServerDateTimeToClient(dateParam);
          return dateUtils.date2str(dt);
        }
      });
    });
  }

  UserStatEMCtrl.prototype.browseUserStatEM = function() {
    var pagination, self;
    self = this;
    pagination = new Pagination({
      url: "/webapi/em/userstat",
      container: $('.userStatEMCtrl'),
      render: function(userStatEmInfo) {
        var html, model, orgType, schoolId, template, tmpl;
        if (!userStatEmInfo.userStats.length) {
          self.showMsgInContainerHtml(language.Generic.Movement.kMsgNoStudentsForFilters);
          return;
        }
        _.each(userStatEmInfo.userStats, function(userStat) {
          userStat.emNames = _.map(userStat.eMs, function(emId) {
            return emIndexer[emId].name;
          });
          return userStat.emNames = userStat.emNames.join(", ");
        });
        schoolId = self.filterPanel.getValues().OrganizationFilter;
        model = {
          userStatEmInfo: userStatEmInfo,
          language: language,
          schoolFilterValue: schoolId
        };
        orgType = self.filterPanel.getValues().OrganizationType;
        tmpl = (function() {
          switch (orgType) {
            case "1":
              return tmpl = (schoolId === "-1" ? userStatEmEoInfoTmpl : userStatEmEoOneInfoTmpl);
            case "2":
              return tmpl = userStatEmEmInfoTmpl;
            case "3":
              return tmpl = userStatEmAdmInfoTmpl;
          }
        })();
        template = Handlebars.compile(tmpl);
        html = template(model);
        $("#actionPanel").show();
        return html;
      },
      postRender: function() {
        $('[data-original-title]').popover({
          placement: 'bottom',
          html: 'true',
          trigger: "hover"
        });
        return window.floatingScroll.scanTables();
      },
      context: {
        filterContextData: {
          selectedData: this.filterPanel.getCtxValues()
        }
      },
      requestFieldName: 'pagedData',
      responseFieldName: 'pageResponseData'
    });
    pagination.setRecordsOnPage(this.filterPanel.getValues().PageRowsFilter);
    $('select[name="PageRowsFilter"]').on('change', function() {
      return pagination.setRecordsOnPage(this.value);
    });
    return pagination.init();
  };

  UserStatEMCtrl.prototype.showMsgInContainerHtml = function(message) {
    return this.container.html('<div class="col-md-12 alert alert-info" role="alert">' + message + '</div>');
  };

  UserStatEMCtrl.prototype.showWarningMsgInContainerHtml = function(message) {
    return this.container.html('<div class="col-md-12 alert alert-danger" role="alert">' + message + '</div>');
  };

  UserStatEMCtrl.prototype.print = function() {
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

  UserStatEMCtrl.prototype.exportUserStatEM = function() {
    return this.container.printUtils().toExcel({
      viewHeader: true
    });
  };

  return UserStatEMCtrl;

})();

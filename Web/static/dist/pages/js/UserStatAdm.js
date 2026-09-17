var UserStatAdmCtrl;

UserStatAdmCtrl = (function() {
  var emIndexer, loadAllEmNames, loadTemplate, tst, userStatAdmInfoTmpl;

  userStatAdmInfoTmpl = '';

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

  function UserStatAdmCtrl(container, filterPanel) {
    var queries;
    this.container = container;
    this.filterPanel = filterPanel;
    queries = [
      loadTemplate('/vendor/pages/templates/UserStat/userStatAdmInfoTemplate.html', function(html) {
        return userStatAdmInfoTmpl = html;
      }, loadAllEmNames('/webapi/educmanagements', function(data) {
        return emIndexer = _.indexBy(data, "id");
      }))
    ];
    extDeferred.when(queries).then(function() {
      Handlebars.registerHelper('ifEqual', function(nParam1, nParam2, opts) {
        if (nParam1 === nParam2) {
          return opts.fn(this);
        } else {
          return opts.inverse(this);
        }
      });
      Handlebars.registerHelper('date2str', function(dateParam) {
        var dt;
        if (dateParam) {
          dt = new Date(dateParam);
          return dateUtils.date2str(dt) + " " + dateUtils.time2Str_ss(dt);
        }
      });
    });
  }

  UserStatAdmCtrl.prototype.browseUserStatAdm = function() {
    var pagination, self;
    self = this;
    pagination = new Pagination({
      url: "/webapi/admin/userstat",
      container: $('.userStatAdmCtrl'),
      render: function(userStatAdmInfo) {
        var html, model, template;
        if (!userStatAdmInfo.userStats.length) {
          self.showMsgInContainerHtml(language.Generic.Movement.kMsgNoStudentsForFilters);
          return;
        }
        _.each(userStatAdmInfo.userStats, function(userStat) {
          userStat.emNames = _.map(userStat.eMs, function(emId) {
            return emIndexer[emId].name;
          });
          return userStat.emNames = userStat.emNames.join(", ");
        });
        model = {
          userStatAdmInfo: userStatAdmInfo,
          language: language,
          schoolFilterValue: self.filterPanel.getValues().OrganizationFilter
        };
        template = Handlebars.compile(userStatAdmInfoTmpl);
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

  UserStatAdmCtrl.prototype.showMsgInContainerHtml = function(message) {
    return this.container.html('<div class="col-md-12 alert alert-info" role="alert">' + message + '</div>');
  };

  UserStatAdmCtrl.prototype.showWarningMsgInContainerHtml = function(message) {
    return this.container.html('<div class="col-md-12 alert alert-danger" role="alert">' + message + '</div>');
  };

  UserStatAdmCtrl.prototype.print = function() {
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

  UserStatAdmCtrl.prototype.exportUserStatAdm = function() {
    return this.container.printUtils().toExcel({
      viewHeader: true
    });
  };

  return UserStatAdmCtrl;

})();

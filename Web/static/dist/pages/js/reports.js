var report;

deferredResLoader.loadJsScript("/static/dist/pages/common/js/textWrapIE11.js");

report = (function() {
  var alertsReport, checkJson, commonExportBigReport, commonGenerate, commonGenerateGraph, control, defaults, getDefaultReportUrl, onGenerateReport, options, popup, popupReport, sendReport;
  popup = null;
  getDefaultReportUrl = function() {
    var filename, url;
    url = window.location.pathname;
    filename = url.substring(url.lastIndexOf('/Report') + 7);
    return filename;
  };
  defaults = {
    winOptions: {
      name: "print_window",
      specs: "status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=790,height=590",
      winChild: null,
      url: window.location.pathname
    }
  };
  options = {
    preActions: [],
    noCorrectScale: false,
    graphType: "bar"
  };
  $(document).ready(function() {
    options = $.extend(options, {
      reportUrl: function() {
        return options.reportUrlPrefix + getDefaultReportUrl();
      },
      title: $('.title').clone().text().split('/').slice(-1)[0],
      reportUrlPrefix: "",
      form: $('form[name="Reports"]')[0],
      container: $('#report'),
      actionPanel: $('#actionPanel')
    });
  });
  popupReport = function() {
    return options.container.printUtils().toPrint().then(function(window) {
      return popup = window;
    });
  };
  sendReport = function() {
    return options.container.printUtils().send({
      NA: options.title + ' (' + language.Generic.Reports.kOn + ' ' + appContext.now + ')'
    });
  };
  onGenerateReport = function(htmlResponse) {
    var ctrl;
    options.container.removeClass("hidden");
    options.container.html(htmlResponse);
    options.actionPanel.removeClass("hidden");
    ctrl = new TextWrapIE11Ctrl.TextWrapIE11Ctrl;
    return setTimeout(ctrl.splitLines, 100);
  };
  checkJson = function(response) {
    var htmlResponse, jsonResponse;
    htmlResponse = response.responseText;
    if ((htmlResponse && htmlResponse[0] === "{") || response[0] === "{") {
      if (htmlResponse === void 0) {
        htmlResponse = response;
      }
      jsonResponse = JSON.parse(htmlResponse);
      if (jsonResponse.message) {
        if (jsonResponse.isError) {
          $.show.error(jsonResponse.message);
        } else {
          $.show.alert(jsonResponse.message);
        }
      }
      return true;
    } else {
      return false;
    }
  };
  commonGenerate = function(in_options) {
    var j, len, opts, preAction, ref;
    opts = $.extend({}, options, in_options);
    ref = opts.preActions;
    for (j = 0, len = ref.length; j < len; j++) {
      preAction = ref[j];
      if (!preAction()) {
        return;
      }
    }
    return jsSubmit({
      action: typeof opts.reportUrl === "function" ? opts.reportUrl() : opts.reportUrl,
      dataType: "html",
      showProcessing: true,
      form: opts.form,
      data: opts.data,
      defaultErrorHandling: false,
      onSuccess: function(response) {
        if (!checkJson(response)) {
          if (opts.forExport) {
            options.container.addClass("hidden");
            options.actionPanel.addClass("hidden");
            options.container.html(response);
            options.container.printUtils().toExcel();
            return $('.buttons-panel-export-send').addClass("hidden");
          } else {
            onGenerateReport(response);
            return $('.buttons-panel-export-send').removeClass("hidden");
          }
        }
      },
      onError: function(response) {
        if (!checkJson(response)) {
          return $.show.error(language.Generic.Common.kUnexpErr);
        }
      }
    });
  };
  commonExportBigReport = function(in_options) {
    var j, len, opts, preAction, ref, url;
    opts = $.extend({}, options, in_options);
    ref = opts.preActions;
    for (j = 0, len = ref.length; j < len; j++) {
      preAction = ref[j];
      if (!preAction()) {
        return;
      }
    }
    options = $.extend({}, defaults, opts);
    url = typeof opts.reportUrl === "function" ? opts.reportUrl() : opts.reportUrl;
    options.actionFile = url.slice(0, url.length - 4) + "Export.asp";
    openExcelVersn(options.form, options.actionFile);
  };
  commonGenerateGraph = function(in_options) {
    var j, len, opts, preAction, ref, strGraphReportsPage;
    strGraphReportsPage = "g" + getDefaultReportUrl();
    opts = $.extend({}, options, in_options);
    ref = opts.preActions;
    for (j = 0, len = ref.length; j < len; j++) {
      preAction = ref[j];
      if (!preAction()) {
        return;
      }
    }
    return jsSubmit({
      action: strGraphReportsPage,
      dataType: "html",
      showProcessing: true,
      form: opts.form,
      data: opts.data,
      defaultErrorHandling: false,
      onSuccess: function(response) {
        onGenerateReport(response);
        return $('.buttons-panel-export-send').addClass("hidden");
      },
      onError: function(response) {
        if (!checkJson(response)) {
          return $.show.error(language.Generic.Common.kUnexpErr);
        }
      }
    });
  };
  alertsReport = function(options) {
    var messages;
    messages = [];
    if (options.isHeavyReport) {
      messages.push($.show.alert(language.Generic.EMReports.kReportTakesTime + '. ' + language.Generic.Curriculum.kPleaseWait + '!'));
    }
    if (options.noCorrectScale) {
      messages.push($.show.alert(language.Reports.kNoCorrectScale));
    }
    return messages;
  };
  control = {
    addFavoriteReport: function(in_options) {
      var reportId;
      reportId = $('input[name="RPTID"]').val().toLowerCase();
      return jsSubmit({
        action: '/webapi/reports/favorites/' + reportId,
        showProcessing: true,
        method: 'PUT',
        onSuccess: function() {
          $('#addFavoriteReport').toggle();
          $('#delFavoriteReport').toggle();
        }
      });
    },
    delFavoriteReport: function(in_options) {
      var reportId;
      reportId = $('input[name="RPTID"]').val().toLowerCase();
      return jsSubmit({
        action: '/webapi/reports/favorites/' + reportId,
        showProcessing: true,
        method: 'DELETE',
        onSuccess: function() {
          $('#addFavoriteReport').toggle();
          $('#delFavoriteReport').toggle();
        }
      });
    },
    setOptions: function(in_options) {
      return options = $.extend({}, options, in_options);
    },
    addPreAction: function(action) {
      return options.preActions.push(action);
    },
    generate: function(inOptions) {
      var messages;
      messages = alertsReport(options);
      return extDeferred.when(messages).then(function() {
        return commonGenerate(inOptions);
      });
    },
    exportBigRep: function(inOptions) {
      var messages;
      messages = [];
      messages.push($.show.confirmation(language.Generic.EMReports.kReportTakesTime + '. ' + language.Generic.Common.kCfrmContinue));
      return extDeferred.when(messages).then(function() {
        return commonExportBigReport(inOptions);
      });
    },
    showGraph: function() {
      var canvas, chart, chartAxisMax, chartData, chartOptions, colors, dataRows, dataSets, getRandomColor, graphType, labelCells, labels, reportTable;
      reportTable = options.container.find("table.chart-table");
      canvas = document.getElementById("chart");
      if (reportTable.hasClass("hide")) {
        reportTable.removeClass("hide");
        if (canvas) {
          $(canvas).hide();
        }
        return;
      }
      labels = [];
      colors = ['#1963a1', '#ff5656', '#4de852'];
      labelCells = reportTable.find("tr.chart-labels-row > th:not(:empty)");
      dataRows = reportTable.find("tr.chart-data-row");
      labelCells.each(function(ind, th) {
        var text;
        text = trimStr($(th).html().replace(/<br\s*\/?>|(?:&nbsp;)/gi, " "));
        if (!text) {
          return;
        }
        if (text.length > 20) {
          text = text.substring(0, 20);
        }
        return labels.push(text);
      });
      getRandomColor = function() {
        var color, i, j, letters;
        letters = '0123456789ABCDEF'.split('');
        color = '#';
        for (i = j = 0; j <= 5; i = ++j) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
      dataSets = [];
      dataRows.each(function(ind, row) {
        var color, dataSet;
        dataSet = {};
        dataSet.label = $(row).find(".chart-data-name").html().replace(/<br\s*\/?>|(?:&nbsp;)/gi, " ");
        color = colors[ind] || getRandomColor();
        dataSet.backgroundColor = color;
        dataSet.borderColor = color;
        dataSet.data = [];
        dataSet.fill = false;
        $(row).find("td:not(.chart-data-name)").each(function(ind, cell) {
          var cellValue;
          cellValue = parseFloat($(cell).text().replace(",", "."));
          return dataSet.data.push(cellValue);
        });
        return dataSets.push(dataSet);
      });
      chartData = {
        labels: labels,
        datasets: dataSets
      };
      chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false,
                maxRotation: 80
              }
            }
          ]
        }
      };
      if (!canvas) {
        $("<canvas />").addClass("report-chart").attr("id", "chart").insertAfter(reportTable);
        canvas = document.getElementById("chart");
      }
      reportTable.addClass("hide");
      $(canvas).show();
      if (reportTable.hasClass("chart-bars")) {
        graphType = "bar";
      } else if (reportTable.hasClass("chart-lines")) {
        graphType = "line";
      }
      chartAxisMax = +reportTable.attr("chart-axis-max") || 5;
      Chart.scaleService.updateScaleDefaults("linear", {
        ticks: {
          min: 0,
          autoSkip: false,
          max: chartAxisMax
        }
      });
      return chart = new Chart(canvas, {
        type: graphType || options.graphType,
        data: chartData,
        options: chartOptions
      });
    },
    generateGraph: function(addParams) {
      var messages;
      messages = alertsReport(options);
      return extDeferred.when(messages).then(function() {
        return commonGenerateGraph(addParams);
      });
    },
    print: function() {
      return popupReport().then(function(window) {
        return window.onload = function() {
          window.print();
          return window.close();
        };
      });
    },
    exportReport: function() {
      return options.container.printUtils().toExcel();
    },
    window: function() {
      return popupReport();
    },
    send: function() {
      return sendReport();
    }
  };
  return control;
})();

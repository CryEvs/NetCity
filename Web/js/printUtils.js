(function($) {
  var additionalFilters, defaults, exportProcessingFuncs, fileStyleCss, methods, printWindow, processingFuncs, sources;
  fileStyleCss = null;
  printWindow = null;
  additionalFilters = [];
  sources = {
    sourceHead: "<div align=\"center\" class=\"smalltext\">{{fullSchoolName}}</div> <h2 align=\"center\">{{pageTitle}}</h2> {{#if currYear}} <span><b>&nbsp;{{kSchoolYear}}:</b>&nbsp;{{currYear}}</span><br /> {{/if}} {{#each filters}} <span><b>&nbsp;{{{filterName}}}:</b>&nbsp;{{{filterValue}}}</span><br /> {{/each}} <br/>",
    sourceVersn: "<br/> <div class=\"smalltext\"><i>{{kStateOn}} {{now}}</i></div> <div class=smalltext>© <i>{{productName}}</i>&nbsp;{{version}}</div>",
    sourceLegend: "<br/> <table name=\"legend\"> <tr/> {{#each tableLegends}} {{#each this}} <tr> <td style=\"padding-right:20px; border:1px solid #000; background-color: {{{color}}}\">{{{label}}}</td> <td style=\"white-space:nowrap;\">{{{description}}}</td> </tr> {{/each}} {{/each}} </table>"
  };
  defaults = {
    viewHeader: false,
    bodyStyle: {
      'margin-top': 10,
      'margin-left': 10,
      'margin-right': 10
    },
    winOptions: {
      name: "print_window",
      specs: "status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=790,height=590",
      winChild: null
    },
    processingFunc: []
  };
  methods = {
    getCacheStyles: function(bExpot) {
      if (bExpot) {
        return fileStyleCss = $.get("/vendor/pages/css/export-tables.min.css");
      } else {
        return fileStyleCss = fileStyleCss != null ? fileStyleCss : $.get("/vendor/pages/css/print.min.css");
      }
    },
    getTitle: function() {
      return $('.title').clone().text().split('/').slice(-1)[0].trim();
    },
    getOuterHtml: function(elementSelector) {
      var outerHtml;
      outerHtml = '';
      elementSelector.each(function() {
        return outerHtml += this.outerHTML + '\n';
      });
      return outerHtml;
    },
    cssLoad: function(head, file) {
      return $('<link>', {
        rel: 'stylesheet',
        tyle: 'text/css',
        href: file
      }).appendTo(head);
    },
    getFiltersBlock: function() {
      var filters, formGroups, formGroupsClone;
      formGroups = $('.buttons-filters-panel .form-group').filter(':visible');
      formGroupsClone = formGroups.clone();
      $('<span class="input-group-addon">с</span>').prependTo(formGroupsClone.find('.input-daterange.input-group.date'));
      processingFuncs.replaceInputs(formGroups, formGroupsClone);
      processingFuncs.replaceSelects(formGroups, formGroupsClone);
      processingFuncs.replaceHrefs(formGroups, formGroupsClone);
      processingFuncs.replaceTextareas(formGroups, formGroupsClone);
      processingFuncs.replaceButtons(formGroups, formGroupsClone);
      filters = [];
      formGroupsClone.each(function(index, item) {
        var checkboxes, divCheckBoxes, label, labelText, span, spanText;
        divCheckBoxes = $('div.checkbox', item);
        checkboxes = formGroups.eq(index).find('div.checkbox input[type=checkbox]');
        $('label', divCheckBoxes).each(function(index, item) {
          if (checkboxes.eq(index).prop('checked')) {
            return divCheckBoxes.eq(index).replaceWith(item.lastChild.nodeValue);
          } else {
            return $(item).remove();
          }
        });
        label = $(item).find('label');
        labelText = label.text();
        if (labelText.localeCompare(language.Generic.Common.kSchoolYear) === 0) {
          $(item).remove();
          return;
        }
        label.remove();
        span = $(item).find('span');
        spanText = $(item).find('span.text').text() || span.text();
        if (span.parent('div.input-daterange').length) {
          spanText = '&nbsp;' + spanText.trim() + '&nbsp;';
        }
        span.replaceWith(spanText);
        processingFuncs.replaceOuterDivs(null, item);
        return filters.push({
          filterName: labelText,
          filterValue: item.innerHTML
        });
      });
      return filters;
    },
    drawHeaderContext: function(elSelector, opts) {
      var context, replaceTitle, templateHead, templateVrsn, titleArr;
      templateHead = Handlebars.compile(sources.sourceHead);
      templateVrsn = Handlebars.compile(sources.sourceVersn);
      titleArr = $('.title').clone().text().split('/');
      replaceTitle = titleArr[titleArr.length - 1];
      if (typeof opts.formTitle !== 'undefined') {
        replaceTitle = opts.formTitle(replaceTitle);
      }
      context = {
        fullSchoolName: appContext.fullSchoolName,
        pageTitle: replaceTitle,
        kSchoolYear: language.Generic.Common.kSchoolYear,
        currYear: appContext.currYear,
        filters: methods.getFiltersBlock()
      };
      if (additionalFilters.length) {
        context.filters = context.filters.concat(additionalFilters);
      }
      elSelector.prepend(templateHead(context));
      context = {
        kStateOn: language.Generic.Common.kStateOn,
        now: appContext.now,
        productName: appContext.productName,
        version: appContext.version
      };
      return elSelector.append(templateVrsn(context));
    },
    prepareContent: function(item, options, container) {
      var cloneRows, func, itemClone, j, len, name, ref, ref1;
      itemClone = item.clone();
      cloneRows = itemClone.find('tr');
      item.find('tr').each(function(index, row) {
        var cloneCells, cloneRow;
        cloneRow = cloneRows.eq(index);
        cloneCells = cloneRow.find('td');
        cloneRow.css('background-color', $(row).css('background-color'));
        return $('td', row).each(function(index, cell) {
          var cloneCell;
          cloneCell = cloneCells.eq(index);
          return cloneCell.css('background-color', $(cell).css('background-color'));
        });
      });
      for (name in processingFuncs) {
        func = processingFuncs[name];
        func(item, itemClone);
      }
      if (((ref = options.processingFunc) != null ? ref.length : void 0) > 0) {
        ref1 = options.processingFunc;
        for (j = 0, len = ref1.length; j < len; j++) {
          func = ref1[j];
          func(item, itemClone);
        }
      }
      return itemClone.appendTo(container);
    }
  };
  processingFuncs = {
    replaceInputs: function(printBlock, copyBlock) {
      $('input[type=hidden]', copyBlock).remove();
      return $('input', copyBlock).each(function() {
        var input;
        input = $(this);
        if (input.hasClass('form-cell-disabled')) {
          return input.replaceWith($('<b>').text(input.val()));
        } else {
          return input.replaceWith(input.val());
        }
      });
    },
    replaceSelects: function(printBlock, copyBlock) {
      var selects;
      selects = $('select', copyBlock);
      return printBlock.find('select').each(function(index, item) {
        return selects.eq(index).replaceWith($(item).children(':selected').text());
      });
    },
    replaceHrefs: function(printBlock, copyBlock) {
      return $('a[href]', copyBlock).each(function() {
        return $(this).replaceWith(this.innerHTML);
      });
    },
    replaceTextareas: function(printBlock, copyBlock) {
      var textareas;
      textareas = $('textarea', copyBlock);
      return printBlock.find('textarea').each(function(index, item) {
        var textarea;
        textarea = $(this);
        return textareas.eq(index).replaceWith(textarea.val());
      });
    },
    replaceButtons: function(printBlock, copyBlock) {
      $('button', copyBlock).remove();
      return $('.input-group-addon', copyBlock).each(function() {
        var $span;
        $span = $(this);
        return $span.replaceWith('&nbsp;' + $span.text() + '&nbsp;');
      });
    },
    replaceFormGroups: function(printBlock, copyBlock) {
      var formGroups, replaceTable;
      replaceTable = $('<table>').addClass('table table-bordered');
      formGroups = copyBlock.find('.form-group');
      if (formGroups.length) {
        formGroups.each(function() {
          var divs, label;
          label = $(this).find('label');
          label.replaceWith($('<th>').append($('<div>').addClass('text-left text-nowrap').html(label.text())));
          divs = $(this).children('div');
          divs.replaceWith($('<td>').addClass('text-nowrap').html(divs.html()));
          return replaceTable.append($('<tr>').html(this.innerHTML));
        });
        copyBlock.append(replaceTable);
        formGroups.remove();
        return $('*', copyBlock).not('td, th').each(function() {
          if (!$.filterWhitespaceString(this.innerHTML)) {
            return $(this).remove();
          }
        });
      }
    },
    replaceOuterDivs: function(printBlock, copyBlock) {
      var divs, formgroups, parent;
      parent = $(copyBlock).wrap('<div>').parent();
      formgroups = parent.find('.form-group');
      if (formgroups.length > 0) {
        divs = formgroups.children('div');
        while (divs.length) {
          divs.replaceWith(divs.html());
          divs = formgroups.children('div');
        }
      }
      return formgroups.unwrap;
    },
    replaceLegend: function(printBlock, copyBlock) {
      var legends, templateLegend, wrapBlock;
      templateLegend = Handlebars.compile(sources.sourceLegend);
      wrapBlock = copyBlock.wrap('<div>').parent();
      legends = wrapBlock.find('div.legend');
      legends.each(function() {
        var context, divs, tableLegends;
        divs = $(this).find('div');
        tableLegends = [];
        divs.each(function() {
          var legendDetails, p;
          p = $(this).find('p');
          legendDetails = [];
          p.each(function() {
            var descript;
            descript = $(this).find('span.legend-description').text().replace(" — ", "");
            return legendDetails.push({
              label: $(this).find('span.legend-label').text(),
              color: $("span:contains('" + descript + "')").prev().css("background-color"),
              description: descript
            });
          });
          return tableLegends.push(legendDetails);
        });
        context = {
          tableLegends: tableLegends
        };
        return $(this).replaceWith(templateLegend(context));
      });
      if (copyBlock.is('div.legend')) {
        return wrapBlock.children().appendTo(copyBlock.empty().removeClass());
      }
    },
    replaceNonPrintCol: function(printBlock, copyBlock) {
      var j, len, nonPrintCell, realIndex, ref, results, revIndex, siblings;
      ref = $('.NotPrintable', copyBlock).get().reverse();
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        nonPrintCell = ref[j];
        revIndex = nonPrintCell.cellIndex;
        siblings = $(nonPrintCell).prevAll();
        realIndex = siblings.get().reduce(function(sum, curritem) {
          return sum + curritem.colSpan;
        }, nonPrintCell.colSpan) - 1;
        $('tr', copyBlock).find("td:eq(" + revIndex + "), th:eq(" + revIndex + ")").first().remove();
        results.push($('tr', copyBlock).find("td:eq(" + realIndex + ")").remove());
      }
      return results;
    },
    replaceCtxBtnsIcons: function(printBlock, copyBlock) {
      return copyBlock.find('div.ctx-btns-icons').remove();
    },
    replaceScript: function(printBlock, copyBlock) {
      return copyBlock.find('script').remove();
    }
  };
  exportProcessingFuncs = {
    replaceImg: function(printBlock, copyBlock) {
      var parent, photowrap;
      photowrap = copyBlock.find('#photowrap');
      if (photowrap) {
        parent = photowrap.parent();
        if (parent) {
          parent.remove();
        } else {
          photowrap.remove();
        }
      }
      return copyBlock.find('img').remove();
    }
  };
  return $.fn.printUtils = function() {
    return {
      initAdditionalFilters: function(arrFilters) {
        var i, j, ref, results;
        results = [];
        for (i = j = 0, ref = arrFilters.length - 1; j <= ref; i = j += 2) {
          results.push(additionalFilters.push({
            filterName: arrFilters[i],
            filterValue: arrFilters[i + 1]
          }));
        }
        return results;
      },
      toPrint: (function(_this) {
        return function(opts) {
          var d, options, selectedObjects, winOpts;
          options = $.extend({}, defaults, opts);
          d = new $.Deferred();
          winOpts = $.extend({}, options.winOptions, {
            winChild: printWindow
          });
          windowOpen(winOpts);
          printWindow = winOpts.winChild;
          printWindow.document.writeln('<h4>' + language.Generic.Curriculum.kPleaseWait + '...</h4>');
          selectedObjects = _this;
          methods.getCacheStyles(false).done(function(data) {
            var body, bootstrapStyles, head, html, linkFavicon, printDocument, titleWindow;
            printDocument = printWindow.document;
            printDocument.open();
            $('h4', printDocument).remove();
            html = $('<html />');
            head = $('<head />');
            titleWindow = methods.getOuterHtml($('title'));
            if (typeof options.formTitle !== 'undefined') {
              titleWindow = options.formTitle(titleWindow);
            }
            linkFavicon = methods.getOuterHtml($('link[href*="favicon"]'));
            bootstrapStyles = methods.getOuterHtml($('link[href*="bootstrap"]'));
            $(titleWindow).appendTo(head);
            $(bootstrapStyles).appendTo(head);
            $('<style>' + data + '</style>').appendTo(head);
            head.appendTo(html);
            body = $('<body>', options.bodyStyle);
            selectedObjects.each(function() {
              return methods.prepareContent($(this), options, body);
            });
            if (options.viewHeader) {
              methods.drawHeaderContext(body, options);
            }
            body.find('.table-hover').removeClass('table-hover');
            body.appendTo(html);
            printDocument.writeln(html.wrap('<tag>').parent().html());
            printDocument.head.innerHTML += linkFavicon;
            printDocument.close();
            return d.resolve(printWindow);
          });
          return d.promise();
        };
      })(this),
      toExcel: (function(_this) {
        return function(opts) {
          var body, options;
          options = $.extend({}, defaults, opts);
          body = $('<body>', options.bodyStyle);
          _this.each(function() {
            return methods.prepareContent($(this), options, body);
          });
          exportProcessingFuncs.replaceImg(null, body);
          if (options.viewHeader) {
            methods.drawHeaderContext(body, options);
          }
          body.find('.table, .table-striped, .table-bordered, .table-hover, .table-condensed').removeClass().addClass('table-print');
          return methods.getCacheStyles(true).done(function(data) {
            var exclTitle, format, templateExcelExport;
            format = function(s, c) {
              return s.replace(/{(\w+)}/g, function(m, p) {
                return c[p];
              });
            };
            exclTitle = methods.getTitle();
            if (typeof options.formTitle !== 'undefined') {
              exclTitle = options.formTitle(exclTitle);
            }
            templateExcelExport = '<body>{content}</body>';
            if (data) {
              templateExcelExport = templateExcelExport.replace(/^/, "<head><meta HTTP-EQUIV='Content-type' CONTENT='text/html; charset=utf-8'><style>" + data + "</style></head>");
            }
            return extDeferred.when($.show.getConfirmation(language.Generic.Common.kExportIntoExcel, 0, [], false, "ShowExcelConfirm")).done(function() {
              return exportBlobToExcel("application/vnd.ms-excel", "/asp/scripts/ExportBlob.asp", format(templateExcelExport, {
                content: body.html()
              }), exclTitle + ".xls");
            });
          });
        };
      })(this),
      send: (function(_this) {
        return function(inparams) {
          var defparams, parameters, selectedObjects, url, winOpts;
          selectedObjects = _this;
          defparams = {
            A: "T",
            TA: "H",
            NA: "",
            RT: "R",
            RP: "R"
          };
          parameters = $.extend({}, defparams, inparams);
          winOpts = $.extend({}, defaults.winOptions, {
            specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=560',
            winChild: printWindow
          });
          windowOpen(winOpts);
          printWindow = winOpts.winChild;
          url = urlHelper.makeUrl("/asp/Messages/composemessage.asp", parameters);
          printWindow.location = url;
          return center(printWindow, 750, 560);
        };
      })(this)
    };
  };
})(jQuery);

//# sourceMappingURL=printUtils.js.map

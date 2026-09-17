var adaptJournalWidth, content_page_preloader, exportJournal, getPrintJournal, journalScrollDecorator, journal_marks, journal_students, journal_total, journal_total_wrapper, journal_total_wrapper_block, journal_wrapper, movein, moveout, printAttendanceMarks, printJournal, scanJournalTables, selectCol, selectRow;

journal_total = null;

journal_total_wrapper = null;

journal_wrapper = null;

journal_marks = null;

journal_students = null;

content_page_preloader = null;

journal_total_wrapper_block = null;

journalScrollDecorator = function(block_floating_scrolls) {
  var floating_wrapper_empty;
  floating_wrapper_empty = $("<div class='floating-wrapper-empty'></div>");
  return block_floating_scrolls.prepend(floating_wrapper_empty);
};

scanJournalTables = function() {
  return journal_total.filter(".journal-total:not(.floating-scrolls)").each(function(index, element) {
    var availWidth, doc_w, factWidth, parent, parent2, table;
    table = $(element);
    parent2 = table.parent();
    parent = parent2.parent();
    factWidth = table.prop("clientWidth");
    availWidth = parent.prop("clientWidth") - 4;
    doc_w = $(window).width();
    if (factWidth > availWidth || availWidth > doc_w) {
      floatingScroll.initScrollableBlock(table, journalScrollDecorator);
      return parent.css("overflow-x", "");
    }
  });
};

adaptJournalWidth = function() {
  var difference_right, journal_marks_right, journal_total_width;
  if (!journal_total) {
    return;
  }
  journal_marks_right = {
    "right": "1px"
  };
  if (journal_total_wrapper.width() > journal_total.width()) {
    journal_total_width = journal_students.outerWidth() + journal_marks.outerWidth() + journal_total.outerWidth() - 2;
    difference_right = journal_wrapper.outerWidth() - journal_total_width;
    if (difference_right > 0) {
      journal_marks_right = {
        "right": difference_right + "px"
      };
    }
  }
  return journal_marks.css(journal_marks_right);
};

selectRow = function(n, hover) {
  var elements, studentsElems, totalsElems;
  elements = $("#pupilstab tr:eq(" + n + ")");
  studentsElems = journal_students.find("tr:eq(" + (n - 2) + ")");
  totalsElems = journal_marks.find("tr:eq(" + (n - 2) + ")");
  if (hover) {
    elements.addClass("hover");
    studentsElems.addClass("hover");
    return totalsElems.addClass("hover");
  } else {
    elements.removeClass("hover");
    studentsElems.removeClass("hover");
    return totalsElems.removeClass("hover");
  }
};

selectCol = function(n, hover) {
  var c;
  c = 0;
  return $('#pupilstab tr').each(function() {
    var elements, headers, m, row, sum;
    row = $(this);
    sum = 0;
    m = 0;
    headers = row.find('th');
    headers.each(function() {
      var colspan, header, ref;
      header = $(this);
      if (sum <= n) {
        m += 1;
        colspan = (ref = header.attr("colspan")) != null ? ref : "1";
        return sum += parseInt(colspan);
      }
    });
    if (c === 0 || n <= headers.length) {
      elements = row.find("th:nth-child(" + m + ")");
      if (hover) {
        elements.addClass("hover");
      } else {
        elements.removeClass("hover");
      }
    }
    return c = 1;
  });
};

printJournal = function() {
  getPrintJournal().printUtils().toPrint({
    viewHeader: true,
    processingFunc: [printAttendanceMarks]
  });
};

exportJournal = function() {
  getPrintJournal().printUtils().toExcel({
    viewHeader: true,
    processingFunc: [printAttendanceMarks]
  });
};

getPrintJournal = function() {
  var curTr, legend, paintRowCells, paintRowTotalsCells, printHtml, tableJournal, tableMarks, tableMarksTrs, tableStudents, tableStudentsTrs, tableTotals, tableTotalsTrs;
  tableStudents = $('table.journal-student').clone();
  tableTotals = $('#pupilstab').clone();
  tableMarks = $('table.journal-marks').clone();
  tableJournal = $('<table class="table-print"/>');
  paintRowCells = function(tableSelector, tableClone) {
    var cells;
    cells = tableClone.find('td');
    return $(tableSelector).find('td').each(function(index, item) {
      var cellColor;
      cellColor = $(item).css('background-color');
      cells.eq(index).css('background-color', cellColor);
      return cells.eq(index).removeClass().addClass('cell-num');
    });
  };
  paintRowTotalsCells = function(tableSelector, tableClone) {
    var cells;
    cells = tableClone.find('td');
    return $(tableSelector).find('td').each(function(index, item) {
      var cellColor;
      cellColor = $(item).css('background-color');
      return cells.eq(index).css('background-color', cellColor);
    });
  };
  paintRowCells('#pupilstab', tableTotals);
  paintRowTotalsCells('table.journal-marks', tableMarks);
  tableStudentsTrs = tableStudents.find('tr');
  tableTotalsTrs = tableTotals.find('tr');
  tableMarksTrs = tableMarks.find('tr');
  curTr = 0;
  tableStudentsTrs.each(function(index, studTr) {
    var jrnlTr, studNameTd;
    jrnlTr = $('<tr/>');
    if (index === 0) {
      $(studTr).find('th').attr('rowspan', '2').appendTo(jrnlTr);
      tableTotalsTrs.eq(curTr).find('th').appendTo(jrnlTr);
      tableMarksTrs.eq(index).find('th').attr('rowspan', '2').appendTo(jrnlTr);
      curTr = curTr + 1;
    } else {
      studNameTd = '<td class="cell-text">' + $(studTr).find('td').text() + '</td>';
      $(jrnlTr).append(studNameTd);
      tableTotalsTrs.eq(curTr).find('td').appendTo(jrnlTr);
      tableMarksTrs.eq(index).find('td').appendTo(jrnlTr);
    }
    jrnlTr.appendTo(tableJournal);
    if (index === 0) {
      tableTotalsTrs.eq(curTr).appendTo(tableJournal);
      curTr = curTr + 1;
    }
    return curTr = curTr + 1;
  });
  legend = $('span.legend-description:contains("Срезовая работа")').parent().parent().parent().clone();
  printHtml = tableJournal.wrap('<div>').parent();
  if (legend) {
    legend.appendTo(printHtml);
  }
  return printHtml;
};

printAttendanceMarks = function(printBlock, copyBlock) {
  return copyBlock.find('table.table-print td').each(function() {
    var val;
    val = $(this).text();
    val = val.replace(/(^|\s)УП(\s|$)/g, '$1Н$2').replace(/(^|\s)НП(\s|$)/g, '$1Н$2').replace(/(^|\s)ОТ(\s|$)/g, '$1Н$2').replace(/(^|\s)ОП(\s|$)/g, '$1$2').replace(/(^|\s)Б(\s|$)/g, '$1Н$2');
    return $(this).text(val);
  });
};

movein = function() {
  selectCol(this.cellIndex, true);
  return selectRow(this.parentNode.rowIndex, true);
};

moveout = function() {
  selectCol(this.cellIndex, false);
  return selectRow(this.parentNode.rowIndex, false);
};

$(document).ready(function() {
  var legends, report;
  $('#pupilstab td').hover(movein, moveout);
  journal_total = $(".journal-total");
  journal_total_wrapper = $(".journal-total-wrapper");
  journal_wrapper = $(".journal-wrapper");
  journal_marks = $(".journal-marks");
  journal_students = $(".journal-student");
  content_page_preloader = $(".content-page-preloader");
  journal_total_wrapper_block = $(".journal-total-wrapper-block");
  report = $('#report');
  if (!report.length) {
    legends = $('div.legend');
    legends.each(function() {
      if (!$(this).hasClass('print-block')) {
        return $(this).addClass('print-block');
      }
    });
  }
  $(".icon-ok-wraper").popover({
    placement: 'bottom',
    html: 'true',
    trigger: "hover"
  });
  $(document).bind('scan-wide-tables', function() {
    return scanJournalTables();
  });
  return adaptJournalWidth();
});

deferredResLoader.ready(function() {
  var content_page_preloader_hidden, content_page_preloader_hide, hide_preloader, journal_total_wrapper_block_visible, journal_wrapper_max_height, setJournalVisible;
  journal_total_wrapper_block_visible = {
    visibility: "visible",
    opacity: 1
  };
  journal_wrapper_max_height = {
    "max-height": "none"
  };
  content_page_preloader_hidden = {
    opacity: 0
  };
  content_page_preloader_hide = {
    visibility: "hidden"
  };
  setJournalVisible = function() {
    journal_wrapper.css(journal_wrapper_max_height);
    journal_total_wrapper_block.css(journal_total_wrapper_block_visible);
    return adaptJournalWidth();
  };
  hide_preloader = function() {
    return content_page_preloader.css(content_page_preloader_hide);
  };
  window.setTimeout(setJournalVisible, 250);
  content_page_preloader.css(content_page_preloader_hidden);
  return window.setTimeout(hide_preloader, 1000);
});

$(window).resize(function() {
  return adaptJournalWidth();
});

//# sourceMappingURL=journal.js.map

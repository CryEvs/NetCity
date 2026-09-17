var JournalLayoutManager;

JournalLayoutManager = (function() {
  var adaptJournalWidth, journalScrollDecorator, movein, moveout, scanJournalTables, selectCol, selectRow, self;

  function JournalLayoutManager() {}

  JournalLayoutManager.journal_total = null;

  JournalLayoutManager.journal_total_wrapper = null;

  JournalLayoutManager.journal_wrapper = null;

  JournalLayoutManager.journal_marks = null;

  JournalLayoutManager.journal_students = null;

  JournalLayoutManager.content_page_preloader = null;

  JournalLayoutManager.journal_total_wrapper_block = null;

  self = JournalLayoutManager;

  journalScrollDecorator = function(block_floating_scrolls) {
    var floating_wrapper_empty;
    floating_wrapper_empty = $("<div class='floating-wrapper-empty'></div>");
    return block_floating_scrolls.prepend(floating_wrapper_empty);
  };

  scanJournalTables = function() {
    return self.journal_total.filter(".journal-total:not(.floating-scrolls)").each(function(index, element) {
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
    if (!self.journal_total) {
      return;
    }
    journal_marks_right = {
      "right": "1px"
    };
    if (self.journal_total_wrapper.width() > self.journal_total.width()) {
      journal_total_width = self.journal_students.outerWidth() + self.journal_marks.outerWidth() + self.journal_total.outerWidth() - 2;
      difference_right = self.journal_wrapper.outerWidth() - journal_total_width;
      if (difference_right > 0) {
        journal_marks_right = {
          "right": difference_right + "px"
        };
      }
    }
    return self.journal_marks.css(journal_marks_right);
  };

  selectRow = function(n, hover) {
    var elements, studentsElems, totalsElems;
    elements = self.journal_total.find("tr:eq(" + n + ")");
    studentsElems = self.journal_students.find("tr:eq(" + (n - 2) + ")");
    totalsElems = self.journal_marks.find("tr:eq(" + (n - 2) + ")");
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
    return $('tr', self.journal_total).each(function() {
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

  movein = function() {
    selectCol(this.cellIndex, true);
    return selectRow(this.parentNode.rowIndex, true);
  };

  moveout = function() {
    selectCol(this.cellIndex, false);
    return selectRow(this.parentNode.rowIndex, false);
  };

  JournalLayoutManager.prototype.init = function() {
    self.journal_total = $(".journal-total");
    self.journal_total_wrapper = $(".journal-total-wrapper");
    self.journal_wrapper = $(".journal-wrapper");
    self.journal_marks = $(".journal-marks");
    self.journal_students = $(".journal-student");
    self.journal_total_wrapper_block = $(".journal-total-wrapper-block");
    self.journal_preloader = $("#process-message-journal");
    $('td', self.journal_total).hover(movein, moveout);
    $(".icon-ok-wraper").popover({
      placement: 'bottom',
      html: 'true',
      trigger: "hover"
    });
    $(document).bind('scan-wide-tables', function() {
      return scanJournalTables();
    });
    adaptJournalWidth();
    deferredResLoader.ready(function() {
      return scanJournalTables();
    });
    $(document).bind('journal-width-changes.journal', function() {
      return adaptJournalWidth();
    });
    return $(window).resize(function() {
      return adaptJournalWidth();
    });
  };

  JournalLayoutManager.prototype.show = function() {
    var content_page_preloader_hidden, journal_total_wrapper_block_visible, journal_wrapper_max_height, setJournalVisible;
    journal_total_wrapper_block_visible = {
      visibility: "visible",
      opacity: 1
    };
    content_page_preloader_hidden = {
      display: "none",
      opacity: 0
    };
    journal_wrapper_max_height = {
      "max-height": "none"
    };
    setJournalVisible = function() {
      adaptJournalWidth();
      self.journal_preloader.css(content_page_preloader_hidden);
      self.journal_wrapper.css(journal_wrapper_max_height);
      return self.journal_total_wrapper_block.css(journal_total_wrapper_block_visible);
    };
    return deferredResLoader.ready(function() {
      return window.setTimeout(setJournalVisible, 400);
    });
  };

  return JournalLayoutManager;

})();

module.exports = JournalLayoutManager;

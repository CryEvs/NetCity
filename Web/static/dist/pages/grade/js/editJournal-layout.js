var EditJournalLayoutManager,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

EditJournalLayoutManager = (function() {
  function EditJournalLayoutManager(editjournalWrapper) {
    this.editjournalWrapper = editjournalWrapper;
    this.destroy = bind(this.destroy, this);
    this.init = bind(this.init, this);
    this.handlers = {};
  }

  EditJournalLayoutManager.prototype.init = function() {
    var event, handler, ref;
    if (bowser.msie) {
      $('.editjournal-wrapper .editjournal input').css('padding-top', '1px');
      $('.editjournal-wrapper .editjournal input').focus(function() {
        return $(this).css('padding-top', '1px');
      });
    }
    this.adjustWidth();
    this.scanWideTables();
    this.adjustScroll();
    this.adjustTotalWidth();
    this.addHoverEventHandlerToRow();
    $(window).on('resize.editjournal', this.adjustTotalWidth);
    this.handlers = {
      'scan-wide-tables.editjournal': (function(_this) {
        return function() {
          return _this.scanWideTables();
        };
      })(this),
      'init-floating-scroll.editjournal': (function(_this) {
        return function() {
          return _this.adjustWidth();
        };
      })(this),
      'assignmentsColsChanged': (function(_this) {
        return function() {
          _this.adjustWidth();
          _this.adjustTotalWidth();
          return _this.adjustScroll();
        };
      })(this)
    };
    ref = this.handlers;
    for (event in ref) {
      handler = ref[event];
      $(document).on(event, handler);
    }
    return deferredResLoader.ready(function() {
      $("#editJournal").addClass("ready");
      return $("#legend").addClass("ready");
    });
  };

  EditJournalLayoutManager.prototype.destroy = function() {
    var event, handler, ref;
    $(window).off('resize', this.adjustTotalWidth);
    ref = this.handlers;
    for (event in ref) {
      handler = ref[event];
      $(document).off(event);
    }
    $(document).off("mouseenter.edit-journal-layout");
    $(document).off("focusin.edit-journal-layout");
    return $(document).off("click.edit-journal-layout");
  };

  EditJournalLayoutManager.prototype.adjustWidth = function() {
    var assignment_container, assignment_container_width, assignmentsBlock, assignments_block, totalWidth;
    assignments_block = $(".div-table-safari");
    assignment_container = $(".assignment-container");
    assignment_container_width = 0;
    $(assignment_container).each(function() {
      assignment_container_width = $(this).width();
      return false;
    });
    if (!assignment_container.length) {
      return;
    }
    totalWidth = assignment_container_width * (assignment_container.length - 1);
    assignments_block.width(totalWidth);
    return assignmentsBlock = $('.assignments-block');
  };

  EditJournalLayoutManager.prototype.adjustTotalWidth = function() {
    var assignmentsBlock, div_table_safari, edit_journal, edit_journal_wrapper, pageWidth, width_date_results_block, windowWidth;
    windowWidth = $(window).width();
    pageWidth = $(document).width();
    assignmentsBlock = $('.assignments-block');
    edit_journal = $('.editjournal');
    edit_journal_wrapper = $('.editjournal-wrapper');
    width_date_results_block = '0px';
    width_date_results_block = assignmentsBlock.actual('innerWidth');
    if (Number(windowWidth) > 968) {
      div_table_safari = $('.div-table-safari').width();
      div_table_safari += 555;
      edit_journal.css({
        "width": div_table_safari + 'px'
      });
      if (edit_journal_wrapper.width() < edit_journal.width()) {
        return edit_journal.css({
          "width": 'auto'
        });
      }
    } else {
      $('.editjournal').css({
        "width": 'auto'
      });
      div_table_safari = $('.div-table-safari').width();
      div_table_safari += 555;
      return edit_journal.css({
        "width": div_table_safari + 'px'
      });
    }
  };

  EditJournalLayoutManager.prototype.adjustScroll = function() {
    var mCSB_container_width;
    mCSB_container_width = {
      "width": 0 + "px"
    };
    return $('.mCSB_container').css(mCSB_container_width);
  };

  EditJournalLayoutManager.prototype.scanWideTables = function() {
    if (!this.editjournalWrapper) {
      return;
    }
    return this.editjournalWrapper.filter(".assignments-block:not(.floating-scrolls)").each(function(index, element) {
      var availWidth, factWidth, parent, table;
      table = $(element);
      parent = table.parent();
      factWidth = table.prop("clientWidth");
      availWidth = parent.prop("clientWidth");
      if (factWidth > availWidth) {
        floatingScroll.initScrollableBlock(table);
        return parent.css("overflow-x", "");
      }
    });
  };

  EditJournalLayoutManager.prototype.addHoverEventHandlerToRow = function() {
    var backlightColor, hoverHandler, hoverResultsBlock, setBGColorAttendance, setBGColorResults, setBGColorStudent;
    backlightColor = '#fffacd';
    setBGColorResults = function(element, color) {
      var index;
      color = color || '';
      index = $(element).index();
      return $('.results-block').each(function() {
        var $block;
        $block = $($('div', $(this)).get(index));
        return $block.find('span, input').css('background-color', color);
      });
    };
    setBGColorAttendance = function(element, color) {
      var index;
      color = color || '';
      index = $(element).index();
      return $($('.attendance-block div').get(index)).find('select[name="REASON"]').css('background-color', color);
    };
    setBGColorStudent = function(element, color) {
      var index;
      color = color || '';
      index = $(element).index();
      return $($('div.student').get(index)).css('background-color', color);
    };
    hoverHandler = function($block) {
      setBGColorStudent($block, backlightColor);
      setBGColorResults($block, backlightColor);
      setBGColorAttendance($block, backlightColor);
      return $($block).siblings().each(function() {
        setBGColorStudent(this);
        setBGColorResults(this);
        return setBGColorAttendance(this);
      });
    };
    hoverResultsBlock = function($resblock, enter) {
      if (enter) {
        return $($resblock).find(".comment-btn:not(.readonly)").addClass("visible");
      } else {
        return $($resblock).find(".comment-btn:not(.readonly)").removeClass("visible");
      }
    };
    $(document).on("mouseenter.edit-journal-layout", "div.student, div.results-block div, .attendance-block div", function() {
      return hoverHandler(this);
    });
    $(document).on("mouseenter.edit-journal-layout", "div.results-block", function() {
      return hoverResultsBlock(this, true);
    });
    $(document).on("mouseleave.edit-journal-layout", "div.results-block", function() {
      return hoverResultsBlock(this, false);
    });
    $(document).on("focusin.edit-journal-layout", "div.results-block div input", function() {
      return hoverHandler($(this).parent());
    });
    return $(document).on("click.edit-journal-layout", "select[name='REASON']", function() {
      var $block;
      $block = $(this).parent();
      return hoverHandler($block);
    });
  };

  return EditJournalLayoutManager;

})();

(function($) {
  return $.fn.actual = function() {
    var clone, dim, s;
    if (arguments.length && typeof arguments[0] === 'string') {
      dim = arguments[0];
      $(this).addClass('liActualSize');
    }
    if (this.is(':visible')) {
      return this[dim]();
    }
    clone = $('body').clone().css({
      position: 'absolute',
      top: '-99999px',
      left: '-99999px',
      visibility: 'hidden'
    }).appendTo('body');
    clone.find('*').show();
    s = clone.find('.liActualSize')[dim]();
    clone.remove();
    $(this).removeClass('liActualSize');
    return s;
  };
})($);

module.exports = EditJournalLayoutManager;

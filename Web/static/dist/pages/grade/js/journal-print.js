var JournalExporter;

JournalExporter = (function() {
  var printAttendanceMarks;

  function JournalExporter() {
    this.journal_students = $(".journal-student");
    this.journal_total = $(".journal-total");
    this.journal_marks = $(".journal-marks");
    this.prepareLegend = function() {
      var legends, report;
      report = $('#report');
      if (!report.length) {
        legends = $('div.legend');
        legends.each(function() {});
        if (!$(this).hasClass('print-block')) {
          return $(this).addClass('print-block');
        }
      }
    };
    this.getPreparedHtml = function() {
      var curTr, legend, paintRowCells, paintRowTotalsCells, printHtml, tableJournal, tableMarks, tableMarksTrs, tableStudents, tableStudentsTrs, tableTotals, tableTotalsTrs;
      this.prepareLegend();
      tableStudents = this.journal_students.clone();
      tableTotals = this.journal_total.clone();
      tableMarks = this.journal_marks.clone();
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
      paintRowCells(this.journal_total, tableTotals);
      paintRowTotalsCells(this.journal_marks, tableMarks);
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
  }

  printAttendanceMarks = function(printBlock, copyBlock) {
    return copyBlock.find('table.table-print td span.att-mark').each(function() {
      var val;
      val = $(this).text();
      val = val.replace(/(^|\s)УП(\s|$)/g, '$1Н$2').replace(/(^|\s)НП(\s|$)/g, '$1Н$2').replace(/(^|\s)ОТ(\s|$)/g, '$1Н$2').replace(/(^|\s)ОП(\s|$)/g, '$1$2').replace(/(^|\s)Б(\s|$)/g, '$1Н$2').replace(/(^|\s)ОСВ(\s|$)/g, '$1осв$2');
      return $(this).text(' ' + val);
    });
  };

  JournalExporter.prototype.printJournal = function() {
    this.getPreparedHtml().printUtils().toPrint({
      viewHeader: true,
      processingFunc: [printAttendanceMarks]
    });
  };

  JournalExporter.prototype.exportJournal = function() {
    this.getPreparedHtml().printUtils().toExcel({
      viewHeader: true,
      processingFunc: [printAttendanceMarks]
    });
  };

  return JournalExporter;

})();

module.exports = JournalExporter;

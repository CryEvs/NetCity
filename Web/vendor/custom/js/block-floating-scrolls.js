var floatingScroll;

floatingScroll = (function() {
  var baseInitScrollableBlock, body, html, scanTables, tables, wnd;
  wnd = $(window);
  body = document.getElementsByTagName("body")[0];
  html = document.getElementsByTagName("html")[0];
  tables = null;
  baseInitScrollableBlock = function(block, customBlockDecorator) {
    var adjustScroll, adjustScrollPosition, adjustSideShadows, block_floating_scrolls, mCustomScrollBox, margin_notactive, scrollBarDragger, scrollBarPanel, shadow_left, shadow_right;
    block.addClass("floating-scrolls");
    block_floating_scrolls = $("<div class='block-floating-scrolls'></div>");
    block.wrap(block_floating_scrolls);
    block_floating_scrolls = block.closest(".block-floating-scrolls");
    block_floating_scrolls.mCustomScrollbar({
      axis: "x",
      scrollButtons: {
        enable: false
      },
      theme: "3d",
      scrollbarPosition: "outside",
      keyboard: {
        enable: false
      },
      mouseWheel: {
        enable: false
      },
      callbacks: {
        onTotalScroll: function() {
          return shadow_right.removeClass("shadow_right");
        },
        onTotalScrollBack: function() {
          return shadow_left.removeClass("shadow_left");
        },
        whileScrolling: function() {
          shadow_left.addClass("shadow_left");
          return shadow_right.addClass("shadow_right");
        }
      }
    });
    shadow_left = $("<div class='shadow_left_anchor'></div>");
    shadow_right = $("<div class='shadow_right shadow_right_anchor'></div>");
    block_floating_scrolls.prepend(shadow_left, shadow_right);
    if (customBlockDecorator) {
      customBlockDecorator(block_floating_scrolls);
    }
    mCustomScrollBox = block_floating_scrolls.find(".mCustomScrollBox");
    mCustomScrollBox.addClass("height-auto");
    scrollBarPanel = mCustomScrollBox.siblings(".mCSB_scrollTools_horizontal");
    scrollBarDragger = scrollBarPanel.find(".mCSB_dragger");
    margin_notactive = {
      "margin-left": block.css("margin-left") + "",
      "margin-right": block.css("margin-right") + ""
    };
    adjustScrollPosition = function() {
      var height, margin_left_right, margin_right, margin_top, offset, sumTable, sumTableLeft, width, windowScroll, window_height, window_width;
      window_height = wnd.height();
      window_width = wnd.width();
      offset = block_floating_scrolls.offset();
      height = block_floating_scrolls.outerHeight();
      sumTable = parseInt(offset.top) + parseInt(height);
      width = block_floating_scrolls.outerWidth();
      sumTableLeft = parseInt(offset.left) + parseInt(width);
      margin_right = parseInt(window_width) - sumTableLeft;
      margin_top = parseInt(offset.top);
      margin_left_right = {
        "margin-left": offset.left + "px",
        "margin-right": margin_right + "px"
      };
      windowScroll = window_height + html.scrollTop;
      if (bowser.chrome || bowser.safari) {
        windowScroll = window_height + body.scrollTop;
      }
      if (sumTable <= windowScroll || windowScroll < margin_top + 40) {
        scrollBarPanel.css(margin_notactive);
        return block_floating_scrolls.removeClass("active");
      } else {
        scrollBarPanel.css(margin_left_right);
        return block_floating_scrolls.addClass("active");
      }
    };
    adjustSideShadows = function() {
      return setTimeout(function() {
        var display;
        display = scrollBarPanel.css("display");
        if (display === "none") {
          shadow_right.removeClass("shadow_right");
          shadow_left.removeClass("shadow_left");
          return block.parent().width("auto");
        } else if (display === "block") {
          return shadow_right.addClass("shadow_right");
        }
      }, 100);
    };
    adjustScroll = function() {
      adjustScrollPosition();
      return adjustSideShadows();
    };
    wnd.resize(adjustScroll);
    wnd.scroll(adjustScroll);
    $(document).bind('adjust-floating-scrolls', function() {
      return adjustScroll();
    });
    return adjustScroll();
  };
  scanTables = function() {
    $("table.table").filter("table:not(.floating-scrolls)").each(function(index, element) {
      var availWidth, factWidth, parent, table;
      table = $(element);
      parent = table.parent();
      factWidth = table.prop("clientWidth");
      availWidth = parent.prop("clientWidth");
      if (factWidth > availWidth) {
        baseInitScrollableBlock(table);
        return parent.css("overflow-x", "");
      }
    });
    return $(document).trigger("scan-wide-tables");
  };
  return {
    init: function() {
      tables = $("table.table");
      wnd.resize(scanTables);
      scanTables();
      return $(document).bind('dialog-opened', function() {
        return setTimeout(scanTables, 200);
      });
    },
    initScrollableBlock: baseInitScrollableBlock,
    scanTables: scanTables
  };
})();

$(document).ready(function() {
  return floatingScroll.init();
});

angular.module('uikit.alerts', ["uikit.dialogs"]).provider('$alerts', function() {
  var showGrowl;
  showGrowl = function($dialogs, message, type, textException) {
    var $alert, $cross, $link, $wrap, css, offsetAmount, offsetBlock, options;
    offsetBlock = function(currBlock) {
      var currBlockBottom, currBlockHeight;
      currBlockBottom = $(currBlock).css("bottom");
      currBlockBottom = parseInt(currBlockBottom.substr(0, currBlockBottom.length - 2), 10);
      currBlockHeight = $(currBlock).height();
      $(currBlock).remove();
      $('.bootstrap-growl').each(function() {
        var bottom;
        bottom = $(this).css("bottom");
        bottom = parseInt(bottom.substr(0, bottom.length - 2), 10);
        if (bottom > currBlockBottom) {
          bottom = bottom - currBlockHeight - 10;
          return $(this).css("bottom", bottom.toString() + 'px');
        }

        /*
        						в этом each мы опускаем блоки-алерты,которые располагались выше закрывающегося блока, вниз на высоту, 
        						которая равна высоте блока плюс margin(отступ от соседнего блока)
         */
      });
    };
    options = {
      element: 'body',
      offset: {
        from: "bottom",
        amount: 10
      },
      align: "right",
      width: 250,
      delay: 3000,
      stackup_spacing: 10
    };
    css = {
      "position": "fixed",
      "margin": 0,
      "z-index": "2000",
      "display": "none"
    };
    $alert = $("<div>");
    $wrap = $("<div>");
    $wrap.addClass("bootstrap-growl");
    $alert.attr("class", "alert");
    $alert.css("margin-bottom", "0");
    $alert.addClass("alert-" + type);
    $cross = $("<span class=\"close\">&times;</span>").click(function() {
      offsetBlock($(this).parent().parent());
    });
    $alert.append($cross);
    $alert.append(message);
    offsetAmount = options.offset.amount;
    $(".bootstrap-growl").each(function() {
      return offsetAmount = Math.max(options.offset.amount, parseInt($(this).css(options.offset.from)) + $(this).outerHeight() + options.stackup_spacing);
    });
    css[options.offset.from] = offsetAmount + "px";
    $wrap.css(css);
    $wrap.css("width", options.width + "px");
    $(options.element).append($wrap);
    $wrap.css(options.align, "20px");
    $wrap.fadeIn();
    if (type === 'danger') {
      $wrap.delay(30000);
    } else {
      $wrap.delay(options.delay);
    }
    $wrap.fadeOut(function() {
      offsetBlock(this);
    });
    if (typeof textException !== 'undefined') {
      $link = $('<a></a>');
      $link.append('Узнать подробнее об ошибке...');
      $link.css('font-size', '11px');
      $link.css('cursor', 'pointer');
      $link.click(function() {
        $dialogs.error("Ошибка", textException, false);
        offsetBlock($(this).parent().parent());
        $(this).parent().remove();
      });
      $alert.append('<br/>');
      $alert.append($link);
    }
    $wrap.append($alert);
  };
  this.$get = function($dialogs) {
    return {
      success: function(message) {
        return showGrowl($dialogs, message, 'success');
      },
      error: function(message, textException) {
        return showGrowl($dialogs, message, 'danger', textException);
      },
      info: function(message) {
        return showGrowl($dialogs, message, 'info');
      }
    };
  };
});

var ButtonsPanelCtrl;

ButtonsPanelCtrl = (function() {
  var MutationObserver, actionsWidth, adaptiveButtonPanelHandler, addActionsButtons, buttonsPanel, buttonsPanelTopOffset, cloneButtonsPanel, disposeObservers, fixedButtonPanelHandler, fixedButtonPanelHideBySmallScreen, fixedButtonsPanel, fixedExtraButtons, getMinWidth, minScreenWidth, observers, rightButtonsCnt, wnd;

  function ButtonsPanelCtrl() {}

  wnd = $(window);

  buttonsPanel = null;

  buttonsPanelTopOffset = 0;

  fixedButtonsPanel = null;

  fixedExtraButtons = null;

  rightButtonsCnt = 0;

  actionsWidth = 0;

  minScreenWidth = 600;

  MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  observers = [];

  addActionsButtons = function(_buttonsPanel) {
    var adaptiveButtons, adaptiveButtonsPanel, adaptivePanelMenuContainer, angularBtns, buttonDropDown, rightButtons, rightButtonsPanel;
    rightButtonsPanel = _buttonsPanel.find(".buttons-panel-right").filter(":not(.no-actions)");
    $(".buttons-panel-adaptive").remove();
    adaptiveButtonsPanel = $("<div></div>").addClass("buttons-panel-adaptive").addClass("btn-group").css("float", "right").hide().appendTo(_buttonsPanel);
    adaptiveButtonsPanel.css("margin-right", "0").css("right", "0");
    buttonDropDown = $("<button type=\"button\" />").addClass("btn").addClass("dropdown-toggle").attr("data-toggle", "dropdown").attr("aria-expanded", "false").append("<span class=\"glyphicon glyphicon-menu-hamburger\" />").append(" <span id=\"action\">Действия</span> ").append("<span class=\"caret\" />");
    adaptiveButtonsPanel.append(buttonDropDown);
    adaptivePanelMenuContainer = $("<ul></ul>").addClass("dropdown-menu buttons-panel-right buttons-panel-adaptive-wrapper pull-right").attr("role", "menu").appendTo(adaptiveButtonsPanel);
    rightButtons = rightButtonsPanel.filter(":not(.buttons-panel-adaptive-wrapper)").find('button');
    rightButtonsCnt = rightButtons.length;
    adaptiveButtons = rightButtons.clone();
    adaptiveButtons.appendTo(adaptivePanelMenuContainer).wrap("<li></li>");
    angularBtns = adaptiveButtons.find("button[ng-click]");
    if (angularBtns.length) {
      angularBtns.each(function() {
        var cloneBtn, srcBtn;
        cloneBtn = $(this);
        srcBtn = rightButtons.find("button[ng-click='" + cloneBtn.attr("ng-click") + "']");
        return cloneBtn.click(function() {
          return srcBtn.click();
        });
      });
    }
    return actionsWidth = adaptiveButtonsPanel.outerWidth();
  };

  cloneButtonsPanel = function() {
    var angularBtnGroups, angularBtns, config, extraLeftPanel, extraPanel, getProcessingBody, leftPanel, toUpButtonContainer, upButton;
    $('.buttons-panel-fixed').remove();
    if (!buttonsPanel.is(":visible")) {
      window.buttonsPanelCtrl.init();
    }
    fixedButtonsPanel = buttonsPanel.clone();
    extraPanel = $(".buttons-panel.extra");
    if (extraPanel.length) {
      leftPanel = fixedButtonsPanel.find(".buttons-panel-left");
      extraLeftPanel = extraPanel.find(".buttons-panel-left");
      if (!leftPanel.length) {
        fixedButtonsPanel.prepend(extraLeftPanel.clone());
      } else {
        extraLeftPanel.find("button").each(function() {
          return leftPanel.append($(this));
        });
      }
    }
    angularBtns = fixedButtonsPanel.find("button[ng-click]");
    if (angularBtns.length) {
      config = {
        attributes: true
      };
      getProcessingBody = function(selector) {
        return function() {
          var buttonPanels, cloneBtn, observer, srcBtn;
          cloneBtn = $(this);
          buttonPanels = buttonsPanel;
          if (extraPanel) {
            buttonPanels = buttonPanels.add(extraPanel);
          }
          srcBtn = buttonPanels.find(selector + "[ng-click='" + cloneBtn.attr("ng-click") + "']");
          if (srcBtn.length > 1) {
            srcBtn = buttonPanels.find(selector + "[title='" + cloneBtn.attr("title") + "']");
          }
          if (srcBtn.length === 0) {
            return;
          }
          observer = new MutationObserver(function() {
            return cloneBtn.prop("disabled", srcBtn.prop("disabled"));
          });
          observers.push(observer);
          observer.observe(srcBtn[0], config);
          return cloneBtn.click(function() {
            return srcBtn.click();
          });
        };
      };
      angularBtns.each(getProcessingBody("button"));
      angularBtnGroups = fixedButtonsPanel.find(".btn-group > .dropdown-menu > li > a");
      angularBtnGroups.each(getProcessingBody(".btn-group > .dropdown-menu > li > a"));
    }
    upButton = $.uicontrols.button({
      icon: "circle-arrow-up",
      label: language.Generic.Buttons.kToUp,
      click: function() {
        return $('html, body').animate({
          scrollTop: 0
        }, 600);
      }
    });
    toUpButtonContainer = $("<div class='buttons-up'></div>").append(upButton);
    fixedButtonsPanel.prepend(toUpButtonContainer);
    return fixedButtonsPanel.addClass("buttons-panel-fixed").css({
      visibility: "hidden"
    }).appendTo("body");
  };

  getMinWidth = function() {
    var minWidth, scrollWidth;
    scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    return minWidth = minScreenWidth - scrollWidth;
  };

  fixedButtonPanelHideBySmallScreen = function() {
    var minWidth;
    minWidth = getMinWidth();
    if (fixedButtonsPanel) {
      if (wnd.width() <= minWidth) {
        return fixedButtonsPanel.hide();
      } else {
        return fixedButtonsPanel.show();
      }
    }
  };

  disposeObservers = function() {
    var int, observer;
    for (int in observers) {
      observer = observers[int];
      observer.disconnect();
    }
    return observers = [];
  };

  fixedButtonPanelHandler = function() {
    var adaptiveButtonsPanel, buttonOpts, ind, leftFixedPanel, minWidth;
    minWidth = getMinWidth();
    if (buttonsPanelTopOffset === 0) {
      buttonsPanelTopOffset = buttonsPanel.length ? buttonsPanel.offset().top : 0;
    }
    if (wnd.scrollTop() > buttonsPanelTopOffset) {
      if (wnd.width() <= minWidth) {
        return;
      }
      if (fixedButtonsPanel) {
        return;
      }
      cloneButtonsPanel();
      if (fixedExtraButtons != null ? fixedExtraButtons.length : void 0) {
        leftFixedPanel = fixedButtonsPanel.find(".buttons-panel-left");
        if (!leftFixedPanel.length) {
          leftFixedPanel = $("<div></div>").addClass("buttons-panel-left").insertAfter(fixedButtonsPanel.find(".buttons-up"));
        }
        for (ind in fixedExtraButtons) {
          buttonOpts = fixedExtraButtons[ind];
          leftFixedPanel.append($.uicontrols.button(buttonOpts));
        }
      }
      adaptiveButtonsPanel = fixedButtonsPanel.find(".buttons-panel-adaptive").css("position", "").css("margin-right", "").css("right", "");
      adaptiveButtonPanelHandler(fixedButtonsPanel);
      return fixedButtonsPanel.css({
        visibility: "visible"
      });
    } else if (wnd.scrollTop() <= buttonsPanelTopOffset) {
      if (!fixedButtonsPanel) {
        return;
      }
      return fixedButtonsPanel.fadeOut("700", function() {
        fixedButtonsPanel = null;
        disposeObservers();
        return $(this).remove();
      });
    }
  };

  adaptiveButtonPanelHandler = function(_buttonsPanel) {
    var _actionsSpan, adaptiveButtonsPanel, adaptiveButtonsPanelLength, bpWidth, bplWidth, bprWidth, button_up, leftButtonsPanel, rightButtonsPanel, sumBlocksWidth;
    if (rightButtonsCnt === 0) {
      return;
    }
    leftButtonsPanel = _buttonsPanel.find(".buttons-panel-left");
    rightButtonsPanel = _buttonsPanel.find(".buttons-panel-right");
    adaptiveButtonsPanel = _buttonsPanel.find(".buttons-panel-adaptive");
    if (actionsWidth === 0) {
      actionsWidth = adaptiveButtonsPanel.outerWidth();
      if (actionsWidth === 0) {
        return;
      }
    }
    button_up = _buttonsPanel.find(".buttons-up");
    bpWidth = _buttonsPanel.outerWidth();
    bplWidth = leftButtonsPanel.outerWidth();
    bprWidth = rightButtonsPanel.outerWidth();
    _actionsSpan = adaptiveButtonsPanel.find("#action");
    sumBlocksWidth = bplWidth + bprWidth;
    if (button_up.length) {
      sumBlocksWidth += button_up.outerWidth();
    }
    if (wnd.outerWidth() < 700 || sumBlocksWidth >= bpWidth) {
      if (bplWidth + actionsWidth >= bpWidth) {
        _actionsSpan.hide();
      } else {
        _actionsSpan.show();
      }
      rightButtonsPanel.hide();
      adaptiveButtonsPanel.show();
      adaptiveButtonsPanel.find("ul.dropdown-menu").css("display", "");
    } else {
      rightButtonsPanel.show();
      adaptiveButtonsPanel.hide();
    }
    adaptiveButtonsPanelLength = adaptiveButtonsPanel.has("li").length;
    if (!adaptiveButtonsPanelLength) {
      return adaptiveButtonsPanel.hide();
    }
  };

  ButtonsPanelCtrl.prototype.init = function() {
    var scrollHandler, scrollTimer;
    $(".buttons-panel-fixed").hide();
    buttonsPanel = $(".buttons-panel").filter(":not(.no-actions)");
    if (buttonsPanel.length > 1) {
      buttonsPanel = buttonsPanel.filter(":visible");
      if (!buttonsPanel.length) {
        buttonsPanel = $(".buttons-panel").first();
      } else {
        buttonsPanel = buttonsPanel.first();
      }
    }
    buttonsPanelTopOffset = buttonsPanel.length ? buttonsPanel.offset().top : 0;
    addActionsButtons(buttonsPanel);
    if (!buttonsPanel) {
      return;
    }
    scrollTimer = null;
    scrollHandler = function() {
      var scrollTopBody;
      fixedButtonPanelHandler();
      scrollTopBody = $("body").scrollTop();
      if (scrollTopBody !== 0) {
        return $(".buttons-panel-adaptive").removeClass("open");
      }
    };
    wnd.scroll(function() {
      if (scrollTimer) {
        window.clearTimeout(scrollTimer);
      }
      return scrollTimer = window.setTimeout(scrollHandler, 50);
    });
    wnd.resize(function() {
      fixedButtonPanelHideBySmallScreen();
      adaptiveButtonPanelHandler(buttonsPanel);
      if (wnd.scrollTop() > buttonsPanelTopOffset) {
        return adaptiveButtonPanelHandler(fixedButtonsPanel);
      }
    });
    $(document).bind('pageReady', function() {
      adaptiveButtonPanelHandler(buttonsPanel);
      return actionsWidth = buttonsPanel.find(".buttons-panel-adaptive").outerWidth();
    });
    return adaptiveButtonPanelHandler(buttonsPanel);
  };

  ButtonsPanelCtrl.prototype.addFixedExtraButtons = function(buttons) {
    return fixedExtraButtons = buttons;
  };

  return ButtonsPanelCtrl;

})();

$(document).ready(function() {
  window.buttonsPanelCtrl = new ButtonsPanelCtrl;
  window.buttonsPanelCtrl.init();
});

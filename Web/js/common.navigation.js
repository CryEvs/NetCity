var DoSubmit, OnChangeSelect, SetSelectedMenu, SetSelectedTab, canSubmit, closeChildWindows, getVersionedLink, goBack, goCommonBack, goHistoryBack, haveToLogout, isHaveToLogout, ok, ok_check_db, windowOpen, windowsNotCloseNames;

canSubmit = function() {
  return true;
};

isHaveToLogout = true;

haveToLogout = function() {
  return isHaveToLogout;
};

windowsNotCloseNames = ["_mail", "_forum", "_help", "_qualityAssessmentAnalytics", "_qualityAssessmentAnalyticsEM", "nsxml", "_staffAttest"];

goCommonBack = function() {
  if (typeof Back === "function") {
    return Back();
  } else {
    return goHistoryBack();
  }
};

goHistoryBack = function() {
  return checkForChanges().then(function() {
    isHaveToLogout = false;
    return history.go(-1);
  });
};

goBack = function(form, action) {
  if (leaveAndConfirm()) {
    return checkForChanges().then(function() {
      $('input[type="password"]', form).attr('disabled', 'disabled');
      return DoSubmit(form, action);
    });
  }
};

DoSubmit = function(form, action) {
  if (action && action !== '') {
    form.action = action;
  }
  isHaveToLogout = false;
  return form.submit();
};

ok_check_db = function(formName, action) {
  return extDeferred.when(bIsDBFree, canSubmit).then(function() {
    $(document).trigger('showProcessing');
    setDBBusy();
    return DoSubmit(document.forms[formName], action);
  });
};

ok = function(formName, action, obj) {
  var form;
  if (obj === null) {
    form = document.forms[formName];
  } else {
    form = GetForm(formName, obj);
  }
  return extDeferred.when(canSubmit).then(function() {
    return DoSubmit(form, action);
  });
};

SetSelectedTab = function(tbID, url) {
  var form;
  form = document.forms['MenuForm'];
  if (!form) {
    return;
  }
  if (leaveAndConfirm()) {
    checkForChanges().then(function() {
      var clearUrl, clearedRoute, nowApp, wndto;
      if (tbID === 56) {
        openPopupWindow("_qualityAssessmentAnalytics", (!url.match(/\/$/) ? url + "/" : url) + "?SchoolYearId=" + appContext.yearId + "&UserId=" + appContext.userId, 950, 660);
        return;
      }
      if (tbID === 208) {
        openPopupWindow("_qualityAssessmentAnalyticsEM", (!url.match(/\/$/) ? url + "/" : url) + "?EMId=" + appContext.emId + "&UserId=" + appContext.userId + "&GlobalYearId=" + appContext.globalYearId, 950, 660);
        return;
      }
      if (url.indexOf("window:") === 0) {
        clearUrl = url.substring(7);
        wndto = tbID === 66 ? "_staffAttest" : tbID;
        openPopupWindow(wndto, clearUrl, 1024, 800);
        return;
      }
      if (url.indexOf("/angular/") === 0) {
        isHaveToLogout = false;
        nowApp = $(document).find('base').attr('href');
        if (url.indexOf(nowApp) === 0) {
          isHaveToLogout = false;
          clearedRoute = url.replace(nowApp, "");
          if (typeof window.ChangeAngularRoute === "function") {
            window.ChangeAngularRoute("/" + clearedRoute, url);
            return true;
          }
        }
      }
      form.elements['TabItem'].value = tbID;
      form.action = url;
      isHaveToLogout = false;
      return form.submit();
    });
  }
};

SetSelectedMenu = function(miID, url) {
  var form;
  form = document.forms['MenuForm'];
  if (!form) {
    return;
  }
  if (leaveAndConfirm()) {
    checkForChanges().then(function() {
      form.elements['MenuItem'].value = miID;
      form.elements['TabItem'].value = 0;
      form.action = url;
      isHaveToLogout = false;
      return form.submit();
    });
  }
  return false;
};

OnChangeSelect = function(sFormName, sAction) {
  checkForChanges().then(function() {
    return ok_check_db(sFormName, sAction);
  }).fail(function() {
    document.forms[sFormName].reset();
  });
};

getVersionedLink = function(link) {
  if (typeof appContext === "undefined") {
    return link;
  }
  return link + "?ver=" + appContext.version;
};

windowOpen = function(winOptions) {
  var name, opener, replace, specs, url, wnd;
  url = winOptions.url || '';
  name = winOptions.name || '';
  specs = winOptions.specs || '';
  replace = winOptions.replace || '';
  wnd = winOptions.winChild;
  if (wnd && !wnd.closed) {
    wnd.close();
  }
  wnd = window.open(url, name, specs, replace);
  winOptions.winChild = wnd;
  opener = wnd.opener;
  while (opener && !opener.closed) {
    try {
      opener.childWindows.push(wnd);
      opener = opener.opener;
    } catch (error) {
      break;
    }
  }
  return $(window).on("unload", function(e) {
    if (wnd && !wnd.closed && windowsNotCloseNames.indexOf(wnd.name) < 0) {
      wnd.forceClosing = true;
      return wnd.close();
    }
  });
};

closeChildWindows = function() {
  var k;
  k = childWindows.length;
  while (k > 0) {
    if (childWindows[k - 1] && !childWindows.closed) {
      childWindows[k - 1].close();
    }
    childWindows.pop();
    k = k - 1;
  }
};

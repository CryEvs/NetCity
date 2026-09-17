var em_login_ctrl, getHashNotice, hashCode, hideForm, hidePreloader, initPage, initRecoveryDialog, login_ctrl, setNoticeHash, showForm, showPreloginNoticeDialog;

login_ctrl = null;

em_login_ctrl = null;

deferredResLoader.loadStyle("/vendor/bootstrap/css/bootstrap.min.css");

deferredResLoader.loadScript("/asp/md5r.min.js");

deferredResLoader.loadScript("/js/winauth.js");

deferredResLoader.loadScript("/js/PasswordRecovery.js");

deferredResLoader.loadScript("/vendor/bootstrap/js/bootstrap.min.js");

deferredResLoader.loadScript("/vendor/bootstrap3-dialog/js/bootstrap-dialog.min.js");

showForm = function(form) {
  $('#overlay').css('height', "100%");
  form.fadeIn();
  if (-[1]) {
    return $('#overlay').fadeIn();
  } else {
    return $('#overlay').css('display', 'block');
  }
};

hideForm = function(form) {
  var bVisibleRecoveryForm, bVisibleSelectSchoolForm;
  form.fadeOut();
  bVisibleRecoveryForm = $("form[name=PasswordRecoveryForm]").is(":visible");
  bVisibleSelectSchoolForm = $("form[name=SelectSchoolForm]").is(":visible");
  if (!bVisibleSelectSchoolForm) {
    if (-[1]) {
      return $('#overlay').fadeOut();
    } else {
      return $('#overlay').css('display', 'none');
    }
  }
};

initRecoveryDialog = function() {
  $("[name=recoveryType]").click(function() {
    if (this.value === '1') {
      return $("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"80\" />");
    } else {
      return $("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"11\" />");
    }
  });
  $("#recovery").click(function() {
    showForm($('#message-password-recovery'));
    $(":radio[value='E']").prop("checked", true);
    return $("input[name=recoveryValue]").prop("style", "outline: none").prop("size", 35).prop("maxlength", 80).removeClass();
  });
  $(":radio[name='recoveryType']").click(function() {
    if ($("input[name='recoveryValue']").val() !== "") {
      return $("input[name='recoveryValue']").val("");
    }
  });
  $("#cexit_recovery").click(function() {
    return hideForm($('#message-password-recovery'));
  });
  return $("#message-password-recovery a.button-login").click(function() {
    return window.recoveryPassword();
  });
};

initPage = function(settings) {
  var agt, emLoginFilters, emSubmitFunc, initPromises, schoolLoginFilters, schoolSubmitFunc;
  $('ul.tabs-form').delegate('li:not(.current)', 'click', function() {
    $(this).addClass('current').siblings().removeClass('current').parents('div.sectiontable').find('div.box-form').eq($(this).index()).fadeIn(150).siblings('div.box-form').hide();
    return $.cookie('openForm', $('.current').prop('id'));
  });
  initPromises = [];
  if (settings.schoolLogin) {
    schoolLoginFilters = {
      country: new filter('cid', true, 1, language.Generic.Login.kSelectCountry),
      state: new filter('sid', false, 2, language.Generic.Login.kSelectRegion),
      province: new filter('pid', true, 3, language.Generic.Login.kSelectMunicipality),
      city: new filter('cn', false, 4, language.Generic.Login.kSelectCity),
      funcType: new filter('sft', true, 5, language.Generic.Login.kSelectSchoolType),
      school: new filter('scid', false, 6, language.Generic.Login.kSelectSchool)
    };
    schoolSubmitFunc = function(user, pw) {
      var school, userName;
      school = $('select[name=scid]').val();
      userName = user.val();
      if (school === 0) {
        alert(lngLogin.kFirstYouShouldSelectSchool);
        return false;
      }
      if (userName === "" || pw.val() === "") {
        alert(lngLogin.kEnterLoginAndPassword);
        return false;
      }
      return true;
    };
    login_ctrl = login_ctor();
    $(document).on("click", "#message a.button-login-marker", login_ctrl.login);
    initPromises.push(login_ctrl.init($('#message'), schoolLoginFilters, schoolSubmitFunc, settings.cacheVer));
  }
  if (settings.emLogin) {
    emLoginFilters = {
      country: new filter('em_cid', true, 1, language.Generic.Login.kSelectCountry),
      state: new filter('em_sid', false, 2, language.Generic.Login.kSelectRegion),
      hlevel: new filter('hlevel', true, 3, language.Generic.Login.kSelectHierarchyLevel),
      em: new filter('emId', false, 4, language.Generic.Login.kSelectEM)
    };
    emSubmitFunc = function(user, pw) {
      var emid, userName;
      emid = $('select[name=emid]').val();
      userName = user.val();
      if (emid === 0) {
        alert(lngLogin.kFirstYouShouldSelectSchool);
        return false;
      }
      if (userName === "" || pw.val() === "") {
        alert(lngLogin.kEnterLoginAndPassword);
        return false;
      }
      return true;
    };
    em_login_ctrl = login_ctor();
    $(document).on("click", "#message-em a.button-login-marker", em_login_ctrl.login);
    initPromises.push(em_login_ctrl.init($('#message-em'), emLoginFilters, emSubmitFunc, settings.cacheVer));
  }
  initPromises.push(deferredResLoader.promise());
  extDeferred.when(initPromises).then(function() {
    if (window.preLoaderRemoved) {
      showPreloginNoticeDialog();
      return;
    }
    window.preLoaderRemoved = true;
    hidePreloader(function() {
      return $('input[name="UN"]').focus();
    });
    $('div.centered > div.loginbox').addClass('appear');
    return showPreloginNoticeDialog();
  });
  initRecoveryDialog();
  if (-[1]) {
    return;
  }
  agt = navigator.userAgent.toLowerCase();
  if (agt.substr(agt.indexOf("msie") + 5, 1) === '8') {
    $('#message .info table tr td').css('padding-top', '6px');
    $('#message .info table tr td').css('padding-bottom', '6px');
    $('#message-em .info table tr td').css('padding-top', '6px');
    return $('#message-em .info table tr td').css('padding-bottom', '6px');
  }
};

hidePreloader = function(onHide) {
  var $preloader, $spinner;
  $preloader = $('#login-page-preloader');
  $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  return $preloader.delay(350).fadeOut('slow', function() {
    if (typeof onHide === "function") {
      return onHide();
    }
  });
};

showPreloginNoticeDialog = function() {
  return getHashNotice().then(function() {
    return jsSubmit({
      action: "/webapi/settings/preloginnotice",
      method: "GET",
      auth: false
    }).then(function(settings) {
      var content, opts;
      if (settings.showPopUp) {
        content = "<div class='text-left' style='font-size: 16;'>" + settings.popUpDisplayText + "</div>";
        opts = {
          closable: false,
          buttons: [
            {
              label: settings.popUpButtonText,
              cssClass: "btn-primary center-block",
              action: function(dialog) {
                return setNoticeHash().then(function() {
                  return dialog.close();
                });
              }
            }
          ]
        };
        return $.show.message(content, language.Generic.Common.kAttention, opts);
      }
    });
  });
};

hashCode = function(str) {
  var hash, i, j, ref;
  hash = 0;
  for (i = j = 0, ref = str.length - 1; j <= ref; i = j += 1) {
    hash = ~~(((hash << 5) - hash) + str.charCodeAt(i));
  }
  return hash;
};

getHashNotice = function() {
  var curNoticeHash, deferred;
  curNoticeHash = $.cookie("hash-notice_state");
  deferred = $.Deferred();
  jsSubmit({
    action: "/webapi/settings/preloginnotice",
    method: "GET",
    auth: false
  }).then(function(settings) {
    var hashNotice;
    if (settings.showPopUp) {
      hashNotice = hashCode(settings.popUpDisplayText);
      if (hashNotice !== +curNoticeHash) {
        deferred.resolve();
      }
    }
    return deferred.reject();
  }, function() {
    return deferred.reject();
  });
  return deferred.promise();
};

setNoticeHash = function() {
  var expires;
  expires = 365 * 24 * 60 * 60;
  return jsSubmit({
    action: "/webapi/settings/preloginnotice",
    method: "GET",
    auth: false
  }).then(function(settings) {
    var date, hashPopUpDisplayText, popUpDisplayText;
    popUpDisplayText = settings.popUpDisplayText;
    if (popUpDisplayText) {
      hashPopUpDisplayText = hashCode(popUpDisplayText);
      date = new Date();
      date.setTime(date.getTime() + expires * 1000);
      return $.cookie("hash-notice_state", hashPopUpDisplayText, {
        expires: date
      });
    }
  });
};

$(document).ready(function() {
  var loadTpl, templates;
  window.preLoaderRemoved = false;
  templates = {};
  loadTpl = function(tplName, tplUrl) {
    return jsSubmit({
      action: tplUrl,
      method: 'GET',
      dataType: 'html',
      showProcessing: false,
      auth: false
    }).then(function(html) {
      return templates[tplName] = html;
    });
  };
  return $.when(jsSubmit({
    action: '/webapi/logindata',
    method: 'GET',
    showProcessing: false,
    defaultErrorHandling: false,
    auth: false
  }).fail(function(err) {
    return deferredResLoader.ready(function() {
      var ref;
      hidePreloader();
      if (err != null ? err.responseJSON : void 0) {
        $.show.error((err != null ? (ref = err.responseJSON) != null ? ref.message : void 0 : void 0) || (err != null ? err.statusText : void 0) || language.Generic.Common.kUnexpErr, "Ошибка инициализации формы входа");
        return;
      }
      $.show.error((err != null ? err.statusText : void 0) || language.Generic.Common.kUnexpErr, "Ошибка инициализации формы входа");
      if (err.responseText) {
        return document.open().write(err.responseText);
      }
    });
  })).then(function(response) {
    var currentForm, idpInfoKey, model;
    currentForm = urlHelper.getParameterByName("openForm") || $.cookie("openForm") || "";
    currentForm = currentForm.toLowerCase();
    if (currentForm !== "school" && currentForm !== "em") {
      currentForm = "school";
    }
    if (currentForm === "em" && !response.emLogin) {
      currentForm = "school";
    }
    if (currentForm === "school" && !response.schoolLogin) {
      currentForm = "em";
    }
    idpInfoKey = urlHelper.getParameterByName("idpInfoKey");
    model = {
      enableSms: response.enableSms,
      language: language,
      authPage: "/postlogin.asp",
      productName: response.productName,
      schoolLogin: response.schoolLogin,
      emLogin: response.emLogin,
      severalForms: response.schoolLogin && response.emLogin,
      idpInfoKey: idpInfoKey,
      signatureLogin: response.signatureLogin,
      currentForm: {
        school: currentForm === "school",
        em: currentForm === "em"
      },
      esia: false,
      cacheVer: response.cacheVer,
      windowsAuth: response.windowsAuth
    };
    if (response.esiaLogin) {
      model.esia = {
        mainAuth: response.esiaMainAuth,
        buttonMode: response.esiaButton,
        linkMode: !response.esiaButton,
        linkText: "Вход с учетной записью портала Госуслуг",
        loginPage: response.esiaLoginPage
      };
    }
    if (idpInfoKey) {
      model.bindIdpAccountMessage = language.Generic.Common.kLoginAndBindNetCityAccount.replace("{0}", model.productName).replace("{1}", "ЕСИА");
    }
    return $.when(loadTpl('loginForm', '/vendor/pages/about/templates/loginform.html?ver=' + response.version), loadTpl('extras_header', '/extras/about_header.html?ver=' + response.version), loadTpl('extras_footer', '/extras/about_footer.html?ver=' + response.version)).then(function() {
      var loginFormHtml, template;
      model.extras = {
        header: Handlebars.compile(templates.extras_header)(model),
        footer: Handlebars.compile(templates.extras_footer)(model)
      };
      template = Handlebars.compile(templates.loginForm);
      loginFormHtml = template(model);
      $("div.body").append(loginFormHtml);
      if (model.esia.mainAuth && !idpInfoKey) {
        $(".tabs-form").css("display", "none");
        $(".box-form").css("display", "none");
        $("#showLoginForm").click(function() {
          $(".tabs-form").css("display", "block");
          $('.box-form').filter('.visible').css('display', 'block');
          return $(".box-form-auth").css("display", "none");
        });
      }
      if (!model.severalForms) {
        $(".box-form").css({
          'padding-top': '0px'
        });
        $(".sectiontable").css({
          "border-top": "1px solid #225588"
        });
        $(".message-form").css({
          "padding-top": "40px"
        });
        if (model.schoolLogin) {
          $(".img-logo").attr({
            "src": "/vendor/custom/img/logo_netscool.png"
          });
        }
      }
      return initPage(model);
    });
  });
});

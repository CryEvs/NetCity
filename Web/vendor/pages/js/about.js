var OpenECardWnd, SetECardID, eCardWnd, em_login_ctrl, hideForm, login_ctrl, showForm, signatureLogin, validateRecoveryInput;

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

validateRecoveryInput = function() {
  var charIndex, elMobile, form, recoveryType, recoveryValue, _i, _ref;
  recoveryType = parseInt($("input[name=recoveryType]:checked").val());
  recoveryValue = $("input[name=recoveryValue]").val();
  if (recoveryValue === "") {
    if (recoveryType === constants.PswRecoveryType_MobPhone) {
      processing.close();
      alert(language.Generic.Login.kNotSetPhoneNumber);
    } else {
      alert(language.Generic.Login.kNotSetEmailAdress);
    }
    return false;
  }
  if (recoveryType === constants.PswRecoveryType_MobPhone) {
    form = document.PasswordRecoveryForm;
    elMobile = form.elements['recoveryValue'];
    if (recoveryValue.indexOf(7) !== 0) {
      alert(words.kMobileValueMustStartWith);
      elMobile.focus();
      return false;
    }
    for (charIndex = _i = 0, _ref = recoveryValue.length; 0 <= _ref ? _i <= _ref : _i >= _ref; charIndex = 0 <= _ref ? ++_i : --_i) {
      if (isNaN(recoveryValue.charAt(charIndex))) {
        alert(words.kFieldMobileHasOnlyNumbers);
        elMobile.focus();
        return false;
      }
    }
    if (recoveryValue.length !== 11) {
      alert(words.kMobileLenMustBe);
      elMobile.focus();
      return false;
    }
  }
  return true;
};

if (constants.bECardAuthentication) {
  eCardWnd = null;
  OpenECardWnd = function() {
    var info, isChrome, isIE, school, url, winOptions;
    school = $('select[name=SCID]').val();
    if (school <= 0) {
      alert(lngLogin.kFirstYouShouldSelectSchool);
      return;
    }
    info = navigator.userAgent;
    isIE = info.indexOf("MSIE") > 0;
    isChrome = info.indexOf("Chrome") > 0;
    if (!isIE && !isChrome) {
      alert(lngLogin.kLoginByECardPossibleViaIEorChrome);
      return;
    }
    url = urlHelper.makeUrl("ECardLogin/ECard.asp");
    winOptions = {
      url: url,
      name: '_ecard',
      specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=700,height=420',
      winChild: eCardWnd
    };
    windowOpen(winOptions);
    eCardWnd = winOptions.winChild;
    eCardWnd.name = '_ecard';
    if (eCardWnd) {
      return center(eCardWnd, 700, 420);
    }
  };
  SetECardID = function(sECardID) {
    var elUN;
    eCardWnd.close();
    eCardWnd = null;
    elUN = $('input[name=UN]', '#message')[0];
    if (sECardID === '') {
      elUN.value = '';
      elUN.disabled = false;
      $('input[name=LoginType]').val(constants.loginType.School);
      alert(lngLogin.kECardIDWasReset);
    } else {
      elUN.value = lngLogin.kECardIDWasRead;
      elUN.disabled = true;
      $('input[name=LoginType]').val(constants.loginType.ECardSchool);
      alert(lngLogin.kECardIDWasRead);
    }
    return $('input[name=ECardID]').val(sECardID);
  };
}

if (constants.kUseSignatureLogon) {
  signatureLogin = function() {
    var emid;
    emid = $('select[name=EMID]').val();
    return DoSubmit(document.forms['EmForm'], "/SignatureLogin.asp?EMID=" + emid);
  };
}

login_ctrl = null;

em_login_ctrl = null;

$(document).ready(function() {
  var agt, emLoginFilters, emSubmitFunc, preLoaderRemoved, schoolLoginFilters, schoolSubmitFunc;
  preLoaderRemoved = false;
  $(document).bind('login_form_ready', function() {
    var $preloader, $spinner, setUserNameFocus;
    if (preLoaderRemoved) {
      return;
    }
    preLoaderRemoved = true;
    setUserNameFocus = function() {
      return $('input[name="UN"]').focus();
    };
    $preloader = $('#login-page-preloader');
    $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow', function() {
      return setUserNameFocus();
    });
    return $('div.centered > div.loginbox').addClass('appear');
  });
  if (constants.schoolLogin) {
    schoolLoginFilters = {
      country: new filter('CID', true, 1, language.Generic.Login.kSelectCountry),
      state: new filter('SID', false, 2, language.Generic.Login.kSelectRegion),
      province: new filter('PID', true, 3, language.Generic.Login.kSelectProvince),
      city: new filter('CN', false, 4, language.Generic.Login.kSelectCity),
      funcType: new filter('SFT', true, 5, language.Generic.Login.kSelectSchoolType),
      school: new filter('SCID', false, 6, language.Generic.Login.kSelectSchool)
    };
    schoolSubmitFunc = function(user, pw, pw2) {
      var school, userName;
      school = $('select[name=SCID]').val();
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
    login_ctrl.init($('#message'), schoolLoginFilters, schoolSubmitFunc);
  }
  if (constants.emLogin) {
    emLoginFilters = {
      country: new filter('EM_CID', true, 1, language.Generic.Login.kSelectCountry),
      state: new filter('EM_SID', false, 2, language.Generic.Login.kSelectRegion),
      hlevel: new filter('HLEVEL', true, 3, language.Generic.Login.kSelectHierarchyLevel),
      em: new filter('EMID', false, 4, language.Generic.Login.kSelectEM)
    };
    emSubmitFunc = function(user, pw, pw2) {
      var emid, userName;
      emid = $('select[name=EMID]').val();
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
    em_login_ctrl.init($('#message-em'), emLoginFilters, emSubmitFunc);
  }
  $('ul.tabs-form').delegate('li:not(.current)', 'click', function() {
    $(this).addClass('current').siblings().removeClass('current').parents('div.sectiontable').find('div.box-form').eq($(this).index()).fadeIn(150).siblings('div.box-form').hide();
    return $.cookie('openForm', $('.current').prop('id'));
  });
  $("[name=recoveryType]").click(function() {
    if (this.value === '1') {
      return $("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"" + constants.kMaxLengthEmail + "\" />");
    } else {
      return $("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"11\" />");
    }
  });
  $("#recovery").click(function() {
    showForm($('#message-password-recovery'));
    return $(":radio[value='E']").prop("checked", true);
  });
  $(":radio[name='recoveryType']").click(function() {
    if ($("input[name='recoveryValue']").val() !== "") {
      return $("input[name='recoveryValue']").val("");
    }
  });
  $("#cexit_recovery").click(function() {
    return hideForm($('#message-password-recovery'));
  });
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
});

//# sourceMappingURL=about.js.map

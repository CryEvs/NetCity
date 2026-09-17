(function() {
  return $(document).ready(function() {
    var buttonsPanel, form, formGroup, formGroupClone, wnd;
    wnd = $(window);
    form = $(".form-edit");
    if (form.length !== 1) {
      return;
    }
    buttonsPanel = $(".buttons-panel");
    formGroup = form.find('.form-group:first');
    if (formGroup.closest(".panel-body").length > 0) {
      return;
    }
    formGroupClone = formGroup.clone();
    formGroupClone.find('label.control-label').empty().addClass("hidden-sm").addClass("hidden-xs");
    buttonsPanel.detach();
    formGroupClone.find('div:first').empty().append(buttonsPanel);
    return formGroupClone.insertBefore(formGroup);
  });
})();

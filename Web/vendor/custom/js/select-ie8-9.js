if (bowser.msie && (bowser.version === '9.0' || bowser.version === '8.0')) {
  $(document).ready(function() {
    var selectAdd;
    selectAdd = $("select").parent();
    $(selectAdd).each(function() {
      $(this).children("select").wrap("<div class='select-main'></div>");
      return $(this).children(".select-main").prepend('<p>');
    });
    $('select').each(function() {
      return $(this).siblings('p').text($(this).children('option:selected').text());
    });
    return $('select').change(function() {
      return $(this).siblings('p').text($(this).children('option:selected').text());
    });
  });
}

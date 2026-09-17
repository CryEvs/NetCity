$(window).on('load', function() {
  var $preloader, $spinner;
  $preloader = $('#page-preloader');
  $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  return $preloader.delay(350).fadeOut('slow');
});

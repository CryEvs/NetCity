(function() {
  return $(document).ready(function() {
    var autoOpenMenuMode, breakPointWidth, btn_menu, link_menu, menuItems, removeOpenMenu, wnd_size;
    wnd_size = $(window);
    breakPointWidth = 664;
    btn_menu = $(".btn-menu");
    btn_menu.on("click", function() {
      if ($(window).width() < breakPointWidth) {
        if ($(".navbar-inner").is(":hidden")) {
          return $(".navbar-inner").slideDown("slow");
        } else {
          return $(".navbar-inner").slideUp("slow");
        }
      }
    });
    link_menu = $(".nav > .dropdown > a");
    link_menu.on("click", function(e) {
      var element_li;
      e.stopPropagation();
      if ($(window).width() < breakPointWidth) {
        element_li = $(this).parent('li');
        if (element_li.hasClass('open-menu')) {
          element_li.removeClass('open-menu');
          element_li.find('li').removeClass('open-menu');
          return element_li.find('ul').slideUp();
        } else {
          element_li.addClass('open-menu');
          element_li.children('ul').slideDown();
          element_li.siblings('li').children('ul').slideUp();
          element_li.siblings('li').removeClass('open-menu');
          element_li.siblings('li').find('li').removeClass('open-menu');
          return element_li.siblings('li').find('ul').slideUp();
        }
      }
    });
    autoOpenMenuMode = true;
    menuItems = $(".navbar-nav > li");
    menuItems.on("mouseleave", function(evt) {
      return $(evt.currentTarget).removeClass("open");
    });
    menuItems.on("mouseover", function(evt) {
      if (autoOpenMenuMode && $(window).width() > breakPointWidth) {
        return $(evt.currentTarget).addClass("open");
      }
    });
    menuItems.on("click", function() {});
    $(".navbar-nav").on("mouseleave", function(evt) {});
    removeOpenMenu = function() {
      var menu_Items;
      if (wnd_size.width() > breakPointWidth) {
        menu_Items = $(".navbar-nav > li");
        if (menu_Items.hasClass('open-menu')) {
          menu_Items.children('.open-menu ul').css("display", "no");
        }
        return menu_Items.removeClass("open-menu");
      }
    };
    return wnd_size.resize(removeOpenMenu);
  });
})();

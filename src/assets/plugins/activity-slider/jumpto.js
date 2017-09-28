/*标题内容同步滚动*/ ! function($) {
  var defaults = {
    firstLevel: "> h2",
    secondLevel: false,
    innerWrapper: ".jumpto-block",
    offset: 400,
    animate: 1000,
    navContainer: false,
    anchorTopPadding: 20,
    showTitle: "Jump To",
    closeButton: true
  };
  var jumpto = function(options) {
    var settings = $.extend({}, defaults, options),
      el = $(this),
      html = "",
      block = $(settings.innerWrapper),
      selectors = "",
      title = "",
      close = "";
    el.addClass("jumpto-cotainer");

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + ($(window).height() / 4);
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      if ($(elem).next().is(settings.mainTag)) {
        elemBottom = $(elem).next().offset().top + $(elem).next().height();
      }
      return ((elemBottom >= docViewTop) && (elemTop <= docViewTop + 25));
    }
    //移到上面的时候就变成file-open白色的图片
    redrawMenu = function() {
      $(selectors.slice(0, -2)).each(function(index) {
        if (isScrolledIntoView($(this))) {
          // console.log($(this).attr("id"),$("a[href='#"+$(this).attr("id")+"']").siblings());
          $(".jumpto-subnav a").removeClass("active").parent().find("a[href='#" + $(this).attr("id") + "']").addClass("active");

          if ($("a[href='#" + $(this).attr("id") + "']").parent().parent().hasClass("jumpto-first")) {
            $("a[href='#" + $(this).attr("id") + "']").parent().siblings().find('img').attr('src', '/dbus/img/shy_imgs/filefolder-close.png');
            $("a[href='#" + $(this).attr("id") + "']").find('img').attr('src', '/dbus/img/shy_imgs/filefolder-open2.png');
            $("a[href='#" + $(this).attr("id") + "']").closest(".jumpto-first").find(".jumpto-second").hide()
          }
          if ($("a[href='#" + $(this).attr("id") + "']").parent().find(".jumpto-second")) {
            $('.jumpto-second>li>a>img').attr('src', '/dbus/img/shy_imgs/file.png');
            $("a[href='#" + $(this).attr("id") + "']").parent().find(".jumpto-second").show()
          }
          if ($("a[href='#" + $(this).attr("id") + "']").parent().parent().hasClass("jumpto-second")) {
            $("a[href='#" + $(this).attr("id") + "']").parent().parent().parent().find('img').attr('src', '/dbus/img/shy_imgs/filefolder-close.png');
            $("a[href='#" + $(this).attr("id") + "']").parent().parent().siblings().find('img').attr('src', '/dbus/img/shy_imgs/filefolder-open.png');
            $("a[href='#" + $(this).attr("id") + "']").parent().siblings().find('img').attr('src', '/dbus/img/shy_imgs/file.png');
            $("a[href='#" + $(this).attr("id") + "']").find('img').attr('src', '/dbus/img/shy_imgs/file2.png');
            $("a[href='#" + $(this).attr("id") + "']").closest(".jumpto-second").show();
          }
        }
      });
      if ($(document).scrollTop() > settings.offset) {
        $(".jumpto-subnav").removeClass("bottom").addClass("fixed");
      } else {
        $(".jumpto-subnav").removeClass("bottom fixed");
      }
      if ($(document).scrollTop() > el.outerHeight(true)) {
        $(".jumpto-subnav").addClass("bottom fixed");
      }
    }
    block.find(settings.firstLevel).each(function(index) {
      var b = $(this),
        i = index,
        inner_html = "";
      if (b.parent().find(settings.secondLevel).length > 0) {
        inner_html += "<ul class='jumpto-second'>"
        b.parent().find(settings.secondLevel).each(function(index) {
          var id = "jumpto_" + i + "_" + index;
          $(this).attr("id", id);
          link_to = "<a href='#" + id + "'>" + $(this).text() + "</a>"
          inner_html += "<li>" + link_to + "</li>"
          selectors += "#" + id + ", ";
        });
        inner_html += "</ul>"
        var id = "jumpto_" + i;
        b.attr("id", id);
        link_to = "<a href='#" + id + "'>" + b.text() + "</a>"
        selectors += "#" + id + ", ";
        html += "<li>" + link_to + inner_html + "</li>"
      } else {
        var id = "jumpto_" + i;
        link_to = "<a href='#" + id + "'>" + b.text() + "</a>"
        b.attr("id", id);
        selectors += "#" + id + ", ";
        html += "<li>" + link_to + "</li>"
      }
    });
    $(window).scroll(function() {
      redrawMenu();
    });
    $('.table-switch').click(function() {
      if ($(this).attr('src') == '/dbus/img/shy_imgs/table-close.png') {
        $(this).attr('src', '/dbus/img/shy_imgs/table-open.png');
        $(this).parent().next().show();
        $(this).parent().parent().find('table').hide();
      } else {
        $(this).attr('src', '/dbus/img/shy_imgs/table-close.png');
        $(this).parent().next().hide();
        $(this).parent().parent().find('table').show();
      }
    });
  }
}(window.jQuery);
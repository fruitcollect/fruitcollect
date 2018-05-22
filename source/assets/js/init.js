function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var here_before = getCookie("fruitcollect-before");
  if (!here_before) {
    $('#growfunding-modal').modal({
      show: true,
    });
    document.cookie = "fruitcollect-before=true; expires=Tue, 3 July 2018 12:00:00 UTC; path=/";
  }
}

$(document).ready(function(){
  checkCookie();
});


jQuery(function($){
  "use strict";

  var GAEA = window.GAEA || {};

  /* ==================================================
     Scroll to Top
     ================================================== */
  GAEA.scrollToTop = function(){
    var windowWidth = $(window).width(),
        didScroll = false;

    var $arrow = $('#back-to-top');

    $arrow.click(function(e) {
      $('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
      e.preventDefault();
    })

    $(window).scroll(function() {
      didScroll = true;
    });

    setInterval(function() {
      if( didScroll ) {
        didScroll = false;

        if( $(window).scrollTop() > 200 ) {
          $arrow.fadeIn();
        } else {
          $arrow.fadeOut();
        }
      }
    }, 250);
  }

  $(document).ready(function(){
    GAEA.scrollToTop();
  });

  // Heading Styles
  $(".title").each(function(){
    $(this).wrapInner( "<div class='title-border'></div>");
  });

  /* $('video#presentation').click(function(){
   *   $(this).get(0).paused ? $(this).get(0).play() : $(this).get(0).pause();
   * });*/

});

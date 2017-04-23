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

  $('video#presentation').click(function(){
    $(this).get(0).paused ? $(this).get(0).play() : $(this).get(0).pause();
  });

});

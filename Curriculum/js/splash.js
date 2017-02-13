if (typeof window.splash == 'undefined') {
	window.splash = {};
}

if (!splash) {
	splash = {};
}

splash = $.extend(splash,

(function() {
	"use strict";

  const TIME_FADE_OUT_INFO= 3000;
  const TIME_FADE_OUT_VIEW= 3000;
  const TIME_TRANSITION= 400;

	function _startSplash() {
    $('#page-loader').delay(TIME_FADE_OUT_VIEW).fadeOut(TIME_TRANSITION, function(){
      //Nothing
    });

    setTimeout(function(){
    	$('#loader-name').addClass('loader-left');
    	$('#loader-job').addClass('loader-right');
    	$('#loader-animation').addClass('loader-hide');
    }, TIME_FADE_OUT_INFO);
	}

	/***************************************************************************
	 *
	 * Metodos publicos
	 *
	 **************************************************************************/
	return {
		startSplash : _startSplash
	};

}())

);

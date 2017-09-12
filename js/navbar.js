 // Animations for Navigation Bar

 $(window).scroll(function(){
 	var wScroll=$(this).scrollTop();
 if (wScroll>=3000) {
   wScroll= -(wScroll)+6000;
 }
	  $('.one').css({
	    'transform' : 'rotate('+wScroll /110 +'deg)'
	  });

	  $('.two').css({
      "margin-left": 100-wScroll/30,
	    'transform' :'rotate(-'+wScroll /20 +'deg)'
	  });

	  $('.three').css({
	    'transform' : 'rotate('+wScroll/5+'deg)'
	  });
 })

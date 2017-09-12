// Carusel- Promo page

$(window).ready(function(){
	//carusel
	$(".slide").on("click", function(){
		$(this).css('display', 'none');
		$(this).next().css('display', 'block');
		if( $(this).is(".nr15")){
			$(".nr15").css('display', 'block');
		}
	})

//first slide motions
	$('.nr1').on('mouseover', function(){
		$('#motion1').css('display', 'none');
		$('.motion2').fadeIn();
	})

});

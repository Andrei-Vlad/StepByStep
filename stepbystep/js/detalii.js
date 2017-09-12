// Detalii page
	$(document).ready(function(){
			$("#tematica").click(function(){
				$(".Tematica").slideToggle();
		 if($(".Tarife").is(":visible")){
			$(".Tarife").slideToggle();
			}
			 });
	 	 $("#tarife").click(function(){
		 		$(".Tarife").slideToggle();
		 if($(".Tematica").is(':visible')){
			 $(".Tematica").slideToggle();
		 }
	 });
	});

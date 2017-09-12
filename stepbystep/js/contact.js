// Contacte page
$(document).ready(function(){
    $(".formulare").click(function(){
      $(".links").slideToggle();
   if($(".paralaxa").is(":visible")){
    $(".paralaxa").slideToggle();
    }
     });
   $(".contact").click(function(){
      $(".paralaxa").slideToggle();
   if($(".links").is(':visible')){
     $(".links").slideToggle();
   }
 });
});

// Start page
$(window).on("mousemove",function(event){
  var mouseX = event.pageX,
      mouseY = event.pageY;


  $('img').css({
   'padding-right': (mouseX/60),
  'padding-bottom': (mouseY/30),
   'padding-left': (mouseX/60),
   'padding-top': (mouseY/30),
    })
})

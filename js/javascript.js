// LOADER
$(window).on('load', function() {
  $(".loader").fadeOut(2000);
});


$(document).ready(function() {

  $(function() {
    for(let i = 1; i <= 10; i++) {
        $('.info' + i).hide();
        $('.normal' + i).hover(function() { 
        $('.info' + i).toggle();  
      });
    };
  });


  // SMOOTH SCROLLING
  $(".first a").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // animate
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 300, function(){
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = this.hash;
      });
  });


  // SCROLL TO TOP BUTTON
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $('#button').fadeIn();
    } else {
      $('#button').fadeOut();
    }
  });
  $("#button").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });


  // AOS
  AOS.init({
    duration: 3000,
  });


});
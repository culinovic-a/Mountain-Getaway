// LOADER
$(window).on('load', function() {
  $(".loader").fadeOut(2000);
});


$(document).ready(function() {

  // Hover on icons - front page
  $(function() {
    $('.info1').hide();
    $('.normal1').hover(function() { 
      $('.info1').toggle(); 
    });
  });
  $(function() {
    $('.info2').hide();
    $('.normal2').hover(function() { 
      $('.info2').toggle(); 
    });
  });
  $(function() {
    $('.info3').hide();
    $('.normal3').hover(function() { 
      $('.info3').toggle(); 
    });
  });
  $(function() {
    $('.info4').hide();
    $('.normal4').hover(function() { 
      $('.info4').toggle(); 
    });
  });
  $(function() {
    $('.info5').hide();
    $('.normal5').hover(function() { 
      $('.info5').toggle(); 
    });
  });
  $(function() {
    $('.info6').hide();
    $('.normal6').hover(function() { 
      $('.info6').toggle(); 
    });
  });
  $(function() {
    $('.info7').hide();
    $('.normal7').hover(function() { 
      $('.info7').toggle(); 
    });
  });
  $(function() {
    $('.info8').hide();
    $('.normal8').hover(function() { 
      $('.info8').toggle(); 
    });
  });
  $(function() {
    $('.info9').hide();
    $('.normal9').hover(function() { 
      $('.info9').toggle(); 
    });
  });
  $(function() {
    $('.info10').hide();
    $('.normal10').hover(function() { 
      $('.info10').toggle(); 
    });
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
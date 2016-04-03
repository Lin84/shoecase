$(document).ready(function(){	
// ********************************************************************************
$(".navbar-toggle").on("click",function(){
	$(".navbar-collapse").slideToggle();
})


  $(window).resize(function() {
    /* to fix problem with hiding problem of navbar-collapse after navbar change for bigger screen*/
      if ($(window).width() > 752) {
          $(".navbar-collapse").show();
      }
      if ($(window).width() <= 752) {
          $(".navbar-collapse").hide();
      }
  });

// better solution is up, using resize function and if($(window).width)
 // auto reload to reappear the navar after using auto hide navigation bar, when screen is smaller then 768px

// function reload() {
//   original code from website: autoreload with setTimeout function
//      setTimeout(function() {
//         location.reload();
//     }, 1000);
// }

// function reload() {
//     location.reload();
// }

// var width = $(window).width(); 
// $(window).resize(function() {
//     if (width > 769 && $(window).width() < 769) {
//         reload();
//     }
//     else if (width < 769 && $(window).width() > 769) {
//         reload();
//     }
// });

// ********************************************************************************
$("#logo").on("click",function(){ /* click on logo to scroll to top of website*/
	$("html,body").stop().animate({scrollTop: 0});
})
// ********************************************************************************
// click on navbar will animate-scroll to chosen menu section
  $("a").on("click", function(e) {
    var msg = $(this).attr("href");
    var menu = $("nav");
    var header=$(".navbar-header")
    if($(window).width()<768){
    	$(".collapse").slideToggle();/* otherwise .collapse will disappears after click on section*/
										// minus 40 is 10px top and bottom padding of wrap and container 
										// remove header height because of using autohiding navigation bar
    	$("html, body").stop().animate({ scrollTop: $(msg).offset().top /*- header.height() -40*/}, 500);
    }
    else{
	    $("html, body").stop().animate({ scrollTop: $(msg).offset().top /*- menu.height()*/ }, 500);

    } 
    e.preventDefault();/* prevent browser from reload after slick on "a" element*/

   });
 // no need to put stop(), 
 
// ********************************************************************************

if(document.addEventListener){
/*  to detect invalid inputed email address, working only with element button with type submit*/
    document.addEventListener('invalid', function(e){
		e.target.className += ' invalid';
    }, true);
}
// ********************************************************************************


  $(function(){ 
	/*smooth auto-hiding navigation bar with scrollTop and slide  up and down*/ 
    var scroll = $(document).scrollTop();
    var headerHeight = $('#navbar').outerHeight();
    
    $(window).scroll(function() {
      var scrolled = $(document).scrollTop();

		/*original code from website*/
		// if (scrolled > headerHeight){
		// // $('#navbar').addClass('off-canvas');
		// $('#navbar').slideUp();
		// } else {
		// // $('#navbar').removeClass('off-canvas');
		// $('#navbar').slideDown();
		// }

	    if (scrolled > scroll && scrolled > headerHeight){
	     // $('#navbar').removeClass('fixed');
	     $("#navbar").slideUp();
	    } else {
	    // $('#navbar').addClass('fixed');
	    $("#navbar").slideDown();
	    }             
      scroll = $(document).scrollTop();  
     });       
});

// ********************************************************************************

})


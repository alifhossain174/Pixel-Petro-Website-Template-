$('#full_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
	arrows : false,
	fade: true,
  cssEase: 'linear',
	autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
		  fade: true,
  cssEase: 'linear',
		  autoplay: true,
  autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  infinite: true,
		  fade: true,
  cssEase: 'linear',
		  autoplay: true,
  autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  infinite: true,
		  fade: true,
  cssEase: 'linear',
		  autoplay: true,
  autoplaySpeed: 2000,
      }
    }
  ]
});






$('.slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
	arrows : false,
	autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
		  autoplay: true,
  autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  infinite: true,
		  autoplay: true,
  autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		  infinite: true,
		  autoplay: true,
  autoplaySpeed: 2000,
      }
    }
  ]
});




var mixer = mixitup('.filter_cls');





$nav = $('.full_nav').offset().top;


$('.top_btn').click(function(){
	
	
	$('html,body').animate({
		
		scrollTop : 0
		
	}, 1000);
	
	
});


$(window).scroll(function(){
	

	
	$scrolling = $(this).scrollTop();
	
	if($scrolling >= $nav){
		
		$('.full_nav').addClass('fixedmenu');
		
	}
	else{
		
		$('.full_nav').removeClass('fixedmenu');
	}
	
	
	
		// Top button Start
	
	if($scrolling >= 400){
		
	 	$('.top_btn').fadeIn();  
	   
	 }
	else{
		
		$('.top_btn').fadeOut();
		
	}
	
	
});



//preloader start

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});









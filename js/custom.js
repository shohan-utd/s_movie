
$("#active_car").owlCarousel({
	items :5,
	margin:100,
	loops:true,
	nav	:true,
	dots:false,
	
}); 

$("#iso_active").owlCarousel({
	items :8,
	loops:true,
	nav	:true,
	dots:false,
	
}); 




$(".iso_menu ul li").click(function(){
	var selector = $(this).attr("data-filter");
	$(".iso_ac").isotope({
		filter : selector,
	});
});


$(".iso_ac").isotope();



$('.video_test').magnificPopup({
  type: 'iframe',
  iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', 

  patterns: {
    youtube: {
      index: 'youtube.com/',

      id: 'v=', 

      src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'
    },
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'
    }

   
  },

  srcAction: 'iframe_src',
}
});

$(".iso_menu ul li").click(function(){
	$(".iso_menu ul li").removeClass("active");
	$(this).addClass("active");
});



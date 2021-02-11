
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items : 1,
		responsive : {
			// breakpoint from 0 up
			0 : {
				dots:true,
				
			},
			// breakpoint from 480 up
			992 : {
				dots:false,
				nav:true,
				navText:['<img src="img/arrow-left.png">','<img src="img/arrow-right.png">'],
				navSpeed:1500
			},
			// breakpoint from 768 up
			768 : {
			}
		}

	});

	$(".dem__button").click(function(){
		setTimeout(function(){
			$('.owl-loaded ').css("display", "block");
			$('.dem').css("display", "none");
		  }, 1000);

	  });

  });

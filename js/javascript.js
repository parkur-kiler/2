	
	$(document).ready(function () {
			var link = $('.burger-link');
			var link_active = $('.burger-link_active');
			var navigation = $('.mobile-nav');
			var nav_active = $('.nav-active');

			link.click(function(){
				link.toggleClass('burger-link_active');
				navigation.toggleClass('nav-active');
			});

			link_active.click(function(){
				navigation.removeClass('nav-active');
			});
		});

		$(document).ready(function(){
			$(".nav").on("click","a", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1500);
			});
		});
	
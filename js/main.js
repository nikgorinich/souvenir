$(function(){
  /* Parallax */
  var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	var scene1 = document.getElementById('scene1');
	var parallax = new Parallax(scene1);

	var scene2 = document.getElementById('scene2');
	var parallax = new Parallax(scene2);

	var scene3 = document.getElementById('scene3');
	var parallax = new Parallax(scene3);

	var scene4 = document.getElementById('scene4');
	var parallax = new Parallax(scene4);

	var scene5 = document.getElementById('scene5');
	var parallax = new Parallax(scene5);

	var scene6 = document.getElementById('scene6');
	var parallax = new Parallax(scene6);

	/* fullPage */
	$('#fullpage').fullpage({
		sectionSelector: '.page',
		menu: '#main-nav',
	});

	/* matchHeight */
	$('.units__text').matchHeight();

  /* Slick Slider */
	$('.section-slider').slick({
		nextArrow: '<button type="button" class="section__slick-btn section__slick-next"></button>',
		prevArrow: '<button type="button" class="section__slick-btn section__slick-prev"></button>',
		infinite: false,
		slidesToShow: 1,
		sladesToScroll: 1,
	});

	$('.trust-slider').slick({
		nextArrow: '<button type="button" class="trust__slick-btn trust__slick-next"></button>',
		prevArrow: '<button type="button" class="trust__slick-btn trust__slick-prev"></button>',
		infinite: false,
		slidesToShow: 5,
		sladesToScroll: 1,
	});

  /* Scroll Down */
	$('.scrolldown__link').click(function () {
		$('html, body').animate({
			scrollTop: $('.about').offset().top
		}, 700);
	});
});
import $ from "jquery";
import "slick-slider";

$('.js-leader-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: "<a href=\"javascript:void(0);\" class='leader__arrow leader__arrow_prev'></a>",
	nextArrow: "<a href=\"javascript:void(0);\" class='leader__arrow leader__arrow_next'></a>",
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	dots: true,
	dotsClass: "leader__dots",
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: false
			}
		}
	]
});
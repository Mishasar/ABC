import $ from 'jquery';
import 'slick-slider';
import 'select2/dist/js/select2.full.js';

$(document).ready(function() {

	$('.js-leader-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<a href="javascript:void(0);" class=\'leader__arrow leader__arrow_prev\'></a>',
		nextArrow: '<a href="javascript:void(0);" class=\'leader__arrow leader__arrow_next\'></a>',
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		dots: true,
		dotsClass: 'leader__dots',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
				},
			},
		],
	});

	$('.js-spec-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		prevArrow: '<a href="javascript:void(0);" class=\'spec__arrow spec__arrow_prev\'></a>',
		nextArrow: '<a href="javascript:void(0);" class=\'spec__arrow spec__arrow_next\'></a>',
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		dots: true,
		dotsClass: 'spec__dots',
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
				},
			},
		],
	});

	$('.js-select').select2({
		theme: 'custom',
		width: '100%',
		minimumResultsForSearch: -1,
		placeholder: "Время строительства"
	});

	$('.js-faq-title').on('click', function(e) {
		const $el = $(e.target);
		$el.toggleClass('faq__title_opened');
		$el.siblings('.js-faq-inner').slideToggle();
	});
});
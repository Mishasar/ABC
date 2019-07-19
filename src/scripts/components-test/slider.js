import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";
import "slick-carousel";


class Slider extends BaseComponent {

    init() {
        this.$element.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: "<a href=\"javascript:void(0);\" class='partners__prev arrow arrow_prev'></a>",
            nextArrow: "<a href=\"javascript:void(0);\" class='partners__next arrow arrow_next'></a>",
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            slide: ".js-slide",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                    }
                }
            ]
        });
    }

}

export {Slider};
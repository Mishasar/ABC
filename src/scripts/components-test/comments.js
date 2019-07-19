import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";
import "slick-carousel";


class Comments extends BaseComponent {
    init() {
        let res = this.$element.find('.js-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: "<a href=\"javascript:void(0);\" class='partners__prev arrow arrow_prev'></a>",
            nextArrow: "<a href=\"javascript:void(0);\" class='partners__next arrow arrow_next'></a>",
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false
                    }
                }
            ]
        });
    }
}

export {Comments};
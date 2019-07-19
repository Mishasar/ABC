import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";
import "slick-carousel";


class Histories extends BaseComponent {

    init() {
        this.$element.find('.js-slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: "<a href=\"javascript:void(0);\" class='histories__prev histories__arrow arrow arrow_prev'></a>",
            nextArrow: "<a href=\"javascript:void(0);\" class='histories__next histories__arrow arrow arrow_next'></a>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        infinite: true,
                        arrows: false
                    }
                }
            ]
        });
    }

}

export {Histories};
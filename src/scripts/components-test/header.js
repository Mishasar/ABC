import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";
import "slick-carousel";


class Header extends BaseComponent {

    init() {
        const inner = this.$element.find('.js-header-inner');
        const toggleButton = this.$element.find('.js-hamburger');

        toggleButton.on('click', () => {
            inner.toggleClass('header__inner_opened');
            toggleButton.toggleClass("is-active");
        });
    }

}

export {Header};
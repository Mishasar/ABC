import {BaseComponent} from "../base-component";
import $ from "jquery/dist/jquery";


class Btn extends BaseComponent {

    init() {
        const $btn = this.$element.find(".js-btn-inner");

        $btn.mouseenter(function (e) {
            const parentOffset = $(this).offset();
            const relX = e.pageX - parentOffset.left;
            const relY = e.pageY - parentOffset.top;
            const $circle = $(this).prev(".btn__circle");
            $circle.css({"left": relX, "top": relY});
            $circle.removeClass("desplode-circle");
            $circle.addClass("explode-circle");
        });

        $btn.mouseleave(function (e) {
            const parentOffset = $(this).offset();
            const relX = e.pageX - parentOffset.left;
            const relY = e.pageY - parentOffset.top;
            const $circle = $(this).prev(".btn__circle");
            $circle.css({"left": relX, "top": relY});
            $circle.removeClass("explode-circle");
            $circle.addClass("desplode-circle");
        });

    }
}

export {Btn};
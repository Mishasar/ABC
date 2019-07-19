import {BasePage} from "../base-page";
import HeaderComponent from "../../components/header/header.js";
import PartnersComponent from "../../components/partners/partners.js";

import $ from "jquery/dist/jquery";
import "../vendor/izimodal";
import "select2/dist/js/select2.full.js";
import "../vendor/autosize.js";

class Index extends BasePage {
    init() {
        // $(".modal").iziModal({
        //     'border-radius': '10px',
        //     onClosed: function () {
        //         const video = $("#youtube");
        //         const videoPath = video.attr("src");
        //         video.attr("src","");
        //         video.attr("src",videoPath);
        //     },
        // });

        // $('.js-autosize').autosizeInput();

        this.$element.find('.js-header').each((i, el) => {
            new HeaderComponent(el);
        });

        this.$element.find('.js-partners').each((i, el) => {
            new PartnersComponent(el);
        });


    }
}

const page = new Index();
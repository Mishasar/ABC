import {BasePage} from "../base-page";
import {MainForm} from "../form/main";

import $ from "jquery/dist/jquery";
import  "../vendor/izimodal";
import "select2/dist/js/select2.full.js";


class Base extends BasePage {
    init() {
        $(".modal").iziModal();

        this.$element.find('.js-request-form').each((i, el) => {
            new MainForm(el);
        });

    }
}

const base = new Base();
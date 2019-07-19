import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";


class Tasks extends BaseComponent {

    init() {
        const link = this.$element.find('.js-popup-link');

        link.on('click', (e)=>{
            const $el = $(e.target);
            const selectItem = $el.data('select');
            const titleItem = $el.data('title');
            $(window).trigger("openPopupWithData", [selectItem, titleItem]);
            $(".js-modal-tasks").iziModal('open');
        });
    }

}

export {Tasks};
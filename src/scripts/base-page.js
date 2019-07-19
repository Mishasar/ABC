import $ from "jquery/dist/jquery";


class BasePage {
    constructor(element) {
        this.$element = $('body');

        $(window).ready(($)=>{
            this.init();
        });
    }

    init() {
        //abstract
    }
}

export {BasePage};
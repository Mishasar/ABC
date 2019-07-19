import $ from "jquery/dist/jquery";

export default class BaseComponent {
    constructor(element) {
        this.$element = $(element);
        this.init();
    }

    init() {}
}

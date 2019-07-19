import {BaseForm} from "../base-form";
import $ from "jquery/dist/jquery";
import "jquery-validation";


class MainForm extends BaseForm {

    init() {
        this.validate();
    }

    submitFunction(form) {
        const $form = this.$element;
        let formData = new FormData(form);

        $.ajax({
            url: $form.attr('action'),
            type: 'POST',
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function (response) {
                $form.trigger('reset');
                $('.js-modal-send-request').iziModal('open');
            },
        });
    }
}

export {MainForm};
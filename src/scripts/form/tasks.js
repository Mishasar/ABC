import {BaseForm} from "../base-form";
import $ from "jquery";
import "jquery-validation";
import "../vendor/select2.min.js";


class TasksForm extends BaseForm {

    init() {
        this.validate();


        const $select = this.$element.find(".js-select");
        const $title = this.$element.find('.js-title');

        $select.select2({
            width: '100%',
            minimumResultsForSearch: -1,
            theme: 'custom'
        });

        $(window).bind('openPopupWithData', (e, id, title) => {
            $title.text(title);
            $select.val(id);
            $select.trigger('change');
        });
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

export {TasksForm};
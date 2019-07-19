import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";


class Accordeon extends BaseComponent {

    init() {
        this.links = this.$element.find(".js-accordeon-link");
        this.items = this.$element.find(".js-accordeon-item");
        this.dot = this.$element.find(".js-accordeon-dot");
        this.imageBlock = this.$element.find(".js-accordeon-image-block");
        this.dotTop = 0;
        this.oldContentHeight = 0;
        this.notWork = true;

        this.setActive(this.links.first());

        this.links.on('click', (e) => {
            const $el = $(e.target);
            if (!$el.hasClass('job__accordeon-item_active')) {
                this.setActive($el);
            }
        });
    }

    setActive($el) {
        const $currentItem = $el.closest(this.items);

        if (!$currentItem.hasClass('job__accordeon-item_active') && this.notWork) {
            this.notWork = false;
            this.dot.css('transform', 'translateY(' + this.dotTop + 'px) scale(0.5)');
            const $oldImage = this.$element.find(".js-accordeon-image");
            $oldImage.addClass('job__notebook_edit');
            const $newImage = $oldImage.clone().hide().attr('src', $currentItem.data('img'));
            this.dotTop = $currentItem.position().top;

            if ($currentItem.nextAll('.job__accordeon-item_active').length != 1) {
                this.dotTop = this.dotTop - this.oldContentHeight;
            }

            this.items.removeClass('job__accordeon-item_active');
            $el.closest(this.items).addClass('job__accordeon-item_active');
            this.dot.css('transform', 'translateY(' + this.dotTop + 'px) scale(0.5)');
            this.imageBlock.append($newImage);

            $newImage.fadeIn('normal', () => {
                $newImage.removeClass('job__notebook_edit');
                $oldImage.remove();
            });

            setTimeout(() => {
                this.dot.css('transform', 'translateY(' + this.dotTop + 'px) scale(1)');
            }, 550);


            setTimeout(() => {
                this.oldContentHeight = $currentItem.find('.js-accordeon-hidden').outerHeight();
                this.notWork = true;
            }, 800);

        }

    }
}

export {Accordeon};
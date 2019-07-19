import {BaseComponent} from '../base-component';

import $ from 'jquery/dist/jquery';
import 'particles.js/particles';
import '../vendor/izimodal';

class Welcome extends BaseComponent {

    init() {
        const videoModal = $('.js-modal-video');

        this.$element.find('.js-play-video').on('click', function () {
            videoModal.iziModal('open');
        });

        this.$element.find('.js-send-request').on('click', function () {
            $('.js-modal-form-request').iziModal('open');
        });

        $(document).on('closed', '.remodal', function (e) {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        });

        particlesJS('js-welcome-bg',
            {
                'particles': {
                    'number': {
                        'value': 30,
                        'density': {'enable': true, 'value_area': 700},
                    },
                    'color': {'value': '#2CB901'},
                    'shape': {
                        'type': 'circle',
                        'stroke': {'width': 1, 'color': '#82ED7B'},
                        'polygon': {'nb_sides': 3},
                        'image': {'src': 'img/github.svg', 'width': 100, 'height': 100},
                    },
                    'opacity': {
                        'value': 0.3928359549120531,
                        'random': true,
                        'anim': {
                            'enable': false,
                            'speed': 1,
                            'opacity_min': 0.1,
                            'sync': false,
                        },
                    },
                    'size': {
                        'value': 5,
                        'random': true,
                        'anim': {
                            'enable': false,
                            'speed': 40,
                            'size_min': 0.1,
                            'sync': false,
                        },
                    },
                    'line_linked': {
                        'enable': true,
                        'distance': 288.6141709557941,
                        'color': '#03C025',
                        'opacity': 0.19240944730386272,
                        'width': 1,
                    },
                    'move': {
                        'enable': true,
                        'speed': 1.603412060865523,
                        'direction': 'none',
                        'random': true,
                        'straight': false,
                        'out_mode': 'out',
                        'bounce': false,
                        'attract': {'enable': false, 'rotateX': 600, 'rotateY': 1200},
                    },
                },
                'interactivity': {
                    'detect_on': 'canvas',
                    'events': {
                        'onhover': {'enable': true, 'mode': 'grab'},
                        'onclick': {'enable': true, 'mode': 'push'},
                        'resize': true,
                    },
                    'modes': {
                        'grab': {'distance': 400, 'line_linked': {'opacity': 0.2}},
                        'bubble': {
                            'distance': 400,
                            'size': 40,
                            'duration': 2,
                            'opacity': 8,
                            'speed': 3,
                        },
                        'repulse': {'distance': 200, 'duration': 0.4},
                        'push': {'particles_nb': 4},
                        'remove': {'particles_nb': 2},
                    },
                },
                'retina_detect': true,
            });
    }
}

export {Welcome};
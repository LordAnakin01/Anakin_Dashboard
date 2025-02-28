/*
Template Name: Amezia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: tooltipster 
*/

(function ($) {

    "use strict";

    tippy('.tippy-btn');
    tippy('#myElement', {
        html: document.querySelector('#feature__html'), // DIRECT ELEMENT option
        arrow: true,
        animation: 'fade'
    });

})(jQuery);
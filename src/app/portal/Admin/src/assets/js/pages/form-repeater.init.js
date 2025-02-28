/*
Template Name: Amezia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Form repeater Js File
*/
$(document).ready(function () {
  'use strict';

  $('.repeater-default').repeater();

  $('.repeater-custom-show-hide').repeater({
    show: function () {
      $(this).slideDown();
    },
    hide: function (remove) {
      if (confirm('Are you sure you want to remove this item?')) {
        $(this).slideUp(remove);
      }
    }
  });
});
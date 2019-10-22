/*global $, alert, console*/

$(function () {
    'use strict';
    $('.the-toggler').on('click', function () {
        $('.navbar').slideToggle();
    });
});

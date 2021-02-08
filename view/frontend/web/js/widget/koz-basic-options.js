define([
    'jquery'
], function ($) {
    'use strict';

    $.widget('koz.basicOptions', {
        options: {
            color: 'red'
        },
        _create: function () {
            // Create a basic widget that changes the elements color. The default color
            // is red, but can be configured to something else.
            this.element.css('color', this.options.color);
        }
    });

    return $.koz.basicOptions;
});

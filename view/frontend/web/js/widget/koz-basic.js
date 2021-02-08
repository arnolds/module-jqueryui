define([
    'require',
    'jquery'
], function (require, $) {
    'use strict';

    $.widget('koz.basic', {
        _create: function () {
            // Create a basic widget that logs the element, and any options on initialization
            console.log(`See: ${require.toUrl('Koz_JqueryUI/js/widget/koz-basic.js')}`);
            console.log(this.element);
            console.log(this.options);
        }
    });

    return $.koz.basic;
});

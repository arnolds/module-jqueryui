define([
    'jquery',
    'Koz_JqueryUI/js/widget/koz-basic'
], function ($, basic) {
    'use strict';

    return function (config, element) {
        $(element).basic(config);
    }
});

define([
    'jquery',
    'Koz_JqueryUI/js/widget/koz-basic-options'
], function ($, basicOptions) {
    'use strict';

    return function (config, element) {
        $(element).basicOptions(config);
    }
});

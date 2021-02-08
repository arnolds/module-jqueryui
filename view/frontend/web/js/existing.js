define([
    'jquery',
    'jquery-ui-modules/draggable'
], function ($, draggable) {
    'use strict';

    return function (config, element) {
        $(element).draggable(config);
    }
});

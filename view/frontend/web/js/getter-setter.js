define([
    'jquery',
    'jquery-ui-modules/slider'
], function ($, slider) {
    'use strict';

    return function (config, element) {
        let slider = $(element).slider(config);

        console.log(`See: ${require.toUrl('Koz_JqueryUI/js/getter-setter.js')}`);
        console.log(`Value before: ${ slider.slider('value')}`);

        setTimeout(function () {
            slider.slider('option', 'value', 50);
            console.log(`Value after: ${ slider.slider('value')}`);
        }, 3000);
    }
});

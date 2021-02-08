define([
    'require',
    'jquery',
    'jquery/jquery-ui'
], function (require, $) {
    'use strict';

    return function (config, element) {
        console.log(`See: ${require.toUrl('Koz_JqueryUI/js/events.js')}`);

        let settings = $.extend({
            create: function (event, ui) {
                console.log('autocomplete has been created.');
            }
        }, config);

        $(element).autocomplete(settings);

        $(element).on('autocompletesearch', function (event, ui) {
            console.log('searching...');
        });

        // Common methods
        // check if disabled, if not disabled disable it
        let isDisabled = $(element).autocomplete('option', 'disabled');

        if (! isDisabled) {
            $('.autocomplete-status').text('disabled autocomplete');
            $(element).autocomplete('disable');
        }

        setTimeout(function () {
            $('.autocomplete-status').text('enabled autocomplete');
            $(element).autocomplete('enable');
        }, 5000);
    }
});

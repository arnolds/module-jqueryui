define([
    'jquery',
    'Koz_JqueryUI/js/widget/koz-dragit'
], function ($, dragit) {
    return function (config, element) {
        $(element).dragit();

        setTimeout(function () {
            $(element).dragit('color', 'blue');
        }, 6000);
    }
});

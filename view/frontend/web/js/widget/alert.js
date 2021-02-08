define([
    'jquery',
    'Magento_Ui/js/modal/alert'
], function ($) {
    $.widget('mage.alert', $.mage.alert, {
        options: {
            title: $.mage.__('Override')
        }
    });

    return function (config) {
        return $('<div></div>').html(config.content).alert(config);
    };
});

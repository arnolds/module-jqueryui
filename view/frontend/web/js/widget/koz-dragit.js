define([
    'jquery',
    'jquery-ui-modules/draggable'
], function ($) {
    $.widget('koz.dragit', $.ui.draggable, {
        _create: function () {
            // We get an error if we don't set data for 'ui-draggable' as well.
            $(this.element).data('ui-draggable', $(this.element).data('koz-dragit'));
            this.color('red');

            return this._super();
        },
        color: function (value) {
            this.element.css('color', value);
        }
    });

    return $.koz.dragit;
});

((function ($) {
    /* Extend jQuery */
    $.extend({
        vitesse: function (url, options) {
            return $.ajax(url, options);
        },
        vitesseTransport: function (transport) {
            return $.ajaxTransport(transport);
        },
        vitessePrefilter: function (prefilters) {
            return $.ajaxPrefilter(prefilters);
        },
        vitesseSetup: function (target, settings) {
            return $.ajaxSetup(target, settings);
        }
    });

    /* Global handlers */
    $.each([
        'Start',
        'Stop',
        'Complete',
        'Error',
        'Success',
        'Send'
    ], function (i, type) {
        jQuery.fn['vitesse' + type] = function (fn) {
            return this.on( 'ajax' + type, fn);
        };
    });

})(jQuery));

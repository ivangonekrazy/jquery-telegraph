/*
    Telegraph
    =========
    A jQuery plugin to facilitate the Observer pattern (URL)

    Inspired by Andy Ossmani, the jQuery documentation, and
    Django Signals.

    author: Ivan Tam (ivan@loggly.com)
    Copyright (c) 2012 Loggly Inc., All rights reserved.
*/

;(function($) {
    $.fn.telegraph.channels = { };

    $.fn.telegraph = function(channel_name) {
        var callbacks;
        var channel = channel_name && this.channels[ channel_name ];

        if (!channel) {
            callbacks = jQuery.Callbacks();
            channel = {
                publish: callbacks.fire,
                subscribe: callbacks.add,
                unsubscribe: callbacks.remove
            };

            if (channel_name) {
                this.channels[ channel_name ] = channel;
            }
        }

        return channel;
    }

    $.fn.telegraph.defaults = { }

    $.fn.telegraph.settings = { }


})(jQuery);

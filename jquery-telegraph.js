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

    $.telegraph = function(channel_name) {
        var callbacks;
        var channel = channel_name && $.telegraph.channels[ channel_name ];

        if (!channel) {
            callbacks = jQuery.Callbacks();
            channel = {
                publish: callbacks.fire,
                subscribe: callbacks.add,
                unsubscribe: callbacks.remove,
                clear: $.telegraph.clear,
            };

            if (channel_name) {
                $.telegraph.channels[ channel_name ] = channel;
            }
        }

        return channel;
    }

    $.telegraph.clear = function(channel_name) {
        var channel = channel_name && $.telegraph.channels[ channel_name ];

        if (channel) {
            $.telegraph.channels[ channel_name ] = undefined;
        }
    }

    $.telegraph.channels = { };

    $.telegraph.defaults = { }

    $.telegraph.settings = { }


})(jQuery);

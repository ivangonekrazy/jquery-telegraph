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

    $.telegraph = {
        settings : { },
        defaults : { },

        // our table of cables to callbacks
        cables : { },

        register: function(cable_name) {
            var cable = cable_name && this.cables[cable_name]
            if (!cable) {
                callbacks = jQuery.Callbacks()
                this.cables[cable_name] = callbacks
            }
            return cable
        },

        subscribe: function(cable_name, callback) {
            var cable = this.register(cable_name)
            cable.add(callback)
            return cable
        },

        publish: function(cable_name, args) {
            var cable = this.register(cable_name)
            cable.fire(args)
            return cable
        },

        unsubscribe: function(cable_name, callback) {
            var cable = this.register(cable_name)
            cable.remove(callback)
            return cable
        },

        clear: function(cable_name) {
            this.cables = { }
        }

        // one-shot subscribe?
        // deferreds?
        // expose callback options?

    }
/*
    $.telegraph = function(channel_name) {
        var callbacks
        var channel = channel_name && $.telegraph.channels[ channel_name ]

        // TODO use regexen to find channels

        if (!channel) {
            callbacks = jQuery.Callbacks()
            channel = {
                publish: callbacks.fire,
                subscribe: callbacks.add,
                unsubscribe: callbacks.remove,
                clear: function(){
                            return $.telegraph.clear.call(this, channel_name)
                       },
            }

            if (channel_name) {
                $.telegraph.channels[ channel_name ] = channel
            }
        }

        return channel
    }

    $.telegraph.clear = function(channel_name) {
        var channel = channel_name && $.telegraph.channels[ channel_name ];

        if (channel) {
            $.telegraph.channels[ channel_name ] = undefined
        }
    }

    $.telegraph.channels = { }

    $.telegraph.defaults = { }

    $.telegraph.settings = { }
*/

})(jQuery);

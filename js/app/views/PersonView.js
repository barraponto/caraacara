define( ['App', 'backbone', 'marionette', 'jquery', 'hbs!templates/person'],
    function(App, Backbone, Marionette, $, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template: template,
            tagName: 'li',
            // View Event Handlers
            events: {
                // TODO: send to limbo.
                'click .card': 'remove'
            },
            modelEvents: {
                change: 'render'
            }
        });
    });

define( ['App', 'backbone', 'marionette', 'jquery', 'models/Person', 'hbs!templates/goal'],
    function(App, Backbone, Marionette, $, Person, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template: template,
            className: 'hero-unit',
            // View Event Handlers
            events: {
            }
        });
    });

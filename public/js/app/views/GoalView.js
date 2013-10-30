define( ['App', 'backbone', 'marionette', 'jquery', 'models/Person', 'hbs!templates/goal'],
    function(App, Backbone, Marionette, $, Person, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template: template,
            tagName: 'div',
            initialize:function (options) {
                // Pick a slightly more random goal.
                Math.seedrandom(options.hash, true);
                var people = App.people.models;
                this.model = new Person(people[Math.floor(Math.random()*people.length)].attributes);
            },
            // View Event Handlers
            events: {
            }
        });
    });

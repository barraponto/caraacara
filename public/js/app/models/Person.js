define(["jquery", "backbone"],
    function($, Backbone) {
        // Creates a new Backbone Model class object
        var Person = Backbone.Model.extend({

            // Person Constructor
            initialize: function() {

            },

            // Default values for all of the Person attributes
            defaults: {

            },

            // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Person class
        return Person;

    }

);

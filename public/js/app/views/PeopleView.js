define( ['App', 'backbone', 'marionette', 'jquery', 'views/PersonView', 'hbs!templates/people'],
    function(App, Backbone, Marionette, $, PersonView, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.CollectionView.extend({
            template: template,
            itemView: PersonView,
            itemViewContainer: 'ul',
            tagName: 'div',
            // View Event Handlers
            events: {
            }
        });
    });

define(['App', 'backbone', 'marionette', 'jquery', 'views/PersonView', 'hbs!templates/people'],
    function(App, Backbone, Marionette, $, PersonView, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.CollectionView.extend({
            tagName: 'ul',
            template: template,
            itemView: PersonView,
        });
    });

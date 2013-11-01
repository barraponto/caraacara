define( ['App', 'backbone', 'marionette', 'jquery', 'underscore.string', 'models/Model', 'hbs!templates/gamestart'],
    function(App, Backbone, Marionette, $, _str, Model, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend( {
            template: template,
            model: new Model({
                mobile: App.mobile
            }),
            newgame: function(e) {
                var hash = _str.slugify(this.$el.find('input').val());
                App.appRouter.navigate('game/' + hash, {trigger: true});
            },
            // View Event Handlers
            events: {
                "click button": 'newgame'
            }
        });
    });

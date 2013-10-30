define(['App', 'backbone', 'marionette', 'jquery', 'views/GoalView', 'views/PeopleView', 'hbs!templates/gamelayout'],
    function(App, Backbone, Marionette, $, GoalView, PeopleView, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.Layout.extend({
            template: template,
            regions: {
                goal: '#goal',
                game: '#game'
            },
            onShow: function() {
                this.goal.show(new GoalView({
                    model: App.goal
                }));
                this.game.show(new PeopleView({
                    collection: App.people
                }));
            }
        });
    });

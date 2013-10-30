define(['App', 'jquery', 'backbone', 'marionette', 'views/GameStartView', 'views/GoalView', 'views/PeopleView', 'views/DesktopHeaderView', 'models/Person', 'collections/People', 'seedrandom'],
    function (App, $, Backbone, Marionette, GameStartView, GoalView, PeopleView, DesktopHeaderView, Person, People) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        start: function() {
            App.mainRegion.show(new GameStartView({
            }));
        },
        goal: function() {
        },
        game: function (hash) {
            if (App.hasOwnProperty('people')) {
                $('.active').removeClass('active');
                $('#game-link').parent().addClass('active');
                App.mainRegion.show(new PeopleView({
                    collection: App.people
                }));
            } else {
                // Seed randomness with current hash.
                Math.seedrandom(hash);
                $.getJSON('data.json', function(data, jqXHR, code) {
                    // Pseudo-randomize and pick 24.
                    data = data.sort(
                        function(){ return 0.5 - Math.random(); }
                    ).slice(-24);
                    // Populate.
                    App.people = new People(data);
                    // Draw :)
                    // App.goalRegion.show(new GoalView({hash: hash}));
                    App.mainRegion.show(new PeopleView({
                        collection: App.people
                    }));
                $('.active').removeClass('active');
                $('#game-link').attr('href', '#game/' + hash).parent().addClass('active');
                });
            }
        },
        dismissed: function() {
        }
    });
});

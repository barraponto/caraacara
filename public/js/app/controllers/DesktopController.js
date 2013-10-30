define(['App', 'jquery', 'backbone', 'marionette', 'views/GameStartView', 'views/GameView', 'views/DesktopHeaderView', 'models/Person', 'collections/People', 'seedrandom'],
    function (App, $, Backbone, Marionette, GameStartView, GameView, DesktopHeaderView, Person, People) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        start: function() {
            App.mainRegion.show(new GameStartView());
            $('.active').removeClass('active');
            $('.nav li:first-child').addClass('active');
        },
        game: function (hash) {
            if (App.hasOwnProperty('people')) {
                $('.active').removeClass('active');
                $('#game-link').parent().addClass('active');
                App.mainRegion.show(new GameView());
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
                    // Draw a slightly more random goal.
                    Math.seedrandom(hash, true);
                    App.goal = App.people.models[Math.floor(Math.random()*App.people.models.length)];
                    App.mainRegion.show(new GameView());
                $('.active').removeClass('active');
                $('#game-link').attr('href', '#game/' + hash).parent().addClass('active');
                });
            }
        },
        dismissed: function() {
        }
    });
});

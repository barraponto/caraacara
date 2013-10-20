define(['App', 'jquery', 'backbone', 'marionette', 'views/PersonView', 'views/PeopleView', 'views/DesktopHeaderView', 'models/Person', 'collections/People', 'seedrandom'],
    function (App, $, Backbone, Marionette, PersonView, PeopleView, DesktopHeaderView, Person, People) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index: function (hash) {
            // Seed randomness with current hash.
            Math.seedrandom(hash);
            $.getJSON('data.json', function(data, jqXHR, code) {
                // Pseudo-randomize and pick 24.
                data = data.sort(
                    function(){ return 0.5 - Math.random(); }
                ).slice(-24);
                // Populate.
                App.people = new People(data);
                // Pick a slightly more random goal.
                Math.seedrandom(hash, true);
                var pick = new Person(data[Math.floor(Math.random()*data.length)]);
                // Draw :)
                App.goalRegion.show(new PersonView({ model: pick }));
                App.mainRegion.show(new PeopleView({
                    collection: App.people
                }));
            });
        }
    });
});

define(['App', 'jquery', 'backbone', 'marionette', 'views/PeopleView', 'views/DesktopHeaderView', 'collections/People', 'seedrandom'],
    function (App, $, Backbone, Marionette, PeopleView, DesktopHeaderView, People) {
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
                App.mainRegion.show(new PeopleView({
                    collection: App.people
                }));
            });
        }
    });
});

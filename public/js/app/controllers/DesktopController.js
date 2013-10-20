define(['App', 'backbone', 'marionette', 'views/PeopleView', 'views/DesktopHeaderView', 'collections/People'],
    function (App, Backbone, Marionette, PeopleView, DesktopHeaderView, People) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            // Get the data.
            // TODO: get actual data.
            App.people = new People([
                {name: 'João', details: ['rural', 'pmdb']},
                {name: 'Maria', details: []},
                {name: 'Capi', details: ['hacker']},
                {name: 'José', details: []}
            ]);
            App.mainRegion.show(new PeopleView({
                collection: App.people
            }));
        }
    });
});

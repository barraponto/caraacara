define(['App', 'jquery', 'backbone', 'marionette', 'views/PeopleView', 'views/DesktopHeaderView', 'collections/People'],
    function (App, $, Backbone, Marionette, PeopleView, DesktopHeaderView, People) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            // Get the data.
            // TODO: get actual data.
            $.getJSON('data.json', function(data, jqXHR, code) {
                console.log(data);
                App.people = new People(data);
                App.mainRegion.show(new PeopleView({
                    collection: App.people
                }));
            });
        }
    });
});

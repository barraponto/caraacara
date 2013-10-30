define(['backbone', 'marionette'], function(Backbone, Marionette) {
   return Backbone.Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
           "": "start",
           "game/new": "start",
           "game/dismissed": "dismissed",
           "game/:hash": "game"
       }
   });
});

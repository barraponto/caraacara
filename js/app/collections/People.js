define(["jquery","backbone","models/Person"],
  function($, Backbone, Person) {
    // Creates a new Backbone Collection class object
    var People = Backbone.Collection.extend({
      // Tells the Backbone People that all of it's models will be of type Person (listed up top as a dependency)
      model: Person
    });

    return People;
  });

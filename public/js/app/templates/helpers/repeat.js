/**
 * Duplicate the content in the encapsulated block n times.
 * @param {Number} n [Number of times to duplicate content.]
 * @example
 *    {{#repeat '10'}}
 *       {{> button }}
 *    {{/repeat}}
 */

define(['handlebars'], function(Handlebars, options) {
  Handlebars.registerHelper('repeat', function(n, context) {
    var times = '';
    for (var i = 0; i < n; ++i) {
      times += context.fn(this);
    }
    return times;
  });
});

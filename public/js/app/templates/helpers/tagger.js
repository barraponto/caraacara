define(['handlebars'], function (Handlebars){
  function tagger(context, options) {
    var tags = [];
    tags.push(context.partido);
    tags.push(context.legislaturas + '-legislaturas');
    return tags.join(' ');
  }

  Handlebars.registerHelper('tagger', tagger);
  return tagger;
});

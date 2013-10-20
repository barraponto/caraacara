define(['handlebars'], function (Handlebars){
  function tagger(context, options) {
    var tags = [];
    tags.push(context.partido);
    tags.push(context.legislaturas + '-legislaturas');
    if (context.lider) {
        tags.push('lider');
    }
    return tags.join(' ');
  }

  Handlebars.registerHelper('tagger', tagger);
  return tagger;
});

define(['handlebars', 'underscore.string'], function (Handlebars, _str){
  function tagger(context, options) {
    var tags = [];
    tags.push(_str.slugify(context.partido));
    tags.push(context.legislaturas + '-legislaturas');
    if (context.lider) {
        tags.push('lider');
    }
    return tags.join(' ');
  }

  Handlebars.registerHelper('tagger', tagger);
  return tagger;
});

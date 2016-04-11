var m = require('mithril');

// Main view
var Home = module.exports = {

  view: function(ctrl) {
    return m("html",[
      m("body", [
        m("h1", 'Hola desde Login')
      ])
      // [
        // this needs to be extracted to a function that goes through the album
        // array and outputs the view for each album
        // ramona.renderAlbums()
      // ])
    ]);
  }

};

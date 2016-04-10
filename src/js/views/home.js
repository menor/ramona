var m = require('mithril');

// Main view
var Home = module.exports = {

  view: function(ctrl) {
    return m("html",[
      m("body", [
        m("h1", 'Hello World')
      ])
      // [
        // this needs to be extracted to a function that goes through the album
        // array and outputs the view for each album
        // ramona.renderAlbums()
      // ])
    ]);
  }

};

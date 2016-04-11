var m = require('mithril');

// Main view
var Home = module.exports = {

  // The controller here should detect if we have a spotify token for the user
  // If we have it redirect to the albums list
  // Else we redirect to the login button
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

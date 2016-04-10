var m = require('mithril');

m.route(document.body, "/", {
  "/": require('./js/views/home')
  // "/login": login
});

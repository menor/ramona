var m = require('mithril');
var homeView = require('./views/home');
var loginView = require('./views/login');

m.route(document.body, "/", {
  "/": homeView,
  "/login": loginView
});

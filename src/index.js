var m = require('mithril');

// comment this for now until we have the routes built
// m.route(document.body, "/", {
//   "/": home,
//   "/login": login
// });

// main component used to namespace the app
var ramona = {};

// the Album class
ramona.Album = function(data) {
  this.spotifyId = m.prop(data.spotifyId);
  // This needs to be obtained from the spotify api, so I guess:
  // - call spotify API on init passing the id
  // - fill this properties
  this.artist = m.prop(data.artist);
  this.title = m.prop(data.title);
  this.cover = m.prop(data.cover);
}

// the albums collection, this needs to take an user id as an argument and\
// retrieve her saved albums from spotify
ramona.AlbumList = Array;

// This is still unauthorised
// ramona.spotifyRequest = {
//   method: "GET",
//   url: "https://api.spotify.com/v1/me/albums",
//   Authorization: "Bearer BQDZAh09lOr0QXngdfZNCd9YzhoH6R6IZLLzkNgAXBTFFA2dOURzb_kBdCMU2IF1Uqo_AhXDaU3e0ZDdW2aE4JPLtIEl6Ed2DMag8Xf758yyWp9knzW4dUkBsGIOCaRGndsxAS2Na3R0RPb3Xe9THw"
// }
//
// m.request(ramona.spotifyRequest)
//   .then(ramona.AlbumList)

// define the view-model
ramona.vm = {
  init: function() {
    // A running list of albums, later we pass the user id
    ramona.vm.albumList = new ramona.AlbumList();

    // adds an album to the list
    ramona.vm.add = function(album) {
      // we'd to check if the album is properly formatted if we are going
      // to keep this, I doubt it so I'm not doing it for now
      // Also it's probably better to handle it in the model
      ramona.vm.albumList.push(new ramona.Album(album))
    }
  }
};

// Main view
ramona.view = function() {
  return m("html",[
    m("body", [
      // this needs to be extracted to a function that goes through the album
      // array and outputs the view for each album
      ramona.renderAlbums()
    ])
  ]);
};

// we'll make this take an argument later to make it more flexible
ramona.renderAlbums = function() {
  return ramona.vm.albumList.map(function(album) {
    return ramona.renderAlbum(album);
  })
};

ramona.renderAlbum = function(album) {
  return m("div.album", [
    m("img", {src: album.cover()}),
    m("h1", album.artist()),
    m("span", album.title()),
  ])
};

//initialize our view-model
ramona.vm.init();


// create an album by hand later we need to create this from an
// spotify id
var frankBlackFirst = {
  spotifyId: "5Q8gM5SMBT2LAoZ5LzqAvH",
  artist: "Frank Black",
  title: "Frank Black",
  cover: "https://i.scdn.co/image/b392026893317c09efcf42b49d7015d1972551fe"
};

// another album just for fun
var roky = {
  spotifyId: "625D7Framo0tCKlhdLKoE4",
  artist: "Roky Erickson",
  title: "The Evil One",
  cover: "https://i.scdn.co/image/808159d472a9caa36ed649527b6745f9d029bc5c"
};

// add the album to the view-model list
ramona.vm.add(frankBlackFirst);
// add a second album, this works inmediately even with a timeout
ramona.vm.add(roky);

// render the view
m.render(document, ramona.view());

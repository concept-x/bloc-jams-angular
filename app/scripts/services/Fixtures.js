(function() {
    function Fixtures() {
        var Fixtures = {};

        var albumPicasso = {
          title: 'The Colors',
          artist: 'Pablo Picasso',
          label: 'Cubism',
          year: '1881',
          albumArtUrl: '/assets/images/album_covers/01.png',
          songs: [
            {title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue'},
            {title: 'Green', duration: 103.96, audioUrl: 'assets/music/green'},
            {title: 'Red', duration: 268.45, audioUrl: 'assets/music/red'},
            {title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink'},
            {title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta'}
          ]
        };

        var albumMarconi = {//change the lengths to seconds when you add real music
          title: 'The Telephone',
          artist: 'Guglielmo Marconi',
          label: 'EM',
          year: '1909',
          albumArtUrl: '/assets/images/album_covers/20.png',
          songs: [
            {title: 'Hello, Operator?', duration: '1:01'},
            {title: 'Ring, ring, ring', duration: '5:01'},
            {title: 'Fits in your pocket', duration: '3:21'},
            {title: 'Can you hear me now?', duration: '3:14'},
            {title: 'Wrong phone number', duration: '2:15'}
          ]
        };

        Fixtures.getAlbum = function() {
            return albumPicasso;
        };
//assignment 6
        Fixtures.getCollection = function(numberOfAlbums){
          var albumCollection = [];
          for (var i=0; i<numberOfAlbums; i++){
            albumCollection.push(angular.copy(albumPicasso));
          }
          return albumCollection;
        };
  //end assignment 6
        return Fixtures;
    }//Why are we returning two things here? Seems redundant.

    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();

/*
Add a second public method to the Fixtures service named getCollection.
This method should take one argument, numberOfAlbums, and return an array with the specified number of albumPicasso objects pushed to it.
Inject the Fixtures service into CollectionCtrl.

Fixtures.getCollection = function(numberOfAlbums){
  var numberOfAlbums = $scope
  //return array with the specified number of albumPicasso objects pushed to it
}
*/

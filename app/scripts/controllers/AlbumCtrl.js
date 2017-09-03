
(function(){
  function AlbumCtrl(Fixtures){//inject 'Fixtures' custom service
    this.albumData = Fixtures.getAlbum();
    //AlbumCtrl uses Fixtures' getAlbum() method to get albumPicasso object
  }

angular
    .module('blocJams')
    .controller('AlbumCtrl',['Fixtures', AlbumCtrl]);//add 'Fixtures' to AlbumCtrl's array of dependencies
})();

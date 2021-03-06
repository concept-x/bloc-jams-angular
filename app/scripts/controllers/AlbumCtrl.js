
(function(){
  function AlbumCtrl(Fixtures, SongPlayer){
    //inject 'Fixtures' & 'SongPlayer' custom services
    this.albumData = Fixtures.getAlbum();
    //AlbumCtrl uses Fixtures' getAlbum() method to get albumPicasso object
    this.songPlayer = SongPlayer;
  }

angular
    .module('blocJams')
    .controller('AlbumCtrl',['Fixtures', 'SongPlayer', AlbumCtrl]);
    //add 'Fixtures' & SongPlayer to AlbumCtrl's array of dependencies
    //These properties hold the named services & make them accessible w/in Album view
})();//parentheses makes function execute as soon as page loads

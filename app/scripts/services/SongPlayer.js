//SongPlayer is a service
(function() {
    function SongPlayer($rootScope, Fixtures) {
         var SongPlayer = {};

         /*
         * @desc currentAlbum from Fixtures
         * @type {Object}???
         */
         var currentAlbum = Fixtures.getAlbum();
         /*
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;
         /*
         * @function setSong
         * @desc Stops currently playing song; loads new audio file as currentBuzzObj
         * @param {Object} song
         */
         var setSong = function(song){
           if (currentBuzzObject){
             currentBuzzObject.stop();
             SongPlayer.currentSong.playing = null;
           }

          /*
           * @function stopSong
           * @desc Stops currently playing song; sets currently playing = null
           * @param {Object} song
           */
         var stopSong = function(song){
           currentBuzzObject.stop();
           song.playing = null;
         };

           currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
           });

           currentBuzzObject.bind('timeupdate', function() {
               $rootScope.$apply(function() {
                   SongPlayer.currentTime = currentBuzzObject.getTime();
               });
           });

           SongPlayer.currentSong = song;
         };

         SongPlayer.muted = false;
         /*
          * @function playSong
          * @desc Plays the currentBuzzObject and sets the property of the song Object to true
          * @param {Object} song
          */
          var playSong = function(song){
              currentBuzzObject.play();
              song.playing = true;
          }

          /*
           * @function getSongIndex
           * @desc Returns current song index
           * @param {Object} song
           * @returns number (songIndex)
           */
          var getSongIndex = function(song){
              return currentAlbum.songs.indexOf(song);
          };

          /*
           * @desc Active song object from list of songs
           * @type {Object}
           */
          SongPlayer.currentSong = null;

          /*
          * @desc Current playback time (in seconds) of currently playing song
          * @type {Number}
          */
          SongPlayer.currentTime = null;

          /* @desc Current volume (scale 0-100)
          * @type {Number}
          */
          SongPlayer.volume = null;
        /*
         * @function play
         * @desc Plays currentSong from either none playing or paused
         */
         SongPlayer.play = function(song){
           //add 'play' method to SongPlayer; 'play' takes 'song' argument
           song = song || SongPlayer.currentSong;
           if(SongPlayer.currentSong !== song){
           setSong(song);
           playSong(song);//replace two lines below with playSong function
           //currentBuzzObject.play();
           //song.playing = true;
           } else if(SongPlayer.currentSong === song){
             if(currentBuzzObject.isPaused()){
               playSong(song);
                //currentBuzzObject.play();
              //  song.playing = true;
             }
           }
         };

    /*
     * @function pause
     * @desc Pauses current song
     */
     SongPlayer.pause = function(song){
     song = song || SongPlayer.currentSong;
     currentBuzzObject.pause();
     song.playing = false;
   };

   /*
    * @function previous
    * @desc rew to prev song index
    */
   SongPlayer.previous = function(){
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;

     if(currentSongIndex < 0){
       stopSong();
       //currentBuzzObject.stop();
       //SongPlayer.currentSong.playing = null;
     } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
     }
   };

   /*
    * @function next
    * @desc ffwd to next song index
    */
   SongPlayer.next = function(){
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex++;

     if(currentSongIndex > currentAlbum.songs.length){// if (cSI > ?) or, if (cSI = currentAlbum.length -1)?
       stopSong();
       //currentBuzzObject.stop();
       //SongPlayer.currentSong.playing = null;
     } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
     }
   };

   /*
   * @function setCurrentTime
   * @desc Set current time (in seconds) of currently playing song
   * @param {Number} time
   */
   SongPlayer.setCurrentTime = function(time) {
    if (currentBuzzObject) {
        currentBuzzObject.setTime(time);
    }
  };

  /*
  * @function setVolume
  * @desc Sets the volume
  * @param {Number} volume
  */
  SongPlayer.setVolume = function(volume) {
    if (currentBuzzObject) {//if currentBuzzObject != null
      currentBuzzObject.setVolume(volume);
      if (volume > 0){
        SongPlayer.muted = false;
      } else {
        SongPlayer.muted = true;
      };


       }
  };

  //pass in 0 for mute; pass in default vol for unmute
         return SongPlayer;
    }




    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);//'factory' is a recipe...???
})();

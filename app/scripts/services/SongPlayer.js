//SongPlayer is a service
(function() {
    function SongPlayer() {
         var SongPlayer = {};

         var currentSong = null;
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
             currentSong.playing = null;
           }

           currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
           });

           currentSong = song;
         };

         SongPlayer.play = function(song){
           //add 'play' method to SongPlayer; 'play' takes 'song' argument
           if(currentSong !== song){
           setSong(song);
           currentBuzzObject.play(); //Function call?
           song.playing = true;
           } else if(currentSong === song){
             if(currentBuzzObject.isPaused()){
                currentBuzzObject.play();
                song.playing = true;
             }
           }
         };

         //cp 7 call pause when clicked
     SongPlayer.pause = function(song){
     currentBuzzObject.pause();
     song.playing = false;
   };//?*****correct placement??
         return SongPlayer;
    }




    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);//'factory' is a recipe...???
})();

//SongPlayer is a service
(function() {
    function SongPlayer() {
         var SongPlayer = {};

         var currentSong = null;
         var currentBuzzObject = null;

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

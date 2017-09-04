//SongPlayer is a service
(function() {
    function SongPlayer() {
         var SongPlayer = {};

         SongPlayer.play = function(song){
           //add 'play' method to SongPlayer; 'play' takes 'song' argument
           var currentBuzzObject = new buzz.sound(song.audioURL, {
             formats: ['mp3'],
             preload: true
           });

           currentBuzzObject.play(); //Function call?
         };
         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);//'factory' is a recipe...???
})();

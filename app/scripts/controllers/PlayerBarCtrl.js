(function() {
    function PlayerBarCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();//dependency injection
        this.songPlayer = SongPlayer;//dependency injection
    }

    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();//PBC = function name; array = dependencies needed for named fn...
//...last item in array = function to pass in; makes fn available to outside fns(expands scope)

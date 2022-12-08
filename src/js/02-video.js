import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const LOCALSTORAGE = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let timeupdate=localStorage.getItem(LOCALSTORAGE);
player.on('play', function(){
    console.log('video played');
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay() {

    player.getCurrentTime().then(
        function(seconds){
            localStorage.setItem(LOCALSTORAGE, seconds);
});

}
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE)||0);
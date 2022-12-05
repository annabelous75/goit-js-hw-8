import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const LOCALSTORAGE = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem('setCurrentTime(|)') || 0);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem('LOCALSTORAGE', seconds);
}


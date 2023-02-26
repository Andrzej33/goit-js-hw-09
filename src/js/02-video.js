import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(localStorage);
};

player.on('timeupdate', throttle(onPlay, 1000));

try {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || '');
} catch (error) {
  console.error('Get state error: ', error.message);
}

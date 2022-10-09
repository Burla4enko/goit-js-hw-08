import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const getTime = () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

player.on('timeupdate', throttle(getTime, 1000));

const setTime = () => {
  let currentTime = localStorage.getItem('videoplayer-current-time');

  // console.log(currentTime);

  if (!currentTime) {
    return;
  }

  player.setCurrentTime(currentTime).catch(function (error) {
    console.log(error.message);
  });
};

setTime();

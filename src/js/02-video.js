import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new player(iframe);

iframePlayer.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(event.seconds)
    );
  }, 1000)
);

iframePlayer.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) ?? 0
);

// console.log(JSON.parse(localStorage.getItem('videoplayer-current-time')));

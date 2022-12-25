import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('#vimeo-player');
  const player = new Player(iframe);
 
 
 player.on(
   'timeupdate',
   throttle(function (currentTime) {
   localStorage.setItem('videoplayer-current-time', currentTime.seconds),1000})
 );


 player.on('play', function() {
      if (localStorage.getItem('videoplayer-current-time')){
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}}
);
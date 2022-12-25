import Player from '@vimeo/player';

 const iframe = document.querySelector('#vimeo-player');
  const player = new Player(iframe);
 
 
 player.on(
   'timeupdate',
   function (currentTime) {
   localStorage.setItem('videoplayer-current-time', currentTime.seconds)}
 );


 player.on('play', function() {
      if (localStorage.getItem('videoplayer-current-time')){
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}}
);
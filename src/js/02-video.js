const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const lastStopTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(lastStopTime);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const logCurTime = () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      console.log('Current time: ', seconds);
      localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    })
    .catch(function (error) {
      // an error occurred
    });
};

player.on('timeupdate', logCurTime);

const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseButton.innerText = 'Play';
  } else {
    audioPlayer.play();
    playPauseButton.innerText = 'Pause';
  }
  isPlaying = !isPlaying;
  console.log(isPlaying);
});
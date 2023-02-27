const audioPlayers = document.querySelectorAll('.audio-player');
const playPauseButtons = document.querySelectorAll('.play-pause-button');

let isPlaying = false;

playPauseButtons.forEach((playPauseButton, index) => {
  const audioPlayer = audioPlayers[index].querySelector('audio');

  playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
      audioPlayer.pause();
      playPauseButton.innerText = 'Play';
    } else {
      audioPlayer.play();
      playPauseButton.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
  });
});

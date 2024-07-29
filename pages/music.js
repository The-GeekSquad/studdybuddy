const dreamAudio = new Audio('../assets/for-a-dream-lofi-vibes-216038.mp3');
const orchAudio = new Audio('../assets/lofi-orchestra-162306.mp3');
const relaxAudio = new Audio('../assets/lofi-relax-travel-by-lofium-123560.mp3');
const studyAudio = new Audio('../assets/lofi-study-112191.mp3');
const summerAudio = new Audio('../assets/summer-rain-lofi-vibes-216043.mp3');


const prevBtn = document.querySelector('.previous')

summerAudio.addEventListener("canplaythrough", (event) => {
    summerAudio.play();
  })
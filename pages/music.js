const dreamAudio = new Audio('../assets/for-a-dream-lofi-vibes-216038.mp3');
const orchAudio = new Audio('../assets/lofi-orchestra-162306.mp3');
const relaxAudio = new Audio('../assets/lofi-relax-travel-by-lofium-123560.mp3');
const studyAudio = new Audio('../assets/lofi-study-112191.mp3');
const summerAudio = new Audio('../assets/summer-rain-lofi-vibes-216043.mp3');

const prevBtn = document.getElementById('previous');
const playBtn = document.getElementById('play-pause');
const nextBtn = document.getElementById('next');
const songName = document.getElementsByClassName('song-name');

const songs = [
    { ele: dreamAudio, audioName: 'Dream Lofi Vibes'},
    { ele: orchAudio, audioName: 'Orchestra Lofi Vibes'},
    { ele: relaxAudio, audioName: 'Relax Lofi Vibes'},
    { ele: studyAudio, audioName: 'Study Lofi Vibes'},
    { ele: summerAudio, audioName: 'Summer Lofi Vibes'},

];

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

document.addEventListener("DOMContentLoaded", function() {
    playBtn.addEventListener('click', ()=> {
        currentSong.play();
    })
});



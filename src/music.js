const dreamAudio = new Audio('../assets/for-a-dream-lofi-vibes-216038.mp3');
const orchAudio = new Audio('../assets/lofi-orchestra-162306.mp3');
const relaxAudio = new Audio('../assets/lofi-relax-travel-by-lofium-123560.mp3');
const studyAudio = new Audio('../assets/lofi-study-112191.mp3');
const summerAudio = new Audio('../assets/summer-rain-lofi-vibes-216043.mp3');
const buttonClick = new Audio('../assets/button.wav');
buttonClick.volume = 0.5;

const prevBtn = document.getElementById('previous');
const playBtn = document.getElementById('play-pause');
const nextBtn = document.getElementById('next');
const playPauseIcon = document.querySelector('#play-pause')
const songName = document.getElementsByClassName('song-name')[0];

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
        
        if (currentSong.paused){
            currentSong.play();
            playPauseIcon.children[0].src = '../assets/pause.png';
            buttonClick.play();
        } else{
            currentSong.pause();
            playPauseIcon.children[0].src = '../assets/play.png';
            buttonClick.play();
        }
    })

    
});

nextBtn.addEventListener('click', () => {
    updateSong('next');
    playPauseSong();
});
  
prevBtn.addEventListener('click', () => {
    updateSong('prev');
    playPauseSong();
});
  
const updateSong = (action)=> {
    currentSong.pause();
    currentSong.currentTime = 0;

    if(action === 'next'){
        current++;
        if(current > songs.length -1) current = 0;
    }
    if(action === 'prev'){
        current--;
        if(current < 0) current = songs.length - 1;
    }
    currentSong = songs[current].ele;
    songName.textContent = songs[current].audioName;
}
  
const playPauseSong = ()=> {
    if(currentSong.paused){
        currentSong.play();
        playPauseIcon.children[0].src = '../assets/pause.png';
    }
    else {
        currentSong.pause();
        playPauseIcon.children[0].src = '../assets/play.png';
    }
}

setInterval(() =>{
    currentSong.volume = document.getElementById('volumeSlider').value / 100;
}, 100);
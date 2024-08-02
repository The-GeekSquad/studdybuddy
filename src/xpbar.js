import * as Index from './index';

let currentXP = 0;
const maxXP = 100;
let currentLevel = 1;

const auth = Index.auth;
const db = Index.db;

var user;

const notificationAudio = [
    new Audio('../assets/fifteenMinuteAlert.mp3'),
    new Audio('../assets/thirtyMinuteAlert.mp3')
];

Index.onAuthStateChanged(auth, (_user) => {
    user = _user;

    if (!user) {
        document.getElementById('level-text').innerHTML = 'LOGIN TO ACCESS XP';
        document.getElementById('level-text').style.marginLeft = '-80px';
        return;
    }

    syncWithFirebase();
});

function addXP(amount) {
  currentXP += amount;
  if (currentXP >= maxXP) {
    levelUp();
  }
  updateXPBar();
  updateFirebase();
}

async function syncWithFirebase() {
    const xp = Index.doc(db, `xp/${user.uid}`);
    const xpSnapshot = await Index.getDoc(xp);

    currentXP = xpSnapshot.data().xp;
    currentLevel = xpSnapshot.data().level;
    updateXPBar();
}

async function updateFirebase() {
    const xp = Index.doc(db, `xp/${user.uid}`);
    Index.setDoc(xp, {
        xp: currentXP,
        level: currentLevel
    });
}

function updateXPBar() {
  const xpFill = document.getElementById('xp-fill');
//   const xpText = document.getElementById('xp-text');
  
  const percentage = (currentXP / maxXP) * 100;
  xpFill.style.width = percentage + '%';
  document.getElementById('level-text').innerText = `Lv. ${currentLevel}`;
//   xpText.innerText = `XP: ${currentXP}/${maxXP}`;
}

function levelUp() {
  currentLevel++;
  
  showLevelUpImage();
}

function showLevelUpImage(id) {
  setTimeout(() => {
    currentXP = 0;
    updateXPBar();
  }, 3000); // Show the image for 7 seconds
}

function showNotifier(id) {
    const levelUpImage = document.getElementById('level-up-image');
    levelUpImage.children[id].classList.remove('hidden');
    levelUpImage.children[id].play()
    notificationAudio[id].play();

    levelUpImage.children[id].addEventListener('ended', () => {
        levelUpImage.children[id].classList.add('hidden');
    });
}

let canFifteenMinutes = true;
let fifteenMinuteTimer = setInterval(() => {
    if (document.getElementById('displayTime').innerHTML.split(':')[1] == 15
    ||document.getElementById('displayTime').innerHTML.split(':')[1] == 45
    && canFifteenMinutes) {
        if (user) {
            addXP(25);
            showNotifier(0);
        };
        canFifteenMinutes = false;
        setTimeout(() => {
            canFifteenMinutes = true;
        }, 100000);
    }
}, 100);

let canThirtyMinutes = true;
let hourTimer = setInterval(() => {
    if ((document.getElementById('displayTime').innerHTML.split(':')[1] == 30
    || document.getElementById('displayTime').innerHTML.split(':')[1] == 0)
    && document.getElementById('displayTime').innerHTML.split(':')[2] == 0
    && document.getElementById('displayTime').innerHTML.split(':')[0] != 0
    && canThirtyMinutes) {
        if (user) {
            addXP(50);
            showNotifier(1);
        };
        canThirtyMinutes = false;
        setTimeout(() => {
            canThirtyMinutes = true;
        }, 100000);
    }
}, 100);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('timerStart').addEventListener('click', () => {
        notificationAudio.forEach((audio) => {
            audio.volume = 0;
            audio.play();
            setTimeout(() => {
                audio.volume = 0.5;
            }, 5000);
        });
        Array.from(document.getElementById('level-up-image').children).forEach((video) => {
            video.play();
        });
    });
});
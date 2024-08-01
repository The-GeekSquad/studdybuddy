let currentXP = 0;
const maxXP = 100;
let currentLevel = 1;

function addXP(amount) {
  currentXP += amount;
  if (currentXP >= maxXP) {
    levelUp();
  } else {
    updateXPBar();
  }
}

function updateXPBar() {
  const xpFill = document.getElementById('xp-fill');
  const xpText = document.getElementById('xp-text');
  
  const percentage = (currentXP / maxXP) * 100;
  xpFill.style.width = percentage + '%';
  xpText.innerText = `XP: ${currentXP}/${maxXP}`;
}

function levelUp() {
  currentLevel++;
  currentXP = 0;
  document.getElementById('level-text').innerText = `Level: ${currentLevel}`;
  
  showLevelUpImage();
}

function showLevelUpImage() {
  const levelUpImage = document.getElementById('level-up-image');
  levelUpImage.classList.remove('hidden');
  
  setTimeout(() => {
    levelUpImage.classList.add('hidden');
    updateXPBar();
  }, 3000); // Show the image for 7 seconds
}

updateXPBar();

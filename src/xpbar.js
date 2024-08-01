let currentXP = 0;
const maxXP = 100;

function addXP(amount) {
  currentXP += amount;
  if (currentXP > maxXP) currentXP = maxXP;
  
  const xpFill = document.getElementById('xp-fill');
  const xpText = document.getElementById('xp-text');
  
  const percentage = (currentXP / maxXP) * 100;
  xpFill.style.width = percentage + '%';
  xpText.innerText = `XP: ${currentXP}/${maxXP}`;
}

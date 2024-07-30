let currentXP = 0;
let totalXP = 0;
let level = 1;
const maxXP = 100;
const xpToLevelUp = 100;

function updateXPBar() {
    const xpBar = document.getElementById('xp-bar');
    const xpText = document.getElementById('xp-text');
    const levelText = document.getElementById('level-text');
    const totalXPText = document.getElementById('total-xp-text');
    
    xpBar.style.width = (currentXP / maxXP) * 100 + '%';
    xpText.innerText = `${currentXP} / ${maxXP} XP`;
    levelText.innerText = `Level: ${level}`;
    totalXPText.innerText = `Total XP: ${totalXP}`;
}

function addXP(amount) {
    totalXP += amount;
    currentXP += amount;
    
    while (currentXP >= maxXP) {
        currentXP -= maxXP;
        level++;
        maxXP = xpToLevelUp; // You can adjust this if you want more complex leveling up
    }
    
    updateXPBar();
}

function resetXP() {
    currentXP = 0;
    totalXP = 0;
    level = 1;
    updateXPBar();
}

// Initialize the XP bar
updateXPBar();

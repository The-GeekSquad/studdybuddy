let currentXP = 0;
const maxXP = 100;

function updateXPBar() {
    const xpBar = document.getElementById('xp-bar');
    const xpText = document.getElementById('xp-text');
    xpBar.style.width = (currentXP / maxXP) * 100 + '%';
    xpText.innerText = `${currentXP} / ${maxXP} XP`;
}

function addXP(amount) {
    currentXP += amount;
    if (currentXP > maxXP) {
        currentXP = maxXP;
    }
    updateXPBar();
}

function resetXP() {
    currentXP = 0;
    updateXPBar();
}

// Initialize the XP bar
updateXPBar();

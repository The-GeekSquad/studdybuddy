import * as Index from './index';

const auth = Index.auth;
const db = Index.db;

var user;

let currentLevel = 1;

Index.onAuthStateChanged(auth, (_user) => {
    user = _user;

    if (!user) {
        window.location.href = './protected.html';
        return;
    }

    syncWithFirebase();
});

async function syncWithFirebase() {
    const xp = Index.doc(db, `xp/${user.uid}`);
    const xpSnapshot = await Index.getDoc(xp);

    currentLevel = xpSnapshot.data().level;
    document.getElementById('level-text').innerHTML = `You are level ${currentLevel}`;

    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        if (button.dataset.theme === 'default') {
            button.disabled = false;
            return;
        }
        button.disabled = currentLevel < parseInt(button.parentNode.children[1].children[0].innerHTML);
    });
}

async function setThemeFirebase(theme) {
    const themeDoc = Index.doc(db, `theme/${user.uid}`);
    await Index.setDoc(themeDoc, {
        currentTheme: theme
    });

    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-btn');

    // Add event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            setThemeFirebase(button.dataset.theme);
        });
    });
});

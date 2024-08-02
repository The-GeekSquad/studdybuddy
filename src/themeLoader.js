import * as Index from './index';

const auth = Index.auth;
const db = Index.db;

var user;

const themes = {
    'default': '../styles/themes/default.css',
    'lime': '../styles/themes/lime.css',
    'pink': '../styles/themes/pink.css',
    'blues': '../styles/themes/blues.css',
    'tropical': '../styles/themes/tropical.css',
    'sunset-glow': '../styles/themes/sunsetGlow.css',
    'sky': '../styles/themes/sky.css',
    'fresh-breeze': '../styles/themes/freshBreeze.css',
    'ocean': '../styles/themes/ocean.css',
    'autumn': '../styles/themes/autumn.css',
    'morning-hues': '../styles/themes/morningHues.css'
};

var loader;

document.addEventListener("DOMContentLoaded", function() {
    loader = document.body.appendChild(document.querySelector('.loader'));
    document.body.removeChild(loader);
    loader.addEventListener('transitioned', () => {
        
    })
});

Index.onAuthStateChanged(auth, (_user) => {
    user = _user;

    if (!user) {
        loader.classList.add('loader-hidden');
        return;
    }

    syncWithFirebase();
});

async function syncWithFirebase() {
    const themeDoc = Index.doc(db, `theme/${user.uid}`);
    const themeSnap = await Index.getDoc(themeDoc);

    loadTheme(themeSnap.data().currentTheme);
};

function loadTheme(theme) {
    let link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = themes[theme];

    document.getElementsByTagName('head')[0].appendChild(link);

    loader.classList.add('loader-hidden');
}
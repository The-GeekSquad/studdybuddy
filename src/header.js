import * as Index from './index';

var auth = Index.auth;

Index.onAuthStateChanged(auth, (user) => {
    let elementsIn = document.getElementsByClassName('logged-in');
    let elementsOut = document.getElementsByClassName('logged-out');

    for(let i = 0; i < elementsIn.length; i++) {
        elementsIn[i].style.display = user ? "inline" : "none";
    }
    for(let i = 0; i < elementsOut.length; i++) {
        elementsOut[i].style.display = user ? "none" : "inline";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let logOutButton = document.getElementById('logout-button');

    if (logOutButton) {
        logOutButton.addEventListener('click', () => {
            Index.signOut(auth).then(() => {
                window.location.href = '../Index.html';
            }).catch((error) => {
                console.log(error);
            });
        });
    }
});
import { initializeApp } from 'firebase/app';
import { getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQTa3ulEe5m9LgPZfhnreCPH00UpfKT04",
    authDomain: "studdy-buddy-293cb.firebaseapp.com",
    projectId: "studdy-buddy-293cb",
    storageBucket: "studdy-buddy-293cb.appspot.com",
    messagingSenderId: "226611227452",
    appId: "1:226611227452:web:d60715e0bd0201bddc4c39",
    measurementId: "G-JHG92J4V37"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function loginEmailPass(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = '../Index.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById('error').innerText = errorMessage;
    });
}

function signUpEmailPass(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        loginEmailPass(email, password);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById('error').innerText = errorMessage;
    });
}

function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        document.getElementById('error').innerText = "We've sent you a confirmation email. Please check spam and junk mailboxes too!";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById('error').innerText = errorMessage;
    });
}
    
document.addEventListener("DOMContentLoaded", function() {
    let loginForm = document.getElementById('login-form');
    let signUpForm = document.getElementById('signup-form');
    let passResetForm = document.getElementById('pass-reset-form');
    let logOutButton = document.getElementById('logout-button');
        
    if (loginForm) {
        loginForm.addEventListener('submit', () => {
            let formData = new FormData(loginForm);
            
            loginEmailPass(formData.get('email'), formData.get('password'));
        });
    }
    
    if (signUpForm) {
        signUpForm.addEventListener('submit', () => {
            let formData = new FormData(signUpForm);
            
            signUpEmailPass(formData.get('email'), formData.get('password'));
        });
    }

    if (passResetForm) {
        passResetForm.addEventListener('submit', () => {
            let formData = new FormData(passResetForm);
            
            resetPassword(formData.get('email'));
        });
    }
    
    if (logOutButton) {
        logOutButton.addEventListener('click', () => {auth.signOut()});
    }
});
    
onAuthStateChanged(auth, (user) => {
    let elementsIn = document.getElementsByClassName('logged-in');
    let elementsOut = document.getElementsByClassName('logged-out');

    for(let i = 0; i < elementsIn.length; i++) {
        elementsIn[i].style.display = user ? "inline" : "none";
    }
    for(let i = 0; i < elementsOut.length; i++) {
        elementsOut[i].style.display = user ? "none" : "inline";
    }
});

export { app, auth, onAuthStateChanged };
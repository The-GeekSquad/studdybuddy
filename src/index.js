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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export function loginEmailPass(email, password) {
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

export function signUpEmailPass(email, password) {
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

export function resetPassword(email) {
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

export {
    onAuthStateChanged,
    signOut
};
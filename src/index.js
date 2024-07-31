import { initializeApp } from 'firebase/app';
import { getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    collection,
    writeBatch
} from "firebase/firestore";

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
export const db = getFirestore(app);

export function generateUrlParams(page, paramsObject) {
    const params = new URLSearchParams();
    
    for (const key in paramsObject) {
        if (paramsObject.hasOwnProperty(key)) {
            params.append(key, paramsObject[key]);
        }
    }
    
    return(`${page}?${params.toString()}`);
}

export function loginEmailPass(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = '../Index.html';
        })
        .catch((error) => {
            setError(error.message);
        });
}

export function signUpEmailPass(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            loginEmailPass(email, password);
        })
        .catch((error) => {
            setError(error.message);
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


export function logout() {
    signOut(auth)
        .then(() => {
            window.location.href = '/pages/home.html'; // Redirect after successful logout
        })
        .catch((error) => {
            console.error('Logout error:', error.message);
        });
}

export {
    onAuthStateChanged,
    signOut,
    doc,
    addDoc,
    setDoc,
    getDoc,
    deleteDoc,
    getDocs,
    collection,
    writeBatch
};
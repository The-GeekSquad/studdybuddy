import * as Index from './index';

const auth = Index.auth;
const db = Index.db;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var user;
const deckId = urlParams.get('id');
var cards = [];

var shuffle = false;
var currentIndex = -1;

var cardElement;
var rotated = false;

Index.onAuthStateChanged(auth, (_user) => {
    user = _user;

    if (!user) {
        window.location.href = '../pages/home.html';
        return;
    }

    if (!deckId) {
        window.location.href = '../pages/menu.html';
        return;
    }

    fetchFlashcards();
});

document.addEventListener("DOMContentLoaded", function() {
    cardElement = document.getElementById('card');
    const shuffleButton = document.getElementById('shuffle-button');
    const nextButton = document.getElementById('next-button');

    cardElement.addEventListener('click', () => {
        cardElement.classList.toggle('rotated');
        rotated = !rotated;
    });

    shuffleButton.addEventListener('click', () => {
        shuffle = !shuffle;

        shuffleButton.innerHTML = shuffle ? 'Shuffle: On' : 'Shuffle: Off';
    });

    nextButton.addEventListener('click', () => {
        nextFlashcard(!cardElement.classList.contains('rotated'));
    });

    document.getElementById('edit-button').href = Index.generateUrlParams(
        '../pages/flashcardCreator.html',
        {
            'id': deckId
        }
    );
});

async function fetchFlashcards() {
    const deckPath = `flashcards/${user.uid}/decks/${deckId}`;
    const deck = Index.doc(db, deckPath);
    
    let querySnapshot = await Index.getDocs(Index.collection(db, `flashcards/${user.uid}/decks/${deckId}/cards`));
    querySnapshot.forEach((doc) => {
        cards.push([
            doc.data().question,
            doc.data().answer
        ]);
    });

    nextFlashcard(true);
}

function nextFlashcard(disableDelay) {
    if (shuffle) {
        currentIndex = getRandomFlashcard();
    } else {
        currentIndex++;
        if (currentIndex >= cards.length) currentIndex = 0;
    }

    cardElement.classList.remove('rotated');

    setTimeout(function() {
        cardElement.children[0].innerHTML = cards[currentIndex][0];
        cardElement.children[1].innerHTML = cards[currentIndex][1];
    }, disableDelay ? 0 : 200);
}

function getRandomFlashcard() {
    let val = Math.floor(Math.random() * cards.length);

    if (val == currentIndex) {
        return getRandomFlashcard();
    }

    return val;
}